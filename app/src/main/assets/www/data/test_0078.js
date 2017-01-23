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
//  Id pregunta: 10367 Año de creación de pregunta: 2015
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes procesos no forma parte del Soporte de Servicio seg&uacute;n la biblioteca ITIL v3?";
 choices[0]= new Array();
 choices[0][0] = "Gesti&oacute;n de Incidencias";
 choices[0][1] = "Gesti&oacute;n de Problemas";
 choices[0][2] = "Gesti&oacute;n de Eventos";
 choices[0][3] = "Gesti&oacute;n del Cambio";
 answers[0] = 2;
 units[0] = ['101'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 10367. ";
 preguntaids[0] = 10367


//  Id pregunta: 1016 Año de creación de pregunta: 2016
 questions[1]= "2)  Respecto a los servicios territoriales es correcto:";
 choices[1]= new Array();
 choices[1][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[1][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[1][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[1][3] = "ninguna es correcta";
 answers[1] = 0;
 units[1] = ['4', '7', '8', '9'];
 blocks[1] = ['A1', 'A2'];
 comments[1] = "Id Pregunta: 1016. Ley 40/2015";
 preguntaids[1] = 1016


//  Id pregunta: 380 Año de creación de pregunta: 2016
 questions[2]= "3)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[2]= new Array();
 choices[2][0] = "A la persona demandante.";
 choices[2][1] = "A la persona demandada.";
 choices[2][2] = "Al &oacute;rgano judicial.";
 choices[2][3] = "Al &oacute;rgano administrativo.";
 answers[2] = 1;
 units[2] = ['14'];
 blocks[2] = ['A3'];
 comments[2] = "Id Pregunta: 380. Pol&iacute;ticas de igualdad";
 preguntaids[2] = 380


//  Id pregunta: 1384 Año de creación de pregunta: 2016
 questions[3]= "4)  De las siguientes cabeceras IPv6 (RFC 2460), &iquest;cu&aacute;l de las siguientes cabeceras NO es de extensi&oacute;n?";
 choices[3]= new Array();
 choices[3][0] = "Fragmentaci&oacute;n.";
 choices[3][1] = "Opciones de salto a salto.";
 choices[3][2] = "Autenticaci&oacute;n.";
 choices[3][3] = "Limite de saltos.";
 answers[3] = 3;
 units[3] = ['109'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 1384. ";
 preguntaids[3] = 1384


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Qu&eacute; herramienta dentro del ecosistema Hadoop sirve para trasladar datos masivos entre Hadoop y sistemas de tratamiento estructurados?";
 choices[4]= new Array();
 choices[4][0] = "Avro";
 choices[4][1] = "Sqoop";
 choices[4][2] = "UIMA";
 choices[4][3] = "Jaql";
 answers[4] = 1;
 units[4] = ['73'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 758. Big Data y NoSQL";
 preguntaids[4] = 758


//  Id pregunta: 1786 Año de creación de pregunta: 2016
 questions[5]= "6)  Seg&uacute;n el art. 98 del Real Decreto Legislativo 1/1996, de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual, &iquest;cu&aacute;l es la duraci&oacute;n de los derechos de explotaci&oacute;n de un programa de ordenador?";
 choices[5]= new Array();
 choices[5][0] = "60 a&ntilde;os";
 choices[5][1] = "50 a&ntilde;os";
 choices[5][2] = "80 a&ntilde;os";
 choices[5][3] = "Ninguna es correcta";
 answers[5] = 0;
 units[5] = ['41'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 1786. ";
 preguntaids[5] = 1786


//  Id pregunta: 8427 Año de creación de pregunta: 2011
 questions[6]= "7)  De acuerdo con la ley 18/2011, &iquest;cu&aacute;l no es un derecho de los profesionales de la justicia en relaci&oacute;n con la utilizaci&oacute;n de los medios electr&oacute;nicos en la actividad judicial?";
 choices[6]= new Array();
 choices[6][0] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que sean representantes procesales de la parte personada";
 choices[6][1] = "A utilizar los sistemas de firma electr&oacute;nica del Documento Nacional de Identidad o cualquier otro reconocido, siempre que dicho sistema le identifique de forma un&iacute;voca como profesional";
 choices[6][2] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que acrediten inter&eacute;s leg&iacute;timo";
 choices[6][3] = "Todos los anteriores lo son";
 answers[6] = 3;
 units[6] = ['2'];
 blocks[6] = ['A1'];
 comments[6] = "Id Pregunta: 8427. ";
 preguntaids[6] = 8427


//  Id pregunta: 7223 Año de creación de pregunta: 2010
 questions[7]= "8)  &iquest;Cu&aacute;l no es un entorno de escritorio para Linux?";
 choices[7]= new Array();
 choices[7][0] = "KDE";
 choices[7][1] = "GNOME";
 choices[7][2] = "XCFE";
 choices[7][3] = "SUSE";
 answers[7] = 3;
 units[7] = ['57'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 7223. ";
 preguntaids[7] = 7223


//  Id pregunta: 6849 Año de creación de pregunta: 2010
 questions[8]= "9)  &iquest;En cu&aacute;ntos 'niveles de madurez' se clasifican las organizaciones seg&uacute;n el modelo de capacidad y madurez CMM?";
 choices[8]= new Array();
 choices[8][0] = "4";
 choices[8][1] = "5";
 choices[8][2] = "3";
 choices[8][3] = "No existe tal concepto.";
 answers[8] = 1;
 units[8] = ['98'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 6849. ";
 preguntaids[8] = 6849


//  Id pregunta: 6048 Año de creación de pregunta: 2003
 questions[9]= "10)  El lenguaje de control de trabajos JCL se utiliza para:";
 choices[9]= new Array();
 choices[9][0] = "Definir las sentencias de control de los procedimientos almacenados en una tabla de base de datos.";
 choices[9][1] = "Definir listas de acceso de usuarios a un sistema de informaci&oacute;n.";
 choices[9][2] = "Indicar al sistema operativo como arrancar un programa por lotes y qu&eacute; recursos va a necesitar.";
 choices[9][3] = "Controlar las excepciones en el lenguaje de programaci&oacute;n Java.";
 answers[9] = 2;
 units[9] = ['57'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 6048. TIC B 2007";
 preguntaids[9] = 6048


//  Id pregunta: 7250 Año de creación de pregunta: 2010
 questions[10]= "11)  Un usuario de Kerberos";
 choices[10]= new Array();
 choices[10][0] = "Recibe un ticket para garantizar el acceso TGT";
 choices[10][1] = "El ticket permite al usuario pedir acceso a los distintos recursos";
 choices[10][2] = "El servicio de generaci&oacute;n de tickets TGS genera los tickets con las claves de sesi&oacute;n.";
 choices[10][3] = "Todas las respuestas anteriores son correctas";
 answers[10] = 3;
 units[10] = ['120'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 7250. ";
 preguntaids[10] = 7250


//  Id pregunta: 1655 Año de creación de pregunta: 2016
 questions[11]= "12)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[11]= new Array();
 choices[11][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[11][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[11][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[11][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[11] = 3;
 units[11] = ['1'];
 blocks[11] = ['A1'];
 comments[11] = "Id Pregunta: 1655. ";
 preguntaids[11] = 1655


//  Id pregunta: 8454 Año de creación de pregunta: 2011
 questions[12]= "13)  Como algoritmos de cifrado sim&eacute;trico de bloque no figura:";
 choices[12]= new Array();
 choices[12][0] = "Lucifer";
 choices[12][1] = "Serpent";
 choices[12][2] = "Seal";
 choices[12][3] = "Shark";
 answers[12] = 2;
 units[12] = ['76'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 8454. ";
 preguntaids[12] = 8454


//  Id pregunta: 6373 Año de creación de pregunta: 2003
 questions[13]= "14)  Una de las primeras personas en desarrollar un concepto de la sociedad de la informaci&oacute;n fue el economista";
 choices[13]= new Array();
 choices[13][0] = "Fritz Machlup";
 choices[13][1] = "Charles Babbage";
 choices[13][2] = "Herman Hollerith";
 choices[13][3] = "Howard Aiken";
 answers[13] = 0;
 units[13] = ['21'];
 blocks[13] = ['A4'];
 comments[13] = "Id Pregunta: 6373. Examen 2006 JCYL";
 preguntaids[13] = 6373


//  Id pregunta: 5383 Año de creación de pregunta: 2006
 questions[14]= "15)  Estandar que permite redes inal&aacute;mbricas con frecuencias de 2.4 GHz.";
 choices[14]= new Array();
 choices[14][0] = "802.11a";
 choices[14][1] = "802.11b";
 choices[14][2] = "802.11g";
 choices[14][3] = "B y C son correctas";
 answers[14] = 3;
 units[14] = ['108'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 5383. ";
 preguntaids[14] = 5383


//  Id pregunta: 6493 Año de creación de pregunta: 2003
 questions[15]= "16)  Se&ntilde;ale la respuesta falsa sobre las redes neuronales";
 choices[15]= new Array();
 choices[15][0] = "Las redes de neuronas son un modelo de representaci&oacute;n del conocimiento de forma simb&oacute;lica";
 choices[15][1] = "Las neuronas se unen entre s&iacute; para formar una red. La fuerza de la uni&oacute;n se valora mediante un peso";
 choices[15][2] = "Para un funcionamiento correcto de la red es necesaria una fase previa de entrenamiento";
 choices[15][3] = "Un algoritmo muy utilizado para entrenar las redes es la retropropagaci&oacute;n";
 answers[15] = 0;
 units[15] = ['67'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 6493. ";
 preguntaids[15] = 6493


//  Id pregunta: 3586 Año de creación de pregunta: 2004
 questions[16]= "17)  En el contexto de las metodolog&iacute;as estructuradas para el dise&ntilde;o de sistemas de informaci&oacute;n, &iquest;cu&aacute;l de las siguientes afirmaciones es la correcta?";
 choices[16]= new Array();
 choices[16][0] = "El dise&ntilde;o l&oacute;gico debe preceder y estar separado del dise&ntilde;o f&iacute;sico";
 choices[16][1] = "El dise&ntilde;o f&iacute;sico debe preceder y estar separado del dise&ntilde;o l&oacute;gico";
 choices[16][2] = "No existe separaci&oacute;n entre dise&ntilde;o f&iacute;sico y l&oacute;gico; se realiza de forma conjunta";
 choices[16][3] = "La metodolog&iacute;a solo aborda el dise&ntilde;o f&iacute;sico";
 answers[16] = 0;
 units[16] = ['84', '86'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 3586. Pregunta Junta Andalucia - A";
 preguntaids[16] = 3586


//  Id pregunta: 8218 Año de creación de pregunta: 2011
 questions[17]= "18)  &iquest;Qu&eacute; perfil es el encargado de la tarea de M&eacute;trica v3 &quot;Definici&oacute;n del Esquema de Formaci&oacute;n&quot;?";
 choices[17]= new Array();
 choices[17][0] = "Analista.";
 choices[17][1] = "Consultor.";
 choices[17][2] = "Analista-programador.";
 choices[17][3] = "Programador.";
 answers[17] = 0;
 units[17] = ['91'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 8218. Examen TIC A2 2010 interna";
 preguntaids[17] = 8218


//  Id pregunta: 4575 Año de creación de pregunta: 2002
 questions[18]= "19)  &iquest;Cu&aacute;l es la velocidad del canal D en un acceso primario RDSI en Europa?:";
 choices[18]= new Array();
 choices[18][0] = "16 kbps";
 choices[18][1] = "32 kbps";
 choices[18][2] = "64 kbps";
 choices[18][3] = "128 kbps";
 answers[18] = 2;
 units[18] = ['114'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 4575. ";
 preguntaids[18] = 4575


//  Id pregunta: 1534 Año de creación de pregunta: 2016
 questions[19]= "20)  De acuerdo con lo previsto en el art&iacute;culo 20 de la Ley Org&aacute;nica 3/2007, los poderes p&uacute;blicos deben considerar la variable sexo, en la realizaci&oacute;n:";
 choices[19]= new Array();
 choices[19][0] = "De compras p&uacute;blicas de bienes y servicios inform&aacute;ticos.";
 choices[19][1] = "De estad&iacute;sticas, encuestas y recogidas de datos que lleven a cabo.";
 choices[19][2] = "Del dise&ntilde;o de formularios de las autoliquidaciones tributarias.";
 choices[19][3] = "De proyectos de actuaci&oacute;n o reforma de bienes inmuebles del patrimonio del estado.";
 answers[19] = 1;
 units[19] = ['14'];
 blocks[19] = ['A3'];
 comments[19] = "Id Pregunta: 1534. ";
 preguntaids[19] = 1534


//  Id pregunta: 4046 Año de creación de pregunta: 2003
 questions[20]= "21)  En la planificaci&oacute;n de Sistemas de informaci&oacute;n seg&uacute;n METRICA V3 en relaci&oacute;n con la actividad Estudio de Informaci&oacute;n Relevante, PSI3, La Definici&oacute;n de Requisitos, PSI4, y el Estudio de la situaci&oacute;n actual, PSI5:";
 choices[20]= new Array();
 choices[20][0] = "Dado que los resultados de la actividad estudio de la informaci&oacute;n relevante, PSI3, debe tenerse en cuenta para la definici&oacute;n de Requisitos, PSI4, esta &uacute;ltima s&oacute;lo puede llevarse a cabo una vez finalizada la anterior.";
 choices[20][1] = "Aunque los resultados de la actividad PSI3 debe tenerse en cuenta para la PSI4, ambas pueden realizarse en paralelo junto a PSI5.";
 choices[20][2] = "La, actividades PSI3 p PSI4 deben preceder a PSI5.";
 choices[20][3] = "El orden de realizaci&oacute;n de PSI3 y PSI4 debe preceder a PSI5.";
 answers[20] = 1;
 units[20] = ['91'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 4046. Junta Andaluc&iacute;a";
 preguntaids[20] = 4046


//  Id pregunta: 3625 Año de creación de pregunta: 2002
 questions[21]= "22)  En un Sistema de Gesti&oacute;n de Bases de Datos Documentales el diccionario de palabras vac&iacute;as permite:";
 choices[21]= new Array();
 choices[21][0] = "Buscar palabras o combinaciones de las mismas sin conocer con exactitud los caracteres que las componen";
 choices[21][1] = "Enlazar consultas individuales para crear rutinas de interrogaci&oacute;n complejas";
 choices[21][2] = "Definir un conjunto de palabras que no deseamos que formen parte de los &iacute;ndices";
 choices[21][3] = "Igualar caracteres para que el sistema de b&uacute;squeda los considere iguales";
 answers[21] = 2;
 units[21] = ['100'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 3625. ";
 preguntaids[21] = 3625


//  Id pregunta: 4930 Año de creación de pregunta: 2002
 questions[22]= "23)  Un acceso RDSI:";
 choices[22]= new Array();
 choices[22][0] = "Precisa de una instalaci&oacute;n de cable espec&iacute;fica en casa del abonado";
 choices[22][1] = "Es un servicio que se proporciona sobre el par de hilos telef&oacute;nico";
 choices[22][2] = "Precisa tener contratados 2 canales de voz";
 choices[22][3] = "Ninguna de las anteriores de las respuestas anteriores es correcta";
 answers[22] = 1;
 units[22] = ['114'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 4930. ";
 preguntaids[22] = 4930


//  Id pregunta: 2758 Año de creación de pregunta: 2002
 questions[23]= "24)  El Kernel del sistema objetivo del proyecto GNU es:";
 choices[23]= new Array();
 choices[23][0] = "El kernel 'Linux', mantenido por Linus Torvalds";
 choices[23][1] = "El kernel de Minix, de Andrew S. Tanembaum";
 choices[23][2] = "El kernel Hurd";
 choices[23][3] = "Todas son falsas";
 answers[23] = 2;
 units[23] = ['57'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 2758. ";
 preguntaids[23] = 2758


//  Id pregunta: 340 Año de creación de pregunta: 2016
 questions[24]= "25)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[24]= new Array();
 choices[24][0] = "Los ocupados y los parados activos";
 choices[24][1] = "S&oacute;lo los ocupados";
 choices[24][2] = "Los ocupados y los inactivos";
 choices[24][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[24] = 0;
 units[24] = ['12'];
 blocks[24] = ['A3'];
 comments[24] = "Id Pregunta: 340. Modelo econ&oacute;mico";
 preguntaids[24] = 340


//  Id pregunta: 253 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n la ley 39/2015, los actos administrativos ser&aacute;n objeto de publicaci&oacute;n cuando (se&ntilde;ala la incorrecta):";
 choices[25]= new Array();
 choices[25][0] = "la Administraci&oacute;n estime que la notificaci&oacute;n efectuada a un solo interesado es insuficiente para garantizar la notificaci&oacute;n a todos, no siendo necesaria la notificaci&oacute;n individualizada en este caso";
 choices[25][1] = "se trate de actos integrantes de un procedimiento selectivo o de concurrencia competitiva de cualquier tipo";
 choices[25][2] = "el acto tenga por destinatario a una pluralidad indeterminada de personas";
 choices[25][3] = "as&iacute; lo establezcan las normas reguladoras de cada procedimiento o lo aconsejen razones de inter&eacute;s p&uacute;blico apreciadas por el &oacute;rgano competente";
 answers[25] = 0;
 units[25] = ['7'];
 blocks[25] = ['A2'];
 comments[25] = "Id Pregunta: 253. Ley 39/2015";
 preguntaids[25] = 253


//  Id pregunta: 8267 Año de creación de pregunta: 2011
 questions[26]= "27)  Un ciudadano quiere remitir un escrito con una sugerencia de servicio a un organismo con oficinas de atenci&oacute;n al p&uacute;blico, &iquest;est&aacute; contemplada en la Ley 39/2015, del procedimiento administrativo com&uacute;n de las administraciones p&uacute;blicas, la posibilidad de que remita ese escrito, con un formato libre, a trav&eacute;s del registro electr&oacute;nico del organismo destinatario del mismo?";
 choices[26]= new Array();
 choices[26][0] = "Si, est&aacute; prevista tal posibilidad para cualquier solicitud, escrito o comunicaci&oacute;n dirigida a cualquier &oacute;rgano o entidad del &aacute;mbito de la administraci&oacute;n titular del registro";
 choices[26][1] = "No, porque s&oacute;lo se prev&eacute; la recepci&oacute;n de documentos normalizados, que est&eacute;n predeterminados en la normativa de creaci&oacute;n del registro, nunca un escrito no normalizado como el del enunciado";
 choices[26][2] = "Se prev&eacute; tal recepci&oacute;n, pero con car&aacute;cter informativo &uacute;nicamente, debiendo complementar el envi&oacute; con el escrito en papel, a trav&eacute;s de un registro f&iacute;sico, en un plazo definido en la normativa de desarrollo";
 choices[26][3] = "S&iacute;, porque cumple con el requisito indispensable de tratarse del registro del organismo destinatario del registro";
 answers[26] = 0;
 units[26] = ['7'];
 blocks[26] = ['A2'];
 comments[26] = "Id Pregunta: 8267. Examen TIC A2 2010 interna";
 preguntaids[26] = 8267


//  Id pregunta: 5632 Año de creación de pregunta: 2007
 questions[27]= "28)  &iquest;Cual de los siguientes modelos de ciclo de vida no es adecuado para el desarrollo de sistemas de informaci&oacute;n orientados a objetos?";
 choices[27]= new Array();
 choices[27][0] = "Modelo de agrupamiento.";
 choices[27][1] = "Modelo en cascada.";
 choices[27][2] = "Modelo remolino.";
 choices[27][3] = "Modelo pinball.";
 answers[27] = 1;
 units[27] = ['82'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 5632. ";
 preguntaids[27] = 5632


//  Id pregunta: 4862 Año de creación de pregunta: 2002
 questions[28]= "29)  Entre las limitaciones inherentes a las redes locales, que hacen necesaria la segmentaci&oacute;n y la interconexi&oacute;n, no se encuentra:";
 choices[28]= new Array();
 choices[28][0] = "limitaciones en el n&uacute;mero de hosts";
 choices[28][1] = "limitaciones de tecnolog&iacute;as disponibles y fabricantes";
 choices[28][2] = "limitaciones en el n&uacute;mero y tipo de nodos, as&iacute; como en su acceso";
 choices[28][3] = "limitaciones de la distancia a cubrir";
 answers[28] = 1;
 units[28] = ['102'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 4862. ";
 preguntaids[28] = 4862


//  Id pregunta: 1656 Año de creación de pregunta: 2016
 questions[29]= "30)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[29]= new Array();
 choices[29][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[29][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[29][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[29][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno";
 answers[29] = 2;
 units[29] = ['1'];
 blocks[29] = ['A1'];
 comments[29] = "Id Pregunta: 1656. ";
 preguntaids[29] = 1656


//  Id pregunta: 3366 Año de creación de pregunta: 2006
 questions[30]= "31)  Cu&aacute;l es la misi&oacute;n del planificador (scheduler) de un SO";
 choices[30]= new Array();
 choices[30][0] = "Seleccionar el proceso que se va a ejecutar a continuaci&oacute;n";
 choices[30][1] = "Poner en ejecuci&oacute;n el proceso seleccionado";
 choices[30][2] = "Controlar la memoria principal";
 choices[30][3] = "Expulsar al proceso en ejecuci&oacute;n";
 answers[30] = 0;
 units[30] = ['56'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 3366. ";
 preguntaids[30] = 3366


//  Id pregunta: 2482 Año de creación de pregunta: 2009
 questions[31]= "32)  Respecto a la LSSI puede decirse que:";
 choices[31]= new Array();
 choices[31][0] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico";
 choices[31][1] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente";
 choices[31][2] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los remitentes de las misma";
 choices[31][3] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las misma";
 answers[31] = 3;
 units[31] = ['19'];
 blocks[31] = ['A4'];
 comments[31] = "Id Pregunta: 2482. Ley 34/2002, art&iacute;culo 21";
 preguntaids[31] = 2482


//  Id pregunta: 4852 Año de creación de pregunta: 2002
 questions[32]= "33)  En una celda ATM, si el campo PT contiene el valor 100:";
 choices[32]= new Array();
 choices[32][0] = "Es una celda de datos de usuario";
 choices[32][1] = "Es una celda de gesti&oacute;n de recursos";
 choices[32][2] = "Es una celda de datos de usuario pero indica extremo a extremo la congestion de trafico";
 choices[32][3] = "Es una celda asociada al segmento F5 de OAM";
 answers[32] = 3;
 units[32] = ['107'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 4852. ";
 preguntaids[32] = 4852


//  Id pregunta: 8799 Año de creación de pregunta: 2013
 questions[33]= "34)  &iquest;Cu&aacute;l es la velocidad disponible de un acceso primario RDSI en Europa?";
 choices[33]= new Array();
 choices[33][0] = "1544 Kbps";
 choices[33][1] = "64 Kbps";
 choices[33][2] = "2048 Kbps";
 choices[33][3] = "1024 Kbps";
 answers[33] = 2;
 units[33] = ['114'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 8799. ";
 preguntaids[33] = 8799


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[34]= "35)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[34]= new Array();
 choices[34][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[34][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[34][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[34][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[34] = 1;
 units[34] = ['7'];
 blocks[34] = ['A2'];
 comments[34] = "Id Pregunta: 232. Ley 39/2015";
 preguntaids[34] = 232


//  Id pregunta: 470 Año de creación de pregunta: 2016
 questions[35]= "36)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[35]= new Array();
 choices[35][0] = "Seguridad Social y AEAT";
 choices[35][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[35][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[35][3] = "Todos los anteriores";
 answers[35] = 3;
 units[35] = ['19'];
 blocks[35] = ['A4'];
 comments[35] = "Id Pregunta: 470. Estrategia TIC";
 preguntaids[35] = 470


//  Id pregunta: 2692 Año de creación de pregunta: 2002
 questions[36]= "37)  &iquest;Qu&eacute; se entiende por solapamiento de componentes?:";
 choices[36]= new Array();
 choices[36][0] = "Es el porcentaje de tiempo durante el cual dos o m&aacute;s componentes est&aacute;n siendo utilizados simult&aacute;neamente";
 choices[36][1] = "Es el porcentaje de tiempo durante el cual los distintos dispositivos del sistema est&aacute;n siendo utilizados en tareas del sistema";
 choices[36][2] = "Es la cantidad de tiempo ininterrumpido de la CPU que un sistema de tiempo compartido asigna a los diferentes trabajos";
 choices[36][3] = "Es el n&uacute;mero de programas sacados de memoria por unidad de tiempo a causa de falta de espacio o para reorganizar el mismo";
 answers[36] = 0;
 units[36] = ['56'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 2692. ";
 preguntaids[36] = 2692


//  Id pregunta: 9180 Año de creación de pregunta: 2014
 questions[37]= "38)  Seg&uacute;n el Real Decreto 1671/2009, la obligatoriedad de comunicarse por medios electr&oacute;nicos con los &oacute;rganos de la Administraci&oacute;n General del Estado o sus organismos p&uacute;blicos vinculados o dependientes, en los supuestos previstos en la Ley 11/2007, podr&aacute; establecerse mediante:";
 choices[37]= new Array();
 choices[37][0] = "Ley ordinaria.";
 choices[37][1] = "Orden Ministerial.";
 choices[37][2] = "Ley org&aacute;nica.";
 choices[37][3] = "Comunicaci&oacute;n en la sede electr&oacute;nica.";
 answers[37] = 1;
 units[37] = ['7'];
 blocks[37] = ['A2'];
 comments[37] = "Id Pregunta: 9180. Examen TIC A2 2013";
 preguntaids[37] = 9180


//  Id pregunta: 8347 Año de creación de pregunta: 2011
 questions[38]= "39)  En el modelo EFQM (European Foundation Quality Management) se identifican una serie de elementos que son la base para la Gesti&oacute;n de Calidad Total dentro de las organizaciones y que se agrupan en dos grandes bloques:";
 choices[38]= new Array();
 choices[38][0] = "Agentes y Acciones";
 choices[38][1] = "Agentes y Niveles de Satisfacci&oacute;n";
 choices[38][2] = "Agentes y Resultados";
 choices[38][3] = "Resultados y Acciones";
 answers[38] = 2;
 units[38] = ['98'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 8347. Examen UC3M 2010";
 preguntaids[38] = 8347


//  Id pregunta: 1022 Año de creación de pregunta: 2016
 questions[39]= "40)  Segun la ley 40/2015 podr&aacute;n ordenarle al funcionario que se abstenga de toda intervenci&oacute;n en el expediente por causa de abstenci&oacute;n...";
 choices[39]= new Array();
 choices[39][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[39][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[39][2] = "Los interesados en el procedimiento";
 choices[39][3] = "Las alternativas b) y c) son correctas";
 answers[39] = 1;
 units[39] = ['4', '7', '8', '9'];
 blocks[39] = ['A1', 'A2'];
 comments[39] = "Id Pregunta: 1022. Ley 40/2015";
 preguntaids[39] = 1022


//  Id pregunta: 9356 Año de creación de pregunta: 2014
 questions[40]= "41)  Indique la respuesta correcta en relaci&oacute;n al comando SNMP GetBulkRequest:";
 choices[40]= new Array();
 choices[40][0] = "Est&aacute; disponible en todas las versiones de SNMP.";
 choices[40][1] = "Es utilizado por un sistema gestor de red para enviar un mensaje a otro gestor sobre objetos administrados.";
 choices[40][2] = "Es el que permite utilizar autenticaci&oacute;n en SNMP v3.";
 choices[40][3] = "Es utilizado cuando se requiere una cantidad elevada de datos transmitidos.";
 answers[40] = 3;
 units[40] = ['114'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 9356. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[40] = 9356


//  Id pregunta: 5149 Año de creación de pregunta: 2003
 questions[41]= "42)  Un documento multimedia se define como:";
 choices[41]= new Array();
 choices[41][0] = "Compuestos de audio y v&iacute;deo.";
 choices[41][1] = "Compuestos de se&ntilde;ales ni digitales ni digitalizadas.";
 choices[41][2] = "Compuestos de diferentes fuentes y estructuras que incorpora documentos digitales o digitalizados.";
 choices[41][3] = "Compuestos de diferentes fuentes y estructuras que incorpora no s&oacute;lo documentos digitales o digitalizados, sino tambi&eacute;n a los procedentes de otros tipos de se&ntilde;ales.";
 answers[41] = 3;
 units[41] = ['80'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 5149. ";
 preguntaids[41] = 5149


//  Id pregunta: 10638 Año de creación de pregunta: 2015
 questions[42]= "43)  Seg&uacute;n la Ley 9/2014, a qui&eacute;n corresponde establecer los procedimientos y plazos para la habilitaci&oacute;n del ejercicio de los derechos de uso del Dominio P&uacute;blico Radioel&eacute;ctrico";
 choices[42]= new Array();
 choices[42][0] = "El Ministerio de Energia, Turismo y Agenda Digital.";
 choices[42][1] = "Gobierno de Espa&ntilde;a.";
 choices[42][2] = "CNMC.";
 choices[42][3] = "Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital.";
 answers[42] = 1;
 units[42] = ['121'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 10638. ";
 preguntaids[42] = 10638


//  Id pregunta: 858 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes herramientas NO es considerada un gestor documental?";
 choices[43]= new Array();
 choices[43][0] = "OpenKM.";
 choices[43][1] = "Adobe LiveCycle.";
 choices[43][2] = "Alfresco.";
 choices[43][3] = "Knowledge Tree.";
 answers[43] = 1;
 units[43] = ['99'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 858. AGE A2 2015";
 preguntaids[43] = 858


//  Id pregunta: 10089 Año de creación de pregunta: 2015
 questions[44]= "45)  Indique a qu&eacute; subred pertenece la siguiente direcci&oacute;n de broadcast 95.25.46.159:";
 choices[44]= new Array();
 choices[44][0] = "95.25.30.128/27";
 choices[44][1] = "95.25.30.128/25";
 choices[44][2] = "95.25.46.128/27";
 choices[44][3] = "95.25.46.128/25";
 answers[44] = 2;
 units[44] = ['109'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 10089. Examen TIC A2 2014";
 preguntaids[44] = 10089


//  Id pregunta: 10155 Año de creación de pregunta: 2015
 questions[45]= "46)  El Centro de Informaci&oacute;n y Red de Creaci&oacute;n de Empresas (CIRCE), gestionado por el Ministerio de Industria, Energ&iacute;a y Turismo:";
 choices[45]= new Array();
 choices[45][0] = "Permite realizar, de forma telem&aacute;tica, los tr&aacute;mites de constituci&oacute;n y puesta en marcha de todas las empresas que vayan a ejercer su actividad en el territorio nacional.";
 choices[45][1] = "Permite realizar, de forma telem&aacute;tica, los tr&aacute;mites de apoderamiento y gestiones notariales necesarias para la puesta en marcha de las empresas.";
 choices[45][2] = "Permite realizar de forma telem&aacute;tica, los tr&aacute;mites de constituci&oacute;n y puesta en marcha de Sociedades Limitada Nueva Empresa (SLNE), Sociedades de Responsabilidad Limitada (SRL o SL), o Empresarios Individuales (Aut&oacute;nomos).";
 choices[45][3] = "Es una plataforma para la informaci&oacute;n del emprendedor que se utiliza en los Puntos de Atenci&oacute;n al Emprendedor (PAEs), no permitiendo la realizaci&oacute;n de tr&aacute;mites online.";
 answers[45] = 2;
 units[45] = ['19'];
 blocks[45] = ['A4'];
 comments[45] = "Id Pregunta: 10155. Examen TIC A1 2014";
 preguntaids[45] = 10155


//  Id pregunta: 10401 Año de creación de pregunta: 2015
 questions[46]= "47)  &iquest;C&oacute;mo se denomina el plan de la Agenda Digital Espa&ntilde;ola referente al objetivo de Despliegue de redes r&aacute;pidas y ultrarr&aacute;pidas?";
 choices[46]= new Array();
 choices[46][0] = "Plan de Impulso del acceso r&aacute;pido y ultrarr&aacute;pido a Internet";
 choices[46][1] = "Plan de Telecomunicaciones Ultrarr&aacute;pidas";
 choices[46][2] = "Plan de Despliegue de infraestructuras de Red Espa&ntilde;ola";
 choices[46][3] = "Ninguna de las anteriores";
 answers[46] = 1;
 units[46] = ['19'];
 blocks[46] = ['A4'];
 comments[46] = "Id Pregunta: 10401. ";
 preguntaids[46] = 10401


//  Id pregunta: 462 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[47]= new Array();
 choices[47][0] = "La CETIC";
 choices[47][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[47][2] = "La DTIC";
 choices[47][3] = "Ninguno de los anteriores";
 answers[47] = 1;
 units[47] = ['19'];
 blocks[47] = ['A4'];
 comments[47] = "Id Pregunta: 462. Estrategia TIC";
 preguntaids[47] = 462


//  Id pregunta: 6108 Año de creación de pregunta: 2003
 questions[48]= "49)  Elija la opci&oacute;n correcta con respecto al funcionamiento de los registros telem&aacute;ticos en d&iacute;as inh&aacute;biles, seg&uacute;n el RD209/2003, de 21 de febrero:";
 choices[48]= new Array();
 choices[48][0] = "Los registros telem&aacute;ticos no estar&aacute;n en funcionamiento los d&iacute;as inh&aacute;biles";
 choices[48][1] = "La entrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registrotelem&aacute;tico se entender&aacute; efectuada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 choices[48][2] = "La entrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registrotelem&aacute;tico se entender&aacute; efectuada en la &uacute;ltima hora del &uacute;ltimo d&iacute;a h&aacute;bil anterior";
 choices[48][3] = "No se permitir&aacute; la entrada de solicitudes, escritos y comunicaciones en un d&iacute;a inh&aacute;bil, y por consiguiente laentrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registro telem&aacute;ticono se entender&aacute; efectuada";
 answers[48] = 1;
 units[48] = ['19'];
 blocks[48] = ['A4'];
 comments[48] = "Id Pregunta: 6108. Examen TIC A1 MAP 2007";
 preguntaids[48] = 6108


//  Id pregunta: 9065 Año de creación de pregunta: 2014
 questions[49]= "50)  Son servicios de una IDE:";
 choices[49]= new Array();
 choices[49][0] = "Servicios de mapas en Web (WMS), servicios de elementos en Web (WFS), servicios de coberturas en Web (WCS), servicios de conversi&oacute;n de coordenadas, servicios de cat&aacute;logos de datos.";
 choices[49][1] = "Servicios de nomenclator (gazetteer), descripci&oacute;n de estilo de capas (SLD).";
 choices[49][2] = "Servicios de metadatos, establecimiento de est&aacute;ndares, identificaci&oacute;n de marcos, establecimiento de acuerdos entre organismos para la producci&oacute;n de informaci&oacute;n espacial de inter&eacute;s conjunto.";
 choices[49][3] = "a, b y c son correctas.";
 answers[49] = 3;
 units[49] = ['71'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 9065. ";
 preguntaids[49] = 9065


//  Id pregunta: 7628 Año de creación de pregunta: 2010
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta?";
 choices[50]= new Array();
 choices[50][0] = "La aplicaci&oacute;n WINE es un emulador que permite ejecutar aplicaciones Windows en un entorno de software libre Linux.";
 choices[50][1] = "El entorno de escritorio KDE no utiliza CORBA como arquitectura de comunicaciones entre procesos.";
 choices[50][2] = "La biblioteca de componentes gr&aacute;ficos GTK+ se basa en las librer&iacute;as Glib, Pango y ATK.";
 choices[50][3] = "La arquitectura de componentes de GNOME estaba basada en Bonobo, pero en la actualidad se considera obsoleta";
 answers[50] = 0;
 units[50] = ['57'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 7628. Similar a Map 2006";
 preguntaids[50] = 7628


//  Id pregunta: 3500 Año de creación de pregunta: 2006
 questions[51]= "52)  El entorno de escritorio KDE:";
 choices[51]= new Array();
 choices[51][0] = "Utiliza como gestor de ventanas uno propio";
 choices[51][1] = "No posee gestor de ventanas propio";
 choices[51][2] = "Define sus interfaces mediante tecnolog&iacute;a CORBA";
 choices[51][3] = "No proporciona diferentes configuraciones para distintos idiomas";
 answers[51] = 0;
 units[51] = ['57'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 3500. KDE Windows Manager es el gestor de ventanas propio de KDE";
 preguntaids[51] = 3500


//  Id pregunta: 6231 Año de creación de pregunta: 2003
 questions[52]= "53)  &iquest;Qu&eacute; tama&ntilde;o de celda se utiliza en ATM (Asynchronous Transfer Mode)?";
 choices[52]= new Array();
 choices[52][0] = "Tiene un tama&ntilde;o variable, al tratarse de conmutaci&oacute;n de paquetes de longitud variable.";
 choices[52][1] = "53 bytes";
 choices[52][2] = "1024 bytes";
 choices[52][3] = "64 bytes";
 answers[52] = 1;
 units[52] = ['110'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 6231. Examen TIC A Castilla La Mancha 2007";
 preguntaids[52] = 6231


//  Id pregunta: 8163 Año de creación de pregunta: 2011
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes opciones NO es un servidor de aplicaciones que cumple con la especificaci&oacute;n de Java EE?";
 choices[53]= new Array();
 choices[53][0] = "Apache Tomcat";
 choices[53][1] = "JBOSS";
 choices[53][2] = "WebSphere Application Server";
 choices[53][3] = "Glassfish";
 answers[53] = 0;
 units[53] = ['63', '64'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 8163. Examen TIC A2 2010 interna";
 preguntaids[53] = 8163


//  Id pregunta: 5661 Año de creación de pregunta: 2007
 questions[54]= "55)  Trabajando con un diagrama PERT vemos que se retrasa una etapa no perteneciente al camino critico. Este aumento de duraci&oacute;n, &iquest;retrasar&aacute; la fecha del final del proyecto?";
 choices[54]= new Array();
 choices[54][0] = "Siempre, dado que todo retraso en una etapa afecta a la duraci&oacute;n del proyecto.";
 choices[54][1] = "Nunca, al no pertenecer la etapa al camino cr&iacute;tico.";
 choices[54][2] = "S&oacute;lo si la nueva duraci&oacute;n de la etapa es superior a la duraci&oacute;n de cualquiera de las otras etapas.";
 choices[54][3] = "S&oacute;lo si la nueva duraci&oacute;n convierte en critico el camino al que pertenece la etapa.";
 answers[54] = 3;
 units[54] = ['33'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 5661. Castilla la Mancha 2006";
 preguntaids[54] = 5661


//  Id pregunta: 6571 Año de creación de pregunta: 2003
 questions[55]= "56)  Se&ntilde;ale cual de los siguientes datos no se almacena en la zona privada del chip criptogr&aacute;fico del DNI electr&oacute;nico:";
 choices[55]= new Array();
 choices[55][0] = "Claves privadas del ciudadano";
 choices[55][1] = "Certificado de autenticaci&oacute;n";
 choices[55][2] = "Claves p&uacute;blicas del ciudadano";
 choices[55][3] = "Certificado de firma";
 answers[55] = 2;
 units[55] = ['78'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 6571. ";
 preguntaids[55] = 6571


//  Id pregunta: 8812 Año de creación de pregunta: 2013
 questions[56]= "57)  Acerca de Fibre Channel, se puede decir:";
 choices[56]= new Array();
 choices[56][0] = "El protocolo sigue el modelo de referencia OSI.";
 choices[56][1] = "Es un protocolo con 5 capas.";
 choices[56][2] = "La capa FC3 es la capa de mapeo de protocolo.";
 choices[56][3] = "Los routers en Fibre Channel operan en la capa 3.";
 answers[56] = 1;
 units[56] = ['53', '106'];
 blocks[56] = ['B2', 'B4'];
 comments[56] = "Id Pregunta: 8812. ";
 preguntaids[56] = 8812


//  Id pregunta: 6825 Año de creación de pregunta: 2010
 questions[57]= "58)  &iquest;Qu&eacute; es CMOT?";
 choices[57]= new Array();
 choices[57][0] = "Significa Common Management Interface Protocol Over TCP/IP y es una extensi&oacute;n de los est&aacute;ndares de gesti&oacute;n OSI para Internet";
 choices[57][1] = "Significa Common Mobile Online Trespassing y es un protocolo para realizar el traspaso de llamadas entre sistemas de telefon&iacute;a m&oacute;vil sobre VSAT";
 choices[57][2] = "Significa Critical Mode Online Testing y es una herramienta para la realizaci&oacute;n de pruebas de rendimiento no intrusivas en aplicaciones de misi&oacute;n cr&iacute;tica";
 choices[57][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[57] = 0;
 units[57] = ['114'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 6825. ";
 preguntaids[57] = 6825


//  Id pregunta: 66 Año de creación de pregunta: 2016
 questions[58]= "59)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[58]= new Array();
 choices[58][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[58][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[58][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[58][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[58] = 1;
 units[58] = ['1'];
 blocks[58] = ['A1'];
 comments[58] = "Id Pregunta: 66. Constituci&oacute;n de 1978";
 preguntaids[58] = 66


//  Id pregunta: 6080 Año de creación de pregunta: 2003
 questions[59]= "60)  El est&aacute;ndar WMS (Web Map Service), que permite publicar cartograf&iacute;a en Internet, &iquest;a cu&aacute;l de las siguientes organizaciones pertenece?:";
 choices[59]= new Array();
 choices[59][0] = "ISO (International Standards Organization).";
 choices[59][1] = "OGC (Open Geospatial Consortium).";
 choices[59][2] = "FGDC (Federal Geographic Data Committee).";
 choices[59][3] = "Consejo Superior Geogr&aacute;fico.";
 answers[59] = 1;
 units[59] = ['71'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 6080. Examen TIC A1 MAP 2007";
 preguntaids[59] = 6080


//  Id pregunta: 4609 Año de creación de pregunta: 2002
 questions[60]= "61)  &iquest;Qu&eacute; es un convertidor anal&oacute;gico/digital (ADC)?:";
 choices[60]= new Array();
 choices[60][0] = "Un convertidor similar a uno digital";
 choices[60][1] = "Un programa que convierte formato anal&oacute;gico a formato digital";
 choices[60][2] = "Un sistema que lee valores continuos y saca valores discretos";
 choices[60][3] = "Nada de lo anterior es correcto";
 answers[60] = 2;
 units[60] = ['104'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 4609. ";
 preguntaids[60] = 4609


//  Id pregunta: 397 Año de creación de pregunta: 2016
 questions[61]= "62)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[61]= new Array();
 choices[61][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[61][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[61][2] = "Ambas son correctas.";
 choices[61][3] = "La A y B son incorrectas.";
 answers[61] = 2;
 units[61] = ['14'];
 blocks[61] = ['A3'];
 comments[61] = "Id Pregunta: 397. Pol&iacute;ticas de igualdad";
 preguntaids[61] = 397


//  Id pregunta: 5396 Año de creación de pregunta: 2006
 questions[62]= "63)  En la arquitectura de desarrollo Web bajo Java es cierto que:";
 choices[62]= new Array();
 choices[62][0] = "Java 2 Micro Edition es el entorno de ejecuci&oacute;n est&aacute;ndar para Java";
 choices[62][1] = "Los Java 2 Enterprise Edition blueprints son los que permiten verificar la compatibilidad de una plataforma Java";
 choices[62][2] = "Los servlets son usados para pasar contenido din&aacute;mico al cliente a trav&eacute;s de http";
 choices[62][3] = "Los servlets http no heredan los m&eacute;todos doGet() y doPost() de la clase httpServlet";
 answers[62] = 2;
 units[62] = ['64'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 5396. ";
 preguntaids[62] = 5396


//  Id pregunta: 10 Año de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[63]= new Array();
 choices[63][0] = "al menos por 50 Diputados.";
 choices[63][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[63][2] = "por la Mesa del Congreso de los Diputados.";
 choices[63][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[63] = 1;
 units[63] = ['1'];
 blocks[63] = ['A1'];
 comments[63] = "Id Pregunta: 10. Constituci&oacute;n de 1978";
 preguntaids[63] = 10


//  Id pregunta: 2208 Año de creación de pregunta: 2002
 questions[64]= "65)  La auditor&iacute;a de sistemas de informaci&oacute;n se puede considerar como:";
 choices[64]= new Array();
 choices[64][0] = "Una auditor&iacute;a de eficiencia";
 choices[64][1] = "Una auditor&iacute;a de eficacia";
 choices[64][2] = "Una auditor&iacute;a operativa";
 choices[64][3] = "Una auditor&iacute;a de legalidad";
 answers[64] = 2;
 units[64] = ['36', '45'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 2208. ";
 preguntaids[64] = 2208


//  Id pregunta: 865 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n ITILv3 , el objetivo principal del Dise&ntilde;o del Servicio es:";
 choices[65]= new Array();
 choices[65][0] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno de producci&oacute;n.";
 choices[65][1] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno seguro.";
 choices[65][2] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno seguro.";
 choices[65][3] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno de producci&oacute;n.";
 answers[65] = 3;
 units[65] = ['101'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 865. Junta de Extremadura A1 2015";
 preguntaids[65] = 865


//  Id pregunta: 9383 Año de creación de pregunta: 2014
 questions[66]= "67)  En una empresa con 2.000 puestos de usuario en su red local de comunicaciones existen 3 subredes con estos direccionamientos: red A: 10.X.X.X, red B: 192.168.1.X y red C: 195.57.72.X.Teniendo en cuenta que en la ubicaci&oacute;n de los equipos de usuarios y servidores se busca mantener la red operativa y a la vez con la m&aacute;xima seguridad posible, &iquest;d&oacute;nde se ubicar&iacute;an los servidores de Base de Datos de los que se alimentan tanto los servidores web p&uacute;blicos como los de la intranet?";
 choices[66]= new Array();
 choices[66][0] = "Red A.";
 choices[66][1] = "Red B.";
 choices[66][2] = "Red C.";
 choices[66][3] = "Habr&iacute;a dos servidores de bases de datos, el p&uacute;blico en la red C y el privado en la red B.";
 answers[66] = 1;
 units[66] = ['109'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 9383. Examen TIC A2  2013";
 preguntaids[66] = 9383


//  Id pregunta: 6796 Año de creación de pregunta: 2010
 questions[67]= "68)  El modelo de control de accesos donde es el sistema quien protege los recursos y donde todo recurso del sistema tiene unaetiqueta de seguridad se denomina:";
 choices[67]= new Array();
 choices[67][0] = "De acceso discrecional (DAC)";
 choices[67][1] = "De acceso obligatorio (MAC)";
 choices[67][2] = "Basado en roles (RBAC)";
 choices[67][3] = "De confidencialidad.";
 answers[67] = 1;
 units[67] = ['77'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 6796. TIC A 2009";
 preguntaids[67] = 6796


//  Id pregunta: 9456 Año de creación de pregunta: 2014
 questions[68]= "69)  Seg&uacute;n el Real Decreto 1671/2009";
 choices[68]= new Array();
 choices[68][0] = "Se puede someter a todos los ciudadanos al r&eacute;gimen de notificaci&oacute;n electr&oacute;nica obligatoria";
 choices[68][1] = "S&oacute;lo pueden someterse al r&eacute;gimen de notificaci&oacute;n electr&oacute;nica obligatoria a las personas jur&iacute;dicas o colectivos de personas f&iacute;sicas que por raz&oacute;n de su capacidad econ&oacute;mica o t&eacute;cnica, dedicaci&oacute;n profesional u otros motivos acreditados tengan garantizado el acceso y disponibilidad de los medios tecnol&oacute;gicos precisos";
 choices[68][2] = "En ning&uacute;n caso puede imponerse la obligaci&oacute;n de que la notificaci&oacute;n sea &uacute;nicamente por medios electr&oacute;nicos";
 choices[68][3] = "Para establecer la obligatoriedad de las notificaciones por medios electr&oacute;nicos ser&aacute; suficiente la publicaci&oacute;n de una circular en la sede electr&oacute;nica del &oacute;rgano u organismo p&uacute;blico de que se trate.";
 answers[68] = 1;
 units[68] = ['7'];
 blocks[68] = ['A2'];
 comments[68] = "Id Pregunta: 9456. ";
 preguntaids[68] = 9456


//  Id pregunta: 9616 Año de creación de pregunta: 2014
 questions[69]= "70)  &iquest;A qu&eacute; organismo est&aacute; adscrita la Comisi&oacute;n de Propiedad Intelectual?";
 choices[69]= new Array();
 choices[69][0] = "Ministerio de la Presidencia y para las Administraciones Territoriales";
 choices[69][1] = "Ministerio de Educaci&oacute;n, Cultura y Deporte";
 choices[69][2] = "Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[69][3] = "Ministerio de Fomento";
 answers[69] = 1;
 units[69] = ['41'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 9616. La Comisi&oacute;n de Propiedad Intelectual es un &oacute;rgano colegiado de &aacute;mbito nacional adscrito a la Subdirecci&oacute;n General de Propiedad Intelectual del Ministerio de Educaci&oacute;n, Cultura y Deporte.";
 preguntaids[69] = 9616


//  Id pregunta: 8840 Año de creación de pregunta: 2013
 questions[70]= "71)  Ordene, de menor a mayor velocidad m&aacute;xima de transmisi&oacute;n de datos, las siguientes tecnolog&iacute;as de comunicaciones m&oacute;viles:";
 choices[70]= new Array();
 choices[70][0] = "GSM, GPRS, EDGE, HSPA+.";
 choices[70][1] = "GSM. GPRS, UMTS, HSCSD.";
 choices[70][2] = "GSM, HSUPA, GPRS, UMTS.";
 choices[70][3] = "Ninguna de las respuestas es correcta.";
 answers[70] = 0;
 units[70] = ['117'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 8840. Examen TIC A2 2011";
 preguntaids[70] = 8840


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[71]= new Array();
 choices[71][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[71][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[71][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[71][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[71] = 1;
 units[71] = ['19'];
 blocks[71] = ['A4'];
 comments[71] = "Id Pregunta: 452. Agenda Digital para Espa&ntilde;a";
 preguntaids[71] = 452


//  Id pregunta: 274 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[72]= new Array();
 choices[72][0] = "a) Los cuatro ejercicios siguientes.";
 choices[72][1] = "b) El ejercicio siguiente.";
 choices[72][2] = "c) Los dos ejercicios siguientes.";
 choices[72][3] = "d) Los tres ejercicios siguientes.";
 answers[72] = 3;
 units[72] = ['11'];
 blocks[72] = ['A2'];
 comments[72] = "Id Pregunta: 274. Presupuestos generales";
 preguntaids[72] = 274


//  Id pregunta: 8928 Año de creación de pregunta: 2013
 questions[73]= "74)  Seg&uacute;n Pressman, el proceso de obtenci&oacute;n de requisitos";
 choices[73]= new Array();
 choices[73][0] = "Es un proceso iterativo";
 choices[73][1] = "Es un proceso de tres fases";
 choices[73][2] = "Es un proceso de 10 fases";
 choices[73][3] = "Todas las anteriores son falsas";
 answers[73] = 0;
 units[73] = ['84'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 8928. ";
 preguntaids[73] = 8928


//  Id pregunta: 8005 Año de creación de pregunta: 2011
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes NO es un factor de calidad en el modelo de McCall?";
 choices[74]= new Array();
 choices[74][0] = "Accesibilidad";
 choices[74][1] = "Correcci&oacute;n";
 choices[74][2] = "Reusabilidad";
 choices[74][3] = "Interoperabilidad";
 answers[74] = 0;
 units[74] = ['92', '93'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 8005. Examen TIC A2 2010";
 preguntaids[74] = 8005


