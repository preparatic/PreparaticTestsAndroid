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
//  Id pregunta: 7365 Año de creación de pregunta: 2010
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los ficheros de Linux es cierta?";
 choices[0]= new Array();
 choices[0][0] = "/etc/passwd: s&oacute;lo es accesible para root";
 choices[0][1] = "/etc/shadow: contiene las contrase&ntilde;as encriptadas de los usuarios";
 choices[0][2] = "/etc/ftpusers: contienes los usuarios que pueden acceder al sistema v&iacute;a ftp";
 choices[0][3] = "/etc/dhcpconfig: contiene informaci&oacute;n de configuraci&oacute;n del cliente DHCP";
 answers[0] = 1;
 units[0] = ['57'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 7365. Examen TIC B 2009";
 preguntaids[0] = 7365


//  Id pregunta: 2555 Año de creación de pregunta: 2002
 questions[1]= "2)  La Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico establece:";
 choices[1]= new Array();
 choices[1][0] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las mismas";
 choices[1][1] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico";
 choices[1][2] = "Las comunicaciones comerciales realizadas por correo electr&oacute;nico incluir&aacute;n al comienzo del mensaje la palabra &quot;publicidad&quot;";
 choices[1][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[1] = 0;
 units[1] = ['19'];
 blocks[1] = ['A4'];
 comments[1] = "Id Pregunta: 2555. ";
 preguntaids[1] = 2555


//  Id pregunta: 3964 Año de creación de pregunta: 2002
 questions[2]= "3)  Se&ntilde;ale de las siguientes respuestas la que es una funci&oacute;n propia del responsable de producci&oacute;n y sistemas:";
 choices[2]= new Array();
 choices[2][0] = "Establecer los planes de pruebas de cada aplicaci&oacute;n";
 choices[2][1] = "Definir una metodolog&iacute;a para el desarrollo de aplicaciones";
 choices[2][2] = "Planificar y evaluar el crecimiento del almacenamiento de datos";
 choices[2][3] = "Establecer los procedimientos para la gesti&oacute;n de la organizaci&oacute;n";
 answers[2] = 2;
 units[2] = ['100'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 3964. ";
 preguntaids[2] = 3964


//  Id pregunta: 3838 Año de creación de pregunta: 2002
 questions[3]= "4)  En una representaci&oacute;n gr&aacute;fica del ciclo de vida de desarrollo de software en espiral, indicar que es lo que representa la dimensi&oacute;n radial:";
 choices[3]= new Array();
 choices[3][0] = "Los costes de desarrollo acumulativos";
 choices[3][1] = "El progreso hecho en cumplimentar cada desarrollo en espiral";
 choices[3][2] = "El an&aacute;lisis de riesgos";
 choices[3][3] = "Los costes de explotaci&oacute;n del proyecto";
 answers[3] = 0;
 units[3] = ['82'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 3838. ";
 preguntaids[3] = 3838


//  Id pregunta: 1560 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes plataformas permite la implementaci&oacute;n de aplicaciones ricas de internet (RIA)?";
 choices[4]= new Array();
 choices[4][0] = "Java RIA";
 choices[4][1] = "Java EE";
 choices[4][2] = "Java ME";
 choices[4][3] = "Java FX";
 answers[4] = 3;
 units[4] = ['64'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 1560. ";
 preguntaids[4] = 1560


//  Id pregunta: 3870 Año de creación de pregunta: 2002
 questions[5]= "6)  La fundaci&oacute;n EFQM fue una iniciativa de:";
 choices[5]= new Array();
 choices[5][0] = "Las organizaciones europeas de normalizaci&oacute;n (AENOR, AFNOR, DIN...)";
 choices[5][1] = "ANSI e IEEE";
 choices[5][2] = "La Comisi&oacute;n Europea y 14 compa&ntilde;&iacute;as europeas";
 choices[5][3] = "ISO";
 answers[5] = 2;
 units[5] = ['98'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 3870. ";
 preguntaids[5] = 3870


//  Id pregunta: 6115 Año de creación de pregunta: 2003
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes normas regula la expedici&oacute;n del DNI y sus certificados de firma electr&oacute;nica?";
 choices[6]= new Array();
 choices[6][0] = "RD 153/2005, de 14 de enero";
 choices[6][1] = "RD 1553/2005, de 23 de diciembre";
 choices[6][2] = "RD 1555/2003, de 29 de mayo";
 choices[6][3] = "RD 155/2003, de 15 de septiembre";
 answers[6] = 1;
 units[6] = ['19'];
 blocks[6] = ['A4'];
 comments[6] = "Id Pregunta: 6115. Examen TIC A1 MAP 2007";
 preguntaids[6] = 6115


//  Id pregunta: 10607 Año de creación de pregunta: 2015
 questions[7]= "8)  Se&ntilde;alar la FALSA de acuerdo a la Ley 9/2014. Entre las facultades del gobierno para la administraci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico, se encuentran:";
 choices[7]= new Array();
 choices[7][0] = "Aprobar los planes de utilizaci&oacute;n del espectro bas&aacute;ndose en las propuestas del MINETUR.";
 choices[7][1] = "La adecuada utilizaci&oacute;n del espectro mediante el empleo de equipos y aparatos.";
 choices[7][2] = "La regulaci&oacute;n del procedimiento de determinaci&oacute;n de los niveles de emisi&oacute;n radioel&eacute;ctrica tolerable.";
 choices[7][3] = "La regulaci&oacute;n de las condiciones de otorgamiento de t&iacute;tulos habilitantes para uso del dominio p&uacute;blico para eventos de corta duraci&oacute;n.";
 answers[7] = 0;
 units[7] = ['121'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 10607. Articulo 61";
 preguntaids[7] = 10607


//  Id pregunta: 122 Año de creación de pregunta: 2016
 questions[8]= "9)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[8]= new Array();
 choices[8][0] = "Los propios miembros del Tribunal.";
 choices[8][1] = "El Consejo de Europa.";
 choices[8][2] = "El Consejo Europeo.";
 choices[8][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[8] = 0;
 units[8] = ['5'];
 blocks[8] = ['A1'];
 comments[8] = "Id Pregunta: 122. Uni&oacute;n Europea";
 preguntaids[8] = 122


//  Id pregunta: 3955 Año de creación de pregunta: 2002
 questions[9]= "10)  Se entiende por ciclo de vida:";
 choices[9]= new Array();
 choices[9][0] = "Conjunto de fases (o etapas) por las que pasa el sistema desde que se concibe hasta que se retira del servicio";
 choices[9][1] = "El conjunto de fases de desarrollo";
 choices[9][2] = "Etapas de la ingenieria del software";
 choices[9][3] = "Las etapas de la utilizaci&oacute;n de un sistema";
 answers[9] = 0;
 units[9] = ['82'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 3955. ";
 preguntaids[9] = 3955


//  Id pregunta: 6467 Año de creación de pregunta: 2003
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes opciones NO es necesaria para que una red ethernet pueda funcionar en modo d&uacute;plex completo?";
 choices[10]= new Array();
 choices[10][0] = "El medio f&iacute;sico permite la transmisi&oacute;n d&uacute;plex completa";
 choices[10][1] = "La distancia entre las dos estaciones es menor de 50 m";
 choices[10][2] = "Solo hay dos estaciones conectadas entre s&iacute;";
 choices[10][3] = "Las tarjetas de red de ambos equipos soportan el funcionamiento en modo d&uacute;plex completo";
 answers[10] = 1;
 units[10] = ['102'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 6467. ";
 preguntaids[10] = 6467


//  Id pregunta: 4338 Año de creación de pregunta: 2004
 questions[11]= "12)  &iquest;Cu&aacute;les de los siguientes mecanismos no sirve para garantizar la privacidad de las comunicaciones por correo electr&oacute;nico?";
 choices[11]= new Array();
 choices[11][0] = "GPG";
 choices[11][1] = "PGP";
 choices[11][2] = "S/MIME";
 choices[11][3] = "Todos los anteriores valen";
 answers[11] = 3;
 units[11] = ['116'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 4338. ";
 preguntaids[11] = 4338


//  Id pregunta: 207 Año de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[12]= new Array();
 choices[12][0] = "10 d&iacute;as.";
 choices[12][1] = "15 d&iacute;as.";
 choices[12][2] = "1 mes.";
 choices[12][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[12] = 0;
 units[12] = ['7'];
 blocks[12] = ['A2'];
 comments[12] = "Id Pregunta: 207. Ley 39/2015";
 preguntaids[12] = 207


//  Id pregunta: 65 Año de creación de pregunta: 2016
 questions[13]= "14)  El Art&iacute;culo 108 de la Constituci&oacute;n Espa&ntilde;ola establece que el Gobierno responde solidariamente de su gesti&oacute;n pol&iacute;tica ante:";
 choices[13]= new Array();
 choices[13][0] = "El Jefe del Estado.";
 choices[13][1] = "El Tribunal Constitucional.";
 choices[13][2] = "El Congreso de los Diputados.";
 choices[13][3] = "Las Cortes Generales.";
 answers[13] = 2;
 units[13] = ['1'];
 blocks[13] = ['A1'];
 comments[13] = "Id Pregunta: 65. Constituci&oacute;n de 1978";
 preguntaids[13] = 65


//  Id pregunta: 10211 Año de creación de pregunta: 2015
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes no est&aacute; incluido dentro de la primera Declaraci&oacute;n de Servicios Compartidos realizada por la Comisi&oacute;n de Estrategia TIC en Septiembre de 2015?";
 choices[14]= new Array();
 choices[14][0] = "Servicio unificado de radiocomunicaciones";
 choices[14][1] = "Servicio de alojamiento de infraestructuras TIC";
 choices[14][2] = "Servicio de gesti&oacute;n de notificaciones";
 choices[14][3] = "Servicio de gesti&oacute;n de n&oacute;mina";
 answers[14] = 0;
 units[14] = ['26'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 10211. El servicio incluido es el unificado de telecomunicaciones";
 preguntaids[14] = 10211


//  Id pregunta: 5741 Año de creación de pregunta: 2007
 questions[15]= "16)  &iquest;Cu&aacute;l es el tama&ntilde;o de cabecera en una unidad de datos del protocolo lPv6?";
 choices[15]= new Array();
 choices[15][0] = "es variable";
 choices[15][1] = "de 20 octetos";
 choices[15][2] = "de 40 octetos";
 choices[15][3] = "similar a lPv4";
 answers[15] = 2;
 units[15] = ['109'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 5741. ";
 preguntaids[15] = 5741


//  Id pregunta: 3474 Año de creación de pregunta: 2006
 questions[16]= "17)  La ley de servicios de la sociedad de la informaci&oacute;n y del comercio electr&oacute;nico (LSSICE) es el resultado de la transposici&oacute;n de dos directivas del Parlamento Europeo y del Consejo. &iquest;Cu&aacute;les?";
 choices[16]= new Array();
 choices[16][0] = "Directivas 2000/31/CE y 98/28/CE";
 choices[16][1] = "Directivas 2000/31/CE y 98/27/CE";
 choices[16][2] = "Directivas 2000/31/CE y 97/27/CE";
 choices[16][3] = "Directivas 2001/31/CE y 98/27/CE";
 answers[16] = 1;
 units[16] = ['19'];
 blocks[16] = ['A4'];
 comments[16] = "Id Pregunta: 3474. ";
 preguntaids[16] = 3474


//  Id pregunta: 7490 Año de creación de pregunta: 2010
 questions[17]= "18)  El t&eacute;rmino JigSaw se refiere a:";
 choices[17]= new Array();
 choices[17][0] = "Una plataforma de servidor Web basada en Java, cuyo principal objetivo es hacer demostraciones de nuevos protocolos y, al mismo tiempo, ofrecer una base de experimentaci&oacute;n en el &aacute;rea de software para servidor.";
 choices[17][1] = "Una interfaz de programaci&oacute;n de aplicaciones (API) Web de cliente, de uso com&uacute;n y alta modularidad, cuyo principal prop&oacute;sito es el de servir como herramienta de pruebas para experimentos con protocolos.";
 choices[17][2] = "Un lenguaje est&aacute;ndar utilizado por los componentes que intervienen en un sistema multimodal para comunicarse.";
 choices[17][3] = "Un lenguaje de etiquetado utilizado para crear presentaciones multimedia din&aacute;micas a trav&eacute;s de la sincronizaci&oacute;n en tiempo y espacio de diversos elementos como audio, v&iacute;deo, texto y gr&aacute;ficos.";
 answers[17] = 0;
 units[17] = ['39'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 7490. Map 2005";
 preguntaids[17] = 7490


//  Id pregunta: 6278 Año de creación de pregunta: 2007
 questions[18]= "19)  En qu&eacute; proceso se obtiene el producto &quot;Requisitos de Implantaci&oacute;n&quot;";
 choices[18]= new Array();
 choices[18][0] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 choices[18][1] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[18][2] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema de Informaci&oacute;n";
 choices[18][3] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 answers[18] = 0;
 units[18] = ['91'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 6278. ";
 preguntaids[18] = 6278


//  Id pregunta: 3561 Año de creación de pregunta: 2004
 questions[19]= "20)  En el &aacute;mbito de las tecnolog&iacute;as multimedia, se&ntilde;ale cu&aacute;l de los siguientes formatos corresponder&iacute;a a una imagen con &quot;formato de gr&aacute;fico vectorial&quot;:";
 choices[19]= new Array();
 choices[19][0] = "Graphical Interchange Format (GIF)";
 choices[19][1] = "Windows Metafile Format (WMF)";
 choices[19][2] = "Portable Network Graphics (PNG)";
 choices[19][3] = "Windows Bitmap (BMP)";
 answers[19] = 1;
 units[19] = ['80'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 3561. TIC MAP B 2004";
 preguntaids[19] = 3561


//  Id pregunta: 5058 Año de creación de pregunta: 2002
 questions[20]= "21)  Se&ntilde;ale entre los siguientes, cu&aacute;l es un par&aacute;metro de calidad en redes RDSI:";
 choices[20]= new Array();
 choices[20][0] = "Grado de servicio";
 choices[20][1] = "Alerting delay";
 choices[20][2] = "Bit error";
 choices[20][3] = "Todos son par&aacute;metros de calidad";
 answers[20] = 3;
 units[20] = ['114'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 5058. ";
 preguntaids[20] = 5058


//  Id pregunta: 2209 Año de creación de pregunta: 2002
 questions[21]= "22)  La auditoria es:";
 choices[21]= new Array();
 choices[21][0] = "Actividad que tiene por objeto la evaluaci&oacute;n de conformidad de dise&ntilde;os, productos software, procesos o sistema";
 choices[21][1] = "Proceso por el que el sistema de calidad de una empresa es auditado para comprobar el cumplimiento de determinadas normas";
 choices[21][2] = "Descripci&oacute;n completa de un producto software y las interrrelaciones de sus elementos";
 choices[21][3] = "Estructura organizativa, procedimientos, actividades y recursos que juntos aseguran que los productos software satisfacen las necesidades impl&iacute;citas o establecidas en contrato por los clientes";
 answers[21] = 0;
 units[21] = ['36'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 2209. ";
 preguntaids[21] = 2209


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[22]= "23)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[22]= new Array();
 choices[22][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[22][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[22][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[22][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[22] = 0;
 units[22] = ['1'];
 blocks[22] = ['A1'];
 comments[22] = "Id Pregunta: 97. Constituci&oacute;n de 1978";
 preguntaids[22] = 97


//  Id pregunta: 157 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[23]= new Array();
 choices[23][0] = "732";
 choices[23][1] = "626";
 choices[23][2] = "751";
 choices[23][3] = "360";
 answers[23] = 2;
 units[23] = ['5'];
 blocks[23] = ['A1'];
 comments[23] = "Id Pregunta: 157. Uni&oacute;n Europea";
 preguntaids[23] = 157


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[24]= "25)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[24]= new Array();
 choices[24][0] = "La Comisi&oacute;n Europea.";
 choices[24][1] = "El Consejo Europeo.";
 choices[24][2] = "El Consejo de Europa.";
 choices[24][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[24] = 0;
 units[24] = ['5'];
 blocks[24] = ['A1'];
 comments[24] = "Id Pregunta: 130. Uni&oacute;n Europea";
 preguntaids[24] = 130


//  Id pregunta: 928 Año de creación de pregunta: 2016
 questions[25]= "26)  La tecnolog&iacute;a de software que permite ejecutar al mismo tiempo varios sistemas operativos y aplicaciones en el mismo servidor se denomina:";
 choices[25]= new Array();
 choices[25][0] = "Clustering";
 choices[25][1] = "Deduplicaci&oacute;n";
 choices[25][2] = "Virtualizaci&oacute;n";
 choices[25][3] = "Contenerizaci&oacute;n";
 answers[25] = 2;
 units[25] = ['124'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 928. AGE A1 2015";
 preguntaids[25] = 928


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[26]= "27)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[26]= new Array();
 choices[26][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[26][1] = "Las inversiones reales y financieras.";
 choices[26][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[26][3] = "Las transferencias de capital y las inversiones reales.";
 answers[26] = 3;
 units[26] = ['11'];
 blocks[26] = ['A2'];
 comments[26] = "Id Pregunta: 287. Presupuestos generales";
 preguntaids[26] = 287


//  Id pregunta: 276 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[27]= new Array();
 choices[27][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[27][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[27][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[27][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[27] = 3;
 units[27] = ['11'];
 blocks[27] = ['A2'];
 comments[27] = "Id Pregunta: 276. Presupuestos generales";
 preguntaids[27] = 276


//  Id pregunta: 2512 Año de creación de pregunta: 2004
 questions[28]= "29)  El Administrador de una base de datos no tiene las siguientes responsabilidades:";
 choices[28]= new Array();
 choices[28][0] = "Optimizaci&oacute;n de las redundancias del espacio de almacenamiento";
 choices[28][1] = "Garantizar la seguridad f&iacute;sica de los datos ante fallos en el sistema, por ejemplo ca&iacute;das de tensi&oacute;n";
 choices[28][2] = "Participar en el dise&ntilde;o f&iacute;sico de los datos, definiendo la estructura f&iacute;sica de los &eacute;stos a partir del modelo de datos o de clases";
 choices[28][3] = "Determinar la interfaz de conexi&oacute;n con otros sistemas ya existentes";
 answers[28] = 3;
 units[28] = ['60'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 2512. Examen TIC MAP B 2004";
 preguntaids[28] = 2512


//  Id pregunta: 4103 Año de creación de pregunta: 2003
 questions[29]= "30)  El nivel l&eacute;xico-sint&aacute;ctico:";
 choices[29]= new Array();
 choices[29][0] = "Analiza las caracter&iacute;sticas f&iacute;sicas de la se&ntilde;al vocal, tales como la frecuencia fundamental, los formantes, las transiciones, etc.";
 choices[29][1] = "Llega a la comprensi&oacute;n del significado del mensaje, eliminando las posibles interpretaciones absurdas y comprobando la coherencia del mensaje recibido con el conocimiento previo que se tiene de la realidad, as&iacute; como del contexto en el que discurre el di&aacute;l";
 choices[29][2] = "Determina la precisa pronunciaci&oacute;n de las letras, s&iacute;labas y palabras.";
 choices[29][3] = "Extrae los s&iacute;mbolos elementales, morfemas, y se analiza su sucesi&oacute;n para comprobar su adecuaci&oacute;n a la gram&aacute;tica del lenguaje, la cual supone una determinada relaci&oacute;n entre ellos.";
 answers[29] = 3;
 units[29] = ['81'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 4103. ";
 preguntaids[29] = 4103


//  Id pregunta: 3771 Año de creación de pregunta: 2002
 questions[30]= "31)  El coste de la no calidad viene dado por:";
 choices[30]= new Array();
 choices[30][0] = "Evaluaci&oacute;n del producto final";
 choices[30][1] = "Fallos internos";
 choices[30][2] = "Fallos internos y externos";
 choices[30][3] = "Fallos externos con responsabilidad propia";
 answers[30] = 2;
 units[30] = ['93'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 3771. ";
 preguntaids[30] = 3771


//  Id pregunta: 10005 Año de creación de pregunta: 2015
 questions[31]= "32)  Una red TCP usa el protocolo de ventana deslizante como mecanismo de control de flujo. Supongamos que se establece el tama&ntilde;o de la ventana en 4 y los paquetes se numeran del 1 en adelante. Con estas condiciones, el emisor podr&aacute; enviar al receptor el paquete n&uacute;mero 5:";
 choices[31]= new Array();
 choices[31][0] = "&Uacute;nicamente cuando reciba el ACK del paquete 4.";
 choices[31][1] = "Cuando haya recibido al menos dos ACK.";
 choices[31][2] = "Cuando reciba cualquier ACK.";
 choices[31][3] = "Cuando se cumpla el timeout de env&iacute;o del paquete 1.";
 answers[31] = 2;
 units[31] = ['109'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 10005. Examen TIC A2 2014";
 preguntaids[31] = 10005


//  Id pregunta: 6852 Año de creación de pregunta: 2010
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes NO es una salida del proceso de Selecci&oacute;n de Vendedores dentro de la Gesti&oacute;n de las Adquisiciones del Proyecto?";
 choices[32]= new Array();
 choices[32][0] = "Contrato.";
 choices[32][1] = "Plan de gesti&oacute;n del contrato.";
 choices[32][2] = "Disponibilidad de recursos.";
 choices[32][3] = "Lista de vendedores calificados.";
 answers[32] = 3;
 units[32] = ['31'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 6852. ";
 preguntaids[32] = 6852


//  Id pregunta: 493 Año de creación de pregunta: 2016
 questions[33]= "34)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[33]= new Array();
 choices[33][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[33][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[33][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[33][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[33] = 2;
 units[33] = ['22'];
 blocks[33] = ['A4'];
 comments[33] = "Id Pregunta: 493. AGE A1 2015";
 preguntaids[33] = 493


//  Id pregunta: 5156 Año de creación de pregunta: 2003
 questions[34]= "35)  &iquest;En que nivel del modelo OSI se realiza el cifrado?";
 choices[34]= new Array();
 choices[34][0] = "1";
 choices[34][1] = "5";
 choices[34][2] = "7";
 choices[34][3] = "6";
 answers[34] = 3;
 units[34] = ['76'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 5156. ";
 preguntaids[34] = 5156


//  Id pregunta: 8063 Año de creación de pregunta: 2011
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes principios b&aacute;sicos no aparece en el Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[35]= new Array();
 choices[35][0] = "Seguridad transversal";
 choices[35][1] = "Gesti&oacute;n de riesgos";
 choices[35][2] = "L&iacute;neas de defensa";
 choices[35][3] = "Funci&oacute;n diferenciada";
 answers[35] = 0;
 units[35] = ['46'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 8063. ";
 preguntaids[35] = 8063


//  Id pregunta: 5296 Año de creación de pregunta: 2006
 questions[36]= "37)  Internet 2:";
 choices[36]= new Array();
 choices[36][0] = "Es una red telem&aacute;tica superpuesta a la red Internet y que hace las funciones de backup.";
 choices[36][1] = "Es una red de fibra &oacute;ptica cuyo backbone est&aacute; constituido por GigaPop.";
 choices[36][2] = "Prev&eacute; velocidades de hasta 622 Mbps para usuarios particulares.";
 choices[36][3] = "Ninguna respuesta es correcta";
 answers[36] = 2;
 units[36] = ['103'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 5296. ";
 preguntaids[36] = 5296


//  Id pregunta: 8071 Año de creación de pregunta: 2011
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes programas es la continuaci&oacute;n del programa IDABC finalizado en diciembre de 2009?";
 choices[37]= new Array();
 choices[37][0] = "AIF";
 choices[37][1] = "IDA";
 choices[37][2] = "ISA";
 choices[37][3] = "IMA";
 answers[37] = 2;
 units[37] = ['19'];
 blocks[37] = ['A4'];
 comments[37] = "Id Pregunta: 8071. ";
 preguntaids[37] = 8071


//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[38]= "39)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:";
 choices[38]= new Array();
 choices[38][0] = "Al Presidente del Gobierno.";
 choices[38][1] = "A las Cortes Generales";
 choices[38][2] = "A los electores.";
 choices[38][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[38] = 3;
 units[38] = ['1'];
 blocks[38] = ['A1'];
 comments[38] = "Id Pregunta: 23. Constituci&oacute;n de 1978";
 preguntaids[38] = 23


//  Id pregunta: 9364 Año de creación de pregunta: 2014
 questions[39]= "40)  Un equipo con la direcci&oacute;n IP 128.0.235.56/27 &iquest;Qu&eacute; m&aacute;scara de red, direcci&oacute;n de red y direcci&oacute;n de broadcast tiene?";
 choices[39]= new Array();
 choices[39][0] = "M&aacute;scara 255.255.255.224, red 128.0.235.32, broadcast 128.0.235.63";
 choices[39][1] = "M&aacute;scara 255.255.255.0, red 128.0.235.0, broadcast 128.0.235.255";
 choices[39][2] = "M&aacute;scara 255.255.255.192, red 128.0.235.0, broadcast 128.0.235.63";
 choices[39][3] = "M&aacute;scara 255.255.255.128, red 128.0.235.0, broadcast 128.0.235.127";
 answers[39] = 0;
 units[39] = ['109'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 9364. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[39] = 9364


//  Id pregunta: 4822 Año de creación de pregunta: 2002
 questions[40]= "41)  En las transmisi&oacute;n de datos en tramas se suele incluir un campo denominado CRC. Indique cu&aacute;l de las opciones le parece correcta:";
 choices[40]= new Array();
 choices[40][0] = "Es un campo que indica el final de la trama y prepara al equipo receptor para la siguiente";
 choices[40][1] = "Es un campo de control del n&uacute;mero de bits incluidos en la trama, para conocer el final de la misma";
 choices[40][2] = "Es un campo de control de integridad de la trama, sirve para comprobar la ocurrencia de ciertos errores en la transmisi&oacute;n";
 choices[40][3] = "Es un campo de control de integridad de la trama, sirve para detectar cualquier error en la transmisi&oacute;n";
 answers[40] = 2;
 units[40] = ['112'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 4822. ";
 preguntaids[40] = 4822


//  Id pregunta: 3720 Año de creación de pregunta: 2002
 questions[41]= "42)  &iquest;Qu&eacute; debe contener de forma general un Plan de Contingencia (tambi&eacute;n denominado Plan de Desastre)?:";
 choices[41]= new Array();
 choices[41][0] = "Plan de viabilidad, procedimientos de emergencia ante fallos, procedimientos de traslado a instalaci&oacute;n alternativa y plan de retorno a instalaci&oacute;n primaria";
 choices[41][1] = "Procedimientos de actuaci&oacute;n en caso de desastre, plan de copias de seguridad o de almacenamiento/recuperaci&oacute;n de informaci&oacute;n, procedimientos de traslado a instalaci&oacute;n alternativa y plan de retorno a instalaci&oacute;n primaria";
 choices[41][2] = "An&aacute;lisis de riesgos inform&aacute;ticos, plan de viabilidad, procedimientos de activaci&oacute;n en caso de desastre, plan de almacenamiento/recuperaci&oacute;n de informaci&oacute;n, procedimientos de traslado a instalaci&oacute;n alternativa y plan de retorno a instalaci&oacute;n primaria";
 choices[41][3] = "Plan de activaci&oacute;n de emergencia, procedimientos de emergencia ante fallos y procedimientos de traslado a instalaci&oacute;n alternativa";
 answers[41] = 1;
 units[41] = ['86'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 3720. ";
 preguntaids[41] = 3720


//  Id pregunta: 5195 Año de creación de pregunta: 2006
 questions[42]= "43)  En relaci&oacute;n a los cables de par trenzado UTP y STP, indique cu&aacute;l de las siguientes afirmaciones es cierta.";
 choices[42]= new Array();
 choices[42][0] = "Las categor&iacute;as 1 y 2 de UTP se emplean para transmisi&oacute;n de datos X.25";
 choices[42][1] = "La categor&iacute;a 4 de UTP especifica cables hasta 20 MHz, se utilizan para voz y datos hasta 16 Mbps";
 choices[42][2] = "El tipo 6 de cable STP emplea 4 pares trenzados de mayor calibre que los de tipo 1";
 choices[42][3] = "Los cables STP, a pesar de su menor inmunidad a las interferencias, son los de mayor implantaci&oacute;n en los cableados estructurados.";
 answers[42] = 1;
 units[42] = ['104'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 5195. ";
 preguntaids[42] = 5195


//  Id pregunta: 3315 Año de creación de pregunta: 2004
 questions[43]= "44)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[43]= new Array();
 choices[43][0] = "Los servicios OLAP son una herramienta de proceso anal&iacute;tico en l&iacute;nea.";
 choices[43][1] = "Pertenece al dominio de los almacenes de datos y se encuentra dentro del &aacute;mbito, m&aacute;s amplio, de los sistemas de toma de decisiones (DSS) y de los sistemas de informaci&oacute;n ejecutiva (EIS).";
 choices[43][2] = "Una de sus principales metas es incrementar la velocidad de recuperaci&oacute;n de datos.";
 choices[43][3] = "Los servicios OLAP son una herramienta de proceso transaccional en l&iacute;nea.";
 answers[43] = 3;
 units[43] = ['72'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 3315. MAP-B 2003";
 preguntaids[43] = 3315


//  Id pregunta: 6187 Año de creación de pregunta: 2003
 questions[44]= "45)  En el tercer nivel del modelo de arquitectura cliente/servidor, llamado proceso distribuido, las funciones de presentaci&oacute;n residen en:";
 choices[44]= new Array();
 choices[44][0] = "El cliente";
 choices[44][1] = "El servidor";
 choices[44][2] = "La red";
 choices[44][3] = "Se reparten entre cliente y el servidor";
 answers[44] = 0;
 units[44] = ['55'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 6187. Examen TIC A Castilla La Mancha 2007";
 preguntaids[44] = 6187


//  Id pregunta: 982 Año de creación de pregunta: 2016
 questions[45]= "46)  El articulo 55 de la ley 40/2015 se&ntilde;ala que salvo las excepciones previstas por esta ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[45]= new Array();
 choices[45][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[45][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[45][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[45][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[45] = 0;
 units[45] = ['4', '7', '8', '9'];
 blocks[45] = ['A1', 'A2'];
 comments[45] = "Id Pregunta: 982. Ley 40/2015";
 preguntaids[45] = 982


//  Id pregunta: 2010 Año de creación de pregunta: 2002
 questions[46]= "47)  &iquest;C&oacute;mo se denominan los distintos niveles de adecuaci&oacute;n contemplados en WAI?";
 choices[46]= new Array();
 choices[46][0] = "A, B, C y D";
 choices[46][1] = "A, AA y AAA";
 choices[46][2] = "A1, A2 y A3";
 choices[46][3] = "1, 2, 3 y 4";
 answers[46] = 1;
 units[46] = ['42'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 2010. ";
 preguntaids[46] = 2010


//  Id pregunta: 8868 Año de creación de pregunta: 2013
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes no es uno de los tres tipos de proyecto contemplados en el COCOMO cl&aacute;sico/81?";
 choices[47]= new Array();
 choices[47][0] = "Org&aacute;nico";
 choices[47][1] = "Acoplado";
 choices[47][2] = "Semiacoplado";
 choices[47][3] = "Empotrado";
 answers[47] = 1;
 units[47] = ['94'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 8868. ";
 preguntaids[47] = 8868


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[48]= "49)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[48]= new Array();
 choices[48][0] = "Diciembre de 1987.";
 choices[48][1] = "Septiembre de 1989.";
 choices[48][2] = "Octubre de 1990.";
 choices[48][3] = "Noviembre de 1980.";
 answers[48] = 1;
 units[48] = ['5'];
 blocks[48] = ['A1'];
 comments[48] = "Id Pregunta: 156. Uni&oacute;n Europea";
 preguntaids[48] = 156


//  Id pregunta: 7369 Año de creación de pregunta: 2010
 questions[49]= "50)  Se&ntilde;ale cu&aacute;l de las siguientes licencias es la &uacute;nica que puede considerarse licencia de software libre compatible con la GNU GPL:";
 choices[49]= new Array();
 choices[49][0] = "Sun Community Source License";
 choices[49][1] = "Apache License. Version 2.0";
 choices[49][2] = "Microsoft Public License (MS-OL)";
 choices[49][3] = "GNU Lesser General Public License (LGPL)";
 answers[49] = 3;
 units[49] = ['66'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 7369. Examen TIC B 2009";
 preguntaids[49] = 7369


//  Id pregunta: 2479 Año de creación de pregunta: 2004
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es correcta?";
 choices[50]= new Array();
 choices[50][0] = "El elemento b&aacute;sico para la programaci&oacute;n concurrente en Java son los 'threads'";
 choices[50][1] = "Java permite la herencia m&uacute;ltiple de clases";
 choices[50][2] = "El modelo de punteros de Java elimina la posibilidad de transformar un entero en un puntero";
 choices[50][3] = "La variable 'this' de una clase Java hace referencia a la propia instancia de la clase sobre la que se est&aacute; ejecutando el c&oacute;digo actual";
 answers[50] = 1;
 units[50] = ['64'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 2479. ";
 preguntaids[50] = 2479


//  Id pregunta: 1006 Año de creación de pregunta: 2016
 questions[51]= "52)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[51]= new Array();
 choices[51][0] = "los Secretarios de Estado";
 choices[51][1] = "los Ministros";
 choices[51][2] = "los Subsecretarios";
 choices[51][3] = "los Secretarios generales";
 answers[51] = 2;
 units[51] = ['4', '7', '8', '9'];
 blocks[51] = ['A1', 'A2'];
 comments[51] = "Id Pregunta: 1006. Ley 40/2015";
 preguntaids[51] = 1006


//  Id pregunta: 1017 Año de creación de pregunta: 2016
 questions[52]= "53)  Los Delegados del Gobierno en las Comunidades Autonomas (se&ntilde;ala la incorrecta):";
 choices[52]= new Array();
 choices[52][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[52][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[52][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[52][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[52] = 2;
 units[52] = ['4', '7', '8', '9'];
 blocks[52] = ['A1', 'A2'];
 comments[52] = "Id Pregunta: 1017. Ley 40/2015";
 preguntaids[52] = 1017


//  Id pregunta: 8375 Año de creación de pregunta: 2011
 questions[53]= "54)  La cl&aacute;usula HAVING de SQL:";
 choices[53]= new Array();
 choices[53][0] = "Establece un filtro para seleccionar las filas que se usar&aacute;n en la consulta.";
 choices[53][1] = "Precisa de la presencia de la cl&aacute;usula WHERE en la sentencia.";
 choices[53][2] = "Establece un filtro que se aplica a las tablas agrupadas.";
 choices[53][3] = "Establece una condici&oacute;n que deben cumplir las filas.";
 answers[53] = 2;
 units[53] = ['60', '61'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 8375. Examen UPM A2 2011";
 preguntaids[53] = 8375


//  Id pregunta: 704 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;l es el orden correcto de los niveles de prioridad del mensaje de la librer&iacute;a log4j de Apache Software Foundation?";
 choices[54]= new Array();
 choices[54][0] = "ERROR, FATAL, INFO, WARN, DEBUG Y TRACE.";
 choices[54][1] = "ERROR, FATAL, INFO, WARN, TRACE y DEBUG.";
 choices[54][2] = "FATAL, ERROR, WARN, INFO, DEBUG Y TRACE.";
 choices[54][3] = "FATAL, ERROR, WARN, INFO, TRACE Y DEBUG.";
 answers[54] = 2;
 units[54] = ['62'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 704. AGE A2 2015";
 preguntaids[54] = 704


//  Id pregunta: 8974 Año de creación de pregunta: 2013
 questions[55]= "56)  El &quot;Servicio Central de Gesti&oacute;n de Facturaci&oacute;n&quot; de la Administraci&oacute;n General del Estado, es descrito en:";
 choices[55]= new Array();
 choices[55][0] = "Ley 30/2007 de Contratos del Sector P&uacute;blico.";
 choices[55][1] = "ORDEN PRE/2971/2007, sobre l a expedici&oacute;n de facturas por medios electr&oacute;nicos cuando el destinatario de las mismas sea la Administraci&oacute;n General del Estado.";
 choices[55][2] = "Ley 56/2007 de Medidas de Impulso de la Sociedad de la Informaci&oacute;n.";
 choices[55][3] = "Orden PRE/2794/2011, por el que se determina el marco de ejercicio de las competencias estatales en materia de factura electr&oacute;nica.";
 answers[55] = 3;
 units[55] = ['19'];
 blocks[55] = ['A4'];
 comments[55] = "Id Pregunta: 8974. Examen TIC A1 2011";
 preguntaids[55] = 8974


//  Id pregunta: 1420 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Qu&eacute; T&iacute;tulo regula la Econom&iacute;a y la Hacienda en la Constituci&oacute;n Espa&ntilde;ola vigente en la actualidad?:";
 choices[56]= new Array();
 choices[56][0] = "El T&iacute;tulo IV.";
 choices[56][1] = "El T&iacute;tulo V.";
 choices[56][2] = "El T&iacute;tulo VI.";
 choices[56][3] = "El T&iacute;tulo VII.";
 answers[56] = 3;
 units[56] = ['1'];
 blocks[56] = ['A1'];
 comments[56] = "Id Pregunta: 1420. ";
 preguntaids[56] = 1420


//  Id pregunta: 3144 Año de creación de pregunta: 2002
 questions[57]= "58)  Para el tratamiento de im&aacute;genes informatizadas se usan algoritmos construidos mediante:";
 choices[57]= new Array();
 choices[57][0] = "Ecuaciones de Cauchy";
 choices[57][1] = "Series de McLaurin";
 choices[57][2] = "Integrales de Riemann Stiltges";
 choices[57][3] = "Transformadas de Fourier";
 answers[57] = 3;
 units[57] = ['80'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 3144. ";
 preguntaids[57] = 3144


//  Id pregunta: 2775 Año de creación de pregunta: 2002
 questions[58]= "59)  El nombre del lenguaje Ada se debe a:";
 choices[58]= new Array();
 choices[58][0] = "Advanced Development of Algorithms";
 choices[58][1] = "Automatic Development and Adaptation of software";
 choices[58][2] = "Adaptative Digital Algorithms";
 choices[58][3] = "Es un homenaje a Ada Augusta Byron, considerada la primera programadora de la historia, que contribuy&oacute; econ&oacute;micamente y laboralmente al desarrollo de las primeras m&aacute;quinas diferenciales";
 answers[58] = 3;
 units[58] = ['56'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 2775. ";
 preguntaids[58] = 2775


//  Id pregunta: 3869 Año de creación de pregunta: 2002
 questions[59]= "60)  La estimaci&oacute;n de inversiones, costes de funcionamiento y resultados esperados se define en:";
 choices[59]= new Array();
 choices[59][0] = "Especificaciones funcionales del sistema";
 choices[59][1] = "Plan de sistemas";
 choices[59][2] = "Dise&ntilde;o del sistema";
 choices[59][3] = "Ninguno de los anteriores";
 answers[59] = 1;
 units[59] = ['83'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 3869. ";
 preguntaids[59] = 3869


//  Id pregunta: 311 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[60]= new Array();
 choices[60][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[60][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[60][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[60][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[60] = 2;
 units[60] = ['11'];
 blocks[60] = ['A2'];
 comments[60] = "Id Pregunta: 311. Presupuestos generales";
 preguntaids[60] = 311


//  Id pregunta: 10397 Año de creación de pregunta: 2015
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital Espa&ntilde;ola?";
 choices[61]= new Array();
 choices[61][0] = "Confianza Digital";
 choices[61][1] = "Mejorar la Administraci&oacute;n Electr&oacute;nica";
 choices[61][2] = "Despliegue de redes r&aacute;pidas y ultrarr&aacute;pidas";
 choices[61][3] = "Interoperabilidad y normas";
 answers[61] = 3;
 units[61] = ['19'];
 blocks[61] = ['A4'];
 comments[61] = "Id Pregunta: 10397. ";
 preguntaids[61] = 10397


//  Id pregunta: 7996 Año de creación de pregunta: 2011
 questions[62]= "63)  &iquest;Qu&eacute; librer&iacute;a de .Net permite aplicar el patr&oacute;n &quot;Inversion of Control&quot;?";
 choices[62]= new Array();
 choices[62][0] = "Unity Application Block,";
 choices[62][1] = "Logging Application Block.";
 choices[62][2] = "Ajax Control Toolkit";
 choices[62][3] = "Cached XML Data Mapper";
 answers[62] = 0;
 units[62] = ['63', '124'];
 blocks[62] = ['B2', 'B4'];
 comments[62] = "Id Pregunta: 7996. Examen TIC A2 2010";
 preguntaids[62] = 7996


//  Id pregunta: 1888 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA, en relaci&oacute;n a los beneficios que aporta la buena Gobernabilidad de las TIC?:";
 choices[63]= new Array();
 choices[63][0] = "Mejora la calidad del servicio";
 choices[63][1] = "Optimiza los costes";
 choices[63][2] = "Mejora la transparencia";
 choices[63][3] = "Reduce los riesgos";
 answers[63] = 2;
 units[63] = ['101'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 1888. ";
 preguntaids[63] = 1888


//  Id pregunta: 9801 Año de creación de pregunta: 2015
 questions[64]= "65)  La LOPD:";
 choices[64]= new Array();
 choices[64][0] = "Desarrolla el art&iacute;culo 17.4 de la Constituci&oacute;n Espa&ntilde;ola";
 choices[64][1] = "A y C son correctas";
 choices[64][2] = "Es la transposici&oacute;n de la Directiva 95/46/CE";
 choices[64][3] = "A y C son incorrectas.";
 answers[64] = 2;
 units[64] = ['35'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 9801. ";
 preguntaids[64] = 9801


//  Id pregunta: 8508 Año de creación de pregunta: 2011
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes no es un mapeador objeto-relacional?";
 choices[65]= new Array();
 choices[65][0] = "Postgres";
 choices[65][1] = "Hibernate";
 choices[65][2] = "TopLink";
 choices[65][3] = "Ibatis";
 answers[65] = 0;
 units[65] = ['64'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 8508. ";
 preguntaids[65] = 8508


//  Id pregunta: 7936 Año de creación de pregunta: 2011
 questions[66]= "67)  Una red administrada a trav&eacute;s de SNMP contempla tres componentes claves. &iquest;Cu&aacute;l de los siguientes NO es uno de ellos?";
 choices[66]= new Array();
 choices[66][0] = "Dispositivos administrados.";
 choices[66][1] = "Agentes.";
 choices[66][2] = "Sistemas administradores de red (NMS).";
 choices[66][3] = "Registro de ubicaci&oacute;n de visitantes (VLR).";
 answers[66] = 3;
 units[66] = ['112'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 7936. Examen TIC A2 2010";
 preguntaids[66] = 7936


//  Id pregunta: 4852 Año de creación de pregunta: 2002
 questions[67]= "68)  En una celda ATM, si el campo PT contiene el valor 100:";
 choices[67]= new Array();
 choices[67][0] = "Es una celda de datos de usuario";
 choices[67][1] = "Es una celda de gesti&oacute;n de recursos";
 choices[67][2] = "Es una celda de datos de usuario pero indica extremo a extremo la congestion de trafico";
 choices[67][3] = "Es una celda asociada al segmento F5 de OAM";
 answers[67] = 3;
 units[67] = ['107'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 4852. ";
 preguntaids[67] = 4852


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[68]= "69)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[68]= new Array();
 choices[68][0] = "Un Reglamento.";
 choices[68][1] = "Un Decreto.";
 choices[68][2] = "Una Ley.";
 choices[68][3] = "Un Real-Decreto.";
 answers[68] = 2;
 units[68] = ['5'];
 blocks[68] = ['A1'];
 comments[68] = "Id Pregunta: 190. Uni&oacute;n Europea";
 preguntaids[68] = 190


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[69]= "70)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[69]= new Array();
 choices[69][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[69][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[69][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[69][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[69] = 2;
 units[69] = ['1'];
 blocks[69] = ['A1'];
 comments[69] = "Id Pregunta: 17. Constituci&oacute;n de 1978";
 preguntaids[69] = 17


//  Id pregunta: 60 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[70]= new Array();
 choices[70][0] = "Por Real Decreto.";
 choices[70][1] = "Por Orden del Ministerio del Interior.";
 choices[70][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[70][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[70] = 2;
 units[70] = ['1'];
 blocks[70] = ['A1'];
 comments[70] = "Id Pregunta: 60. Constituci&oacute;n de 1978";
 preguntaids[70] = 60


//  Id pregunta: 3701 Año de creación de pregunta: 2002
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes principios no es de los generalmente aceptados del dise&ntilde;o estructurado?";
 choices[71]= new Array();
 choices[71][0] = "Modularizaci&oacute;n.";
 choices[71][1] = "Dependencia modular.";
 choices[71][2] = "Modularizaci&oacute;n conceptual.";
 choices[71][3] = "Principio de 'caja negra'.";
 answers[71] = 1;
 units[71] = ['89'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 3701. ";
 preguntaids[71] = 3701


//  Id pregunta: 8021 Año de creación de pregunta: 2011
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre iSCSI es FALSA?:";
 choices[72]= new Array();
 choices[72][0] = "Es un est&aacute;ndar de la IETF.";
 choices[72][1] = "Utiliza por defecto los puertos TCP 860 y TCP 3260.";
 choices[72][2] = "Necesita una arquitectura de cableado independiente.";
 choices[72][3] = "Usa CHAP como principal m&eacute;todo de autenticaci&oacute;n.";
 answers[72] = 2;
 units[72] = ['53'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 8021. Examen TIC A2 2010";
 preguntaids[72] = 8021


//  Id pregunta: 3261 Año de creación de pregunta: 2003
 questions[73]= "74)  En un modelo de datos jer&aacute;rquico:";
 choices[73]= new Array();
 choices[73][0] = "Un registro no es subordinado directo de ning&uacute;n otro registro.";
 choices[73][1] = "Un registro es subordinado directo de como m&aacute;ximo otro registro.";
 choices[73][2] = "Un registro es subordinado directo de n registros, dependiendo de la topolog&iacute;a del modelo.";
 choices[73][3] = "Los registros estar organizados en una red de relaciones mediante un grafo.";
 answers[73] = 1;
 units[73] = ['60'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 3261. Junta Andaluc&iacute;a";
 preguntaids[73] = 3261


//  Id pregunta: 7859 Año de creación de pregunta: 2011
 questions[74]= "75)  Conforme a la especificaci&oacute;n 3GPP TS 03.60, GPRS se implementa l&oacute;gicamente a&ntilde;adiendo a la estructura de GSM los nodos Serving GPRS Support Node (SGSN) y Gateway GPRS Support Node (GGSN). &iquest;Cu&aacute;l es la afirmaci&oacute;n correcta?:";
 choices[74]= new Array();
 choices[74][0] = "Entre ambos tipos de nodos se define la Intefaz Gn si est&aacute;n situados en la misma red m&oacute;vil (PLMN).";
 choices[74][1] = "El SGSN es el nodo de interconexi&oacute;n con la Red de Conmutaci&oacute;n de Paquetes o Packet Data Network (PDN).";
 choices[74][2] = "La funcionalidad proporcionada por SGSN y GGSN debe residir en diferentes nodos f&iacute;sicos.";
 choices[74][3] = "Entre ambos tipos de nodos se define la Intefaz Gi si est&aacute;n situados en distinta red m&oacute;vil (PLMN).";
 answers[74] = 0;
 units[74] = ['117'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 7859. Examen TIC A1 2010";
 preguntaids[74] = 7859


