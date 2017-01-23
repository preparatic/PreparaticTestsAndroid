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
//  Id pregunta: 8099 Año de creación de pregunta: 2011
 questions[0]= "1)  La regla 2 de Codd es la del:";
 choices[0]= new Array();
 choices[0][0] = "Tratamiento sistem&aacute;tico de valores nulos";
 choices[0][1] = "Acceso garantizado";
 choices[0][2] = "Actualizaci&oacute;n de vistas";
 choices[0][3] = "Integridad referencial";
 answers[0] = 1;
 units[0] = ['60', '61'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 8099. Analista Ayto. Madrid 2010";
 preguntaids[0] = 8099


//  Id pregunta: 6487 Año de creación de pregunta: 2003
 questions[1]= "2)  &iquest;Qu&eacute; figura se incluy&oacute; en la ley de contratos del sector p&uacute;blico, 30/2007?";
 choices[1]= new Array();
 choices[1][0] = "El representante de adjudicaci&oacute;n";
 choices[1][1] = "El responsable de adjudicaci&oacute;n";
 choices[1][2] = "El responsable del contrato";
 choices[1][3] = "El representante de contrato";
 answers[1] = 2;
 units[1] = ['37'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 6487. ";
 preguntaids[1] = 6487


//  Id pregunta: 10125 Año de creación de pregunta: 2015
 questions[2]= "3)  La facturaci&oacute;n electr&oacute;nica a las Administraciones P&uacute;blicas es obligatoria para las empresas desde:";
 choices[2]= new Array();
 choices[2][0] = "Enero de 2015.";
 choices[2][1] = "Enero de 2016.";
 choices[2][2] = "Diciembre de 2016.";
 choices[2][3] = "Diciembre de 2015.";
 answers[2] = 0;
 units[2] = ['10'];
 blocks[2] = ['A2'];
 comments[2] = "Id Pregunta: 10125. Examen TIC A1 2014";
 preguntaids[2] = 10125


//  Id pregunta: 3156 Año de creación de pregunta: 2002
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa cuando hablamos del Modelo de Componentes Distribuidos (DCOM)?:";
 choices[3]= new Array();
 choices[3][0] = "DCOM especifica interfaces entre objetos de componentes dentro de una sola aplicaci&oacute;n o entre aplicaciones";
 choices[3][1] = "Dispone de API para el descubrimiento din&aacute;mico de los interfaces que exporta un objeto";
 choices[3][2] = "El modelo de objetos soporta la herencia m&uacute;ltiple, al igual que CORBA";
 choices[3][3] = "Un componente DCOM es capaz de soportar interfaces m&uacute;ltiples";
 answers[3] = 2;
 units[3] = ['63'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 3156. ";
 preguntaids[3] = 3156


//  Id pregunta: 7650 Año de creación de pregunta: 2010
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes afirmaciones relacionadas con Dublin Core NO es cierta?";
 choices[4]= new Array();
 choices[4][0] = "El conjunto de sus elementos est&aacute; definido en el Est&aacute;ndar Z39.85001 de la NISO (National Information Standards Organization).";
 choices[4][1] = "Los metadatos Dublin Core se almacenan frecuentemente en la cabecera HEAD de un documento HTML (Hypertext Markup Language).";
 choices[4][2] = "Su nivel b&aacute;sico contiene 15 elementos sobre metadatos.";
 choices[4][3] = "Es una iniciativa de la W3C (World Wide Web Consortium).";
 answers[4] = 3;
 units[4] = ['68'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 7650. Map 2006";
 preguntaids[4] = 7650


//  Id pregunta: 1031 Año de creación de pregunta: 2016
 questions[5]= "6)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta en relacion a la competencia de los organos de las administraciones publicas:";
 choices[5]= new Array();
 choices[5][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[5][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[5][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[5][3] = "Todas son correctas.";
 answers[5] = 0;
 units[5] = ['4', '7', '8', '9'];
 blocks[5] = ['A1', 'A2'];
 comments[5] = "Id Pregunta: 1031. Ley 40/2015";
 preguntaids[5] = 1031


//  Id pregunta: 2865 Año de creación de pregunta: 2002
 questions[6]= "7)  En un sistema monoprocesador con mezcla de procesos de c&aacute;lculo puro y procesos intensivos en E/S, el uso de una politica de planificaci&oacute;n FIFO provoca:";
 choices[6]= new Array();
 choices[6][0] = "Un tiempo de ejecuci&oacute;n excelente para los procesos con E/S intensiva o interactiva";
 choices[6][1] = "Una gran ineficiencia, ya que los procesos de calculo intensivo se adue&ntilde;an de la CPU";
 choices[6][2] = "Una respuesta equilibrada, sin aprovechar el sistema en su totalidad";
 choices[6][3] = "Todas son falsas";
 answers[6] = 1;
 units[6] = ['56'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 2865. ";
 preguntaids[6] = 2865


//  Id pregunta: 1498 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n M&eacute;trica v3, &iquest;c&oacute;mo se representa un par&aacute;metro de control en un diagrama de estructura de cuadros?";
 choices[7]= new Array();
 choices[7][0] = "Con una l&iacute;nea discontinua acabada en punta de flecha que une dos m&oacute;dulos.";
 choices[7][1] = "Con una l&iacute;nea continua acabada en punta de flecha que une dos m&oacute;dulos.";
 choices[7][2] = "Con una flecha contigua a una conexi&oacute;n que tiene en el extremo opuesto a la flecha un c&iacute;rculo vac&iacute;o.";
 choices[7][3] = "Con una flecha contigua a una conexi&oacute;n que tiene en el extremo opuesto a la flecha un circulo relleno.";
 answers[7] = 3;
 units[7] = ['91'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 1498. ";
 preguntaids[7] = 1498


//  Id pregunta: 8974 Año de creación de pregunta: 2013
 questions[8]= "9)  El &quot;Servicio Central de Gesti&oacute;n de Facturaci&oacute;n&quot; de la Administraci&oacute;n General del Estado, es descrito en:";
 choices[8]= new Array();
 choices[8][0] = "Ley 30/2007 de Contratos del Sector P&uacute;blico.";
 choices[8][1] = "ORDEN PRE/2971/2007, sobre l a expedici&oacute;n de facturas por medios electr&oacute;nicos cuando el destinatario de las mismas sea la Administraci&oacute;n General del Estado.";
 choices[8][2] = "Ley 56/2007 de Medidas de Impulso de la Sociedad de la Informaci&oacute;n.";
 choices[8][3] = "Orden PRE/2794/2011, por el que se determina el marco de ejercicio de las competencias estatales en materia de factura electr&oacute;nica.";
 answers[8] = 3;
 units[8] = ['19'];
 blocks[8] = ['A4'];
 comments[8] = "Id Pregunta: 8974. Examen TIC A1 2011";
 preguntaids[8] = 8974


//  Id pregunta: 10815 Año de creación de pregunta: 2015
 questions[9]= "10)  Seg&uacute;n la Ley 25/2013:";
 choices[9]= new Array();
 choices[9][0] = "Las facturas electr&oacute;nicas que se remitan a las Administraciones P&uacute;blicas deber&aacute;n tener un formato estructurado y estar firmadas con firma electr&oacute;nica avanzada basada en un certificado reconocido.";
 choices[9][1] = "Las Entidades Locales podr&aacute;n adherirse a la utilizaci&oacute;n del Punto general de entrada de facturas electr&oacute;nicas que proporcione su Diputaci&oacute;n, Comunidad Aut&oacute;noma o el Estado.";
 choices[9][2] = "El Punto general de entrada de facturas electr&oacute;nicas proporcionar&aacute; un servicio autom&aacute;tico de puesta a disposici&oacute;n o de remisi&oacute;n electr&oacute;nica de las mismas a las oficinas contables competentes para su registro.";
 choices[9][3] = "Todas las anteriores son correctas";
 answers[9] = 3;
 units[9] = ['10'];
 blocks[9] = ['A2'];
 comments[9] = "Id Pregunta: 10815. ";
 preguntaids[9] = 10815


//  Id pregunta: 8577 Año de creación de pregunta: 2013
 questions[10]= "11)  &iquest;C&oacute;mo se pueden clasificar los sistemas SIMD?";
 choices[10]= new Array();
 choices[10][0] = "Con CPU particionada";
 choices[10][1] = "Con m&uacute;ltiples ALUS";
 choices[10][2] = "Como A) y como B)";
 choices[10][3] = "Ninguna respuesta es correcta";
 answers[10] = 2;
 units[10] = ['49'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 8577. ";
 preguntaids[10] = 8577


//  Id pregunta: 8994 Año de creación de pregunta: 2014
 questions[11]= "12)  La arquitectura original de Linux es de tipo:";
 choices[11]= new Array();
 choices[11][0] = "Microkernel";
 choices[11][1] = "Monol&iacute;tica";
 choices[11][2] = "Modular";
 choices[11][3] = "H&iacute;brida";
 answers[11] = 1;
 units[11] = ['57'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 8994. ";
 preguntaids[11] = 8994


//  Id pregunta: 9443 Año de creación de pregunta: 2014
 questions[12]= "13)  La operaci&oacute;n TRAP de SNMP permite:";
 choices[12]= new Array();
 choices[12][0] = "Solicitar informaci&oacute;n desde el gestor";
 choices[12][1] = "Actualizar informaci&oacute;n desde el gestor al agente";
 choices[12][2] = "Enviar informaci&oacute;n desde el agente al gestor sin que la solicite";
 choices[12][3] = "Enviar informaci&oacute;n de un agente a otro";
 answers[12] = 2;
 units[12] = ['114'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 9443. ";
 preguntaids[12] = 9443


//  Id pregunta: 303 Año de creación de pregunta: 2016
 questions[13]= "14)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[13]= new Array();
 choices[13][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[13][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[13][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[13][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[13] = 3;
 units[13] = ['11'];
 blocks[13] = ['A2'];
 comments[13] = "Id Pregunta: 303. Presupuestos generales";
 preguntaids[13] = 303


//  Id pregunta: 7509 Año de creación de pregunta: 2010
 questions[14]= "15)  En el entorno de escritorio KDE, Karbon es:";
 choices[14]= new Array();
 choices[14][0] = "El navegador del escritorio.";
 choices[14][1] = "Un generador de informes para la empresa.";
 choices[14][2] = "Un editor de f&oacute;rmulas matem&aacute;ticas.";
 choices[14][3] = "Un programa de dibujo vectorial.";
 answers[14] = 3;
 units[14] = ['66'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 7509. Similar a Map 2005";
 preguntaids[14] = 7509


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[15]= "16)  Los Reglamentos no se caracterizan por:";
 choices[15]= new Array();
 choices[15][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[15][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[15][2] = "Ser obligatorios.";
 choices[15][3] = "No poseer alcance general.";
 answers[15] = 3;
 units[15] = ['5'];
 blocks[15] = ['A1'];
 comments[15] = "Id Pregunta: 178. Uni&oacute;n Europea";
 preguntaids[15] = 178


//  Id pregunta: 7425 Año de creación de pregunta: 2010
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es INCORRECTA sobre el protocolo RADIUS (Remote Authentication Dial In User Service):";
 choices[16]= new Array();
 choices[16][0] = "Es un protocolo cliente/servidor que utiliza el protocolo de transporte fiable TCP y el puerto 1813";
 choices[16][1] = "Utiliza el protocolo de nivel de enlace PPP (Point to Point Protocol) para el env&iacute;o de las credenciales de usuario";
 choices[16][2] = "El sucesor de RADIUS es el protocolo DIAMETER";
 choices[16][3] = "Es utilizado a menudo para facilitar itinerancia (roaming) entre proveedores de servicio de internet (ISP)";
 answers[16] = 0;
 units[16] = ['119'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 7425. Examen TIC B 2009";
 preguntaids[16] = 7425


//  Id pregunta: 336 Año de creación de pregunta: 2016
 questions[17]= "18)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[17]= new Array();
 choices[17][0] = "La Ley Org&aacute;nica 2/2011";
 choices[17][1] = "La Ley Org&aacute;nica 2/2012";
 choices[17][2] = "La Ley Org&aacute;nica 3/2012";
 choices[17][3] = "La Ley Org&aacute;nica 2/2002";
 answers[17] = 1;
 units[17] = ['12'];
 blocks[17] = ['A3'];
 comments[17] = "Id Pregunta: 336. Modelo econ&oacute;mico";
 preguntaids[17] = 336


//  Id pregunta: 7705 Año de creación de pregunta: 2010
 questions[18]= "19)  Elija la opci&oacute;n correcta con respecto al funcionamiento de los registros en d&iacute;as inh&aacute;biles, seg&uacute;n la Ley 39/2015:";
 choices[18]= new Array();
 choices[18][0] = "Los registros no estar&aacute;n en funcionamiento los d&iacute;as inh&aacute;biles.";
 choices[18][1] = "La presentaci&oacute;n de solicitudes, escritos y comunicaciones en un d&iacute;a inh&aacute;bil se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[18][2] = "La presentaci&oacute;n de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registro se entender&aacute; efectuada en la &uacute;ltima hora del &uacute;ltimo d&iacute;a h&aacute;bil anterior.";
 choices[18][3] = "No se permitir&aacute; la presentaci&oacute;n de solicitudes, escritos y comunicaciones en un d&iacute;a inh&aacute;bil, y por consiguiente la entrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registro no se entender&aacute; efectuada.";
 answers[18] = 1;
 units[18] = ['7'];
 blocks[18] = ['A2'];
 comments[18] = "Id Pregunta: 7705. Map 2007";
 preguntaids[18] = 7705


//  Id pregunta: 6266 Año de creación de pregunta: 2003
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de los Lenguajes Orientados a Objetos?";
 choices[19]= new Array();
 choices[19][0] = "Tipificaci&oacute;n fuerte";
 choices[19][1] = "Paso de mensajes";
 choices[19][2] = "Monotarea";
 choices[19][3] = "Manejo de excepciones";
 answers[19] = 2;
 units[19] = ['85'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 6266. ";
 preguntaids[19] = 6266


//  Id pregunta: 4401 Año de creación de pregunta: 2002
 questions[20]= "21)  &iquest;Qu&eacute; diferencia hay entre un servidor de ficheros y un servidor de bases de datos?:";
 choices[20]= new Array();
 choices[20][0] = "El servidor de ficheros devuelve el fichero entero y el de bases de datos s&oacute;lo el dato solicitado";
 choices[20][1] = "El servidor de ficheros es m&aacute;s barato";
 choices[20][2] = "No hay diferencia; es lo mismo";
 choices[20][3] = "Son ciertas &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 answers[20] = 3;
 units[20] = ['113'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 4401. ";
 preguntaids[20] = 4401


//  Id pregunta: 8862 Año de creación de pregunta: 2013
 questions[21]= "22)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo de an&aacute;lisis de Puntos de Funci&oacute;n?";
 choices[21]= new Array();
 choices[21][0] = "M&eacute;todo Albrecht";
 choices[21][1] = "M&eacute;todo MARK II";
 choices[21][2] = "La a) y la b) son correctas";
 choices[21][3] = "Ninguno de los anteriores";
 answers[21] = 2;
 units[21] = ['94'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 8862. ";
 preguntaids[21] = 8862


//  Id pregunta: 10098 Año de creación de pregunta: 2015
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes modos de funcionamiento NO se corresponde con el algoritmo de cifrado DES?";
 choices[22]= new Array();
 choices[22][0] = "Modo ECB (Electronic CodeBook).";
 choices[22][1] = "Modo CBC (Cipher Block Chaining).";
 choices[22][2] = "Modo OFB (Output FeedBack).";
 choices[22][3] = "Modo UBC (Uncipher Block Chaining).";
 answers[22] = 3;
 units[22] = ['77', '78'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 10098. Examen TIC A2 2014";
 preguntaids[22] = 10098


//  Id pregunta: 1009 Año de creación de pregunta: 2016
 questions[23]= "24)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[23]= new Array();
 choices[23][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[23][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[23][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[23][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[23] = 2;
 units[23] = ['4', '7', '8', '9'];
 blocks[23] = ['A1', 'A2'];
 comments[23] = "Id Pregunta: 1009. Ley 40/2015";
 preguntaids[23] = 1009


//  Id pregunta: 9279 Año de creación de pregunta: 2014
 questions[24]= "25)  &iquest;A qu&eacute; perfil de M&eacute;trica v3 pertenece el Responsable de Mantenimiento?";
 choices[24]= new Array();
 choices[24][0] = "Jefe de Proyecto";
 choices[24][1] = "Consultor";
 choices[24][2] = "Analista";
 choices[24][3] = "Programador";
 answers[24] = 0;
 units[24] = ['91'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 9279. Examen TIC A2 2013. Promocion interna";
 preguntaids[24] = 9279


//  Id pregunta: 458 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;A qui&eacute;n corresponde la declaraci&oacute;n de medios y servicios compartidos?";
 choices[25]= new Array();
 choices[25][0] = "A la CETIC";
 choices[25][1] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital, a propuesta de la CETIC";
 choices[25][2] = "A la CETIC y a la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[25][3] = "A la CETIC, a propuesta de la Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[25] = 3;
 units[25] = ['19'];
 blocks[25] = ['A4'];
 comments[25] = "Id Pregunta: 458. Estrategia TIC";
 preguntaids[25] = 458


//  Id pregunta: 9475 Año de creación de pregunta: 2014
 questions[26]= "27)  El uso del paradigma de orientaci&oacute;n de objetos se caracteriza por&hellip;.";
 choices[26]= new Array();
 choices[26][0] = "&hellip; el bajo acoplamiento y fuerte cohesi&oacute;n interna de los m&oacute;dulos (clases)";
 choices[26][1] = "&hellip; el alto acoplamiento y d&eacute;bil cohesi&oacute;n interna de los m&oacute;dulos (clases)";
 choices[26][2] = "La Reusabilidad no se encuentra entre sus objetivos";
 choices[26][3] = "La mayor dificultad de la programaci&oacute;n orientada a objetos es que reduce la mantenibilidad y modificabilidad de los programas";
 answers[26] = 0;
 units[26] = ['85'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 9475. ";
 preguntaids[26] = 9475


//  Id pregunta: 45 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[27]= new Array();
 choices[27][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[27][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[27][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[27][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[27] = 0;
 units[27] = ['1'];
 blocks[27] = ['A1'];
 comments[27] = "Id Pregunta: 45. Constituci&oacute;n de 1978";
 preguntaids[27] = 45


//  Id pregunta: 2599 Año de creación de pregunta: 2002
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta sobre el lenguaje SQL?:";
 choices[28]= new Array();
 choices[28][0] = "El SQL es un lenguaje de definici&oacute;n y manipulaci&oacute;n de datos";
 choices[28][1] = "Si una transacci&oacute;n finaliza con una sentencia COMMIT, los cambios son cancelados";
 choices[28][2] = "El SQL es un lenguaje est&aacute;ndar seg&uacute;n la norma ISO 9085 de 1987";
 choices[28][3] = "El SQL es un lenguaje est&aacute;ndar seg&uacute;n la norma ISO 9075 de 1987";
 answers[28] = 3;
 units[28] = ['61'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 2599. ";
 preguntaids[28] = 2599


//  Id pregunta: 7566 Año de creación de pregunta: 2010
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre GPRS no es v&aacute;lida?";
 choices[29]= new Array();
 choices[29][0] = "Las velocidades de conexi&oacute;n pueden llegar hasta 192 Kbps.";
 choices[29][1] = "Los usuarios permanecen conectados aunque no reciban o envien datos.";
 choices[29][2] = "Se pueden realizar o recibir llamadas de voz mientras se est&aacute; conectado.";
 choices[29][3] = "La tarificaci&oacute;n es por el volumen de datos transferidos.";
 answers[29] = 0;
 units[29] = ['106'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 7566. Map 2005";
 preguntaids[29] = 7566


//  Id pregunta: 333 Año de creación de pregunta: 2016
 questions[30]= "31)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[30]= new Array();
 choices[30][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[30][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[30][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[30][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[30] = 0;
 units[30] = ['12'];
 blocks[30] = ['A3'];
 comments[30] = "Id Pregunta: 333. Modelo econ&oacute;mico";
 preguntaids[30] = 333


//  Id pregunta: 9113 Año de creación de pregunta: 2014
 questions[31]= "32)  Existen dos especificaciones complementarias que constituyen la especificaci&oacute;n completa del lenguaje de modelado UML 2.4.1. Estas especificaciones se denominan:";
 choices[31]= new Array();
 choices[31][0] = "Intrastructure e Hiperstructure.";
 choices[31][1] = "Basic y Complex.";
 choices[31][2] = "Infrastructure y Superstructure.";
 choices[31][3] = "Infrastructure y Substructure.";
 answers[31] = 2;
 units[31] = ['85'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 9113. Examen TIC A2 2013";
 preguntaids[31] = 9113


//  Id pregunta: 5386 Año de creación de pregunta: 2006
 questions[32]= "33)  El MTBF asociado a la disponibilidad de un sistema formado por dos equipos id&eacute;nticos con reparto balanceado de la carga de trabajo";
 choices[32]= new Array();
 choices[32][0] = "Es mayor que el de cualquiera de ellos individualmente";
 choices[32][1] = "Es menor que el de cualquiera de ellos individualmente";
 choices[32][2] = "Es igual al de cualquiera de ellos individualmente";
 choices[32][3] = "No puede ser conocido a priori";
 answers[32] = 0;
 units[32] = ['114'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 5386. ";
 preguntaids[32] = 5386


//  Id pregunta: 8970 Año de creación de pregunta: 2013
 questions[33]= "34)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto al protocolo H.329:";
 choices[33]= new Array();
 choices[33][0] = "Es un protocolo que define la se&ntilde;alizaci&oacute;n de llamadas";
 choices[33][1] = "Es un protocolo que permite la inclusi&oacute;n de tr&aacute;fico de datos";
 choices[33][2] = "Especifica un protocolo para el control y etiquetado de dos canales simult&aacute;neos en una &uacute;nica videoconferencia";
 choices[33][3] = "Simplifica y complementa al protocolo T.120";
 answers[33] = 0;
 units[33] = ['122'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 8970. ";
 preguntaids[33] = 8970


//  Id pregunta: 8870 Año de creación de pregunta: 2013
 questions[34]= "35)  Seg&uacute;n la ley 9/2014, para poder explotar redes y prestar servicios de comunicaciones electr&oacute;nicas a terceros:";
 choices[34]= new Array();
 choices[34][0] = "Es imprescindible que la persona f&iacute;sica o jur&iacute;dica sea espa&ntilde;ola.";
 choices[34][1] = "La persona f&iacute;sica o jur&iacute;dica debe ser nacional de un Estado miembro de la Uni&oacute;n Europea.";
 choices[34][2] = "Puede ser de cualquier nacionalidad";
 choices[34][3] = "Puede ser de cualquier nacionalidad cuando as&iacute; est&eacute; previsto en acuerdos internacionales.";
 answers[34] = 3;
 units[34] = ['121'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 8870. ";
 preguntaids[34] = 8870


//  Id pregunta: 2483 Año de creación de pregunta: 2004
 questions[35]= "36)  Seg&uacute;n la Ley 59/2003 de Firma electr&oacute;nica, la firma equivalente a la manuscrita es:";
 choices[35]= new Array();
 choices[35][0] = "Firma electr&oacute;nica avanzada";
 choices[35][1] = "Firma electr&oacute;nica reconocida";
 choices[35][2] = "Firma electr&oacute;nica avanzada s&oacute;lo si ha sido generada mediante un dispositivo seguro de creaci&oacute;n de firma.";
 choices[35][3] = "Ninguna de las anteriores";
 answers[35] = 1;
 units[35] = ['19'];
 blocks[35] = ['A4'];
 comments[35] = "Id Pregunta: 2483. Similar a examen TIC MAP A 2004. (Ley 59/2003, art&Iacute;culo 3)";
 preguntaids[35] = 2483


//  Id pregunta: 4328 Año de creación de pregunta: 2,000.00
 questions[36]= "37)  Dada la direcci&oacute;n IP 00001010.00000001.10000001.10000001 con m&aacute;scara de subred 11111111.11111111.11111111.11000000. Indique cu&aacute;l es, en binario, la direcci&oacute;n IP resultante de aplicar la operaci&oacute;n l&oacute;gica correspondiente entre ambas para calcular la subred";
 choices[36]= new Array();
 choices[36][0] = "00001010.00000001.10000001.10000000";
 choices[36][1] = "00001010.00000001.10000001.00000000";
 choices[36][2] = "00001010.00000001.00000000.00000001";
 choices[36][3] = "00001010.00000001.10000001.11000000";
 answers[36] = 0;
 units[36] = ['109'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 4328. Examen TIC MAP B 2004";
 preguntaids[36] = 4328


//  Id pregunta: 10835 Año de creación de pregunta: 2015
 questions[37]= "38)  El stemming es:";
 choices[37]= new Array();
 choices[37][0] = "Una t&eacute;cnica de indexaci&oacute;n sint&aacute;ctica";
 choices[37][1] = "Una t&eacute;cnica de indexaci&oacute;n morfol&oacute;gica";
 choices[37][2] = "Una t&eacute;cnica de indexaci&oacute;n sem&aacute;ntica";
 choices[37][3] = "Una t&eacute;cnica de eliminaci&oacute;n de palabras vac&iacute;as";
 answers[37] = 1;
 units[37] = ['100'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 10835. ";
 preguntaids[37] = 10835


//  Id pregunta: 736 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[38]= new Array();
 choices[38][0] = "Es un framework de software libre.";
 choices[38][1] = "Es una base de datos NoSQL.";
 choices[38][2] = "Est&aacute; basado en MapReduce.";
 choices[38][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[38] = 1;
 units[38] = ['73'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 736. AGE A1 2015";
 preguntaids[38] = 736


//  Id pregunta: 2565 Año de creación de pregunta: 2002
 questions[39]= "40)  &iquest;Qu&eacute; significan las siglas ASIC en el mundo de la arquitectura de computadores?:";
 choices[39]= new Array();
 choices[39][0] = "Circuitos integrados especializados";
 choices[39][1] = "Advanced Set Instructions Complex";
 choices[39][2] = "Nada";
 choices[39][3] = "Procesadores generales";
 answers[39] = 0;
 units[39] = ['50'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 2565. Application-Specific Integrated Circuit";
 preguntaids[39] = 2565


//  Id pregunta: 7460 Año de creación de pregunta: 2010
 questions[40]= "41)  Se&ntilde;ale la afirmaci&oacute;n INCORRECTA con respecto a las funciones hash:";
 choices[40]= new Array();
 choices[40][0] = "El algoritmo SHA-1 produce una salida resumen de 160 bits";
 choices[40][1] = "Las funciones hash son usadas, principalmente, para resolver el problema de la confidencialidad de los mensajes";
 choices[40][2] = "Resistencia a la preimagen significa que dada cualquier imagen y, es computacionalmente imposible encontrar un mensaje x tal que h(x)=y";
 choices[40][3] = "Resistencia a colisi&oacute;n significa que es computacionalmente imposible encontrar dos diferentes mensajes x, x&rsquo; tal que h(x)=h(x&rsquo;)";
 answers[40] = 1;
 units[40] = ['76'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 7460. ";
 preguntaids[40] = 7460


//  Id pregunta: 4604 Año de creación de pregunta: 2002
 questions[41]= "42)  &iquest;Qu&eacute; es el modo en una transmisi&oacute;n por fibra &oacute;ptica?:";
 choices[41]= new Array();
 choices[41][0] = "Es el trayecto de un rayo en una fibra";
 choices[41][1] = "Es el trayecto de todos los haces de una fibra";
 choices[41][2] = "Es la polarizaci&oacute;n que existe en la fibra en cada momento de la transmisi&oacute;n";
 choices[41][3] = "Es el tipo de modulaci&oacute;n digital que se imprime al rayo al introducirlo en la fibra";
 answers[41] = 0;
 units[41] = ['106'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 4604. ";
 preguntaids[41] = 4604


//  Id pregunta: 1003 Año de creación de pregunta: 2016
 questions[42]= "43)  Son los titulares de los &oacute;rganos directivos encargados de la gesti&oacute;n de una o varias &aacute;reas funcionalmente homog&eacute;neas del Ministerio:";
 choices[42]= new Array();
 choices[42][0] = "los Secretarios generales t&eacute;cnicos";
 choices[42][1] = "los Directores generales";
 choices[42][2] = "los Secretarios generales";
 choices[42][3] = "los Subsecretarios";
 answers[42] = 1;
 units[42] = ['4', '7', '8', '9'];
 blocks[42] = ['A1', 'A2'];
 comments[42] = "Id Pregunta: 1003. Ley 40/2015";
 preguntaids[42] = 1003


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[43]= "44)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[43]= new Array();
 choices[43][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio?n Europea (DOUE)";
 choices[43][1] = "1 de enero de 2015";
 choices[43][2] = "1 de enero de 2016";
 choices[43][3] = "1 de julio de 2016";
 answers[43] = 3;
 units[43] = ['77'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 791. Reglamento 910/2014";
 preguntaids[43] = 791


//  Id pregunta: 7796 Año de creación de pregunta: 2010
 questions[44]= "45)  El modelo CMMI (Capability Maturity Model Integration) es:";
 choices[44]= new Array();
 choices[44][0] = "Un modelo para la mejora de resultados de la organizaci&oacute;n.";
 choices[44][1] = "Un modelo para la mejora de los procesos de la organizaci&oacute;n.";
 choices[44][2] = "Un modelo para la mejora de la capacidad de liderazgo de la organizaci&oacute;n.";
 choices[44][3] = "Un modelo para la mejora de la consistencia de los datos de una organizaci&oacute;n.";
 answers[44] = 1;
 units[44] = ['101'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 7796. ";
 preguntaids[44] = 7796


//  Id pregunta: 6169 Año de creación de pregunta: 2003
 questions[45]= "46)  Se regir&aacute;n por su normativa espec&iacute;fica, seg&uacute;n la ley 34/2002, las siguientes actividades y servicios de la sociedad de la informaci&oacute;n, excepto:";
 choices[45]= new Array();
 choices[45][0] = "Notarios";
 choices[45][1] = "Registradores";
 choices[45][2] = "Agentes de bolsa";
 choices[45][3] = "Procuradores";
 answers[45] = 2;
 units[45] = ['19'];
 blocks[45] = ['A4'];
 comments[45] = "Id Pregunta: 6169. Ley 34/2002, art&iacute;culo 5";
 preguntaids[45] = 6169


//  Id pregunta: 2452 Año de creación de pregunta: 2006
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes componentes de los que se indican a continuaci&oacute;n no es necesario certificar para obtener el perfil XPG4 Base de la Gu&iacute;a de Portabilidad X/Open?";
 choices[46]= new Array();
 choices[46][0] = "XPG4 Base";
 choices[46][1] = "XPG4 Commands and Utilities";
 choices[46][2] = "XPG4 Language";
 choices[46][3] = "XPG4 Internationalised System Calls and Libraries";
 answers[46] = 2;
 units[46] = ['40'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 2452. ";
 preguntaids[46] = 2452


//  Id pregunta: 1041 Año de creación de pregunta: 2016
 questions[47]= "48)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n (articulo 157 de la ley 40/2015):";
 choices[47]= new Array();
 choices[47][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[47][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[47][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[47][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[47] = 1;
 units[47] = ['4', '7', '8', '9'];
 blocks[47] = ['A1', 'A2'];
 comments[47] = "Id Pregunta: 1041. Ley 40/2015";
 preguntaids[47] = 1041


//  Id pregunta: 3198 Año de creación de pregunta: 2003
 questions[48]= "49)  El Real Decreto 209/2003:";
 choices[48]= new Array();
 choices[48][0] = "Modifica la denominaci&oacute;n del Consejo Superior de Inform&aacute;tica";
 choices[48][1] = "Modifica la denominaci&oacute;n del Consejo Superior de Inform&aacute;tica y regula los registros y las notificaciones telem&aacute;ticas";
 choices[48][2] = "Regula los registros y las notificaciones telem&aacute;ticas y modifica la ley 59/2003";
 choices[48][3] = "Todas las anteriores son ciertas";
 answers[48] = 1;
 units[48] = ['19'];
 blocks[48] = ['A4'];
 comments[48] = "Id Pregunta: 3198. ";
 preguntaids[48] = 3198


//  Id pregunta: 6115 Año de creación de pregunta: 2003
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes normas regula la expedici&oacute;n del DNI y sus certificados de firma electr&oacute;nica?";
 choices[49]= new Array();
 choices[49][0] = "RD 153/2005, de 14 de enero";
 choices[49][1] = "RD 1553/2005, de 23 de diciembre";
 choices[49][2] = "RD 1555/2003, de 29 de mayo";
 choices[49][3] = "RD 155/2003, de 15 de septiembre";
 answers[49] = 1;
 units[49] = ['19'];
 blocks[49] = ['A4'];
 comments[49] = "Id Pregunta: 6115. Examen TIC A1 MAP 2007";
 preguntaids[49] = 6115


//  Id pregunta: 4873 Año de creación de pregunta: 2002
 questions[50]= "51)  La conocida RFC 793 se corresponde con:";
 choices[50]= new Array();
 choices[50][0] = "el protocolo TCP";
 choices[50][1] = "la arquitectura TCP/IP";
 choices[50][2] = "el protocolo IP";
 choices[50][3] = "el protocolo SMTP";
 answers[50] = 0;
 units[50] = ['105'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 4873. ";
 preguntaids[50] = 4873


//  Id pregunta: 8322 Año de creación de pregunta: 2011
 questions[51]= "52)  La clase XPathNavigator de la biblioteca de clases de .NET, &iquest;para qu&eacute; sirve?:";
 choices[51]= new Array();
 choices[51][0] = "Para leer datos de cualquier almac&eacute;n de datos mediante un modelo de cursor";
 choices[51][1] = "Para proporcionar un iterador para un conjunto de nodos seleccionados";
 choices[51][2] = "Para encapsular una expresi&oacute;n XPath compilada";
 choices[51][3] = "Todas las anteriores son falsas";
 answers[51] = 0;
 units[51] = ['63'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 8322. Examen UPM A2 2011";
 preguntaids[51] = 8322


//  Id pregunta: 3593 Año de creación de pregunta: 2004
 questions[52]= "53)  Seg&uacute;n METRICA V3, &iquest;cu&aacute;l de las siguientes no se considera una tarea propia de la etapa de Implantaci&oacute;n y Aceptaci&oacute;n de Sistemas de Informaci&oacute;n (IAS)?";
 choices[52]= new Array();
 choices[52][0] = "Establecimiento del Plan de Implantaci&oacute;n";
 choices[52][1] = "Elaboraci&oacute;n de los manuales de usuario";
 choices[52][2] = "Incorporaci&oacute;n del Sistema a entorno de operaci&oacute;n";
 choices[52][3] = "Paso a Producci&oacute;n";
 answers[52] = 1;
 units[52] = ['91'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 3593. Pregunta Junta Andalucia - A";
 preguntaids[52] = 3593


//  Id pregunta: 8696 Año de creación de pregunta: 2013
 questions[53]= "54)  &iquest;En qu&eacute; se diferencia la API de Windows y Unix en cuanto a filosof&iacute;a?";
 choices[53]= new Array();
 choices[53][0] = "En Unix las funciones de sistema operativo son simples, con pocos par&aacute;metros.";
 choices[53][1] = "Win32 ofrece interfaces muy extensas con muchos par&aacute;metros.";
 choices[53][2] = "En Unix suele haber pocas formas de realizar una operaci&oacute;n, mientras en Win32 hay a menudo 3 o 4 formas de realizar lo mismo.";
 choices[53][3] = "Todas son correctas.";
 answers[53] = 3;
 units[53] = ['57', '58'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 8696. ";
 preguntaids[53] = 8696


//  Id pregunta: 9217 Año de creación de pregunta: 2014
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes categor&iacute;as de mantenimiento NO ha sido definida en la norma ISO/IEC 14764?";
 choices[54]= new Array();
 choices[54][0] = "preventivo.";
 choices[54][1] = "progresivo.";
 choices[54][2] = "adaptativo.";
 choices[54][3] = "perfectivo.";
 answers[54] = 1;
 units[54] = ['30'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 9217. Examen TIC A1 2013";
 preguntaids[54] = 9217


//  Id pregunta: 4059 Año de creación de pregunta: 2003
 questions[55]= "56)  &iquest;Cu&aacute;l de estas afirmaciones es falsa?";
 choices[55]= new Array();
 choices[55][0] = "Dentro del An&aacute;lisis de Requisitos, un m&eacute;todo adecuado para decidir la mejor alternativa es el retorno de la inversi&oacute;n, que permite saber en qu&eacute; a&ntilde;o se recupera el coste total inicialmente estimado.";
 choices[55][1] = "Dentro del An&aacute;lisis de Requisitos, en la selecci&oacute;n de la alternativa m&aacute;s adecuada, si se hace una estimaci&oacute;n de Costes / Beneficios no se tendr&aacute;n en cuenta los costes de mantenimiento.";
 choices[55][2] = "El An&aacute;lisis Coste / Beneficio tiene como objetivo proporcionar una medida de los costes en que se incurre en la realizaci&oacute;n de un proyecto inform&aacute;tico y compara dichos costes previstos con los beneficios esperados de la realizaci&oacute;n de dicho proyecto.";
 choices[55][3] = "Dentro de la selecci&oacute;n de alternativas en el An&aacute;lisis de Requisitos, para cada alternativa se consideran los beneficios para el usuario y los beneficios t&eacute;cnicos";
 answers[55] = 1;
 units[55] = ['40', '91'];
 blocks[55] = ['B1', 'B3'];
 comments[55] = "Id Pregunta: 4059. ";
 preguntaids[55] = 4059


//  Id pregunta: 5721 Año de creación de pregunta: 2007
 questions[56]= "57)  Para hacer una llamada a un procedimiento almacenado trabajando con JDBC podemos utilizar un objeto CallableStatement. Si el procedimiento almacenado devuelve mas de un conjunto de resultados, &iquest;qu&eacute; m&eacute;todo deberemos invocar?:";
 choices[56]= new Array();
 choices[56][0] = "execute";
 choices[56][1] = "executeQuery";
 choices[56][2] = "executeProcedure";
 choices[56][3] = "executeUpdate";
 answers[56] = 0;
 units[56] = ['64'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 5721. ";
 preguntaids[56] = 5721


//  Id pregunta: 6303 Año de creación de pregunta: 2003
 questions[57]= "58)  Respecto al an&aacute;lisis D.A.F.O indique la opci&oacute;n incorrecta";
 choices[57]= new Array();
 choices[57][0] = "Herramienta estrat&eacute;gica por excelencia cuyo objetivo es conocer la situaci&oacute;n real de una organizaci&oacute;n, as&iacute; como los riesgos y oportunidades que le brinda el mercado";
 choices[57][1] = "Tambi&eacute;n llamado Matriz TOWS en terminolog&iacute;a anglosajona";
 choices[57][2] = "Las amenazas y oportunidades corresponden al entorno interno de la organizaci&oacute;n, debiendo &eacute;sta a aprovecharlas o superarlas, anticip&aacute;ndose a las mismas";
 choices[57][3] = "Las fortalezas suponen ventaja competitiva que pueden servir para explotar oportunidades";
 answers[57] = 2;
 units[57] = ['83'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 6303. ";
 preguntaids[57] = 6303


//  Id pregunta: 1015 Año de creación de pregunta: 2016
 questions[58]= "59)  Los servicios territoriales de la Administraci&oacute;n General del Estado en la Comunidad Aut&oacute;noma se organizar&aacute;n atendiendo al mejor cumplimiento de sus fines, en:";
 choices[58]= new Array();
 choices[58][0] = "servicios integrados en las Delegaciones del Gobierno";
 choices[58][1] = "servicios no integrados en las Delegaciones del Gobierno";
 choices[58][2] = "servicios integrados y no integrados en las Delegaciones del Gobierno";
 choices[58][3] = "ninguna es correcta";
 answers[58] = 2;
 units[58] = ['4', '7', '8', '9'];
 blocks[58] = ['A1', 'A2'];
 comments[58] = "Id Pregunta: 1015. Ley 40/2015";
 preguntaids[58] = 1015


//  Id pregunta: 440 Año de creación de pregunta: 2016
 questions[59]= "60)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[59]= new Array();
 choices[59][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[59][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[59][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[59][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[59] = 3;
 units[59] = ['19'];
 blocks[59] = ['A4'];
 comments[59] = "Id Pregunta: 440. AGE A1 2015";
 preguntaids[59] = 440


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[60]= new Array();
 choices[60][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado";
 choices[60][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[60][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[60][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[60] = 2;
 units[60] = ['7'];
 blocks[60] = ['A2'];
 comments[60] = "Id Pregunta: 244. Ley 39/2015";
 preguntaids[60] = 244


//  Id pregunta: 10205 Año de creación de pregunta: 2015
 questions[61]= "62)  El 3 de Noviembre de 2014 se ha liberado una nueva versi&oacute;n del sistema operativo Android. Se denomina:";
 choices[61]= new Array();
 choices[61][0] = "Android 4.3 Jelly Bean";
 choices[61][1] = "Android 5.0 Lollipop.";
 choices[61][2] = "Android 6.0 Marshmallow.";
 choices[61][3] = "Android 4.4 KitKat.";
 answers[61] = 1;
 units[61] = ['56'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 10205. ";
 preguntaids[61] = 10205


//  Id pregunta: 10322 Año de creación de pregunta: 2015
 questions[62]= "63)  De acuerdo con la Taxonom&iacute;a de Flynn, como se denominan los sistemas de arquitectura serie de Von Neummann?";
 choices[62]= new Array();
 choices[62][0] = "SISD";
 choices[62][1] = "SIMD";
 choices[62][2] = "MISD";
 choices[62][3] = "MIMD";
 answers[62] = 0;
 units[62] = ['49'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 10322. ";
 preguntaids[62] = 10322


//  Id pregunta: 6889 Año de creación de pregunta: 2010
 questions[63]= "64)  &iquest;Qu&eacute; son las t&eacute;cnicas esteganogr&aacute;ficas?";
 choices[63]= new Array();
 choices[63][0] = "Son t&eacute;cnicas de firma electr&oacute;nica, tipo XMLDSig.";
 choices[63][1] = "Son t&eacute;cnicas dirigidas a ayudar en las auditorias inform&aacute;ticas y en particular en la optimizaci&oacute;n de los sistemas de impresi&oacute;n.";
 choices[63][2] = "Son t&eacute;cnicas de dise&ntilde;o asistido por ordenador y enfocadas a la producci&oacute;n de material gr&aacute;fico.";
 choices[63][3] = "Son t&eacute;cnicas dirigidas al ocultamiento de mensajes u objetos dentro de otros.";
 answers[63] = 3;
 units[63] = ['120'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 6889. TIC A 2009";
 preguntaids[63] = 6889


//  Id pregunta: 2749 Año de creación de pregunta: 2002
 questions[64]= "65)  El creador de HTML fue:";
 choices[64]= new Array();
 choices[64][0] = "Tim Berners-Lee";
 choices[64][1] = "Ivar Jacobson";
 choices[64][2] = "Grady Booch";
 choices[64][3] = "Todas son falsas";
 answers[64] = 0;
 units[64] = ['74'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 2749. ";
 preguntaids[64] = 2749


//  Id pregunta: 3472 Año de creación de pregunta: 2006
 questions[65]= "66)  De acuerdo con la ley 59/2003, se&ntilde;ale la falsa:";
 choices[65]= new Array();
 choices[65][0] = "Por la comisi&oacute;n de infracciones muy graves, se impondr&aacute; al infractor multa de 150.001 a 600.000 euros";
 choices[65][1] = "Por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 30.001 a 150.000 euros";
 choices[65][2] = "Por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 30.000 euros";
 choices[65][3] = "Ninguna de las anteriores";
 answers[65] = 3;
 units[65] = ['19'];
 blocks[65] = ['A4'];
 comments[65] = "Id Pregunta: 3472. Ley 59/2003, art&iacute;culo 32";
 preguntaids[65] = 3472


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[66]= "67)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[66]= new Array();
 choices[66][0] = "El Rey.";
 choices[66][1] = "El Jefe del Estado.";
 choices[66][2] = "El Gobierno.";
 choices[66][3] = "El Presidente del Gobierno.";
 answers[66] = 2;
 units[66] = ['1'];
 blocks[66] = ['A1'];
 comments[66] = "Id Pregunta: 35. Constituci&oacute;n de 1978";
 preguntaids[66] = 35


//  Id pregunta: 7065 Año de creación de pregunta: 2010
 questions[67]= "68)  Toda sentencia SQL tiene al menos los siguientes elementos:";
 choices[67]= new Array();
 choices[67][0] = "SELECT, FROM";
 choices[67][1] = "SELECT, FROM y WHERE";
 choices[67][2] = "SELECT, FROM, o bien WHERE o bien HAVING";
 choices[67][3] = "Todas las anteriores son err&oacute;neas";
 answers[67] = 3;
 units[67] = ['61'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 7065. ";
 preguntaids[67] = 7065


//  Id pregunta: 185 Año de creación de pregunta: 2016
 questions[68]= "69)  Los Reglamentos no se caracterizan por:";
 choices[68]= new Array();
 choices[68][0] = "No poseer alcance general.";
 choices[68][1] = "Ser obligatorios.";
 choices[68][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[68][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[68] = 0;
 units[68] = ['5'];
 blocks[68] = ['A1'];
 comments[68] = "Id Pregunta: 185. Uni&oacute;n Europea";
 preguntaids[68] = 185


//  Id pregunta: 1813 Año de creación de pregunta: 2016
 questions[69]= "70)  En una arquitectura SOA existe una capa en la que se realiza la funci&oacute;n de monitorizaci&oacute;n y control de servicios. Indique cu&aacute;l es la opci&oacute;n correcta que define dicha capa.";
 choices[69]= new Array();
 choices[69][0] = "Capa de control";
 choices[69][1] = "Capa de servicios";
 choices[69][2] = "Capa de SOA Governance";
 choices[69][3] = "Capa de SOA Enterprise Service Bus";
 answers[69] = 2;
 units[69] = ['55'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 1813. ";
 preguntaids[69] = 1813


//  Id pregunta: 5729 Año de creación de pregunta: 2007
 questions[70]= "71)  &iquest;Qu&eacute; actividades de las siguientes se incluyen en el ciclo de vida cl&aacute;sico, tambi&eacute;n llamado &quot;modelo en cascada&quot;?";
 choices[70]= new Array();
 choices[70][0] = "an&aacute;lisis del sistema, an&aacute;lisis de riesgo, an&aacute;lisis de requisitos";
 choices[70][1] = "an&aacute;lisis de riesgo, an&aacute;lisis de requisitos y codificaci&oacute;n";
 choices[70][2] = "an&aacute;lisis del sistema, prototipos y codificaci&oacute;n";
 choices[70][3] = "dise&ntilde;o, codificaci&oacute;n y pruebas";
 answers[70] = 3;
 units[70] = ['76'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 5729. ";
 preguntaids[70] = 5729


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[71]= new Array();
 choices[71][0] = "La Seguridad Social";
 choices[71][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[71][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[71][3] = "El Banco de Espa&ntilde;a";
 answers[71] = 3;
 units[71] = ['15'];
 blocks[71] = ['A3'];
 comments[71] = "Id Pregunta: 418. Mercado laboral";
 preguntaids[71] = 418


//  Id pregunta: 4856 Año de creación de pregunta: 2002
 questions[72]= "73)  En una red de &aacute;rea local que utiliza la t&eacute;cnica de acceso al medio conocida como contienda, una de las siguientes afirmaciones es falsa. Se&ntilde;&aacute;lela:";
 choices[72]= new Array();
 choices[72][0] = "Se pueden producir colisiones";
 choices[72][1] = "Cualquier estaci&oacute;n de la Red de &Aacute;rea Local puede transmitir en cualquier momento";
 choices[72][2] = "Se pueden establecer prioridades";
 choices[72][3] = "Ofrece buen rendimiento a baja carga";
 answers[72] = 2;
 units[72] = ['112'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 4856. ";
 preguntaids[72] = 4856


//  Id pregunta: 7249 Año de creación de pregunta: 2010
 questions[73]= "74)  Una tarjeta de memoria";
 choices[73]= new Array();
 choices[73][0] = "Puede procesar informaci&oacute;n";
 choices[73][1] = "Dependiendo de los tipos, puede o no procesar informaci&oacute;n";
 choices[73][2] = "Nunca puede procesar informaci&oacute;n";
 choices[73][3] = "Son un tipo de tarjeta inteligente";
 answers[73] = 2;
 units[73] = ['119'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 7249. ";
 preguntaids[73] = 7249


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[74]= "75)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[74]= new Array();
 choices[74][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[74][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[74][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[74][3] = "Todas las respuestas son correctas.";
 answers[74] = 3;
 units[74] = ['50'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 643. Junta de Extremadura A1 2015";
 preguntaids[74] = 643


