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
//  Id pregunta: 7790 Año de creación de pregunta: 2010
 questions[0]= "1)  Con respecto a los sistemas RFID (Radio Frecuency Identification), indique la respuesta incorrecta:";
 choices[0]= new Array();
 choices[0][0] = "Las etiquetas RFID pueden ser activas, semipasivas o pasivas";
 choices[0][1] = "Pueden funcionar en rangos de frecuencia baja (125 KHz), alta (13.56 MHz), ultraelevada (868 MHz) o de microondas (2.45 GHz)";
 choices[0][2] = "Necesitan tener una l&iacute;nea de visi&oacute;n directa para su correcto funcionamiento";
 choices[0][3] = "La tecnolog&iacute;a Near Field Communications (NFC) es un subconjunto de RFID";
 answers[0] = 2;
 units[0] = ['108'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 7790. ";
 preguntaids[0] = 7790


//  Id pregunta: 4967 Año de creación de pregunta: 2002
 questions[1]= "2)  Las fibras &oacute;pticas:";
 choices[1]= new Array();
 choices[1][0] = "Presentan mayor atenuaci&oacute;n que los pares coaxiales";
 choices[1][1] = "Se necesitan efectuar conversiones O/E y O/E en los terminales emisor y receptor, respectivamente";
 choices[1][2] = "La distorsi&oacute;n multimodo se produce, sobre todo, en las de &iacute;ndice gradual";
 choices[1][3] = "Son inmunes a las interferencias electromagn&eacute;ticas";
 answers[1] = 3;
 units[1] = ['106'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 4967. ";
 preguntaids[1] = 4967


//  Id pregunta: 9115 Año de creación de pregunta: 2014
 questions[2]= "3)  En un despliegue de una aplicaci&oacute;n Java EE sobre WebSphere, fijar el mode del class loader como PARENT_LAST tiene el efecto de que busca las clases a cargar primero:";
 choices[2]= new Array();
 choices[2][0] = "En el m&oacute;dulo web, si no las encuentra busca en la aplicaci&oacute;n, y si no las encuentra, en las librer&iacute;as del sistema.";
 choices[2][1] = "En las librer&iacute;as del sistema, si no las encuentra busca en la aplicaci&oacute;n, y si no las encuentra, en el m&oacute;dulo web.";
 choices[2][2] = "En la aplicaci&oacute;n, y si no las encuentra busca en el m&oacute;dulo web, y si no las encuentra, en las librer&iacute;as del sistema.";
 choices[2][3] = "En las librer&iacute;as del sistema, si no las encuentra busca en el m&oacute;dulo web, y si no las encuentra en la aplicaci&oacute;n.";
 answers[2] = 0;
 units[2] = ['64'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 9115. Examen TIC A2 2013";
 preguntaids[2] = 9115


//  Id pregunta: 1079 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;C&oacute;mo se puede validar documentos en XML?";
 choices[3]= new Array();
 choices[3][0] = "Usando XSL Schema.";
 choices[3][1] = "Usando XSLT.";
 choices[3][2] = "Usando un Applet de validaci&oacute;n.";
 choices[3][3] = "Usando un DTD.";
 answers[3] = 3;
 units[3] = ['74'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 1079. ";
 preguntaids[3] = 1079


//  Id pregunta: 7581 Año de creación de pregunta: 2010
 questions[4]= "5)  En el modelo de miner&iacute;a de datos de &aacute;rboles de decisi&oacute;n (ID3 de Quinlan)";
 choices[4]= new Array();
 choices[4][0] = "Se obtiene un nuevo conjunto de reglas a partir de uno previo, utilizando mecanismos de deducci&oacute;n basados en la entrop&iacute;a";
 choices[4][1] = "Se obtiene un conjunto de reglas a partir de un conjunto de ejemplos, clasificados a priori, utilizando mecanismos de inducci&oacute;n";
 choices[4][2] = "Se obtiene un nuevo conjunto de reglas que agrupan, por similaridad, un conjunto de ejemplos, utilizando aprendizaje no supervisado";
 choices[4][3] = "Se obtiene un nuevo conjunto de reglas a partir de uno previo, mediante eliminaci&oacute;n de reglas incorrectas e inclusi&oacute;n de reglas necesarias, utilizando un conjunto de ejemplos para dicha depuraci&oacute;n";
 answers[4] = 1;
 units[4] = ['68'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 7581. Map 2006";
 preguntaids[4] = 7581


//  Id pregunta: 7268 Año de creación de pregunta: 2010
 questions[5]= "6)  Qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 3.5G?";
 choices[5]= new Array();
 choices[5][0] = "Tecnolog&iacute;a HSDPA";
 choices[5][1] = "Capacidad enlace descendente: hasta 14.4 Mbps";
 choices[5][2] = "El uso del canal descendente puede ser compartido por varios usuarios";
 choices[5][3] = "Todas las respuestas anteriores son correctas";
 answers[5] = 3;
 units[5] = ['117'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 7268. ";
 preguntaids[5] = 7268


//  Id pregunta: 10118 Año de creación de pregunta: 2015
 questions[6]= "7)  SAML (Security Assertion Markup Language):";
 choices[6]= new Array();
 choices[6][0] = "Establece protocolos de seguridad para el intercambio de identidades.";
 choices[6][1] = "Establece protocolos de seguridad para el firmado de estructuras XML.";
 choices[6][2] = "Es un est&aacute;ndar establecido por IEEE como alternativa a WS-Security en sistemas de autenticaci&oacute;n Single Sign-On.";
 choices[6][3] = "Es un est&aacute;ndar establecido por OASIS como alternativa a WS-Security en sistemas de autenticaci&oacute;n Single Sign-On.";
 answers[6] = 0;
 units[6] = ['123'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 10118. Examen TIC A1 2014";
 preguntaids[6] = 10118


//  Id pregunta: 10032 Año de creación de pregunta: 2015
 questions[7]= "8)  En la Interfaz de Gesti&oacute;n de Proyectos de M&Eacute;TRICA v3, se&ntilde;ale entre los siguientes un producto correcto de salida que tiene la tarea &quot;GPI 1.1, identificaci&oacute;n de elementos a desarrollar&quot; en el caso de desarrollo estructurado:";
 choices[7]= new Array();
 choices[7][0] = "Planificaci&oacute;n General del Proyecto: Estrategia de desarrollo estructurado.";
 choices[7][1] = "Cat&aacute;logo de productos a generar.";
 choices[7][2] = "Cat&aacute;logo de clases.";
 choices[7][3] = "Cat&aacute;logo de entidades.";
 answers[7] = 3;
 units[7] = ['91'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 10032. Examen TIC A2 2014";
 preguntaids[7] = 10032


//  Id pregunta: 5627 Año de creación de pregunta: 2007
 questions[8]= "9)  El algoritmo MD5:";
 choices[8]= new Array();
 choices[8][0] = "Es un algoritmo de cifrado asim&eacute;trico.";
 choices[8][1] = "Es un algoritmo de cifrado sim&eacute;trico.";
 choices[8][2] = "Es un algoritmo de funci&oacute;n hash.";
 choices[8][3] = "Es un algoritmo de almacenamiento de la clave privada";
 answers[8] = 2;
 units[8] = ['76'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 5627. ";
 preguntaids[8] = 5627


//  Id pregunta: 5936 Año de creación de pregunta: 2007
 questions[9]= "10)  En ADO.NET para mostrar datos en un control DataGrid:";
 choices[9]= new Array();
 choices[9][0] = "Hay que vincular el control DataGrid a un objeto DataView, seleccionar &quot;Permitir ordenaci&oacute;n&quot; en elGenerador de propiedades y generar una rutina de tratamiento del evento SortCommand";
 choices[9][1] = "Hay que establecer la propiedad DataSource y DataMember del control Datalist y definir los datos vinculadospor cada control en las plantillas del control DataList";
 choices[9][2] = "Hay que asignar el objeto DataSource y opcionalmente el objeto DataKeyField en el Generador depropiedades";
 choices[9][3] = "Hay que seleccionar una opci&oacute;n de paginado del panel Paginaci&oacute;n del Generador de propiedades del controlDataGrid";
 answers[9] = 2;
 units[9] = ['63'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 5936. ";
 preguntaids[9] = 5936


//  Id pregunta: 726 Año de creación de pregunta: 2016
 questions[10]= "11)  Dado un &aacute;rbol binario, cuyo recorrido en pre-orden es 'Redhat, Debian, Fedora, Mandriva, Archilinux', &iquest;cu&aacute;l de las siguientes opciones podr&iacute;a ser un recorrido en in-orden?";
 choices[10]= new Array();
 choices[10][0] = "Fedora, Archilinux, Debian, Mandriva, Redhat.";
 choices[10][1] = "Fedora, Debian, Archilinux, Mandriva, Redhat.";
 choices[10][2] = "Debian, Fedora, Redhat, Archilinux, Mandriva.";
 choices[10][3] = "Debian, Mandriva, Fedora, Archilinux, Redhat.";
 answers[10] = 0;
 units[10] = ['68'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 726. AGE A2 2015";
 preguntaids[10] = 726


//  Id pregunta: 9821 Año de creación de pregunta: 2015
 questions[11]= "12)  El DNIe 3.0:";
 choices[11]= new Array();
 choices[11][0] = "Permite la lectura sin PIN del certificado de firma.";
 choices[11][1] = "Incorpora tecnolog&iacute;a de lectura sin contacto.";
 choices[11][2] = "Reduce la vigencia de los certificados de identificaci&oacute;n y firma a 5 a&ntilde;os.";
 choices[11][3] = "Todas las anteriores.";
 answers[11] = 1;
 units[11] = ['78'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 9821. A. Permite la lectura sin PIN del certificado de identificaci&oacute;n, no de firma. C. Amplia la vigencia de los certificados (antes 30 meses).";
 preguntaids[11] = 9821


//  Id pregunta: 10779 Año de creación de pregunta: 2015
 questions[12]= "13)  Seg&uacute;n el Real Decreto Legislativo 3/2011, para una tramitaci&oacute;n de emergencia el plazo de inicio de la ejecuci&oacute;n no podr&aacute; ser superior a:";
 choices[12]= new Array();
 choices[12][0] = "10 d&iacute;as h&aacute;biles";
 choices[12][1] = "15 d&iacute;as h&aacute;biles";
 choices[12][2] = "15 d&iacute;as naturales";
 choices[12][3] = "1 mes";
 answers[12] = 3;
 units[12] = ['10'];
 blocks[12] = ['A2'];
 comments[12] = "Id Pregunta: 10779. ";
 preguntaids[12] = 10779


//  Id pregunta: 5067 Año de creación de pregunta: 2002
 questions[13]= "14)  S-HTTP:";
 choices[13]= new Array();
 choices[13][0] = "es lo mismo que HTTPS (HTTP + SSL)";
 choices[13][1] = "responde por Secure-HTTP, y est&aacute; escasamente implantado";
 choices[13][2] = "Est&aacute; dise&ntilde;ado por los creadores del protocolo HTTP";
 choices[13][3] = "Es un protocolo del nivel de transporte";
 answers[13] = 1;
 units[13] = ['120'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 5067. ";
 preguntaids[13] = 5067


//  Id pregunta: 9101 Año de creación de pregunta: 2014
 questions[14]= "15)  El sistema de redundancia que consiste en la divisi&oacute;n a nivel de bloques m&aacute;s un disco de paridad dedicado se denomina";
 choices[14]= new Array();
 choices[14][0] = "RAID 1";
 choices[14][1] = "RAID 3";
 choices[14][2] = "RAID 4";
 choices[14][3] = "RAID 6";
 answers[14] = 2;
 units[14] = ['53'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 9101. Examen TIC-A1 2013";
 preguntaids[14] = 9101


//  Id pregunta: 1023 Año de creación de pregunta: 2016
 questions[15]= "16)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[15]= new Array();
 choices[15][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[15][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[15][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[15][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[15] = 0;
 units[15] = ['4', '7', '8', '9'];
 blocks[15] = ['A1', 'A2'];
 comments[15] = "Id Pregunta: 1023. Ley 40/2015";
 preguntaids[15] = 1023


//  Id pregunta: 9046 Año de creación de pregunta: 2014
 questions[16]= "17)  El sistema operativo OS X de Apple se llama:";
 choices[16]= new Array();
 choices[16][0] = "Maverick";
 choices[16][1] = "Mavericks";
 choices[16][2] = "Cocoa";
 choices[16][3] = "Kit Kat";
 answers[16] = 1;
 units[16] = ['59'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 9046. Maverick es el framework de java para desarrollo web";
 preguntaids[16] = 9046


//  Id pregunta: 9782 Año de creación de pregunta: 2015
 questions[17]= "18)  El servicio de verificaci&oacute;n y consulta de datos no tiene por objetivo:";
 choices[17]= new Array();
 choices[17][0] = "Dar respuesta al art&iacute;culo 28 de la Ley 39/2015, por el que los interesados no estar&aacute;n obligados a aportar documentos que hayan sido elaborados por cualquier Administraci&oacute;n.";
 choices[17][1] = "Simplificar la tramitaci&oacute;n de los procedimientos administrativos.";
 choices[17][2] = "Facilitar al ciudadano la aportaci&oacute;n de los documentos en papel que acrediten su identidad en los procedimientos administrativos.";
 choices[17][3] = "Dar cumplimiento a los derechos recogidos en la Ley 39/2015, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas.";
 answers[17] = 2;
 units[17] = ['7', '47'];
 blocks[17] = ['A2', 'B1'];
 comments[17] = "Id Pregunta: 9782. ";
 preguntaids[17] = 9782


//  Id pregunta: 9 Año de creación de pregunta: 2016
 questions[18]= "19)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[18]= new Array();
 choices[18][0] = "l Consejo General del Poder Judicial";
 choices[18][1] = "El pleno de Tribunal Constitucional";
 choices[18][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[18][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[18] = 3;
 units[18] = ['1'];
 blocks[18] = ['A1'];
 comments[18] = "Id Pregunta: 9. Constituci&oacute;n de 1978";
 preguntaids[18] = 9


//  Id pregunta: 10388 Año de creación de pregunta: 2015
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes iniciativas de la Estrategia Europa 2020 hace referencia al objetivo de crecimiento sostenible?";
 choices[19]= new Array();
 choices[19][0] = "Juventud en movimiento";
 choices[19][1] = "Una Europa que utilice eficazmente los recursos";
 choices[19][2] = "Plataforma Europea contra la pobreza";
 choices[19][3] = "Agenda Clim&aacute;tica para Europa";
 answers[19] = 1;
 units[19] = ['19'];
 blocks[19] = ['A4'];
 comments[19] = "Id Pregunta: 10388. ";
 preguntaids[19] = 10388


//  Id pregunta: 7873 Año de creación de pregunta: 2011
 questions[20]= "21)  Comparando el m&eacute;todo HTTP GET con el m&eacute;todo HTTP POST, se cumple que:";
 choices[20]= new Array();
 choices[20][0] = "S&oacute;lo HTTP GET est&aacute; definido como idempotente.";
 choices[20][1] = "Ambos requieren declaraci&oacute;n expl&iacute;cita al usarlos en un tag HTML form.";
 choices[20][2] = "S&oacute;lo HTTP POST puede soportar el env&iacute;o de varios par&aacute;metros en un form data set en una misma petici&oacute;n.";
 choices[20][3] = "S&oacute;lo HTTP POST permite que el agente de usuario haga uso del mecanismo de conexiones persistentes del protocolo.";
 answers[20] = 0;
 units[20] = ['62'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 7873. Examen TIC A1 2010";
 preguntaids[20] = 7873


//  Id pregunta: 6124 Año de creación de pregunta: 2003
 questions[21]= "22)  &iquest;Cu&aacute;l es el periodo m&aacute;ximo de validez de los certificados del DNIe?:";
 choices[21]= new Array();
 choices[21][0] = "24 meses";
 choices[21][1] = "5 a&ntilde;os";
 choices[21][2] = "30 meses";
 choices[21][3] = "4 a&ntilde;os";
 answers[21] = 1;
 units[21] = ['19'];
 blocks[21] = ['A4'];
 comments[21] = "Id Pregunta: 6124. Examen TIC A1 MAP 2007";
 preguntaids[21] = 6124


//  Id pregunta: 1740 Año de creación de pregunta: 2016
 questions[22]= "23)  Se cuenta con 4 discos f&iacute;sicos que se desea configurar como una &uacute;nica unidad, por ejemplo /root. Se desea maximizar la capacidad &uacute;til de almacenamiento proporcionando alg&uacute;n mecanismo de redundancia ante fallos. Por favor, elija entre las siguientes la mejor opci&oacute;n a utilizar:";
 choices[22]= new Array();
 choices[22][0] = "RAID 0";
 choices[22][1] = "RAID 1";
 choices[22][2] = "RAID 0+1";
 choices[22][3] = "RAID 5";
 answers[22] = 3;
 units[22] = ['53'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 1740. ";
 preguntaids[22] = 1740


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[23]= "24)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[23]= new Array();
 choices[23][0] = "Tres a&ntilde;os.";
 choices[23][1] = "Cuatro a&ntilde;os.";
 choices[23][2] = "Cinco a&ntilde;os.";
 choices[23][3] = "Seis a&ntilde;os.";
 answers[23] = 3;
 units[23] = ['5'];
 blocks[23] = ['A1'];
 comments[23] = "Id Pregunta: 143. Uni&oacute;n Europea";
 preguntaids[23] = 143


//  Id pregunta: 975 Año de creación de pregunta: 2016
 questions[24]= "25)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[24]= new Array();
 choices[24][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[24][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[24][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[24][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[24] = 0;
 units[24] = ['4', '7', '8', '9'];
 blocks[24] = ['A1', 'A2'];
 comments[24] = "Id Pregunta: 975. Ley 40/2015";
 preguntaids[24] = 975


//  Id pregunta: 9940 Año de creación de pregunta: 2015
 questions[25]= "26)  &iquest;En qu&eacute; a&ntilde;o se public&oacute; la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n?";
 choices[25]= new Array();
 choices[25][0] = "2010";
 choices[25][1] = "2011";
 choices[25][2] = "2013";
 choices[25][3] = "2015";
 answers[25] = 2;
 units[25] = ['44'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 9940. ";
 preguntaids[25] = 9940


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[26]= "27)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[26]= new Array();
 choices[26][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[26][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[26][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[26][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[26] = 1;
 units[26] = ['19'];
 blocks[26] = ['A4'];
 comments[26] = "Id Pregunta: 485. Sociedad de la informaci&oacute;n";
 preguntaids[26] = 485


//  Id pregunta: 5695 Año de creación de pregunta: 2007
 questions[27]= "28)  Las siglas CCNA se corresponden con:";
 choices[27]= new Array();
 choices[27][0] = "Una metodolog&iacute;a de gesti&oacute;n de proyectos en Tecnolog&iacute;as de is Informaci&oacute;n.";
 choices[27][1] = "Una metodolog&iacute;a para el an&aacute;lisis y gesti&oacute;n de riesgos en Tecnolog&iacute;as de Ia Informaci&oacute;n.";
 choices[27][2] = "Metodolog&iacute;a de gesti&oacute;n de Ia seguridad en las Tecnolog&iacute;as de Ia Informaci&oacute;n.";
 choices[27][3] = "Una certificaci&oacute;n de Cisco.";
 answers[27] = 3;
 units[27] = ['102'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 5695. ";
 preguntaids[27] = 5695


//  Id pregunta: 2247 Año de creación de pregunta: 2009
 questions[28]= "29)  La transferencia internacional de datos de car&aacute;cter personal con destino a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable sin autorizaci&oacute;n del Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos salvo en los supuestos en los que conforme a la LOPD y sus disposiciones de desarrollo dicha autorizaci&oacute;n no resulta necesaria, es una infracci&oacute;n:";
 choices[28]= new Array();
 choices[28][0] = "Leve";
 choices[28][1] = "Grave";
 choices[28][2] = "Muy grave";
 choices[28][3] = "No es infracci&oacute;n";
 answers[28] = 2;
 units[28] = ['35'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 2247. ";
 preguntaids[28] = 2247


//  Id pregunta: 3184 Año de creación de pregunta: 2003
 questions[29]= "30)  &iquest;Sobre qu&eacute; versa el est&aacute;ndar PKCS7 de criptograf&iacute;a?";
 choices[29]= new Array();
 choices[29][0] = "Formato de certificado digital";
 choices[29][1] = "Formato de sobre digital";
 choices[29][2] = "Cifrado con clave privada";
 choices[29][3] = "Sintaxis de la clave privada";
 answers[29] = 1;
 units[29] = ['78'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 3184. ";
 preguntaids[29] = 3184


//  Id pregunta: 10034 Año de creación de pregunta: 2015
 questions[30]= "31)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones sobre la arquitectura ANSI/SPARC es correcta:";
 choices[30]= new Array();
 choices[30][0] = "El nivel externo tambi&eacute;n recibe el nombre de nivel f&iacute;sico.";
 choices[30][1] = "El nivel interno tambi&eacute;n recibe el nombre de nivel l&oacute;gico.";
 choices[30][2] = "El nivel externo define los datos que se almacenan en la base de datos y las relaciones entre ellos.";
 choices[30][3] = "El nivel externo contiene las vistas externas de la base de datos y permite ver a cada tipo de usuario s&oacute;lo aquella parte del esquema que es de su inter&eacute;s.";
 answers[30] = 3;
 units[30] = ['60'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 10034. Examen TIC A2 2014";
 preguntaids[30] = 10034


//  Id pregunta: 3780 Año de creación de pregunta: 2002
 questions[31]= "32)  El flujo de datos de un DFD:";
 choices[31]= new Array();
 choices[31][0] = "Tiene siempre flechas";
 choices[31][1] = "No tiene por qu&eacute; existir";
 choices[31][2] = "S&oacute;lo conecta procesos";
 choices[31][3] = "Ninguna de las anteriores";
 answers[31] = 3;
 units[31] = ['85', '86'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 3780. ";
 preguntaids[31] = 3780


//  Id pregunta: 1457 Año de creación de pregunta: 2016
 questions[32]= "33)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres y promover su efectividad, que se define en la ley 3/2007 es:";
 choices[32]= new Array();
 choices[32][0] = "La Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[32][1] = "El Observatorio Nacional de Igualdad entre mujeres y hombres.";
 choices[32][2] = "La Comisi&oacute;n Nacional de Igualdad entre mujeres y hombres.";
 choices[32][3] = "El comit&eacute; de Igualdad efectiva entre mujeres y hombres.";
 answers[32] = 0;
 units[32] = ['14'];
 blocks[32] = ['A3'];
 comments[32] = "Id Pregunta: 1457. ";
 preguntaids[32] = 1457


//  Id pregunta: 3554 Año de creación de pregunta: 2004
 questions[33]= "34)  En el dise&ntilde;o estructurado, se&ntilde;ale la definici&oacute;n correcta de FAN-OUT.";
 choices[33]= new Array();
 choices[33][0] = "Es el n&uacute;mero de superordinados inmediatos de un m&oacute;dulo.";
 choices[33][1] = "Es el n&uacute;mero de subordinados inmediatos de un m&oacute;dulo.";
 choices[33][2] = "Es el n&uacute;mero de m&oacute;dulos que hay que compilar antes del m&oacute;dulo.";
 choices[33][3] = "Es el n&uacute;mero de par&aacute;metros de salida que tiene un m&oacute;dulo.";
 answers[33] = 1;
 units[33] = ['89'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 3554. TIC MAP B 2004";
 preguntaids[33] = 3554


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[34]= "35)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[34]= new Array();
 choices[34][0] = "El Presidente y su gabinete.";
 choices[34][1] = "El Presidente y sus Ministros.";
 choices[34][2] = "El Rey y el Presidente.";
 choices[34][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[34] = 3;
 units[34] = ['1'];
 blocks[34] = ['A1'];
 comments[34] = "Id Pregunta: 84. Constituci&oacute;n de 1978";
 preguntaids[34] = 84


//  Id pregunta: 10738 Año de creación de pregunta: 2015
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes acciones NO es necesaria para implantar en una organizaci&oacute;n la Calidad Total?";
 choices[35]= new Array();
 choices[35][0] = "Lograr el compromiso de todos los niveles de direcci&oacute;n.";
 choices[35][1] = "Adoptar el Modelo CMMI.";
 choices[35][2] = "Formar en las t&eacute;cnicas y herramientas de la Calidad";
 choices[35][3] = "Son necesarias todas las acciones anteriores.";
 answers[35] = 1;
 units[35] = ['92'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 10738. ";
 preguntaids[35] = 10738


//  Id pregunta: 966 Año de creación de pregunta: 2016
 questions[36]= "37)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[36]= new Array();
 choices[36][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[36][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[36][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[36][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[36] = 2;
 units[36] = ['4', '7', '8', '9'];
 blocks[36] = ['A1', 'A2'];
 comments[36] = "Id Pregunta: 966. Ley 40/2015";
 preguntaids[36] = 966


//  Id pregunta: 4738 Año de creación de pregunta: 2002
 questions[37]= "38)  El protocolo de comunicaciones denominado HDLC, es un protocolo orientado a:";
 choices[37]= new Array();
 choices[37][0] = "Car&aacute;cter, de modos: ARM, ABM y SRM";
 choices[37][1] = "Bit , de modos: ARM, ABM y SRM";
 choices[37][2] = "Car&aacute;cter, con cadencia secuencial";
 choices[37][3] = "Bit, con cadencia secuencial";
 answers[37] = 1;
 units[37] = ['105'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 4738. ";
 preguntaids[37] = 4738


//  Id pregunta: 8516 Año de creación de pregunta: 2011
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes es un motor para la creaci&oacute;n de servicios Web en Java?";
 choices[38]= new Array();
 choices[38][0] = "Apache Axis2";
 choices[38][1] = "Hibernate";
 choices[38][2] = "Struts";
 choices[38][3] = "TopLink";
 answers[38] = 0;
 units[38] = ['64'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 8516. ";
 preguntaids[38] = 8516


//  Id pregunta: 8332 Año de creación de pregunta: 2011
 questions[39]= "40)  &iquest;Cu&aacute;l de estas normas especifica los requisitos para un buen sistema de gesti&oacute;n de calidad?";
 choices[39]= new Array();
 choices[39][0] = "ISO 9001";
 choices[39][1] = "ISO 9000";
 choices[39][2] = "ISO 9004";
 choices[39][3] = "ISO 19011";
 answers[39] = 0;
 units[39] = ['92'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 8332. Examen UPM A2 2011";
 preguntaids[39] = 8332


//  Id pregunta: 1781 Año de creación de pregunta: 2016
 questions[40]= "41)  En el &aacute;mbito de ITIL, &iquest;cu&aacute;les de los siguientes procesos incluye la necesidad de realizar una Evaluaci&oacute;n y Gesti&oacute;n de Riesgo? 1. Gesti&oacute;n de Continuidad de Servicios de TI 2. Gesti&oacute;n de Seguridad de la Informaci&oacute;n 3. Gesti&oacute;n del Nivel de Servicio";
 choices[40]= new Array();
 choices[40][0] = "Todos.";
 choices[40][1] = "S&oacute;lo 1 y 3.";
 choices[40][2] = "S&oacute;lo 2 y 3.";
 choices[40][3] = "S&oacute;lo 1 y 2.";
 answers[40] = 3;
 units[40] = ['101'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 1781. ";
 preguntaids[40] = 1781


//  Id pregunta: 1040 Año de creación de pregunta: 2016
 questions[41]= "42)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[41]= new Array();
 choices[41][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[41][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[41][2] = "A y B son correctas.";
 choices[41][3] = "A y B son incorrectas.";
 answers[41] = 2;
 units[41] = ['4', '7', '8', '9'];
 blocks[41] = ['A1', 'A2'];
 comments[41] = "Id Pregunta: 1040. Ley 40/2015";
 preguntaids[41] = 1040


//  Id pregunta: 5651 Año de creación de pregunta: 2007
 questions[42]= "43)  El sistema UMTS tiene asignadas en Europa bandas de trabajo en torno a Ia frecuencia de:";
 choices[42]= new Array();
 choices[42][0] = "800 MHz y 2 GHz";
 choices[42][1] = "900 MHz y 2 GHz";
 choices[42][2] = "800 MHz y 11 GHz";
 choices[42][3] = "900 MHz y 5 GHz";
 answers[42] = 1;
 units[42] = ['117'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 5651. Desde el a&ntilde;o 2011 se incluye tambi&eacute;n la banda de 900MHz para servicios 3G";
 preguntaids[42] = 5651


//  Id pregunta: 6387 Año de creación de pregunta: 2003
 questions[43]= "44)  En el directorio activo de Microsoft la definici&oacute;n de todas las definiciones de clases de todos los objetos y atributos del directorio activo se encuentra en el";
 choices[43]= new Array();
 choices[43][0] = "Schema Naming Context";
 choices[43][1] = "Active Directory Schema MMC";
 choices[43][2] = "Configuration Naming Context";
 choices[43][3] = "Domain Naming Context";
 answers[43] = 0;
 units[43] = ['78'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 6387. Examen 2006 JCYL";
 preguntaids[43] = 6387


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[44]= new Array();
 choices[44][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[44][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[44][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[44][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[44] = 1;
 units[44] = ['7'];
 blocks[44] = ['A2'];
 comments[44] = "Id Pregunta: 252. Ley 39/2015";
 preguntaids[44] = 252


//  Id pregunta: 365 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[45]= new Array();
 choices[45][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[45][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[45][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[45][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[45] = 0;
 units[45] = ['14'];
 blocks[45] = ['A3'];
 comments[45] = "Id Pregunta: 365. Pol&iacute;ticas de igualdad";
 preguntaids[45] = 365


//  Id pregunta: 4865 Año de creación de pregunta: 2002
 questions[46]= "47)  Indique la opci&oacute;n que mejor refleje el servicio ofrecido por las compa&ntilde;&iacute;as de telecomunicaci&oacute;n, como conmutaci&oacute;n de circuitos:";
 choices[46]= new Array();
 choices[46][0] = "Es cuando un terminal indica a la red, mediante la se&ntilde;alizaci&oacute;n adecuada, el destino de la informaci&oacute;n, la entrega a la red y libera el circuito";
 choices[46][1] = "Es cuando un terminal indica a la red, mediante la se&ntilde;alizaci&oacute;n adecuada, el destino de la informaci&oacute;n, se establece el circuito y se dispone de un ancho de banda variable";
 choices[46][2] = "Es cuando un terminal indica a la red, mediante la se&ntilde;alizaci&oacute;n adecuada, el destino de la informaci&oacute;n, se establece el circuito y se env&iacute;a la informaci&oacute;n en paquetes";
 choices[46][3] = "Es cuando un terminal indica a la red, mediante la se&ntilde;alizaci&oacute;n adecuada, el destino de la informaci&oacute;n, se establece el circuito y se dispone de un ancho de banda de transmisi&oacute;n fijo durante todo el tiempo que permanece establecido el cto";
 answers[46] = 3;
 units[46] = ['112'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 4865. ";
 preguntaids[46] = 4865


//  Id pregunta: 101 Año de creación de pregunta: 2016
 questions[47]= "48)  Se&ntilde;ale la respuesta correcta:";
 choices[47]= new Array();
 choices[47][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[47][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[47][2] = "Las respuestas A y B son correctas.";
 choices[47][3] = "Las respuestas A y B son falsas.";
 answers[47] = 2;
 units[47] = ['5'];
 blocks[47] = ['A1'];
 comments[47] = "Id Pregunta: 101. Uni&oacute;n Europea";
 preguntaids[47] = 101


//  Id pregunta: 309 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n Ley 47/2003, de 26 de noviembre, General Presupuestaria, el conjunto de gastos que se considera necesario realizar en el desarrollo de actividades orientadas a la consecuci&oacute;n de determinados objetivos preestablecidos es:";
 choices[48]= new Array();
 choices[48][0] = "Un programa presupuestario.";
 choices[48][1] = "Un concepto presupuestario.";
 choices[48][2] = "Una aplicaci&oacute;n presupuestaria.";
 choices[48][3] = "Un cr&eacute;dito presupuestario.";
 answers[48] = 0;
 units[48] = ['11'];
 blocks[48] = ['A2'];
 comments[48] = "Id Pregunta: 309. Presupuestos generales";
 preguntaids[48] = 309


//  Id pregunta: 604 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ale la afirmaci&oacute;n correcta respecto a las caracter&iacute;sticas generales de las copias electr&oacute;nicas aut&eacute;nticas.";
 choices[49]= new Array();
 choices[49][0] = "Se expedir&aacute;n &uacute;nicamente a partir de documentos con calidad de original.";
 choices[49][1] = "Ser&aacute;n firmadas mediante alguno de los sistemas de firma previstos en la legislaci&oacute;n aplicable.";
 choices[49][2] = "Ser&aacute;n nuevos documentos electr&oacute;nicos que incluir&aacute;n el contenido completo del documento sobre el que se expiden.";
 choices[49][3] = "Sus metadatos tendr&aacute;n los mismos valores que el documento original.";
 answers[49] = 1;
 units[49] = ['43'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 604. NTI";
 preguntaids[49] = 604


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[50]= "51)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[50]= new Array();
 choices[50][0] = "Un Reglamento.";
 choices[50][1] = "Un Decreto.";
 choices[50][2] = "Una Ley.";
 choices[50][3] = "Un Real-Decreto.";
 answers[50] = 2;
 units[50] = ['5'];
 blocks[50] = ['A1'];
 comments[50] = "Id Pregunta: 190. Uni&oacute;n Europea";
 preguntaids[50] = 190


//  Id pregunta: 3470 Año de creación de pregunta: 2006
 questions[51]= "52)  La firma electr&oacute;nica avanzada es aquella que cumple que:";
 choices[51]= new Array();
 choices[51][0] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n y est&aacute; creada por un dispositivo de control de firma seguro.";
 choices[51][1] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n, est&aacute; creada por un dispositivo de control de firma seguro, tiene control exclusivo del firmante al crearla y no est&aacute; vinculada a los datos.";
 choices[51][2] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n, tiene control exclusivo del firmante al crearla y est&aacute; vinculada a los datos.";
 choices[51][3] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n, tiene control exclusivo de firmante al crearla y est&aacute; basada en un certificado reconocido.";
 answers[51] = 2;
 units[51] = ['19'];
 blocks[51] = ['A4'];
 comments[51] = "Id Pregunta: 3470. ";
 preguntaids[51] = 3470


//  Id pregunta: 2075 Año de creación de pregunta: 2002
 questions[52]= "53)  De acuerdo con la Ley de Protecci&oacute;n de Datos, mantener los ficheros, locales, programas o equipos que contengan datos de car&aacute;cter personal sin las debidas condiciones de seguridad que por v&iacute;a reglamentaria se determinen, es una infracci&oacute;n:";
 choices[52]= new Array();
 choices[52][0] = "Leve";
 choices[52][1] = "Grave";
 choices[52][2] = "Muy grave";
 choices[52][3] = "No es infracci&oacute;n";
 answers[52] = 1;
 units[52] = ['35'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 2075. ";
 preguntaids[52] = 2075


//  Id pregunta: 3602 Año de creación de pregunta: 2004
 questions[53]= "54)  Son comunes a todas las metodolog&iacute;as de desarrollo de SW";
 choices[53]= new Array();
 choices[53][0] = "Uso de t&eacute;cnicas Gr&aacute;ficas";
 choices[53][1] = "Documentaci&oacute;n";
 choices[53][2] = "Diccionario de datos";
 choices[53][3] = "todas las anteriores";
 answers[53] = 3;
 units[53] = ['84', '86'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 3602. ";
 preguntaids[53] = 3602


//  Id pregunta: 8981 Año de creación de pregunta: 2013
 questions[54]= "55)  Seg&uacute;n la Ley de Firma Electr&oacute;nica, se&ntilde;ale cu&aacute;l NO es un supuesto que exima al prestador de servicios de certificaci&oacute;n de la responsabilidad sobre los posibles da&ntilde;os y perjuicios causados a un firmante:";
 choices[54]= new Array();
 choices[54][0] = "Cuando el firmante no haya proporcionado al prestador informaci&oacute;n veraz, completa y exacta de los datos que deban constar en el certificado en el momento de emitir el mismo";
 choices[54][1] = "Cuado el firmante no haya comunicado al prestador cualquier cambio en las circunstancias reflejadas en el certificado electr&oacute;nico";
 choices[54][2] = "Cuando el firmante haya sido negligente en la conservaci&oacute;n de sus datos de creaci&oacute;n de firma";
 choices[54][3] = "Cuando el firmante utilice un certificado revocado sin que el prestador le haya notificado la suspensi&oacute;n de la vigencia";
 answers[54] = 3;
 units[54] = ['19'];
 blocks[54] = ['A4'];
 comments[54] = "Id Pregunta: 8981. Ley 59/2003, art&iacute;culo 23";
 preguntaids[54] = 8981


//  Id pregunta: 8613 Año de creación de pregunta: 2013
 questions[55]= "56)  La norma ISO referida a la calidad en la informaci&oacute;n geogr&aacute;fica es:";
 choices[55]= new Array();
 choices[55][0] = "ISO 19110";
 choices[55][1] = "ISO 19113";
 choices[55][2] = "ISO 19119";
 choices[55][3] = "ISO 19139";
 answers[55] = 1;
 units[55] = ['71'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 8613. ";
 preguntaids[55] = 8613


//  Id pregunta: 3465 Año de creación de pregunta: 2006
 questions[56]= "57)  Se&ntilde;ale la correcta:";
 choices[56]= new Array();
 choices[56][0] = "El protocolo X500 es un est&aacute;ndar de la IETF";
 choices[56][1] = "El est&aacute;ndar de certificados digitales X509v3 introdujo el concepto de extensi&oacute;n";
 choices[56][2] = "El protocolo de la ITU LDAP dispone su informaci&oacute;n relacionada jer&aacute;rquicamente.";
 choices[56][3] = "Ninguna de las anteriores";
 answers[56] = 1;
 units[56] = ['77'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 3465. ";
 preguntaids[56] = 3465


//  Id pregunta: 1782 Año de creación de pregunta: 2016
 questions[57]= "58)  El art. 9 del Real Decreto 4/2010, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n electr&oacute;nica, se refiere al inventario de informaci&oacute;n administrativa, y establece que las administraciones p&uacute;blicas deber&aacute;n mantener en &eacute;l:";
 choices[57]= new Array();
 choices[57][0] = "Los procedimientos administrativos y servicios que prestan de forma clasificada y estructurados en familias, con indicaci&oacute;n del nivel de informatizaci&oacute;n de los mismos.";
 choices[57][1] = "La relaci&oacute;n actualizada de los &oacute;rganos de direcci&oacute;n de los organismos y entidades de la administraci&oacute;n p&uacute;blica.";
 choices[57][2] = "La relaci&oacute;n de los documentos o datos que puede facilitar a otras administraciones a trav&eacute;s de un nodo de interoperabilidad, indicando las condiciones de acceso y uso del mismo.";
 choices[57][3] = "La relaci&oacute;n de sedes electr&oacute;nicas que complementan la red de oficinas de registro y atenci&oacute;n al ciudadano.";
 answers[57] = 0;
 units[57] = ['43'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 1782. ";
 preguntaids[57] = 1782


//  Id pregunta: 930 Año de creación de pregunta: 2016
 questions[58]= "59)  Respecto a la Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado, se&ntilde;ale la respuesta falsa:";
 choices[58]= new Array();
 choices[58][0] = "Proporciona un marco de criterios, recomendaciones y buenas pr&aacute;cticas a tener en cuenta por sus Departamentos y organismos al crear, generar contenidos o evolucionar los sitios y portales web, las sedes electr&oacute;nicas o los sitios relacionados con las nuevas tecnolog&iacute;as web2.0.";
 choices[58][1] = "Se aprob&oacute; mediante la  Resoluci&oacute;n de 21 de marzo de 2013, de la Secretar&iacute;a de Estado de Administraciones P&uacute;blicas.";
 choices[58][2] = "La Gu&iacute;a de Comunicaci&oacute;n Digital se divide en cuatro partes y cada una de ellas consta de una serie de fasc&iacute;culos que pueden ser utilizados de forma independiente de acuerdo con las necesidades de cada departamento, organismo, unidad promotora o responsable de un sitio web.";
 choices[58][3] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado puede ser utilizada libremente y no requiere autorizaci&oacute;n previa.";
 answers[58] = 2;
 units[58] = ['125'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 930. Gu&iacute;a de Comunicaci&oacute;n Digital de la AGE";
 preguntaids[58] = 930


//  Id pregunta: 5233 Año de creación de pregunta: 2006
 questions[59]= "60)  De las siguientes tecnolog&iacute;as xDSL, &iquest;cu&aacute;l de ellas puede ser asim&eacute;trica?";
 choices[59]= new Array();
 choices[59][0] = "HDSL";
 choices[59][1] = "SDSL";
 choices[59][2] = "VDSL";
 choices[59][3] = "SHDSL";
 answers[59] = 2;
 units[59] = ['108'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 5233. ";
 preguntaids[59] = 5233


//  Id pregunta: 2518 Año de creación de pregunta: 2004
 questions[60]= "61)  En inteligencia artificial, los marcos";
 choices[60]= new Array();
 choices[60][0] = "Internamente est&aacute;n formados por ranuras, cada una de las cuales representa una caracter&iacute;stica del marco";
 choices[60][1] = "Requieren de un proceso de entrenamiento previo, al igual que las redes neuronales.";
 choices[60][2] = "Utiliza como estrategias de inferencia en el proceso deductivo las estrategias en X, Y y Z";
 choices[60][3] = "Se representan mediante nodos y arcos";
 answers[60] = 0;
 units[60] = ['68'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 2518. Similar a examen TIC SS A 2003";
 preguntaids[60] = 2518


//  Id pregunta: 86 Año de creación de pregunta: 2016
 questions[61]= "62)  La iniciativa legislativa corresponde:";
 choices[61]= new Array();
 choices[61][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[61][1] = "Al rey y al Gobierno.";
 choices[61][2] = "Al Congreso, al Senado y al Rey.";
 choices[61][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[61] = 3;
 units[61] = ['1'];
 blocks[61] = ['A1'];
 comments[61] = "Id Pregunta: 86. Constituci&oacute;n de 1978";
 preguntaids[61] = 86


//  Id pregunta: 2991 Año de creación de pregunta: 2002
 questions[62]= "63)  MPI:";
 choices[62]= new Array();
 choices[62][0] = "Es una librer&iacute;a para programaci&oacute;n por paso de mensajes, en entornos distribuidos";
 choices[62][1] = "Es una m&aacute;quina virtual que ejecuta los programas, independientemente del lenguaje con el que se escribieran";
 choices[62][2] = "Es una manera de llamar a todas las aplicaciones que hacen uso de SOAP sobre HTTP";
 choices[62][3] = "Todas son falsas";
 answers[62] = 0;
 units[62] = ['55'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 2991. ";
 preguntaids[62] = 2991


//  Id pregunta: 3755 Año de creación de pregunta: 2002
 questions[63]= "64)  Dentro de la m&eacute;trica de los factores de calidad, indicar la afirmaci&oacute;n falsa:";
 choices[63]= new Array();
 choices[63][0] = "Las m&eacute;tricas, son medidas cuantitativas del grado que tiene el software de un atributo dado";
 choices[63][1] = "Los criterios, son aquellos elementos internos o de los realizadores, relativos a la forma y estructura de programas, datos y documentos";
 choices[63][2] = "Los factores, son aqu&eacute;llos elementos externos o del usuario, relativos al comportamiento actual del software, su facilidad de cambio, y a su facilidad de conversi&oacute;n";
 choices[63][3] = "La relaci&oacute;n existente entre los tres grupos es: una vez definidos los criterios a medir, los factores sirven para cuantificar dichos criterios, y posteriormente la valoraci&oacute;n cuantitativa de los factores se lleva a cabo mediante la utilizaci&oacute;n de m&eacute;tricas";
 answers[63] = 3;
 units[63] = ['93'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 3755. ";
 preguntaids[63] = 3755


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[64]= "65)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[64]= new Array();
 choices[64][0] = "El Rey.";
 choices[64][1] = "El Jefe del Estado.";
 choices[64][2] = "El Gobierno.";
 choices[64][3] = "El Presidente del Gobierno.";
 answers[64] = 2;
 units[64] = ['1'];
 blocks[64] = ['A1'];
 comments[64] = "Id Pregunta: 35. Constituci&oacute;n de 1978";
 preguntaids[64] = 35


//  Id pregunta: 609 Año de creación de pregunta: 2016
 questions[65]= "66)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[65]= new Array();
 choices[65][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[65][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[65][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[65][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[65] = 0;
 units[65] = ['45'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 609. Integraci&oacute;n continua";
 preguntaids[65] = 609


//  Id pregunta: 1168 Año de creación de pregunta: 2016
 questions[66]= "67)  Indique cu&aacute;l de las siguientes NO est&aacute; relacionada con la persistencia para Java EE:";
 choices[66]= new Array();
 choices[66][0] = "JPA.";
 choices[66][1] = "Hibernate.";
 choices[66][2] = "JSON.";
 choices[66][3] = "iBATIS.";
 answers[66] = 2;
 units[66] = ['64'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 1168. ";
 preguntaids[66] = 1168


//  Id pregunta: 10496 Año de creación de pregunta: 2015
 questions[67]= "68)  Se&ntilde;ale la norma que no est&aacute; asociada correctamente a su contenido";
 choices[67]= new Array();
 choices[67][0] = "ISO 15408 - Common criteria";
 choices[67][1] = "RFC 2527 - DPC (Declaraci&oacute;n de Pr&aacute;cticas de Certificaci&oacute;n)";
 choices[67][2] = "CWA 14890 - Protocolo de autenticaci&oacute;n mutua, usado para el certificado de componente del DNI";
 choices[67][3] = "RFC 5246 - IPSEC";
 answers[67] = 3;
 units[67] = ['45', '78', '119'];
 blocks[67] = ['B1', 'B2', 'B4'];
 comments[67] = "Id Pregunta: 10496. El RFC 5246 describe TLS. IPSEC es descrito en RFC 4305";
 preguntaids[67] = 10496


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[68]= "69)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[68]= new Array();
 choices[68][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[68][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[68][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[68][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[68] = 2;
 units[68] = ['22'];
 blocks[68] = ['A4'];
 comments[68] = "Id Pregunta: 505. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[68] = 505


//  Id pregunta: 9481 Año de creación de pregunta: 2014
 questions[69]= "70)  En el modelo E-R de Chen, las interrelaciones entre entidades se clasifican en unarias, binarias o n-arias en funci&oacute;n del:";
 choices[69]= new Array();
 choices[69][0] = "Grado";
 choices[69][1] = "Tipo de correspondencia";
 choices[69][2] = "Cardinalidad";
 choices[69][3] = "Ninguna de las anteriores";
 answers[69] = 0;
 units[69] = ['85'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 9481. ";
 preguntaids[69] = 9481


//  Id pregunta: 1372 Año de creación de pregunta: 2016
 questions[70]= "71)  Comparando NAS (Network-attacheda Storage) con SAN (Storage Area Network):";
 choices[70]= new Array();
 choices[70][0] = "NAS opera a nivel de fichero y SAN a nivel de bloque.";
 choices[70][1] = "NAS opera a nivel de bloque y SAN a nivel de fichero.";
 choices[70][2] = "Ambos operan a nivel de bloque.";
 choices[70][3] = "Ambos operan a nivel de fichero.";
 answers[70] = 0;
 units[70] = ['53'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 1372. ";
 preguntaids[70] = 1372


//  Id pregunta: 3686 Año de creación de pregunta: 2002
 questions[71]= "72)  Indique cu&aacute;l de las respuestas no forma parte de la documentaci&oacute;n t&eacute;cnica de un sistema de informaci&oacute;n:";
 choices[71]= new Array();
 choices[71][0] = "Relaci&oacute;n condiciones de error-acciones";
 choices[71][1] = "Descripciones narrativas de los m&oacute;dulos de los programas";
 choices[71][2] = "Listados del c&oacute;digo objeto";
 choices[71][3] = "Procedimientos de backup-recovery";
 answers[71] = 2;
 units[71] = ['85'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 3686. ";
 preguntaids[71] = 3686


//  Id pregunta: 487 Año de creación de pregunta: 2016
 questions[72]= "73)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[72]= new Array();
 choices[72][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[72][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[72][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[72][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[72] = 1;
 units[72] = ['19'];
 blocks[72] = ['A4'];
 comments[72] = "Id Pregunta: 487. Sociedad de la informaci&oacute;n";
 preguntaids[72] = 487


//  Id pregunta: 9838 Año de creación de pregunta: 2015
 questions[73]= "74)  BPMN (Business Process Model and Notation)...";
 choices[73]= new Array();
 choices[73][0] = "&hellip; es una notaci&oacute;n gr&aacute;fica.";
 choices[73][1] = "&hellip; es una notaci&oacute;n basada en etiquetas de texto.";
 choices[73][2] = "&hellip; es una metodolog&iacute;a para el modelado de procesos de negocio.";
 choices[73][3] = "&hellip; est&aacute; destinado &uacute;nicamente a los analistas de negocio.";
 answers[73] = 0;
 units[73] = ['86'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 9838. ";
 preguntaids[73] = 9838


//  Id pregunta: 1036 Año de creación de pregunta: 2016
 questions[74]= "75)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[74]= new Array();
 choices[74][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[74][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[74][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[74][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[74] = 1;
 units[74] = ['4', '7', '8', '9'];
 blocks[74] = ['A1', 'A2'];
 comments[74] = "Id Pregunta: 1036. Ley 40/2015";
 preguntaids[74] = 1036


