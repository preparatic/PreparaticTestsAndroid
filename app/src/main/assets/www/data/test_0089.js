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
//  Id pregunta: 333 Año de creación de pregunta: 2016
 questions[0]= "1)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[0]= new Array();
 choices[0][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[0][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[0][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[0][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[0] = 0;
 units[0] = ['12'];
 blocks[0] = ['A3'];
 comments[0] = "Id Pregunta: 333. Modelo econ&oacute;mico";
 preguntaids[0] = 333


//  Id pregunta: 246 Año de creación de pregunta: 2016
 questions[1]= "2)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[1]= new Array();
 choices[1][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[1][1] = "garantizar la conservaci&oacute;n del documento";
 choices[1][2] = "garantizar la autenticidad del documento";
 choices[1][3] = "garantizar la integridad del documento";
 answers[1] = 0;
 units[1] = ['7'];
 blocks[1] = ['A2'];
 comments[1] = "Id Pregunta: 246. Ley 39/2015";
 preguntaids[1] = 246


//  Id pregunta: 4580 Año de creación de pregunta: 2002
 questions[2]= "3)  &iquest;Cu&aacute;ntas subredes son posibles en una red de clase C, con una m&aacute;scara de subnet de 255.255.255.224?:";
 choices[2]= new Array();
 choices[2][0] = "32";
 choices[2][1] = "30";
 choices[2][2] = "8";
 choices[2][3] = "6";
 answers[2] = 3;
 units[2] = ['109'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 4580. Se usa la f&oacute;rmula 2^N=Y, siendo N el n&uacute;mero de bits ocupados seg&uacute;n la m&aacute;scara, correspodientes a la asignaci&oacute;n por defecto para Host (en este caso  224=11100000 2^3=8) Pero no aplicamos subnet 0 de cara al examen, por lo que el n&uacute;mero de subredes es 8 - 2; es decir, 6";
 preguntaids[2] = 4580


//  Id pregunta: 1435 Año de creación de pregunta: 2016
 questions[3]= "4)  La Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal (en lo sucesivo LOPD) en su art&iacute;culo 1, tiene por objeto:";
 choices[3]= new Array();
 choices[3][0] = "Garantizar y proteger, en lo que concierne al tratamiento de los datos personales, las libertades p&uacute;blicas y los derechos fundamentales de las personas f&iacute;sicas.";
 choices[3][1] = "Proteger el honor y la intimidad personal y familiar en el &aacute;mbito dom&eacute;stico.";
 choices[3][2] = "Proteger todas las libertades p&uacute;blicas.";
 choices[3][3] = "Hacer frente a las amenazas o agresiones derivadas del tratamiento automatizado de datos personales.";
 answers[3] = 0;
 units[3] = ['35'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 1435. ";
 preguntaids[3] = 1435


//  Id pregunta: 4796 Año de creación de pregunta: 2002
 questions[4]= "5)  En el protocolo de transmisi&oacute;n s&iacute;ncrona HDLC ( High-level Data Link Control), &iquest;qu&eacute; no es una caracter&iacute;stica?:";
 choices[4]= new Array();
 choices[4][0] = "Cada bloque se inicia con &quot;01111110&quot;";
 choices[4][1] = "El indicador de fin de bloque es &quot;01111111&quot;";
 choices[4][2] = "Esta prohibido enviar secuencias de 6 o m&aacute;s '1'";
 choices[4][3] = "Por cada serie de 5 unos seguidos, se a&ntilde;ade un cero que el receptor eliminar&aacute;";
 answers[4] = 1;
 units[4] = ['105'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 4796. ";
 preguntaids[4] = 4796


//  Id pregunta: 9806 Año de creación de pregunta: 2015
 questions[5]= "6)  La ISO publica:";
 choices[5]= new Array();
 choices[5][0] = "Informes T&eacute;cnicos y Gu&iacute;as ISO.";
 choices[5][1] = "Especificaciones Internacionales y Memor&aacute;ndum de errores.";
 choices[5][2] = "A y B son correctas.";
 choices[5][3] = "La ISO no publica ning&uacute;n documento, s&oacute;lo certifica est&aacute;ndares de otras organizaciones.";
 answers[5] = 0;
 units[5] = ['48'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 9806. S&iacute; publica Technical Reports e ISO Guides. Pero no publica Especificaciones Internacionales sino Technical Specifications o Publicly Available Specifications. Tampoco publica Memor&aacute;ndums de Errores sino Correcciones T&eacute;cnicas (Technical Corrigendum).";
 preguntaids[5] = 9806


//  Id pregunta: 28 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[6]= new Array();
 choices[6][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[6][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[6][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[6][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[6] = 2;
 units[6] = ['1'];
 blocks[6] = ['A1'];
 comments[6] = "Id Pregunta: 28. Constituci&oacute;n de 1978";
 preguntaids[6] = 28


//  Id pregunta: 9984 Año de creación de pregunta: 2015
 questions[7]= "8)  La direcci&oacute;n electr&oacute;nica habilitada para la pr&aacute;ctica de notificaciones regulada en el Real Decreto 1671/2009, por el que se desarrolla parcialmente la Ley 11/2007, tendr&aacute; vigencia indefinida excepto cuando no se utilice para la pr&aacute;ctica de notificaciones por el transcurso de:";
 choices[7]= new Array();
 choices[7][0] = "36 meses.";
 choices[7][1] = "60 meses.";
 choices[7][2] = "30 meses.";
 choices[7][3] = "24 meses.";
 answers[7] = 0;
 units[7] = ['7'];
 blocks[7] = ['A2'];
 comments[7] = "Id Pregunta: 9984. Examen TIC A2 2014";
 preguntaids[7] = 9984


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[8]= "9)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[8]= new Array();
 choices[8][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[8][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[8][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[8][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[8] = 1;
 units[8] = ['19'];
 blocks[8] = ['A4'];
 comments[8] = "Id Pregunta: 482. Sociedad de la informaci&oacute;n";
 preguntaids[8] = 482


//  Id pregunta: 10742 Año de creación de pregunta: 2015
 questions[9]= "10)  Seg&uacute;n M&eacute;trica v3, las acciones llevadas a cabo para mejorar la calidad interna de los sistemas en cualquiera de sus aspectos, se denomina:";
 choices[9]= new Array();
 choices[9][0] = "Reingenier&iacute;a de sistemas.";
 choices[9][1] = "Mantenimiento Perfectivo.";
 choices[9][2] = "Reestructuraci&oacute;n del Software.";
 choices[9][3] = "Mantenimiento Preventivo.";
 answers[9] = 1;
 units[9] = ['91'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 10742. ";
 preguntaids[9] = 10742


//  Id pregunta: 8316 Año de creación de pregunta: 2011
 questions[10]= "11)  &iquest;Qu&eacute; es un Scriptlet JSP?";
 choices[10]= new Array();
 choices[10][0] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;&mdash; y --&gt;";
 choices[10][1] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;* y *&gt;";
 choices[10][2] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;+ y +&gt;";
 choices[10][3] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;% y %&gt;";
 answers[10] = 3;
 units[10] = ['64'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 8316. Examen UPM A2 2011";
 preguntaids[10] = 8316


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[11]= new Array();
 choices[11][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[11][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[11][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[11][3] = "El pago de subsidios a parados";
 answers[11] = 3;
 units[11] = ['15'];
 blocks[11] = ['A3'];
 comments[11] = "Id Pregunta: 421. Mercado laboral";
 preguntaids[11] = 421


//  Id pregunta: 3 Año de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[12]= new Array();
 choices[12][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[12][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[12][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[12][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[12] = 1;
 units[12] = ['1'];
 blocks[12] = ['A1'];
 comments[12] = "Id Pregunta: 3. Constituci&oacute;n de 1978";
 preguntaids[12] = 3


//  Id pregunta: 8981 Año de creación de pregunta: 2013
 questions[13]= "14)  Seg&uacute;n la Ley de Firma Electr&oacute;nica, se&ntilde;ale cu&aacute;l NO es un supuesto que exima al prestador de servicios de certificaci&oacute;n de la responsabilidad sobre los posibles da&ntilde;os y perjuicios causados a un firmante:";
 choices[13]= new Array();
 choices[13][0] = "Cuando el firmante no haya proporcionado al prestador informaci&oacute;n veraz, completa y exacta de los datos que deban constar en el certificado en el momento de emitir el mismo";
 choices[13][1] = "Cuado el firmante no haya comunicado al prestador cualquier cambio en las circunstancias reflejadas en el certificado electr&oacute;nico";
 choices[13][2] = "Cuando el firmante haya sido negligente en la conservaci&oacute;n de sus datos de creaci&oacute;n de firma";
 choices[13][3] = "Cuando el firmante utilice un certificado revocado sin que el prestador le haya notificado la suspensi&oacute;n de la vigencia";
 answers[13] = 3;
 units[13] = ['19'];
 blocks[13] = ['A4'];
 comments[13] = "Id Pregunta: 8981. Ley 59/2003, art&iacute;culo 23";
 preguntaids[13] = 8981


//  Id pregunta: 1852 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;A qu&eacute; categor&iacute;a de la taxonom&iacute;a de Flynn pertenecen los microprocesadores multin&uacute;cleo?";
 choices[14]= new Array();
 choices[14][0] = "SISD";
 choices[14][1] = "SIMD";
 choices[14][2] = "MISD";
 choices[14][3] = "MIMD";
 answers[14] = 3;
 units[14] = ['49'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 1852. ";
 preguntaids[14] = 1852


//  Id pregunta: 10158 Año de creación de pregunta: 2015
 questions[15]= "16)  Respecto al formato de factura electr&oacute;nica Facturae 3.2.x, se&ntilde;ale la respuesta correcta:";
 choices[15]= new Array();
 choices[15][0] = "Es de tipo PDF-A, para facilitar su impresi&oacute;n.";
 choices[15][1] = "Es un formato certificado con la Norma SICRES 3.0, para la compatibilidad e interconexi&oacute;n de los Registros Contables de Facturas.";
 choices[15][2] = "Es un formato no estructurado compuesto por dos bloques obligatorios y cuatro opcionales.";
 choices[15][3] = "Incluye firma Electr&oacute;nica en XML Advanced Electronic Signature (XADES)";
 answers[15] = 3;
 units[15] = ['10'];
 blocks[15] = ['A2'];
 comments[15] = "Id Pregunta: 10158. Examen TIC A1 2014";
 preguntaids[15] = 10158


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[16]= "17)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[16]= new Array();
 choices[16][0] = "Anualmente.";
 choices[16][1] = "Ninguna de las respuestas es correcta.";
 choices[16][2] = "Trimestralmente.";
 choices[16][3] = "Semestralmente.";
 answers[16] = 0;
 units[16] = ['11'];
 blocks[16] = ['A2'];
 comments[16] = "Id Pregunta: 293. Presupuestos generales";
 preguntaids[16] = 293


//  Id pregunta: 9976 Año de creación de pregunta: 2015
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes no es un objetivo estrat&eacute;gico del Plan de Transformaci&oacute;n Digital?";
 choices[17]= new Array();
 choices[17][0] = "Incremento de la productividad y eficacia en el funcionamiento interno de la Administraci&oacute;n";
 choices[17][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n";
 choices[17][2] = "Mayor eficiencia en la prestaci&oacute;n de los servicios TIC en el seno de la Administraci&oacute;n";
 choices[17][3] = "Estrategia corporativa de interoperabilidad";
 answers[17] = 3;
 units[17] = ['26'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 9976. ";
 preguntaids[17] = 9976


//  Id pregunta: 9002 Año de creación de pregunta: 2014
 questions[18]= "19)  &iquest;C&uacute;al de las siguientes caracter&iacute;sticas es propia de los sistemas de base de datos NoSQL?";
 choices[18]= new Array();
 choices[18][0] = "Soportan operaciones JOIN";
 choices[18][1] = "Garantizan completamente ACID";
 choices[18][2] = "Requieren estructuras fijas, como tablas";
 choices[18][3] = "Escalan bien horizontalmente";
 answers[18] = 3;
 units[18] = ['73'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 9002. ";
 preguntaids[18] = 9002


//  Id pregunta: 8947 Año de creación de pregunta: 2013
 questions[19]= "20)  Respecto al formato de im&aacute;genes GIF, indique la afirmaci&oacute;n falsa:";
 choices[19]= new Array();
 choices[19][0] = "Utiliza el algoritmo de compresi&oacute;n patentado LZW";
 choices[19][1] = "Fue creado en 1987 por Apple";
 choices[19][2] = "Fue creado en 1987 por Compuserve";
 choices[19][3] = "La paleta de color soporta hasta 256 colores";
 answers[19] = 1;
 units[19] = ['62'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 8947. ";
 preguntaids[19] = 8947


//  Id pregunta: 2504 Año de creación de pregunta: 2004
 questions[20]= "21)  Seg&uacute;n su comportamiento durante la ejecuci&oacute;n de un programa, las estructuras de datos se pueden clasificar en:";
 choices[20]= new Array();
 choices[20][0] = "Est&aacute;ticas y din&aacute;micas";
 choices[20][1] = "De clase y de objeto";
 choices[20][2] = "De iteraci&oacute;n, de recursi&oacute;n y de bifurcaci&oacute;n";
 choices[20][3] = "De flujo de control y de flujo de datos";
 answers[20] = 0;
 units[20] = ['60'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 2504. Examen TIC MAP B 2004";
 preguntaids[20] = 2504


//  Id pregunta: 5633 Año de creación de pregunta: 2007
 questions[21]= "22)  Seg&uacute;n indica m&eacute;trica V3, a la hora de planificar el desarrollo de un sistema de informaci&oacute;n, &iquest;que acci&oacute;n no tendr&iacute;a sentido?";
 choices[21]= new Array();
 choices[21][0] = "Dise&ntilde;o del modelo de sistemas de informaci&oacute;n.";
 choices[21][1] = "Definici&oacute;n de la arquitectura tecnol&oacute;gica.";
 choices[21][2] = "Dise&ntilde;o de los procedimientos de migraci&oacute;n.";
 choices[21][3] = "Identificaci&oacute;n de requisitos.";
 answers[21] = 2;
 units[21] = ['91'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 5633. ";
 preguntaids[21] = 5633


//  Id pregunta: 5535 Año de creación de pregunta: 2007
 questions[22]= "23)  El Ciclo de Vida del software es:";
 choices[22]= new Array();
 choices[22][0] = "Un patr&oacute;n del comportamiento de los dise&ntilde;adores.";
 choices[22][1] = "Un modelo del proceso de construcci&oacute;n del Software";
 choices[22][2] = "Un modelo de especificaciones establecido por el analista.";
 choices[22][3] = "Un esquema para integrar el sistema completo.";
 answers[22] = 1;
 units[22] = ['82'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 5535. ";
 preguntaids[22] = 5535


//  Id pregunta: 134 Año de creación de pregunta: 2016
 questions[23]= "24)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[23]= new Array();
 choices[23][0] = "Al Consejo Europeo.";
 choices[23][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[23][2] = "A la Comisi&oacute;n Europea.";
 choices[23][3] = "Al Parlamento Europeo.";
 answers[23] = 2;
 units[23] = ['5'];
 blocks[23] = ['A1'];
 comments[23] = "Id Pregunta: 134. Uni&oacute;n Europea";
 preguntaids[23] = 134


//  Id pregunta: 828 Año de creación de pregunta: 2016
 questions[24]= "25)  La ley cuya finalidad es reducir el acoplamiento en un sistema de informaci&oacute;n es la:";
 choices[24]= new Array();
 choices[24][0] = "Ley de Amper.";
 choices[24][1] = "Ley de Demeter.";
 choices[24][2] = "Ley de Moore.";
 choices[24][3] = "Ley de Hooke.";
 answers[24] = 1;
 units[24] = ['91'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 828. AGE A2 2015";
 preguntaids[24] = 828


//  Id pregunta: 7820 Año de creación de pregunta: 2010
 questions[25]= "26)  &iquest;Qu&eacute; es WebDAV?";
 choices[25]= new Array();
 choices[25][0] = "Sistema seguro de compartici&oacute;n de carpetas sobre HTTP.";
 choices[25][1] = "Sistema web de creaci&oacute;n de formularios.";
 choices[25][2] = "Sistema web seguro de compartici&oacute;n de procesamiento.";
 choices[25][3] = "Sistema web de mensajer&iacute;a y alertas.";
 answers[25] = 0;
 units[25] = ['103'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 7820. ";
 preguntaids[25] = 7820


//  Id pregunta: 8449 Año de creación de pregunta: 2011
 questions[26]= "27)  Dentro de las soluciones propietarias de CRM no se encuentra:";
 choices[26]= new Array();
 choices[26][0] = "Compiere";
 choices[26][1] = "Siebel";
 choices[26][2] = "Epiphany";
 choices[26][3] = "Todas son soluciones comerciales";
 answers[26] = 0;
 units[26] = ['69'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 8449. ";
 preguntaids[26] = 8449


//  Id pregunta: 7359 Año de creación de pregunta: 2010
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes funciones no las realiza el Sistema Operativo?";
 choices[27]= new Array();
 choices[27][0] = "Gesti&oacute;n de memoria";
 choices[27][1] = "Administraci&oacute;n de procesos";
 choices[27][2] = "Arranque de la m&aacute;quina";
 choices[27][3] = "Administraci&oacute;n del sistema de E/S";
 answers[27] = 2;
 units[27] = ['56'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 7359. Examen TIC B 2009";
 preguntaids[27] = 7359


//  Id pregunta: 3547 Año de creación de pregunta: 2004
 questions[28]= "29)  La complejidad  ciclom&aacute;tica de un grafo con 5 nodos y 7 aristas es:";
 choices[28]= new Array();
 choices[28][0] = "3";
 choices[28][1] = "4";
 choices[28][2] = "5";
 choices[28][3] = "6";
 answers[28] = 1;
 units[28] = ['93'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 3547. Similar a examen TIC SS A 2004. Complejidad McCabe = aristas - nodos + 2";
 preguntaids[28] = 3547


//  Id pregunta: 8417 Año de creación de pregunta: 2011
 questions[29]= "30)  Cuando un antivirus utiliza t&eacute;cnicas heur&iacute;sticas significa que:";
 choices[29]= new Array();
 choices[29][0] = "monitoriza continuamente el sistema para detectar amenazas.";
 choices[29][1] = "puede eliminar troyanos y rootkits sin da&ntilde;ar el sistema.";
 choices[29][2] = "puede reconocer c&oacute;digos maliciosos aunque no se encuentren en su base de datos.";
 choices[29][3] = "interroga a otros equipos de confianza para obtener informaci&oacute;n sobre los ficheros";
 answers[29] = 2;
 units[29] = ['67'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 8417. Operador Ayto. Madrid 2010";
 preguntaids[29] = 8417


//  Id pregunta: 8499 Año de creación de pregunta: 2011
 questions[30]= "31)  La &quot;dispersi&oacute;n modal&quot; en una fibra &oacute;ptica:";
 choices[30]= new Array();
 choices[30][0] = "S&oacute;lo se produce en fibras monomodo.";
 choices[30][1] = "S&oacute;lo se produce en fibras multimodo.";
 choices[30][2] = "Se produce en ambos tipos de fibra.";
 choices[30][3] = "No se produce en la fibra &oacute;ptica";
 answers[30] = 1;
 units[30] = ['104'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 8499. Teleco Ayto. Madrid 2010";
 preguntaids[30] = 8499


//  Id pregunta: 9371 Año de creación de pregunta: 2010
 questions[31]= "32)  La recomendaci&oacute;n X.25 de la ITU (International Telecommunication Union) se refiere a:";
 choices[31]= new Array();
 choices[31][0] = "Interfaz entre el equipo terminal de datos y el equipo de terminaci&oacute;n del circuito de datos para equipos terminales que funcionan en el modo paquete y est&aacute;n conectados a redes p&uacute;blicas de datos por circuitos especializados.";
 choices[31][1] = "Interfaz equipo terminal de datos/equipo de terminaci&oacute;n del circuito de datos para los equipos terminales de datos arr&iacute;tmicos con acceso a la facilidad de ensamblado/desensamblado de paquetes en una red p&uacute;blica de datos situada en elmismo pa&iacute;s.";
 choices[31][2] = "Utilizaci&oacute;n, en las redes p&uacute;blicas de datos, de equipos terminales de datos dise&ntilde;ados para su conexi&oacute;n con m&oacute;dems s&iacute;ncronos de la serie V.";
 choices[31][3] = "Interfaz entre el equipo terminal de datos y el equipo de terminaci&oacute;n del circuito de datos para funcionamiento s&iacute;ncrono en redes p&uacute;blicas de datos.";
 answers[31] = 0;
 units[31] = ['114'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 9371. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[31] = 9371


//  Id pregunta: 1091 Año de creación de pregunta: 2016
 questions[32]= "33)  Los certificados digitales:";
 choices[32]= new Array();
 choices[32][0] = "Basados en la recomendaci&oacute;n X.509 v.2 admiten extensiones, que pueden llevar una bandera de criticidad.";
 choices[32][1] = "Definidos en el programa PGP (Pretty Good Privacy) son compatibles con los X.509 v.3.";
 choices[32][2] = "De atributos vinculan al titular con su clave p&uacute;blica y sus atributos.";
 choices[32][3] = "Basados en la recomendaci&oacute;n X.509 v.3 pueden incorporar como extensiones los atributos que constan en un certificado de atributos.";
 answers[32] = 3;
 units[32] = ['77'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 1091. ";
 preguntaids[32] = 1091


//  Id pregunta: 8361 Año de creación de pregunta: 2011
 questions[33]= "34)  Seg&uacute;n M&eacute;trica v.3, la desnormalizaci&oacute;n controlada del modelo f&iacute;sico de datos se aplica para:";
 choices[33]= new Array();
 choices[33][0] = "Reducir o simplificar el n&uacute;mero de accesos a la base de datos";
 choices[33][1] = "Proporcionar flexibilidad al modelo";
 choices[33][2] = "Hacer m&aacute;s r&aacute;pidas las actualizaciones";
 choices[33][3] = "Proporcionar independencia del sistema gestor de base de datos";
 answers[33] = 0;
 units[33] = ['91'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 8361. Analista Ayto. Madrid 2010";
 preguntaids[33] = 8361


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[34]= "35)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[34]= new Array();
 choices[34][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[34][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[34][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[34][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[34] = 2;
 units[34] = ['1'];
 blocks[34] = ['A1'];
 comments[34] = "Id Pregunta: 18. Constituci&oacute;n de 1978";
 preguntaids[34] = 18


//  Id pregunta: 5033 Año de creación de pregunta: 2002
 questions[35]= "36)  Respecto a los distintos modos de transmisi&oacute;n en una comunicaci&oacute;n:";
 choices[35]= new Array();
 choices[35][0] = "La telefon&iacute;a convencional es de tipo d&uacute;plex, mientras que la telefon&iacute;a m&oacute;vil es semiduplex";
 choices[35][1] = "La radiofusi&oacute;n de televisi&oacute;n es de tipo semid&uacute;plex, transmite sonido e imagen en la misma portadora";
 choices[35][2] = "La radiofusi&oacute;n de se&ntilde;al musical en frecuencia modulada es un sistema simplex";
 choices[35][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[35] = 2;
 units[35] = ['106'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 5033. ";
 preguntaids[35] = 5033


//  Id pregunta: 4783 Año de creación de pregunta: 2002
 questions[36]= "37)  En el modelado de tr&aacute;fico basado en LIFO se usan los siguientes modelos:";
 choices[36]= new Array();
 choices[36][0] = "M/M/1.";
 choices[36][1] = "M/M/1/1.";
 choices[36][2] = "M/G/1.";
 choices[36][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[36] = 3;
 units[36] = ['56'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 4783. ";
 preguntaids[36] = 4783


//  Id pregunta: 3955 Año de creación de pregunta: 2002
 questions[37]= "38)  Se entiende por ciclo de vida:";
 choices[37]= new Array();
 choices[37][0] = "Conjunto de fases (o etapas) por las que pasa el sistema desde que se concibe hasta que se retira del servicio";
 choices[37][1] = "El conjunto de fases de desarrollo";
 choices[37][2] = "Etapas de la ingenieria del software";
 choices[37][3] = "Las etapas de la utilizaci&oacute;n de un sistema";
 answers[37] = 0;
 units[37] = ['82'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 3955. ";
 preguntaids[37] = 3955


//  Id pregunta: 3628 Año de creación de pregunta: 2002
 questions[38]= "39)  Indicar cu&aacute;l no es un requisito que deba reunir el software de tiempo real.";
 choices[38]= new Array();
 choices[38][0] = "Sincronizaci&oacute;n y divisi&oacute;n en tareas.";
 choices[38][1] = "Eficiente.";
 choices[38][2] = "Modular.";
 choices[38][3] = "Facilidad de mantenimiento.";
 answers[38] = 1;
 units[38] = ['86'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 3628. ";
 preguntaids[38] = 3628


//  Id pregunta: 7176 Año de creación de pregunta: 2010
 questions[39]= "40)  El per&iacute;odo de validez de los certificados reconocidos no podr&aacute; ser superior a:";
 choices[39]= new Array();
 choices[39][0] = "Tres a&ntilde;os";
 choices[39][1] = "Diez a&ntilde;os";
 choices[39][2] = "Dos a&ntilde;os";
 choices[39][3] = "Cinco a&ntilde;os";
 answers[39] = 3;
 units[39] = ['78'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 7176. Castilla La Mancha 2009 (Ley 9/2014, Disposici&oacute;n final sexta)";
 preguntaids[39] = 7176


//  Id pregunta: 10370 Año de creación de pregunta: 2015
 questions[40]= "41)  &iquest;Qu&eacute; organismo es el responsable del est&aacute;ndar X.500?";
 choices[40]= new Array();
 choices[40][0] = "ITU-T";
 choices[40][1] = "ISO";
 choices[40][2] = "IETF";
 choices[40][3] = "IEEE";
 answers[40] = 2;
 units[40] = ['116'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 10370. ITU-T  defini&oacute; el est&aacute;ndar X.500";
 preguntaids[40] = 10370


//  Id pregunta: 8436 Año de creación de pregunta: 2011
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes no es una dimensi&oacute;n de la seguridad judicial electr&oacute;nica de acuerdo a la ley 18/2011?";
 choices[41]= new Array();
 choices[41][0] = "Conservaci&oacute;n";
 choices[41][1] = "Confidencialidad";
 choices[41][2] = "Trazabilidad";
 choices[41][3] = "Todas las anteriores lo son";
 answers[41] = 3;
 units[41] = ['2'];
 blocks[41] = ['A1'];
 comments[41] = "Id Pregunta: 8436. ";
 preguntaids[41] = 8436


//  Id pregunta: 7164 Año de creación de pregunta: 2010
 questions[42]= "43)  La posibilidad de que las aplicaciones software puedan funcionar en m&aacute;quinas de distintos fabricantes y arquitecturas se denomina:";
 choices[42]= new Array();
 choices[42][0] = "Adaptabilidad";
 choices[42][1] = "Portabilidad";
 choices[42][2] = "Interoperabilidad";
 choices[42][3] = "Escalabilidad";
 answers[42] = 1;
 units[42] = ['43'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 7164. Castilla La Mancha 2009";
 preguntaids[42] = 7164


//  Id pregunta: 2136 Año de creación de pregunta: 2004
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes tareas no es posible realizar utilizando las herramientas PERT o CPM?";
 choices[43]= new Array();
 choices[43][0] = "Establecer las dimensiones de tiempo m&aacute;s probables para las tareas individuales aplicando modelos estad&iacute;sticos.";
 choices[43][1] = "Determinar el camino cr&iacute;tico, la cadena de tareas que determina la duraci&oacute;n del proyecto.";
 choices[43][2] = "Dimensionar las necesidades de personal en cada fase del proyecto.";
 choices[43][3] = "Calcular las limitaciones de tiempo que definen una ventana de tiempo de una tarea determinada (y las holguras).";
 answers[43] = 2;
 units[43] = ['33'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 2136. Examen TIC MAP B 2004";
 preguntaids[43] = 2136


//  Id pregunta: 8433 Año de creación de pregunta: 2011
 questions[44]= "45)  Los certificados de sello electr&oacute;nico contemplados en la ley 18/2011 tendr&aacute;n al menos:";
 choices[44]= new Array();
 choices[44][0] = "N&uacute;mero de identificaci&oacute;n fiscal del suscriptor";
 choices[44][1] = "Actuaciones y documentos en los que podr&aacute;n ser utilizados";
 choices[44][2] = "N&uacute;mero de identificaci&oacute;n judicial";
 choices[44][3] = "Ninguno de los anteriores";
 answers[44] = 2;
 units[44] = ['2'];
 blocks[44] = ['A1'];
 comments[44] = "Id Pregunta: 8433. ";
 preguntaids[44] = 8433


//  Id pregunta: 3537 Año de creación de pregunta: 2004
 questions[45]= "46)  En Orientaci&oacute;n a Objetos, &iquest;c&oacute;mo se denomina el concepto por el que el an&aacute;lisis se centra en los aspectos esenciales e inherentes de una entidad, ignorarando sus propiedades accidentales?";
 choices[45]= new Array();
 choices[45][0] = "Abstracci&oacute;n";
 choices[45][1] = "Encapsulaci&oacute;n";
 choices[45][2] = "Persistencia";
 choices[45][3] = "Polimorfismo";
 answers[45] = 0;
 units[45] = ['85'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 3537. Similar a examen TIC SS A 2003";
 preguntaids[45] = 3537


//  Id pregunta: 209 Año de creación de pregunta: 2016
 questions[46]= "47)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[46]= new Array();
 choices[46][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[46][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[46][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[46][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[46] = 3;
 units[46] = ['7'];
 blocks[46] = ['A2'];
 comments[46] = "Id Pregunta: 209. Ley 39/2015";
 preguntaids[46] = 209


//  Id pregunta: 2905 Año de creación de pregunta: 2002
 questions[47]= "48)  Indique cu&aacute;l de las siguientes afirmaciones es falsa respecto a la ortogonalidad:";
 choices[47]= new Array();
 choices[47][0] = "Un juego de instrucciones se dice que es regular si es ortogonal";
 choices[47][1] = "La ortogonalidad implica que cada operaci&oacute;n debe poder realizarse con un tipo de operando fijo y su propio direccionamiento";
 choices[47][2] = "Se garantiza la ortogonalidad limitando la informaci&oacute;n contenida en el c&oacute;digo de operaci&oacute;n a la operaci&oacute;n pura, excluyendo direccionamiento y representaci&oacute;n de datos";
 choices[47][3] = "La ortogonalidad de un juego de instrucciones aporta claras ventajas de simplicidad y claridad";
 answers[47] = 1;
 units[47] = ['56'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 2905. ";
 preguntaids[47] = 2905


//  Id pregunta: 5894 Año de creación de pregunta: 2007
 questions[48]= "49)  En que lenguaje esta especificada La MIB de SNMPv2";
 choices[48]= new Array();
 choices[48][0] = "XML";
 choices[48][1] = "HTML";
 choices[48][2] = "ASN1";
 choices[48][3] = "Java";
 answers[48] = 2;
 units[48] = ['114'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 5894. ";
 preguntaids[48] = 5894


//  Id pregunta: 7841 Año de creación de pregunta: 2010
 questions[49]= "50)  En la plataforma de e-learning Moodle, indique cu&aacute;l de las siguientes expresiones NO es correcta:";
 choices[49]= new Array();
 choices[49][0] = "Es una plataforma de libre distribuci&oacute;n de e-learning.";
 choices[49][1] = "Soporta el aprendizaje colaborativo en cualquier lugar y en cualquier momento.";
 choices[49][2] = "Es una aplicaci&oacute;n Web que funciona en cualquier computador en el que se pueda ejecutar PHP.";
 choices[49][3] = "S&oacute;lo funciona con el sistema operativo Linux.";
 answers[49] = 3;
 units[49] = ['70'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 7841. ";
 preguntaids[49] = 7841


//  Id pregunta: 8702 Año de creación de pregunta: 2013
 questions[50]= "51)  &iquest;Qu&eacute; es VAD?";
 choices[50]= new Array();
 choices[50][0] = "Virtual Address Descriptors";
 choices[50][1] = "Virtual Allocator Devices";
 choices[50][2] = "Descriptor de direcciones asignadas.";
 choices[50][3] = "No existe.";
 answers[50] = 0;
 units[50] = ['58'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 8702. ";
 preguntaids[50] = 8702


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[51]= "52)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[51]= new Array();
 choices[51][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[51][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[51][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[51][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[51] = 1;
 units[51] = ['7'];
 blocks[51] = ['A2'];
 comments[51] = "Id Pregunta: 232. Ley 39/2015";
 preguntaids[51] = 232


//  Id pregunta: 6505 Año de creación de pregunta: 2003
 questions[52]= "53)  Alguno de los &oacute;rganos a trav&eacute;s del cu&aacute;l ISOC ejerce sus funciones son:";
 choices[52]= new Array();
 choices[52][0] = "IAB para la asignaci&oacute;n de recursos. IEFT para la especificaci&oacute;n de est&aacute;ndares.";
 choices[52][1] = "IEFT para la especificaci&oacute;n de est&aacute;ndares. IESG para la supervisi&oacute;n y aprobaci&oacute;n de normas";
 choices[52][2] = "IAB para la supervisi&oacute;n y aprobaci&oacute;n de normas. IESG para la coordinaci&oacute;n";
 choices[52][3] = "IEFT para la coordinaci&oacute;n. IANA para la asignaci&oacute;n de recursos";
 answers[52] = 2;
 units[52] = ['103'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 6505. ";
 preguntaids[52] = 6505


//  Id pregunta: 2004 Año de creación de pregunta: 2002
 questions[53]= "54)  &iquest;Cu&aacute;l no es una metodolog&iacute;a para la planificaci&oacute;n de la capacidad de un sistema inform&aacute;tico?:";
 choices[53]= new Array();
 choices[53][0] = "Simulaci&oacute;n";
 choices[53][1] = "La programaci&oacute;n lineal";
 choices[53][2] = "las reglas basadas en la experiencia";
 choices[53][3] = "La teor&iacute;a de colas";
 answers[53] = 1;
 units[53] = ['39'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 2004. ";
 preguntaids[53] = 2004


//  Id pregunta: 1901 Año de creación de pregunta: 2016
 questions[54]= "55)  EI cableado estructurado de categor&iacute;a 5e:";
 choices[54]= new Array();
 choices[54][0] = "Permite transmisiones a velocidades 1OGbit Ethernet";
 choices[54][1] = "Solo es posible utilizarlo en comunicaciones full-duplex";
 choices[54][2] = "A diferencia de la categor&iacute;a 5, permite la transmisi&oacute;n de paquetes VolP";
 choices[54][3] = "Est&aacute; estandarizado por la norma TIAIEIA-568-B";
 answers[54] = 3;
 units[54] = ['104'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 1901. ";
 preguntaids[54] = 1901


//  Id pregunta: 5608 Año de creación de pregunta: 2007
 questions[55]= "56)  Seg&uacute;n la norma ISO/IEC 27002, el aseguramiento de que los usuarios autorizados tienen acceso cuando lo requieran a la informaci&oacute;n y sus activos asociados, es el concepto de:";
 choices[55]= new Array();
 choices[55][0] = "Seguridad.";
 choices[55][1] = "Integridad.";
 choices[55][2] = "Disponibilidad.";
 choices[55][3] = "Confidencialidad.";
 answers[55] = 2;
 units[55] = ['45'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 5608. ";
 preguntaids[55] = 5608


//  Id pregunta: 3393 Año de creación de pregunta: 2006
 questions[56]= "57)  El lenguaje Java, para las variables de clase, utiliza el modificador";
 choices[56]= new Array();
 choices[56][0] = "extern";
 choices[56][1] = "private";
 choices[56][2] = "final";
 choices[56][3] = "static";
 answers[56] = 3;
 units[56] = ['64'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 3393. ";
 preguntaids[56] = 3393


//  Id pregunta: 5481 Año de creación de pregunta: 2007
 questions[57]= "58)  Indique cu&aacute;l de los siguientes t&eacute;rminos no identifica un gestor de arranque del Sistema Operativo";
 choices[57]= new Array();
 choices[57][0] = "NT OS Loader.";
 choices[57][1] = "LILO (Linux Loader)";
 choices[57][2] = "LIUL (Linux Unified Loader).";
 choices[57][3] = "GRUB (Grand Unified Bootloader).";
 answers[57] = 2;
 units[57] = ['57'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 5481. ";
 preguntaids[57] = 5481


//  Id pregunta: 2441 Año de creación de pregunta: 2006
 questions[58]= "59)  Cu&aacute;l de las siguientes afirmaciones sobre normalizaci&oacute;n europea es incorrecta:";
 choices[58]= new Array();
 choices[58][0] = "El Instituto Europeo de Normas de Telecomunicaci&oacute;n (ETSI) elabora Especificaciones t&eacute;cnicas (TS), Informes t&eacute;cnicos (TR), Normas ETSI (ES) y Normas Europeas (EN).";
 choices[58][1] = "Los &Oacute;rganismos Nacionales de Normalizaci&oacute;n tienen la obligaci&oacute;n de adoptar &iacute;ntegramente las Normas Europeas (EN) elaboradas por CEN/CENELEC o ETSI.";
 choices[58][2] = "Las normas europeas (EN) elaboradas por CEN/CENELEC o ETSI son de obligado cumplimiento por los Estados Miembros.";
 choices[58][3] = "CEN/CENELEC elaboran Normas Europeas (EN) y Normas Experimentales Europeas (ENVs).";
 answers[58] = 2;
 units[58] = ['48'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 2441. Las normas EN son de obligada transposici&oacute;n";
 preguntaids[58] = 2441


//  Id pregunta: 8416 Año de creación de pregunta: 2011
 questions[59]= "60)  En HTML, &iquest;con qu&eacute; etiqueta indicamos el comienzo de una columna con datos en una tabla?";
 choices[59]= new Array();
 choices[59][0] = "&lt;table&gt;";
 choices[59][1] = "&lt;td&gt;";
 choices[59][2] = "&lt;th&gt;";
 choices[59][3] = "&lt;column&gt;";
 answers[59] = 1;
 units[59] = ['74'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 8416. Operador Ayto. Madrid 2010";
 preguntaids[59] = 8416


//  Id pregunta: 247 Año de creación de pregunta: 2016
 questions[60]= "61)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[60]= new Array();
 choices[60][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[60][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[60][2] = "a y b son correctas";
 choices[60][3] = "a y b son incorrectas";
 answers[60] = 0;
 units[60] = ['7'];
 blocks[60] = ['A2'];
 comments[60] = "Id Pregunta: 247. Ley 39/2015";
 preguntaids[60] = 247


//  Id pregunta: 9525 Año de creación de pregunta: 2014
 questions[61]= "62)  La tecnolog&iacute;a que nos permite trabajar en Java con servicios de directorio como LDAP, Active Directory, se conoce como:";
 choices[61]= new Array();
 choices[61][0] = "Java Messaging Services (JMS)";
 choices[61][1] = "Java Naming and Directory Interface (JNDI)";
 choices[61][2] = "Remote Method Invocation (RMI)";
 choices[61][3] = "JavaBeans Activation Framework (JMF)";
 answers[61] = 1;
 units[61] = ['64'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 9525. ";
 preguntaids[61] = 9525


//  Id pregunta: 9758 Año de creación de pregunta: 2014
 questions[62]= "63)  El primer paso a la hora de desarrollar un Plan de Continuidad de Negocio es:";
 choices[62]= new Array();
 choices[62][0] = "Clasificar los sistemas seg&uacute;n su importancia";
 choices[62][1] = "Establecer una estrategia de recuperaci&oacute;n de desastres";
 choices[62][2] = "Determinar el tiempo cr&iacute;tico de recuperaci&oacute;n";
 choices[62][3] = "Realizar una clasificaci&oacute;n del riesgo";
 answers[62] = 0;
 units[62] = ['45'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 9758. ";
 preguntaids[62] = 9758


//  Id pregunta: 3204 Año de creación de pregunta: 2003
 questions[63]= "64)  &iquest;Cu&aacute;l es la diferencia entre MPP y SMP?";
 choices[63]= new Array();
 choices[63][0] = "En SMP todas las CPU comparten la misma memoria mientras en MPP cada CPU tiene su propia memoria.";
 choices[63][1] = "En MPP todas las CPU comparten la misma memoria mientras en SMP cada CPU tiene su propia memoria.";
 choices[63][2] = "No hay ninguna diferencia ambas arquitecturas son iguales";
 choices[63][3] = "SMP se utiliza en mainframes mientras que MPP se utiliza en supercomputadores";
 answers[63] = 0;
 units[63] = ['49'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 3204. ";
 preguntaids[63] = 3204


//  Id pregunta: 9903 Año de creación de pregunta: 2015
 questions[64]= "65)  Seg&uacute;n la Ley 39/2015 son interesados:";
 choices[64]= new Array();
 choices[64][0] = "Quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos.";
 choices[64][1] = "Los que, sin haber iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte.";
 choices[64][2] = "Aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento en tanto no haya reca&iacute;do resoluci&oacute;n definitiva.";
 choices[64][3] = "Todas las anteriores.";
 answers[64] = 3;
 units[64] = ['7', '19'];
 blocks[64] = ['A2', 'A4'];
 comments[64] = "Id Pregunta: 9903. ";
 preguntaids[64] = 9903


//  Id pregunta: 234 Año de creación de pregunta: 2016
 questions[65]= "66)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[65]= new Array();
 choices[65][0] = "la Administraci&oacute;n General del Estado";
 choices[65][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[65][2] = "las Entidades Locales";
 choices[65][3] = "todas son correctas";
 answers[65] = 3;
 units[65] = ['7'];
 blocks[65] = ['A2'];
 comments[65] = "Id Pregunta: 234. Ley 39/2015";
 preguntaids[65] = 234


//  Id pregunta: 276 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[66]= new Array();
 choices[66][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[66][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[66][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[66][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[66] = 3;
 units[66] = ['11'];
 blocks[66] = ['A2'];
 comments[66] = "Id Pregunta: 276. Presupuestos generales";
 preguntaids[66] = 276


//  Id pregunta: 3336 Año de creación de pregunta: 2004
 questions[67]= "68)  En cuanto a los procedimientos de inferencia de las estructuras de representaci&oacute;n del conocimiento, se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[67]= new Array();
 choices[67][0] = "En las redes semanticas los procedimientos de inferencia son la herencia y el equiparaci&oacute;n";
 choices[67][1] = "En los marcos los procedimientos de inferencia son la deducci&oacute;n de valores de slots, la actualizaci&oacute;n de valores de slots, y la emparejamiento";
 choices[67][2] = "En las reglas los procedimientos de inferencia son el encadenamiento hacia adelante, y el encadenamiento hacia atr&aacute;s";
 choices[67][3] = "Todas son correctas";
 answers[67] = 3;
 units[67] = ['68'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 3336. ";
 preguntaids[67] = 3336


//  Id pregunta: 3285 Año de creación de pregunta: 2003
 questions[68]= "69)  Si un programa se distribuye con licencia GPL, la empresa que lo modifica puede:";
 choices[68]= new Array();
 choices[68][0] = "No puede venderlo";
 choices[68][1] = "Integrarlo en otro SW y venderlo como propietario";
 choices[68][2] = "Venderlo a otra empresa como software libre";
 choices[68][3] = "Venderlo a otra empresa como software propietario";
 answers[68] = 2;
 units[68] = ['66'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 3285. ";
 preguntaids[68] = 3285


//  Id pregunta: 2333 Año de creación de pregunta: 2003
 questions[69]= "70)  En la metodolog&iacute;a MAGERIT la definici&oacute;n &quot;eventos que pueden desencadenar un incidente en la organizaci&oacute;n&quot; corresponde a:";
 choices[69]= new Array();
 choices[69][0] = "Riesgo";
 choices[69][1] = "Impacto";
 choices[69][2] = "Amenaza";
 choices[69][3] = "Vulnerabilidad";
 answers[69] = 2;
 units[69] = ['36'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 2333. ";
 preguntaids[69] = 2333


//  Id pregunta: 1791 Año de creación de pregunta: 2016
 questions[70]= "71)  Se&ntilde;ale la respuesta correcta. Con respecto a la Sede Electr&oacute;nica podemos decir qu&eacute;:";
 choices[70]= new Array();
 choices[70][0] = "La Sede Electr&oacute;nica debe estar accesible desde la p&aacute;gina principal de la web institucional de la Administraci&oacute;n P&uacute;blica correspondiente.";
 choices[70][1] = "En una Administraci&oacute;n P&uacute;blica cada &oacute;rgano de direcci&oacute;n (Ministerio, Conseller&iacute;a, Consejer&iacute;a) debe tener su propia sede electr&oacute;nica.";
 choices[70][2] = "Una vez constituida la sede electr&oacute;nica, los tablones de anuncios pueden ser sustituidos o complementados por la publicaci&oacute;n electr&oacute;nica en sede.";
 choices[70][3] = "Debe facilitar informaci&oacute;n de las oficinas de registro y atenci&oacute;n al ciudadano, de los &oacute;rganos de gobierno y el directorio de personal de la Administraci&oacute;n P&uacute;blica.";
 answers[70] = 2;
 units[70] = ['7'];
 blocks[70] = ['A2'];
 comments[70] = "Id Pregunta: 1791. ";
 preguntaids[70] = 1791


//  Id pregunta: 996 Año de creación de pregunta: 2016
 questions[71]= "72)  De acuerdo al articulo 56 de la ley 40/2015, las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[71]= new Array();
 choices[71][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[71][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[71][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[71][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[71] = 0;
 units[71] = ['4', '7', '8', '9'];
 blocks[71] = ['A1', 'A2'];
 comments[71] = "Id Pregunta: 996. Ley 40/2015";
 preguntaids[71] = 996


//  Id pregunta: 113 Año de creación de pregunta: 2016
 questions[72]= "73)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[72]= new Array();
 choices[72][0] = "Tres a&ntilde;os.";
 choices[72][1] = "Dos a&ntilde;os y medio.";
 choices[72][2] = "Cinco a&ntilde;os.";
 choices[72][3] = "Seis a&ntilde;os.";
 answers[72] = 3;
 units[72] = ['5'];
 blocks[72] = ['A1'];
 comments[72] = "Id Pregunta: 113. Uni&oacute;n Europea";
 preguntaids[72] = 113


//  Id pregunta: 222 Año de creación de pregunta: 2016
 questions[73]= "74)  Se consideran interesados en el procedimiento administrativo:";
 choices[73]= new Array();
 choices[73][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[73][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[73][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[73][3] = "todas son correctas";
 answers[73] = 0;
 units[73] = ['7'];
 blocks[73] = ['A2'];
 comments[73] = "Id Pregunta: 222. Ley 39/2015";
 preguntaids[73] = 222


//  Id pregunta: 284 Año de creación de pregunta: 2016
 questions[74]= "75)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[74]= new Array();
 choices[74][0] = "Con el a&ntilde;o anterior.";
 choices[74][1] = "Con los tres a&ntilde;os anteriores.";
 choices[74][2] = "Con el a&ntilde;o natural.";
 choices[74][3] = "Con los dos a&ntilde;os anteriores.";
 answers[74] = 2;
 units[74] = ['11'];
 blocks[74] = ['A2'];
 comments[74] = "Id Pregunta: 284. Presupuestos generales";
 preguntaids[74] = 284


