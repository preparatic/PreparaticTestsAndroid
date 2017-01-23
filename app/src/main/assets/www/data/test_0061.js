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
//  Id pregunta: 10815 Año de creación de pregunta: 2015
 questions[0]= "1)  Seg&uacute;n la Ley 25/2013:";
 choices[0]= new Array();
 choices[0][0] = "Las facturas electr&oacute;nicas que se remitan a las Administraciones P&uacute;blicas deber&aacute;n tener un formato estructurado y estar firmadas con firma electr&oacute;nica avanzada basada en un certificado reconocido.";
 choices[0][1] = "Las Entidades Locales podr&aacute;n adherirse a la utilizaci&oacute;n del Punto general de entrada de facturas electr&oacute;nicas que proporcione su Diputaci&oacute;n, Comunidad Aut&oacute;noma o el Estado.";
 choices[0][2] = "El Punto general de entrada de facturas electr&oacute;nicas proporcionar&aacute; un servicio autom&aacute;tico de puesta a disposici&oacute;n o de remisi&oacute;n electr&oacute;nica de las mismas a las oficinas contables competentes para su registro.";
 choices[0][3] = "Todas las anteriores son correctas";
 answers[0] = 3;
 units[0] = ['10'];
 blocks[0] = ['A2'];
 comments[0] = "Id Pregunta: 10815. ";
 preguntaids[0] = 10815


//  Id pregunta: 5761 Año de creación de pregunta: 2007
 questions[1]= "2)  &iquest;Cual de los siguientes conceptos NO es un elemento b&aacute;sico de Magerit?";
 choices[1]= new Array();
 choices[1][0] = "activo";
 choices[1][1] = "salvaguarda";
 choices[1][2] = "amenaza";
 choices[1][3] = "vulnerabilidad";
 answers[1] = 3;
 units[1] = ['45'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 5761. ";
 preguntaids[1] = 5761


//  Id pregunta: 8525 Año de creación de pregunta: 2012
 questions[2]= "3)  La ley de contratos del sector p&uacute;blico establece entre sus herramientas un recurso especial de contrataci&oacute;n, se&ntilde;ale cual de la siguientes afirmaciones es FALSA.";
 choices[2]= new Array();
 choices[2][0] = "No se puede usar en casos de tramitaci&oacute;n de emergencia";
 choices[2][1] = "Es objeto de recurso,entre otros, las adjudicaciones realizadas por poderes adjudicadores.";
 choices[2][2] = "Los contratos de suministros no sujetos a regulaci&oacute;n armonizada pueden ser recurridos con este recurso especial.";
 choices[2][3] = "El car&aacute;cter del recurso es potestativo, es decir, no es obligatorio interponerlo";
 answers[2] = 2;
 units[2] = ['10'];
 blocks[2] = ['A2'];
 comments[2] = "Id Pregunta: 8525. Art. 40 RD Legislativo 3/2011";
 preguntaids[2] = 8525


//  Id pregunta: 9887 Año de creación de pregunta: 2015
 questions[3]= "4)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece la obligatoriedad de relaci&oacute;n con las AAPP a trav&eacute;s de medios electr&oacute;nicos para:";
 choices[3]= new Array();
 choices[3][0] = "Personas jur&iacute;dicas.";
 choices[3][1] = "Entidades sin personalidad jur&iacute;dica.";
 choices[3][2] = "Notarios y registradores.";
 choices[3][3] = "Todas las anteriores.";
 answers[3] = 3;
 units[3] = ['7', '19'];
 blocks[3] = ['A2', 'A4'];
 comments[3] = "Id Pregunta: 9887. ";
 preguntaids[3] = 9887


//  Id pregunta: 9317 Año de creación de pregunta: 2014
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes es sistemas de gesti&oacute;n de conocimiento tiene una versi&oacute;n con licencia de fuentes abiertas?";
 choices[4]= new Array();
 choices[4][0] = "Blackboard";
 choices[4][1] = "WebCT";
 choices[4][2] = "Dokeos";
 choices[4][3] = "Desire2Learn";
 answers[4] = 2;
 units[4] = ['70'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 9317. ";
 preguntaids[4] = 9317


//  Id pregunta: 3790 Año de creación de pregunta: 2002
 questions[5]= "6)  El modelo EFQM, desde el punto de vista de su &aacute;mbito, podr&iacute;a calificarse como:";
 choices[5]= new Array();
 choices[5][0] = "Certificaci&oacute;n de producto";
 choices[5][1] = "Certificaci&oacute;n de proceso (sistema de calidad)";
 choices[5][2] = "Total Quality Management";
 choices[5][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[5] = 2;
 units[5] = ['98'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 3790. ";
 preguntaids[5] = 3790


//  Id pregunta: 7016 Año de creación de pregunta: 2010
 questions[6]= "7)  A la m&aacute;xima cantidad de datos que se pueden perder en caso de desastre se les denomina:";
 choices[6]= new Array();
 choices[6][0] = "SDO";
 choices[6][1] = "RPO";
 choices[6][2] = "RTO";
 choices[6][3] = "MTBF";
 answers[6] = 1;
 units[6] = ['87'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 7016. ";
 preguntaids[6] = 7016


//  Id pregunta: 157 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[7]= new Array();
 choices[7][0] = "732";
 choices[7][1] = "626";
 choices[7][2] = "751";
 choices[7][3] = "360";
 answers[7] = 2;
 units[7] = ['5'];
 blocks[7] = ['A1'];
 comments[7] = "Id Pregunta: 157. Uni&oacute;n Europea";
 preguntaids[7] = 157


//  Id pregunta: 1081 Año de creación de pregunta: 2016
 questions[8]= "9)  Entre los objetivos del dise&ntilde;o de BPEL NO se encuentra:";
 choices[8]= new Array();
 choices[8][0] = "Proveer sistemas de control jer&aacute;rquicos y de estilo gr&aacute;fico, que permitan que su uso sea lo m&aacute;s fusionado posible.";
 choices[8][1] = "Soportar un m&eacute;todo de identificaci&oacute;n de instancias de procesos que permita la definici&oacute;n de identificadores a nivel de mensajes de aplicaciones.";
 choices[8][2] = "Definir procesos de negocio utilizando un lenguaje basado en XML.";
 choices[8][3] = "Definir una interpretaci&oacute;n gr&aacute;fica de los procesos.";
 answers[8] = 3;
 units[8] = ['86'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 1081. ";
 preguntaids[8] = 1081


//  Id pregunta: 8863 Año de creación de pregunta: 2013
 questions[9]= "10)  Una clasificaci&oacute;n t&iacute;pica de los modelos de estimaci&oacute;n software es:";
 choices[9]= new Array();
 choices[9][0] = "Basados en Puntos de Funci&oacute;n, multivariable est&aacute;ticos y multivariable din&aacute;micos";
 choices[9][1] = "Con base hist&oacute;rica, con base estad&iacute;stica, con base te&oacute;rica, compuestos y basados en est&aacute;ndares";
 choices[9][2] = "T&eacute;cnicas de Delphi, Modelos exponenciales, Modelo de Putnam y modelos COCOMO";
 choices[9][3] = "Ninguno de los anteriores";
 answers[9] = 1;
 units[9] = ['94'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 8863. ";
 preguntaids[9] = 8863


//  Id pregunta: 4521 Año de creación de pregunta: 2002
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguiente elementos residen en la capa de aplicaci&oacute;n de la pila TCP/IP?:";
 choices[10]= new Array();
 choices[10][0] = "TFTP";
 choices[10][1] = "FTP";
 choices[10][2] = "DNS";
 choices[10][3] = "Todos los anteriores";
 answers[10] = 3;
 units[10] = ['109'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 4521. ";
 preguntaids[10] = 4521


//  Id pregunta: 7371 Año de creación de pregunta: 2010
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica de un Data Mart?";
 choices[11]= new Array();
 choices[11][0] = "Especializado en el almacenamiento de los datos de un &aacute;rea de negocio espec&iacute;fica.";
 choices[11][1] = "Debe ser alimentado siempre desde un Data Warehouse.";
 choices[11][2] = "En los Data Mart OLAP la estructura para el an&aacute;lisis de su informaci&oacute;n se basa en los cubos OLAP.";
 choices[11][3] = "En los Data Mart OLTP la estructura para el an&aacute;lisis de su informaci&oacute;n est&aacute; montada sobre una base de datos OLTP, como en el Data Warehouse.";
 answers[11] = 1;
 units[11] = ['72'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 7371. Examen TIC B 2009";
 preguntaids[11] = 7371


//  Id pregunta: 8587 Año de creación de pregunta: 2013
 questions[12]= "13)  La arquitectura de un ordenador viene definida por";
 choices[12]= new Array();
 choices[12][0] = "El repertorio de instrucciones";
 choices[12][1] = "El tipo de direccionamientos";
 choices[12][2] = "El tipo de operandos";
 choices[12][3] = "Todas las anteriores";
 answers[12] = 3;
 units[12] = ['56'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 8587. Examen TIC-A1 2011";
 preguntaids[12] = 8587


//  Id pregunta: 3053 Año de creación de pregunta: 2002
 questions[13]= "14)  SHA-1 es un algoritmo empleado por la criptograf&iacute;a sim&eacute;trica de:";
 choices[13]= new Array();
 choices[13][0] = "Res&uacute;men";
 choices[13][1] = "Bloques";
 choices[13][2] = "Flujos";
 choices[13][3] = "Las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[13] = 0;
 units[13] = ['76'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 3053. ";
 preguntaids[13] = 3053


//  Id pregunta: 7114 Año de creación de pregunta: 2010
 questions[14]= "15)  Las normas t&eacute;cnicas de interoperabilidad:";
 choices[14]= new Array();
 choices[14][0] = "Las aprobar&aacute; el Ministerio de la Presidencia, a propuesta del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica  y las publicar&aacute; mediante Resoluci&oacute;n de la Secretaria de Estado para la Funci&oacute;n P&uacute;blica.";
 choices[14][1] = "Las aprobar&aacute;  la Secretaria de Estado para la Funci&oacute;n P&uacute;blica, a propuesta del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica  y las publicar&aacute; el Ministerio de la Presidencia mediante Orden Ministerial.";
 choices[14][2] = "Las aprobar&aacute; el Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica  y las publicar&aacute; mediante Resoluci&oacute;n de la Secretaria de Estado para la Funci&oacute;n P&uacute;blica.";
 choices[14][3] = "Las aprobar&aacute; el Ministerio de la Presidencia, a propuesta del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica  y las publicar&aacute; mediante Real Decreto.";
 answers[14] = 0;
 units[14] = ['43'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 7114. Disposici&oacute;n adicional primera ENI";
 preguntaids[14] = 7114


//  Id pregunta: 10011 Año de creación de pregunta: 2015
 questions[15]= "16)  Se&ntilde;ale de las siguientes cu&aacute;l es una t&eacute;cnica espec&iacute;fica dentro de un proyecto de an&aacute;lisis y gesti&oacute;n de riesgos, seg&uacute;n la gu&iacute;a de T&eacute;cnicas de MAGERIT v3:";
 choices[15]= new Array();
 choices[15][0] = "Sesiones de trabajo.";
 choices[15][1] = "Valoraciones Delphi.";
 choices[15][2] = "Histogramas.";
 choices[15][3] = "&Aacute;rboles de ataque.";
 answers[15] = 3;
 units[15] = ['45'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 10011. Examen TIC A2 2014";
 preguntaids[15] = 10011


//  Id pregunta: 2438 Año de creación de pregunta: 2006
 questions[16]= "17)  Cu&aacute;l de los siguientes grupos no forma parte de la estructura del Sistema Europeo de Normalizaci&oacute;n:";
 choices[16]= new Array();
 choices[16][0] = "AENOR.";
 choices[16][1] = "El Comit&eacute; europeo de Normalizaci&oacute;n.";
 choices[16][2] = "Los &Oacute;rganos internacionales de Normalizaci&oacute;n.";
 choices[16][3] = "Los &Oacute;rganos europeos de Normalizaci&oacute;n.";
 answers[16] = 2;
 units[16] = ['43'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 2438. ";
 preguntaids[16] = 2438


//  Id pregunta: 6419 Año de creación de pregunta: 2003
 questions[17]= "18)  &iquest;C&oacute;mo se garantiza la integridad de la factura electr&oacute;nica?";
 choices[17]= new Array();
 choices[17][0] = "Con firma electr&oacute;nica avanzada basada en un certificado reconocido";
 choices[17][1] = "Mediante sello electr&oacute;nico avanzado basado en un certificado reconocido que identifique a la persona jur&iacute;dica o entidad sin personalidad jur&iacute;dica que selle la factura electr&oacute;nica, a trav&eacute;s de su denominaci&oacute;n o raz&oacute;n social y su n&uacute;mero de identificaci&oacute;n fiscal.";
 choices[17][2] = "A y B son correctas";
 choices[17][3] = "No es necesario garantizar la integridad de la factura pues ya se ve en el remitente";
 answers[17] = 2;
 units[17] = ['10'];
 blocks[17] = ['A2'];
 comments[17] = "Id Pregunta: 6419. ";
 preguntaids[17] = 6419


//  Id pregunta: 7311 Año de creación de pregunta: 2010
 questions[18]= "19)  Que NO se puede incluir en un DFD de nivel 2";
 choices[18]= new Array();
 choices[18][0] = "Procesos";
 choices[18][1] = "Decisiones L&oacute;gicas";
 choices[18][2] = "Flujos de Datos";
 choices[18][3] = "Almacenes de Datos";
 answers[18] = 1;
 units[18] = ['85'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 7311. ";
 preguntaids[18] = 7311


//  Id pregunta: 5361 Año de creación de pregunta: 2006
 questions[19]= "20)  La primera tarea a realizar en un plan de continuidad de negocio es";
 choices[19]= new Array();
 choices[19][0] = "Duplicar los equipos cr&iacute;ticos";
 choices[19][1] = "Hacer una copia de seguridad de todos los datos";
 choices[19][2] = "Realizar un an&aacute;lisis de la criticidad de los diferentes recursos ante posibles situaciones de emergencia";
 choices[19][3] = "Evaluar la habilidad del personal para responder adecuadamente a situaciones de emergencia";
 answers[19] = 2;
 units[19] = ['45'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 5361. ";
 preguntaids[19] = 5361


//  Id pregunta: 9087 Año de creación de pregunta: 2014
 questions[20]= "21)  El modelo Vectorial de representaci&oacute;n de datos espaciales";
 choices[20]= new Array();
 choices[20][0] = "facilita establecer relaciones topol&oacute;gicas entre los elementos.";
 choices[20][1] = "utiliza s&oacute;lo dos elementos geom&eacute;tricos (puntos y l&iacute;neas) para modelar digitalmente las entidades del mundo real.";
 choices[20][2] = "divide el espacio en celdas regulares donde cada una de ellas es ubicada por un vector.";
 choices[20][3] = "almacena los datos mediante el formato vectorial de base de datos BLOB.";
 answers[20] = 0;
 units[20] = ['71'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 9087. Examen TIC-A1 2013";
 preguntaids[20] = 9087


//  Id pregunta: 24 Año de creación de pregunta: 2016
 questions[21]= "22)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[21]= new Array();
 choices[21][0] = "Establecer tributos.";
 choices[21][1] = "Desarrollar lo establecido en una Ley.";
 choices[21][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[21][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[21] = 0;
 units[21] = ['1'];
 blocks[21] = ['A1'];
 comments[21] = "Id Pregunta: 24. Constituci&oacute;n de 1978";
 preguntaids[21] = 24


//  Id pregunta: 1500 Año de creación de pregunta: 2016
 questions[22]= "23)  La Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de los Servicios, ha definido un marco para impulsar la mejora continua de los servicios p&uacute;blicos en la Administraci&oacute;n General del Estado constituido por seis programas. &iquest;Cu&aacute;l de los siguientes es uno de esos programas?";
 choices[22]= new Array();
 choices[22][0] = "Programa de an&aacute;lisis estructural del organismo.";
 choices[22][1] = "Programa de evaluaci&oacute;n de los costes del servicio p&uacute;blico.";
 choices[22][2] = "Programa del EFQM.";
 choices[22][3] = "Programa de Reconocimiento (Certificaci&oacute;n de Organizaciones y Premios).";
 answers[22] = 3;
 units[22] = ['19'];
 blocks[22] = ['A4'];
 comments[22] = "Id Pregunta: 1500. ";
 preguntaids[22] = 1500


//  Id pregunta: 192 Año de creación de pregunta: 2016
 questions[23]= "24)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[23]= new Array();
 choices[23][0] = "Un recurso de incumplimiento.";
 choices[23][1] = "Recurso de carencia.";
 choices[23][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[23][3] = "Ninguna es correcta.";
 answers[23] = 2;
 units[23] = ['5'];
 blocks[23] = ['A1'];
 comments[23] = "Id Pregunta: 192. Uni&oacute;n Europea";
 preguntaids[23] = 192


//  Id pregunta: 4915 Año de creación de pregunta: 2002
 questions[24]= "25)  La reserva de cualquier frecuencia del dominio p&uacute;blico radioel&eacute;ctrico implica que:";
 choices[24]= new Array();
 choices[24][0] = "No es onerosa para el sujeto obligado";
 choices[24][1] = "Est&aacute; fijada en el Ley General de Presupuestos";
 choices[24][2] = "Seguir&aacute; las leyes de mercado y estimacion de su rentabilidad";
 choices[24][3] = "Las Administraciones P&uacute;blicas no estan exentas de su pago";
 answers[24] = 2;
 units[24] = ['121'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 4915. ";
 preguntaids[24] = 4915


//  Id pregunta: 2124 Año de creación de pregunta: 2002
 questions[25]= "26)  En el contexto de la capacidad y rendimiento de los sistemas:";
 choices[25]= new Array();
 choices[25][0] = "El equipo encargado de la gesti&oacute;n de capacidad estar&aacute; formado &uacute;nica y exclusivamente por usuarios muy experimentados en el negocio de la organizaci&oacute;n";
 choices[25][1] = "Una vez obtenido el visto bueno de la direcci&oacute;n al plan de desarrollo e implantaci&oacute;n, se deber&aacute; abordar el estudio de viabilidad";
 choices[25][2] = "El equipo encargado de la gesti&oacute;n de capacidad debe ser permanente en el tiempo";
 choices[25][3] = "Como consecuencia del abaratamiento de los equipos f&iacute;sicos la gesti&oacute;n de capacidad y del rendimiento es trivial";
 answers[25] = 2;
 units[25] = ['39'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 2124. ";
 preguntaids[25] = 2124


//  Id pregunta: 1972 Año de creación de pregunta: 2016
 questions[26]= "27)  Podr&aacute;n ser medios de prueba en un procedimiento administrativo:";
 choices[26]= new Array();
 choices[26][0] = "Exclusivamente aquellos que se contengan en medios escritos y ordinarios.";
 choices[26][1] = "Los hachos relevantes para la decisi&oacute;n de un procedimiento podr&aacute;n acreditarse por cualquier medio de prueba admisible en derecho.";
 choices[26][2] = "Cualquier hecho acaecido en el procedimiento podr&aacute; acreditarse por un medio da prueba admisible en derecho.";
 choices[26][3] = "Todas las respuestas anteriores son incorrectas.";
 answers[26] = 1;
 units[26] = ['7'];
 blocks[26] = ['A2'];
 comments[26] = "Id Pregunta: 1972. ";
 preguntaids[26] = 1972


//  Id pregunta: 6649 Año de creación de pregunta: 2009
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de UML?:";
 choices[27]= new Array();
 choices[27][0] = "Los paquetes pueden contener clases, objetos, relaciones, componentes, nodos y diagramas asociados.";
 choices[27][1] = "Los diagramas de clases expresan la estructura est&aacute;tica de un sistema, con las clases, los atributos y las operaciones.";
 choices[27][2] = "Las relaciones entre los casos de uso son de subordinaci&oacute;n, dependencia, igualdad y superioridad.";
 choices[27][3] = "Los nodos del diagrama de despliegue se representan con un cubo, y las l&iacute;neas que los unen simbolizan los soportes de las comunicaciones.";
 answers[27] = 2;
 units[27] = ['89'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 6649. ";
 preguntaids[27] = 6649


//  Id pregunta: 992 Año de creación de pregunta: 2016
 questions[28]= "29)  De acuerdo a la ley 40/2015, los estatutos de los Organismos p&uacute;blicos son determinados por sus respectivos:";
 choices[28]= new Array();
 choices[28][0] = "&oacute;rganos superiores";
 choices[28][1] = "&oacute;rganos directivos";
 choices[28][2] = "&oacute;rganos superiores y directivos";
 choices[28][3] = "ninguna es correcta";
 answers[28] = 3;
 units[28] = ['4', '7', '8', '9'];
 blocks[28] = ['A1', 'A2'];
 comments[28] = "Id Pregunta: 992. Ley 40/2015";
 preguntaids[28] = 992


//  Id pregunta: 4761 Año de creación de pregunta: 2002
 questions[29]= "30)  El servicio de directorio definido por la ITU-T:";
 choices[29]= new Array();
 choices[29][0] = "Se incluye en casi todos los sistemas de correo electr&oacute;nico para consultar las direcciones de los usuarios existentes en la red";
 choices[29][1] = "Se especifica en el est&aacute;ndar X.600 del ITU";
 choices[29][2] = "Es soportado por un sistema de ficheros en red";
 choices[29][3] = "Se ha definido como un conjunto de modelos, servicios y protocolos accesibles a nivel mundial en forma independiente de la aplicaci&oacute;n";
 answers[29] = 3;
 units[29] = ['116'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 4761. ";
 preguntaids[29] = 4761


//  Id pregunta: 1525 Año de creación de pregunta: 2016
 questions[30]= "31)  La autonegociaci&oacute;n Ethernet determina:";
 choices[30]= new Array();
 choices[30][0] = "El modo de spanning tree a utilizar.";
 choices[30][1] = "El modo d&uacute;plex.";
 choices[30][2] = "La calidad de servicio.";
 choices[30][3] = "La tasa de errores m&aacute;xima soportada por el enlace.";
 answers[30] = 1;
 units[30] = ['112'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 1525. ";
 preguntaids[30] = 1525


//  Id pregunta: 6910 Año de creación de pregunta: 2010
 questions[31]= "32)  &iquest;En el PDM (Precedence Diagramming Method), cu&aacute;l es el tipo de relaci&oacute;n de precedencia m&aacute;s comunmente utilizado?";
 choices[31]= new Array();
 choices[31][0] = "Inicio a fin";
 choices[31][1] = "Final a inicio";
 choices[31][2] = "Final a final";
 choices[31][3] = "Inicio a inicio";
 answers[31] = 1;
 units[31] = ['31'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 6910. ";
 preguntaids[31] = 6910


//  Id pregunta: 4775 Año de creación de pregunta: 2002
 questions[32]= "33)  En ATM: &quot;la capacidad de transferencia que se caracteriza por la ausencia de caracterizaci&oacute;n del tr&aacute;fico en el contrato de forma que la red transmite la informaci&oacute;n que le ofrece el usuario cuando puede y lo mejor que puede &quot;, se denomina:";
 choices[32]= new Array();
 choices[32][0] = "DBR (Deterministic Bit Rate)";
 choices[32][1] = "SBR (Statistic Bit Rate)";
 choices[32][2] = "ABT (ATM Block Transfer)";
 choices[32][3] = "ABR (Available Bit Rate)";
 answers[32] = 3;
 units[32] = ['107'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 4775. ";
 preguntaids[32] = 4775


//  Id pregunta: 9494 Año de creación de pregunta: 2014
 questions[33]= "34)  &iquest;Qu&eacute; grupo de trabajo del IEEE estandariza el mecanismo de seguridad WPA2 (Wireless Protective Access 2)?";
 choices[33]= new Array();
 choices[33][0] = "802.11f";
 choices[33][1] = "802.11h";
 choices[33][2] = "802.11i";
 choices[33][3] = "802.11r";
 answers[33] = 2;
 units[33] = ['108'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 9494. ";
 preguntaids[33] = 9494


//  Id pregunta: 1433 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes NO es causa de inelegibilidad para los Diputados y Senadores seg&uacute;n el art&iacute;culo 70 de la Constituci&oacute;n Espa&ntilde;ola?";
 choices[34]= new Array();
 choices[34][0] = "Ser miembros del Tribunal Constitucional.";
 choices[34][1] = "Ser miembros del Gobierno.";
 choices[34][2] = "Ser Magistrado, Juez y Fiscal en activo.";
 choices[34][3] = "Ser el Defensor del Pueblo.";
 answers[34] = 1;
 units[34] = ['1'];
 blocks[34] = ['A1'];
 comments[34] = "Id Pregunta: 1433. ";
 preguntaids[34] = 1433


//  Id pregunta: 9639 Año de creación de pregunta: 2014
 questions[35]= "36)  Al margen de consideraciones ajenas al departamento de TI (pol&iacute;ticas, organizativas, presupuestarias, etc.), la principal causa de fracaso de los proyectos de desarrollo de software es debido a:";
 choices[35]= new Array();
 choices[35][0] = "La mala gesti&oacute;n de los requisitos en la determinaci&oacute;n del alcance en la fase inicial del proyecto y en la gesti&oacute;n de los cambios del alcance una vez est&aacute; el proyecto en ejecuci&oacute;n";
 choices[35][1] = "La falta de buenos desarrolladores en las tecnolog&iacute;as modernas";
 choices[35][2] = "Es dif&iacute;cil realizar una estimaci&oacute;n del esfuerzo del proyecto porque las m&eacute;tricas estaban enfocadas a l&iacute;neas de c&oacute;digo en lenguajes estructurados pero en la actualidad es imposible realizar estimaciones an&aacute;logas con lenguajes modernos (no tiene sentido medir l&iacute;neas de c&oacute;digo en Java)";
 choices[35][3] = "Se abusa de la subcontrataci&oacute;n del software y se realiza mala gesti&oacute;n de proyectos por dicha causa.";
 answers[35] = 0;
 units[35] = ['31'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 9639. ";
 preguntaids[35] = 9639


//  Id pregunta: 10889 Año de creación de pregunta: 2015
 questions[36]= "37)  &iquest;Qu&eacute; caracter&iacute;stica no se a&ntilde;ade en SNMPv3 respecto a SNMPv2?";
 choices[36]= new Array();
 choices[36][0] = "Autenticaci&oacute;n";
 choices[36][1] = "Cifrado";
 choices[36][2] = "Deteccion de errores";
 choices[36][3] = "Integridad del mensaje";
 answers[36] = 2;
 units[36] = ['114'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 10889. ";
 preguntaids[36] = 10889


//  Id pregunta: 3817 Año de creación de pregunta: 2002
 questions[37]= "38)  En la t&eacute;cnica de estimaci&oacute;n COCOMO cl&aacute;sico, el modelo Intermedio:";
 choices[37]= new Array();
 choices[37][0] = "Calcula el esfuerzo y el coste de un desarrollo software en funci&oacute;n &uacute;nicamente de las l&iacute;neas fuentes estimadas de los programas";
 choices[37][1] = "A&ntilde;ade una evaluaci&oacute;n subjetiva del producto y de los atributos del proyecto y del personal";
 choices[37][2] = "Considera que el impacto de los factores de influencia depende de la fase de desarrollo";
 choices[37][3] = "Nada de lo anterior es correcto";
 answers[37] = 1;
 units[37] = ['94'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 3817. ";
 preguntaids[37] = 3817


//  Id pregunta: 444 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[38]= new Array();
 choices[38][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[38][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[38][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[38][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[38] = 0;
 units[38] = ['19'];
 blocks[38] = ['A4'];
 comments[38] = "Id Pregunta: 444. Agenda Digital";
 preguntaids[38] = 444


//  Id pregunta: 451 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes no es un eje del Plan de Servicios P&uacute;blicos Digitales que forma parte de la Agenda Digital para Espa&ntilde;a?";
 choices[39]= new Array();
 choices[39][0] = "Programa de Educaci&oacute;n Digital";
 choices[39][1] = "Programa de Salud y Bienestar Social";
 choices[39][2] = "Programa de Administraci&oacute;n de Justicia Digital";
 choices[39][3] = "Programa de capacitaci&oacute;n de profesionales TIC";
 answers[39] = 3;
 units[39] = ['19'];
 blocks[39] = ['A4'];
 comments[39] = "Id Pregunta: 451. Agenda Digital para Espa&ntilde;a";
 preguntaids[39] = 451


//  Id pregunta: 4596 Año de creación de pregunta: 2002
 questions[40]= "41)  &iquest;Por qu&eacute; son m&aacute;s eficiente los protocolos orientados a bit que los orientados a car&aacute;cter?:";
 choices[40]= new Array();
 choices[40][0] = "Debido al relleno de bits";
 choices[40][1] = "La eficiencia de ambos protocolos es la misma";
 choices[40][2] = "Debido al relleno de caracteres";
 choices[40][3] = "Debido a la codificaci&oacute;n binaria de los caracteres";
 answers[40] = 0;
 units[40] = ['104'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 4596. ";
 preguntaids[40] = 4596


//  Id pregunta: 2600 Año de creación de pregunta: 2002
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto a Linux?:";
 choices[41]= new Array();
 choices[41][0] = "Est&aacute; constituido por un n&uacute;cleo Kernel, y cada usuario debe construirse las librer&iacute;as y programas para poderlo utilizar";
 choices[41][1] = "Es un sistema operativo compatible con Unix";
 choices[41][2] = "Es software libre";
 choices[41][3] = "El sistema viene acompa&ntilde;ado del c&oacute;digo fuente";
 answers[41] = 0;
 units[41] = ['57'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 2600. ";
 preguntaids[41] = 2600


//  Id pregunta: 9133 Año de creación de pregunta: 2014
 questions[42]= "43)  La garant&iacute;a global, seg&uacute;n el RD Legislativo 3/2011:";
 choices[42]= new Array();
 choices[42][0] = "No podr&aacute; superar el 10% del importe de adjudicaci&oacute;n del contrato.";
 choices[42][1] = "Es obligatoria.";
 choices[42][2] = "Se deposita s&oacute;lo una vez y sirve para varias contrataciones.";
 choices[42][3] = "No existe.";
 answers[42] = 2;
 units[42] = ['10'];
 blocks[42] = ['A2'];
 comments[42] = "Id Pregunta: 9133. Art. 98 RD Legislativo 3/2011";
 preguntaids[42] = 9133


//  Id pregunta: 7922 Año de creación de pregunta: 2011
 questions[43]= "44)  En relaci&oacute;n con la seguridad en UNIX y particularmente con la auditor&iacute;a del sistema, cu&aacute;l de los siguientes archivos de registro de equipos UNIX se guardan en texto claro, y pueden visualizarse con una orden como cat o similares:";
 choices[43]= new Array();
 choices[43][0] = "syslog, wtmp, lastlog, sulog.";
 choices[43][1] = "syslogd, utmpx, faillog, loginlog.";
 choices[43][2] = "syslog, debug, sulog, loginlog.";
 choices[43][3] = "syslog, btmp, lastlog, loginlog.";
 answers[43] = 2;
 units[43] = ['57'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 7922. Examen TIC A1 2010";
 preguntaids[43] = 7922


//  Id pregunta: 10365 Año de creación de pregunta: 2015
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes no es un sistema de gesti&oacute;n de contenidos opensource?";
 choices[44]= new Array();
 choices[44][0] = "Drupal";
 choices[44][1] = "Joomla";
 choices[44][2] = "Alfresco";
 choices[44][3] = "Sharepoint";
 answers[44] = 3;
 units[44] = ['99'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 10365. Soluci&oacute;n propietaria de Microsoft";
 preguntaids[44] = 10365


//  Id pregunta: 5454 Año de creación de pregunta: 2007
 questions[45]= "46)  La calidad del software entregado ser&aacute; alta si la EED (Eficacia de la Eliminaci&oacute;n de Defectos):";
 choices[45]= new Array();
 choices[45][0] = "Se acerca a uno";
 choices[45][1] = "Se acerca a cero.";
 choices[45][2] = "Es mayor que uno.";
 choices[45][3] = "Es negativa.";
 answers[45] = 0;
 units[45] = ['98'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 5454. ";
 preguntaids[45] = 5454


//  Id pregunta: 8297 Año de creación de pregunta: 2011
 questions[46]= "47)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, se considera cesi&oacute;n o comunicaci&oacute;n de datos:";
 choices[46]= new Array();
 choices[46][0] = "Toda manifestaci&oacute;n de voluntad, libre inequ&iacute;voca, espec&iacute;fica e informada, mediante la cual el interesado comunique datos.";
 choices[46][1] = "Toda revelaci&oacute;n de datos realizada a una persona distinta del interesado.";
 choices[46][2] = "Toda revelaci&oacute;n electr&oacute;nica de datos realizada a otra persona distinta de la que los posee.";
 choices[46][3] = "Toda transferencia electr&oacute;nica de datos realizada a una persona distinta del interesado.";
 answers[46] = 1;
 units[46] = ['35'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 8297. Examen UPM A2 2011";
 preguntaids[46] = 8297


//  Id pregunta: 5215 Año de creación de pregunta: 2006
 questions[47]= "48)  Con respecto al est&aacute;ndar DOCSIS 1.1 (Data over Cable Service Interface Specification), se&ntilde;ale qu&eacute; afirmaci&oacute;n no es correcta:";
 choices[47]= new Array();
 choices[47][0] = "Especifica mecanismos para garantizar la QoS de flujo de datos en tiempo real como la voz.";
 choices[47][1] = "La voz y los datos viajan por canales diferentes, pero permitiendo un tratamiento uniforme en la red HFC.";
 choices[47][2] = "En la versi&oacute;n europea de DOCSIS 1.1 se establece un m&aacute;ximo de 160 km entre el CMTS (Cable Modem Termination System).";
 choices[47][3] = "En DOCSIS 1.1 est&aacute; prevista la definici&oacute;n para el soporte de ATM.";
 answers[47] = 1;
 units[47] = ['115'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 5215. ";
 preguntaids[47] = 5215


//  Id pregunta: 5726 Año de creación de pregunta: 2007
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes tipos de sistemas de ficheros, lo es de red?";
 choices[48]= new Array();
 choices[48][0] = "ext2";
 choices[48][1] = "swap";
 choices[48][2] = "SMB";
 choices[48][3] = "MSB";
 answers[48] = 2;
 units[48] = ['58'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 5726. ";
 preguntaids[48] = 5726


//  Id pregunta: 9038 Año de creación de pregunta: 2014
 questions[49]= "50)  &iquest;Qui&eacute;n resuelve los recursos especiales previstos en el RD Legislativo 3/2011 de Contrataci&oacute;n en el Sector P&uacute;blico?";
 choices[49]= new Array();
 choices[49][0] = "Tribunal Central de Recursos Especiales";
 choices[49][1] = "Tribunal Administrativo Central de Recursos Contractuales";
 choices[49][2] = "Tribunal Administrativo Tributario";
 choices[49][3] = "Tribunal Econ&oacute;mico &ndash; Administrativo Central";
 answers[49] = 1;
 units[49] = ['10'];
 blocks[49] = ['A2'];
 comments[49] = "Id Pregunta: 9038. Adscrito al MINHAP";
 preguntaids[49] = 9038


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[50]= "51)  Es falso que:";
 choices[50]= new Array();
 choices[50][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[50][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[50][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[50][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[50] = 1;
 units[50] = ['20'];
 blocks[50] = ['A4'];
 comments[50] = "Id Pregunta: 491. Direcci&oacute;n p&uacute;blica";
 preguntaids[50] = 491


//  Id pregunta: 10399 Año de creación de pregunta: 2015
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital Espa&ntilde;ola?";
 choices[51]= new Array();
 choices[51][0] = "Confianza Digital";
 choices[51][1] = "Econom&iacute;a Digital e Internacionalizaci&oacute;n";
 choices[51][2] = "Impulsar i+d TIC";
 choices[51][3] = "Impulso de los servicios p&uacute;blicos digitales";
 answers[51] = 3;
 units[51] = ['19'];
 blocks[51] = ['A4'];
 comments[51] = "Id Pregunta: 10399. ";
 preguntaids[51] = 10399


//  Id pregunta: 9902 Año de creación de pregunta: 2015
 questions[52]= "53)  La Ley 39/2015 es de aplicaci&oacute;n obligatoria:";
 choices[52]= new Array();
 choices[52][0] = "Para la Administraci&oacute;n General del Estado.";
 choices[52][1] = "Para las Comunidades Aut&oacute;nomas y Administraci&oacute;n Local.";
 choices[52][2] = "Para el Sector P&uacute;blico Institucional.";
 choices[52][3] = "Todas las anteriores.";
 answers[52] = 3;
 units[52] = ['7', '19'];
 blocks[52] = ['A2', 'A4'];
 comments[52] = "Id Pregunta: 9902. ";
 preguntaids[52] = 9902


//  Id pregunta: 9800 Año de creación de pregunta: 2015
 questions[53]= "54)  Son europeos:";
 choices[53]= new Array();
 choices[53][0] = "El cuerpo de reguladores de comunicaciones electr&oacute;nicas BEREC";
 choices[53][1] = "El programa para el impulso de la Sociedad de la Informaci&oacute;n IDESI";
 choices[53][2] = "El sistema inform&aacute;tico JOIN para el intercambio de identidades electr&oacute;nicas";
 choices[53][3] = "La red SARA";
 answers[53] = 0;
 units[53] = ['19'];
 blocks[53] = ['A4'];
 comments[53] = "Id Pregunta: 9800. ";
 preguntaids[53] = 9800


//  Id pregunta: 7418 Año de creación de pregunta: 2010
 questions[54]= "55)  Los dos enfoques m&aacute;s habituales de la virtualizaci&oacute;n de servidores o estaciones de trabajo son:";
 choices[54]= new Array();
 choices[54][0] = "Hospedada y mediante hipervisor (bare metal)";
 choices[54][1] = "Acoplada y mediante hipervisor (bare metal)";
 choices[54][2] = "Paralela y mediante hipervisor (bare metal)";
 choices[54][3] = "Acoplada y mediante CPM (Cross Platform Manager)";
 answers[54] = 0;
 units[54] = ['124'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 7418. Examen TIC B 2009";
 preguntaids[54] = 7418


//  Id pregunta: 449 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[55]= new Array();
 choices[55][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[55][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[55][2] = "Fomentar el despliegue de redes y servicios";
 choices[55][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[55] = 0;
 units[55] = ['19'];
 blocks[55] = ['A4'];
 comments[55] = "Id Pregunta: 449. Agenda Digital para Espa&ntilde;a";
 preguntaids[55] = 449


//  Id pregunta: 2532 Año de creación de pregunta: 2004
 questions[56]= "57)  Respecto a los 'web services', &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[56]= new Array();
 choices[56][0] = "Se describen mediante el lenguaje WSDL";
 choices[56][1] = "Para usarlos han de publicarse siempre en un registro UDDI";
 choices[56][2] = "Pueden interaccionar clientes y servicios de distintas tecnolog&iacute;as";
 choices[56][3] = "Utilizan el protocolo SOAP";
 answers[56] = 1;
 units[56] = ['55'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 2532. ";
 preguntaids[56] = 2532


//  Id pregunta: 7531 Año de creación de pregunta: 2010
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta para los protocolos de enlace orientados a car&aacute;cter?";
 choices[57]= new Array();
 choices[57][0] = "La sincronizaci&oacute;n se consigue gracias a que siempre hay un car&aacute;cter STX o SOH al comienzo de la trama y un car&aacute;cter ETX o ETB al final de la trama.";
 choices[57][1] = "No es necesario el control de transparencia dado que el contenido de la trama se conoce gracias a la aparici&oacute;n de los caracteres de control.";
 choices[57][2] = "El control de flujo mediante t&eacute;cnica de frenado brusco se consigue utilizando una trama de control wack.";
 choices[57][3] = "Para la detecci&oacute;n de errores se protegen todos los caracteres transmitidos excepto las cabeceras.";
 answers[57] = 2;
 units[57] = ['102'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 7531. Map 2005";
 preguntaids[57] = 7531


//  Id pregunta: 3821 Año de creación de pregunta: 2002
 questions[58]= "59)  En la realizaci&oacute;n de DFDs:";
 choices[58]= new Array();
 choices[58][0] = "cada nivel expresa un mayor detalle respecto al anterior, siendo t&iacute;picos los de contexto (nivel 0), subsistemas (nivel 1), funciones (nivel 2), subfunciones (nivel 3) y los procesos primitivos";
 choices[58][1] = "Todo dato que entra a un proceso ha de entrar en el DFD hijo, y todo dato que sale de un DFD ha de salir del DFD hijo";
 choices[58][2] = "los almacenes aparecen por primera vez en el primer DFD en el que son compartidos por varios procesos, y a partir de este nivel aparecen siempre";
 choices[58][3] = "Todas las respuestas anteriores son correctas";
 answers[58] = 3;
 units[58] = ['85', '86'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 3821. ";
 preguntaids[58] = 3821


//  Id pregunta: 8249 Año de creación de pregunta: 2011
 questions[59]= "60)  El acr&oacute;nimo FCAPS en gesti&oacute;n de redes se refiere a:";
 choices[59]= new Array();
 choices[59][0] = "Failure, Configuration, Accountability, Performance, Software, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y software de red.";
 choices[59][1] = "Failure, Compatibility, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, compatibilidad, contabilidad, rendimiento y seguridad.";
 choices[59][2] = "Failure, Configuration, Adaptability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, adaptabilidad, rendimiento y seguridad.";
 choices[59][3] = "Failure, Configuration, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y seguridad.";
 answers[59] = 3;
 units[59] = ['114'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 8249. Examen UPM A2 2011";
 preguntaids[59] = 8249


//  Id pregunta: 134 Año de creación de pregunta: 2016
 questions[60]= "61)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[60]= new Array();
 choices[60][0] = "Al Consejo Europeo.";
 choices[60][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[60][2] = "A la Comisi&oacute;n Europea.";
 choices[60][3] = "Al Parlamento Europeo.";
 answers[60] = 2;
 units[60] = ['5'];
 blocks[60] = ['A1'];
 comments[60] = "Id Pregunta: 134. Uni&oacute;n Europea";
 preguntaids[60] = 134


//  Id pregunta: 10229 Año de creación de pregunta: 2015
 questions[61]= "62)  &iquest;Durante qu&eacute; procesos del desarrollo del Sistema de Informaci&oacute;n se realiza la modelizaci&oacute;n de los datos?";
 choices[61]= new Array();
 choices[61][0] = "Durante el an&aacute;lisis";
 choices[61][1] = "Durante el dise&ntilde;o";
 choices[61][2] = "Durante el an&aacute;lisis y durante el dise&ntilde;o";
 choices[61][3] = "No se utiliza la modelizaci&oacute;n de datos en el proceso de desarrollo del SI";
 answers[61] = 2;
 units[61] = ['60'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 10229. ";
 preguntaids[61] = 10229


//  Id pregunta: 7420 Año de creación de pregunta: 2010
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes no es una de las tres condiciones de Popek y Godbergh que debe cumplir toda arquitectura inform&aacute;tica para soportar adecuadamente virtualizaci&oacute;n de sistemas?";
 choices[62]= new Array();
 choices[62][0] = "Eficiencia";
 choices[62][1] = "Control de Recursos";
 choices[62][2] = "Equivalencia";
 choices[62][3] = "Escalabilidad";
 answers[62] = 3;
 units[62] = ['124'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 7420. Examen TIC B 2009";
 preguntaids[62] = 7420


//  Id pregunta: 5390 Año de creación de pregunta: 2006
 questions[63]= "64)  La fibra &oacute;ptica monomodo m&aacute;s popular es";
 choices[63]= new Array();
 choices[63][0] = "9/125 um";
 choices[63][1] = "62.5/125 um";
 choices[63][2] = "50/125 um";
 choices[63][3] = "100/140 um";
 answers[63] = 0;
 units[63] = ['106'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 5390. ";
 preguntaids[63] = 5390


//  Id pregunta: 1894 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA?:";
 choices[64]= new Array();
 choices[64][0] = "En las Cartas de Servicio que se elaboren, se deben establecer los dispositivos de seguimiento y evaluaci&oacute;n";
 choices[64][1] = "La Calidad Total implica un enfoque que comprende tanto el concepto producto como el concepto servicio, no como elementos independientes.";
 choices[64][2] = "Las Cartas de Servicios expresan un compromiso con los ciudadanos para mejorar la calidad de los servicios";
 choices[64][3] = "Las Cartas de Servicios no tienen la consideraci&oacute;n de documentos oficiales.";
 answers[64] = 3;
 units[64] = ['19'];
 blocks[64] = ['A4'];
 comments[64] = "Id Pregunta: 1894. ";
 preguntaids[64] = 1894


//  Id pregunta: 10445 Año de creación de pregunta: 2015
 questions[65]= "66)  Los Sistemas din&aacute;micos de adquisici&oacute;n:";
 choices[65]= new Array();
 choices[65][0] = "Tienen vigencia indefinida mientras existan licitadores.";
 choices[65][1] = "La adjudicaci&oacute;n del sistema din&aacute;mico se realizar&aacute; siempre mediante procedimiento abierto.";
 choices[65][2] = "Al igual que en el acuerdo marco, ser&aacute; posible la incorporaci&oacute;n de nuevos adjudicatarios.";
 choices[65][3] = "Se valorar&aacute; positivamente el uso de medios TIC.";
 answers[65] = 1;
 units[65] = ['37'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 10445. ";
 preguntaids[65] = 10445


//  Id pregunta: 579 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[66]= new Array();
 choices[66][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[66][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[66][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[66][3] = "Todas las respuestas son correctas.";
 answers[66] = 2;
 units[66] = ['42'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 579. Junta de Extremadura A1 2015";
 preguntaids[66] = 579


//  Id pregunta: 2658 Año de creación de pregunta: 2002
 questions[67]= "68)  &iquest;Para qu&eacute; se usa el comando  tee  en Unix?:";
 choices[67]= new Array();
 choices[67][0] = "Se usa para guardar la salida de una orden en un fichero, adem&aacute;s de llevarla a la salida est&aacute;ndar";
 choices[67][1] = "Se utiliza para guardar o recuperar los archivos de una cinta magn&eacute;tica, un disco flexible o un fichero normal";
 choices[67][2] = "Se emplea para comprimir los datos de un fichero";
 choices[67][3] = "Se usa para visualizar los ficheros que se encuentran en una cola de impresi&oacute;n";
 answers[67] = 0;
 units[67] = ['57'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 2658. ";
 preguntaids[67] = 2658


//  Id pregunta: 8895 Año de creación de pregunta: 2013
 questions[68]= "69)  Seleccione la frase EQUIVOCADA acerca del &aacute;lgebra relacional:";
 choices[68]= new Array();
 choices[68][0] = "Los operadores b&aacute;sicos son uni&oacute;n, diferencia, producto cartesiano, proyecci&oacute;n y selecci&oacute;n.";
 choices[68][1] = "Los operadores uni&oacute;n y diferencia requieren que las relaciones operando est&eacute;n definidas sobre el mismo conjunto de atributos.";
 choices[68][2] = "El producto cartesiano de una relaci&oacute;n de grado n y x tuplas y otra relaci&oacute;n de grado m y z tuplas es una relaci&oacute;n de grado n*m y de (x+z) tuplas";
 choices[68][3] = "La operaci&oacute;n join sobre dos relaciones que presentan atributos comunes puede tener cero tuplas.";
 answers[68] = 2;
 units[68] = ['61'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 8895. Examen AGE TIC A1 2011";
 preguntaids[68] = 8895


//  Id pregunta: 8204 Año de creación de pregunta: 2011
 questions[69]= "70)  &iquest;Qu&eacute; tipo de diagrama permite estimar la desviaci&oacute;n de un proyecto?";
 choices[69]= new Array();
 choices[69][0] = "Diagrama de Extrapolaci&oacute;n";
 choices[69][1] = "PERT";
 choices[69][2] = "CPM";
 choices[69][3] = "El histograma de recursos";
 answers[69] = 0;
 units[69] = ['31'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 8204. Examen TIC A2 2010 interna";
 preguntaids[69] = 8204


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[70]= "71)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[70]= new Array();
 choices[70][0] = "Los cr&eacute;ditos";
 choices[70][1] = "Las partidas presupuestarias";
 choices[70][2] = "Los derechos";
 choices[70][3] = "Las obligaciones";
 answers[70] = 3;
 units[70] = ['11'];
 blocks[70] = ['A2'];
 comments[70] = "Id Pregunta: 270. Presupuestos generales";
 preguntaids[70] = 270


//  Id pregunta: 9134 Año de creación de pregunta: 2014
 questions[71]= "72)  Seg&uacute;n el RD Legislativo 3/2011, las garant&iacute;as se:";
 choices[71]= new Array();
 choices[71][0] = "Reponen";
 choices[71][1] = "Reajustan";
 choices[71][2] = "Devuelven o cancelan";
 choices[71][3] = "Todas las anteriores";
 answers[71] = 3;
 units[71] = ['10'];
 blocks[71] = ['A2'];
 comments[71] = "Id Pregunta: 9134. Art. 99, Art. 102 RD Legislativo 3/2011";
 preguntaids[71] = 9134


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[72]= new Array();
 choices[72][0] = "De los derechos y deberes fundamentales.";
 choices[72][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[72][2] = "Derechos y libertades.";
 choices[72][3] = "De la Corona.";
 answers[72] = 2;
 units[72] = ['1'];
 blocks[72] = ['A1'];
 comments[72] = "Id Pregunta: 74. Constituci&oacute;n de 1978";
 preguntaids[72] = 74


//  Id pregunta: 3473 Año de creación de pregunta: 2006
 questions[73]= "74)  El &oacute;rgano encargado de la supervisi&oacute;n y control de los servicios de la Sociedad de la Informaci&oacute;n es:";
 choices[73]= new Array();
 choices[73][0] = "El Ministerio de Econom&iacute;a, Industria y Competitividad.";
 choices[73][1] = "El Ministerio de Energia, Turismo y Agenda Digital.";
 choices[73][2] = "El Ministerio de Justicia";
 choices[73][3] = "No hay ning&uacute;n &oacute;rgano encargado de la supervisi&oacute;n y control dado que no se requiere autorizaci&oacute;n previa.";
 answers[73] = 1;
 units[73] = ['30'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 3473. Ley 34/2002, art&iacute;culo 35 (extinto Ministerio de Ciencia y Tecnolog&iacute;a)";
 preguntaids[73] = 3473


//  Id pregunta: 7854 Año de creación de pregunta: 2011
 questions[74]= "75)  Referente al protocolo Internet Protocol versi&oacute;n 4 (IPv4), &iquest;cu&aacute;l es la afirmaci&oacute;n correcta?:";
 choices[74]= new Array();
 choices[74][0] = "S&oacute;lo permite identificar hasta 256 protocolos para la parte de datos del datagrama.";
 choices[74][1] = "No permite volver a fragmentar un datagrama ya fragmentado (pues la fragmentaci&oacute;n se indica con el bit MF).";
 choices[74][2] = "La unidad de transferencia m&aacute;xima o Maximun Transmission Unit (MTU) es siempre de 65.535 bytes.";
 choices[74][3] = "Si los datagramas han sido fragmentados, al pasar a una red que puede manejar un PDU m&aacute;ximo mayor que la red de origen, previamente a ser reenviados, los fragmentos deben ser reensamblados.";
 answers[74] = 0;
 units[74] = ['100'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 7854. Examen TIC A1 2010";
 preguntaids[74] = 7854


