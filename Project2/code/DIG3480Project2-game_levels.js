var GAME_LEVELS = [
  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                  xxx           ",
   "                                                   xx      xx    xx!xx          ",
   "                                    o o      xx                  x!!!x          ",
   "                                                                 xx!xx          ",
   "                                   xxxxx                          xvx           ",
   "                                                                            xx  ",
   "  xx                                      o o                                x  ",
   "  x                     o                                                    x  ",
   "  x                                      xxxxx                             o x  ",
   "  x          xxxx       o                                                    x  ",
   "  x  @       x  x                                                xxxxx       x  ",
   "  xxxxxxxxxxxx  xxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx     xxxxxxx   xxxxxxxxx  ",
   "                              x   x                  x     x                    ",
   "                              x!!!x                  x!!!!!x                    ",
   "                              x!!!x                  x!!!!!x                    ",
   "                              xxxxx                  xxxxxxx                    ",
   "                                                                                ",
   "                                                                                "],
  ["                                      x!!x                        xxxxxxx                                    x!x  ",
   "                                      x!!x    *                xxxx     xxxx                                 x!x  ",
   "                                      x!!xxxxxxxxxx           xx           xx                                x!x  ",
   "                                      xx!!!!!!!!!!xx         xx             xx                               x!x  ",
   "                                       xxxxxxxxxx!!x         x                                    o   o   o  x!x  ",
   "                                                xx!x         x     o   o                                    xx!x  ",
   "                                                 x!x         x                                xxxxxxxxxxxxxxx!!x  ",
   "                                                 xvx         x     x   x                        !!!!!!!!!!!!!!xx  ",
   "                                                             xx  |   |   |  xx            xxxxxxxxxxxxxxxxxxxxx   ",
   "                                                              xx!!!!!!!!!!!xx            v                        ",
   "                  o                                            xxxx!!!!!xxxx                                      ",
   "                                               x     x            xxxxxxx        xxx         xxx                  ",
   "                 xx                            x     x                           x x         x x                  ",
   "                                               x     x                             x         x                    ",
   "               *                               x     x                             xx        x                    ",
   "                                               xx    x                             x         x                    ",
   "                                      *        x     x      o  o     x   x         x         x                    ",
   "               xxxxxxx        xxx   xxx        x     x               x   x         x         x                    ",
   "              xx     xx         x   x          x     x     xxxxxx    x   x   xxxxxxxxx       x                    ",
   "             xx       xx        x o x          x    xx               x   x   x               x                    ",
   "     @       x         x        x   x          x     x               x   x   x               x                    ",
   "    xxx      x         x        x   x          x     x               x   xxxxx   xxxxxx      x                    ",
   "    x x      x         x       xx o xx         x     x               x     o     x x         x                    ",
   "!!!!x x!!!!!!x         x!!!!!!xx     xx!!!!!!!!xx    x!!!!!!!!!!     x     =     x x         x                    ",
   "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxx     x!!!!!!!xx!     xxxxxxxxxxxxx xx  o o  xx                    ",
   "!!!!x x!!!!!!x         x!!!!!x    o                 xx!!!!!!xx !                    xx     xx                     ",
   "!!!!x x!!!!!!x         x!!!!!x                     xx!!!!!!xx  !                     xxxxxxx                      ",
   "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxxxxxx!!!!!!xx   !                                                  ",
   "!!!!x x!!!!!!x         x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx    !                                                  ",
   "!!!!x x!!!!!!x         x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     !                                                  "],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                        o                                                                     ",
   "                                                                                                              ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                       xxx                                                                    ",
   "                                       x x                 !!!        !!!  xxx                                ",
   "                                       x x                 !x!        !x!                                     ",
   "                                     xxx xxx                x          x                                      ",
   "                                      x   x                 x   oooo   x       xxx                            ",
   "                                      x   x                 x          x      x!!!x                           ",
   "                                      x   x                 xxxxxxxxxxxx       xxx                            ",
   "                                     xx   xx      x   x      x                                                ",
   "                                      x   xxxxxxxxx   xxxxxxxx              x x                               ",
   "                                      x   x           x                    x!!!x                              ",
   "                                      x   x           x                     xxx                               ",
   "                                     xx   xx          x                                                       ",
   "                                      x   x= = = =    x            xxx                                        ",
   "                                      x   x           x           x!!!x                                       ",
   "                                      x   x    = = = =x     o      xxx       xxx                              ",
   "                                     xx   xx          x                     x!!!x                             ",
   "                              o   o   x   x           x     x                xxv        xxx                   ",
   "                                      x   x           x              x                 x!!!x                  ",
   "                             xxx xxx xxx xxx     o o  x!!!!!!!!!!!!!!x                   vx                   ",
   "                             x xxx x x xxx x          x!!!!!!!!!!!!!!x                                        ",
   "                             x             x   xxxxxxxxxxxxxxxxxxxxxxx                                        ",
   "                             xx           xx                                         xxx                      ",
   "  xxx                         x     x     x                                         x!!!x                xxx  ",
   "  x x                         x    xxx    x                                          xxx                 x x  ",
   "  x                           x    xxx    xxxxxxx                        xxxxx                             x  ",
   "  x                 o o       x           x                              x   x                             x  ",
   "  x                           xx          x                              x x x                             x  ",
   "  x                                       x       |xxxx|    |xxxx|     xxx xxx                             x  ",
   "  x               *xxx             o o    x                              x         xxx                     x  ",
   "  x               xxxxx       xx          x                             xxx       x!!!x          x         x  ",
   "  x               oxxxo       x    xxx    x                             x x        xxx          xxx        x  ",
   "  x                xxx        xxxxxxxxxxxxx  x oo x    x oo x    x oo  xx xx                    xxx        x  ",
   "  x   *  @          x   *     x           x!!x    x!!!!x    x!!!!x    xx   xx                    x         x  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "                                                                                                              ",
   "                                                                                                              "],
  ["                                                                                                  xxx x       ",
   "                                                                                                      x       ",
   "                                                                                                  xxxxx       ",
   "                                                                                                  x           ",
   "                                                                                                  x xxx       ",
   "                          o                                                                       x x x       ",
   "                                                                              * * *          o o oxxx x       ",
   "                   xxx                                                                                x       ",
   "       !  o  !                                                xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx       ",
   "       x     x                                                x   x x   x x   x x   x x   x x   x x           ",
   "       x= o  x            x                                   xxx x xxx x xxx x xxx x xxx x xxx x xxxxx       ",
   "       x     x                                                  x x   x x   x x   x x   x x   x x     x       ",
   "       !  o  !            o                                  xxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxxxx       ",
   "                                                                                                              ",
   "          o              xxx                              xx                                                  ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                      xx                                                      ",
   "                   xxx         xxx                                                                            ",
   "                                                                                                              ",
   "                          o                                                     x      x                      ",
   "                                 *                        xx     xx                                           ",
   "             xxx         xxx         xxx                                 x                  x                 ",
   "                                                                                                              ",
   "                                                                 ||                                           ",
   "  xxxxxxxxxxx        *                                                                                        ",
   "  x         x o xxxxxxxxx o xxxxxxxxx o xx                                                x                   ",
   "  x         x   x       x   x       x   x                 ||                  x     x                         ",
   "  x  @      xxxxx   o   xxxxx   o   xxxxx                                                                     ",
   "  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ",
   "        x=                  =                =x   x                     xxx                                   ",
   "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "]
  ["                                                                           o    ",
   "                                                             o                  ",
   "                                                                                ",
   "                                                                   o          x ",
   "                                                           o                    ",
   "                                                                                ",
   "                                                                 x!!!x          ",
   "                     o                                     xx    xx!xx          ",
   "                     o   o          o o      xx                  x!!!x          ",
   "                     o                                      o    xx!xx          ",
   "                *          o       xxxxx           xx       x     xvx           ",
   "             xxxx                                                           xx  ",
   "             x  x              xx         o o           xx      x!!x         x  ",
   "             x  x       o                                       xxxx         x  ",
   "                                         x           xxx                   o x  ",
   "             x  x       o    xx                                              x  ",
   "     @       x  x             *              *                *  xxxxx       x  ",
   "  xxxxxxxxxxxx  xxxxx   xxxxxxx         xxxxxxxxxxxxxx     xxxxxxx   xxxxxxxxx  ",
   "                              x         o            x     x                    ",
   "                              x         o         o  x!!!!!x                    ",
   "             x!!!x             x                      x!!!!!x                   ",
   "             xxxxx  x!!!!!x    x!!!!!!!!xxxx         xx!!!!!x                   ",
   "                   xxxxxxx    xxxxxxxxxxx      xx   xx!!!!!x                    ",
   "                                                    xxxxxxxx                    "],
  ["                                                                                ",
   "                            o o o o                                             ",
   "                                                                                ",
   "                        xx                                                      ",
   "                                                                                ",
   "                                 xx                                             ",
   "                                                                                ",
   "                                                           xx                   ",
   "                            xxxxxxx                 xx                          ",
   "                 o                                           o                  ",
   "                                                   xx       x                   ",
   "                   o                                                        xx  ",
   "                                      o o    *      xx          o            x  ",
   "              x      o                                                       x  ",
   "                  x                       x           xxx     o   o        o x  ",
   "            x        o    xx                                      x          x  ",
   "     @     *           *                                x     x              x  ",
   "  xxxxxxxxxxxxxxxxx   xxxxxxx         xxxxx    xxxxx     xxxx       xxx  xxx    ",
   "                                        o     x      x     x                    ",
   "                                        o    x    o                             ",
   "             x!!!x                  o      x                                    ",
   "             xxxxx                    o                                         ",
   "                                                                                ",
   "                                    xxx                                         "],
  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                         o o   o                ",
   "                                                                                ",
   "                o                                      o     x   o              ",
   "                                o                                               ",
   "              x                                     xx                          ",
   "                 o                                                 x            ",
   "           o                                                                    ",
   "                           x        x                                           ",
   "                                      o o                                       ",
   "              x                                                                 ",
   "                  x                       x                   o   o             ",
   "            x        o    xx                                      x             ",
   "     @                                                *  x     x                 ",
   "  xxxx   xx      xxxx      x     x      x          xxxxxxxxx      xxxx     xxxxx",
   "                                        o                                       ",
   "                           x!!!!!x        o        o                            ",
   "             x!!!x         xxxxxxx  o            xx               x!!!!!!!!x    ",
   "             xxxxx                    o       x!!!!!!x            xxxxxxxxxx    ",
   "                                              xxxxxxxx                          ",
   "                                    xxx                                         "],
];


if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
