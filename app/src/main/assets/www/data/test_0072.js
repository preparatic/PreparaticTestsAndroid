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
//  Id pregunta: 1045 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[0]= new Array();
 choices[0][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[0][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[0][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[0][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[0] = 0;
 units[0] = ['4', '7', '8', '9'];
 blocks[0] = ['A1', 'A2'];
 comments[0] = "Id Pregunta: 1045. Ley 40/2015";
 preguntaids[0] = 1045


//  Id pregunta: 5386 Año de creación de pregunta: 2006
 questions[1]= "2)  El MTBF asociado a la disponibilidad de un sistema formado por dos equipos id&eacute;nticos con reparto balanceado de la carga de trabajo";
 choices[1]= new Array();
 choices[1][0] = "Es mayor que el de cualquiera de ellos individualmente";
 choices[1][1] = "Es menor que el de cualquiera de ellos individualmente";
 choices[1][2] = "Es igual al de cualquiera de ellos individualmente";
 choices[1][3] = "No puede ser conocido a priori";
 answers[1] = 0;
 units[1] = ['114'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 5386. ";
 preguntaids[1] = 5386


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[2]= "3)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[2]= new Array();
 choices[2][0] = "Cuatro millones de euros.";
 choices[2][1] = "Seis millones de euros.";
 choices[2][2] = "Siete millones de euros.";
 choices[2][3] = "Cinco millones de euros.";
 answers[2] = 1;
 units[2] = ['11'];
 blocks[2] = ['A2'];
 comments[2] = "Id Pregunta: 299. Presupuestos generales";
 preguntaids[2] = 299


//  Id pregunta: 7592 Año de creación de pregunta: 2010
 questions[3]= "4)  Dentro de la orientaci&oacute;n a objetos, &iquest;qu&eacute; t&eacute;rmino expresa que los datos de un objeto s&oacute;lo pueden ser manipulados mediante los mensajes y m&eacute;todos predefinidos?";
 choices[3]= new Array();
 choices[3][0] = "Reusabilidad.";
 choices[3][1] = "Encapsulaci&oacute;n.";
 choices[3][2] = "Persistencia.";
 choices[3][3] = "Herencia.";
 answers[3] = 1;
 units[3] = ['85'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 7592. Map 2006";
 preguntaids[3] = 7592


//  Id pregunta: 10858 Año de creación de pregunta: 2015
 questions[4]= "5)  Los Enterprise Java Beans (EJB) con funcionamiento as&iacute;ncrono son:";
 choices[4]= new Array();
 choices[4][0] = "Message driven beans";
 choices[4][1] = "Session beans";
 choices[4][2] = "Entity beans";
 choices[4][3] = "Todos los anteriores tienen funcionamiento as&iacute;ncrono.";
 answers[4] = 0;
 units[4] = ['64'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 10858. ";
 preguntaids[4] = 10858


//  Id pregunta: 10454 Año de creación de pregunta: 2015
 questions[5]= "6)  Los requisitos de seguridad aplicables a los prestadores de servicios de confianza:";
 choices[5]= new Array();
 choices[5][0] = "Son los mismos para tanto para los prestadores de servicios de confianza cualificados como no cualificados";
 choices[5][1] = "Notificar&aacute;n al Ministerio de Energia, Turismo y Agenda Digital en un plazo m&aacute;ximo de 48 horas, de cualquier violaci&oacute;n de seguridad o p&eacute;rdida de integridad.";
 choices[5][2] = "En caso de que una violaci&oacute;n de la seguridad afecte a dos o m&aacute;s Estados miembros, el organismo de supervisi&oacute;n notificado informar&aacute; al respecto a los organismos de supervisi&oacute;n de los dem&aacute;s Estados miembros y a ENISA.";
 choices[5][3] = "Todas son verdaderas.";
 answers[5] = 2;
 units[5] = ['77'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 10454. ";
 preguntaids[5] = 10454


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[6]= "7)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[6]= new Array();
 choices[6][0] = "Diciembre de 1987.";
 choices[6][1] = "Septiembre de 1989.";
 choices[6][2] = "Octubre de 1990.";
 choices[6][3] = "Noviembre de 1980.";
 answers[6] = 1;
 units[6] = ['5'];
 blocks[6] = ['A1'];
 comments[6] = "Id Pregunta: 156. Uni&oacute;n Europea";
 preguntaids[6] = 156


//  Id pregunta: 9087 Año de creación de pregunta: 2014
 questions[7]= "8)  El modelo Vectorial de representaci&oacute;n de datos espaciales";
 choices[7]= new Array();
 choices[7][0] = "facilita establecer relaciones topol&oacute;gicas entre los elementos.";
 choices[7][1] = "utiliza s&oacute;lo dos elementos geom&eacute;tricos (puntos y l&iacute;neas) para modelar digitalmente las entidades del mundo real.";
 choices[7][2] = "divide el espacio en celdas regulares donde cada una de ellas es ubicada por un vector.";
 choices[7][3] = "almacena los datos mediante el formato vectorial de base de datos BLOB.";
 answers[7] = 0;
 units[7] = ['71'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 9087. Examen TIC-A1 2013";
 preguntaids[7] = 9087


//  Id pregunta: 94 Año de creación de pregunta: 2016
 questions[8]= "9)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[8]= new Array();
 choices[8][0] = "Los Derechos y Deberes fundamentales.";
 choices[8][1] = "La Corona.";
 choices[8][2] = "El Poder Judicial.";
 choices[8][3] = "Las Cortes Generales.";
 answers[8] = 0;
 units[8] = ['1'];
 blocks[8] = ['A1'];
 comments[8] = "Id Pregunta: 94. Constituci&oacute;n de 1978";
 preguntaids[8] = 94


//  Id pregunta: 7 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?";
 choices[9]= new Array();
 choices[9][0] = "Una ley ordinaria.";
 choices[9][1] = "Una ley org&aacute;nica.";
 choices[9][2] = "Una ley de bases.";
 choices[9][3] = "Una ley de transferencia.";
 answers[9] = 1;
 units[9] = ['1'];
 blocks[9] = ['A1'];
 comments[9] = "Id Pregunta: 7. Constituci&oacute;n de 1978";
 preguntaids[9] = 7


//  Id pregunta: 968 Año de creación de pregunta: 2016
 questions[10]= "11)  Las Administraciones P&uacute;blicas:";
 choices[10]= new Array();
 choices[10][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[10][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[10][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[10][3] = "todas son correctas";
 answers[10] = 1;
 units[10] = ['4', '7', '8', '9'];
 blocks[10] = ['A1', 'A2'];
 comments[10] = "Id Pregunta: 968. Ley 40/2015";
 preguntaids[10] = 968


//  Id pregunta: 540 Año de creación de pregunta: 2016
 questions[11]= "12)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[11]= new Array();
 choices[11][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[11][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[11][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[11][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[11] = 1;
 units[11] = ['28'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 540. Estrategia TIC";
 preguntaids[11] = 540


//  Id pregunta: 10826 Año de creación de pregunta: 2015
 questions[12]= "13)  Seg&uacute;n M&eacute;trica v3, se&ntilde;ale qui&eacute;n no se encuentra entre los participantes de la actividad de Ejecuci&oacute;n de las pruebas de integraci&oacute;n:";
 choices[12]= new Array();
 choices[12][0] = "Equipo de seguridad";
 choices[12][1] = "Equipo de arquitectura";
 choices[12][2] = "Equipo de proyecto";
 choices[12][3] = "T&eacute;cnicos de comunicaciones";
 answers[12] = 0;
 units[12] = ['91'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 10826. ";
 preguntaids[12] = 10826


//  Id pregunta: 7180 Año de creación de pregunta: 2010
 questions[13]= "14)  &iquest;Cu&aacute;l es el proceso que recibe como entrada los resultados o productos del proceso de Planificaci&oacute;n de Sistemas de Informaci&oacute;n?";
 choices[13]= new Array();
 choices[13][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[13][1] = "Mantenimiento del Sistema de Informaci&oacute;n";
 choices[13][2] = "Estudio de Viabilidad del Sistema";
 choices[13][3] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 answers[13] = 2;
 units[13] = ['91'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 7180. Castilla La Mancha 2009";
 preguntaids[13] = 7180


//  Id pregunta: 6851 Año de creación de pregunta: 2010
 questions[14]= "15)  Los procesos de Gesti&oacute;n de las Comunicaciones del Proyecto incluyen lo siguiente:";
 choices[14]= new Array();
 choices[14][0] = "An&aacute;lisis de las Comunicaciones, Dise&ntilde;o de las Comunicaciones, Informar del Rendimiento y Gestionar a los interesados.";
 choices[14][1] = "Planificaci&oacute;n de las Comunicaciones, Distribuci&oacute;n de la Informaci&oacute;n, Informar del Rendimiento y Gestionar a los Interesados.";
 choices[14][2] = "An&aacute;lisis de las Comunicaciones, Dise&ntilde;o de las Comunicaciones y Desarrollo de las Comunicaciones.";
 choices[14][3] = "An&aacute;lisis de las Comunicaciones y Dise&ntilde;o de las Comunicaciones.";
 answers[14] = 1;
 units[14] = ['31'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 6851. ";
 preguntaids[14] = 6851


//  Id pregunta: 7441 Año de creación de pregunta: 2010
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes no es un est&aacute;ndar utilizado para el intercambio de datos relativos al comercio electr&oacute;nico?";
 choices[15]= new Array();
 choices[15][0] = "EDIFACT";
 choices[15][1] = "ebXML";
 choices[15][2] = "XMT";
 choices[15][3] = "UBL";
 answers[15] = 2;
 units[15] = ['75'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 7441. ";
 preguntaids[15] = 7441


//  Id pregunta: 1489 Año de creación de pregunta: 2016
 questions[16]= "17)  En relaci&oacute;n con los modelos para la gesti&oacute;n de la calidad del software, se&ntilde;ale la opci&oacute;n verdadera:";
 choices[16]= new Array();
 choices[16][0] = "El SEI public&oacute; en el a&ntilde;o 2010 la versi&oacute;n 1.3 de CMMI que contiene cambios, especialmente en lo que se refiere a alta madurez (niveles 4 y 5).";
 choices[16][1] = "Las pruebas en el modelo CMMI DEV est&aacute;n tratadas en las &aacute;reas de proceso &quot;Administraci&oacute;n Cuantitativa del Proyecto&quot; y &quot;Validaci&oacute;n&quot;.";
 choices[16][2] = "El nivel de Madurez 3 de modelo CMMI es el nivel &quot;Optimizado&quot;, se caracteriza porque las organizaciones disponen de un conjunto de m&eacute;tricas significativas de calidad y productividad, que se usan de modo sistem&aacute;tico para la toma de decisiones y la gesti&oacute;n de riesgos.";
 choices[16][3] = "En su cuarta edici&oacute;n, COBIT tiene 4 objetivos de alto nivel que cubren 21 objetivos de control (espec&iacute;ficos o detallados) clasificados en cuatro dominios.";
 answers[16] = 0;
 units[16] = ['93'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 1489. ";
 preguntaids[16] = 1489


//  Id pregunta: 6718 Año de creación de pregunta: 2009
 questions[17]= "18)  En relaci&oacute;n a &quot;Internet Assigned Numbers Authority&quot; (IANA), indique cu&aacute;l NO es una de sus funciones:";
 choices[17]= new Array();
 choices[17][0] = "IANA coordina a nivel global el &quot;DNS root&quot;";
 choices[17][1] = "IANA gestiona el dominio .int (top-level)";
 choices[17][2] = "IANA asigna las direcciones IP";
 choices[17][3] = "IANA administra el dominio .ARPA en estrecha relaci&oacute;n con el Internet Architecture Board";
 answers[17] = 2;
 units[17] = ['103'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 6718. MAP 2008 A1";
 preguntaids[17] = 6718


//  Id pregunta: 5666 Año de creación de pregunta: 2007
 questions[18]= "19)  &iquest;Cu&aacute;nto tiempo durar&aacute;n los derechos de explotaci&oacute;n de una obra?";
 choices[18]= new Array();
 choices[18][0] = "Hasta la muerte de su autor";
 choices[18][1] = "Setenta anos despu&eacute;s de la fecha de divulgaci&oacute;n";
 choices[18][2] = "Toda la vida de su autor y setenta anos despu&eacute;s de su muerte";
 choices[18][3] = "Los derechos de explotaci&oacute;n de una obra nunca se extinguen";
 answers[18] = 2;
 units[18] = ['41'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 5666. ";
 preguntaids[18] = 5666


//  Id pregunta: 6729 Año de creación de pregunta: 2009
 questions[19]= "20)  &iquest;C&oacute;mo se denominan los elementos que permiten insertar c&oacute;digo Java arbitrario en una p&aacute;gina JSP?";
 choices[19]= new Array();
 choices[19][0] = "Applets";
 choices[19][1] = "Codelets";
 choices[19][2] = "Scriptlets";
 choices[19][3] = "Ninguna de las anteriores";
 answers[19] = 2;
 units[19] = ['64'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 6729. ";
 preguntaids[19] = 6729


//  Id pregunta: 8171 Año de creación de pregunta: 2011
 questions[20]= "21)  Con el objetivo de garantizar la calidad en los servicios p&uacute;blicos se ha creado:";
 choices[20]= new Array();
 choices[20][0] = "La Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de los Servicios (AEVAL) perteneciente al Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[20][1] = "La Direcci&oacute;n General de Aseguramiento de la Calidad e Infraestructuras perteneciente al Ministerio de Energia, Turismo y Agenda Digital.";
 choices[20][2] = "El Consejo Superior de Aseguramiento de la Calidad e Infraestructuras perteneciente al Ministerio de Presidencia.";
 choices[20][3] = "La Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de los Servicios (AEVAL) perteneciente al Ministerio de Pol&iacute;tica Territorial.";
 answers[20] = 0;
 units[20] = ['19'];
 blocks[20] = ['A4'];
 comments[20] = "Id Pregunta: 8171. Examen TIC A2 2010 interna";
 preguntaids[20] = 8171


//  Id pregunta: 2775 Año de creación de pregunta: 2002
 questions[21]= "22)  El nombre del lenguaje Ada se debe a:";
 choices[21]= new Array();
 choices[21][0] = "Advanced Development of Algorithms";
 choices[21][1] = "Automatic Development and Adaptation of software";
 choices[21][2] = "Adaptative Digital Algorithms";
 choices[21][3] = "Es un homenaje a Ada Augusta Byron, considerada la primera programadora de la historia, que contribuy&oacute; econ&oacute;micamente y laboralmente al desarrollo de las primeras m&aacute;quinas diferenciales";
 answers[21] = 3;
 units[21] = ['56'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 2775. ";
 preguntaids[21] = 2775


//  Id pregunta: 10165 Año de creación de pregunta: 2015
 questions[22]= "23)  RE&Uacute;NETE es el Servicio Com&uacute;n de Reuniones Virtuales de la Red SARA que ofrece herramientas colaborativas a todas las Administraciones P&uacute;blicas. Entre sus funcionalidades NO se encuentra:";
 choices[22]= new Array();
 choices[22][0] = "Correo electr&oacute;nico multidominio.";
 choices[22][1] = "Integraci&oacute;n de salas de videoconferencia tradicional H323/SIP.";
 choices[22][2] = "Soporte on-line para p&aacute;ginas web.";
 choices[22][3] = "Videoconferencia con herramientas de colaboraci&oacute;n.";
 answers[22] = 0;
 units[22] = ['47'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 10165. Examen TIC A1 2014";
 preguntaids[22] = 10165


//  Id pregunta: 10446 Año de creación de pregunta: 2015
 questions[23]= "24)  Seg&uacute;n el Principio de Reconocimiento Mutuo que establece el Reglamento 910/2014, se reconocer&aacute; en un Estado miembro, a efectos de la autenticaci&oacute;n transfronteriza para un servicio en l&iacute;nea, el medio de identificaci&oacute;n electr&oacute;nica expedido en otro Estado miembro, siempre que:";
 choices[23]= new Array();
 choices[23][0] = "El nivel de seguridad de este medio de identificaci&oacute;n electr&oacute;nica corresponda a un nivel igual o superior al requerido por el organismo del sector p&uacute;blico para acceder a dicho servicio en l&iacute;nea, independientemente del nivel de seguridad del medio de identificaci&oacute;n.";
 choices[23][1] = "El medio de identificaci&oacute;n est&eacute; expedido seg&uacute;n los incluidos en la lista publicada por la Comisi&oacute;n.";
 choices[23][2] = "Las respuestas A) y B) son correctas.";
 choices[23][3] = "Este reconocimiento se producir&aacute; a m&aacute;s tardar 6 meses despu&eacute;s de que la Comisi&oacute;n publique la lista.";
 answers[23] = 1;
 units[23] = ['77'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 10446. ";
 preguntaids[23] = 10446


//  Id pregunta: 8079 Año de creación de pregunta: 2011
 questions[24]= "25)  Una compa&ntilde;&iacute;a va a abrir una nueva sede asumiendo la subred 255.255.248.0,&iquest;Cu&aacute;l de las siguientes direcciones IP se podr&iacute;a asignar a un ordenador de la nuevasede?:";
 choices[24]= new Array();
 choices[24][0] = "a) 172.16.20.0";
 choices[24][1] = "172.16.24.45";
 choices[24][2] = "Ambas respuestas son correctas";
 choices[24][3] = "Ninguna respuesta es correcta";
 answers[24] = 2;
 units[24] = ['105'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 8079. Analista Ayto. Madrid 2010";
 preguntaids[24] = 8079


//  Id pregunta: 9918 Año de creación de pregunta: 2015
 questions[25]= "26)  La Norma T&eacute;cnica de Interoperabilidad de Modelo de Datos para el Intercambio de asientos entre las entidades registrales se public&oacute; en:";
 choices[25]= new Array();
 choices[25][0] = "2010";
 choices[25][1] = "2011";
 choices[25][2] = "2013";
 choices[25][3] = "2014";
 answers[25] = 1;
 units[25] = ['44'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 9918. ";
 preguntaids[25] = 9918


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[26]= new Array();
 choices[26][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[26][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[26][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[26][3] = "El pago de subsidios a parados";
 answers[26] = 3;
 units[26] = ['15'];
 blocks[26] = ['A3'];
 comments[26] = "Id Pregunta: 421. Mercado laboral";
 preguntaids[26] = 421


//  Id pregunta: 8413 Año de creación de pregunta: 2011
 questions[27]= "28)  &iquest;Qu&eacute; herramienta con versiones en Windows, Unix y otros sistemas, muestra informaci&oacute;n sobre el estado actual de todos los procesos IP que se est&aacute;n ejecutando, las sesiones activas y puede proporcionar estad&iacute;sticas bas&aacute;ndose en los puertos o protocolos.";
 choices[27]= new Array();
 choices[27][0] = "ROUTE";
 choices[27][1] = "NETSTAT";
 choices[27][2] = "NBTSTAT";
 choices[27][3] = "TRACERT";
 answers[27] = 1;
 units[27] = ['114'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 8413. Operador Ayto. Madrid 2010";
 preguntaids[27] = 8413


//  Id pregunta: 5930 Año de creación de pregunta: 2007
 questions[28]= "29)  En relaci&oacute;n a los lenguajes XML (eXtensible Markup Language) y RDF (Resource Description Framework), &iquest;cu&aacute;l delas siguientes afirmaciones es cierta?";
 choices[28]= new Array();
 choices[28][0] = "XML Schema proporciona soporte para la interoperabilidad sem&aacute;ntica";
 choices[28][1] = "RDF utiliza XML como sintaxis com&uacute;n para el intercambio de metadatos";
 choices[28][2] = "RDF est&aacute; compuesto &uacute;nicamente de propiedades y enunciados";
 choices[28][3] = "XML Schema no tiene tipos predefinidos";
 answers[28] = 1;
 units[28] = ['74'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 5930. ";
 preguntaids[28] = 5930


//  Id pregunta: 4807 Año de creación de pregunta: 2002
 questions[29]= "30)  En funci&oacute;n del &aacute;rea geogr&aacute;fica que cubran y de sus caracter&iacute;sticas, se puede decir:";
 choices[29]= new Array();
 choices[29][0] = "Las redes de comunicaci&oacute;n se dividen en LAN (&aacute;rea local) y WAN (&aacute;rea extendida)";
 choices[29][1] = "Las redes WAN ofrecen bajas tasas de error";
 choices[29][2] = "En una red LAN los costes derivados del uso de la red pueden depender del tr&aacute;fico";
 choices[29][3] = "Las redes WAN pueden almacenar datos y despu&eacute;s enviarlos";
 answers[29] = 3;
 units[29] = ['112'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 4807. ";
 preguntaids[29] = 4807


//  Id pregunta: 347 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[30]= new Array();
 choices[30][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[30][1] = "Entrada en la Uni&oacute;n Europea";
 choices[30][2] = "Pactos de la Moncloa";
 choices[30][3] = "Ingreso en la ONU";
 answers[30] = 3;
 units[30] = ['12'];
 blocks[30] = ['A3'];
 comments[30] = "Id Pregunta: 347. Modelo econ&oacute;mico";
 preguntaids[30] = 347


//  Id pregunta: 139 Año de creación de pregunta: 2016
 questions[31]= "32)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[31]= new Array();
 choices[31][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[31][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[31][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[31][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[31] = 0;
 units[31] = ['5'];
 blocks[31] = ['A1'];
 comments[31] = "Id Pregunta: 139. Uni&oacute;n Europea";
 preguntaids[31] = 139


//  Id pregunta: 216 Año de creación de pregunta: 2016
 questions[32]= "33)  Las Universidades p&uacute;blicas:";
 choices[32]= new Array();
 choices[32][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[32][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[32][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[32][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[32] = 1;
 units[32] = ['7'];
 blocks[32] = ['A2'];
 comments[32] = "Id Pregunta: 216. Ley 39/2015";
 preguntaids[32] = 216


//  Id pregunta: 1126 Año de creación de pregunta: 2016
 questions[33]= "34)  Se&ntilde;ale la respuesta FALSA, en relaci&oacute;n con el algoritmo de planificaci&oacute;n SRTF (Shortest Remaining Time First):";
 choices[33]= new Array();
 choices[33][0] = "Es una versi&oacute;n de SJF.";
 choices[33][1] = "Cada vez que entran trabajos se interrumpe el actual y se compara el tiempo restante de &eacute;ste con el de los entrantes.";
 choices[33][2] = "Si hay un trabajo nuevo m&aacute;s corto que lo que le falta al actual en CPU, echamos el actual y metemos el nuevo.";
 choices[33][3] = "Cada proceso tiene un tiempo l&iacute;mite de uso de CPU llamado quantum.";
 answers[33] = 3;
 units[33] = ['56'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 1126. ";
 preguntaids[33] = 1126


//  Id pregunta: 8966 Año de creación de pregunta: 2013
 questions[34]= "35)  En los sistemas de videoconferencia las MCU:";
 choices[34]= new Array();
 choices[34][0] = "Son un componente obligatorio";
 choices[34][1] = "Son un componente opcional";
 choices[34][2] = "Permiten la comunicaci&oacute;n &uacute;nicamente entre dos terminales";
 choices[34][3] = "Permiten sesiones de videoconferencia s&oacute;lo para dos localizaciones remotas simult&aacute;neas";
 answers[34] = 1;
 units[34] = ['122'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 8966. ";
 preguntaids[34] = 8966


//  Id pregunta: 10407 Año de creación de pregunta: 2015
 questions[35]= "36)  &iquest;De qu&eacute; plan de la Agenda Digital Espa&ntilde;ola es fruto la Estrategia de Ciberseguridad?";
 choices[35]= new Array();
 choices[35][0] = "Plan de Desarrollo e Innovaci&oacute;n TIC";
 choices[35][1] = "Plan de Confianza en el &aacute;mbito Digital";
 choices[35][2] = "Plan de Seguridad Integral en las Comunicaciones TIC";
 choices[35][3] = "Plan de Aseguramiento de la Econom&iacute;a Digital y los Contenidos Digitales";
 answers[35] = 1;
 units[35] = ['19'];
 blocks[35] = ['A4'];
 comments[35] = "Id Pregunta: 10407. ";
 preguntaids[35] = 10407


//  Id pregunta: 1021 Año de creación de pregunta: 2016
 questions[36]= "37)  De acuerdo a la ley 40/2015 debe abstenerse de intervenir en el procedimiento el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[36]= new Array();
 choices[36][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[36][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[36][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[36][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[36] = 3;
 units[36] = ['4', '7', '8', '9'];
 blocks[36] = ['A1', 'A2'];
 comments[36] = "Id Pregunta: 1021. Ley 40/2015";
 preguntaids[36] = 1021


//  Id pregunta: 487 Año de creación de pregunta: 2016
 questions[37]= "38)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[37]= new Array();
 choices[37][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[37][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[37][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[37][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[37] = 1;
 units[37] = ['19'];
 blocks[37] = ['A4'];
 comments[37] = "Id Pregunta: 487. Sociedad de la informaci&oacute;n";
 preguntaids[37] = 487


//  Id pregunta: 7914 Año de creación de pregunta: 2011
 questions[38]= "39)  La tasa de rendimiento contable o rentabilidad media de una inversi&oacute;n es igual a:";
 choices[38]= new Array();
 choices[38][0] = "El cociente entre el beneficio medio anual y la inversi&oacute;n media anual.";
 choices[38][1] = "El cociente entre el flujo de caja medio anual y la inversi&oacute;n media anual.";
 choices[38][2] = "El valor actualizado de la diferencia entre los cobros y los pagos derivados de la inversi&oacute;n.";
 choices[38][3] = "El cociente entre el sumatorio de los flujos de caja y el desembolso inicial.";
 answers[38] = 0;
 units[38] = ['40'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 7914. Examen TIC A1 2010";
 preguntaids[38] = 7914


//  Id pregunta: 7646 Año de creación de pregunta: 2010
 questions[39]= "40)  En un sistema basado en el conocimiento, &iquest;qu&eacute; diferencia hay entre el conocimiento inferencial y el conocimiento estrat&eacute;gico o de control?";
 choices[39]= new Array();
 choices[39][0] = "El conocimiento inferencial est&aacute; contenido en la base de hechos y el de control es el que se obtiene mediante inferencia.";
 choices[39][1] = "Los dos son equivalentes.";
 choices[39][2] = "Los sistemas basados en el conocimiento no utilizan conocimiento estrat&eacute;gico.";
 choices[39][3] = "El conocimiento inferencial procede de razonamientos y el estrat&eacute;gico permite decidir qu&eacute; regla se aplica en cada momento.";
 answers[39] = 3;
 units[39] = ['68'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 7646. Map 2006";
 preguntaids[39] = 7646


//  Id pregunta: 85 Año de creación de pregunta: 2016
 questions[40]= "41)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[40]= new Array();
 choices[40][0] = "Municipios, provincias y CCAA.";
 choices[40][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[40][2] = "En CCAA, 50 provincias y municipios.";
 choices[40][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[40] = 2;
 units[40] = ['1'];
 blocks[40] = ['A1'];
 comments[40] = "Id Pregunta: 85. Constituci&oacute;n de 1978";
 preguntaids[40] = 85


//  Id pregunta: 6632 Año de creación de pregunta: 2009
 questions[41]= "42)  &iquest;Qu&eacute; car&aacute;cter tendr&aacute;n los C&oacute;digos Tipo descritos en el art&iacute;culo 32 de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal?";
 choices[41]= new Array();
 choices[41][0] = "De legislaci&oacute;n de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[41][1] = "Sustitutivo de las regulaciones legales sobre protecci&oacute;n de datos para aquellos sectores que los adopten.";
 choices[41][2] = "Obligatorio para todas aquellas administraciones P&uacute;blicas que prevean la realizaci&oacute;n de transferencias internacionales de datos personales a terceros pa&iacute;ses que no garanticen un nivel adecuado de protecci&oacute;n.";
 choices[41][3] = "C&oacute;digos deontol&oacute;gicos o de buena pr&aacute;ctica profesional.";
 answers[41] = 3;
 units[41] = ['35'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 6632. ";
 preguntaids[41] = 6632


//  Id pregunta: 3911 Año de creación de pregunta: 2002
 questions[42]= "43)  La t&eacute;cnica Halstead usa:";
 choices[42]= new Array();
 choices[42][0] = "El n&uacute;mero de operandos distintos de un programa";
 choices[42][1] = "La longitud de un programa";
 choices[42][2] = "El tiempo de ejecuci&oacute;n &oacute;ptimo";
 choices[42][3] = "No existe";
 answers[42] = 0;
 units[42] = ['93'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 3911. ";
 preguntaids[42] = 3911


//  Id pregunta: 9898 Año de creación de pregunta: 2015
 questions[43]= "44)  &iquest;Qu&eacute; Ley establece el Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas?";
 choices[43]= new Array();
 choices[43][0] = "Ley 40/2015.";
 choices[43][1] = "Ley 40/2014.";
 choices[43][2] = "Ley 39/2015.";
 choices[43][3] = "Ley 41/2015.";
 answers[43] = 2;
 units[43] = ['7', '19'];
 blocks[43] = ['A2', 'A4'];
 comments[43] = "Id Pregunta: 9898. ";
 preguntaids[43] = 9898


//  Id pregunta: 9035 Año de creación de pregunta: 2014
 questions[44]= "45)  Entre los &oacute;rganos de asistencia, referidos en el RD Legislativo 3/2011, no se encuentra:";
 choices[44]= new Array();
 choices[44][0] = "Jurados de concursos";
 choices[44][1] = "Mesas de contrataci&oacute;n";
 choices[44][2] = "Junta Consultiva de Contrataci&oacute;n Administrativa del Estado";
 choices[44][3] = "Ninguno de los anteriores";
 answers[44] = 2;
 units[44] = ['10'];
 blocks[44] = ['A2'];
 comments[44] = "Id Pregunta: 9035. Art. 320, Art. 323 RD Legislativo 3/2011";
 preguntaids[44] = 9035


//  Id pregunta: 7658 Año de creación de pregunta: 2010
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes par&aacute;metros NO forma parte de la ecuaci&oacute;n del software de Putnam para la estimaci&oacute;n del esfuerzo de un proyecto software?";
 choices[45]= new Array();
 choices[45][0] = "Casos de uso.";
 choices[45][1] = "L&iacute;neas de c&oacute;digo.";
 choices[45][2] = "Duraci&oacute;n del proyecto.";
 choices[45][3] = "Par&aacute;metro de productividad.";
 answers[45] = 0;
 units[45] = ['94'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 7658. Map 2006";
 preguntaids[45] = 7658


//  Id pregunta: 6144 Año de creación de pregunta: 2003
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes afirmaciones con respecto a los XML Schemas es incorrecta?:";
 choices[46]= new Array();
 choices[46][0] = "Los XML Schemas utilizan sintaxis XML";
 choices[46][1] = "Es imposible referenciar m&uacute;ltiples XML Schemas desde el mismo documento XML";
 choices[46][2] = "Los XML Schemas soportan namespaces";
 choices[46][3] = "Los XML Schemas permiten definir tipos de datos";
 answers[46] = 1;
 units[46] = ['74'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 6144. Examen TIC A1 MAP 2007";
 preguntaids[46] = 6144


//  Id pregunta: 969 Año de creación de pregunta: 2016
 questions[47]= "48)  La actuaci&oacute;n de la Administraci&oacute;n P&uacute;blica respectiva se desarrolla para alcanzar los objetivos que establecen las leyes y el resto del ordenamiento jur&iacute;dico, bajo la direcci&oacute;n de (se&ntilde;ala la incorrecta):";
 choices[47]= new Array();
 choices[47][0] = "el Gobierno de la Naci&oacute;n";
 choices[47][1] = "los &oacute;rganos de gobierno de las Comunidades Aut&oacute;nomas";
 choices[47][2] = "los &oacute;rganos de gobierno de las Entidades Locales";
 choices[47][3] = "los &oacute;rganos de gobierno de las Universidades p&uacute;blicas";
 answers[47] = 3;
 units[47] = ['4', '7', '8', '9'];
 blocks[47] = ['A1', 'A2'];
 comments[47] = "Id Pregunta: 969. Ley 40/2015";
 preguntaids[47] = 969


//  Id pregunta: 6452 Año de creación de pregunta: 2003
 questions[48]= "49)  &iquest;Qu&eacute; considera que NO es una ventaja de la construcci&oacute;n de portales accesibles?";
 choices[48]= new Array();
 choices[48][0] = "Aumento de la usabilidad";
 choices[48][1] = "Facilita la independencia de dispositivo";
 choices[48][2] = "Simplifica el desarrollo";
 choices[48][3] = "Todas las anteriores son correctas.";
 answers[48] = 3;
 units[48] = ['42'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 6452. ";
 preguntaids[48] = 6452


//  Id pregunta: 9893 Año de creación de pregunta: 2015
 questions[49]= "50)  Seg&uacute;n la Ley 39/2015 en referencia al plazo de notificaci&oacute;n, se establece que:";
 choices[49]= new Array();
 choices[49][0] = "El plazo m&aacute;ximo en el que debe notificarse la resoluci&oacute;n expresa ser&aacute; el fijado por la norma reguladora del correspondiente procedimiento.";
 choices[49][1] = "El plazo no podr&aacute; exceder de seis meses salvo que una norma con rango de Ley establezca uno mayor o as&iacute; venga previsto en el Derecho de la Uni&oacute;n Europea.";
 choices[49][2] = "Ambas";
 choices[49][3] = "Ninguna de las anteriores.";
 answers[49] = 2;
 units[49] = ['7', '19'];
 blocks[49] = ['A2', 'A4'];
 comments[49] = "Id Pregunta: 9893. Art 21, Ley 39/2015";
 preguntaids[49] = 9893


//  Id pregunta: 3675 Año de creación de pregunta: 2002
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes no es un elemento del modelo EFQM?";
 choices[50]= new Array();
 choices[50][0] = "Impacto en la sociedad";
 choices[50][1] = "Control del dise&ntilde;o";
 choices[50][2] = "Satisfacci&oacute;n del cliente";
 choices[50][3] = "Recursos";
 answers[50] = 1;
 units[50] = ['98'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 3675. ";
 preguntaids[50] = 3675


//  Id pregunta: 3390 Año de creación de pregunta: 2006
 questions[51]= "52)  En el entorno Microsoft.NET:";
 choices[51]= new Array();
 choices[51][0] = "MS SQL Server Compact es una base datos empotrada, adaptada a aplicaciones m&oacute;viles u ocasionalmente conectadas.";
 choices[51][1] = "MS Web Deploy 3.5 es una herramienta para despliegue, gesti&oacute;n y migraci&oacute;on de aplicaciones complejas distribuidas compuestas por m&uacute;ltiples sitios, servidores o aplicaciones web.";
 choices[51][2] = "BizTalk Server es un ESB que permite la automatizacion de procesos de negocio, comunicando diferentes sistemas mediante mensajes en XML.";
 choices[51][3] = "Todas son correctas";
 answers[51] = 3;
 units[51] = ['63'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 3390. ";
 preguntaids[51] = 3390


//  Id pregunta: 4427 Año de creación de pregunta: 2002
 questions[52]= "53)  Las siglas ADMD y PRMD se usan dentro la norma X.400 refiri&eacute;ndose a:";
 choices[52]= new Array();
 choices[52][0] = "Estas siglas no se usan en dicha norma";
 choices[52][1] = "Dominios p&uacute;blicos o privados";
 choices[52][2] = "Administraci&oacute;n y privacidad de los datos";
 choices[52][3] = "Ninguna de las respuestas anteriores";
 answers[52] = 1;
 units[52] = ['116'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 4427. ";
 preguntaids[52] = 4427


//  Id pregunta: 4331 Año de creación de pregunta: 2004
 questions[53]= "54)  Qu&eacute; es cierto respecto a los dispositivos bridge y switch de interconexi&oacute;n de redes lcoales";
 choices[53]= new Array();
 choices[53][0] = "El switch opera en el nivel 2 y el bridge en el nivel 3 del modelo OSI";
 choices[53][1] = "Los switches se suelen emplear para interconectar servidores y los bridges para interconectar LANs";
 choices[53][2] = "Un switch pueden interconectar distintos tipos de LAN y un bridge no";
 choices[53][3] = "En los switches cada puerto forma su dominio de colisi&oacute;n propio mientras que los bridges tienen varios dominios de colisi&oacute;n por puerto.";
 answers[53] = 1;
 units[53] = ['102'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 4331. ";
 preguntaids[53] = 4331


//  Id pregunta: 7477 Año de creación de pregunta: 2010
 questions[54]= "55)  Indique cu&aacute;l de las siguientes alternativas corresponde a las gu&iacute;as o manuales que componen la publicaci&oacute;n oficial de la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3:";
 choices[54]= new Array();
 choices[54][0] = "Gu&iacute;a de Usuario, Gu&iacute;a de Referencia, Procedimientos y Herramientas.";
 choices[54][1] = "Gu&iacute;a de Usuario, Gu&iacute;a de Referencia, Gu&iacute;a de Procedimientos y Mecanismos.";
 choices[54][2] = "Gu&iacute;a de Usuario, Gu&iacute;a de Referencia, Interfaces, T&eacute;cnicas y Pr&aacute;cticas.";
 choices[54][3] = "Gu&iacute;a de Usuario, Gu&iacute;a de Referencia, la Construcci&oacute;n del Sistema de Informaci&oacute;n.";
 answers[54] = 2;
 units[54] = ['86'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 7477. Map 2005";
 preguntaids[54] = 7477


//  Id pregunta: 742 Año de creación de pregunta: 2016
 questions[55]= "56)  Entre las caracter&iacute;sticas de las Bases de Datos NoSQL se encuentran:";
 choices[55]= new Array();
 choices[55][0] = "Pueden manejar enormes cantidades de datos estructurados";
 choices[55][1] = "Existe un control estricto de las transacciones (propiedades ACID - Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[55][2] = "Se basan en sistemas distribuidos";
 choices[55][3] = "Se basan en el modelo de datos relacional";
 answers[55] = 2;
 units[55] = ['73'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 742. Big Data y NoSQL";
 preguntaids[55] = 742


//  Id pregunta: 10540 Año de creación de pregunta: 2015
 questions[56]= "57)  Cu&aacute;l es el significado de las sigla RIP";
 choices[56]= new Array();
 choices[56][0] = "Routing Improved Protocol";
 choices[56][1] = "Routing Inner Protocol";
 choices[56][2] = "Routing Information Protocol";
 choices[56][3] = "Ninguna de las anteriores";
 answers[56] = 2;
 units[56] = ['109'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 10540. ";
 preguntaids[56] = 10540


//  Id pregunta: 979 Año de creación de pregunta: 2016
 questions[57]= "58)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[57]= new Array();
 choices[57][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[57][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[57][2] = "a y b son correctas";
 choices[57][3] = "a y b son incorrectas";
 answers[57] = 2;
 units[57] = ['4', '7', '8', '9'];
 blocks[57] = ['A1', 'A2'];
 comments[57] = "Id Pregunta: 979. Ley 40/2015";
 preguntaids[57] = 979


//  Id pregunta: 2117 Año de creación de pregunta: 2002
 questions[58]= "59)  En auditor&iacute;a inform&aacute;tica, el objeto de una &quot;prueba de cumplimiento&quot; es:";
 choices[58]= new Array();
 choices[58][0] = "Verificar el cumplimiento de la legislaci&oacute;n y la normativa vigente en las operaciones de un sistema de informaci&oacute;n, especialmente en el cap&iacute;tulo de compras y gesti&oacute;n de personal";
 choices[58][1] = "Sustanciar la probabilidad de que los objetivos de control no se alcancen";
 choices[58][2] = "Determinar si los controles se est&aacute;n aplicando de la forma descrita en la documentaci&oacute;n o de la forma descrita por el usuario o directivo";
 choices[58][3] = "Verificar que todos los usuarios se adhieren voluntaria u obligatoriamente a la pol&iacute;tica sobre usos de recursos inform&aacute;ticos implantada por la Direcci&oacute;n";
 answers[58] = 2;
 units[58] = ['36', '45'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 2117. ";
 preguntaids[58] = 2117


//  Id pregunta: 87 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[59]= new Array();
 choices[59][0] = "117.5";
 choices[59][1] = "117.1";
 choices[59][2] = "116";
 choices[59][3] = "15";
 answers[59] = 0;
 units[59] = ['1'];
 blocks[59] = ['A1'];
 comments[59] = "Id Pregunta: 87. Constituci&oacute;n de 1978";
 preguntaids[59] = 87


//  Id pregunta: 6787 Año de creación de pregunta: 2010
 questions[60]= "61)  Dadas las siguientes relaciones: A={ax,ay,az,by,bz,cx,cy} y B={x,z} &iquest;Cu&aacute;l ser&iacute;a el resultado de la operaci&oacute;n A dividido entre B?";
 choices[60]= new Array();
 choices[60][0] = "{a,b,c}.";
 choices[60][1] = "{ax,az,bz,cx}.";
 choices[60][2] = "{ay,by,cy}.";
 choices[60][3] = "{a}.";
 answers[60] = 3;
 units[60] = ['61'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 6787. TIC A 2009";
 preguntaids[60] = 6787


//  Id pregunta: 5530 Año de creación de pregunta: 2007
 questions[61]= "62)  La etiqueta en HTML para indicar el comienzo de una celda con datos en una tabla es:";
 choices[61]= new Array();
 choices[61][0] = "&lt;table&gt;";
 choices[61][1] = "&lt;tr&gt;";
 choices[61][2] = "&lt;th&gt;";
 choices[61][3] = "&lt;td&gt;";
 answers[61] = 3;
 units[61] = ['74'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 5530. ";
 preguntaids[61] = 5530


//  Id pregunta: 3162 Año de creación de pregunta: 2002
 questions[62]= "63)  &iquest;Cu&aacute;ntos niveles RAID est&aacute;ndar existen?:";
 choices[62]= new Array();
 choices[62][0] = "4";
 choices[62][1] = "5";
 choices[62][2] = "6";
 choices[62][3] = "7";
 answers[62] = 3;
 units[62] = ['53'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 3162. ";
 preguntaids[62] = 3162


//  Id pregunta: 3772 Año de creación de pregunta: 2002
 questions[63]= "64)  El criterio 7 en el modelo EFQM de excelencia es el referente a:";
 choices[63]= new Array();
 choices[63][0] = "Las alianzas y los recursos";
 choices[63][1] = "Los procesos";
 choices[63][2] = "Los resultados en la sociedad";
 choices[63][3] = "Los resultados en los clientes";
 answers[63] = 3;
 units[63] = ['98'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 3772. ";
 preguntaids[63] = 3772


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[64]= "65)  Se&ntilde;ale el &aacute;mbito de aplicaci&oacute;n del Reglamento (UE) 910/2014";
 choices[64]= new Array();
 choices[64][0] = "A los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros y a los prestadores de servicios de confianza establecidos en la Uni&oacute;n";
 choices[64][1] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros";
 choices[64][2] = "A los prestadores de servicios de certificaci&oacute;n de la Uni&oacute;n cuyos Gobiernos acepten formalmente el Reglamento";
 choices[64][3] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica de los Estados miembros, independientemente de que hayan sido notificados";
 answers[64] = 0;
 units[64] = ['77'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 785. Reglamento 910/2014";
 preguntaids[64] = 785


//  Id pregunta: 9800 Año de creación de pregunta: 2015
 questions[65]= "66)  Son europeos:";
 choices[65]= new Array();
 choices[65][0] = "El cuerpo de reguladores de comunicaciones electr&oacute;nicas BEREC";
 choices[65][1] = "El programa para el impulso de la Sociedad de la Informaci&oacute;n IDESI";
 choices[65][2] = "El sistema inform&aacute;tico JOIN para el intercambio de identidades electr&oacute;nicas";
 choices[65][3] = "La red SARA";
 answers[65] = 0;
 units[65] = ['19'];
 blocks[65] = ['A4'];
 comments[65] = "Id Pregunta: 9800. ";
 preguntaids[65] = 9800


//  Id pregunta: 5151 Año de creación de pregunta: 2003
 questions[66]= "67)  &iquest;Cual de los siguientes es un monitor de transacciones?";
 choices[66]= new Array();
 choices[66][0] = "Tuxedo";
 choices[66][1] = "Tivoli";
 choices[66][2] = "Unicenter TNG";
 choices[66][3] = "Ninguno de los anteriores";
 answers[66] = 0;
 units[66] = ['54'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 5151. Pregunta similar a la del ex&aacute;men de SS del 2003 salvo en algunas opciones";
 preguntaids[66] = 5151


//  Id pregunta: 10751 Año de creación de pregunta: 2015
 questions[67]= "68)  En el dise&ntilde;o estructurado, el acoplamiento normal o simple entre dos m&oacute;dulos de software consiste en:";
 choices[67]= new Array();
 choices[67][0] = "Ambos m&oacute;dulos utilizan las mismas estructuras de datos.";
 choices[67][1] = "Un m&oacute;dulo genera informaci&oacute;n de control para el otro m&oacute;dulo.";
 choices[67][2] = "Un m&oacute;dulo se comunica con el otro mediante paso de par&aacute;metros.";
 choices[67][3] = "Son falsas todas las anteriores.";
 answers[67] = 2;
 units[67] = ['89'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 10751. ";
 preguntaids[67] = 10751


//  Id pregunta: 2766 Año de creación de pregunta: 2002
 questions[68]= "69)  Frecuencia de paginaci&oacute;n es:";
 choices[68]= new Array();
 choices[68][0] = "N&uacute;mero de peticiones de servicio por unidad de tiempo";
 choices[68][1] = "N&uacute;mero de programas sacados de memoria por unidad de tiempo";
 choices[68][2] = "N&uacute;mero de trabajos de un programa en un entorno de memoria virtual por unidad de tiempo";
 choices[68][3] = "N&uacute;mero de fallos de p&aacute;gina que se producen por unidad de tiempo";
 answers[68] = 3;
 units[68] = ['56'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 2766. ";
 preguntaids[68] = 2766


//  Id pregunta: 509 Año de creación de pregunta: 2016
 questions[69]= "70)  Indique la afirmaci&oacute;n falsa:";
 choices[69]= new Array();
 choices[69][0] = "En la publicidad activa la Administraci&oacute;n pone los datos a disposici&oacute;n de la ciudadan&iacute;a, en portales y p&aacute;ginas web, sin esperar a que los ciudadanos los demanden, proactivamente.";
 choices[69][1] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica los ciudadanos acceden a la informaci&oacute;n p&uacute;blica puesta a disposici&oacute;n por la Administraci&oacute;n en portales y p&aacute;ginas web.";
 choices[69][2] = "La publicidad activa y el derecho de acceso fomentan la transparencia en la actividad p&uacute;blica.";
 choices[69][3] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica la Administraci&oacute;n responde a las demandas de informaci&oacute;n por parte de los ciudadanos.";
 answers[69] = 1;
 units[69] = ['22'];
 blocks[69] = ['A4'];
 comments[69] = "Id Pregunta: 509. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[69] = 509


//  Id pregunta: 4198 Año de creación de pregunta: 2006
 questions[70]= "71)  &iquest;En cu&aacute;l de los siguientes tipos se garantiza un mayor nivel de cohesi&oacute;n de un m&oacute;dulo de software?";
 choices[70]= new Array();
 choices[70][0] = "Cohesi&oacute;n de comunicaci&oacute;n.";
 choices[70][1] = "Cohesi&oacute;n temporal.";
 choices[70][2] = "Cohesi&oacute;n l&oacute;gica.";
 choices[70][3] = "Cohesi&oacute;n procedimental.";
 answers[70] = 0;
 units[70] = ['89'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 4198. ";
 preguntaids[70] = 4198


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[71]= "72)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[71]= new Array();
 choices[71][0] = "A los ministros.";
 choices[71][1] = "Las respuestas a) y b) son correctas.";
 choices[71][2] = "Las respuestas a) y b) no son correctas.";
 choices[71][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[71] = 1;
 units[71] = ['11'];
 blocks[71] = ['A2'];
 comments[71] = "Id Pregunta: 279. Presupuestos generales";
 preguntaids[71] = 279


//  Id pregunta: 4199 Año de creación de pregunta: 2006
 questions[72]= "73)  &iquest;C&oacute;mo se denomina el acoplamiento donde la comunicaci&oacute;n entre m&oacute;dulos es a trav&eacute;s de estructuras de datos?";
 choices[72]= new Array();
 choices[72][0] = "Acoplamiento de marca.";
 choices[72][1] = "Acoplamiento de control.";
 choices[72][2] = "Acoplamiento externo.";
 choices[72][3] = "Acoplamiento com&uacute;n.";
 answers[72] = 0;
 units[72] = ['89'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 4199. ";
 preguntaids[72] = 4199


//  Id pregunta: 5888 Año de creación de pregunta: 2007
 questions[73]= "74)  La Ley de Impulso de la Sociedad de la Informaci&oacute;n introduce novedades en materia de";
 choices[73]= new Array();
 choices[73][0] = "Seguridad. Los prestadores de servicios deber&aacute;n informar a sus clientes sobre medidas de seguridad que apliquen en sus servicios";
 choices[73][1] = "Accesibilidad. Se establece que las p&aacute;ginas web de las AAPP alcancen el nivel medio de accesibilidad";
 choices[73][2] = "Ampliaci&oacute;n de los nombres de dominio. Deber&aacute;n poder asignarse nombres de dominio .es que contengan el car&aacute;cter &quot;&ntilde;&quot;";
 choices[73][3] = "Todas las anteriores son ciertas";
 answers[73] = 3;
 units[73] = ['19'];
 blocks[73] = ['A4'];
 comments[73] = "Id Pregunta: 5888. Ley 56/2007";
 preguntaids[73] = 5888


//  Id pregunta: 1070 Año de creación de pregunta: 2016
 questions[74]= "75)  En el entorno de la firma electr&oacute;nica y la identidad electr&oacute;nica, STORK identifica:";
 choices[74]= new Array();
 choices[74][0] = "Un proyecto financiado por la Comisi&oacute;n Europea para establecer la interoperabilidad de las identidades electr&oacute;nicas de los Estados Miembros.";
 choices[74][1] = "A la PKI desplegada por la Comisi&oacute;n Europea para la futura carta de identidad electr&oacute;nica europea.";
 choices[74][2] = "La implementaci&oacute;n opensource realizada por la Comisi&oacute;n Europea de un cliente de firma electr&oacute;nica.";
 choices[74][3] = "El consorcio de fabricantes e industria Europea relacionado con la firma electr&oacute;nica e identidad electr&oacute;nica.";
 answers[74] = 0;
 units[74] = ['77'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 1070. ";
 preguntaids[74] = 1070


