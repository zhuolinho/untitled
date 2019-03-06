/*
  (c) copyright 1988 by the Vrije Universiteit, Amsterdam, The Netherlands.
  See the copyright notice in the ACK home directory, in the file "Copyright".
*/

/* $Header: mlf8.c,v 1.3 88/07/25 10:44:01 ceriel Exp $ */

/*
 * Multiply Double Precision Float (MLF 8)
 */

#include	"FP_types.h"

DOUBLE
mlf8(s2,s1)
DOUBLE	s1,s2;
{
	EXTEND	e1,e2;

	extend(&s1.d[0],&e1,sizeof(DOUBLE));
	extend(&s2.d[0],&e2,sizeof(DOUBLE));
		/* do a multiply */
	mul_ext(&e1,&e2);
	compact(&e1,&s1.d[0],sizeof(DOUBLE));
	return(s1);
}
