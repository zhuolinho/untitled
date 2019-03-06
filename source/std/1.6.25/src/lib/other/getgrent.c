/*
 * getgrent - get entry form group file
 *
 * Author: Patrick van Kleef
 */
/* $Header: getgrent.c,v 1.3 90/01/22 11:43:16 eck Exp $ */

#include	<sys/types.h>
#include	<stdlib.h>
#include	<string.h>
#include	<fcntl.h>
#include	<grp.h>

#ifdef _ANSI
off_t _lseek(int d, off_t offset, int whence);
ssize_t _read(int d, char *buf, size_t nbytes);
int _close(int d);
#endif

#define	RBUFSIZE	1024
static char _gr_file[] = "/etc/group";
static char _grbuf[256];
static char _buffer[RBUFSIZE];
static char *_pnt;
static char *_buf;
static int  _gfd = -1;
static int  _bufcnt;
static struct group grp;

int
setgrent(void)
{
        if (_gfd >= 0)
	        _lseek(_gfd, 0L, 0);
        else
	        _gfd = open(_gr_file, O_RDONLY);

        _bufcnt = 0;
        return _gfd;
}

void
endgrent(void) 
{
        if (_gfd >= 0)
	        _close(_gfd);

        _gfd = -1;
        _bufcnt = 0;
}


static int
getline(void) 
{
        if (_gfd < 0 && setgrent() < 0)
	        return 0;

        _buf = _grbuf;
        do {
	        if (--_bufcnt <= 0){
	                if ((_bufcnt = _read(_gfd, _buffer, RBUFSIZE)) <= 0)
		                return 0;
	                else
		                _pnt = _buffer;
		}
	        *_buf++ = *_pnt++;
        } while (*_pnt != '\n');
        _pnt++;
        _bufcnt--;
        *_buf = 0;
        _buf = _grbuf;
        return 1;
}

static void
skip_period(void) 
{
        while (*_buf && *_buf != ':')
	        _buf++;
        *_buf++ = '\0';
}

struct group *
getgrent(void) 
{
        if (getline() == 0)
               return 0;

        grp.gr_name = _buf;
        skip_period();
        grp.gr_passwd = _buf;
        skip_period();
        grp.gr_gid = atoi(_buf);
        skip_period();
        return &grp;
}

struct group *
getgrnam(name)
_CONST char *name;
{
        struct group *grp;

        setgrent();
        while ((grp = getgrent()) != 0)
	        if (!strcmp(grp -> gr_name, name))
	                break;
        endgrent();
        if (grp != 0)
	        return grp;
        else
	        return 0;
}

struct group *
getgrgid(gid)
int gid;
{
        struct group   *grp;

        setgrent();
        while ((grp = getgrent()) != 0)
	        if (grp -> gr_gid == gid)
	                break;
        endgrent();
        if (grp != 0)
	        return grp;
        else
	        return 0;
}
