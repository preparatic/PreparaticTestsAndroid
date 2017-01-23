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
//  Id pregunta: 3777 Año de creación de pregunta: 2002
 questions[0]= "1)  El Diccionario de Datos es utilizado por:";
 choices[0]= new Array();
 choices[0][0] = "El administrador de la base de datos y los programadores";
 choices[0][1] = "Los analistas y los programadores";
 choices[0][2] = "Los usuarios finales de las aplicaciones";
 choices[0][3] = "Los usuarios remotos";
 answers[0] = 0;
 units[0] = ['60', '85', '86'];
 blocks[0] = ['B2', 'B3'];
 comments[0] = "Id Pregunta: 3777. ";
 preguntaids[0] = 3777


//  Id pregunta: 6065 Año de creación de pregunta: 2003
 questions[1]= "2)  Los certificados electr&oacute;nicos reconocidos incorporados al Documento Nacional de Identidad tendr&aacute;n, deacuerdo con el Real Decreto 1553/2005, de 23 de diciembre, por la que se regula la expedici&oacute;n del DNI y suscertificados de firma electr&oacute;nica, un periodo de vigencia de:";
 choices[1]= new Array();
 choices[1][0] = "5 a&ntilde;os.";
 choices[1][1] = "24 meses.";
 choices[1][2] = "3 a&ntilde;os.";
 choices[1][3] = "30 meses.";
 answers[1] = 0;
 units[1] = ['19'];
 blocks[1] = ['A4'];
 comments[1] = "Id Pregunta: 6065. TIC B 2007";
 preguntaids[1] = 6065


//  Id pregunta: 3744 Año de creación de pregunta: 2002
 questions[2]= "3)  Benchmarking es un concepto que indica:";
 choices[2]= new Array();
 choices[2][0] = "Un mecanismo para determinar reducciones de recursos";
 choices[2][1] = "Un sin&oacute;nimo de auditor&iacute;a";
 choices[2][2] = "Un proceso sistem&aacute;tico y continuo mediante el cual las organizaciones comparan su rendimiento con indicadores de referencia relevantes para comprender sus fortalezas y &aacute;reas de mejora";
 choices[2][3] = "Un programa inform&aacute;tico que al instalarse tiene como misi&oacute;n la optimizaci&oacute;n de la eficiencia de los sistemas a los que afecte su configuraci&oacute;n, tanto a nivel de espacio de disco como a nivel de rendimiento";
 answers[2] = 2;
 units[2] = ['98'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 3744. ";
 preguntaids[2] = 3744


//  Id pregunta: 7818 Año de creación de pregunta: 2010
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes apartados NO es uno de los componentes base de la arquitectura .NET?";
 choices[3]= new Array();
 choices[3][0] = "Windows Forms.";
 choices[3][1] = "ASP.NET.";
 choices[3][2] = "ADO.NET.";
 choices[3][3] = "ACY.NET.";
 answers[3] = 3;
 units[3] = ['63'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 7818. ";
 preguntaids[3] = 7818


//  Id pregunta: 5646 Año de creación de pregunta: 2007
 questions[4]= "5)  El protocolo SSL (Secure Sockets Layer):";
 choices[4]= new Array();
 choices[4][0] = "Es una capa de seguridad que opera siempre sobre el protocolo UDP.";
 choices[4][1] = "No garantiza la integridad de Ia informaci&oacute;n intercambiada entre el cliente y el servidor.";
 choices[4][2] = "Proporciona conexiones seguras solo en redes privadas y siempre que el cliente y el servidor pertenezcan a la misma subred IP.";
 choices[4][3] = "Proporciona conexiones seguras sobre una red insegura garantizando, entre otros aspectos, integridad de datos transmitidos, privacidad de Ia conexi&oacute;n y autentificaci&oacute;n del cliente y del servidor.";
 answers[4] = 3;
 units[4] = ['120'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 5646. SSL v3 se ha declarado oficialmente obsoleto en la RFC 7568 en favor de TLS 1.2, pero se mantiene la pregunta porque podr&iacute;a esperarse alguna pregunta sobre SSL.";
 preguntaids[4] = 5646


//  Id pregunta: 9084 Año de creación de pregunta: 2014
 questions[5]= "6)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica V3 Estudio de Viabilidad del Sistema, indicar en qu&eacute; actividad se realiza la tarea &ldquo;Estudio de la Inversi&oacute;n&rdquo;.";
 choices[5]= new Array();
 choices[5][0] = "Estudio de Alternativas de Soluci&oacute;n.";
 choices[5][1] = "Definici&oacute;n de Requisitos del Sistema.";
 choices[5][2] = "Estudio de la Situaci&oacute;n Actual.";
 choices[5][3] = "Valoraci&oacute;n de las Alternativas.";
 answers[5] = 3;
 units[5] = ['91'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 9084. Examen TIC-A1 2013";
 preguntaids[5] = 9084


//  Id pregunta: 259 Año de creación de pregunta: 2016
 questions[6]= "7)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[6]= new Array();
 choices[6][0] = "De un mes si el acto fuera presunto";
 choices[6][1] = "De un mes si el acto fuera expreso";
 choices[6][2] = "De un mes en cualquier caso";
 choices[6][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[6] = 1;
 units[6] = ['8'];
 blocks[6] = ['A2'];
 comments[6] = "Id Pregunta: 259. Ley 39/2015";
 preguntaids[6] = 259


//  Id pregunta: 444 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[7]= new Array();
 choices[7][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[7][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[7][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[7][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[7] = 0;
 units[7] = ['19'];
 blocks[7] = ['A4'];
 comments[7] = "Id Pregunta: 444. Agenda Digital";
 preguntaids[7] = 444


//  Id pregunta: 9680 Año de creación de pregunta: 2014
 questions[8]= "9)  Respecto a REST, indique qu&eacute; afirmaci&oacute;n es falsa:";
 choices[8]= new Array();
 choices[8][0] = "Permite una generalizaci&oacute;n de las interfaces entre recursos.";
 choices[8][1] = "Facilita el desarrollo de los clientes de los servicios.";
 choices[8][2] = "Su uso est&aacute; indicado para aplicaciones en las que la gesti&oacute;n del estado es compleja.";
 choices[8][3] = "La funcionalidad de las aplicaciones se representa mediante recursos.";
 answers[8] = 2;
 units[8] = ['55'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 9680. ";
 preguntaids[8] = 9680


//  Id pregunta: 2646 Año de creación de pregunta: 2002
 questions[9]= "10)  &iquest;C&uacute;al o c&uacute;ales de los siguientes sistemas de criptograf&iacute;a pueden encontrarse dentro de la criptograf&iacute;a sim&eacute;trica?:";
 choices[9]= new Array();
 choices[9][0] = "De bloques (block cipher),  de flujos (stream cipher) y de res&uacute;men (hash function)";
 choices[9][1] = "De flujos (stream cipher), de res&uacute;men (hash function) y de sigilo (stealth cipher)";
 choices[9][2] = "De bloques (block cipher),  de ocultamiento (conceal cipher) y de sellado de tiempo (time stamping cipher)";
 choices[9][3] = "Las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[9] = 0;
 units[9] = ['76'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 2646. ";
 preguntaids[9] = 2646


//  Id pregunta: 8248 Año de creación de pregunta: 2011
 questions[10]= "11)  &iquest;Cu&aacute;l es el protocolo que permite hacer tunneling en Fibre Channel?";
 choices[10]= new Array();
 choices[10][0] = "iSCSI";
 choices[10][1] = "sSCSI";
 choices[10][2] = "iFCP";
 choices[10][3] = "FCIP";
 answers[10] = 3;
 units[10] = ['53'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 8248. Examen UPM A2 2011";
 preguntaids[10] = 8248


//  Id pregunta: 4199 Año de creación de pregunta: 2006
 questions[11]= "12)  &iquest;C&oacute;mo se denomina el acoplamiento donde la comunicaci&oacute;n entre m&oacute;dulos es a trav&eacute;s de estructuras de datos?";
 choices[11]= new Array();
 choices[11][0] = "Acoplamiento de marca.";
 choices[11][1] = "Acoplamiento de control.";
 choices[11][2] = "Acoplamiento externo.";
 choices[11][3] = "Acoplamiento com&uacute;n.";
 answers[11] = 0;
 units[11] = ['89'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 4199. ";
 preguntaids[11] = 4199


//  Id pregunta: 6279 Año de creación de pregunta: 2007
 questions[12]= "13)  En qu&eacute; actividad de proceso An&aacute;lisis del Sistema de Informaci&oacute;n participan los &quot;Usuarios expertos&quot;";
 choices[12]= new Array();
 choices[12][0] = "Elaboraci&oacute;n del modelo de procesos";
 choices[12][1] = "Elaboraci&oacute;n del modelo de datos";
 choices[12][2] = "An&aacute;lisis de los casos de uso";
 choices[12][3] = "Definici&oacute;n del sistema";
 answers[12] = 1;
 units[12] = ['91'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 6279. ";
 preguntaids[12] = 6279


//  Id pregunta: 6575 Año de creación de pregunta: 2003
 questions[13]= "14)  Respecto a la validez de los certificados del DNI electr&oacute;nico, se&ntilde;ale la falsa:";
 choices[13]= new Array();
 choices[13][0] = "La p&eacute;rdida de validez del DNI implica su p&eacute;rdida de validez";
 choices[13][1] = "La renovaci&oacute;n implica la expedici&oacute;n de nuevos certificados";
 choices[13][2] = "La expedici&oacute;n de duplicados implica la expedici&oacute;n de nuevos certificados";
 choices[13][3] = "La caducidad de los certificados implica la renovaci&oacute;n del DNI";
 answers[13] = 3;
 units[13] = ['78'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 6575. ";
 preguntaids[13] = 6575


//  Id pregunta: 8047 Año de creación de pregunta: 2011
 questions[14]= "15)  Cu&aacute;l de las siguientes afirmaciones en referencia a la arquitectura de computadores CISC (Complex Instruction Set Computer) es FALSA?";
 choices[14]= new Array();
 choices[14][0] = "Se caracteriza por tener un juego de instrucciones muy amplio.";
 choices[14][1] = "Tiene muchos modos de direccionamiento";
 choices[14][2] = "Tiene varios formatos de instrucci&oacute;n (de longitud variable)";
 choices[14][3] = "Su unidad de control es cableada";
 answers[14] = 3;
 units[14] = ['51'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 8047. Examen TIC A2 2010";
 preguntaids[14] = 8047


//  Id pregunta: 5615 Año de creación de pregunta: 2007
 questions[15]= "16)  La utilidad de Microsoft para sincronizar los contenidos de un Pocket PC y una estaci&oacute;n Windows XP se denomina:";
 choices[15]= new Array();
 choices[15][0] = "MS PowerSync";
 choices[15][1] = "MS Syncronizer";
 choices[15][2] = "MS ActiveSync";
 choices[15][3] = "MS PocketSync";
 answers[15] = 2;
 units[15] = ['58'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 5615. ";
 preguntaids[15] = 5615


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[16]= "17)  El art&iacute;culo 102 del Real Decreto 1720/2007, por el que se determina la conservaci&oacute;n de una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, &iquest;a qu&eacute; nivel o niveles de medidas de seguridad es aplicable?";
 choices[16]= new Array();
 choices[16][0] = "B&aacute;sico";
 choices[16][1] = "Medio";
 choices[16][2] = "Alto";
 choices[16][3] = "A los niveles medio y alto";
 answers[16] = 2;
 units[16] = ['35'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 558. AGE A1 2015";
 preguntaids[16] = 558


//  Id pregunta: 4899 Año de creación de pregunta: 2002
 questions[17]= "18)  La norma IEEE 802.4 es la especificaci&oacute;n que define la redes:";
 choices[17]= new Array();
 choices[17][0] = "Ethernet";
 choices[17][1] = "Token bus";
 choices[17][2] = "Token ring";
 choices[17][3] = "FDDI";
 answers[17] = 1;
 units[17] = ['112'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 4899. ";
 preguntaids[17] = 4899


//  Id pregunta: 8288 Año de creación de pregunta: 2011
 questions[18]= "19)  Se ha comprado una c&aacute;mara IP que requiere m&aacute;s potencia de la habitual, m&aacute;s que con la normal IEEE 802.3.af. Esta c&aacute;mara funciona con la versi&oacute;n actualizada de IEEE 802.3af y requiere POE con mayor alimentaci&oacute;n. Como se llama esta norma si es que existe:";
 choices[18]= new Array();
 choices[18][0] = "IEEE 802.3at, PoE+ o PoE Plus.";
 choices[18][1] = "IEEE 802.3ag, o PoE extendido.";
 choices[18][2] = "PoE2.";
 choices[18][3] = "No existe una actualizaci&oacute;n del standard IEEE 802.3af";
 answers[18] = 0;
 units[18] = ['112'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 8288. Examen TIC A2 2010 interna";
 preguntaids[18] = 8288


//  Id pregunta: 7938 Año de creación de pregunta: 2011
 questions[19]= "20)  Dada la red 193.163.14.192/27, podemos decir que:";
 choices[19]= new Array();
 choices[19][0] = "La direcci&oacute;n de broadcast de dicha red es la 193.168.14.255.";
 choices[19][1] = "Admite hasta 30 hosts, sin contar las direcciones de identificaci&oacute;n de red y de broadcast.";
 choices[19][2] = "La direcci&oacute;n IP 193.168.14.225 pertenece a dicha red.";
 choices[19][3] = "Es una red con direccionamiento privado.";
 answers[19] = 1;
 units[19] = ['109'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 7938. Examen TIC A2 2010";
 preguntaids[19] = 7938


//  Id pregunta: 2413 Año de creación de pregunta: 2006
 questions[20]= "21)  El Plan de Contingencias:";
 choices[20]= new Array();
 choices[20][0] = "implica un an&aacute;lisis de los posibles riesgos";
 choices[20][1] = "debe incluir un Plan de Recuperaci&oacute;n de Desastres";
 choices[20][2] = "las dos primeras son ciertas";
 choices[20][3] = "las dos primeras son falsas";
 answers[20] = 2;
 units[20] = ['45'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 2413. ";
 preguntaids[20] = 2413


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[21]= "22)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[21]= new Array();
 choices[21][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[21][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[21][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[21][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[21] = 1;
 units[21] = ['7'];
 blocks[21] = ['A2'];
 comments[21] = "Id Pregunta: 232. Ley 39/2015";
 preguntaids[21] = 232


//  Id pregunta: 196 Año de creación de pregunta: 2016
 questions[22]= "23)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[22]= new Array();
 choices[22][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[22][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[22][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[22][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[22] = 3;
 units[22] = ['5'];
 blocks[22] = ['A1'];
 comments[22] = "Id Pregunta: 196. Uni&oacute;n Europea";
 preguntaids[22] = 196


//  Id pregunta: 1972 Año de creación de pregunta: 2016
 questions[23]= "24)  Podr&aacute;n ser medios de prueba en un procedimiento administrativo:";
 choices[23]= new Array();
 choices[23][0] = "Exclusivamente aquellos que se contengan en medios escritos y ordinarios.";
 choices[23][1] = "Los hachos relevantes para la decisi&oacute;n de un procedimiento podr&aacute;n acreditarse por cualquier medio de prueba admisible en derecho.";
 choices[23][2] = "Cualquier hecho acaecido en el procedimiento podr&aacute; acreditarse por un medio da prueba admisible en derecho.";
 choices[23][3] = "Todas las respuestas anteriores son incorrectas.";
 answers[23] = 1;
 units[23] = ['7'];
 blocks[23] = ['A2'];
 comments[23] = "Id Pregunta: 1972. ";
 preguntaids[23] = 1972


//  Id pregunta: 865 Año de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n ITILv3 , el objetivo principal del Dise&ntilde;o del Servicio es:";
 choices[24]= new Array();
 choices[24][0] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno de producci&oacute;n.";
 choices[24][1] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno seguro.";
 choices[24][2] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno seguro.";
 choices[24][3] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno de producci&oacute;n.";
 answers[24] = 3;
 units[24] = ['101'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 865. Junta de Extremadura A1 2015";
 preguntaids[24] = 865


//  Id pregunta: 125 Año de creación de pregunta: 2016
 questions[25]= "26)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[25]= new Array();
 choices[25][0] = "Cinco a&ntilde;os.";
 choices[25][1] = "Seis a&ntilde;os.";
 choices[25][2] = "Cuatro a&ntilde;os.";
 choices[25][3] = "Tres a&ntilde;os.";
 answers[25] = 0;
 units[25] = ['5'];
 blocks[25] = ['A1'];
 comments[25] = "Id Pregunta: 125. Uni&oacute;n Europea";
 preguntaids[25] = 125


//  Id pregunta: 4209 Año de creación de pregunta: 2006
 questions[26]= "27)  En M&Eacute;TRICA 3, la definici&oacute;n de la Formaci&oacute;n de los Usuarios Finales se lleva a cabo en:";
 choices[26]= new Array();
 choices[26][0] = "La Planificaci&oacute;n de Sistemas.";
 choices[26][1] = "La Construcci&oacute;n del Sistema de Informaci&oacute;n.";
 choices[26][2] = "El Dise&ntilde;o del Sistema de Informaci&oacute;n.";
 choices[26][3] = "La Implantaci&oacute;n y Aceptaci&oacute;n del Sistema.";
 answers[26] = 1;
 units[26] = ['91'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 4209. ";
 preguntaids[26] = 4209


//  Id pregunta: 9752 Año de creación de pregunta: 2014
 questions[27]= "28)  Se&ntilde;ale la respuesta correcta en lo referente a la detecci&oacute;n y correcci&oacute;n de errores en telecomunicaciones";
 choices[27]= new Array();
 choices[27][0] = "CRC (C&oacute;digo de Redundancia C&iacute;clico) permite detectar y corregir errores en recepci&oacute;n";
 choices[27][1] = "Un c&oacute;digo Hamming de distancia 3 permite detectar 2 errores y corregir 1";
 choices[27][2] = "Reed-Solomon solamente permite detectar errores, no corregirlos";
 choices[27][3] = "Todas las anteriores son incorrectas";
 answers[27] = 1;
 units[27] = ['109'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 9752. ";
 preguntaids[27] = 9752


//  Id pregunta: 8865 Año de creación de pregunta: 2013
 questions[28]= "29)  El modelo de estimaci&oacute;n de Putnam se caracteriza por:";
 choices[28]= new Array();
 choices[28][0] = "Ser un modelo te&oacute;rico";
 choices[28][1] = "Distribuir los esfuerzos de desarrollo seg&uacute;n la curva Rayleigh/Norden";
 choices[28][2] = "Incluir una constante tecnol&oacute;gica";
 choices[28][3] = "Todas las anteriores";
 answers[28] = 3;
 units[28] = ['94'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 8865. ";
 preguntaids[28] = 8865


//  Id pregunta: 1000 Año de creación de pregunta: 2016
 questions[29]= "30)  Los Secretarios generales t&eacute;cnicos:";
 choices[29]= new Array();
 choices[29][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[29][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[29][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[29][3] = "todas son correctas";
 answers[29] = 3;
 units[29] = ['4', '7', '8', '9'];
 blocks[29] = ['A1', 'A2'];
 comments[29] = "Id Pregunta: 1000. Ley 40/2015";
 preguntaids[29] = 1000


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[30]= "31)  Son servicios declarados compartidos:";
 choices[30]= new Array();
 choices[30][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[30][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[30][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[30][3] = "Todos los anteriores";
 answers[30] = 3;
 units[30] = ['19'];
 blocks[30] = ['A4'];
 comments[30] = "Id Pregunta: 466. Estrategia TIC";
 preguntaids[30] = 466


//  Id pregunta: 613 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[31]= new Array();
 choices[31][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[31][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[31][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[31][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[31] = 0;
 units[31] = ['45'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 613. Junta de Extremadura A1 2015";
 preguntaids[31] = 613


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[32]= "33)  Indique qu&eacute; es xAPI:";
 choices[32]= new Array();
 choices[32][0] = "Es un API que permite desarrollar plugins para los navegadores web.";
 choices[32][1] = "Es un API de JAVA que permite operar con ficheros XML.";
 choices[32][2] = "Es una especificaci&oacute;n t&eacute;cnica orientada al aprendizaje que permite recopilar informaci&oacute;n acerca de las experiencias que tienen las personas.";
 choices[32][3] = "Es una librer&iacute;a en JavaScript que permite realizar desarrollos con el conocido patr&oacute;n modelo-vista-controlador.";
 answers[32] = 2;
 units[32] = ['70'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 728. AGE A2 2015";
 preguntaids[32] = 728


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[33]= "34)  En los or&iacute;genes te&oacute;ricos del t&eacute;rmino gobernanza se encuentra:";
 choices[33]= new Array();
 choices[33][0] = "Peters";
 choices[33][1] = "Hollingsworth";
 choices[33][2] = "Manuel Castells";
 choices[33][3] = "Gaebler";
 answers[33] = 1;
 units[33] = ['20'];
 blocks[33] = ['A4'];
 comments[33] = "Id Pregunta: 490. Direcci&oacute;n p&uacute;blica";
 preguntaids[33] = 490


//  Id pregunta: 447 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[34]= new Array();
 choices[34][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[34][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[34][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[34][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[34] = 1;
 units[34] = ['19'];
 blocks[34] = ['A4'];
 comments[34] = "Id Pregunta: 447. Agenda Digital";
 preguntaids[34] = 447


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[35]= new Array();
 choices[35][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[35][1] = "Las CMADs";
 choices[35][2] = "Ambas son correctas.";
 choices[35][3] = "Ninguna es correcta";
 answers[35] = 2;
 units[35] = ['19'];
 blocks[35] = ['A4'];
 comments[35] = "Id Pregunta: 472. Estrategia TIC";
 preguntaids[35] = 472


//  Id pregunta: 8978 Año de creación de pregunta: 2013
 questions[36]= "37)  Seg&uacute;n la LSSI, entre los elementos que los prestadores de servicios de la Sociedad de la Informaci&oacute;n est&aacute;n obligados a indicar en su p&aacute;gina web NO se encuentra:";
 choices[36]= new Array();
 choices[36][0] = "El nombre o denominiaci&oacute;n social";
 choices[36][1] = "Un n&uacute;mero de tel&eacute;fono de contacto";
 choices[36][2] = "Los datos de su inscripci&oacute;n en el registro mercantil u otro registro p&uacute;blico";
 choices[36][3] = "Los c&oacute;digos de conducta a los que est&eacute; adheridos.";
 answers[36] = 1;
 units[36] = ['19'];
 blocks[36] = ['A4'];
 comments[36] = "Id Pregunta: 8978. Ley 34/2002, art&iacute;culo 10";
 preguntaids[36] = 8978


//  Id pregunta: 5887 Año de creación de pregunta: 2007
 questions[37]= "38)  La Ley de Impulso de la Sociedad de la Informaci&oacute;n introduce novedades en materia de";
 choices[37]= new Array();
 choices[37][0] = "Facturaci&oacute;n electr&oacute;nica";
 choices[37][1] = "Firma electr&oacute;nica";
 choices[37][2] = "Derechos de los usuarios en la Sociedad de la Informaci&oacute;n";
 choices[37][3] = "Todas las anteriores son ciertas";
 answers[37] = 3;
 units[37] = ['19'];
 blocks[37] = ['A4'];
 comments[37] = "Id Pregunta: 5887. Ley 56/2007";
 preguntaids[37] = 5887


//  Id pregunta: 9343 Año de creación de pregunta: 2014
 questions[38]= "39)  La instrucci&oacute;n que aborta la transacci&oacute;n en un SGBD y la hace terminar en forma no exitosa se denomina:";
 choices[38]= new Array();
 choices[38][0] = "Undo.";
 choices[38][1] = "Rollback.";
 choices[38][2] = "Two Phase Commit.";
 choices[38][3] = "Commit.";
 answers[38] = 1;
 units[38] = ['60'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 9343. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[38] = 9343


//  Id pregunta: 341 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qu&eacute; limites marca el &quot;pacto fiscal europeo&quot; de 2012 para sus Estados Miembros?";
 choices[39]= new Array();
 choices[39][0] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 40% del PIB";
 choices[39][1] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 choices[39][2] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 50% del PIB";
 choices[39][3] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 answers[39] = 3;
 units[39] = ['12'];
 blocks[39] = ['A3'];
 comments[39] = "Id Pregunta: 341. Modelo econ&oacute;mico";
 preguntaids[39] = 341


//  Id pregunta: 3367 Año de creación de pregunta: 2006
 questions[40]= "41)  En los sistemas operativos actuales, cada nodo-i dispone de los siguientes apuntadores o &iacute;ndices:";
 choices[40]= new Array();
 choices[40][0] = "12 apuntadores directos, un indirecto simple, un indirecto doble y un indirecto triple";
 choices[40][1] = "10 apuntadores directos, 1 indirecto simle y 1 indirecto doble";
 choices[40][2] = "20 apuntadores directos, uno simple y uno doble";
 choices[40][3] = "todas son falsas";
 answers[40] = 0;
 units[40] = ['57'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 3367. ";
 preguntaids[40] = 3367


//  Id pregunta: 3632 Año de creación de pregunta: 2002
 questions[41]= "42)  Una de las caracter&iacute;sticas especiales de las bases de datos documentales, con respecto a otros tipos de bases de datos es que:";
 choices[41]= new Array();
 choices[41][0] = "Est&aacute;n integradas por campos";
 choices[41][1] = "Son adecuadas para una informaci&oacute;n muy estructurada";
 choices[41][2] = "Est&aacute;n basadas en sistemas de archivo y ficheros inversos";
 choices[41][3] = "Se almacenan en tablas";
 answers[41] = 2;
 units[41] = ['100'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 3632. ";
 preguntaids[41] = 3632


//  Id pregunta: 4833 Año de creación de pregunta: 2002
 questions[42]= "43)  En redes MAN, protocolo DQDB, se cumple que:";
 choices[42]= new Array();
 choices[42][0] = "Las celdas tienen longitud de 53 bytes";
 choices[42][1] = "Es compatible con ATM";
 choices[42][2] = "Tienen una carga &uacute;til de 48 bytes";
 choices[42][3] = "Todas las anteriores respuestas son correctas";
 answers[42] = 3;
 units[42] = ['112'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 4833. ";
 preguntaids[42] = 4833


//  Id pregunta: 7194 Año de creación de pregunta: 2010
 questions[43]= "44)  El dispositivo que permite la interconexi&oacute;n de redes LAN y que trabaja en el nivel 2 del modelo OSI se denomina";
 choices[43]= new Array();
 choices[43][0] = "Repetidor";
 choices[43][1] = "Puente (bridge)";
 choices[43][2] = "Pasarela (gateway)";
 choices[43][3] = "Encaminador (router)";
 answers[43] = 1;
 units[43] = ['102'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 7194. Castilla La Mancha 2009";
 preguntaids[43] = 7194


//  Id pregunta: 9791 Año de creación de pregunta: 2015
 questions[44]= "45)  Los certificados de sede electr&oacute;nica incluir&aacute;n como contenido:";
 choices[44]= new Array();
 choices[44][0] = "Lo que disponga el Esquema Nacional de Seguridad.";
 choices[44][1] = "La denominaci&oacute;n de &ldquo;sede electr&oacute;nica&rdquo; y el n&uacute;mero de identificaci&oacute;n fiscal de la autoridad de certificaci&oacute;n.";
 choices[44][2] = "Su contenido no est&aacute; definido en ninguna norma.";
 choices[44][3] = "La denominaci&oacute;n del nombre del dominio y el nombre descriptivo de la sede.";
 answers[44] = 3;
 units[44] = ['7', '77'];
 blocks[44] = ['A2', 'B2'];
 comments[44] = "Id Pregunta: 9791. Art&iacute;culo 18, RD 1671/2009.";
 preguntaids[44] = 9791


//  Id pregunta: 4478 Año de creación de pregunta: 2002
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes afirmaciones corresponde a alguno de los principios en virtud de los cuales se han definido siete niveles en el Modelo de Referencia OSI?:";
 choices[45]= new Array();
 choices[45][0] = "Definir un n&uacute;mero de capas muy elevado, de modo que la tarea de integrar las capas no sea m&aacute;s dif&iacute;cil de lo estrictamente necesario";
 choices[45][1] = "Crear niveles separados para aquellas funciones que son manifiestamente diferentes por raz&oacute;n del proceso realizado y de la tecnolog&iacute;a involucrada";
 choices[45][2] = "Crear una nueva capa siempre que exista necesidad de fragmentar de nuevo los datos en PDUs de menor tama&ntilde;o para de este modo optimizar el uso de la red";
 choices[45][3] = "Crear una nueva capa siempre que exista necesidad de un nuevo tipo de aplicaci&oacute;n final entre sistemas";
 answers[45] = 1;
 units[45] = ['105'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 4478. ";
 preguntaids[45] = 4478


//  Id pregunta: 9374 Año de creación de pregunta: 2014
 questions[46]= "47)  Un archivo .PFX, de uso en certificados electr&oacute;nicos:";
 choices[46]= new Array();
 choices[46][0] = "Contiene la clave privada.";
 choices[46][1] = "Cumple la sintaxis PKCS #21.";
 choices[46][2] = "Est&aacute; codificado en un formato no binario.";
 choices[46][3] = "No se puede convertir a formato .PEM.";
 answers[46] = 0;
 units[46] = ['76'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 9374. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[46] = 9374


//  Id pregunta: 10323 Año de creación de pregunta: 2015
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes no es un servicio de Amazon de Cloud Computing?";
 choices[47]= new Array();
 choices[47][0] = "Amazon CloudWatch";
 choices[47][1] = "Amazon Elastic Compute Cloud";
 choices[47][2] = "Amazon AppFabric";
 choices[47][3] = "Amazon Simple Storage Service";
 answers[47] = 2;
 units[47] = ['52'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 10323. ";
 preguntaids[47] = 10323


//  Id pregunta: 2638 Año de creación de pregunta: 2002
 questions[48]= "49)  &iquest;Cu&aacute;l es el modelo de objeto de documento que utilizan los parsers o analizadores de XML?:";
 choices[48]= new Array();
 choices[48][0] = "DOKM";
 choices[48][1] = "DOM";
 choices[48][2] = "JDOC";
 choices[48][3] = "Todas son falsas";
 answers[48] = 1;
 units[48] = ['74'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 2638. ";
 preguntaids[48] = 2638


//  Id pregunta: 9388 Año de creación de pregunta: 2014
 questions[49]= "50)  SAFER (Secure And Fast Encryption Routine) es un algoritmo de cifrado:";
 choices[49]= new Array();
 choices[49][0] = "Sim&eacute;trico de bloques.";
 choices[49][1] = "Sim&eacute;trico de flujo.";
 choices[49][2] = "Asim&eacute;trico de factorizaci&oacute;n entera.";
 choices[49][3] = "Asim&eacute;trico de logaritmo discreto.";
 answers[49] = 0;
 units[49] = ['76'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 9388. Examen TIC A2  2013";
 preguntaids[49] = 9388


//  Id pregunta: 6857 Año de creación de pregunta: 2010
 questions[50]= "51)  &iquest;Cu&aacute;les de los siguientes est&aacute;ndares y protocolos relacionados con los Servicios Web son est&aacute;ndares W3C?";
 choices[50]= new Array();
 choices[50][0] = "XML, SOAP y WSDL";
 choices[50][1] = "XML, SOAP y UDDI";
 choices[50][2] = "XML, WSDL y UDDI";
 choices[50][3] = "SOAP, WSDL y UDDI";
 answers[50] = 0;
 units[50] = ['55', '74'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 6857. ";
 preguntaids[50] = 6857


//  Id pregunta: 755 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Qu&eacute; es el machine learning?";
 choices[51]= new Array();
 choices[51][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[51][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[51][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[51][3] = "Un paradigma en el desarrollo de mecanismos de control";
 answers[51] = 0;
 units[51] = ['73'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 755. Big Data y NoSQL";
 preguntaids[51] = 755


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[52]= "53)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[52]= new Array();
 choices[52][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[52][1] = "Programa de cartas de servicios";
 choices[52][2] = "Programa para la mejora continua de las organizaciones.";
 choices[52][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[52] = 2;
 units[52] = ['19'];
 blocks[52] = ['A4'];
 comments[52] = "Id Pregunta: 454. Direcci&oacute;n p&uacute;blica";
 preguntaids[52] = 454


//  Id pregunta: 6753 Año de creación de pregunta: 2009
 questions[53]= "54)  En relaci&oacute;n a la ITU (International Telecommunication Union), indique cu&aacute;l de los siguientes NO se corresponde con un sector estrat&eacute;gico de la misma:";
 choices[53]= new Array();
 choices[53][0] = "Radiocomunicaciones (ITU-R)";
 choices[53][1] = "Estandarizaci&oacute;n (ITU-T)";
 choices[53][2] = "Seguridad (ITU-S)";
 choices[53][3] = "Desarrollo (ITU-D)";
 answers[53] = 2;
 units[53] = ['48'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 6753. MAP 2008 A1";
 preguntaids[53] = 6753


//  Id pregunta: 4495 Año de creación de pregunta: 2002
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto de los protocolos de gesti&oacute;n de red SNMP y CMIP/CMIS no es cierta?:";
 choices[54]= new Array();
 choices[54][0] = "CMIS/CMIP soporta una arquitectura de objetos (entidades gestionables) m&aacute;s complejos que SNMP";
 choices[54][1] = "CMIS/CMIP contiene las especificaciones para el uso de protocolos SNMP sobre redes OSI mediante la norma CMOT";
 choices[54][2] = "Las aplicaciones de gesti&oacute;n de red basadas en protocolos SNMP est&aacute;n mucho m&aacute;s extendidas en el mercado que las basadas en CMIP";
 choices[54][3] = "CMIS/CMIP es desarrollo conjunto de CCITT e ISO, mientras que SNMP es producto de IETF";
 answers[54] = 1;
 units[54] = ['105'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 4495. ";
 preguntaids[54] = 4495


//  Id pregunta: 231 Año de creación de pregunta: 2016
 questions[55]= "56)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[55]= new Array();
 choices[55][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[55][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[55][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[55][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[55] = 2;
 units[55] = ['7'];
 blocks[55] = ['A2'];
 comments[55] = "Id Pregunta: 231. Ley 39/2015";
 preguntaids[55] = 231


//  Id pregunta: 10255 Año de creación de pregunta: 2015
 questions[56]= "57)  &iquest;Qu&eacute; tipo de restricciones en el modelo de Entidad-Relaci&oacute;n hacen referencia al formato de escritura del atributo?";
 choices[56]= new Array();
 choices[56][0] = "Restricciones sem&aacute;nticas";
 choices[56][1] = "Restricciones sint&aacute;cticas";
 choices[56][2] = "Restricciones estructurales";
 choices[56][3] = "Restricciones de usuario";
 answers[56] = 1;
 units[56] = ['85'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 10255. ";
 preguntaids[56] = 10255


//  Id pregunta: 9322 Año de creación de pregunta: 2014
 questions[57]= "58)  En relaci&oacute;n a im&aacute;genes est&aacute;ticas en portales web,";
 choices[57]= new Array();
 choices[57][0] = "El formato PNG, si bien est&aacute; libre de patentes, tiene mayor p&eacute;rdida de informaci&oacute;n que el formato JPEG.";
 choices[57][1] = "El formato GIF utiliza el algoritmo LZW de compresi&oacute;n patentado por CompuServe.";
 choices[57][2] = "JPEG tiene m&aacute;s p&eacute;rdida de informaci&oacute;n que GIF y PNG.";
 choices[57][3] = "El soporte de animaciones no es posible en PNG, utiliz&aacute;ndose NMG en su lugar.";
 answers[57] = 2;
 units[57] = ['80'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 9322. ";
 preguntaids[57] = 9322


//  Id pregunta: 1951 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes enunciados NO es un objetivo en la elaboraci&oacute;n del modelo conceptual de datos?";
 choices[58]= new Array();
 choices[58][0] = "Identificar y definir las entidades que quedan dentro del &aacute;mbito del sistema.";
 choices[58][1] = "Identificar y definir los m&eacute;todos asociados a cada una de las entidades del sistema.";
 choices[58][2] = "Identificar y definir los atributos de cada entidad y sus dominios correspondientes.";
 choices[58][3] = "Identificar y definir las relaciones existentes entre las entidades.";
 answers[58] = 1;
 units[58] = ['85'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 1951. ";
 preguntaids[58] = 1951


//  Id pregunta: 1500 Año de creación de pregunta: 2016
 questions[59]= "60)  La Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de los Servicios, ha definido un marco para impulsar la mejora continua de los servicios p&uacute;blicos en la Administraci&oacute;n General del Estado constituido por seis programas. &iquest;Cu&aacute;l de los siguientes es uno de esos programas?";
 choices[59]= new Array();
 choices[59][0] = "Programa de an&aacute;lisis estructural del organismo.";
 choices[59][1] = "Programa de evaluaci&oacute;n de los costes del servicio p&uacute;blico.";
 choices[59][2] = "Programa del EFQM.";
 choices[59][3] = "Programa de Reconocimiento (Certificaci&oacute;n de Organizaciones y Premios).";
 answers[59] = 3;
 units[59] = ['19'];
 blocks[59] = ['A4'];
 comments[59] = "Id Pregunta: 1500. ";
 preguntaids[59] = 1500


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[60]= "61)  En el &aacute;mbito de las relaciones internacionales de la Comunidad Europea con terceros pa&iacute;ses:";
 choices[60]= new Array();
 choices[60][0] = "El Consejo negocia los tratados internacionales y la Comisi&oacute;n los aprueba.";
 choices[60][1] = "La Comisi&oacute;n negocia los tratados internacionales y el Parlamento Europeo los sanciona.";
 choices[60][2] = "La Comisi&oacute;n negocia los tratados internacionales y el Consejo los aprueba.";
 choices[60][3] = "Un n&uacute;mero indeterminado de diputados europeos negocia ios tratados internacionales y la Comisi&oacute;n los aprueba.";
 answers[60] = 2;
 units[60] = ['5'];
 blocks[60] = ['A1'];
 comments[60] = "Id Pregunta: 160. Uni&oacute;n Europea";
 preguntaids[60] = 160


//  Id pregunta: 459 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[61]= new Array();
 choices[61][0] = "El 5 de Octubre de 2015";
 choices[61][1] = "El 15 de Octubre de 2015";
 choices[61][2] = "El 15 de Septiembre de 2015";
 choices[61][3] = "El 2 de Octubre de 2015";
 answers[61] = 2;
 units[61] = ['19'];
 blocks[61] = ['A4'];
 comments[61] = "Id Pregunta: 459. Estrategia TIC";
 preguntaids[61] = 459


//  Id pregunta: 29 Año de creación de pregunta: 2016
 questions[62]= "63)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[62]= new Array();
 choices[62][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[62][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[62][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[62][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[62] = 0;
 units[62] = ['1'];
 blocks[62] = ['A1'];
 comments[62] = "Id Pregunta: 29. Constituci&oacute;n de 1978";
 preguntaids[62] = 29


//  Id pregunta: 6151 Año de creación de pregunta: 2003
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes sentencias de SQL es una sentencia DDL?:";
 choices[63]= new Array();
 choices[63][0] = "UPDATE TABLE";
 choices[63][1] = "ALTER TABLE";
 choices[63][2] = "REVOKE ALL";
 choices[63][3] = "ROLLBACK";
 answers[63] = 1;
 units[63] = ['61'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 6151. Examen TIC A1 MAP 2007";
 preguntaids[63] = 6151


//  Id pregunta: 521 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes NO es uno de los principios de la Ley de Garant&iacute;a de la Unidad de Mercado?";
 choices[64]= new Array();
 choices[64][0] = "No discriminaci&oacute;n";
 choices[64][1] = "Cooperaci&oacute;n";
 choices[64][2] = "Colaboraci&oacute;n";
 choices[64][3] = "Todos los anteriores son principios de la Ley de Garant&iacute;a de la Unidad de Mercado";
 answers[64] = 2;
 units[64] = ['23'];
 blocks[64] = ['A4'];
 comments[64] = "Id Pregunta: 521. Direcci&oacute;n p&uacute;blica";
 preguntaids[64] = 521


//  Id pregunta: 2164 Año de creación de pregunta: 2002
 questions[65]= "66)  En la planificaci&oacute;n de un proyecto no debemos realizar las siguientes tareas:";
 choices[65]= new Array();
 choices[65][0] = "Definici&oacute;n de los requerimientos";
 choices[65][1] = "Selecci&oacute;n de una metodolog&iacute;a de gesti&oacute;n de proyecto";
 choices[65][2] = "Reclutamiento de personal y asignaci&oacute;n de tareas";
 choices[65][3] = "An&aacute;lisis de riesgos y revisi&oacute;n inicial de seguridad";
 answers[65] = 2;
 units[65] = ['33'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 2164. ";
 preguntaids[65] = 2164


//  Id pregunta: 4168 Año de creación de pregunta: 2006
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes elementos no es propio de un DFD (Diagrama de Flujo de Datos)?";
 choices[66]= new Array();
 choices[66][0] = "Entidades externas al sistema";
 choices[66][1] = "Bucles";
 choices[66][2] = "Almac&eacute;n de datos";
 choices[66][3] = "Procesos";
 answers[66] = 1;
 units[66] = ['85', '86'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 4168. ";
 preguntaids[66] = 4168


//  Id pregunta: 6270 Año de creación de pregunta: 2003
 questions[67]= "68)  Los costes de calidad se pueden dividir en costes asociados con la prevenci&oacute;n, la evaluaci&oacute;n y los fallos. Entre los costes de prevenci&oacute;n se incluyen:";
 choices[67]= new Array();
 choices[67][0] = "Planificaci&oacute;n de la calidad";
 choices[67][1] = "Calibrado y mantenimiento del equipo";
 choices[67][2] = "Reparaci&oacute;n";
 choices[67][3] = "An&aacute;lisis de las modalidades de fallos";
 answers[67] = 0;
 units[67] = ['92'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 6270. ";
 preguntaids[67] = 6270


//  Id pregunta: 3699 Año de creación de pregunta: 2002
 questions[68]= "69)  La diferencia entre t&eacute;cnicas y pr&aacute;cticas en METRICA 3 es:";
 choices[68]= new Array();
 choices[68][0] = "Las pr&aacute;cticas se apoyan en est&aacute;ndares, mientras que las t&eacute;cnicas no";
 choices[68][1] = "Las t&eacute;cnicas son el conjunto de heur&iacute;sticas y procedimientos que se apoyan en est&aacute;ndares, mientras que las pr&aacute;cticas no precisan cumplir criterios establecidos";
 choices[68][2] = "Las t&eacute;cnicas son el conjunto de heur&iacute;sticas y procedimientos que se apoyan en la experiencia, mientras que las pr&aacute;cticas pueden ser propias";
 choices[68][3] = "Tanto las t&eacute;cnicas como las pr&aacute;cticas son heur&iacute;sticas y no son esclusivas de METRICA 3";
 answers[68] = 1;
 units[68] = ['91'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 3699. ";
 preguntaids[68] = 3699


//  Id pregunta: 10368 Año de creación de pregunta: 2015
 questions[69]= "70)  &iquest;Cu&aacute;l es el ciclo de vida correcto de la informaci&oacute;n?";
 choices[69]= new Array();
 choices[69][0] = "Generaci&oacute;n, Almacenamiento, Acceso, Disposici&oacute;n, Uso y Conservaci&oacute;n o Destrucci&oacute;n";
 choices[69][1] = "Generaci&oacute;n, Acceso, Almacenamiento, Uso, Disposici&oacute;n y Conservaci&oacute;n o Destrucci&oacute;n";
 choices[69][2] = "Generaci&oacute;n, Acceso, Disposici&oacute;n, Almacenamiento, Uso y Conservaci&oacute;n o Destrucci&oacute;n";
 choices[69][3] = "Generaci&oacute;n, Almacenamiento, Acceso, Uso, Disposici&oacute;n, y Conservaci&oacute;n o Destrucci&oacute;n";
 answers[69] = 0;
 units[69] = ['100'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 10368. ";
 preguntaids[69] = 10368


//  Id pregunta: 10310 Año de creación de pregunta: 2015
 questions[70]= "71)  &iquest;Cu&aacute;l no es un requisito para integrarse en la plataforma de intermediaci&oacute;n?";
 choices[70]= new Array();
 choices[70][0] = "Estar conectado a Red SARA.";
 choices[70][1] = "Disponer de certificados X509 de sello de &oacute;rgano.";
 choices[70][2] = "Disponer de un Servicio Web integrado para la gesti&oacute;n automatizada del tr&aacute;mite";
 choices[70][3] = "Tener un convenio firmado para el intercambio bilateral de datos.";
 answers[70] = 1;
 units[70] = ['46'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 10310. ";
 preguntaids[70] = 10310


//  Id pregunta: 7098 Año de creación de pregunta: 2010
 questions[71]= "72)  De acuerdo con el Esquema Nacional de Seguridad, el sistema ha de disponer de una estrategia de protecci&oacute;n constituida por m&uacute;ltiples capas de seguridad, dispuesta de forma que, cuando una de las capas falle, permita:";
 choices[71]= new Array();
 choices[71][0] = "Ganar tiempo para una reacci&oacute;n adecuada frente a los incidentes que no han podido evitarse.";
 choices[71][1] = "Reducir la probabilidad de que el sistema sea comprometido en su conjunto.";
 choices[71][2] = "Minimizar el impacto final sobre el mismo.";
 choices[71][3] = "Todas las anteriores";
 answers[71] = 3;
 units[71] = ['46'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 7098. Art&iacute;culo 8 ENS";
 preguntaids[71] = 7098


//  Id pregunta: 461 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[72]= new Array();
 choices[72][0] = "Bienalmente";
 choices[72][1] = "Anualmente";
 choices[72][2] = "Semestralmente";
 choices[72][3] = "Cada cuatro a&ntilde;os";
 answers[72] = 1;
 units[72] = ['19'];
 blocks[72] = ['A4'];
 comments[72] = "Id Pregunta: 461. Estrategia TIC";
 preguntaids[72] = 461


//  Id pregunta: 4069 Año de creación de pregunta: 2003
 questions[73]= "74)  &iquest;Cu&aacute;l es la complejidad ciclom&aacute;tica de un grafo de 11 aristas y 9 nodos?";
 choices[73]= new Array();
 choices[73][0] = "6";
 choices[73][1] = "12";
 choices[73][2] = "8";
 choices[73][3] = "4";
 answers[73] = 3;
 units[73] = ['93'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 4069. ";
 preguntaids[73] = 4069


//  Id pregunta: 126 Año de creación de pregunta: 2016
 questions[74]= "75)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[74]= new Array();
 choices[74][0] = "Estrasburgo.";
 choices[74][1] = "Bruselas.";
 choices[74][2] = "Luxemburgo.";
 choices[74][3] = "Par&iacute;s.";
 answers[74] = 1;
 units[74] = ['5'];
 blocks[74] = ['A1'];
 comments[74] = "Id Pregunta: 126. Uni&oacute;n Europea";
 preguntaids[74] = 126


