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
//  Id pregunta: 8252 Año de creación de pregunta: 2011
 questions[0]= "1)  Los ciudadanos podr&aacute;n utilizar el siguiente sistema de firma electr&oacute;nica para relacionarse con las Administraciones P&uacute;blicas:";
 choices[0]= new Array();
 choices[0][0] = "Siempre se exigir&aacute; firma electr&oacute;nica reconocida, como garant&iacute;a jur&iacute;dica.";
 choices[0][1] = "&Uacute;nicamente el ser&aacute; v&aacute;lido el DNI electr&oacute;nico, una vez extendido a toda la poblaci&oacute;n";
 choices[0][2] = "Firma electr&oacute;nica avanzada.";
 choices[0][3] = "Est&aacute; pendiente de desarrollo reglamentario el uso efectivo de la firma electr&oacute;nica en esos casos.";
 answers[0] = 2;
 units[0] = ['7'];
 blocks[0] = ['A2'];
 comments[0] = "Id Pregunta: 8252. Examen TIC A2 2010 interna";
 preguntaids[0] = 8252


//  Id pregunta: 5892 Año de creación de pregunta: 2007
 questions[1]= "2)  El modelo espiral WinWin define los siguientes hitos en el proceso:";
 choices[1]= new Array();
 choices[1][0] = "Objetivos del ciclo de vida, arquitectura del ciclo de vida y capacidad operativa iniclal.";
 choices[1][1] = "Alcance del sistema y tama&ntilde;o del sistema.";
 choices[1][2] = "Verificaci&oacute;n de requisitos, verificaci&oacute;n de funcionalidades y verificaci&oacute;n de codigo";
 choices[1][3] = "El modelo espiral WinWin no define hitos en el proceso";
 answers[1] = 3;
 units[1] = ['82'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 5892. ";
 preguntaids[1] = 5892


//  Id pregunta: 3271 Año de creación de pregunta: 2003
 questions[2]= "3)  La velocidad te&oacute;rica m&aacute;xima aproximada de un lector de CD-ROM 48x es de:";
 choices[2]= new Array();
 choices[2][0] = "150 KB/seg.";
 choices[2][1] = "3600 KB/seg.";
 choices[2][2] = "7200 KB/seg.";
 choices[2][3] = "3 MB/seg.";
 answers[2] = 2;
 units[2] = ['53'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 3271. Junta Andaluc&iacute;a";
 preguntaids[2] = 3271


//  Id pregunta: 122 Año de creación de pregunta: 2016
 questions[3]= "4)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[3]= new Array();
 choices[3][0] = "Los propios miembros del Tribunal.";
 choices[3][1] = "El Consejo de Europa.";
 choices[3][2] = "El Consejo Europeo.";
 choices[3][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[3] = 0;
 units[3] = ['5'];
 blocks[3] = ['A1'];
 comments[3] = "Id Pregunta: 122. Uni&oacute;n Europea";
 preguntaids[3] = 122


//  Id pregunta: 107 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[4]= new Array();
 choices[4][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[4][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[4][2] = "la falta de interoperabilidad.";
 choices[4][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[4] = 1;
 units[4] = ['5'];
 blocks[4] = ['A1'];
 comments[4] = "Id Pregunta: 107. Uni&oacute;n Europea";
 preguntaids[4] = 107


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[5]= "6)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[5]= new Array();
 choices[5][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[5][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[5][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[5][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[5] = 2;
 units[5] = ['1'];
 blocks[5] = ['A1'];
 comments[5] = "Id Pregunta: 18. Constituci&oacute;n de 1978";
 preguntaids[5] = 18


//  Id pregunta: 10479 Año de creación de pregunta: 2015
 questions[6]= "7)  &iquest;Qu&eacute; se entiende por un SIG dual?";
 choices[6]= new Array();
 choices[6][0] = "El que  mantiene  la  informaci&oacute;n  gr&aacute;fica con una clave identificadora &uacute;nica que sirve  para  realizar  b&uacute;squedas  en  el  SGBD  que  contiene la informaci&oacute;n  alfanum&eacute;rica";
 choices[6][1] = "El que contiene  un  modelo  de  comportamiento  a  lo  largo  del tiempo  para  alg&uacute;n  aspecto  de  la  realidad.";
 choices[6][2] = "El que aplica una concepci&oacute;n orientada  al objeto, en la  que los elementos contengan informaci&oacute;n sobre  sus propiedades, comportamiento etc..";
 choices[6][3] = "El que contempla al mismo tiempo un modelo r&aacute;ster y uno vectorial";
 answers[6] = 0;
 units[6] = ['71'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 10479. ";
 preguntaids[6] = 10479


//  Id pregunta: 10740 Año de creación de pregunta: 2015
 questions[7]= "8)  Seg&uacute;n el modelo EFQM (versi&oacute;n 2013) &iquest;Cu&aacute;l de los siguientes no lo considera como un concepto fundamental de la excelencia?";
 choices[7]= new Array();
 choices[7][0] = "Desarrolar la capacidad de la organizaci&oacute;n.";
 choices[7][1] = "Gestionar con agilidad.";
 choices[7][2] = "Alcanzar el &eacute;xito mediante el talento de las personas.";
 choices[7][3] = "Todos los anteriores son conceptos fundamentales para la excelencia.";
 answers[7] = 3;
 units[7] = ['92'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 10740. ";
 preguntaids[7] = 10740


//  Id pregunta: 9675 Año de creación de pregunta: 2014
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes elementos no forma parte de HTML 5?";
 choices[8]= new Array();
 choices[8][0] = "&lt;canvas&gt;";
 choices[8][1] = "&lt;applet&gt;";
 choices[8][2] = "&lt;keygen&gt;";
 choices[8][3] = "&lt;audio&gt;";
 answers[8] = 1;
 units[8] = ['74'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 9675. ";
 preguntaids[8] = 9675


//  Id pregunta: 3555 Año de creación de pregunta: 2004
 questions[9]= "10)  En relaci&oacute;n con la &quot;reingenier&iacute;a de sistemas&quot; indique cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[9]= new Array();
 choices[9][0] = "La reingenier&iacute;a es la mejora de los sistemas existentes de modo que la inversi&oacute;n resulte muy rentable, independientemente de que dicha mejora pueda ser obtenida con un nuevo desarrollo.";
 choices[9][1] = "La reingenier&iacute;a debe tener bajo coste, hacerse en poco tiempo, tener poco riesgo y dar un valor a&ntilde;adido.";
 choices[9][2] = "La reingener&iacute;a trabaja todos los niveles de abstracci&oacute;n, desde la implementaci&oacute;n hasta el dise&ntilde;o.";
 choices[9][3] = "La reingenier&iacute;a que s&oacute;lo requiere el conocimiento de los interfaces de sistema se llama ingenier&iacute;a inversa o modernizaci&oacute;n de caja blanca.";
 answers[9] = 3;
 units[9] = ['97'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 3555. TIC MAP B 2004";
 preguntaids[9] = 3555


//  Id pregunta: 8542 Año de creación de pregunta: 2011
 questions[10]= "11)  Seg&uacute;n el RD 1671/2009 cu&aacute;l de los siguientes elementos no es un contenido obligatorio del recibo electr&oacute;nico que deber&aacute;n emitir los registros electr&oacute;nicos";
 choices[10]= new Array();
 choices[10][0] = "N&uacute;mero de entrada de registro";
 choices[10][1] = "Informaci&oacute;n del plazo m&aacute;ximo establecido para la resoluci&oacute;n y notificaci&oacute;n del procedimiento";
 choices[10][2] = "Copia del escrito, comunicaci&oacute;n o solicitud presentada";
 choices[10][3] = "Todos las respuestas anteriores forman parte del contenido que debe tener el recibo de un registro electr&oacute;nico";
 answers[10] = 3;
 units[10] = ['43'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 8542. ";
 preguntaids[10] = 8542


//  Id pregunta: 255 Año de creación de pregunta: 2016
 questions[11]= "12)  En la Ley 40/2015, el principio de neutralidad relativo a la sede electr&oacute;nica, pretende garantizar:";
 choices[11]= new Array();
 choices[11][0] = "la independencia en la elecci&oacute;n de las alternativas tecnol&oacute;gicas por los ciudadanos y por las Administraciones p&uacute;blicas.";
 choices[11][1] = "la igualdad de los ciudadano cuando se relacionen con las Administraciones p&uacute;blicas usen medios electr&oacute;nicos o no.";
 choices[11][2] = "el acceso a la informaci&oacute;n sin dependencias de huso horario.";
 choices[11][3] = "el acceso a la informaci&oacute;n, sin dependencia de los idiomas naturales de usuario y Administraciones.";
 answers[11] = 0;
 units[11] = ['7'];
 blocks[11] = ['A2'];
 comments[11] = "Id Pregunta: 255. Ley 40/2015";
 preguntaids[11] = 255


//  Id pregunta: 6762 Año de creación de pregunta: 2009
 questions[12]= "13)  Respecto a la virtualizaci&oacute;n, se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[12]= new Array();
 choices[12][0] = "La virtualizaci&oacute;n se utilizaba en el entorno de los mainframes antes de que se popularizara sobre arquitecturas como ix86 &oacute; amd64";
 choices[12][1] = "Una de las virtudes de la virtualizaci&oacute;n es su bajo requerimiento de memoria RAM";
 choices[12][2] = "El ahorro de energ&iacute;a es una de las razones que impulsa el uso de la virtualizaci&oacute;n en entornos de servidor";
 choices[12][3] = "Xen es una herramienta de virtualizaci&oacute;n de software libre que naci&oacute; en el departamento de computaci&oacute;n de la Universidad de Cambridge";
 answers[12] = 1;
 units[12] = ['124'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 6762. ";
 preguntaids[12] = 6762


//  Id pregunta: 4959 Año de creación de pregunta: 2002
 questions[13]= "14)  Se&ntilde;ale la opcion mas adecuada: Las bandas de frecuencia utilizables en un cable coaxial se encuentran:";
 choices[13]= new Array();
 choices[13][0] = "Entre 60 KHz y 3 GHz";
 choices[13][1] = "Sobre los 100 MHz";
 choices[13][2] = "Entre 4 y 11 GHz";
 choices[13][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[13] = 0;
 units[13] = ['104'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 4959. ";
 preguntaids[13] = 4959


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[14]= "15)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[14]= new Array();
 choices[14][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[14][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[14][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[14][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[14] = 1;
 units[14] = ['7'];
 blocks[14] = ['A2'];
 comments[14] = "Id Pregunta: 215. Ley 39/2015";
 preguntaids[14] = 215


//  Id pregunta: 1553 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qu&eacute; es SQLMetal?";
 choices[15]= new Array();
 choices[15][0] = "Es un lenguaje declarativo de acceso a bases de datos relacionales.";
 choices[15][1] = "Es una herramienta de generaci&oacute;n de c&oacute;digo de LINQ.";
 choices[15][2] = "Es un conjunto de extensiones a ANSI SQL.";
 choices[15][3] = "Es un est&aacute;ndar de acceso a bases de datos.";
 answers[15] = 1;
 units[15] = ['60'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 1553. ";
 preguntaids[15] = 1553


//  Id pregunta: 133 Año de creación de pregunta: 2016
 questions[16]= "17)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[16]= new Array();
 choices[16][0] = "El Consejo Europeo.";
 choices[16][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[16][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[16][3] = "El Parlamento Europeo.";
 answers[16] = 0;
 units[16] = ['5'];
 blocks[16] = ['A1'];
 comments[16] = "Id Pregunta: 133. Uni&oacute;n Europea";
 preguntaids[16] = 133


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[17]= new Array();
 choices[17][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[17][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[17][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[17][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[17] = 2;
 units[17] = ['22'];
 blocks[17] = ['A4'];
 comments[17] = "Id Pregunta: 515. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[17] = 515


//  Id pregunta: 9082 Año de creación de pregunta: 2014
 questions[18]= "19)  Indique cu&aacute;l es la respuesta falsa. Los principios que se aplicaron para llegar a las siete capas del modelo OSI fueron:";
 choices[18]= new Array();
 choices[18][0] = "Cada capa debe realizar una funci&oacute;n bien definida.";
 choices[18][1] = "No debe dise&ntilde;arse la funci&oacute;n de cada capa pensando en la definici&oacute;n de protocolos estandarizados internacionalmente.";
 choices[18][2] = "Se debe crear una capa siempre que exista un nivel diferente de abstracci&oacute;n.";
 choices[18][3] = "Los l&iacute;mites de las capas deben elegirse a modo de minimizar el flujo de informaci&oacute;n a trav&eacute;s de las interfaces.";
 answers[18] = 1;
 units[18] = ['105'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 9082. ";
 preguntaids[18] = 9082


//  Id pregunta: 3561 Año de creación de pregunta: 2004
 questions[19]= "20)  En el &aacute;mbito de las tecnolog&iacute;as multimedia, se&ntilde;ale cu&aacute;l de los siguientes formatos corresponder&iacute;a a una imagen con &quot;formato de gr&aacute;fico vectorial&quot;:";
 choices[19]= new Array();
 choices[19][0] = "Graphical Interchange Format (GIF)";
 choices[19][1] = "Windows Metafile Format (WMF)";
 choices[19][2] = "Portable Network Graphics (PNG)";
 choices[19][3] = "Windows Bitmap (BMP)";
 answers[19] = 1;
 units[19] = ['80'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 3561. TIC MAP B 2004";
 preguntaids[19] = 3561


//  Id pregunta: 1443 Año de creación de pregunta: 2016
 questions[20]= "21)  Indique cu&aacute;l de los siguientes datos sensibles NO est&aacute; especialmente protegido por la LOPD en su art&iacute;culo 7:";
 choices[20]= new Array();
 choices[20][0] = "De salud.";
 choices[20][1] = "Administrativos.";
 choices[20][2] = "De religi&oacute;n.";
 choices[20][3] = "De origen racial.";
 answers[20] = 1;
 units[20] = ['35'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 1443. ";
 preguntaids[20] = 1443


//  Id pregunta: 9672 Año de creación de pregunta: 2014
 questions[21]= "22)  En el &aacute;mbito de la continuidad de negocio una operaci&oacute;n clasificada como cr&iacute;tica:";
 choices[21]= new Array();
 choices[21][0] = "No puede ser reemplazada por una operaci&oacute;n manual.";
 choices[21][1] = "La tolerancia a la interrupci&oacute;n es muy baja.";
 choices[21][2] = "El costo de interrupci&oacute;n es muy alto.";
 choices[21][3] = "Todas las anteriores.";
 answers[21] = 3;
 units[21] = ['100'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 9672. ";
 preguntaids[21] = 9672


//  Id pregunta: 1636 Año de creación de pregunta: 2016
 questions[22]= "23)  ATM (modo de transferencia as&iacute;ncrono)es un protocolo de nivel 2 utilizado en las redes de operadores sobre el que se encapsulan protocolos de niveles superiores en celdas de 53 octetos. Indique cu&aacute;l de las siguientes capas es la encargada de a&ntilde;adir los &uacute;ltimos 5 bytes de overhead &oacute; sobrecarga de protocolo a los 48 bytes rest&aacute;ntes para completar la celda ATM.";
 choices[22]= new Array();
 choices[22][0] = "Capa AAL1";
 choices[22][1] = "Capa CBR";
 choices[22][2] = "Capa AAL5";
 choices[22][3] = "Capa ATM";
 answers[22] = 3;
 units[22] = ['107'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 1636. ";
 preguntaids[22] = 1636


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n se establece en la Ley 59/2003, de Firma Electr&oacute;nica, la cuant&iacute;a de las multas para los distintos tipos de infracciones ser&aacute;n:";
 choices[23]= new Array();
 choices[23][0] = "Para las muy graves de 300.001 a 600.000 euros; graves de 30.001 a 300.000 euros; leves hasta 60.000 euros.";
 choices[23][1] = "Para las muy graves de 150.001 a 600.000 euros; graves de 60.001 a 150.000 euros; leves hasta 60.000 euros.";
 choices[23][2] = "Para las muy graves de 150.001 a 300.000 euros; graves de 60.001 a 150.000 euros; leves hasta 30.000 euros.";
 choices[23][3] = "Para las muy graves de 150.001 a 600.000 euros; graves de 30.001 a 150.000 euros; leves hasta 30.000 euros.";
 answers[23] = 3;
 units[23] = ['19'];
 blocks[23] = ['A4'];
 comments[23] = "Id Pregunta: 441. AGE A2 2015";
 preguntaids[23] = 441


//  Id pregunta: 917 Año de creación de pregunta: 2016
 questions[24]= "25)  El software que puede ejecutarse con m&aacute;ximos privilegios en el sistema infectado y que modifica el funcionamiento normal del S.O o de otras aplicaciones para ocultar su actividad, es denominado:";
 choices[24]= new Array();
 choices[24][0] = "Spyware.";
 choices[24][1] = "Eavesdropping.";
 choices[24][2] = "Troyano.";
 choices[24][3] = "Rootkit.";
 answers[24] = 3;
 units[24] = ['119'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 917. AGE A2 2015";
 preguntaids[24] = 917


//  Id pregunta: 6187 Año de creación de pregunta: 2003
 questions[25]= "26)  En el tercer nivel del modelo de arquitectura cliente/servidor, llamado proceso distribuido, las funciones de presentaci&oacute;n residen en:";
 choices[25]= new Array();
 choices[25][0] = "El cliente";
 choices[25][1] = "El servidor";
 choices[25][2] = "La red";
 choices[25][3] = "Se reparten entre cliente y el servidor";
 answers[25] = 0;
 units[25] = ['55'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 6187. Examen TIC A Castilla La Mancha 2007";
 preguntaids[25] = 6187


//  Id pregunta: 10691 Año de creación de pregunta: 2015
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes aspectos NO est&aacute; recogido como una Instrucci&oacute;n T&eacute;cnica de Seguridad seg&uacute;n el Esquema Nacional de Seguridad?";
 choices[26]= new Array();
 choices[26][0] = "Informe de Estado de Seguridad";
 choices[26][1] = "Auditor&iacute;a de Seguridad";
 choices[26][2] = "Interconexi&oacute;n en el Esquema Nacional de Seguridad";
 choices[26][3] = "Protocolo de Comunicaciones Seguras";
 answers[26] = 3;
 units[26] = ['46'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 10691. Instrucci&oacute;n t&eacute;cnica de seguridad introducido por la disp. Adicional 4&ordf; RD 951/2015 que modifica el ENS.";
 preguntaids[26] = 10691


//  Id pregunta: 7103 Año de creación de pregunta: 2010
 questions[27]= "28)  &iquest;Cada cu&aacute;nto tiempo ser&aacute;n objeto de una auditor&iacute;a regular ordinaria los sistemas de informaci&oacute;n a los que se refiere el Esquema Nacional de Seguridad?";
 choices[27]= new Array();
 choices[27][0] = "Cada dos a&ntilde;os";
 choices[27][1] = "Al menos, cada dos a&ntilde;os";
 choices[27][2] = "Cada a&ntilde;o";
 choices[27][3] = "Al menos, una vez al a&ntilde;o";
 answers[27] = 1;
 units[27] = ['46'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 7103. Art&iacute;culo 34 ENS. Anexo III: para los sistemas de categor&iacute;a B&Aacute;SICA, bastar&aacute; una autoevaluaci&oacute;n.";
 preguntaids[27] = 7103


//  Id pregunta: 1773 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n el art. 9.2 de la Constituci&oacute;n Espa&ntilde;ola:";
 choices[28]= new Array();
 choices[28][0] = "Corresponde a la Administraci&oacute;n General del Estado promover las condiciones para que la libertad y la igualdad del individuo y de los grupos en que se integran sean reales y efectivas.";
 choices[28][1] = "Corresponde al gobierno central promover las condiciones para que la libertad y la igualdad del individuo y de los grupos en que se integran sean reales y efectivas.";
 choices[28][2] = "Corresponde a los poderes p&uacute;blicos promover las condiciones para que la libertad y la igualdad del individuo y de los grupos en que se integran sean reales y efectivas.";
 choices[28][3] = "Corresponde las Cortes Generales promover las condiciones para que la libertad y la igualdad del individuo y de los grupos en que se integran sean reales y efectivas.";
 answers[28] = 2;
 units[28] = ['1'];
 blocks[28] = ['A1'];
 comments[28] = "Id Pregunta: 1773. ";
 preguntaids[28] = 1773


//  Id pregunta: 1043 Año de creación de pregunta: 2016
 questions[29]= "30)  Se&ntilde;ale la respuesta falsa en relacion a las transmisiones de datos ente Administraciones Publicas (art 155 ley 40/2015):";
 choices[29]= new Array();
 choices[29][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[29][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[29][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[29][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[29] = 2;
 units[29] = ['4', '7', '8', '9'];
 blocks[29] = ['A1', 'A2'];
 comments[29] = "Id Pregunta: 1043. Ley 40/2015";
 preguntaids[29] = 1043


//  Id pregunta: 4669 Año de creación de pregunta: 2002
 questions[30]= "31)  De los t&eacute;rminos 'wander' y 'jitter' podemos decir:";
 choices[30]= new Array();
 choices[30][0] = "Que son lo mismo en terminolog&iacute;a americana e inglesa";
 choices[30][1] = "Que wander se refiere a oscilaciones de frecuencia a baja frecuencia y jitter a oscilaciones de frecuencia en alta frecuencia";
 choices[30][2] = "Que wander se refiere a oscilaciones de frecuencia a alta frecuencia y jitter a oscilaciones de frecuencia en baja frecuencia";
 choices[30][3] = "No existen los t&eacute;rminos wander ni jitter en telecomunicaciones";
 answers[30] = 1;
 units[30] = ['104'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 4669. ";
 preguntaids[30] = 4669


//  Id pregunta: 1316 Año de creación de pregunta: 2016
 questions[31]= "32)  En M&eacute;trica v3, para la tarea &quot;GPI 1.1, Identificaci&oacute;n de elementos a desarrollar&quot;, el producto de salida espec&iacute;fico en orientaci&oacute;n a objeto es:";
 choices[31]= new Array();
 choices[31][0] = "Catalogo de clases.";
 choices[31][1] = "Catalogo de entidades.";
 choices[31][2] = "Catalogo de miembros.";
 choices[31][3] = "Catalogo de interfaces.";
 answers[31] = 0;
 units[31] = ['91'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 1316. ";
 preguntaids[31] = 1316


//  Id pregunta: 3631 Año de creación de pregunta: 2004
 questions[32]= "33)  En el caso de un mantenimiento que implique un error cr&iacute;tico, siguiendo METRICA V3:";
 choices[32]= new Array();
 choices[32][0] = "Debe abordarse el cambio de forma inmediata sin profundizar en el origen del mismo";
 choices[32][1] = "Debe abordarse el cambio tras analizar el problema y determinar la soluci&oacute;n definitiva";
 choices[32][2] = "Se analizar&aacute; el alcance de los cambios valorando hasta que punto deben ser abordados en funci&oacute;n del ciclo de vida estimado para los sistemas de informaci&oacute;n afectados.";
 choices[32][3] = "Se llevar&aacute; a cabo el diagnostico y an&aacute;lisis de los cambios para determinar si es necesario derivar la petici&oacute;n hacia el proceso de Estudio de Viabilidad del Sistema o hacia el An&aacute;lisis del Sistema de Informaci&oacute;n.";
 answers[32] = 0;
 units[32] = ['91'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 3631. Pregunta Junta Andalucia - A";
 preguntaids[32] = 3631


//  Id pregunta: 9777 Año de creación de pregunta: 2014
 questions[33]= "34)  Un local para el procesamiento de la informaci&oacute;n que dispone de energ&iacute;a el&eacute;ctrica suficiente, refrigeraci&oacute;n y suelo t&eacute;cnico, paneles, puertas, etc. se denomina en al argot de la Continuidad de Negocio:";
 choices[33]= new Array();
 choices[33][0] = "Un &quot;cold-Site&quot; o sitio en fr&iacute;o";
 choices[33][1] = "Un &quot;warm-Site&quot; o sitio tibio";
 choices[33][2] = "Un &quot;Hot-Site&quot; o sitio en caliente";
 choices[33][3] = "Un CPD duplicado &quot;Dupplicate Processing Site&quot;";
 answers[33] = 0;
 units[33] = ['45'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 9777. ";
 preguntaids[33] = 9777


//  Id pregunta: 1787 Año de creación de pregunta: 2016
 questions[34]= "35)  La Licencia P&uacute;blica General Reducida de GNU (LGPL) es una licencia de software que utiliza:";
 choices[34]= new Array();
 choices[34][0] = "Copyright.";
 choices[34][1] = "Copyleft d&eacute;bil.";
 choices[34][2] = "Copyleft fuerte.";
 choices[34][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[34] = 1;
 units[34] = ['66'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 1787. ";
 preguntaids[34] = 1787


//  Id pregunta: 970 Año de creación de pregunta: 2016
 questions[35]= "36)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[35]= new Array();
 choices[35][0] = "personalidad jur&iacute;dica propia";
 choices[35][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[35][2] = "personalidad jur&iacute;dica plena";
 choices[35][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[35] = 1;
 units[35] = ['4', '7', '8', '9'];
 blocks[35] = ['A1', 'A2'];
 comments[35] = "Id Pregunta: 970. Ley 40/2015";
 preguntaids[35] = 970


//  Id pregunta: 3786 Año de creación de pregunta: 2002
 questions[36]= "37)  El modelo de ciclo de vida en cascada:";
 choices[36]= new Array();
 choices[36][0] = "Se compone de una serie de fases en paralelo, siendo necesario que concluyan todas ellas para iniciar la fase del nivel siguiente";
 choices[36][1] = "No contempla la divisi&oacute;n en fases, sino que es una secuencia encadenada de acciones e interacciones";
 choices[36][2] = "Est&aacute; especialmente indicado para sistemas dise&ntilde;ados con orientaci&oacute;n a objetos";
 choices[36][3] = "Se compone de una serie de fases que se suceden secuencialmente, gener&aacute;ndose en cada fase resultados que ser&aacute;n necesarios para iniciar la siguiente fase";
 answers[36] = 3;
 units[36] = ['82'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 3786. ";
 preguntaids[36] = 3786


//  Id pregunta: 393 Año de creación de pregunta: 2016
 questions[37]= "38)  Gozar&aacute;n de los derecho derivados del principio de igualdad de trato y de la prohibici&oacute;n de discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[37]= new Array();
 choices[37][0] = "La mujeres.";
 choices[37][1] = "Lo hombres.";
 choices[37][2] = "Todas las personas.";
 choices[37][3] = "Las mujeres y ni&ntilde;os menores de 16 a&ntilde;os.";
 answers[37] = 2;
 units[37] = ['14'];
 blocks[37] = ['A3'];
 comments[37] = "Id Pregunta: 393. Pol&iacute;ticas de igualdad";
 preguntaids[37] = 393


//  Id pregunta: 8362 Año de creación de pregunta: 2011
 questions[38]= "39)  XML es un lenguaje extensible de marcas. Se&ntilde;ale qu&eacute; significa extensible:";
 choices[38]= new Array();
 choices[38][0] = "No est&aacute; limitado el tama&ntilde;o de los ficheros";
 choices[38][1] = "Se pueden incorporar nuevas etiquetas, sin tener que cambiar la aplicaci&oacute;n que lo lee";
 choices[38][2] = "Se puede modelar datos a cualquier nivel de complejidad";
 choices[38][3] = "El uso de los ficheros se puede extender a cualquier plataforma";
 answers[38] = 1;
 units[38] = ['74'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 8362. Analista Ayto. Madrid 2010";
 preguntaids[38] = 8362


//  Id pregunta: 2031 Año de creación de pregunta: 2002
 questions[39]= "40)  &iquest;Cuando entr&oacute; en vigor la LOPD?:";
 choices[39]= new Array();
 choices[39][0] = "Diciembre de 1999";
 choices[39][1] = "Enero de 2000";
 choices[39][2] = "Febrero de 1993";
 choices[39][3] = "Enero de 1999";
 answers[39] = 1;
 units[39] = ['35'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 2031. ";
 preguntaids[39] = 2031


//  Id pregunta: 9174 Año de creación de pregunta: 2014
 questions[40]= "41)  Seg&uacute;n la Ley 59/2003 de Firma electr&oacute;nica, los prestadores de servicios de certificaci&oacute;n que expidan certificados reconocidos deber&aacute;n conservar registrada por cualquier medio seguro toda la informaci&oacute;n y documentaci&oacute;n relativa a un certificado reconocido al menos durante:";
 choices[40]= new Array();
 choices[40][0] = "5 a&ntilde;os.";
 choices[40][1] = "10 a&ntilde;os.";
 choices[40][2] = "Permanentemente.";
 choices[40][3] = "15 a&ntilde;os.";
 answers[40] = 3;
 units[40] = ['77'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 9174. Examen TIC A2 2013";
 preguntaids[40] = 9174


//  Id pregunta: 875 Año de creación de pregunta: 2016
 questions[41]= "42)  Un protocolo para la conexi&oacute;n entre sistemas aut&oacute;nomos es:";
 choices[41]= new Array();
 choices[41][0] = "ELP4 (Exterior linking protocol).";
 choices[41][1] = "SGP2 (Standalone gateway protocol).";
 choices[41][2] = "BGP4 (Border gateway protocol).";
 choices[41][3] = "SLP2 (Standalone linking protocol).";
 answers[41] = 2;
 units[41] = ['102'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 875. AGE A2 2015";
 preguntaids[41] = 875


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[42]= "43)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[42]= new Array();
 choices[42][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[42][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[42][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[42][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[42] = 3;
 units[42] = ['1'];
 blocks[42] = ['A1'];
 comments[42] = "Id Pregunta: 77. Constituci&oacute;n de 1978";
 preguntaids[42] = 77


//  Id pregunta: 7628 Año de creación de pregunta: 2010
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta?";
 choices[43]= new Array();
 choices[43][0] = "La aplicaci&oacute;n WINE es un emulador que permite ejecutar aplicaciones Windows en un entorno de software libre Linux.";
 choices[43][1] = "El entorno de escritorio KDE no utiliza CORBA como arquitectura de comunicaciones entre procesos.";
 choices[43][2] = "La biblioteca de componentes gr&aacute;ficos GTK+ se basa en las librer&iacute;as Glib, Pango y ATK.";
 choices[43][3] = "La arquitectura de componentes de GNOME estaba basada en Bonobo, pero en la actualidad se considera obsoleta";
 answers[43] = 0;
 units[43] = ['57'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 7628. Similar a Map 2006";
 preguntaids[43] = 7628


//  Id pregunta: 9641 Año de creación de pregunta: 2014
 questions[44]= "45)  &iquest;Qu&eacute; es Kleopatra?";
 choices[44]= new Array();
 choices[44][0] = "El equivalente en Android al servicio Kerberos de Windows";
 choices[44][1] = "Una aplicaci&oacute;n de gesti&oacute;n criptogr&aacute;fica basada en GPG";
 choices[44][2] = "Un navegador del entorno KDE";
 choices[44][3] = "La &uacute;ltima versi&oacute;n de Debian";
 answers[44] = 1;
 units[44] = ['76'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 9641. ";
 preguntaids[44] = 9641


//  Id pregunta: 154 Año de creación de pregunta: 2016
 questions[45]= "46)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[45]= new Array();
 choices[45][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[45][1] = "Ninguna de las respuestas es correcta.";
 choices[45][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[45][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[45] = 0;
 units[45] = ['5'];
 blocks[45] = ['A1'];
 comments[45] = "Id Pregunta: 154. Uni&oacute;n Europea";
 preguntaids[45] = 154


//  Id pregunta: 8467 Año de creación de pregunta: 2011
 questions[46]= "47)  &iquest;Qu&eacute; es procfs en Unix?";
 choices[46]= new Array();
 choices[46][0] = "Un sistema de ficheros especial con informaci&oacute;n sobre procesos y otros recursos del sistema";
 choices[46][1] = "&quot;La versi&oacute;n profesional del sistema de ficheros &quot;&quot;C&quot;&quot; (cfs)&quot;";
 choices[46][2] = "Un comando que devuelve informaci&oacute;n sobre los procesos relacionados con el sistema de ficheros";
 choices[46][3] = "Nada de lo anterior";
 answers[46] = 0;
 units[46] = ['57'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 8467. ";
 preguntaids[46] = 8467


//  Id pregunta: 1186 Año de creación de pregunta: 2016
 questions[47]= "48)  Las normas ISO/IEC 2501n pertenecientes a la familia de normas ISO/IEC 25000:";
 choices[47]= new Array();
 choices[47][0] = "Incluyen un modelo de referencia de la medici&oacute;n de la calidad del producto, definiciones de medidas de calidad y gu&iacute;as para su aplicaci&oacute;n.";
 choices[47][1] = "Presentan modelos de calidad detallados incluyendo caracter&iacute;sticas para calidad interna, externa y en uso del producto software.";
 choices[47][2] = "Definen todos los modelos, t&eacute;rminos y definiciones comunes referenciados por todas las otras normas de la familia 25000.";
 choices[47][3] = "Ayudan a especificar requisitos de calidad que pueden ser utilizados en el proceso de elicitaci&oacute;n.";
 answers[47] = 1;
 units[47] = ['93'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 1186. ";
 preguntaids[47] = 1186


//  Id pregunta: 269 Año de creación de pregunta: 2016
 questions[48]= "49)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[48]= new Array();
 choices[48][0] = "Los cr&eacute;ditos";
 choices[48][1] = "Las obligaciones";
 choices[48][2] = "Los derechos";
 choices[48][3] = "B y C son correctas";
 answers[48] = 3;
 units[48] = ['11'];
 blocks[48] = ['A2'];
 comments[48] = "Id Pregunta: 269. Presupuestos generales";
 preguntaids[48] = 269


//  Id pregunta: 4760 Año de creación de pregunta: 2002
 questions[49]= "50)  El servicio Archie se utiliza para:";
 choices[49]= new Array();
 choices[49][0] = "navegar usando men&uacute;s sin conocer la direcci&oacute;n de la informaci&oacute;n";
 choices[49][1] = "recibir de un servidor las direcciones de bases de datos m&aacute;s adecuadas para responder a la pregunta";
 choices[49][2] = "realizar b&uacute;squedas por los nombres de los ficheros de los servidores FTP";
 choices[49][3] = "buscar informaci&oacute;n seg&uacute;n un esquema de enlaces hipertexto";
 answers[49] = 2;
 units[49] = ['103'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 4760. ";
 preguntaids[49] = 4760


//  Id pregunta: 456 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[50]= new Array();
 choices[50][0] = "Fue elaborada y aprobada por la CETIC";
 choices[50][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[50][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[50][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[50] = 1;
 units[50] = ['19'];
 blocks[50] = ['A4'];
 comments[50] = "Id Pregunta: 456. Estrategia TIC";
 preguntaids[50] = 456


//  Id pregunta: 10070 Año de creación de pregunta: 2015
 questions[51]= "52)  En Linux, la primera partici&oacute;n l&oacute;gica en el disco duro maestro IDE del canal primario se identifica con:";
 choices[51]= new Array();
 choices[51][0] = "/dev/sda1";
 choices[51][1] = "/dev/hda1";
 choices[51][2] = "/dev/hda5";
 choices[51][3] = "/dev/hda2";
 answers[51] = 2;
 units[51] = ['57'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 10070. Examen TIC A2 2014";
 preguntaids[51] = 10070


//  Id pregunta: 2560 Año de creación de pregunta: 2004
 questions[52]= "53)  Est&aacute;n excluidos del &aacute;mbito de la Ley de Servicios de la Sociedad de la Informaci&oacute;n y Comercio Electr&oacute;nico";
 choices[52]= new Array();
 choices[52][0] = "Notarios y registradores de la propiedad y mercantiles en el ejercicio de sus funciones p&uacute;blicas";
 choices[52][1] = "Servicios de venta de arte del patrimonio";
 choices[52][2] = "Servicios bancarios";
 choices[52][3] = "Servicios de la Comisi&oacute;n Nacional del Mercado de Valores";
 answers[52] = 0;
 units[52] = ['19'];
 blocks[52] = ['A4'];
 comments[52] = "Id Pregunta: 2560. Examen Seg-Social A 2004";
 preguntaids[52] = 2560


//  Id pregunta: 71 Año de creación de pregunta: 2016
 questions[53]= "54)  A trav&eacute;s de la moci&oacute;n de censura se exige la responsabilidad pol&iacute;tica del Gobierno:";
 choices[53]= new Array();
 choices[53][0] = "A propuesta de la d&eacute;cima parte de los Diputados y los Senadores representados en las c&aacute;maras, en la que incluir&aacute;n un candidato a Presidente del Gobierno.";
 choices[53][1] = "Mediante su adopci&oacute;n por mayor&iacute;a absoluta de las Cortes Generales.";
 choices[53][2] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a presidente del Gobierno. No podr&aacute; ser votada hasta que transcurran cinco d&iacute;as desde su presentaci&oacute;n y se adoptar&aacute; por mayor&iacute;a absoluta del Congreso de los Diputados.";
 choices[53][3] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a Presidente del Gobierno. Su adopci&oacute;n requiere mayor&iacute;a absoluta en una primera votaci&oacute;n y mayor&iacute;a simple en una segunda votaci&oacute;n.";
 answers[53] = 2;
 units[53] = ['1'];
 blocks[53] = ['A1'];
 comments[53] = "Id Pregunta: 71. Constituci&oacute;n de 1978";
 preguntaids[53] = 71


//  Id pregunta: 2472 Año de creación de pregunta: 2004
 questions[54]= "55)  Indique cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[54]= new Array();
 choices[54][0] = "CISC (Complex Instruction Set Computer) es la arquitectura tradicional del ordenador personal, en la que la CPU utiliza su microc&oacute;digo para ejecutar un juego muy completo de instrucciones";
 choices[54][1] = "En los procesadores CISC las instrucciones pueden ser de longitud variable y usar todos los modos de direccionamiento, requiriendo para ello complejos circuitos decodificadores que ralentizan la ejecuci&oacute;n de cada instrucci&oacute;n";
 choices[54][2] = "Los procesadores RISC (Reduced Instruction Set Computer) fijan la longitud de todas las instrucciones haci&eacute;ndola constante prohibiendo el modo de direccionamiento indirecto";
 choices[54][3] = "Los procesadores RISC necesitan un mayor n&uacute;mero de transistores, lo cual los hace m&aacute;s caros de producir y m&aacute;s dif&iacute;ciles de dise&ntilde;ar";
 answers[54] = 3;
 units[54] = ['50'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 2472. ";
 preguntaids[54] = 2472


//  Id pregunta: 10402 Año de creación de pregunta: 2015
 questions[55]= "56)  &iquest;Cu&aacute;l es el porcentaje objetivo de personas que realicen compras online para 2015 seg&uacute;n la Agenda Digital Europea?";
 choices[55]= new Array();
 choices[55][0] = "0.2";
 choices[55][1] = "0.33";
 choices[55][2] = "0.5";
 choices[55][3] = "0.8";
 answers[55] = 2;
 units[55] = ['19'];
 blocks[55] = ['A4'];
 comments[55] = "Id Pregunta: 10402. ";
 preguntaids[55] = 10402


//  Id pregunta: 8424 Año de creación de pregunta: 2011
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes leyes aplica en las relaciones de los ciudadanos con el Ministerio de Justicia?";
 choices[56]= new Array();
 choices[56][0] = "Ley 18/2011";
 choices[56][1] = "Ley 39/2015";
 choices[56][2] = "Las dos anteriores";
 choices[56][3] = "Ninguna de las anteriores";
 answers[56] = 1;
 units[56] = ['7'];
 blocks[56] = ['A2'];
 comments[56] = "Id Pregunta: 8424. ";
 preguntaids[56] = 8424


//  Id pregunta: 6927 Año de creación de pregunta: 2010
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes sistemas de informaci&oacute;n esta asociado con el nivel operacional?";
 choices[57]= new Array();
 choices[57][0] = "Executive Information System (E.I.S.)";
 choices[57][1] = "Management Information System (M.I.S.)";
 choices[57][2] = "Transaction Processing System (T.P.S.)";
 choices[57][3] = "Enterprise Resource Planning Solution (E.R.P.)";
 answers[57] = 2;
 units[57] = ['25'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 6927. ";
 preguntaids[57] = 6927


//  Id pregunta: 2785 Año de creación de pregunta: 2002
 questions[58]= "59)  El registro de estados de un procesador:";
 choices[58]= new Array();
 choices[58][0] = "Se almacena en la memoria principal del procesador";
 choices[58][1] = "Almacena en cada momento el estado del procesador";
 choices[58][2] = "Sirve para almacenar las condiciones de realizaci&oacute;n de las operaciones de la ALU";
 choices[58][3] = "Los procesadores actuales no tienen registro de estados";
 answers[58] = 2;
 units[58] = ['56'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 2785. ";
 preguntaids[58] = 2785


//  Id pregunta: 8663 Año de creación de pregunta: 2013
 questions[59]= "60)  &iquest;C&oacute;mo es SAN iSCSI (Internet SCSI) respecto a FC?";
 choices[59]= new Array();
 choices[59][0] = "A nivel funcional pueden ofrecer las mismas capacidades pero es m&aacute;s cara.";
 choices[59][1] = "Igual";
 choices[59][2] = "A nivel funcional pueden ofrecer las mismas capacidades pero es m&aacute;s barata";
 choices[59][3] = "SCSI se utiliza en tecnolog&iacute;as NAS y no en SAN.";
 answers[59] = 2;
 units[59] = ['53'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 8663. ";
 preguntaids[59] = 8663


//  Id pregunta: 1492 Año de creación de pregunta: 2016
 questions[60]= "61)  Una de las siguientes respuestas es FALSA en relaci&oacute;n a un Data Warehouse:";
 choices[60]= new Array();
 choices[60][0] = "No se borran datos.";
 choices[60][1] = "Hay campos que almacenan informaci&oacute;n calculada a partir de los datos iniciales, para facilitar c&aacute;lculos posteriores.";
 choices[60][2] = "Permiten analizar informaci&oacute;n en funci&oacute;n de distintos criterios.";
 choices[60][3] = "Una vez agregados los datos para proporcionar la informaci&oacute;n solicitada se eliminan los datos originales.";
 answers[60] = 3;
 units[60] = ['72'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 1492. ";
 preguntaids[60] = 1492


//  Id pregunta: 2198 Año de creación de pregunta: 2007
 questions[61]= "62)  Indicar la afirmaci&oacute;n correcta sobre MAGERIT:";
 choices[61]= new Array();
 choices[61][0] = "Magerit se ha estructurado en tres libros: &quot;M&eacute;todo&quot;, &quot;Cat&aacute;logo de Elementos&quot; y &quot;Gu&iacute;a de T&eacute;cnicas&quot;";
 choices[61][1] = "la metodolog&iacute;a se describe desde tres &aacute;ngulos";
 choices[61][2] = "Entre t&eacute;cnicas descritas en la Gu&iacute;a de T&eacute;cnicas se encuentra: el an&aacute;lisis mediante tablas, an&aacute;lisis algor&iacute;tmico, &aacute;rboles de ataque, y la valoraci&oacute;n Delphi.";
 choices[61][3] = "Las tres anteriores son correctas";
 answers[61] = 3;
 units[61] = ['45'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 2198. ";
 preguntaids[61] = 2198


//  Id pregunta: 2385 Año de creación de pregunta: 2006
 questions[62]= "63)  Desde el punto de vista funcional la organizaci&oacute;n reticular se caracteriza por";
 choices[62]= new Array();
 choices[62][0] = "prescindir casi  totalmente de los formalismos.";
 choices[62][1] = "Las  comunicaciones son de todos con todos, sobre todo por niveles.";
 choices[62][2] = "Las comunicaciones suelen estar muy formalizadas y documentadas de  acuerdo a normas estrictas.";
 choices[62][3] = "La mayor&iacute;a de las comunicaciones, por no decir todas, se producen de jefe a subordinados";
 answers[62] = 1;
 units[62] = ['30'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 2385. ";
 preguntaids[62] = 2385


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[63]= new Array();
 choices[63][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[63][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[63][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[63][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[63] = 2;
 units[63] = ['22'];
 blocks[63] = ['A4'];
 comments[63] = "Id Pregunta: 502. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[63] = 502


//  Id pregunta: 6829 Año de creación de pregunta: 2010
 questions[64]= "65)  Seg&uacute;n el RD 951/2005 de 29 de julio, el marco general para la mejora de la calidad en la AGE incluye entre sus programas:";
 choices[64]= new Array();
 choices[64][0] = "An&aacute;lisis de la demanda y evaluaci&oacute;n de la satisfacci&oacute;n de los proveedores de los servicios p&uacute;blicos.";
 choices[64][1] = "Observatorio de la calidad de los servicios p&uacute;blicos.";
 choices[64][2] = "Quejas y reclamaciones.";
 choices[64][3] = "Evoluci&oacute;n de la calidad de las organizaciones.";
 answers[64] = 1;
 units[64] = ['19'];
 blocks[64] = ['A4'];
 comments[64] = "Id Pregunta: 6829. TIC A 2009";
 preguntaids[64] = 6829


//  Id pregunta: 4689 Año de creación de pregunta: 2002
 questions[65]= "66)  El modelo para interconexi&oacute;n de sistemas abiertos (OSI) describe siete niveles. &iquest;D&oacute;nde est&aacute; situado ASN.1?:";
 choices[65]= new Array();
 choices[65][0] = "Presentaci&oacute;n";
 choices[65][1] = "Aplicaci&oacute;n";
 choices[65][2] = "Sesi&oacute;n";
 choices[65][3] = "Transporte";
 answers[65] = 0;
 units[65] = ['105'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 4689. ";
 preguntaids[65] = 4689


//  Id pregunta: 9585 Año de creación de pregunta: 2014
 questions[66]= "67)  Indicar de las siguientes, cu&aacute;l es una cabecera de extensi&oacute;n IPv6:";
 choices[66]= new Array();
 choices[66][0] = "Cabecera siguiente.";
 choices[66][1] = "Enrutamiento.";
 choices[66][2] = "Longitud de la carga &uacute;til.";
 choices[66][3] = "L&iacute;mite de saltos.";
 answers[66] = 1;
 units[66] = ['109'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 9585. TIC A2 2013 libre";
 preguntaids[66] = 9585


//  Id pregunta: 10401 Año de creación de pregunta: 2015
 questions[67]= "68)  &iquest;C&oacute;mo se denomina el plan de la Agenda Digital Espa&ntilde;ola referente al objetivo de Despliegue de redes r&aacute;pidas y ultrarr&aacute;pidas?";
 choices[67]= new Array();
 choices[67][0] = "Plan de Impulso del acceso r&aacute;pido y ultrarr&aacute;pido a Internet";
 choices[67][1] = "Plan de Telecomunicaciones Ultrarr&aacute;pidas";
 choices[67][2] = "Plan de Despliegue de infraestructuras de Red Espa&ntilde;ola";
 choices[67][3] = "Ninguna de las anteriores";
 answers[67] = 1;
 units[67] = ['19'];
 blocks[67] = ['A4'];
 comments[67] = "Id Pregunta: 10401. ";
 preguntaids[67] = 10401


//  Id pregunta: 7881 Año de creación de pregunta: 2011
 questions[68]= "69)  Se&ntilde;ale la afirmaci&oacute;n correcta sobre las redes SAN iSCSI:";
 choices[68]= new Array();
 choices[68][0] = "Intercambian tramas SCSI sobre FC.";
 choices[68][1] = "Es una red de almacenamiento de acceso a ficheros.";
 choices[68][2] = "No permite implementar iSCSI en software.";
 choices[68][3] = "Puede usar TCP/IP como transporte.";
 answers[68] = 3;
 units[68] = ['53'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 7881. Examen TIC A1 2010";
 preguntaids[68] = 7881


//  Id pregunta: 2652 Año de creación de pregunta: 2002
 questions[69]= "70)  &iquest;En qu&eacute; conjunto de caracteres est&aacute; basado XML?:";
 choices[69]= new Array();
 choices[69][0] = "Unicode";
 choices[69][1] = "ITU 396-4";
 choices[69][2] = "ANSI 328";
 choices[69][3] = "Ninguno de los anteriores";
 answers[69] = 0;
 units[69] = ['74'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 2652. ";
 preguntaids[69] = 2652


//  Id pregunta: 1131 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;l es la direcci&oacute;n de red de una direcci&oacute;n IP: 192.168.30.200 cuya m&aacute;scara es 255.255.255.128?";
 choices[70]= new Array();
 choices[70][0] = "192.168.30.0";
 choices[70][1] = "192.168.30.128";
 choices[70][2] = "192.168.30.255";
 choices[70][3] = "192.168.30.200";
 answers[70] = 1;
 units[70] = ['109'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 1131. ";
 preguntaids[70] = 1131


//  Id pregunta: 10125 Año de creación de pregunta: 2015
 questions[71]= "72)  La facturaci&oacute;n electr&oacute;nica a las Administraciones P&uacute;blicas es obligatoria para las empresas desde:";
 choices[71]= new Array();
 choices[71][0] = "Enero de 2015.";
 choices[71][1] = "Enero de 2016.";
 choices[71][2] = "Diciembre de 2016.";
 choices[71][3] = "Diciembre de 2015.";
 answers[71] = 0;
 units[71] = ['10'];
 blocks[71] = ['A2'];
 comments[71] = "Id Pregunta: 10125. Examen TIC A1 2014";
 preguntaids[71] = 10125


//  Id pregunta: 8169 Año de creación de pregunta: 2011
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as NO usa JAVA como lenguaje?";
 choices[72]= new Array();
 choices[72][0] = "JavaScript";
 choices[72][1] = "JavaBeans";
 choices[72][2] = "Servlets";
 choices[72][3] = "JSP";
 answers[72] = 0;
 units[72] = ['64'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 8169. Examen TIC A2 2010 interna";
 preguntaids[72] = 8169


//  Id pregunta: 1809 Año de creación de pregunta: 2016
 questions[73]= "74)  Teniendo en cuenta las caracter&iacute;sticas del protocolo XMPP (Extensible Messaging and Presence Protocol), indique cu&aacute;l de las siguientes opciones es correcta:";
 choices[73]= new Array();
 choices[73][0] = "XMPP ha sido formalizado como una tecnolog&iacute;a de mensajer&iacute;a instant&aacute;nea est&aacute;ndar";
 choices[73][1] = "XMPP es totalmente centralizado, para la puesta en marcha de XMPP se requiere obligatoriamente un servidor central";
 choices[73][2] = "XMPP no permite la encriptaci&oacute;n de las comunicaciones";
 choices[73][3] = "XMPP no es extensible, al no permitir crear funcionalidades personalizadas";
 answers[73] = 0;
 units[73] = ['125'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 1809. ";
 preguntaids[73] = 1809


//  Id pregunta: 745 Año de creación de pregunta: 2016
 questions[74]= "75)  Entre las caracter&iacute;sticas de Big Data se encuentra:";
 choices[74]= new Array();
 choices[74][0] = "Gran volumen de informaci&oacute;n";
 choices[74][1] = "Gran variedad de datos";
 choices[74][2] = "Se analizan datos a gran velocidad";
 choices[74][3] = "Todas las anteriores son verdaderas";
 answers[74] = 3;
 units[74] = ['73'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 745. Big Data y NoSQL";
 preguntaids[74] = 745


