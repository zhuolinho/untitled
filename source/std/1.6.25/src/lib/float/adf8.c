/*
  (c) copyright 1988 by the Vrije Universiteit, Amsterdam, The Netherlands.
  See the copyright notice in the ACK home directory, in the file "Copyright".
*/

/* $Header: adf8.c,v 1.6 89/07/25 14:17:39 ceriel Exp $ */

/*
	ADD TWO FLOATS - DOUBLE (ADF 8)
*/

#include	"FP_types.h"

DOUBLE
adf8(s2,s1)
DOUBLE	s1,s2;
{
	EXTEND	e1,e2;

	if (s1.d[0] == 0 && s1.d[1] == 0) {
		s1 = s2;
		return s1;
	}
	if (s2.d[0] == 0 && s2.d[1] == 0) {
		return s1;
	}

	extend(&s1.d[0],&e1,sizeof(DOUBLE));
	extend(&s2.d[0],&e2,sizeof(DOUBLE));
	add_ext(&e1,&e2);
	compact(&e1,&s1.d[0],sizeof(DOUBLE));
	return s1;
}
