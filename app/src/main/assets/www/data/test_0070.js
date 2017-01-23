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
//  Id pregunta: 47 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[0]= new Array();
 choices[0][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[0][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[0][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[0][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[0] = 0;
 units[0] = ['1'];
 blocks[0] = ['A1'];
 comments[0] = "Id Pregunta: 47. Constituci&oacute;n de 1978";
 preguntaids[0] = 47


//  Id pregunta: 7703 Año de creación de pregunta: 2010
 questions[1]= "2)  En relaci&oacute;n con las ventanas de cr&eacute;dito (de recepci&oacute;n y de env&iacute;o) que utiliza el protocolo TCP para el control de flujo, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[1]= new Array();
 choices[1][0] = "Permiten que el emisor no tenga que esperar un ACK (acknowledge) para cada segmento de datos transmitido.";
 choices[1][1] = "El tama&ntilde;o del b&uacute;fer de estas ventanas est&aacute; limitado a 4096 bytes.";
 choices[1][2] = "Impiden que se reenv&iacute;en paquetes pasado un time-out.";
 choices[1][3] = "Hace que el canal de comunicaci&oacute;n est&eacute; m&aacute;s tiempo ocupado para transmitir la misma informaci&oacute;n.";
 answers[1] = 0;
 units[1] = ['109'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 7703. Map 2007";
 preguntaids[1] = 7703


//  Id pregunta: 9880 Año de creación de pregunta: 2015
 questions[2]= "3)  Elija la afirmaci&oacute;n correcta sobre el est&aacute;ndar DOCSIS:";
 choices[2]= new Array();
 choices[2][0] = "Se puede emplear para proporcionar acceso a Internet sobre una infraestructura de red HFC.";
 choices[2][1] = "Permite a&ntilde;adir transferencias de datos de alta velocidad a un sistema de televisi&oacute;n por cable (CATV)";
 choices[2][2] = "La versi&oacute;n europea se denomina EuroDOCSIS.";
 choices[2][3] = "Todas las anteriores son correctas.";
 answers[2] = 3;
 units[2] = ['115'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 9880. ";
 preguntaids[2] = 9880


//  Id pregunta: 10149 Año de creación de pregunta: 2015
 questions[3]= "4)  Respecto a la Comisi&oacute;n de Estrategia TIC de la Administraci&oacute;n General del Estado, se&ntilde;ale la respuesta correcta:";
 choices[3]= new Array();
 choices[3][0] = "Est&aacute; adscrita al Ministerio de la Presidencia y es el &oacute;rgano encargado de la definici&oacute;n de la aplicaci&oacute;n de la Estrategia TIC de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos.";
 choices[3][1] = "Impulsa la colaboraci&oacute;n y cooperaci&oacute;n con las comunidades aut&oacute;nomas y las entidades locales para la puesta en marcha de servicios interadministrativos integrados.";
 choices[3][2] = "Define las prioridades de inversi&oacute;n en materias TIC bajo un convenio marco de colaboraci&oacute;n con la Direcci&oacute;n General de Patrimonio del Estado.";
 choices[3][3] = "Elevar&aacute; semestralmente, a trav&eacute;s de su Presidente, un informe al Consejo de Ministros, en el que se recoger&aacute; el estado de la transformaci&oacute;n digital de las Administraciones P&uacute;blicas.";
 answers[3] = 1;
 units[3] = ['19'];
 blocks[3] = ['A4'];
 comments[3] = "Id Pregunta: 10149. Examen TIC A1 2014";
 preguntaids[3] = 10149


//  Id pregunta: 5836 Año de creación de pregunta: 2007
 questions[4]= "5)  El sello de oro del modelo EFQM se obtiene a partir de una evaluaci&oacute;n de:";
 choices[4]= new Array();
 choices[4][0] = "400 puntos sobre 1000.";
 choices[4][1] = "500 puntos sobre 1000.";
 choices[4][2] = "700 puntos sobre 1000.";
 choices[4][3] = "900 puntos sobre 1000.";
 answers[4] = 1;
 units[4] = ['98'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 5836. Examen 2006 JCYL";
 preguntaids[4] = 5836


//  Id pregunta: 975 Año de creación de pregunta: 2016
 questions[5]= "6)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[5]= new Array();
 choices[5][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[5][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[5][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[5][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[5] = 0;
 units[5] = ['4', '7', '8', '9'];
 blocks[5] = ['A1', 'A2'];
 comments[5] = "Id Pregunta: 975. Ley 40/2015";
 preguntaids[5] = 975


//  Id pregunta: 145 Año de creación de pregunta: 2016
 questions[6]= "7)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[6]= new Array();
 choices[6][0] = "Veinticinco.";
 choices[6][1] = "Veintiuno.";
 choices[6][2] = "Dieciocho.";
 choices[6][3] = "Diecinueve.";
 answers[6] = 0;
 units[6] = ['5'];
 blocks[6] = ['A1'];
 comments[6] = "Id Pregunta: 145. Uni&oacute;n Europea";
 preguntaids[6] = 145


//  Id pregunta: 8073 Año de creación de pregunta: 2011
 questions[7]= "8)  Uno de los problemas m&aacute;s serios que se pueden presentar en un ambiente de concurrencia es el &ldquo;abrazo mortal&rdquo; (deadlock), el cu&aacute;l se produce cuando se presentan al mismo tiempo 4 condiciones necesarias. &iquest;Cu&aacute;l de las siguientes no es una de ellas?";
 choices[7]= new Array();
 choices[7][0] = "Condici&oacute;n de no apropiaci&oacute;n";
 choices[7][1] = "Condici&oacute;n de espera circular";
 choices[7][2] = "Condici&oacute;n de exclusi&oacute;n mutua";
 choices[7][3] = "Condici&oacute;n de espera ocupada";
 answers[7] = 3;
 units[7] = ['56'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 8073. ";
 preguntaids[7] = 8073


//  Id pregunta: 3460 Año de creación de pregunta: 2009
 questions[8]= "9)  Se&ntilde;ale la falsa:";
 choices[8]= new Array();
 choices[8][0] = "XML Encryption es un lenguaje cuya funci&oacute;n principal es asegurar la confidencialidad de partes de documentos XML a trav&eacute;s de la encriptaci&oacute;n parcial del documento transportado";
 choices[8][1] = "XML Encryption se puede aplicar a cualquier recurso Web, incluyendo contenido que no es XML.";
 choices[8][2] = "XML Encryption establece que es posible cifrar datos a distintos niveles de granularidad, desde elementos simples hasta documentos enteros";
 choices[8][3] = "Ninguna de las anteriores es falsa.";
 answers[8] = 3;
 units[8] = ['76'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 3460. ";
 preguntaids[8] = 3460


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[9]= "10)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[9]= new Array();
 choices[9][0] = "SMB3";
 choices[9][1] = "AFP";
 choices[9][2] = "NFS";
 choices[9][3] = "FTP";
 answers[9] = 0;
 units[9] = ['59'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 676. AGE A1 2015";
 preguntaids[9] = 676


//  Id pregunta: 9143 Año de creación de pregunta: 2014
 questions[10]= "11)  Seg&uacute;n la Ley 37/2007 de Reutilizaci&oacute;n de Informaci&oacute;n del Sector P&uacute;blico, son infracciones muy graves:";
 choices[10]= new Array();
 choices[10][0] = "La reutilizaci&oacute;n de documentaci&oacute;n sin haber obtenido la correspondiente licencia en los casos en que &eacute;sta sea requerida.";
 choices[10][1] = "La reutilizaci&oacute;n de la informaci&oacute;n para una finalidad distinta a la que se concedi&oacute;.";
 choices[10][2] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia.";
 choices[10][3] = "La ausencia de cita de la fuente.";
 answers[10] = 2;
 units[10] = ['27'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 9143. ";
 preguntaids[10] = 9143


//  Id pregunta: 7632 Año de creación de pregunta: 2010
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes respuestas NO corresponde al modelo de compresi&oacute;n de im&aacute;genes JPEG (Joint Photographic Experts Group)?";
 choices[11]= new Array();
 choices[11][0] = "B&aacute;sico/secuencial.";
 choices[11][1] = "Jer&aacute;rquico.";
 choices[11][2] = "Progresivo.";
 choices[11][3] = "Conjugado modificado.";
 answers[11] = 3;
 units[11] = ['80'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 7632. Map 2006";
 preguntaids[11] = 7632


//  Id pregunta: 10604 Año de creación de pregunta: 2015
 questions[12]= "13)  Seg&uacute;n la Ley 9/2014, cu&aacute;l de los siguientes NO es un derecho espec&iacute;fico de los usuarios finales de redes y servicios de comunicaciones electr&oacute;nicos dispuestos al p&uacute;blico:";
 choices[12]= new Array();
 choices[12][0] = "Derecho a la continuidad de servicio y a obtener compensaci&oacute;n por su interrupci&oacute;n.";
 choices[12][1] = "Derecho de acceso a servicio de emergencias de forma gratuita.";
 choices[12][2] = "Derecho a informaci&oacute;n veraz, eficaz, suficiente y transparente.";
 choices[12][3] = "Derecho a autorizar el desv&iacute;o automatizado de llamadas.";
 answers[12] = 3;
 units[12] = ['121'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 10604. Articulo 47";
 preguntaids[12] = 10604


//  Id pregunta: 188 Año de creación de pregunta: 2016
 questions[13]= "14)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[13]= new Array();
 choices[13][0] = "25 parlamentarios.";
 choices[13][1] = "29 parlamentarios.";
 choices[13][2] = "18 parlamentarios.";
 choices[13][3] = "23 parlamentarios.";
 answers[13] = 0;
 units[13] = ['5'];
 blocks[13] = ['A1'];
 comments[13] = "Id Pregunta: 188. Uni&oacute;n Europea";
 preguntaids[13] = 188


//  Id pregunta: 1534 Año de creación de pregunta: 2016
 questions[14]= "15)  De acuerdo con lo previsto en el art&iacute;culo 20 de la Ley Org&aacute;nica 3/2007, los poderes p&uacute;blicos deben considerar la variable sexo, en la realizaci&oacute;n:";
 choices[14]= new Array();
 choices[14][0] = "De compras p&uacute;blicas de bienes y servicios inform&aacute;ticos.";
 choices[14][1] = "De estad&iacute;sticas, encuestas y recogidas de datos que lleven a cabo.";
 choices[14][2] = "Del dise&ntilde;o de formularios de las autoliquidaciones tributarias.";
 choices[14][3] = "De proyectos de actuaci&oacute;n o reforma de bienes inmuebles del patrimonio del estado.";
 answers[14] = 1;
 units[14] = ['14'];
 blocks[14] = ['A3'];
 comments[14] = "Id Pregunta: 1534. ";
 preguntaids[14] = 1534


//  Id pregunta: 2318 Año de creación de pregunta: 2002
 questions[15]= "16)  Uno de los principales impulsores del concepto de organizaci&oacute;n basada en la informaci&oacute;n ha sido:";
 choices[15]= new Array();
 choices[15][0] = "Elton Mayo";
 choices[15][1] = "Peter Drucker";
 choices[15][2] = "Lynda Applegate";
 choices[15][3] = "Pigrogine";
 answers[15] = 1;
 units[15] = ['25'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 2318. ";
 preguntaids[15] = 2318


//  Id pregunta: 8924 Año de creación de pregunta: 2013
 questions[16]= "17)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[16]= new Array();
 choices[16][0] = "Cuando una inversi&oacute;n tiene VAN positivo, la TIR es superior al coste de capital invertido";
 choices[16][1] = "Cuando una inversi&oacute;n tiene VAN negativo, la TIR es inferior al coste de capital invertido";
 choices[16][2] = "VAN y TIR son m&eacute;todos din&aacute;micos de selecci&oacute;n de inversiones";
 choices[16][3] = "Todas las afirmaciones anteriores son correctas";
 answers[16] = 3;
 units[16] = ['40'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 8924. ";
 preguntaids[16] = 8924


//  Id pregunta: 6033 Año de creación de pregunta: 2003
 questions[17]= "18)  De los siguientes tipos de pruebas relacionados a continuaci&oacute;n, indique, seg&uacute;n M&eacute;trica v.3, aquel tipo de pruebas que cronol&oacute;gicamente se realiza en &uacute;ltimo lugar:";
 choices[17]= new Array();
 choices[17][0] = "Pruebas de integraci&oacute;n.";
 choices[17][1] = "Pruebas unitarias.";
 choices[17][2] = "Pruebas de implantaci&oacute;n.";
 choices[17][3] = "Pruebas de aceptaci&oacute;n.";
 answers[17] = 3;
 units[17] = ['91'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 6033. TIC B 2007";
 preguntaids[17] = 6033


//  Id pregunta: 9085 Año de creación de pregunta: 2014
 questions[18]= "19)  De acuerdo con la definiciones dadas por el grupo de trabajo del IEEE Computer Society, la reestructuraci&oacute;n software (restructuring) es";
 choices[18]= new Array();
 choices[18][0] = "el proceso de analizar un sistema para identificar los componentes y las interrelaciones entre ellos.";
 choices[18][1] = "el examen y la modificaci&oacute;n de un sistema para ser reconstruido de una forma nueva y realizar la implantaci&oacute;n derivada de esta nueva forma.";
 choices[18][2] = "la transformaci&oacute;n de una forma de representaci&oacute;n de un sistema en otra distinta pero sin modificar el comportamiento externo del sistema.";
 choices[18][3] = "un proceso completo que va desde una alto nivel de abstracci&oacute;n, hasta la propia implementaci&oacute;n f&iacute;sica del sistema.";
 answers[18] = 2;
 units[18] = ['97'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 9085. Examen TIC-A1 2013";
 preguntaids[18] = 9085


//  Id pregunta: 7886 Año de creación de pregunta: 2011
 questions[19]= "20)  En el modelo de referencia de Interconexi&oacute;n de sistemas abiertos (OSI/ISO), &iquest;cu&aacute;l es la afirmaci&oacute;n correcta?:";
 choices[19]= new Array();
 choices[19][0] = "Las normas de intercomunicaci&oacute;n entre capas constituyen cada protocolo.";
 choices[19][1] = "No todos los nodos participantes en una comunicaci&oacute;n necesitan implementar todas las capas del modelo.";
 choices[19][2] = "Cada entidad del nivel N se comunica directamente con su par.";
 choices[19][3] = "Al especificar cualquier servicio que una capa proporciona, se emplean siempre las primitivas REQUEST, INDICATION, RESPONSE, CONFIRM.";
 answers[19] = 1;
 units[19] = ['105'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 7886. Examen TIC A1 2010";
 preguntaids[19] = 7886


//  Id pregunta: 3471 Año de creación de pregunta: 2006
 questions[20]= "21)  De acuerdo con la normativa relativa sobre firma electr&oacute;nica, se&ntilde;ale la falsa:";
 choices[20]= new Array();
 choices[20][0] = "La prestaci&oacute;n de servicios de certificaci&oacute;n no est&aacute; sujeta a autorizaci&oacute;n previa y se realizar&aacute; en r&eacute;gimen de libre competencia";
 choices[20][1] = "El firmante es una persona que posee el dispositivo de creaci&oacute;n de firma y que act&uacute;a en nombre propio o de una persona f&iacute;sica o jur&iacute;dica a la que representa.";
 choices[20][2] = "En el caso de certificados reconocidos, el per&iacute;odo de validez no podr&aacute; ser superior a 4 a&ntilde;os";
 choices[20][3] = "En el caso de certificados reconocidos, el per&iacute;odo de validez no podr&aacute; ser superior a 5 a&ntilde;os";
 answers[20] = 2;
 units[20] = ['19'];
 blocks[20] = ['A4'];
 comments[20] = "Id Pregunta: 3471. ";
 preguntaids[20] = 3471


//  Id pregunta: 3197 Año de creación de pregunta: 2003
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes afirmaciones pertenece al RD 209/2003 ?";
 choices[21]= new Array();
 choices[21][0] = "Se podr&aacute; utilizar una direcci&oacute;n de correo ordinario para recibir avisos de env&iacute;os la direcci&oacute;n de correo &uacute;nica, no consider&aacute;ndose la notificaci&oacute;n enviada si no se ha recibido ese aviso";
 choices[21][1] = "Si el usuario lo escoge la administraci&oacute;n estar&aacute; obligada a avisar al ciudadano de que tiene una notificaci&oacute;n mediante una mensaje SMS";
 choices[21][2] = "Si el usuario al cabo de 10 d&iacute;as desde que ha recibido la notificaci&oacute;n, no la abre, se pasa a considerar otro tipo de notificaci&oacute;n, con otro plazo para la misma";
 choices[21][3] = "Si el cliente al cabo de 10 desde que ha recibido la notificaci&oacute;n, no la abre, se considera que la notificaci&oacute;n ha sido rechazada";
 answers[21] = 3;
 units[21] = ['19'];
 blocks[21] = ['A4'];
 comments[21] = "Id Pregunta: 3197. ";
 preguntaids[21] = 3197


//  Id pregunta: 1455 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n el Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la LOPD. &iquest;Qu&eacute; afirmaci&oacute;n es correcta acerca del documento de seguridad?";
 choices[22]= new Array();
 choices[22][0] = "El responsable de los ficheros con datos personales, elaborar&aacute; un &uacute;nico documento de seguridad que cubra todos los ficheros de los que es responsable.";
 choices[22][1] = "Entre los aspectos optativos a incluir dentro del documento se encuentra la descripci&oacute;n de los sistemas de informaci&oacute;n que los tratan.";
 choices[22][2] = "Deber&aacute; incluir siempre las medidas que es necesario adoptar para el transporte de soportes y documentos.";
 choices[22][3] = "Ser&aacute; obligatorio incluir en todo caso la identificaci&oacute;n del responsable o responsables de seguridad.";
 answers[22] = 2;
 units[22] = ['35'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 1455. ";
 preguntaids[22] = 1455


//  Id pregunta: 9708 Año de creación de pregunta: 2014
 questions[23]= "24)  &iquest;Cual de los siguientes no es un tipo de ataque ?";
 choices[23]= new Array();
 choices[23][0] = "Ataque por entrop&iacute;a";
 choices[23][1] = "Ataque por fuerza bruta";
 choices[23][2] = "Ataque con Tablas Arcoiris";
 choices[23][3] = "Todos son tipos de ataques";
 answers[23] = 0;
 units[23] = ['120'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 9708. No hay referencias a ataques por entropia. En la guia CCN-STIC 436, por ejemplo, se pueden encontrar referencias a taques con Tablas Arcoiris, tambien en Wikipedia";
 preguntaids[23] = 9708


//  Id pregunta: 6843 Año de creación de pregunta: 2010
 questions[24]= "25)  Sobre la representaci&oacute;n del conocimiento:";
 choices[24]= new Array();
 choices[24][0] = "Los algoritmos gen&eacute;ticos usan representaci&oacute;n param&eacute;trica";
 choices[24][1] = "Las redes neuronales usan representaci&oacute;n simb&oacute;lica";
 choices[24][2] = "Las dos respuestas anteriores son correctas";
 choices[24][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[24] = 0;
 units[24] = ['67', '68'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 6843. ";
 preguntaids[24] = 6843


//  Id pregunta: 7500 Año de creación de pregunta: 2010
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa sobre el formato JAR?";
 choices[25]= new Array();
 choices[25][0] = "Utiliza el mismo algoritmo de compresi&oacute;n que los archivos .ZIP.";
 choices[25][1] = "Es compatible con los sistemas de distribuci&oacute;n autom&aacute;tica.";
 choices[25][2] = "Los ficheros con este formato son independientes de la plataforma.";
 choices[25][3] = "Un fichero con este formato debe incluir obligatoriamente las firmas digitales de los ficheros que contiene.";
 answers[25] = 3;
 units[25] = ['64'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 7500. Map 2005";
 preguntaids[25] = 7500


//  Id pregunta: 6844 Año de creación de pregunta: 2010
 questions[26]= "27)  &iquest;Qu&eacute; regula la normativa de ICT (Infraestructuras Comunes de Telecomunicaci&oacute;n)?";
 choices[26]= new Array();
 choices[26][0] = "El acceso a los servicios de telecomunicaci&oacute;n en el interior de los edificios";
 choices[26][1] = "Los servicios de difusi&oacute;n de radio y televisi&oacute;n por cable";
 choices[26][2] = "La consideraci&oacute;n de Internet como servicio universal";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = 0;
 units[26] = ['121'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 6844. ";
 preguntaids[26] = 6844


//  Id pregunta: 9339 Año de creación de pregunta: 2014
 questions[27]= "28)  En un entorno de base de datos relacional, si se puede afirmar que los valores de una clave ajena coinciden con los valores de la clave primaria a la que hace referencia o son nulos  entonces se est&aacute; cumpliendo:";
 choices[27]= new Array();
 choices[27][0] = "Regla de los nulos.";
 choices[27][1] = "Regla de integridad de la entidad.";
 choices[27][2] = "Regla de la integridad referencial.";
 choices[27][3] = "Regla de los valores ajenos.";
 answers[27] = 2;
 units[27] = ['61'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 9339. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[27] = 9339


//  Id pregunta: 7747 Año de creación de pregunta: 2010
 questions[28]= "29)  El XML (Extensible Markup Language) ha sido desarrollado por el W3C. Indique cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[28]= new Array();
 choices[28][0] = "Proviene del SGML.";
 choices[28][1] = "Pretende ser un est&aacute;ndar para el intercambio de informaci&oacute;n entre plataformas no circunscrito exclusivamente a Internet.";
 choices[28][2] = "Dada su extensibilidad no se soporta en bases de datos sino que requiere formatos de texto plano.";
 choices[28][3] = "No es un lenguaje propiamente dicho sino un metalenguaje creado para definir lenguages que cubran diferentes necesidades.";
 answers[28] = 2;
 units[28] = ['74'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 7747. ";
 preguntaids[28] = 7747


//  Id pregunta: 10556 Año de creación de pregunta: 2015
 questions[29]= "30)  Seg&uacute;n ITIL v3, las m&eacute;tricas que se usan normalmente en Gesti&oacute;n de Servicios TI son:";
 choices[29]= new Array();
 choices[29][0] = "De tecnolog&iacute;a (recursos), de gesti&oacute;n (procesos) y de servicios";
 choices[29][1] = "De tecnolog&iacute;a y de servicios";
 choices[29][2] = "De servicios y de personas";
 choices[29][3] = "De servicios y de procesos";
 answers[29] = 0;
 units[29] = ['101'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 10556. ";
 preguntaids[29] = 10556


//  Id pregunta: 238 Año de creación de pregunta: 2016
 questions[30]= "31)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[30]= new Array();
 choices[30][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[30][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[30][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[30][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[30] = 1;
 units[30] = ['7'];
 blocks[30] = ['A2'];
 comments[30] = "Id Pregunta: 238. Ley 39/2015";
 preguntaids[30] = 238


//  Id pregunta: 4433 Año de creación de pregunta: 2002
 questions[31]= "32)  Se dice que una l&iacute;nea es 'half duplex' cuando:";
 choices[31]= new Array();
 choices[31][0] = "Los terminales de datos de ambos extremos de la l&iacute;nea pueden transmitir simult&aacute;neamente sin restricciones";
 choices[31][1] = "Los terminales de datos de ambos extremos de la l&iacute;nea, son se&ntilde;alizados por la red para poder comenzar su turno de transmisi&oacute;n";
 choices[31][2] = "Los terminales de datos de ambos extremos de la l&iacute;nea utilizan una se&ntilde;alizaci&oacute;n especial para cambiar el sentido de transmisi&oacute;n del canal";
 choices[31][3] = "Los terminales de datos de ambos extremos de la l&iacute;nea, pueden transmitir de forma ininterrumpida independientemente de la actividad del otro terminal";
 answers[31] = 2;
 units[31] = ['109'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 4433. ";
 preguntaids[31] = 4433


//  Id pregunta: 5155 Año de creación de pregunta: 2003
 questions[32]= "33)  &iquest;C&uacute;antos canales tiene una trama MIC (PCM en ingl&eacute;s)?:";
 choices[32]= new Array();
 choices[32][0] = "32";
 choices[32][1] = "16";
 choices[32][2] = "32, pero dos de ellos se utilizan para se&ntilde;alizaci&oacute;n y sincronismo";
 choices[32][3] = "Todas las respuestas anteriores son falsas";
 answers[32] = 2;
 units[32] = ['114'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 5155. ";
 preguntaids[32] = 5155


//  Id pregunta: 7238 Año de creación de pregunta: 2010
 questions[33]= "34)  &iquest;Qu&eacute; afirmaci&oacute;n es FALSA en relaci&oacute;n al concepto Configuraci&oacute;n de referencia?";
 choices[33]= new Array();
 choices[33][0] = "Es la configuraci&oacute;n de un producto o un sistema en un momento espec&iacute;fico en el tiempo";
 choices[33][1] = "Es la configuraci&oacute;n de un producto o un sistema en un momento espec&iacute;fico en el tiempo, donde no se capturan ni la estructura ni los detalles";
 choices[33][2] = "Es la base estable para un futuro desarrollo";
 choices[33][3] = "Registro de elementos de configuraci&oacute;n afectados por una RFC";
 answers[33] = 1;
 units[33] = ['101'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 7238. ";
 preguntaids[33] = 7238


//  Id pregunta: 6888 Año de creación de pregunta: 2010
 questions[34]= "35)  Por v&iacute;a electr&oacute;nica en Espa&ntilde;a, pueden celebrarse los siguientes tipos de contratos:";
 choices[34]= new Array();
 choices[34][0] = "Todos.";
 choices[34][1] = "Ninguno.";
 choices[34][2] = "Todos excepto los relativos al derecho de familia y sucesiones (adopciones, matrimonio, testamento).";
 choices[34][3] = "S&oacute;lo los relativos a comercio electr&oacute;nico.";
 answers[34] = 2;
 units[34] = ['19'];
 blocks[34] = ['A4'];
 comments[34] = "Id Pregunta: 6888. TIC A 2009";
 preguntaids[34] = 6888


//  Id pregunta: 176 Año de creación de pregunta: 2016
 questions[35]= "36)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[35]= new Array();
 choices[35][0] = "No se aplican directamente en los Estados.";
 choices[35][1] = "No son vinculantes.";
 choices[35][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[35][3] = "Tienen alcance general.";
 answers[35] = 0;
 units[35] = ['5'];
 blocks[35] = ['A1'];
 comments[35] = "Id Pregunta: 176. Uni&oacute;n Europea";
 preguntaids[35] = 176


//  Id pregunta: 4340 Año de creación de pregunta: 2004
 questions[36]= "37)  La tecnolog&iacute;a de acceso m&uacute;ltiple por divisi&oacute;n en c&oacute;digo de banda ancha denominada WCDMA, es utilizado por el sitema de telecomunicaciones m&oacute;vil?";
 choices[36]= new Array();
 choices[36][0] = "GPS";
 choices[36][1] = "ATM";
 choices[36][2] = "TNM";
 choices[36][3] = "UMTS";
 answers[36] = 3;
 units[36] = ['117'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 4340. Examen Julio 2003";
 preguntaids[36] = 4340


//  Id pregunta: 4150 Año de creación de pregunta: 2006
 questions[37]= "38)  Uno de los pasos del modelo de ciclo de vida aplicado al desarrollo de software basado en componentes (DSBC) consiste en seleccionar los componentes seg&uacute;n su granularidad. &iquest;Qu&eacute; factores definen la granularidad de un componente?";
 choices[37]= new Array();
 choices[37][0] = "El tama&ntilde;o del componente.";
 choices[37][1] = "El tama&ntilde;o, la complejidad y la capacidad funcional del componente.";
 choices[37][2] = "La capacidad funcional del componente y su estructura de datos.";
 choices[37][3] = "El tama&ntilde;o, la fiabilidad, la complejidad y la mantenibilidad del componente.";
 answers[37] = 1;
 units[37] = ['82'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 4150. ";
 preguntaids[37] = 4150


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qui&eacute;n integra el Sistema Nacional de Empleo?";
 choices[38]= new Array();
 choices[38][0] = "El Servicio P&uacute;blico de Empleo Estatal y los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[38][1] = "&Uacute;nicamente los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[38][2] = "&Uacute;nicamente el Servicio P&uacute;blico de Empleo Estatal";
 choices[38][3] = "El Servicio P&uacute;blico de Empleo Estatal m&aacute;s las ETT (Empresas de Trabajo Temporal) que quieran adherirse";
 answers[38] = 0;
 units[38] = ['15'];
 blocks[38] = ['A3'];
 comments[38] = "Id Pregunta: 422. Mercado laboral";
 preguntaids[38] = 422


//  Id pregunta: 4091 Año de creación de pregunta: 2003
 questions[39]= "40)  Indique cu&aacute;l no es un resultado del modelo EFQM";
 choices[39]= new Array();
 choices[39][0] = "Satisfacci&oacute;n del cliente";
 choices[39][1] = "Impacto en la sociedad";
 choices[39][2] = "Obtenci&oacute;n de la estrategia";
 choices[39][3] = "Satisfacci&oacute;n del personal";
 answers[39] = 2;
 units[39] = ['98'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 4091. ";
 preguntaids[39] = 4091


//  Id pregunta: 117 Año de creación de pregunta: 2016
 questions[40]= "41)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[40]= new Array();
 choices[40][0] = "Estrasburgo.";
 choices[40][1] = "Bruselas.";
 choices[40][2] = "Luxemburgo.";
 choices[40][3] = "Holanda.";
 answers[40] = 2;
 units[40] = ['5'];
 blocks[40] = ['A1'];
 comments[40] = "Id Pregunta: 117. Uni&oacute;n Europea";
 preguntaids[40] = 117


//  Id pregunta: 7853 Año de creación de pregunta: 2011
 questions[41]= "42)  Indique la Potencia a la entrada del receptor del sistema de telecomunicaciones compuesto de los siguientes elementos: - Una antena receptora a la que le llega una Potencia de entrada de 10exp-8 mW. - Un amplificador con ganancia G1 = 1000. - Una longitud de cable de 10m con atenuaci&oacute;n del mismo de 0&rsquo;3 dB/m. - Un amplificador con ganancia G2 = 100. - Un receptor.";
 choices[41]= new Array();
 choices[41][0] = "-63 dBW.";
 choices[41][1] = "33 dBm.";
 choices[41][2] = "1exp-6 W.";
 choices[41][3] = "-53 dBm.";
 answers[41] = 0;
 units[41] = ['102'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 7853. Examen TIC A1 2010";
 preguntaids[41] = 7853


//  Id pregunta: 4624 Año de creación de pregunta: 2002
 questions[42]= "43)  En RDSI, &iquest;qu&eacute; punto de referencia es el interfaz f&iacute;sico y l&oacute;gico entre la Terminaci&oacute;n de Red de tipo 2 y la Terminaci&oacute;n de Red de tipo 1 (punto de interfaz entre la instalaci&oacute;n de la compa&ntilde;&iacute;a telef&oacute;nica y la instalaci&oacute;n de usuario)?:";
 choices[42]= new Array();
 choices[42][0] = "R";
 choices[42][1] = "S";
 choices[42][2] = "T";
 choices[42][3] = "U";
 answers[42] = 2;
 units[42] = ['114'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 4624. ";
 preguntaids[42] = 4624


//  Id pregunta: 876 Año de creación de pregunta: 2016
 questions[43]= "44)  En Internet, la entidad encargada de la coordinaci&oacute;n de los N&uacute;meros de Sistema Aut&oacute;nomo (Autonomous System Numbers - ASN) usados por varios protocolos de enrutamiento, es:";
 choices[43]= new Array();
 choices[43][0] = "IANA";
 choices[43][1] = "ISOC";
 choices[43][2] = "IETF";
 choices[43][3] = "IAB";
 answers[43] = 0;
 units[43] = ['103'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 876. AGE A1 2015";
 preguntaids[43] = 876


//  Id pregunta: 10599 Año de creación de pregunta: 2015
 questions[44]= "45)  &iquest;En qu&eacute; libro de ITIL v3 se pueden encontrar las descripciones detalladas de la Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de Suministradores?";
 choices[44]= new Array();
 choices[44][0] = "Estrategia del Servicio";
 choices[44][1] = "Dise&ntilde;o del Servicio";
 choices[44][2] = "Transici&oacute;n del Servicio";
 choices[44][3] = "Operaci&oacute;n del Servicio";
 answers[44] = 1;
 units[44] = ['101'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 10599. ";
 preguntaids[44] = 10599


//  Id pregunta: 8992 Año de creación de pregunta: 2013
 questions[45]= "46)  En una arquitectura web en J2EE, indique cu&aacute;l es la opci&oacute;n correcta que representa la capa a la que pertenece la soluci&oacute;n JCA (J2EE Connector Architecture)";
 choices[45]= new Array();
 choices[45][0] = "Capa de cliente";
 choices[45][1] = "Capa de l&oacute;gica de negocio";
 choices[45][2] = "Capa de integraci&oacute;n";
 choices[45][3] = "Capa de sistemas de informaci&oacute;n";
 answers[45] = 3;
 units[45] = ['64'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 8992. Examen TIC A1, Xunta de Galicia 2011";
 preguntaids[45] = 8992


//  Id pregunta: 9692 Año de creación de pregunta: 2014
 questions[46]= "47)  En el &aacute;mbito de los certificados X.509:";
 choices[46]= new Array();
 choices[46][0] = "La CA de la PKI debe proporcional protocolos de gesti&oacute;n de certificados (registro, recuperaci&oacute;n de claves, etc) dsiponibles online.";
 choices[46][1] = "Una CRL es una lista de certificados revocados con un timestamp que determina su fecha de emisi&oacute;n y firmada en todo caso por la CA que emite los certificados.";
 choices[46][2] = "Una CRL tiene un alcance que define el tipo de certificados que incluir&aacute; dicha lista.";
 choices[46][3] = "Un certificado se a&ntilde;ade a la CRL en la siguiente actualizaci&oacute;n seg&uacute;n la pol&iacute;tica de actualizaciones definida.";
 answers[46] = 3;
 units[46] = ['77'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 9692. ";
 preguntaids[46] = 9692


//  Id pregunta: 1787 Año de creación de pregunta: 2016
 questions[47]= "48)  La Licencia P&uacute;blica General Reducida de GNU (LGPL) es una licencia de software que utiliza:";
 choices[47]= new Array();
 choices[47][0] = "Copyright.";
 choices[47][1] = "Copyleft d&eacute;bil.";
 choices[47][2] = "Copyleft fuerte.";
 choices[47][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[47] = 1;
 units[47] = ['66'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 1787. ";
 preguntaids[47] = 1787


//  Id pregunta: 2954 Año de creación de pregunta: 2002
 questions[48]= "49)  La t&eacute;cnica o tecnolog&iacute;a consistente en dise&ntilde;ar dispositivos microelectr&oacute;nicos de peque&ntilde;&iacute;simo tama&ntilde;o para, por ejemplo, introducirlos en el cuerpo humano e imitar el comportamiento de sus c&eacute;lulas, se denomina:";
 choices[48]= new Array();
 choices[48][0] = "Tecnolog&iacute;a milim&eacute;trica";
 choices[48][1] = "Microtecnolog&iacute;a";
 choices[48][2] = "Microb&oacute;tica";
 choices[48][3] = "Nanotecnolog&iacute;a";
 answers[48] = 3;
 units[48] = ['52'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 2954. ";
 preguntaids[48] = 2954


//  Id pregunta: 1457 Año de creación de pregunta: 2016
 questions[49]= "50)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres y promover su efectividad, que se define en la ley 3/2007 es:";
 choices[49]= new Array();
 choices[49][0] = "La Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[49][1] = "El Observatorio Nacional de Igualdad entre mujeres y hombres.";
 choices[49][2] = "La Comisi&oacute;n Nacional de Igualdad entre mujeres y hombres.";
 choices[49][3] = "El comit&eacute; de Igualdad efectiva entre mujeres y hombres.";
 answers[49] = 0;
 units[49] = ['14'];
 blocks[49] = ['A3'];
 comments[49] = "Id Pregunta: 1457. ";
 preguntaids[49] = 1457


//  Id pregunta: 9905 Año de creación de pregunta: 2015
 questions[50]= "51)  Seg&uacute;n la Ley 39/2015, cual de las siguientes no se establece como informaci&oacute;n necesaria en los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[50]= new Array();
 choices[50][0] = "Fecha de inscripci&oacute;n.";
 choices[50][1] = "Per&iacute;odo de tiempo por el cual se otorga el poder.";
 choices[50][2] = "Lugar de inscripci&oacute;n.";
 choices[50][3] = "Tipo de poder seg&uacute;n las facultades que otorgue.";
 answers[50] = 2;
 units[50] = ['7', '19'];
 blocks[50] = ['A2', 'A4'];
 comments[50] = "Id Pregunta: 9905. ";
 preguntaids[50] = 9905


//  Id pregunta: 2096 Año de creación de pregunta: 2002
 questions[51]= "52)  El est&aacute;ndar POSIX se corresponde con la norma internacional:";
 choices[51]= new Array();
 choices[51][0] = "ISO 9945-1";
 choices[51][1] = "IEEE 1033.1";
 choices[51][2] = "OSF 99945-1";
 choices[51][3] = "ISO 1003-1";
 answers[51] = 0;
 units[51] = ['48'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 2096. ";
 preguntaids[51] = 2096


//  Id pregunta: 9782 Año de creación de pregunta: 2015
 questions[52]= "53)  El servicio de verificaci&oacute;n y consulta de datos no tiene por objetivo:";
 choices[52]= new Array();
 choices[52][0] = "Dar respuesta al art&iacute;culo 28 de la Ley 39/2015, por el que los interesados no estar&aacute;n obligados a aportar documentos que hayan sido elaborados por cualquier Administraci&oacute;n.";
 choices[52][1] = "Simplificar la tramitaci&oacute;n de los procedimientos administrativos.";
 choices[52][2] = "Facilitar al ciudadano la aportaci&oacute;n de los documentos en papel que acrediten su identidad en los procedimientos administrativos.";
 choices[52][3] = "Dar cumplimiento a los derechos recogidos en la Ley 39/2015, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas.";
 answers[52] = 2;
 units[52] = ['7', '47'];
 blocks[52] = ['A2', 'B1'];
 comments[52] = "Id Pregunta: 9782. ";
 preguntaids[52] = 9782


//  Id pregunta: 10271 Año de creación de pregunta: 2015
 questions[53]= "54)  El Gestor del Nivel de Servicio tiene la responsabilidad de asegurarse 1que los objetivos del Proceso de Gesti&oacute;n del Nivel de Servicio sean cumplidos. El Gestor del Nivel de Servicio NO es responsable de &hellip;";
 choices[53]= new Array();
 choices[53][0] = "Negociar y cerrar los Acuerdos de Nivel Operacionales. (OLA -Operation Level Agreement)";
 choices[53][1] = "Asegurar que todos los servicios no operacionales sean registrados dentro del Cat&aacute;logo de Servicios";
 choices[53][2] = "Negociar y acordar los Acuerdos de Nivel de Servicio (SLA - Service Level Agreement)";
 choices[53][3] = "Ayudar a la creaci&oacute;n del Cat&aacute;logo de Servicios y a mantenerlo actualizado";
 answers[53] = 1;
 units[53] = ['101'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 10271. ITIL v3";
 preguntaids[53] = 10271


//  Id pregunta: 2291 Año de creación de pregunta: 2002
 questions[54]= "55)  Seg&uacute;n la Ley 1/1996 de Propiedad Intelectual, s&oacute;lo una de las siguientes definiciones es correcta:";
 choices[54]= new Array();
 choices[54][0] = "Obra en colaboraci&oacute;n: aquella resultado de la colaboraci&oacute;n de varios autores, correspondiendo el derecho a todos ellos en la proporci&oacute;n que determinen";
 choices[54][1] = "Obra compuesta: aquella obra nueva que incorpore una obra existente con la colaboraci&oacute;n del autor de &eacute;sta &uacute;ltima";
 choices[54][2] = "Obra colectiva: aquella resultado unitario de la colaboraci&oacute;n de varios autores y los derechos corresponden a todos ellos.";
 choices[54][3] = "Todas son falsas";
 answers[54] = 0;
 units[54] = ['41'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 2291. B: deber&iacute;a ser &quot;con la colaboraci&oacute;n&quot;; C: la definici&oacute;n corresponde con &quot;obra en colaboraci&oacute;n&quot;";
 preguntaids[54] = 2291


//  Id pregunta: 8429 Año de creación de pregunta: 2011
 questions[55]= "56)  La publicaci&oacute;n en las sedes judiciales electr&oacute;nicas de informaciones, servicios y transacciones respetar&aacute;:";
 choices[55]= new Array();
 choices[55][0] = "Los est&aacute;ndares abiertos";
 choices[55][1] = "Aquellos est&aacute;ndares que sean de uso generalizado por los ciudadanos";
 choices[55][2] = "Los dos anteriores";
 choices[55][3] = "Los dos primeros y los que determine la autoridad compentente mediante disposici&oacute;n publicada en la sede judicial";
 answers[55] = 2;
 units[55] = ['2'];
 blocks[55] = ['A1'];
 comments[55] = "Id Pregunta: 8429. ";
 preguntaids[55] = 8429


//  Id pregunta: 3852 Año de creación de pregunta: 2002
 questions[56]= "57)  Es cierto decir que la &quot;Ingenier&iacute;a hacia delante&quot;:";
 choices[56]= new Array();
 choices[56][0] = "Es una reingenier&iacute;a hecha a continuaci&oacute;n de una ingenier&iacute;a inversa.";
 choices[56][1] = "Es el resultado de aplicar t&eacute;cnicas de reutilizaci&oacute;n a un sistema bien definido.";
 choices[56][2] = "Parte de un alto nivel de abstracci&oacute;n.";
 choices[56][3] = "Precisa antes una &quot;ingenier&iacute;a inversa&quot;.";
 answers[56] = 2;
 units[56] = ['97'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 3852. ";
 preguntaids[56] = 3852


//  Id pregunta: 319 Año de creación de pregunta: 2016
 questions[57]= "58)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[57]= new Array();
 choices[57][0] = "Las sociedades mercantiles estatales.";
 choices[57][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[57][2] = "Las respuestas a) y b) son correctas.";
 choices[57][3] = "Las respuestas a) y b) no son correctas.";
 answers[57] = 2;
 units[57] = ['11'];
 blocks[57] = ['A2'];
 comments[57] = "Id Pregunta: 319. Presupuestos generales";
 preguntaids[57] = 319


//  Id pregunta: 9934 Año de creación de pregunta: 2015
 questions[58]= "59)  &iquest;Qu&eacute; versi&oacute;n del protocolo SCSP (Sustituci&oacute;n de Certificados en Soporte Papel) se considera como utilizaci&oacute;n de forma general en la NTI de Protocolos de Intermediaci&oacute;n?";
 choices[58]= new Array();
 choices[58][0] = "1";
 choices[58][1] = "2";
 choices[58][2] = "3";
 choices[58][3] = "4";
 answers[58] = 2;
 units[58] = ['44'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 9934. ";
 preguntaids[58] = 9934


//  Id pregunta: 2555 Año de creación de pregunta: 2002
 questions[59]= "60)  La Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico establece:";
 choices[59]= new Array();
 choices[59][0] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las mismas";
 choices[59][1] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico";
 choices[59][2] = "Las comunicaciones comerciales realizadas por correo electr&oacute;nico incluir&aacute;n al comienzo del mensaje la palabra &quot;publicidad&quot;";
 choices[59][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[59] = 0;
 units[59] = ['19'];
 blocks[59] = ['A4'];
 comments[59] = "Id Pregunta: 2555. ";
 preguntaids[59] = 2555


//  Id pregunta: 6941 Año de creación de pregunta: 2010
 questions[60]= "61)  Indique, cual de entre los siguientes elementos de un sistema de correo X.400 se corresponde con un servidor de correo:";
 choices[60]= new Array();
 choices[60][0] = "UA.";
 choices[60][1] = "MTA.";
 choices[60][2] = "GW.";
 choices[60][3] = "MS.";
 answers[60] = 1;
 units[60] = ['116'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 6941. ";
 preguntaids[60] = 6941


//  Id pregunta: 5581 Año de creación de pregunta: 2007
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes no es una desventaja del cable coaxial frente a otros medios de transmisi&oacute;n";
 choices[61]= new Array();
 choices[61][0] = "Diafon&iacute;a.";
 choices[61][1] = "Ruido t&eacute;rmico.";
 choices[61][2] = "Ruido de intermodulaci&oacute;n.";
 choices[61][3] = "Atenuaci&oacute;n";
 answers[61] = 0;
 units[61] = ['104'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 5581. ";
 preguntaids[61] = 5581


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[62]= "63)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[62]= new Array();
 choices[62][0] = "CO.PER.";
 choices[62][1] = "COMPER.";
 choices[62][2] = "CO.RE.PER.";
 choices[62][3] = "CO.PE.RRE.";
 answers[62] = 2;
 units[62] = ['5'];
 blocks[62] = ['A1'];
 comments[62] = "Id Pregunta: 158. Uni&oacute;n Europea";
 preguntaids[62] = 158


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[63]= "64)  La secci&oacute;n segunda, del cap&iacute;tulo segundo, del t&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola de 1978, se denomina:";
 choices[63]= new Array();
 choices[63][0] = "De los derechos fundamentales y de las libertades p&uacute;blicas.";
 choices[63][1] = "De los derechos y deberes fundamentales.";
 choices[63][2] = "De los derechos y libertades de los ciudadanos.";
 choices[63][3] = "De los derechos y deberes de los ciudadanos.";
 answers[63] = 3;
 units[63] = ['1'];
 blocks[63] = ['A1'];
 comments[63] = "Id Pregunta: 53. Constituci&oacute;n de 1978";
 preguntaids[63] = 53


//  Id pregunta: 9451 Año de creación de pregunta: 2014
 questions[64]= "65)  La Ley 34/2002, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, en relaci&oacute;n a la imposici&oacute;n de Sanciones indica";
 choices[64]= new Array();
 choices[64][0] = "El &oacute;rgano sancionador establecer&aacute; la cuant&iacute;a de la sanci&oacute;n aplicando la escala relativa a la clase de infracciones que preceda inmediatamente en gravedad a aquella en que se integra la considerada cuando el infractor haya reconocido espont&aacute;neamente su culpabilidad.";
 choices[64][1] = "La cuant&iacute;a de las multas que se impongan se graduar&aacute; atendiendo a la adhesi&oacute;n a un c&oacute;digo de conducta o a un sistema de autorregulaci&oacute;n publicitaria aplicable respecto a la infracci&oacute;n cometida.";
 choices[64][2] = "La cuant&iacute;a de las multas que se impongan se graduar&aacute; atendiendo al plazo de tiempo durante el que se haya venido cometiendo la infracci&oacute;n";
 choices[64][3] = "Todas son verdaderas";
 answers[64] = 3;
 units[64] = ['19'];
 blocks[64] = ['A4'];
 comments[64] = "Id Pregunta: 9451. ";
 preguntaids[64] = 9451


//  Id pregunta: 2923 Año de creación de pregunta: 2002
 questions[65]= "66)  La arquitectura RISC:";
 choices[65]= new Array();
 choices[65][0] = "Se emplea sobre todo en estaciones de trabajo debido a sus altas prestaciones para el c&aacute;lculo en coma flotante";
 choices[65][1] = "Permite que con un juego sencillo de instrucciones se pueda disponer de todas las que se necesiten mediante el uso de la microprogramaci&oacute;n";
 choices[65][2] = "No es adaptable al sector de los microordenadores";
 choices[65][3] = "Dificulta el dise&ntilde;o de compiladores optimizados";
 answers[65] = 3;
 units[65] = ['50', '51'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 2923. ";
 preguntaids[65] = 2923


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[66]= "67)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[66]= new Array();
 choices[66][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[66][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[66][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[66][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[66] = 1;
 units[66] = ['7'];
 blocks[66] = ['A2'];
 comments[66] = "Id Pregunta: 215. Ley 39/2015";
 preguntaids[66] = 215


//  Id pregunta: 322 Año de creación de pregunta: 2016
 questions[67]= "68)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[67]= new Array();
 choices[67][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[67][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[67][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[67][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[67] = 2;
 units[67] = ['11'];
 blocks[67] = ['A2'];
 comments[67] = "Id Pregunta: 322. Presupuestos generales";
 preguntaids[67] = 322


//  Id pregunta: 442 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n se indica en la Ley 59/2003, de firma electr&oacute;nica, en cuanto al r&eacute;gimen de prestaci&oacute;n de servicios de certificaci&oacute;n:";
 choices[68]= new Array();
 choices[68][0] = "Est&aacute; sujeta a autorizaci&oacute;n previa.";
 choices[68][1] = "Los &oacute;rganos de defensa de la competencia velar&aacute;n por el mantenimiento de condiciones de competencia efectiva en la prestaci&oacute;n de servicios de certificaci&oacute;n al p&uacute;blico mediante el ejercicio de las funciones que tengan legalmente atribuidas.";
 choices[68][2] = "No podr&aacute;n ser proporcionados por las Administraciones p&uacute;blicas, sus organismos p&uacute;blicos o las entidades dependientes o vinculadas a las mismas por motivo de los principios de objetividad, transparencia y no discriminaci&oacute;n.";
 choices[68][3] = "No se realizar&aacute; en r&eacute;gimen de libre competencia.";
 answers[68] = 1;
 units[68] = ['19'];
 blocks[68] = ['A4'];
 comments[68] = "Id Pregunta: 442. AGE A2 2015";
 preguntaids[68] = 442


//  Id pregunta: 4561 Año de creación de pregunta: 2002
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes podr&iacute;a ser usado en un sistema aut&oacute;nomo para enrutamiento?:";
 choices[69]= new Array();
 choices[69][0] = "BGP (Border Gateway Protocol)";
 choices[69][1] = "EGP (Exterior Gateway Protocol)";
 choices[69][2] = "AGP (Autonomous Gateway Protocol)";
 choices[69][3] = "RIP (Routing Information Protocol)";
 answers[69] = 3;
 units[69] = ['102'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 4561. ";
 preguntaids[69] = 4561


//  Id pregunta: 1084 Año de creación de pregunta: 2016
 questions[70]= "71)  Indique la frase correcta acerca de los sistemas CRM,&rdquo;Customer relationship management&rdquo; y ERP &ldquo;Enterprise resource planning&rdquo;.";
 choices[70]= new Array();
 choices[70][0] = "La contabilidad financiera es un m&oacute;dulo caracter&iacute;stico de los sistemas CRM anal&iacute;ticos.";
 choices[70][1] = "El uso de t&eacute;cnicas de data mining en los CRM operacionales permite analizar tendencias en el comportamiento de los clientes.";
 choices[70][2] = "Los sistemas ERP son sistemas transaccionales que se implementan &uacute;nicamente sobre arquitecturas cliente servidor.";
 choices[70][3] = "Las parametrizaciones incorporadas en los ERP los hacen m&aacute;s flexibles pero impiden su actualizaci&oacute;n.";
 answers[70] = 1;
 units[70] = ['69'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 1084. ";
 preguntaids[70] = 1084


//  Id pregunta: 30 Año de creación de pregunta: 2016
 questions[71]= "72)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[71]= new Array();
 choices[71][0] = "Ley Org&aacute;nica.";
 choices[71][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[71][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[71][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[71] = 2;
 units[71] = ['1'];
 blocks[71] = ['A1'];
 comments[71] = "Id Pregunta: 30. Constituci&oacute;n de 1978";
 preguntaids[71] = 30


//  Id pregunta: 523 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[72]= new Array();
 choices[72][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[72][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[72][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[72][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[72] = 0;
 units[72] = ['26'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 523. AGE A1 2015";
 preguntaids[72] = 523


//  Id pregunta: 10870 Año de creación de pregunta: 2015
 questions[73]= "74)  &iquest;Cu&aacute;l es el nombre de la PDU de capa 2 del modelo OSI?";
 choices[73]= new Array();
 choices[73][0] = "MAC";
 choices[73][1] = "Segmento";
 choices[73][2] = "Paquete";
 choices[73][3] = "Trama";
 answers[73] = 3;
 units[73] = ['105'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 10870. ";
 preguntaids[73] = 10870


//  Id pregunta: 5132 Año de creación de pregunta: 2003
 questions[74]= "75)  Sobre el Entorno Dom&eacute;stico Virtual o VHE (Virtual Home Environment) puede decirse que:";
 choices[74]= new Array();
 choices[74][0] = "Es un nuevo est&aacute;ndar de interfaz dom&oacute;tica entre electrodom&eacute;sticos";
 choices[74][1] = "Es un concepto ligado a la tecnolog&iacute;a UMTS";
 choices[74][2] = "Es una norma de intercomunicaci&oacute;n inal&aacute;mbrica para utilizar en el hogar";
 choices[74][3] = "Ninguna de las opciones anteriores es correcta";
 answers[74] = 1;
 units[74] = ['117'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 5132. ";
 preguntaids[74] = 5132


