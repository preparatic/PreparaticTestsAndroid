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
//  Id pregunta: 7765 Año de creación de pregunta: 2010
 questions[0]= "1)  &iquest;Cu&aacute;l de las afirmaciones siguientes NO es uno de los principios incluidos en el &laquo;Manifiesto &Aacute;gil&raquo; (Manifiesto por el Desarrollo &Aacute;gil de Software)?";
 choices[0]= new Array();
 choices[0][0] = "Aceptamos requisitos cambiantes, excepto en etapas avanzadas.";
 choices[0][1] = "Entregamos software frecuentemente, con una periodicidad desde un par de semanas a un par de meses, con preferencia por los per&iacute;odos m&aacute;s cortos posibles.";
 choices[0][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os surgen de equipos que se autoorganizan.";
 choices[0][3] = "El m&eacute;todo m&aacute;s eficiente y efectivo de comunicar la informaci&oacute;n a un equipo de desarrollo y entre los miembros del mismo es la conversaci&oacute;n cara a cara.";
 answers[0] = 0;
 units[0] = ['84'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 7765. ";
 preguntaids[0] = 7765


//  Id pregunta: 3295 Año de creación de pregunta: 2004
 questions[1]= "2)  El software que conecta dos aplicaciones heterog&eacute;neas, para compartir recursos de proceso de datos, se conoce como:";
 choices[1]= new Array();
 choices[1][0] = "Firmware";
 choices[1][1] = "Interfaz de usuario";
 choices[1][2] = "Middleware";
 choices[1][3] = "Everyware";
 answers[1] = 2;
 units[1] = ['55'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 3295. ";
 preguntaids[1] = 3295


//  Id pregunta: 599 Año de creación de pregunta: 2016
 questions[2]= "3)  De acuerdo con la NTI de Pol&iacute;tica de Firma y Sello Electr&oacute;nicos y de Certificados de la Administraci&oacute;n, el sellado de tiempo y la informaci&oacute;n de validaci&oacute;n podr&aacute;n ser a&ntilde;adidos por:";
 choices[2]= new Array();
 choices[2][0] = "El emisor, el receptor o un tercero.";
 choices[2][1] = "&Uacute;nicamente por el emisor.";
 choices[2][2] = "&Uacute;nicamente por el receptor.";
 choices[2][3] = "&Uacute;nicamente por el emisor o el receptor.";
 answers[2] = 0;
 units[2] = ['43'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 599. NTI";
 preguntaids[2] = 599


//  Id pregunta: 2529 Año de creación de pregunta: 2004
 questions[3]= "4)  Un ejemplo de herramienta Open Source de administraci&oacute;n remota de sistemas Unix/Linux es:";
 choices[3]= new Array();
 choices[3][0] = "WebMin";
 choices[3][1] = "WMI (Web Management &amp; Instrumentation)";
 choices[3][2] = "syslog";
 choices[3][3] = "Performance Monitor";
 answers[3] = 0;
 units[3] = ['57'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 2529. ";
 preguntaids[3] = 2529


//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[4]= new Array();
 choices[4][0] = "Tiene car&aacute;cter facultativo.";
 choices[4][1] = "Tiene car&aacute;cter potestativo.";
 choices[4][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[4][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[4] = 1;
 units[4] = ['22'];
 blocks[4] = ['A4'];
 comments[4] = "Id Pregunta: 500. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[4] = 500


//  Id pregunta: 8281 Año de creación de pregunta: 2011
 questions[5]= "6)  En el contexto de los lenguajes de programaci&oacute;n orientados a objetos, cuando un objeto recibe de otro objeto o aplicaci&oacute;n una notificaci&oacute;n, ha recibido un:";
 choices[5]= new Array();
 choices[5][0] = "Evento.";
 choices[5][1] = "Comando.";
 choices[5][2] = "Protocolo.";
 choices[5][3] = "Orden.";
 answers[5] = 0;
 units[5] = ['84'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 8281. Examen TIC A2 2010 interna";
 preguntaids[5] = 8281


//  Id pregunta: 4013 Año de creación de pregunta: 2002
 questions[6]= "7)  Para evaluar diferentes sistemas de recuperaci&oacute;n de informaci&oacute;n, &iquest;qu&eacute; par&aacute;metros suelen analizarse?:";
 choices[6]= new Array();
 choices[6][0] = "&Iacute;ndice de retorno e &iacute;ndice de precisi&oacute;n";
 choices[6][1] = "&Iacute;ndice de estimaci&oacute;n cuantificable";
 choices[6][2] = "&Iacute;ndice de ajuste de material devuelto";
 choices[6][3] = "N&uacute;mero de referencias correctas";
 answers[6] = 0;
 units[6] = ['100'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 4013. ";
 preguntaids[6] = 4013


//  Id pregunta: 10493 Año de creación de pregunta: 2015
 questions[7]= "8)  De entre las siguientes, escoge la falsa en relaci&oacute;n con SQL:";
 choices[7]= new Array();
 choices[7][0] = "Las relaciones participantes en un producto cartesiano, deben tener el mismo grado.";
 choices[7][1] = "Para todas las operaciones de &aacute;lgebra relacional, las 2 relaciones deben tener el mismo grado, excepto en el producto cartesiano.";
 choices[7][2] = "El SQL es estandarizado por ISO/IEC JTC1 Subcomit&eacute; 21.";
 choices[7][3] = "En SQL embebido los c&oacute;digos de retorno con signo negativo son errores.";
 answers[7] = 0;
 units[7] = ['61'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 10493. El producto cartesiano es la &uacute;nica operaci&oacute;n del &aacute;lgebra relacional, que no necesita que las relaciones tengan el mismo grado, es decir el mismo n&uacute;mero de columnas.";
 preguntaids[7] = 10493


//  Id pregunta: 2984 Año de creación de pregunta: 2002
 questions[8]= "9)  Los sem&aacute;foros son una t&eacute;cnica de comunicaci&oacute;n entre procesos para:";
 choices[8]= new Array();
 choices[8][0] = "Evitar los bloqueos";
 choices[8][1] = "Ejecutar threads";
 choices[8][2] = "Permitir la exclusi&oacute;n mutua";
 choices[8][3] = "Comunicar procesos en sistemas distribuidos";
 answers[8] = 2;
 units[8] = ['55'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 2984. ";
 preguntaids[8] = 2984


//  Id pregunta: 9454 Año de creación de pregunta: 2014
 questions[9]= "10)  El registro electr&oacute;nico que permite hacer constar y gestionar las representaciones que los interesados otorguen a terceros, con el fin de que &eacute;stos puedan actuar en su nombre de forma electr&oacute;nica ante la Administraci&oacute;n General del Estado y/o sus organismos p&uacute;blicos vinculados o dependientes:";
 choices[9]= new Array();
 choices[9][0] = "se crea en el RD 1671/2009 (art. 15)";
 choices[9][1] = "se denomina REA (Registro Electr&oacute;nico de Apoderamiento)";
 choices[9][2] = "est&aacute; regulado por la Orden HAP/1637/2012";
 choices[9][3] = "Todas las anteriores son ciertas";
 answers[9] = 3;
 units[9] = ['7'];
 blocks[9] = ['A2'];
 comments[9] = "Id Pregunta: 9454. ";
 preguntaids[9] = 9454


//  Id pregunta: 10207 Año de creación de pregunta: 2015
 questions[10]= "11)  &iquest;Qu&eacute; niveles de Complemento de Destino engloban los puestos del grupo A1?";
 choices[10]= new Array();
 choices[10][0] = "18 a 28";
 choices[10][1] = "18 a 30";
 choices[10][2] = "20 a 30";
 choices[10][3] = "26 a 30";
 answers[10] = 2;
 units[10] = ['26'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 10207. ";
 preguntaids[10] = 10207


//  Id pregunta: 3347 Año de creación de pregunta: 2006
 questions[11]= "12)  La m&iacute;nima unidad de informaci&oacute;n gr&aacute;fica que puede ser controlada, se denomina:";
 choices[11]= new Array();
 choices[11][0] = "Bit";
 choices[11][1] = "GIU";
 choices[11][2] = "Resoluci&oacute;n";
 choices[11][3] = "Pixel";
 answers[11] = 3;
 units[11] = ['50'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 3347. ";
 preguntaids[11] = 3347


//  Id pregunta: 7239 Año de creación de pregunta: 2010
 questions[12]= "13)  &iquest;Qu&eacute; actividad es propia del BCM?";
 choices[12]= new Array();
 choices[12][0] = "An&aacute;lisis de impacto de negocio";
 choices[12][1] = "An&aacute;lisis de riesgos";
 choices[12][2] = "Producci&oacute;n del plan de continuidad";
 choices[12][3] = "Todas";
 answers[12] = 3;
 units[12] = ['101'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 7239. ";
 preguntaids[12] = 7239


//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[13]= "14)  En cu&aacute;l de la siguiente lista de opciones todos los elementos forman parte del paquete PrimitiveTypes de UML 2.5:";
 choices[13]= new Array();
 choices[13][0] = "Tiny, Boolean, String, UnlimitedNatural, Real";
 choices[13][1] = "Integer, Boolean, String, Float, Unreal";
 choices[13][2] = "Integer, Boolean, String, UnlimitedNatural, Real";
 choices[13][3] = "Integer, Array, String, Float, Real";
 answers[13] = 2;
 units[13] = ['74'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 766. AGE A2 2015";
 preguntaids[13] = 766


//  Id pregunta: 3176 Año de creación de pregunta: 2002
 questions[14]= "15)  Para una corporaci&oacute;n bancaria con un potente mainframe el principal cuello de botella suele ser:";
 choices[14]= new Array();
 choices[14][0] = "Los canales de comunicaciones";
 choices[14][1] = "La memoria del sistema central";
 choices[14][2] = "La velocidad de acceso a los datos";
 choices[14][3] = "La velocidad de los operadores humanos que introducen la informaci&oacute;n";
 answers[14] = 2;
 units[14] = ['50'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 3176. ";
 preguntaids[14] = 3176


//  Id pregunta: 1011 Año de creación de pregunta: 2016
 questions[15]= "16)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[15]= new Array();
 choices[15][0] = "en cada Comunidad Aut&oacute;noma";
 choices[15][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[15][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[15][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[15] = 1;
 units[15] = ['4', '7', '8', '9'];
 blocks[15] = ['A1', 'A2'];
 comments[15] = "Id Pregunta: 1011. Ley 40/2015";
 preguntaids[15] = 1011


//  Id pregunta: 4004 Año de creación de pregunta: 2002
 questions[16]= "17)  Los algoritmos de comprensi&oacute;n LZW son del tipo:";
 choices[16]= new Array();
 choices[16][0] = "Basados en diccionario";
 choices[16][1] = "RLE";
 choices[16][2] = "HUFFMAN";
 choices[16][3] = "JPEG";
 answers[16] = 0;
 units[16] = ['80'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 4004. ";
 preguntaids[16] = 4004


//  Id pregunta: 10214 Año de creación de pregunta: 2015
 questions[17]= "18)  &iquest;C&oacute;mo se llaman a las auditor&iacute;as especializadas en descubrir fraudes y delitos, en obtener evidencias v&aacute;lidas para su uso por las autoridades competente, policiales o judiciales?";
 choices[17]= new Array();
 choices[17][0] = "Auditor&iacute;as de regularidad";
 choices[17][1] = "Auditor&iacute;as operativas o de gesti&oacute;n";
 choices[17][2] = "Auditor&iacute;as forenses";
 choices[17][3] = "Auditor&iacute;as de los sistemas de informaci&oacute;n";
 answers[17] = 2;
 units[17] = ['36'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 10214. ";
 preguntaids[17] = 10214


//  Id pregunta: 7997 Año de creación de pregunta: 2011
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes partes del SOAP sirve para expresar instancias de tipos de datos definidos por la aplicaci&oacute;n?";
 choices[18]= new Array();
 choices[18][0] = "SOAP envelope.";
 choices[18][1] = "SOAP binding framework";
 choices[18][2] = "SOAP encoding rules.";
 choices[18][3] = "SOAP  RPC representation.";
 answers[18] = 2;
 units[18] = ['55'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 7997. Examen TIC A2 2010";
 preguntaids[18] = 7997


//  Id pregunta: 7818 Año de creación de pregunta: 2010
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes apartados NO es uno de los componentes base de la arquitectura .NET?";
 choices[19]= new Array();
 choices[19][0] = "Windows Forms.";
 choices[19][1] = "ASP.NET.";
 choices[19][2] = "ADO.NET.";
 choices[19][3] = "ACY.NET.";
 answers[19] = 3;
 units[19] = ['63'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 7818. ";
 preguntaids[19] = 7818


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[20]= new Array();
 choices[20][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[20][1] = "Autorizar indultos generales.";
 choices[20][2] = "Sancionar las leyes.";
 choices[20][3] = "Promulgar las leyes.";
 answers[20] = 1;
 units[20] = ['2'];
 blocks[20] = ['A1'];
 comments[20] = "Id Pregunta: 99. AGE A2 2015";
 preguntaids[20] = 99


//  Id pregunta: 7150 Año de creación de pregunta: 2010
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes aplicaciones de software libre sirve para la edici&oacute;n profesional de im&aacute;genes?";
 choices[21]= new Array();
 choices[21][0] = "GIMP";
 choices[21][1] = "Celtx";
 choices[21][2] = "Nvu";
 choices[21][3] = "Rhythmbox";
 answers[21] = 0;
 units[21] = ['66'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 7150. ";
 preguntaids[21] = 7150


//  Id pregunta: 2627 Año de creación de pregunta: 2002
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes es un protocolo de directorio?:";
 choices[22]= new Array();
 choices[22][0] = "MIME";
 choices[22][1] = "LDAP";
 choices[22][2] = "SMNP";
 choices[22][3] = "BGP";
 answers[22] = 1;
 units[22] = ['77'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 2627. ";
 preguntaids[22] = 2627


//  Id pregunta: 146 Año de creación de pregunta: 2016
 questions[23]= "24)  La Mesa del Parlamento europeo estar&aacute; compuesta por:";
 choices[23]= new Array();
 choices[23][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[23][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[23][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[23][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[23] = 3;
 units[23] = ['5'];
 blocks[23] = ['A1'];
 comments[23] = "Id Pregunta: 146. Uni&oacute;n Europea";
 preguntaids[23] = 146


//  Id pregunta: 365 Año de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[24]= new Array();
 choices[24][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[24][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[24][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[24][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[24] = 0;
 units[24] = ['14'];
 blocks[24] = ['A3'];
 comments[24] = "Id Pregunta: 365. Pol&iacute;ticas de igualdad";
 preguntaids[24] = 365


//  Id pregunta: 667 Año de creación de pregunta: 2016
 questions[25]= "26)  Se&ntilde;ale cu&aacute;l de las siguientes respuestas se corresponde con el administrador de paquetes para sistemas RedHat y Fedora, entre otros:";
 choices[25]= new Array();
 choices[25][0] = "dpkg";
 choices[25][1] = "apt-get";
 choices[25][2] = "yum";
 choices[25][3] = "zypper";
 answers[25] = 2;
 units[25] = ['57'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 667. AGE A2 2015";
 preguntaids[25] = 667


//  Id pregunta: 5772 Año de creación de pregunta: 2007
 questions[26]= "27)  Que comando se utiliza para convertir un sistema de ficheros ext2 a ext3 en las ultimas versiones de Suse Linux?";
 choices[26]= new Array();
 choices[26][0] = "tune2fs -c ldev/hdbX";
 choices[26][1] = "tune2fs -j /dev/hdbX";
 choices[26][2] = "make2fs /devlhdbX";
 choices[26][3] = "mount -t ext3 /dev/hdbX /mountpoint";
 answers[26] = 1;
 units[26] = ['57'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 5772. ";
 preguntaids[26] = 5772


//  Id pregunta: 495 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos NO forma parte de la estructura org&aacute;nica del Consejo de Transparencia y Buen Gobierno seg&uacute;n su Estatuto?";
 choices[27]= new Array();
 choices[27][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno";
 choices[27][1] = "La Direcci&oacute;n General de Transparencia y Buen Gobierno";
 choices[27][2] = "La Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[27][3] = "La Subdirecci&oacute;n General de Reclamaciones";
 answers[27] = 1;
 units[27] = ['22'];
 blocks[27] = ['A4'];
 comments[27] = "Id Pregunta: 495. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[27] = 495


//  Id pregunta: 964 Año de creación de pregunta: 2016
 questions[28]= "29)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[28]= new Array();
 choices[28][0] = "las previsiones de la ley 40/2015 y supletoriamente por su normativa espec&iacute;fica";
 choices[28][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la ley 40/2015";
 choices[28][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[28][3] = "exclusivamente por las previsiones de la ley 40/2015";
 answers[28] = 1;
 units[28] = ['4', '7', '8', '9'];
 blocks[28] = ['A1', 'A2'];
 comments[28] = "Id Pregunta: 964. Ley 40/2015";
 preguntaids[28] = 964


//  Id pregunta: 1394 Año de creación de pregunta: 2016
 questions[29]= "30)  De entre los siguientes, &iquest;Qu&eacute; protocolo es utilizado para reservar recursos de red a una determinada aplicaci&oacute;n?";
 choices[29]= new Array();
 choices[29][0] = "RSVP";
 choices[29][1] = "ARP";
 choices[29][2] = "802.1ar";
 choices[29][3] = "H.264";
 answers[29] = 0;
 units[29] = ['114'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 1394. ";
 preguntaids[29] = 1394


//  Id pregunta: 9782 Año de creación de pregunta: 2015
 questions[30]= "31)  El servicio de verificaci&oacute;n y consulta de datos no tiene por objetivo:";
 choices[30]= new Array();
 choices[30][0] = "Dar respuesta al art&iacute;culo 28 de la Ley 39/2015, por el que los interesados no estar&aacute;n obligados a aportar documentos que hayan sido elaborados por cualquier Administraci&oacute;n.";
 choices[30][1] = "Simplificar la tramitaci&oacute;n de los procedimientos administrativos.";
 choices[30][2] = "Facilitar al ciudadano la aportaci&oacute;n de los documentos en papel que acrediten su identidad en los procedimientos administrativos.";
 choices[30][3] = "Dar cumplimiento a los derechos recogidos en la Ley 39/2015, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas.";
 answers[30] = 2;
 units[30] = ['7', '47'];
 blocks[30] = ['A2', 'B1'];
 comments[30] = "Id Pregunta: 9782. ";
 preguntaids[30] = 9782


//  Id pregunta: 961 Año de creación de pregunta: 2016
 questions[31]= "32)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[31]= new Array();
 choices[31][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[31][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[31][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[31][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[31] = 2;
 units[31] = ['4', '7', '8', '9'];
 blocks[31] = ['A1', 'A2'];
 comments[31] = "Id Pregunta: 961. Ley 40/2015";
 preguntaids[31] = 961


//  Id pregunta: 2924 Año de creación de pregunta: 2002
 questions[32]= "33)  La arquitectura UMA seg&uacute;n Silicon Graphics:";
 choices[32]= new Array();
 choices[32][0] = "Utiliza un bus AGP 16x";
 choices[32][1] = "Utiliza una &uacute;nica memoria para todos los dispositivos, sin que estos tengan memorias locales";
 choices[32][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[32][3] = "Las respuestas 'a' y 'b' son falsas";
 answers[32] = 1;
 units[32] = ['49'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 2924. ";
 preguntaids[32] = 2924


//  Id pregunta: 5443 Año de creación de pregunta: 2007
 questions[33]= "34)  Si para consolidar una transacci&oacute;n en un sistema relacional se utiliza la sentencia COMMIT, &iquest;qu&eacute; sentencia se utiliza para retroceder una transacci&oacute;n?";
 choices[33]= new Array();
 choices[33][0] = "NO COMMIT.";
 choices[33][1] = "ROLLBACK";
 choices[33][2] = "END TRANSACTION.";
 choices[33][3] = "BACK TRANSACTION.";
 answers[33] = 1;
 units[33] = ['60'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 5443. ";
 preguntaids[33] = 5443


//  Id pregunta: 7270 Año de creación de pregunta: 2010
 questions[34]= "35)  GSM no utiliza";
 choices[34]= new Array();
 choices[34][0] = "Esquema de protecci&oacute;n mediante salto RF";
 choices[34][1] = "Transmisi&oacute;n discontinua";
 choices[34][2] = "Transmisi&oacute;n continua";
 choices[34][3] = "Paging";
 answers[34] = 2;
 units[34] = ['117'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 7270. ";
 preguntaids[34] = 7270


//  Id pregunta: 8924 Año de creación de pregunta: 2013
 questions[35]= "36)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[35]= new Array();
 choices[35][0] = "Cuando una inversi&oacute;n tiene VAN positivo, la TIR es superior al coste de capital invertido";
 choices[35][1] = "Cuando una inversi&oacute;n tiene VAN negativo, la TIR es inferior al coste de capital invertido";
 choices[35][2] = "VAN y TIR son m&eacute;todos din&aacute;micos de selecci&oacute;n de inversiones";
 choices[35][3] = "Todas las afirmaciones anteriores son correctas";
 answers[35] = 3;
 units[35] = ['40'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 8924. ";
 preguntaids[35] = 8924


//  Id pregunta: 10044 Año de creación de pregunta: 2015
 questions[36]= "37)  El tipo de prueba BigBang es de tipo:";
 choices[36]= new Array();
 choices[36][0] = "Prueba de sistema.";
 choices[36][1] = "Prueba de aceptaci&oacute;n.";
 choices[36][2] = "Prueba de rendimiento.";
 choices[36][3] = "Prueba de integraci&oacute;n.";
 answers[36] = 3;
 units[36] = ['92'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 10044. Examen TIC A2 2014";
 preguntaids[36] = 10044


//  Id pregunta: 7766 Año de creación de pregunta: 2010
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes NO es una herramienta TAW (Test de Accesibilidad Web)?";
 choices[37]= new Array();
 choices[37][0] = "TAW3 Online.";
 choices[37][1] = "TAW3 Web Start.";
 choices[37][2] = "TAW3 Onsite.";
 choices[37][3] = "TAW3 en un clic.";
 answers[37] = 2;
 units[37] = ['42'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 7766. ";
 preguntaids[37] = 7766


//  Id pregunta: 6201 Año de creación de pregunta: 2003
 questions[38]= "39)  Seg&uacute;n el art&iacute;culo 21 de la Ley 34/2002, de 11 de Julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio electr&oacute;nico, las comunicaciones comerciales a trav&eacute;s de correo electr&oacute;nico:";
 choices[38]= new Array();
 choices[38][0] = "Est&aacute;n estrictamente prohibidas en todos los casos.";
 choices[38][1] = "Est&aacute;n permitidas si el destinatario de las mismas no manifiesta su oposici&oacute;n inequ&iacute;voca y expresa.";
 choices[38][2] = "Est&aacute;n permitidas en los casos previstos en la Ley Org&aacute;nica de Protecci&oacute;n de Datos.";
 choices[38][3] = "Est&aacute;n permitidas si han sido solicitadas o previamente autorizadas por los destinatarios de las mismas.";
 answers[38] = 3;
 units[38] = ['77'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 6201. Examen TIC A Castilla La Mancha 2007";
 preguntaids[38] = 6201


//  Id pregunta: 271 Año de creación de pregunta: 2016
 questions[39]= "40)  En las Administraciones P&uacute;blicas...";
 choices[39]= new Array();
 choices[39][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[39][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[39][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[39][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[39] = 0;
 units[39] = ['11'];
 blocks[39] = ['A2'];
 comments[39] = "Id Pregunta: 271. Presupuestos generales";
 preguntaids[39] = 271


//  Id pregunta: 9289 Año de creación de pregunta: 2014
 questions[40]= "41)  Para las siguientes conexiones entre elementos de un DFD (Diagrama de flujo de datos), NO es posible el flujo:";
 choices[40]= new Array();
 choices[40][0] = "Proceso-Proceso";
 choices[40][1] = "Proceso-Entidad Externa";
 choices[40][2] = "Almac&eacute;n de datos-Almac&eacute;n de datos.";
 choices[40][3] = "Entidad Externa-Proceso";
 answers[40] = 2;
 units[40] = ['85', '86'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 9289. Examen TIC A2 2013. Promocion interna";
 preguntaids[40] = 9289


//  Id pregunta: 347 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[41]= new Array();
 choices[41][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[41][1] = "Entrada en la Uni&oacute;n Europea";
 choices[41][2] = "Pactos de la Moncloa";
 choices[41][3] = "Ingreso en la ONU";
 answers[41] = 3;
 units[41] = ['12'];
 blocks[41] = ['A3'];
 comments[41] = "Id Pregunta: 347. Modelo econ&oacute;mico";
 preguntaids[41] = 347


//  Id pregunta: 2106 Año de creación de pregunta: 2002
 questions[42]= "43)  El objetivo fundamental de un sistema de informaci&oacute;n para la alta direcci&oacute;n de una organizaci&oacute;n debe ser:";
 choices[42]= new Array();
 choices[42][0] = "Conseguir que los directivos de la misma logren acceder a toda la informaci&oacute;n contenida en las bases de datos de la organizaci&oacute;n";
 choices[42][1] = "Poner a disposici&oacute;n de los directivos herramientas de investigaci&oacute;n operativa que permitan simular problemas relacionados con el sector a que pertenezca la empresa a partir de datos obtenidos de otras empresas";
 choices[42][2] = "Lograr un subproducto del sistema de informaci&oacute;n corporativo e integrado con &eacute;ste, susceptible de ser tratado con herramientas de simulaci&oacute;n";
 choices[42][3] = "Elaborar los procesos batch necesarios que cubran el nivel de informaci&oacute;n desagregada fijado por la direcci&oacute;n";
 answers[42] = 2;
 units[42] = ['24'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 2106. ";
 preguntaids[42] = 2106


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[43]= "44)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[43]= new Array();
 choices[43][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[43][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[43][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[43][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[43] = 1;
 units[43] = ['5'];
 blocks[43] = ['A1'];
 comments[43] = "Id Pregunta: 120. Uni&oacute;n Europea";
 preguntaids[43] = 120


//  Id pregunta: 1975 Año de creación de pregunta: 2016
 questions[44]= "45)  Son causas de nulidad de los contratos de las Administraciones P&uacute;blicas:";
 choices[44]= new Array();
 choices[44][0] = "La invalidez de alguno de sus actos preparatorios por concurrir en los mismos alguna de las causas de nulidad de las indicadas en el art&iacute;culo 62,1 de la Ley 30/1992, de 26 de noviembre, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n.";
 choices[44][1] = "La nulidad de un acto que no sea preparatorio del contrato.";
 choices[44][2] = "La invalidez de la adjudicaci&oacute;n por concurrir en la misma alguna de las causas de nulidad de las indicadas en el art&iacute;culo 62,1 de la Ley 30/1992, de 26 de noviembre, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n.";
 choices[44][3] = "Las respuestas a) y c) son correctas.";
 answers[44] = 3;
 units[44] = ['10'];
 blocks[44] = ['A2'];
 comments[44] = "Id Pregunta: 1975. ";
 preguntaids[44] = 1975


//  Id pregunta: 1452 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes servicios NO est&aacute; regulado por la LSSI en su anexo de definiciones?";
 choices[45]= new Array();
 choices[45][0] = "La contrataci&oacute;n de bienes y servicios por v&iacute;a electr&oacute;nica.";
 choices[45][1] = "El v&iacute;deo bajo demanda.";
 choices[45][2] = "El teletexto televisivo.";
 choices[45][3] = "La organizaci&oacute;n y gesti&oacute;n de subastas por medios electr&oacute;nicos.";
 answers[45] = 2;
 units[45] = ['19'];
 blocks[45] = ['A4'];
 comments[45] = "Id Pregunta: 1452. ";
 preguntaids[45] = 1452


//  Id pregunta: 10151 Año de creación de pregunta: 2015
 questions[46]= "47)  En ITIL V3, &iquest;qu&eacute; es un OLA?";
 choices[46]= new Array();
 choices[46][0] = "Es un contrato entre un proveedor de servicios de TI con un &uacute;nico cliente externo a la organizaci&oacute;n.";
 choices[46][1] = "Es un contrato entre departamentos de una misma organizaci&oacute;n.";
 choices[46][2] = "Es un contrato entre un proveedor de servicios de TI que describe los servicios ofertados a varios clientes externos a la organizaci&oacute;n.";
 choices[46][3] = "Es un contrato entre la administraci&oacute;n y la empresa privada.";
 answers[46] = 1;
 units[46] = ['101'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 10151. Examen TIC A1 2014";
 preguntaids[46] = 10151


//  Id pregunta: 9926 Año de creación de pregunta: 2015
 questions[47]= "48)  &iquest;Qu&eacute; aspecto no es necesario incluir en una pol&iacute;tica de firma basada en certificados seg&uacute;n la NTI de firma electr&oacute;nica?";
 choices[47]= new Array();
 choices[47][0] = "Definici&oacute;n del alcance y &aacute;mbito de aplicaci&oacute;n.";
 choices[47][1] = "Datos para la identificaci&oacute;n del documento y del responsable de su gesti&oacute;n.";
 choices[47][2] = "Reglas de confianza, que incluir&aacute;n los requisitos establecidos para certificados, sellos de tiempo y firmas longevas.";
 choices[47][3] = "Todas las anteriores se deben incluir.";
 answers[47] = 3;
 units[47] = ['44'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 9926. ";
 preguntaids[47] = 9926


//  Id pregunta: 198 Año de creación de pregunta: 2016
 questions[48]= "49)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[48]= new Array();
 choices[48][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[48][1] = "Personas con nacionalidad europea.";
 choices[48][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[48][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[48] = 3;
 units[48] = ['5'];
 blocks[48] = ['A1'];
 comments[48] = "Id Pregunta: 198. Uni&oacute;n Europea";
 preguntaids[48] = 198


//  Id pregunta: 870 Año de creación de pregunta: 2016
 questions[49]= "50)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[49]= new Array();
 choices[49][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[49][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[49][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[49][3] = "Todas las respuestas son correctas.";
 answers[49] = 0;
 units[49] = ['101'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 870. Junta de Extremadura A1 2015";
 preguntaids[49] = 870


//  Id pregunta: 7722 Año de creación de pregunta: 2010
 questions[50]= "51)  &iquest;Qu&eacute; se utiliza para codificar la voz que se transmite por la red IP?";
 choices[50]= new Array();
 choices[50][0] = "Retardo.";
 choices[50][1] = "Encriptado.";
 choices[50][2] = "C&oacute;decs.";
 choices[50][3] = "Claves.";
 answers[50] = 2;
 units[50] = ['110'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 7722. Map 2007";
 preguntaids[50] = 7722


//  Id pregunta: 63 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[51]= new Array();
 choices[51][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[51][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[51][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[51][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[51] = 0;
 units[51] = ['1'];
 blocks[51] = ['A1'];
 comments[51] = "Id Pregunta: 63. Constituci&oacute;n de 1978";
 preguntaids[51] = 63


//  Id pregunta: 7705 Año de creación de pregunta: 2010
 questions[52]= "53)  Elija la opci&oacute;n correcta con respecto al funcionamiento de los registros en d&iacute;as inh&aacute;biles, seg&uacute;n la Ley 39/2015:";
 choices[52]= new Array();
 choices[52][0] = "Los registros no estar&aacute;n en funcionamiento los d&iacute;as inh&aacute;biles.";
 choices[52][1] = "La presentaci&oacute;n de solicitudes, escritos y comunicaciones en un d&iacute;a inh&aacute;bil se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[52][2] = "La presentaci&oacute;n de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registro se entender&aacute; efectuada en la &uacute;ltima hora del &uacute;ltimo d&iacute;a h&aacute;bil anterior.";
 choices[52][3] = "No se permitir&aacute; la presentaci&oacute;n de solicitudes, escritos y comunicaciones en un d&iacute;a inh&aacute;bil, y por consiguiente la entrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registro no se entender&aacute; efectuada.";
 answers[52] = 1;
 units[52] = ['7'];
 blocks[52] = ['A2'];
 comments[52] = "Id Pregunta: 7705. Map 2007";
 preguntaids[52] = 7705


//  Id pregunta: 2473 Año de creación de pregunta: 2002
 questions[53]= "54)  De acuerdo con la Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, la prestaci&oacute;n de servicios de la sociedad de la informaci&oacute;n:";
 choices[53]= new Array();
 choices[53][0] = "Estar&aacute; sujeta a autorizaci&oacute;n previa";
 choices[53][1] = "No estar&aacute; sujeta a autorizaci&oacute;n previa";
 choices[53][2] = "No estar&aacute; sujeta a autorizaci&oacute;n previa, salvo para servicios relacionados con la salud";
 choices[53][3] = "No estar&aacute; sujeta a autorizaci&oacute;n previa, salvo para servicios relacionados con la juventud y la infancia";
 answers[53] = 1;
 units[53] = ['19'];
 blocks[53] = ['A4'];
 comments[53] = "Id Pregunta: 2473. Ley 34/2002, art&iacute;culo 6";
 preguntaids[53] = 2473


//  Id pregunta: 10665 Año de creación de pregunta: 2015
 questions[54]= "55)  Seg&uacute;n la Ley 9/2014, indique la respuesta INCORRECTA:";
 choices[54]= new Array();
 choices[54][0] = "El Ministerio de Energia, Turismo y Agenda Digital publicar&aacute; procedimientos de resoluci&oacute;n de controversias.";
 choices[54][1] = "El abonado puede decidir si figura en la gu&iacute;a.";
 choices[54][2] = "El cambio de operador con conservaci&oacute;n del n&uacute;mero se realizar&aacute; en un plazo m&aacute;ximo de 72 horas.";
 choices[54][3] = "Los usuarios tiene derecho de acceso gratuito a servicios de emergencia.";
 answers[54] = 2;
 units[54] = ['121'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 10665. ";
 preguntaids[54] = 10665


//  Id pregunta: 7283 Año de creación de pregunta: 2010
 questions[55]= "56)  El filtrado de paquetes no proporciona";
 choices[55]= new Array();
 choices[55][0] = "Bajo nivel de seguridad";
 choices[55][1] = "Protecci&oacute;n sobre la capa de red";
 choices[55][2] = "Alto rendimiento y escalabilidad";
 choices[55][3] = "Todas las respuestas anteriores son correctas";
 answers[55] = 1;
 units[55] = ['111'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 7283. ";
 preguntaids[55] = 7283


//  Id pregunta: 98 Año de creación de pregunta: 2016
 questions[56]= "57)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[56]= new Array();
 choices[56][0] = "Ley org&aacute;nica.";
 choices[56][1] = "Ley ordinaria.";
 choices[56][2] = "Ley de bases.";
 choices[56][3] = "Ley marco.";
 answers[56] = 2;
 units[56] = ['1'];
 blocks[56] = ['A1'];
 comments[56] = "Id Pregunta: 98. Constituci&oacute;n de 1978";
 preguntaids[56] = 98


//  Id pregunta: 1188 Año de creación de pregunta: 2016
 questions[57]= "58)  Las normas WAI del W3C se utilizan para medir el grado de cumplimiento de determinadas pautas de:";
 choices[57]= new Array();
 choices[57][0] = "Accesibilidad.";
 choices[57][1] = "Usabilidad.";
 choices[57][2] = "Calidad.";
 choices[57][3] = "Seguridad.";
 answers[57] = 0;
 units[57] = ['42'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 1188. ";
 preguntaids[57] = 1188


//  Id pregunta: 7404 Año de creación de pregunta: 2010
 questions[58]= "59)  El acceso al medio utilizado por GSM (Global System Mobile) es acceso m&uacute;ltiple por divisi&oacute;n de:";
 choices[58]= new Array();
 choices[58][0] = "Frecuencia";
 choices[58][1] = "Tiempo";
 choices[58][2] = "Tiempo y frecuencia";
 choices[58][3] = "C&oacute;digo de banda ancha (WCDMA)";
 answers[58] = 2;
 units[58] = ['117'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 7404. Examen TIC B 2009";
 preguntaids[58] = 7404


//  Id pregunta: 7661 Año de creación de pregunta: 2010
 questions[59]= "60)  En el establecimiento de una comunicaci&oacute;n mediante SSL (Secure Sockets Layer), &iquest;cu&aacute;l es el protocolo que especifica la forma de encapsular los datos que se van a intercambiar?";
 choices[59]= new Array();
 choices[59][0] = "SSL Handshake.";
 choices[59][1] = "SSL Record.";
 choices[59][2] = "Cipher Secure Layer.";
 choices[59][3] = "Secure Stocker Layer.";
 answers[59] = 1;
 units[59] = ['120'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 7661. Map 2006";
 preguntaids[59] = 7661


//  Id pregunta: 5999 Año de creación de pregunta: 2003
 questions[60]= "61)  En referencia a Sistemas Operativos multiproceso tipo UNIX &iquest;qu&eacute; se entiende por &ldquo;proceso zombi&rdquo;?:";
 choices[60]= new Array();
 choices[60][0] = "Un proceso hijo que ha acabado de realizar sus tareas pero que el padre todav&iacute;a no ha ejecutado la orden de esperar a que el hijo acabe.";
 choices[60][1] = "Un proceso padre que se ha quedado bloqueado a la espera de que sus hijos acaben sus tareas pendientes.";
 choices[60][2] = "Un par de procesos en el que el primero est&aacute; a la espera de que el segundo proceso acabe y este segundo proceso";
 choices[60][3] = "Un proceso hijo que est&aacute; bloqueado a la espera de que el proceso padre le env&iacute;e datos que necesita.";
 answers[60] = 0;
 units[60] = ['56'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 5999. TIC B 2007";
 preguntaids[60] = 5999


//  Id pregunta: 2035 Año de creación de pregunta: 2002
 questions[61]= "62)  En el sistema internacional de medidas se usan una serie de prefijos para las unidades. A continuaci&oacute;n se presentan algunos de ellos. &iquest;Podr&iacute;a indicar cu&aacute;l es el orden correcto de menor a mayor?";
 choices[61]= new Array();
 choices[61][0] = "Kilo-Mega-Giga-Tera-Exa-Peta.";
 choices[61][1] = "Kilo-Giga-Mega-Tera-Exa-Peta.";
 choices[61][2] = "Kilo-Mega-Giga-Peta-Exa-Tera.";
 choices[61][3] = "Kilo-Mega-Giga-Tera-Peta-Exa.";
 answers[61] = 3;
 units[61] = ['105'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 2035. ";
 preguntaids[61] = 2035


//  Id pregunta: 9646 Año de creación de pregunta: 2014
 questions[62]= "63)  En lo referido a la Ingenier&iacute;a del Software de Sala Limpia indicar qu&eacute; afirmaci&oacute;n es correcta.";
 choices[62]= new Array();
 choices[62][0] = "Es una versi&oacute;n del modelo incremental del software.";
 choices[62][1] = "Hace uso de la comprobaci&oacute;n estad&iacute;stica para descubrir errores.";
 choices[62][2] = "Utiliza tres tipos de cajas para la especificaci&oacute;n funcional: negra, de estado y transparente.";
 choices[62][3] = "Las anteriores a) b) y c) son correctas.";
 answers[62] = 3;
 units[62] = ['82'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 9646. Examen TIC A1 2013";
 preguntaids[62] = 9646


//  Id pregunta: 1028 Año de creación de pregunta: 2016
 questions[63]= "64)  Contra las resoluciones en materia de abstenci&oacute;n y recusaci&oacute;n...";
 choices[63]= new Array();
 choices[63][0] = "Cabr&aacute; recurso de alzada";
 choices[63][1] = "Cabr&aacute; el nuevo protesto";
 choices[63][2] = "Cabr&aacute; recurso de reposici&oacute;n";
 choices[63][3] = "No cabr&aacute; recurso alguno";
 answers[63] = 3;
 units[63] = ['4', '7', '8', '9'];
 blocks[63] = ['A1', 'A2'];
 comments[63] = "Id Pregunta: 1028. Ley 40/2015";
 preguntaids[63] = 1028


//  Id pregunta: 9904 Año de creación de pregunta: 2015
 questions[64]= "65)  La Ley 39/2015 prevee Registros Electr&oacute;nicos de Apoderamientos:";
 choices[64]= new Array();
 choices[64][0] = "Este Registro Electr&oacute;nico ser&aacute; &uacute;nico para todas las Administraciones P&uacute;blicas.";
 choices[64][1] = "Este Registro Electr&oacute;nico ser&aacute; &uacute;nico para toda la Administraci&oacute;n General del Estado.";
 choices[64][2] = "La Ley &uacute;nicamente establece la creaci&oacute;n de dichos Registros.";
 choices[64][3] = "Esta Ley no se&ntilde;ala nada sobre dichos Registros.";
 answers[64] = 1;
 units[64] = ['7', '19'];
 blocks[64] = ['A2', 'A4'];
 comments[64] = "Id Pregunta: 9904. ";
 preguntaids[64] = 9904


//  Id pregunta: 1000 Año de creación de pregunta: 2016
 questions[65]= "66)  Los Secretarios generales t&eacute;cnicos:";
 choices[65]= new Array();
 choices[65][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[65][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[65][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[65][3] = "todas son correctas";
 answers[65] = 3;
 units[65] = ['4', '7', '8', '9'];
 blocks[65] = ['A1', 'A2'];
 comments[65] = "Id Pregunta: 1000. Ley 40/2015";
 preguntaids[65] = 1000


//  Id pregunta: 3112 Año de creación de pregunta: 2002
 questions[66]= "67)  XML:";
 choices[66]= new Array();
 choices[66][0] = "Es un lenguaje de presentaci&oacute;n, similar a HTML, pero m&aacute;s avanzado";
 choices[66][1] = "Est&aacute; orientado a especificar la estructura de los datos, no la forma de presentarlos";
 choices[66][2] = "Es similar a HTML pero con una orientaci&oacute;n hacia el mundo del dise&ntilde;o dado que permite realizar maginas web mas vistosas y din&aacute;micas";
 choices[66][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[66] = 1;
 units[66] = ['74'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 3112. ";
 preguntaids[66] = 3112


//  Id pregunta: 5438 Año de creación de pregunta: 2007
 questions[67]= "68)  Indique cu&aacute;l de los siguientes est&aacute;ndares se aplica a la seguridad de los sistemas inform&aacute;ticos";
 choices[67]= new Array();
 choices[67][0] = "ISO 12207";
 choices[67][1] = "ISO 2167";
 choices[67][2] = "ISO 27002";
 choices[67][3] = "ISO 9004";
 answers[67] = 2;
 units[67] = ['45'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 5438. ";
 preguntaids[67] = 5438


//  Id pregunta: 8435 Año de creación de pregunta: 2011
 questions[68]= "69)  El Comit&eacute; t&eacute;cnico estatal de la Administraci&oacute;n judicial electr&oacute;nica no estar&aacute; integrado por:";
 choices[68]= new Array();
 choices[68][0] = "Una representaci&oacute;n del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[68][1] = "Los representantes que al efecto podr&aacute; designar la Fiscal&iacute;a General del Estado";
 choices[68][2] = "Una representaci&oacute;n del Ministerio de Justicia";
 choices[68][3] = "Estar&aacute; integrado por todos los anteriores";
 answers[68] = 0;
 units[68] = ['2'];
 blocks[68] = ['A1'];
 comments[68] = "Id Pregunta: 8435. ";
 preguntaids[68] = 8435


//  Id pregunta: 2490 Año de creación de pregunta: 2004
 questions[69]= "70)  &iquest;Qu&eacute; se necesita para poder aprovechar la tecnolog&iacute;a HyperThreading?";
 choices[69]= new Array();
 choices[69][0] = "Procesador Intel Pentium 4 y Windows 2003";
 choices[69][1] = "Procesador Sun SPARC y Solaris";
 choices[69][2] = "Procesador Intel Core 2 Duo y Linux";
 choices[69][3] = "Procesador Sun SPARC y Windows 2000";
 answers[69] = 0;
 units[69] = ['50'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 2490. ";
 preguntaids[69] = 2490


//  Id pregunta: 6572 Año de creación de pregunta: 2003
 questions[70]= "71)  La firma realizada a trav&eacute;s del DNI electr&oacute;nico:";
 choices[70]= new Array();
 choices[70][0] = "Tiene valor jur&iacute;dico, pero no equivale a la firma manuscrita";
 choices[70][1] = "Tiene el mismo valor jur&iacute;dico que la firma manuscrita";
 choices[70][2] = "No tiene valor jur&iacute;dico";
 choices[70][3] = "Su valor jur&iacute;dico queda a discreci&oacute;n de un juez";
 answers[70] = 1;
 units[70] = ['78'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 6572. ";
 preguntaids[70] = 6572


//  Id pregunta: 9581 Año de creación de pregunta: 2014
 questions[71]= "72)  En redes de &aacute;rea local, &iquest;cu&aacute;l de los siguientes es un m&eacute;todo de acceso al medio compartido con escucha por contienda?";
 choices[71]= new Array();
 choices[71][0] = "Paso de testigo en anillo.";
 choices[71][1] = "CSMA no persistente.";
 choices[71][2] = "ALOHA ranurado.";
 choices[71][3] = "Contenci&oacute;n.";
 answers[71] = 1;
 units[71] = ['112'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 9581. TIC A2 2013 libre";
 preguntaids[71] = 9581


//  Id pregunta: 6900 Año de creación de pregunta: 2010
 questions[72]= "73)  Dado un CAU de tres niveles, &iquest;d&oacute;nde ubicar&iacute;a en el proceso de soporte al personal inform&aacute;tico de un centro perif&eacute;rico?";
 choices[72]= new Array();
 choices[72][0] = "Entre el primer nivel (CAU) y el segundo nivel (otras &aacute;reas del centro TIC)";
 choices[72][1] = "Entre el segundo nivel (otras &aacute;reas del centro TIC) y el tercer nivel (proveedores y empresas de mantenimiento)";
 choices[72][2] = "Como &lsquo;nivel 0&rsquo;, atendiendo todas las incidencias del centro perif&eacute;rico y escal&aacute;ndolas al nivel 1 (CAU)";
 choices[72][3] = "Fuera del proceso de soporte, habr&iacute;a que reubicar al personal en otras tareas";
 answers[72] = 0;
 units[72] = ['30'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 6900. ";
 preguntaids[72] = 6900


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[73]= "74)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[73]= new Array();
 choices[73][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[73][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[73][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[73][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[73] = 3;
 units[73] = ['5'];
 blocks[73] = ['A1'];
 comments[73] = "Id Pregunta: 137. Uni&oacute;n Europea";
 preguntaids[73] = 137


//  Id pregunta: 5142 Año de creación de pregunta: 2003
 questions[74]= "75)  Cuando una copia de seguridad copia los archivos creados o modificados desde la &uacute;ltima copia de seguridad normal o incremental, sin poner una marca de copiado a los archivos se habla de:";
 choices[74]= new Array();
 choices[74][0] = "Copia de seguridad incremental.";
 choices[74][1] = "Copia de seguridad diaria.";
 choices[74][2] = "Copia de seguridad intermedia.";
 choices[74][3] = "Copia de seguridad diferencial.";
 answers[74] = 3;
 units[74] = ['100'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 5142. ";
 preguntaids[74] = 5142


