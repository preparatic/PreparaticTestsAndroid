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
//  Id pregunta: 4477 Año de creación de pregunta: 2002
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de IPv6 es correcta?:";
 choices[0]= new Array();
 choices[0][0] = "Existe una cabecera principal y cabeceras de extensi&oacute;n";
 choices[0][1] = "La cabecera se ha complicado y ha crecido bastante, al tener que incorporar algunos elementos como la seguridad y el esquema de direccionamiento extendido. El tama&ntilde;o ahora es de 64 bytes frente a los 20 bytes de IPv4";
 choices[0][2] = "Las nuevas direcciones tienen 20 bytes";
 choices[0][3] = "Todas son incorrectas";
 answers[0] = 0;
 units[0] = ['109'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 4477. ";
 preguntaids[0] = 4477


//  Id pregunta: 9161 Año de creación de pregunta: 2014
 questions[1]= "2)  Cual de los siguientes NO es un elemento VoiceXML 2.0:";
 choices[1]= new Array();
 choices[1][0] = "&lt;input&gt;";
 choices[1][1] = "&lt;transfer&gt;";
 choices[1][2] = "&lt;object&gt;";
 choices[1][3] = "&lt;log&gt;";
 answers[1] = 0;
 units[1] = ['81'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 9161. Examen TIC A2 2013";
 preguntaids[1] = 9161


//  Id pregunta: 8840 Año de creación de pregunta: 2013
 questions[2]= "3)  Ordene, de menor a mayor velocidad m&aacute;xima de transmisi&oacute;n de datos, las siguientes tecnolog&iacute;as de comunicaciones m&oacute;viles:";
 choices[2]= new Array();
 choices[2][0] = "GSM, GPRS, EDGE, HSPA+.";
 choices[2][1] = "GSM. GPRS, UMTS, HSCSD.";
 choices[2][2] = "GSM, HSUPA, GPRS, UMTS.";
 choices[2][3] = "Ninguna de las respuestas es correcta.";
 answers[2] = 0;
 units[2] = ['117'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 8840. Examen TIC A2 2011";
 preguntaids[2] = 8840


//  Id pregunta: 5930 Año de creación de pregunta: 2007
 questions[3]= "4)  En relaci&oacute;n a los lenguajes XML (eXtensible Markup Language) y RDF (Resource Description Framework), &iquest;cu&aacute;l delas siguientes afirmaciones es cierta?";
 choices[3]= new Array();
 choices[3][0] = "XML Schema proporciona soporte para la interoperabilidad sem&aacute;ntica";
 choices[3][1] = "RDF utiliza XML como sintaxis com&uacute;n para el intercambio de metadatos";
 choices[3][2] = "RDF est&aacute; compuesto &uacute;nicamente de propiedades y enunciados";
 choices[3][3] = "XML Schema no tiene tipos predefinidos";
 answers[3] = 1;
 units[3] = ['74'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 5930. ";
 preguntaids[3] = 5930


//  Id pregunta: 1378 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes puertos utiliza el protocolo SNMP?";
 choices[4]= new Array();
 choices[4][0] = "110";
 choices[4][1] = "119";
 choices[4][2] = "161";
 choices[4][3] = "25";
 answers[4] = 2;
 units[4] = ['114'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 1378. ";
 preguntaids[4] = 1378


//  Id pregunta: 4383 Año de creación de pregunta: 2004
 questions[5]= "6)  Los cortafuegos de nivel 7 de la capa OSI, esto es, nivel de aplicaci&oacute;n:";
 choices[5]= new Array();
 choices[5][0] = "No existen";
 choices[5][1] = "Tratan con n&uacute;meros de secuencias de paquetes TCP/IP";
 choices[5][2] = "Pueden ser considerados como filtros de paquetes";
 choices[5][3] = "Act&uacute;an a modo de proxy para las distintas aplicaciones que van a controlar";
 answers[5] = 3;
 units[5] = ['119'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 4383. Examen TAI 2004";
 preguntaids[5] = 4383


//  Id pregunta: 3261 Año de creación de pregunta: 2003
 questions[6]= "7)  En un modelo de datos jer&aacute;rquico:";
 choices[6]= new Array();
 choices[6][0] = "Un registro no es subordinado directo de ning&uacute;n otro registro.";
 choices[6][1] = "Un registro es subordinado directo de como m&aacute;ximo otro registro.";
 choices[6][2] = "Un registro es subordinado directo de n registros, dependiendo de la topolog&iacute;a del modelo.";
 choices[6][3] = "Los registros estar organizados en una red de relaciones mediante un grafo.";
 answers[6] = 1;
 units[6] = ['60'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 3261. Junta Andaluc&iacute;a";
 preguntaids[6] = 3261


//  Id pregunta: 2461 Año de creación de pregunta: 2002
 questions[7]= "8)  Seg&uacute;n el R.D. 209/2003:";
 choices[7]= new Array();
 choices[7][0] = "la Administraci&oacute;n P&uacute;blica proporcionar&aacute; al ciudadano una direcci&oacute;n &uacute;nica mediante la que &eacute;ste deber&aacute; realizar la tramitaci&oacute;n electr&oacute;nica pertinente una vez se disponga de los medios adecuados";
 choices[7][1] = "Se podr&aacute;n realizar por los organismos competentes copias firmadas de los documentos electr&oacute;nicos, de la misma manera que se pueden compulsar y sellar copias de los documentos en papel";
 choices[7][2] = "Los c&oacute;mputos de los plazos de entrega a efectos legales podr&aacute;n incluir d&iacute;as inh&aacute;biles, al estar los registros electr&oacute;nicos funcionando 24 horas al d&iacute;a y 7 d&iacute;as a la semana";
 choices[7][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[7] = 3;
 units[7] = ['19'];
 blocks[7] = ['A4'];
 comments[7] = "Id Pregunta: 2461. ";
 preguntaids[7] = 2461


//  Id pregunta: 9315 Año de creación de pregunta: 2014
 questions[8]= "9)  No es cierto sobre la tecnolog&iacute;a de p&aacute;ginas web de Microsoft (ASP y ASP.Net):";
 choices[8]= new Array();
 choices[8][0] = "Una p&aacute;gina ASP puede escribirse con Java Script";
 choices[8][1] = "ASP se ejecuta del lado del servidor bajo IIS o motores PHT compatibles con ASP";
 choices[8][2] = "ASP.NET es una tecnolog&iacute;a orientada o objetos que se ejecuta del lado del servidor";
 choices[8][3] = "Una p&aacute;gina ASP puede escribirse con Visual Basic Script";
 answers[8] = 1;
 units[8] = ['63'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 9315. Examen Servicio Salud C&aacute;ntabro 2011";
 preguntaids[8] = 9315


//  Id pregunta: 7316 Año de creación de pregunta: 2010
 questions[9]= "10)  &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[9]= new Array();
 choices[9][0] = "Las Pruebas de Aceptaci&oacute;n se definen en ASI y se ejecutan en CSI";
 choices[9][1] = "Las Pruebas de Implantaci&oacute;n se definen en DSI y se ejecutan en IAS";
 choices[9][2] = "Las Pruebas de Implantaci&oacute;n se definen en ASI y se ejecutan en CSI";
 choices[9][3] = "Las Pruebas de Aceptaci&oacute;n se definen en DSI y se ejecutan en IAS";
 answers[9] = 1;
 units[9] = ['91'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 7316. ";
 preguntaids[9] = 7316


//  Id pregunta: 8611 Año de creación de pregunta: 2013
 questions[10]= "11)  Cu&aacute;l NO es un tipo de compresi&oacute;n utilizado para el almacenamiento de informaci&oacute;n raster:";
 choices[10]= new Array();
 choices[10][0] = "Run Length Encoding (RLE)";
 choices[10][1] = "Quadtrees";
 choices[10][2] = "Tiff";
 choices[10][3] = "Wavelets";
 answers[10] = 2;
 units[10] = ['71'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 8611. ";
 preguntaids[10] = 8611


//  Id pregunta: 6596 Año de creación de pregunta: 2009
 questions[11]= "12)  Indique qui&eacute;n desarroll&oacute; el lenguaje JavaScript";
 choices[11]= new Array();
 choices[11][0] = "Microsoft";
 choices[11][1] = "SUN";
 choices[11][2] = "Netscape";
 choices[11][3] = "W3C";
 answers[11] = 2;
 units[11] = ['62'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 6596. MAP 2008 A1";
 preguntaids[11] = 6596


//  Id pregunta: 5833 Año de creación de pregunta: 2007
 questions[12]= "13)  &iquest;Qu&eacute; no es sociedad de la informaci&oacute;n?";
 choices[12]= new Array();
 choices[12][0] = "Un estadio social y econ&oacute;mico de desarrollo.";
 choices[12][1] = "La posibilidad de obtener y compartir &ldquo;cualquier&rdquo; informaci&oacute;n de manera instant&aacute;nea desde cualquier lugar.";
 choices[12][2] = "Una situaci&oacute;n en la que la mayor parte de los empleos est&aacute;n asociados a la producci&oacute;n de bienes tangibles.";
 choices[12][3] = "El cambio de los medios de generaci&oacute;n de riqueza desde los sectores industriales a los sectores de servicios";
 answers[12] = 2;
 units[12] = ['19'];
 blocks[12] = ['A4'];
 comments[12] = "Id Pregunta: 5833. Examen 2006 JCYL";
 preguntaids[12] = 5833


//  Id pregunta: 8907 Año de creación de pregunta: 2013
 questions[13]= "14)  &iquest;Qu&eacute; diagramas de UML 2.0 son los m&aacute;s adecuados para el modelo de interacci&oacute;n de una aplicaci&oacute;n?";
 choices[13]= new Array();
 choices[13][0] = "Comunicaci&oacute;n, despliegue y secuencia.";
 choices[13][1] = "Despliegue, secuencia y casos de uso.";
 choices[13][2] = "Secuencia, comunicaci&oacute;n y tiempos.";
 choices[13][3] = "Actividades, estados y tiempos.";
 answers[13] = 2;
 units[13] = ['89'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 8907. ";
 preguntaids[13] = 8907


//  Id pregunta: 1291 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[14]= new Array();
 choices[14][0] = "Indirecta.";
 choices[14][1] = "Directa.";
 choices[14][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[14][3] = "Directa o indirecta, sequen decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[14] = 1;
 units[14] = ['14'];
 blocks[14] = ['A3'];
 comments[14] = "Id Pregunta: 1291. ";
 preguntaids[14] = 1291


//  Id pregunta: 8929 Año de creación de pregunta: 2013
 questions[15]= "16)  Seg&uacute;n Metricav3, &iquest;qu&eacute; participante se encarga de definir los requisitos de sistema?";
 choices[15]= new Array();
 choices[15][0] = "Jefe de proyecto";
 choices[15][1] = "Consultor";
 choices[15][2] = "Analista";
 choices[15][3] = "Programador";
 answers[15] = 2;
 units[15] = ['84'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 8929. ";
 preguntaids[15] = 8929


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[16]= new Array();
 choices[16][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[16][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[16][2] = "Iniciativa europea de libre flujo de datos.";
 choices[16][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[16] = 2;
 units[16] = ['5'];
 blocks[16] = ['A1'];
 comments[16] = "Id Pregunta: 108. Uni&oacute;n Europea";
 preguntaids[16] = 108


//  Id pregunta: 3327 Año de creación de pregunta: 2004
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes comandos SQL pertenece al DDL (Lenguaje de definici&oacute;n de datos)?";
 choices[17]= new Array();
 choices[17][0] = "SELECT";
 choices[17][1] = "CREATE";
 choices[17][2] = "INSERT";
 choices[17][3] = "UPDATE";
 answers[17] = 1;
 units[17] = ['61'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 3327. ";
 preguntaids[17] = 3327


//  Id pregunta: 4420 Año de creación de pregunta: 2002
 questions[18]= "19)  La arquitectura Internet en tres capas diferencia:";
 choices[18]= new Array();
 choices[18][0] = "Nivel de presentaci&oacute;n, de aplicaci&oacute;n y de datos";
 choices[18][1] = "Nivel de navegador, de aplicaci&oacute;n y de datos";
 choices[18][2] = "Nivel de cliente, de servidor  y de navegador";
 choices[18][3] = "Las respuestas &lsquo;a&rsquo;, &lsquo;b&rsquo; y &lsquo;c&rsquo; son falsas";
 answers[18] = 0;
 units[18] = ['113'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 4420. ";
 preguntaids[18] = 4420


//  Id pregunta: 4373 Año de creación de pregunta: 2004
 questions[19]= "20)  &iquest;Es admisible cierto grado de inconsistencia temporal en la informaci&oacute;n dado sistemas como X.500 o LDAP?";
 choices[19]= new Array();
 choices[19][0] = "S&iacute;";
 choices[19][1] = "No";
 choices[19][2] = "S&iacute;, pero s&oacute;lo para LDAP";
 choices[19][3] = "ninguna de las anteriores";
 answers[19] = 0;
 units[19] = ['116'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 4373. ";
 preguntaids[19] = 4373


//  Id pregunta: 6080 Año de creación de pregunta: 2003
 questions[20]= "21)  El est&aacute;ndar WMS (Web Map Service), que permite publicar cartograf&iacute;a en Internet, &iquest;a cu&aacute;l de las siguientes organizaciones pertenece?:";
 choices[20]= new Array();
 choices[20][0] = "ISO (International Standards Organization).";
 choices[20][1] = "OGC (Open Geospatial Consortium).";
 choices[20][2] = "FGDC (Federal Geographic Data Committee).";
 choices[20][3] = "Consejo Superior Geogr&aacute;fico.";
 answers[20] = 1;
 units[20] = ['71'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 6080. Examen TIC A1 MAP 2007";
 preguntaids[20] = 6080


//  Id pregunta: 5376 Año de creación de pregunta: 2006
 questions[21]= "22)  Pueden encontrarse registros SOA, NS, CNAME, MX, etc. en el contexto de";
 choices[21]= new Array();
 choices[21][0] = "Un Servicio Web";
 choices[21][1] = "Una Arquitectura Orientada a Servicios (SOA)";
 choices[21][2] = "Un servidor DNS";
 choices[21][3] = "Unos identificadores XML de un servicio RSS";
 answers[21] = 2;
 units[21] = ['116'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 5376. ";
 preguntaids[21] = 5376


//  Id pregunta: 9881 Año de creación de pregunta: 2015
 questions[22]= "23)  Fecha de publicaci&oacute;n de la Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas.";
 choices[22]= new Array();
 choices[22][0] = "1 de Junio de 2015";
 choices[22][1] = "1 de Julio de 2015";
 choices[22][2] = "2 de Octubre de 2015";
 choices[22][3] = "1 de Noviembre de 2015";
 answers[22] = 2;
 units[22] = ['7', '19'];
 blocks[22] = ['A2', 'A4'];
 comments[22] = "Id Pregunta: 9881. ";
 preguntaids[22] = 9881


//  Id pregunta: 10725 Año de creación de pregunta: 2015
 questions[23]= "24)  Seg&uacute;n la Ley 34/2002 de Servicios de la Sociedad de la Informaci&oacute;n y Comercio electr&oacute;nico, el procedimiento de cooperaci&oacute;n intracomunitario en el que se propone la realizaci&oacute;n de acciones urgentes contra un prestador de servicios de la sociedad de la informaci&oacute;n establecido en la U.E que haya incumplido alguno de los preceptos de la Ley, requiere notificaci&oacute;n al Consejo Europeo y al Estado Miembro en el que opera dicho Prestador en un Plazo M&Aacute;XIMO de:";
 choices[23]= new Array();
 choices[23][0] = "1 mes desde la adopci&oacute;n de las acciones urgentes.";
 choices[23][1] = "30 d&iacute;as desde la adopci&oacute;n de las acciones urgentes.";
 choices[23][2] = "15 d&iacute;as desde la adopci&oacute;n de acciones urgentes.";
 choices[23][3] = "Ninguna de las anteriores.";
 answers[23] = 2;
 units[23] = ['19'];
 blocks[23] = ['A4'];
 comments[23] = "Id Pregunta: 10725. ";
 preguntaids[23] = 10725


//  Id pregunta: 8095 Año de creación de pregunta: 2011
 questions[24]= "25)  Las fibras monomodo:";
 choices[24]= new Array();
 choices[24][0] = "Se emplean normalmente en enlaces de de telecomunicaci&oacute;n de distancias largas";
 choices[24][1] = "Presentan la superficie de separaci&oacute;n entre el n&uacute;cleo y el revestimiento, claramente definida y diferenciada dando lugar a que los rayos luminosos se reflejen hacia el n&uacute;cleo formando diversos &aacute;ngulos";
 choices[24][2] = "Se caracterizan por una velocidad de flujo reducida";
 choices[24][3] = "Su instalaci&oacute;n es m&aacute;s sencilla que las multimodo";
 answers[24] = 0;
 units[24] = ['106'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 8095. Analista Ayto. Madrid 2010";
 preguntaids[24] = 8095


//  Id pregunta: 9783 Año de creación de pregunta: 2015
 questions[25]= "26)  &iquest;A qu&eacute; corresponden las siglas STORK?";
 choices[25]= new Array();
 choices[25][0] = "Secure Transport Over bRoad toKens";
 choices[25][1] = "Security idenTity acrOss boRders linKed";
 choices[25][2] = "Safe idenTity fOr Roaming Knowledge";
 choices[25][3] = "Safe noTes stOring encRypted Keys";
 answers[25] = 1;
 units[25] = ['77', '78'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 9783. ";
 preguntaids[25] = 9783


//  Id pregunta: 5287 Año de creación de pregunta: 2006
 questions[26]= "27)  Con que tecnolog&iacute;a se relaciona el Bytecode";
 choices[26]= new Array();
 choices[26][0] = "Java";
 choices[26][1] = ".Net";
 choices[26][2] = "Java Script";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = 0;
 units[26] = ['64'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 5287. ";
 preguntaids[26] = 5287


//  Id pregunta: 342 Año de creación de pregunta: 2016
 questions[27]= "28)  Cuando decimos que la inversi&oacute;n extranjera en Espa&ntilde;a tiene un car&aacute;cter proc&iacute;clico, nos referimos a que:";
 choices[27]= new Array();
 choices[27][0] = "Aumenta cuando la econom&iacute;a est&aacute; en crecimiento, y se reduce cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[27][1] = "Se reduce cuando la econom&iacute;a est&aacute; en crecimiento, y aumenta cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[27][2] = "Aumenta cuando el pa&iacute;s entra en recesi&oacute;n, y aumenta cuando la econom&iacute;a est&aacute; en crecimiento";
 choices[27][3] = "Se reduce cuando el pa&iacute;s entra en recesi&oacute;n, y se reduce cuando la econom&iacute;a est&aacute; en crecimiento";
 answers[27] = 0;
 units[27] = ['12'];
 blocks[27] = ['A3'];
 comments[27] = "Id Pregunta: 342. Modelo econ&oacute;mico";
 preguntaids[27] = 342


//  Id pregunta: 1796 Año de creación de pregunta: 2016
 questions[28]= "29)  Al realizar una presentaci&oacute;n telem&aacute;tica en un registro electr&oacute;nico, el registro electr&oacute;nico recibe la documentaci&oacute;n y genera un recibo para el ciudadano. Este recibo va firmado electr&oacute;nicamente por la administraci&oacute;n mediante un certificado de:";
 choices[28]= new Array();
 choices[28][0] = "Sede Electr&oacute;nica";
 choices[28][1] = "Empleado P&uacute;blico";
 choices[28][2] = "De Componente";
 choices[28][3] = "Sello electr&oacute;nico o sello de &oacute;rgano";
 answers[28] = 3;
 units[28] = ['7'];
 blocks[28] = ['A2'];
 comments[28] = "Id Pregunta: 1796. ";
 preguntaids[28] = 1796


//  Id pregunta: 3521 Año de creación de pregunta: 2006
 questions[29]= "30)  En relaci&oacute;n al lenguaje Java, la clase THROWABLE tiene dos subclases:";
 choices[29]= new Array();
 choices[29][0] = "Error y Exception";
 choices[29][1] = "Error y Catch";
 choices[29][2] = "Throw y Finally";
 choices[29][3] = "Error y Throw";
 answers[29] = 0;
 units[29] = ['64'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 3521. ";
 preguntaids[29] = 3521


//  Id pregunta: 7357 Año de creación de pregunta: 2010
 questions[30]= "31)  Una copia de seguridad que incluye todos los archivos creados o modificados desde la &uacute;ltima copia, y los marca individualmente como copiados, es una copia de seguridad:";
 choices[30]= new Array();
 choices[30][0] = "Diaria";
 choices[30][1] = "Intermedia";
 choices[30][2] = "Incremental";
 choices[30][3] = "Diferencial";
 answers[30] = 2;
 units[30] = ['53'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 7357. Examen TIC B 2009";
 preguntaids[30] = 7357


//  Id pregunta: 7055 Año de creación de pregunta: 2010
 questions[31]= "32)  No es un tipo de cohesi&oacute;n:";
 choices[31]= new Array();
 choices[31][0] = "Cohesi&oacute;n com&uacute;n.";
 choices[31][1] = "Cohesi&oacute;n funcional.";
 choices[31][2] = "Cohesi&oacute;n comunicacional.";
 choices[31][3] = "Cohesi&oacute;n l&oacute;gica.";
 answers[31] = 0;
 units[31] = ['89'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 7055. ";
 preguntaids[31] = 7055


//  Id pregunta: 275 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n el art&iacute;culo 44.3 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los cr&eacute;ditos para la acci&oacute;n protectora en su modalidad no contributiva y universal se especificar&aacute;n:";
 choices[32]= new Array();
 choices[32][0] = "A nivel de secci&oacute;n de programa.";
 choices[32][1] = "A nivel de grupo de programa.";
 choices[32][2] = "Ninguna de las respuestas es correcta.";
 choices[32][3] = "A nivel de programa.";
 answers[32] = 3;
 units[32] = ['11'];
 blocks[32] = ['A2'];
 comments[32] = "Id Pregunta: 275. Presupuestos generales";
 preguntaids[32] = 275


//  Id pregunta: 12 Año de creación de pregunta: 2016
 questions[33]= "34)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[33]= new Array();
 choices[33][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[33][1] = "Autorizar indultos generales.";
 choices[33][2] = "Sancionar las leyes.";
 choices[33][3] = "Promulgar las leyes.";
 answers[33] = 1;
 units[33] = ['1'];
 blocks[33] = ['A1'];
 comments[33] = "Id Pregunta: 12. Constituci&oacute;n de 1978";
 preguntaids[33] = 12


//  Id pregunta: 2361 Año de creación de pregunta: 2004
 questions[34]= "35)  Respecto a las pautas de accesibilidad de la iniciativa de acesibilidad web WAI del W3C se puede afirmar que ...";
 choices[34]= new Array();
 choices[34][0] = "El nivel de adecuaci&oacute;n A es el m&aacute;s exigente";
 choices[34][1] = "El nivel de adecuaci&oacute;n AA incluye los puntos de verificaci&oacute;n de prioridades 1 y 2";
 choices[34][2] = "La satisfacci&oacute;n de los puntos de verificaci&oacute;n de prioridad 1 es opcional";
 choices[34][3] = "Todas las anteriores afirmaciones son falsas";
 answers[34] = 1;
 units[34] = ['42'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 2361. ";
 preguntaids[34] = 2361


//  Id pregunta: 9906 Año de creación de pregunta: 2015
 questions[35]= "36)  La Ley 39/2015:";
 choices[35]= new Array();
 choices[35][0] = "Estipula la creaci&oacute;n del Esquema Nacional de Seguridad y el Esquema Nacional de Interoperabilidad.";
 choices[35][1] = "Establece en alguno de sus apartados que deben considerarse las medidas del Esquema Nacional de Seguridad y Esquema Nacional de Interoperabilidad.";
 choices[35][2] = "Establece en alguno de sus apartados que deben considerarse las medidas del Esquema Nacional de Seguridad.";
 choices[35][3] = "No menciona ni el Esquema Nacional de Seguridad ni el Esquema Nacional de Interoperabilidad.";
 answers[35] = 1;
 units[35] = ['7', '19'];
 blocks[35] = ['A2', 'A4'];
 comments[35] = "Id Pregunta: 9906. ";
 preguntaids[35] = 9906


//  Id pregunta: 8901 Año de creación de pregunta: 2013
 questions[36]= "37)  Seg&uacute;n Codd, una entidad que no contiene grupos repetitivos est&aacute;, al menos, en:";
 choices[36]= new Array();
 choices[36][0] = "Primera Forma Normal.";
 choices[36][1] = "Segunda Forma Normal.";
 choices[36][2] = "Tercera Forma Normal.";
 choices[36][3] = "Forma Normal de Boyce-Codd.";
 answers[36] = 0;
 units[36] = ['61'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 8901. ";
 preguntaids[36] = 8901


//  Id pregunta: 6581 Año de creación de pregunta: 2003
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares no est&aacute; asociado a los servicios web?";
 choices[37]= new Array();
 choices[37][0] = "SOAP";
 choices[37][1] = "UDDI";
 choices[37][2] = "XFSS";
 choices[37][3] = "HTTP";
 answers[37] = 2;
 units[37] = ['55'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 6581. ";
 preguntaids[37] = 6581


//  Id pregunta: 7466 Año de creación de pregunta: 2010
 questions[38]= "39)  Liferay est&aacute; desarrollado por:";
 choices[38]= new Array();
 choices[38][0] = "Canonical";
 choices[38][1] = "Red Hat";
 choices[38][2] = "Novell";
 choices[38][3] = "Ninguna de las anteriores";
 answers[38] = 3;
 units[38] = ['99'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 7466. ";
 preguntaids[38] = 7466


//  Id pregunta: 3470 Año de creación de pregunta: 2006
 questions[39]= "40)  La firma electr&oacute;nica avanzada es aquella que cumple que:";
 choices[39]= new Array();
 choices[39][0] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n y est&aacute; creada por un dispositivo de control de firma seguro.";
 choices[39][1] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n, est&aacute; creada por un dispositivo de control de firma seguro, tiene control exclusivo del firmante al crearla y no est&aacute; vinculada a los datos.";
 choices[39][2] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n, tiene control exclusivo del firmante al crearla y est&aacute; vinculada a los datos.";
 choices[39][3] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n, tiene control exclusivo de firmante al crearla y est&aacute; basada en un certificado reconocido.";
 answers[39] = 2;
 units[39] = ['19'];
 blocks[39] = ['A4'];
 comments[39] = "Id Pregunta: 3470. ";
 preguntaids[39] = 3470


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[40]= new Array();
 choices[40][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[40][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[40][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[40][3] = "La tasa de desempleo ronda el 20%";
 answers[40] = 2;
 units[40] = ['12'];
 blocks[40] = ['A3'];
 comments[40] = "Id Pregunta: 346. Modelo econ&oacute;mico";
 preguntaids[40] = 346


//  Id pregunta: 7843 Año de creación de pregunta: 2011
 questions[41]= "42)  &iquest;Cu&aacute;l es la vigencia temporal de los certificados electr&oacute;nicos contenidos en el DNIe?:";
 choices[41]= new Array();
 choices[41][0] = "Ilimitada.";
 choices[41][1] = "No podr&aacute; ser superior a 5 a&ntilde;os.";
 choices[41][2] = "30 meses.";
 choices[41][3] = "El certificado de autenticidad 24 meses y el de firma 18.";
 answers[41] = 1;
 units[41] = ['78'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 7843. Examen TIC A1 2010";
 preguntaids[41] = 7843


//  Id pregunta: 6781 Año de creación de pregunta: 2010
 questions[42]= "43)  En MAGERIT &iquest;cu&aacute;l de las siguientes opciones NO es cierta?";
 choices[42]= new Array();
 choices[42][0] = "Riesgo es la posibilidad de que suceda un da&ntilde;o o perjuicio";
 choices[42][1] = "Impacto es el evento que puede desencadenar un incidente en la organizaci&oacute;n";
 choices[42][2] = "Existen tres submodelos: elementos, eventos y procesos";
 choices[42][3] = "La informaci&oacute;n es un activo";
 answers[42] = 1;
 units[42] = ['45'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 6781. Castilla La Mancha 2009";
 preguntaids[42] = 6781


//  Id pregunta: 2950 Año de creación de pregunta: 2002
 questions[43]= "44)  La resoluci&oacute;n distribuida de problemas (RDP) estudia sistemas inteligentes distribuidos, cuyos agentes cumplen unas caracter&iacute;sticas m&iacute;nimas de:";
 choices[43]= new Array();
 choices[43][0] = "Benevolencia, objetivos compartidos, dise&ntilde;o central";
 choices[43][1] = "Benevolencia, objetivos compartidos, dise&ntilde;o distribuido";
 choices[43][2] = "Benevolencia, objetivos propios. dise&ntilde;o distribuido";
 choices[43][3] = "Benevolencia,  objetivos propios, dise&ntilde;o central";
 answers[43] = 0;
 units[43] = ['67'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 2950. ";
 preguntaids[43] = 2950


//  Id pregunta: 8625 Año de creación de pregunta: 2013
 questions[44]= "45)  Se&ntilde;ale la afirmaci&oacute;n CORRECTA respecto a la Ley 34/2002:";
 choices[44]= new Array();
 choices[44][0] = "Los operadores de redes y servicios de comunicaciones electr&oacute;nicas, los proveedores de acceso a redes de telecomunicaciones y los prestadores de servicios de alojamiento de datos deber&aacute;n retener los datos de conexi&oacute;n y tr&aacute;fico generados por las comunicaciones establecidas durante la prestaci&oacute;n de un servicio de la sociedad de la informaci&oacute;n por un per&iacute;odo m&aacute;ximo de doce meses.";
 choices[44][1] = "Los contratos celebrados por v&iacute;a electr&oacute;nica en los que intervenga como parte un consumidor se presumir&aacute;n celebrados en el lugar en que el prestador de servicios tenga establecido su domicilio fiscal.";
 choices[44][2] = "El Real Decreto-ley 13/2012 traspone al ordenamiento jur&iacute;dico espa&ntilde;ol la Directiva 2009/136/CE que modifica la anterior Directiva 2002/58/CE.";
 choices[44][3] = "Las comunicaciones comerciales y las ofertas promocionales se regir&aacute;n en todos sus t&eacute;rminos por la Ley 34/2002";
 answers[44] = 2;
 units[44] = ['19'];
 blocks[44] = ['A4'];
 comments[44] = "Id Pregunta: 8625. ";
 preguntaids[44] = 8625


//  Id pregunta: 7687 Año de creación de pregunta: 2010
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes es un requisito de seguridad en una transacci&oacute;n electr&oacute;nica en la que intervenga un medio de pago?";
 choices[45]= new Array();
 choices[45][0] = "Simultaneidad.";
 choices[45][1] = "Interactividad.";
 choices[45][2] = "No repudio.";
 choices[45][3] = "Automatizaci&oacute;n.";
 answers[45] = 2;
 units[45] = ['75'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 7687. Map 2007";
 preguntaids[45] = 7687


//  Id pregunta: 6901 Año de creación de pregunta: 2010
 questions[46]= "47)  WebDav es:";
 choices[46]= new Array();
 choices[46][0] = "Un est&aacute;ndar para la descripci&oacute;n de servicios web.";
 choices[46][1] = "Un protocolo para la edici&oacute;n distribuida de archivos.";
 choices[46][2] = "Un grupo de trabajo de la W3C para la definici&oacute;n de arquitecturas de servicios web.";
 choices[46][3] = "Una herramienta de CRM basada en software libre.";
 answers[46] = 1;
 units[46] = ['99'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 6901. TIC A 2009";
 preguntaids[46] = 6901


//  Id pregunta: 5964 Año de creación de pregunta: 2007
 questions[47]= "48)  El Servicio Universal contemplado en la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, NOgarantiza:";
 choices[47]= new Array();
 choices[47][0] = "Que el ciudadano pueda elegir, para la prestaci&oacute;n del servicio universal, a cualquiera de los operadoresregistrados a nivel nacional";
 choices[47][1] = "Que todos los usuarios finales puedan obtener una conexi&oacute;n a la red telef&oacute;nica p&uacute;blica desde una ubicaci&oacute;nfija y acceder a la prestaci&oacute;n del servicio telef&oacute;nico disponible al p&uacute;blico";
 choices[47][2] = "Que se ponga a disposici&oacute;n de los abonados al servicio telef&oacute;nico disponible al p&uacute;blico una gu&iacute;a general den&uacute;meros de abonados, ya sea impresa o electr&oacute;nica";
 choices[47][3] = "Que exista una oferta suficiente de tel&eacute;fonos p&uacute;blicos de pago, en todo el territorio nacional, que satisfagarazonablemente las necesidades de los usuarios finales";
 answers[47] = 0;
 units[47] = ['121'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 5964. ";
 preguntaids[47] = 5964


//  Id pregunta: 3622 Año de creación de pregunta: 2002
 questions[48]= "49)  En an&aacute;lisis documental al nivel en el que se extraen las palabras claves m&aacute;s representativas del contenido del documento, se denomina:";
 choices[48]= new Array();
 choices[48][0] = "Nivel de asiento";
 choices[48][1] = "Nivel de descriptor";
 choices[48][2] = "Nivel de resumen";
 choices[48][3] = "Nivel documental";
 answers[48] = 1;
 units[48] = ['99'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 3622. ";
 preguntaids[48] = 3622


//  Id pregunta: 3182 Año de creación de pregunta: 2003
 questions[49]= "50)  &iquest;Qui&eacute;n puede relizar servicios de certificaci&oacute;n?";
 choices[49]= new Array();
 choices[49][0] = "Una persona f&iacute;sica";
 choices[49][1] = "Una persona jur&iacute;dica";
 choices[49][2] = "Ambas";
 choices[49][3] = "S&oacute;lo el Estado";
 answers[49] = 2;
 units[49] = ['19'];
 blocks[49] = ['A4'];
 comments[49] = "Id Pregunta: 3182. Ley 59/2003, art&iacute;culo 2.2";
 preguntaids[49] = 3182


//  Id pregunta: 3658 Año de creación de pregunta: 2002
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes afirmaciones, respecto de las especificaciones de los requerimientos, es falsa?:";
 choices[50]= new Array();
 choices[50][0] = "La especificaci&oacute;n debe separar la funcionalidad de la implementaci&oacute;n";
 choices[50][1] = "La especificaci&oacute;n s&oacute;lo debe contemplar el software, aisl&aacute;ndolo del resto del sistema";
 choices[50][2] = "La especificaci&oacute;n debe ser ampliable y flexible";
 choices[50][3] = "La especificaci&oacute;n debe ser f&aacute;cilmente operativa";
 answers[50] = 1;
 units[50] = ['84'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 3658. ";
 preguntaids[50] = 3658


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[51]= "52)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[51]= new Array();
 choices[51][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[51][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[51][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[51][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[51] = 1;
 units[51] = ['5'];
 blocks[51] = ['A1'];
 comments[51] = "Id Pregunta: 120. Uni&oacute;n Europea";
 preguntaids[51] = 120


//  Id pregunta: 2001 Año de creación de pregunta: 2002
 questions[52]= "53)  &iquest;Cu&aacute;l es la decisi&oacute;n del Consejo de las Comunidades Europeas que fija la pol&iacute;tica comunitaria sobre las compras p&uacute;blicas en el sector de la tecnolog&iacute;a de la informaci&oacute;n y de las comunicaciones?:";
 choices[52]= new Array();
 choices[52][0] = "Decisi&oacute;n 87-95-CEE";
 choices[52][1] = "Decreto 88-91-CEE";
 choices[52][2] = "Decreto 88-90-CEE";
 choices[52][3] = "Decisi&oacute;n 91-88-CEE";
 answers[52] = 0;
 units[52] = ['43'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 2001. ";
 preguntaids[52] = 2001


//  Id pregunta: 3461 Año de creación de pregunta: 2006
 questions[53]= "54)  En relaci&oacute;n a los certificados X.509:";
 choices[53]= new Array();
 choices[53][0] = "Se codifican mediante la notaci&oacute;n ASN.1";
 choices[53][1] = "Permite el uso en sus campos de nombres X.500 y DNS";
 choices[53][2] = "Se han definido extensiones que permiten incluir informaci&oacute;n espec&iacute;fica";
 choices[53][3] = "Todas las anteriores son ciertas";
 answers[53] = 3;
 units[53] = ['77'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 3461. ";
 preguntaids[53] = 3461


//  Id pregunta: 5416 Año de creación de pregunta: 2006
 questions[54]= "55)  En el sistema de transmisi&oacute;n de datos Modo de Transferencia As&iacute;ncrono (ATM), las c&eacute;lulas ATM son paquetes de datos";
 choices[54]= new Array();
 choices[54][0] = "De longitud variable seg&uacute;n sea el medio de transmisi&oacute;n";
 choices[54][1] = "De 5 bytes";
 choices[54][2] = "De 48 bytes";
 choices[54][3] = "De 53 bytes";
 answers[54] = 3;
 units[54] = ['107'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 5416. ";
 preguntaids[54] = 5416


//  Id pregunta: 6949 Año de creación de pregunta: 2010
 questions[55]= "56)  Para la firma electr&oacute;nica por parte de personal al servicio de las Administraciones P&uacute;blicas NO se contempla el uso de";
 choices[55]= new Array();
 choices[55][0] = "Sello electr&oacute;nico";
 choices[55][1] = "DNI electr&oacute;nico";
 choices[55][2] = "Certificado de empleado p&uacute;blico";
 choices[55][3] = "Sistemas de c&oacute;digo seguro de verificaci&oacute;n";
 answers[55] = 0;
 units[55] = ['19'];
 blocks[55] = ['A4'];
 comments[55] = "Id Pregunta: 6949. Articulo 21 RD 1671/2009";
 preguntaids[55] = 6949


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[56]= "57)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[56]= new Array();
 choices[56][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[56][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[56][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[56][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[56] = 0;
 units[56] = ['1'];
 blocks[56] = ['A1'];
 comments[56] = "Id Pregunta: 69. Constituci&oacute;n de 1978";
 preguntaids[56] = 69


//  Id pregunta: 2235 Año de creación de pregunta: 2002
 questions[57]= "58)  Dentro del &aacute;rea de sistemas, la sub&aacute;rea de sistemas operativos, software base y sistemas corporativos NO se responsabiliza de:";
 choices[57]= new Array();
 choices[57][0] = "Servicio de Correo";
 choices[57][1] = "Dise&ntilde;o y dimensionamiento de las bases de datos.";
 choices[57][2] = "Inventario de aplicaciones que corren sobre los sistemas corporativos";
 choices[57][3] = "Creaci&oacute;n de manuales procedimientos para operaci&oacute;n.";
 answers[57] = 1;
 units[57] = ['30'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 2235. ";
 preguntaids[57] = 2235


//  Id pregunta: 9606 Año de creación de pregunta: 2014
 questions[58]= "59)  &iquest;Cual lenguage escoger&iacute;a para desarrollar la capa de presentaci&oacute;n?";
 choices[58]= new Array();
 choices[58][0] = "Pl/sql";
 choices[58][1] = "Queryscript";
 choices[58][2] = "Jquery";
 choices[58][3] = "PyScripter";
 answers[58] = 2;
 units[58] = ['62'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 9606. PyScripter es un entorno de desarrollo, no un lenguaje";
 preguntaids[58] = 9606


//  Id pregunta: 8043 Año de creación de pregunta: 2011
 questions[59]= "60)  Dentro del contenido m&iacute;nimo de una Sede Electr&oacute;nica NO se encuentra:";
 choices[59]= new Array();
 choices[59][0] = "Identificaci&oacute;n, &oacute;rgano titular y responsables de gesti&oacute;n.";
 choices[59][1] = "Sistemas de firma electr&oacute;nica que sean admitidos o utilizados en la Sede.";
 choices[59][2] = "Sistemas de verificaci&oacute;n de los certificados de la Sede.";
 choices[59][3] = "Relaci&oacute;n de funcionarios habilitados para actuar ante la Sede";
 answers[59] = 3;
 units[59] = ['43'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 8043. Examen TIC A2 2010";
 preguntaids[59] = 8043


//  Id pregunta: 8499 Año de creación de pregunta: 2011
 questions[60]= "61)  La &quot;dispersi&oacute;n modal&quot; en una fibra &oacute;ptica:";
 choices[60]= new Array();
 choices[60][0] = "S&oacute;lo se produce en fibras monomodo.";
 choices[60][1] = "S&oacute;lo se produce en fibras multimodo.";
 choices[60][2] = "Se produce en ambos tipos de fibra.";
 choices[60][3] = "No se produce en la fibra &oacute;ptica";
 answers[60] = 1;
 units[60] = ['104'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 8499. Teleco Ayto. Madrid 2010";
 preguntaids[60] = 8499


//  Id pregunta: 9862 Año de creación de pregunta: 2015
 questions[61]= "62)  La cabecera de autenticaci&oacute;n (AH) de IPSec:";
 choices[61]= new Array();
 choices[61][0] = "Proporciona integridad, no repudio en origen y protecci&oacute;n contra replay.";
 choices[61][1] = "Proporciona confidencialidad, autenticidad de origen e integridad.";
 choices[61][2] = "Crea la asociaci&oacute;n de seguridad.";
 choices[61][3] = "Ninguna de las anteriores.";
 answers[61] = 0;
 units[61] = ['119'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 9862. ";
 preguntaids[61] = 9862


//  Id pregunta: 6576 Año de creación de pregunta: 2003
 questions[62]= "63)  Se&ntilde;ale cual de las siguientes medidas de seguridad del DNI electr&oacute;nico es falsa:";
 choices[62]= new Array();
 choices[62][0] = "Tintas visibles con luz ultravioleta para evitar su falsificaci&oacute;n";
 choices[62][1] = "Chip RFID";
 choices[62][2] = "Encriptaci&oacute;n de los datos del chip";
 choices[62][3] = "Acceso a la funcionalidad del DNI electr&oacute;nico mediante clave personal de acceso (PIN)";
 answers[62] = 1;
 units[62] = ['78'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 6576. ";
 preguntaids[62] = 6576


//  Id pregunta: 6641 Año de creación de pregunta: 2009
 questions[63]= "64)  UMTS en su est&aacute;ndar contempla como posibilidades para transmisi&oacute;n d&uacute;plex:";
 choices[63]= new Array();
 choices[63][0] = "CMDA o TDMA";
 choices[63][1] = "FDD o TDD";
 choices[63][2] = "FDMA u OFDMA";
 choices[63][3] = "TCDMA";
 answers[63] = 1;
 units[63] = ['117'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 6641. ";
 preguntaids[63] = 6641


//  Id pregunta: 4332 Año de creación de pregunta: 2004
 questions[64]= "65)  Qu&eacute; es falso respecto a Network Address Translation:";
 choices[64]= new Array();
 choices[64][0] = "Opera en el nivel de red";
 choices[64][1] = "Realiza cambios en la direcci&oacute;n del paquete TCP";
 choices[64][2] = "Realiza cambios en la direcci&oacute;n del paquete IP";
 choices[64][3] = "Realiza cambios en el puerto origen del paquete TCP";
 answers[64] = 1;
 units[64] = ['109'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 4332. Para evitar la ambig&uuml;edad, para los protocolos TCP y UDP, se cambian os n&uacute;meros de puerto as&iacute; como la combinaci&oacute;n de la informaci&oacute;n de IP y puerto en el paquete devuelto.";
 preguntaids[64] = 4332


//  Id pregunta: 7387 Año de creación de pregunta: 2010
 questions[65]= "66)  En el protocolo MPLS, la cabecera de las etiquetas MPLS contienen los siguientes. Se&ntilde;ale la INCORRECTA";
 choices[65]= new Array();
 choices[65][0] = "Tipo de tr&aacute;fico (3 bits) usado para se&ntilde;alar la calidad de servicio";
 choices[65][1] = "Tiempo de vida (8 bits)";
 choices[65][2] = "Flag que determina final de la pila de etiquetas (1 bit)";
 choices[65][3] = "Comprobaci&oacute;n de redundancia c&iacute;clica (4 bits)";
 answers[65] = 3;
 units[65] = ['108'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 7387. Examen TIC B 2009";
 preguntaids[65] = 7387


//  Id pregunta: 321 Año de creación de pregunta: 2016
 questions[66]= "67)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[66]= new Array();
 choices[66][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[66][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[66][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[66][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[66] = 3;
 units[66] = ['11'];
 blocks[66] = ['A2'];
 comments[66] = "Id Pregunta: 321. Presupuestos generales";
 preguntaids[66] = 321


//  Id pregunta: 6888 Año de creación de pregunta: 2010
 questions[67]= "68)  Por v&iacute;a electr&oacute;nica en Espa&ntilde;a, pueden celebrarse los siguientes tipos de contratos:";
 choices[67]= new Array();
 choices[67][0] = "Todos.";
 choices[67][1] = "Ninguno.";
 choices[67][2] = "Todos excepto los relativos al derecho de familia y sucesiones (adopciones, matrimonio, testamento).";
 choices[67][3] = "S&oacute;lo los relativos a comercio electr&oacute;nico.";
 answers[67] = 2;
 units[67] = ['19'];
 blocks[67] = ['A4'];
 comments[67] = "Id Pregunta: 6888. TIC A 2009";
 preguntaids[67] = 6888


//  Id pregunta: 1927 Año de creación de pregunta: 2016
 questions[68]= "69)  La funci&oacute;n de un planificador en sistemas de altas prestaciones es:";
 choices[68]= new Array();
 choices[68][0] = "Contabilizar el tiempo consumido por cada proceso.";
 choices[68][1] = "Seleccionar trabajos en funci&oacute;n de su prioridad.";
 choices[68][2] = "Realizar cambios de contexto de los procesos.";
 choices[68][3] = "Asignar la cuota de tiempo de c&aacute;lculo (walltime).";
 answers[68] = 1;
 units[68] = ['49'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 1927. ";
 preguntaids[68] = 1927


//  Id pregunta: 376 Año de creación de pregunta: 2016
 questions[69]= "70)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[69]= new Array();
 choices[69][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[69][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[69][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[69][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[69] = 0;
 units[69] = ['14'];
 blocks[69] = ['A3'];
 comments[69] = "Id Pregunta: 376. Pol&iacute;ticas de igualdad";
 preguntaids[69] = 376


//  Id pregunta: 509 Año de creación de pregunta: 2016
 questions[70]= "71)  Indique la afirmaci&oacute;n falsa:";
 choices[70]= new Array();
 choices[70][0] = "En la publicidad activa la Administraci&oacute;n pone los datos a disposici&oacute;n de la ciudadan&iacute;a, en portales y p&aacute;ginas web, sin esperar a que los ciudadanos los demanden, proactivamente.";
 choices[70][1] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica los ciudadanos acceden a la informaci&oacute;n p&uacute;blica puesta a disposici&oacute;n por la Administraci&oacute;n en portales y p&aacute;ginas web.";
 choices[70][2] = "La publicidad activa y el derecho de acceso fomentan la transparencia en la actividad p&uacute;blica.";
 choices[70][3] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica la Administraci&oacute;n responde a las demandas de informaci&oacute;n por parte de los ciudadanos.";
 answers[70] = 1;
 units[70] = ['22'];
 blocks[70] = ['A4'];
 comments[70] = "Id Pregunta: 509. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[70] = 509


//  Id pregunta: 501 Año de creación de pregunta: 2016
 questions[71]= "72)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado";
 choices[71]= new Array();
 choices[71][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[71][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[71][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[71][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[71] = 2;
 units[71] = ['22'];
 blocks[71] = ['A4'];
 comments[71] = "Id Pregunta: 501. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[71] = 501


//  Id pregunta: 7591 Año de creación de pregunta: 2010
 questions[72]= "73)  &iquest;En cu&aacute;l de los siguientes aspectos NO resulta de aplicaci&oacute;n la Directiva 2000/31/CE, de 8 de junio de 2000, relativa a determinados aspectos jur&iacute;dicos de los servicios de la sociedad de la informaci&oacute;n, en particular el comercio electr&oacute;nico en el mercado interior?";
 choices[72]= new Array();
 choices[72][0] = "Las actividades de juegos de azar que impliquen apuestas de valor monetario, incluidas loter&iacute;as y apuestas.";
 choices[72][1] = "Las comunicaciones comerciales.";
 choices[72][2] = "Los acuerdos extrajudiciales para la prestaci&oacute;n de servicios.";
 choices[72][3] = "Los contratos por v&iacute;a electr&oacute;nica.";
 answers[72] = 0;
 units[72] = ['19'];
 blocks[72] = ['A4'];
 comments[72] = "Id Pregunta: 7591. Map 2006";
 preguntaids[72] = 7591


//  Id pregunta: 1498 Año de creación de pregunta: 2016
 questions[73]= "74)  Seg&uacute;n M&eacute;trica v3, &iquest;c&oacute;mo se representa un par&aacute;metro de control en un diagrama de estructura de cuadros?";
 choices[73]= new Array();
 choices[73][0] = "Con una l&iacute;nea discontinua acabada en punta de flecha que une dos m&oacute;dulos.";
 choices[73][1] = "Con una l&iacute;nea continua acabada en punta de flecha que une dos m&oacute;dulos.";
 choices[73][2] = "Con una flecha contigua a una conexi&oacute;n que tiene en el extremo opuesto a la flecha un c&iacute;rculo vac&iacute;o.";
 choices[73][3] = "Con una flecha contigua a una conexi&oacute;n que tiene en el extremo opuesto a la flecha un circulo relleno.";
 answers[73] = 3;
 units[73] = ['91'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 1498. ";
 preguntaids[73] = 1498


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[74]= "75)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[74]= new Array();
 choices[74][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[74][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[74][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[74][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[74] = 2;
 units[74] = ['1'];
 blocks[74] = ['A1'];
 comments[74] = "Id Pregunta: 90. Constituci&oacute;n de 1978";
 preguntaids[74] = 90


