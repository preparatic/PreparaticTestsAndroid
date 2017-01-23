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
//  Id pregunta: 7270 Año de creación de pregunta: 2010
 questions[0]= "1)  GSM no utiliza";
 choices[0]= new Array();
 choices[0][0] = "Esquema de protecci&oacute;n mediante salto RF";
 choices[0][1] = "Transmisi&oacute;n discontinua";
 choices[0][2] = "Transmisi&oacute;n continua";
 choices[0][3] = "Paging";
 answers[0] = 2;
 units[0] = ['117'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 7270. ";
 preguntaids[0] = 7270


//  Id pregunta: 8163 Año de creación de pregunta: 2011
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes opciones NO es un servidor de aplicaciones que cumple con la especificaci&oacute;n de Java EE?";
 choices[1]= new Array();
 choices[1][0] = "Apache Tomcat";
 choices[1][1] = "JBOSS";
 choices[1][2] = "WebSphere Application Server";
 choices[1][3] = "Glassfish";
 answers[1] = 0;
 units[1] = ['63', '64'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 8163. Examen TIC A2 2010 interna";
 preguntaids[1] = 8163


//  Id pregunta: 10390 Año de creación de pregunta: 2015
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes iniciativas de la Estrategia Europa 2020 hace referencia al objetivo de crecimiento integrador?";
 choices[2]= new Array();
 choices[2][0] = "Agenda de nuevas cualificaciones y empleo";
 choices[2][1] = "Agenda Digital para Europa";
 choices[2][2] = "Todas las anteriores";
 choices[2][3] = "Ninguna de las Anteriores";
 answers[2] = 0;
 units[2] = ['19'];
 blocks[2] = ['A4'];
 comments[2] = "Id Pregunta: 10390. ";
 preguntaids[2] = 10390


//  Id pregunta: 4784 Año de creación de pregunta: 2002
 questions[3]= "4)  En el modelo de referencia OSI para la interconexi&oacute;n de sistemas abiertos se definen una serie de niveles. &iquest;Cu&aacute;l o cuales de los siguientes deber&iacute;a soportar la red de conmutaci&oacute;n en un caso ideal?:";
 choices[3]= new Array();
 choices[3][0] = "Los tres primeros: f&iacute;sico, enlace y red";
 choices[3][1] = "El nivel 3: red";
 choices[3][2] = "Los niveles 3 y 4: transporte y red";
 choices[3][3] = "Los dos primeros niveles: f&iacute;sico y enlace";
 answers[3] = 0;
 units[3] = ['105'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 4784. ";
 preguntaids[3] = 4784


//  Id pregunta: 5092 Año de creación de pregunta: 2003
 questions[4]= "5)  El ataque de denegaci&oacute;n de servicio llamado Smurf consiste en:";
 choices[4]= new Array();
 choices[4][0] = "Dejar una conexi&oacute;n en estado semiabierto y no llegar a realizarse el paso final para establecer una conexi&oacute;n";
 choices[4][1] = "Se trata de mandar a un puerto abierto del servidor un paquete hecho con la direcci&oacute;n y puerto origen igual que la direcci&oacute;n y puerto destino";
 choices[4][2] = "Consiste en recolectar direcciones BroadCast para despu&eacute;s mandar una petici&oacute;n ICMP cada una de ellas, falsificando la direcci&oacute;n IP de origen";
 choices[4][3] = "Se trata de saturar la red mediante una cantidad repetitiva y enorme de peticiones de conexi&oacute;n";
 answers[4] = 2;
 units[4] = ['119'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 5092. ";
 preguntaids[4] = 5092


//  Id pregunta: 260 Año de creación de pregunta: 2016
 questions[5]= "6)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[5]= new Array();
 choices[5][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[5][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[5][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[5][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[5] = 2;
 units[5] = ['8'];
 blocks[5] = ['A2'];
 comments[5] = "Id Pregunta: 260. Ley 39/2015";
 preguntaids[5] = 260


//  Id pregunta: 10653 Año de creación de pregunta: 2015
 questions[6]= "7)  Cu&aacute;l de los siguientes no es un derecho de los usuarios recogido en la Ley 9/2014:";
 choices[6]= new Array();
 choices[6][0] = "Derecho a figurar en las gu&iacute;as de abonados.";
 choices[6][1] = "A recibir facturas no desglosadas a petici&oacute;n del usuario.";
 choices[6][2] = "A no figurar en las gu&iacute;as de abonados.";
 choices[6][3] = "A recibir llamadas autom&aacute;ticas sin intervenci&oacute;n humana o mensajes de fax, con fines de comunicaci&oacute;n comercial sin haber prestado su consentimiento previo e informado para ello.";
 answers[6] = 3;
 units[6] = ['121'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 10653. ";
 preguntaids[6] = 10653


//  Id pregunta: 10022 Año de creación de pregunta: 2015
 questions[7]= "8)  En el modelo de proceso Scrum para desarrollo &aacute;gil de sistemas software, &iquest;qu&eacute; es el backlog de producto?";
 choices[7]= new Array();
 choices[7][0] = "La lista detallada de requisitos seleccionados para implementaci&oacute;n en un Sprint.";
 choices[7][1] = "Un gr&aacute;fico que muestra el trabajo pendiente en un Sprint.";
 choices[7][2] = "La lista priorizada de requisitos de alto nivel pendientes de implementaci&oacute;n.";
 choices[7][3] = "La tabla con los requisitos ya implementados.";
 answers[7] = 2;
 units[7] = ['84'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 10022. Examen TIC A2 2014";
 preguntaids[7] = 10022


//  Id pregunta: 7784 Año de creación de pregunta: 2010
 questions[8]= "9)  Con respecto a ITIL, el proceso &laquo;Configuration Management&raquo; o Gesti&oacute;n de la Configuraci&oacute;n, &iquest;en qu&eacute; fase de las citadas seguidamente est&aacute; incluido?";
 choices[8]= new Array();
 choices[8][0] = "Dise&ntilde;o.";
 choices[8][1] = "Operaci&oacute;n.";
 choices[8][2] = "Transici&oacute;n.";
 choices[8][3] = "Mejora continua.";
 answers[8] = 2;
 units[8] = ['101'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 7784. ";
 preguntaids[8] = 7784


//  Id pregunta: 9344 Año de creación de pregunta: 2014
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares regula el formato de documentos abiertos para aplicaciones de ofim&aacute;tica (OpenDocument)?";
 choices[9]= new Array();
 choices[9][0] = "ISO/IEC 26300:2006";
 choices[9][1] = "RFC 2373";
 choices[9][2] = "ISO/IEC 9899:1999";
 choices[9][3] = "ISO 9000";
 answers[9] = 0;
 units[9] = ['66'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 9344. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[9] = 9344


//  Id pregunta: 2162 Año de creación de pregunta: 2002
 questions[10]= "11)  En la planificaci&oacute;n de proyectos:";
 choices[10]= new Array();
 choices[10][0] = "Los diagramas de red (entre ellos PERT, ADM &ndash;actividad flecha-, y PDM &ndash;actividad nodo-) presentan dependencias pero no informaci&oacute;n temporal.";
 choices[10][1] = "Los diagramas de red (entre ellos PERT, ADM &ndash;actividad flecha-, y PDM &ndash;actividad nodo-) presentan dependencias e informaci&oacute;n temporal.";
 choices[10][2] = "Los gr&aacute;ficos de barras o de Gantt representan las dependencias entre tareas.";
 choices[10][3] = "El camino cr&iacute;tico en un proyecto ha de ser necesariamente &uacute;nico.";
 answers[10] = 0;
 units[10] = ['33'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 2162. La informaci&oacute;n temporal puede aparecer pero no siempre aparece";
 preguntaids[10] = 2162


//  Id pregunta: 2540 Año de creación de pregunta: 2004
 questions[11]= "12)  Con respecto a las tecnolog&iacute;as de desarrollo web:";
 choices[11]= new Array();
 choices[11][0] = "IIS act&uacute;a como servidor web de Microsoft";
 choices[11][1] = "No se puede acceder a una base de datos Oracle desde un entorno Microsoft";
 choices[11][2] = "Las p&aacute;ginas ASP suelen funcionar sobre servidores Apache";
 choices[11][3] = "SQL Server suele estar asociado a la tecnolog&iacute;a PHP";
 answers[11] = 0;
 units[11] = ['62'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 2540. ";
 preguntaids[11] = 2540


//  Id pregunta: 8634 Año de creación de pregunta: 2013
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes es un Proceso Principal de M&eacute;trica 3?";
 choices[12]= new Array();
 choices[12][0] = "Mantenimiento de Sistemas de Informaci&oacute;n";
 choices[12][1] = "Dise&ntilde;o de Sistemas de Informaci&oacute;n";
 choices[12][2] = "Estudio de Viabilidad del Sistema";
 choices[12][3] = "Ninguno";
 answers[12] = 0;
 units[12] = ['91'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 8634. ";
 preguntaids[12] = 8634


//  Id pregunta: 1667 Año de creación de pregunta: 2016
 questions[13]= "14)  Se&ntilde;ale la respuesta correcta en relaci&oacute;n a la funci&oacute;n del comando Grep de Linux?";
 choices[13]= new Array();
 choices[13][0] = "Partici&oacute;n del disco en sectores.";
 choices[13][1] = "Sirve para buscar cadenas de texto dentro de un archivo o dentro de otra cadena.";
 choices[13][2] = "Utilidad para instalar programas.";
 choices[13][3] = "Monitoriza el sistema.";
 answers[13] = 1;
 units[13] = ['57'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 1667. ";
 preguntaids[13] = 1667


//  Id pregunta: 963 Año de creación de pregunta: 2016
 questions[14]= "15)  El sector p&uacute;blico institucional se integra por:";
 choices[14]= new Array();
 choices[14][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[14][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[14][2] = "las Universidades p&uacute;blicas";
 choices[14][3] = "todas son correctas";
 answers[14] = 3;
 units[14] = ['4', '7', '8', '9'];
 blocks[14] = ['A1', 'A2'];
 comments[14] = "Id Pregunta: 963. Ley 40/2015";
 preguntaids[14] = 963


//  Id pregunta: 6942 Año de creación de pregunta: 2010
 questions[15]= "16)  Indique, cu&aacute;l de los siguientes elementos no forma parte de una Intranet:";
 choices[15]= new Array();
 choices[15][0] = "Nomina del personal.";
 choices[15][1] = "Tabl&oacute;n de Anuncios.";
 choices[15][2] = "Motor de b&uacute;squeda de documentaci&oacute;n.";
 choices[15][3] = "Procesador de Textos.";
 answers[15] = 3;
 units[15] = ['113'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 6942. ";
 preguntaids[15] = 6942


//  Id pregunta: 10152 Año de creación de pregunta: 2015
 questions[16]= "17)  Un agente inteligente es un programa inform&aacute;tico que:";
 choices[16]= new Array();
 choices[16][0] = "Por encargo de un usuario u otro programa realiza sugerencias determin&iacute;sticas predeterminadas.";
 choices[16][1] = "Por encargo de un usuario realiza sugerencias que requieren cierto grado de aprendizaje, sin llegar a ejecutar tareas.";
 choices[16][2] = "Por encargo de un usuario u otro programa, realiza de forma aut&oacute;noma tareas que requieren cierto grado de inteligencia y aprendizaje.";
 choices[16][3] = "Por encargo de un usuario realiza sugerencias que deben ser evaluadas por el usuario que las encarga antes de ser ejecutadas.";
 answers[16] = 2;
 units[16] = ['67'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 10152. Examen TIC A1 2014";
 preguntaids[16] = 10152


//  Id pregunta: 98 Año de creación de pregunta: 2016
 questions[17]= "18)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[17]= new Array();
 choices[17][0] = "Ley org&aacute;nica.";
 choices[17][1] = "Ley ordinaria.";
 choices[17][2] = "Ley de bases.";
 choices[17][3] = "Ley marco.";
 answers[17] = 2;
 units[17] = ['1'];
 blocks[17] = ['A1'];
 comments[17] = "Id Pregunta: 98. Constituci&oacute;n de 1978";
 preguntaids[17] = 98


//  Id pregunta: 3457 Año de creación de pregunta: 2006
 questions[18]= "19)  Se&ntilde;ale la correcta:";
 choices[18]= new Array();
 choices[18][0] = "3DES es un algoritmo de cifrado asim&eacute;trico que consiste en aplicar tres veces DES";
 choices[18][1] = "AES es un algoritmo muy vers&aacute;til porque puede usarse com algoritmo de bloque, como algoritmo de flujo,como funci&oacute;n resumen y como generador de n&uacute;meros pseudo-aleatorios.";
 choices[18][2] = "Las caracter&iacute;sticas de las funciones hash son: resistencia a la preimagen, resistencia a la postimagen y resistencia a la colisi&oacute;n";
 choices[18][3] = "Todas las anteriores";
 answers[18] = 1;
 units[18] = ['76'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 3457. ";
 preguntaids[18] = 3457


//  Id pregunta: 1861 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes herramientas software para backup NO es de c&oacute;digo abierto?";
 choices[19]= new Array();
 choices[19][0] = "Bacula";
 choices[19][1] = "BackupPC";
 choices[19][2] = "Amanda";
 choices[19][3] = "NetBackup";
 answers[19] = 3;
 units[19] = ['66'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 1861. ";
 preguntaids[19] = 1861


//  Id pregunta: 4986 Año de creación de pregunta: 2002
 questions[20]= "21)  Los mensajes SMS:";
 choices[20]= new Array();
 choices[20][0] = "Viajan por un canal de se&ntilde;alizaci&oacute;n";
 choices[20][1] = "Viajan por un canal de voz";
 choices[20][2] = "Se codifican por pulsos";
 choices[20][3] = "Ninguna de las anteriores";
 answers[20] = 0;
 units[20] = ['117'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 4986. ";
 preguntaids[20] = 4986


//  Id pregunta: 4528 Año de creación de pregunta: 2002
 questions[21]= "22)  Dentro del modelo OSI la funci&oacute;n de 'permitir la comunicaci&oacute;n simult&aacute;nea, utilizando una o varias direcciones de red, de una o varias sesiones de trabajo', corresponde al nivel:";
 choices[21]= new Array();
 choices[21][0] = "Nivel de red";
 choices[21][1] = "Nivel de transporte";
 choices[21][2] = "Nivel de sesi&oacute;n";
 choices[21][3] = "Nivel de presentaci&oacute;n";
 answers[21] = 1;
 units[21] = ['105'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4528. ";
 preguntaids[21] = 4528


//  Id pregunta: 1971 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes NO es un requisito, que debe figurar en la solicitud de iniciaci&oacute;n de un procedimiento administrativo?";
 choices[22]= new Array();
 choices[22][0] = "Hechos, razones y petici&oacute;n en que se concrete con toda claridad la solicitud.";
 choices[22][1] = "&Oacute;rgano, centro o unidad administrativa a la que se dirige.";
 choices[22][2] = "Domicilio profesional a efectos de notificaciones.";
 choices[22][3] = "Firma del solicitante o acreditaci&oacute;n de la autenticidad de su voluntad expresada por cualquier medio.";
 answers[22] = 2;
 units[22] = ['7'];
 blocks[22] = ['A2'];
 comments[22] = "Id Pregunta: 1971. ";
 preguntaids[22] = 1971


//  Id pregunta: 2643 Año de creación de pregunta: 2002
 questions[23]= "24)  &iquest;Cu&aacute;l es la diferencia de los comandos del sistema, tales como la orden de listado de directorio (dir &oacute; ls) en MSDOS y LINUX?:";
 choices[23]= new Array();
 choices[23][0] = "En MSDOS, los programas del sistema estaban contenidos en el nucleo, y en LINUX son archivos ejecutables";
 choices[23][1] = "En LINUX, los programas del sistema estan contenidos en el nucleo, y en MSDOS eran archivos ejecutables";
 choices[23][2] = "No existe diferencia, salvo de nombre en esos programas";
 choices[23][3] = "Todas son falsas";
 answers[23] = 1;
 units[23] = ['57', '56'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 2643. ";
 preguntaids[23] = 2643


//  Id pregunta: 10859 Año de creación de pregunta: 2015
 questions[24]= "25)  Las gu&iacute;as de mejores pr&aacute;ticas de Java se denominan:";
 choices[24]= new Array();
 choices[24][0] = "Hibernate";
 choices[24][1] = "Spring";
 choices[24][2] = "BluePrints";
 choices[24][3] = "Struts";
 answers[24] = 2;
 units[24] = ['64'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 10859. ";
 preguntaids[24] = 10859


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[25]= new Array();
 choices[25][0] = "El 1 de noviembre de 1994.";
 choices[25][1] = "El 1 de noviembre de 1992.";
 choices[25][2] = "El 1 de noviembre de 1995.";
 choices[25][3] = "El 1 de noviembre de 1993.";
 answers[25] = 3;
 units[25] = ['5'];
 blocks[25] = ['A1'];
 comments[25] = "Id Pregunta: 168. Uni&oacute;n Europea";
 preguntaids[25] = 168


//  Id pregunta: 4112 Año de creación de pregunta: 2003
 questions[26]= "27)  En los Sistemas de Recuperaci&oacute;n de Informaci&oacute;n la t&eacute;cnica de Sistemas Expertos consiste en:";
 choices[26]= new Array();
 choices[26][0] = "Expresar las consultas como solicitudes de textos relevantes con relaci&oacute;n a un t&oacute;pico particular, produci&eacute;ndose a continuaci&oacute;n la b&uacute;squeda en la base de conocimientos mediante activaci&oacute;n de reglas, que producen finalmente una relaci&oacute;n clasificada de texto";
 choices[26][1] = "Expresar las consultas como solicitudes de textos relevantes con relaci&oacute;n a varios t&oacute;picos, produci&eacute;ndose a continuaci&oacute;n la b&uacute;squeda en la base de conocimientos mediante activaci&oacute;n de reglas, que producen finalmente una relaci&oacute;n clasificada de textos pote";
 choices[26][2] = "Expresar las consultas como solicitudes de textos relevantes con relaci&oacute;n a un t&oacute;pico particular, produci&eacute;ndose a continuaci&oacute;n la b&uacute;squeda en la base de conocimientos mediante consulta de &iacute;ndices invertidos, que producen finalmente una relaci&oacute;n clasificad";
 choices[26][3] = "Expresar las consultas como solicitudes de textos relevantes con relaci&oacute;n a un t&oacute;pico particular, produci&eacute;ndose a continuaci&oacute;n la b&uacute;squeda en la base de conocimientos mediante activaci&oacute;n de reglas, que producen finalmente una relaci&oacute;n de textos presentes";
 answers[26] = 0;
 units[26] = ['100'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 4112. ";
 preguntaids[26] = 4112


//  Id pregunta: 5367 Año de creación de pregunta: 2006
 questions[27]= "28)  Los puntos de conexi&oacute;n de telefon&iacute;a a implantar en una nueva instalaci&oacute;n ser&aacute;n normalmente de tipo";
 choices[27]= new Array();
 choices[27][0] = "RJ11 de 6 contactos";
 choices[27][1] = "RJ45 de 6 contactos";
 choices[27][2] = "RJ45 de 8 contactos";
 choices[27][3] = "RJ49 para cables STP";
 answers[27] = 2;
 units[27] = ['104'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 5367. ";
 preguntaids[27] = 5367


//  Id pregunta: 322 Año de creación de pregunta: 2016
 questions[28]= "29)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[28]= new Array();
 choices[28][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[28][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[28][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[28][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[28] = 2;
 units[28] = ['11'];
 blocks[28] = ['A2'];
 comments[28] = "Id Pregunta: 322. Presupuestos generales";
 preguntaids[28] = 322


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[29]= "30)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[29]= new Array();
 choices[29][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[29][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[29][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[29][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[29] = 3;
 units[29] = ['11'];
 blocks[29] = ['A2'];
 comments[29] = "Id Pregunta: 315. Presupuestos generales";
 preguntaids[29] = 315


//  Id pregunta: 6652 Año de creación de pregunta: 2009
 questions[30]= "31)  &iquest;D&oacute;nde NO es necesario especificar la forma de acceso al Perfil del Contratante (art&iacute;culo 53.1 RD Legislativo 3/2011)?";
 choices[30]= new Array();
 choices[30][0] = "En las p&aacute;ginas Web institucionales que mantengan los entes del sector p&uacute;blico";
 choices[30][1] = "En el Bolet&iacute;n Oficial del Estado";
 choices[30][2] = "En la Plataforma de Contrataci&oacute;n del Sector P&uacute;blico";
 choices[30][3] = "En los pliegos y anuncions de licitaci&oacute;n";
 answers[30] = 1;
 units[30] = ['37'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 6652. ";
 preguntaids[30] = 6652


//  Id pregunta: 201 Año de creación de pregunta: 2016
 questions[31]= "32)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[31]= new Array();
 choices[31][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[31][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[31][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[31][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[31] = 3;
 units[31] = ['7'];
 blocks[31] = ['A2'];
 comments[31] = "Id Pregunta: 201. AGE A1 2015";
 preguntaids[31] = 201


//  Id pregunta: 9565 Año de creación de pregunta: 2014
 questions[32]= "33)  Se&ntilde;ale la afirmaci&oacute;n falsa en relaci&oacute;n a las redes neuronales";
 choices[32]= new Array();
 choices[32][0] = "Son un m&eacute;todo de representaci&oacute;n del conocimiento param&eacute;trico";
 choices[32][1] = "La unidad de representaci&oacute;n de m&aacute;s alto nivel es la neurona";
 choices[32][2] = "Las neuronas se conectan mediante arcos";
 choices[32][3] = "Las neuronas se agrupan en capas";
 answers[32] = 1;
 units[32] = ['68'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 9565. La neurona es el nivel b&aacute;sico de representaci&oacute;n.";
 preguntaids[32] = 9565


//  Id pregunta: 6629 Año de creación de pregunta: 2009
 questions[33]= "34)  De acuerdo con la LOPD, se&ntilde;ale el tipo de fichero que se incluye en el alcance de la Ley";
 choices[33]= new Array();
 choices[33][0] = "Ficheros realizados o mantenidos por personas f&iacute;sicas en el ejercicio de actividades exclusivamente personales o dom&eacute;sticas.";
 choices[33][1] = "Ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas";
 choices[33][2] = "Ficheros establecidos para la investigaci&oacute;n del terrorismo y de formas graves de delincuencia organizada. No obstante el responsable del fichero comunicar&aacute; previamente la existencia del mismo, sus caracter&iacute;sticas generales y su finalidad a la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[33][3] = "Ficheros de titularidad p&uacute;blica, con la publicaci&oacute;n de la disposici&oacute;n de regulaci&oacute;n correspondiente";
 answers[33] = 3;
 units[33] = ['35'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 6629. MAP 2008 A2";
 preguntaids[33] = 6629


//  Id pregunta: 2896 Año de creación de pregunta: 2002
 questions[34]= "35)  Indicar cu&aacute;l de las siguientes no es una ventaja de los sistemas expertos:";
 choices[34]= new Array();
 choices[34][0] = "Permanencia";
 choices[34][1] = "Facilidad de reproducci&oacute;n";
 choices[34][2] = "Funcionamiento uniforme";
 choices[34][3] = "Eficiencia";
 answers[34] = 3;
 units[34] = ['68'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 2896. ";
 preguntaids[34] = 2896


//  Id pregunta: 5276 Año de creación de pregunta: 2006
 questions[35]= "36)  Un proxy o apoderado permite";
 choices[35]= new Array();
 choices[35][0] = "realizar funciones de repetidor, ocultando la m&aacute;quina solicitante";
 choices[35][1] = "disponer de una memoria temporal para almacenar las p&aacute;ginas web m&aacute;s visitadas";
 choices[35][2] = "traducir las direcciones internas a externas y viceversa";
 choices[35][3] = "Todas las respuestas son correctas";
 answers[35] = 3;
 units[35] = ['113'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 5276. ";
 preguntaids[35] = 5276


//  Id pregunta: 9109 Año de creación de pregunta: 2014
 questions[36]= "37)  Se&ntilde;ale de entre las siguientes la t&eacute;cnica de integraci&oacute;n NO incremental para pruebas de integraci&oacute;n:";
 choices[36]= new Array();
 choices[36][0] = "Top-down.";
 choices[36][1] = "Sandwich.";
 choices[36][2] = "Big-Bang";
 choices[36][3] = "Bottom-up.";
 answers[36] = 2;
 units[36] = ['91'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 9109. Examen TIC A2 2013";
 preguntaids[36] = 9109


//  Id pregunta: 1051 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n el modelo de Mc Call, &iquest;cu&aacute;l de las siguientes NO es una medida directa aplicable a un atributo relativo a un producto?";
 choices[37]= new Array();
 choices[37][0] = "Estructuraci&oacute;n.";
 choices[37][1] = "Coste.";
 choices[37][2] = "Modularidad.";
 choices[37][3] = "Acoplamiento.";
 answers[37] = 2;
 units[37] = ['93'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 1051. ";
 preguntaids[37] = 1051


//  Id pregunta: 10890 Año de creación de pregunta: 2015
 questions[38]= "39)  &iquest;cu&aacute;l no es un mecanismo de transici&oacute;n a ipv6?";
 choices[38]= new Array();
 choices[38][0] = "Tunel 6a4";
 choices[38][1] = "Tunel GRE";
 choices[38][2] = "Tunel ISATAP";
 choices[38][3] = "Tunel PPP";
 answers[38] = 3;
 units[38] = ['109'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 10890. CCN-STIC-495";
 preguntaids[38] = 10890


//  Id pregunta: 296 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[39]= new Array();
 choices[39][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[39][1] = "Intervenci&oacute;n formal y material.";
 choices[39][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[39][3] = "Intervenci&oacute;n formal y general.";
 answers[39] = 1;
 units[39] = ['11'];
 blocks[39] = ['A2'];
 comments[39] = "Id Pregunta: 296. Presupuestos generales";
 preguntaids[39] = 296


//  Id pregunta: 4021 Año de creación de pregunta: 2002
 questions[40]= "41)  El programa IDABC:";
 choices[40]= new Array();
 choices[40][0] = "Pretende el Intercambio de Datos e interoperabilidad entre Adminsitraciones, Empresas y Ciudadanos";
 choices[40][1] = "Contiene tres directivas";
 choices[40][2] = "Financiaba tanto los proyectos horizontales como verticales en su totalidad";
 choices[40][3] = "Fue creado antes que el ENS";
 answers[40] = 0;
 units[40] = ['19'];
 blocks[40] = ['A4'];
 comments[40] = "Id Pregunta: 4021. ";
 preguntaids[40] = 4021


//  Id pregunta: 1977 Año de creación de pregunta: 2016
 questions[41]= "42)  En relaci&oacute;n a los procedimientos de adjudicaci&oacute;n previstos en la Ley de Contratos del Sector P&uacute;blico, en el procedimiento restringido:";
 choices[41]= new Array();
 choices[41][0] = "Solo podr&aacute;n presentar proposiciones aquellos empresarios que, a su solicitud y en atenci&oacute;n a su solvencia, sean seleccionados por el &oacute;rgano de contrataci&oacute;n, estando prohibida toda negociaci&oacute;n de los t&eacute;rminos del contrato con los solicitantes o candidatos.";
 choices[41][1] = "La adjudicaci&oacute;n recaer&aacute; en el licitador justificadamente elegido por el &oacute;rgano de contrataci&oacute;n, tras efectuar consultas con diversos candidatos y negociar las condiciones del contrato con uno o varios de ellos.";
 choices[41][2] = "Todo empresario interesado podr&aacute; presentar una proposici&oacute;n, quedando excluida toda negociaci&oacute;n de los t&eacute;rminos del contrato con los licitadores.";
 choices[41][3] = "Solo podr&aacute;n presentar proposiciones aquellos empresarios que, a su solicitud y en atenci&oacute;n a su solvencia, sean seleccionados por el &oacute;rgano de contrataci&oacute;n, pudi&eacute;ndose negociar las condiciones del contrato con los mismos.";
 answers[41] = 0;
 units[41] = ['10'];
 blocks[41] = ['A2'];
 comments[41] = "Id Pregunta: 1977. ";
 preguntaids[41] = 1977


//  Id pregunta: 8507 Año de creación de pregunta: 2011
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes no es un servidor de streaming?";
 choices[42]= new Array();
 choices[42][0] = "Wowza Media Server";
 choices[42][1] = "Icecast";
 choices[42][2] = "Darwin Streaming Server";
 choices[42][3] = "FlowCast";
 answers[42] = 3;
 units[42] = ['103'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 8507. Teleco Ayto. Madrid 2010";
 preguntaids[42] = 8507


//  Id pregunta: 375 Año de creación de pregunta: 2016
 questions[43]= "44)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[43]= new Array();
 choices[43][0] = "Discriminaci&oacute;n indirecta.";
 choices[43][1] = "Discriminaci&oacute;n directa.";
 choices[43][2] = "Discriminaci&oacute;n por maternidad.";
 choices[43][3] = "Discriminaci&oacute;n abusiva.";
 answers[43] = 1;
 units[43] = ['14'];
 blocks[43] = ['A3'];
 comments[43] = "Id Pregunta: 375. Pol&iacute;ticas de igualdad";
 preguntaids[43] = 375


//  Id pregunta: 1497 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l es el significado de la sigla SLA empleada en la Implantaci&oacute;n y Aceptaci&oacute;n del Sistema?";
 choices[44]= new Array();
 choices[44][0] = "Service Level Agreement.";
 choices[44][1] = "Service Layer Agreement.";
 choices[44][2] = "System Layer Architecture.";
 choices[44][3] = "System Low Adherence.";
 answers[44] = 0;
 units[44] = ['101'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 1497. ";
 preguntaids[44] = 1497


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[45]= new Array();
 choices[45][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado";
 choices[45][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[45][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[45][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[45] = 2;
 units[45] = ['7'];
 blocks[45] = ['A2'];
 comments[45] = "Id Pregunta: 244. Ley 39/2015";
 preguntaids[45] = 244


//  Id pregunta: 10401 Año de creación de pregunta: 2015
 questions[46]= "47)  &iquest;C&oacute;mo se denomina el plan de la Agenda Digital Espa&ntilde;ola referente al objetivo de Despliegue de redes r&aacute;pidas y ultrarr&aacute;pidas?";
 choices[46]= new Array();
 choices[46][0] = "Plan de Impulso del acceso r&aacute;pido y ultrarr&aacute;pido a Internet";
 choices[46][1] = "Plan de Telecomunicaciones Ultrarr&aacute;pidas";
 choices[46][2] = "Plan de Despliegue de infraestructuras de Red Espa&ntilde;ola";
 choices[46][3] = "Ninguna de las anteriores";
 answers[46] = 1;
 units[46] = ['19'];
 blocks[46] = ['A4'];
 comments[46] = "Id Pregunta: 10401. ";
 preguntaids[46] = 10401


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[47]= "48)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[47]= new Array();
 choices[47][0] = "Anualmente.";
 choices[47][1] = "Ninguna de las respuestas es correcta.";
 choices[47][2] = "Trimestralmente.";
 choices[47][3] = "Semestralmente.";
 answers[47] = 0;
 units[47] = ['11'];
 blocks[47] = ['A2'];
 comments[47] = "Id Pregunta: 293. Presupuestos generales";
 preguntaids[47] = 293


//  Id pregunta: 4878 Año de creación de pregunta: 2002
 questions[48]= "49)  La direcci&oacute;n IPv4 172.30.20.20:";
 choices[48]= new Array();
 choices[48][0] = "Es una direcci&oacute;n privada";
 choices[48][1] = "Es una direcci&oacute;n p&uacute;blica";
 choices[48][2] = "Es una direcci&oacute;n de clase C";
 choices[48][3] = "Es una direcci&oacute;n de clase D";
 answers[48] = 0;
 units[48] = ['105'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 4878. ";
 preguntaids[48] = 4878


//  Id pregunta: 10158 Año de creación de pregunta: 2015
 questions[49]= "50)  Respecto al formato de factura electr&oacute;nica Facturae 3.2.x, se&ntilde;ale la respuesta correcta:";
 choices[49]= new Array();
 choices[49][0] = "Es de tipo PDF-A, para facilitar su impresi&oacute;n.";
 choices[49][1] = "Es un formato certificado con la Norma SICRES 3.0, para la compatibilidad e interconexi&oacute;n de los Registros Contables de Facturas.";
 choices[49][2] = "Es un formato no estructurado compuesto por dos bloques obligatorios y cuatro opcionales.";
 choices[49][3] = "Incluye firma Electr&oacute;nica en XML Advanced Electronic Signature (XADES)";
 answers[49] = 3;
 units[49] = ['10'];
 blocks[49] = ['A2'];
 comments[49] = "Id Pregunta: 10158. Examen TIC A1 2014";
 preguntaids[49] = 10158


//  Id pregunta: 9230 Año de creación de pregunta: 2014
 questions[50]= "51)  Mediante la tecnolog&iacute;a EGPRS (Enhanced GPRS) se pueden llegar a conseguir velocidades de transmisi&oacute;n en modo paquetes de hasta";
 choices[50]= new Array();
 choices[50][0] = "384 kbps.";
 choices[50][1] = "115 kbps.";
 choices[50][2] = "2 Mbps.";
 choices[50][3] = "10 Mbps.";
 answers[50] = 0;
 units[50] = ['117'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 9230. Examen TIC A1 2013";
 preguntaids[50] = 9230


//  Id pregunta: 223 Año de creación de pregunta: 2016
 questions[51]= "52)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[51]= new Array();
 choices[51][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[51][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[51][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[51][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[51] = 3;
 units[51] = ['7'];
 blocks[51] = ['A2'];
 comments[51] = "Id Pregunta: 223. Ley 39/2015";
 preguntaids[51] = 223


//  Id pregunta: 2217 Año de creación de pregunta: 2002
 questions[52]= "53)  La decisi&oacute;n sobre si la estructura inform&aacute;tica de una organizaci&oacute;n debe ser centralizada o descentralizada, debe tomarse en la etapa de:";
 choices[52]= new Array();
 choices[52][0] = "Planificaci&oacute;n del sistema";
 choices[52][1] = "Especificaci&oacute;n del sistema";
 choices[52][2] = "Dise&ntilde;o del sistema";
 choices[52][3] = "Codificaci&oacute;n del sistema";
 answers[52] = 0;
 units[52] = ['24'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 2217. ";
 preguntaids[52] = 2217


//  Id pregunta: 5373 Año de creación de pregunta: 2006
 questions[53]= "54)  Para listar las conexiones TCP/UDP abiertas en un servidor utilizo el comando";
 choices[53]= new Array();
 choices[53][0] = "ping";
 choices[53][1] = "netstat";
 choices[53][2] = "tracert o traceroute";
 choices[53][3] = "ipconfig / ifconfig";
 answers[53] = 1;
 units[53] = ['109'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 5373. ";
 preguntaids[53] = 5373


//  Id pregunta: 6985 Año de creación de pregunta: 2010
 questions[54]= "55)  &iquest;Cu&aacute;l es el objetivo del Proyecto Mono de Ximian, actualmente impulsado por Novell?";
 choices[54]= new Array();
 choices[54][0] = "Crear una versi&oacute;n Java compatible con el Sistema Operativo GNU/Linux.";
 choices[54][1] = "Crear un Office open source, compatible con el Office de Microsoft.";
 choices[54][2] = "Crear un grupo de herramientas libres, basadas en GNU/Linux y compatibles con .NET seg&uacute;n lo especificado por el ECMA.";
 choices[54][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[54] = 2;
 units[54] = ['63'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 6985. ";
 preguntaids[54] = 6985


//  Id pregunta: 2479 Año de creación de pregunta: 2004
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es correcta?";
 choices[55]= new Array();
 choices[55][0] = "El elemento b&aacute;sico para la programaci&oacute;n concurrente en Java son los 'threads'";
 choices[55][1] = "Java permite la herencia m&uacute;ltiple de clases";
 choices[55][2] = "El modelo de punteros de Java elimina la posibilidad de transformar un entero en un puntero";
 choices[55][3] = "La variable 'this' de una clase Java hace referencia a la propia instancia de la clase sobre la que se est&aacute; ejecutando el c&oacute;digo actual";
 answers[55] = 1;
 units[55] = ['64'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 2479. ";
 preguntaids[55] = 2479


//  Id pregunta: 3443 Año de creación de pregunta: 2006
 questions[56]= "57)  OLAP significa:";
 choices[56]= new Array();
 choices[56][0] = "On-Line Automatic Prediction.";
 choices[56][1] = "On-Line Analytical Prediction.";
 choices[56][2] = "On-Line Automatic Processing.";
 choices[56][3] = "On-Line Analytical Processing.";
 answers[56] = 3;
 units[56] = ['72'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 3443. ";
 preguntaids[56] = 3443


//  Id pregunta: 4772 Año de creación de pregunta: 2002
 questions[57]= "58)  El uso de la red de energ&iacute;a el&eacute;ctrica como una red de transmisi&oacute;n telem&aacute;tica de voz y datos es la tecnolog&iacute;a:";
 choices[57]= new Array();
 choices[57][0] = "LCC";
 choices[57][1] = "PCC";
 choices[57][2] = "LLC";
 choices[57][3] = "PLC";
 answers[57] = 3;
 units[57] = ['108'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 4772. ";
 preguntaids[57] = 4772


//  Id pregunta: 4411 Año de creación de pregunta: 2002
 questions[58]= "59)  En las Active Server Pages de Microsoft IIS:";
 choices[58]= new Array();
 choices[58][0] = "Las p&aacute;ginas ASP son ficheros de texto, con c&oacute;digo VBScript o JScript, que es Interpretado";
 choices[58][1] = "Las p&aacute;ginas ASPX son ficheros compilados con c&oacute;digo de lenguajes Microsoft.NET";
 choices[58][2] = "Las p&aacute;ginas CFM son p&aacute;ginas con c&oacute;digo C, interpretado";
 choices[58][3] = "A y B son ciertas";
 answers[58] = 3;
 units[58] = ['63'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 4411. ";
 preguntaids[58] = 4411


//  Id pregunta: 9899 Año de creación de pregunta: 2015
 questions[59]= "60)  &iquest;Qu&eacute; reglamento ha considerado la Ley 39/2015 para el establecimiento los sistemas de identificaci&oacute;n como los de firma previstos en dicha Ley?";
 choices[59]= new Array();
 choices[59][0] = "Reglamento (UE) n.&ordm; 910/2014.";
 choices[59][1] = "Reglamento (UE) n.&ordm; 810/2013.";
 choices[59][2] = "Reglamento (UE) n.&ordm; 527/2013.";
 choices[59][3] = "Reglamento (UE) n.&ordm; 810/2014.";
 answers[59] = 0;
 units[59] = ['7', '19'];
 blocks[59] = ['A2', 'A4'];
 comments[59] = "Id Pregunta: 9899. ";
 preguntaids[59] = 9899


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[60]= "61)  La norma internacional cuyo objetivo es crear un est&aacute;ndar sobre pruebas de software que recoja y estandarice vocabulario, procesos, t&eacute;cnicas de documentaci&oacute;n, etc. del ciclo de vida de las pruebas es:";
 choices[60]= new Array();
 choices[60][0] = "ISO/IEC 25000";
 choices[60][1] = "ISO/IEC 829";
 choices[60][2] = "ISO/IEC/IEEE 29119";
 choices[60][3] = "ISO/IEC 9126";
 answers[60] = 2;
 units[60] = ['92'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 831. AGE A2 2015";
 preguntaids[60] = 831


//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[61]= "62)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[61]= new Array();
 choices[61][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[61][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[61][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[61][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[61] = 2;
 units[61] = ['7'];
 blocks[61] = ['A2'];
 comments[61] = "Id Pregunta: 226. Ley 39/2015";
 preguntaids[61] = 226


//  Id pregunta: 9103 Año de creación de pregunta: 2014
 questions[62]= "63)  Los grandes sistemas, tambi&eacute;n llamados mainframe";
 choices[62]= new Array();
 choices[62][0] = "son desarrollados por muchos fabricantes.";
 choices[62][1] = "usan memoria distribuida y no compartida.";
 choices[62][2] = "son soluciones altamente propietarias.";
 choices[62][3] = "son sistemas d&eacute;bilmente acoplados.";
 answers[62] = 2;
 units[62] = ['50'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 9103. Examen TIC-A1 2013";
 preguntaids[62] = 9103


//  Id pregunta: 229 Año de creación de pregunta: 2016
 questions[63]= "64)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[63]= new Array();
 choices[63][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[63][1] = "mediante resoluci&oacute;n judicial especial";
 choices[63][2] = "&uacute;nicamente mediante poder notarial";
 choices[63][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[63] = 3;
 units[63] = ['7'];
 blocks[63] = ['A2'];
 comments[63] = "Id Pregunta: 229. Ley 39/2015";
 preguntaids[63] = 229


//  Id pregunta: 1816 Año de creación de pregunta: 2016
 questions[64]= "65)  Indique cu&aacute;l de las siguientes definiciones referidas a la t&eacute;cnica AJAX (Asynchronous JavaScript And XML) es correcta";
 choices[64]= new Array();
 choices[64][0] = "AJAX es una plataforma v&aacute;lida s&oacute;lo para plataformas JEE.";
 choices[64][1] = "AJAX no representa una tecnolog&iacute;a en s&iacute; misma, sino que se trata de la combinaci&oacute;n de un grupo de tecnolog&iacute;as ya existentes.";
 choices[64][2] = "AJAX utiliza siempre el formato XML para la transferencia de datos solicitados al servidor.";
 choices[64][3] = "En las aplicaciones desarrolladas con AJAX no es posible realizar cambios sobre las p&aacute;ginas si no se realiza la recarga de p&aacute;gina.";
 answers[64] = 1;
 units[64] = ['74'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 1816. ";
 preguntaids[64] = 1816


//  Id pregunta: 4175 Año de creación de pregunta: 2006
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes es un m&eacute;todo de an&aacute;lisis orientado al flujo de datos?";
 choices[65]= new Array();
 choices[65][0] = "El Diagrama de Flujo de Datos (DFD)";
 choices[65][1] = "El Modelo Entidad/Relaci&oacute;n (E/R) de Peter Chen";
 choices[65][2] = "La Historia de la Vida de las Entidades (HVE)";
 choices[65][3] = "El Diagrama de Estructura de Datos (DED)";
 answers[65] = 0;
 units[65] = ['85', '86'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 4175. ";
 preguntaids[65] = 4175


//  Id pregunta: 9368 Año de creación de pregunta: 2014
 questions[66]= "67)  De entre los siguientes, &iquest;qu&eacute; protocolo es utilizado para reservar recursos de red a una determinada aplicaci&oacute;n?";
 choices[66]= new Array();
 choices[66][0] = "RSVP";
 choices[66][1] = "ARP";
 choices[66][2] = "802.1ar";
 choices[66][3] = "H.264";
 answers[66] = 0;
 units[66] = ['107'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 9368. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[66] = 9368


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[67]= "68)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[67]= new Array();
 choices[67][0] = "La Comisi&oacute;n Europea.";
 choices[67][1] = "El Consejo Europeo.";
 choices[67][2] = "El Consejo de Europa.";
 choices[67][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[67] = 0;
 units[67] = ['5'];
 blocks[67] = ['A1'];
 comments[67] = "Id Pregunta: 130. Uni&oacute;n Europea";
 preguntaids[67] = 130


//  Id pregunta: 5884 Año de creación de pregunta: 2007
 questions[68]= "69)  La Ley Org&aacute;nica 15/1999 que regula la Protecci&oacute;n de Datos de Car&aacute;cter Personal, ser&aacute; de aplicaci&oacute;n a los datos de car&aacute;cter personal registrados en soporte f&iacute;sico, que los haga susceptibles de tratamiento, y a toda modalidad de uso posterior de estos datos por";
 choices[68]= new Array();
 choices[68][0] = "El sector p&uacute;blico exclusivamente";
 choices[68][1] = "El sector privado exclusivamente";
 choices[68][2] = "Los sectores p&uacute;blico y privado";
 choices[68][3] = "El sector privado y, en situaciones muy limitadas, afecta tambi&eacute;n al sector p&uacute;blico";
 answers[68] = 2;
 units[68] = ['35'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 5884. ";
 preguntaids[68] = 5884


//  Id pregunta: 6812 Año de creación de pregunta: 2010
 questions[69]= "70)  El est&aacute;ndar WSDL:";
 choices[69]= new Array();
 choices[69][0] = "Es el protocolo para efectuar llamadas a m&eacute;todos de objetos remotos mediante peticiones XML.";
 choices[69][1] = "Describe la interfaz de servicio";
 choices[69][2] = "Es el registro p&uacute;blico de servicios.";
 choices[69][3] = "Es el protocolo de transporte.";
 answers[69] = 1;
 units[69] = ['74'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 6812. TIC A 2009";
 preguntaids[69] = 6812


//  Id pregunta: 1462 Año de creación de pregunta: 2016
 questions[70]= "71)  Se&ntilde;ale c&oacute;mo se clasifica la situaci&oacute;n de dependencia conforme a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[70]= new Array();
 choices[70][0] = "En dos grados, cada uno dividido en dos niveles.";
 choices[70][1] = "En dos grados, cada uno dividido en tres niveles.";
 choices[70][2] = "En tres grados, cada uno dividido en dos niveles.";
 choices[70][3] = "En tres grados, cada uno dividido en tres niveles.";
 answers[70] = 2;
 units[70] = ['14'];
 blocks[70] = ['A3'];
 comments[70] = "Id Pregunta: 1462. ";
 preguntaids[70] = 1462


//  Id pregunta: 60 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[71]= new Array();
 choices[71][0] = "Por Real Decreto.";
 choices[71][1] = "Por Orden del Ministerio del Interior.";
 choices[71][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[71][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[71] = 2;
 units[71] = ['1'];
 blocks[71] = ['A1'];
 comments[71] = "Id Pregunta: 60. Constituci&oacute;n de 1978";
 preguntaids[71] = 60


//  Id pregunta: 3935 Año de creación de pregunta: 2002
 questions[72]= "73)  McCall, en su modelo de calidad del software, define 11 factores. &iquest;Con cu&aacute;l de ellos se asocia el coste de modificaci&oacute;n de un producto?:";
 choices[72]= new Array();
 choices[72][0] = "Fiabilidad";
 choices[72][1] = "Reusabilidad";
 choices[72][2] = "Flexibilidad";
 choices[72][3] = "Facilidad de prueba";
 answers[72] = 2;
 units[72] = ['92', '93'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 3935. ";
 preguntaids[72] = 3935


//  Id pregunta: 992 Año de creación de pregunta: 2016
 questions[73]= "74)  De acuerdo a la ley 40/2015, los estatutos de los Organismos p&uacute;blicos son determinados por sus respectivos:";
 choices[73]= new Array();
 choices[73][0] = "&oacute;rganos superiores";
 choices[73][1] = "&oacute;rganos directivos";
 choices[73][2] = "&oacute;rganos superiores y directivos";
 choices[73][3] = "ninguna es correcta";
 answers[73] = 3;
 units[73] = ['4', '7', '8', '9'];
 blocks[73] = ['A1', 'A2'];
 comments[73] = "Id Pregunta: 992. Ley 40/2015";
 preguntaids[73] = 992


//  Id pregunta: 2740 Año de creación de pregunta: 2002
 questions[74]= "75)  El algoritmo RSA se emplea para:";
 choices[74]= new Array();
 choices[74][0] = "Cifrar datos con una clave secreta";
 choices[74][1] = "Cifrar datos con una criptograf&iacute;a de clave p&uacute;blica";
 choices[74][2] = "Obtener un resumen (huella digital) de un documento";
 choices[74][3] = "Ninguna de las anteriores";
 answers[74] = 1;
 units[74] = ['76'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 2740. ";
 preguntaids[74] = 2740


