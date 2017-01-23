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
//  Id pregunta: 3685 Año de creación de pregunta: 2002
 questions[0]= "1)  Indicar la respuesta verdadera respecto a EFQM:";
 choices[0]= new Array();
 choices[0][0] = "El Modelo Europeo de Calidad se desarroll&oacute; en 1991 bajo la iniciativa de la European Foundation for QualityManagement (EFQM), formada en 1988 por un grupo de catorce importantes empresas europeas. En la actualidad la componen m&aacute;s de 400 miembros";
 choices[0][1] = "El modelo identific&oacute; una serie de elementos que ser&aacute;n la base para la Gesti&oacute;n de Calidad Total (TQM) dentro de las organizaciones y que se pueden agrupar en dos grandes bloques que podemos denominar: el C&oacute;mo y el Qu&eacute; o tambi&eacute;n los Agentes y los Resultados";
 choices[0][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son falsas";
 choices[0][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son verdaderas";
 answers[0] = 3;
 units[0] = ['92'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 3685. ";
 preguntaids[0] = 3685


//  Id pregunta: 2013 Año de creación de pregunta: 2002
 questions[1]= "2)  &iquest;Cu&aacute;l de estos m&eacute;todos no persigue directamente la reducci&oacute;n del TCO?:";
 choices[1]= new Array();
 choices[1][0] = "Inventario";
 choices[1][1] = "Estandarizaci&oacute;n";
 choices[1][2] = "Control de la configuraci&oacute;n";
 choices[1][3] = "Centralizaci&oacute;n";
 answers[1] = 3;
 units[1] = ['39'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 2013. ";
 preguntaids[1] = 2013


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


//  Id pregunta: 900 Año de creación de pregunta: 2016
 questions[3]= "4)  La especificaci&oacute;n del Institute of Electrical and Electronics Engineers (IEEE) para acceso inat&aacute;mbrico de banda ancha m&oacute;vil o MBWA, es la:";
 choices[3]= new Array();
 choices[3][0] = "IEEE 802.19";
 choices[3][1] = "IEEE 802.20";
 choices[3][2] = "IEEE 802.21";
 choices[3][3] = "IEEE 802.22";
 answers[3] = 1;
 units[3] = ['112'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 900. AGE A2 2015";
 preguntaids[3] = 900


//  Id pregunta: 9073 Año de creación de pregunta: 2014
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes opciones representa tipolog&iacute;as de sistemas SIG?";
 choices[4]= new Array();
 choices[4][0] = "SIG empresarial, SIG de sobremesa, Visualizadores SIG y WebSIG.";
 choices[4][1] = "SIG de componentes, Gesti&oacute;n Catastral y Servicios Posicionales.";
 choices[4][2] = "Ninguna es correcta.";
 choices[4][3] = "Son correctas a y b.";
 answers[4] = 2;
 units[4] = ['71'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 9073. ";
 preguntaids[4] = 9073


//  Id pregunta: 38 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[5]= new Array();
 choices[5][0] = "Cuatro.";
 choices[5][1] = "Ninguno.";
 choices[5][2] = "Dos.";
 choices[5][3] = "Seis.";
 answers[5] = 2;
 units[5] = ['1'];
 blocks[5] = ['A1'];
 comments[5] = "Id Pregunta: 38. Constituci&oacute;n de 1978";
 preguntaids[5] = 38


//  Id pregunta: 10276 Año de creación de pregunta: 2015
 questions[6]= "7)  Gesti&oacute;n T&eacute;cnica NO es responsable de&hellip;";
 choices[6]= new Array();
 choices[6][0] = "Mantener la infraestructura t&eacute;cnica";
 choices[6][1] = "Documentar y mantener las habilidades t&eacute;cnicas requeridas para el soporte y gesti&oacute;n de la infraestructura de TI";
 choices[6][2] = "Definir los Acuerdos de (OLA - Operations Level Agreement) para los equipos t&eacute;cnicos";
 choices[6][3] = "Diagnostico y recuperaci&oacute;n de fallos t&eacute;cnicos";
 answers[6] = 2;
 units[6] = ['101'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 10276. ";
 preguntaids[6] = 10276


//  Id pregunta: 9677 Año de creación de pregunta: 2014
 questions[7]= "8)  Indique cu&aacute;l es el m&eacute;todo indicado por el W3C para la optimizaci&oacute;n de la transmisi&oacute;n de mensajes SOAP:";
 choices[7]= new Array();
 choices[7][0] = "XOP XML-binary Optimized Protocol";
 choices[7][1] = "XOP XML-binary Optimized Packaging";
 choices[7][2] = "MTOM Message Transmission Optimization Mechanism";
 choices[7][3] = "REST Represantional State Transfer";
 answers[7] = 2;
 units[7] = ['55'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 9677. ";
 preguntaids[7] = 9677


//  Id pregunta: 8263 Año de creación de pregunta: 2011
 questions[8]= "9)  El impulso de la factura electr&oacute;nica, como obligatoria en el marco de la contrataci&oacute;n en el sector p&uacute;blico estatal se establece en la ley:";
 choices[8]= new Array();
 choices[8][0] = "34/2002, de 11 de Julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico.";
 choices[8][1] = "56/2007, de 28 de diciembre, de Medidas de Impulso de la Sociedad de la Informaci&oacute;n";
 choices[8][2] = "59/2003, de 19 de diciembre, de Firma Electr&oacute;nica.";
 choices[8][3] = "39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas";
 answers[8] = 1;
 units[8] = ['10'];
 blocks[8] = ['A2'];
 comments[8] = "Id Pregunta: 8263. Examen TIC A2 2010 interna";
 preguntaids[8] = 8263


//  Id pregunta: 4928 Año de creación de pregunta: 2002
 questions[9]= "10)  UDDI:";
 choices[9]= new Array();
 choices[9][0] = "Es una variante de alt&iacute;sima velocidad de la conocida FDDI";
 choices[9][1] = "Es una variante de FDDI adecuada para su desarrollo en LANs";
 choices[9][2] = "Significa User Definition Domain  Interface";
 choices[9][3] = "Ninguna de las anteriores es v&aacute;lida";
 answers[9] = 3;
 units[9] = ['74'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 4928. ";
 preguntaids[9] = 4928


//  Id pregunta: 1430 Año de creación de pregunta: 2016
 questions[10]= "11)  De conformidad con el art&iacute;culo 59 de la Constituci&oacute;n Espa&ntilde;ola, si no hubiere ninguna persona a quien corresponda la Regencia, &eacute;sta ser&aacute; nombrada por las Cortes Generales, y se compondr&aacute;:";
 choices[10]= new Array();
 choices[10][0] = "De una persona.";
 choices[10][1] = "De tres personas.";
 choices[10][2] = "De cinco personas.";
 choices[10][3] = "De una, tres o cinco personas.";
 answers[10] = 3;
 units[10] = ['1'];
 blocks[10] = ['A1'];
 comments[10] = "Id Pregunta: 1430. ";
 preguntaids[10] = 1430


//  Id pregunta: 609 Año de creación de pregunta: 2016
 questions[11]= "12)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[11]= new Array();
 choices[11][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[11][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[11][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[11][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[11] = 0;
 units[11] = ['45'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 609. Integraci&oacute;n continua";
 preguntaids[11] = 609


//  Id pregunta: 8228 Año de creación de pregunta: 2011
 questions[12]= "13)  En el protocolo SIP de voz sobre IP, &iquest;cu&aacute;l no es una entidad l&oacute;gica?";
 choices[12]= new Array();
 choices[12][0] = "Agente de usuario";
 choices[12][1] = "Servidor proxy";
 choices[12][2] = "Agente de usuario inverso";
 choices[12][3] = "Agente proxy";
 answers[12] = 3;
 units[12] = ['110'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 8228. Examen UPM A2 2011";
 preguntaids[12] = 8228


//  Id pregunta: 5592 Año de creación de pregunta: 2007
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes no es una caracter&iacute;stica de la arquitectura de red de Internet?";
 choices[13]= new Array();
 choices[13][0] = "Arquitectura abierta";
 choices[13][1] = "Control centralizado";
 choices[13][2] = "Basada en TCP/IP";
 choices[13][3] = "Organizaci&oacute;n jer&aacute;rquica";
 answers[13] = 1;
 units[13] = ['103'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 5592. ";
 preguntaids[13] = 5592


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[14]= "15)  Es falso que:";
 choices[14]= new Array();
 choices[14][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[14][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[14][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[14][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[14] = 1;
 units[14] = ['20'];
 blocks[14] = ['A4'];
 comments[14] = "Id Pregunta: 491. Direcci&oacute;n p&uacute;blica";
 preguntaids[14] = 491


//  Id pregunta: 9796 Año de creación de pregunta: 2015
 questions[15]= "16)  Europa 2020 tiene como prioridades un crecimiento:";
 choices[15]= new Array();
 choices[15][0] = "Global, tecnol&oacute;gico y sostenible.";
 choices[15][1] = "Informado, sostenible y solidario.";
 choices[15][2] = "Inteligente, sostenible e integrador.";
 choices[15][3] = "Arm&oacute;nico, estable y social.";
 answers[15] = 2;
 units[15] = ['19'];
 blocks[15] = ['A4'];
 comments[15] = "Id Pregunta: 9796. ";
 preguntaids[15] = 9796


//  Id pregunta: 10865 Año de creación de pregunta: 2015
 questions[16]= "17)  SATA III ofrece una transferencia de datos de:";
 choices[16]= new Array();
 choices[16][0] = "100 MB/s";
 choices[16][1] = "200 MB/s";
 choices[16][2] = "300 MB/s";
 choices[16][3] = "600 MB/s";
 answers[16] = 3;
 units[16] = ['53'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 10865. ";
 preguntaids[16] = 10865


//  Id pregunta: 7616 Año de creación de pregunta: 2010
 questions[17]= "18)  En una situaci&oacute;n donde se ha producido un fallo del sistema que no ha ocasionado da&ntilde;os en la Base de Datos, &iquest;qu&eacute; se utilizar&iacute;a en el proceso de recuperaci&oacute;n?";
 choices[17]= new Array();
 choices[17][0] = "Copias de seguridad y ficheros de punto de sincronismo (checkpoint).";
 choices[17][1] = "Fichero diario (fichero log) para deshacer y rehacer transacciones.";
 choices[17][2] = "Rollback de la transacci&oacute;n.";
 choices[17][3] = "S&oacute;lo copia de seguridad con p&eacute;rdida de &uacute;ltimas transacciones.";
 answers[17] = 1;
 units[17] = ['60'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 7616. Map 2006";
 preguntaids[17] = 7616


//  Id pregunta: 3941 Año de creación de pregunta: 2002
 questions[18]= "19)  No es un tipo de prueba:";
 choices[18]= new Array();
 choices[18][0] = "Pruebas individuales";
 choices[18][1] = "Pruebas unitarias";
 choices[18][2] = "Pruebas de Aceptaci&oacute;n";
 choices[18][3] = "Pruebas de Regresi&oacute;n";
 answers[18] = 0;
 units[18] = ['91'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 3941. ";
 preguntaids[18] = 3941


//  Id pregunta: 8143 Año de creación de pregunta: 2011
 questions[19]= "20)  La Web sem&aacute;ntica pretende dotar a la Web de mayor significado, gracias a una informaci&oacute;n mejor definida. Para ello se utilizan tecnolog&iacute;as como:";
 choices[19]= new Array();
 choices[19][0] = "RTF.";
 choices[19][1] = "RML.";
 choices[19][2] = "OWL.";
 choices[19][3] = "Jabsys.";
 answers[19] = 2;
 units[19] = ['125'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 8143. Examen TIC A2 2010 interna";
 preguntaids[19] = 8143


//  Id pregunta: 6423 Año de creación de pregunta: 2003
 questions[20]= "21)  Indique cu&aacute;l es una caracter&iacute;stica t&eacute;cnica de W-CDMA, utilizada en UMTS:";
 choices[20]= new Array();
 choices[20][0] = "Emplea radiocanales de 50MHz de ancho de banda";
 choices[20][1] = "Permite transmisiones multic&oacute;digo";
 choices[20][2] = "No admite duplexaci&oacute;n por divisi&oacute;n en frecuencia (FDD)";
 choices[20][3] = "No admite duplexaci&oacute;n por divisi&oacute;n en el tiempo (TDD)";
 answers[20] = 1;
 units[20] = ['117'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 6423. ";
 preguntaids[20] = 6423


//  Id pregunta: 6093 Año de creación de pregunta: 2003
 questions[21]= "22)  &iquest;Cu&aacute;l de los siguientes elementos NO interviene en el c&aacute;lculo de los puntos de funci&oacute;n?:";
 choices[21]= new Array();
 choices[21][0] = "Entradas";
 choices[21][1] = "Salidas";
 choices[21][2] = "Consultas";
 choices[21][3] = "Usuarios";
 answers[21] = 3;
 units[21] = ['94'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 6093. Examen TIC A1 MAP 2007";
 preguntaids[21] = 6093


//  Id pregunta: 1894 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA?:";
 choices[22]= new Array();
 choices[22][0] = "En las Cartas de Servicio que se elaboren, se deben establecer los dispositivos de seguimiento y evaluaci&oacute;n";
 choices[22][1] = "La Calidad Total implica un enfoque que comprende tanto el concepto producto como el concepto servicio, no como elementos independientes.";
 choices[22][2] = "Las Cartas de Servicios expresan un compromiso con los ciudadanos para mejorar la calidad de los servicios";
 choices[22][3] = "Las Cartas de Servicios no tienen la consideraci&oacute;n de documentos oficiales.";
 answers[22] = 3;
 units[22] = ['19'];
 blocks[22] = ['A4'];
 comments[22] = "Id Pregunta: 1894. ";
 preguntaids[22] = 1894


//  Id pregunta: 6117 Año de creación de pregunta: 2003
 questions[23]= "24)  Seg&uacute;n el est&aacute;ndar ISO 7816-2 sobre contactos del chip en las tarjetas inteligentes, &iquest;cu&aacute;l de los siguientescontactos se utiliza para la se&ntilde;al de reloj?:";
 choices[23]= new Array();
 choices[23][0] = "C2";
 choices[23][1] = "C3";
 choices[23][2] = "C5";
 choices[23][3] = "C6";
 answers[23] = 1;
 units[23] = ['78'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 6117. Examen TIC A1 MAP 2007";
 preguntaids[23] = 6117


//  Id pregunta: 9484 Año de creación de pregunta: 2014
 questions[24]= "25)  ACID es un acr&oacute;nimo que, en el contexto de las bases de datos, hace referencia a un conjunto de caracter&iacute;sticas que deben asumir las transacciones para garantizar su procesamiento fiable. De entre &eacute;stas:";
 choices[24]= new Array();
 choices[24][0] = "La Consistencia (C) hace referencia a que las operaciones llevadas a cabo por la transacci&oacute;n ser&aacute;n completadas y confirmadas en su totalidad, o ser&aacute;n deshechas, de modo que no quede ninguna operaci&oacute;n a medias.";
 choices[24][1] = "La caracter&iacute;stica de Integridad (I) garantiza que la base de datos se transforma desde un estado &iacute;ntegro o v&aacute;lido a otro estado &iacute;ntegro o v&aacute;lido.";
 choices[24][2] = "Autenticidad (A) es la prueba de qui&eacute;n es el autor de un dato y garantiza su no repudio";
 choices[24][3] = "Durabilidad (D) es la propiedad que asegura que una vez realizada la operaci&oacute;n, &eacute;sta persistir&aacute; y no se podr&aacute; deshacer aunque falle el sistema y que de esta forma los datos sobrevivan de alguna manera.";
 answers[24] = 3;
 units[24] = ['60'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 9484. Atomicidad: Si una operaci&oacute;n consiste en una serie de pasos, todos ellos ocurren o ninguno, es decir, las transacciones son completas. C = Consistencia = Integridad; I= Isolation = Aislamiento= una operaci&oacute;n no afecta a otras; D =durabilidad";
 preguntaids[24] = 9484


//  Id pregunta: 4268 Año de creación de pregunta: 2006
 questions[25]= "26)  Una Base de Datos documental";
 choices[25]= new Array();
 choices[25][0] = "presenta un modelo de recuperaci&oacute;n de informaci&oacute;n probabil&iacute;stica";
 choices[25][1] = "presenta un &iacute;ndice de incertidumbre en la respuesta";
 choices[25][2] = "las dos anteriores";
 choices[25][3] = "ninguna de las anteriores";
 answers[25] = 2;
 units[25] = ['61'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 4268. ";
 preguntaids[25] = 4268


//  Id pregunta: 202 Año de creación de pregunta: 2016
 questions[26]= "27)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[26]= new Array();
 choices[26][0] = "Resoluci&oacute;n.";
 choices[26][1] = "Desistimiento o renuncia.";
 choices[26][2] = "Caducidad.";
 choices[26][3] = "Todas las anteriores.";
 answers[26] = 3;
 units[26] = ['7'];
 blocks[26] = ['A2'];
 comments[26] = "Id Pregunta: 202. Ley 39/2015";
 preguntaids[26] = 202


//  Id pregunta: 489 Año de creación de pregunta: 2016
 questions[27]= "28)  Son rasgos fundamentales del sistema burocr&aacute;tico:";
 choices[27]= new Array();
 choices[27][0] = "La racionalidad en la divisi&oacute;n del trabajo";
 choices[27][1] = "La eficiencia en el uso de los recursos p&uacute;blicos";
 choices[27][2] = "La competencia t&eacute;cnica y la meritocracia";
 choices[27][3] = "a) y c) son rasgos fundamentales del sistema burocr&aacute;tico";
 answers[27] = 3;
 units[27] = ['20'];
 blocks[27] = ['A4'];
 comments[27] = "Id Pregunta: 489. Direcci&oacute;n p&uacute;blica";
 preguntaids[27] = 489


//  Id pregunta: 344 Año de creación de pregunta: 2016
 questions[28]= "29)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[28]= new Array();
 choices[28][0] = "Alrededor de un 26% del PIB";
 choices[28][1] = "Alrededor de un 11% del PIB";
 choices[28][2] = "Alrededor de un 34% del PIB";
 choices[28][3] = "Alrededor de un 7% del PIB";
 answers[28] = 1;
 units[28] = ['12'];
 blocks[28] = ['A3'];
 comments[28] = "Id Pregunta: 344. Modelo econ&oacute;mico";
 preguntaids[28] = 344


//  Id pregunta: 1570 Año de creación de pregunta: 2016
 questions[29]= "30)  A los efectos de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, se&ntilde;ale cu&aacute;l NO es un servicio de la sociedad de la informaci&oacute;n:";
 choices[29]= new Array();
 choices[29][0] = "La organizaci&oacute;n y gesti&oacute;n de subastas por medios electr&oacute;nicos o de mercados y centros comerciales virtuales.";
 choices[29][1] = "El teletexto televisivo y otros servicios equivalentes como las gu&iacute;as electr&oacute;nicas de programas ofrecidas a trav&eacute;s de las plataformas televisivas.";
 choices[29][2] = "El v&iacute;deo bajo demanda, como servicio en que el usuario puede seleccionar a trav&eacute;s de la red, tanto el programa deseado como el momento de su suministro y recepci&oacute;n.";
 choices[29][3] = "El suministro de informaci&oacute;n por v&iacute;a telem&aacute;tica.";
 answers[29] = 1;
 units[29] = ['19'];
 blocks[29] = ['A4'];
 comments[29] = "Id Pregunta: 1570. ";
 preguntaids[29] = 1570


//  Id pregunta: 3653 Año de creación de pregunta: 2002
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de UML?";
 choices[30]= new Array();
 choices[30][0] = "Los paquetes pueden contener clases, objetos, relaciones, componentes, nodos y diagramas asociados";
 choices[30][1] = "Los diagramas de clases expresan la estructura est&aacute;tica de un sistema, con las clases, los atributos y las operaciones";
 choices[30][2] = "Las relaciones entre los casos de uso son de subordinaci&oacute;n, dependencia, igualdad y superioridad";
 choices[30][3] = "Los nodos del diagrama de despliegue se representan con un cubo, y las l&iacute;neas que los unen simbolizan los soportes de las comunicaciones";
 answers[30] = 2;
 units[30] = ['85'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 3653. ";
 preguntaids[30] = 3653


//  Id pregunta: 8274 Año de creación de pregunta: 2011
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes NO es un sistema operativo para dispositivos m&oacute;viles?";
 choices[31]= new Array();
 choices[31][0] = "Android.";
 choices[31][1] = "SymbianOS.";
 choices[31][2] = "HTC Mobile.";
 choices[31][3] = "RIM BlackBerry.";
 answers[31] = 2;
 units[31] = ['59'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 8274. Examen TIC A2 2010 interna";
 preguntaids[31] = 8274


//  Id pregunta: 8271 Año de creación de pregunta: 2011
 questions[32]= "33)  &iquest;En qu&eacute; generaci&oacute;n de ordenadores se empez&oacute; a utilizar el transistor?";
 choices[32]= new Array();
 choices[32][0] = "En la primera generaci&oacute;n,";
 choices[32][1] = "En la segunda generaci&oacute;n";
 choices[32][2] = "En la tercera generaci&oacute;n.";
 choices[32][3] = "En la cuarta generaci&oacute;n";
 answers[32] = 1;
 units[32] = ['49'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 8271. Examen TIC A2 2010 interna";
 preguntaids[32] = 8271


//  Id pregunta: 31 Año de creación de pregunta: 2016
 questions[33]= "34)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[33]= new Array();
 choices[33][0] = "Decretos Legislativos.";
 choices[33][1] = "Decretos-leyes.";
 choices[33][2] = "Leyes de bases.";
 choices[33][3] = "Reales Decretos del Consejo de Ministros.";
 answers[33] = 0;
 units[33] = ['1'];
 blocks[33] = ['A1'];
 comments[33] = "Id Pregunta: 31. Constituci&oacute;n de 1978";
 preguntaids[33] = 31


//  Id pregunta: 8383 Año de creación de pregunta: 2011
 questions[34]= "35)  &iquest;C&oacute;mo se llama la PDU de nivel 3?";
 choices[34]= new Array();
 choices[34][0] = "Paquete";
 choices[34][1] = "SPDU";
 choices[34][2] = "Trama";
 choices[34][3] = "TPDU";
 answers[34] = 0;
 units[34] = ['105'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 8383. ";
 preguntaids[34] = 8383


//  Id pregunta: 9 Año de creación de pregunta: 2016
 questions[35]= "36)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[35]= new Array();
 choices[35][0] = "l Consejo General del Poder Judicial";
 choices[35][1] = "El pleno de Tribunal Constitucional";
 choices[35][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[35][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[35] = 3;
 units[35] = ['1'];
 blocks[35] = ['A1'];
 comments[35] = "Id Pregunta: 9. Constituci&oacute;n de 1978";
 preguntaids[35] = 9


//  Id pregunta: 5302 Año de creación de pregunta: 2006
 questions[36]= "37)  Se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[36]= new Array();
 choices[36][0] = "En las redes P2P no existen clientes ni servidores fijos.";
 choices[36][1] = "Se necesitan servidores intermedios que mantienen la relaci&oacute;n de direcciones IP de los usuarios de la red.";
 choices[36][2] = "La informaci&oacute;n no puede ser intercambiada sin la intervenci&oacute;n de los servidores.";
 choices[36][3] = "Todas las respuestas son correctas.";
 answers[36] = 2;
 units[36] = ['103'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 5302. ";
 preguntaids[36] = 5302


//  Id pregunta: 550 Año de creación de pregunta: 2016
 questions[37]= "38)  El concepto de Green CPD est&aacute; muy avanzado y se est&aacute; convirtiendo en un referente. Una de las t&eacute;cnicas utilizadas es el Free Cooling. &iquest;En qu&eacute; consiste?";
 choices[37]= new Array();
 choices[37][0] = "Utilizar software libre en el control de la climatizaci&oacute;n.";
 choices[37][1] = "Utilizar temperaturas bajo cero para la climatizaci&oacute;n.";
 choices[37][2] = "Se trata del pasillo fr&iacute;o.";
 choices[37][3] = "Utilizar las bajas temperaturas del aire exterior para la climatizaci&oacute;n.";
 answers[37] = 3;
 units[37] = ['30'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 550. AGE A2 2015";
 preguntaids[37] = 550


//  Id pregunta: 5053 Año de creación de pregunta: 2002
 questions[38]= "39)  Se&ntilde;alar qu&eacute; afirmaci&oacute;n no es correcta. En una red de conmutaci&oacute;n de paquetes para evitar la congesti&oacute;n se puede:";
 choices[38]= new Array();
 choices[38][0] = "Reservar espacio suficiente de almacenamiento en los nodos";
 choices[38][1] = "Descartar paquetes";
 choices[38][2] = "En una red de conmutaci&oacute;n de paquetes no hay congesti&oacute;n";
 choices[38][3] = "Enviar paquetes de contenci&oacute;n";
 answers[38] = 2;
 units[38] = ['112'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 5053. ";
 preguntaids[38] = 5053


//  Id pregunta: 3050 Año de creación de pregunta: 2002
 questions[39]= "40)  Se&ntilde;ale la respuesta falsa. Una pasarela de pagos:";
 choices[39]= new Array();
 choices[39][0] = "Permite a un comercio en internet cobrar a sus clientes, efectuando la transacci&oacute;n por medio de un tercero de confianza";
 choices[39][1] = "Es un aplicativo software que permite conectar al cliente con el comercio de forma segura";
 choices[39][2] = "Es un dispositivo hardware que se instala en el servidor web de la tienda viertual";
 choices[39][3] = "Abstrae el manejo de los pagos de la l&oacute;gica de la aplicaci&oacute;n de la tienda";
 answers[39] = 2;
 units[39] = ['10', '75'];
 blocks[39] = ['A2', 'B2'];
 comments[39] = "Id Pregunta: 3050. ";
 preguntaids[39] = 3050


//  Id pregunta: 4515 Año de creación de pregunta: 2002
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes respuestas es falsa respecto a los medios f&iacute;sicos de transmisi&oacute;n de informaci&oacute;n?:";
 choices[40]= new Array();
 choices[40][0] = "Con cableado de par trenzado se pueden alcanzar varios megabits por segundo";
 choices[40][1] = "El cable coaxial se utiliza para redes de &aacute;rea local";
 choices[40][2] = "La fibra &oacute;ptica monomodo es m&aacute;s barata que la fibra &oacute;ptica multimodo";
 choices[40][3] = "La propagaci&oacute;n de las microondas se ve afectada por los fen&oacute;menos atmosf&eacute;ricos";
 answers[40] = 2;
 units[40] = ['104'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 4515. ";
 preguntaids[40] = 4515


//  Id pregunta: 3277 Año de creación de pregunta: 2003
 questions[41]= "42)  Qu&eacute; capas se pueden distinguir en la arquitectura de ODBC";
 choices[41]= new Array();
 choices[41][0] = "Cuatro: Aplicaci&oacute;n, administrador de or&iacute;genes de datos, controladores ODBC y or&iacute;genes de datos";
 choices[41][1] = "Tres: Aplicaci&oacute;n, ficherosy controlador basado en archivos";
 choices[41][2] = "Tres: Aplicaci&oacute;n, administrador y controlador ODBC basado en un sistema gestor de bases de datos";
 choices[41][3] = "Cuatro: Aplicaci&oacute;n, procesador, ficheros y controlador Driver Manager";
 answers[41] = 0;
 units[41] = ['61'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 3277. ";
 preguntaids[41] = 3277


//  Id pregunta: 9901 Año de creación de pregunta: 2015
 questions[42]= "43)  La Ley 39/2015 es de aplicaci&oacute;n obligatoria:";
 choices[42]= new Array();
 choices[42][0] = "&Uacute;nicamente para la Administraci&oacute;n General del Estado.";
 choices[42][1] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Administraci&oacute;n Local.";
 choices[42][2] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas, Administraci&oacute;n Local y Sector P&uacute;blico Institucional.";
 choices[42][3] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas, Administraci&oacute;n Local, Sector P&uacute;blico Institucional y Corporaciones de Derecho P&uacute;blico.";
 answers[42] = 2;
 units[42] = ['7', '19'];
 blocks[42] = ['A2', 'A4'];
 comments[42] = "Id Pregunta: 9901. ";
 preguntaids[42] = 9901


//  Id pregunta: 10401 Año de creación de pregunta: 2015
 questions[43]= "44)  &iquest;C&oacute;mo se denomina el plan de la Agenda Digital Espa&ntilde;ola referente al objetivo de Despliegue de redes r&aacute;pidas y ultrarr&aacute;pidas?";
 choices[43]= new Array();
 choices[43][0] = "Plan de Impulso del acceso r&aacute;pido y ultrarr&aacute;pido a Internet";
 choices[43][1] = "Plan de Telecomunicaciones Ultrarr&aacute;pidas";
 choices[43][2] = "Plan de Despliegue de infraestructuras de Red Espa&ntilde;ola";
 choices[43][3] = "Ninguna de las anteriores";
 answers[43] = 1;
 units[43] = ['19'];
 blocks[43] = ['A4'];
 comments[43] = "Id Pregunta: 10401. ";
 preguntaids[43] = 10401


//  Id pregunta: 1082 Año de creación de pregunta: 2016
 questions[44]= "45)  El modelo de reproducci&oacute;n del color CMYK :";
 choices[44]= new Array();
 choices[44][0] = "Es el modelo utilizado por la mayor&iacute;a de esc&aacute;neres.";
 choices[44][1] = "Es un modelo de tipo sustractivo.";
 choices[44][2] = "Se basa en la combinaci&oacute;n de tres colores: rojo, verde y azul.";
 choices[44][3] = "Es el modelo utilizado por la mayor&iacute;a de monitores.";
 answers[44] = 1;
 units[44] = ['80'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 1082. ";
 preguntaids[44] = 1082


//  Id pregunta: 10023 Año de creación de pregunta: 2015
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes NO es una metodolog&iacute;a de desarrollo?";
 choices[45]= new Array();
 choices[45][0] = "MERISE.";
 choices[45][1] = "SDM (Structured Development Method).";
 choices[45][2] = "RUP (Rational Unified Process).";
 choices[45][3] = "SCRUM.";
 answers[45] = 1;
 units[45] = ['84'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 10023. Examen TIC A2 2014";
 preguntaids[45] = 10023


//  Id pregunta: 8427 Año de creación de pregunta: 2011
 questions[46]= "47)  De acuerdo con la ley 18/2011, &iquest;cu&aacute;l no es un derecho de los profesionales de la justicia en relaci&oacute;n con la utilizaci&oacute;n de los medios electr&oacute;nicos en la actividad judicial?";
 choices[46]= new Array();
 choices[46][0] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que sean representantes procesales de la parte personada";
 choices[46][1] = "A utilizar los sistemas de firma electr&oacute;nica del Documento Nacional de Identidad o cualquier otro reconocido, siempre que dicho sistema le identifique de forma un&iacute;voca como profesional";
 choices[46][2] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que acrediten inter&eacute;s leg&iacute;timo";
 choices[46][3] = "Todos los anteriores lo son";
 answers[46] = 3;
 units[46] = ['2'];
 blocks[46] = ['A1'];
 comments[46] = "Id Pregunta: 8427. ";
 preguntaids[46] = 8427


//  Id pregunta: 8975 Año de creación de pregunta: 2013
 questions[47]= "48)  Las comunicaciones comerciales no solicitadas realizadas a trav&eacute;s de correo electr&oacute;nico o medios de comunicaci&oacute;n electr&oacute;nica equivalentes:";
 choices[47]= new Array();
 choices[47][0] = "Deben incluir al comienzo del mensaje la palabra &laquo;publicidad&raquo;.";
 choices[47][1] = "Deben indicar la persona f&iacute;sica o jur&iacute;dica en nombre de la cual se realizan.";
 choices[47][2] = "Deben incluir claramente las condiciones comerciales o promocionales.";
 choices[47][3] = "Est&aacute;n prohibidas.";
 answers[47] = 3;
 units[47] = ['19'];
 blocks[47] = ['A4'];
 comments[47] = "Id Pregunta: 8975. Examen TIC A1 2011";
 preguntaids[47] = 8975


//  Id pregunta: 8369 Año de creación de pregunta: 2011
 questions[48]= "49)  HDLC define tres tipos de estaciones, dos configuraciones de enlace y tres modos de operaci&oacute;n para la transferencia de los datos. Se&ntilde;ale la respuesta correcta en relaci&oacute;n a dichas definiciones:";
 choices[48]= new Array();
 choices[48][0] = "La Configuraci&oacute;n de Enlace no Balanceada est&aacute; formada por una estaci&oacute;n primaria y una o m&aacute;s estaciones secundarias y &uacute;nicamente se permite la transmisi&oacute;n semi-duplex";
 choices[48][1] = "El modo de respuesta normal (NRM) se utiliza en la configuraci&oacute;n no balanceada";
 choices[48][2] = "El modo de respuesta as&iacute;ncrono (ARM) se utiliza en la configuraci&oacute;n balanceada.";
 choices[48][3] = "Solamente existen dos tipos de estaciones, primaria y secundaria";
 answers[48] = 1;
 units[48] = ['105'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 8369. Analista Ayto. Madrid 2010";
 preguntaids[48] = 8369


//  Id pregunta: 8952 Año de creación de pregunta: 2013
 questions[49]= "50)  &iquest;En qu&eacute; versi&oacute;n se produjo el cambio de nomenclatura de la plataforma Java, pas&aacute;ndose a denominar Java Platform cuando anteriormente se le denominaba Java 2?";
 choices[49]= new Array();
 choices[49][0] = "Entre la versi&oacute;n 1.1 y 1.2";
 choices[49][1] = "Entre la versi&oacute;n 1.3 y 1.4";
 choices[49][2] = "Entre la versi&oacute;n 1.4 y 5.0";
 choices[49][3] = "La plataforma Java nunca se denomin&oacute; Java 2";
 answers[49] = 2;
 units[49] = ['64'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 8952. ";
 preguntaids[49] = 8952


//  Id pregunta: 6875 Año de creación de pregunta: 2010
 questions[50]= "51)  Entre las t&eacute;cnicas y pr&aacute;cticas de educci&oacute;n de requisitos utilizadas en la ingenier&iacute;a de requisitos NO se encuentra la siguiente:";
 choices[50]= new Array();
 choices[50][0] = "Brainstorming.";
 choices[50][1] = "Casos de uso.";
 choices[50][2] = "M&eacute;todo Albrecht.";
 choices[50][3] = "Prototipado.";
 answers[50] = 2;
 units[50] = ['84'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 6875. TIC A 2009";
 preguntaids[50] = 6875


//  Id pregunta: 4098 Año de creación de pregunta: 2003
 questions[51]= "52)  Una de las siguientes caracter&iacute;sticas no se corresponde con las del SW";
 choices[51]= new Array();
 choices[51][0] = "fabricaci&oacute;n &uacute;nica, no en serie";
 choices[51][1] = "F&aacute;cil de modificar pero dificil de validar";
 choices[51][2] = "Proceso de desarrollo f&aacute;cil de controlar";
 choices[51][3] = "Todas los correctas";
 answers[51] = 2;
 units[51] = ['91'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 4098. ";
 preguntaids[51] = 4098


//  Id pregunta: 7133 Año de creación de pregunta: 2010
 questions[52]= "53)  En relaci&oacute;n a l&iacute;mites a los derechos exclusivos de la explotaci&oacute;n de un programa de ordenador por parte de quien sea su titular, establecidos en Ley de Propiedad Intelectual, se&ntilde;ale la afirmaci&oacute;n correcta.";
 choices[52]= new Array();
 choices[52][0] = "La realizaci&oacute;n de una copia de seguridad por parte de quien tiene derecho a utilizar el programa no podr&aacute; impedirse por contrato en cuanto resulte necesaria para dicha utilizaci&oacute;n.";
 choices[52][1] = "La realizaci&oacute;n de copias privadas por parte de quien tiene derecho a utilizar el programa no podr&aacute; impedirse.";
 choices[52][2] = "La realizaci&oacute;n de copias de seguridad por parte de quien tiene derecho a utilizar el programa no podr&aacute; impedirse por contrato en cuanto resulten necesarias para dicha utilizaci&oacute;n.";
 choices[52][3] = "La realizaci&oacute;n de una copia privada por parte de quien tiene derecho a utilizar el programa no podr&aacute; impedirse.";
 answers[52] = 0;
 units[52] = ['41'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 7133. Art&iacute;culo 100 RDL 1/1996";
 preguntaids[52] = 7133


//  Id pregunta: 6080 Año de creación de pregunta: 2003
 questions[53]= "54)  El est&aacute;ndar WMS (Web Map Service), que permite publicar cartograf&iacute;a en Internet, &iquest;a cu&aacute;l de las siguientes organizaciones pertenece?:";
 choices[53]= new Array();
 choices[53][0] = "ISO (International Standards Organization).";
 choices[53][1] = "OGC (Open Geospatial Consortium).";
 choices[53][2] = "FGDC (Federal Geographic Data Committee).";
 choices[53][3] = "Consejo Superior Geogr&aacute;fico.";
 answers[53] = 1;
 units[53] = ['71'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 6080. Examen TIC A1 MAP 2007";
 preguntaids[53] = 6080


//  Id pregunta: 2932 Año de creación de pregunta: 2002
 questions[54]= "55)  La especificaci&oacute;n XSLT define:";
 choices[54]= new Array();
 choices[54][0] = "El formato de visualizaci&oacute;n de los documentos XML";
 choices[54][1] = "El formato de ordenaci&oacute;n de etiquetas o tags de documentos XML";
 choices[54][2] = "La definici&oacute;n de datos en los documentos XML";
 choices[54][3] = "La estructura de enlace en los documentos XML";
 answers[54] = 0;
 units[54] = ['74'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 2932. ";
 preguntaids[54] = 2932


//  Id pregunta: 3163 Año de creación de pregunta: 2009
 questions[55]= "56)  &iquest;Deben los prestadores de servicios de la sociedad de la informaci&oacute;n inscribirse en alg&uacute;n registro?:";
 choices[55]= new Array();
 choices[55][0] = "Es necesaria una autorizaci&oacute;n administrativa";
 choices[55][1] = "S&iacute;, pero a&uacute;n no se ha decidido donde";
 choices[55][2] = "No, pero los datos de su inscripci&oacute;n en el Registro Mercantil en el que, en su caso, se encuentren inscritos o de aquel otro registro p&uacute;blico en el que lo estuvieran para la adquisici&oacute;n de personalidad jur&iacute;dica o a los solos efectos de publicidad forman parte de la informaci&oacute;n general considerada en el art&iacute;culo 10 de la Ley 34/2002.";
 choices[55][3] = "No, pero se debe comunicar al Registro Mercantil el nombre de dominio si es utilizado para publicidad";
 answers[55] = 2;
 units[55] = ['19'];
 blocks[55] = ['A4'];
 comments[55] = "Id Pregunta: 3163. Ley 34/2002, art&iacute;culo 9";
 preguntaids[55] = 3163


//  Id pregunta: 115 Año de creación de pregunta: 2016
 questions[56]= "57)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[56]= new Array();
 choices[56][0] = "Estrasburgo.";
 choices[56][1] = "Bruselas.";
 choices[56][2] = "Luxemburgo.";
 choices[56][3] = "Holanda.";
 answers[56] = 0;
 units[56] = ['5'];
 blocks[56] = ['A1'];
 comments[56] = "Id Pregunta: 115. Uni&oacute;n Europea";
 preguntaids[56] = 115


//  Id pregunta: 3894 Año de creación de pregunta: 2002
 questions[57]= "58)  El nivel b&aacute;sico de comprensi&oacute;n donde comienza la abstracci&oacute;n y se aplican reglas gramaticales es el:";
 choices[57]= new Array();
 choices[57][0] = "Nivel fonol&oacute;gico";
 choices[57][1] = "Nivel fon&eacute;tico";
 choices[57][2] = "Nivel ac&uacute;stico";
 choices[57][3] = "Nivel l&eacute;xico-sint&aacute;ctico";
 answers[57] = 3;
 units[57] = ['81'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 3894. ";
 preguntaids[57] = 3894


//  Id pregunta: 3642 Año de creación de pregunta: 2002
 questions[58]= "59)  &iquest;C&oacute;mo conviene que sea la cohesi&oacute;n entre m&oacute;dulos?";
 choices[58]= new Array();
 choices[58][0] = "M&aacute;xima.";
 choices[58][1] = "M&iacute;nima.";
 choices[58][2] = "No es importante.";
 choices[58][3] = "Por defecto.";
 answers[58] = 0;
 units[58] = ['89'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 3642. ";
 preguntaids[58] = 3642


//  Id pregunta: 2344 Año de creación de pregunta: 2004
 questions[59]= "60)  &iquest;En qu&eacute; fase del ciclo de vida se deben contemplar los controles de aplicaci&oacute;n por primera vez?";
 choices[59]= new Array();
 choices[59][0] = "Dise&ntilde;o";
 choices[59][1] = "An&aacute;lisis";
 choices[59][2] = "Construcci&oacute;n";
 choices[59][3] = "Pruebas de aceptaci&oacute;n";
 answers[59] = 1;
 units[59] = ['36'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 2344. ";
 preguntaids[59] = 2344


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[60]= "61)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[60]= new Array();
 choices[60][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[60][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[60][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[60][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[60] = 0;
 units[60] = ['1'];
 blocks[60] = ['A1'];
 comments[60] = "Id Pregunta: 68. Constituci&oacute;n de 1978";
 preguntaids[60] = 68


//  Id pregunta: 4528 Año de creación de pregunta: 2002
 questions[61]= "62)  Dentro del modelo OSI la funci&oacute;n de 'permitir la comunicaci&oacute;n simult&aacute;nea, utilizando una o varias direcciones de red, de una o varias sesiones de trabajo', corresponde al nivel:";
 choices[61]= new Array();
 choices[61][0] = "Nivel de red";
 choices[61][1] = "Nivel de transporte";
 choices[61][2] = "Nivel de sesi&oacute;n";
 choices[61][3] = "Nivel de presentaci&oacute;n";
 answers[61] = 1;
 units[61] = ['105'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 4528. ";
 preguntaids[61] = 4528


//  Id pregunta: 4573 Año de creación de pregunta: 2002
 questions[62]= "63)  &iquest;Cu&aacute;l es la relaci&oacute;n entre IMT-2000 y UMTS?:";
 choices[62]= new Array();
 choices[62][0] = "Es el mismo sistema";
 choices[62][1] = "UMTS forma parte de la familia IMT-2000";
 choices[62][2] = "IMT-2000 forma parte de la familia UMTS";
 choices[62][3] = "Son est&aacute;ndares diferentes";
 answers[62] = 1;
 units[62] = ['117'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 4573. ";
 preguntaids[62] = 4573


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[63]= "64)  La presidencia del Consejo se ejerce de forma rotatoria cada:";
 choices[63]= new Array();
 choices[63][0] = "4 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[63][1] = "6 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[63][2] = "4 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 choices[63][3] = "6 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 answers[63] = 1;
 units[63] = ['5'];
 blocks[63] = ['A1'];
 comments[63] = "Id Pregunta: 159. Uni&oacute;n Europea";
 preguntaids[63] = 159


//  Id pregunta: 5081 Año de creación de pregunta: 2002
 questions[64]= "65)  TCP utiliza un algoritmo para control de flujo denominado Slow Start . Dicho algoritmo consiste en:";
 choices[64]= new Array();
 choices[64][0] = "Incrementar el tama&ntilde;o de la ventana de congesti&oacute;n de forma lineal";
 choices[64][1] = "Incrementar el tama&ntilde;o de la ventana de congesti&oacute;n de forma exponencial";
 choices[64][2] = "Reducir el tama&ntilde;o de la ventana de congesti&oacute;n de forma lineal";
 choices[64][3] = "Reducir el tama&ntilde;o de la ventana de congesti&oacute;n de forma exponencial";
 answers[64] = 1;
 units[64] = ['112'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 5081. ";
 preguntaids[64] = 5081


//  Id pregunta: 3603 Año de creación de pregunta: 2002
 questions[65]= "66)  La planificaci&oacute;n estrat&eacute;gica responde a las siguientes cuestiones salvo a una, &iquest;cu&aacute;l?:";
 choices[65]= new Array();
 choices[65][0] = "Cu&aacute;l es la posici&oacute;n futura deseable";
 choices[65][1] = "Cu&aacute;l es la situaci&oacute;n actual";
 choices[65][2] = "Cu&aacute;les son los escalones necesarios para pasar de donde estamos a donde deseamos estar";
 choices[65][3] = "Cu&aacute;l es el costo de dichos escalones";
 answers[65] = 3;
 units[65] = ['83'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 3603. ";
 preguntaids[65] = 3603


//  Id pregunta: 10055 Año de creación de pregunta: 2015
 questions[66]= "67)  En cuanto a las especificaciones MTOM y XOP, &iquest;cu&aacute;l de las siguientes sentencias NO es correcta?";
 choices[66]= new Array();
 choices[66][0] = "XOP es un acr&oacute;nimo de XML-binary Optimized Packaging.";
 choices[66][1] = "MTOM/XOP son recomendaciones desarrolladas por la IETF.";
 choices[66][2] = "MTOM optimiza la transferencia de datos binarios sobre SOAP.";
 choices[66][3] = "MTOM normalmente usa XOP para serializar el mensaje que contiene datos binarios.";
 answers[66] = 1;
 units[66] = ['74'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 10055. Examen TIC A2 2014";
 preguntaids[66] = 10055


//  Id pregunta: 5363 Año de creación de pregunta: 2006
 questions[67]= "68)  Un sitio frio de respaldo se caracteriza por";
 choices[67]= new Array();
 choices[67][0] = "Un coste reducido de preparaci&oacute;n ante desastres";
 choices[67][1] = "Altos costes de implementaci&oacute;n y mantenimiento";
 choices[67][2] = "Un tiempo reducido de recuperaci&oacute;n";
 choices[67][3] = "ninguna de las anteriores";
 answers[67] = 0;
 units[67] = ['45'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 5363. ";
 preguntaids[67] = 5363


//  Id pregunta: 1030 Año de creación de pregunta: 2016
 questions[68]= "69)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[68]= new Array();
 choices[68][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[68][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[68][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[68][3] = "Todas son correctas.";
 answers[68] = 3;
 units[68] = ['4', '7', '8', '9'];
 blocks[68] = ['A1', 'A2'];
 comments[68] = "Id Pregunta: 1030. Ley 40/2015";
 preguntaids[68] = 1030


//  Id pregunta: 8269 Año de creación de pregunta: 2011
 questions[69]= "70)  Dentro del contexto que marca la Ley 39/2015, un expediente electr&oacute;nico es:";
 choices[69]= new Array();
 choices[69][0] = "La copia electr&oacute;nica de un expediente en papel, que es el que conservar&aacute; la eficacia jur&iacute;dica, foliado mediante un &Iacute;ndice electr&oacute;nico y firmado electr&oacute;nicamente";
 choices[69][1] = "El conjunto de documentos electr&oacute;nicos correspondientes a alguno de los procedimientos administrativos incluidos en la normativa de creaci&oacute;n de la sede electr&oacute;nica";
 choices[69][2] = "El conjunto de documentos electr&oacute;nicos correspondientes a un procedimiento administrativo, cualquiera que sea el tipo de informaci&oacute;n que contengan";
 choices[69][3] = "Una aplicaci&oacute;n inform&aacute;tica para la gesti&oacute;n automatizada de expedientes en el &aacute;mbito de la Administraci&oacute;n General del Estado.";
 answers[69] = 2;
 units[69] = ['7'];
 blocks[69] = ['A2'];
 comments[69] = "Id Pregunta: 8269. Examen TIC A2 2010 interna";
 preguntaids[69] = 8269


//  Id pregunta: 9128 Año de creación de pregunta: 2014
 questions[70]= "71)  &iquest;Qu&eacute; es el &quot;Data staging area&quot; en el contexto de los Data Warehouses?";
 choices[70]= new Array();
 choices[70][0] = "Es un almac&eacute;n previo de datos y sus procesos asociados, en el que se extraen los datos de las fuentes, se transforman y se adaptan antes de ser cargados en el almac&eacute;n de datos.";
 choices[70][1] = "Durante la fase de dise&ntilde;o de un almac&eacute;n de datos, es la base de datos no permanente usada para ensayar, demostrar y estudiar el rendimiento de los dise&ntilde;os propuestos.";
 choices[70][2] = "Es el &aacute;rea del almac&eacute;n (conceptual o f&iacute;sicamente separada en otra base de datos) donde se cachean las consultas preparadas, cuando &eacute;stas no pueden ejecutarse en tiempo real.";
 choices[70][3] = "Es una copia id&eacute;ntica de las bases de datos originales, cuando en ellas existe mucha carga y no es posible bloquearlas para asegurar la integridad referencial al copiar los datos.";
 answers[70] = 0;
 units[70] = ['72'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 9128. Examen TIC A2 2013";
 preguntaids[70] = 9128


//  Id pregunta: 10066 Año de creación de pregunta: 2015
 questions[71]= "72)  Se&ntilde;ale la respuesta FALSA acerca de la tecnolog&iacute;a Java Web Start:";
 choices[71]= new Array();
 choices[71][0] = "El software de Java Web Start permite descargar y ejecutar aplicaciones Java desde la Web.";
 choices[71][1] = "Garantiza que se est&aacute; ejecutando la &uacute;ltima versi&oacute;n de la aplicaci&oacute;n.";
 choices[71][2] = "Incluido en el JDK desde la versi&oacute;n 6, permitiendo instalar aplicaciones a trav&eacute;s de URLs con JMLP (Java Main Launch Protocol).";
 choices[71][3] = "Permite desplegar f&aacute;cilmente aplicaciones standalone de escritorio.";
 answers[71] = 2;
 units[71] = ['64'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 10066. Examen TIC A2 2014";
 preguntaids[71] = 10066


//  Id pregunta: 6634 Año de creación de pregunta: 2009
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes apartados NO es un grupo clave de la biblioteca de clases base en .NET?";
 choices[72]= new Array();
 choices[72][0] = "Windows Presentation Foundation";
 choices[72][1] = "ASP.NET";
 choices[72][2] = "ADO.NET";
 choices[72][3] = "ACY.NET";
 answers[72] = 3;
 units[72] = ['63'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 6634. MAP 2008 A1";
 preguntaids[72] = 6634


//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[73]= "74)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[73]= new Array();
 choices[73][0] = "De los interesados en el procedimiento";
 choices[73][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[73][2] = "Disposiciones generales";
 choices[73][3] = "De los actos administrativos";
 answers[73] = 2;
 units[73] = ['7'];
 blocks[73] = ['A2'];
 comments[73] = "Id Pregunta: 220. Ley 39/2015";
 preguntaids[73] = 220


//  Id pregunta: 396 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[74]= new Array();
 choices[74][0] = "Art. 25 LO, 3/2007.";
 choices[74][1] = "Art. 23 LO, 3/2007.";
 choices[74][2] = "Art. 14 LO, 3/2007.";
 choices[74][3] = "Ninguna es correcta, es el art. 13.";
 answers[74] = 0;
 units[74] = ['14'];
 blocks[74] = ['A3'];
 comments[74] = "Id Pregunta: 396. Pol&iacute;ticas de igualdad";
 preguntaids[74] = 396


