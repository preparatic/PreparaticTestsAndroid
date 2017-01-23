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
//  Id pregunta: 3076 Año de creación de pregunta: 2002
 questions[0]= "1)  Un ordenador con multiprocesamiento sim&eacute;trico (SMP). Dentro de la clasificaci&oacute;n de M.J. Flinn se clasificar&iacute;a como:";
 choices[0]= new Array();
 choices[0][0] = "SISD";
 choices[0][1] = "MIMD";
 choices[0][2] = "MISD";
 choices[0][3] = "SIMD";
 answers[0] = 1;
 units[0] = ['49'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 3076. ";
 preguntaids[0] = 3076


//  Id pregunta: 9673 Año de creación de pregunta: 2014
 questions[1]= "2)  En el &aacute;mbito de la continuidad de negocio una operaci&oacute;n clasificada como vital:";
 choices[1]= new Array();
 choices[1][0] = "Puede realizarse manualmente por un periodo breve de tiempo.";
 choices[1][1] = "Tiene mayor tolerancia a las interrupciones que una clasificada como cr&iacute;tica.";
 choices[1][2] = "Ninguna de las anteriores.";
 choices[1][3] = "A y B.";
 answers[1] = 3;
 units[1] = ['100'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 9673. ";
 preguntaids[1] = 9673


//  Id pregunta: 7995 Año de creación de pregunta: 2011
 questions[2]= "3)  &iquest;Para que sirve la palabra clave &quot;static&quot; en Java?";
 choices[2]= new Array();
 choices[2][0] = "Indica que aquel rn&eacute;todo o variable que precede es constante, es decir, no puede modificarse";
 choices[2][1] = "Permite indicar que el m&eacute;todo o la variable al que precede pertenece a la clase en lugar de al objeto";
 choices[2][2] = "Indica que la variable o m&eacute;todo al que precede no puede ser accedida desde otras clases";
 choices[2][3] = "Indica que la variable o m&eacute;todo al que precede no puede ser accedida desde la dase a la que pertenece.";
 answers[2] = 1;
 units[2] = ['64'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 7995. Examen TIC A2 2010";
 preguntaids[2] = 7995


//  Id pregunta: 2925 Año de creación de pregunta: 2002
 questions[3]= "4)  La capacidad efectiva de informaci&oacute;n &uacute;til de un disco es:";
 choices[3]= new Array();
 choices[3][0] = "El tama&ntilde;o en pulgadas del disco";
 choices[3][1] = "El n&uacute;mero de bits que pueden almacenarse en el disco sin formatar";
 choices[3][2] = "El n&uacute;mero de bit que pueden almacenarse en el disco formatado";
 choices[3][3] = "El n&uacute;mero de bit que pueden almacenarse en una pista";
 answers[3] = 2;
 units[3] = ['53'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 2925. ";
 preguntaids[3] = 2925


//  Id pregunta: 3696 Año de creación de pregunta: 2002
 questions[4]= "5)  La definici&oacute;n: &ldquo;Es el proceso de analizar un sistema para identificar los componentes y las interrelaciones entre ellos, creando representaciones del sistema en otra forma distinta a la original o bien a un nivel superior de abstracci&oacute;n&rdquo;, corresponde a:";
 choices[4]= new Array();
 choices[4][0] = "Restructuraci&oacute;n (Restructuring).";
 choices[4][1] = "Ingenier&iacute;a Inversa (Reverse Engineering).";
 choices[4][2] = "Ingenier&iacute;a hacia adelante (Forward Engineering).";
 choices[4][3] = "Reingenier&iacute;a (Reengineering).";
 answers[4] = 1;
 units[4] = ['97'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 3696. ";
 preguntaids[4] = 3696


//  Id pregunta: 7100 Año de creación de pregunta: 2010
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes no es un requisito m&iacute;nimo de seguridad de los definidos en el Esquema Nacional de Seguridad?";
 choices[5]= new Array();
 choices[5][0] = "Gesti&oacute;n de personal.";
 choices[5][1] = "Integridad y actualizaci&oacute;n del sistema.";
 choices[5][2] = "Prevenci&oacute;n ante la continuidad de la actividad.";
 choices[5][3] = "Incidentes de seguridad.";
 answers[5] = 2;
 units[5] = ['46'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 7100. Art&iacute;culo 11 ENS";
 preguntaids[5] = 7100


//  Id pregunta: 9037 Año de creación de pregunta: 2014
 questions[6]= "7)  &iquest;Cu&aacute;l es el plazo necesario entre la invitaci&oacute;n a mejorar ofertas a los licitadores y la subasta electr&oacute;nica?";
 choices[6]= new Array();
 choices[6][0] = "No antes de 15 d&iacute;as h&aacute;biles desde la invitaci&oacute;n";
 choices[6][1] = "No antes de 15 d&iacute;as naturales desde la invitaci&oacute;n";
 choices[6][2] = "M&iacute;nimo 2 d&iacute;as h&aacute;biles entre invitaci&oacute;n y subasta";
 choices[6][3] = "M&iacute;nimo 2 d&iacute;as naturales entre invitaci&oacute;n y subasta";
 answers[6] = 3;
 units[6] = ['10'];
 blocks[6] = ['A2'];
 comments[6] = "Id Pregunta: 9037. RD Legislativo 3/2011, Art. 148.7. Entre la fecha de env&iacute;o de las invitaciones y el comienzo de la subasta electr&oacute;nica habr&aacute;n de transcurrir, al menos, dos d&iacute;as h&aacute;biles.";
 preguntaids[6] = 9037


//  Id pregunta: 5460 Año de creación de pregunta: 2007
 questions[7]= "8)  M&eacute;trica versi&oacute;n 3:";
 choices[7]= new Array();
 choices[7][0] = "No establece diferencias entre los desarrollos orientados a objetos y los desarrollos estructurados.";
 choices[7][1] = "Cubre desarrollos estructurados y de orientaci&oacute;n a objetos";
 choices[7][2] = "Establece en el Proceso de Desarrollo de Sistemas de informaci&oacute;n 3 Procesos (EVS, DSI y CSI).";
 choices[7][3] = "No cubre desarrollos orientados a objeto";
 answers[7] = 1;
 units[7] = ['91'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 5460. ";
 preguntaids[7] = 5460


//  Id pregunta: 6425 Año de creación de pregunta: 2003
 questions[8]= "9)  Indique cu&aacute;l de los siguientes no es un servidor de aplicaciones para servicios web:";
 choices[8]= new Array();
 choices[8][0] = "JONAS";
 choices[8][1] = "XIMDEX";
 choices[8][2] = "WEBSPHERE";
 choices[8][3] = "WEBLOGIC";
 answers[8] = 1;
 units[8] = ['62'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 6425. ";
 preguntaids[8] = 6425


//  Id pregunta: 4408 Año de creación de pregunta: 2002
 questions[9]= "10)  Dentro de la norma X.400, &iquest; qu&eacute; se entiende por Agente de Usuario (UA)?:";
 choices[9]= new Array();
 choices[9][0] = "El usuario que puede ser una persona o programa de aplicaci&oacute;n";
 choices[9][1] = "Agente que almacena y retransmite los mensajes destinados a un usuario";
 choices[9][2] = "Agente que enruta los mensajes.";
 choices[9][3] = "Proceso de aplicaci&oacute;n que interactua con el sistema de transferencia de mensajes";
 answers[9] = 3;
 units[9] = ['116'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 4408. ";
 preguntaids[9] = 4408


//  Id pregunta: 4207 Año de creación de pregunta: 2006
 questions[10]= "11)  El prototipado cl&aacute;sico, &iquest;en qu&eacute; fases del proyecto se aplica?";
 choices[10]= new Array();
 choices[10][0] = "En la fase de especificaci&oacute;n de requisitos";
 choices[10][1] = "En el dise&ntilde;o del sistema";
 choices[10][2] = "a) y b) son correctas";
 choices[10][3] = "Se aplica en todas las fases expecto implantaci&oacute;n y mantenimiento";
 answers[10] = 0;
 units[10] = ['90'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 4207. ";
 preguntaids[10] = 4207


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[11]= "12)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[11]= new Array();
 choices[11][0] = "De las disposiciones favorables.";
 choices[11][1] = "De las disposiciones sancionadoras no favorables.";
 choices[11][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[11][3] = "Las respuestas b) y c) son correctas.";
 answers[11] = 3;
 units[11] = ['1'];
 blocks[11] = ['A1'];
 comments[11] = "Id Pregunta: 79. Constituci&oacute;n de 1978";
 preguntaids[11] = 79


//  Id pregunta: 6458 Año de creación de pregunta: 2003
 questions[12]= "13)  Respecto de la Ley 56/2007, se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[12]= new Array();
 choices[12][0] = "Se incluir&aacute;n en los proyectos de infraestructuras de inter&eacute;s general canalizaciones para el despliegue de redes de comunicaciones, as&iacute; como  se preveer&aacute;n las instalaciones para asegurar la cobertura de comunicaciones m&oacute;viles.";
 choices[12][1] = "Se  especifica la creaci&oacute;n de una base de datos sobre servicios de la sociedad de la informaci&oacute;n  de comunicaciones electr&oacute;nicas en Espa&ntilde;a.";
 choices[12][2] = "En la oferta p&uacute;blica de contrataci&oacute;n electr&oacute;nica de transparencia garantizada no es necesario que una vez concluido el proceso la empresa informe a los participantes de la decisi&oacute;n adoptada.";
 choices[12][3] = "Aclara la valoraci&oacute;n de la firma electr&oacute;nica en juicio.";
 answers[12] = 2;
 units[12] = ['19'];
 blocks[12] = ['A4'];
 comments[12] = "Id Pregunta: 6458. ";
 preguntaids[12] = 6458


//  Id pregunta: 5707 Año de creación de pregunta: 2007
 questions[13]= "14)  En gesti&oacute;n de proyectos de tecnolog&iacute;as de la informaci&oacute;n indicar cu&aacute;l de los siguientes diagramas es de red y tiene una representaci&oacute;n gr&aacute;fica m&aacute;s sencilla no incluyendo actividades virtuales.";
 choices[13]= new Array();
 choices[13][0] = "Diagrama PERT (Program Evaluation and Review Technique).";
 choices[13][1] = "Diagrama PDM (Precedence Diagramming Method).";
 choices[13][2] = "Diagrama ADM (Arrow Diagramming Method).";
 choices[13][3] = "Ninguno de los anteriores.";
 answers[13] = 1;
 units[13] = ['33'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 5707. Castilla la Mancha B 2006";
 preguntaids[13] = 5707


//  Id pregunta: 222 Año de creación de pregunta: 2016
 questions[14]= "15)  Se consideran interesados en el procedimiento administrativo:";
 choices[14]= new Array();
 choices[14][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[14][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[14][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[14][3] = "todas son correctas";
 answers[14] = 0;
 units[14] = ['7'];
 blocks[14] = ['A2'];
 comments[14] = "Id Pregunta: 222. Ley 39/2015";
 preguntaids[14] = 222


//  Id pregunta: 1428 Año de creación de pregunta: 2016
 questions[15]= "16)  El Gobierno cesa, seg&uacute;n el art&iacute;culo 101 de la Constituci&oacute;n Espa&ntilde;ola:";
 choices[15]= new Array();
 choices[15][0] = "Antes de la celebraci&oacute;n de elecciones generales.";
 choices[15][1] = "En los casos de p&eacute;rdida de la confianza del Congreso de los Diputados y del Gobierno de la naci&oacute;n.";
 choices[15][2] = "Por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[15][3] = "Cu&aacute;ndo se den las causas previstas en el art&iacute;culo 4 de la Constituci&oacute;n espa&ntilde;ola.";
 answers[15] = 2;
 units[15] = ['1'];
 blocks[15] = ['A1'];
 comments[15] = "Id Pregunta: 1428. ";
 preguntaids[15] = 1428


//  Id pregunta: 606 Año de creación de pregunta: 2016
 questions[16]= "17)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[16]= new Array();
 choices[16][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[16][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[16][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[16][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[16] = 3;
 units[16] = ['44'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 606. AGE A1 2015";
 preguntaids[16] = 606


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[17]= "18)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[17]= new Array();
 choices[17][0] = "La Ley General Tributaria.";
 choices[17][1] = "La Ley Presupuestaria.";
 choices[17][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[17][3] = "Ninguna de las respuestas es correcta.";
 answers[17] = 0;
 units[17] = ['11'];
 blocks[17] = ['A2'];
 comments[17] = "Id Pregunta: 304. Presupuestos generales";
 preguntaids[17] = 304


//  Id pregunta: 9985 Año de creación de pregunta: 2015
 questions[18]= "19)  Seg&uacute;n el art&iacute;culo 18 del Real Decreto 1671/2009, sobre certificados de sede electr&oacute;nica de la Administraci&oacute;n General del Estado y de sus organismos p&uacute;blicos vinculados o dependientes, &iquest;cu&aacute;l de los siguientes NO es uno de los contenidos m&iacute;nimos a incluir en un certificado electr&oacute;nico de sede electr&oacute;nica?";
 choices[18]= new Array();
 choices[18][0] = "Nombre descriptivo de la sede electr&oacute;nica.";
 choices[18][1] = "N&uacute;mero de identificaci&oacute;n fiscal de la entidad suscriptora.";
 choices[18][2] = "Descripci&oacute;n del tipo de certificado, con la denominaci&oacute;n &laquo;sede electr&oacute;nica&raquo;.";
 choices[18][3] = "Direcci&oacute;n f&iacute;sica de la entidad suscriptora.";
 answers[18] = 3;
 units[18] = ['7'];
 blocks[18] = ['A2'];
 comments[18] = "Id Pregunta: 9985. Examen TIC A2 2014";
 preguntaids[18] = 9985


//  Id pregunta: 10401 Año de creación de pregunta: 2015
 questions[19]= "20)  &iquest;C&oacute;mo se denomina el plan de la Agenda Digital Espa&ntilde;ola referente al objetivo de Despliegue de redes r&aacute;pidas y ultrarr&aacute;pidas?";
 choices[19]= new Array();
 choices[19][0] = "Plan de Impulso del acceso r&aacute;pido y ultrarr&aacute;pido a Internet";
 choices[19][1] = "Plan de Telecomunicaciones Ultrarr&aacute;pidas";
 choices[19][2] = "Plan de Despliegue de infraestructuras de Red Espa&ntilde;ola";
 choices[19][3] = "Ninguna de las anteriores";
 answers[19] = 1;
 units[19] = ['19'];
 blocks[19] = ['A4'];
 comments[19] = "Id Pregunta: 10401. ";
 preguntaids[19] = 10401


//  Id pregunta: 2914 Año de creación de pregunta: 2002
 questions[20]= "21)  Java ME es:";
 choices[20]= new Array();
 choices[20][0] = "Una versi&oacute;n de Java que permite explotar las capacidades multimedia de los nuevos procesadores";
 choices[20][1] = "Una versi&oacute;n reducida de Java dise&ntilde;ada para ser ejecutada en dispositivos m&oacute;viles o embebidos.";
 choices[20][2] = "Una versi&oacute;n de Java que permite varias ejecuciones simult&aacute;neas y multiplexadas de un programa para ejecuci&oacute;n en procesadores en paralelo";
 choices[20][3] = "Una versi&oacute;n de Java optimizada para Macintosh";
 answers[20] = 1;
 units[20] = ['64', '65'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 2914. ";
 preguntaids[20] = 2914


//  Id pregunta: 7997 Año de creación de pregunta: 2011
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes partes del SOAP sirve para expresar instancias de tipos de datos definidos por la aplicaci&oacute;n?";
 choices[21]= new Array();
 choices[21][0] = "SOAP envelope.";
 choices[21][1] = "SOAP binding framework";
 choices[21][2] = "SOAP encoding rules.";
 choices[21][3] = "SOAP  RPC representation.";
 answers[21] = 2;
 units[21] = ['55'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 7997. Examen TIC A2 2010";
 preguntaids[21] = 7997


//  Id pregunta: 2048 Año de creación de pregunta: 2002
 questions[22]= "23)  &iquest;Qu&eacute; se considera m&aacute;s id&oacute;neo para un directivo?:";
 choices[22]= new Array();
 choices[22][0] = "Cuando se trate de un tema complejo, confiar en los expertos y decidir de acuerdo con sus informes";
 choices[22][1] = "Dedicar tiempos tasados a cada uno de los temas";
 choices[22][2] = "Tomar las decisiones lo m&aacute;s r&aacute;pidamente posible";
 choices[22][3] = "Conseguir que sus colaboradores le aprecien";
 answers[22] = 1;
 units[22] = ['29'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 2048. ";
 preguntaids[22] = 2048


//  Id pregunta: 9809 Año de creación de pregunta: 2015
 questions[23]= "24)  La creaci&oacute;n de una Estructura de Desglose del Trabajo (EDT) forma parte de:";
 choices[23]= new Array();
 choices[23][0] = "La gesti&oacute;n de tiempo del proyecto.";
 choices[23][1] = "La organizaci&oacute;n y definici&oacute;n del alcance total del proyecto.";
 choices[23][2] = "La gesti&oacute;n de riesgos del proyecto.";
 choices[23][3] = "La gesti&oacute;n de costes del proyecto.";
 answers[23] = 1;
 units[23] = ['31'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 9809. ";
 preguntaids[23] = 9809


//  Id pregunta: 6991 Año de creación de pregunta: 2010
 questions[24]= "25)  De acuerdo a la terminolog&iacute;a adoptada por el IEEE, la transformaci&oacute;n de una forma de representaci&oacute;n del sistema en otra distinta, pero del mismo nivel de abstracci&oacute;n, sin modificar el comportamiento externo del sistema, es la definici&oacute;n de:";
 choices[24]= new Array();
 choices[24][0] = "Ingenier&iacute;a hacia delante.";
 choices[24][1] = "Reestructuraci&oacute;n.";
 choices[24][2] = "Reingenier&iacute;a.";
 choices[24][3] = "Ingenier&iacute;a inversa.";
 answers[24] = 1;
 units[24] = ['97'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 6991. TIC-B 2009 bloque desarrollo";
 preguntaids[24] = 6991


//  Id pregunta: 8268 Año de creación de pregunta: 2011
 questions[25]= "26)  Un organismo est&aacute; evaluando la posibilidad de obligar al uso exclusivo de medios electr&oacute;nicos a las personas Jur&iacute;dicas, cuando se comuniquen con el mismo, &iquest;podr&iacute;a hacerlo?";
 choices[25]= new Array();
 choices[25][0] = "No, en ning&uacute;n caso, los medios electr&oacute;nicos siempre ser&aacute;n opcionales, aunque puedan ser preferentes";
 choices[25][1] = "Podr&aacute; hacerlo s&oacute;lo si, reglamentariamente, la Administraci&oacute;n a la que pertenezca el organismo ha establecido tal obligatoriedad";
 choices[25][2] = "Si, siempre para el caso de personas jur&iacute;dicas, eliminando la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, LAECSP. cualquier requisito normativo previo";
 choices[25][3] = "Podr&aacute; hacerlo contando siempre con el consentimiento del interesado, si, reglamentariamente, la Administraci&oacute;n a la que pertenezca el organismo ha establecido tal obligatoriedad.";
 answers[25] = 1;
 units[25] = ['7'];
 blocks[25] = ['A2'];
 comments[25] = "Id Pregunta: 8268. Examen TIC A2 2010 interna";
 preguntaids[25] = 8268


//  Id pregunta: 8815 Año de creación de pregunta: 2013
 questions[26]= "27)  En la tecnolog&iacute;a de Resilient Packet Ring, sobre los m&eacute;todos de protecci&oacute;n ante fallos, se puede afirmar:";
 choices[26]= new Array();
 choices[26][0] = "En Steering, ante la existencia de un evento de protecci&oacute;n, se comunica a todas las estaciones su situaci&oacute;n, de manera que eligen el sentido en que tienen que enviar la informaci&oacute;n.";
 choices[26][1] = "En Wrapping, ante la existencia de un evento de protecci&oacute;n, se comunica a todas las estaciones su situaci&oacute;n, de manera que eligen el sentido en que tienen que enviar la informaci&oacute;n.";
 choices[26][2] = "Se basan principalmente en c&oacute;digos de Hamming.";
 choices[26][3] = "El principal m&eacute;todo de correcci&oacute;n de fallos es FEC (Forward Error Correction).";
 answers[26] = 0;
 units[26] = ['112'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 8815. ";
 preguntaids[26] = 8815


//  Id pregunta: 3279 Año de creación de pregunta: 2004
 questions[27]= "28)  Seg&uacute;n la LSSI, el env&iacute;o de comunicaciones comerciales o publicitarias sin la autorizaci&oacute;n previa del destinatario constituye una infracci&oacute;n ...";
 choices[27]= new Array();
 choices[27][0] = "Leve";
 choices[27][1] = "Grave";
 choices[27][2] = "Muy grave";
 choices[27][3] = "No constituye infracci&oacute;n";
 answers[27] = 0;
 units[27] = ['19'];
 blocks[27] = ['A4'];
 comments[27] = "Id Pregunta: 3279. Ley 34/2002, art&iacute;culo 38";
 preguntaids[27] = 3279


//  Id pregunta: 6942 Año de creación de pregunta: 2010
 questions[28]= "29)  Indique, cu&aacute;l de los siguientes elementos no forma parte de una Intranet:";
 choices[28]= new Array();
 choices[28][0] = "Nomina del personal.";
 choices[28][1] = "Tabl&oacute;n de Anuncios.";
 choices[28][2] = "Motor de b&uacute;squeda de documentaci&oacute;n.";
 choices[28][3] = "Procesador de Textos.";
 answers[28] = 3;
 units[28] = ['113'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 6942. ";
 preguntaids[28] = 6942


//  Id pregunta: 10280 Año de creación de pregunta: 2015
 questions[29]= "30)  &iquest; Para que es usado el modelo RACI?";
 choices[29]= new Array();
 choices[29][0] = "Documentar los roles y las relaciones de las partes interesadas (stakeholders) en un proceso o actividad";
 choices[29][1] = "Definir requerimientos para un nuevo servicio o proceso";
 choices[29][2] = "Analizar el impacto en el negocio de una incidencia";
 choices[29][3] = "Crear un Cuadro de Mando que muestre el estado general de los servicios gestionados";
 answers[29] = 0;
 units[29] = ['101'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 10280. ";
 preguntaids[29] = 10280


//  Id pregunta: 3439 Año de creación de pregunta: 2006
 questions[30]= "31)  Las herramientas para la elaboraci&oacute;n de informes y listados, tanto en detalle como sobre informaci&oacute;n agregada, a partir de la informaci&oacute;n de los Datawarehouse y datamarts se conocen como herramientas de:";
 choices[30]= new Array();
 choices[30][0] = "OLAP.";
 choices[30][1] = "Query &amp; reporting.";
 choices[30][2] = "Cuadro de mando anal&iacute;tico.";
 choices[30][3] = "Datamining.";
 answers[30] = 1;
 units[30] = ['72'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 3439. ";
 preguntaids[30] = 3439


//  Id pregunta: 6541 Año de creación de pregunta: 2003
 questions[31]= "32)  Seg&uacute;n el RD 1720/2007, a partir de que nivel de seguridad deber&aacute; conservarse una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n, en un lugar diferente de aquel en que se encuentran los equipos inform&aacute;ticas que los tratan:";
 choices[31]= new Array();
 choices[31][0] = "nivel b&aacute;sico";
 choices[31][1] = "nivel medio";
 choices[31][2] = "nivel alto";
 choices[31][3] = "En ningun caso";
 answers[31] = 2;
 units[31] = ['35'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 6541. ";
 preguntaids[31] = 6541


//  Id pregunta: 7498 Año de creación de pregunta: 2010
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes funciones no es compatible con un lenguaje de programaci&oacute;n orientado a objetos?";
 choices[32]= new Array();
 choices[32][0] = "Encapsulaci&oacute;n.";
 choices[32][1] = "Herencia.";
 choices[32][2] = "Polimorfismo.";
 choices[32][3] = "Historicismo.";
 answers[32] = 3;
 units[32] = ['89'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 7498. Map 2005";
 preguntaids[32] = 7498


//  Id pregunta: 3902 Año de creación de pregunta: 2002
 questions[33]= "34)  El tipo de indizaci&oacute;n por descriptores consistente en utilizar t&eacute;cnicas de an&aacute;lisis morfol&oacute;gico y sem&aacute;ntico para captar la estructura del texto, se denomina:";
 choices[33]= new Array();
 choices[33][0] = "M&eacute;todo estad&iacute;stico";
 choices[33][1] = "M&eacute;todo por asignaci&oacute;n de los conceptos clave del documento";
 choices[33][2] = "M&eacute;todo sint&aacute;ctico";
 choices[33][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[33] = 2;
 units[33] = ['100'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 3902. ";
 preguntaids[33] = 3902


//  Id pregunta: 7878 Año de creación de pregunta: 2011
 questions[34]= "35)  En relaci&oacute;n con los perfiles de participantes, seg&uacute;n M&Eacute;TRICA versi&oacute;n 3, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[34]= new Array();
 choices[34][0] = "Son 5: Directivo, Jefe de Proyecto, Consultor, Analista y Programador.";
 choices[34][1] = "Son 7: Director, Jefe de Proyecto, Equipo de Proyecto y Responsables de Arquitectura, Seguridad, Sistemas y Operaciones.";
 choices[34][2] = "Son 8: Directivo, Jefe de Proyecto, Equipo de Proyecto, Usuarios expertos y Responsables de Arquitectura, Seguridad, Sistemas y Operaciones.";
 choices[34][3] = "Son 5: Directivo, Jefe de Proyecto, Equipo de Proyecto, Usuarios expertos y Responsable de Calidad.";
 answers[34] = 0;
 units[34] = ['91'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 7878. Examen TIC A1 2010";
 preguntaids[34] = 7878


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[35]= new Array();
 choices[35][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[35][1] = "Por Orden Ministerial.";
 choices[35][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[35][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[35] = 0;
 units[35] = ['1'];
 blocks[35] = ['A1'];
 comments[35] = "Id Pregunta: 75. Constituci&oacute;n de 1978";
 preguntaids[35] = 75


//  Id pregunta: 5861 Año de creación de pregunta: 2007
 questions[36]= "37)  Se&ntilde;ale la opci&oacute;n verdadera en relaci&oacute;n a las infraestructura de clave p&uacute;blica&hellip;";
 choices[36]= new Array();
 choices[36][0] = "Se ha de garantizar que ning&uacute;n usuario, salvo aquel para quien se ha generado una pareja de claves de un certificado, pueda jam&aacute;s llegar a disponer de ellas.";
 choices[36][1] = "La utilizaci&oacute;n de hardware criptogr&aacute;fico (HSM) tiene sentido en las Autoridades de Certificaci&oacute;n (CA) pero no as&iacute; en las Autoridades de Registro (RA)";
 choices[36][2] = "Es importante que la CA disponga de certificaci&oacute;n FIPS 140-2";
 choices[36][3] = "EMV es un tipo de certificado que no responde al est&aacute;ndar X.509";
 answers[36] = 3;
 units[36] = ['78'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 5861. ";
 preguntaids[36] = 5861


//  Id pregunta: 297 Año de creación de pregunta: 2016
 questions[37]= "38)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[37]= new Array();
 choices[37][0] = "A nivel de art&iacute;culo.";
 choices[37][1] = "A nivel de cap&iacute;tulo.";
 choices[37][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[37][3] = "A nivel de concepto.";
 answers[37] = 2;
 units[37] = ['11'];
 blocks[37] = ['A2'];
 comments[37] = "Id Pregunta: 297. Presupuestos generales";
 preguntaids[37] = 297


//  Id pregunta: 31 Año de creación de pregunta: 2016
 questions[38]= "39)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[38]= new Array();
 choices[38][0] = "Decretos Legislativos.";
 choices[38][1] = "Decretos-leyes.";
 choices[38][2] = "Leyes de bases.";
 choices[38][3] = "Reales Decretos del Consejo de Ministros.";
 answers[38] = 0;
 units[38] = ['1'];
 blocks[38] = ['A1'];
 comments[38] = "Id Pregunta: 31. Constituci&oacute;n de 1978";
 preguntaids[38] = 31


//  Id pregunta: 6720 Año de creación de pregunta: 2009
 questions[39]= "40)  El m&eacute;todo de Saaty &oacute; AHP:";
 choices[39]= new Array();
 choices[39][0] = "Es relativo a accesibilidad web";
 choices[39][1] = "Es relativo a la decisi&oacute;n multicriterio";
 choices[39][2] = "Es relativo a la comunicaci&oacute;n en la organizaci&oacute;n";
 choices[39][3] = "Se refiere al env&iacute;o de datos a un centro de respaldo";
 answers[39] = 1;
 units[39] = ['38'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 6720. MAP 2008 A1";
 preguntaids[39] = 6720


//  Id pregunta: 1597 Año de creación de pregunta: 2016
 questions[40]= "41)  En el &aacute;mbito del dise&ntilde;o estructurado, se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[40]= new Array();
 choices[40][0] = "El acoplamiento com&uacute;n constituye un nivel de acoplamiento mejor que el de datos.";
 choices[40][1] = "La cohesi&oacute;n procedimental presenta mayor cohesi&oacute;n que la secuencial.";
 choices[40][2] = "El acoplamiento com&uacute;n se presenta cuando un m&oacute;dulo hace referencia a la parte interior de otro.";
 choices[40][3] = "La cohesi&oacute;n funcional implica que todos los elementos que componen el m&oacute;dulo est&aacute;n relacionados en el desarrollo de una &uacute;nica funci&oacute;n.";
 answers[40] = 3;
 units[40] = ['89'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 1597. ";
 preguntaids[40] = 1597


//  Id pregunta: 1671 Año de creación de pregunta: 2016
 questions[41]= "42)  La Metodolog&iacute;a de An&aacute;lisis y Gesti&oacute;n de Riesgos de los Sistemas de Informaci&oacute;n, MAGERIT, establece unas dimensiones de valoraci&oacute;n de activos. Determine cu&aacute;l de las siguientes respuestas es correcta:";
 choices[41]= new Array();
 choices[41][0] = "Disponibilidad, integridad de los datos y confidencialidad de los datos.";
 choices[41][1] = "Disponibilidad, integridad de los datos, confidencialidad de los datos, eficacia y eficiencia.";
 choices[41][2] = "Eficacia, eficiencia, disponibilidad, integridad, confidencialidad, conformidad y fiabilidad.";
 choices[41][3] = "Disponibilidad, integridad de los datos, confidencialidad de los datos, autenticidad de los usuarios del servicio, autenticidad del origen de los datos, trazabilidad del servicio, trazabilidad de los datos.";
 answers[41] = 3;
 units[41] = ['45'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 1671. ";
 preguntaids[41] = 1671


//  Id pregunta: 2991 Año de creación de pregunta: 2002
 questions[42]= "43)  MPI:";
 choices[42]= new Array();
 choices[42][0] = "Es una librer&iacute;a para programaci&oacute;n por paso de mensajes, en entornos distribuidos";
 choices[42][1] = "Es una m&aacute;quina virtual que ejecuta los programas, independientemente del lenguaje con el que se escribieran";
 choices[42][2] = "Es una manera de llamar a todas las aplicaciones que hacen uso de SOAP sobre HTTP";
 choices[42][3] = "Todas son falsas";
 answers[42] = 0;
 units[42] = ['55'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 2991. ";
 preguntaids[42] = 2991


//  Id pregunta: 1062 Año de creación de pregunta: 2016
 questions[43]= "44)  El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica:";
 choices[43]= new Array();
 choices[43][0] = "Es el &oacute;rgano de cooperaci&oacute;n interministerial de la Administraci&oacute;n General del Estado en materia de administraci&oacute;n electr&oacute;nica.";
 choices[43][1] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea que canaliza la colaboraci&oacute;n entre la Administraci&oacute;n General del Estado y el resto de pa&iacute;ses de la Uni&oacute;n Europea en materia de administraci&oacute;n electr&oacute;nica.";
 choices[43][2] = "Es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Entidades Locales en materia de administraci&oacute;n electr&oacute;nica.";
 choices[43][3] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea encargado de unificar los criterios en materia de tratamiento y protecci&oacute;n de datos de car&aacute;cter personal en el &aacute;mbito de la Uni&oacute;n Europea.";
 answers[43] = 2;
 units[43] = ['7'];
 blocks[43] = ['A2'];
 comments[43] = "Id Pregunta: 1062. ";
 preguntaids[43] = 1062


//  Id pregunta: 3056 Año de creación de pregunta: 2002
 questions[44]= "45)  Si comparamos SSL y SET:";
 choices[44]= new Array();
 choices[44][0] = "SSL es un nivel de transporte (uso gen&eacute;rico) mientras que SET es una aplicaci&oacute;n (uso espec&iacute;fico)";
 choices[44][1] = "gozan actualmente de aproximadamente el mismo grado de implantaci&oacute;n en el mercado";
 choices[44][2] = "los datos de una aplicaci&oacute;n SET no pueden circular sobre canales SSL al ser incompatibles";
 choices[44][3] = "SET usa certificados mientras que SSL no los utiliza";
 answers[44] = 0;
 units[44] = ['10', '75'];
 blocks[44] = ['A2', 'B2'];
 comments[44] = "Id Pregunta: 3056. ";
 preguntaids[44] = 3056


//  Id pregunta: 10380 Año de creación de pregunta: 2015
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes supuestos permite al Minetur revocar los t&iacute;tulos habilitantes, de acuerdo con la LGT 9/2014?";
 choices[45]= new Array();
 choices[45][0] = "No se efect&uacute;a un uso eficaz y eficiente";
 choices[45][1] = "Utiliza frecuencias con fines distintos a los que motivaron su asignaci&oacute;n";
 choices[45][2] = "No pagar el Impuesto de Transmisiones Patrimoniales y Actos Jur&iacute;dicos";
 choices[45][3] = "Todos los anteriores";
 answers[45] = 3;
 units[45] = ['121'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 10380. ";
 preguntaids[45] = 10380


//  Id pregunta: 1043 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale la respuesta falsa en relacion a las transmisiones de datos ente Administraciones Publicas (art 155 ley 40/2015):";
 choices[46]= new Array();
 choices[46][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[46][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[46][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[46][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[46] = 2;
 units[46] = ['4', '7', '8', '9'];
 blocks[46] = ['A1', 'A2'];
 comments[46] = "Id Pregunta: 1043. Ley 40/2015";
 preguntaids[46] = 1043


//  Id pregunta: 3235 Año de creación de pregunta: 2003
 questions[47]= "48)  &iquest;Cu&aacute;ntos Gigabytes tiene un Terabyte?";
 choices[47]= new Array();
 choices[47][0] = "4";
 choices[47][1] = "256";
 choices[47][2] = "512";
 choices[47][3] = "1024";
 answers[47] = 3;
 units[47] = ['53'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 3235. ";
 preguntaids[47] = 3235


//  Id pregunta: 87 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[48]= new Array();
 choices[48][0] = "117.5";
 choices[48][1] = "117.1";
 choices[48][2] = "116";
 choices[48][3] = "15";
 answers[48] = 0;
 units[48] = ['1'];
 blocks[48] = ['A1'];
 comments[48] = "Id Pregunta: 87. Constituci&oacute;n de 1978";
 preguntaids[48] = 87


//  Id pregunta: 4685 Año de creación de pregunta: 2002
 questions[49]= "50)  El m&eacute;todo de Okumura-Hata se usa para:";
 choices[49]= new Array();
 choices[49][0] = "Resoluci&oacute;n de conflictos en negociaciones cuando los contendientes no desean verse en persona";
 choices[49][1] = "Calcular el coste de aplicaci&oacute;n de una u otra estrategia de adquisici&oacute;n de bienes y servicios inform&aacute;ticos y de telecomunicaci&oacute;n";
 choices[49][2] = "C&aacute;lculo de coberturas en enlaces radioel&eacute;ctricos";
 choices[49][3] = "No existe el m&eacute;todo de Okumura-Hata";
 answers[49] = 2;
 units[49] = ['117'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 4685. ";
 preguntaids[49] = 4685


//  Id pregunta: 1159 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes es considerada una prueba de caja negra?";
 choices[50]= new Array();
 choices[50][0] = "Prueba del camino b&aacute;sico.";
 choices[50][1] = "Prueba de bucles.";
 choices[50][2] = "Prueba de partici&oacute;n equivalente.";
 choices[50][3] = "Pruebas de flujo de datos.";
 answers[50] = 2;
 units[50] = ['92'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 1159. ";
 preguntaids[50] = 1159


//  Id pregunta: 209 Año de creación de pregunta: 2016
 questions[51]= "52)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[51]= new Array();
 choices[51][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[51][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[51][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[51][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[51] = 3;
 units[51] = ['7'];
 blocks[51] = ['A2'];
 comments[51] = "Id Pregunta: 209. Ley 39/2015";
 preguntaids[51] = 209


//  Id pregunta: 444 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[52]= new Array();
 choices[52][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[52][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[52][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[52][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[52] = 0;
 units[52] = ['19'];
 blocks[52] = ['A4'];
 comments[52] = "Id Pregunta: 444. Agenda Digital";
 preguntaids[52] = 444


//  Id pregunta: 3361 Año de creación de pregunta: 2006
 questions[53]= "54)  Ordene de menor a mayor seg&uacute;n el n&uacute;mero de usuarios y carga de trabajo esperado:";
 choices[53]= new Array();
 choices[53][0] = "PC, estaci&oacute;n de trabajo, miniordenador, mainframe";
 choices[53][1] = "Miniordenador, PC, estaci&oacute;n de trabajo, mainframe";
 choices[53][2] = "PC, miniordenador, estaci&oacute;n de trabajo, mainframe";
 choices[53][3] = "Miniordenador, PC, estaci&oacute;n de trabajo, mainframe";
 answers[53] = 0;
 units[53] = ['49'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 3361. ";
 preguntaids[53] = 3361


//  Id pregunta: 3624 Año de creación de pregunta: 2002
 questions[54]= "55)  En los sistemas de tiempo real, &iquest;qu&eacute; es m&aacute;s cr&iacute;tico?";
 choices[54]= new Array();
 choices[54][0] = "Fuertes restricciones del tiempo de respuesta.";
 choices[54][1] = "Informaci&oacute;n permanentemente actualizada.";
 choices[54][2] = "Alto rendimiento del sistema.";
 choices[54][3] = "La fiabilidad.";
 answers[54] = 0;
 units[54] = ['86'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 3624. ";
 preguntaids[54] = 3624


//  Id pregunta: 6214 Año de creación de pregunta: 2003
 questions[55]= "56)  Seg&uacute;n la Metodolog&iacute;a M&eacute;trica V3, &iquest;qu&eacute; interface tiene como finalidad principal la planificaci&oacute;n, el seguimiento y control de las actividades y de los recursos humanos y materiales que intervienen en el desarrollo de un Sistema de Informaci&oacute;n?";
 choices[55]= new Array();
 choices[55][0] = "Aseguramiento de la Calidad.";
 choices[55][1] = "Seguridad.";
 choices[55][2] = "Gesti&oacute;n de la Configuraci&oacute;n.";
 choices[55][3] = "Gesti&oacute;n de Proyectos.";
 answers[55] = 3;
 units[55] = ['91'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 6214. Examen TIC A Castilla La Mancha 2007";
 preguntaids[55] = 6214


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[56]= "57)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[56]= new Array();
 choices[56][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[56][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[56][2] = "Al Congreso de los Diputados.";
 choices[56][3] = "Al Gobierno.";
 answers[56] = 3;
 units[56] = ['1'];
 blocks[56] = ['A1'];
 comments[56] = "Id Pregunta: 64. Constituci&oacute;n de 1978";
 preguntaids[56] = 64


//  Id pregunta: 6260 Año de creación de pregunta: 2003
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[57]= new Array();
 choices[57][0] = "El fan-out de un m&oacute;dulo es usado como medida de complejidad.";
 choices[57][1] = "El fan-out es el n&uacute;mero de superiores inmediatos de un m&oacute;dulo.";
 choices[57][2] = "El fan-out de un m&oacute;dulo es una medida de reusabilidad.";
 choices[57][3] = "Todas las anteriores son ciertas.";
 answers[57] = 0;
 units[57] = ['89'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 6260. ";
 preguntaids[57] = 6260


//  Id pregunta: 216 Año de creación de pregunta: 2016
 questions[58]= "59)  Las Universidades p&uacute;blicas:";
 choices[58]= new Array();
 choices[58][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[58][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[58][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[58][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[58] = 1;
 units[58] = ['7'];
 blocks[58] = ['A2'];
 comments[58] = "Id Pregunta: 216. Ley 39/2015";
 preguntaids[58] = 216


//  Id pregunta: 1106 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n se establece en la Ley 15/1999, en su art&iacute;culo 31 acerca del censo promocional, indique cu&aacute;l es el plazo de vigencia del uso de cada lista del censo promocional tal que concluido dicho plazo la lista perder&aacute; su car&aacute;cter de fuente de acceso p&uacute;blico:";
 choices[59]= new Array();
 choices[59][0] = "6 meses.";
 choices[59][1] = "1 a&ntilde;o.";
 choices[59][2] = "2 a&ntilde;os.";
 choices[59][3] = "5 a&ntilde;os.";
 answers[59] = 1;
 units[59] = ['35'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 1106. ";
 preguntaids[59] = 1106


//  Id pregunta: 1977 Año de creación de pregunta: 2016
 questions[60]= "61)  En relaci&oacute;n a los procedimientos de adjudicaci&oacute;n previstos en la Ley de Contratos del Sector P&uacute;blico, en el procedimiento restringido:";
 choices[60]= new Array();
 choices[60][0] = "Solo podr&aacute;n presentar proposiciones aquellos empresarios que, a su solicitud y en atenci&oacute;n a su solvencia, sean seleccionados por el &oacute;rgano de contrataci&oacute;n, estando prohibida toda negociaci&oacute;n de los t&eacute;rminos del contrato con los solicitantes o candidatos.";
 choices[60][1] = "La adjudicaci&oacute;n recaer&aacute; en el licitador justificadamente elegido por el &oacute;rgano de contrataci&oacute;n, tras efectuar consultas con diversos candidatos y negociar las condiciones del contrato con uno o varios de ellos.";
 choices[60][2] = "Todo empresario interesado podr&aacute; presentar una proposici&oacute;n, quedando excluida toda negociaci&oacute;n de los t&eacute;rminos del contrato con los licitadores.";
 choices[60][3] = "Solo podr&aacute;n presentar proposiciones aquellos empresarios que, a su solicitud y en atenci&oacute;n a su solvencia, sean seleccionados por el &oacute;rgano de contrataci&oacute;n, pudi&eacute;ndose negociar las condiciones del contrato con los mismos.";
 answers[60] = 0;
 units[60] = ['10'];
 blocks[60] = ['A2'];
 comments[60] = "Id Pregunta: 1977. ";
 preguntaids[60] = 1977


//  Id pregunta: 10935 Año de creación de pregunta: 2015
 questions[61]= "62)  Cada Administraci&oacute;n P&uacute;blica determinar&aacute; las condiciones e instrumentos de creaci&oacute;n de las sedes electr&oacute;nicas con sujeci&oacute;n a los principios, &iquest;cu&aacute;l no es uno de ellos?:";
 choices[61]= new Array();
 choices[61][0] = "transparencia";
 choices[61][1] = "responsabilidad";
 choices[61][2] = "universalidad";
 choices[61][3] = "publicidad del procedimiento";
 answers[61] = 2;
 units[61] = ['7'];
 blocks[61] = ['A2'];
 comments[61] = "Id Pregunta: 10935. ";
 preguntaids[61] = 10935


//  Id pregunta: 1236 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Qu&eacute; tasa de transferencia tiene la codificaci&oacute;n de voz CS-ACELP (Conjugate-Structure Algebraic Code Excited Linear-Prediction) de la Recomendaci&oacute;n ITU G.729 (anexo A)?";
 choices[62]= new Array();
 choices[62][0] = "8 Kbit/s.";
 choices[62][1] = "16 Kbit/s.";
 choices[62][2] = "32 Kbit/s.";
 choices[62][3] = "64 Kbit/s.";
 answers[62] = 0;
 units[62] = ['110'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 1236. ";
 preguntaids[62] = 1236


//  Id pregunta: 603 Año de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n la Norma t&eacute;cnica de interoperabilidad de reutilizaci&oacute;n de recursos de informaci&oacute;n:";
 choices[63]= new Array();
 choices[63][0] = "Existir&aacute; una &uacute;nica forma de representaci&oacute;n asociada a cada recurso de informaci&oacute;n de forma que &eacute;ste sea identificado un&iacute;vocamente.";
 choices[63][1] = "Para la composici&oacute;n de los identificadores de recursos uniformes se usar&aacute; un esquema consistente, extensible y persistente.";
 choices[63][2] = "El identificador de recursos uniforme que identifica cada documento o recurso, proporcionar&aacute; informaci&oacute;n sobre la implementaci&oacute;n t&eacute;cnica de generaci&oacute;n del recurso representado.";
 choices[63][3] = "El identificador del recurso deber&aacute; ser, en la medida de lo posible, interpretable &uacute;nicamente de forma automatizada, evitando proporcionar informaci&oacute;n sobre el propio recurso, as&iacute; como su procedencia.";
 answers[63] = 1;
 units[63] = ['43'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 603. NTI";
 preguntaids[63] = 603


//  Id pregunta: 4656 Año de creación de pregunta: 2002
 questions[64]= "65)  Control de temperatura, ahorro de gasto de energ&iacute;a seg&uacute;n la hora del d&iacute;a, gesti&oacute;n de alarmas a distancia&hellip;, son disciplinas englobadas en la:";
 choices[64]= new Array();
 choices[64][0] = "Teleinform&aacute;tica.";
 choices[64][1] = "Automatizaci&oacute;n de procesos y rob&oacute;tica.";
 choices[64][2] = "Dom&oacute;tica.";
 choices[64][3] = "Telem&aacute;tica industrial.";
 answers[64] = 2;
 units[64] = ['112'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 4656. ";
 preguntaids[64] = 4656


//  Id pregunta: 4171 Año de creación de pregunta: 2006
 questions[65]= "66)  Una entidad est&aacute; en tercera forma normal (3FN) si:";
 choices[65]= new Array();
 choices[65][0] = "No tiene grupos repetitivos";
 choices[65][1] = "Si est&aacute; en 2FN y todos sus atributos no principales dependen directamente de la clave primaria";
 choices[65][2] = "Si est&aacute; en 2FN y no tiene grupos repetitivos";
 choices[65][3] = "Un atributo s&oacute;lo puede tomar un &uacute;nico valor de un dominio simple";
 answers[65] = 1;
 units[65] = ['61'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 4171. ";
 preguntaids[65] = 4171


//  Id pregunta: 5588 Año de creación de pregunta: 2007
 questions[66]= "67)  Indique la respuesta correcta en relaci&oacute;n con el Real Decreto 209/2003, de 21 de febrero, por el que se regula los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos:";
 choices[66]= new Array();
 choices[66][0] = "Los registros telem&aacute;ticos realizar&aacute;n y anotar&aacute;n salidas de escritos y comunicaciones durante las 24 horas de todos los d&iacute;as del a&ntilde;o.";
 choices[66][1] = "La presentaci&oacute;n obligatoria de solicitudes por medios telem&aacute;ticos requiere que as&iacute; lo disponga el Gobierno mediante Real Decreto.";
 choices[66][2] = "La creaci&oacute;n de registros telem&aacute;ticos se efect&uacute;a mediante orden ministerial, que deber&aacute; ser publicada, en todo caso, en el BOE.";
 choices[66][3] = "Los registros telem&aacute;ticos pueden realizar funciones de expedici&oacute;n de copias selladas o compulsadas de los documentos que se tramiten junto con la solicitud.";
 answers[66] = 2;
 units[66] = ['19'];
 blocks[66] = ['A4'];
 comments[66] = "Id Pregunta: 5588. ";
 preguntaids[66] = 5588


//  Id pregunta: 6091 Año de creación de pregunta: 2003
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes es un requisito de seguridad en una transacci&oacute;n electr&oacute;nica en la que intervenga un mediode pago?:";
 choices[67]= new Array();
 choices[67][0] = "Simultaneidad";
 choices[67][1] = "Interactividad";
 choices[67][2] = "No repudio";
 choices[67][3] = "Automatizaci&oacute;n";
 answers[67] = 2;
 units[67] = ['75'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 6091. Examen TIC A1 MAP 2007";
 preguntaids[67] = 6091


//  Id pregunta: 6123 Año de creación de pregunta: 2003
 questions[68]= "69)  Indique cu&aacute;l de los siguientes NO es un tipo de EJB (&quot;Enterprise Java Beans&quot;) en J2EE 1.4:";
 choices[68]= new Array();
 choices[68][0] = "Beans de entidad";
 choices[68][1] = "Beans de aplicaci&oacute;n";
 choices[68][2] = "Beans de sesi&oacute;n";
 choices[68][3] = "Beans orientados a mensajes";
 answers[68] = 1;
 units[68] = ['64'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 6123. Examen TIC A1 MAP 2007";
 preguntaids[68] = 6123


//  Id pregunta: 948 Año de creación de pregunta: 2016
 questions[69]= "70)  Cu&aacute;l de los siguientes aspectos NO se considera obligatorio en la Gu&iacute;a de Comunicaci&oacute;n Digital de la AGE.";
 choices[69]= new Array();
 choices[69][0] = "Se realizar&aacute;n a trav&eacute;s de sede electr&oacute;nica todas las actuaciones que requieran de autenticaci&oacute;n tanto de la Administraci&oacute;n como del ciudadano.";
 choices[69][1] = "Cuando se recojan datos personales mediante un formulario se deber&aacute; incluir una clausula informativa de acuerdo al Art&iacute;culo 5 de la LOPD.";
 choices[69][2] = "La p&aacute;gina de inicio deber&aacute; contar con informaci&oacute;n sobre accesibilidad del portal e iconos de cumplimiento de la norma WAI.";
 choices[69][3] = "Usar pictogramas e iconos que sean intuitivos.";
 answers[69] = 3;
 units[69] = ['125'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 948. Gu&iacute;a de Comunicaci&oacute;n Digital de la AGE";
 preguntaids[69] = 948


//  Id pregunta: 2322 Año de creación de pregunta: 2002
 questions[70]= "71)  Un plan de contingencia corresponde a:";
 choices[70]= new Array();
 choices[70][0] = "Evitar el riesgo de da&ntilde;os";
 choices[70][1] = "Minimizar los da&ntilde;os producidos";
 choices[70][2] = "Planificar las situaciones de emergencia";
 choices[70][3] = "Establecer medidas de recuperaci&oacute;n";
 answers[70] = 1;
 units[70] = ['45'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 2322. ";
 preguntaids[70] = 2322


//  Id pregunta: 2093 Año de creación de pregunta: 2009
 questions[71]= "72)  El Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos:";
 choices[71]= new Array();
 choices[71][0] = "Es nombrado por las Cortes Generales";
 choices[71][1] = "No puede ser cesado antes de la finalizaci&oacute;n de su mandato";
 choices[71][2] = "Ostenta el rango de Subsecretario";
 choices[71][3] = "Tiene una mandato de 6 a&ntilde;os";
 answers[71] = 2;
 units[71] = ['35'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 2093. ";
 preguntaids[71] = 2093


//  Id pregunta: 5734 Año de creación de pregunta: 2007
 questions[72]= "73)  &iquest;Qui&eacute;n NO es un participante en la actividad Elaboraci&oacute;n del Modelo de Datos del proceso de An&aacute;lisis de Sistemas de Informaci&oacute;n";
 choices[72]= new Array();
 choices[72][0] = "usuarios expertos";
 choices[72][1] = "analistas";
 choices[72][2] = "jefe de proyecto";
 choices[72][3] = "equipo de soporte t&eacute;cnico";
 answers[72] = 2;
 units[72] = ['91'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 5734. ";
 preguntaids[72] = 5734


//  Id pregunta: 10619 Año de creación de pregunta: 2015
 questions[73]= "74)  Seg&uacute;n la Ley 9/2014, los abonados tendr&aacute;n derecho al cambio de operador con conservaci&oacute;n de los n&uacute;meros:";
 choices[73]= new Array();
 choices[73][0] = "En el plazo m&iacute;nimo de un d&iacute;a laborable.";
 choices[73][1] = "En el plazo m&aacute;ximo de un d&iacute;a laborable.";
 choices[73][2] = "En el plazo de un d&iacute;a laborable.";
 choices[73][3] = "Ninguna de las anteriores.";
 answers[73] = 1;
 units[73] = ['121'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 10619. Articulo 47";
 preguntaids[73] = 10619


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[74]= new Array();
 choices[74][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[74][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[74][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[74][3] = "El Instituto de la Mujer de Extremadura.";
 answers[74] = 3;
 units[74] = ['14'];
 blocks[74] = ['A3'];
 comments[74] = "Id Pregunta: 360. Junta de Extremadura A1 2015";
 preguntaids[74] = 360


