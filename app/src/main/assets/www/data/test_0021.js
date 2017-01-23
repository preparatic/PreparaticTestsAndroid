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
//  Id pregunta: 6187 Año de creación de pregunta: 2003
 questions[0]= "1)  En el tercer nivel del modelo de arquitectura cliente/servidor, llamado proceso distribuido, las funciones de presentaci&oacute;n residen en:";
 choices[0]= new Array();
 choices[0][0] = "El cliente";
 choices[0][1] = "El servidor";
 choices[0][2] = "La red";
 choices[0][3] = "Se reparten entre cliente y el servidor";
 answers[0] = 0;
 units[0] = ['55'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 6187. Examen TIC A Castilla La Mancha 2007";
 preguntaids[0] = 6187


//  Id pregunta: 5906 Año de creación de pregunta: 2007
 questions[1]= "2)  &iquest;Qu&eacute; tipo de documento NO es publicado por el Instituto Europeo de Normas de Telecomunicaciones (ETSI)?";
 choices[1]= new Array();
 choices[1][0] = "Gu&iacute;a ETSI";
 choices[1][1] = "Norma ETSI";
 choices[1][2] = "Recomendaci&oacute;n ETSI";
 choices[1][3] = "Especificaci&oacute;n t&eacute;cnica ETSI";
 answers[1] = 2;
 units[1] = ['48'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 5906. ";
 preguntaids[1] = 5906


//  Id pregunta: 8433 Año de creación de pregunta: 2011
 questions[2]= "3)  Los certificados de sello electr&oacute;nico contemplados en la ley 18/2011 tendr&aacute;n al menos:";
 choices[2]= new Array();
 choices[2][0] = "N&uacute;mero de identificaci&oacute;n fiscal del suscriptor";
 choices[2][1] = "Actuaciones y documentos en los que podr&aacute;n ser utilizados";
 choices[2][2] = "N&uacute;mero de identificaci&oacute;n judicial";
 choices[2][3] = "Ninguno de los anteriores";
 answers[2] = 2;
 units[2] = ['2'];
 blocks[2] = ['A1'];
 comments[2] = "Id Pregunta: 8433. ";
 preguntaids[2] = 8433


//  Id pregunta: 6940 Año de creación de pregunta: 2010
 questions[3]= "4)  Indique la afirmaci&oacute;n falsa sobre los sistemas de correo electr&oacute;nico SMTP:";
 choices[3]= new Array();
 choices[3][0] = "Es posible establecer DNS blacklist y whitelist en el cliente de correo y/o en el servidor.";
 choices[3][1] = "SMTP permite enviar mensajes codificados seg&uacute;n ASCII de 7 bits y longitud m&aacute;xima de 1000 caracteres.";
 choices[3][2] = "La cabecera MIME-Version debe contener el valor 2.0";
 choices[3][3] = "La cabecera de un mensaje de correo SMTP se especifica en la RFC 822.";
 answers[3] = 2;
 units[3] = ['116'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 6940. ";
 preguntaids[3] = 6940


//  Id pregunta: 7580 Año de creación de pregunta: 2010
 questions[4]= "5)  En una base de datos relacional en la cual K es una clave primaria simple de una relaci&oacute;n R1, y el atributo A, perteneciente a una clave compuesta de una relaci&oacute;n R2, est&aacute; definido en el mismo dominio que K, &iquest;cu&aacute;l de las siguientes afirmaciones NO es cierta?";
 choices[4]= new Array();
 choices[4][0] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A es primaria, debe existir un valor de K en R1 cuyo valor sea igual al valor de A.";
 choices[4][1] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A no es primaria, A puede tener un valor diferente a los posibles valores de K.";
 choices[4][2] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A es primaria, A no puede tener un valor nulo.";
 choices[4][3] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A no es primaria, A puede tener un valor nulo.";
 answers[4] = 1;
 units[4] = ['61'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 7580. Map 2006";
 preguntaids[4] = 7580


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[5]= new Array();
 choices[5][0] = "23";
 choices[5][1] = "25";
 choices[5][2] = "14";
 choices[5][3] = "18";
 answers[5] = 1;
 units[5] = ['5'];
 blocks[5] = ['A1'];
 comments[5] = "Id Pregunta: 163. Uni&oacute;n Europea";
 preguntaids[5] = 163


//  Id pregunta: 716 Año de creación de pregunta: 2016
 questions[6]= "7)  En relaci&oacute;n a Java y JavaScript indique la respuesta FALSA:";
 choices[6]= new Array();
 choices[6][0] = "JavaScript es un lenguaje de programaci&oacute;n posterior a Java.";
 choices[6][1] = "Java JDK 8 no integra un motor de JavaScript.";
 choices[6][2] = "JavaScript es un lenguaje interpretado, y Java es compilado.";
 choices[6][3] = "JavaScript es est&aacute;ndar, Java no.";
 answers[6] = 1;
 units[6] = ['64'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 716. AGE A2 2015";
 preguntaids[6] = 716


//  Id pregunta: 1416 Año de creación de pregunta: 2016
 questions[7]= "8)  La Constituci&oacute;n Espa&ntilde;ola de 1978 se estructura en :";
 choices[7]= new Array();
 choices[7][0] = "169 art&iacute;culos, 9 disposiciones adicionales, 4 transitorias, 1 disposici&oacute;n final.";
 choices[7][1] = "167 art&iacute;culos, 4 disposiciones adicionales, 9 transitorias, 1 disposici&oacute;n derogatoria y 1 disposici&oacute;n final.";
 choices[7][2] = "169 art&iacute;culos, 4 disposiciones adicionales, 9 transitorias, 2 disposiciones finales.";
 choices[7][3] = "169 art&iacute;culos, 4 disposiciones adicionales, 9 transitorias, 1 disposici&oacute;n derogatoria y 1 disposici&oacute;n final.";
 answers[7] = 3;
 units[7] = ['1'];
 blocks[7] = ['A1'];
 comments[7] = "Id Pregunta: 1416. ";
 preguntaids[7] = 1416


//  Id pregunta: 10896 Año de creación de pregunta: 2015
 questions[8]= "9)  En el &aacute;mbito de la seguridad,&iquest;a qu&eacute; atienden las siglas AAA?";
 choices[8]= new Array();
 choices[8][0] = "Authentication, Authorization and Accounting";
 choices[8][1] = "Acknowledge, Authorization and Accounting";
 choices[8][2] = "Authentication, Authorization and Access";
 choices[8][3] = "Authentication, Approval and Accounting";
 answers[8] = 0;
 units[8] = ['119'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 10896. ";
 preguntaids[8] = 10896


//  Id pregunta: 5053 Año de creación de pregunta: 2002
 questions[9]= "10)  Se&ntilde;alar qu&eacute; afirmaci&oacute;n no es correcta. En una red de conmutaci&oacute;n de paquetes para evitar la congesti&oacute;n se puede:";
 choices[9]= new Array();
 choices[9][0] = "Reservar espacio suficiente de almacenamiento en los nodos";
 choices[9][1] = "Descartar paquetes";
 choices[9][2] = "En una red de conmutaci&oacute;n de paquetes no hay congesti&oacute;n";
 choices[9][3] = "Enviar paquetes de contenci&oacute;n";
 answers[9] = 2;
 units[9] = ['112'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 5053. ";
 preguntaids[9] = 5053


//  Id pregunta: 10571 Año de creación de pregunta: 2015
 questions[10]= "11)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones resume mejor el prop&oacute;sito de la Gesti&oacute;n de Eventos?";
 choices[10]= new Array();
 choices[10][0] = "La habilidad de detectar eventos, darles sentido y determinar las acciones de control apropiadas";
 choices[10][1] = "La habilidad de detectar eventos, restablecer el servicio a la normalidad tan pronto como sea posible y minimizar el impacto adverso en las operaciones del negocio";
 choices[10][2] = "La habilidad de monitorizar y controlar las actividades del personal t&eacute;cnico";
 choices[10][3] = "La habilidad de informar sobre la entrega exitosa de los servicios al comprobar el tiempo de funcionamiento de los dispositivos de la infraestructura";
 answers[10] = 0;
 units[10] = ['101'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 10571. ";
 preguntaids[10] = 10571


//  Id pregunta: 337 Año de creación de pregunta: 2016
 questions[11]= "12)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[11]= new Array();
 choices[11][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[11][1] = "Static &amp; Active process for REsolution Bank.";
 choices[11][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[11][3] = "Super Active REsponse for Banks";
 answers[11] = 0;
 units[11] = ['12'];
 blocks[11] = ['A3'];
 comments[11] = "Id Pregunta: 337. Modelo econ&oacute;mico";
 preguntaids[11] = 337


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[12]= "13)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[12]= new Array();
 choices[12][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[12][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[12][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[12][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[12] = 2;
 units[12] = ['43'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 583. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[12] = 583


//  Id pregunta: 8190 Año de creación de pregunta: 2011
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia del sistema de almacenamiento RAID 5?";
 choices[13]= new Array();
 choices[13][0] = "La paridad est&aacute; en un disco dedicado";
 choices[13][1] = "La divisi&oacute;n se produce a nivel de bloques";
 choices[13][2] = "Tiene un bajo coste de redundancia";
 choices[13][3] = "Se necesitan al menos 3 discos";
 answers[13] = 0;
 units[13] = ['53'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 8190. Examen TIC A2 2010 interna";
 preguntaids[13] = 8190


//  Id pregunta: 10492 Año de creación de pregunta: 2015
 questions[14]= "15)  En relaci&oacute;n con la contrataci&oacute;n administrativa se&ntilde;ale la opci&oacute;n verdadera.";
 choices[14]= new Array();
 choices[14][0] = "Est&aacute; prohibido la realizaci&oacute;n de pactos en cualquier caso.";
 choices[14][1] = "Obliga a entes locales.";
 choices[14][2] = "La perfecci&oacute;n de un contrato, se produce en su adjudicaci&oacute;n provisional.";
 choices[14][3] = "La garant&iacute;a global, responde solamente ante un &oacute;rgano de contrataci&oacute;n.";
 answers[14] = 1;
 units[14] = ['37'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 10492. Obliga a todas las AAPP";
 preguntaids[14] = 10492


//  Id pregunta: 10936 Año de creación de pregunta: 2015
 questions[15]= "16)  En los sistemas de identificaci&oacute;n de las Administraciones P&uacute;blicas.";
 choices[15]= new Array();
 choices[15][0] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un sello electr&oacute;nico basado en un certificado electr&oacute;nico avanzado";
 choices[15][1] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de una firma electr&oacute;nica basada en un certificado electr&oacute;nico reconocido o cualificado";
 choices[15][2] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un c&oacute;digo seguro de verificaci&oacute;n basado en un certificado electr&oacute;nico reconocido o cualificado";
 choices[15][3] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un sello electr&oacute;nico basado en un certificado electr&oacute;nico reconocido o cualificado";
 answers[15] = 3;
 units[15] = ['7'];
 blocks[15] = ['A2'];
 comments[15] = "Id Pregunta: 10936. ";
 preguntaids[15] = 10936


//  Id pregunta: 10018 Año de creación de pregunta: 2015
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica del modelo de ciclo de vida en cascada?";
 choices[16]= new Array();
 choices[16][0] = "Fue un modelo definido por Winston W. Royce.";
 choices[16][1] = "Es un modelo que permite reaccionar a los cambios en los requisitos.";
 choices[16][2] = "Funciona bien en productos maduros y equipos d&eacute;biles.";
 choices[16][3] = "Hasta las etapas finales del proyecto no ofrece una versi&oacute;n operativa del programa.";
 answers[16] = 1;
 units[16] = ['82'];
 blocks[16] = ['B3'];
 comments[16] = "Id Pregunta: 10018. Examen TIC A2 2014";
 preguntaids[16] = 10018


//  Id pregunta: 707 Año de creación de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ale la respuesta INCORRECTA en relaci&oacute;n a la tecnolog&iacute;a LINQ to DataSet:";
 choices[17]= new Array();
 choices[17][0] = "No se pueden utilizar las colecciones de objeto IEnumerable, debido a su incompatibilidad con IEnumerable&lt;T&gt;.";
 choices[17][1] = "Facilita y acelera las consultas en datos almacenados en cach&eacute; en un objeto DataSet.";
 choices[17][2] = "LINQ proviene de Language-Integrated Query.";
 choices[17][3] = "Es una innovaci&oacute;n introducida en Visual Studio 2008 y .NET Framework versi&oacute;n 3.5.";
 answers[17] = 0;
 units[17] = ['63'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 707. AGE A2 2015";
 preguntaids[17] = 707


//  Id pregunta: 9840 Año de creación de pregunta: 2015
 questions[18]= "19)  El proceso de M&eacute;trica v3 &ldquo;Planificaci&oacute;n de los Sistemas de Informaci&oacute;n&rdquo; (PSI) tiene como objetivo:";
 choices[18]= new Array();
 choices[18][0] = "Obtener una especificaci&oacute;n detallada del sistema de informaci&oacute;n.";
 choices[18][1] = "Proponer una arquitectura de la informaci&oacute;n a alto nivel.";
 choices[18][2] = "Analizar las necesidades del sistema y proponer una soluci&oacute;n a corto plazo.";
 choices[18][3] = "Obtener una nueva versi&oacute;n de un sistema de informaci&oacute;n preexistente.";
 answers[18] = 1;
 units[18] = ['91'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 9840. ";
 preguntaids[18] = 9840


//  Id pregunta: 9338 Año de creación de pregunta: 2014
 questions[19]= "20)  &iquest;Que disposici&oacute;n legal determina el procedimiento para la expedici&oacute;n del DNI electr&oacute;nico y sus certificados de firma electr&oacute;nica?";
 choices[19]= new Array();
 choices[19][0] = "Ley 11/2007, de 22 de junio.";
 choices[19][1] = "RD 4/2010, de 8 de enero.";
 choices[19][2] = "RD 1553/2005, de 23 de diciembre.";
 choices[19][3] = "Ley 26/2007, de 28 de diciembre.";
 answers[19] = 2;
 units[19] = ['75'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 9338. ";
 preguntaids[19] = 9338


//  Id pregunta: 4596 Año de creación de pregunta: 2002
 questions[20]= "21)  &iquest;Por qu&eacute; son m&aacute;s eficiente los protocolos orientados a bit que los orientados a car&aacute;cter?:";
 choices[20]= new Array();
 choices[20][0] = "Debido al relleno de bits";
 choices[20][1] = "La eficiencia de ambos protocolos es la misma";
 choices[20][2] = "Debido al relleno de caracteres";
 choices[20][3] = "Debido a la codificaci&oacute;n binaria de los caracteres";
 answers[20] = 0;
 units[20] = ['104'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 4596. ";
 preguntaids[20] = 4596


//  Id pregunta: 9819 Año de creación de pregunta: 2015
 questions[21]= "22)  &iquest;Seg&uacute;n el Reglamento 910/2014 del Parlamento Europeo y del Consejo, cu&aacute;l de &eacute;stos son requisitos de seguridad de los TSP (Trust Service Providers)?";
 choices[21]= new Array();
 choices[21][0] = "Notificar las violaciones al MINETUR y el organismo correspondiente en m&aacute;ximo 24 horas.";
 choices[21][1] = "Mantener una base de datos de certificados";
 choices[21][2] = "Publicar las revocaciones en un m&aacute;ximo de 24 horas tras la solicitud.";
 choices[21][3] = "Todas las anteriores.";
 answers[21] = 0;
 units[21] = ['78'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 9819. B y C son exclusivamente para QTSPs";
 preguntaids[21] = 9819


//  Id pregunta: 7798 Año de creación de pregunta: 2010
 questions[22]= "23)  En el &aacute;mbito de Internet, cuando hablamos de PHISHING nos estamos refiendo a:";
 choices[22]= new Array();
 choices[22][0] = "Un determinado virus inform&aacute;tico.";
 choices[22][1] = "Difusi&oacute;n masiva de noticias falsas.";
 choices[22][2] = "Suplantaci&oacute;n fraudulenta que intenta conseguir informaci&oacute;n valiosa.";
 choices[22][3] = "Reenv&iacute;o de mensajes a mucha gente.";
 answers[22] = 2;
 units[22] = ['120'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 7798. ";
 preguntaids[22] = 7798


//  Id pregunta: 511 Año de creación de pregunta: 2016
 questions[23]= "24)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[23]= new Array();
 choices[23][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[23][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[23][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[23][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[23] = 3;
 units[23] = ['22'];
 blocks[23] = ['A4'];
 comments[23] = "Id Pregunta: 511. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[23] = 511


//  Id pregunta: 6385 Año de creación de pregunta: 2003
 questions[24]= "25)  Los principales factores de calidad seg&uacute;n Bertrand Meyer son";
 choices[24]= new Array();
 choices[24][0] = "Eficiencia y fiabilidad";
 choices[24][1] = "Fiabilidad y modularidad";
 choices[24][2] = "Fiabilidad y extensibilidad";
 choices[24][3] = "Correcci&oacute;n y verificabilidad";
 answers[24] = 1;
 units[24] = ['93'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 6385. Examen 2006 JCYL";
 preguntaids[24] = 6385


//  Id pregunta: 7743 Año de creación de pregunta: 2010
 questions[25]= "26)  &iquest;Cu&aacute;l de las afirmaciones siguientes es cierta con respecto a la t&eacute;cnica de gesti&oacute;n de memoria conocida como &laquo;paginaci&oacute;n&raquo;?";
 choices[25]= new Array();
 choices[25][0] = "Consiste en determinar qu&eacute; espacio vac&iacute;o en la memoria principal es el m&aacute;s indicado para ser asignado a un proceso.";
 choices[25][1] = "El espacio de memoria se divide en secciones f&iacute;sicas de igual tama&ntilde;o llamadas marcos de p&aacute;gina, las cuales sirven como unidad de almacenamiento de informaci&oacute;n.";
 choices[25][2] = "Es la memoria que queda desperdiciada al usar los m&eacute;todos de gesti&oacute;n de memoria tales como la asignaci&oacute;n.";
 choices[25][3] = "Es un esquema de manejo de memoria mediante el cual la estructura del programa refleja su divisi&oacute;n l&oacute;gica, llev&aacute;ndose a cabo una agrupaci&oacute;n l&oacute;gica de la informaci&oacute;n en bloques de tama&ntilde;o variable denominados segmentos.";
 answers[25] = 1;
 units[25] = ['56'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 7743. ";
 preguntaids[25] = 7743


//  Id pregunta: 944 Año de creación de pregunta: 2016
 questions[26]= "27)  Siguiendo la Gu&iacute;a de Comunicaci&oacute;n Digital, las p&aacute;ginas web de la Administraci&oacute;n seguir&aacute;n los criterios de accesibilidad como es:";
 choices[26]= new Array();
 choices[26][0] = "Abrir todas las ventanas de forma emergente sin informar al usuario.";
 choices[26][1] = "Seguir el orden l&oacute;gico de tabulaci&oacute;n a trav&eacute;s de los enlaces.";
 choices[26][2] = "No mostrar informaci&oacute;n sobre la estructura general del sitio web.";
 choices[26][3] = "Forzar el refresco autom&aacute;tico de las p&aacute;ginas sin posibilidad de deshabilitarlo.";
 answers[26] = 1;
 units[26] = ['125'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 944. Gu&iacute;a de Comunicaci&oacute;n Digital de la AGE";
 preguntaids[26] = 944


//  Id pregunta: 8430 Año de creación de pregunta: 2011
 questions[27]= "28)  Una sede judicial electr&oacute;nica puede no disponer de:";
 choices[27]= new Array();
 choices[27][0] = "Identificaci&oacute;n de la empresa contratada para su gesti&oacute;n, en su caso";
 choices[27][1] = "Servicios de asesoramiento electr&oacute;nico al usuario para la correcta utilizaci&oacute;n de la sede";
 choices[27][2] = "La Carta de Derechos de los Ciudadanos ante la Justicia";
 choices[27][3] = "Debe disponer de todas las anteriores";
 answers[27] = 0;
 units[27] = ['2'];
 blocks[27] = ['A1'];
 comments[27] = "Id Pregunta: 8430. ";
 preguntaids[27] = 8430


//  Id pregunta: 140 Año de creación de pregunta: 2016
 questions[28]= "29)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[28]= new Array();
 choices[28][0] = "Al Consejo Europeo.";
 choices[28][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[28][2] = "A la Comisi&oacute;n Europea.";
 choices[28][3] = "Al Parlamento Europeo.";
 answers[28] = 2;
 units[28] = ['5'];
 blocks[28] = ['A1'];
 comments[28] = "Id Pregunta: 140. Uni&oacute;n Europea";
 preguntaids[28] = 140


//  Id pregunta: 3133 Año de creación de pregunta: 2002
 questions[29]= "30)  Indique cu&aacute;l de las siguientes afirmaciones es v&aacute;lida para el proceso &quot;Two Phase COMMIT&quot;:";
 choices[29]= new Array();
 choices[29][0] = "Es un programa con 2 versiones de trabajo";
 choices[29][1] = "Es una garant&iacute;a de consistencia entre bases de datos";
 choices[29][2] = "Es una funcionalidad para recuperaci&oacute;n de datos";
 choices[29][3] = "Es un equipo tolerante a fallos";
 answers[29] = 1;
 units[29] = ['61'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 3133. ";
 preguntaids[29] = 3133


//  Id pregunta: 2839 Año de creación de pregunta: 2002
 questions[30]= "31)  En las m&aacute;quinas con tecnolog&iacute;a RISC:";
 choices[30]= new Array();
 choices[30][0] = "El n&uacute;mero de instrucciones es muy elevado";
 choices[30][1] = "Se emplea la microprogramaci&oacute;n";
 choices[30][2] = "No se emplea la microprogramaci&oacute;n";
 choices[30][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[30] = 2;
 units[30] = ['50'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 2839. ";
 preguntaids[30] = 2839


//  Id pregunta: 352 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n la Ley 39/2006, de Promoci&oacute;n de Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, define el Grado II - Dependencia severa como: cuando la persona necesita ayuda para realizar varias actividades b&aacute;sicas de la vida diaria&hellip;";
 choices[31]= new Array();
 choices[31][0] = "2 o 3 veces al d&iacute;a, pero no quiere el apoyo permanente de un cuidador o tiene necesidades de apoyo extenso para su autonom&iacute;a personal.";
 choices[31][1] = "varias veces al d&iacute;a y, por su p&eacute;rdida total de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, necesita el apoyo indispensable y continuo de otra persona o tiene necesidades de apoyo generalizado para su autonom&iacute;a personal.";
 choices[31][2] = "al menos una vez al d&iacute;a o tiene necesidades de apoyo intermitente o limitado para su autonom&iacute;a personal.";
 choices[31][3] = "muchas veces al d&iacute;a y necesita el apoyo de constante de un cuidador.";
 answers[31] = 0;
 units[31] = ['14'];
 blocks[31] = ['A3'];
 comments[31] = "Id Pregunta: 352. AGE A2 2015";
 preguntaids[31] = 352


//  Id pregunta: 6146 Año de creación de pregunta: 2003
 questions[32]= "33)  &iquest;Cu&aacute;l de las afirmaciones siguientes es cierta con respecto a la t&eacute;cnica de gesti&oacute;n de memoria conocida como &quot;paginaci&oacute;n&quot;?:";
 choices[32]= new Array();
 choices[32][0] = "Consiste en determinar que espacio vac&iacute;o en la memoria principal es el mas indicado para ser asignado a un proceso";
 choices[32][1] = "El espacio de memoria se divide en secciones f&iacute;sicas de igual tama&ntilde;o llamadas marcos de pagina, las cuales sirven como unidad de almacenamiento de informaci&oacute;n";
 choices[32][2] = "Es la memoria que queda desperdiciada al usar los m&eacute;todos de gesti&oacute;n de memoria tales como la asignaci&oacute;n";
 choices[32][3] = "Es un esquema de manejo de memoria mediante el cual la estructura del programa refleja su divisi&oacute;n l&oacute;gica; llev&aacute;ndose a cabo una agrupaci&oacute;n l&oacute;gica de la informaci&oacute;n en bloques de tama&ntilde;o variable denominados segmentos";
 answers[32] = 1;
 units[32] = ['56'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 6146. Examen TIC A1 MAP 2007";
 preguntaids[32] = 6146


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[33]= "34)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[33]= new Array();
 choices[33][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[33][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[33][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[33][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[33] = 2;
 units[33] = ['1'];
 blocks[33] = ['A1'];
 comments[33] = "Id Pregunta: 17. Constituci&oacute;n de 1978";
 preguntaids[33] = 17


//  Id pregunta: 6949 Año de creación de pregunta: 2010
 questions[34]= "35)  Para la firma electr&oacute;nica por parte de personal al servicio de las Administraciones P&uacute;blicas NO se contempla el uso de";
 choices[34]= new Array();
 choices[34][0] = "Sello electr&oacute;nico";
 choices[34][1] = "DNI electr&oacute;nico";
 choices[34][2] = "Certificado de empleado p&uacute;blico";
 choices[34][3] = "Sistemas de c&oacute;digo seguro de verificaci&oacute;n";
 answers[34] = 0;
 units[34] = ['19'];
 blocks[34] = ['A4'];
 comments[34] = "Id Pregunta: 6949. Articulo 21 RD 1671/2009";
 preguntaids[34] = 6949


//  Id pregunta: 4060 Año de creación de pregunta: 2003
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes actividades de Metrica v3 no se puede realizar en paralelo en Metrica v3?";
 choices[35]= new Array();
 choices[35][0] = "Elaboraci&oacute;n de manuales de usuario";
 choices[35][1] = "Preparaci&oacute;n del entorno de construcci&oacute;n";
 choices[35][2] = "Definici&oacute;n de la formaci&oacute;n de usuarios finales";
 choices[35][3] = "Construcci&oacute;n de componentes y procedimientos de migraci&oacute;n y carga inicial de datos";
 answers[35] = 1;
 units[35] = ['91'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 4060. ";
 preguntaids[35] = 4060


//  Id pregunta: 10599 Año de creación de pregunta: 2015
 questions[36]= "37)  &iquest;En qu&eacute; libro de ITIL v3 se pueden encontrar las descripciones detalladas de la Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de Suministradores?";
 choices[36]= new Array();
 choices[36][0] = "Estrategia del Servicio";
 choices[36][1] = "Dise&ntilde;o del Servicio";
 choices[36][2] = "Transici&oacute;n del Servicio";
 choices[36][3] = "Operaci&oacute;n del Servicio";
 answers[36] = 1;
 units[36] = ['101'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 10599. ";
 preguntaids[36] = 10599


//  Id pregunta: 8281 Año de creación de pregunta: 2011
 questions[37]= "38)  En el contexto de los lenguajes de programaci&oacute;n orientados a objetos, cuando un objeto recibe de otro objeto o aplicaci&oacute;n una notificaci&oacute;n, ha recibido un:";
 choices[37]= new Array();
 choices[37][0] = "Evento.";
 choices[37][1] = "Comando.";
 choices[37][2] = "Protocolo.";
 choices[37][3] = "Orden.";
 answers[37] = 0;
 units[37] = ['84'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 8281. Examen TIC A2 2010 interna";
 preguntaids[37] = 8281


//  Id pregunta: 9483 Año de creación de pregunta: 2014
 questions[38]= "39)  Aplicando la t&eacute;cnica del Modelo E/R Extendido se elabora el modelo de datos de la aplicaci&oacute;n que, en la arquitectura de base de datos estandarizada como ANSI/X3/SPARC, se corresponde con el nivel o esquema:";
 choices[38]= new Array();
 choices[38][0] = "Externo";
 choices[38][1] = "L&oacute;gico";
 choices[38][2] = "Interno";
 choices[38][3] = "Conceptual";
 answers[38] = 3;
 units[38] = ['61'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 9483. ";
 preguntaids[38] = 9483


//  Id pregunta: 3714 Año de creación de pregunta: 2002
 questions[39]= "40)  &iquest;En qu&eacute; consiste la teor&iacute;a libre aplicada a la implantaci&oacute;n de la calidad?:";
 choices[39]= new Array();
 choices[39][0] = "El coste es constante e independiente de la calidad del producto";
 choices[39][1] = "El coste es constante pero dependiente de la calidad del producto";
 choices[39][2] = "El coste es constante s&oacute;lo en algunos casos";
 choices[39][3] = "El coste es independiente de la calidad del producto, aunque no se considera fijo";
 answers[39] = 0;
 units[39] = ['93'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 3714. ";
 preguntaids[39] = 3714


//  Id pregunta: 6289 Año de creación de pregunta: 2003
 questions[40]= "41)  El modelo Code and Fix:";
 choices[40]= new Array();
 choices[40][0] = "Modelo b&aacute;sico usado en los primeros tiempos desarrollo de SW compuesto por 2 fases, primero codificar y despu&eacute;s resolver los problemas del c&oacute;digo";
 choices[40][1] = "Tras varios ajustes, el c&oacute;digo se vuelve poco estructurado y los siguientes ajustes son muy costosos.";
 choices[40][2] = "Con frecuencia se ajustaba poco a las necesidades de los usuarios.";
 choices[40][3] = "Todas las anteriores son correctas";
 answers[40] = 3;
 units[40] = ['82'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 6289. ";
 preguntaids[40] = 6289


//  Id pregunta: 9790 Año de creación de pregunta: 2015
 questions[41]= "42)  No es objetivo de la Ley 39/2015:";
 choices[41]= new Array();
 choices[41][0] = "Reconocer el derecho de los ciudadanos a relacionarse con las Administraciones P&uacute;blicas por medios electr&oacute;nicos.";
 choices[41][1] = "Garantizar el acceso a todos los servicios electr&oacute;nicos.";
 choices[41][2] = "Aumentar la utilizaci&oacute;n del DNI electr&oacute;nico por los ciudadanos.";
 choices[41][3] = "Impulsar el uso de los servicios electr&oacute;nicos.";
 answers[41] = 2;
 units[41] = ['7', '47'];
 blocks[41] = ['A2', 'B1'];
 comments[41] = "Id Pregunta: 9790. ";
 preguntaids[41] = 9790


//  Id pregunta: 107 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[42]= new Array();
 choices[42][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[42][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[42][2] = "la falta de interoperabilidad.";
 choices[42][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[42] = 1;
 units[42] = ['5'];
 blocks[42] = ['A1'];
 comments[42] = "Id Pregunta: 107. Uni&oacute;n Europea";
 preguntaids[42] = 107


//  Id pregunta: 3068 Año de creación de pregunta: 2002
 questions[43]= "44)  Un &quot;service pack&quot; en el entorno del sistema operativo Windows 2000:";
 choices[43]= new Array();
 choices[43][0] = "Es una aplicaci&oacute;n auxiliar que amplia las funcionalidades del sistema operativo";
 choices[43][1] = "Es un componente del servicio de paquetes";
 choices[43][2] = "Es un paquete integrado que incluye el sistema operativo y programas de aplicaci&oacute;n";
 choices[43][3] = "Es un conjunto de correcciones o partes del sistema operativo que corrige fallos o vulnerabilidades de seguridad y tambi&eacute;n puede ampliar las funcionalidades de dicho sistema";
 answers[43] = 3;
 units[43] = ['58', '59'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 3068. ";
 preguntaids[43] = 3068


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


//  Id pregunta: 6969 Año de creación de pregunta: 2010
 questions[45]= "46)  En el modelo de estimaci&oacute;n de costes COCOMO se utiliza de base la siguiente funci&oacute;n: 'E = a(Kl)b * m(X)' &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[45]= new Array();
 choices[45][0] = "a y b son variables con valores indefinidos";
 choices[45][1] = "Kl es la cantidad de l&iacute;neas de c&oacute;digo, en millones";
 choices[45][2] = "m(X) es una variable obtenida en una tabla a partir del n&uacute;mero de trabajadores y del conocimiento de las herramientas a utilizar";
 choices[45][3] = "El resultado se da en unidades salario/mes y horas-hombre";
 answers[45] = 3;
 units[45] = ['94'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 6969. TIC-B 2009 bloque desarrollo";
 preguntaids[45] = 6969


//  Id pregunta: 3943 Año de creación de pregunta: 2002
 questions[46]= "47)  Para cada proyecto se debe seleccionar el modelo de ciclo de vida que sea m&aacute;s apropiado:";
 choices[46]= new Array();
 choices[46][0] = "Falso";
 choices[46][1] = "Cierto";
 choices[46][2] = "S&oacute;lo si es necesario evaluar los riesgos";
 choices[46][3] = "S&oacute;lo si se elige METRICA";
 answers[46] = 1;
 units[46] = ['82'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 3943. ";
 preguntaids[46] = 3943


//  Id pregunta: 8985 Año de creación de pregunta: 2013
 questions[47]= "48)  En el contexto de la firma electr&oacute;nica y su regulaci&oacute;n en Espa&ntilde;a se&ntilde;ale la afirmaci&oacute;n FALSA.";
 choices[47]= new Array();
 choices[47][0] = "Los funcionarios al servicio de las administraciones p&uacute;blicas espa&ntilde;olas pueden firmar en el ejercicio de su cargo utilizando su DNI electr&oacute;nico.";
 choices[47][1] = "Los c&oacute;digos de verificaci&oacute;n segura (CSV) junto con los sellos de &oacute;rgano sirven para dotar de firma electr&oacute;nica reconocida a la actuaci&oacute;n administrativa automatizada.";
 choices[47][2] = "Un dispositivo seguro de creaci&oacute;n de firma debe garantizar que los datos usados para generar la firma pueden producirse s&oacute;lo una vez.";
 choices[47][3] = "Un certificado electr&oacute;nico reconocido ha de incluir la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que lo expide.";
 answers[47] = 1;
 units[47] = ['19'];
 blocks[47] = ['A4'];
 comments[47] = "Id Pregunta: 8985. DUPLICADA";
 preguntaids[47] = 8985


//  Id pregunta: 4571 Año de creación de pregunta: 2002
 questions[48]= "49)  &iquest;Cu&aacute;l es la funci&oacute;n que tiene la capa de presentaci&oacute;n (Presentation Layer) en la arquitectura de protocolos ISO de OSI?:";
 choices[48]= new Array();
 choices[48][0] = "Presentar la informaci&oacute;n al usuario final";
 choices[48][1] = "Ocuparse de las distintas representaciones de la informaci&oacute;n en distintas m&aacute;quinas, de tal forma que el significado sea el mismo aunque las representaciones sean diferentes";
 choices[48][2] = "Presentar la informaci&oacute;n a la red estableciendo puntos de sincronismo intermedios para evitar p&eacute;rdidas de informaci&oacute;n en caso de caidas de la red";
 choices[48][3] = "Todas las anteriores son funciones de la capa de sesi&oacute;n";
 answers[48] = 1;
 units[48] = ['105'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 4571. ";
 preguntaids[48] = 4571


//  Id pregunta: 3856 Año de creación de pregunta: 2002
 questions[49]= "50)  Es una m&eacute;trica de complejidad:";
 choices[49]= new Array();
 choices[49][0] = "Halstead";
 choices[49][1] = "McCavendish";
 choices[49][2] = "McCall";
 choices[49][3] = "Dominique";
 answers[49] = 0;
 units[49] = ['93'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 3856. ";
 preguntaids[49] = 3856


//  Id pregunta: 2795 Año de creación de pregunta: 2002
 questions[50]= "51)  El tiempo de latencia en un disco:";
 choices[50]= new Array();
 choices[50][0] = "Tiempo medio necesario para que la informaci&oacute;n pase por debajo de la cabeza de lectura-escritura cuando est&aacute; posicionada sobre la pista adecuada";
 choices[50][1] = "Corresponde al tiempo empleado para realizar la mitad del giro";
 choices[50][2] = "Es equivalente al tiempo de espera";
 choices[50][3] = "Todas las respuestas anteriores son ciertas";
 answers[50] = 3;
 units[50] = ['53'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 2795. ";
 preguntaids[50] = 2795


//  Id pregunta: 5693 Año de creación de pregunta: 2007
 questions[51]= "52)  El protocolo RIP:";
 choices[51]= new Array();
 choices[51][0] = "Es un protocolo de encaminamiento del tipo &quot;vector de distancia&quot;.";
 choices[51][1] = "Es un protocolo de encaminamiento del tipo &quot;estado del enlace&quot;.";
 choices[51][2] = "Es un protocolo de descarga de correo electr&oacute;nico desde un servidor web.";
 choices[51][3] = "Es un protocolo de interconexi&oacute;n de conmutadores.";
 answers[51] = 0;
 units[51] = ['102'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 5693. ";
 preguntaids[51] = 5693


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[52]= "53)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[52]= new Array();
 choices[52][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[52][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[52][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[52][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[52] = 3;
 units[52] = ['12'];
 blocks[52] = ['A3'];
 comments[52] = "Id Pregunta: 328. Modelo econ&oacute;mico";
 preguntaids[52] = 328


//  Id pregunta: 6099 Año de creación de pregunta: 2003
 questions[53]= "54)  Seg&uacute;n el RD 209/2003, de 21 de febrero, con respecto a las notificaciones telem&aacute;ticas, cuando exista constancia dela recepci&oacute;n de una notificaci&oacute;n, se considerar&aacute; que &eacute;sta ha sido rechazada cuando no se haya accedido a sucontenido en un plazo de:";
 choices[53]= new Array();
 choices[53][0] = "10 d&iacute;as naturales";
 choices[53][1] = "10 d&iacute;as h&aacute;biles";
 choices[53][2] = "20 d&iacute;as naturales";
 choices[53][3] = "En ning&uacute;n caso se considerar&aacute; rechazada si no se ha accedido a su contenido";
 answers[53] = 0;
 units[53] = ['19'];
 blocks[53] = ['A4'];
 comments[53] = "Id Pregunta: 6099. Examen TIC A1 MAP 2007";
 preguntaids[53] = 6099


//  Id pregunta: 2587 Año de creación de pregunta: 2009
 questions[54]= "55)  Seg&uacute;n la Ley 34/2002, podr&aacute;n adoptarse las medidas legales necesarias para que se interrumpa la prestaci&oacute;n de un servicio que atente contra los siguientes principios. Se&ntilde;alar la respuesta incorrecta:";
 choices[54]= new Array();
 choices[54][0] = "Salvaguarda del orden p&uacute;blico";
 choices[54][1] = "Salvaguarda del inter&eacute;s general";
 choices[54][2] = "Respeto a la dignidad de la persona";
 choices[54][3] = "Protecci&oacute;n de la salud p&uacute;blica";
 answers[54] = 1;
 units[54] = ['19'];
 blocks[54] = ['A4'];
 comments[54] = "Id Pregunta: 2587. Ley 34/2002, art&iacute;culo 8";
 preguntaids[54] = 2587


//  Id pregunta: 2022 Año de creación de pregunta: 2002
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes respuestas referidas a las auditor&iacute;as de control de calidad es cierta?:";
 choices[55]= new Array();
 choices[55][0] = "Es un procedimiento habitual de control de calidad del software";
 choices[55][1] = "Es un procedimiento extraordinario al que se pueden someter los proyectos que tengan especial magnitud";
 choices[55][2] = "Su objetivo es proceder al refinamiento sucesivo en la definici&oacute;n de las especificaciones finales del proyecto";
 choices[55][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[55] = 1;
 units[55] = ['36', '45'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 2022. ";
 preguntaids[55] = 2022


//  Id pregunta: 10125 Año de creación de pregunta: 2015
 questions[56]= "57)  La facturaci&oacute;n electr&oacute;nica a las Administraciones P&uacute;blicas es obligatoria para las empresas desde:";
 choices[56]= new Array();
 choices[56][0] = "Enero de 2015.";
 choices[56][1] = "Enero de 2016.";
 choices[56][2] = "Diciembre de 2016.";
 choices[56][3] = "Diciembre de 2015.";
 answers[56] = 0;
 units[56] = ['10'];
 blocks[56] = ['A2'];
 comments[56] = "Id Pregunta: 10125. Examen TIC A1 2014";
 preguntaids[56] = 10125


//  Id pregunta: 42 Año de creación de pregunta: 2016
 questions[57]= "58)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[57]= new Array();
 choices[57][0] = "Publicidad.";
 choices[57][1] = "Constituci&oacute;n.";
 choices[57][2] = "Legalidad.";
 choices[57][3] = "Creaci&oacute;n.";
 answers[57] = 0;
 units[57] = ['1'];
 blocks[57] = ['A1'];
 comments[57] = "Id Pregunta: 42. Constituci&oacute;n de 1978";
 preguntaids[57] = 42


//  Id pregunta: 4655 Año de creación de pregunta: 2002
 questions[58]= "59)  Con voz sobre IP:";
 choices[58]= new Array();
 choices[58][0] = "Se alcanza la misma calidad que con llamadas telef&oacute;nicas convencionales";
 choices[58][1] = "Se pueden realizar llamadas internacionales al mismo precio que una llamada local, el precio de la conexi&oacute;n con el nodo de acceso a Internet";
 choices[58][2] = "Las 2 respuestas anteriores son correctas";
 choices[58][3] = "Las 2 respuestas anteriores son falsas";
 answers[58] = 2;
 units[58] = ['110'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 4655. ";
 preguntaids[58] = 4655


//  Id pregunta: 28 Año de creación de pregunta: 2016
 questions[59]= "60)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[59]= new Array();
 choices[59][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[59][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[59][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[59][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[59] = 2;
 units[59] = ['1'];
 blocks[59] = ['A1'];
 comments[59] = "Id Pregunta: 28. Constituci&oacute;n de 1978";
 preguntaids[59] = 28


//  Id pregunta: 1098 Año de creación de pregunta: 2016
 questions[60]= "61)  Respecto a la tecnolog&iacute;a WIFI:";
 choices[60]= new Array();
 choices[60][0] = "Los equipos WIFI no necesitan adaptarse a ninguna normativa.";
 choices[60][1] = "Los ayuntamientos pueden comercializar WIFI siempre y cuando se hayan inscrito en el registro de operadores.";
 choices[60][2] = "Los operadores de telecomunicaciones tienen que pedir una licencia para la utilizaci&oacute;n de la banda WIFI, que les permite comercializar este servicio.";
 choices[60][3] = "Los equipos WIFI utilizan una banda de uso com&uacute;n.";
 answers[60] = 3;
 units[60] = ['108'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 1098. ";
 preguntaids[60] = 1098


//  Id pregunta: 765 Año de creación de pregunta: 2016
 questions[61]= "62)  En relaci&oacute;n a UTF-8, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[61]= new Array();
 choices[61][0] = "Siempre utiliza un solo byte (8 bits) para cada caracter UNICODE.";
 choices[61][1] = "S&oacute;lo puede representar los caracteres del idioma ingl&eacute;s.";
 choices[61][2] = "Una cadena de texto en UTF-8 siempre ocupa m&aacute;s que en ASCII.";
 choices[61][3] = "Un caracter puede estar representado por entre uno y cuatro bytes.";
 answers[61] = 3;
 units[61] = ['74'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 765. AGE A2 2015";
 preguntaids[61] = 765


//  Id pregunta: 9895 Año de creación de pregunta: 2015
 questions[62]= "63)  Seg&uacute;n la Ley 39/2015, en relaci&oacute;n a la firma electr&oacute;nica.";
 choices[62]= new Array();
 choices[62][0] = "Es necesaria para acreditar la identidad en toda actuaci&oacute;n de un procedimiento administrativo.";
 choices[62][1] = "Con car&aacute;cter general, para realizar cualquier actuaci&oacute;n prevista en el procedimiento administrativo, ser&aacute; suficiente con que los interesados acrediten previamente su identidad a trav&eacute;s de cualquiera de los medios de identificaci&oacute;n previstos en la Ley.";
 choices[62][2] = "Solo es necesaria para: formular solicitudes, presentar declaraciones responsables o comunicaciones, interponer recursos y desistir de acciones.";
 choices[62][3] = "Solo es necesaria para: formular solicitudes, presentar declaraciones responsables o comunicaciones e interponer recursos.";
 answers[62] = 1;
 units[62] = ['7', '19'];
 blocks[62] = ['A2', 'A4'];
 comments[62] = "Id Pregunta: 9895. ";
 preguntaids[62] = 9895


//  Id pregunta: 9791 Año de creación de pregunta: 2015
 questions[63]= "64)  Los certificados de sede electr&oacute;nica incluir&aacute;n como contenido:";
 choices[63]= new Array();
 choices[63][0] = "Lo que disponga el Esquema Nacional de Seguridad.";
 choices[63][1] = "La denominaci&oacute;n de &ldquo;sede electr&oacute;nica&rdquo; y el n&uacute;mero de identificaci&oacute;n fiscal de la autoridad de certificaci&oacute;n.";
 choices[63][2] = "Su contenido no est&aacute; definido en ninguna norma.";
 choices[63][3] = "La denominaci&oacute;n del nombre del dominio y el nombre descriptivo de la sede.";
 answers[63] = 3;
 units[63] = ['7', '77'];
 blocks[63] = ['A2', 'B2'];
 comments[63] = "Id Pregunta: 9791. Art&iacute;culo 18, RD 1671/2009.";
 preguntaids[63] = 9791


//  Id pregunta: 350 Año de creación de pregunta: 2016
 questions[64]= "65)  La estructura econ&oacute;mica espa&ntilde;ola es aproximadamente la siguiente:";
 choices[64]= new Array();
 choices[64][0] = "Sector primario (5-10%) Sector industrial(25-30%) Sector servicios(60-65%)";
 choices[64][1] = "Sector primario (3-5%) Sector industrial(15-20%) Sector servicios(65-75%)";
 choices[64][2] = "Sector primario (10-15%) Sector industrial(15-20%) Sector servicios(50-60%)";
 choices[64][3] = "Ninguna de las anteriores";
 answers[64] = 1;
 units[64] = ['12'];
 blocks[64] = ['A3'];
 comments[64] = "Id Pregunta: 350. Modelo econ&oacute;mico";
 preguntaids[64] = 350


//  Id pregunta: 7847 Año de creación de pregunta: 2011
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a la &quot;Ley General de Telecomunicaciones&quot; es cierta?:";
 choices[65]= new Array();
 choices[65][0] = "Corresponde a la Comisi&oacute;n Nacional de los Mercados y la Competencia la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n y, en su caso, de direccionamiento y nombres, teniendo en cuenta las decisiones aplicables que se adopten en el seno de las organizaciones y los foros internacionales.";
 choices[65][1] = "Corresponde al Ministerio de Energia, Turismo y Agenda Digital el otorgamiento de los derechos de uso de los recursos p&uacute;blicos regulados en los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n";
 choices[65][2] = "El procedimiento y los plazos para la asignaci&oacute;n de n&uacute;meros, as&iacute; como las condiciones asociadas al uso de los n&uacute;meros, que ser&aacute;n no discriminatorias, proporcionadas y transparentes, se establecer&aacute;n reglamentariamente. Transcurrido el plazo m&aacute;ximo sin haberse notificado la resoluci&oacute;n expresa, se podr&aacute; entender aprobada la solicitud por silencio administrativo.";
 choices[65][3] = "Quedan incluidos en el &aacute;mbito de esta Ley, el r&eacute;gimen aplicable a los contenidos de car&aacute;cter audiovisual transmitidos a trav&eacute;s de las redes.";
 answers[65] = 1;
 units[65] = ['121'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 7847. Examen TIC A1 2010";
 preguntaids[65] = 7847


//  Id pregunta: 7732 Año de creación de pregunta: 2010
 questions[66]= "67)  &iquest;Cu&aacute;l es el m&iacute;nimo n&uacute;mero de discos necesario para un sistema RAID 0+1?";
 choices[66]= new Array();
 choices[66][0] = "2";
 choices[66][1] = "3";
 choices[66][2] = "4";
 choices[66][3] = "5";
 answers[66] = 2;
 units[66] = ['53'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 7732. ";
 preguntaids[66] = 7732


//  Id pregunta: 3342 Año de creación de pregunta: 2004
 questions[67]= "68)  Seg&uacute;n la Ley de Servicios de la Siciedad d ela Informaci&oacute;n y Comercio electr&oacute;nico, la resistencia a la inspecci&oacute;n de los funcionarios, &iquest;c&oacute;mo est&aacute; considerada?";
 choices[67]= new Array();
 choices[67][0] = "Infracci&oacute;n muy grave";
 choices[67][1] = "Infracci&oacute;n grave";
 choices[67][2] = "Infracci&oacute;n leve";
 choices[67][3] = "No se considera infracci&oacute;n";
 answers[67] = 1;
 units[67] = ['19'];
 blocks[67] = ['A4'];
 comments[67] = "Id Pregunta: 3342. Ley 34/2002, art&iacute;culo 38";
 preguntaids[67] = 3342


//  Id pregunta: 1790 Año de creación de pregunta: 2016
 questions[68]= "69)  La norma SICRES 3.0 recoge:";
 choices[68]= new Array();
 choices[68][0] = "El modelo de Datos para el intercambio de asientos y entre las Entidades Registrales con independencia del Sistema de Registro origen o destino, y de la tecnolog&iacute;a de intercambio.";
 choices[68][1] = "El formato est&aacute;ndar para el intercambio de informaci&oacute;n del inventario de informaci&oacute;n administrativa que debe mantener cada administraci&oacute;n p&uacute;blica.";
 choices[68][2] = "El formato est&aacute;ndar para el dise&ntilde;o de los servicios de interoperabilidad, para el intercambio de datos y documentos.";
 choices[68][3] = "El formato est&aacute;ndar para el intercambio de documentos electr&oacute;nicos.";
 answers[68] = 0;
 units[68] = ['44'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 1790. ";
 preguntaids[68] = 1790


//  Id pregunta: 3147 Año de creación de pregunta: 2002
 questions[69]= "70)  SCSI responde a las siglas de:";
 choices[69]= new Array();
 choices[69][0] = "Smart Computer System Interface, Interfaz elegante para sistemas de computadora";
 choices[69][1] = "Small Computer System Interface, Interfaz para peque&ntilde;os sistemas de computadora";
 choices[69][2] = "Synchonized Computer Serial Interface, Interfaz serie para ordenadores sincronizados";
 choices[69][3] = "Superb Computation Scale- Integration, escala de integraci&oacute;n para computaci&oacute;n s&uacute;per";
 answers[69] = 1;
 units[69] = ['53'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 3147. ";
 preguntaids[69] = 3147


//  Id pregunta: 6371 Año de creación de pregunta: 2003
 questions[70]= "71)  &iquest;Qu&eacute; no es un objetivo de un Sistema de Informaci&oacute;n?";
 choices[70]= new Array();
 choices[70][0] = "Automatizaci&oacute;n de procesos operativos";
 choices[70][1] = "Proporcionar informaci&oacute;n que sirva de apoyo al proceso de toma de decisiones";
 choices[70][2] = "Lograr ventajas competitivas en su adquisici&oacute;n";
 choices[70][3] = "Minimizar el costo de adquisici&oacute;n, procesamiento y uso de la informaci&oacute;n";
 answers[70] = 2;
 units[70] = ['77'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 6371. Examen 2006 JCYL";
 preguntaids[70] = 6371


//  Id pregunta: 3681 Año de creación de pregunta: 2002
 questions[71]= "72)  Indicar cu&aacute;l no es una regla de construcci&oacute;n de una entidad externa dentro de un diagrama de flujo de datos:";
 choices[71]= new Array();
 choices[71][0] = "Representa procesos de aplicaci&oacute;n que no pertenecen al del estudio";
 choices[71][1] = "No est&aacute; permitido que se comuniquen entre s&iacute; las entidades externas a trav&eacute;s de flujos de datos";
 choices[71][2] = "Pueden aparecer en los distintos niveles de un DFD, pero se recomienda que s&oacute;lo aparezcan en el nivel cero";
 choices[71][3] = "Se pueden representar varias veces en el mismo gr&aacute;fico para evitar entrecruzamiento de l&iacute;neas";
 answers[71] = 0;
 units[71] = ['85', '86'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 3681. ";
 preguntaids[71] = 3681


//  Id pregunta: 9038 Año de creación de pregunta: 2014
 questions[72]= "73)  &iquest;Qui&eacute;n resuelve los recursos especiales previstos en el RD Legislativo 3/2011 de Contrataci&oacute;n en el Sector P&uacute;blico?";
 choices[72]= new Array();
 choices[72][0] = "Tribunal Central de Recursos Especiales";
 choices[72][1] = "Tribunal Administrativo Central de Recursos Contractuales";
 choices[72][2] = "Tribunal Administrativo Tributario";
 choices[72][3] = "Tribunal Econ&oacute;mico &ndash; Administrativo Central";
 answers[72] = 1;
 units[72] = ['10'];
 blocks[72] = ['A2'];
 comments[72] = "Id Pregunta: 9038. Adscrito al MINHAP";
 preguntaids[72] = 9038


//  Id pregunta: 8669 Año de creación de pregunta: 2013
 questions[73]= "74)  &iquest;Qu&eacute; es el Fabric/switch/port binding?";
 choices[73]= new Array();
 choices[73][0] = "Un mecanismo de seguridad adicional ofrecido por las redes SAN.";
 choices[73][1] = "Puede limitar la conectividad de un determinado equipo a un determinado puerto de un switch dentro del fabric (red SAN).";
 choices[73][2] = "El dispositivo s&oacute;lo podr&aacute; acceder a la SAN si se conecta f&iacute;sicamente al puerto permitido y s&oacute;lo un dispositivo con el WWN indicado puede conectarse a dicho puerto.";
 choices[73][3] = "Todas son correctas.";
 answers[73] = 3;
 units[73] = ['53'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 8669. ";
 preguntaids[73] = 8669


//  Id pregunta: 5702 Año de creación de pregunta: 2007
 questions[74]= "75)  La reserva para uso privativo de cualquier frecuencia del dominio p&uacute;blico radioel&eacute;ctrico a favor de una o varias personas o entidades:";
 choices[74]= new Array();
 choices[74][0] = "No requiere ning&uacute;n tipo de pago al Estado. &Uacute;nicamente es necesaria su notificaci&oacute;n a la Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[74][1] = "Se gravar&aacute; con una tasa anual por reserva del dominio publico radioel&eacute;ctrico.";
 choices[74][2] = "Requiere el pago de una tasa &uacute;nica al inicio de la utilizaci&oacute;n de dichas frecuencias que se negociar&aacute; entre el Estado y el beneficiario de la reserva.";
 choices[74][3] = "Requiere el pago de una tasa a negociar entre el beneficiario de Ia reserva y las personas o entidades que ocupan las bandas de frecuencias adyacentes a la reservada.";
 answers[74] = 1;
 units[74] = ['121'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 5702. ";
 preguntaids[74] = 5702


