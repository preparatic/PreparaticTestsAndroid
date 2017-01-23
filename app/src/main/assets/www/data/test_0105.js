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
//  Id pregunta: 8530 Año de creación de pregunta: 2011
 questions[0]= "1)  &iquest;Cual de los siguientes NO es un principio del dise&ntilde;o universal ?";
 choices[0]= new Array();
 choices[0][0] = "Escaso esfuerzo f&iacute;sico";
 choices[0][1] = "Simple e intuitivo.";
 choices[0][2] = "Informaci&oacute;n f&aacute;cil de percibir";
 choices[0][3] = "universalidad";
 answers[0] = 3;
 units[0] = ['42'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 8530. ";
 preguntaids[0] = 8530


//  Id pregunta: 119 Año de creación de pregunta: 2016
 questions[1]= "2)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[1]= new Array();
 choices[1][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[1][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[1][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[1][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[1] = 1;
 units[1] = ['5'];
 blocks[1] = ['A1'];
 comments[1] = "Id Pregunta: 119. Uni&oacute;n Europea";
 preguntaids[1] = 119


//  Id pregunta: 9752 Año de creación de pregunta: 2014
 questions[2]= "3)  Se&ntilde;ale la respuesta correcta en lo referente a la detecci&oacute;n y correcci&oacute;n de errores en telecomunicaciones";
 choices[2]= new Array();
 choices[2][0] = "CRC (C&oacute;digo de Redundancia C&iacute;clico) permite detectar y corregir errores en recepci&oacute;n";
 choices[2][1] = "Un c&oacute;digo Hamming de distancia 3 permite detectar 2 errores y corregir 1";
 choices[2][2] = "Reed-Solomon solamente permite detectar errores, no corregirlos";
 choices[2][3] = "Todas las anteriores son incorrectas";
 answers[2] = 1;
 units[2] = ['109'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 9752. ";
 preguntaids[2] = 9752


//  Id pregunta: 6966 Año de creación de pregunta: 2010
 questions[3]= "4)  Respecto a la arquitectura ANSI/SPARC, &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[3]= new Array();
 choices[3][0] = "Se definen tres niveles: interno, medio y externo";
 choices[3][1] = "Cada esquema externo describe la parte de la base de datos que interesa a un grupo de usuarios determinado y oculta a ese grupo el resto de la base de datos";
 choices[3][2] = "Es &uacute;til para explicar el concepto de dependencia de datos";
 choices[3][3] = "Existen dos tipos de independencia de datos: b&aacute;sica y completa";
 answers[3] = 1;
 units[3] = ['60'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 6966. TIC-B 2009 bloque desarrollo";
 preguntaids[3] = 6966


//  Id pregunta: 9233 Año de creación de pregunta: 2014
 questions[4]= "5)  Cual de los siguientes NO es un mecanismo de intercambio de informaci&oacute;n utilizable en una arquitectura distribuida";
 choices[4]= new Array();
 choices[4][0] = "mensajes XML sobre protocolo SMTP.";
 choices[4][1] = "mensajes SOAP sobre Servicios de Mensajes Java (JMS).";
 choices[4][2] = "OData.(Open Data Protocol)";
 choices[4][3] = "BPMN (Business Process Message Notation).";
 answers[4] = 3;
 units[4] = ['50'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 9233. Examen TIC A1 2013";
 preguntaids[4] = 9233


//  Id pregunta: 464 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[5]= new Array();
 choices[5][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[5][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[5][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[5][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[5] = 0;
 units[5] = ['19'];
 blocks[5] = ['A4'];
 comments[5] = "Id Pregunta: 464. Estrategia TIC";
 preguntaids[5] = 464


//  Id pregunta: 4873 Año de creación de pregunta: 2002
 questions[6]= "7)  La conocida RFC 793 se corresponde con:";
 choices[6]= new Array();
 choices[6][0] = "el protocolo TCP";
 choices[6][1] = "la arquitectura TCP/IP";
 choices[6][2] = "el protocolo IP";
 choices[6][3] = "el protocolo SMTP";
 answers[6] = 0;
 units[6] = ['105'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 4873. ";
 preguntaids[6] = 4873


//  Id pregunta: 5445 Año de creación de pregunta: 2007
 questions[7]= "8)  &iquest;C&oacute;mo se definir&iacute;a en el sistema de gesti&oacute;n de base de datos Oracle la restricci&oacute;n de integridad: &ldquo;Los trienios de un empleado no pueden disminuir&rdquo;?";
 choices[7]= new Array();
 choices[7][0] = "Mediante la sentencia &lsquo;ALTER TABLE&rsquo;.";
 choices[7][1] = "Mediante un trigger.";
 choices[7][2] = "Mediante una constraint de tipo CHECK.";
 choices[7][3] = "No se pueden definir restricciones de ese tipo.";
 answers[7] = 1;
 units[7] = ['61'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 5445. ";
 preguntaids[7] = 5445


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n la Ley General Presupuestaria, con car&aacute;cter excepcional podr&aacute;n generar cr&eacute;dito en el Presupuesto del ejercicio los ingresos realizados:";
 choices[8]= new Array();
 choices[8][0] = "Por reembolso de pr&eacute;stamos.";
 choices[8][1] = "Por la venta de bienes.";
 choices[8][2] = "En el &uacute;ltimo trimestre del ejercicio anterior.";
 choices[8][3] = "Por prestaci&oacute;n de servicios.";
 answers[8] = 2;
 units[8] = ['11'];
 blocks[8] = ['A2'];
 comments[8] = "Id Pregunta: 312. Presupuestos generales";
 preguntaids[8] = 312


//  Id pregunta: 3835 Año de creación de pregunta: 2002
 questions[9]= "10)  En un diagrama de flujo de datos:";
 choices[9]= new Array();
 choices[9][0] = "Una entidad externa puede aparecer en cualquier diagrama de cualquier nivel";
 choices[9][1] = "Una entidad externa nunca se relaciona mediante un flujo directamente con un almac&eacute;n de datos";
 choices[9][2] = "Se entiende por 'cuadre de flujos netos' el que un proceso tenga el mismo n&uacute;mero de flujos de entrada que de salida";
 choices[9][3] = "Son ciertas las respuestas 'a' y 'b'";
 answers[9] = 3;
 units[9] = ['85', '86'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 3835. ";
 preguntaids[9] = 3835


//  Id pregunta: 10303 Año de creación de pregunta: 2015
 questions[10]= "11)  Seleccione la respuesta correcta sobre los derechos morales irrenunciables de un autor de una obra:";
 choices[10]= new Array();
 choices[10][0] = "Derecho a decidir sobre la divulgaci&oacute;n o no de la obra";
 choices[10][1] = "Respeto a la integridad de la obra";
 choices[10][2] = "Derecho a exigir el reconocimiento de su condici&oacute;n de autor";
 choices[10][3] = "Todas las anteriores";
 answers[10] = 3;
 units[10] = ['41'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 10303. ";
 preguntaids[10] = 10303


//  Id pregunta: 5101 Año de creación de pregunta: 2004
 questions[11]= "12)  Qu&eacute; m&eacute;todo no se emplea para generar contenido din&aacute;mico en el servidor";
 choices[11]= new Array();
 choices[11][0] = "JavaScript";
 choices[11][1] = "CGI";
 choices[11][2] = "JSP";
 choices[11][3] = "ASP";
 answers[11] = 0;
 units[11] = ['62'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 5101. ";
 preguntaids[11] = 5101


//  Id pregunta: 3171 Año de creación de pregunta: 2002
 questions[12]= "13)  Un PDA:";
 choices[12]= new Array();
 choices[12][0] = "No permite la navegaci&oacute;n en Internet";
 choices[12][1] = "No puede conectarse a un PC";
 choices[12][2] = "Puede llevar instalado Windows";
 choices[12][3] = "Todas las anteriores son ciertas";
 answers[12] = 2;
 units[12] = ['52'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 3171. ";
 preguntaids[12] = 3171


//  Id pregunta: 6431 Año de creación de pregunta: 2003
 questions[13]= "14)  La fase del procedimiento de digitalizaci&oacute;n en la que se intenta mejorar el aspecto del documento digital utilizando algoritmos matem&aacute;ticos es";
 choices[13]= new Array();
 choices[13][0] = "Adquisici&oacute;n del documento digital o escaneado";
 choices[13][1] = "Procesado del documento digital";
 choices[13][2] = "Almacenamiento y gesti&oacute;n";
 choices[13][3] = "Presentaci&oacute;n del documento digital";
 answers[13] = 1;
 units[13] = ['80'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 6431. ";
 preguntaids[13] = 6431


//  Id pregunta: 4538 Año de creación de pregunta: 2002
 questions[14]= "15)  La anchura est&aacute;ndar de un rack es:";
 choices[14]= new Array();
 choices[14][0] = "11 pulgadas";
 choices[14][1] = "25 pulgadas";
 choices[14][2] = "19 pulgadas";
 choices[14][3] = "15 pulgadas";
 answers[14] = 2;
 units[14] = ['46'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 4538. ";
 preguntaids[14] = 4538


//  Id pregunta: 7491 Año de creación de pregunta: 2010
 questions[15]= "16)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3:";
 choices[15]= new Array();
 choices[15][0] = "La autenticaci&oacute;n simple conlleva el uso exclusivo de contrase&ntilde;as transmitidas en claro.";
 choices[15][1] = "La autenticaci&oacute;n robusta (strong) de un sentido conlleva siempre el empleo de funciones resumen (hash).";
 choices[15][2] = "La autenticaci&oacute;n robusta (strong) de dos sentidos comporta siempre el uso de credenciales obtenidas mediante t&eacute;cnicas criptogr&aacute;ficas.";
 choices[15][3] = "La autenticaci&oacute;n robusta (strong) de tres sentidos debe incorporar siempre sellos de tiempo.";
 answers[15] = 2;
 units[15] = ['77'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 7491. Map 2005";
 preguntaids[15] = 7491


//  Id pregunta: 1268 Año de creación de pregunta: 2016
 questions[16]= "17)  En M&eacute;trica v3 existe una interfaz de &quot;Aseguramiento de la Calidad&quot;. Indique la afirmaci&oacute;n correcta sobre dicho interfaz:";
 choices[16]= new Array();
 choices[16][0] = "Para cada uno de los procesos que se definen en el interfaz se establecen un conjunto de tareas que se desarrollan mediante la ejecuci&oacute;n de diversas actividades.";
 choices[16][1] = "El Grupo de Aseguramiento de la Calidad no participa en todos los procesos que se describen en el interfaz.";
 choices[16][2] = "La &quot;Constituci&oacute;n del equipo de aseguramiento de la calidad&quot; se realiza dentro del proceso de Estudio de Viabilidad del Sistema del interfaz.";
 choices[16][3] = "La aplicaci&oacute;n de dicho interfaz es de obligado cumplimiento para los organismos dependientes de la AGE, seg&uacute;n la Ley 28/2006, de 18 de julio, por la que se crea la Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de los Servicios.";
 answers[16] = 2;
 units[16] = ['91'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 1268. ";
 preguntaids[16] = 1268


//  Id pregunta: 6667 Año de creación de pregunta: 2009
 questions[17]= "18)  Se&ntilde;ale la afirmaci&oacute;n incorrecta respecto a la licencia EUPL.";
 choices[17]= new Array();
 choices[17][0] = "Con estte tipo de licencia las administraciones pueden ser proveedoras de software open source ente ellas, reutilizando lo que otros han hecho y mejor&aacute;ndolo.";
 choices[17][1] = "Es equivalente a las licencias GNU GPL y se pueden usar indistintamente, s&oacute;lo que EUPL aplica &uacute;nicamente en europa.";
 choices[17][2] = "Una de las novedades que introduce es la variedad de idiomas en los que est&aacute; disponible.";
 choices[17][3] = "Es una licencia compatible con otras licencias copyleft";
 answers[17] = 1;
 units[17] = ['41'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 6667. ";
 preguntaids[17] = 6667


//  Id pregunta: 10670 Año de creación de pregunta: 2015
 questions[18]= "19)  Seg&uacute;n la Ley 9/2014, respecto a los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n:";
 choices[18]= new Array();
 choices[18][0] = "Podr&aacute;n ser modificados por el Gobierno.";
 choices[18][1] = "No podr&aacute;n sufrir ninguna modificaci&oacute;n tras ser aprobados.";
 choices[18][2] = "El Ministerio de Energia, Turismo y Agenda Digital podr&aacute; modificarlo, previo informe de la CNMC.";
 choices[18][3] = "Podr&aacute;n ser modificados por la CNMC.";
 answers[18] = 2;
 units[18] = ['121'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 10670. ";
 preguntaids[18] = 10670


//  Id pregunta: 10134 Año de creación de pregunta: 2015
 questions[19]= "20)  Los switches FC (Fibre Channel) de las redes SAN (Storage Area Network) permiten en la actualidad el uso de &oacute;pticas SFP (Small Form-factor Pluggable) de:";
 choices[19]= new Array();
 choices[19][0] = "4 Gb/s, 8Gb/s, 16 Gb/s";
 choices[19][1] = "8 Gb/s, 16 Gb/s, 32 Gb/s";
 choices[19][2] = "16Gb/s, 32 Gb/s, 64Gb/s";
 choices[19][3] = "1Gbs, 10Gbs, 100Gbs";
 answers[19] = 0;
 units[19] = ['53'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 10134. Examen TIC A1 2014";
 preguntaids[19] = 10134


//  Id pregunta: 9886 Año de creación de pregunta: 2015
 questions[20]= "21)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece la obligatoriedad de relaci&oacute;n con las AAPP a trav&eacute;s de medios electr&oacute;nicos para:";
 choices[20]= new Array();
 choices[20][0] = "Personas f&iacute;sicas.";
 choices[20][1] = "Personas jur&iacute;dicas.";
 choices[20][2] = "Personas f&iacute;sicas y jur&iacute;dicas.";
 choices[20][3] = "Ninguna de las anteriores.";
 answers[20] = 1;
 units[20] = ['7', '19'];
 blocks[20] = ['A2', 'A4'];
 comments[20] = "Id Pregunta: 9886. ";
 preguntaids[20] = 9886


//  Id pregunta: 1981 Año de creación de pregunta: 2016
 questions[21]= "22)  En el procesamiento cooperativo de arquitecturas cliente-servidor, &iquest;Cu&aacute;l de los siguientes NO es propio de dicho procesamiento cooperativo?";
 choices[21]= new Array();
 choices[21][0] = "Multiple Server";
 choices[21][1] = "Cooperaci&oacute;n de procesos paralelos";
 choices[21][2] = "Cooperaci&oacute;n de base de datos";
 choices[21][3] = "Cooperaci&oacute;n de balanceadores";
 answers[21] = 3;
 units[21] = ['55'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 1981. ";
 preguntaids[21] = 1981


//  Id pregunta: 4398 Año de creación de pregunta: 2002
 questions[22]= "23)  &iquest;Para que me sirve una sonda de intrusi&oacute;n?:";
 choices[22]= new Array();
 choices[22][0] = "No existe ese concepto";
 choices[22][1] = "Para devolver el ataque";
 choices[22][2] = "Para detectar actividades anormales o sospechosas en la red";
 choices[22][3] = "Para penetrar en un sistema";
 answers[22] = 2;
 units[22] = ['119'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 4398. ";
 preguntaids[22] = 4398


//  Id pregunta: 909 Año de creación de pregunta: 2016
 questions[23]= "24)  El conjunto de protocolos est&aacute;ndares adoptados por el Internet Architecture Board (IAB), para proporcionar seguridad al correo electr&oacute;nico sobre Internet se denomina:";
 choices[23]= new Array();
 choices[23][0] = "PEM";
 choices[23][1] = "CMS";
 choices[23][2] = "PGP";
 choices[23][3] = "S/MIME";
 answers[23] = 0;
 units[23] = ['116'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 909. AGE A2 2015";
 preguntaids[23] = 909


//  Id pregunta: 3592 Año de creación de pregunta: 2002
 questions[24]= "25)  La medida del cumplimiento de los objetivos del organismo y de los requisitos de los usuarios de un sistema de informaci&oacute;n se conoce como:";
 choices[24]= new Array();
 choices[24][0] = "Eficiencia";
 choices[24][1] = "Correspondencia";
 choices[24][2] = "Eficacia";
 choices[24][3] = "Capacidad";
 answers[24] = 2;
 units[24] = ['83'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 3592. ";
 preguntaids[24] = 3592


//  Id pregunta: 3297 Año de creación de pregunta: 2004
 questions[25]= "26)  Seg&uacute;n la LSSI, el env&iacute;o de comunicaciones comerciales o publicitarias sin la autorizaci&oacute;n previa del destinatario constituye una infracci&oacute;n ...";
 choices[25]= new Array();
 choices[25][0] = "Leve";
 choices[25][1] = "Grave";
 choices[25][2] = "Muy grave";
 choices[25][3] = "No constituye infracci&oacute;n";
 answers[25] = 0;
 units[25] = ['19'];
 blocks[25] = ['A4'];
 comments[25] = "Id Pregunta: 3297. ";
 preguntaids[25] = 3297


//  Id pregunta: 6524 Año de creación de pregunta: 2003
 questions[26]= "27)  Una soluci&oacute;n RISC se caracteriza por:";
 choices[26]= new Array();
 choices[26][0] = "Pocos formatos de instrucci&oacute;n (longitud fija)";
 choices[26][1] = "Muchos modos de direccionamiento";
 choices[26][2] = "Dos instrucciones de almacenamiento (load/store)";
 choices[26][3] = "Tanto a) como c)";
 answers[26] = 3;
 units[26] = ['49'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 6524. ";
 preguntaids[26] = 6524


//  Id pregunta: 6780 Año de creación de pregunta: 2010
 questions[27]= "28)  Respecto al an&aacute;lisis y gesti&oacute;n de riesgos:";
 choices[27]= new Array();
 choices[27][0] = "En la gesti&oacute;n de riesgos, ning&uacute;n riesgo identificado puede declararse como asumible ya que la metodolog&iacute;a trata de evitar cualquier da&ntilde;o en nuestra organizaci&oacute;n";
 choices[27][1] = "Si tenemos implementadas salvaguardas en nuestro sistema, no tiene sentido disponer de planes de continuidad pues las amenazas no llegar&aacute;n a materializarse";
 choices[27][2] = "Un led que indique el mal funcionamiento de un disco de un RAID puede considerarse como una salvaguarda";
 choices[27][3] = "Cualquier amenaza afecta a todas las dimensiones de un activo";
 answers[27] = 2;
 units[27] = ['45'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 6780. Castilla La Mancha 2009";
 preguntaids[27] = 6780


//  Id pregunta: 8428 Año de creación de pregunta: 2011
 questions[28]= "29)  Las sedes judiciales electr&oacute;nicas se crear&aacute;n mediante disposici&oacute;n publicada en:";
 choices[28]= new Array();
 choices[28][0] = "El Bolet&iacute;n Oficial del Estado";
 choices[28][1] = "El Bolet&iacute;n Oficial de la Comunidad Aut&oacute;noma correspondiente";
 choices[28][2] = "En los dos anteriores conjuntamente en los casos indicados en la ley";
 choices[28][3] = "En uno de los dos";
 answers[28] = 3;
 units[28] = ['2'];
 blocks[28] = ['A1'];
 comments[28] = "Id Pregunta: 8428. ";
 preguntaids[28] = 8428


//  Id pregunta: 10761 Año de creación de pregunta: 2015
 questions[29]= "30)  &iquest;Cu&aacute;l es un protocolo estandar para la gesti&oacute;n de VLANs?";
 choices[29]= new Array();
 choices[29][0] = "VTP";
 choices[29][1] = "GVRP";
 choices[29][2] = "HSRP";
 choices[29][3] = "VRRP";
 answers[29] = 1;
 units[29] = ['110'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 10761. a) protocolo de CISCO. c) y d) protocolos de redundancia.";
 preguntaids[29] = 10761


//  Id pregunta: 4614 Año de creación de pregunta: 2002
 questions[30]= "31)  &iquest;Qu&eacute; funci&oacute;n principal realiza una PABX?:";
 choices[30]= new Array();
 choices[30][0] = "Conmutaci&oacute;n";
 choices[30][1] = "Recogida de informaci&oacute;n de gesti&oacute;n de red";
 choices[30][2] = "Visualizaci&oacute;n de informaci&oacute;n de gesti&oacute;n de red";
 choices[30][3] = "Consulta bajo demanda de la informaci&oacute;n de gesti&oacute;n de red";
 answers[30] = 0;
 units[30] = ['114'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 4614. ";
 preguntaids[30] = 4614


//  Id pregunta: 5052 Año de creación de pregunta: 2002
 questions[31]= "32)  Seg&uacute;n las RFCs 822 y 2822, sobre el formato de los mensajes de correo electr&oacute;nico, &eacute;stos se componen de:";
 choices[31]= new Array();
 choices[31][0] = "sobre, cabeceras y cuerpo";
 choices[31][1] = "cabeceras, cuerpo y cola";
 choices[31][2] = "sobre, cabeceras, cuerpo y cola";
 choices[31][3] = "cabeceras y cuerpo";
 answers[31] = 0;
 units[31] = ['116'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 5052. ";
 preguntaids[31] = 5052


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[32]= "33)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[32]= new Array();
 choices[32][0] = "Seis a&ntilde;os.";
 choices[32][1] = "Cinco a&ntilde;os.";
 choices[32][2] = "Cuatro a&ntilde;os.";
 choices[32][3] = "Ocho a&ntilde;os.";
 answers[32] = 1;
 units[32] = ['5'];
 blocks[32] = ['A1'];
 comments[32] = "Id Pregunta: 128. Uni&oacute;n Europea";
 preguntaids[32] = 128


//  Id pregunta: 9603 Año de creación de pregunta: 2014
 questions[33]= "34)  &iquest;Cu&aacute;l es la direcci&oacute;n MAC de difusi&oacute;n de red o broadcast que se utiliza en Ethernet (IEEE 802.3)?";
 choices[33]= new Array();
 choices[33][0] = "255,255,255,255";
 choices[33][1] = "FF::FF";
 choices[33][2] = "FF:FF:FF:FF:FF:FF:FF:FF";
 choices[33][3] = "FF:FF:FF:FF:FF:FF";
 answers[33] = 3;
 units[33] = ['112'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 9603. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[33] = 9603


//  Id pregunta: 7699 Año de creación de pregunta: 2010
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes no es un proceso de interfaz de M&eacute;trica v3?";
 choices[34]= new Array();
 choices[34][0] = "Aseguramiento de la calidad.";
 choices[34][1] = "Gesti&oacute;n de proyectos.";
 choices[34][2] = "Gesti&oacute;n de la configuraci&oacute;n.";
 choices[34][3] = "Dise&ntilde;o de Sistemas de Informaci&oacute;n.";
 answers[34] = 3;
 units[34] = ['91'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 7699. Map 2007";
 preguntaids[34] = 7699


//  Id pregunta: 6525 Año de creación de pregunta: 2003
 questions[35]= "36)  Una soluci&oacute;n CISC no se caracteriza por:";
 choices[35]= new Array();
 choices[35][0] = "Muchos modos de direccionamiento";
 choices[35][1] = "Unidad de control cableada";
 choices[35][2] = "N&uacute;mero de instrucciones muy elevado";
 choices[35][3] = "Varios formatos de instrucci&oacute;n (longitud variable)";
 answers[35] = 1;
 units[35] = ['49'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 6525. ";
 preguntaids[35] = 6525


//  Id pregunta: 247 Año de creación de pregunta: 2016
 questions[36]= "37)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[36]= new Array();
 choices[36][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[36][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[36][2] = "a y b son correctas";
 choices[36][3] = "a y b son incorrectas";
 answers[36] = 0;
 units[36] = ['7'];
 blocks[36] = ['A2'];
 comments[36] = "Id Pregunta: 247. Ley 39/2015";
 preguntaids[36] = 247


//  Id pregunta: 4712 Año de creación de pregunta: 2002
 questions[37]= "38)  Funciones como contabilidad, enrutamiento, control de flujo, control de congesti&oacute;n o direccionamiento pertenecen al:";
 choices[37]= new Array();
 choices[37][0] = "nivel de transporte";
 choices[37][1] = "nivel de enlace";
 choices[37][2] = "nivel de red";
 choices[37][3] = "son funciones presentes en varios niveles";
 answers[37] = 3;
 units[37] = ['109'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 4712. ";
 preguntaids[37] = 4712


//  Id pregunta: 9350 Año de creación de pregunta: 2014
 questions[38]= "39)  Se&ntilde;ale la afirmaci&oacute;n CORRECTA con respecto a un bean de sesi&oacute;n en JavaEE 7:";
 choices[38]= new Array();
 choices[38][0] = "Una aplicaci&oacute;n requerir&aacute; normalmente menos beans de sesi&oacute;n stateless que stateful para respaldar al mismo n&uacute;mero de clientes.";
 choices[38][1] = "Los stateful permiten compartir estado entre varios clientes.";
 choices[38][2] = "Un bean de sesi&oacute;n singleton es instanciado varias veces, seg&uacute;n necesidad, pero va a existir una copia (el singleton) todo el ciclo de vida de la aplicaci&oacute;n.";
 choices[38][3] = "Los stateful est&aacute;n respaldados por una base de datos y pueden implementar un servicio web.";
 answers[38] = 0;
 units[38] = ['64'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 9350. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[38] = 9350


//  Id pregunta: 976 Año de creación de pregunta: 2016
 questions[39]= "40)  Los &oacute;rganos administrativos podr&aacute;n dirigir las actividades de sus &oacute;rganos jer&aacute;rquicamente dependientes mediante:";
 choices[39]= new Array();
 choices[39][0] = "circulares";
 choices[39][1] = "reglamentos internos";
 choices[39][2] = "instrucciones y &oacute;rdenes de servicio";
 choices[39][3] = "disposiciones de car&aacute;cter general";
 answers[39] = 2;
 units[39] = ['4', '7', '8', '9'];
 blocks[39] = ['A1', 'A2'];
 comments[39] = "Id Pregunta: 976. Ley 40/2015";
 preguntaids[39] = 976


//  Id pregunta: 206 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[40]= new Array();
 choices[40][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios,la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[40][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[40][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[40][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[40] = 2;
 units[40] = ['7'];
 blocks[40] = ['A2'];
 comments[40] = "Id Pregunta: 206. Ley 39/2015";
 preguntaids[40] = 206


//  Id pregunta: 3764 Año de creación de pregunta: 2002
 questions[41]= "42)  Despu&eacute;s de analizar un problema para el dise&ntilde;o de un sistema de informaci&oacute;n, se debe conocer:";
 choices[41]= new Array();
 choices[41][0] = "La estructura que tendr&aacute; el sistema inform&aacute;tico";
 choices[41][1] = "La informaci&oacute;n de salida deseada, los tratamientos a realizar y el dise&ntilde;o que tendr&aacute;n las tablas";
 choices[41][2] = "Los datos de que se dispone y las salidas que se desean obtener";
 choices[41][3] = "La informaci&oacute;n de salida deseada, los datos de entrada y los tratamientos a realizar con los datos";
 answers[41] = 3;
 units[41] = ['84'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 3764. ";
 preguntaids[41] = 3764


//  Id pregunta: 9040 Año de creación de pregunta: 2014
 questions[42]= "43)  FAN-IN es una medida de:";
 choices[42]= new Array();
 choices[42][0] = "Complejidad";
 choices[42][1] = "Reutilizaci&oacute;n";
 choices[42][2] = "Mantenibilidad";
 choices[42][3] = "Ninguna de las anteriores";
 answers[42] = 1;
 units[42] = ['94'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 9040. N&uacute;mero de clases que hacen uso de la clase que estamos estudiando.";
 preguntaids[42] = 9040


//  Id pregunta: 9115 Año de creación de pregunta: 2014
 questions[43]= "44)  En un despliegue de una aplicaci&oacute;n Java EE sobre WebSphere, fijar el mode del class loader como PARENT_LAST tiene el efecto de que busca las clases a cargar primero:";
 choices[43]= new Array();
 choices[43][0] = "En el m&oacute;dulo web, si no las encuentra busca en la aplicaci&oacute;n, y si no las encuentra, en las librer&iacute;as del sistema.";
 choices[43][1] = "En las librer&iacute;as del sistema, si no las encuentra busca en la aplicaci&oacute;n, y si no las encuentra, en el m&oacute;dulo web.";
 choices[43][2] = "En la aplicaci&oacute;n, y si no las encuentra busca en el m&oacute;dulo web, y si no las encuentra, en las librer&iacute;as del sistema.";
 choices[43][3] = "En las librer&iacute;as del sistema, si no las encuentra busca en el m&oacute;dulo web, y si no las encuentra en la aplicaci&oacute;n.";
 answers[43] = 0;
 units[43] = ['64'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 9115. Examen TIC A2 2013";
 preguntaids[43] = 9115


//  Id pregunta: 383 Año de creación de pregunta: 2016
 questions[44]= "45)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[44]= new Array();
 choices[44][0] = "Medidas de igualdad.";
 choices[44][1] = "Objetivos de igualdad.";
 choices[44][2] = "Ambas son correctas.";
 choices[44][3] = "A y B son incorrectas.";
 answers[44] = 2;
 units[44] = ['14'];
 blocks[44] = ['A3'];
 comments[44] = "Id Pregunta: 383. Pol&iacute;ticas de igualdad";
 preguntaids[44] = 383


//  Id pregunta: 8894 Año de creación de pregunta: 2013
 questions[45]= "46)  En el modelo Entidad-Relaci&oacute;n extendido, si puede haber elementos de una superentidad que no est&eacute;n en ninguna de las subentidades hablamos de:";
 choices[45]= new Array();
 choices[45][0] = "Jerarqu&iacute;a con cobertura total.";
 choices[45][1] = "Jerarqu&iacute;a con cobertura parcial.";
 choices[45][2] = "Jerarqu&iacute;a disjunta.";
 choices[45][3] = "Jerarqu&iacute;a con solapamiento.";
 answers[45] = 1;
 units[45] = ['85'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 8894. Examen AGE TIC A1 2011";
 preguntaids[45] = 8894


//  Id pregunta: 5071 Año de creación de pregunta: 2002
 questions[46]= "47)  SIM equivale a:";
 choices[46]= new Array();
 choices[46][0] = "Software for IMSI of Mobiles";
 choices[46][1] = "Secure Identification of Mobile Subscriber";
 choices[46][2] = "Subscriber Identity Module";
 choices[46][3] = "Synchronous Internet Media";
 answers[46] = 2;
 units[46] = ['117'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 5071. ";
 preguntaids[46] = 5071


//  Id pregunta: 638 Año de creación de pregunta: 2016
 questions[47]= "48)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[47]= new Array();
 choices[47][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[47][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[47][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[47][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[47] = 2;
 units[47] = ['48'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 638. AGE A1 2015";
 preguntaids[47] = 638


//  Id pregunta: 9783 Año de creación de pregunta: 2015
 questions[48]= "49)  &iquest;A qu&eacute; corresponden las siglas STORK?";
 choices[48]= new Array();
 choices[48][0] = "Secure Transport Over bRoad toKens";
 choices[48][1] = "Security idenTity acrOss boRders linKed";
 choices[48][2] = "Safe idenTity fOr Roaming Knowledge";
 choices[48][3] = "Safe noTes stOring encRypted Keys";
 answers[48] = 1;
 units[48] = ['77', '78'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 9783. ";
 preguntaids[48] = 9783


//  Id pregunta: 113 Año de creación de pregunta: 2016
 questions[49]= "50)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[49]= new Array();
 choices[49][0] = "Tres a&ntilde;os.";
 choices[49][1] = "Dos a&ntilde;os y medio.";
 choices[49][2] = "Cinco a&ntilde;os.";
 choices[49][3] = "Seis a&ntilde;os.";
 answers[49] = 3;
 units[49] = ['5'];
 blocks[49] = ['A1'];
 comments[49] = "Id Pregunta: 113. Uni&oacute;n Europea";
 preguntaids[49] = 113


//  Id pregunta: 10935 Año de creación de pregunta: 2015
 questions[50]= "51)  Cada Administraci&oacute;n P&uacute;blica determinar&aacute; las condiciones e instrumentos de creaci&oacute;n de las sedes electr&oacute;nicas con sujeci&oacute;n a los principios, &iquest;cu&aacute;l no es uno de ellos?:";
 choices[50]= new Array();
 choices[50][0] = "transparencia";
 choices[50][1] = "responsabilidad";
 choices[50][2] = "universalidad";
 choices[50][3] = "publicidad del procedimiento";
 answers[50] = 2;
 units[50] = ['7'];
 blocks[50] = ['A2'];
 comments[50] = "Id Pregunta: 10935. ";
 preguntaids[50] = 10935


//  Id pregunta: 10167 Año de creación de pregunta: 2015
 questions[51]= "52)  Respecto al Registro de Funcionarios Habilitados, se&ntilde;ale la respuesta correcta:";
 choices[51]= new Array();
 choices[51][0] = "Podr&aacute;n ser habilitados los funcionarios de carrera en situaci&oacute;n de servicio activo e inscritos en el Registro Electr&oacute;nico de Apoderamientos.";
 choices[51][1] = "El registro permite la descarga, bajo petici&oacute;n, de un fichero que con todas las habilitaciones vigentes para los tr&aacute;mites y actuaciones por medios electr&oacute;nicos de los que el &oacute;rgano peticionario sea competente.";
 choices[51][2] = "Las habilitaciones inscritas en el Registro deber&aacute;n ser efectivas en el plazo m&aacute;ximo de 5 d&iacute;as h&aacute;biles.";
 choices[51][3] = "La habilitaci&oacute;n se otorgar&aacute; por tiempo m&aacute;ximo de 2 a&ntilde;os, siendo necesaria su renovaci&oacute;n por parte del Departamento competente.";
 answers[51] = 1;
 units[51] = ['43'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 10167. Examen TIC A1 2014";
 preguntaids[51] = 10167


//  Id pregunta: 231 Año de creación de pregunta: 2016
 questions[52]= "53)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[52]= new Array();
 choices[52][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[52][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[52][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[52][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[52] = 2;
 units[52] = ['7'];
 blocks[52] = ['A2'];
 comments[52] = "Id Pregunta: 231. Ley 39/2015";
 preguntaids[52] = 231


//  Id pregunta: 7756 Año de creación de pregunta: 2010
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes opciones NO es una vista de UML?";
 choices[53]= new Array();
 choices[53][0] = "Vista de Componentes.";
 choices[53][1] = "Vista de Despliegue.";
 choices[53][2] = "Vista de Casos de Uso.";
 choices[53][3] = "Vista de Flujo de Datos.";
 answers[53] = 3;
 units[53] = ['88'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 7756. ";
 preguntaids[53] = 7756


//  Id pregunta: 7767 Año de creación de pregunta: 2010
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes afirmaciones es FALSA , en relaci&oacute;n con la implantaci&oacute;n del modelo EFQM en una organizaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[54]= new Array();
 choices[54][0] = "Se utiliza, en general, para la autoevaluaci&oacute;n de la organizaci&oacute;n y la puesta en marcha de planes de mejora.";
 choices[54][1] = "Es una norma est&aacute;ndar desarrollada por la Comisi&oacute;n Europea.";
 choices[54][2] = "Se compone de nueve criterios reunidos en dos grandes grupos: los criterios Agentes Facilitadores y los criterios Resultados.";
 choices[54][3] = "La l&oacute;gica REDER se encuentra en el centro del modelo.";
 answers[54] = 1;
 units[54] = ['98'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 7767. ";
 preguntaids[54] = 7767


//  Id pregunta: 7136 Año de creación de pregunta: 2010
 questions[55]= "56)  &iquest;Qu&eacute; significa DRM?";
 choices[55]= new Array();
 choices[55][0] = "Digital Rights Management";
 choices[55][1] = "Direct Rights Management";
 choices[55][2] = "Direct Restriction Management";
 choices[55][3] = "Digital Restrictions Management";
 answers[55] = 0;
 units[55] = ['41'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 7136. ";
 preguntaids[55] = 7136


//  Id pregunta: 2865 Año de creación de pregunta: 2002
 questions[56]= "57)  En un sistema monoprocesador con mezcla de procesos de c&aacute;lculo puro y procesos intensivos en E/S, el uso de una politica de planificaci&oacute;n FIFO provoca:";
 choices[56]= new Array();
 choices[56][0] = "Un tiempo de ejecuci&oacute;n excelente para los procesos con E/S intensiva o interactiva";
 choices[56][1] = "Una gran ineficiencia, ya que los procesos de calculo intensivo se adue&ntilde;an de la CPU";
 choices[56][2] = "Una respuesta equilibrada, sin aprovechar el sistema en su totalidad";
 choices[56][3] = "Todas son falsas";
 answers[56] = 1;
 units[56] = ['56'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 2865. ";
 preguntaids[56] = 2865


//  Id pregunta: 1289 Año de creación de pregunta: 2016
 questions[57]= "58)  EI certificado de sede electr&oacute;nica, seg&uacute;n se establece en el Real Decreto 1671/2009:";
 choices[57]= new Array();
 choices[57][0] = "Identifica la sede y permite la firma electr&oacute;nica de documentos y tramites.";
 choices[57][1] = "Identifica la sede y permite a firma electr&oacute;nica de documentos.";
 choices[57][2] = "Identifica la sede, quedando excluida su aplicaci&oacute;n para la firma electr&oacute;nica de documentos y tramites,";
 choices[57][3] = "Identifica la sede y permite la firma electr&oacute;nica de tr&aacute;mites.";
 answers[57] = 2;
 units[57] = ['7'];
 blocks[57] = ['A2'];
 comments[57] = "Id Pregunta: 1289. ";
 preguntaids[57] = 1289


//  Id pregunta: 123 Año de creación de pregunta: 2016
 questions[58]= "59)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[58]= new Array();
 choices[58][0] = "Cinco a&ntilde;os.";
 choices[58][1] = "Cuatro a&ntilde;os.";
 choices[58][2] = "Tres a&ntilde;os.";
 choices[58][3] = "Seis meses.";
 answers[58] = 2;
 units[58] = ['5'];
 blocks[58] = ['A1'];
 comments[58] = "Id Pregunta: 123. Uni&oacute;n Europea";
 preguntaids[58] = 123


//  Id pregunta: 475 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes no es una prioridad propuesta por la Estrategia Europa 2020?";
 choices[59]= new Array();
 choices[59][0] = "Crecimiento sostenible";
 choices[59][1] = "Crecimiento inteligente";
 choices[59][2] = "Crecimiento digital";
 choices[59][3] = "Crecimiento integrador";
 answers[59] = 2;
 units[59] = ['19'];
 blocks[59] = ['A4'];
 comments[59] = "Id Pregunta: 475. Europa 2020";
 preguntaids[59] = 475


//  Id pregunta: 1045 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[60]= new Array();
 choices[60][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[60][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[60][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[60][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[60] = 0;
 units[60] = ['4', '7', '8', '9'];
 blocks[60] = ['A1', 'A2'];
 comments[60] = "Id Pregunta: 1045. Ley 40/2015";
 preguntaids[60] = 1045


//  Id pregunta: 8220 Año de creación de pregunta: 2011
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes es una caracter&iacute;stica propia del Proceso Unificado de Desarrollo de Software?";
 choices[61]= new Array();
 choices[61][0] = "Se basa en las Historias de Usuario.";
 choices[61][1] = "Proceso dirigido por casos de uso.";
 choices[61][2] = "Existe una continua refactorizaci&oacute;n del c&oacute;digo.";
 choices[61][3] = "No contempla la gesti&oacute;n del proyecto.";
 answers[61] = 1;
 units[61] = ['84'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 8220. Examen TIC A2 2010 interna";
 preguntaids[61] = 8220


//  Id pregunta: 8561 Año de creación de pregunta: 2013
 questions[62]= "63)  &iquest;Est&aacute;n protegidos los manuales de uso de un programa de ordenador?";
 choices[62]= new Array();
 choices[62][0] = "Los manuales de uso de un programa de ordeandor no est&aacute;n protegidos.";
 choices[62][1] = "Si, como obra literaria.";
 choices[62][2] = "Como obra literaria, pero s&oacute;lo si tienen suficiente calidad artistica.";
 choices[62][3] = "Si, como parte integrante del concepto &quot;programa de ordenador&quot;.";
 answers[62] = 3;
 units[62] = ['41'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 8561. ";
 preguntaids[62] = 8561


//  Id pregunta: 9925 Año de creación de pregunta: 2015
 questions[63]= "64)  &iquest;Qu&eacute; aspecto no se define en una pol&iacute;tica de firma seg&uacute;n la NTI de firma electr&oacute;nica?";
 choices[63]= new Array();
 choices[63][0] = "Los procesos de creaci&oacute;n de firmas electr&oacute;nicas.";
 choices[63][1] = "Los procesos de modificaci&oacute;n de firmas electr&oacute;nicas.";
 choices[63][2] = "Los procesos de validaci&oacute;n de firmas electr&oacute;nicas.";
 choices[63][3] = "Los procesos de conservaci&oacute;n de firmas electr&oacute;nicas.";
 answers[63] = 1;
 units[63] = ['44'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 9925. ";
 preguntaids[63] = 9925


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[64]= "65)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[64]= new Array();
 choices[64][0] = "formular solicitudes";
 choices[64][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[64][2] = "presentar declaraciones responsables o comunicaciones";
 choices[64][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[64] = 1;
 units[64] = ['7'];
 blocks[64] = ['A2'];
 comments[64] = "Id Pregunta: 228. Ley 39/2015";
 preguntaids[64] = 228


//  Id pregunta: 405 Año de creación de pregunta: 2016
 questions[65]= "66)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[65]= new Array();
 choices[65][0] = "Presencia equilibrada.";
 choices[65][1] = "Presencia paritaria.";
 choices[65][2] = "Presencia consensuada.";
 choices[65][3] = "presencia horizontal.";
 answers[65] = 0;
 units[65] = ['14'];
 blocks[65] = ['A3'];
 comments[65] = "Id Pregunta: 405. Pol&iacute;ticas de igualdad";
 preguntaids[65] = 405


//  Id pregunta: 6090 Año de creación de pregunta: 2003
 questions[66]= "67)  Seg&uacute;n la ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, &iquest;cu&aacute;l de las siguientes NO es causa de extinci&oacute;n dela vigencia de un certificado?:";
 choices[66]= new Array();
 choices[66][0] = "Expiraci&oacute;n del per&iacute;odo de validez que figura en el certificado";
 choices[66][1] = "Revocaci&oacute;n formulada por el firmante, la persona f&iacute;sica o jur&iacute;dica representada por &eacute;ste, un terceroautorizado o la persona f&iacute;sica solicitante de un certificado electr&oacute;nico de persona jur&iacute;dica";
 choices[66][2] = "Resoluci&oacute;n judicial o administrativa que lo ordene";
 choices[66][3] = "Transferencia de la gesti&oacute;n de los certificados electr&oacute;nicos expedidos por el prestador a otro prestador deservicios de certificaci&oacute;n, cuando el firmante haya dado su consentimiento expreso";
 answers[66] = 3;
 units[66] = ['19'];
 blocks[66] = ['A4'];
 comments[66] = "Id Pregunta: 6090. Examen TIC A1 MAP 2007";
 preguntaids[66] = 6090


//  Id pregunta: 10971 Año de creación de pregunta: 2015
 questions[67]= "68)  Seg&uacute;n la ley 19/2013 de transparencia y en lo referente al buen gobierno considera:";
 choices[67]= new Array();
 choices[67][0] = "Infracci&oacute;n disciplinaria muy grave, el acoso laboral.";
 choices[67][1] = "Infracci&oacute;n muy grave en materia de gesti&oacute;n econ&oacute;mico-presupuestaria, el incumplimiento de la obligaci&oacute;n de rendir cuentas regulada en el art&iacute;culo 137 de la Ley 47/2003, General Presupuestaria.";
 choices[67][2] = "Infracci&oacute;n grave, la intervenci&oacute;n en un procedimiento administrativo cuando se d&eacute; alguna de las causas de abstenci&oacute;n legalmente se&ntilde;aladas.";
 choices[67][3] = "Todas son verdaderas.";
 answers[67] = 3;
 units[67] = ['22'];
 blocks[67] = ['A4'];
 comments[67] = "Id Pregunta: 10971. ";
 preguntaids[67] = 10971


//  Id pregunta: 1993 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes NO es una topolog&iacute;a f&iacute;sica de las redes de almacenamiento SAN?";
 choices[68]= new Array();
 choices[68][0] = "Estrella.";
 choices[68][1] = "Anillo.";
 choices[68][2] = "Malla.";
 choices[68][3] = "Jer&aacute;rquica";
 answers[68] = 3;
 units[68] = ['53'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 1993. ";
 preguntaids[68] = 1993


//  Id pregunta: 2514 Año de creación de pregunta: 2004
 questions[69]= "70)  Las funciones de inspecci&oacute;n y control del cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, m&aacute;s conocida como LSSI, est&aacute;n atribuidas a:";
 choices[69]= new Array();
 choices[69][0] = "Las Fuerzas y Cuerpos de seguridad del Estado";
 choices[69][1] = "La Inspecci&oacute;n Financiera y Tributaria";
 choices[69][2] = "La Asociaci&oacute;n de Usuarios de Internet";
 choices[69][3] = "El Ministerio de Energia, Turismo y Agenda Digital.";
 answers[69] = 3;
 units[69] = ['19'];
 blocks[69] = ['A4'];
 comments[69] = "Id Pregunta: 2514. Examen TIC MAP B 2004";
 preguntaids[69] = 2514


//  Id pregunta: 7247 Año de creación de pregunta: 2010
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes opciones no es una tecnolog&iacute;a de administraci&oacute;n de seguridad centralizadas?";
 choices[70]= new Array();
 choices[70][0] = "TACACS+";
 choices[70][1] = "Radius";
 choices[70][2] = "Un grupo de trabajo peer-to-peer";
 choices[70][3] = "Diameter";
 answers[70] = 2;
 units[70] = ['120'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 7247. ";
 preguntaids[70] = 7247


//  Id pregunta: 6244 Año de creación de pregunta: 2003
 questions[71]= "72)  &iquest;Cu&aacute;les son los requisitos, seg&uacute;n Dorfman, que debe cumplir una Metodolog&iacute;a?";
 choices[71]= new Array();
 choices[71][0] = "Documentada, Repetitiva, Ense&ntilde;able, Basada en T&eacute;cnicas Probadas, Validada y Apropiada";
 choices[71][1] = "Documentada, Repetible, Ense&ntilde;able, Flexible, Validada y Apropiada";
 choices[71][2] = "Documentada, Repetible, Ense&ntilde;able, Basada en T&eacute;cnicas Probadas, Validada y Apropiada";
 choices[71][3] = "Documentada, Repetible, Extensa, Basada en T&eacute;cnicas Probadas, Validada y Apropiada";
 answers[71] = 2;
 units[71] = ['84'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 6244. ";
 preguntaids[71] = 6244


//  Id pregunta: 9679 Año de creación de pregunta: 2014
 questions[72]= "73)  Respecto a REST (Represantional State Transfer) indique la respuesta incorrecta:";
 choices[72]= new Array();
 choices[72][0] = "Es un est&aacute;ndar para desarrollar y proporcionar servicios en internet.";
 choices[72][1] = "La identificaci&oacute;n de recursos se realiza de forma &uacute;nica global mediante URIs (Uniform Resource Identifiers).";
 choices[72][2] = "Los recursos identificados con URIs son los objeto l&oacute;gicos a los que se mandan los mensajes.";
 choices[72][3] = "Emplea un protocolo cliente/servidor sin estado.";
 answers[72] = 0;
 units[72] = ['55'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 9679. ";
 preguntaids[72] = 9679


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[73]= "74)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[73]= new Array();
 choices[73][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[73][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[73][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[73][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[73] = 2;
 units[73] = ['12'];
 blocks[73] = ['A3'];
 comments[73] = "Id Pregunta: 334. Modelo econ&oacute;mico";
 preguntaids[73] = 334


//  Id pregunta: 3279 Año de creación de pregunta: 2004
 questions[74]= "75)  Seg&uacute;n la LSSI, el env&iacute;o de comunicaciones comerciales o publicitarias sin la autorizaci&oacute;n previa del destinatario constituye una infracci&oacute;n ...";
 choices[74]= new Array();
 choices[74][0] = "Leve";
 choices[74][1] = "Grave";
 choices[74][2] = "Muy grave";
 choices[74][3] = "No constituye infracci&oacute;n";
 answers[74] = 0;
 units[74] = ['19'];
 blocks[74] = ['A4'];
 comments[74] = "Id Pregunta: 3279. Ley 34/2002, art&iacute;culo 38";
 preguntaids[74] = 3279


