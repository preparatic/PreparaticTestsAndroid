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
//  Id pregunta: 9295 Año de creación de pregunta: 2014
 questions[0]= "1)  Un almac&eacute;n de datos (Data Warehouse) NO se caracteriza por ser:";
 choices[0]= new Array();
 choices[0][0] = "Integrado, los datos en el almac&eacute;n de datos deben integrarse en una estructura consistente.";
 choices[0][1] = "Orientado por temas, el almac&eacute;n de datos est&aacute; organizado de acuerdo con los temas m&aacute;s importantes para la organizaci&oacute;n";
 choices[0][2] = "Variable en el tiempo, los datos en el almac&eacute;n de datos siempre se cargan con una referencia temporal bajo la que son v&aacute;lidos.";
 choices[0][3] = "Vol&aacute;til, los datos en el almac&eacute;n de datos son le&iacute;dos, actualizados y eliminados.";
 answers[0] = 3;
 units[0] = ['72'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 9295. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[0] = 9295


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[1]= "2)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[1]= new Array();
 choices[1][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[1][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[1][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[1][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[1] = 2;
 units[1] = ['1'];
 blocks[1] = ['A1'];
 comments[1] = "Id Pregunta: 17. Constituci&oacute;n de 1978";
 preguntaids[1] = 17


//  Id pregunta: 8427 Año de creación de pregunta: 2011
 questions[2]= "3)  De acuerdo con la ley 18/2011, &iquest;cu&aacute;l no es un derecho de los profesionales de la justicia en relaci&oacute;n con la utilizaci&oacute;n de los medios electr&oacute;nicos en la actividad judicial?";
 choices[2]= new Array();
 choices[2][0] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que sean representantes procesales de la parte personada";
 choices[2][1] = "A utilizar los sistemas de firma electr&oacute;nica del Documento Nacional de Identidad o cualquier otro reconocido, siempre que dicho sistema le identifique de forma un&iacute;voca como profesional";
 choices[2][2] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que acrediten inter&eacute;s leg&iacute;timo";
 choices[2][3] = "Todos los anteriores lo son";
 answers[2] = 3;
 units[2] = ['2'];
 blocks[2] = ['A1'];
 comments[2] = "Id Pregunta: 8427. ";
 preguntaids[2] = 8427


//  Id pregunta: 3184 Año de creación de pregunta: 2003
 questions[3]= "4)  &iquest;Sobre qu&eacute; versa el est&aacute;ndar PKCS7 de criptograf&iacute;a?";
 choices[3]= new Array();
 choices[3][0] = "Formato de certificado digital";
 choices[3][1] = "Formato de sobre digital";
 choices[3][2] = "Cifrado con clave privada";
 choices[3][3] = "Sintaxis de la clave privada";
 answers[3] = 1;
 units[3] = ['78'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 3184. ";
 preguntaids[3] = 3184


//  Id pregunta: 2645 Año de creación de pregunta: 2002
 questions[4]= "5)  &iquest;Cu&aacute;l no es una caracter&iacute;stica b&aacute;sica de los sistemas OLAP?";
 choices[4]= new Array();
 choices[4][0] = "Permite actualizar la informaci&oacute;n de manera r&aacute;pida y f&aacute;cil.";
 choices[4][1] = "Permiten ahondar en la jerarqu&iacute;a de los datos para acceder a los de m&aacute;s bajo nivel.";
 choices[4][2] = "Ofrecen una visi&oacute;n m&uacute;ltidimensional y jerarquizada de los datos.";
 choices[4][3] = "Son capaces de analizar tendencias a lo largo de per&iacute;odos de tiempo.";
 answers[4] = 0;
 units[4] = ['72'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 2645. ";
 preguntaids[4] = 2645


//  Id pregunta: 9718 Año de creación de pregunta: 2014
 questions[5]= "6)  &iquest;Qu&eacute; estandar internacional especifica clases de cableado de proposito general?";
 choices[5]= new Array();
 choices[5][0] = "ISO/IEC 11801";
 choices[5][1] = "EN 50173";
 choices[5][2] = "ISO/IEC 18101";
 choices[5][3] = "EN 50137";
 answers[5] = 0;
 units[5] = ['104'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 9718. ";
 preguntaids[5] = 9718


//  Id pregunta: 1036 Año de creación de pregunta: 2016
 questions[6]= "7)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[6]= new Array();
 choices[6][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[6][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[6][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[6][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[6] = 1;
 units[6] = ['4', '7', '8', '9'];
 blocks[6] = ['A1', 'A2'];
 comments[6] = "Id Pregunta: 1036. Ley 40/2015";
 preguntaids[6] = 1036


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[7]= "8)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[7]= new Array();
 choices[7][0] = "Versi&oacute;n digital prioritaria.";
 choices[7][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[7][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[7][3] = "Apertura y transparencia.";
 answers[7] = 0;
 units[7] = ['5'];
 blocks[7] = ['A1'];
 comments[7] = "Id Pregunta: 109. Uni&oacute;n Europea";
 preguntaids[7] = 109


//  Id pregunta: 6888 Año de creación de pregunta: 2010
 questions[8]= "9)  Por v&iacute;a electr&oacute;nica en Espa&ntilde;a, pueden celebrarse los siguientes tipos de contratos:";
 choices[8]= new Array();
 choices[8][0] = "Todos.";
 choices[8][1] = "Ninguno.";
 choices[8][2] = "Todos excepto los relativos al derecho de familia y sucesiones (adopciones, matrimonio, testamento).";
 choices[8][3] = "S&oacute;lo los relativos a comercio electr&oacute;nico.";
 answers[8] = 2;
 units[8] = ['19'];
 blocks[8] = ['A4'];
 comments[8] = "Id Pregunta: 6888. TIC A 2009";
 preguntaids[8] = 6888


//  Id pregunta: 5535 Año de creación de pregunta: 2007
 questions[9]= "10)  El Ciclo de Vida del software es:";
 choices[9]= new Array();
 choices[9][0] = "Un patr&oacute;n del comportamiento de los dise&ntilde;adores.";
 choices[9][1] = "Un modelo del proceso de construcci&oacute;n del Software";
 choices[9][2] = "Un modelo de especificaciones establecido por el analista.";
 choices[9][3] = "Un esquema para integrar el sistema completo.";
 answers[9] = 1;
 units[9] = ['82'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 5535. ";
 preguntaids[9] = 5535


//  Id pregunta: 8971 Año de creación de pregunta: 2013
 questions[10]= "11)  Se&ntilde;ale la afimaci&oacute;n correcta respecto al protocolo SIP";
 choices[10]= new Array();
 choices[10][0] = "Proporciona servicios que implementan modelos de petici&oacute;n-respuesta";
 choices[10][1] = "Proporciona primitivas que implementan modelos de petici&oacute;n-respuesta";
 choices[10][2] = "Sobre SIP se monta RTP que se utiliza para negociar las capacidades de la comunicaci&oacute;n";
 choices[10][3] = "Los elementos involucrados en la videoconferencia est&aacute;n representados por URLs";
 answers[10] = 1;
 units[10] = ['122'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 8971. ";
 preguntaids[10] = 8971


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[11]= "12)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[11]= new Array();
 choices[11][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[11][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[11][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[11][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[11] = 1;
 units[11] = ['7'];
 blocks[11] = ['A2'];
 comments[11] = "Id Pregunta: 232. Ley 39/2015";
 preguntaids[11] = 232


//  Id pregunta: 941 Año de creación de pregunta: 2016
 questions[12]= "13)  Cu&aacute;les son las partes que componen la Gu&iacute;a de Comunicaci&oacute;n Digital de la AGE:";
 choices[12]= new Array();
 choices[12][0] = "Son 9 fasc&iacute;culos divididos en tres partes: Requisitos antes de tener el sitio web, Contenidos del Sitio Web y Mejora Continua del Sitio Web.";
 choices[12][1] = "Son 9 fasc&iacute;culos divididos en tres partes: Accesibilidad, Buenas Pr&aacute;cticas y Aspectos Generales.";
 choices[12][2] = "Son 9 fasc&iacute;culos divididos en tres partes: Tecnolog&iacute;as, Herramientas y Medios Alternativos.";
 choices[12][3] = "Son 9 fasc&iacute;culos divididos en tres partes: Concepci&oacute;n del dise&ntilde;o, Creaci&oacute;n de la p&aacute;gina web, y Mantenimiento de los contenidos.";
 answers[12] = 0;
 units[12] = ['125'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 941. Gu&iacute;a de Comunicaci&oacute;n Digital de la AGE";
 preguntaids[12] = 941


//  Id pregunta: 10618 Año de creación de pregunta: 2015
 questions[13]= "14)  Seg&uacute;n la Ley 9/2014, la regulaci&oacute;n del procedimiento para la determinaci&oacute;n, el control y la inspecci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica corresponden:";
 choices[13]= new Array();
 choices[13][0] = "Al Ministerio de Energia, Turismo y Agenda Digital.";
 choices[13][1] = "A la CNMC.";
 choices[13][2] = "Al Gobierno.";
 choices[13][3] = "Ninguno de los anteriores.";
 answers[13] = 2;
 units[13] = ['121'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 10618. Articulo 61";
 preguntaids[13] = 10618


//  Id pregunta: 2475 Año de creación de pregunta: 2009
 questions[14]= "15)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, se deber&aacute;n retener los datos de conexi&oacute;n y tr&aacute;fico por un periodo m&aacute;ximo de:";
 choices[14]= new Array();
 choices[14][0] = "3 meses";
 choices[14][1] = "6 meses";
 choices[14][2] = "12 meses";
 choices[14][3] = "2 a&ntilde;os";
 answers[14] = 3;
 units[14] = ['19'];
 blocks[14] = ['A4'];
 comments[14] = "Id Pregunta: 2475. ";
 preguntaids[14] = 2475


//  Id pregunta: 10589 Año de creación de pregunta: 2015
 questions[15]= "16)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; fase del ciclo de vida del servicio decide qu&eacute; servicios deber&iacute;an ser ofrecidos y a qui&eacute;nes se les va a ofrecer?";
 choices[15]= new Array();
 choices[15][0] = "Mejora continua del servicio";
 choices[15][1] = "Operaci&oacute;n del servicio";
 choices[15][2] = "Dise&ntilde;o del servicio";
 choices[15][3] = "Estrategia del servicio";
 answers[15] = 3;
 units[15] = ['101'];
 blocks[15] = ['B3'];
 comments[15] = "Id Pregunta: 10589. ";
 preguntaids[15] = 10589


//  Id pregunta: 1791 Año de creación de pregunta: 2016
 questions[16]= "17)  Se&ntilde;ale la respuesta correcta. Con respecto a la Sede Electr&oacute;nica podemos decir qu&eacute;:";
 choices[16]= new Array();
 choices[16][0] = "La Sede Electr&oacute;nica debe estar accesible desde la p&aacute;gina principal de la web institucional de la Administraci&oacute;n P&uacute;blica correspondiente.";
 choices[16][1] = "En una Administraci&oacute;n P&uacute;blica cada &oacute;rgano de direcci&oacute;n (Ministerio, Conseller&iacute;a, Consejer&iacute;a) debe tener su propia sede electr&oacute;nica.";
 choices[16][2] = "Una vez constituida la sede electr&oacute;nica, los tablones de anuncios pueden ser sustituidos o complementados por la publicaci&oacute;n electr&oacute;nica en sede.";
 choices[16][3] = "Debe facilitar informaci&oacute;n de las oficinas de registro y atenci&oacute;n al ciudadano, de los &oacute;rganos de gobierno y el directorio de personal de la Administraci&oacute;n P&uacute;blica.";
 answers[16] = 2;
 units[16] = ['7'];
 blocks[16] = ['A2'];
 comments[16] = "Id Pregunta: 1791. ";
 preguntaids[16] = 1791


//  Id pregunta: 5048 Año de creación de pregunta: 2002
 questions[17]= "18)  Se pueden se&ntilde;alar como ventajas del EDI (Electronic Data Interchange):";
 choices[17]= new Array();
 choices[17][0] = "Reduce los gastos de tratamiento de una transacci&oacute;n, as&iacute; como los de transmisi&oacute;n de la misma";
 choices[17][1] = "Se puede aplicar a todo tipo de sectores de la industria, pero dentro de un pa&iacute;s";
 choices[17][2] = "No existen condicionantes legales para su implantaci&oacute;n";
 choices[17][3] = "Se trata de un sistema de futuro";
 answers[17] = 0;
 units[17] = ['103'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 5048. ";
 preguntaids[17] = 5048


//  Id pregunta: 209 Año de creación de pregunta: 2016
 questions[18]= "19)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[18]= new Array();
 choices[18][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[18][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[18][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[18][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[18] = 3;
 units[18] = ['7'];
 blocks[18] = ['A2'];
 comments[18] = "Id Pregunta: 209. Ley 39/2015";
 preguntaids[18] = 209


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[19]= "20)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[19]= new Array();
 choices[19][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[19][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[19][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[19][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[19] = 2;
 units[19] = ['1'];
 blocks[19] = ['A1'];
 comments[19] = "Id Pregunta: 0. Constituci&oacute;n de 1978";
 preguntaids[19] = 0


//  Id pregunta: 9814 Año de creación de pregunta: 2015
 questions[20]= "21)  Para que un organismo utilice la pasarela de pagos de la AEAT:";
 choices[20]= new Array();
 choices[20][0] = "Necesita un certificado de sede electr&oacute;nica.";
 choices[20][1] = "Debe implementar una interfaz REST.";
 choices[20][2] = "Debe poseer un certificado de persona f&iacute;sica, jur&iacute;dica o de componente.";
 choices[20][3] = "La DTIC recomienda que cada organismo implemente su propia pasarela de pagos.";
 answers[20] = 2;
 units[20] = ['75'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 9814. ";
 preguntaids[20] = 9814


//  Id pregunta: 3679 Año de creación de pregunta: 2002
 questions[21]= "22)  &iquest;Cual de los siguientes no es uno de los 10 items de riesgo del software m&aacute;s importantes que se consideran en el modelo en espiral?:";
 choices[21]= new Array();
 choices[21][0] = "Escasez de personal";
 choices[21][1] = "Calendario no realista";
 choices[21][2] = "Componentes hardware no tiene calidad adecuada";
 choices[21][3] = "Componentes del exterior no tienen calidad adecuada";
 answers[21] = 2;
 units[21] = ['82'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 3679. ";
 preguntaids[21] = 3679


//  Id pregunta: 3665 Año de creación de pregunta: 2002
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes reglas no es una regla de construcci&oacute;n de flujos en un DFD?:";
 choices[22]= new Array();
 choices[22][0] = "Activa procesos";
 choices[22][1] = "Conecta a los dem&aacute;s elementos de un DFD";
 choices[22][2] = "El flujo no puede crear ni destruir datos";
 choices[22][3] = "Se puede asimilar el flujo de datos a una tuber&iacute;a por la que transita informaci&oacute;n";
 answers[22] = 0;
 units[22] = ['86'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 3665. ";
 preguntaids[22] = 3665


//  Id pregunta: 4201 Año de creación de pregunta: 2006
 questions[23]= "24)  Se&ntilde;ale la afirmaci&oacute;n cierta sobre los prototipos...";
 choices[23]= new Array();
 choices[23][0] = "Son un modelo a escala o facs&iacute;mil de lo real que lleva a cabo la totalidad de las funciones necesarias del sistema final.";
 choices[23][1] = "En la fase de dise&ntilde;o se utiliza para definir los requerimientos del usuario.";
 choices[23][2] = "Se debe definir su objetivo a medida que se desarrolla.";
 choices[23][3] = "Los prototipos de pantalla permiten evaluar la posici&oacute;n de informaci&oacute;n sobre la pantalla.";
 answers[23] = 3;
 units[23] = ['90'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 4201. ";
 preguntaids[23] = 4201


//  Id pregunta: 4017 Año de creación de pregunta: 2004
 questions[24]= "25)  Las actividades de la interfaz de Gesti&oacute;n de Proyectos en METRICA V3, se clasifican en:";
 choices[24]= new Array();
 choices[24][0] = "Actividades de inicio; actividades de seguimiento y control; actividades de finalizaci&oacute;n";
 choices[24][1] = "Actividades de estimaci&oacute;n; actividades de dise&ntilde;o y construcci&oacute;n; actividades de presentaci&oacute;n";
 choices[24][2] = "Actividades de planificaci&oacute;n, actividades de organizaci&oacute;n; actividades de evaluaci&oacute;n";
 choices[24][3] = "Actividades de planificaci&oacute;n, actividades de estudio, actividades de organizaci&oacute;n, actividades de evaluaci&oacute;n";
 answers[24] = 0;
 units[24] = ['91'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 4017. Pregunta Junta Andalucia - A";
 preguntaids[24] = 4017


//  Id pregunta: 10845 Año de creación de pregunta: 2015
 questions[25]= "26)  Se&ntilde;ale la frase incorrecta:";
 choices[25]= new Array();
 choices[25][0] = "La versi&oacute;n 3 de SNMP proporciona mejoras en materia de seguridad con respecto a la versi&oacute;n 2.";
 choices[25][1] = "SNMP es un protocolo de la capa de aplicaci&oacute;n.";
 choices[25][2] = "Las versiones 1, 2 y 3 son compatibles entre s&iacute;.";
 choices[25][3] = "Los mensajes GetNextRequest se utilizan para recorrer una tabla de objetos.";
 answers[25] = 2;
 units[25] = ['114'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 10845. ";
 preguntaids[25] = 10845


//  Id pregunta: 10973 Año de creación de pregunta: 2015
 questions[26]= "27)  Seg&uacute;n la ley 19/2013 de transparencia:";
 choices[26]= new Array();
 choices[26][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado por un per&iacute;odo renovable de cinco a&ntilde;os mediante Real Decreto.";
 choices[26][1] = "El Consejo de Transparencia y Buen Gobierno deber&aacute; elevar anualmente al Congreso de los Diputados una memoria sobre el desarrollo de sus actividades.";
 choices[26][2] = "La condici&oacute;n de miembro de la Comisi&oacute;n del Consejo de Transparencia y Buen Gobierno no exigir&aacute; dedicaci&oacute;n exclusiva ni dar&aacute; derecho a remuneraci&oacute;n.";
 choices[26][3] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n leve a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 answers[26] = 2;
 units[26] = ['22'];
 blocks[26] = ['A4'];
 comments[26] = "Id Pregunta: 10973. ";
 preguntaids[26] = 10973


//  Id pregunta: 6104 Año de creación de pregunta: 2003
 questions[27]= "28)  &iquest;Cual de los siguientes es el m&eacute;todo de ordenaci&oacute;n de alternativas disponible en el sistema SSD-AAPP v.4.01?";
 choices[27]= new Array();
 choices[27][0] = "Ponderaci&oacute;n Lineal";
 choices[27][1] = "Permutaci&oacute;n";
 choices[27][2] = "Prometh&eacute;e";
 choices[27][3] = "Distancia al Ideal (TOPSIS)";
 answers[27] = 0;
 units[27] = ['38'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 6104. Examen TIC A1 MAP 2007";
 preguntaids[27] = 6104


//  Id pregunta: 953 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;C&uacute;al es la afirmaci&oacute;n incorrecta?";
 choices[28]= new Array();
 choices[28][0] = "El sprint release es aquel que implementa las tareas necesarias para poner el sistema en producci&oacute;n";
 choices[28][1] = "El sprint release es el &uacute;ltimo sprint de la metodolog&iacute;a SCRUM";
 choices[28][2] = "En el sprint release se pueden llevan a cabo tareas relacionados con el despliegue y generaci&oacute;n de scripts de recuperaci&oacute;n del sistema";
 choices[28][3] = "En el sprint release se pueden llevar a cabo tareas relacionados con la documentaci&oacute;n, pruebas de carga, y tareas relacionadas con las bases de datos en producci&oacute;n.";
 answers[28] = 1;
 units[28] = ['34', '84'];
 blocks[28] = ['B1', 'B3'];
 comments[28] = "Id Pregunta: 953. Metodologias &aacute;giles";
 preguntaids[28] = 953


//  Id pregunta: 8964 Año de creación de pregunta: 2013
 questions[29]= "30)  Indique la afirmaci&oacute;n falsa:";
 choices[29]= new Array();
 choices[29][0] = "JAXP es una API de Java que permite el procesado de documentos XML";
 choices[29][1] = "JAXR es una API de Java que facilita el acceso a UDDI o ebXML";
 choices[29][2] = "SAAJ es una API de Java que permite generar y recoger mensajes SOAP";
 choices[29][3] = "JAX-RPC es una API Java que permite invocar objetos ORBA";
 answers[29] = 3;
 units[29] = ['64'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 8964. ";
 preguntaids[29] = 8964


//  Id pregunta: 4230 Año de creación de pregunta: 2006
 questions[30]= "31)  El modelo de Jelinsi-Moranda se encuadra dentro de las m&eacute;tricas de:";
 choices[30]= new Array();
 choices[30][0] = "Productividad";
 choices[30][1] = "Fiabilidad";
 choices[30][2] = "Factores de calidad";
 choices[30][3] = "Complejidad";
 answers[30] = 1;
 units[30] = ['93'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 4230. ";
 preguntaids[30] = 4230


//  Id pregunta: 119 Año de creación de pregunta: 2016
 questions[31]= "32)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[31]= new Array();
 choices[31][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[31][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[31][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[31][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[31] = 1;
 units[31] = ['5'];
 blocks[31] = ['A1'];
 comments[31] = "Id Pregunta: 119. Uni&oacute;n Europea";
 preguntaids[31] = 119


//  Id pregunta: 10745 Año de creación de pregunta: 2015
 questions[32]= "33)  El n&uacute;mero de l&iacute;neas de c&oacute;digo fuente de una aplicaci&oacute;n es una m&eacute;trica de estimaci&oacute;n del software de:";
 choices[32]= new Array();
 choices[32][0] = "Tama&ntilde;o, directa y objetiva.";
 choices[32][1] = "Producitividad, complejidad y objetiva.";
 choices[32][2] = "Complejidad y tama&ntilde;o.";
 choices[32][3] = "Tama&ntilde;o, directa y subjetiva.";
 answers[32] = 0;
 units[32] = ['94'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 10745. ";
 preguntaids[32] = 10745


//  Id pregunta: 329 Año de creación de pregunta: 2016
 questions[33]= "34)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[33]= new Array();
 choices[33][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[33][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[33][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[33][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[33] = 0;
 units[33] = ['12'];
 blocks[33] = ['A3'];
 comments[33] = "Id Pregunta: 329. Modelo econ&oacute;mico";
 preguntaids[33] = 329


//  Id pregunta: 8301 Año de creación de pregunta: 2011
 questions[34]= "35)  &iquest;En qu&eacute; sentencia de SQL, OLAP proporciona mayor velocidad de procesamiento?";
 choices[34]= new Array();
 choices[34][0] = "INSERT";
 choices[34][1] = "UPDATE";
 choices[34][2] = "DELETE";
 choices[34][3] = "SELECT";
 answers[34] = 3;
 units[34] = ['61'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 8301. Examen UPM A2 2011";
 preguntaids[34] = 8301


//  Id pregunta: 4926 Año de creación de pregunta: 2002
 questions[35]= "36)  La tecnolog&iacute;a que pretende extender la banda ancha a los hogares usando fibra se denomina:";
 choices[35]= new Array();
 choices[35][0] = "Home Fiber";
 choices[35][1] = "City fiber";
 choices[35][2] = "Instant Fiber";
 choices[35][3] = "Fiber To The Home";
 answers[35] = 3;
 units[35] = ['112'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 4926. ";
 preguntaids[35] = 4926


//  Id pregunta: 6477 Año de creación de pregunta: 2003
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes plataformas de e-learning NO es libre?";
 choices[36]= new Array();
 choices[36][0] = "Atutor";
 choices[36][1] = "ILIAS";
 choices[36][2] = "LON-CAPA";
 choices[36][3] = "Blackboard";
 answers[36] = 3;
 units[36] = ['70'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 6477. ";
 preguntaids[36] = 6477


//  Id pregunta: 3485 Año de creación de pregunta: 2006
 questions[37]= "38)  La tecnolog&iacute;a utilizada para medir y analizar caracter&iacute;sticas del cuerpo humano con prop&oacute;sitos de autenticaci&oacute;n se llama";
 choices[37]= new Array();
 choices[37][0] = "Huella";
 choices[37][1] = "Biom&eacute;trica";
 choices[37][2] = "JBOD";
 choices[37][3] = "Antropomorfismo";
 answers[37] = 1;
 units[37] = ['78'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 3485. ";
 preguntaids[37] = 3485


//  Id pregunta: 9973 Año de creación de pregunta: 2015
 questions[38]= "39)  &iquest;En qu&eacute; fecha se ha aprobado la Estrategia TIC de la AGE por el Consejo de Ministros?";
 choices[38]= new Array();
 choices[38][0] = "Septiembre de 2014";
 choices[38][1] = "Diciembre de 2014";
 choices[38][2] = "Agosto de 2015";
 choices[38][3] = "Octubre de 2015";
 answers[38] = 3;
 units[38] = ['26'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 9973. ";
 preguntaids[38] = 9973


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[39]= "40)  No es una causa de inadmisi&oacute;n de un recurso administrativo:";
 choices[39]= new Array();
 choices[39][0] = "Carecer de legitimaci&oacute;n el recurrente";
 choices[39][1] = "Tratarse de un acto no susceptible de recurso";
 choices[39][2] = "La ausencia de calificaci&oacute;n del recurso por parte del recurrente";
 choices[39][3] = "Todas ellas son causas de inadmisi&oacute;n de un recurso administrativo";
 answers[39] = 2;
 units[39] = ['8'];
 blocks[39] = ['A2'];
 comments[39] = "Id Pregunta: 257. Ley 39/2015";
 preguntaids[39] = 257


//  Id pregunta: 6541 Año de creación de pregunta: 2003
 questions[40]= "41)  Seg&uacute;n el RD 1720/2007, a partir de que nivel de seguridad deber&aacute; conservarse una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n, en un lugar diferente de aquel en que se encuentran los equipos inform&aacute;ticas que los tratan:";
 choices[40]= new Array();
 choices[40][0] = "nivel b&aacute;sico";
 choices[40][1] = "nivel medio";
 choices[40][2] = "nivel alto";
 choices[40][3] = "En ningun caso";
 answers[40] = 2;
 units[40] = ['35'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 6541. ";
 preguntaids[40] = 6541


//  Id pregunta: 8692 Año de creación de pregunta: 2013
 questions[41]= "42)  &iquest;C&oacute;mo divide el software Ubuntu?";
 choices[41]= new Array();
 choices[41][0] = "En secciones llamadas componentes.";
 choices[41][1] = "Los componentes principales son main, restricted, universe, commercial y multiverse.";
 choices[41][2] = "El componente multiverse contiene los paquetes sin soporte debido a que no cumple los requisitos de Software Libre.";
 choices[41][3] = "Todas son correctas.";
 answers[41] = 3;
 units[41] = ['57'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 8692. ";
 preguntaids[41] = 8692


//  Id pregunta: 8431 Año de creación de pregunta: 2011
 questions[42]= "43)  Las sedes judiciales electr&oacute;nicas no est&aacute;n obligadas a poner a disposici&oacute;n de los ciudadanos y profesionales el servicio:";
 choices[42]= new Array();
 choices[42][0] = "Carta de servicios electr&oacute;nicos";
 choices[42][1] = "Carta de servicios";
 choices[42][2] = "Carta de Derechos de los Ciudadanos ante la Justicia";
 choices[42][3] = "Debe disponer de todos los anteriores";
 answers[42] = 3;
 units[42] = ['2'];
 blocks[42] = ['A1'];
 comments[42] = "Id Pregunta: 8431. ";
 preguntaids[42] = 8431


//  Id pregunta: 7599 Año de creación de pregunta: 2010
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al lenguaje XHTML (eXtensible Hypertext Markup Language) NO es cierta?";
 choices[43]= new Array();
 choices[43][0] = "Todos los elementos deben tener etiquetas de cierre y &eacute;stas deben estar correctamente anidadas.";
 choices[43][1] = "Todos los documentos XHTML deben usar min&uacute;sculas para los elementos y nombres de atributo HTML.";
 choices[43][2] = "Todos los valores de los atributos deben expresarse utilizando comillas excepto los valores num&eacute;ricos, en cuyo caso pueden omitirse.";
 choices[43][3] = "Los documentos XHTML pueden usar aplicaciones de tipo Script o Applet basadas en HTML-DOM (Document Object Model) o en XML-DOM.";
 answers[43] = 2;
 units[43] = ['74'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 7599. Map 2006";
 preguntaids[43] = 7599


//  Id pregunta: 9 Año de creación de pregunta: 2016
 questions[44]= "45)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[44]= new Array();
 choices[44][0] = "l Consejo General del Poder Judicial";
 choices[44][1] = "El pleno de Tribunal Constitucional";
 choices[44][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[44][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[44] = 3;
 units[44] = ['1'];
 blocks[44] = ['A1'];
 comments[44] = "Id Pregunta: 9. Constituci&oacute;n de 1978";
 preguntaids[44] = 9


//  Id pregunta: 10972 Año de creación de pregunta: 2015
 questions[45]= "46)  Seg&uacute;n la ley 19/2013 de transparencia, y en lo referente a la composici&oacute;n de la Comisi&oacute;n de Transparencia y Buen Gobierno, se&ntilde;ale la FALSA:";
 choices[45]= new Array();
 choices[45][0] = "Un Senador";
 choices[45][1] = "Un representante de la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias.";
 choices[45][2] = "Un representante de la Autoridad Independiente de Responsabilidad Fiscal";
 choices[45][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[45] = 1;
 units[45] = ['22'];
 blocks[45] = ['A4'];
 comments[45] = "Id Pregunta: 10972. ";
 preguntaids[45] = 10972


//  Id pregunta: 5973 Año de creación de pregunta: 2007
 questions[46]= "47)  En el BGP (Border Gateway Protocol), se define como atributo obligatorio:";
 choices[46]= new Array();
 choices[46][0] = "La preferencia local";
 choices[46][1] = "El agregado at&oacute;mico";
 choices[46][2] = "El pr&oacute;ximo salto";
 choices[46][3] = "El agregador";
 answers[46] = 2;
 units[46] = ['102'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 5973. ";
 preguntaids[46] = 5973


//  Id pregunta: 8406 Año de creación de pregunta: 2011
 questions[47]= "48)  &iquest;C&oacute;mo se expresan habitualmente las direcciones MAC?:";
 choices[47]= new Array();
 choices[47][0] = "En notaci&oacute;n decimal.";
 choices[47][1] = "En notaci&oacute;n hexadecimal.";
 choices[47][2] = "En notaci&oacute;n octal.";
 choices[47][3] = "En notaci&oacute;n binaria";
 answers[47] = 1;
 units[47] = ['112'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 8406. Operador Ayto. Madrid 2010";
 preguntaids[47] = 8406


//  Id pregunta: 1051 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n el modelo de Mc Call, &iquest;cu&aacute;l de las siguientes NO es una medida directa aplicable a un atributo relativo a un producto?";
 choices[48]= new Array();
 choices[48][0] = "Estructuraci&oacute;n.";
 choices[48][1] = "Coste.";
 choices[48][2] = "Modularidad.";
 choices[48][3] = "Acoplamiento.";
 answers[48] = 2;
 units[48] = ['93'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 1051. ";
 preguntaids[48] = 1051


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ale cu&aacute;l de las siguientes es una librer&iacute;a de c&oacute;digo abierto para crear y manipular archivos PDF, RTF, y HTML en Java:";
 choices[49]= new Array();
 choices[49][0] = "Json";
 choices[49][1] = "iText";
 choices[49][2] = "text-tomcat";
 choices[49][3] = "OpenXML";
 answers[49] = 1;
 units[49] = ['66'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 723. AGE A2 2015";
 preguntaids[49] = 723


//  Id pregunta: 5420 Año de creación de pregunta: 2007
 questions[50]= "51)  Seg&uacute;n la Ley General de Telecomunicaciones 9/2014 corresponde el control e inspecci&oacute;n del espectro radioel&eacute;ctrico a";
 choices[50]= new Array();
 choices[50][0] = "Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[50][1] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[50][2] = "CNAF";
 choices[50][3] = "Ninguno de los anteriores";
 answers[50] = 3;
 units[50] = ['121'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 5420. ";
 preguntaids[50] = 5420


//  Id pregunta: 7874 Año de creación de pregunta: 2011
 questions[51]= "52)  En una valoraci&oacute;n de tres ofertas inform&aacute;ticas, nos encontramos que en un criterio a maximizar, las puntuaciones son : 5, 7 y 10. &iquest;Cu&aacute;les ser&iacute;an sus puntuaciones normalizadas por el m&eacute;todo de fracci&oacute;n del ideal?:";
 choices[51]= new Array();
 choices[51][0] = "0,5 ; 0,7 ; 1";
 choices[51][1] = "0,227 ; 0,318 ; 0,454";
 choices[51][2] = "0; 0,4; 1";
 choices[51][3] = "1 ; 1,4 ; 2";
 answers[51] = 2;
 units[51] = ['38'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 7874. Examen TIC A1 2010";
 preguntaids[51] = 7874


//  Id pregunta: 396 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[52]= new Array();
 choices[52][0] = "Art. 25 LO, 3/2007.";
 choices[52][1] = "Art. 23 LO, 3/2007.";
 choices[52][2] = "Art. 14 LO, 3/2007.";
 choices[52][3] = "Ninguna es correcta, es el art. 13.";
 answers[52] = 0;
 units[52] = ['14'];
 blocks[52] = ['A3'];
 comments[52] = "Id Pregunta: 396. Pol&iacute;ticas de igualdad";
 preguntaids[52] = 396


//  Id pregunta: 8733 Año de creación de pregunta: 2013
 questions[53]= "54)  En los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y sector privado, una Administraci&oacute;n encarga a una entidad de derecho privado la realizaci&oacute;n de una actuaci&oacute;n global, que no puede durar m&aacute;s de...";
 choices[53]= new Array();
 choices[53][0] = "10 a&ntilde;os.";
 choices[53][1] = "30 a&ntilde;os.";
 choices[53][2] = "20 a&ntilde;os.";
 choices[53][3] = "15 a&ntilde;os.";
 answers[53] = 2;
 units[53] = ['37'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 8733. ";
 preguntaids[53] = 8733


//  Id pregunta: 10682 Año de creación de pregunta: 2015
 questions[54]= "55)  &iquest;Qu&eacute; norma del CCN hace referencia a la criptograf&iacute;a de empleo en el Esquema Nacional de Seguridad?";
 choices[54]= new Array();
 choices[54][0] = "CCN-STIC-802";
 choices[54][1] = "CCN-STIC-403";
 choices[54][2] = "CCN-STIC-807";
 choices[54][3] = "CCN-STIC-823";
 answers[54] = 2;
 units[54] = ['46'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 10682. ";
 preguntaids[54] = 10682


//  Id pregunta: 9152 Año de creación de pregunta: 2014
 questions[55]= "56)  &iquest;Con qu&eacute; directiva se declara una p&aacute;gina maestra en ASP.Net?";
 choices[55]= new Array();
 choices[55][0] = "Master";
 choices[55][1] = "MasterPage";
 choices[55][2] = "Master.Page";
 choices[55][3] = "Page";
 answers[55] = 0;
 units[55] = ['63'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 9152. Examen TIC A2 2013";
 preguntaids[55] = 9152


//  Id pregunta: 6324 Año de creación de pregunta: 2003
 questions[56]= "57)  &iquest;C&oacute;mo se puede determinar en el Plan General de Garant&iacute;a de Calidad (PGGC) el nivel de intensidad que sirve para graduar las funciones de garant&iacute;a de calidad aplicables a un proyecto?";
 choices[56]= new Array();
 choices[56][0] = "No es posible en el PGGC";
 choices[56][1] = "A trav&eacute;s de la determinaci&oacute;n del perfil de riesgos del proyecto.";
 choices[56][2] = "A trav&eacute;s del foco de intensidad y de sus cinco niveles.";
 choices[56][3] = "A trav&eacute;s del foco de inter&eacute;s en garant&iacute;a de calidad y para cada fase y productos asociados con el modelos de desarrollo elegido para el proyecto.";
 answers[56] = 3;
 units[56] = ['93'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 6324. ";
 preguntaids[56] = 6324


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[57]= "58)  Sobre el recurso de reposici&oacute;n:";
 choices[57]= new Array();
 choices[57][0] = "Cabe interponerlo ante los actos administrativos que pongan fin a la v&iacute;a administrativa";
 choices[57][1] = "Es obligatorio interponerlo antes de impugnar un acto administrativo ante el orden jurisdiccional contencioso-administrativo";
 choices[57][2] = "Ha desaparecido en la Ley 39/2015";
 choices[57][3] = "El &oacute;rgano competente para resolverlo es el superior jer&aacute;rquico al que dict&oacute; el acto administrativo a recurrir";
 answers[57] = 0;
 units[57] = ['8'];
 blocks[57] = ['A2'];
 comments[57] = "Id Pregunta: 261. Ley 39/2015";
 preguntaids[57] = 261


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[58]= "59)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[58]= new Array();
 choices[58][0] = "Un Reglamento.";
 choices[58][1] = "Un Decreto.";
 choices[58][2] = "Una Ley.";
 choices[58][3] = "Un Real-Decreto.";
 answers[58] = 2;
 units[58] = ['5'];
 blocks[58] = ['A1'];
 comments[58] = "Id Pregunta: 190. Uni&oacute;n Europea";
 preguntaids[58] = 190


//  Id pregunta: 3362 Año de creación de pregunta: 2006
 questions[59]= "60)  Se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[59]= new Array();
 choices[59][0] = "El procesamiento cooperativo es aquel en que 2 o m&aacute;s elementos l&oacute;gicos diferentes interact&uacute;an entre s&iacute; en la realizaci&oacute;n de una tarea com&uacute;n";
 choices[59][1] = "El procesamiento centralizado utiliza el host para ejecutar el 100% de la l&oacute;gica asociada a un programa";
 choices[59][2] = "Los procesamientos centralizados dan mayor flexibilidad y escalabilidad";
 choices[59][3] = "Los procesamientos cooperativos reducen los costes de inversi&oacute;n en equipamiento";
 answers[59] = 2;
 units[59] = ['55'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 3362. ";
 preguntaids[59] = 3362


//  Id pregunta: 6545 Año de creación de pregunta: 2003
 questions[60]= "61)  Seg&uacute;n el RD 1720/2007, cual de los siguientes es un requisito del documento de seguridad, exclusivo para los niveles medio y alto:";
 choices[60]= new Array();
 choices[60][0] = "La identificacion del responsable o responsables de seguridad.";
 choices[60][1] = "Los procedimientos de realizacion de copias de repaldo y de recuperacion de los datos en los ficheros o tratamientos automatizados.";
 choices[60][2] = "Los controles periodicos que se deban realizar para verificar el cumplimiento de lo dispuesto en el propio documento.";
 choices[60][3] = "La a) y la c) lo son.";
 answers[60] = 3;
 units[60] = ['35'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 6545. ";
 preguntaids[60] = 6545


//  Id pregunta: 7953 Año de creación de pregunta: 2011
 questions[61]= "62)  EI ataque conocido como &quot;ARP Spoofing&quot;:";
 choices[61]= new Array();
 choices[61][0] = "Se impide con el uso de conmutadores (switches) en vez de concentradores (hubs).";
 choices[61][1] = "Se efect&uacute;a en el nivel 3 de OSI ya que falsifica direcciones IPs.";
 choices[61][2] = "Sirve para interceptar tr&aacute;fico en una red de &aacute;rea local (LAN), pero no para modificarlo.";
 choices[61][3] = "Puede impedirse mediante DHCP snooping.";
 answers[61] = 3;
 units[61] = ['119'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 7953. Examen TIC A2 2010";
 preguntaids[61] = 7953


//  Id pregunta: 8048 Año de creación de pregunta: 2011
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO corresponde a una unidad de estado s&oacute;lido (SSD)?";
 choices[62]= new Array();
 choices[62][0] = "No contiene partes m&oacute;viles.";
 choices[62][1] = "Son discos menos ruidosos que los magn&eacute;ticos.";
 choices[62][2] = "El precio por MB es menor que en los discos magn&eacute;ticos";
 choices[62][3] = "Existen para varias &iacute;nterfaces (SATA, PATA, etc.)";
 answers[62] = 2;
 units[62] = ['53'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 8048. Examen TIC A2 2010";
 preguntaids[62] = 8048


//  Id pregunta: 4643 Año de creación de pregunta: 2002
 questions[63]= "64)  A las huellas del cliente que permiten implementar aspectos de autenticaci&oacute;n, preferencias, gesti&oacute;n del estado en HTTP se les denomina:";
 choices[63]= new Array();
 choices[63][0] = "applet";
 choices[63][1] = "cookie";
 choices[63][2] = "socket";
 choices[63][3] = "control activeX";
 answers[63] = 1;
 units[63] = ['113'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 4643. ";
 preguntaids[63] = 4643


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[64]= new Array();
 choices[64][0] = "De los derechos y deberes fundamentales.";
 choices[64][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[64][2] = "Derechos y libertades.";
 choices[64][3] = "De la Corona.";
 answers[64] = 2;
 units[64] = ['1'];
 blocks[64] = ['A1'];
 comments[64] = "Id Pregunta: 74. Constituci&oacute;n de 1978";
 preguntaids[64] = 74


//  Id pregunta: 1195 Año de creación de pregunta: 2016
 questions[65]= "66)  Se&ntilde;ale entre las siguientes herramientas el gestor de copia de seguridad en l&iacute;nea utilizado por productos de base de datos Oracle:";
 choices[65]= new Array();
 choices[65][0] = "RFID";
 choices[65][1] = "RSYNC";
 choices[65][2] = "RMAN";
 choices[65][3] = "RMON";
 answers[65] = 2;
 units[65] = ['60'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 1195. ";
 preguntaids[65] = 1195


//  Id pregunta: 10401 Año de creación de pregunta: 2015
 questions[66]= "67)  &iquest;C&oacute;mo se denomina el plan de la Agenda Digital Espa&ntilde;ola referente al objetivo de Despliegue de redes r&aacute;pidas y ultrarr&aacute;pidas?";
 choices[66]= new Array();
 choices[66][0] = "Plan de Impulso del acceso r&aacute;pido y ultrarr&aacute;pido a Internet";
 choices[66][1] = "Plan de Telecomunicaciones Ultrarr&aacute;pidas";
 choices[66][2] = "Plan de Despliegue de infraestructuras de Red Espa&ntilde;ola";
 choices[66][3] = "Ninguna de las anteriores";
 answers[66] = 1;
 units[66] = ['19'];
 blocks[66] = ['A4'];
 comments[66] = "Id Pregunta: 10401. ";
 preguntaids[66] = 10401


//  Id pregunta: 5766 Año de creación de pregunta: 2007
 questions[67]= "68)  Cual de las siguientes opciones es correcta";
 choices[67]= new Array();
 choices[67][0] = "en el modelo jer&aacute;rquico no se exige que el usuario conozca las vinculaciones entre entidades";
 choices[67][1] = "los lenguajes del modelo en red son relacionales";
 choices[67][2] = "el modelo en red responde a una estructura arborescente a varios niveles";
 choices[67][3] = "en el modelo relacional no existen vinculaciones explicitas entre entidades";
 answers[67] = 3;
 units[67] = ['85'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 5766. ";
 preguntaids[67] = 5766


//  Id pregunta: 392 Año de creación de pregunta: 2016
 questions[68]= "69)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[68]= new Array();
 choices[68][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[68][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[68][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[68][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[68] = 1;
 units[68] = ['14'];
 blocks[68] = ['A3'];
 comments[68] = "Id Pregunta: 392. Pol&iacute;ticas de igualdad";
 preguntaids[68] = 392


//  Id pregunta: 247 Año de creación de pregunta: 2016
 questions[69]= "70)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[69]= new Array();
 choices[69][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[69][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[69][2] = "a y b son correctas";
 choices[69][3] = "a y b son incorrectas";
 answers[69] = 0;
 units[69] = ['7'];
 blocks[69] = ['A2'];
 comments[69] = "Id Pregunta: 247. Ley 39/2015";
 preguntaids[69] = 247


//  Id pregunta: 179 Año de creación de pregunta: 2016
 questions[70]= "71)  La Presidencia del Consejo de la Uni&oacute;n Europea...";
 choices[70]= new Array();
 choices[70][0] = "Cambia cada seis meses";
 choices[70][1] = "Cambia cada a&ntilde;o";
 choices[70][2] = "Es elegida por el Parlamento Europeo";
 choices[70][3] = "Es inexistente,es decir, no existe la Presidencia de la Uni&oacute;n Europea";
 answers[70] = 0;
 units[70] = ['5'];
 blocks[70] = ['A1'];
 comments[70] = "Id Pregunta: 179. Uni&oacute;n Europea";
 preguntaids[70] = 179


//  Id pregunta: 656 Año de creación de pregunta: 2016
 questions[71]= "72)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[71]= new Array();
 choices[71][0] = "VMware ESX";
 choices[71][1] = "XenServer";
 choices[71][2] = "Alfresco";
 choices[71][3] = "Microsoft Hyper-V";
 answers[71] = 2;
 units[71] = ['54'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 656. AGE A1 2015";
 preguntaids[71] = 656


//  Id pregunta: 6612 Año de creación de pregunta: 2009
 questions[72]= "73)  &iquest;Por qu&eacute; el algoritmo DSA no sirve para cifrar?";
 choices[72]= new Array();
 choices[72][0] = "Porque al realizar funciones modulo x (donde x es uno de los valores p&uacute;blicos del sistema) no se puede realizar su inversi&oacute;n";
 choices[72][1] = "Porque realiza un hash del mensaje, por tanto no es recuperable";
 choices[72][2] = "Porque tendr&iacute;amos que enviar la clave privada";
 choices[72][3] = "No es cierto, el algoritmo DSA s&iacute; sirve para cifrar";
 answers[72] = 1;
 units[72] = ['76'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 6612. ";
 preguntaids[72] = 6612


//  Id pregunta: 5349 Año de creación de pregunta: 2006
 questions[73]= "74)  &iquest;Qu&eacute; termino define mejor una credencial Kerberos?";
 choices[73]= new Array();
 choices[73][0] = "Un ticket de autenticaci&oacute;n";
 choices[73][1] = "Un ticket de autorizaci&oacute;n";
 choices[73][2] = "Cada uno de los servicios y aplicaciones de una red que soportan Kerberos";
 choices[73][3] = "Un dominio, formado por usuarios, equipos y servicios registrados en un servidor Kerberos";
 answers[73] = 1;
 units[73] = ['120'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 5349. ";
 preguntaids[73] = 5349


//  Id pregunta: 10454 Año de creación de pregunta: 2015
 questions[74]= "75)  Los requisitos de seguridad aplicables a los prestadores de servicios de confianza:";
 choices[74]= new Array();
 choices[74][0] = "Son los mismos para tanto para los prestadores de servicios de confianza cualificados como no cualificados";
 choices[74][1] = "Notificar&aacute;n al Ministerio de Energia, Turismo y Agenda Digital en un plazo m&aacute;ximo de 48 horas, de cualquier violaci&oacute;n de seguridad o p&eacute;rdida de integridad.";
 choices[74][2] = "En caso de que una violaci&oacute;n de la seguridad afecte a dos o m&aacute;s Estados miembros, el organismo de supervisi&oacute;n notificado informar&aacute; al respecto a los organismos de supervisi&oacute;n de los dem&aacute;s Estados miembros y a ENISA.";
 choices[74][3] = "Todas son verdaderas.";
 answers[74] = 2;
 units[74] = ['77'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 10454. ";
 preguntaids[74] = 10454


