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
//  Id pregunta: 10355 Año de creación de pregunta: 2015
 questions[0]= "1)  Seleccione la respuesta verdadera:";
 choices[0]= new Array();
 choices[0][0] = "El fan-in de un m&oacute;dulo es usado como una medida de reusabilidad";
 choices[0][1] = "El fan-in de un m&oacute;dulo es usado como una medida de complejidad.";
 choices[0][2] = "Las dos anteriores son verdaderas";
 choices[0][3] = "Todas son falsas";
 answers[0] = 0;
 units[0] = ['89'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 10355. ";
 preguntaids[0] = 10355


//  Id pregunta: 1730 Año de creación de pregunta: 2016
 questions[1]= "2)  En un Sistema de Gesti&oacute;n de Base de Datos (SGBD) debe garantizarse la total satisfacci&oacute;n la CONSISTENCIA, es decir que:";
 choices[1]= new Array();
 choices[1][0] = "Varios accesos simult&aacute;neos a cada Base de Datos sin conflictos.";
 choices[1][1] = "En todo momento, los valores de los datos no presenten contradicciones.";
 choices[1][2] = "Los valores de los datos sean aut&eacute;nticos, conforme a las reglas sem&aacute;nticas establecidas por dise&ntilde;o.";
 choices[1][3] = "En caso de fallo (hardware, alimentaci&oacute;n, etc) la Base de Datos vuelva a un estado &iacute;ntegro anterior al fallo.";
 answers[1] = 1;
 units[1] = ['60'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 1730. ";
 preguntaids[1] = 1730


//  Id pregunta: 518 Año de creación de pregunta: 2016
 questions[2]= "3)  Se&ntilde;alar la respuesta FALSA respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[2]= new Array();
 choices[2][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[2][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[2][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[2][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[2] = 1;
 units[2] = ['22'];
 blocks[2] = ['A4'];
 comments[2] = "Id Pregunta: 518. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[2] = 518


//  Id pregunta: 4292 Año de creación de pregunta: 2004
 questions[3]= "4)  En GSM (Global System Mobile) el acceso al medio utilizado es:";
 choices[3]= new Array();
 choices[3][0] = "Acceso m&uacute;ltiple por divisi&oacute;n de tiempo.";
 choices[3][1] = "Acceso m&uacute;ltiple por divisi&oacute;n de frecuencia.";
 choices[3][2] = "Acceso m&uacute;ltiple por divisi&oacute;n de frecuencia y tiempo.";
 choices[3][3] = "Acceso m&uacute;ltiple por divisi&oacute;n en c&oacute;digo de banda ancha.";
 answers[3] = 2;
 units[3] = ['117'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 4292. ";
 preguntaids[3] = 4292


//  Id pregunta: 10277 Año de creación de pregunta: 2015
 questions[4]= "5)  La MEJOR descripci&oacute;n de la prioridad de una Incidencia es&hellip;";
 choices[4]= new Array();
 choices[4][0] = "La importancia relativa de una Incidencia basada en su impacto y urgencia";
 choices[4][1] = "La velocidad con la que necesita ser resuelta la Incidencia";
 choices[4][2] = "El n&uacute;mero de personas que ser&aacute;n asignadas para trabajar en la Incidencia con el fin de que se resuelva dentro del plazo";
 choices[4][3] = "El camino de escalado que debe seguir para asegurar la resoluci&oacute;n de la Incidencia";
 answers[4] = 0;
 units[4] = ['101'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 10277. ";
 preguntaids[4] = 10277


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[5]= "6)  En los or&iacute;genes te&oacute;ricos del t&eacute;rmino gobernanza se encuentra:";
 choices[5]= new Array();
 choices[5][0] = "Peters";
 choices[5][1] = "Hollingsworth";
 choices[5][2] = "Manuel Castells";
 choices[5][3] = "Gaebler";
 answers[5] = 1;
 units[5] = ['20'];
 blocks[5] = ['A4'];
 comments[5] = "Id Pregunta: 490. Direcci&oacute;n p&uacute;blica";
 preguntaids[5] = 490


//  Id pregunta: 110 Año de creación de pregunta: 2016
 questions[6]= "7)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[6]= new Array();
 choices[6][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[6][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[6][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[6][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[6] = 2;
 units[6] = ['5'];
 blocks[6] = ['A1'];
 comments[6] = "Id Pregunta: 110. Uni&oacute;n Europea";
 preguntaids[6] = 110


//  Id pregunta: 7426 Año de creación de pregunta: 2010
 questions[7]= "8)  La recomendaci&oacute;n de la UIT H.323";
 choices[7]= new Array();
 choices[7][0] = "Se utiliza &uacute;nicamente en redes RDSI";
 choices[7][1] = "Permite audioconferencia pero no videoconferencia";
 choices[7][2] = "Se le puede a&ntilde;adir seguridad seg&uacute;n la recomendaci&oacute;n de la UIT H.325";
 choices[7][3] = "Fue definida para redes de conmutaci&oacute;n de circuitos";
 answers[7] = 2;
 units[7] = ['122'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 7426. Examen TIC B 2009";
 preguntaids[7] = 7426


//  Id pregunta: 1309 Año de creación de pregunta: 2016
 questions[8]= "9)  Ethernet realiza la difusi&oacute;n recibiendo tramas con la siguiente direcci&oacute;n MAC de destino:";
 choices[8]= new Array();
 choices[8][0] = "00: 00: 00: 00: 00:FF";
 choices[8][1] = "FF:FF:FF:FF:FF:FF";
 choices[8][2] = "FF: 00: 00: 00: 00:FF";
 choices[8][3] = "00:00:00:00:00:00";
 answers[8] = 1;
 units[8] = ['112'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 1309. ";
 preguntaids[8] = 1309


//  Id pregunta: 10959 Año de creación de pregunta: 2015
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes circunstancias da lugar necesariamente a la resoluci&oacute;n de un contrato?";
 choices[9]= new Array();
 choices[9][0] = "Ninguna de las anteriores es correcta";
 choices[9][1] = "La apertura de la fase de liquidaci&oacute;n en caso de concurso de acreedores";
 choices[9][2] = "la declaraci&oacute;n de concurso";
 choices[9][3] = "la demora de la Administraci&oacute;n en el pago superior a 6 meses";
 answers[9] = 1;
 units[9] = ['37'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 10959. ";
 preguntaids[9] = 10959


//  Id pregunta: 8137 Año de creación de pregunta: 2011
 questions[10]= "11)  &iquest;Cu&aacute;nto overhead o sobrecarga genera cada paquete MPLS?";
 choices[10]= new Array();
 choices[10][0] = "4 bits.";
 choices[10][1] = "5 bits.";
 choices[10][2] = "32 bits.";
 choices[10][3] = "258 bits.";
 answers[10] = 2;
 units[10] = ['107'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 8137. Examen TIC A2 2010 interna";
 preguntaids[10] = 8137


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[11]= "12)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[11]= new Array();
 choices[11][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[11][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[11][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[11][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[11] = 3;
 units[11] = ['5'];
 blocks[11] = ['A1'];
 comments[11] = "Id Pregunta: 137. Uni&oacute;n Europea";
 preguntaids[11] = 137


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[12]= new Array();
 choices[12][0] = "JUnit, Artifactory y SonarQube";
 choices[12][1] = "JUnit, Artifactory y Selenium";
 choices[12][2] = "JUnit, SonarQube y Selenium";
 choices[12][3] = "ArtiFactory, SonarQube y Selenium";
 answers[12] = 2;
 units[12] = ['92'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 829. AGE A1 2015";
 preguntaids[12] = 829


//  Id pregunta: 10911 Año de creación de pregunta: 2015
 questions[13]= "14)  &iquest;Qu&eacute; protocolo de seguridad WLAN genera una nueva din&aacute;mica clave cada vez que un cliente establece una conexi&oacute;n con el punto de acceso?";
 choices[13]= new Array();
 choices[13][0] = "WEP";
 choices[13][1] = "PSK";
 choices[13][2] = "EAP";
 choices[13][3] = "WPA";
 answers[13] = 3;
 units[13] = ['108'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 10911. ";
 preguntaids[13] = 10911


//  Id pregunta: 7546 Año de creación de pregunta: 2010
 questions[14]= "15)  Sean en una comunicaci&oacute;n: m = mensaje a transmitir. y = h(m) el c&oacute;digo hash del mensaje m calculado en origen. m&rsquo; = mensaje recibido. y&rsquo; = h(m&rsquo;) el c&oacute;digo hash del mensaje m&rsquo; recibido, calculado en destino. Se&ntilde;alar cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[14]= new Array();
 choices[14][0] = "Si y = y&rsquo; entonces se puede afirmar que la integridad de m est&aacute; garantizada en m&rsquo;.";
 choices[14][1] = "Si y ? y&rsquo; entonces se puede afirmar que la clave privada ha sido alterada.";
 choices[14][2] = "Si m = m&rsquo; entonces se puede afirmar que la confidencialidad de y est&aacute; garantizada en y&rsquo;.";
 choices[14][3] = "Si y = y&rsquo; entonces se puede afirmar que la confidencialidad de m est&aacute; garantizada en m&rsquo;.";
 answers[14] = 0;
 units[14] = ['76'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 7546. Map 2005";
 preguntaids[14] = 7546


//  Id pregunta: 1258 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[15]= new Array();
 choices[15][0] = "Indirecta.";
 choices[15][1] = "Directa.";
 choices[15][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[15][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[15] = 1;
 units[15] = ['14'];
 blocks[15] = ['A3'];
 comments[15] = "Id Pregunta: 1258. ";
 preguntaids[15] = 1258


//  Id pregunta: 6604 Año de creación de pregunta: 2009
 questions[16]= "17)  En criptograf&iacute;a sim&eacute;trica, &iquest;qu&eacute; es una sustituci&oacute;n monoalfab&eacute;tica monogr&aacute;mica?";
 choices[16]= new Array();
 choices[16][0] = "Cada letra del mensaje original es sustituido por s&oacute;lo una otra letra, n&uacute;mero o s&iacute;mbolo";
 choices[16][1] = "Buscan paliar la sensibilidad frente a ataques basados en el estudio de frecuencias de s&iacute;mbolos.";
 choices[16][2] = "Cada letra del mensaje original puede ser sustituida por m&aacute;s de una letra, n&uacute;mero o s&iacute;mbolo";
 choices[16][3] = "La que sustituye las letras en grupos de longitud variable, dependiendo de su posici&oacute;n dentro del mensaje";
 answers[16] = 0;
 units[16] = ['76'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 6604. ";
 preguntaids[16] = 6604


//  Id pregunta: 8639 Año de creación de pregunta: 2013
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguiente no es una T&eacute;cnica?";
 choices[17]= new Array();
 choices[17][0] = "Prototipado";
 choices[17][1] = "Normalizaci&oacute;n";
 choices[17][2] = "Diagrama de paquetes";
 choices[17][3] = "Casos de uso";
 answers[17] = 0;
 units[17] = ['91'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 8639. ";
 preguntaids[17] = 8639


//  Id pregunta: 6263 Año de creación de pregunta: 2003
 questions[18]= "19)  En el an&aacute;lisis DAFO, la definici&oacute;n &ldquo;Son eventos o circunstancias que se espera que ocurran o pueden inducirse a que ocurran en el mundo exterior y que podr&iacute;an tener un impacto positivo en el futuro de la Organizaci&oacute;n&rdquo; se corresponde con:";
 choices[18]= new Array();
 choices[18][0] = "Debilidades";
 choices[18][1] = "Amenazas";
 choices[18][2] = "Fortalezas";
 choices[18][3] = "Oportunidades";
 answers[18] = 3;
 units[18] = ['83'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 6263. ";
 preguntaids[18] = 6263


//  Id pregunta: 323 Año de creación de pregunta: 2016
 questions[19]= "20)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[19]= new Array();
 choices[19][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[19][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[19][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[19][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[19] = 3;
 units[19] = ['11'];
 blocks[19] = ['A2'];
 comments[19] = "Id Pregunta: 323. Presupuestos generales";
 preguntaids[19] = 323


//  Id pregunta: 7121 Año de creación de pregunta: 2010
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes contenidos deben contener obligatoriamente los certificados electr&oacute;nicos de sede electr&oacute;nica de la AGE y de sus organismos p&uacute;blicos vinculados o dependientes, de acuerdo al RD 1671/2009?";
 choices[20]= new Array();
 choices[20][0] = "Descripci&oacute;n de la sede electr&oacute;nica.";
 choices[20][1] = "Unidad administrativa suscriptora del certificado.";
 choices[20][2] = "Fechas de validez del certificado.";
 choices[20][3] = "Ninguna de las anteriores.";
 answers[20] = 1;
 units[20] = ['7'];
 blocks[20] = ['A2'];
 comments[20] = "Id Pregunta: 7121. Art&iacute;culo 18 RD 1671/2009";
 preguntaids[20] = 7121


//  Id pregunta: 6099 Año de creación de pregunta: 2003
 questions[21]= "22)  Seg&uacute;n el RD 209/2003, de 21 de febrero, con respecto a las notificaciones telem&aacute;ticas, cuando exista constancia dela recepci&oacute;n de una notificaci&oacute;n, se considerar&aacute; que &eacute;sta ha sido rechazada cuando no se haya accedido a sucontenido en un plazo de:";
 choices[21]= new Array();
 choices[21][0] = "10 d&iacute;as naturales";
 choices[21][1] = "10 d&iacute;as h&aacute;biles";
 choices[21][2] = "20 d&iacute;as naturales";
 choices[21][3] = "En ning&uacute;n caso se considerar&aacute; rechazada si no se ha accedido a su contenido";
 answers[21] = 0;
 units[21] = ['19'];
 blocks[21] = ['A4'];
 comments[21] = "Id Pregunta: 6099. Examen TIC A1 MAP 2007";
 preguntaids[21] = 6099


//  Id pregunta: 3992 Año de creación de pregunta: 2002
 questions[22]= "23)  En el an&aacute;lisis documental al nivel en el que se extrae un &quot;abstract&quot; o resumen anal&iacute;tico del texto &iacute;ntegro, se denomina:";
 choices[22]= new Array();
 choices[22][0] = "Nivel de asiento";
 choices[22][1] = "Nivel de descriptor";
 choices[22][2] = "Nivel de resumen";
 choices[22][3] = "Nivel documental";
 answers[22] = 2;
 units[22] = ['100'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 3992. ";
 preguntaids[22] = 3992


//  Id pregunta: 9782 Año de creación de pregunta: 2015
 questions[23]= "24)  El servicio de verificaci&oacute;n y consulta de datos no tiene por objetivo:";
 choices[23]= new Array();
 choices[23][0] = "Dar respuesta al art&iacute;culo 28 de la Ley 39/2015, por el que los interesados no estar&aacute;n obligados a aportar documentos que hayan sido elaborados por cualquier Administraci&oacute;n.";
 choices[23][1] = "Simplificar la tramitaci&oacute;n de los procedimientos administrativos.";
 choices[23][2] = "Facilitar al ciudadano la aportaci&oacute;n de los documentos en papel que acrediten su identidad en los procedimientos administrativos.";
 choices[23][3] = "Dar cumplimiento a los derechos recogidos en la Ley 39/2015, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas.";
 answers[23] = 2;
 units[23] = ['7', '47'];
 blocks[23] = ['A2', 'B1'];
 comments[23] = "Id Pregunta: 9782. ";
 preguntaids[23] = 9782


//  Id pregunta: 3285 Año de creación de pregunta: 2003
 questions[24]= "25)  Si un programa se distribuye con licencia GPL, la empresa que lo modifica puede:";
 choices[24]= new Array();
 choices[24][0] = "No puede venderlo";
 choices[24][1] = "Integrarlo en otro SW y venderlo como propietario";
 choices[24][2] = "Venderlo a otra empresa como software libre";
 choices[24][3] = "Venderlo a otra empresa como software propietario";
 answers[24] = 2;
 units[24] = ['66'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 3285. ";
 preguntaids[24] = 3285


//  Id pregunta: 2439 Año de creación de pregunta: 2006
 questions[25]= "26)  Cu&aacute;l de las siguientes afirmaciones sobre AENOR es incorrecta:";
 choices[25]= new Array();
 choices[25][0] = "Mediante un Real Decreto AENOR fue reconocida como la &uacute;nica entidad aprobada para desarrollar las tareas de normalizaci&oacute;n y certificaci&oacute;n en nuestro pa&iacute;s.";
 choices[25][1] = "Las normas espa&ntilde;olas que genera AENOR se denominan Normas UNE.";
 choices[25][2] = "AENOR es miembro de pleno derecho, y representa a nuestro pa&iacute;s en los Organismos Internacionales, europeos y regionales de Normalizaci&oacute;n (ISO, IEC, CEN, CENELEC, ETSI, COPANT).";
 choices[25][3] = "AENOR est&aacute; acreditada por la Entidad Nacional de Acreditaci&oacute;n (ENAC) como la &uacute;nica entidad capaz de certificar ISO 9000 en Espa&ntilde;a.";
 answers[25] = 3;
 units[25] = ['48'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 2439. ";
 preguntaids[25] = 2439


//  Id pregunta: 4290 Año de creación de pregunta: 2002
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes planes no formar&iacute;a parte de un Plan de Contingencias?:";
 choices[26]= new Array();
 choices[26][0] = "Plan de emergencia";
 choices[26][1] = "Plan de sistemas";
 choices[26][2] = "Plan de recuperaci&oacute;n";
 choices[26][3] = "Plan de respaldo";
 answers[26] = 1;
 units[26] = ['36'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 4290. ";
 preguntaids[26] = 4290


//  Id pregunta: 4979 Año de creación de pregunta: 2002
 questions[27]= "28)  Los conectores que se insertan en los hubs 10 base T son del tipo:";
 choices[27]= new Array();
 choices[27][0] = "RJ11";
 choices[27][1] = "RJ45";
 choices[27][2] = "RJ37";
 choices[27][3] = "V.24";
 answers[27] = 1;
 units[27] = ['104'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 4979. ";
 preguntaids[27] = 4979


//  Id pregunta: 1246 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; est&aacute;ndar del IEEE opera con canales de 80 MHz de ancho de banda por cliente?";
 choices[28]= new Array();
 choices[28][0] = "802.11n";
 choices[28][1] = "802.11g";
 choices[28][2] = "802.11ac";
 choices[28][3] = "802.11ad";
 answers[28] = 2;
 units[28] = ['108'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 1246. ";
 preguntaids[28] = 1246


//  Id pregunta: 8620 Año de creación de pregunta: 2013
 questions[29]= "30)  Una empresa tiene una p&aacute;gina web con informaci&oacute;n sobre su actividad, productos, y servicios que vende, pero &eacute;stos no se pueden comprar a trav&eacute;s de su p&aacute;gina web. &iquest;Le afectan a la empresa las obligaciones establecidas en la Ley de Servicios de la Sociedad de la Informaci&oacute;n para los prestadores de servicios?";
 choices[29]= new Array();
 choices[29][0] = "S&iacute;, ya que se trata de una actividad con trascendencia econ&oacute;mica que se realiza por medios electr&oacute;nicos";
 choices[29][1] = "No, al no haber venta directa de productos por medios electr&oacute;nicos";
 choices[29][2] = "Si, cualquier servicio que se preste a trav&eacute;s de internet incurre en estas obligaciones";
 choices[29][3] = "No, la ley no establece obligaciones para los prestadores de servicios";
 answers[29] = 0;
 units[29] = ['19'];
 blocks[29] = ['A4'];
 comments[29] = "Id Pregunta: 8620. Examen TIC A2 2011";
 preguntaids[29] = 8620


//  Id pregunta: 6654 Año de creación de pregunta: 2009
 questions[30]= "31)  &iquest;Qu&eacute; deber&aacute; publicarse, en todo caso, en el perfil de contratante, seg&uacute;n el RD Legislativo 3/2011 de Contatos del Sector P&uacute;blico(art&iacute;culo 53.2)?";
 choices[30]= new Array();
 choices[30][0] = "Los procedimientos anulados";
 choices[30][1] = "Los anuncios de licitaci&oacute;n";
 choices[30][2] = "La adjudicaci&oacute;n de los contratos";
 choices[30][3] = "Las licitaciones abiertas";
 answers[30] = 2;
 units[30] = ['37'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 6654. ";
 preguntaids[30] = 6654


//  Id pregunta: 4178 Año de creación de pregunta: 2006
 questions[31]= "32)  Indique de las siguientes cual no es una metodologia de desarrollo orientada a objetos:";
 choices[31]= new Array();
 choices[31][0] = "SA/SD";
 choices[31][1] = "OMT";
 choices[31][2] = "Proceso Unificado de modelado";
 choices[31][3] = "Tarjetas de clase";
 answers[31] = 0;
 units[31] = ['85'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 4178. ";
 preguntaids[31] = 4178


//  Id pregunta: 10210 Año de creación de pregunta: 2015
 questions[32]= "33)  &iquest;Cu&aacute;ntos servicios se incluyen en la primera Declaracion de Servicios Compartidos por parte de la Comisi&oacute;n de Estrategia TIC en Septiembre de 2015?";
 choices[32]= new Array();
 choices[32][0] = "12";
 choices[32][1] = "14";
 choices[32][2] = "16";
 choices[32][3] = "10";
 answers[32] = 1;
 units[32] = ['26'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 10210. Declaraci&oacute;n de la CETIC";
 preguntaids[32] = 10210


//  Id pregunta: 10404 Año de creación de pregunta: 2015
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes planes se refiere al objetivo de Econom&iacute;a Digital e Internacionalizaci&oacute;n de la Agenda Digital Espa&ntilde;ola?";
 choices[33]= new Array();
 choices[33][0] = "Plan TIC en PYMEs y Comercio Electr&oacute;nico";
 choices[33][1] = "Plan de Impulso de Econom&iacute;a Digital y Contenidos Digitales";
 choices[33][2] = "Plan de Internacionalizaci&oacute;n de Empresas Tecnol&oacute;gicas";
 choices[33][3] = "Todos los anteriores";
 answers[33] = 3;
 units[33] = ['19'];
 blocks[33] = ['A4'];
 comments[33] = "Id Pregunta: 10404. ";
 preguntaids[33] = 10404


//  Id pregunta: 726 Año de creación de pregunta: 2016
 questions[34]= "35)  Dado un &aacute;rbol binario, cuyo recorrido en pre-orden es 'Redhat, Debian, Fedora, Mandriva, Archilinux', &iquest;cu&aacute;l de las siguientes opciones podr&iacute;a ser un recorrido en in-orden?";
 choices[34]= new Array();
 choices[34][0] = "Fedora, Archilinux, Debian, Mandriva, Redhat.";
 choices[34][1] = "Fedora, Debian, Archilinux, Mandriva, Redhat.";
 choices[34][2] = "Debian, Fedora, Redhat, Archilinux, Mandriva.";
 choices[34][3] = "Debian, Mandriva, Fedora, Archilinux, Redhat.";
 answers[34] = 0;
 units[34] = ['68'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 726. AGE A2 2015";
 preguntaids[34] = 726


//  Id pregunta: 4912 Año de creación de pregunta: 2002
 questions[35]= "36)  La Red Digital de Servicios Integrados (RDSI), permite los siguientes accesos o servicios:";
 choices[35]= new Array();
 choices[35][0] = "Circuitos virtuales permanentes";
 choices[35][1] = "Accesos B&aacute;sico 2B+D";
 choices[35][2] = "Circuitos virtuales punto a punto";
 choices[35][3] = "Todas las respuestas anteriores son correctas";
 answers[35] = 1;
 units[35] = ['114'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 4912. ";
 preguntaids[35] = 4912


//  Id pregunta: 9037 Año de creación de pregunta: 2014
 questions[36]= "37)  &iquest;Cu&aacute;l es el plazo necesario entre la invitaci&oacute;n a mejorar ofertas a los licitadores y la subasta electr&oacute;nica?";
 choices[36]= new Array();
 choices[36][0] = "No antes de 15 d&iacute;as h&aacute;biles desde la invitaci&oacute;n";
 choices[36][1] = "No antes de 15 d&iacute;as naturales desde la invitaci&oacute;n";
 choices[36][2] = "M&iacute;nimo 2 d&iacute;as h&aacute;biles entre invitaci&oacute;n y subasta";
 choices[36][3] = "M&iacute;nimo 2 d&iacute;as naturales entre invitaci&oacute;n y subasta";
 answers[36] = 3;
 units[36] = ['10'];
 blocks[36] = ['A2'];
 comments[36] = "Id Pregunta: 9037. RD Legislativo 3/2011, Art. 148.7. Entre la fecha de env&iacute;o de las invitaciones y el comienzo de la subasta electr&oacute;nica habr&aacute;n de transcurrir, al menos, dos d&iacute;as h&aacute;biles.";
 preguntaids[36] = 9037


//  Id pregunta: 1430 Año de creación de pregunta: 2016
 questions[37]= "38)  De conformidad con el art&iacute;culo 59 de la Constituci&oacute;n Espa&ntilde;ola, si no hubiere ninguna persona a quien corresponda la Regencia, &eacute;sta ser&aacute; nombrada por las Cortes Generales, y se compondr&aacute;:";
 choices[37]= new Array();
 choices[37][0] = "De una persona.";
 choices[37][1] = "De tres personas.";
 choices[37][2] = "De cinco personas.";
 choices[37][3] = "De una, tres o cinco personas.";
 answers[37] = 3;
 units[37] = ['1'];
 blocks[37] = ['A1'];
 comments[37] = "Id Pregunta: 1430. ";
 preguntaids[37] = 1430


//  Id pregunta: 6819 Año de creación de pregunta: 2010
 questions[38]= "39)  En relaci&oacute;n con el Single Sign On";
 choices[38]= new Array();
 choices[38][0] = "Los sistemas Web Single Sign On utilizan 'cookies' para reconocer a los usuarios y su estado de autenticaci&oacute;n";
 choices[38][1] = "Los usuarios de los sistemas SSO mediante Kerberos reciben un 'ticket' al registrarse que luego se presenta en las aplicaciones cliente";
 choices[38][2] = "Las dos respuestas anteriores son correctas";
 choices[38][3] = "Todas las respuestas anteriores son incorrectas";
 answers[38] = 2;
 units[38] = ['123'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 6819. ";
 preguntaids[38] = 6819


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[39]= new Array();
 choices[39][0] = "El Ministro de Econom&iacute;a.";
 choices[39][1] = "El Gobierno.";
 choices[39][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[39][3] = "El Presidente del Gobierno.";
 answers[39] = 1;
 units[39] = ['11'];
 blocks[39] = ['A2'];
 comments[39] = "Id Pregunta: 288. Presupuestos generales";
 preguntaids[39] = 288


//  Id pregunta: 7067 Año de creación de pregunta: 2010
 questions[40]= "41)  Para modificar la estructura de una tabla en SQL";
 choices[40]= new Array();
 choices[40][0] = "No se puede modificar la estuctura de la tabla despu&eacute;s de que se ha puesto en producci&oacute;n.";
 choices[40][1] = "Las tablas se modifican con el comando UPDATE.";
 choices[40][2] = "Las tablas se modifican con el comando ALTER.";
 choices[40][3] = "Existen distintos comandos, pero lo importante es que la tabla est&eacute; vacia.";
 answers[40] = 2;
 units[40] = ['61'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 7067. ";
 preguntaids[40] = 7067


//  Id pregunta: 147 Año de creación de pregunta: 2016
 questions[41]= "42)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[41]= new Array();
 choices[41][0] = "X.";
 choices[41][1] = "XIX.";
 choices[41][2] = "XV.";
 choices[41][3] = "XIII.";
 answers[41] = 1;
 units[41] = ['5'];
 blocks[41] = ['A1'];
 comments[41] = "Id Pregunta: 147. Uni&oacute;n Europea";
 preguntaids[41] = 147


//  Id pregunta: 987 Año de creación de pregunta: 2016
 questions[42]= "43)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[42]= new Array();
 choices[42][0] = "Subsecretario";
 choices[42][1] = "Subdirector general";
 choices[42][2] = "Secretario de Estado";
 choices[42][3] = "ninguna es correcta";
 answers[42] = 0;
 units[42] = ['4', '7', '8', '9'];
 blocks[42] = ['A1', 'A2'];
 comments[42] = "Id Pregunta: 987. Ley 40/2015";
 preguntaids[42] = 987


//  Id pregunta: 366 Año de creación de pregunta: 2016
 questions[43]= "44)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[43]= new Array();
 choices[43][0] = "Sean dirigidas por mujeres";
 choices[43][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[43][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[43][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[43] = 2;
 units[43] = ['14'];
 blocks[43] = ['A3'];
 comments[43] = "Id Pregunta: 366. Pol&iacute;ticas de igualdad";
 preguntaids[43] = 366


//  Id pregunta: 5674 Año de creación de pregunta: 2007
 questions[44]= "45)  &iquest;Qu&eacute; es un almac&eacute;n de datos?";
 choices[44]= new Array();
 choices[44][0] = "Un sistema de almacenamiento masivo en discos RAID.";
 choices[44][1] = "Una base de datos OLTP.";
 choices[44][2] = "Un repositorio de informaci&oacute;n recopilada de distintas fuentes.";
 choices[44][3] = "Un sistema de almacenamiento innovador que viene integrado en el paquete de Suse&shy;Linux.";
 answers[44] = 2;
 units[44] = ['85'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 5674. ";
 preguntaids[44] = 5674


//  Id pregunta: 5082 Año de creación de pregunta: 2002
 questions[45]= "46)  Tengo una p&aacute;gina web personal, pero para financiar gastos tengo alojados &quot;banners&quot;.&iquest;En qu&eacute; me afecta la LSSI?:";
 choices[45]= new Array();
 choices[45][0] = "No me afecta para nada";
 choices[45][1] = "La LSSI es aplicable";
 choices[45][2] = "S&oacute;lo para la publicidad";
 choices[45][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[45] = 1;
 units[45] = ['19'];
 blocks[45] = ['A4'];
 comments[45] = "Id Pregunta: 5082. ";
 preguntaids[45] = 5082


//  Id pregunta: 9290 Año de creación de pregunta: 2014
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes conceptos NO se puede representar a trav&eacute;s de un diagrama de flujo de datos?";
 choices[46]= new Array();
 choices[46][0] = "La persistencia";
 choices[46][1] = "Los procesos de transformaci&oacute;n.";
 choices[46][2] = "El flujo de la informaci&oacute;n.";
 choices[46][3] = "La herencia";
 answers[46] = 3;
 units[46] = ['85', '86'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 9290. Examen TIC A2 2013. Promocion interna";
 preguntaids[46] = 9290


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[47]= "48)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[47]= new Array();
 choices[47][0] = "El Rey.";
 choices[47][1] = "El Jefe del Estado.";
 choices[47][2] = "El Gobierno.";
 choices[47][3] = "El Presidente del Gobierno.";
 answers[47] = 2;
 units[47] = ['1'];
 blocks[47] = ['A1'];
 comments[47] = "Id Pregunta: 35. Constituci&oacute;n de 1978";
 preguntaids[47] = 35


//  Id pregunta: 6951 Año de creación de pregunta: 2010
 questions[48]= "49)  De acuerdo con M&eacute;trica v3, en la actividad &quot;Seguimiento y Evaluaci&oacute;n de los cambios hasta la aceptaci&oacute;n&quot; del Mantenimiento de Sistemas de Informaci&oacute;n:";
 choices[48]= new Array();
 choices[48][0] = "La aprobaci&oacute;n de la petici&oacute;n se realiza antes de realizar las pruebas de regresi&oacute;n";
 choices[48][1] = "La aprobaci&oacute;n de la petici&oacute;n se realiza antes de comenzar el cambio en desarrollo";
 choices[48][2] = "La aprobaci&oacute;n de la petici&oacute;n se realiza al finalizar las pruebas de regresi&oacute;n y despu&eacute;s de comprobar que todo lo que ha sido modificado, o puede verse afectado por el cambio, funciona correctamente";
 choices[48][3] = "La aprobaci&oacute;n de la petici&oacute;n no es necesaria si se ha comprobado que s&oacute;lo se han modificado los elementos que se ven afectados por el cambio y que se han realizado las pruebas de integraci&oacute;n y del sistema";
 answers[48] = 2;
 units[48] = ['91'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 6951. TIC-B 2009 bloque desarrollo";
 preguntaids[48] = 6951


//  Id pregunta: 8969 Año de creación de pregunta: 2013
 questions[49]= "50)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto al protocolo H.245:";
 choices[49]= new Array();
 choices[49][0] = "Es un protocolo para el control multimedia de las llamadas";
 choices[49][1] = "S&oacute;lo lo utiliza el protocolo H.323";
 choices[49][2] = "Aparte del protocolo H.323, lo utilizan otros protocolos (como por ejemplo el protocolo H.234)";
 choices[49][3] = "Es un protocolo de gesti&oacute;n y control";
 answers[49] = 1;
 units[49] = ['122'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 8969. ";
 preguntaids[49] = 8969


//  Id pregunta: 3439 Año de creación de pregunta: 2006
 questions[50]= "51)  Las herramientas para la elaboraci&oacute;n de informes y listados, tanto en detalle como sobre informaci&oacute;n agregada, a partir de la informaci&oacute;n de los Datawarehouse y datamarts se conocen como herramientas de:";
 choices[50]= new Array();
 choices[50][0] = "OLAP.";
 choices[50][1] = "Query &amp; reporting.";
 choices[50][2] = "Cuadro de mando anal&iacute;tico.";
 choices[50][3] = "Datamining.";
 answers[50] = 1;
 units[50] = ['72'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 3439. ";
 preguntaids[50] = 3439


//  Id pregunta: 235 Año de creación de pregunta: 2016
 questions[51]= "52)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[51]= new Array();
 choices[51][0] = "apud acta";
 choices[51][1] = "presencialmente";
 choices[51][2] = "electr&oacute;nicamente";
 choices[51][3] = "todas son correctas";
 answers[51] = 3;
 units[51] = ['7'];
 blocks[51] = ['A2'];
 comments[51] = "Id Pregunta: 235. Ley 39/2015";
 preguntaids[51] = 235


//  Id pregunta: 234 Año de creación de pregunta: 2016
 questions[52]= "53)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[52]= new Array();
 choices[52][0] = "la Administraci&oacute;n General del Estado";
 choices[52][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[52][2] = "las Entidades Locales";
 choices[52][3] = "todas son correctas";
 answers[52] = 3;
 units[52] = ['7'];
 blocks[52] = ['A2'];
 comments[52] = "Id Pregunta: 234. Ley 39/2015";
 preguntaids[52] = 234


//  Id pregunta: 7898 Año de creación de pregunta: 2011
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; definido en el Marco Europeo de Interoperabilidad?:";
 choices[53]= new Array();
 choices[53][0] = "Seguridad.";
 choices[53][1] = "Subsidiariedad.";
 choices[53][2] = "Compatibilidad del hardware.";
 choices[53][3] = "Protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[53] = 2;
 units[53] = ['43'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 7898. Examen TIC A1 2010";
 preguntaids[53] = 7898


//  Id pregunta: 3041 Año de creación de pregunta: 2002
 questions[54]= "55)  Se&ntilde;ale el modelo de miner&iacute;a de datos que comprueba la validez de las hip&oacute;tesis establecidas por el usuario.";
 choices[54]= new Array();
 choices[54][0] = "Modelo de descubrimiento.";
 choices[54][1] = "Modelo de verificaci&oacute;n.";
 choices[54][2] = "Modelo predictivo.";
 choices[54][3] = "Modelo de resumen.";
 answers[54] = 1;
 units[54] = ['72', '73'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 3041. ";
 preguntaids[54] = 3041


//  Id pregunta: 169 Año de creación de pregunta: 2016
 questions[55]= "56)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[55]= new Array();
 choices[55][0] = "El 23 de julio de 1952.";
 choices[55][1] = "El 18 de abril de 1951.";
 choices[55][2] = "El 16 de abril de 1948.";
 choices[55][3] = "d)Ninguna de las respuestas son correctas.";
 answers[55] = 0;
 units[55] = ['5'];
 blocks[55] = ['A1'];
 comments[55] = "Id Pregunta: 169. Uni&oacute;n Europea";
 preguntaids[55] = 169


//  Id pregunta: 1497 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;l es el significado de la sigla SLA empleada en la Implantaci&oacute;n y Aceptaci&oacute;n del Sistema?";
 choices[56]= new Array();
 choices[56][0] = "Service Level Agreement.";
 choices[56][1] = "Service Layer Agreement.";
 choices[56][2] = "System Layer Architecture.";
 choices[56][3] = "System Low Adherence.";
 answers[56] = 0;
 units[56] = ['101'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 1497. ";
 preguntaids[56] = 1497


//  Id pregunta: 9174 Año de creación de pregunta: 2014
 questions[57]= "58)  Seg&uacute;n la Ley 59/2003 de Firma electr&oacute;nica, los prestadores de servicios de certificaci&oacute;n que expidan certificados reconocidos deber&aacute;n conservar registrada por cualquier medio seguro toda la informaci&oacute;n y documentaci&oacute;n relativa a un certificado reconocido al menos durante:";
 choices[57]= new Array();
 choices[57][0] = "5 a&ntilde;os.";
 choices[57][1] = "10 a&ntilde;os.";
 choices[57][2] = "Permanentemente.";
 choices[57][3] = "15 a&ntilde;os.";
 answers[57] = 3;
 units[57] = ['77'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 9174. Examen TIC A2 2013";
 preguntaids[57] = 9174


//  Id pregunta: 1610 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas corresponde a una SAN (Storage &Aacute;rea Network) pero NO a una NAS (Network Attached Storage)?";
 choices[58]= new Array();
 choices[58][0] = "El dispositivo de almacenamiento no corresponde a un &uacute;nico servidor, pudiendo ser compartido por varios servidores.";
 choices[58][1] = "Las conexiones f&iacute;sicas desde los servidores hacia la plataforma son de uso espec&iacute;fico para el almacenamiento, no siendo utilizadas para otros fines";
 choices[58][2] = "Las peticiones de datos al sistema se hacen de forma remota a trav&eacute;s del protocolo CIFS";
 choices[58][3] = "Se comparte la misma infraestructura de red para los servidores y para el almacenamiento";
 answers[58] = 1;
 units[58] = ['53'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 1610. ";
 preguntaids[58] = 1610


//  Id pregunta: 2104 Año de creación de pregunta: 2002
 questions[59]= "60)  El modelo orientado a los tratamientos:";
 choices[59]= new Array();
 choices[59][0] = "Trata de identificar las funciones a desarrollar por el sistema de informaci&oacute;n";
 choices[59][1] = "Trata de identificar la evoluci&oacute;n de la vida de las entidades";
 choices[59][2] = "Trata de identificar las funciones a desarrollar por el sistema inform&aacute;tico";
 choices[59][3] = "Trata de identificar la evoluci&oacute;n de la vida del sistema";
 answers[59] = 0;
 units[59] = ['24'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 2104. ";
 preguntaids[59] = 2104


//  Id pregunta: 10914 Año de creación de pregunta: 2015
 questions[60]= "61)  &iquest;Qu&eacute; afirmaci&oacute;n describe una caracter&iacute;stica de IPsec?";
 choices[60]= new Array();
 choices[60][0] = "IPsec puede proteger el tr&aacute;fico en las capas 1 a 3.";
 choices[60][1] = "IPsec funciona independiente del protocolo de capa 2";
 choices[60][2] = "El cifrado puede causar problemas con el enrutamiento.";
 choices[60][3] = "Se trata de una suite propietaria";
 answers[60] = 1;
 units[60] = ['119'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 10914. ";
 preguntaids[60] = 10914


//  Id pregunta: 8899 Año de creación de pregunta: 2013
 questions[61]= "62)  Seg&uacute;n Codd, una entidad en la que todos los atributos dependen funcionalmente de la clave est&aacute;, al menos, en:";
 choices[61]= new Array();
 choices[61][0] = "Primera Forma Normal.";
 choices[61][1] = "Segunda Forma Normal.";
 choices[61][2] = "Tercera Forma Normal.";
 choices[61][3] = "Forma Normal de Boyce-Codd.";
 answers[61] = 0;
 units[61] = ['61'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 8899. ";
 preguntaids[61] = 8899


//  Id pregunta: 1027 Año de creación de pregunta: 2016
 questions[62]= "63)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[62]= new Array();
 choices[62][0] = "Un d&iacute;a";
 choices[62][1] = "Dos d&iacute;as";
 choices[62][2] = "Tres d&iacute;as";
 choices[62][3] = "Cuatro d&iacute;as";
 answers[62] = 2;
 units[62] = ['4', '7', '8', '9'];
 blocks[62] = ['A1', 'A2'];
 comments[62] = "Id Pregunta: 1027. Ley 40/2015";
 preguntaids[62] = 1027


//  Id pregunta: 985 Año de creación de pregunta: 2016
 questions[63]= "64)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[63]= new Array();
 choices[63][0] = "los Subsecretarios y Secretarios generales";
 choices[63][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[63][2] = "los Secretarios de Estado";
 choices[63][3] = "los Subdirectores generales";
 answers[63] = 2;
 units[63] = ['4', '7', '8', '9'];
 blocks[63] = ['A1', 'A2'];
 comments[63] = "Id Pregunta: 985. Ley 40/2015";
 preguntaids[63] = 985


//  Id pregunta: 7498 Año de creación de pregunta: 2010
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes funciones no es compatible con un lenguaje de programaci&oacute;n orientado a objetos?";
 choices[64]= new Array();
 choices[64][0] = "Encapsulaci&oacute;n.";
 choices[64][1] = "Herencia.";
 choices[64][2] = "Polimorfismo.";
 choices[64][3] = "Historicismo.";
 answers[64] = 3;
 units[64] = ['89'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 7498. Map 2005";
 preguntaids[64] = 7498


//  Id pregunta: 2179 Año de creación de pregunta: 2002
 questions[65]= "66)  En un sistema de informaci&oacute;n:";
 choices[65]= new Array();
 choices[65][0] = "En el nivel t&aacute;ctico se implementan las decisiones mediante un procedimiento automatizado";
 choices[65][1] = "En el nivel operacional se realiza el grueso del tratamiento de los datos";
 choices[65][2] = "En el nivel estrat&eacute;gico las decisiones dependen de fuentes de informaci&oacute;n externa";
 choices[65][3] = "Todas las anteriores son correctas";
 answers[65] = 3;
 units[65] = ['24'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 2179. ";
 preguntaids[65] = 2179


//  Id pregunta: 127 Año de creación de pregunta: 2016
 questions[66]= "67)  Componen la Comisi&oacute;n Europea:";
 choices[66]= new Array();
 choices[66][0] = "Un Comisario por cada Estado miembro.";
 choices[66][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[66][2] = "Dos Comisarios por cada Estado miembro.";
 choices[66][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[66] = 0;
 units[66] = ['5'];
 blocks[66] = ['A1'];
 comments[66] = "Id Pregunta: 127. Uni&oacute;n Europea";
 preguntaids[66] = 127


//  Id pregunta: 2574 Año de creación de pregunta: 2002
 questions[67]= "68)  A la estructura en disco que contiene la informaci&oacute;n de control de un fichero en un sistema de ficheros Unix se le denomina:";
 choices[67]= new Array();
 choices[67][0] = "I-nodo";
 choices[67][1] = "Cluster";
 choices[67][2] = "Bloque de control";
 choices[67][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[67] = 0;
 units[67] = ['57'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 2574. ";
 preguntaids[67] = 2574


//  Id pregunta: 3420 Año de creación de pregunta: 2006
 questions[68]= "69)  &iquest;Qu&eacute; es moodle?";
 choices[68]= new Array();
 choices[68][0] = "Un sistema de gest&oacute;n de la ense&ntilde;anza de Software libre";
 choices[68][1] = "Un sistema de gesti&oacute;n de contenidos gratuito pero no libre";
 choices[68][2] = "Un buscador de Internet";
 choices[68][3] = "Un entorno de escritorio para sistemas Linux bajo tecnolog&iacute;a X Windows";
 answers[68] = 0;
 units[68] = ['70'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 3420. Moodle tiene licencia GNU GPL.";
 preguntaids[68] = 3420


//  Id pregunta: 9923 Año de creación de pregunta: 2015
 questions[69]= "70)  &iquest;Qu&eacute; estructura utiliza SICRES 3?";
 choices[69]= new Array();
 choices[69][0] = "HTML";
 choices[69][1] = "PDF";
 choices[69][2] = "XML";
 choices[69][3] = "Ninguna de las anteriores";
 answers[69] = 2;
 units[69] = ['44'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 9923. ";
 preguntaids[69] = 9923


//  Id pregunta: 1434 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n el art&iacute;culo 81 de la Constituci&oacute;n Espa&ntilde;ola &iquest;qu&eacute; mayor&iacute;a del Congreso ser&aacute; necesaria para la aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas en una votaci&oacute;n final sobre el conjunto del proyecto?";
 choices[70]= new Array();
 choices[70][0] = "Las leyes org&aacute;nicas exigir&aacute;n en primera votaci&oacute;n mayor&iacute;a absoluta y transcurridas cuarenta y ocho horas mayor&iacute;a simple.";
 choices[70][1] = "Las leyes org&aacute;nicas exigir&aacute;n en primera votaci&oacute;n mayor&iacute;a absoluta y transcurridas cuarenta y ocho horas mayor&iacute;a ordinaria.";
 choices[70][2] = "Las leyes org&aacute;nicas exigir&aacute;n en primera votaci&oacute;n mayor&iacute;a absoluta y transcurridas cuarenta y ocho horas mayor&iacute;a cualificada.";
 choices[70][3] = "Las leyes org&aacute;nicas exigir&aacute;n mayor&iacute;a absoluta.";
 answers[70] = 3;
 units[70] = ['1'];
 blocks[70] = ['A1'];
 comments[70] = "Id Pregunta: 1434. ";
 preguntaids[70] = 1434


//  Id pregunta: 2250 Año de creación de pregunta: 2002
 questions[71]= "72)  La utilizaci&oacute;n de sistemas abiertos permite una serie de ventajas. Se&ntilde;ale cual de las siguientes no es una de ellas:";
 choices[71]= new Array();
 choices[71][0] = "Mejorar, en general, precio/rendimiento";
 choices[71][1] = "Simplificar el mantenimiento debido al reducido n&uacute;mero de posibles proveedores";
 choices[71][2] = "Garantizar la libertad de elecci&oacute;n";
 choices[71][3] = "Proteger la inversi&oacute;n realizada en equipo f&iacute;sico";
 answers[71] = 1;
 units[71] = ['43'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 2250. ";
 preguntaids[71] = 2250


//  Id pregunta: 10736 Año de creación de pregunta: 2015
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes no es un modelo de calidad del Software?";
 choices[72]= new Array();
 choices[72][0] = "GCAL de SISDEL";
 choices[72][1] = "FURPS";
 choices[72][2] = "ISO 9126-1";
 choices[72][3] = "Todos los anteriores son modelos de calidad del Software.";
 answers[72] = 0;
 units[72] = ['93'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 10736. ";
 preguntaids[72] = 10736


//  Id pregunta: 4727 Año de creación de pregunta: 2002
 questions[73]= "74)  Indicar la respuesta correcta: El protocolo HTTP, utilizado al navegar por Internet:";
 choices[73]= new Array();
 choices[73][0] = "Realiza una nueva conexi&oacute;n TCP con el servidor cada vez que se solicita una nueva p&aacute;gina web";
 choices[73][1] = "Abre una conexi&oacute;n TCP con el servidor la primera vez que se solicita una p&aacute;gina y la mantiene abierta mientras no se cambia de servidor";
 choices[73][2] = "HTTP no es un protocolo de comunicaciones, sino un lenguaje para la creaci&oacute;n de p&aacute;ginas web";
 choices[73][3] = "Ninguna de las anteriores";
 answers[73] = 0;
 units[73] = ['112'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 4727. ";
 preguntaids[73] = 4727


//  Id pregunta: 5302 Año de creación de pregunta: 2006
 questions[74]= "75)  Se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[74]= new Array();
 choices[74][0] = "En las redes P2P no existen clientes ni servidores fijos.";
 choices[74][1] = "Se necesitan servidores intermedios que mantienen la relaci&oacute;n de direcciones IP de los usuarios de la red.";
 choices[74][2] = "La informaci&oacute;n no puede ser intercambiada sin la intervenci&oacute;n de los servidores.";
 choices[74][3] = "Todas las respuestas son correctas.";
 answers[74] = 2;
 units[74] = ['103'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 5302. ";
 preguntaids[74] = 5302


