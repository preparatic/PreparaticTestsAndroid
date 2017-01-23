/*******************************************************************************
 * Copyright (c) 2013, 2016 Prepartic and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();
var preguntaids = new Array();
var blocks = new Array();
//  Id pregunta: 5412 Año de creación de pregunta: 2006
 questions[0]= "1)  Indique la tecnolog&iacute;a de transmisi&oacute;n que utiliza el est&aacute;ndar 802.16a del IEEE:";
 choices[0]= new Array();
 choices[0][0] = "DSSS";
 choices[0][1] = "FHSS";
 choices[0][2] = "OFDM";
 choices[0][3] = "DWDM";
 answers[0] = 2;
 units[0] = ['108'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 5412. ";
 preguntaids[0] = 5412


//  Id pregunta: 5893 Año de creación de pregunta: 2007
 questions[1]= "2)  Seg&uacute;n La t&eacute;cnica de estimaci&oacute;n Mark II de Puntos Funci&oacute;n, a cada atributo se le asigna un valor entre:";
 choices[1]= new Array();
 choices[1][0] = "1 y 5.";
 choices[1][1] = "1 y 8.";
 choices[1][2] = "0 y 8.";
 choices[1][3] = "0 y 5.";
 answers[1] = 3;
 units[1] = ['33'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 5893. Castilla la Mancha B 2006";
 preguntaids[1] = 5893


//  Id pregunta: 3254 Año de creación de pregunta: 2003
 questions[2]= "3)  En los lenguajes de marca, HTML y XML, las etiquetas finales se representan con la siguiente simbolog&iacute;a, donde TITLE es el texto que indica la etiqueta";
 choices[2]= new Array();
 choices[2][0] = "&lt;/TITLE&gt;";
 choices[2][1] = "&lt;TITLE&gt;";
 choices[2][2] = "/&lt;TITLE&gt;";
 choices[2][3] = "/TITLE";
 answers[2] = 0;
 units[2] = ['74'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 3254. ";
 preguntaids[2] = 3254


//  Id pregunta: 6948 Año de creación de pregunta: 2010
 questions[3]= "4)  El Real Decreto 1671/2009 tiene como &aacute;mbito";
 choices[3]= new Array();
 choices[3][0] = "La Administraci&oacute;n General del Estado";
 choices[3][1] = "La Administraci&oacute;n General del Estado, as&iacute; como los organismos vinculados o dependientes de &eacute;sta";
 choices[3][2] = "La Administraci&oacute;n General del Estado, los organismos vinculados o dependientes de &eacute;sta, las Comunidades Aut&oacute;nomas y los Entes Locales";
 choices[3][3] = "Todas las Administraciones P&uacute;blicas";
 answers[3] = 1;
 units[3] = ['19'];
 blocks[3] = ['A4'];
 comments[3] = "Id Pregunta: 6948. Articulo 1";
 preguntaids[3] = 6948


//  Id pregunta: 3342 Año de creación de pregunta: 2004
 questions[4]= "5)  Seg&uacute;n la Ley de Servicios de la Siciedad d ela Informaci&oacute;n y Comercio electr&oacute;nico, la resistencia a la inspecci&oacute;n de los funcionarios, &iquest;c&oacute;mo est&aacute; considerada?";
 choices[4]= new Array();
 choices[4][0] = "Infracci&oacute;n muy grave";
 choices[4][1] = "Infracci&oacute;n grave";
 choices[4][2] = "Infracci&oacute;n leve";
 choices[4][3] = "No se considera infracci&oacute;n";
 answers[4] = 1;
 units[4] = ['19'];
 blocks[4] = ['A4'];
 comments[4] = "Id Pregunta: 3342. Ley 34/2002, art&iacute;culo 38";
 preguntaids[4] = 3342


//  Id pregunta: 167 Año de creación de pregunta: 2016
 questions[5]= "6)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[5]= new Array();
 choices[5][0] = "18 miembros.";
 choices[5][1] = "Ninguna es correcta.";
 choices[5][2] = "22 miembros.";
 choices[5][3] = "21 miembros.";
 answers[5] = 1;
 units[5] = ['5'];
 blocks[5] = ['A1'];
 comments[5] = "Id Pregunta: 167. Uni&oacute;n Europea";
 preguntaids[5] = 167


//  Id pregunta: 4619 Año de creación de pregunta: 2002
 questions[6]= "7)  &iquest;Qu&eacute; nivel del modelo OSI subdividen los subniveles LLC y MAC especificados por el IEEE?:";
 choices[6]= new Array();
 choices[6][0] = "El nivel f&iacute;sico";
 choices[6][1] = "El nivel de enlace";
 choices[6][2] = "El nivel de red";
 choices[6][3] = "El nivel de transporte";
 answers[6] = 1;
 units[6] = ['105'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 4619. ";
 preguntaids[6] = 4619


//  Id pregunta: 1463 Año de creación de pregunta: 2016
 questions[7]= "8)  Se&ntilde;ale cual de los siguientes lenguajes de programaci&oacute;n NO es orientado a objetos:";
 choices[7]= new Array();
 choices[7][0] = "XBase++";
 choices[7][1] = "VB.NET";
 choices[7][2] = "Eiffel";
 choices[7][3] = "Prolog";
 answers[7] = 3;
 units[7] = ['84'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 1463. ";
 preguntaids[7] = 1463


//  Id pregunta: 8979 Año de creación de pregunta: 2013
 questions[8]= "9)  Seg&uacute;n la LSSI,  Los prestadores de servicios de la sociedad de la informaci&oacute;n que faciliten enlaces a otros contenidos o incluyan en los suyos directorios o instrumentos de b&uacute;squeda de contenidos no ser&aacute;n responsables por la informaci&oacute;n a la que dirijan a los destinatarios de sus servicios, siempre que";
 choices[8]= new Array();
 choices[8][0] = "No tengan conocimiento efectivo de que la actividad o la informaci&oacute;n a la que remiten o recomiendan es il&iacute;cita o de que lesiona bienes o derechos de un tercero susceptibles de indemnizaci&oacute;n";
 choices[8][1] = "A&uacute;n teniendo conocimiento de lo estipulado en la respuesta a), act&uacute;en con diligencia para suprimir o inutilizar el enlace correspondiente.";
 choices[8][2] = "Las respuestas a) y b) son correctas";
 choices[8][3] = "Ninguna de las anteriores";
 answers[8] = 2;
 units[8] = ['19'];
 blocks[8] = ['A4'];
 comments[8] = "Id Pregunta: 8979. Ley 34/2002, art&iacute;culo 17";
 preguntaids[8] = 8979


//  Id pregunta: 1950 Año de creación de pregunta: 2016
 questions[9]= "10)  En relaci&oacute;n con la metodolog&iacute;a &aacute;gil de desarrollo de software. &iquest;cu&aacute;l de las siguientes afirmaciones NO es correcta?:";
 choices[9]= new Array();
 choices[9][0] = "Prioriza la generaci&oacute;n de documentaci&oacute;n t&eacute;cnica.";
 choices[9][1] = "Se desarrolla software en breves lapsos de tiempo.";
 choices[9][2] = "Promueve iteraciones en el desarrollo.";
 choices[9][3] = "Intenta satisfacer al cliente mediante la entrega temprana y continua de software.";
 answers[9] = 0;
 units[9] = ['84'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 1950. ";
 preguntaids[9] = 1950


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[10]= new Array();
 choices[10][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[10][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[10][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[10][3] = "La tasa de desempleo ronda el 20%";
 answers[10] = 2;
 units[10] = ['12'];
 blocks[10] = ['A3'];
 comments[10] = "Id Pregunta: 346. Modelo econ&oacute;mico";
 preguntaids[10] = 346


//  Id pregunta: 429 Año de creación de pregunta: 2016
 questions[11]= "12)  No es competencia del Servicio P&uacute;blico de Empleo Estatal";
 choices[11]= new Array();
 choices[11][0] = "Elaborar y elevar al Ministerio de Empleo y Seguridad Social las propuestas normativas de &aacute;mbito estatal en materia de empleo que procedan.";
 choices[11][1] = "Elaborar el proyecto de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo y de los Planes Anuales de Pol&iacute;tica de Empleo en colaboraci&oacute;n con las comunidades aut&oacute;nomas.";
 choices[11][2] = "Gestionar el Observatorio de las Relaciones Laborales del Servicio P&uacute;blico de Empleo Estatal";
 choices[11][3] = "Coordinar las actuaciones conjuntas de los servicios p&uacute;blicos de empleo en el desarrollo del Sistema de Informaci&oacute;n de los Servicios P&uacute;blicos de Empleo.";
 answers[11] = 2;
 units[11] = ['15'];
 blocks[11] = ['A3'];
 comments[11] = "Id Pregunta: 429. Modelo econ&oacute;mico";
 preguntaids[11] = 429


//  Id pregunta: 1284 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l es el &aacute;mbito del Registro Electr&oacute;nico Com&uacute;n?";
 choices[12]= new Array();
 choices[12][0] = "Todas las Administraciones P&uacute;blicas,";
 choices[12][1] = "La Administraci&oacute;n General del Estado y la Administraci&oacute;n Auton&oacute;mica.";
 choices[12][2] = "La Administraci&oacute;n General del Estado y los Organismos P&uacute;blicos adscritos o dependientes de la misma.";
 choices[12][3] = "La Secretaria de Estado de Administraciones P&uacute;blicas, como responsable de su gesti&oacute;n.";
 answers[12] = 2;
 units[12] = ['47'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 1284. ";
 preguntaids[12] = 1284


//  Id pregunta: 6628 Año de creación de pregunta: 2009
 questions[13]= "14)  El derecho de acceso al que se refiere el Art. 15 de la LOPD s&oacute;lo podr&aacute; ser ejercitado a intervalos de";
 choices[13]= new Array();
 choices[13][0] = "12 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto en cuyo caso podr&aacute; ejercerlo en el plazo de 6 meses";
 choices[13][1] = "12 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto en cuyo caso podr&aacute; ejercerlo antes";
 choices[13][2] = "6 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto en cuyo caso podr&aacute; ejercerlo en el plazo de 2 meses";
 choices[13][3] = "10 d&iacute;as";
 answers[13] = 1;
 units[13] = ['35'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 6628. ";
 preguntaids[13] = 6628


//  Id pregunta: 5604 Año de creación de pregunta: 2007
 questions[14]= "15)  Dentro de las t&eacute;cnicas de planificaci&oacute;n de proyectos, podr&iacute;amos decir que una actividad es cr&iacute;tica si:";
 choices[14]= new Array();
 choices[14][0] = "No se puede cambiar sus instantes de comienzo y finalizaci&oacute;n sin modificar Ia duraci&oacute;n total del proyecto.";
 choices[14][1] = "Es la m&aacute;s corta del proyecto.";
 choices[14][2] = "Indica el fin de Ia fase de verificaci&oacute;n y el inicio de Ia fase de validaci&oacute;n.";
 choices[14][3] = "Requiere el mayor n&uacute;mero de recursos humanos para ser realizada.";
 answers[14] = 0;
 units[14] = ['33'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 5604. Castilla la mancha 2006";
 preguntaids[14] = 5604


//  Id pregunta: 8426 Año de creación de pregunta: 2011
 questions[15]= "16)  Seg&uacute;n la ley 18/2011, las Administraciones competentes en materia de justicia asegurar&aacute;n el acceso de todos los ciudadanos a los servicios electr&oacute;nicos proporcionados en su &aacute;mbito a trav&eacute;s de un sistema de varios canales que cuente, al menos, con ciertos medios. Se&ntilde;ale cual no es uno de ellos.";
 choices[15]= new Array();
 choices[15][0] = "Servicios de atenci&oacute;n telef&oacute;nica";
 choices[15][1] = "Las principales p&aacute;ginas web de la Administraci&oacute;n de Justicia";
 choices[15][2] = "Puntos de informaci&oacute;n electr&oacute;nicos, ubicados en los edificios judiciales";
 choices[15][3] = "Las oficinas de informaci&oacute;n y atenci&oacute;n al p&uacute;blico";
 answers[15] = 1;
 units[15] = ['2'];
 blocks[15] = ['A1'];
 comments[15] = "Id Pregunta: 8426. ";
 preguntaids[15] = 8426


//  Id pregunta: 1019 Año de creación de pregunta: 2016
 questions[16]= "17)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado, la suplencia del Delegado del Gobierno corresponder&aacute; a:";
 choices[16]= new Array();
 choices[16][0] = "el Secretario General";
 choices[16][1] = "el Subdirector General";
 choices[16][2] = "el Secretario de Estado";
 choices[16][3] = "ninguna es correcta";
 answers[16] = 0;
 units[16] = ['4', '7', '8', '9'];
 blocks[16] = ['A1', 'A2'];
 comments[16] = "Id Pregunta: 1019. Ley 40/2015";
 preguntaids[16] = 1019


//  Id pregunta: 6493 Año de creación de pregunta: 2003
 questions[17]= "18)  Se&ntilde;ale la respuesta falsa sobre las redes neuronales";
 choices[17]= new Array();
 choices[17][0] = "Las redes de neuronas son un modelo de representaci&oacute;n del conocimiento de forma simb&oacute;lica";
 choices[17][1] = "Las neuronas se unen entre s&iacute; para formar una red. La fuerza de la uni&oacute;n se valora mediante un peso";
 choices[17][2] = "Para un funcionamiento correcto de la red es necesaria una fase previa de entrenamiento";
 choices[17][3] = "Un algoritmo muy utilizado para entrenar las redes es la retropropagaci&oacute;n";
 answers[17] = 0;
 units[17] = ['67'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 6493. ";
 preguntaids[17] = 6493


//  Id pregunta: 7122 Año de creación de pregunta: 2010
 questions[18]= "19)  La creaci&oacute;n de sellos electr&oacute;nicos se realizar&aacute;, seg&uacute;n lo dispuesto en el RD 1671/2009, mediante...";
 choices[18]= new Array();
 choices[18][0] = "Orden del Ministerio de Presidencia";
 choices[18][1] = "Resoluci&oacute;n del Ministro o titular del organismo p&uacute;blico competente";
 choices[18][2] = "Orden del Ministerio o titular del organismo p&uacute;blico competente";
 choices[18][3] = "Resoluci&oacute;n de la Subsecretar&iacute;a del Ministerio o titular del organismo p&uacute;blico competente";
 answers[18] = 3;
 units[18] = ['7'];
 blocks[18] = ['A2'];
 comments[18] = "Id Pregunta: 7122. Art&iacute;culo 19 RD 1671/2009";
 preguntaids[18] = 7122


//  Id pregunta: 7117 Año de creación de pregunta: 2010
 questions[19]= "20)  El &aacute;mbito de aplicaci&oacute;n de una sede electr&oacute;nica podr&aacute; ser:";
 choices[19]= new Array();
 choices[19][0] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de subdirecci&oacute;n general.";
 choices[19][1] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de direcci&oacute;n general.";
 choices[19][2] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de secretar&iacute;a de estado.";
 choices[19][3] = "La totalidad del Ministerio u organismo p&uacute;blico.";
 answers[19] = 1;
 units[19] = ['7'];
 blocks[19] = ['A2'];
 comments[19] = "Id Pregunta: 7117. Art&iacute;culo 3.2 RD 1671/2009";
 preguntaids[19] = 7117


//  Id pregunta: 4530 Año de creación de pregunta: 2002
 questions[20]= "21)  Dentro del modelo OSI la funci&oacute;n de 'proporcionar testigos para que las dos partes de un protocolo no utilicen la misma operaci&oacute;n al mismo tiempo', corresponde al nivel:";
 choices[20]= new Array();
 choices[20][0] = "Presentaci&oacute;n";
 choices[20][1] = "Transporte";
 choices[20][2] = "Sesi&oacute;n";
 choices[20][3] = "Red";
 answers[20] = 2;
 units[20] = ['105'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 4530. ";
 preguntaids[20] = 4530


//  Id pregunta: 2866 Año de creación de pregunta: 2002
 questions[21]= "22)  En un sistema operativo Linux, &iquest;cu&aacute;l es el &uacute;ltimo script que se ejecuta antes de iniciarse el proceso 'login'?:";
 choices[21]= new Array();
 choices[21][0] = "rc.local";
 choices[21][1] = "autoexec.bat";
 choices[21][2] = "rc4";
 choices[21][3] = "prelogin";
 answers[21] = 0;
 units[21] = ['57'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 2866. ";
 preguntaids[21] = 2866


//  Id pregunta: 3191 Año de creación de pregunta: 2003
 questions[22]= "23)  Cu&aacute;l de las siguientes afirmaciones respecto a LINUX es falsa";
 choices[22]= new Array();
 choices[22][0] = "est&aacute; constituido por un n&uacute;cleo kernel; cada usuario debe construirse las librer&iacute;as y programa para poderlo utilizar";
 choices[22][1] = "es un sistema operativo compatible con UNIX";
 choices[22][2] = "es un software libre";
 choices[22][3] = "el sistema viene acompa&ntilde;ado del c&oacute;digo fuente";
 answers[22] = 0;
 units[22] = ['66'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 3191. EXAMEN CASTILLA LA MANCHA";
 preguntaids[22] = 3191


//  Id pregunta: 8518 Año de creación de pregunta: 2011
 questions[23]= "24)  Se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[23]= new Array();
 choices[23][0] = "La &uacute;nica manera de implementar SOA es con un Enterprise Service Bus";
 choices[23][1] = "La &uacute;nica manera de implementar SOA es a trav&eacute;s de servicios Web";
 choices[23][2] = "SOA es un concepto que puede ser implementado de varias formas";
 choices[23][3] = "Todas son incorrectas";
 answers[23] = 2;
 units[23] = ['55'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 8518. ";
 preguntaids[23] = 8518


//  Id pregunta: 967 Año de creación de pregunta: 2016
 questions[24]= "25)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[24]= new Array();
 choices[24][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[24][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[24][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[24][3] = "todas son correctas";
 answers[24] = 3;
 units[24] = ['4', '7', '8', '9'];
 blocks[24] = ['A1', 'A2'];
 comments[24] = "Id Pregunta: 967. Ley 40/2015";
 preguntaids[24] = 967


//  Id pregunta: 7981 Año de creación de pregunta: 2011
 questions[25]= "26)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una t&eacute;cnica de la Interfaz de Gesti&oacute;n de proyectos de la metodolog&iacute;a M&eacute;trica v3:";
 choices[25]= new Array();
 choices[25][0] = "Diagrama de Extrapolaci&oacute;n.";
 choices[25][1] = "Staffing Size.";
 choices[25][2] = "Catalogaci&oacute;n.";
 choices[25][3] = "Diagrama de Gantt.";
 answers[25] = 2;
 units[25] = ['91'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 7981. Examen TIC A2 2010";
 preguntaids[25] = 7981


//  Id pregunta: 10509 Año de creación de pregunta: 2015
 questions[26]= "27)  Indique cu&aacute;l de las siguientes afirmaciones NO es correcta en relaci&oacute;n a Magerit";
 choices[26]= new Array();
 choices[26][0] = "En Magerit 3, vulnerabilidad de un activo es la potencialidad o posibilidad de ocurrencia de la materializaci&oacute;n de una amenaza sobre dicho activo";
 choices[26][1] = "Se permite estructurar el conjunto de activos en capas";
 choices[26][2] = "Se consideran activos esenciales, la informaci&oacute;n que se maneja y los servicios prestados";
 choices[26][3] = "Define que los activos est&aacute;n expuestos a amenazas que interesan por su valor";
 answers[26] = 0;
 units[26] = ['45'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 10509. ";
 preguntaids[26] = 10509


//  Id pregunta: 7228 Año de creación de pregunta: 2010
 questions[27]= "28)  El API de Java para llamar a m&eacute;todos escritos en otros lenguajes es:";
 choices[27]= new Array();
 choices[27][0] = "JDI";
 choices[27][1] = "JCI";
 choices[27][2] = "JTEE";
 choices[27][3] = "JNI";
 answers[27] = 3;
 units[27] = ['64'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 7228. ";
 preguntaids[27] = 7228


//  Id pregunta: 8045 Año de creación de pregunta: 2011
 questions[28]= "29)  Indique cu&aacute;l NO es una de las condiciones que debe cumplir un documento electr&oacute;nico para ser considerado copia electr&oacute;nica aut&eacute;ntica:";
 choices[28]= new Array();
 choices[28][0] = "Que sea autorizada mediante firma electr&oacute;nica.";
 choices[28][1] = "Que incorpore un sello automatizado que refleje el car&aacute;cter de copia en la impresi&oacute;n del documento.";
 choices[28][2] = "Que la copia sea obtenida conforme a las normas de competencia y procedimiento.";
 choices[28][3] = "Que el documento electr&oacute;nico original se encuentre en poder de la Administraci&oacute;n.";
 answers[28] = 1;
 units[28] = ['44'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 8045. Examen TIC A2 2010";
 preguntaids[28] = 8045


//  Id pregunta: 3388 Año de creación de pregunta: 2006
 questions[29]= "30)  &iquest;Qu&eacute; es el Proyecto Mono?";
 choices[29]= new Array();
 choices[29][0] = "Iniciativa para portar el entorno .Net a Linux";
 choices[29][1] = "Completa enciclopedia de animales creada por Microsoft";
 choices[29][2] = "Herramienta de Software Libre para la educaci&oacute;n de los ni&ntilde;os en las escuelas";
 choices[29][3] = "Programa de dibujo";
 answers[29] = 0;
 units[29] = ['63'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 3388. ";
 preguntaids[29] = 3388


//  Id pregunta: 1675 Año de creación de pregunta: 2016
 questions[30]= "31)  Uno de los estudios a realizar en la auditoria de la seguridad l&oacute;gica de los sistemas de informaci&oacute;n es:";
 choices[30]= new Array();
 choices[30][0] = "La implementaci&oacute;n de controles de acceso a las librer&iacute;as de programas (jerarqu&iacute;a de permisos y privilegios), a los datos, a los sistemas gestores de bases de datos y a los sistemas de comunicaciones.";
 choices[30][1] = "El estado de la documentaci&oacute;n de procedimientos de respaldo y recuperaci&oacute;n.";
 choices[30][2] = "La clasificaci&oacute;n de las dependencias en funci&oacute;n de su valor cr&iacute;tico.";
 choices[30][3] = "Los puntos de control para determinar la seguridad operativa frente a ca&iacute;da de l&iacute;neas, aver&iacute;as.";
 answers[30] = 0;
 units[30] = ['36'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 1675. ";
 preguntaids[30] = 1675


//  Id pregunta: 4972 Año de creación de pregunta: 2002
 questions[31]= "32)  Las unidades de informaci&oacute;n entre redes contienen una o m&aacute;s cabeceras que se usan para:";
 choices[31]= new Array();
 choices[31][0] = "Transportar datos a la aplicaci&oacute;n software receptora";
 choices[31][1] = "Evitar que los datos transmitidos por una estaci&oacute;n interfieran con los de otra";
 choices[31][2] = "Asegurar un acceso ordenado al medio f&iacute;sico";
 choices[31][3] = "Pasar informaci&oacute;n de control a los niveles OSI (o equivalentes) en el sistema de destino";
 answers[31] = 3;
 units[31] = ['105'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 4972. ";
 preguntaids[31] = 4972


//  Id pregunta: 3815 Año de creación de pregunta: 2002
 questions[32]= "33)  En la medici&oacute;n de la productividad en el software orientado a objetos, &iquest;cu&aacute;l de los siguientes criterios es el m&aacute;s importante?:";
 choices[32]= new Array();
 choices[32][0] = "La cantidad de software producido por unidad de tiempo";
 choices[32][1] = "La reutilizaci&oacute;n del software producido";
 choices[32][2] = "El seguimiento estricto de una metodolog&iacute;a";
 choices[32][3] = "La calidad de software en cu&aacute;nto al cumplimiento de la funcionalidad requerida";
 answers[32] = 1;
 units[32] = ['93'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 3815. ";
 preguntaids[32] = 3815


//  Id pregunta: 179 Año de creación de pregunta: 2016
 questions[33]= "34)  La Presidencia del Consejo de la Uni&oacute;n Europea...";
 choices[33]= new Array();
 choices[33][0] = "Cambia cada seis meses";
 choices[33][1] = "Cambia cada a&ntilde;o";
 choices[33][2] = "Es elegida por el Parlamento Europeo";
 choices[33][3] = "Es inexistente,es decir, no existe la Presidencia de la Uni&oacute;n Europea";
 answers[33] = 0;
 units[33] = ['5'];
 blocks[33] = ['A1'];
 comments[33] = "Id Pregunta: 179. Uni&oacute;n Europea";
 preguntaids[33] = 179


//  Id pregunta: 9154 Año de creación de pregunta: 2014
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes herramientas utiliza un SGBD (sistema de gesti&oacute;n de bases de datos) para asegurar la atomicidad y persistencia de las transacciones?";
 choices[34]= new Array();
 choices[34][0] = "M&oacute;dulo de comprobaci&oacute;n de la integridad.";
 choices[34][1] = "El esquema conceptual.";
 choices[34][2] = "Fichero diario.";
 choices[34][3] = "Triggers.";
 answers[34] = 2;
 units[34] = ['60'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 9154. Examen TIC A2 2013";
 preguntaids[34] = 9154


//  Id pregunta: 4392 Año de creación de pregunta: 2002
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes direcciones es v&aacute;lida para un equipo conectado y accesible directamente desde Internet?:";
 choices[35]= new Array();
 choices[35][0] = "256.198.234.12";
 choices[35][1] = "10.128.179.54";
 choices[35][2] = "192.139.234.12";
 choices[35][3] = "127.34.156.0";
 answers[35] = 2;
 units[35] = ['109'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 4392. ";
 preguntaids[35] = 4392


//  Id pregunta: 8900 Año de creación de pregunta: 2013
 questions[36]= "37)  Seg&uacute;n Codd, una entidad en la que todos los atributos tienen dependencia funcional completa de la clave est&aacute;, al menos, en:";
 choices[36]= new Array();
 choices[36][0] = "Primera Forma Normal.";
 choices[36][1] = "Segunda Forma Normal.";
 choices[36][2] = "Tercera Forma Normal.";
 choices[36][3] = "Forma Normal de Boyce-Codd.";
 answers[36] = 1;
 units[36] = ['61'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 8900. ";
 preguntaids[36] = 8900


//  Id pregunta: 10230 Año de creación de pregunta: 2015
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes tipos de modelados conceptuales se asocia correctamente a su descripci&oacute;n?";
 choices[37]= new Array();
 choices[37][0] = "Modelo de Datos a Modelo est&aacute;tico";
 choices[37][1] = "Modelo de Objetos a Modelo funcional";
 choices[37][2] = "Modelo de Procesos a Modelo din&aacute;mico";
 choices[37][3] = "Modelo de Estados a Modelo funcional";
 answers[37] = 0;
 units[37] = ['60'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 10230. ";
 preguntaids[37] = 10230


//  Id pregunta: 1187 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n WCAG 2.0, &iquest;cu&aacute;les son los 4 principios que forman los cimientos de la accesibilidad web?";
 choices[38]= new Array();
 choices[38][0] = "Percibible (perceivable), operable, comprensible (understandable) y robusto (robust).";
 choices[38][1] = "Percibible (perceivable), sencillo (straightforward), comprensible (understandable) y robusto (robust).";
 choices[38][2] = "Distinguible (distinguishable), sencillo (straightforward), comprensible (understandable) y robusto (robust).";
 choices[38][3] = "Distinguible (distinguishable), sencillo (straightforward), memorizable (memorable) y robusto (robust).";
 answers[38] = 0;
 units[38] = ['42'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 1187. ";
 preguntaids[38] = 1187


//  Id pregunta: 2271 Año de creación de pregunta: 2002
 questions[39]= "40)  Quienes se dediquen a la prestaci&oacute;n de servicios de informaci&oacute;n sobre solvencia patrimonial y el cr&eacute;dito:";
 choices[39]= new Array();
 choices[39][0] = "Podr&aacute;n tratar datos de car&aacute;cter personal relativos al cumplimiento o inclumplimiento de obligaciones dinerarias facilitados por el acreedor o por quien act&uacute;e por su cuenta o inter&eacute;s";
 choices[39][1] = "Exclusivamente podr&aacute;n tratar datos de car&aacute;cter personal obtenidos de los registros y las fuentes accesibles al p&uacute;blico";
 choices[39][2] = "Exclusivamente podr&aacute;n tratar datos de car&aacute;cter personal procedentes de informaciones facilitadas por el interesado o con su consentimiento";
 choices[39][3] = "No podr&aacute;n registrar o ceder datos de car&aacute;cter personal que sean determinantes para enjuiciar la solvencia econ&oacute;mica de los interesados";
 answers[39] = 0;
 units[39] = ['35'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 2271. ";
 preguntaids[39] = 2271


//  Id pregunta: 5122 Año de creación de pregunta: 2003
 questions[40]= "41)  En la arquitectura TCP/IP, &iquest;cu&aacute;l de los siguientes protocolos no tiene estrictamente TCP/UDP en una capa m&aacute;s baja?:";
 choices[40]= new Array();
 choices[40][0] = "ICMP";
 choices[40][1] = "SNMP.";
 choices[40][2] = "SMTP.";
 choices[40][3] = "MIME.";
 answers[40] = 0;
 units[40] = ['109'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 5122. Junta Andaluc&iacute;a";
 preguntaids[40] = 5122


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[41]= "42)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[41]= new Array();
 choices[41][0] = "Versi&oacute;n digital prioritaria.";
 choices[41][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[41][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[41][3] = "Apertura y transparencia.";
 answers[41] = 0;
 units[41] = ['5'];
 blocks[41] = ['A1'];
 comments[41] = "Id Pregunta: 109. Uni&oacute;n Europea";
 preguntaids[41] = 109


//  Id pregunta: 3267 Año de creación de pregunta: 2003
 questions[42]= "43)  La escalabilidad vertical tiene que ver con:";
 choices[42]= new Array();
 choices[42][0] = "Granjas de servidores";
 choices[42][1] = "Servidores en rack";
 choices[42][2] = "Cluster de seridores";
 choices[42][3] = "Nada de lo anterior";
 answers[42] = 3;
 units[42] = ['49'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 3267. ";
 preguntaids[42] = 3267


//  Id pregunta: 2607 Año de creación de pregunta: 2002
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre un proyecto GIS es cierta?:";
 choices[43]= new Array();
 choices[43][0] = "La digitalizaci&oacute;n de una cartograf&iacute;a existente es cara por lo laborioso del proceso de digitalizaci&oacute;n ya que requiere mucho trabajo manual de depuraci&oacute;n y correcci&oacute;n.";
 choices[43][1] = "Mientras el coste del uso de los sat&eacute;lites de posici&oacute;n no baje, la obtenci&oacute;n de datos mediante itinerarios con GPS siempre presenta una relaci&oacute;n coste/calidad inaceptable.";
 choices[43][2] = "El procesado de im&aacute;genes de sat&eacute;lite es complicado puesto que la informaci&oacute;n r&aacute;ster no puede ser vectorizada.";
 choices[43][3] = "La fotogrametr&iacute;a es una opci&oacute;n viable s&oacute;lo cuando no existan otros m&eacute;todos (trazado por GPS, procesado de im&aacute;genes de sat&eacute;lite, digitalizaci&oacute;n de cartograf&iacute;as existentes) por lo elevado de su coste.";
 answers[43] = 0;
 units[43] = ['71'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 2607. ";
 preguntaids[43] = 2607


//  Id pregunta: 2332 Año de creación de pregunta: 2003
 questions[44]= "45)  El nivel EAL4 de Criterios Comunes significa";
 choices[44]= new Array();
 choices[44][0] = "Dise&ntilde;ado, probado y revisado met&oacute;dicamente";
 choices[44][1] = "Estructuralmente probado";
 choices[44][2] = "Probado y verificado met&oacute;dicamente";
 choices[44][3] = "Dise&ntilde;o verificado y probado formalmente";
 answers[44] = 0;
 units[44] = ['36'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 2332. EAL1 (funcionalidad probada); EAL2 (estructuralmente probado); EAL3 (probado y verificado met&oacute;dicamente); EAL4 (dise&ntilde;ado, probado y revisado met&oacute;dicamente); EAL5 (dise&ntilde;ado y probado semiformalmente); EAL6 (dise&ntilde;o verificado y probado semiformalmente); EAL7 (dise&ntilde;o verificado y probado formalmente)";
 preguntaids[44] = 2332


//  Id pregunta: 2383 Año de creación de pregunta: 2006
 questions[45]= "46)  La empresa Du Pont inici&oacute; un estudio sobre t&eacute;cnicas de aplicaci&oacute;n de ordenadores a la planificaci&oacute;n y programaci&oacute;n de proyectos, que recibi&oacute; el nombre de:";
 choices[45]= new Array();
 choices[45][0] = "CPM (Critical Path Method).";
 choices[45][1] = "PERT.";
 choices[45][2] = "Diagrama de Gant.";
 choices[45][3] = "PROPS.";
 answers[45] = 0;
 units[45] = ['33'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 2383. ";
 preguntaids[45] = 2383


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[46]= "47)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[46]= new Array();
 choices[46][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[46][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[46][2] = "Cinco a&ntilde;os.";
 choices[46][3] = "Ninguna es correcta.";
 answers[46] = 2;
 units[46] = ['5'];
 blocks[46] = ['A1'];
 comments[46] = "Id Pregunta: 166. Uni&oacute;n Europea";
 preguntaids[46] = 166


//  Id pregunta: 4575 Año de creación de pregunta: 2002
 questions[47]= "48)  &iquest;Cu&aacute;l es la velocidad del canal D en un acceso primario RDSI en Europa?:";
 choices[47]= new Array();
 choices[47][0] = "16 kbps";
 choices[47][1] = "32 kbps";
 choices[47][2] = "64 kbps";
 choices[47][3] = "128 kbps";
 answers[47] = 2;
 units[47] = ['114'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 4575. ";
 preguntaids[47] = 4575


//  Id pregunta: 5607 Año de creación de pregunta: 2007
 questions[48]= "49)  Indique el apartado que no debe incluir necesariamente el manual de calidad que Ia organizaci&oacute;n debe establecer y mantener, seg&uacute;n la norma ISO 9001.";
 choices[48]= new Array();
 choices[48][0] = "Las declaraciones documentadas de la pol&iacute;tica de calidad y de objetivos de la calidad.";
 choices[48][1] = "El alcance del sistema de gesti&oacute;n de calidad.";
 choices[48][2] = "Los procedimientos documentados establecidos para el sistema de gesti&oacute;n de calidad.";
 choices[48][3] = "La descripci&oacute;n de Ia interacci&oacute;n entre los procesos del sistema de gesti&oacute;n de calidad.";
 answers[48] = 0;
 units[48] = ['92'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 5607. ";
 preguntaids[48] = 5607


//  Id pregunta: 5596 Año de creación de pregunta: 2007
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes no es un posible mecanismo de transmisi&oacute;n de voz sobre paquetes de datos?";
 choices[49]= new Array();
 choices[49][0] = "Voz sobre IP (VoIP).";
 choices[49][1] = "Voz sobre TCP (VoTCP).";
 choices[49][2] = "Voz sobre celdas (VoATM).";
 choices[49][3] = "Voz sobre tramas (VoFR).";
 answers[49] = 1;
 units[49] = ['107'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 5596. ";
 preguntaids[49] = 5596


//  Id pregunta: 3164 Año de creación de pregunta: 2002
 questions[50]= "51)  &iquest;En qu&eacute; condiciones est&aacute; permitido el env&iacute;o de comunicaciones comerciales por medios electr&oacute;nicos? :";
 choices[50]= new Array();
 choices[50][0] = "Se permite el env&iacute;o de mensajes publicitarios o comerciales por correo electr&oacute;nico a aquellos usuarios que previamente lo hubieran autorizado o lo hubieran solicitado de forma expresa";
 choices[50][1] = "El spam est&aacute; permitido si se conoce el emisor";
 choices[50][2] = "El SMS no es equiparable al mail, por lo tanto el env&iacute;o masivo con este medio esta pemitido";
 choices[50][3] = "Siempre aunque no lo hayan solocitado los receptores, pues el emisor aparece en el mensaje";
 answers[50] = 0;
 units[50] = ['19'];
 blocks[50] = ['A4'];
 comments[50] = "Id Pregunta: 3164. Ley 34/2002, art&iacute;culo 21";
 preguntaids[50] = 3164


//  Id pregunta: 1420 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Qu&eacute; T&iacute;tulo regula la Econom&iacute;a y la Hacienda en la Constituci&oacute;n Espa&ntilde;ola vigente en la actualidad?:";
 choices[51]= new Array();
 choices[51][0] = "El T&iacute;tulo IV.";
 choices[51][1] = "El T&iacute;tulo V.";
 choices[51][2] = "El T&iacute;tulo VI.";
 choices[51][3] = "El T&iacute;tulo VII.";
 answers[51] = 3;
 units[51] = ['1'];
 blocks[51] = ['A1'];
 comments[51] = "Id Pregunta: 1420. ";
 preguntaids[51] = 1420


//  Id pregunta: 6284 Año de creación de pregunta: 2007
 questions[52]= "53)  La actividad &quot;Asignaci&oacute;n detallada de tareas&quot; a qu&eacute; grupo de actividades pertenece";
 choices[52]= new Array();
 choices[52][0] = "Actividades de Inicio de Proyecto (GPI)";
 choices[52][1] = "Actividades de Seguimiento y Control (GPS)";
 choices[52][2] = "Actividades de Finalizaci&oacute;n de Proyecto";
 choices[52][3] = "Actividades de Planificaci&oacute;n de Proyecto (GPP)";
 answers[52] = 1;
 units[52] = ['91'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 6284. ";
 preguntaids[52] = 6284


//  Id pregunta: 339 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Qu&eacute; fen&oacute;meno NO ha puesto de manifiesto la crisis econ&oacute;mica?";
 choices[53]= new Array();
 choices[53][0] = "Tasa de paro estructural alt&iacute;sima";
 choices[53][1] = "Excesiva estabilidad de empleo";
 choices[53][2] = "An&eacute;mico crecimiento de la productividad";
 choices[53][3] = "Existencia de una importante econom&iacute;a sumergida";
 answers[53] = 1;
 units[53] = ['12'];
 blocks[53] = ['A3'];
 comments[53] = "Id Pregunta: 339. Modelo econ&oacute;mico";
 preguntaids[53] = 339


//  Id pregunta: 7442 Año de creación de pregunta: 2010
 questions[54]= "55)  Se&ntilde;ala cu&aacute;l de las siguientes no es una tecnolog&iacute;a empleada en el pago a trav&eacute;s de Internet:";
 choices[54]= new Array();
 choices[54][0] = "3D Secure";
 choices[54][1] = "UCAF";
 choices[54][2] = "Urbinet";
 choices[54][3] = "SET";
 answers[54] = 2;
 units[54] = ['75'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 7442. ";
 preguntaids[54] = 7442


//  Id pregunta: 9246 Año de creación de pregunta: 2014
 questions[55]= "56)  La relaci&oacute;n entre los requisitos, sus fuentes y el dise&ntilde;o del sistema se denomina:";
 choices[55]= new Array();
 choices[55][0] = "Evaluaci&oacute;n de requisitos.";
 choices[55][1] = "Trazabilidad.";
 choices[55][2] = "Integridad de requisitos.";
 choices[55][3] = "Gesti&oacute;n de requisitos.";
 answers[55] = 1;
 units[55] = ['84'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 9246. Examen TIC A2 2013";
 preguntaids[55] = 9246


//  Id pregunta: 9905 Año de creación de pregunta: 2015
 questions[56]= "57)  Seg&uacute;n la Ley 39/2015, cual de las siguientes no se establece como informaci&oacute;n necesaria en los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[56]= new Array();
 choices[56][0] = "Fecha de inscripci&oacute;n.";
 choices[56][1] = "Per&iacute;odo de tiempo por el cual se otorga el poder.";
 choices[56][2] = "Lugar de inscripci&oacute;n.";
 choices[56][3] = "Tipo de poder seg&uacute;n las facultades que otorgue.";
 answers[56] = 2;
 units[56] = ['7', '19'];
 blocks[56] = ['A2', 'A4'];
 comments[56] = "Id Pregunta: 9905. ";
 preguntaids[56] = 9905


//  Id pregunta: 10032 Año de creación de pregunta: 2015
 questions[57]= "58)  En la Interfaz de Gesti&oacute;n de Proyectos de M&Eacute;TRICA v3, se&ntilde;ale entre los siguientes un producto correcto de salida que tiene la tarea &quot;GPI 1.1, identificaci&oacute;n de elementos a desarrollar&quot; en el caso de desarrollo estructurado:";
 choices[57]= new Array();
 choices[57][0] = "Planificaci&oacute;n General del Proyecto: Estrategia de desarrollo estructurado.";
 choices[57][1] = "Cat&aacute;logo de productos a generar.";
 choices[57][2] = "Cat&aacute;logo de clases.";
 choices[57][3] = "Cat&aacute;logo de entidades.";
 answers[57] = 3;
 units[57] = ['91'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 10032. Examen TIC A2 2014";
 preguntaids[57] = 10032


//  Id pregunta: 8632 Año de creación de pregunta: 2013
 questions[58]= "59)  La transformaci&oacute;n hit or miss (o a&ntilde;adir o eliminar) aplicada al procesamiento de im&aacute;genes se utiliza para:";
 choices[58]= new Array();
 choices[58][0] = "Dividir una imagen en regiones a partir de diferencias crom&aacute;ticas";
 choices[58][1] = "Detectar regiones con una forma espec&iacute;fica";
 choices[58][2] = "Calcular la apertura y clausura del contorno de un objeto";
 choices[58][3] = "No es posible aplicar hit or miss al procesamiento de im&aacute;genes";
 answers[58] = 1;
 units[58] = ['80'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 8632. ";
 preguntaids[58] = 8632


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n se establece en la Ley 59/2003, de Firma Electr&oacute;nica, la cuant&iacute;a de las multas para los distintos tipos de infracciones ser&aacute;n:";
 choices[59]= new Array();
 choices[59][0] = "Para las muy graves de 300.001 a 600.000 euros; graves de 30.001 a 300.000 euros; leves hasta 60.000 euros.";
 choices[59][1] = "Para las muy graves de 150.001 a 600.000 euros; graves de 60.001 a 150.000 euros; leves hasta 60.000 euros.";
 choices[59][2] = "Para las muy graves de 150.001 a 300.000 euros; graves de 60.001 a 150.000 euros; leves hasta 30.000 euros.";
 choices[59][3] = "Para las muy graves de 150.001 a 600.000 euros; graves de 30.001 a 150.000 euros; leves hasta 30.000 euros.";
 answers[59] = 3;
 units[59] = ['19'];
 blocks[59] = ['A4'];
 comments[59] = "Id Pregunta: 441. AGE A2 2015";
 preguntaids[59] = 441


//  Id pregunta: 1433 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes NO es causa de inelegibilidad para los Diputados y Senadores seg&uacute;n el art&iacute;culo 70 de la Constituci&oacute;n Espa&ntilde;ola?";
 choices[60]= new Array();
 choices[60][0] = "Ser miembros del Tribunal Constitucional.";
 choices[60][1] = "Ser miembros del Gobierno.";
 choices[60][2] = "Ser Magistrado, Juez y Fiscal en activo.";
 choices[60][3] = "Ser el Defensor del Pueblo.";
 answers[60] = 1;
 units[60] = ['1'];
 blocks[60] = ['A1'];
 comments[60] = "Id Pregunta: 1433. ";
 preguntaids[60] = 1433


//  Id pregunta: 4893 Año de creación de pregunta: 2002
 questions[61]= "62)  La jerarqu&iacute;a digital MDH:";
 choices[61]= new Array();
 choices[61][0] = "Responde por Multimedia Digital Hierarchy";
 choices[61][1] = "Responde por Multiplexed Digital Hierarchy";
 choices[61][2] = "No existe";
 choices[61][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[61] = 2;
 units[61] = ['110'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 4893. ";
 preguntaids[61] = 4893


//  Id pregunta: 6323 Año de creación de pregunta: 2003
 questions[62]= "63)  Para obtener el Diagrama Caracter&iacute;stico de un proyecto, el Plan General de Garant&iacute;a de Calidad considera los siguientes atributos:";
 choices[62]= new Array();
 choices[62][0] = "Un total de 8, que se refieren al producto que se va a desarrollar, al entorno de implantaci&oacute;n previsto y al propio proyecto o proceso de desarrollo y que se valoran dentro de un rango de 1 y 5.";
 choices[62][1] = "Un total de 18, que se refieren al producto que se va a desarrollar, al entorno de implantaci&oacute;n previsto y al propio proyecto o proceso de desarrollo y que se valoran dentro de un rango de 1 y 5.";
 choices[62][2] = "Un total de 18, que se refieren al producto que se va a desarrollar, al entorno de implantaci&oacute;n previsto y al propio proyecto o proceso de desarrollo y que se valoran dentro de un rango de 1 y 7.";
 choices[62][3] = "Ninguna de las anteriores";
 answers[62] = 1;
 units[62] = ['93'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 6323. ";
 preguntaids[62] = 6323


//  Id pregunta: 1427 Año de creación de pregunta: 2016
 questions[63]= "64)  De conformidad con el art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola el Gobierno se compone:";
 choices[63]= new Array();
 choices[63][0] = "Del Presidente, de los Vicepresidentes y de los dem&aacute;s miembros que establezca la ley.";
 choices[63][1] = "Del Presidente, de los Ministros, y de los dem&aacute;s miembros que establezca la ley.";
 choices[63][2] = "Del Presidente, de los Vicepresidentes, en su caso, de los Ministros y de los dem&aacute;s miembros que establezca la ley.";
 choices[63][3] = "Del Presidente, de los Vicepresidentes, en su caso, de los Ministros y los Secretarios Generales y de los dem&aacute;s miembros que establezca la ley.";
 answers[63] = 2;
 units[63] = ['1'];
 blocks[63] = ['A1'];
 comments[63] = "Id Pregunta: 1427. ";
 preguntaids[63] = 1427


//  Id pregunta: 347 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[64]= new Array();
 choices[64][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[64][1] = "Entrada en la Uni&oacute;n Europea";
 choices[64][2] = "Pactos de la Moncloa";
 choices[64][3] = "Ingreso en la ONU";
 answers[64] = 3;
 units[64] = ['12'];
 blocks[64] = ['A3'];
 comments[64] = "Id Pregunta: 347. Modelo econ&oacute;mico";
 preguntaids[64] = 347


//  Id pregunta: 2997 Año de creación de pregunta: 2002
 questions[65]= "66)  Para borrar una tabla en SQL utilizar&eacute;:";
 choices[65]= new Array();
 choices[65][0] = "DELETE + Nombre de la tabla";
 choices[65][1] = "DROP + Nombre de la tabla";
 choices[65][2] = "REVOKE + Nombre de la tabla";
 choices[65][3] = "B y C son ciertas";
 answers[65] = 1;
 units[65] = ['61'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 2997. ";
 preguntaids[65] = 2997


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[66]= "67)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[66]= new Array();
 choices[66][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[66][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[66][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[66][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[66] = 3;
 units[66] = ['7'];
 blocks[66] = ['A2'];
 comments[66] = "Id Pregunta: 227. Ley 39/2015";
 preguntaids[66] = 227


//  Id pregunta: 977 Año de creación de pregunta: 2016
 questions[67]= "68)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[67]= new Array();
 choices[67][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[67][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[67][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[67][3] = "todas son correctas";
 answers[67] = 3;
 units[67] = ['4', '7', '8', '9'];
 blocks[67] = ['A1', 'A2'];
 comments[67] = "Id Pregunta: 977. Ley 40/2015";
 preguntaids[67] = 977


//  Id pregunta: 2600 Año de creación de pregunta: 2002
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto a Linux?:";
 choices[68]= new Array();
 choices[68][0] = "Est&aacute; constituido por un n&uacute;cleo Kernel, y cada usuario debe construirse las librer&iacute;as y programas para poderlo utilizar";
 choices[68][1] = "Es un sistema operativo compatible con Unix";
 choices[68][2] = "Es software libre";
 choices[68][3] = "El sistema viene acompa&ntilde;ado del c&oacute;digo fuente";
 answers[68] = 0;
 units[68] = ['57'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 2600. ";
 preguntaids[68] = 2600


//  Id pregunta: 6262 Año de creación de pregunta: 2003
 questions[69]= "70)  No se considera una t&eacute;cnica o herramienta para la creaci&oacute;n de prototipos:";
 choices[69]= new Array();
 choices[69][0] = "T&eacute;cnicas de Cuarta Generaci&oacute;n";
 choices[69][1] = "Componentes de Software Reutilizables";
 choices[69][2] = "Modelado L&oacute;gico de Datos";
 choices[69][3] = "Especificaciones Formales y Entornos para Prototipos";
 answers[69] = 2;
 units[69] = ['90'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 6262. ";
 preguntaids[69] = 6262


//  Id pregunta: 1424 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n el art&iacute;culo 30 de la Constituci&oacute;n Espa&ntilde;ola, los deberes de los ciudadanos en los casos de grave riesgo, cat&aacute;strofe o calamidad p&uacute;blica, podr&aacute;n regularse:";
 choices[70]= new Array();
 choices[70][0] = "Por Ley Org&aacute;nica.";
 choices[70][1] = "Por Ley.";
 choices[70][2] = "Por Real Decreto-Ley.";
 choices[70][3] = "Ninguna es correcta.";
 answers[70] = 1;
 units[70] = ['1'];
 blocks[70] = ['A1'];
 comments[70] = "Id Pregunta: 1424. ";
 preguntaids[70] = 1424


//  Id pregunta: 675 Año de creación de pregunta: 2016
 questions[71]= "72)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[71]= new Array();
 choices[71][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[71][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[71][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[71][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[71] = 1;
 units[71] = ['58'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 675. Junta de Extremadura A1 2015";
 preguntaids[71] = 675


//  Id pregunta: 9464 Año de creación de pregunta: 2014
 questions[72]= "73)  Un dominio en un modelo relacional&hellip;";
 choices[72]= new Array();
 choices[72][0] = "Puede definirse por intensi&oacute;n, es decir, especificando tipo de datos y restricciones";
 choices[72][1] = "Es un conjunto nominado, infinito y homog&eacute;neo de valores at&oacute;micos";
 choices[72][2] = "S&oacute;lo puede definirse por extensi&oacute;n o enumeraci&oacute;n de los posibles valores del dominio";
 choices[72][3] = "Todas las anteriores";
 answers[72] = 0;
 units[72] = ['61'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 9464. Por extensi&oacute;n= enumeraci&oacute;n de sus elementos, p.ej. d&iacute;as de la semana = {lunes, martes, mi&eacute;rcoles, jueves, viernes, s&aacute;bado, domingo} ; Por intensi&oacute;n= mediante una propiedad que recoja el recorrido de sus valores admisibles, p. ej: edad: entero / 0 &le; edad &le; 200";
 preguntaids[72] = 9464


//  Id pregunta: 6351 Año de creación de pregunta: 2003
 questions[73]= "74)  Seg&uacute;n la Ley 9/2014, la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n corresponde a:";
 choices[73]= new Array();
 choices[73][0] = "El Ministerio de  Energia, Turismo y Agenda Digital";
 choices[73][1] = "Gobierno";
 choices[73][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[73][3] = "Ninguno de los anteriores";
 answers[73] = 1;
 units[73] = ['110'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 6351. ";
 preguntaids[73] = 6351


//  Id pregunta: 4709 Año de creación de pregunta: 2002
 questions[74]= "75)  Ethernet:";
 choices[74]= new Array();
 choices[74][0] = "Fue inventada por Xerox y desarrollada por Xerox, Intel y DEC";
 choices[74][1] = "Fue inventada por Fujitsu y desarrollada por Fujitsu, Nortel y Cisco";
 choices[74][2] = "Fue inventada por Siemens y desarrollada por Siemens, Alcatel y Lucent";
 choices[74][3] = "Fue desarrollada en la Universidad de Berkeley";
 answers[74] = 0;
 units[74] = ['101'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 4709. ";
 preguntaids[74] = 4709


