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
//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[0]= "1)  Respecto al protocolo OCSP, es FALSO que:";
 choices[0]= new Array();
 choices[0][0] = "Los mensajes OCSP son codificados en ASN.1.";
 choices[0][1] = "Est&aacute; definido en el RFC 2560.";
 choices[0][2] = "Tanto la petici&oacute;n como la respuesta deben ir firmadas.";
 choices[0][3] = "Puede usar SMTP como mecanismo de transporte.";
 answers[0] = 2;
 units[0] = ['78'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 796. AGE A2 2015";
 preguntaids[0] = 796


//  Id pregunta: 6949 Año de creación de pregunta: 2010
 questions[1]= "2)  Para la firma electr&oacute;nica por parte de personal al servicio de las Administraciones P&uacute;blicas NO se contempla el uso de";
 choices[1]= new Array();
 choices[1][0] = "Sello electr&oacute;nico";
 choices[1][1] = "DNI electr&oacute;nico";
 choices[1][2] = "Certificado de empleado p&uacute;blico";
 choices[1][3] = "Sistemas de c&oacute;digo seguro de verificaci&oacute;n";
 answers[1] = 0;
 units[1] = ['19'];
 blocks[1] = ['A4'];
 comments[1] = "Id Pregunta: 6949. Articulo 21 RD 1671/2009";
 preguntaids[1] = 6949


//  Id pregunta: 87 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[2]= new Array();
 choices[2][0] = "117.5";
 choices[2][1] = "117.1";
 choices[2][2] = "116";
 choices[2][3] = "15";
 answers[2] = 0;
 units[2] = ['1'];
 blocks[2] = ['A1'];
 comments[2] = "Id Pregunta: 87. Constituci&oacute;n de 1978";
 preguntaids[2] = 87


//  Id pregunta: 7787 Año de creación de pregunta: 2010
 questions[3]= "4)  El JTC es un comit&eacute; t&eacute;cnico conjunto de normalizaci&oacute;n en &aacute;mbito de las TIC formado por:";
 choices[3]= new Array();
 choices[3][0] = "CEN y CENELEC.";
 choices[3][1] = "ISO e IEC.";
 choices[3][2] = "CEN y ETSI.";
 choices[3][3] = "ISO y CIE.";
 answers[3] = 1;
 units[3] = ['48'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 7787. ";
 preguntaids[3] = 7787


//  Id pregunta: 3546 Año de creación de pregunta: 2004
 questions[4]= "5)  El tipo de mantenimiento consistente en a&ntilde;adir nueva funcionalidad y adaptar el sistema a nuevos requerimientos del usuario se denomina:";
 choices[4]= new Array();
 choices[4][0] = "Correctivo";
 choices[4][1] = "Adaptativo";
 choices[4][2] = "Evolutivo";
 choices[4][3] = "Perfectivo";
 answers[4] = 2;
 units[4] = ['91'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 3546. Similar a examen TIC SS A 2004";
 preguntaids[4] = 3546


//  Id pregunta: 6504 Año de creación de pregunta: 2003
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes conceptos se definen en X.500?";
 choices[5]= new Array();
 choices[5][0] = "DIB, que se comunica con el DSA utilizando el protocolo DAP. DOP, protocolo que define las pol&iacute;ticas para el intercambio de informaci&oacute;n entre dos DSA's. DMO que gestiona un dominio DMD";
 choices[5][1] = "DISP, que permite la replica de la informaci&oacute;n que almacena un DSA a otros DSAs dentro de un mismo DMD. DIT, donde se almacena la informaci&oacute;n en un directorio X.500. DOP, protocolo que define las pol&iacute;ticas para el intercambio de informaci&oacute;n entre dos DSA's.";
 choices[5][2] = "DISP, que permite la replica de la informaci&oacute;n que almacena un DSA a otros DSAs dentro de un mismo DMD. DAP, que es el protocolo utilizado por un DUA para comunicarse con un DSA. DOP, protocolo que define las pol&iacute;ticas para el intercambio de informaci&oacute;n entre dos DSA's.";
 choices[5][3] = "Ninguna de las anteriores";
 answers[5] = 2;
 units[5] = ['116'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 6504. ";
 preguntaids[5] = 6504


//  Id pregunta: 4218 Año de creación de pregunta: 2006
 questions[6]= "7)  En la planificaci&oacute;n de SI, qu&eacute; producto de los siguientes no est&aacute; contemplado en M&eacute;trica V3";
 choices[6]= new Array();
 choices[6][0] = "Plan de proyectos";
 choices[6][1] = "Modelo de informaci&oacute;n";
 choices[6][2] = "Modelo de Sistemas de informaci&oacute;n";
 choices[6][3] = "Modelo de arquitectura";
 answers[6] = 3;
 units[6] = ['91'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 4218. ";
 preguntaids[6] = 4218


//  Id pregunta: 9456 Año de creación de pregunta: 2014
 questions[7]= "8)  Seg&uacute;n el Real Decreto 1671/2009";
 choices[7]= new Array();
 choices[7][0] = "Se puede someter a todos los ciudadanos al r&eacute;gimen de notificaci&oacute;n electr&oacute;nica obligatoria";
 choices[7][1] = "S&oacute;lo pueden someterse al r&eacute;gimen de notificaci&oacute;n electr&oacute;nica obligatoria a las personas jur&iacute;dicas o colectivos de personas f&iacute;sicas que por raz&oacute;n de su capacidad econ&oacute;mica o t&eacute;cnica, dedicaci&oacute;n profesional u otros motivos acreditados tengan garantizado el acceso y disponibilidad de los medios tecnol&oacute;gicos precisos";
 choices[7][2] = "En ning&uacute;n caso puede imponerse la obligaci&oacute;n de que la notificaci&oacute;n sea &uacute;nicamente por medios electr&oacute;nicos";
 choices[7][3] = "Para establecer la obligatoriedad de las notificaciones por medios electr&oacute;nicos ser&aacute; suficiente la publicaci&oacute;n de una circular en la sede electr&oacute;nica del &oacute;rgano u organismo p&uacute;blico de que se trate.";
 answers[7] = 1;
 units[7] = ['7'];
 blocks[7] = ['A2'];
 comments[7] = "Id Pregunta: 9456. ";
 preguntaids[7] = 9456


//  Id pregunta: 8185 Año de creación de pregunta: 2011
 questions[8]= "9)  El mantenimiento que tiene por objeto adelantarse al deterioro de los equipos como consecuencia del uso y del paso del tiempo, se denomina:";
 choices[8]= new Array();
 choices[8][0] = "Mantenimiento adaptativo";
 choices[8][1] = "Mantenimiento preventivo";
 choices[8][2] = "Mantenimiento correctivo";
 choices[8][3] = "Mantenimiento evolutivo";
 answers[8] = 1;
 units[8] = ['91'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 8185. Examen TIC A2 2010 interna";
 preguntaids[8] = 8185


//  Id pregunta: 997 Año de creación de pregunta: 2016
 questions[9]= "10)  Respecto a las unidades administrativas del articulo 56 de la Ley 40/2015:";
 choices[9]= new Array();
 choices[9][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[9][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[9][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[9][3] = "ninguna es correcta";
 answers[9] = 1;
 units[9] = ['4', '7', '8', '9'];
 blocks[9] = ['A1', 'A2'];
 comments[9] = "Id Pregunta: 997. Ley 40/2015";
 preguntaids[9] = 997


//  Id pregunta: 5203 Año de creación de pregunta: 2006
 questions[10]= "11)  En las tramas 802.3 el pre&aacute;mbulo est&aacute; formado por:";
 choices[10]= new Array();
 choices[10][0] = "Un patr&oacute;n alternativo de unos y ceros";
 choices[10][1] = "El flag de sincronizaci&oacute;n 01111110";
 choices[10][2] = "El tipo de protocolo de nivel superior";
 choices[10][3] = "El c&oacute;digo de redundancia c&iacute;clica";
 answers[10] = 0;
 units[10] = ['112'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 5203. ";
 preguntaids[10] = 5203


//  Id pregunta: 6806 Año de creación de pregunta: 2010
 questions[11]= "12)  En relaci&oacute;n con ITIL, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[11]= new Array();
 choices[11][0] = "Los m&oacute;dulos principales y m&aacute;s ampliamente implantados de ITIL versi&oacute;n 3 son Entrega del Servicio (Software Delivery) y Soporte del Servicio (Service Support).";
 choices[11][1] = "ITIL versi&oacute;n 3 es un est&aacute;ndar &quot;de iure&quot; similar a BS15000 o ISO/IEC 20000, de modo que una organizaci&oacute;n puede obtener un certificado ITIL.";
 choices[11][2] = "Seg&uacute;n ITIL versi&oacute;n 3, el ciclo de vida de un servicio consta de 5 fases: estrategia, dise&ntilde;o, transici&oacute;n, operaci&oacute;n y mejora continua del servicio.";
 choices[11][3] = "El proceso de Gesti&oacute;n del Cambio (Change Management) forma parte del m&oacute;dulo de Entrega del Servicio (Service Delivery).";
 answers[11] = 2;
 units[11] = ['101'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 6806. TIC A 2009";
 preguntaids[11] = 6806


//  Id pregunta: 73 Año de creación de pregunta: 2016
 questions[12]= "13)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[12]= new Array();
 choices[12][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[12][1] = "Publicidad de las normas.";
 choices[12][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[12][3] = "Coordinaci&oacute;n normativa.";
 answers[12] = 1;
 units[12] = ['1'];
 blocks[12] = ['A1'];
 comments[12] = "Id Pregunta: 73. Constituci&oacute;n de 1978";
 preguntaids[12] = 73


//  Id pregunta: 9683 Año de creación de pregunta: 2014
 questions[13]= "14)  &iquest;Cu&aacute;l no es una nueva caracter&iacute;stica de HTML5?";
 choices[13]= new Array();
 choices[13][0] = "Nuevos elementos sem&aacute;nticos.";
 choices[13][1] = "Fuerte soporte a gr&aacute;ficos con &lt;canvas&gt; y &lt;svg&gt;.";
 choices[13][2] = "Fuerte soporte multimedia.";
 choices[13][3] = "Nuevos elementos para soporte a la accesibilidad web.";
 answers[13] = 3;
 units[13] = ['74'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 9683. ";
 preguntaids[13] = 9683


//  Id pregunta: 478 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[14]= new Array();
 choices[14][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[14][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[14][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[14][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[14] = 0;
 units[14] = ['19'];
 blocks[14] = ['A4'];
 comments[14] = "Id Pregunta: 478. Sociedad de la informaci&oacute;n";
 preguntaids[14] = 478


//  Id pregunta: 1049 Año de creación de pregunta: 2016
 questions[15]= "16)  Cu&aacute;l de los siguientes NO es un algoritmo de funciones hash:";
 choices[15]= new Array();
 choices[15][0] = "SHA-256.";
 choices[15][1] = "BASH.";
 choices[15][2] = "WHIRLPOOL.";
 choices[15][3] = "HAVAL.";
 answers[15] = 1;
 units[15] = ['76'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 1049. ";
 preguntaids[15] = 1049


//  Id pregunta: 9881 Año de creación de pregunta: 2015
 questions[16]= "17)  Fecha de publicaci&oacute;n de la Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas.";
 choices[16]= new Array();
 choices[16][0] = "1 de Junio de 2015";
 choices[16][1] = "1 de Julio de 2015";
 choices[16][2] = "2 de Octubre de 2015";
 choices[16][3] = "1 de Noviembre de 2015";
 answers[16] = 2;
 units[16] = ['7', '19'];
 blocks[16] = ['A2', 'A4'];
 comments[16] = "Id Pregunta: 9881. ";
 preguntaids[16] = 9881


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[17]= "18)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[17]= new Array();
 choices[17][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[17][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[17][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[17][3] = "todas son correctas";
 answers[17] = 3;
 units[17] = ['7'];
 blocks[17] = ['A2'];
 comments[17] = "Id Pregunta: 239. Ley 39/2015";
 preguntaids[17] = 239


//  Id pregunta: 2595 Año de creación de pregunta: 2002
 questions[18]= "19)  &iquest;Cu&aacute;l de las alternativas siguientes no corresponde a un operador fundamental del &aacute;lgebra relacional?:";
 choices[18]= new Array();
 choices[18][0] = "Join";
 choices[18][1] = "Selecci&oacute;n";
 choices[18][2] = "Diferencia";
 choices[18][3] = "Proyecci&oacute;n";
 answers[18] = 0;
 units[18] = ['61'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 2595. ";
 preguntaids[18] = 2595


//  Id pregunta: 1978 Año de creación de pregunta: 2016
 questions[19]= "20)  NO es un derecho de los ciudadanos frente a la administraci&oacute;n:";
 choices[19]= new Array();
 choices[19][0] = "Formular alegaciones y aportar documentos en cualquier momento del procedimiento, para que sean tenidos en cuenta por el &oacute;rgano competente al redactar la propuesta de resoluci&oacute;n.";
 choices[19][1] = "Identificar las autoridades y el personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[19][2] = "Conocer, en cualquier momento, el estado de la tramitaci&oacute;n de los procedimientos en los que tengan la condici&oacute;n de interesados.";
 choices[19][3] = "Obtener copia de los documentos contenidos en los procedimientos en los que tengan la condici&oacute;n de interesados.";
 answers[19] = 0;
 units[19] = ['7'];
 blocks[19] = ['A2'];
 comments[19] = "Id Pregunta: 1978. ";
 preguntaids[19] = 1978


//  Id pregunta: 1442 Año de creación de pregunta: 2016
 questions[20]= "21)  Tenemos un fichero de tratamiento automatizado que contiene datos sobre ideolog&iacute;a y afiliaci&oacute;n sindical, seg&uacute;n la LOPD en su art&iacute;culo 7:";
 choices[20]= new Array();
 choices[20][0] = "El acceso depender&aacute; de la Agencia de Protecci&oacute;n de Datos.";
 choices[20][1] = "Podemos tener acceso si somos mayores de edad.";
 choices[20][2] = "Podemos tener acceso a estos datos sin restricciones.";
 choices[20][3] = "S&oacute;lo podemos tener estos datos si existe consentimiento expreso y por escrito de los afectados o somos un partido pol&iacute;tico o sindicato, en cuanto a sus asociados o miembros.";
 answers[20] = 3;
 units[20] = ['35'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 1442. ";
 preguntaids[20] = 1442


//  Id pregunta: 9747 Año de creación de pregunta: 2014
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de los discos duros de estado s&oacute;lido respecto a los tradicionales?";
 choices[21]= new Array();
 choices[21][0] = "Generan menos ruido y calor que los discos duros tradicionales";
 choices[21][1] = "Tienen un menor consumo energ&eacute;tico";
 choices[21][2] = "La latencia de acceso a los datos es menor";
 choices[21][3] = "Tienen mayor velocidad en operaciones I/O secuenciales";
 answers[21] = 3;
 units[21] = ['53'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 9747. ";
 preguntaids[21] = 9747


//  Id pregunta: 7417 Año de creación de pregunta: 2010
 questions[22]= "23)  En un entorno de virtualizaci&oacute;n de m&aacute;quinas, &iquest;cu&aacute;l de los siguientes elementos est&aacute; m&aacute;s pr&oacute;ximo al hardware?";
 choices[22]= new Array();
 choices[22][0] = "Hipervisor";
 choices[22][1] = "VMM (Virtual Machine Monitor)";
 choices[22][2] = "Sistema operativo hospedado";
 choices[22][3] = "HBA (host Bus Adapter)";
 answers[22] = 0;
 units[22] = ['124'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 7417. Examen TIC B 2009";
 preguntaids[22] = 7417


//  Id pregunta: 2361 Año de creación de pregunta: 2004
 questions[23]= "24)  Respecto a las pautas de accesibilidad de la iniciativa de acesibilidad web WAI del W3C se puede afirmar que ...";
 choices[23]= new Array();
 choices[23][0] = "El nivel de adecuaci&oacute;n A es el m&aacute;s exigente";
 choices[23][1] = "El nivel de adecuaci&oacute;n AA incluye los puntos de verificaci&oacute;n de prioridades 1 y 2";
 choices[23][2] = "La satisfacci&oacute;n de los puntos de verificaci&oacute;n de prioridad 1 es opcional";
 choices[23][3] = "Todas las anteriores afirmaciones son falsas";
 answers[23] = 1;
 units[23] = ['42'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 2361. ";
 preguntaids[23] = 2361


//  Id pregunta: 1701 Año de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n M&eacute;trica v.3, los distintos niveles de cohesi&oacute;n, de mayor a menor, son:";
 choices[24]= new Array();
 choices[24][0] = "Funcional, Secuencial, De comunicaci&oacute;n, Procedimental, Temporal, L&oacute;gica y Casual.";
 choices[24][1] = "Funcional, Procedimental, Secuencial, De comunicaci&oacute;n, L&oacute;gica y Casual.";
 choices[24][2] = "Casual, L&oacute;gica, Temporal, Procedimental, De Comunicaci&oacute;n, Secuencial y Funcional.";
 choices[24][3] = "Funcional, Secuencial, De Comunicaci&oacute;n, Procedimental, Cohesi&oacute;n, L&oacute;gica y Casual.";
 answers[24] = 0;
 units[24] = ['91'];
 blocks[24] = ['B3'];
 comments[24] = "Id Pregunta: 1701. ";
 preguntaids[24] = 1701


//  Id pregunta: 5825 Año de creación de pregunta: 2007
 questions[25]= "26)  Indicar lo que no contribuye a que la estimaci&oacute;n del esfuerzo de desarrollo sea tan dif&iacute;cil de realizar.";
 choices[25]= new Array();
 choices[25][0] = "El hecho de que cada organizaci&oacute;n tiene sus propios recursos, procedimientos e historia, y es necesarioajustar los procesos de estimaci&oacute;n a esos par&aacute;metros &uacute;nicos.";
 choices[25][1] = "La rapidez con la que cambian las tecnolog&iacute;as de la informaci&oacute;n y las metodolog&iacute;as del desarrollo.";
 choices[25][2] = "La tendencia de los desarrolladores hacia la sobreestimaci&oacute;n.";
 choices[25][3] = "El ignorar los aspectos no lineales del desarrollo del software (como son la coordinaci&oacute;n y la gesti&oacute;n).";
 answers[25] = 2;
 units[25] = ['94'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 5825. Examen 2006 JCYL";
 preguntaids[25] = 5825


//  Id pregunta: 207 Año de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[26]= new Array();
 choices[26][0] = "10 d&iacute;as.";
 choices[26][1] = "15 d&iacute;as.";
 choices[26][2] = "1 mes.";
 choices[26][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[26] = 0;
 units[26] = ['7'];
 blocks[26] = ['A2'];
 comments[26] = "Id Pregunta: 207. Ley 39/2015";
 preguntaids[26] = 207


//  Id pregunta: 3058 Año de creación de pregunta: 2002
 questions[27]= "28)  Si disponemos de las entidades EMPLEADO y FAMILIAR, y es condici&oacute;n de funcionamiento en la empresa que una vez desaparecidos los datos del empleado deben desaparecer los de sus familiares,  entonces:";
 choices[27]= new Array();
 choices[27][0] = "Se dise&ntilde;&oacute; mal, FAMILIAR no es una entidad";
 choices[27][1] = "FAMILIAR debe estar contenida en EMPLEADO";
 choices[27][2] = "FAMILIAR es una entidad d&eacute;bil";
 choices[27][3] = "FAMILIAR es una entidad dependiente";
 answers[27] = 2;
 units[27] = ['61'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 3058. ";
 preguntaids[27] = 3058


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[28]= "29)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[28]= new Array();
 choices[28][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[28][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[28][2] = "Cinco a&ntilde;os.";
 choices[28][3] = "Ninguna es correcta.";
 answers[28] = 2;
 units[28] = ['5'];
 blocks[28] = ['A1'];
 comments[28] = "Id Pregunta: 166. Uni&oacute;n Europea";
 preguntaids[28] = 166


//  Id pregunta: 2638 Año de creación de pregunta: 2002
 questions[29]= "30)  &iquest;Cu&aacute;l es el modelo de objeto de documento que utilizan los parsers o analizadores de XML?:";
 choices[29]= new Array();
 choices[29][0] = "DOKM";
 choices[29][1] = "DOM";
 choices[29][2] = "JDOC";
 choices[29][3] = "Todas son falsas";
 answers[29] = 1;
 units[29] = ['74'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 2638. ";
 preguntaids[29] = 2638


//  Id pregunta: 4641 Año de creación de pregunta: 2002
 questions[30]= "31)  A la fuente fundamental de datos de lo que ocurre en un servidor web se le denomina:";
 choices[30]= new Array();
 choices[30][0] = "registro de incidencias";
 choices[30][1] = "fichero de log";
 choices[30][2] = "lista de errores";
 choices[30][3] = "fichero de registros";
 answers[30] = 1;
 units[30] = ['113'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 4641. ";
 preguntaids[30] = 4641


//  Id pregunta: 5867 Año de creación de pregunta: 2007
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes no es una directriz de Accesibilidad para el Contenido Web (WCAG 1.0) del W3C?";
 choices[31]= new Array();
 choices[31][0] = "Asegure el control del usuario de los cambios de contenido que dependen del tiempo";
 choices[31][1] = "Utilice soluciones provisionales";
 choices[31][2] = "Aseg&uacute;rese de que los documentos son claros y simples";
 choices[31][3] = "Todas lo son";
 answers[31] = 3;
 units[31] = ['42'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 5867. ";
 preguntaids[31] = 5867


//  Id pregunta: 8490 Año de creación de pregunta: 2011
 questions[32]= "33)  &iquest;A qu&eacute; autoridad nacional de regulaci&oacute;n de las recogidas en la Ley 9/2014,  de 9 de mayo, General de Telecomunicaciones, puede reclamar un usuario final de servicios de comunicaciones en caso de disputa con su operador?";
 choices[32]= new Array();
 choices[32][0] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n.";
 choices[32][1] = "Ministerio de Energia, Turismo y Agenda Digital";
 choices[32][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[32][3] = "Ministerio de Econom&iacute;a, Industria y Competitividad";
 answers[32] = 1;
 units[32] = ['121'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 8490. Teleco Ayto. Madrid 2010";
 preguntaids[32] = 8490


//  Id pregunta: 410 Año de creación de pregunta: 2016
 questions[33]= "34)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[33]= new Array();
 choices[33][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[33][1] = "Protecci&oacute;n de su salud.";
 choices[33][2] = "Ninguna es correcta.";
 choices[33][3] = "A y B son correctas.";
 answers[33] = 1;
 units[33] = ['14'];
 blocks[33] = ['A3'];
 comments[33] = "Id Pregunta: 410. Pol&iacute;ticas de igualdad";
 preguntaids[33] = 410


//  Id pregunta: 390 Año de creación de pregunta: 2016
 questions[34]= "35)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[34]= new Array();
 choices[34][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[34][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[34][2] = "Un programa de igualdad.";
 choices[34][3] = "Un estatuto de igualdad.";
 answers[34] = 0;
 units[34] = ['14'];
 blocks[34] = ['A3'];
 comments[34] = "Id Pregunta: 390. Pol&iacute;ticas de igualdad";
 preguntaids[34] = 390


//  Id pregunta: 10296 Año de creación de pregunta: 2015
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes es un principio b&aacute;sico del Esquema Nacional de Seguridad?";
 choices[35]= new Array();
 choices[35][0] = "Proporcionalidad";
 choices[35][1] = "Respeto al derecho de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[35][2] = "Derecho a la garant&iacute;a de seguridad y confidencialidad";
 choices[35][3] = "Gesti&oacute;n de riesgos";
 answers[35] = 3;
 units[35] = ['43'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 10296. ";
 preguntaids[35] = 10296


//  Id pregunta: 10637 Año de creación de pregunta: 2015
 questions[36]= "37)  Seg&uacute;n la Ley 9/2014, marque la respuesta correcta respecto a los derechos relativos a la protecci&oacute;n de datos personales y la privacidad en relaci&oacute;n con las gu&iacute;as de abonados:";
 choices[36]= new Array();
 choices[36][0] = "A figurar en las gu&iacute;as de abonados.";
 choices[36][1] = "A ser informado de la inclusi&oacute;n de sus datos en las gu&iacute;as de abonados.";
 choices[36][2] = "A no figurar en las gu&iacute;as de abonados.";
 choices[36][3] = "Todas las anteriores.";
 answers[36] = 3;
 units[36] = ['121'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 10637. ";
 preguntaids[36] = 10637


//  Id pregunta: 8390 Año de creación de pregunta: 2011
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes no corresponde a una funci&oacute;n digest?";
 choices[37]= new Array();
 choices[37][0] = "HMAC";
 choices[37][1] = "MD5";
 choices[37][2] = "MD8";
 choices[37][3] = "SHA";
 answers[37] = 2;
 units[37] = ['78'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 8390. ";
 preguntaids[37] = 8390


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[38]= new Array();
 choices[38][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[38][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[38][2] = "Iniciativa europea de libre flujo de datos.";
 choices[38][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[38] = 2;
 units[38] = ['5'];
 blocks[38] = ['A1'];
 comments[38] = "Id Pregunta: 108. Uni&oacute;n Europea";
 preguntaids[38] = 108


//  Id pregunta: 147 Año de creación de pregunta: 2016
 questions[39]= "40)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[39]= new Array();
 choices[39][0] = "X.";
 choices[39][1] = "XIX.";
 choices[39][2] = "XV.";
 choices[39][3] = "XIII.";
 answers[39] = 1;
 units[39] = ['5'];
 blocks[39] = ['A1'];
 comments[39] = "Id Pregunta: 147. Uni&oacute;n Europea";
 preguntaids[39] = 147


//  Id pregunta: 6529 Año de creación de pregunta: 2003
 questions[40]= "41)  Una soluci&oacute;n RAID 5 necesita como m&iacute;nimo:";
 choices[40]= new Array();
 choices[40][0] = "Dos discos";
 choices[40][1] = "Tres discos";
 choices[40][2] = "Un disco";
 choices[40][3] = "Cuatro discos";
 answers[40] = 1;
 units[40] = ['53'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 6529. ";
 preguntaids[40] = 6529


//  Id pregunta: 4932 Año de creación de pregunta: 2002
 questions[41]= "42)  Un BALUN:";
 choices[41]= new Array();
 choices[41][0] = "Es un adaptador de impedancias entre sistema asim&eacute;trico y sistema sim&eacute;trico.";
 choices[41][1] = "Adapta un conector RJ45 y BNC.";
 choices[41][2] = "Es un conector entre RJ11 y RJ45.";
 choices[41][3] = "S&oacute;lo se utiliza para fibra &oacute;ptica.";
 answers[41] = 0;
 units[41] = ['104'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 4932. ";
 preguntaids[41] = 4932


//  Id pregunta: 7526 Año de creación de pregunta: 2010
 questions[42]= "43)  En un sistema de ficheros Unix que tiene un tama&ntilde;o de bloque de 2 KB y nodos-i con doce direcciones directas, una indirecta simple, una indirecta doble y una indirecta triple, que adem&aacute;s utiliza direcciones de bloque de 4 bytes, para representar un fichero de 2 MB:";
 choices[42]= new Array();
 choices[42][0] = "Se utilizar&aacute; un bloque de indexaci&oacute;n simple y uno de indexaci&oacute;n doble.";
 choices[42][1] = "Se utilizar&aacute; un bloque de indexaci&oacute;n simple y dos de indexaci&oacute;n doble.";
 choices[42][2] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple y uno de indexaci&oacute;n doble.";
 choices[42][3] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple.";
 answers[42] = 2;
 units[42] = ['57'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 7526. Map 2005";
 preguntaids[42] = 7526


//  Id pregunta: 4510 Año de creación de pregunta: 2002
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes no corresponde a una definici&oacute;n correcta de especificaci&oacute;n de la ITU-T?:";
 choices[43]= new Array();
 choices[43][0] = "X.25: interfaz entre ETD y ETCD para terminales en modo paquete en redes p&uacute;blicas de conmutaci&oacute;n de paquetes";
 choices[43][1] = "X.29: define los mecanismos y protocolos para la conexi&oacute;n de terminales as&iacute;ncronos a trav&eacute;s de la red X25, usando un PAD";
 choices[43][2] = "X.32: interfaz entre ETD y ETCD para terminales telegr&aacute;ficos accediendo a redes p&uacute;blicas de conmutaci&oacute;n de paquetes v&iacute;a red de conmutaci&oacute;n de circuitos";
 choices[43][3] = "X.75: interconexi&oacute;n de redes p&uacute;blicas de conmutaci&oacute;n de paquetes y conexi&oacute;n de nodos de las mismas";
 answers[43] = 2;
 units[43] = ['110'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 4510. ";
 preguntaids[43] = 4510


//  Id pregunta: 2376 Año de creación de pregunta: 2006
 questions[44]= "45)  Cual de las siguientes opciones no es una ventaja de un sistema integrado";
 choices[44]= new Array();
 choices[44][0] = "Mayor eficiencia conjunta y una interrelaci&oacute;n m&aacute;s efectiva de actividades entre subsistemas.";
 choices[44][1] = "Incorporaci&oacute;n de h&aacute;bitos para compartir ampliamente los recursos, obteniendo beneficios potenciales, debidos a  econom&iacute;as de escala y especializaci&oacute;n.";
 choices[44][2] = "Posibilidad de abordar las decisiones desde la perspectiva del sistema com&uacute;n conjunto en vez de sobre una base  sub&oacute;ptima que utilice solamente informaci&oacute;n y objetivos locales.";
 choices[44][3] = "Sistemas mas simples evitando riesgos a&ntilde;adidos";
 answers[44] = 3;
 units[44] = ['24'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 2376. ";
 preguntaids[44] = 2376


//  Id pregunta: 7775 Año de creación de pregunta: 2010
 questions[45]= "46)  El Reglamento de desarrollo de la Ley Org&aacute;nica de Protecci&oacute;n de Datos, aprobado por Real Decreto 1720/2007, de 21 de diciembre, indica que el plazo m&aacute;ximo para dictar y notificar resoluci&oacute;n acerca de la inscripci&oacute;n, modificaci&oacute;n o cancelaci&oacute;n de ficheros ser&aacute; de:";
 choices[45]= new Array();
 choices[45][0] = "Un mes.";
 choices[45][1] = "Dos meses.";
 choices[45][2] = "Tres meses.";
 choices[45][3] = "Seis meses.";
 answers[45] = 0;
 units[45] = ['35'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 7775. ";
 preguntaids[45] = 7775


//  Id pregunta: 8344 Año de creación de pregunta: 2011
 questions[46]= "47)  De acuerdo con el modelo de cuadro de mando (Balanced Scorecard) de Kaplan y Nolan, &iquest;cu&aacute;l de las siguientes respuestas ser&iacute;a la correcta?";
 choices[46]= new Array();
 choices[46][0] = "La implantaci&oacute;n de un cuadro de mando se debe realizar estableciendo objetivos que se deben trasladar a indicadores o medidas espec&iacute;ficas.";
 choices[46][1] = "El cuadro de mando permite a los gestores priorizar las expectativas de los clientes sobre la situaci&oacute;n financiera de la organizaci&oacute;n.";
 choices[46][2] = "El cuadro de mando permite a los gestores priorizar la situaci&oacute;n financiera de la organizaci&oacute;n sobre las expectativas de los clientes.";
 choices[46][3] = "El cuadro de mando se establece teniendo en cuenta cinco perspectivas distintas: clientes, accionistas, perspectiva interna de la organizaci&oacute;n, innovaci&oacute;n-aprendizaje y perspectiva financiera.";
 answers[46] = 0;
 units[46] = ['72'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 8344. Examen UC3M 2010";
 preguntaids[46] = 8344


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[47]= "48)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[47]= new Array();
 choices[47][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[47][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[47][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[47][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[47] = 2;
 units[47] = ['1'];
 blocks[47] = ['A1'];
 comments[47] = "Id Pregunta: 90. Constituci&oacute;n de 1978";
 preguntaids[47] = 90


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Qui&eacute;n integra el Sistema Nacional de Empleo?";
 choices[48]= new Array();
 choices[48][0] = "El Servicio P&uacute;blico de Empleo Estatal y los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[48][1] = "&Uacute;nicamente los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[48][2] = "&Uacute;nicamente el Servicio P&uacute;blico de Empleo Estatal";
 choices[48][3] = "El Servicio P&uacute;blico de Empleo Estatal m&aacute;s las ETT (Empresas de Trabajo Temporal) que quieran adherirse";
 answers[48] = 0;
 units[48] = ['15'];
 blocks[48] = ['A3'];
 comments[48] = "Id Pregunta: 422. Mercado laboral";
 preguntaids[48] = 422


//  Id pregunta: 2467 Año de creación de pregunta: 2002
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes operaciones se realiza a trav&eacute;s de servicios de transferencia electr&oacute;nica de fondos?";
 choices[49]= new Array();
 choices[49][0] = "Autorizaci&oacute;n y control de transacciones con pago por tarjeta de cr&eacute;dito o d&eacute;bito";
 choices[49][1] = "Consultas de estado de cuenta";
 choices[49][2] = "Consulta o acceso a bancos de datos";
 choices[49][3] = "Todas las anteriores";
 answers[49] = 3;
 units[49] = ['75'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 2467. ";
 preguntaids[49] = 2467


//  Id pregunta: 6021 Año de creación de pregunta: 2003
 questions[50]= "51)  Clara acaba de recibir un documento de especificaciones de usuario de una aplicaci&oacute;n. El requisito establecidopara el desarrollo de que: &ldquo;El software debe soportar al menos 1.000.000 libros, 7.000 lectores y 250 materias&rdquo;,se enmarcar&iacute;a dentro de los requisitos de:";
 choices[50]= new Array();
 choices[50][0] = "Operaci&oacute;n.";
 choices[50][1] = "Funcionalidad.";
 choices[50][2] = "Recursos.";
 choices[50][3] = "Capacidad.";
 answers[50] = 3;
 units[50] = ['84'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 6021. TIC B 2007";
 preguntaids[50] = 6021


//  Id pregunta: 6110 Año de creación de pregunta: 2003
 questions[51]= "52)  La Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, establece que:";
 choices[51]= new Array();
 choices[51][0] = "El Gobierno crear&aacute; una entidad p&uacute;blica para la gesti&oacute;n del Fondo nacional del servicio universal";
 choices[51][1] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia se encargar&aacute; de la gesti&oacute;n del Fondo nacional del servicio universal";
 choices[51][2] = "El Gobierno, mediante Decreto, establecer&aacute; el procedimiento por el que las operadoras gestionar&aacute;n elFondo nacional del servicio universal";
 choices[51][3] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n se encargar&aacute; de lagesti&oacute;n del Fondo nacional del servicio universal";
 answers[51] = 1;
 units[51] = ['121'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 6110. Examen TIC A1 MAP 2007";
 preguntaids[51] = 6110


//  Id pregunta: 1894 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA?:";
 choices[52]= new Array();
 choices[52][0] = "En las Cartas de Servicio que se elaboren, se deben establecer los dispositivos de seguimiento y evaluaci&oacute;n";
 choices[52][1] = "La Calidad Total implica un enfoque que comprende tanto el concepto producto como el concepto servicio, no como elementos independientes.";
 choices[52][2] = "Las Cartas de Servicios expresan un compromiso con los ciudadanos para mejorar la calidad de los servicios";
 choices[52][3] = "Las Cartas de Servicios no tienen la consideraci&oacute;n de documentos oficiales.";
 answers[52] = 3;
 units[52] = ['19'];
 blocks[52] = ['A4'];
 comments[52] = "Id Pregunta: 1894. ";
 preguntaids[52] = 1894


//  Id pregunta: 4311 Año de creación de pregunta: 2004
 questions[53]= "54)  &iquest;Cu&aacute;l es el est&aacute;ndar Gigabit Ethernet sobre 2 pares trenzados apantallados hasta una distancia de 25 m?";
 choices[53]= new Array();
 choices[53][0] = "1000BaseT";
 choices[53][1] = "1000BaseSX";
 choices[53][2] = "1000BaseLx";
 choices[53][3] = "1000BaseCX";
 answers[53] = 3;
 units[53] = ['104'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 4311. Similar a examen TIC MAP A 2004";
 preguntaids[53] = 4311


//  Id pregunta: 6557 Año de creación de pregunta: 2003
 questions[54]= "55)  Indique la respuesta correcta en las siguientes afirmaciones respecto al Directorio Activo:";
 choices[54]= new Array();
 choices[54][0] = "Cuando un dominio se une a un &aacute;rbol dedominio se establece autom&aacute;ticamente una relaci&oacute;n de confianza transitiva unidireccional entre el dominio y su primario del &aacute;rbol";
 choices[54][1] = "Cuando un dominio se une a un &aacute;rbol dedominio no se establece autom&aacute;ticamente una relaci&oacute;n de confianza transitivabidireccional entre el dominio y su primario del &aacute;rbol";
 choices[54][2] = "El sistema de replicaci&oacute;n de Active Directory utiliza n&uacute;meros de secuencia de actualizaciones";
 choices[54][3] = "Para la propagaci&oacute;n de actualizaciones de Active Directory, Windows Server 2003proporciona sincronizaci&oacute;n temporal distribuida.";
 answers[54] = 2;
 units[54] = ['77'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 6557. ";
 preguntaids[54] = 6557


//  Id pregunta: 9896 Año de creación de pregunta: 2015
 questions[55]= "56)  La Ley 39/2015, cita expresamente en su pre&aacute;mbulo:";
 choices[55]= new Array();
 choices[55][0] = "La Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas.";
 choices[55][1] = "El programa nacional de reformas de Espa&ntilde;a.";
 choices[55][2] = "Ambas.";
 choices[55][3] = "Ninguna de las anteriores.";
 answers[55] = 2;
 units[55] = ['7', '19'];
 blocks[55] = ['A2', 'A4'];
 comments[55] = "Id Pregunta: 9896. ";
 preguntaids[55] = 9896


//  Id pregunta: 9565 Año de creación de pregunta: 2014
 questions[56]= "57)  Se&ntilde;ale la afirmaci&oacute;n falsa en relaci&oacute;n a las redes neuronales";
 choices[56]= new Array();
 choices[56][0] = "Son un m&eacute;todo de representaci&oacute;n del conocimiento param&eacute;trico";
 choices[56][1] = "La unidad de representaci&oacute;n de m&aacute;s alto nivel es la neurona";
 choices[56][2] = "Las neuronas se conectan mediante arcos";
 choices[56][3] = "Las neuronas se agrupan en capas";
 answers[56] = 1;
 units[56] = ['68'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 9565. La neurona es el nivel b&aacute;sico de representaci&oacute;n.";
 preguntaids[56] = 9565


//  Id pregunta: 1937 Año de creación de pregunta: 2016
 questions[57]= "58)  De las siguientes cuestiones de la arquitectura .NET indique cual es FALSA.";
 choices[57]= new Array();
 choices[57][0] = "Las clases ASP.NET soportan el desarrollo de aplicaciones web y de servicios web XML.";
 choices[57][1] = "Las clases ADO.NET permiten acceder a datos.";
 choices[57][2] = "CLR (Common Language runtime) se encarga de realizar la compilaci&oacute;n del c&oacute;digo fuente al Lenguaje Intermedio independiente de la plataforma.";
 choices[57][3] = "En la arquitectura .NET se permite la utilizaci&oacute;n de varios lenguajes de programaci&oacute;n";
 answers[57] = 2;
 units[57] = ['63'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 1937. ";
 preguntaids[57] = 1937


//  Id pregunta: 10684 Año de creación de pregunta: 2015
 questions[58]= "59)  &iquest;Qu&eacute; contratos de servicio y suministro est&aacute;n sujetos a regulaci&oacute;n armonizada, seg&uacute;n la Ley de Contratos del Sector P&uacute;blico?";
 choices[58]= new Array();
 choices[58][0] = "Todos los contratos de servicio y suministro est&aacute;n sujetos a regulaci&oacute;n armonizada.";
 choices[58][1] = "Aquellos cuyo valor estimado es igual o superior a 135.000 &euro;, si son adjudicados por la Administraci&oacute;n General del Estado, sus Organismos Aut&oacute;nomos o la Seguridad Social, y aquellos cuyo valor estimado es igual o superior a 209.000 &euro; si son adjudicados por los dem&aacute;s entes p&uacute;blicos.";
 choices[58][2] = "Aquellos cuyo valor estimado es igual o superior a 209.000 &euro;, si son adjudicados por la Administraci&oacute;n General del Estado, sus Organismos Aut&oacute;nomos o la Seguridad Social, y aquellos cuyo valor estimado es igual o superior a 135.000 &euro; si son adjudicados por los dem&aacute;s entes p&uacute;blicos.";
 choices[58][3] = "Ning&uacute;n contrato de suministro, ni de servicio, est&aacute; sujeto a regulaci&oacute;n armonizada.";
 answers[58] = 1;
 units[58] = ['37'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 10684. ";
 preguntaids[58] = 10684


//  Id pregunta: 7116 Año de creación de pregunta: 2010
 questions[59]= "60)  &iquest;D&oacute;nde debe publicarse la orden de creaci&oacute;n de una sede electr&oacute;nica?";
 choices[59]= new Array();
 choices[59][0] = "En la p&aacute;gina web del organismo correspondiente";
 choices[59][1] = "No es necesaria ninguna publicaci&oacute;n";
 choices[59][2] = "En el Bolet&iacute;n Oficial del Estado";
 choices[59][3] = "En dos diarios de tirada nacional";
 answers[59] = 2;
 units[59] = ['7'];
 blocks[59] = ['A2'];
 comments[59] = "Id Pregunta: 7116. Art&iacute;culo 3.2 RD 1671/2009";
 preguntaids[59] = 7116


//  Id pregunta: 10788 Año de creación de pregunta: 2015
 questions[60]= "61)  La entrada en vigor de la Ley 39/2015 es:";
 choices[60]= new Array();
 choices[60][0] = "A los seis meses de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 choices[60][1] = "Al a&ntilde;o de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 choices[60][2] = "A los dieciocho meses de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 choices[60][3] = "A los dos a&ntilde;os de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[60] = 1;
 units[60] = ['7'];
 blocks[60] = ['A2'];
 comments[60] = "Id Pregunta: 10788. ";
 preguntaids[60] = 10788


//  Id pregunta: 7532 Año de creación de pregunta: 2010
 questions[61]= "62)  Las SDU (Service Data Unit) son unidades de datos:";
 choices[61]= new Array();
 choices[61][0] = "Que se intercambian entre entidades hom&oacute;logas.";
 choices[61][1] = "Que proporcionan informaci&oacute;n de control entre niveles.";
 choices[61][2] = "Correspondientes a las primitivas de comunicaci&oacute;n.";
 choices[61][3] = "Que deben ser tratados por el nivel superior N+1 de forma transparente.";
 answers[61] = 3;
 units[61] = ['102'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 7532. Map 2005";
 preguntaids[61] = 7532


//  Id pregunta: 7633 Año de creación de pregunta: 2010
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a los dispositivos para la interconexi&oacute;n de redes de &aacute;rea local NO es cierta?";
 choices[62]= new Array();
 choices[62][0] = "Un puerto de un switch (conmutador) puede pertenecer a m&aacute;s de una VLAN (Virtual Local Area Networks).";
 choices[62][1] = "Los bridges (puentes) y los switches son capaces de aprender qu&eacute; estaciones est&aacute;n conectadas a cada uno de sus puertos a partir de la direcci&oacute;n MAC (Media Access Control) de origen de las tramas emitidas por dicha estaci&oacute;n.";
 choices[62][2] = "Los hubs (concentradores) de tercera generaci&oacute;n incrementan el n&uacute;mero de dominios de broadcast.";
 choices[62][3] = "Un switch permite el uso eficiente del ancho de banda al crear dominios de colisi&oacute;n m&aacute;s peque&ntilde;os.";
 answers[62] = 2;
 units[62] = ['104'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 7633. Map 2006";
 preguntaids[62] = 7633


//  Id pregunta: 5741 Año de creación de pregunta: 2007
 questions[63]= "64)  &iquest;Cu&aacute;l es el tama&ntilde;o de cabecera en una unidad de datos del protocolo lPv6?";
 choices[63]= new Array();
 choices[63][0] = "es variable";
 choices[63][1] = "de 20 octetos";
 choices[63][2] = "de 40 octetos";
 choices[63][3] = "similar a lPv4";
 answers[63] = 2;
 units[63] = ['109'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 5741. ";
 preguntaids[63] = 5741


//  Id pregunta: 6645 Año de creación de pregunta: 2009
 questions[64]= "65)  Indique cuales son las funciones fundamentales de la Comisi&oacute;n Sectorial de Administraci&oacute;n electr&oacute;nica.";
 choices[64]= new Array();
 choices[64][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas. Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a. Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[64][1] = "Desarrollar servicios centrados en los ciudadanos";
 choices[64][2] = "La reutilizaci&oacute;n de los desarrollos y soluciones por todas las Comunidades Aut&oacute;nomas.";
 choices[64][3] = "Incorporar a todas las Comunidades Aut&oacute;nomas a la red de atenci&oacute;n integral a los ciudadanos, Red 060.";
 answers[64] = 0;
 units[64] = ['19'];
 blocks[64] = ['A4'];
 comments[64] = "Id Pregunta: 6645. MAP 2008 A2. Actualizado seg&uacute;n Ley 40/2015";
 preguntaids[64] = 6645


//  Id pregunta: 7705 Año de creación de pregunta: 2010
 questions[65]= "66)  Elija la opci&oacute;n correcta con respecto al funcionamiento de los registros en d&iacute;as inh&aacute;biles, seg&uacute;n la Ley 39/2015:";
 choices[65]= new Array();
 choices[65][0] = "Los registros no estar&aacute;n en funcionamiento los d&iacute;as inh&aacute;biles.";
 choices[65][1] = "La presentaci&oacute;n de solicitudes, escritos y comunicaciones en un d&iacute;a inh&aacute;bil se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[65][2] = "La presentaci&oacute;n de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registro se entender&aacute; efectuada en la &uacute;ltima hora del &uacute;ltimo d&iacute;a h&aacute;bil anterior.";
 choices[65][3] = "No se permitir&aacute; la presentaci&oacute;n de solicitudes, escritos y comunicaciones en un d&iacute;a inh&aacute;bil, y por consiguiente la entrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registro no se entender&aacute; efectuada.";
 answers[65] = 1;
 units[65] = ['7'];
 blocks[65] = ['A2'];
 comments[65] = "Id Pregunta: 7705. Map 2007";
 preguntaids[65] = 7705


//  Id pregunta: 9192 Año de creación de pregunta: 2014
 questions[66]= "67)  El algoritmo RSA es un algoritmo:";
 choices[66]= new Array();
 choices[66][0] = "De triple clave.";
 choices[66][1] = "Asim&eacute;trico.";
 choices[66][2] = "De clave privada.";
 choices[66][3] = "Sim&eacute;trico.";
 answers[66] = 1;
 units[66] = ['119'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 9192. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[66] = 9192


//  Id pregunta: 4418 Año de creación de pregunta: 2002
 questions[67]= "68)  IRC es:";
 choices[67]= new Array();
 choices[67][0] = "Internet Relay Chat";
 choices[67][1] = "InfraRed Channel";
 choices[67][2] = "Investigation Resource Commitee";
 choices[67][3] = "Internet Resource Commitee";
 answers[67] = 0;
 units[67] = ['103'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 4418. ";
 preguntaids[67] = 4418


//  Id pregunta: 5736 Año de creación de pregunta: 2007
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes opciones NO es un contenedor para la arquitectura J2EE?";
 choices[68]= new Array();
 choices[68][0] = "contenedor web";
 choices[68][1] = "contenedor EJB";
 choices[68][2] = "contenedor de aplicaci&oacute;n cliente";
 choices[68][3] = "contenedor de base de datos";
 answers[68] = 3;
 units[68] = ['64'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 5736. ";
 preguntaids[68] = 5736


//  Id pregunta: 8964 Año de creación de pregunta: 2013
 questions[69]= "70)  Indique la afirmaci&oacute;n falsa:";
 choices[69]= new Array();
 choices[69][0] = "JAXP es una API de Java que permite el procesado de documentos XML";
 choices[69][1] = "JAXR es una API de Java que facilita el acceso a UDDI o ebXML";
 choices[69][2] = "SAAJ es una API de Java que permite generar y recoger mensajes SOAP";
 choices[69][3] = "JAX-RPC es una API Java que permite invocar objetos ORBA";
 answers[69] = 3;
 units[69] = ['64'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 8964. ";
 preguntaids[69] = 8964


//  Id pregunta: 481 Año de creación de pregunta: 2016
 questions[70]= "71)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[70]= new Array();
 choices[70][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[70][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[70][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[70][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[70] = 3;
 units[70] = ['19'];
 blocks[70] = ['A4'];
 comments[70] = "Id Pregunta: 481. Sociedad de la informaci&oacute;n";
 preguntaids[70] = 481


//  Id pregunta: 1220 Año de creación de pregunta: 2016
 questions[71]= "72)  En el &aacute;mbito de la criptograf&iacute;a asim&eacute;trica, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[71]= new Array();
 choices[71][0] = "La clave p&uacute;blica sirve para firmar los documentos, antes de enviarlos.";
 choices[71][1] = "La clave privada sirve para cifrar la clave p&uacute;blica antes de firmar con esta &uacute;ltima un documento.";
 choices[71][2] = "La clave privada se ha de generar aleatoriamente a partir de la clave p&uacute;blica cada vez que se firma un documento.";
 choices[71][3] = "La clave p&uacute;blica sirve para comprobar la firma digital de un documento firmado.";
 answers[71] = 3;
 units[71] = ['76'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 1220. ";
 preguntaids[71] = 1220


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[72]= "73)  La ley 39/2015 se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[72]= new Array();
 choices[72][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[72][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[72][2] = "el sector p&uacute;blico institucional";
 choices[72][3] = "el sector privado corporativo";
 answers[72] = 3;
 units[72] = ['7'];
 blocks[72] = ['A2'];
 comments[72] = "Id Pregunta: 214. Ley 39/2015";
 preguntaids[72] = 214


//  Id pregunta: 9539 Año de creación de pregunta: 2014
 questions[73]= "74)  En cuanto al tratamiento de datos personales de menores";
 choices[73]= new Array();
 choices[73][0] = "La legislaci&oacute;n no hace distinciones referentes a la edad de la persona de la que se recaban los datos";
 choices[73][1] = "Con car&aacute;cter general, s&oacute;lo pueden recabarse datos de personas mayores de edad (18 a&ntilde;os)";
 choices[73][2] = "Con car&aacute;cter general, pueden recabarse datos de menores de edad (18 a&ntilde;os) s&oacute;lo con consentimiento de sus padres o tutores";
 choices[73][3] = "Con car&aacute;cter general, pueden recabarse datos de menores de 14 a&ntilde;os s&oacute;lo con consentimiento de sus padres o tutores";
 answers[73] = 3;
 units[73] = ['35'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 9539. Art&iacute;culo 13.1 del RD 1720/2007";
 preguntaids[73] = 9539


//  Id pregunta: 8544 Año de creación de pregunta: 2013
 questions[74]= "75)  &iquest;Cual de las siguientes no se corresponde con una gu&iacute;a de accesibilidad WAI?";
 choices[74]= new Array();
 choices[74][0] = "ATAG";
 choices[74][1] = "UAAG";
 choices[74][2] = "WAI-ARIA";
 choices[74][3] = "FAAG";
 answers[74] = 3;
 units[74] = ['42'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 8544. ";
 preguntaids[74] = 8544


