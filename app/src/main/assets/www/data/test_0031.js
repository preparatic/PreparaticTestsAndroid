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
//  Id pregunta: 2040 Año de creación de pregunta: 2002
 questions[0]= "1)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas compara cada permutaci&oacute;n posible de las alternativas, con la informaci&oacute;n que aporta para cada criterio la matriz de decisi&oacute;n?:";
 choices[0]= new Array();
 choices[0][0] = "M&eacute;todo Promethee";
 choices[0][1] = "Utilidad multiatributo";
 choices[0][2] = "Permutaci&oacute;n";
 choices[0][3] = "Ninguno de los anteriores";
 answers[0] = 3;
 units[0] = ['38'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 2040. ";
 preguntaids[0] = 2040


//  Id pregunta: 5701 Año de creación de pregunta: 2007
 questions[1]= "2)  Los denominados cortafuegos o firewalls de filtrado de paquetes, se caracterizan porque:";
 choices[1]= new Array();
 choices[1][0] = "Analizan &uacute;nicamente la informaci&oacute;n incluida en la cabecera TCP/IP de cada paquete.";
 choices[1][1] = "Analizan la carga &uacute;til de datos de cada paquete.";
 choices[1][2] = "Autentifican los usuarios que acceden a la red.";
 choices[1][3] = "No permiten filtrar paquetes en funci&oacute;n del puerto destino de la comunicaci&oacute;n saliente.";
 answers[1] = 0;
 units[1] = ['119'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 5701. ";
 preguntaids[1] = 5701


//  Id pregunta: 10450 Año de creación de pregunta: 2015
 questions[2]= "3)  &iquest;Cu&aacute;l es la equivalencia en criptograf&iacute;a asim&eacute;trica a una longitud de clave de 112 bits en criptograf&iacute;a sim&eacute;trica?";
 choices[2]= new Array();
 choices[2][0] = "1102 bits.";
 choices[2][1] = "1768 bits.";
 choices[2][2] = "2048 bits.";
 choices[2][3] = "3072 bits.";
 answers[2] = 2;
 units[2] = ['76'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 10450. ";
 preguntaids[2] = 10450


//  Id pregunta: 5087 Año de creación de pregunta: 2002
 questions[3]= "4)  USSD es:";
 choices[3]= new Array();
 choices[3][0] = "Universal Serial Service Data";
 choices[3][1] = "Universal Synchronous Service Data";
 choices[3][2] = "Unstructured Supplementary Service Data";
 choices[3][3] = "Unsorted Simple Service Data";
 answers[3] = 2;
 units[3] = ['108'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 5087. ";
 preguntaids[3] = 5087


//  Id pregunta: 5585 Año de creación de pregunta: 2007
 questions[4]= "5)  &iquest;A qu&eacute; nivel del modelo OSI se realiza el encapsulamiento Frame Relay y HDLC?";
 choices[4]= new Array();
 choices[4][0] = "Red.";
 choices[4][1] = "Sesi&oacute;n.";
 choices[4][2] = "Enlace de datos.";
 choices[4][3] = "Transporte.";
 answers[4] = 2;
 units[4] = ['105'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 5585. ";
 preguntaids[4] = 5585


//  Id pregunta: 8947 Año de creación de pregunta: 2013
 questions[5]= "6)  Respecto al formato de im&aacute;genes GIF, indique la afirmaci&oacute;n falsa:";
 choices[5]= new Array();
 choices[5][0] = "Utiliza el algoritmo de compresi&oacute;n patentado LZW";
 choices[5][1] = "Fue creado en 1987 por Apple";
 choices[5][2] = "Fue creado en 1987 por Compuserve";
 choices[5][3] = "La paleta de color soporta hasta 256 colores";
 answers[5] = 1;
 units[5] = ['62'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 8947. ";
 preguntaids[5] = 8947


//  Id pregunta: 7209 Año de creación de pregunta: 2010
 questions[6]= "7)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, el censo promocional es una fuente de acceso p&uacute;blico s&oacute;lo:";
 choices[6]= new Array();
 choices[6][0] = "Durante los cinco &uacute;ltimos a&ntilde;os de vigencia";
 choices[6][1] = "Durante el &uacute;ltimo a&ntilde;o de vigencia";
 choices[6][2] = "Nunca es fuente de acceso p&uacute;blico";
 choices[6][3] = "Siempre que no aparezca el DNI";
 answers[6] = 1;
 units[6] = ['35'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 7209. Castilla La Mancha 2009";
 preguntaids[6] = 7209


//  Id pregunta: 1232 Año de creación de pregunta: 2016
 questions[7]= "8)  Tal y como indica la Ley 9/2014, General de Telecomunicaciones, en su art&iacute;culo 84, tienen competencia sancionadora (se&ntilde;ale la respuesta FALSA):";
 choices[7]= new Array();
 choices[7][0] = "El Secretario de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[7][1] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[7][2] = "El Ministro de Industria, Energ&iacute;a y Turismo.";
 choices[7][3] = "La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[7] = 2;
 units[7] = ['121'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 1232. ";
 preguntaids[7] = 1232


//  Id pregunta: 1253 Año de creación de pregunta: 2016
 questions[8]= "9)  A trav&eacute;s de la moci&oacute;n de censura se exige la responsabilidad pol&iacute;tica del Gobierno:";
 choices[8]= new Array();
 choices[8][0] = "A propuesta de la d&eacute;cima parte de los Diputados y los Senadores representados en las c&aacute;maras, en la que incluir&aacute;n un candidato a Presidente del Gobierno.";
 choices[8][1] = "Mediante su adopci&oacute;n por mayor&iacute;a absoluta de las Cortes Generales.";
 choices[8][2] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a presidente del Gobierno. No podr&aacute; ser votada hasta que transcurran cinco d&iacute;as desde su presentaci&oacute;n y se adoptar&aacute; por mayor&iacute;a absoluta del Congreso de los Diputados.";
 choices[8][3] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a Presidente del Gobierno. Su adopci&oacute;n requiere mayor&iacute;a absoluta en una primera votaci&oacute;n y mayor&iacute;a simple en una segunda votaci&oacute;n.";
 answers[8] = 2;
 units[8] = ['1'];
 blocks[8] = ['A1'];
 comments[8] = "Id Pregunta: 1253. ";
 preguntaids[8] = 1253


//  Id pregunta: 1324 Año de creación de pregunta: 2016
 questions[9]= "10)  Escoja la ordenaci&oacute;n correcta de las siguientes t&eacute;cnicas para la realizaci&oacute;n de prototipos de menor a mayor grado de fidelidad con el sistema final:";
 choices[9]= new Array();
 choices[9][0] = "Mockup, Sketch y WireFrame.";
 choices[9][1] = "Sketch, Mockup y WireFrame.";
 choices[9][2] = "Sketch, WireFrame y Mockup.";
 choices[9][3] = "Mockup, Wireframe y Sketch.";
 answers[9] = 2;
 units[9] = ['90'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 1324. ";
 preguntaids[9] = 1324


//  Id pregunta: 389 Año de creación de pregunta: 2016
 questions[10]= "11)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[10]= new Array();
 choices[10][0] = "Prevenir las conductas discriminatorias.";
 choices[10][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[10][2] = "Todas son correctas.";
 choices[10][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[10] = 2;
 units[10] = ['14'];
 blocks[10] = ['A3'];
 comments[10] = "Id Pregunta: 389. Pol&iacute;ticas de igualdad";
 preguntaids[10] = 389


//  Id pregunta: 3857 Año de creación de pregunta: 2002
 questions[11]= "12)  EXCELERATOR, SADT, TAGS..., son herramientas para:";
 choices[11]= new Array();
 choices[11][0] = "Confecci&oacute;n de prototipos";
 choices[11][1] = "An&aacute;lisis de requerimientos";
 choices[11][2] = "Auditor&iacute;a de Sistemas de Informaci&oacute;n";
 choices[11][3] = "Ninguna de las anteriores es cierta";
 answers[11] = 1;
 units[11] = ['84'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 3857. ";
 preguntaids[11] = 3857


//  Id pregunta: 4535 Año de creación de pregunta: 2002
 questions[12]= "13)  El acceso primario de la Red Digital de Servicios Integrados (en las normas europeas) est&aacute; constituido por:";
 choices[12]= new Array();
 choices[12][0] = "Un enlace con 30 canales B y un canal D utilizando una velocidad de transmisi&oacute;n de 2048 Kbps";
 choices[12][1] = "Un enlace con 30 canales D y un canal B utilizando una velocidad de transmisi&oacute;n de 2048 Kbps";
 choices[12][2] = "Un enlace con 30 canales B y un canal D utilizando una velocidad de transmisi&oacute;n de 1984 Kbps";
 choices[12][3] = "Un enlace con 30 canales D y un canal B utilizando una velocidad de transmisi&oacute;n de 1984 Kbps";
 answers[12] = 0;
 units[12] = ['114'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 4535. ";
 preguntaids[12] = 4535


//  Id pregunta: 6428 Año de creación de pregunta: 2003
 questions[13]= "14)  Respecto a la concepci&oacute;n de un sistema operativo como gestor de recursos, un sistema operativo de prop&oacute;sito espec&iacute;fico de control en tiempo real no precisa gestionar:";
 choices[13]= new Array();
 choices[13][0] = "trabajos o procesos";
 choices[13][1] = "memoria principal";
 choices[13][2] = "almacenamiento secundario";
 choices[13][3] = "dispositivos de entrada/salida";
 answers[13] = 2;
 units[13] = ['56'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 6428. ";
 preguntaids[13] = 6428


//  Id pregunta: 6443 Año de creación de pregunta: 2003
 questions[14]= "15)  Indique la respuesta falsa";
 choices[14]= new Array();
 choices[14][0] = "El portal Your Europe tiene que como objetivo informar a los pa&iacute;ses que no son de la UE sobre las posibilidades de adhesi&oacute;n a la UE";
 choices[14][1] = "PLOTEUS es el portal europeo de oportunidades de formaci&oacute;n";
 choices[14][2] = "TESTA es una red que interconecta las distintas redes administrativas de los estados miembros";
 choices[14][3] = "EURES es un servicio paneuropeo que pretende facilitar el libre movimiento de trabajadores en el Espacio Econ&oacute;mico Europeo";
 answers[14] = 0;
 units[14] = ['19'];
 blocks[14] = ['A4'];
 comments[14] = "Id Pregunta: 6443. ";
 preguntaids[14] = 6443


//  Id pregunta: 385 Año de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[15]= new Array();
 choices[15][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[15][1] = "Directiva 2004/113/CE del Consejo.";
 choices[15][2] = "Todas son correctas.";
 choices[15][3] = "Todas son falsas.";
 answers[15] = 2;
 units[15] = ['14'];
 blocks[15] = ['A3'];
 comments[15] = "Id Pregunta: 385. Pol&iacute;ticas de igualdad";
 preguntaids[15] = 385


//  Id pregunta: 9035 Año de creación de pregunta: 2014
 questions[16]= "17)  Entre los &oacute;rganos de asistencia, referidos en el RD Legislativo 3/2011, no se encuentra:";
 choices[16]= new Array();
 choices[16][0] = "Jurados de concursos";
 choices[16][1] = "Mesas de contrataci&oacute;n";
 choices[16][2] = "Junta Consultiva de Contrataci&oacute;n Administrativa del Estado";
 choices[16][3] = "Ninguno de los anteriores";
 answers[16] = 2;
 units[16] = ['10'];
 blocks[16] = ['A2'];
 comments[16] = "Id Pregunta: 9035. Art. 320, Art. 323 RD Legislativo 3/2011";
 preguntaids[16] = 9035


//  Id pregunta: 7980 Año de creación de pregunta: 2011
 questions[17]= "18)  &iquest;Qu&eacute; t&eacute;cnica es utilizada para identificar las dependencias en un proyecto?";
 choices[17]= new Array();
 choices[17][0] = "Los diagramas de Gantt.";
 choices[17][1] = "Program Evaluation &amp; Review Technique.";
 choices[17][2] = "Estructura de Descomposici&oacute;n de Trabajo (WBS).";
 choices[17][3] = "Diagrama de Extrapolaci&oacute;n.";
 answers[17] = 1;
 units[17] = ['91'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 7980. Examen TIC A2 2010";
 preguntaids[17] = 7980


//  Id pregunta: 8284 Año de creación de pregunta: 2011
 questions[18]= "19)  La metodolog&iacute;a de programaci&oacute;n estructurada utiliza la t&eacute;cnica de refinamientos:";
 choices[18]= new Array();
 choices[18][0] = "Sucesivos.";
 choices[18][1] = "Por iteraci&oacute;n.";
 choices[18][2] = "Secuencial";
 choices[18][3] = "Por selecci&oacute;n.";
 answers[18] = 0;
 units[18] = ['84'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 8284. Examen TIC A2 2010 interna";
 preguntaids[18] = 8284


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[19]= "20)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[19]= new Array();
 choices[19][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[19][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[19][2] = "Cinco a&ntilde;os.";
 choices[19][3] = "Ninguna es correcta.";
 answers[19] = 2;
 units[19] = ['5'];
 blocks[19] = ['A1'];
 comments[19] = "Id Pregunta: 166. Uni&oacute;n Europea";
 preguntaids[19] = 166


//  Id pregunta: 1578 Año de creación de pregunta: 2016
 questions[20]= "21)  El modelo de ciclo de vida cluster (o de agrupamiento) es un subtipo que se engloba dentro de los modelos de ciclo de vida:";
 choices[20]= new Array();
 choices[20][0] = "Incremental.";
 choices[20][1] = "Para Desarrollo Orientado a Objetos.";
 choices[20][2] = "De Prototipos.";
 choices[20][3] = "En Espiral.";
 answers[20] = 1;
 units[20] = ['82'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 1578. ";
 preguntaids[20] = 1578


//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[21]= "22)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[21]= new Array();
 choices[21][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[21][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[21][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[21][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[21] = 2;
 units[21] = ['19'];
 blocks[21] = ['A4'];
 comments[21] = "Id Pregunta: 488. Sociedad de la informaci&oacute;n";
 preguntaids[21] = 488


//  Id pregunta: 2312 Año de creación de pregunta: 2002
 questions[22]= "23)  Supongamos que en un proyecto representado mediante un diagrama PERT una de las actividades sufre un retraso con respecto a la duraci&oacute;n inicialmente programada En tal caso:";
 choices[22]= new Array();
 choices[22][0] = "Se incrementa la duraci&oacute;n del camino cr&iacute;tico";
 choices[22][1] = "El camino cr&iacute;tico seguir&aacute; siendo el mismo";
 choices[22][2] = "La fecha de finalizaci&oacute;n prevista podr&aacute; mantenerse s&oacute;lo si otra actividad ve acortada su duraci&oacute;n";
 choices[22][3] = "No se puede afirmar con seguridad que le suceder&aacute; al camino cr&iacute;tico";
 answers[22] = 3;
 units[22] = ['31'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 2312. ";
 preguntaids[22] = 2312


//  Id pregunta: 3930 Año de creación de pregunta: 2002
 questions[23]= "24)  Los elementos que determinan o componen la calidad del software son los siguientes:";
 choices[23]= new Array();
 choices[23][0] = "Factores externos o de usuarios relativos al comportamiento actual del software, a la facilidad de cambio y a su facilidad de conversi&oacute;n";
 choices[23][1] = "Criterios internos o de los realizadores, relativos a la forma y estructura de programas, datos y documentos";
 choices[23][2] = "M&eacute;tricas de cuantificaci&oacute;n de criterios y factores";
 choices[23][3] = "Todos los anteriores";
 answers[23] = 3;
 units[23] = ['92', '93'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 3930. ";
 preguntaids[23] = 3930


//  Id pregunta: 7755 Año de creación de pregunta: 2010
 questions[24]= "25)  En relaci&oacute;n con las notificaciones electr&oacute;nicas, &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?";
 choices[24]= new Array();
 choices[24][0] = "Se practicar&aacute;n mediante comparecencia en la sede electr&oacute;nica de la Administraci&oacute;n u Organismo actuante, a trav&eacute;s de la direcci&oacute;n electr&oacute;nica habilitada &uacute;nica o mediante ambos sistemas";
 choices[24][1] = "Cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado, se entender&aacute; rechazada cuando hayan transcurrido quince d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido.";
 choices[24][2] = "No ser&aacute;n la opci&oacute;n preferente para efectuar las notificaciones, salvo cuando el interesado resulte obligado a recibirlas por esta v&iacute;a.";
 choices[24][3] = "En ning&uacute;n caso se efectuar&aacute;n por medios electr&oacute;nicos las notificaciones que contengan medios de pago a favor de las Administraciones.";
 answers[24] = 0;
 units[24] = ['7'];
 blocks[24] = ['A2'];
 comments[24] = "Id Pregunta: 7755. ";
 preguntaids[24] = 7755


//  Id pregunta: 7669 Año de creación de pregunta: 2010
 questions[25]= "26)  En orientaci&oacute;n a objetos, el t&eacute;rmino utilizado para expresar que los datos de un objeto solamente pueden ser manipulados por medio de mensajes y m&eacute;todos predefinidos es:";
 choices[25]= new Array();
 choices[25][0] = "Polimorfismo.";
 choices[25][1] = "Herencia.";
 choices[25][2] = "Reusabilidad.";
 choices[25][3] = "Encapsulaci&oacute;n.";
 answers[25] = 3;
 units[25] = ['85'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 7669. Map 2007";
 preguntaids[25] = 7669


//  Id pregunta: 1277 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Qu&eacute; certificados electr&oacute;nicos incluye el chip de la tarjeta del DNI electr&oacute;nico?";
 choices[26]= new Array();
 choices[26][0] = "De autenticaci&oacute;n y de firma.";
 choices[26][1] = "De componente, de autenticaci&oacute;n y de firma.";
 choices[26][2] = "De cifrado y de firma.";
 choices[26][3] = "De cifrado, de autenticaci&oacute;n y de firma.";
 answers[26] = 1;
 units[26] = ['78'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 1277. ";
 preguntaids[26] = 1277


//  Id pregunta: 4220 Año de creación de pregunta: 2006
 questions[27]= "28)  Qu&eacute; actividades componen la Interfaz de Gesti&oacute;n de proyectos en M&eacute;trica v3";
 choices[27]= new Array();
 choices[27][0] = "Inicio del proyecto, seguimiento y control, Finalizaci&oacute;n y registro del proyecto";
 choices[27][1] = "Planificaci&oacute;n de la calidad, Seguimiento y control, Finalizaci&oacute;n del proyecto";
 choices[27][2] = "Inicio del proyecto, seguimiento y supervisi&oacute;n, cierre del proyecto";
 choices[27][3] = "Inicio del proyecto, seguimiento y control y Finalizaci&oacute;n del proyecto";
 answers[27] = 3;
 units[27] = ['91'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 4220. ";
 preguntaids[27] = 4220


//  Id pregunta: 2132 Año de creación de pregunta: 2004
 questions[28]= "29)  En relaci&oacute;n con la auditor&iacute;a inform&aacute;tica se&ntilde;alar cu&aacute;l de las siguientes afirmaciones es falsa";
 choices[28]= new Array();
 choices[28][0] = "El informe final deber&aacute; estar compuesto por las entrevistas en profundidad y datos recopilados durante las fases de revisi&oacute;n y verificaci&oacute;n.";
 choices[28][1] = "Se entrevistar&aacute; al mayor n&uacute;mero de usuarios posible";
 choices[28][2] = "Las entrevistas no tendr&aacute;n una duraci&oacute;n superior a dos horas y media";
 choices[28][3] = "Para la validaci&oacute;n de la carga de trabajo se utilizar&aacute;n cuestionarios y entrevistas planificadas.";
 answers[28] = 2;
 units[28] = ['36', '45'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 2132. Similar a examen TIC SS A 2003";
 preguntaids[28] = 2132


//  Id pregunta: 10888 Año de creación de pregunta: 2015
 questions[29]= "30)  &iquest;cu&aacute;l no es un componente de SNMP?";
 choices[29]= new Array();
 choices[29][0] = "MIB";
 choices[29][1] = "SNMP manager";
 choices[29][2] = "SNMP agent";
 choices[29][3] = "Servidor Syslog";
 answers[29] = 3;
 units[29] = ['114'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 10888. ";
 preguntaids[29] = 10888


//  Id pregunta: 2121 Año de creación de pregunta: 2002
 questions[30]= "31)  En el &aacute;mbito de la auditor&iacute;a de eficiencia, &eacute;sta es m&aacute;xima&hellip;:";
 choices[30]= new Array();
 choices[30][0] = "Cuando los costes de desarrollo, mantenimiento y operaci&oacute;n del sistema son los m&aacute;s bajos posiles";
 choices[30][1] = "Cuando se cumplen todos los requisitos de los usuarios y los objetivos del organismo";
 choices[30][2] = "Cuando el personal de sistemas de informaci&oacute;n trabaja con la m&aacute;xima diligencia";
 choices[30][3] = "Cuando se alcanzan los objetivos de los usuarios con los m&iacute;nimos recursos posibles";
 answers[30] = 3;
 units[30] = ['36', '45'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 2121. ";
 preguntaids[30] = 2121


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[31]= new Array();
 choices[31][0] = "Tres meses.";
 choices[31][1] = "Nueve meses.";
 choices[31][2] = "Cuatro meses.";
 choices[31][3] = "Seis meses.";
 answers[31] = 0;
 units[31] = ['11'];
 blocks[31] = ['A2'];
 comments[31] = "Id Pregunta: 285. Presupuestos generales";
 preguntaids[31] = 285


//  Id pregunta: 519 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, se entiende por emprendedor:";
 choices[32]= new Array();
 choices[32][0] = "Aquellas personas f&iacute;sicas que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[32][1] = "Aquellas personas independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar una actividad econ&oacute;mica productiva.";
 choices[32][2] = "Aquellas personas, independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[32][3] = "Ninguna de las anteriores";
 answers[32] = 2;
 units[32] = ['23'];
 blocks[32] = ['A4'];
 comments[32] = "Id Pregunta: 519. Direcci&oacute;n p&uacute;blica";
 preguntaids[32] = 519


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[33]= "34)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[33]= new Array();
 choices[33][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[33][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[33][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[33][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[33] = 2;
 units[33] = ['1'];
 blocks[33] = ['A1'];
 comments[33] = "Id Pregunta: 17. Constituci&oacute;n de 1978";
 preguntaids[33] = 17


//  Id pregunta: 9881 Año de creación de pregunta: 2015
 questions[34]= "35)  Fecha de publicaci&oacute;n de la Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas.";
 choices[34]= new Array();
 choices[34][0] = "1 de Junio de 2015";
 choices[34][1] = "1 de Julio de 2015";
 choices[34][2] = "2 de Octubre de 2015";
 choices[34][3] = "1 de Noviembre de 2015";
 answers[34] = 2;
 units[34] = ['7', '19'];
 blocks[34] = ['A2', 'A4'];
 comments[34] = "Id Pregunta: 9881. ";
 preguntaids[34] = 9881


//  Id pregunta: 8953 Año de creación de pregunta: 2013
 questions[35]= "36)  &iquest;Qu&eacute; son las Java EE Blueprints?";
 choices[35]= new Array();
 choices[35][0] = "Un conjunto de pr&aacute;cticas obligatorias al desarrollar en Java";
 choices[35][1] = "Un conjunto de buenas pr&aacute;cticas al desarrollar en Java";
 choices[35][2] = "Una API de desarrollo en Java";
 choices[35][3] = "Java EE Blueprints no existe";
 answers[35] = 1;
 units[35] = ['64'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 8953. ";
 preguntaids[35] = 8953


//  Id pregunta: 8938 Año de creación de pregunta: 2013
 questions[36]= "37)  &iquest;Cu&aacute;les de los siguientes no es un lenguaje de scripting?";
 choices[36]= new Array();
 choices[36][0] = "Javascript";
 choices[36][1] = "JEScript";
 choices[36][2] = "PerlScript";
 choices[36][3] = "VBScript";
 answers[36] = 1;
 units[36] = ['62'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 8938. ";
 preguntaids[36] = 8938


//  Id pregunta: 7300 Año de creación de pregunta: 2010
 questions[37]= "38)  Una auditor&iacute;a de acuerdo al RD 1720/2007, implica el llevar a cabo:";
 choices[37]= new Array();
 choices[37][0] = "An&aacute;lisis de la red de comunicaciones";
 choices[37][1] = "An&aacute;lisis de los sistemas operativos";
 choices[37][2] = "An&aacute;lisis de los ficheros automatizados";
 choices[37][3] = "Todas las respuestas anteriores son correctas";
 answers[37] = 3;
 units[37] = ['79'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 7300. ";
 preguntaids[37] = 7300


//  Id pregunta: 5530 Año de creación de pregunta: 2007
 questions[38]= "39)  La etiqueta en HTML para indicar el comienzo de una celda con datos en una tabla es:";
 choices[38]= new Array();
 choices[38][0] = "&lt;table&gt;";
 choices[38][1] = "&lt;tr&gt;";
 choices[38][2] = "&lt;th&gt;";
 choices[38][3] = "&lt;td&gt;";
 answers[38] = 3;
 units[38] = ['74'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 5530. ";
 preguntaids[38] = 5530


//  Id pregunta: 1898 Año de creación de pregunta: 2016
 questions[39]= "40)  Para un sistema de almacenamiento de cien unidades de disco, &iquest;Cu&aacute;l de los siguientes ofrece mayor capacidad neta de almacenamiento?: .";
 choices[39]= new Array();
 choices[39][0] = "RAI1";
 choices[39][1] = "RAI5";
 choices[39][2] = "RAI6";
 choices[39][3] = "RAID 0+1";
 answers[39] = 1;
 units[39] = ['53'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 1898. ";
 preguntaids[39] = 1898


//  Id pregunta: 7589 Año de creación de pregunta: 2010
 questions[40]= "41)  &iquest;Cu&aacute;l es la Forma Normal (FN) m&aacute;s avanzada en la que se encuentra la relaci&oacute;n R({A,B,C,D}, {A--&gt;B, B--&gt;C, C--&gt;D})?";
 choices[40]= new Array();
 choices[40][0] = "Primera FN.";
 choices[40][1] = "Segunda FN.";
 choices[40][2] = "Tercera FN.";
 choices[40][3] = "FNBC (Forma Normal de Boyce-Codd).";
 answers[40] = 1;
 units[40] = ['61'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 7589. Map 2006";
 preguntaids[40] = 7589


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[41]= new Array();
 choices[41][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[41][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[41][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[41][3] = "El Instituto de la Mujer de Extremadura.";
 answers[41] = 3;
 units[41] = ['14'];
 blocks[41] = ['A3'];
 comments[41] = "Id Pregunta: 360. Junta de Extremadura A1 2015";
 preguntaids[41] = 360


//  Id pregunta: 7130 Año de creación de pregunta: 2010
 questions[42]= "43)  &iquest;Cu&aacute;l es el plazo m&iacute;nimo para solicitar autorizaci&oacute;n para prestar servicios de la sociedad de la informaci&oacute;n, antes de comenzar a prestar el servicio?";
 choices[42]= new Array();
 choices[42][0] = "15 d&iacute;as";
 choices[42][1] = "1 mes";
 choices[42][2] = "2 meses";
 choices[42][3] = "Ninguna de las anteriores";
 answers[42] = 3;
 units[42] = ['19'];
 blocks[42] = ['A4'];
 comments[42] = "Id Pregunta: 7130. Ley 34/2002, art&iacute;culo 6";
 preguntaids[42] = 7130


//  Id pregunta: 247 Año de creación de pregunta: 2016
 questions[43]= "44)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[43]= new Array();
 choices[43][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[43][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[43][2] = "a y b son correctas";
 choices[43][3] = "a y b son incorrectas";
 answers[43] = 0;
 units[43] = ['7'];
 blocks[43] = ['A2'];
 comments[43] = "Id Pregunta: 247. Ley 39/2015";
 preguntaids[43] = 247


//  Id pregunta: 5818 Año de creación de pregunta: 2007
 questions[44]= "45)  En el &aacute;mbito de la miner&iacute;a de datos &iquest;c&oacute;mo se llama la herramienta con la que se establecen relaciones entre elementos?";
 choices[44]= new Array();
 choices[44][0] = "Clasificaci&oacute;n.";
 choices[44][1] = "Asociaci&oacute;n.";
 choices[44][2] = "Agrupaci&oacute;n.";
 choices[44][3] = "Secuenciaci&oacute;n.";
 answers[44] = 2;
 units[44] = ['72', '73'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 5818. Examen 2006 JCYL";
 preguntaids[44] = 5818


//  Id pregunta: 2827 Año de creación de pregunta: 2002
 questions[45]= "46)  En Java:";
 choices[45]= new Array();
 choices[45][0] = "Los programas son applets, que se ejecutan en un navegador";
 choices[45][1] = "Los programas son de l&iacute;nea de comandos o basados en entornos de ventanas, como AWT o Swing";
 choices[45][2] = "Los programas son aplicaciones web de servidor";
 choices[45][3] = "Todas las anteriores respuestas son ciertas";
 answers[45] = 3;
 units[45] = ['64'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 2827. ";
 preguntaids[45] = 2827


//  Id pregunta: 10481 Año de creación de pregunta: 2015
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes NO es un sistema de indexaci&oacute;n y b&uacute;squeda de texto?";
 choices[46]= new Array();
 choices[46][0] = "Lucene";
 choices[46][1] = "Solr";
 choices[46][2] = "Xapian";
 choices[46][3] = "Todos los anteriores lo son";
 answers[46] = 3;
 units[46] = ['99'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 10481. ";
 preguntaids[46] = 10481


//  Id pregunta: 8853 Año de creación de pregunta: 2013
 questions[47]= "48)  &iquest;Cu&aacute;l es el prop&oacute;sito fundamental de una Oficina de Gesti&oacute;n de Proyectos (PMO)?";
 choices[47]= new Array();
 choices[47][0] = "Gestionar de forma centralizada los proyectos TIC en la organizaci&oacute;n";
 choices[47][1] = "Orientar al CIO en la identificaci&oacute;n y definici&oacute;n de futuros proyectos TIC";
 choices[47][2] = "Definir y mantener est&aacute;ndares de gesti&oacute;n de proyectos TIC en la organizaci&oacute;n";
 choices[47][3] = "Llevar la gesti&oacute;n de los proveedores externos";
 answers[47] = 2;
 units[47] = ['30'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 8853. ";
 preguntaids[47] = 8853


//  Id pregunta: 5013 Año de creación de pregunta: 2002
 questions[48]= "49)  Para conectar una intranet dispersa geogr&aacute;ficamente con aplicaciones cr&iacute;ticas, la mejor opci&oacute;n es:";
 choices[48]= new Array();
 choices[48][0] = "El acceso telef&oacute;nico conmutado";
 choices[48][1] = "Utilizar la t&eacute;cnica de Tunneling";
 choices[48][2] = "Utilizar l&iacute;neas privadas";
 choices[48][3] = "Utilizar Internet como mecanismo de interconexi&oacute;n de los equipos de la intranet";
 answers[48] = 1;
 units[48] = ['113'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 5013. ";
 preguntaids[48] = 5013


//  Id pregunta: 36 Año de creación de pregunta: 2016
 questions[49]= "50)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[49]= new Array();
 choices[49][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[49][1] = "El Congreso de los Diputados.";
 choices[49][2] = "Las Cortes Generales.";
 choices[49][3] = "El Consejo de Ministros";
 answers[49] = 2;
 units[49] = ['1'];
 blocks[49] = ['A1'];
 comments[49] = "Id Pregunta: 36. Constituci&oacute;n de 1978";
 preguntaids[49] = 36


//  Id pregunta: 1432 Año de creación de pregunta: 2016
 questions[50]= "51)  El art&iacute;culo 69 de la Constituci&oacute;n Espa&ntilde;ola indica que el Senado es la C&aacute;mara de representaci&oacute;n territorial y que a cada provincia le corresponden:";
 choices[50]= new Array();
 choices[50][0] = "Cuatro Senadores y las poblaciones de Ceuta y Melilla estar&aacute;n representadas cada una de ellas por dos Senadores.";
 choices[50][1] = "La ley distribuir&aacute; el n&uacute;mero total de Senadores, asignando una representaci&oacute;n m&iacute;nima inicial a cada circunscripci&oacute;n y distribuyendo los dem&aacute;s en proporci&oacute;n a la poblaci&oacute;n.";
 choices[50][2] = "Dos Senadores y las poblaciones de Ceuta y Melilla estar&aacute;n representadas cada una de ellas por un Senador.";
 choices[50][3] = "Cuatro Senadores y las poblaciones de Ceuta y Melilla estar&aacute;n representadas cada una de ellas por un Senador.";
 answers[50] = 0;
 units[50] = ['1'];
 blocks[50] = ['A1'];
 comments[50] = "Id Pregunta: 1432. ";
 preguntaids[50] = 1432


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[51]= "52)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[51]= new Array();
 choices[51][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[51][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[51][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[51][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[51] = 0;
 units[51] = ['15'];
 blocks[51] = ['A3'];
 comments[51] = "Id Pregunta: 416. Mercado laboral";
 preguntaids[51] = 416


//  Id pregunta: 1346 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Qu&eacute; significa CDI en el contexto de Java EE 7?";
 choices[52]= new Array();
 choices[52][0] = "Contexts and Dependency Injection.";
 choices[52][1] = "Common Display Interface.";
 choices[52][2] = "Context-Dependent Interface.";
 choices[52][3] = "Case-Driven Implementation.";
 answers[52] = 0;
 units[52] = ['64'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 1346. ";
 preguntaids[52] = 1346


//  Id pregunta: 3853 Año de creación de pregunta: 2002
 questions[53]= "54)  Es cierto decir que la &quot;ingenier&iacute;a inversa&quot;:";
 choices[53]= new Array();
 choices[53][0] = "Crea un sistema distinto al original con el mismo nivel de abstracci&oacute;n.";
 choices[53][1] = "No se usa demasiado.";
 choices[53][2] = "Crea una representaci&oacute;n del sistema distinta a la original o con un grado de abstracci&oacute;n normalmente superior.";
 choices[53][3] = "El grado de abstracci&oacute;n que se obtiene es menor, pero eso hace que el proceso sea m&aacute;s din&aacute;mico.";
 answers[53] = 2;
 units[53] = ['97'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 3853. ";
 preguntaids[53] = 3853


//  Id pregunta: 6373 Año de creación de pregunta: 2003
 questions[54]= "55)  Una de las primeras personas en desarrollar un concepto de la sociedad de la informaci&oacute;n fue el economista";
 choices[54]= new Array();
 choices[54][0] = "Fritz Machlup";
 choices[54][1] = "Charles Babbage";
 choices[54][2] = "Herman Hollerith";
 choices[54][3] = "Howard Aiken";
 answers[54] = 0;
 units[54] = ['21'];
 blocks[54] = ['A4'];
 comments[54] = "Id Pregunta: 6373. Examen 2006 JCYL";
 preguntaids[54] = 6373


//  Id pregunta: 4268 Año de creación de pregunta: 2006
 questions[55]= "56)  Una Base de Datos documental";
 choices[55]= new Array();
 choices[55][0] = "presenta un modelo de recuperaci&oacute;n de informaci&oacute;n probabil&iacute;stica";
 choices[55][1] = "presenta un &iacute;ndice de incertidumbre en la respuesta";
 choices[55][2] = "las dos anteriores";
 choices[55][3] = "ninguna de las anteriores";
 answers[55] = 2;
 units[55] = ['61'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 4268. ";
 preguntaids[55] = 4268


//  Id pregunta: 1195 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale entre las siguientes herramientas el gestor de copia de seguridad en l&iacute;nea utilizado por productos de base de datos Oracle:";
 choices[56]= new Array();
 choices[56][0] = "RFID";
 choices[56][1] = "RSYNC";
 choices[56][2] = "RMAN";
 choices[56][3] = "RMON";
 answers[56] = 2;
 units[56] = ['60'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 1195. ";
 preguntaids[56] = 1195


//  Id pregunta: 1538 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l es el sistema operativo auspiciado por la Linux Foundation como un sistema preparado para funcionar en netbooks, dispositivos port&aacute;tiles, sistemas en veh&iacute;culos, televisiones y tel&eacute;fonos multimedia?";
 choices[57]= new Array();
 choices[57][0] = "Meego.";
 choices[57][1] = "Android.";
 choices[57][2] = "Chrome OS.";
 choices[57][3] = "Symbian OS.";
 answers[57] = 0;
 units[57] = ['57'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 1538. ";
 preguntaids[57] = 1538


//  Id pregunta: 7340 Año de creación de pregunta: 2010
 questions[58]= "59)  En un sistema Orientado a Objetos, cu&aacute;l de las siguientes NO es una m&eacute;trica para evaluar la calidad del dise&ntilde;o?";
 choices[58]= new Array();
 choices[58][0] = "M&eacute;tricas de Booch";
 choices[58][1] = "M&eacute;tricas MDOO";
 choices[58][2] = "M&eacute;tricas de Lorenz y Kidd";
 choices[58][3] = "M&eacute;tricas de Chidamber y Kemerer";
 answers[58] = 0;
 units[58] = ['93'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 7340. ";
 preguntaids[58] = 7340


//  Id pregunta: 5556 Año de creación de pregunta: 2007
 questions[59]= "60)  Las pruebas alfa:";
 choices[59]= new Array();
 choices[59][0] = "Son pruebas de integraci&oacute;n.";
 choices[59][1] = "Son pruebas de caja transparente";
 choices[59][2] = "Comprueban todo el espacio de ejecuci&oacute;n de un programa.";
 choices[59][3] = "Estiman el porcentaje de errores no detectados.";
 answers[59] = 2;
 units[59] = ['92'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 5556. ";
 preguntaids[59] = 5556


//  Id pregunta: 2396 Año de creación de pregunta: 2006
 questions[60]= "61)  Los ficheros de titularidad p&uacute;blica se encuentran regulados en:";
 choices[60]= new Array();
 choices[60][0] = "En el cap&iacute;tulo I del T&iacute;tulo IV de la LOPD";
 choices[60][1] = "En el cap&iacute;tulo II del T&iacute;tulo IV de la LOPD";
 choices[60][2] = "En el cap&iacute;tulo I del T&iacute;tulo VI de la LOPD";
 choices[60][3] = "En el cap&iacute;tulo II del T&iacute;tulo VI de la LOPD";
 answers[60] = 0;
 units[60] = ['35'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 2396. ";
 preguntaids[60] = 2396


//  Id pregunta: 1021 Año de creación de pregunta: 2016
 questions[61]= "62)  De acuerdo a la ley 40/2015 debe abstenerse de intervenir en el procedimiento el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[61]= new Array();
 choices[61][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[61][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[61][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[61][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[61] = 3;
 units[61] = ['4', '7', '8', '9'];
 blocks[61] = ['A1', 'A2'];
 comments[61] = "Id Pregunta: 1021. Ley 40/2015";
 preguntaids[61] = 1021


//  Id pregunta: 3065 Año de creación de pregunta: 2002
 questions[62]= "63)  SSL:";
 choices[62]= new Array();
 choices[62][0] = "Permite a un comercio en internet cobrar a sus clientes, efectuando la transacci&oacute;n por medio de un tercero de confianza (banco)";
 choices[62][1] = "Permite que un tercero cn acceso al tr&aacute;fico entre el servidor y el cliente no pueda romper la confidencialidad";
 choices[62][2] = "Es un algoritmo de cifrado, de un n&uacute;mero de bits variable";
 choices[62][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[62] = 1;
 units[62] = ['76'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 3065. ";
 preguntaids[62] = 3065


//  Id pregunta: 1384 Año de creación de pregunta: 2016
 questions[63]= "64)  De las siguientes cabeceras IPv6 (RFC 2460), &iquest;cu&aacute;l de las siguientes cabeceras NO es de extensi&oacute;n?";
 choices[63]= new Array();
 choices[63][0] = "Fragmentaci&oacute;n.";
 choices[63][1] = "Opciones de salto a salto.";
 choices[63][2] = "Autenticaci&oacute;n.";
 choices[63][3] = "Limite de saltos.";
 answers[63] = 3;
 units[63] = ['109'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 1384. ";
 preguntaids[63] = 1384


//  Id pregunta: 1040 Año de creación de pregunta: 2016
 questions[64]= "65)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[64]= new Array();
 choices[64][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[64][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[64][2] = "A y B son correctas.";
 choices[64][3] = "A y B son incorrectas.";
 answers[64] = 2;
 units[64] = ['4', '7', '8', '9'];
 blocks[64] = ['A1', 'A2'];
 comments[64] = "Id Pregunta: 1040. Ley 40/2015";
 preguntaids[64] = 1040


//  Id pregunta: 146 Año de creación de pregunta: 2016
 questions[65]= "66)  La Mesa del Parlamento europeo estar&aacute; compuesta por:";
 choices[65]= new Array();
 choices[65][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[65][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[65][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[65][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[65] = 3;
 units[65] = ['5'];
 blocks[65] = ['A1'];
 comments[65] = "Id Pregunta: 146. Uni&oacute;n Europea";
 preguntaids[65] = 146


//  Id pregunta: 2818 Año de creación de pregunta: 2002
 questions[66]= "67)  En el sector de los procesadores cient&iacute;ficos:";
 choices[66]= new Array();
 choices[66][0] = "Los modelos de procesadores paralelos utilizan chips convencionales, por lo que resultan siempre m&aacute;s econ&oacute;micos que los superordenadores de gran escala.";
 choices[66][1] = "Se utilizan sistemas operativos propietarios.";
 choices[66][2] = "Se emplea el proceso paralelo masivo (MPP).";
 choices[66][3] = "Los procesadores incorporados de terceras partes proporcionan capacidades de proceso en coma flotante y matricial para entornos de mainframe tradicional.";
 answers[66] = 3;
 units[66] = ['49', '50'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 2818. ";
 preguntaids[66] = 2818


//  Id pregunta: 1422 Año de creación de pregunta: 2016
 questions[67]= "68)  Nadie podr&aacute; ser privado de sus bienes y derechos seg&uacute;n el art&iacute;culo 33 de la Constituci&oacute;n Espa&ntilde;ola de 1978, salvo por causa justificada:";
 choices[67]= new Array();
 choices[67][0] = "De calamidad p&uacute;blica.";
 choices[67][1] = "De grave riesgo.";
 choices[67][2] = "De utilidad p&uacute;blica o inter&eacute;s social.";
 choices[67][3] = "En cualquiera de las situaciones anteriores.";
 answers[67] = 2;
 units[67] = ['1'];
 blocks[67] = ['A1'];
 comments[67] = "Id Pregunta: 1422. ";
 preguntaids[67] = 1422


//  Id pregunta: 6482 Año de creación de pregunta: 2003
 questions[68]= "69)  &iquest;Cu&aacute;les son los procedimientos de adjudicaci&oacute;n que contempla el RD legislativo 3/2011 de contratos del sector p&uacute;blico?";
 choices[68]= new Array();
 choices[68][0] = "Abierto, restringido y negociado";
 choices[68][1] = "Abierto, restringido, negociado y dedicado";
 choices[68][2] = "Abierto, restringido, negociado y por di&aacute;logo competitivo";
 choices[68][3] = "Ninguno de los anteriores es correcto";
 answers[68] = 2;
 units[68] = ['37'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 6482. ";
 preguntaids[68] = 6482


//  Id pregunta: 9535 Año de creación de pregunta: 2014
 questions[69]= "70)  Pedro crea una librer&iacute;a (LibPeter) y la publica bajo licencia LGPL. FooCorp distribuye una versi&oacute;n modificada de la misma junto con su software propietario. &iquest;Cu&aacute;l de las siguientes no es una obligaci&oacute;n de FooCorp?";
 choices[69]= new Array();
 choices[69][0] = "FooCorp debe proveer un mecanismo para que su software propietario pueda enlazar con nuevas versiones de LibPeter";
 choices[69][1] = "FooCorp debe proveer el c&oacute;digo fuente completo de la versi&oacute;n modificada de LibPeter";
 choices[69][2] = "FooCorp debe comunicar todas sus modificaciones a LibPeter";
 choices[69][3] = "FooCorp debe publicar el c&oacute;digo fuente de su software propietario";
 answers[69] = 3;
 units[69] = ['66'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 9535. ";
 preguntaids[69] = 9535


//  Id pregunta: 4512 Año de creación de pregunta: 2002
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a xDSL?";
 choices[70]= new Array();
 choices[70][0] = "HDSL";
 choices[70][1] = "VDSL";
 choices[70][2] = "ADSL";
 choices[70][3] = "MDSL";
 answers[70] = 3;
 units[70] = ['108'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 4512. ";
 preguntaids[70] = 4512


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[71]= "72)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[71]= new Array();
 choices[71][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[71][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[71][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[71][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[71] = 2;
 units[71] = ['22'];
 blocks[71] = ['A4'];
 comments[71] = "Id Pregunta: 505. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[71] = 505


//  Id pregunta: 7707 Año de creación de pregunta: 2010
 questions[72]= "73)  La Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, establece que:";
 choices[72]= new Array();
 choices[72][0] = "El Gobierno crear&aacute; una entidad p&uacute;blica para la gesti&oacute;n del Fondo nacional del servicio universal.";
 choices[72][1] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia se encargar&aacute; de la gesti&oacute;n del Fondo nacional del servicio universal.";
 choices[72][2] = "El Gobierno, mediante Decreto, establecer&aacute; el procedimiento por el que las operadoras gestionar&aacute;n el Fondo nacional del servicio universal.";
 choices[72][3] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n se encargar&aacute; de la gesti&oacute;n del Fondo nacional del servicio universal.";
 answers[72] = 1;
 units[72] = ['121'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 7707. Similar a Map 2007";
 preguntaids[72] = 7707


//  Id pregunta: 1062 Año de creación de pregunta: 2016
 questions[73]= "74)  El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica:";
 choices[73]= new Array();
 choices[73][0] = "Es el &oacute;rgano de cooperaci&oacute;n interministerial de la Administraci&oacute;n General del Estado en materia de administraci&oacute;n electr&oacute;nica.";
 choices[73][1] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea que canaliza la colaboraci&oacute;n entre la Administraci&oacute;n General del Estado y el resto de pa&iacute;ses de la Uni&oacute;n Europea en materia de administraci&oacute;n electr&oacute;nica.";
 choices[73][2] = "Es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Entidades Locales en materia de administraci&oacute;n electr&oacute;nica.";
 choices[73][3] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea encargado de unificar los criterios en materia de tratamiento y protecci&oacute;n de datos de car&aacute;cter personal en el &aacute;mbito de la Uni&oacute;n Europea.";
 answers[73] = 2;
 units[73] = ['7'];
 blocks[73] = ['A2'];
 comments[73] = "Id Pregunta: 1062. ";
 preguntaids[73] = 1062


//  Id pregunta: 9631 Año de creación de pregunta: 2014
 questions[74]= "75)  &iquest;Qu&eacute; organismos pueden participar en la ETSI?";
 choices[74]= new Array();
 choices[74][0] = "&Uacute;nicamente los Estados Miembros a trav&eacute;s del organismo p&uacute;blico que designen. En el caso de Espa&ntilde;a ser&iacute;a a trav&eacute;s de la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital.";
 choices[74][1] = "Pueden participar tanto las Administraciones P&uacute;blicas como operadores de red, la industria, centros de investigaci&oacute;n o los usuarios de los servicios de telecomunicaci&oacute;n";
 choices[74][2] = "&Uacute;nicamente los organismos nacionales de certificaci&oacute;n m&aacute;s representativos. En el caso de Espa&ntilde;a ser&iacute;a AENOR";
 choices[74][3] = "En el caso de Espa&ntilde;a, &uacute;nicamente la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital y AENOR";
 answers[74] = 1;
 units[74] = ['48'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 9631. ETSI es un organismo sin &aacute;nimo de lucro creado al objeto de disponer del foro adecuado para la elaboraci&oacute;n de las normas de telecomunicaci&oacute;n que faciliten la estandarizaci&oacute;n del sector, y por lo tanto el avance hacia el Mercado &Uacute;nico Europeo.";
 preguntaids[74] = 9631


