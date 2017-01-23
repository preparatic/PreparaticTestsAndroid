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
//  Id pregunta: 6809 Año de creación de pregunta: 2010
 questions[0]= "1)  Respecto al contenido del informe de auditoria, indicar cu&aacute;l de las siguientes recomendaciones es correcta:";
 choices[0]= new Array();
 choices[0][0] = "El informe final de una auditoria s&oacute;lo contendr&aacute; recomendaciones relativas a los incumplimientos o puntos d&eacute;biles detectados en el &aacute;rea auditada.";
 choices[0][1] = "El informe final incluir&aacute; las alegaciones de los auditados, indicando la opini&oacute;n de los auditores sobre ellas, y si no se incluyen las alegaciones, deber&aacute; indicarse el motivo.";
 choices[0][2] = "El informe final de una auditoria operativa debe contener la opini&oacute;n de los auditores y sugerencias generales sobre c&oacute;mo aplicar los controles para evaluar el funcionamiento del &aacute;rea auditada.";
 choices[0][3] = "En el informe final de una auditoria operativa se deben se&ntilde;alar las debilidades y fortalezas observadas en relaci&oacute;n con los controles implementados en el &aacute;rea auditada.";
 answers[0] = 1;
 units[0] = ['36'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 6809. TIC A 2009";
 preguntaids[0] = 6809


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[1]= new Array();
 choices[1][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[1][1] = "Por Orden Ministerial.";
 choices[1][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[1][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[1] = 0;
 units[1] = ['1'];
 blocks[1] = ['A1'];
 comments[1] = "Id Pregunta: 75. Constituci&oacute;n de 1978";
 preguntaids[1] = 75


//  Id pregunta: 87 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[2]= new Array();
 choices[2][0] = "117.5";
 choices[2][1] = "117.1";
 choices[2][2] = "116";
 choices[2][3] = "15";
 answers[2] = 0;
 units[2] = ['1'];
 blocks[2] = ['A1'];
 comments[2] = "Id Pregunta: 87. Constituci&oacute;n de 1978";
 preguntaids[2] = 87


//  Id pregunta: 3317 Año de creación de pregunta: 2004
 questions[3]= "4)  De entre las siguientes maneras de manipular una base de datos SQL, indique la que no es correcta:";
 choices[3]= new Array();
 choices[3][0] = "Interactivamente, convocando directamente las sentencias SQL.";
 choices[3][1] = "Relacionalmente, invocando paralelamente sentencias SQL.";
 choices[3][2] = "Por m&oacute;dulos, agrupando sentencias SQL en m&oacute;dulos.";
 choices[3][3] = "Por medio de SQL embebido";
 answers[3] = 1;
 units[3] = ['61'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 3317. MAP-B 2003";
 preguntaids[3] = 3317


//  Id pregunta: 10780 Año de creación de pregunta: 2015
 questions[4]= "5)  Las RFCs son publicadas por:";
 choices[4]= new Array();
 choices[4][0] = "ITU";
 choices[4][1] = "W3C";
 choices[4][2] = "IAB";
 choices[4][3] = "IETF";
 answers[4] = 3;
 units[4] = ['48'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 10780. ";
 preguntaids[4] = 10780


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[5]= "6)  Los Reglamentos no se caracterizan por:";
 choices[5]= new Array();
 choices[5][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[5][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[5][2] = "Ser obligatorios.";
 choices[5][3] = "No poseer alcance general.";
 answers[5] = 3;
 units[5] = ['5'];
 blocks[5] = ['A1'];
 comments[5] = "Id Pregunta: 178. Uni&oacute;n Europea";
 preguntaids[5] = 178


//  Id pregunta: 6373 Año de creación de pregunta: 2003
 questions[6]= "7)  Una de las primeras personas en desarrollar un concepto de la sociedad de la informaci&oacute;n fue el economista";
 choices[6]= new Array();
 choices[6][0] = "Fritz Machlup";
 choices[6][1] = "Charles Babbage";
 choices[6][2] = "Herman Hollerith";
 choices[6][3] = "Howard Aiken";
 answers[6] = 0;
 units[6] = ['21'];
 blocks[6] = ['A4'];
 comments[6] = "Id Pregunta: 6373. Examen 2006 JCYL";
 preguntaids[6] = 6373


//  Id pregunta: 44 Año de creación de pregunta: 2016
 questions[7]= "8)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[7]= new Array();
 choices[7][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[7][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[7][2] = "Son refrendados por el Rey.";
 choices[7][3] = "Son convocados por el Presidente del Gobierno.";
 answers[7] = 0;
 units[7] = ['1'];
 blocks[7] = ['A1'];
 comments[7] = "Id Pregunta: 44. Constituci&oacute;n de 1978";
 preguntaids[7] = 44


//  Id pregunta: 10408 Año de creación de pregunta: 2015
 questions[8]= "9)  Respecto a los componentes de Java Platform SE cual de las siguientes afirmaciones es falsa:";
 choices[8]= new Array();
 choices[8][0] = "El JDK contiene todos los niveles, incluyendo JRE y adem&aacute;s herramientas como compiladores y depuradores de errores (debuggers).";
 choices[8][1] = "JRE no incluye la JVM.";
 choices[8][2] = "Las Java SE APIs est&aacute;n basadas en especificaciones JSR (Java Specification Request) las cuales son aprobadas dentro del Java CommunityProcess (JCP).";
 choices[8][3] = "La JVM es propiedad de Oracle.";
 answers[8] = 1;
 units[8] = ['64'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 10408. ";
 preguntaids[8] = 10408


//  Id pregunta: 933 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;ntos fasc&iacute;culos (excluyendo el Fasc&iacute;culo 0 de Introducci&oacute;n) tiene la gu&iacute;a de comunicaci&oacute;n digital para la Administraci&oacute;n General del Estado?";
 choices[9]= new Array();
 choices[9][0] = "12";
 choices[9][1] = "11";
 choices[9][2] = "13";
 choices[9][3] = "10";
 answers[9] = 0;
 units[9] = ['125'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 933. Gu&iacute;a de Comunicaci&oacute;n Digital de la AGE";
 preguntaids[9] = 933


//  Id pregunta: 2024 Año de creación de pregunta: 2002
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes componentes, incluido en la guia de portabilidad XPG4 est&aacute; tambi&eacute;n en la XPG3?:";
 choices[10]= new Array();
 choices[10][0] = "Servicio de directorio X.500";
 choices[10][1] = "X Window System Application Interface";
 choices[10][2] = "Gateway X.400";
 choices[10][3] = "Servidor NFS";
 answers[10] = 1;
 units[10] = ['48'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 2024. ";
 preguntaids[10] = 2024


//  Id pregunta: 3365 Año de creación de pregunta: 2006
 questions[11]= "12)  La posibilidad de un sistema operativo de ejecutar diferentes partes de un programa simult&aacute;neamente, se denomina:";
 choices[11]= new Array();
 choices[11][0] = "Multitasking";
 choices[11][1] = "Multithreading";
 choices[11][2] = "Multiuser";
 choices[11][3] = "Multiprocessing";
 answers[11] = 1;
 units[11] = ['56'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 3365. ";
 preguntaids[11] = 3365


//  Id pregunta: 9624 Año de creación de pregunta: 2014
 questions[12]= "13)  &iquest;Cu&aacute;l es el &aacute;mbito de aplicaci&oacute;n del Real Decreto 1494/2007 de accesibilidad a la sociedad de la informaci&oacute;n y medios de comunicaci&oacute;n social?";
 choices[12]= new Array();
 choices[12][0] = "Los portales web de la Administraciones P&uacute;blicas";
 choices[12][1] = "Administraciones P&uacute;blicas, operadores de telecomunicaciones, prestadores de servicios de la sociedad de la informaci&oacute;n, y medios de comunicaci&oacute;n social";
 choices[12][2] = "Administraciones P&uacute;blicas y medios de comunicaci&oacute;n social, ya que los operadores de telecomunicaciones se rigen por lo dispuesto en la Ley General de Telecomunicaciones";
 choices[12][3] = "Es el mismo que se establece en la norma UNE 139803:2012";
 answers[12] = 1;
 units[12] = ['42'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 9624. Consultar Art. 2 del Real Decreto";
 preguntaids[12] = 9624


//  Id pregunta: 2984 Año de creación de pregunta: 2002
 questions[13]= "14)  Los sem&aacute;foros son una t&eacute;cnica de comunicaci&oacute;n entre procesos para:";
 choices[13]= new Array();
 choices[13][0] = "Evitar los bloqueos";
 choices[13][1] = "Ejecutar threads";
 choices[13][2] = "Permitir la exclusi&oacute;n mutua";
 choices[13][3] = "Comunicar procesos en sistemas distribuidos";
 answers[13] = 2;
 units[13] = ['55'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 2984. ";
 preguntaids[13] = 2984


//  Id pregunta: 521 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes NO es uno de los principios de la Ley de Garant&iacute;a de la Unidad de Mercado?";
 choices[14]= new Array();
 choices[14][0] = "No discriminaci&oacute;n";
 choices[14][1] = "Cooperaci&oacute;n";
 choices[14][2] = "Colaboraci&oacute;n";
 choices[14][3] = "Todos los anteriores son principios de la Ley de Garant&iacute;a de la Unidad de Mercado";
 answers[14] = 2;
 units[14] = ['23'];
 blocks[14] = ['A4'];
 comments[14] = "Id Pregunta: 521. Direcci&oacute;n p&uacute;blica";
 preguntaids[14] = 521


//  Id pregunta: 8434 Año de creación de pregunta: 2011
 questions[15]= "16)  &iquest;Cu&aacute;les de las siguientes no tendr&aacute;n la consideraci&oacute;n de copias aut&eacute;nticas seg&uacute;n la ley 18/2011?";
 choices[15]= new Array();
 choices[15][0] = "Las copias realizadas en soporte papel de documentos judiciales electr&oacute;nicos y firmados electr&oacute;nicamente por el secretario judicial que incluyan la impresi&oacute;n de un c&oacute;digo seguro de verificaci&oacute;n que permita contrastar su autenticidad";
 choices[15][1] = "Las copias realizadas por las oficinas judiciales, utilizando medios electr&oacute;nicos, de documentos emitidos originalmente por ellas en soporte papel";
 choices[15][2] = "Las copias realizadas por las oficinas judiciales, utilizando medios electr&oacute;nicos, de documentos emitidos por el interesado en soporte papel";
 choices[15][3] = "Las copias realizadas por medios electr&oacute;nicos de documentos electr&oacute;nicos emitidos por el propio interesado estando el documento electr&oacute;nico original en poder de la oficina judicial donde haya sido originado o incorporado y que la informaci&oacute;n de firma electr&oacute;nica y, en su caso, de sellado de tiempo permitan comprobar la coincidencia con dicho documento";
 answers[15] = 2;
 units[15] = ['2'];
 blocks[15] = ['A1'];
 comments[15] = "Id Pregunta: 8434. ";
 preguntaids[15] = 8434


//  Id pregunta: 5032 Año de creación de pregunta: 2002
 questions[16]= "17)  Radius permite autentificaci&oacute;n:";
 choices[16]= new Array();
 choices[16][0] = "S&oacute;lo mediante PAP";
 choices[16][1] = "S&oacute;lo mediante CHAP";
 choices[16][2] = "S&oacute;lo para dispositivos fijos";
 choices[16][3] = "Ninguna de las anteriores";
 answers[16] = 3;
 units[16] = ['108'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 5032. ";
 preguntaids[16] = 5032


//  Id pregunta: 6829 Año de creación de pregunta: 2010
 questions[17]= "18)  Seg&uacute;n el RD 951/2005 de 29 de julio, el marco general para la mejora de la calidad en la AGE incluye entre sus programas:";
 choices[17]= new Array();
 choices[17][0] = "An&aacute;lisis de la demanda y evaluaci&oacute;n de la satisfacci&oacute;n de los proveedores de los servicios p&uacute;blicos.";
 choices[17][1] = "Observatorio de la calidad de los servicios p&uacute;blicos.";
 choices[17][2] = "Quejas y reclamaciones.";
 choices[17][3] = "Evoluci&oacute;n de la calidad de las organizaciones.";
 answers[17] = 1;
 units[17] = ['19'];
 blocks[17] = ['A4'];
 comments[17] = "Id Pregunta: 6829. TIC A 2009";
 preguntaids[17] = 6829


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[18]= "19)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[18]= new Array();
 choices[18][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[18][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[18][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[18][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[18] = 0;
 units[18] = ['15'];
 blocks[18] = ['A3'];
 comments[18] = "Id Pregunta: 416. Mercado laboral";
 preguntaids[18] = 416


//  Id pregunta: 3300 Año de creación de pregunta: 2003
 questions[19]= "20)  Indicar la afirmaci&oacute;n falsa en torno a las matrices de discos RAID:";
 choices[19]= new Array();
 choices[19][0] = "Cuando se haya reemplazado el disco en el que se ha producido el error, los datos podr&aacute;n regenerarse usando la informaci&oacute;n redundante.";
 choices[19][1] = "Los archivos de datos individuales se escriben siempre en m&aacute;s de un disco de forma que, dependiendo del nivel de RAID utilizado, se puedan mejorar el rendimiento y la fiabilidad.";
 choices[19][2] = "En una soluci&oacute;n de hardware, la interfaz de controlador controla la creaci&oacute;n y regeneraci&oacute;n de la informaci&oacute;n redundante.";
 choices[19][3] = "Las estrategias para implementar una matriz redundante de discos independientes (RAID, Redundant Array oIndependent Disks) pueden utilizar soluciones de hardware o de software.";
 answers[19] = 1;
 units[19] = ['53'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 3300. ";
 preguntaids[19] = 3300


//  Id pregunta: 7379 Año de creación de pregunta: 2010
 questions[20]= "21)  En un esquema de certificaci&oacute;n y seguridad basado en clave p&uacute;blica (PKI), la 'tercera parte confiable' se denomina:";
 choices[20]= new Array();
 choices[20][0] = "Autoridad de Certificaci&oacute;n";
 choices[20][1] = "Autoridad de Registro";
 choices[20][2] = "Centro de Confianza";
 choices[20][3] = "Autoridad de Revocaci&oacute;n";
 answers[20] = 0;
 units[20] = ['78'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 7379. Examen TIC B 2009";
 preguntaids[20] = 7379


//  Id pregunta: 8121 Año de creación de pregunta: 2011
 questions[21]= "22)  &iquest;Cu&aacute;l de los siguientes elementos de VoiceXML v2.0 captura un evento de ayuda?";
 choices[21]= new Array();
 choices[21][0] = "&lt;catch&gt;";
 choices[21][1] = "&lt;help&gt;";
 choices[21][2] = "&lt;field&gt;";
 choices[21][3] = "&lt;record&gt;";
 answers[21] = 1;
 units[21] = ['81'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 8121. Examen TIC A2 2010";
 preguntaids[21] = 8121


//  Id pregunta: 319 Año de creación de pregunta: 2016
 questions[22]= "23)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[22]= new Array();
 choices[22][0] = "Las sociedades mercantiles estatales.";
 choices[22][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[22][2] = "Las respuestas a) y b) son correctas.";
 choices[22][3] = "Las respuestas a) y b) no son correctas.";
 answers[22] = 2;
 units[22] = ['11'];
 blocks[22] = ['A2'];
 comments[22] = "Id Pregunta: 319. Presupuestos generales";
 preguntaids[22] = 319


//  Id pregunta: 3785 Año de creación de pregunta: 2002
 questions[23]= "24)  El modelo de cascada&hellip;:";
 choices[23]= new Array();
 choices[23][0] = "Es una evoluci&oacute;n del modelo por etapas";
 choices[23][1] = "Se conoce como el &quot;modelo antiguo&quot;";
 choices[23][2] = "Es similar al iterativo";
 choices[23][3] = "No admite realimentaci&oacute;n entre etapas";
 answers[23] = 0;
 units[23] = ['82'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 3785. ";
 preguntaids[23] = 3785


//  Id pregunta: 8751 Año de creación de pregunta: 2013
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes no es una de las cinco funciones de la auditor&iacute;a inform&aacute;tica?";
 choices[24]= new Array();
 choices[24][0] = "Velar por la eficacia y eficiencia del sistema inform&aacute;tico";
 choices[24][1] = "Verificar el cumplimiento de las normas y est&aacute;ndares vigentes en la organizaci&oacute;n";
 choices[24][2] = "Verificar la calidad de los sistemas de informaci&oacute;n, y proponer e implantar mejoras en los mismos";
 choices[24][3] = "Supervisar los mecanismos de control interno";
 answers[24] = 2;
 units[24] = ['36'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 8751. ";
 preguntaids[24] = 8751


//  Id pregunta: 2942 Año de creación de pregunta: 2002
 questions[25]= "26)  La memoria RAM est&aacute;tica se diferencia de la RAM din&aacute;mica:";
 choices[25]= new Array();
 choices[25][0] = "En que la est&aacute;tica es m&aacute;s r&aacute;pida que la din&aacute;mica";
 choices[25][1] = "En que la est&aacute;tica es de s&oacute;lo lectura y la din&aacute;mica de lectura/escritura";
 choices[25][2] = "En que la est&aacute;tica no pierde su informaci&oacute;n si se interrumpe la alimentaci&oacute;n y la din&aacute;mica s&iacute;,";
 choices[25][3] = "En que la RAM est&aacute;tica no necesita ciclos de refresco y la din&aacute;mica s&iacute;";
 answers[25] = 3;
 units[25] = ['52'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 2942. ";
 preguntaids[25] = 2942


//  Id pregunta: 10088 Año de creación de pregunta: 2015
 questions[26]= "27)  Se&ntilde;ale cu&aacute;l de las siguientes direcciones IP puede ser asignada a un host en la siguiente subred 132.26.41.90/26:";
 choices[26]= new Array();
 choices[26][0] = "132.26.41.128";
 choices[26][1] = "132.26.41.127";
 choices[26][2] = "132.26.41.124";
 choices[26][3] = "132.26.41.55";
 answers[26] = 2;
 units[26] = ['109'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 10088. Examen TIC A2 2014";
 preguntaids[26] = 10088


//  Id pregunta: 10451 Año de creación de pregunta: 2015
 questions[27]= "28)  Sobre la criptograf&iacute;a h&iacute;brida:";
 choices[27]= new Array();
 choices[27][0] = "El transmisor cifra el mensaje con una clave sim&eacute;trica o de sesi&oacute;n, y a su vez cifra esa clave sim&eacute;trica con la clave privada del destinatario.";
 choices[27][1] = "Es utilizada por Pretty Good Privacy.";
 choices[27][2] = "Tambi&eacute;n se conocen como &ldquo;sobre digital&rdquo;.";
 choices[27][3] = "B) y C) son correctas.";
 answers[27] = 3;
 units[27] = ['76'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 10451. ";
 preguntaids[27] = 10451


//  Id pregunta: 2783 Año de creación de pregunta: 2002
 questions[28]= "29)  El protocolo de acceso al directorio en X.500 es:";
 choices[28]= new Array();
 choices[28][0] = "TCP/IP";
 choices[28][1] = "LDAP";
 choices[28][2] = "IMAP";
 choices[28][3] = "DAP";
 answers[28] = 3;
 units[28] = ['77'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 2783. ";
 preguntaids[28] = 2783


//  Id pregunta: 72 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[29]= new Array();
 choices[29][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[29][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[29][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[29][3] = "Sancionar y publicar las leyes.";
 answers[29] = 2;
 units[29] = ['1'];
 blocks[29] = ['A1'];
 comments[29] = "Id Pregunta: 72. Constituci&oacute;n de 1978";
 preguntaids[29] = 72


//  Id pregunta: 8521 Año de creación de pregunta: 2011
 questions[30]= "31)  Se&ntilde;ale la afirmaci&oacute;n incorrecta sobre M&eacute;trica";
 choices[30]= new Array();
 choices[30][0] = "Sirve tanto para desarrollo estructurado como para desarrollo orientado a objetos";
 choices[30][1] = "Est&aacute; prohibido su uso fuera de la administraci&oacute;n";
 choices[30][2] = "Los cuatro interfaces son aseguramiento de la calidad, seguridad, Gesti&oacute;n de Configuraci&oacute;n y Gesti&oacute;n de Proyectos";
 choices[30][3] = "La &uacute;ltima versi&oacute;n es la tercera";
 answers[30] = 1;
 units[30] = ['91'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 8521. ";
 preguntaids[30] = 8521


//  Id pregunta: 8034 Año de creación de pregunta: 2011
 questions[31]= "32)  Cuando un sistema se debe modificar para que contemple un cambio en las necesidades de los usuarios, se hace referencia al:";
 choices[31]= new Array();
 choices[31][0] = "Mantenimiento Correctivo.";
 choices[31][1] = "Mantenimiento Evolutivo.";
 choices[31][2] = "Mantenimiento Adaptativo.";
 choices[31][3] = "Mantenimiento Perfectivo.";
 answers[31] = 1;
 units[31] = ['91'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 8034. Examen TIC A2 2010";
 preguntaids[31] = 8034


//  Id pregunta: 1941 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qu&eacute; caracter&iacute;sticas tiene el software libre cubierto por la GPL de GNU?";
 choices[32]= new Array();
 choices[32][0] = "Su usa, redistribuci&oacute;n o modificaci&oacute;n est&aacute;n prohibidos, requieren que se solicite una autorizaci&oacute;n.";
 choices[32][1] = "Se convierte en freeware, paquetes que se pueden distribuir pero no modificar.";
 choices[32][2] = "Se puede usar con cualquier prop6sito, adaptarlo a las necesidades, mejorar el programa, distribuir copias y est&aacute; protegido con copylet.";
 choices[32][3] = "Se puede usar con cualquier prop6sito, adaptarlo a las necesidades, mejorar el programa y a partir de aqu&iacute; ya puede ser software privativo.";
 answers[32] = 2;
 units[32] = ['66'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 1941. ";
 preguntaids[32] = 1941


//  Id pregunta: 7585 Año de creación de pregunta: 2010
 questions[33]= "34)  El est&aacute;ndar del IEEE (Institute of Electrical and Electronics Engineers) que funciona bajo el est&aacute;ndar 802.11 y se aplica a la intercomunicaci&oacute;n entre puntos de acceso de distintos fabricantes, permitiendo el roaming o itinerancia de clientes es el:";
 choices[33]= new Array();
 choices[33][0] = "802.11e.";
 choices[33][1] = "802.11f.";
 choices[33][2] = "802.11h.";
 choices[33][3] = "802.11i.";
 answers[33] = 1;
 units[33] = ['108'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 7585. Map 2006";
 preguntaids[33] = 7585


//  Id pregunta: 8576 Año de creación de pregunta: 2013
 questions[34]= "35)  &iquest;C&oacute;mo es el procesamiento en un sistema SIMD?";
 choices[34]= new Array();
 choices[34][0] = "As&iacute;ncrono";
 choices[34][1] = "Desacoplado";
 choices[34][2] = "S&iacute;ncrono";
 choices[34][3] = "Ninguna respuesta es correcta";
 answers[34] = 2;
 units[34] = ['49'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 8576. ";
 preguntaids[34] = 8576


//  Id pregunta: 9546 Año de creación de pregunta: 2014
 questions[35]= "36)  En cuanto al registro de ficheros en el Registro General de Protecci&oacute;n de Datos";
 choices[35]= new Array();
 choices[35][0] = "S&oacute;lo es obligatorio en el caso de ficheros que contengan datos especialmente protegidos para ficheros de titularidad privada y en todo caso para los de titularidad p&uacute;blica";
 choices[35][1] = "S&oacute;lo es obligatorio en el caso de ficheros que contengan datos especialmente protegidos para ficheros de titularidad p&uacute;blica y en todo caso para los de titularidad privada";
 choices[35][2] = "Es obligatorio para todo fichero que contenga datos de car&aacute;cter personal";
 choices[35][3] = "No es obligatorio en ning&uacute;n caso";
 answers[35] = 2;
 units[35] = ['35'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 9546. Art&iacute;culo 55.1 y 55.2 del RD 1720/2007";
 preguntaids[35] = 9546


//  Id pregunta: 9323 Año de creación de pregunta: 2014
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes NO es un modelo de reparto del espectro utilizado por GSM (Global System for Mobile communications)?";
 choices[36]= new Array();
 choices[36][0] = "SDMA, Space Division Multiple Access o acceso m&uacute;ltiple por divisi&oacute;n delespacio.";
 choices[36][1] = "TDMA, Time Division Multiple Access, o acceso m&uacute;ltiple por divisi&oacute;n deltiempo.";
 choices[36][2] = "CDMA, Cell Division Multiple Access o acceso m&uacute;ltiple por divisi&oacute;n entreceldas.";
 choices[36][3] = "FHMA, Frequency Hops Multiple Access o acceso m&uacute;ltiple por saltos defrecuencia.";
 answers[36] = 2;
 units[36] = ['117'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 9323. ";
 preguntaids[36] = 9323


//  Id pregunta: 92 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[37]= new Array();
 choices[37][0] = "El Presidente del Senado";
 choices[37][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[37][2] = "El Presidente del Gobierno";
 choices[37][3] = "El Presidente de las Cortes Generales";
 answers[37] = 2;
 units[37] = ['1'];
 blocks[37] = ['A1'];
 comments[37] = "Id Pregunta: 92. Constituci&oacute;n de 1978";
 preguntaids[37] = 92


//  Id pregunta: 1051 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n el modelo de Mc Call, &iquest;cu&aacute;l de las siguientes NO es una medida directa aplicable a un atributo relativo a un producto?";
 choices[38]= new Array();
 choices[38][0] = "Estructuraci&oacute;n.";
 choices[38][1] = "Coste.";
 choices[38][2] = "Modularidad.";
 choices[38][3] = "Acoplamiento.";
 answers[38] = 2;
 units[38] = ['93'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 1051. ";
 preguntaids[38] = 1051


//  Id pregunta: 3278 Año de creación de pregunta: 2003
 questions[39]= "40)  Que caracter&iacute;stica de Java no es completamente cierta";
 choices[39]= new Array();
 choices[39][0] = "Es independiente del SO";
 choices[39][1] = "Es independiente de la plataforma";
 choices[39][2] = "Es independiente del HW";
 choices[39][3] = "Write once run everywhere";
 answers[39] = 3;
 units[39] = ['64'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 3278. El c&oacute;digo puede requerir alguna personalizaci&oacute;n para entorno en que se ejecute.";
 preguntaids[39] = 3278


//  Id pregunta: 7390 Año de creación de pregunta: 2010
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes opciones representa la m&aacute;scara 255.255.240.0?";
 choices[40]= new Array();
 choices[40][0] = "/20";
 choices[40][1] = "/22";
 choices[40][2] = "/24";
 choices[40][3] = "/240";
 answers[40] = 0;
 units[40] = ['109'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 7390. Examen TIC B 2009";
 preguntaids[40] = 7390


//  Id pregunta: 7987 Año de creación de pregunta: 2011
 questions[41]= "42)  &iquest;Qu&eacute; se intenta conseguir al aplicar t&eacute;cnicas de desnormalizaci&oacute;n en algunas tablas en una base de datos que fue normalizada previamente?";
 choices[41]= new Array();
 choices[41][0] = "Optimizar el desempe&ntilde;o de la base de datos.";
 choices[41][1] = "Evitar datos redundantes.";
 choices[41][2] = "Proteger la integridad de los datos.";
 choices[41][3] = "Facilitar el uso al usuano final.";
 answers[41] = 0;
 units[41] = ['91'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 7987. Examen TIC A2 2010";
 preguntaids[41] = 7987


//  Id pregunta: 10809 Año de creación de pregunta: 2015
 questions[42]= "43)  En los sistemas de representaci&oacute;n del conocimiento basados en marcos, el procedimiento de validaci&oacute;n que se ejecuta cuando se a&ntilde;ade un valor a un slot se denomina:";
 choices[42]= new Array();
 choices[42][0] = "If-added";
 choices[42][1] = "If-needed";
 choices[42][2] = "If-required";
 choices[42][3] = "Todos los anteriores son incorrectos";
 answers[42] = 0;
 units[42] = ['68'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 10809. ";
 preguntaids[42] = 10809


//  Id pregunta: 149 Año de creación de pregunta: 2016
 questions[43]= "44)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[43]= new Array();
 choices[43][0] = "Acuerdos cualificados.";
 choices[43][1] = "Acuerdos ponderados.";
 choices[43][2] = "Valoraci&oacute;n de los votos.";
 choices[43][3] = "Ponderaci&oacute;n de los votos.";
 answers[43] = 3;
 units[43] = ['5'];
 blocks[43] = ['A1'];
 comments[43] = "Id Pregunta: 149. Uni&oacute;n Europea";
 preguntaids[43] = 149


//  Id pregunta: 3824 Año de creación de pregunta: 2002
 questions[44]= "45)  En los Diagramas de Estructura de Datos se representa la visi&oacute;n de los datos que tienen las aplicaciones inform&aacute;ticas y que se denomina:";
 choices[44]= new Array();
 choices[44][0] = "Esquema Conceptual";
 choices[44][1] = "Esquema Externo";
 choices[44][2] = "Esquema Interno";
 choices[44][3] = "Esquema Funcional";
 answers[44] = 1;
 units[44] = ['61', '85', '86'];
 blocks[44] = ['B2', 'B3'];
 comments[44] = "Id Pregunta: 3824. ";
 preguntaids[44] = 3824


//  Id pregunta: 376 Año de creación de pregunta: 2016
 questions[45]= "46)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[45]= new Array();
 choices[45][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[45][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[45][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[45][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[45] = 0;
 units[45] = ['14'];
 blocks[45] = ['A3'];
 comments[45] = "Id Pregunta: 376. Pol&iacute;ticas de igualdad";
 preguntaids[45] = 376


//  Id pregunta: 9090 Año de creación de pregunta: 2014
 questions[46]= "47)  Se&ntilde;ale la respuesta INCORRECTA respecto a las funciones criptogr&aacute;ficas hash o resumen.";
 choices[46]= new Array();
 choices[46][0] = "MD5 genera un hash de 128 bits.";
 choices[46][1] = "SHA-1 genera un hash de 160 bits.";
 choices[46][2] = "Se conoce por SHA-2 a un conjunto de funciones de la familia SHA que generan hashes de longitud 224, 256, 384 y 512 bits.";
 choices[46][3] = "La longitud m&iacute;nima del hash soportada en SHA-3 es 256 bits.";
 answers[46] = 3;
 units[46] = ['76'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 9090. Examen TIC-A1 2013";
 preguntaids[46] = 9090


//  Id pregunta: 9886 Año de creación de pregunta: 2015
 questions[47]= "48)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece la obligatoriedad de relaci&oacute;n con las AAPP a trav&eacute;s de medios electr&oacute;nicos para:";
 choices[47]= new Array();
 choices[47][0] = "Personas f&iacute;sicas.";
 choices[47][1] = "Personas jur&iacute;dicas.";
 choices[47][2] = "Personas f&iacute;sicas y jur&iacute;dicas.";
 choices[47][3] = "Ninguna de las anteriores.";
 answers[47] = 1;
 units[47] = ['7', '19'];
 blocks[47] = ['A2', 'A4'];
 comments[47] = "Id Pregunta: 9886. ";
 preguntaids[47] = 9886


//  Id pregunta: 1458 Año de creación de pregunta: 2016
 questions[48]= "49)  La Subdirecci&oacute;n General de Inspecci&oacute;n de Datos de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos tiene la funci&oacute;n de comprobar la legalidad de los tratamientos de datos y:";
 choices[48]= new Array();
 choices[48][0] = "Act&uacute;a &uacute;nicamente ante una denuncia de un afectado.";
 choices[48][1] = "Act&uacute;a &uacute;nicamente ante una denuncia de un afectado o en supuestos de &quot;alarma social&quot;.";
 choices[48][2] = "En ning&uacute;n caso puede actuar de oficio.";
 choices[48][3] = "Puede actuar dentro de un plan de inspecci&oacute;n de oficio.";
 answers[48] = 3;
 units[48] = ['35'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 1458. ";
 preguntaids[48] = 1458


//  Id pregunta: 2186 Año de creación de pregunta: 2002
 questions[49]= "50)  Entre las organizaciones cuya misi&oacute;n es alertar frente a las diferentes vulnerabilidades que presenten los productos de tecnolog&iacute;as de la informaci&oacute;n, se encuentra:";
 choices[49]= new Array();
 choices[49][0] = "CNN-CERT";
 choices[49][1] = "SANS";
 choices[49][2] = "W3C";
 choices[49][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 answers[49] = 3;
 units[49] = ['48'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 2186. ";
 preguntaids[49] = 2186


//  Id pregunta: 347 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[50]= new Array();
 choices[50][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[50][1] = "Entrada en la Uni&oacute;n Europea";
 choices[50][2] = "Pactos de la Moncloa";
 choices[50][3] = "Ingreso en la ONU";
 answers[50] = 3;
 units[50] = ['12'];
 blocks[50] = ['A3'];
 comments[50] = "Id Pregunta: 347. Modelo econ&oacute;mico";
 preguntaids[50] = 347


//  Id pregunta: 217 Año de creación de pregunta: 2016
 questions[51]= "52)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[51]= new Array();
 choices[51][0] = "la Administraci&oacute;n General del Estado";
 choices[51][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[51][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[51][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[51] = 3;
 units[51] = ['7'];
 blocks[51] = ['A2'];
 comments[51] = "Id Pregunta: 217. Ley 39/2015";
 preguntaids[51] = 217


//  Id pregunta: 4408 Año de creación de pregunta: 2002
 questions[52]= "53)  Dentro de la norma X.400, &iquest; qu&eacute; se entiende por Agente de Usuario (UA)?:";
 choices[52]= new Array();
 choices[52][0] = "El usuario que puede ser una persona o programa de aplicaci&oacute;n";
 choices[52][1] = "Agente que almacena y retransmite los mensajes destinados a un usuario";
 choices[52][2] = "Agente que enruta los mensajes.";
 choices[52][3] = "Proceso de aplicaci&oacute;n que interactua con el sistema de transferencia de mensajes";
 answers[52] = 3;
 units[52] = ['116'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 4408. ";
 preguntaids[52] = 4408


//  Id pregunta: 10673 Año de creación de pregunta: 2015
 questions[53]= "54)  Seg&uacute;n el art&iacute;culo 6 de la Ley de Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas 39/2015, relativo a los registros electr&oacute;nicos de apoderamientos, los poderes inscritos en dicho registro tendr&aacute;n una validez m&aacute;xima";
 choices[53]= new Array();
 choices[53][0] = "De 5 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 choices[53][1] = "De 4 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 choices[53][2] = "De 2 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 choices[53][3] = "De 10 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 answers[53] = 0;
 units[53] = ['7'];
 blocks[53] = ['A2'];
 comments[53] = "Id Pregunta: 10673. ";
 preguntaids[53] = 10673


//  Id pregunta: 2438 Año de creación de pregunta: 2006
 questions[54]= "55)  Cu&aacute;l de los siguientes grupos no forma parte de la estructura del Sistema Europeo de Normalizaci&oacute;n:";
 choices[54]= new Array();
 choices[54][0] = "AENOR.";
 choices[54][1] = "El Comit&eacute; europeo de Normalizaci&oacute;n.";
 choices[54][2] = "Los &Oacute;rganos internacionales de Normalizaci&oacute;n.";
 choices[54][3] = "Los &Oacute;rganos europeos de Normalizaci&oacute;n.";
 answers[54] = 2;
 units[54] = ['43'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 2438. ";
 preguntaids[54] = 2438


//  Id pregunta: 9016 Año de creación de pregunta: 2014
 questions[55]= "56)  &iquest;En qu&eacute; consisten los fallos de p&aacute;gina suaves?";
 choices[55]= new Array();
 choices[55][0] = "En actualizar la tabla de p&aacute;ginas, se pide una p&aacute;gina que ya est&aacute; en memoria";
 choices[55][1] = "En traer la p&aacute;gina del disco porque no se encuentra en memoria";
 choices[55][2] = "En modificar el bit de acceso de la p&aacute;gina";
 choices[55][3] = "En modificar el bit de &quot;p&aacute;gina sucia&quot;";
 answers[55] = 0;
 units[55] = ['56'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 9016. ";
 preguntaids[55] = 9016


//  Id pregunta: 9805 Año de creación de pregunta: 2015
 questions[56]= "57)  Un plan de emergencia es un plan por el que...";
 choices[56]= new Array();
 choices[56][0] = "&hellip; se realiza una nueva puesta en marcha del negocio tras un incidente.";
 choices[56][1] = "&hellip; disminuye el riesgo de aparici&oacute;n de incidentes menores.";
 choices[56][2] = "&hellip; se fuerza la indisponibilidad de los recursos cr&iacute;ticos de informaci&oacute;n.";
 choices[56][3] = "&hellip; se prepara el entorno de continuidad en condiciones precarias.";
 answers[56] = 3;
 units[56] = ['45'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 9805. ";
 preguntaids[56] = 9805


//  Id pregunta: 31 Año de creación de pregunta: 2016
 questions[57]= "58)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[57]= new Array();
 choices[57][0] = "Decretos Legislativos.";
 choices[57][1] = "Decretos-leyes.";
 choices[57][2] = "Leyes de bases.";
 choices[57][3] = "Reales Decretos del Consejo de Ministros.";
 answers[57] = 0;
 units[57] = ['1'];
 blocks[57] = ['A1'];
 comments[57] = "Id Pregunta: 31. Constituci&oacute;n de 1978";
 preguntaids[57] = 31


//  Id pregunta: 367 Año de creación de pregunta: 2016
 questions[58]= "59)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[58]= new Array();
 choices[58][0] = "Anualmente por el Consejo de Ministros";
 choices[58][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[58][2] = "Al final de cada legislatura por el Gobierno";
 choices[58][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[58] = 0;
 units[58] = ['14'];
 blocks[58] = ['A3'];
 comments[58] = "Id Pregunta: 367. Pol&iacute;ticas de igualdad";
 preguntaids[58] = 367


//  Id pregunta: 4483 Año de creación de pregunta: 2002
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta para un sistema intermedio o encaminador (router) de una red IP?:";
 choices[59]= new Array();
 choices[59][0] = "Un encaminador o router no puede fragmentar un datagrama";
 choices[59][1] = "Puede fragmentar un datagrama si es necesario pero no puede reensamblar los fragmentos";
 choices[59][2] = "Puede tanto fragmentar un datagrama como reensamblar los fragmentos";
 choices[59][3] = "Solo puede reensamblar los paquetes TCP orientados a conexi&oacute;n";
 answers[59] = 2;
 units[59] = ['104'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 4483. ";
 preguntaids[59] = 4483


//  Id pregunta: 2952 Año de creación de pregunta: 2002
 questions[60]= "61)  La sustituci&oacute;n de una placa en caliente significa:";
 choices[60]= new Array();
 choices[60][0] = "Que el ordenador debe tener energ&iacute;a en el bus";
 choices[60][1] = "Que se puede hacer con el ordenador funcionando, sin alterar su comportamiento";
 choices[60][2] = "Que debe hacerse inmediatamente despu&eacute;s de haber sacado la defectuosa, en menos tiempo del time out de uso de la placa (normalmente menos de 2 minutos)";
 choices[60][3] = "Son falsas todas las respuestas anteriores";
 answers[60] = 1;
 units[60] = ['52'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 2952. ";
 preguntaids[60] = 2952


//  Id pregunta: 182 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Qu&eacute; pa&iacute;s entr&oacute; a formar parte de la Uni&oacute;n Europea el mismo a&ntilde;o en que formaliz&oacute; su adhesi&oacute;n nuestro pa&iacute;s?";
 choices[61]= new Array();
 choices[61][0] = "Grecia";
 choices[61][1] = "Portugal";
 choices[61][2] = "Las alternativas a) y b) son correctas";
 choices[61][3] = "Ninguno";
 answers[61] = 1;
 units[61] = ['5'];
 blocks[61] = ['A1'];
 comments[61] = "Id Pregunta: 182. Uni&oacute;n Europea";
 preguntaids[61] = 182


//  Id pregunta: 469 Año de creación de pregunta: 2016
 questions[62]= "63)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[62]= new Array();
 choices[62][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[62][1] = "La CETIC";
 choices[62][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[62][3] = "El MHFP";
 answers[62] = 0;
 units[62] = ['19'];
 blocks[62] = ['A4'];
 comments[62] = "Id Pregunta: 469. Estrategia TIC";
 preguntaids[62] = 469


//  Id pregunta: 231 Año de creación de pregunta: 2016
 questions[63]= "64)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[63]= new Array();
 choices[63][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[63][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[63][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[63][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[63] = 2;
 units[63] = ['7'];
 blocks[63] = ['A2'];
 comments[63] = "Id Pregunta: 231. Ley 39/2015";
 preguntaids[63] = 231


//  Id pregunta: 258 Año de creación de pregunta: 2016
 questions[64]= "65)  El recurso de alzada puede interponerse:";
 choices[64]= new Array();
 choices[64][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[64][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[64][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[64][3] = "Ante el Defensor del Pueblo";
 answers[64] = 1;
 units[64] = ['8'];
 blocks[64] = ['A2'];
 comments[64] = "Id Pregunta: 258. Ley 39/2015";
 preguntaids[64] = 258


//  Id pregunta: 2150 Año de creación de pregunta: 2002
 questions[65]= "66)  En general la portabilidad de aplicaciones no exige:";
 choices[65]= new Array();
 choices[65][0] = "Utilizaci&oacute;n de lenguajes de programaci&oacute;n estandarizados";
 choices[65][1] = "Limitaci&oacute;n de las llamadas al S.O. desde el marco de una API estandarizada";
 choices[65][2] = "Limitaci&oacute;n de la interacci&oacute;n directa entre los programas y los componentes f&iacute;sicos";
 choices[65][3] = "Utilizaci&oacute;n de microprocesadores de similares caracter&iacute;sticas";
 answers[65] = 3;
 units[65] = ['43'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 2150. ";
 preguntaids[65] = 2150


//  Id pregunta: 4126 Año de creación de pregunta: 2004
 questions[66]= "67)  &iquest;Cu&aacute;les son los criterios agentes en el modelo de calidad EFQM de excelencia?";
 choices[66]= new Array();
 choices[66][0] = "Liderazgo, personal, pol&iacute;tica y estrategia, colaboradores y recursos, procesos";
 choices[66][1] = "Liderazgo, personal, pol&iacute;tica y estrategia, innovaci&oacute;n y apredizaje, procesos";
 choices[66][2] = "Rendimiento, personal, pol&iacute;tica y estrategia, colaboradores y recursos, procesos";
 choices[66][3] = "Ninguna de las anteriores";
 answers[66] = 0;
 units[66] = ['92', '93'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 4126. ";
 preguntaids[66] = 4126


//  Id pregunta: 6124 Año de creación de pregunta: 2003
 questions[67]= "68)  &iquest;Cu&aacute;l es el periodo m&aacute;ximo de validez de los certificados del DNIe?:";
 choices[67]= new Array();
 choices[67][0] = "24 meses";
 choices[67][1] = "5 a&ntilde;os";
 choices[67][2] = "30 meses";
 choices[67][3] = "4 a&ntilde;os";
 answers[67] = 1;
 units[67] = ['19'];
 blocks[67] = ['A4'];
 comments[67] = "Id Pregunta: 6124. Examen TIC A1 MAP 2007";
 preguntaids[67] = 6124


//  Id pregunta: 8161 Año de creación de pregunta: 2011
 questions[68]= "69)  En el contexto de la virtualizaci&oacute;n, &iquest;qu&eacute; es el hypervisor?";
 choices[68]= new Array();
 choices[68][0] = "Un m&oacute;dulo en el sistema operativo hu&eacute;sped que monitoriza el uso de recursosdel mismo.";
 choices[68][1] = "La extensi&oacute;n del gestor de procesos del sistema operativo anfitri&oacute;n que permitecompartir memoria a los procesos de distintos sistemas operativos hu&eacute;spedes.";
 choices[68][2] = "Es la plataforma que permite ejecutar concurrentemente varios sistemasoperativos en una m&aacute;quina.";
 choices[68][3] = "Un m&oacute;dulo en el sistema operativo anfitri&oacute;n que monitoriza el uso de recursosdel mismo.";
 answers[68] = 2;
 units[68] = ['124'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 8161. Analista Ayto. Madrid 2010";
 preguntaids[68] = 8161


//  Id pregunta: 2538 Año de creación de pregunta: 2004
 questions[69]= "70)  En el entorno de la seguridad de los sistemas operativos UNIX y redes de ordenadores, se llama socket:";
 choices[69]= new Array();
 choices[69][0] = "A la combinaci&oacute;n de una direcci&oacute;n de m&aacute;quina y un puerto";
 choices[69][1] = "A la combinaci&oacute;n de una direcci&oacute;n m&aacute;quina, un puerto y un usuario autenticado de una aplicaci&oacute;n";
 choices[69][2] = "A la conexi&oacute;n entre la m&aacute;quina receptora y la emisora en una red con protocolos TCP/IP";
 choices[69][3] = "Es el protocolo (puerto 113, TCP) que utiliza un mecanismo para determinar nombres de usuarios en conexiones TCP. Trabaja conjuntamente con procesos del tipo &quot;identd&quot; y programas &quot;TCP Wrappers&quot;";
 answers[69] = 0;
 units[69] = ['57'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 2538. ";
 preguntaids[69] = 2538


//  Id pregunta: 7760 Año de creación de pregunta: 2010
 questions[70]= "71)  BSA es:";
 choices[70]= new Array();
 choices[70][0] = "Una organizaci&oacute;n que mide la accesibilidad de las Web.";
 choices[70][1] = "Una organizaci&oacute;n que audita las comunicaciones y el flujo de informaci&oacute;n eficiente.";
 choices[70][2] = "Una organizaci&oacute;n que intenta controlar la pirater&iacute;a de software.";
 choices[70][3] = "Una organizaci&oacute;n que audita la seguridad de datos de un CPD de respaldo.";
 answers[70] = 2;
 units[70] = ['41'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 7760. ";
 preguntaids[70] = 7760


//  Id pregunta: 8644 Año de creación de pregunta: 2013
 questions[71]= "72)  La protecci&oacute;n de un programa de ordenador, &iquest;se extiende al c&oacute;digo objeto?";
 choices[71]= new Array();
 choices[71][0] = "No, puesto que no es una creaci&oacute;n intelectual, sino una compilaci&oacute;n autom&aacute;tica de la m&aacute;quina.";
 choices[71][1] = "No, puesto que es algo que no se puede entender, as&iacute; que no se puede proteger.";
 choices[71][2] = "Si, en todos los casos";
 choices[71][3] = "Todas las anteriores son falsas";
 answers[71] = 2;
 units[71] = ['41'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 8644. ";
 preguntaids[71] = 8644


//  Id pregunta: 9290 Año de creación de pregunta: 2014
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes conceptos NO se puede representar a trav&eacute;s de un diagrama de flujo de datos?";
 choices[72]= new Array();
 choices[72][0] = "La persistencia";
 choices[72][1] = "Los procesos de transformaci&oacute;n.";
 choices[72][2] = "El flujo de la informaci&oacute;n.";
 choices[72][3] = "La herencia";
 answers[72] = 3;
 units[72] = ['85', '86'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 9290. Examen TIC A2 2013. Promocion interna";
 preguntaids[72] = 9290


//  Id pregunta: 7363 Año de creación de pregunta: 2010
 questions[73]= "74)  Se&ntilde;ale cu&aacute;l de las siguientes distribuciones no se basa en Debian:";
 choices[73]= new Array();
 choices[73][0] = "Ubuntu";
 choices[73][1] = "Knoppix";
 choices[73][2] = "Fedora";
 choices[73][3] = "Guadalinex";
 answers[73] = 2;
 units[73] = ['57'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 7363. Examen TIC B 2009";
 preguntaids[73] = 7363


//  Id pregunta: 3662 Año de creación de pregunta: 2002
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes expresiones est&aacute; de acuerdo con los actuales criterios de calidad del software de gesti&oacute;n?:";
 choices[74]= new Array();
 choices[74][0] = "La funci&oacute;n 'calidad' debe ser desempe&ntilde;ada por un equipo independiente de especialistas";
 choices[74][1] = "El coste de la calidad debe ser equilibrado con el coste de la 'no-calidad'";
 choices[74][2] = "La funci&oacute;n 'calidad' debe garantizar la producci&oacute;n de 'software cero-defectos'";
 choices[74][3] = "Todas las anteriores respuestas son correctas";
 answers[74] = 1;
 units[74] = ['93'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 3662. ";
 preguntaids[74] = 3662


