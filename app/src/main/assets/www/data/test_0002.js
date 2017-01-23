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
//  Id pregunta: 7173 Año de creación de pregunta: 2010
 questions[0]= "1)  Identifique el API de JAVA que facilita el acceso a registros UDDI";
 choices[0]= new Array();
 choices[0][0] = "SAAJ";
 choices[0][1] = "JAXR";
 choices[0][2] = "SOAP";
 choices[0][3] = "StAX";
 answers[0] = 1;
 units[0] = ['64'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 7173. Castilla La Mancha 2009";
 preguntaids[0] = 7173


//  Id pregunta: 414 Año de creación de pregunta: 2016
 questions[1]= "2)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[1]= new Array();
 choices[1][0] = "Quince miembros.";
 choices[1][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[1][2] = "Los miembros que determine el Consejo.";
 choices[1][3] = "Un Presidente y quince miembros.";
 answers[1] = 1;
 units[1] = ['5'];
 blocks[1] = ['A1'];
 comments[1] = "Id Pregunta: 414. Uni&oacute;n Europea";
 preguntaids[1] = 414


//  Id pregunta: 8230 Año de creación de pregunta: 2011
 questions[2]= "3)  La tecnolog&iacute;a que se basa en el protocolo SWAP (shared wireless access protocol) y que tiene como objetivo la conectividad sin cables dentro del hogar se llama:";
 choices[2]= new Array();
 choices[2][0] = "Bluetooth";
 choices[2][1] = "HomeRF";
 choices[2][2] = "HiperLAN/2";
 choices[2][3] = "IrLMP";
 answers[2] = 1;
 units[2] = ['108'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 8230. Examen UPM A2 2011";
 preguntaids[2] = 8230


//  Id pregunta: 3974 Año de creación de pregunta: 2002
 questions[3]= "4)  Un proceso en un DFD&hellip;:";
 choices[3]= new Array();
 choices[3][0] = "Puede descomponerse en otros procesos";
 choices[3][1] = "Siempre tiene un almac&eacute;n de datos asociado";
 choices[3][2] = "Puede estar aislado";
 choices[3][3] = "Puede equivaler a una entidad externa";
 answers[3] = 0;
 units[3] = ['85', '86'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 3974. ";
 preguntaids[3] = 3974


//  Id pregunta: 2683 Año de creación de pregunta: 2002
 questions[4]= "5)  &iquest;Qu&eacute; es un applet de Java?:";
 choices[4]= new Array();
 choices[4][0] = "Una aplicaci&oacute;n escrita en Java";
 choices[4][1] = "Un control ActiveX";
 choices[4][2] = "Un programa de Java incrustado en una p&aacute;gina HTML";
 choices[4][3] = "Ninguna de las anteriores";
 answers[4] = 2;
 units[4] = ['64'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 2683. Se especifica en la pregunta que sea de Java, porque Flash tambi&eacute;n es un applet";
 preguntaids[4] = 2683


//  Id pregunta: 3134 Año de creación de pregunta: 2002
 questions[5]= "6)  ISA, PCI, AGP, IDE, PCMCIA&hellip;, son:";
 choices[5]= new Array();
 choices[5][0] = "buses internos";
 choices[5][1] = "buses externos";
 choices[5][2] = "organismos de estandarizaci&oacute;n";
 choices[5][3] = "est&aacute;ndares de almacenamiento";
 answers[5] = 0;
 units[5] = ['52'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 3134. ";
 preguntaids[5] = 3134


//  Id pregunta: 5942 Año de creación de pregunta: 2007
 questions[6]= "7)  La metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3 contempla diferencias con relaci&oacute;n a los productos resultantes del proceso &quot;An&aacute;lisis del sistema de informaci&oacute;n (ASI)&quot; seg&uacute;n sea Orientado a Objetos o Estructurado. Bajo esta premisa, &iquest;cu&aacute;lde las siguientes afirmaciones NO es cierta?";
 choices[6]= new Array();
 choices[6][0] = "El Cat&aacute;logo de Requisitos y el Glosario de T&eacute;rminos son productos comunes requeridos";
 choices[6][1] = "Entre los productos se&ntilde;alados para el an&aacute;lisis estructurado est&aacute; el Modelo de Procesos";
 choices[6][2] = "Se especifica el Modelo de Negocio para el an&aacute;lisis orientado a objetos";
 choices[6][3] = "La especificaci&oacute;n de la Interfaz de Usuario s&oacute;lo se solicita para el an&aacute;lisis orientado a objetos";
 answers[6] = 3;
 units[6] = ['91'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 5942. ";
 preguntaids[6] = 5942


//  Id pregunta: 6254 Año de creación de pregunta: 2003
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as de desarrollo de sistemas distribuidos basados en objetos no es una tecnolog&iacute;a Java de Sun Microsystems?";
 choices[7]= new Array();
 choices[7][0] = "RMI";
 choices[7][1] = "JINI";
 choices[7][2] = "EJB";
 choices[7][3] = "CORBA";
 answers[7] = 3;
 units[7] = ['85'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 6254. ";
 preguntaids[7] = 6254


//  Id pregunta: 7891 Año de creación de pregunta: 2011
 questions[8]= "9)  El est&aacute;ndar internacional que m&aacute;s se asemeja a las gu&iacute;as de buenas pr&aacute;cticas ITIL es el:";
 choices[8]= new Array();
 choices[8][0] = "IS0 9000.";
 choices[8][1] = "ISO 20000.";
 choices[8][2] = "ISO 27001.";
 choices[8][3] = "ISO 27000.";
 answers[8] = 1;
 units[8] = ['101'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 7891. Examen TIC A1 2010";
 preguntaids[8] = 7891


//  Id pregunta: 5380 Año de creación de pregunta: 2006
 questions[9]= "10)  El estandar 802.11i se centra en";
 choices[9]= new Array();
 choices[9][0] = "Calidad de Servicio (QoS) sobre redes WLAN";
 choices[9][1] = "Autenticaci&oacute;n y cifrado para redes WLAN";
 choices[9][2] = "Nueva generaci&oacute;n de WLAN de redes de, al menos, 100 Mbps (en proceso de definici&oacute;n en 2006)";
 choices[9][3] = "Intercambio de informaci&oacute;n de capacidad entre clientes y puntos de acceso en redes WLAN";
 answers[9] = 1;
 units[9] = ['108'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 5380. ";
 preguntaids[9] = 5380


//  Id pregunta: 6053 Año de creación de pregunta: 2003
 questions[10]= "11)  Los equipos utilizados para la interconexi&oacute;n de redes a nivel 5 seg&uacute;n el modelo OSI se denomina:";
 choices[10]= new Array();
 choices[10][0] = "Repetidores.";
 choices[10][1] = "Routers.";
 choices[10][2] = "Bridges.";
 choices[10][3] = "Gateways.";
 answers[10] = 3;
 units[10] = ['102'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 6053. TIC B 2007";
 preguntaids[10] = 6053


//  Id pregunta: 5323 Año de creación de pregunta: 2006
 questions[11]= "12)  Las im&aacute;genes se utilizan para";
 choices[11]= new Array();
 choices[11][0] = "la realizaci&oacute;n de un backup t&iacute;pico";
 choices[11][1] = "almacenar datos antiguos para asegurar la compatibilidad";
 choices[11][2] = "para recuperar datos en caso de desastre";
 choices[11][3] = "todas las anteriores";
 answers[11] = 2;
 units[11] = ['100'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 5323. ";
 preguntaids[11] = 5323


//  Id pregunta: 9935 Año de creación de pregunta: 2015
 questions[12]= "13)  &iquest;D&oacute;nde se puede encontrar la especificaci&oacute;n del protocolo SCSP (Sustituci&oacute;n de Certificados en Soporte Papel) seg&uacute;n se&ntilde;ala la NTI de protocolos de intermedicaci&oacute;n?";
 choices[12]= new Array();
 choices[12][0] = "En el Portal de Administraci&oacute;n electr&oacute;nica PAE/CTT";
 choices[12][1] = "En la Intranet del Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[12][2] = "En la Intranet del Ministerio de la Presidencia";
 choices[12][3] = "Se debe solicitar dicha informaci&oacute;n a la Secretar&iacute;a General de Administraci&oacute;n Digital del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 answers[12] = 0;
 units[12] = ['44'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 9935. ";
 preguntaids[12] = 9935


//  Id pregunta: 2832 Año de creación de pregunta: 2002
 questions[13]= "14)  En la multiplexaci&oacute;n por divisi&oacute;n en frecuencia, &iquest;cu&aacute;l de estas afirmaciones es correcta?";
 choices[13]= new Array();
 choices[13][0] = "Las se&ntilde;ales a enviar usan todo el ancho de banda disponible.";
 choices[13][1] = "Las se&ntilde;ales a enviar s&oacute;lo usan el ancho de banda asignado.";
 choices[13][2] = "Las se&ntilde;ales se env&iacute;an s&oacute;lo en el tiempo asignado por todo ancho de banda.";
 choices[13][3] = "Las se&ntilde;ales se env&iacute;an s&oacute;lo en el tiempo asignado por el ancho de banda asignado.";
 answers[13] = 1;
 units[13] = ['104'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 2832. ";
 preguntaids[13] = 2832


//  Id pregunta: 3170 Año de creación de pregunta: 2002
 questions[14]= "15)  La Ley de Servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, Ley 34/2002:";
 choices[14]= new Array();
 choices[14][0] = "Favorece la celebraci&oacute;n de contratos por v&iacute;a electr&oacute;nica, al asegurar la equivalencia entre los documentos en soporte papel y los documentos electr&oacute;nicos";
 choices[14][1] = "Es una ley pionera, pues se adelant&oacute; en varios meses a la directiva sobre el comercio electr&oacute;nico";
 choices[14][2] = "No incluye previsiones orientadas a hacer efectiva la accesibilidad de las personas con discapacidad a la informaci&oacute;n proporcionada por medios electr&oacute;nicos, remiti&eacute;ndose al desarrollo normativo posterior";
 choices[14][3] = "Prohibe expresamente el env&iacute;o por correo u otras v&iacute;as de comunicaci&oacute;n electr&oacute;nica equivalente de comunicaciones comerciales, para evitar el spamming";
 answers[14] = 0;
 units[14] = ['19'];
 blocks[14] = ['A4'];
 comments[14] = "Id Pregunta: 3170. ";
 preguntaids[14] = 3170


//  Id pregunta: 1296 Año de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ale, de los siguientes, el sistema de ejecuci&oacute;n multi plataforma desarrollado por Adobe para crear aplicaciones RIA que se pueden ejecutar como aplicaciones de escritorio o de dispositivos m&oacute;viles:";
 choices[15]= new Array();
 choices[15][0] = "Android SDK";
 choices[15][1] = "Mahout";
 choices[15][2] = "InDesign";
 choices[15][3] = "AIR";
 answers[15] = 3;
 units[15] = ['74'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 1296. ";
 preguntaids[15] = 1296


//  Id pregunta: 9637 Año de creación de pregunta: 2014
 questions[16]= "17)  La contrataci&oacute;n de un proyecto de tecnolog&iacute;as de la informaci&oacute;n en un ministerio se ha realizado incluyendo un Acuerdo de Nivel de Servicio con una fecha cerrada de entrega de los trabajos. El contratista se va a retrasar por problemas con sus recursos humanos asignados al proyecto. El Jefe de Proyecto debe:";
 choices[16]= new Array();
 choices[16][0] = "Proporcionar los recursos humanos, reclut&aacute;ndolos si es preciso del personal del ministerio, que necesita el contratista para que acabe a tiempo el proyecto.";
 choices[16][1] = "Informar a los interesados del proyecto de la demora del proyecto y el sobrecoste que tendr&aacute; el mismo sobre el precio contratado.";
 choices[16][2] = "Disponer de m&aacute;s fondos para pagar al contratista a fin de que acabe antes el proyecto";
 choices[16][3] = "Informar a las partes interesadas del proyecto de la demora del mismo por causa del contratista para la gesti&oacute;n del riesgo asociado, y a los responsables del expediente de contrataci&oacute;n de la penalizaci&oacute;n a aplicar al contratista por no finalizar en tiempo.";
 answers[16] = 3;
 units[16] = ['31'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 9637. ";
 preguntaids[16] = 9637


//  Id pregunta: 327 Año de creación de pregunta: 2016
 questions[17]= "18)  A tenor de lo dispuesto en el art&iacute;culo 14 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, el pago de los intereses y el capital de la deuda p&uacute;blica de las Administraciones P&uacute;blicas gozar&aacute; de prioridad:";
 choices[17]= new Array();
 choices[17][0] = "Sobre otros gastos siempre que no superen el 80% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[17][1] = "Sobre otros gastos siempre que no superen el 70% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[17][2] = "Absoluta frente a cualquier otro gasto.";
 choices[17][3] = "Sobre otros gastos siempre que no superen el 60% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea";
 answers[17] = 2;
 units[17] = ['11'];
 blocks[17] = ['A2'];
 comments[17] = "Id Pregunta: 327. Presupuestos generales";
 preguntaids[17] = 327


//  Id pregunta: 6931 Año de creación de pregunta: 2010
 questions[18]= "19)  &iquest;Cual es la &uacute;ltima versi&oacute;n del protocolo SCORM?";
 choices[18]= new Array();
 choices[18][0] = "SCORM 1.0";
 choices[18][1] = "SCORM 1.1";
 choices[18][2] = "SCORM 1.2";
 choices[18][3] = "SCORM 2004, si bien ADL ofrece ya una siguiente generaci&oacute;n de e-learning standard llamada Experience API";
 answers[18] = 3;
 units[18] = ['70'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 6931. ";
 preguntaids[18] = 6931


//  Id pregunta: 4847 Año de creación de pregunta: 2002
 questions[19]= "20)  En un firewall de paquetes IP, los paquetes entrantes:";
 choices[19]= new Array();
 choices[19][0] = "Primero se filtran, luego se hace el NAT";
 choices[19][1] = "Primero se hace NAT y luego se filtran";
 choices[19][2] = "Es igual que para los paquetes salientes";
 choices[19][3] = "Depende de la interfaz";
 answers[19] = 1;
 units[19] = ['119'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 4847. ";
 preguntaids[19] = 4847


//  Id pregunta: 5310 Año de creación de pregunta: 2006
 questions[20]= "21)  La t&eacute;cnica usada para llevar a los visitantes a una nueva p&aacute;gina web cuando un URL ha cambiado se llama";
 choices[20]= new Array();
 choices[20][0] = "Redirecci&oacute;n";
 choices[20][1] = "CGI";
 choices[20][2] = "Identificador Uniforme de Recursos";
 choices[20][3] = "ASP";
 answers[20] = 0;
 units[20] = ['103'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 5310. ";
 preguntaids[20] = 5310


//  Id pregunta: 1835 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l de los siguientes campos NO se encuentra en un certificado electr&oacute;nico que siga el est&aacute;ndar X.509?";
 choices[21]= new Array();
 choices[21][0] = "Nombre del certificador.";
 choices[21][1] = "Periodo de validez.";
 choices[21][2] = "Clave privada del sujeto.";
 choices[21][3] = "Clave p&uacute;blica del sujeto.";
 answers[21] = 2;
 units[21] = ['77'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 1835. ";
 preguntaids[21] = 1835


//  Id pregunta: 5379 Año de creación de pregunta: 2006
 questions[22]= "23)  El estandar 802.11e se centra en";
 choices[22]= new Array();
 choices[22][0] = "Calidad de Servicio (QoS) sobre redes WLAN";
 choices[22][1] = "Autenticaci&oacute;n y cifrado para redes WLAN";
 choices[22][2] = "Nueva generaci&oacute;n de WLAN de redes de, al menos, 100 Mbps (en proceso de definici&oacute;n en 2006)";
 choices[22][3] = "Intercambio de informaci&oacute;n de capacidad entre clientes y puntos de acceso en redes WLAN";
 answers[22] = 0;
 units[22] = ['108'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 5379. ";
 preguntaids[22] = 5379


//  Id pregunta: 10223 Año de creación de pregunta: 2015
 questions[23]= "24)  &iquest;Cu&aacute;l es la Asociaci&oacute;n Europea de Fabricantes de Ordenadores?";
 choices[23]= new Array();
 choices[23][0] = "ETSI";
 choices[23][1] = "CECUA";
 choices[23][2] = "ECMA";
 choices[23][3] = "ECTA";
 answers[23] = 2;
 units[23] = ['48'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 10223. European Computer Manufacturing Association";
 preguntaids[23] = 10223


//  Id pregunta: 402 Año de creación de pregunta: 2016
 questions[24]= "25)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[24]= new Array();
 choices[24][0] = "El Ministerio de Igualdad.";
 choices[24][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[24][2] = "Ambas son correctas.";
 choices[24][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[24] = 1;
 units[24] = ['14'];
 blocks[24] = ['A3'];
 comments[24] = "Id Pregunta: 402. Pol&iacute;ticas de igualdad";
 preguntaids[24] = 402


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[25]= "26)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[25]= new Array();
 choices[25][0] = "La Ley General Tributaria.";
 choices[25][1] = "La Ley Presupuestaria.";
 choices[25][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[25][3] = "Ninguna de las respuestas es correcta.";
 answers[25] = 0;
 units[25] = ['11'];
 blocks[25] = ['A2'];
 comments[25] = "Id Pregunta: 304. Presupuestos generales";
 preguntaids[25] = 304


//  Id pregunta: 487 Año de creación de pregunta: 2016
 questions[26]= "27)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[26]= new Array();
 choices[26][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[26][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[26][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[26][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[26] = 1;
 units[26] = ['19'];
 blocks[26] = ['A4'];
 comments[26] = "Id Pregunta: 487. Sociedad de la informaci&oacute;n";
 preguntaids[26] = 487


//  Id pregunta: 3334 Año de creación de pregunta: 2004
 questions[27]= "28)  Respecto a los cuatro tipos de drivers de JDBC, &iquest;Cu&aacute;l de ellos requiere la existencia de un servidor intermedio o middleware?";
 choices[27]= new Array();
 choices[27][0] = "Driver de tipo I";
 choices[27][1] = "Driver de tipo II";
 choices[27][2] = "Driver de tipo III";
 choices[27][3] = "Driver de tipo IV";
 answers[27] = 2;
 units[27] = ['61'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 3334. ";
 preguntaids[27] = 3334


//  Id pregunta: 5101 Año de creación de pregunta: 2004
 questions[28]= "29)  Qu&eacute; m&eacute;todo no se emplea para generar contenido din&aacute;mico en el servidor";
 choices[28]= new Array();
 choices[28][0] = "JavaScript";
 choices[28][1] = "CGI";
 choices[28][2] = "JSP";
 choices[28][3] = "ASP";
 answers[28] = 0;
 units[28] = ['62'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 5101. ";
 preguntaids[28] = 5101


//  Id pregunta: 219 Año de creación de pregunta: 2016
 questions[29]= "30)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[29]= new Array();
 choices[29][0] = "un art&iacute;culo";
 choices[29][1] = "dos art&iacute;culos";
 choices[29][2] = "tres art&iacute;culos";
 choices[29][3] = "cuatro art&iacute;culos";
 answers[29] = 1;
 units[29] = ['7'];
 blocks[29] = ['A2'];
 comments[29] = "Id Pregunta: 219. Ley 39/2015";
 preguntaids[29] = 219


//  Id pregunta: 9779 Año de creación de pregunta: 2014
 questions[30]= "31)  La probabilidad de explosi&oacute;n por escape de gas en una f&aacute;brica es de 0'0001. Si llega a producirse se sabe que morir&aacute;n al menos diez empleados y se producir&aacute;n p&eacute;rdidas materiales por al menos de 100 millones de euros. &iquest;Cu&aacute;l es riesgo cuantitativo asociado a la amenaza de explosi&oacute;n?";
 choices[30]= new Array();
 choices[30][0] = "10000 euros";
 choices[30][1] = "100 millones de euros";
 choices[30][2] = "No se puede valorar porque la p&eacute;rdida de vidas humanas no es cuantificable (salvo para las compa&ntilde;&iacute;as de seguros)";
 choices[30][3] = "Muy alto";
 answers[30] = 2;
 units[30] = ['45'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 9779. ";
 preguntaids[30] = 9779


//  Id pregunta: 450 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qui&eacute;n realiza el seguimiento peri&oacute;dico del cumplimiento de los objetivos de la Agenda Digital para Espa&ntilde;a?";
 choices[31]= new Array();
 choices[31][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital (SGAD)";
 choices[31][1] = "La Asociaci&oacute;n Espa&ntilde;ola de Normalizaci&oacute;n y Certificaci&oacute;n (AENOR)";
 choices[31][2] = "El Observatorio Nacional de Telecomunicaciones y Sociedad de la Informaci&oacute;n (ONTSI)";
 choices[31][3] = "El Observatorio de Administraci&oacute;n Electr&oacute;nica (OBSAE)";
 answers[31] = 2;
 units[31] = ['19'];
 blocks[31] = ['A4'];
 comments[31] = "Id Pregunta: 450. Agenda Digital para Espa&ntilde;a";
 preguntaids[31] = 450


//  Id pregunta: 5486 Año de creación de pregunta: 2007
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre PostScript y el formato PDF no es correcta?";
 choices[32]= new Array();
 choices[32][0] = "PostScript es un lenguaje de programaci&oacute;n, y PDF no";
 choices[32][1] = "Tanto PostScript como PDF comparten el mismo Modelo de Imagen, describiendo las p&aacute;ginas mediante los mismos mecanismos";
 choices[32][2] = "Tanto en PostScript como en PDF es posible definir bucles.";
 choices[32][3] = "PostScript es interpretado y ejecutado. PDF es interpretado, pero no ejecutado en sentido estricto.";
 answers[32] = 2;
 units[32] = ['80'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 5486. ";
 preguntaids[32] = 5486


//  Id pregunta: 4392 Año de creación de pregunta: 2002
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes direcciones es v&aacute;lida para un equipo conectado y accesible directamente desde Internet?:";
 choices[33]= new Array();
 choices[33][0] = "256.198.234.12";
 choices[33][1] = "10.128.179.54";
 choices[33][2] = "192.139.234.12";
 choices[33][3] = "127.34.156.0";
 answers[33] = 2;
 units[33] = ['109'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 4392. ";
 preguntaids[33] = 4392


//  Id pregunta: 9472 Año de creación de pregunta: 2014
 questions[34]= "35)  En el lenguaje SQL, la funci&oacute;n de agregado COUNT, aplicada sobre una columna, contabiliza&hellip;";
 choices[34]= new Array();
 choices[34][0] = "N&ordm; de filas recuperadas por la consulta";
 choices[34][1] = "N&ordm; de filas recuperadas por la consulta, exceptuando aquellas en que la columna referenciada tenga valor nulo";
 choices[34][2] = "N&ordm; de filas recuperadas por la consulta, incluyendo valores duplicados o nulos en la columna";
 choices[34][3] = "Si la columna sobre la que se aplica tiene valor nulo en todas las filas, la funci&oacute;n COUNT devolver&aacute; &quot;nulo&quot;";
 answers[34] = 2;
 units[34] = ['61'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 9472. ";
 preguntaids[34] = 9472


//  Id pregunta: 2196 Año de creación de pregunta: 2002
 questions[35]= "36)  Indicar cual de los siguientes instrumentos de informaci&oacute;n es un sistema de ayuda orientado a modelos:";
 choices[35]= new Array();
 choices[35][0] = "Informes de excepci&oacute;n";
 choices[35][1] = "Informes resumen";
 choices[35][2] = "Procesos prueba-error";
 choices[35][3] = "Consultas ad-hoc";
 answers[35] = 2;
 units[35] = ['24'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 2196. ";
 preguntaids[35] = 2196


//  Id pregunta: 40 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[36]= new Array();
 choices[36][0] = "Cinco.";
 choices[36][1] = "Dos.";
 choices[36][2] = "Cuatro.";
 choices[36][3] = "Siete.";
 answers[36] = 0;
 units[36] = ['1'];
 blocks[36] = ['A1'];
 comments[36] = "Id Pregunta: 40. Constituci&oacute;n de 1978";
 preguntaids[36] = 40


//  Id pregunta: 4586 Año de creación de pregunta: 2002
 questions[37]= "38)  &iquest;De que trata el est&aacute;ndar IEEE 802.1.q?:";
 choices[37]= new Array();
 choices[37][0] = "De las VLAN (Virtual Local Area Network)";
 choices[37][1] = "De la capa f&iacute;sica de la red Ethernet";
 choices[37][2] = "No existe dicho est&aacute;ndar";
 choices[37][3] = "Del canal D de la RDSI";
 answers[37] = 0;
 units[37] = ['102'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 4586. ";
 preguntaids[37] = 4586


//  Id pregunta: 1972 Año de creación de pregunta: 2016
 questions[38]= "39)  Podr&aacute;n ser medios de prueba en un procedimiento administrativo:";
 choices[38]= new Array();
 choices[38][0] = "Exclusivamente aquellos que se contengan en medios escritos y ordinarios.";
 choices[38][1] = "Los hachos relevantes para la decisi&oacute;n de un procedimiento podr&aacute;n acreditarse por cualquier medio de prueba admisible en derecho.";
 choices[38][2] = "Cualquier hecho acaecido en el procedimiento podr&aacute; acreditarse por un medio da prueba admisible en derecho.";
 choices[38][3] = "Todas las respuestas anteriores son incorrectas.";
 answers[38] = 1;
 units[38] = ['7'];
 blocks[38] = ['A2'];
 comments[38] = "Id Pregunta: 1972. ";
 preguntaids[38] = 1972


//  Id pregunta: 3188 Año de creación de pregunta: 2003
 questions[39]= "40)  C&oacute;mo objetos de una base de datos ORACLE, &iquest;cu&aacute;l es la diferencia principal entre una funci&oacute;n y un procedimiento?:";
 choices[39]= new Array();
 choices[39][0] = "Una funci&oacute;n no puede ejecutarse de forma nativa; un procedimiento si.";
 choices[39][1] = "Una funci&oacute;n puede invocar otra funci&oacute;n; un procedimiento no.";
 choices[39][2] = "Una funci&oacute;n est&aacute; almacenada en la base de datos; un procedimiento no.";
 choices[39][3] = "Una funci&oacute;n puede devolver un valor al programa que la invoca; un procedimiento no.";
 answers[39] = 3;
 units[39] = ['61'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 3188. Junta Andaluc&iacute;a";
 preguntaids[39] = 3188


//  Id pregunta: 9457 Año de creación de pregunta: 2014
 questions[40]= "41)  Seg&uacute;n el ENS cu&aacute;l de las siguientes afirmaciones es incorrecta";
 choices[40]= new Array();
 choices[40][0] = "Si la dimensi&oacute;n de confidencialidad de un sistema se considera de categor&iacute;a alta la informaci&oacute;n se cifrar&aacute; tanto durante su almacenamiento como durante su transmisi&oacute;n. S&oacute;lo estar&aacute; en claro mientras se est&aacute; haciendo uso de ella.";
 choices[40][1] = "Si un sistema es de categor&iacute;a b&aacute;sica es necesario realizar un an&aacute;lisis de riesgos informal.";
 choices[40][2] = "Si la dimensi&oacute;n de confidencialidad de un sistema se considera de categor&iacute;a alta se emplear&aacute;n, preferentemente, dispositivos hw en el establecimiento y utilizaci&oacute;n de la VPN.";
 choices[40][3] = "Para aquellos sistemas cuya dimensi&oacute;n de trazabilidad sea media es necesario llevar un registro de la actividad de los usuarios y protecci&oacute;n de los registros de actividad.";
 answers[40] = 3;
 units[40] = ['46'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 9457. El registro de actividad se aplica desde el nivel BAJO";
 preguntaids[40] = 9457


//  Id pregunta: 1453 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n la LSSI en su art&iacute;culo 40, la cuant&iacute;a de las multas que se impongan se graduar&aacute; atendiendo a ciertos criterios, cual es falso:";
 choices[41]= new Array();
 choices[41][0] = "La existencia de intencionalidad.";
 choices[41][1] = "Plazo de tiempo durante el que se haya venido cometiendo la infracci&oacute;n.";
 choices[41][2] = "La cantidad de personas involucradas en la infracci&oacute;n.";
 choices[41][3] = "Los beneficios obtenidos por la infracci&oacute;n.";
 answers[41] = 2;
 units[41] = ['19'];
 blocks[41] = ['A4'];
 comments[41] = "Id Pregunta: 1453. ";
 preguntaids[41] = 1453


//  Id pregunta: 9899 Año de creación de pregunta: 2015
 questions[42]= "43)  &iquest;Qu&eacute; reglamento ha considerado la Ley 39/2015 para el establecimiento los sistemas de identificaci&oacute;n como los de firma previstos en dicha Ley?";
 choices[42]= new Array();
 choices[42][0] = "Reglamento (UE) n.&ordm; 910/2014.";
 choices[42][1] = "Reglamento (UE) n.&ordm; 810/2013.";
 choices[42][2] = "Reglamento (UE) n.&ordm; 527/2013.";
 choices[42][3] = "Reglamento (UE) n.&ordm; 810/2014.";
 answers[42] = 0;
 units[42] = ['7', '19'];
 blocks[42] = ['A2', 'A4'];
 comments[42] = "Id Pregunta: 9899. ";
 preguntaids[42] = 9899


//  Id pregunta: 6021 Año de creación de pregunta: 2003
 questions[43]= "44)  Clara acaba de recibir un documento de especificaciones de usuario de una aplicaci&oacute;n. El requisito establecidopara el desarrollo de que: &ldquo;El software debe soportar al menos 1.000.000 libros, 7.000 lectores y 250 materias&rdquo;,se enmarcar&iacute;a dentro de los requisitos de:";
 choices[43]= new Array();
 choices[43][0] = "Operaci&oacute;n.";
 choices[43][1] = "Funcionalidad.";
 choices[43][2] = "Recursos.";
 choices[43][3] = "Capacidad.";
 answers[43] = 3;
 units[43] = ['84'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 6021. TIC B 2007";
 preguntaids[43] = 6021


//  Id pregunta: 10470 Año de creación de pregunta: 2015
 questions[44]= "45)  &iquest;Cual NO es una dimensi&oacute;n del cubo de clasificaci&oacute;n de las soluciones en la nube?";
 choices[44]= new Array();
 choices[44][0] = "Formas de implementaci&oacute;n: nube p&uacute;blica, privada, h&iacute;brida y comunitaria.";
 choices[44][1] = "Agentes intervinientes: proveedor, suscriptor, intermediario, habilitador y auditor.";
 choices[44][2] = "Familias de provisi&oacute;n del servicio: Iaas, Paas, Saas y BPaaS.";
 choices[44][3] = "Todas son dimensiones.";
 answers[44] = 3;
 units[44] = ['52'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 10470. ";
 preguntaids[44] = 10470


//  Id pregunta: 696 Año de creación de pregunta: 2016
 questions[45]= "46)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[45]= new Array();
 choices[45][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[45][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[45][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[45][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[45] = 0;
 units[45] = ['62'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 696. AGE A1 2015";
 preguntaids[45] = 696


//  Id pregunta: 1718 Año de creación de pregunta: 2016
 questions[46]= "47)  Los scriptlets se definen como:";
 choices[46]= new Array();
 choices[46][0] = "Expresiones entre las etiquetas &lt;%= y %&gt; que se eval&uacute;an y el resultado se convierte a una cadena embebida en JSP.";
 choices[46][1] = "Fragmentos de c&oacute;digo Java entre las etiquetas &lt;% y %&gt; y embebido en JSP";
 choices[46][2] = "Atributos generales entre etiquetas &lt;%@ y %&gt; asociados a un fragmento JavaScript";
 choices[46][3] = "Declaraciones de m&eacute;todos y variables entre etiquetas &lt;%! y %&gt; en una p&aacute;gina JSP.";
 answers[46] = 1;
 units[46] = ['64'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 1718. ";
 preguntaids[46] = 1718


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[47]= "48)  La soberan&iacute;a nacional reside en:";
 choices[47]= new Array();
 choices[47][0] = "el Parlamento nacional.";
 choices[47][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[47][2] = "el pueblo espa&ntilde;ol.";
 choices[47][3] = "el Congreso y el Senado.";
 answers[47] = 2;
 units[47] = ['1'];
 blocks[47] = ['A1'];
 comments[47] = "Id Pregunta: 82. Constituci&oacute;n de 1978";
 preguntaids[47] = 82


//  Id pregunta: 10724 Año de creación de pregunta: 2015
 questions[48]= "49)  Se&ntilde;ale la respuesta correcta relativa a la seguridad en la parte de interfaz de usuario.";
 choices[48]= new Array();
 choices[48][0] = "Con Windows forms s&oacute;lo se tiene en cuenta la parte de seguridad basada en roles.";
 choices[48][1] = "Con Web forms s&oacute;lo se tiene en cuenta la parte de seguridad basada en c&oacute;digo";
 choices[48][2] = "Con Web forms se tiene en cuenta la seguridad basada en roles y en c&oacute;digo.";
 choices[48][3] = "Todas las anteriores son falsas.";
 answers[48] = 3;
 units[48] = ['63'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 10724. ";
 preguntaids[48] = 10724


//  Id pregunta: 8981 Año de creación de pregunta: 2013
 questions[49]= "50)  Seg&uacute;n la Ley de Firma Electr&oacute;nica, se&ntilde;ale cu&aacute;l NO es un supuesto que exima al prestador de servicios de certificaci&oacute;n de la responsabilidad sobre los posibles da&ntilde;os y perjuicios causados a un firmante:";
 choices[49]= new Array();
 choices[49][0] = "Cuando el firmante no haya proporcionado al prestador informaci&oacute;n veraz, completa y exacta de los datos que deban constar en el certificado en el momento de emitir el mismo";
 choices[49][1] = "Cuado el firmante no haya comunicado al prestador cualquier cambio en las circunstancias reflejadas en el certificado electr&oacute;nico";
 choices[49][2] = "Cuando el firmante haya sido negligente en la conservaci&oacute;n de sus datos de creaci&oacute;n de firma";
 choices[49][3] = "Cuando el firmante utilice un certificado revocado sin que el prestador le haya notificado la suspensi&oacute;n de la vigencia";
 answers[49] = 3;
 units[49] = ['19'];
 blocks[49] = ['A4'];
 comments[49] = "Id Pregunta: 8981. Ley 59/2003, art&iacute;culo 23";
 preguntaids[49] = 8981


//  Id pregunta: 5422 Año de creación de pregunta: 2007
 questions[50]= "51)  Cu&aacute;l de las siguientes no es una fase t&iacute;pica de PUDS (Proceso Unificado del Desarrollo del SW)";
 choices[50]= new Array();
 choices[50][0] = "Iniciaci&oacute;n";
 choices[50][1] = "Finalizaci&oacute;n";
 choices[50][2] = "Transici&oacute;n";
 choices[50][3] = "Elaboraci&oacute;n";
 answers[50] = 1;
 units[50] = ['84'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 5422. ";
 preguntaids[50] = 5422


//  Id pregunta: 1980 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n la Ley 34/2002 de SSI-CE, los prestadores de servicios de la sociedad de la informaci&oacute;n establecidos en Espa&ntilde;a deber&aacute;n:";
 choices[51]= new Array();
 choices[51][0] = "Notificar al Ministerio del Interior los correos electr&oacute;nicos registrados e identificando el nombre y DNI de los usuarios.";
 choices[51][1] = "Comunicar al Ministerio de Ciencia y Tecnolog&iacute;a en el plazo de un mes, al menos, un nombre de dominio o direcci&oacute;n de internet que utilicen para su identificaci&oacute;n en internet";
 choices[51][2] = "Comunicar al registro mercantil, en el plazo de un mes, al menos, un nombre de dominio o direcci&oacute;n de internet que utilicen para su identificaci&oacute;n en internet";
 choices[51][3] = "Comunicar al Registro de la Propiedad en el plazo de un mes, los nombres de dominio o direcciones de internet que utilicen.";
 answers[51] = 2;
 units[51] = ['19'];
 blocks[51] = ['A4'];
 comments[51] = "Id Pregunta: 1980. ";
 preguntaids[51] = 1980


//  Id pregunta: 106 Año de creación de pregunta: 2016
 questions[52]= "53)  Se&ntilde;ale la respuesta falsa:";
 choices[52]= new Array();
 choices[52][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[52][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[52][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[52][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[52] = 2;
 units[52] = ['5'];
 blocks[52] = ['A1'];
 comments[52] = "Id Pregunta: 106. Uni&oacute;n Europea";
 preguntaids[52] = 106


//  Id pregunta: 1534 Año de creación de pregunta: 2016
 questions[53]= "54)  De acuerdo con lo previsto en el art&iacute;culo 20 de la Ley Org&aacute;nica 3/2007, los poderes p&uacute;blicos deben considerar la variable sexo, en la realizaci&oacute;n:";
 choices[53]= new Array();
 choices[53][0] = "De compras p&uacute;blicas de bienes y servicios inform&aacute;ticos.";
 choices[53][1] = "De estad&iacute;sticas, encuestas y recogidas de datos que lleven a cabo.";
 choices[53][2] = "Del dise&ntilde;o de formularios de las autoliquidaciones tributarias.";
 choices[53][3] = "De proyectos de actuaci&oacute;n o reforma de bienes inmuebles del patrimonio del estado.";
 answers[53] = 1;
 units[53] = ['14'];
 blocks[53] = ['A3'];
 comments[53] = "Id Pregunta: 1534. ";
 preguntaids[53] = 1534


//  Id pregunta: 10546 Año de creación de pregunta: 2015
 questions[54]= "55)  Las redes conmutadas ethernet, tienen una serie de ventajas. Se&ntilde;ale la que no se encuentra entre ellas";
 choices[54]= new Array();
 choices[54][0] = "Redes half-duplex";
 choices[54][1] = "Autonegociaci&oacute;n";
 choices[54][2] = "Trunking";
 choices[54][3] = "Uso del comando pause";
 answers[54] = 0;
 units[54] = ['102'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 10546. ";
 preguntaids[54] = 10546


//  Id pregunta: 1241 Año de creación de pregunta: 2016
 questions[55]= "56)  En el &aacute;mbito de las redes inal&aacute;mbricas, la variante IEEE 802.11a:";
 choices[55]= new Array();
 choices[55][0] = "Opera dentro del rango de los 5 GHz.";
 choices[55][1] = "Es compatible con el Est&aacute;ndar 802.11b.";
 choices[55][2] = "Es compatible con el est&aacute;ndar 802.11g.";
 choices[55][3] = "Incorpora QoS (Calidad de Servicio).";
 answers[55] = 0;
 units[55] = ['108'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 1241. ";
 preguntaids[55] = 1241


//  Id pregunta: 2084 Año de creación de pregunta: 2002
 questions[56]= "57)  El m&eacute;todo de ordenaci&oacute;n de alternativas que incorpora la posibilidad de valorar el riesgo y la incertidumbre es:";
 choices[56]= new Array();
 choices[56][0] = "El m&eacute;todo Promethee";
 choices[56][1] = "Utilidad multiatributo";
 choices[56][2] = "El m&eacute;todo de permutaci&oacute;n";
 choices[56][3] = "Ninguno de los restantes";
 answers[56] = 1;
 units[56] = ['38'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 2084. ";
 preguntaids[56] = 2084


//  Id pregunta: 411 Año de creación de pregunta: 2016
 questions[57]= "58)  En el supuesto de que una empresa haga publicidad enga&ntilde;osa de sus acciones de responsabilidad en materia de igualdad, podr&aacute;n ejercer la acci&oacute;n de cesaci&oacute;n cuando se considere:";
 choices[57]= new Array();
 choices[57][0] = "El Instituto de la Mujer.";
 choices[57][1] = "&Oacute;rganos equivalentes al anterior pertenecientes a las CCAA.";
 choices[57][2] = "Ambas son correctas.";
 choices[57][3] = "A y B son incorrectas.";
 answers[57] = 2;
 units[57] = ['14'];
 blocks[57] = ['A3'];
 comments[57] = "Id Pregunta: 411. Pol&iacute;ticas de igualdad";
 preguntaids[57] = 411


//  Id pregunta: 94 Año de creación de pregunta: 2016
 questions[58]= "59)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[58]= new Array();
 choices[58][0] = "Los Derechos y Deberes fundamentales.";
 choices[58][1] = "La Corona.";
 choices[58][2] = "El Poder Judicial.";
 choices[58][3] = "Las Cortes Generales.";
 answers[58] = 0;
 units[58] = ['1'];
 blocks[58] = ['A1'];
 comments[58] = "Id Pregunta: 94. Constituci&oacute;n de 1978";
 preguntaids[58] = 94


//  Id pregunta: 8151 Año de creación de pregunta: 2011
 questions[59]= "60)  &iquest;Qu&eacute; est&aacute;ndar de redes inal&aacute;mbricas permite a dispositivos en movimiento realizar itinerancia r&aacute;pida de un punto de acceso a otro?";
 choices[59]= new Array();
 choices[59][0] = "IEEE 802.11 h";
 choices[59][1] = "IEEE 802.11 l";
 choices[59][2] = "IEEE 802.11 p";
 choices[59][3] = "IEEE 802 11 r.";
 answers[59] = 3;
 units[59] = ['108'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 8151. Examen TIC A2 2010 interna";
 preguntaids[59] = 8151


//  Id pregunta: 8249 Año de creación de pregunta: 2011
 questions[60]= "61)  El acr&oacute;nimo FCAPS en gesti&oacute;n de redes se refiere a:";
 choices[60]= new Array();
 choices[60][0] = "Failure, Configuration, Accountability, Performance, Software, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y software de red.";
 choices[60][1] = "Failure, Compatibility, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, compatibilidad, contabilidad, rendimiento y seguridad.";
 choices[60][2] = "Failure, Configuration, Adaptability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, adaptabilidad, rendimiento y seguridad.";
 choices[60][3] = "Failure, Configuration, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y seguridad.";
 answers[60] = 3;
 units[60] = ['114'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 8249. Examen UPM A2 2011";
 preguntaids[60] = 8249


//  Id pregunta: 8092 Año de creación de pregunta: 2011
 questions[61]= "62)  Entre los tipos de componentes que incluye la especificaci&oacute;n de aplicaciones basadas en J2EE 1.4 se encuentran:";
 choices[61]= new Array();
 choices[61][0] = "P&aacute;ginas Asp y VBScript";
 choices[61][1] = "Applet, Servlets, EJBs";
 choices[61][2] = "Javascript y p&aacute;ginas JSP";
 choices[61][3] = "Ninguna de las anteriores";
 answers[61] = 1;
 units[61] = ['64'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 8092. Analista Ayto. Madrid 2010";
 preguntaids[61] = 8092


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[62]= new Array();
 choices[62][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[62][1] = "Por Orden Ministerial.";
 choices[62][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[62][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[62] = 0;
 units[62] = ['1'];
 blocks[62] = ['A1'];
 comments[62] = "Id Pregunta: 75. Constituci&oacute;n de 1978";
 preguntaids[62] = 75


//  Id pregunta: 175 Año de creación de pregunta: 2016
 questions[63]= "64)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[63]= new Array();
 choices[63][0] = "Son vinculantes solamente.";
 choices[63][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[63][2] = "Son preceptivos y vinculantes.";
 choices[63][3] = "Son preceptivos y no vinculantes.";
 answers[63] = 1;
 units[63] = ['5'];
 blocks[63] = ['A1'];
 comments[63] = "Id Pregunta: 175. Uni&oacute;n Europea";
 preguntaids[63] = 175


//  Id pregunta: 986 Año de creación de pregunta: 2016
 questions[64]= "65)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[64]= new Array();
 choices[64][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[64][1] = "los Subdelegados del Gobierno en las provincias";
 choices[64][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[64][3] = "a y b son correctas";
 answers[64] = 3;
 units[64] = ['4', '7', '8', '9'];
 blocks[64] = ['A1', 'A2'];
 comments[64] = "Id Pregunta: 986. Ley 40/2015";
 preguntaids[64] = 986


//  Id pregunta: 6099 Año de creación de pregunta: 2003
 questions[65]= "66)  Seg&uacute;n el RD 209/2003, de 21 de febrero, con respecto a las notificaciones telem&aacute;ticas, cuando exista constancia dela recepci&oacute;n de una notificaci&oacute;n, se considerar&aacute; que &eacute;sta ha sido rechazada cuando no se haya accedido a sucontenido en un plazo de:";
 choices[65]= new Array();
 choices[65][0] = "10 d&iacute;as naturales";
 choices[65][1] = "10 d&iacute;as h&aacute;biles";
 choices[65][2] = "20 d&iacute;as naturales";
 choices[65][3] = "En ning&uacute;n caso se considerar&aacute; rechazada si no se ha accedido a su contenido";
 answers[65] = 0;
 units[65] = ['19'];
 blocks[65] = ['A4'];
 comments[65] = "Id Pregunta: 6099. Examen TIC A1 MAP 2007";
 preguntaids[65] = 6099


//  Id pregunta: 8022 Año de creación de pregunta: 2011
 questions[66]= "67)  La longitud de onda alrededor de la cual un medio de transmisi&oacute;n basado en fibra &oacute;ptica se dice que est&aacute; trabajando en 3&ordf; ventana es:";
 choices[66]= new Array();
 choices[66][0] = "750 nm.";
 choices[66][1] = "820 nm.";
 choices[66][2] = "1310 nm.";
 choices[66][3] = "1550 nm.";
 answers[66] = 3;
 units[66] = ['106'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 8022. Examen TIC A2 2010";
 preguntaids[66] = 8022


//  Id pregunta: 7928 Año de creación de pregunta: 2011
 questions[67]= "68)  El Esquema Nacional de Interoperatibilidad (ENI) se&ntilde;ala que las condiciones de licenciamiento de las aplicaciones y documentaci&oacute;n asociada tendr&aacute;n en cuenta que el fin perseguido es el aprovechamiento y la reutilizaci&oacute;n. Para este fin, &iquest;qu&eacute; tipo de licenciamiento indica expresamente el ENI que se procurar&aacute; aplicar?:";
 choices[67]= new Array();
 choices[67][0] = "Licencia IDABC.";
 choices[67][1] = "Licencia de C&oacute;digo Abierto del Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 choices[67][2] = "Licencia P&uacute;blica de la Uni&oacute;n Europea.";
 choices[67][3] = "Licencia Shareware.";
 answers[67] = 2;
 units[67] = ['43'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 7928. Examen TIC A1 2010";
 preguntaids[67] = 7928


//  Id pregunta: 1020 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[68]= new Array();
 choices[68][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[68][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[68][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[68][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[68] = 1;
 units[68] = ['4', '7', '8', '9'];
 blocks[68] = ['A1', 'A2'];
 comments[68] = "Id Pregunta: 1020. Ley 40/2015";
 preguntaids[68] = 1020


//  Id pregunta: 658 Año de creación de pregunta: 2016
 questions[69]= "70)  Se&ntilde;ale la manera correcta de comentar una l&iacute;nea de c&oacute;digo en un job JCL:";
 choices[69]= new Array();
 choices[69][0] = "/*";
 choices[69][1] = "//*";
 choices[69][2] = "#";
 choices[69][3] = "//";
 answers[69] = 1;
 units[69] = ['56'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 658. AGE A2 2015";
 preguntaids[69] = 658


//  Id pregunta: 6782 Año de creación de pregunta: 2010
 questions[70]= "71)  A efectos de la Ley Org&aacute;nica 15/1999, se define dato de car&aacute;cter personal como:";
 choices[70]= new Array();
 choices[70][0] = "Cualquier informaci&oacute;n relativa a una persona f&iacute;sica o jur&iacute;dica";
 choices[70][1] = "Cualquier informaci&oacute;n sobre personas";
 choices[70][2] = "Todos los datos relativos a una persona";
 choices[70][3] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o identificables";
 answers[70] = 3;
 units[70] = ['35'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 6782. Castilla La Mancha 2009";
 preguntaids[70] = 6782


//  Id pregunta: 4021 Año de creación de pregunta: 2002
 questions[71]= "72)  El programa IDABC:";
 choices[71]= new Array();
 choices[71][0] = "Pretende el Intercambio de Datos e interoperabilidad entre Adminsitraciones, Empresas y Ciudadanos";
 choices[71][1] = "Contiene tres directivas";
 choices[71][2] = "Financiaba tanto los proyectos horizontales como verticales en su totalidad";
 choices[71][3] = "Fue creado antes que el ENS";
 answers[71] = 0;
 units[71] = ['19'];
 blocks[71] = ['A4'];
 comments[71] = "Id Pregunta: 4021. ";
 preguntaids[71] = 4021


//  Id pregunta: 5628 Año de creación de pregunta: 2007
 questions[72]= "73)  El algoritmo de cifrado Rijndael puede ser especificado por una clave:";
 choices[72]= new Array();
 choices[72][0] = "Fija de 256 bits";
 choices[72][1] = "Con un m&iacute;nimo de 128 bits y un m&aacute;ximo de 256 bits";
 choices[72][2] = "Fija de 128 bits";
 choices[72][3] = "Con un m&iacute;nimo de 256 bits y un m&aacute;ximo de 1024 bits";
 answers[72] = 1;
 units[72] = ['76'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 5628. ";
 preguntaids[72] = 5628


//  Id pregunta: 10663 Año de creación de pregunta: 2015
 questions[73]= "74)  Seg&uacute;n la Ley 9/2014, se&ntilde;ale la respuesta INCORRECTA. El gobierno, dentro de sus facultades, regular&aacute; mediante Real Decreto los procedimientos para:";
 choices[73]= new Array();
 choices[73][0] = "Elaborar y aprobar planes de utilizaci&oacute;n del espectro.";
 choices[73][1] = "Determinaci&oacute;n, control e inspecci&oacute;n de los niveles de emisi&oacute;n.";
 choices[73][2] = "Determinar el operador del servicio universal.";
 choices[73][3] = "Todas son atribuciones del Gobierno.";
 answers[73] = 2;
 units[73] = ['121'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 10663. ";
 preguntaids[73] = 10663


//  Id pregunta: 10324 Año de creación de pregunta: 2015
 questions[74]= "75)  Los riesgos del Cloud Computing, de acuerdo con el &uacute;ltimo informe del ENISA pueden clasificarse como:";
 choices[74]= new Array();
 choices[74][0] = "Riesgos pol&iacute;ticos y organizativos, riesgos t&eacute;cnicos y riesgos legales";
 choices[74][1] = "Riesgos propios, riesgos compartidos y riesgos derivados";
 choices[74][2] = "Riesgos de usuarios, de la plataforma y del servicio";
 choices[74][3] = "Ninguna de las anteriores";
 answers[74] = 0;
 units[74] = ['52'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 10324. ";
 preguntaids[74] = 10324


