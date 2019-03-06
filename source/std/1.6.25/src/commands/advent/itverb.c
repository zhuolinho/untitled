
/*	program ITVERB.C					*
 *	WARNING: "advent.c" allocates GLOBAL storage space by	*
 *		including "advdef.h".				*
 *		All other modules use "advdec.h".		*/


#include	"stdio.h"	/* drv = 1.1st file 2.def 3.A	 */
#include	"advent.h"
#include	"advdec.h"


/*
  Routines to process intransitive verbs
*/
void itverb()
{
  switch (verb) {
      case DROP:
      case SAY:
      case WAVE:
      case CALM:
      case RUB:
      case THROW:
      case FIND:
      case FEED:
      case BREAK:
      case WAKE:	needobj();	break;
      case TAKE:	ivtake();	break;
      case OPEN:
      case LOCK:	ivopen();	break;
      case NOTHING:	rspeak(54);	break;
      case ON:
      case OFF:
      case POUR:	trverb();	break;
      case WALK:	actspk(verb);	break;
      case KILL:	ivkill();	break;
	/* Case EAT: iveat(); break; */
      case DRINK:	ivdrink();	break;
      case QUIT:	ivquit();	break;
	/* Case FILL: ivfill(); break; */
      case BLAST:	vblast();	break;
      case SCORE:	score();	break;
      case FOO:	ivfoo();	break;
      case SUSPEND:	g.saveflg = 1;	break;
      case INVENTORY:	inventory();	break;
      default:
	printf("This intransitive not implemented yet\n");
  }
}

/*
  CARRY, TAKE etc.
*/
void ivtake()
{
  int anobj, item;

  anobj = 0;
  for (item = 1; item < MAXOBJ; ++item) {
	if (g.place[item] == g.loc) {
		if (anobj != 0) {
			needobj();
			return;
		}
		anobj = item;
	}
  }
  if (anobj == 0 || (dcheck() && g.dflag >= 2)) {
	needobj();
	return;
  }
  object = anobj;
  vtake();
}

/*
  OPEN, LOCK, UNLOCK
*/
void ivopen()
{
  if (here(CLAM)) object = CLAM;
  if (here(OYSTER)) object = OYSTER;
  if (at(DOOR)) object = DOOR;
  if (at(GRATE)) object = GRATE;
  if (here(CHAIN)) {
	if (object != 0) {
		needobj();
		return;
	}
	object = CHAIN;
  }
  if (object == 0) {
	rspeak(28);
	return;
  }
  vopen();
}

/*
  ATTACK, KILL etc
*/
void ivkill()
{
  g.object1 = 0;
  if (dcheck() && g.dflag >= 2) object = DWARF;
  if (here(SNAKE)) addobj(SNAKE);
  if (at(DRAGON) && g.prop[DRAGON] == 0) addobj(DRAGON);
  if (at(TROLL)) addobj(TROLL);
  if (here(BEAR) && g.prop[BEAR] == 0) addobj(BEAR);
  if (g.object1 != 0) {
	needobj();
	return;
  }
  if (object != 0) {
	vkill();
	return;
  }
  if (here(BIRD) && verb != THROW) object = BIRD;
  if (here(CLAM) || here(OYSTER)) addobj(CLAM);
  if (g.object1 != 0) {
	needobj();
	return;
  }
  vkill();
}

/*
  EAT
*/
/*  no more room...
void iveat()
{
  if(!here(FOOD))
	needobj();
  else {
	object=FOOD;
	veat();
  }
}
*/

/*
  DRINK
*/
void ivdrink()
{
  if (liqloc(g.loc) != WATER &&
      (liq() != WATER || !here(BOTTLE)))
	needobj();
  else {
	object = WATER;
	vdrink();
  }
}

/*
  QUIT
*/
void ivquit()
{
  if (g.gaveup = yes(22, 54, 54)) normend();
}

/*
  FILL
*/
/*  no room...
void ivfill()
{
  if(!here(BOTTLE))
	needobj();
  else {
	object=BOTTLE;
	vfill();
  }
}
*/

/*
  Handle fee fie foe foo...
*/
void ivfoo()
{
  char k;
  int msg;

  k = vocab(word1, 3000);
  msg = 42;
  if (g.foobar != 1 - k) {
	if (g.foobar != 0) msg = 151;
	rspeak(msg);
	return;
  }
  g.foobar = k;
  if (k != 4) return;
  g.foobar = 0;
  if (g.place[EGGS] == 92 ||
      (toting(EGGS) && g.loc == 92)) {
	rspeak(msg);
	return;
  }
  if (g.place[EGGS] == 0 && g.place[TROLL] == 0 &&
      g.prop[TROLL] == 0)
	g.prop[TROLL] = 1;
  if (here(EGGS))
	k = 1;
  else if (g.loc == 92)
	k = 0;
  else
	k = 2;
  move(EGGS, 92);
  pspeak(EGGS, k);
  return;
}

/*
  read etc...
*/
/*  no room for this...
void ivread()
{
  if (here(MAGAZINE)) object = MAGAZINE;
  if (here(TABLET)) object = object*100 + TABLET;
  if (here(MESSAGE)) object = object*100 + MESSAGE;
  if (object > 100 || object == 0 || dark()) {
	needobj();
	return;
  }
  vread();
}
*/

/*
  INVENTORY
*/
void inventory()
{
  int msg, i;

  msg = 98;
  for (i = 1; i <= MAXOBJ; ++i) {
	if (i == BEAR || !toting(i)) continue;
	if (msg) rspeak(99);
	msg = 0;
	pspeak(i, -1);
  }
  if (toting(BEAR)) msg = 141;
  if (msg) rspeak(msg);
}

/*
  ensure uniqueness as objects are searched
  out for an intransitive verb
*/
void addobj(obj)
int obj;
{
  if (g.object1 != 0) return;
  if (object != 0) {
	g.object1 = -1;
	return;
  }
  object = obj;
}
