/*
  (c) copyright 1988 by the Vrije Universiteit, Amsterdam, The Netherlands.
  See the copyright notice in the ACK home directory, in the file "Copyright".
*/

/* $Header: cuf8.c,v 1.5 89/07/25 14:19:05 ceriel Exp $ */

/*
	CONVERT INTEGER TO FLOAT (CUF n 8)

	THIS ROUTINE WORKS BY FILLING AN EXTENDED
	WITH THE INTEGER VALUE IN EXTENDED FORMAT
	AND USES COMPACT() TO PUT IT INTO THE PROPER
	FLOATING POINT PRECISION.
*/

#include "FP_types.h"

DOUBLE
cuf8(ss,src)
int	ss;	/* source size */
long	src;	/* largest possible integer to convert */
{
	EXTEND	buf;
	short	*ipt;
	long	i_src;

	zrf_ext(&buf);
	if (ss == sizeof(long))	{
		buf.exp = 31;
		i_src = src;
	}
	else	{
		ipt = (short *) &src;
		i_src = (long) *ipt;
		buf.exp = 15;
	}
	if (i_src == 0)	{
		zrf8((DOUBLE *)((void *)&ss));
		return(*((DOUBLE *) (void *)&ss));
	}
			/* ESTABLISHED THAT src != 0	*/

			/* adjust exponent field	*/
	if (ss != sizeof(long))
		i_src <<= 16;

			/* move to mantissa field	*/
	buf.m1 = i_src;

			/* adjust mantissa field	*/
	nrm_ext(&buf);
	compact(&buf,(unsigned long *) (void *)&ss,8);
	return(*((DOUBLE *) (void *)&ss));
}
