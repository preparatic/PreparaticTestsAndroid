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
//  Id pregunta: 4325 Año de creación de pregunta: 2004
 questions[0]= "1)  &iquest;Cu&aacute;l es el m&eacute;todo de acceso del est&aacute;ndar IEEE 802.4?";
 choices[0]= new Array();
 choices[0][0] = "CSMA/CD";
 choices[0][1] = "Token bus";
 choices[0][2] = "Token Ring";
 choices[0][3] = "Aloha ranurado";
 answers[0] = 1;
 units[0] = ['102'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 4325. Similar a examen TIC SS A 2003";
 preguntaids[0] = 4325


//  Id pregunta: 10636 Año de creación de pregunta: 2015
 questions[1]= "2)  Seg&uacute;n la Ley 9/2014, el otorgamiento de los derechos de uso de los recursos de numeraci&oacute;n, direccionamiento y denominaci&oacute;n corresponden a:";
 choices[1]= new Array();
 choices[1][0] = "El Ministerio de Energia, Turismo y Agenda Digital.";
 choices[1][1] = "CNMC.";
 choices[1][2] = "Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[1][3] = "ORECE.";
 answers[1] = 0;
 units[1] = ['121'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 10636. Articulo 19";
 preguntaids[1] = 10636


//  Id pregunta: 4165 Año de creación de pregunta: 2006
 questions[2]= "3)  Cuando hablamos del concepto de Almac&eacute;n de Datos en An&aacute;lisis Estructurado. Cual de las siguientes afirmaciones es falsa.";
 choices[2]= new Array();
 choices[2][0] = "Pueden ser permanentes o temporales";
 choices[2][1] = "No crean informaci&oacute;n";
 choices[2][2] = "Son accesibles desde entidades externas.";
 choices[2][3] = "Son accesibles s&oacute;lo desde los procesos";
 answers[2] = 2;
 units[2] = ['85', '86'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 4165. ";
 preguntaids[2] = 4165


//  Id pregunta: 2346 Año de creación de pregunta: 2003
 questions[3]= "4)  Las medidas de seguridad l&oacute;gica para datos de car&aacute;cter personal caracterizadas como de nivel Medio:";
 choices[3]= new Array();
 choices[3][0] = "De cada intento de acceso se guardar&aacute;n, como m&iacute;nimo, la identificaci&oacute;n del usuario, la fecha y hora en que se realiz&oacute;, el fichero accedido, el tipo de acceso y si ha sido autorizado o denegado";
 choices[3][1] = "La identificaci&oacute;n de los soportes se deber&aacute; realizar utilizando sistemas de etiquetado comprensibles y con significado que permitan a los usuarios con acceso autorizado a los citados soportes y documentos identificar su contenido, y que dificulten la identificaci&oacute;n para el resto de personas.";
 choices[3][2] = "El responsable del fichero o tratamiento establecer&aacute; un mecanismo que limite la posibilidad de intentar reiteradamente el acceso no autorizado al sistema de informaci&oacute;n.";
 choices[3][3] = "Deber&aacute;n establecerse procedimientos de actuaci&oacute;n para la realizaci&oacute;n como m&iacute;nimo semanal de copias de respaldo, salvo que en dicho per&iacute;odo no se hubiera producido ninguna actualizaci&oacute;n de los datos.";
 answers[3] = 2;
 units[3] = ['35'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 2346. ";
 preguntaids[3] = 2346


//  Id pregunta: 1254 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[4]= new Array();
 choices[4][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[4][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[4][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[4][3] = "Sancionar y publicar las leyes.";
 answers[4] = 2;
 units[4] = ['1'];
 blocks[4] = ['A1'];
 comments[4] = "Id Pregunta: 1254. ";
 preguntaids[4] = 1254


//  Id pregunta: 7812 Año de creación de pregunta: 2010
 questions[5]= "6)  En el conjunto de protocolos TCP/IP, &iquest;cu&aacute;ntos bits se reservan para identificar los n&uacute;meros de puerto en las cabeceras de control TCP y UDP?";
 choices[5]= new Array();
 choices[5][0] = "16";
 choices[5][1] = "24";
 choices[5][2] = "32";
 choices[5][3] = "64";
 answers[5] = 0;
 units[5] = ['109'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 7812. ";
 preguntaids[5] = 7812


//  Id pregunta: 149 Año de creación de pregunta: 2016
 questions[6]= "7)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[6]= new Array();
 choices[6][0] = "Acuerdos cualificados.";
 choices[6][1] = "Acuerdos ponderados.";
 choices[6][2] = "Valoraci&oacute;n de los votos.";
 choices[6][3] = "Ponderaci&oacute;n de los votos.";
 answers[6] = 3;
 units[6] = ['5'];
 blocks[6] = ['A1'];
 comments[6] = "Id Pregunta: 149. Uni&oacute;n Europea";
 preguntaids[6] = 149


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[7]= "8)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[7]= new Array();
 choices[7][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[7][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[7][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[7][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[7] = 2;
 units[7] = ['1'];
 blocks[7] = ['A1'];
 comments[7] = "Id Pregunta: 18. Constituci&oacute;n de 1978";
 preguntaids[7] = 18


//  Id pregunta: 6130 Año de creación de pregunta: 2003
 questions[8]= "9)  RDF (Resource Description Framework) es un:";
 choices[8]= new Array();
 choices[8][0] = "Lenguaje del W3C para representar informaci&oacute;n sobre recursos en la Web";
 choices[8][1] = "Est&aacute;ndar del W3C para la definici&oacute;n de datos";
 choices[8][2] = "Est&aacute;ndar para la creaci&oacute;n de p&aacute;ginas web accesibles";
 choices[8][3] = "Est&aacute;ndar para la descripci&oacute;n de los recursos inform&aacute;ticos de una organizaci&oacute;n";
 answers[8] = 0;
 units[8] = ['74'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 6130. Examen TIC A1 MAP 2007";
 preguntaids[8] = 6130


//  Id pregunta: 51 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[9]= new Array();
 choices[9][0] = "Art&iacute;culo 16.2.";
 choices[9][1] = "Art&iacute;culo 17.1.";
 choices[9][2] = "Art&iacute;culo 18.1.";
 choices[9][3] = "Art&iacute;culo 18.2.";
 answers[9] = 2;
 units[9] = ['1'];
 blocks[9] = ['A1'];
 comments[9] = "Id Pregunta: 51. Constituci&oacute;n de 1978";
 preguntaids[9] = 51


//  Id pregunta: 3855 Año de creación de pregunta: 2002
 questions[10]= "11)  Es falso que dependiendo del proyecto a que se aplique COCOMO, podemos clasificar los sistemas como:";
 choices[10]= new Array();
 choices[10][0] = "Org&aacute;nico";
 choices[10][1] = "Semi-org&aacute;nico";
 choices[10][2] = "Semi-acoplado";
 choices[10][3] = "Empotrado";
 answers[10] = 1;
 units[10] = ['94'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 3855. ";
 preguntaids[10] = 3855


//  Id pregunta: 5456 Año de creación de pregunta: 2007
 questions[11]= "12)  La gesti&oacute;n de la configuraci&oacute;n del software correctamente desempe&ntilde;ada implica identificar la configuraci&oacute;n:";
 choices[11]= new Array();
 choices[11][0] = "Antes del comienzo del ciclo de vida.";
 choices[11][1] = "Solamente al comienzo del ciclo de vida";
 choices[11][2] = "En puntos predefinidos durante el ciclo de vida.";
 choices[11][3] = "Solamente al finalizar el ciclo de vida";
 answers[11] = 2;
 units[11] = ['87'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 5456. ";
 preguntaids[11] = 5456


//  Id pregunta: 439 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;les de los siguientes principios de inspiraci&oacute;n en la funci&oacute;n gerencial NO incorpora la Ley 40/2015?";
 choices[12]= new Array();
 choices[12][0] = "Buena fe, confianza leg&iacute;tima y lealtad institucional.";
 choices[12][1] = "Calidad de los servicios p&uacute;blicos";
 choices[12][2] = "Responsabilidad por la gesti&oacute;n p&uacute;blica.";
 choices[12][3] = "Servicio efectivo a los ciudadanos";
 answers[12] = 1;
 units[12] = ['18'];
 blocks[12] = ['A4'];
 comments[12] = "Id Pregunta: 439. Direcci&oacute;n p&uacute;blica";
 preguntaids[12] = 439


//  Id pregunta: 61 Año de creación de pregunta: 2016
 questions[13]= "14)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[13]= new Array();
 choices[13][0] = "El Presidente del Congreso de los Diputados.";
 choices[13][1] = "El Presidente del Gobierno.";
 choices[13][2] = "El Rey.";
 choices[13][3] = "El Consejo de Ministros.";
 answers[13] = 2;
 units[13] = ['1'];
 blocks[13] = ['A1'];
 comments[13] = "Id Pregunta: 61. Constituci&oacute;n de 1978";
 preguntaids[13] = 61


//  Id pregunta: 3653 Año de creación de pregunta: 2002
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de UML?";
 choices[14]= new Array();
 choices[14][0] = "Los paquetes pueden contener clases, objetos, relaciones, componentes, nodos y diagramas asociados";
 choices[14][1] = "Los diagramas de clases expresan la estructura est&aacute;tica de un sistema, con las clases, los atributos y las operaciones";
 choices[14][2] = "Las relaciones entre los casos de uso son de subordinaci&oacute;n, dependencia, igualdad y superioridad";
 choices[14][3] = "Los nodos del diagrama de despliegue se representan con un cubo, y las l&iacute;neas que los unen simbolizan los soportes de las comunicaciones";
 answers[14] = 2;
 units[14] = ['85'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 3653. ";
 preguntaids[14] = 3653


//  Id pregunta: 3572 Año de creación de pregunta: 2004
 questions[15]= "16)  Hablar de un modelo de gesti&oacute;n que basado en un sistema empresarial orientado hacia la calidad persigue la satisfacci&oacute;n de todos aquellos entes que se relacionan con la empresa u organizaci&oacute;n, supone hablar de:";
 choices[15]= new Array();
 choices[15][0] = "Las normas ISO 9000";
 choices[15][1] = "Calidad Total";
 choices[15][2] = "Plan General de Garant&iacute;a de Calidad";
 choices[15][3] = "Todos los aspectos anteriores";
 answers[15] = 1;
 units[15] = ['98'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 3572. ";
 preguntaids[15] = 3572


//  Id pregunta: 10970 Año de creación de pregunta: 2015
 questions[16]= "17)  Seg&uacute;n la ley 19/2013 de transparencia y en lo relativo al ejercicio del derecho de acceso de la informaci&oacute;n p&uacute;blica, se&ntilde;ale la FALSA:";
 choices[16]= new Array();
 choices[16][0] = "Ser&aacute;n motivadas las resoluciones que denieguen el acceso, las que concedan el acceso parcial o a trav&eacute;s de una modalidad distinta a la solicitada y las que permitan el acceso cuando haya habido oposici&oacute;n de un tercero.";
 choices[16][1] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[16][2] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica no agotan la v&iacute;a administrativa y a&uacute;n son recurribles en alzada ante el Secretario de Estado de Funci&oacute;n P&uacute;blica.";
 choices[16][3] = "El plazo para resolver una solicitud de acceso ser&aacute; de un mes ampliable otro mes si as&iacute; fuera necesario.";
 answers[16] = 2;
 units[16] = ['22'];
 blocks[16] = ['A4'];
 comments[16] = "Id Pregunta: 10970. ";
 preguntaids[16] = 10970


//  Id pregunta: 6352 Año de creación de pregunta: 2003
 questions[17]= "18)  Seg&uacute;n la Ley 9/2014, la determinaci&oacute;n de si la prestaci&oacute;n del servicio universal supone una causa injustificada para los operadores obligados a prestarlo corresponde a:";
 choices[17]= new Array();
 choices[17][0] = "El Ministerio de  Energia, Turismo y Agenda Digital";
 choices[17][1] = "Gobierno";
 choices[17][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[17][3] = "Ninguno de los anteriores";
 answers[17] = 2;
 units[17] = ['110'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 6352. ";
 preguntaids[17] = 6352


//  Id pregunta: 5242 Año de creación de pregunta: 2006
 questions[18]= "19)  &iquest;Cu&aacute;l es el ancho de banda de separaci&oacute;n entre las portadoras ascendentes y descendentes en GSM?";
 choices[18]= new Array();
 choices[18][0] = "15 MHz";
 choices[18][1] = "25 MHz";
 choices[18][2] = "35 MHz";
 choices[18][3] = "45 MHz";
 answers[18] = 3;
 units[18] = ['117'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 5242. ";
 preguntaids[18] = 5242


//  Id pregunta: 540 Año de creación de pregunta: 2016
 questions[19]= "20)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[19]= new Array();
 choices[19][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[19][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[19][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[19][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[19] = 1;
 units[19] = ['28'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 540. Estrategia TIC";
 preguntaids[19] = 540


//  Id pregunta: 347 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[20]= new Array();
 choices[20][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[20][1] = "Entrada en la Uni&oacute;n Europea";
 choices[20][2] = "Pactos de la Moncloa";
 choices[20][3] = "Ingreso en la ONU";
 answers[20] = 3;
 units[20] = ['12'];
 blocks[20] = ['A3'];
 comments[20] = "Id Pregunta: 347. Modelo econ&oacute;mico";
 preguntaids[20] = 347


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[21]= "22)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[21]= new Array();
 choices[21][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[21][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[21][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[21][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[21] = 0;
 units[21] = ['1'];
 blocks[21] = ['A1'];
 comments[21] = "Id Pregunta: 68. Constituci&oacute;n de 1978";
 preguntaids[21] = 68


//  Id pregunta: 5415 Año de creación de pregunta: 2006
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre GPRS no es v&aacute;lida?";
 choices[22]= new Array();
 choices[22][0] = "Las velocidades de conexi&oacute;n pueden llegar hasta 192 Kbps";
 choices[22][1] = "Los usuarios permanecen conectados aunque no reciban o envien datos";
 choices[22][2] = "Se pueden realizar o recibir llamadas de voz mientras se est&aacute; conectado";
 choices[22][3] = "La tarificaci&oacute;n es por el volumen de datos transferidos";
 answers[22] = 0;
 units[22] = ['117'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 5415. ";
 preguntaids[22] = 5415


//  Id pregunta: 1688 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Cu&aacute;l de las siguientes tareas seg&uacute;n M&eacute;trica v 3, NO forma parte de la actividad de Planificaci&oacute;n?";
 choices[23]= new Array();
 choices[23][0] = "Selecci&oacute;n de la Estrategia de Desarrollo.";
 choices[23][1] = "Coordinaci&oacute;n de todos los Agentes que Intervienen en el Proyecto.";
 choices[23][2] = "Planificaci&oacute;n Detallada de Actividades y Recursos Necesarios.";
 choices[23][3] = "Presentaci&oacute;n y Aceptaci&oacute;n de la Planificaci&oacute;n General del Proyecto.";
 answers[23] = 1;
 units[23] = ['91'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 1688. ";
 preguntaids[23] = 1688


//  Id pregunta: 961 Año de creación de pregunta: 2016
 questions[24]= "25)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[24]= new Array();
 choices[24][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[24][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[24][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[24][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[24] = 2;
 units[24] = ['4', '7', '8', '9'];
 blocks[24] = ['A1', 'A2'];
 comments[24] = "Id Pregunta: 961. Ley 40/2015";
 preguntaids[24] = 961


//  Id pregunta: 374 Año de creación de pregunta: 2016
 questions[25]= "26)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[25]= new Array();
 choices[25][0] = "Discriminaci&oacute;n indirecta.";
 choices[25][1] = "Discriminaci&oacute;n directa.";
 choices[25][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[25][3] = "Discriminaci&oacute;n abusiva.";
 answers[25] = 0;
 units[25] = ['14'];
 blocks[25] = ['A3'];
 comments[25] = "Id Pregunta: 374. Pol&iacute;ticas de igualdad";
 preguntaids[25] = 374


//  Id pregunta: 8854 Año de creación de pregunta: 2013
 questions[26]= "27)  &iquest;A qu&eacute; &aacute;rea pertenece generalmente el departamento de microinform&aacute;tica?";
 choices[26]= new Array();
 choices[26][0] = "Sistemas";
 choices[26][1] = "Log&iacute;stica";
 choices[26][2] = "Comunicaciones";
 choices[26][3] = "Seguridad";
 answers[26] = 0;
 units[26] = ['30'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 8854. ";
 preguntaids[26] = 8854


//  Id pregunta: 7084 Año de creación de pregunta: 2010
 questions[27]= "28)  Uno de los objetivos perseguidos por la Web 2.0 es:";
 choices[27]= new Array();
 choices[27][0] = "Que las aplicaciones no est&eacute;n disponibles en un solo dispositivo.";
 choices[27][1] = "Que sea el proveedor del servicio el que cree todos los contenidos.";
 choices[27][2] = "Que la comunicaci&oacute;n entre los usuarios este centralizada.";
 choices[27][3] = "Que los sistemas sean fuertemente acoplados.";
 answers[27] = 0;
 units[27] = ['125'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 7084. ";
 preguntaids[27] = 7084


//  Id pregunta: 874 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; protocolo utiliza traceroute para obtener la ruta que se sigue desde nuestro equipo hasta otro en Internet?";
 choices[28]= new Array();
 choices[28][0] = "Ping";
 choices[28][1] = "ICMP";
 choices[28][2] = "PPP";
 choices[28][3] = "BGP";
 answers[28] = 1;
 units[28] = ['102'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 874. AGE A2 2015";
 preguntaids[28] = 874


//  Id pregunta: 4324 Año de creación de pregunta: 2004
 questions[29]= "30)  Los documentos que definen los est&aacute;ndares de facto de internet se denominan:";
 choices[29]= new Array();
 choices[29][0] = "RFC";
 choices[29][1] = "IETF";
 choices[29][2] = "IANA";
 choices[29][3] = "Se definen en la serie ITU-T X.(n&uacute;mero de est&aacute;ndar)";
 answers[29] = 0;
 units[29] = ['103'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 4324. Similar a examen TIC SS A 2003";
 preguntaids[29] = 4324


//  Id pregunta: 5134 Año de creación de pregunta: 2003
 questions[30]= "31)  SSL son las iniciales de Secure Socket Layer, S-HTTP son las siglas de Secure HyperText Transfer Protocol, protocolos para la comunicaci&oacute;n segura entre dos ordenadores, normalmente entre un cliente y un servidor y su objetivo es similar, pero:";
 choices[30]= new Array();
 choices[30][0] = "SSL es m&aacute;s amplio que S-HTTP ya que puede ser utilizado como un intermediario entre el TCP/ IP y cualquier otro protocolo (por ejemplo, el HTTP) para a&ntilde;adir seguridad a cualquier tipo de comunicaci&oacute;n entre un cliente y un servidor.";
 choices[30][1] = "SSL es menos amplio que S-HTTP ya que es una parte de este que puede ser utilizada para a&ntilde;adir seguridad a cualquier tipo de comunicaci&oacute;n http entre un cliente y un servidor.";
 choices[30][2] = "S-HTTP sustituye al protocolo HTTP, aunque el cliente no est&eacute; preparado para utilizar ese nivel de seguridad, lo que no se puede conseguir con SSL, que necesita cliente y servidor preparados para utilizar ese nivel de seguridad.";
 choices[30][3] = "SSL sustituye al protocolo HTTP, aunque el cliente no est&eacute; preparado para utilizar ese nivel de seguridad, lo que no se puede conseguir con S-HTTP, que necesita cliente y servidor preparados para utilizar ese nivel de seguridad.";
 answers[30] = 0;
 units[30] = ['120'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 5134. Junta Andaluc&iacute;a";
 preguntaids[30] = 5134


//  Id pregunta: 8425 Año de creación de pregunta: 2011
 questions[31]= "32)  La &uacute;ltima versi&oacute;n de ISO 9004 es:";
 choices[31]= new Array();
 choices[31][0] = "ISO 9004:2005";
 choices[31][1] = "ISO 9004:2000";
 choices[31][2] = "ISO 9004:2009";
 choices[31][3] = "ISO 9004:2008";
 answers[31] = 2;
 units[31] = ['98'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 8425. ";
 preguntaids[31] = 8425


//  Id pregunta: 1419 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;De qu&eacute; trata el T&iacute;tulo VI de la Constituci&oacute;n Espa&ntilde;ola de 1978?:";
 choices[32]= new Array();
 choices[32][0] = "Del Gobierno y la Administraci&oacute;n.";
 choices[32][1] = "Del Poder Judicial.";
 choices[32][2] = "Econom&iacute;a y Hacienda.";
 choices[32][3] = "De las Relaciones del Gobierno y las Cortes Generales.";
 answers[32] = 1;
 units[32] = ['2'];
 blocks[32] = ['A1'];
 comments[32] = "Id Pregunta: 1419. ";
 preguntaids[32] = 1419


//  Id pregunta: 8064 Año de creación de pregunta: 2011
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes principios no aparece como b&aacute;sico en el Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[33]= new Array();
 choices[33][0] = "Seguridad integral";
 choices[33][1] = "An&aacute;lisis de riesgos";
 choices[33][2] = "Reevaluaci&oacute;n peri&oacute;dica";
 choices[33][3] = "Funci&oacute;n diferenciada";
 answers[33] = 1;
 units[33] = ['46'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 8064. El principio es gesti&oacute;n de riesgos, no an&aacute;lisis de riesgos.";
 preguntaids[33] = 8064


//  Id pregunta: 3311 Año de creación de pregunta: 2004
 questions[34]= "35)  &iquest;Cu&aacute;les de los siguientes no son modos de operaci&oacute;n para algoritmos de cifrado por bloques?";
 choices[34]= new Array();
 choices[34][0] = "CTR";
 choices[34][1] = "CBC";
 choices[34][2] = "CFB";
 choices[34][3] = "DFB";
 answers[34] = 3;
 units[34] = ['76'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 3311. ";
 preguntaids[34] = 3311


//  Id pregunta: 5163 Año de creación de pregunta: 2003
 questions[35]= "36)  &iquest;Qu&eacute; nivel OSI garantiza la comunicaci&oacute;n extremo a extremo?";
 choices[35]= new Array();
 choices[35][0] = "3";
 choices[35][1] = "4";
 choices[35][2] = "5";
 choices[35][3] = "6";
 answers[35] = 1;
 units[35] = ['108'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 5163. ";
 preguntaids[35] = 5163


//  Id pregunta: 3261 Año de creación de pregunta: 2003
 questions[36]= "37)  En un modelo de datos jer&aacute;rquico:";
 choices[36]= new Array();
 choices[36][0] = "Un registro no es subordinado directo de ning&uacute;n otro registro.";
 choices[36][1] = "Un registro es subordinado directo de como m&aacute;ximo otro registro.";
 choices[36][2] = "Un registro es subordinado directo de n registros, dependiendo de la topolog&iacute;a del modelo.";
 choices[36][3] = "Los registros estar organizados en una red de relaciones mediante un grafo.";
 answers[36] = 1;
 units[36] = ['60'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 3261. Junta Andaluc&iacute;a";
 preguntaids[36] = 3261


//  Id pregunta: 5288 Año de creación de pregunta: 2006
 questions[37]= "38)  Con que tecnolog&iacute;a no se puede implementar una arquitectura SOA";
 choices[37]= new Array();
 choices[37][0] = "J2EE";
 choices[37][1] = ".Net";
 choices[37][2] = "Software Libre";
 choices[37][3] = "Se puede con todas las anteriores";
 answers[37] = 3;
 units[37] = ['64'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 5288. ";
 preguntaids[37] = 5288


//  Id pregunta: 9456 Año de creación de pregunta: 2014
 questions[38]= "39)  Seg&uacute;n el Real Decreto 1671/2009";
 choices[38]= new Array();
 choices[38][0] = "Se puede someter a todos los ciudadanos al r&eacute;gimen de notificaci&oacute;n electr&oacute;nica obligatoria";
 choices[38][1] = "S&oacute;lo pueden someterse al r&eacute;gimen de notificaci&oacute;n electr&oacute;nica obligatoria a las personas jur&iacute;dicas o colectivos de personas f&iacute;sicas que por raz&oacute;n de su capacidad econ&oacute;mica o t&eacute;cnica, dedicaci&oacute;n profesional u otros motivos acreditados tengan garantizado el acceso y disponibilidad de los medios tecnol&oacute;gicos precisos";
 choices[38][2] = "En ning&uacute;n caso puede imponerse la obligaci&oacute;n de que la notificaci&oacute;n sea &uacute;nicamente por medios electr&oacute;nicos";
 choices[38][3] = "Para establecer la obligatoriedad de las notificaciones por medios electr&oacute;nicos ser&aacute; suficiente la publicaci&oacute;n de una circular en la sede electr&oacute;nica del &oacute;rgano u organismo p&uacute;blico de que se trate.";
 answers[38] = 1;
 units[38] = ['7'];
 blocks[38] = ['A2'];
 comments[38] = "Id Pregunta: 9456. ";
 preguntaids[38] = 9456


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[39]= "40)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[39]= new Array();
 choices[39][0] = "Tres a&ntilde;os.";
 choices[39][1] = "Cuatro a&ntilde;os.";
 choices[39][2] = "Cinco a&ntilde;os.";
 choices[39][3] = "Seis a&ntilde;os.";
 answers[39] = 3;
 units[39] = ['5'];
 blocks[39] = ['A1'];
 comments[39] = "Id Pregunta: 143. Uni&oacute;n Europea";
 preguntaids[39] = 143


//  Id pregunta: 2894 Año de creación de pregunta: 2002
 questions[40]= "41)  Indicar cu&aacute;l de las siguientes no es una estructura v&aacute;lida de marcos en las bases de conocimiento:";
 choices[40]= new Array();
 choices[40][0] = "Jerarqu&iacute;a circular";
 choices[40][1] = "Jerarqu&iacute;a simple";
 choices[40][2] = "Jerarqu&iacute;a m&uacute;ltiple";
 choices[40][3] = "Colecci&oacute;n lineal";
 answers[40] = 0;
 units[40] = ['68'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 2894. ";
 preguntaids[40] = 2894


//  Id pregunta: 9625 Año de creación de pregunta: 2014
 questions[41]= "42)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de supervisar y mejorar la accesibilidad de los portales web de la Administraci&oacute;n?";
 choices[41]= new Array();
 choices[41][0] = "Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[41][1] = "Ministerio de la Presidencia y para las Administraciones Territoriales";
 choices[41][2] = "El Observatorio de Accesibilidad, iniciativa del Ministerio de Hacienda y y Funci&oacute;n P&uacute;blica";
 choices[41][3] = "El Observatorio Estatal de la Discapacidad (OED), iniciativa del Ministerio de Sanidad, Servicios Sociales e Igualdad";
 answers[41] = 2;
 units[41] = ['42'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 9625. http://administracionelectronica.gob.es/pae_Home/pae_Estrategias/pae_Accesibilidad/pae_Observatorio_de_Accesibilidad.html";
 preguntaids[41] = 9625


//  Id pregunta: 9881 Año de creación de pregunta: 2015
 questions[42]= "43)  Fecha de publicaci&oacute;n de la Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas.";
 choices[42]= new Array();
 choices[42][0] = "1 de Junio de 2015";
 choices[42][1] = "1 de Julio de 2015";
 choices[42][2] = "2 de Octubre de 2015";
 choices[42][3] = "1 de Noviembre de 2015";
 answers[42] = 2;
 units[42] = ['7', '19'];
 blocks[42] = ['A2', 'A4'];
 comments[42] = "Id Pregunta: 9881. ";
 preguntaids[42] = 9881


//  Id pregunta: 10908 Año de creación de pregunta: 2015
 questions[43]= "44)  &iquest;Qu&eacute; comando se puede utilizar en un PC con S.O. Windows para obtener la configuraci&oacute;n IP de ese equipo?";
 choices[43]= new Array();
 choices[43][0] = "ifconfig -a";
 choices[43][1] = "netstat -rn";
 choices[43][2] = "iptables -L";
 choices[43][3] = "ipconfig";
 answers[43] = 3;
 units[43] = ['102'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 10908. ";
 preguntaids[43] = 10908


//  Id pregunta: 2902 Año de creación de pregunta: 2002
 questions[44]= "45)  Indicar la respuesta incorrecta sobre las restricciones en inteligencia artificial:";
 choices[44]= new Array();
 choices[44][0] = "Si bien las reglas expresan influencias del tipo causa-efecto entre conceptos, una restricci&oacute;n es una ecuaci&oacute;n que permite expresar m&uacute;ltiples relaciones causa-efecto, estableciendo puntos de sincronismo en el comportamiento de los objetos";
 choices[44][1] = "Una restricci&oacute;n expresa una relaci&oacute;n de equilibrio entre los atributos de uno o m&aacute;s sujetos, y constituye la pieza b&aacute;sica de informaci&oacute;n para la comprensi&oacute;n y modelizaci&oacute;n del conocimiento del mundo real bajo este enfoque";
 choices[44][2] = "Hay dominios de conocimiento que formulados en restriccioness dan lugar a bases de conocimiento muy grandes debido a que el conocimiento se expresa mejor mediante reglas";
 choices[44][3] = "Todo sistema de restricciones debe constar como m&iacute;nimo de un lenguaje de especificaci&oacute;n de restricciones y un procedimiento capaz de interpretar esta especificaci&oacute;n y de evaluar sus respuestas";
 answers[44] = 2;
 units[44] = ['68'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 2902. ";
 preguntaids[44] = 2902


//  Id pregunta: 2088 Año de creación de pregunta: 2002
 questions[45]= "46)  El benchmark es adecuado cuando:";
 choices[45]= new Array();
 choices[45][0] = "Vamos a adquirir aplicaciones a medida";
 choices[45][1] = "Los entornos de las diversas opciones difieren";
 choices[45][2] = "Queremos desarrollar un proyecto innovador";
 choices[45][3] = "Queremos comparar el rendimiento de un sistema respecto al de otros";
 answers[45] = 3;
 units[45] = ['39'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 2088. ";
 preguntaids[45] = 2088


//  Id pregunta: 9923 Año de creación de pregunta: 2015
 questions[46]= "47)  &iquest;Qu&eacute; estructura utiliza SICRES 3?";
 choices[46]= new Array();
 choices[46][0] = "HTML";
 choices[46][1] = "PDF";
 choices[46][2] = "XML";
 choices[46][3] = "Ninguna de las anteriores";
 answers[46] = 2;
 units[46] = ['44'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 9923. ";
 preguntaids[46] = 9923


//  Id pregunta: 6645 Año de creación de pregunta: 2009
 questions[47]= "48)  Indique cuales son las funciones fundamentales de la Comisi&oacute;n Sectorial de Administraci&oacute;n electr&oacute;nica.";
 choices[47]= new Array();
 choices[47][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas. Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a. Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[47][1] = "Desarrollar servicios centrados en los ciudadanos";
 choices[47][2] = "La reutilizaci&oacute;n de los desarrollos y soluciones por todas las Comunidades Aut&oacute;nomas.";
 choices[47][3] = "Incorporar a todas las Comunidades Aut&oacute;nomas a la red de atenci&oacute;n integral a los ciudadanos, Red 060.";
 answers[47] = 0;
 units[47] = ['19'];
 blocks[47] = ['A4'];
 comments[47] = "Id Pregunta: 6645. MAP 2008 A2. Actualizado seg&uacute;n Ley 40/2015";
 preguntaids[47] = 6645


//  Id pregunta: 323 Año de creación de pregunta: 2016
 questions[48]= "49)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[48]= new Array();
 choices[48][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[48][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[48][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[48][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[48] = 3;
 units[48] = ['11'];
 blocks[48] = ['A2'];
 comments[48] = "Id Pregunta: 323. Presupuestos generales";
 preguntaids[48] = 323


//  Id pregunta: 8171 Año de creación de pregunta: 2011
 questions[49]= "50)  Con el objetivo de garantizar la calidad en los servicios p&uacute;blicos se ha creado:";
 choices[49]= new Array();
 choices[49][0] = "La Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de los Servicios (AEVAL) perteneciente al Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[49][1] = "La Direcci&oacute;n General de Aseguramiento de la Calidad e Infraestructuras perteneciente al Ministerio de Energia, Turismo y Agenda Digital.";
 choices[49][2] = "El Consejo Superior de Aseguramiento de la Calidad e Infraestructuras perteneciente al Ministerio de Presidencia.";
 choices[49][3] = "La Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de los Servicios (AEVAL) perteneciente al Ministerio de Pol&iacute;tica Territorial.";
 answers[49] = 0;
 units[49] = ['19'];
 blocks[49] = ['A4'];
 comments[49] = "Id Pregunta: 8171. Examen TIC A2 2010 interna";
 preguntaids[49] = 8171


//  Id pregunta: 1711 Año de creación de pregunta: 2016
 questions[50]= "51)  La capacidad de un m&eacute;todo para llevar a cabo distintas operaciones, recibe el nombre de:";
 choices[50]= new Array();
 choices[50][0] = "Herencia.";
 choices[50][1] = "Polimorfismo.";
 choices[50][2] = "Abstracci&oacute;n.";
 choices[50][3] = "Encapsulaci&oacute;n.";
 answers[50] = 1;
 units[50] = ['85'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 1711. ";
 preguntaids[50] = 1711


//  Id pregunta: 4277 Año de creación de pregunta: 2006
 questions[51]= "52)  Indique cu&aacute;l de las siguientes alternativas corresponde a los procesos principales de que consta la metodolog&iacute;a METRICA  ver. 3";
 choices[51]= new Array();
 choices[51][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n y Mantenimiento de Sistemas de Informaci&oacute;n";
 choices[51][1] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Estudio de viabilidad de  Sistemas de Informaci&oacute;n, Desarrollo  de Sistemas de Informaci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[51][2] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, An&aacute;lisis de Sistemas de Informaci&oacute;n, Construcci&oacute;n e Implantaci&oacute;n de  Sistemas de Informaci&oacute;n y Mantenimiento de Sistemas de Informaci&oacute;n";
 choices[51][3] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n";
 answers[51] = 0;
 units[51] = ['91'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 4277. ";
 preguntaids[51] = 4277


//  Id pregunta: 2680 Año de creación de pregunta: 2002
 questions[52]= "53)  &iquest;Qu&eacute; es la miner&iacute;a de datos?";
 choices[52]= new Array();
 choices[52][0] = "Es el an&aacute;lisis de datos que permite extraer informaci&oacute;n de bases de datos mediante la b&uacute;squeda manual de patrones y relaciones.";
 choices[52][1] = "Es el an&aacute;lisis de datos que permite extraer informaci&oacute;n de bases de datos mediante la b&uacute;squeda automatizada de patrones y relaciones.";
 choices[52][2] = "Es el an&aacute;lisis de datos que permite extraer informaci&oacute;n de bases de datos mediante la b&uacute;squeda aleatoria de patrones y relaciones.";
 choices[52][3] = "Nada de lo anterior es correcto.";
 answers[52] = 1;
 units[52] = ['72'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 2680. ";
 preguntaids[52] = 2680


//  Id pregunta: 8985 Año de creación de pregunta: 2013
 questions[53]= "54)  En el contexto de la firma electr&oacute;nica y su regulaci&oacute;n en Espa&ntilde;a se&ntilde;ale la afirmaci&oacute;n FALSA.";
 choices[53]= new Array();
 choices[53][0] = "Los funcionarios al servicio de las administraciones p&uacute;blicas espa&ntilde;olas pueden firmar en el ejercicio de su cargo utilizando su DNI electr&oacute;nico.";
 choices[53][1] = "Los c&oacute;digos de verificaci&oacute;n segura (CSV) junto con los sellos de &oacute;rgano sirven para dotar de firma electr&oacute;nica reconocida a la actuaci&oacute;n administrativa automatizada.";
 choices[53][2] = "Un dispositivo seguro de creaci&oacute;n de firma debe garantizar que los datos usados para generar la firma pueden producirse s&oacute;lo una vez.";
 choices[53][3] = "Un certificado electr&oacute;nico reconocido ha de incluir la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que lo expide.";
 answers[53] = 1;
 units[53] = ['19'];
 blocks[53] = ['A4'];
 comments[53] = "Id Pregunta: 8985. DUPLICADA";
 preguntaids[53] = 8985


//  Id pregunta: 7759 Año de creación de pregunta: 2010
 questions[54]= "55)  El sub-proyecto de &laquo;Apache&raquo; que incluye funcionalidades de indexaci&oacute;n y b&uacute;squeda en los &iacute;ndices creados es:";
 choices[54]= new Array();
 choices[54][0] = "Watchdog.";
 choices[54][1] = "Turbine.";
 choices[54][2] = "Lucene.";
 choices[54][3] = "Avalon.";
 answers[54] = 2;
 units[54] = ['73'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 7759. ";
 preguntaids[54] = 7759


//  Id pregunta: 2739 Año de creación de pregunta: 2002
 questions[55]= "56)  El acr&oacute;nimo XML corresponde a:";
 choices[55]= new Array();
 choices[55][0] = "Extensible Markup Language";
 choices[55][1] = "Extended Markup Language";
 choices[55][2] = "Expressions Markup Language";
 choices[55][3] = "Extension Markup Language";
 answers[55] = 0;
 units[55] = ['74'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 2739. ";
 preguntaids[55] = 2739


//  Id pregunta: 4 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[56]= new Array();
 choices[56][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[56][1] = "Solamente el Congreso.";
 choices[56][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[56][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[56] = 0;
 units[56] = ['1'];
 blocks[56] = ['A1'];
 comments[56] = "Id Pregunta: 4. Constituci&oacute;n de 1978";
 preguntaids[56] = 4


//  Id pregunta: 10421 Año de creación de pregunta: 2015
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo de la clase HttpServlet?";
 choices[57]= new Array();
 choices[57][0] = "doGet(). Se ejecuta cuando se recibe una petici&oacute;n HTTP GET.";
 choices[57][1] = "doPush(). Se ejecuta cuando se recibe una petici&oacute;n HTTP PUSH.";
 choices[57][2] = "doPost(). Se ejecuta cuando se recibe una petici&oacute;n HTTP POST.";
 choices[57][3] = "doPut(). Se ejecuta cuando se recibe una petici&oacute;n HTTP PUT.";
 answers[57] = 1;
 units[57] = ['64'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 10421. ";
 preguntaids[57] = 10421


//  Id pregunta: 7814 Año de creación de pregunta: 2010
 questions[58]= "59)  En referencia a la arquitectura .NET, seleccione cu&aacute;l de las expresiones siguientes es FALSA:";
 choices[58]= new Array();
 choices[58][0] = "Las versiones 1.0, 1.1 y 2.0. de .NET Framework son totalmente independientes unas de otras, por lo que se pueden instalar en cualquier orden.";
 choices[58][1] = "Cuando las versiones 1.0, 1.1 y 2.0 est&aacute;n en el mismo equipo, comparten un &uacute;nico Common Language Runtime.";
 choices[58][2] = ".NET Framework 4.6 ya est&aacute; disponible en la Web de Microsoft.";
 choices[58][3] = "Common Language Specification (CLS) es un conjunto de reglas pensado para promover la interoperabilidad entre los lenguajes.";
 answers[58] = 1;
 units[58] = ['63'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 7814. ";
 preguntaids[58] = 7814


//  Id pregunta: 5256 Año de creación de pregunta: 2006
 questions[59]= "60)  El puerto reservado para el protocolo SMTP es";
 choices[59]= new Array();
 choices[59][0] = "80";
 choices[59][1] = "25";
 choices[59][2] = "110";
 choices[59][3] = "69";
 answers[59] = 1;
 units[59] = ['103'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 5256. ";
 preguntaids[59] = 5256


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[60]= "61)  Las decisiones de la Comisi&oacute;n se adoptar&aacute;n por:";
 choices[60]= new Array();
 choices[60][0] = "Unanimidad y mayor&iacute;a simple.";
 choices[60][1] = "Unanimidad.";
 choices[60][2] = "Mayor&iacute;a cualificada.";
 choices[60][3] = "Mayor&iacute;a simple.";
 answers[60] = 3;
 units[60] = ['5'];
 blocks[60] = ['A1'];
 comments[60] = "Id Pregunta: 187. Uni&oacute;n Europea";
 preguntaids[60] = 187


//  Id pregunta: 1101 Año de creación de pregunta: 2016
 questions[61]= "62)  Indique la afirmaci&oacute;n correcta respecto a XAdES-T:";
 choices[61]= new Array();
 choices[61][0] = "Contiene la forma b&aacute;sica de firma que cumple los requisitos legales de la Directiva para firma electr&oacute;nica avanzada, informaci&oacute;n sobre la pol&iacute;tica de firma (opcional) y a&ntilde;ade un campo de sellado de tiempo para proteger contra el repudio.";
 choices[61][1] = "Es la forma b&aacute;sica de firma a la que se la ha a&ntilde;adido informaci&oacute;n sobre la pol&iacute;tica de firma.";
 choices[61][2] = "A&ntilde;ade a la forma b&aacute;sica de firma la posibilidad de timestamping peri&oacute;dico de documentos archivados para prevenir que puedan ser comprometidos debido a la debilidad de la firma durante un periodo largo de almacenamiento.";
 choices[61][3] = "A&ntilde;ade sellos de tiempo a las referencias introducidas por XAdES-C para evitar que pueda verse comprometida en el futuro una cadena de certificados.";
 answers[61] = 0;
 units[61] = ['77'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 1101. ";
 preguntaids[61] = 1101


//  Id pregunta: 102 Año de creación de pregunta: 2016
 questions[62]= "63)  El pacto fiscal europeo de 2012 incluye:";
 choices[62]= new Array();
 choices[62][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[62][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[62][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[62][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[62] = 0;
 units[62] = ['5'];
 blocks[62] = ['A1'];
 comments[62] = "Id Pregunta: 102. Uni&oacute;n Europea";
 preguntaids[62] = 102


//  Id pregunta: 8405 Año de creación de pregunta: 2011
 questions[63]= "64)  Los sistemas de cifrado sim&eacute;trico se basan en:";
 choices[63]= new Array();
 choices[63][0] = "Cifrar con la clave privada y descifrar con la clave p&uacute;blica, para garantizar la autenticidad del emisor.";
 choices[63][1] = "Cifrar con una sola clave, y no descifrar en el destino, para salvaguardar la integridad.";
 choices[63][2] = "Cifrar y descifrar con la misma clave.";
 choices[63][3] = "Cifrar con la clave p&uacute;blica y descifrar con la privada, para garantizar la confidencialidad";
 answers[63] = 2;
 units[63] = ['76'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 8405. Operador Ayto. Madrid 2010";
 preguntaids[63] = 8405


//  Id pregunta: 9853 Año de creación de pregunta: 2015
 questions[64]= "65)  &iquest;Cu&aacute;les son los dos modelos de autoevaluaci&oacute;n seg&uacute;n ISO 9004?";
 choices[64]= new Array();
 choices[64][0] = "El de los Criterios Operativos y el de los Criterios Aumentados.";
 choices[64][1] = "El de Estimulaci&oacute;n y el de Mantenimiento.";
 choices[64][2] = "El de Aproximaci&oacute;n Formal y el de Aproximaci&oacute;n Reactiva.";
 choices[64][3] = "El de los Elementos Clave y el de los Elementos Detallados";
 answers[64] = 3;
 units[64] = ['92'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 9853. ";
 preguntaids[64] = 9853


//  Id pregunta: 8153 Año de creación de pregunta: 2011
 questions[65]= "66)  &iquest;En qu&eacute; a&ntilde;o ha concluido el apag&oacute;n anal&oacute;gico en Espa&ntilde;a?";
 choices[65]= new Array();
 choices[65][0] = "2007";
 choices[65][1] = "2008";
 choices[65][2] = "2009";
 choices[65][3] = "2010";
 answers[65] = 3;
 units[65] = ['115'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 8153. Examen TIC A2 2010 interna";
 preguntaids[65] = 8153


//  Id pregunta: 1995 Año de creación de pregunta: 2016
 questions[66]= "67)  Para los actos y gestiones de mero tr&aacute;mite en un procedimiento administrativo, en el que se act&uacute;e por representaci&oacute;n frente a la administraci&oacute;n:";
 choices[66]= new Array();
 choices[66][0] = "Deber&aacute; acreditarse la representaci&oacute;n por cualquier medio v&aacute;lido en derecho que deje constancia fidedigna, o mediante declaraci&oacute;n en comparecencia del interesado.";
 choices[66][1] = "Se presumir&aacute; la representaci&oacute;n.";
 choices[66][2] = "Deber&aacute; asumir la representaci&oacute;n un abogado.";
 choices[66][3] = "Deber&aacute; asumir la representaci&oacute;n del interesado un abogado acompa&ntilde;ado de procurador.";
 answers[66] = 1;
 units[66] = ['7'];
 blocks[66] = ['A2'];
 comments[66] = "Id Pregunta: 1995. ";
 preguntaids[66] = 1995


//  Id pregunta: 318 Año de creación de pregunta: 2016
 questions[67]= "68)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[67]= new Array();
 choices[67][0] = "El presidente de las Cortes Generales.";
 choices[67][1] = "El Presidente del Gobierno.";
 choices[67][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[67][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[67] = 3;
 units[67] = ['11'];
 blocks[67] = ['A2'];
 comments[67] = "Id Pregunta: 318. Presupuestos generales";
 preguntaids[67] = 318


//  Id pregunta: 6794 Año de creación de pregunta: 2010
 questions[68]= "69)  SIP (Session Initiation Protocol) es un protocolo que sirve para:";
 choices[68]= new Array();
 choices[68][0] = "Establecer videoconferencias sobre redes con calidad de servicio (ancho de banda garantizado).";
 choices[68][1] = "Realizar el transporte de flujos multimedia.";
 choices[68][2] = "Iniciar una sesi&oacute;n de correo web.";
 choices[68][3] = "Control y se&ntilde;alizaci&oacute;n, permite establecer y gestionar llamadas/conexiones de flujos multimedia.";
 answers[68] = 3;
 units[68] = ['122'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 6794. TIC A 2009";
 preguntaids[68] = 6794


//  Id pregunta: 9438 Año de creación de pregunta: 2014
 questions[69]= "70)  La red espa&ntilde;ola para investigaci&oacute;n y educaci&oacute;n es:";
 choices[69]= new Array();
 choices[69][0] = "GEANT";
 choices[69][1] = "IRIS";
 choices[69][2] = "TESTA";
 choices[69][3] = "SARA";
 answers[69] = 1;
 units[69] = ['114'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 9438. ";
 preguntaids[69] = 9438


//  Id pregunta: 9265 Año de creación de pregunta: 2014
 questions[70]= "71)  Indique la opci&oacute;n falsa:";
 choices[70]= new Array();
 choices[70][0] = "En la capa de red, el modelo OSI s&oacute;lo considera comunicaci&oacute;n orientada a conexi&oacute;n.";
 choices[70][1] = "Igualmente, en la capa de transporte se ofrece s&oacute;lo comunicaci&oacute;n orientada a conexi&oacute;n.";
 choices[70][2] = "El modelo TCP/IP en la capa de red s&oacute;lo tiene el modo sin conexi&oacute;n.";
 choices[70][3] = "Todas son verdaderas.";
 answers[70] = 0;
 units[70] = ['105'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 9265. ";
 preguntaids[70] = 9265


//  Id pregunta: 1885 Año de creación de pregunta: 2016
 questions[71]= "72)  En el contexto de seguridad en redes, que se entiende por cortatuegos:";
 choices[71]= new Array();
 choices[71][0] = "Un sistema que separa, en cuanto a seguridad se refiere, una m&aacute;quina o sub red del resto";
 choices[71][1] = "Es un programa que se instala en un anfitri&oacute;n de la red interna para proteger los accesos a la misma.";
 choices[71][2] = "Es un sistema que se instala en la red externa para controlar los accesos a la red interna";
 choices[71][3] = "Es software o dispositivo que realiza una acci&oacute;n en representaci&oacute;n de otro, garantizado as! su seguridad.";
 answers[71] = 0;
 units[71] = ['119'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 1885. ";
 preguntaids[71] = 1885


//  Id pregunta: 123 Año de creación de pregunta: 2016
 questions[72]= "73)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[72]= new Array();
 choices[72][0] = "Cinco a&ntilde;os.";
 choices[72][1] = "Cuatro a&ntilde;os.";
 choices[72][2] = "Tres a&ntilde;os.";
 choices[72][3] = "Seis meses.";
 answers[72] = 2;
 units[72] = ['5'];
 blocks[72] = ['A1'];
 comments[72] = "Id Pregunta: 123. Uni&oacute;n Europea";
 preguntaids[72] = 123


//  Id pregunta: 5625 Año de creación de pregunta: 2007
 questions[73]= "74)  Respecto a los servicios Web, podemos afirmar que:";
 choices[73]= new Array();
 choices[73][0] = "WDSL define los criterios para los registros basados en Ia red.";
 choices[73][1] = "XML busca Ia definici&oacute;n y descripci&oacute;n de los servicios Web";
 choices[73][2] = "SOAP proporciona una manera estandar de transportar mensajes para el uso de servicios Web";
 choices[73][3] = "UUID define un protocolo de comunicaci&oacute;n f&iacute;sica entre ordenadores.";
 answers[73] = 2;
 units[73] = ['55'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 5625. ";
 preguntaids[73] = 5625


//  Id pregunta: 2504 Año de creación de pregunta: 2004
 questions[74]= "75)  Seg&uacute;n su comportamiento durante la ejecuci&oacute;n de un programa, las estructuras de datos se pueden clasificar en:";
 choices[74]= new Array();
 choices[74][0] = "Est&aacute;ticas y din&aacute;micas";
 choices[74][1] = "De clase y de objeto";
 choices[74][2] = "De iteraci&oacute;n, de recursi&oacute;n y de bifurcaci&oacute;n";
 choices[74][3] = "De flujo de control y de flujo de datos";
 answers[74] = 0;
 units[74] = ['60'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 2504. Examen TIC MAP B 2004";
 preguntaids[74] = 2504


