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
//  Id pregunta: 9500 Año de creación de pregunta: 2014
 questions[0]= "1)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[0]= new Array();
 choices[0][0] = "Para el canal de subida utiliza la modulaci&oacute;n WCDMA y para el de bajada, OFDMA";
 choices[0][1] = "Corresponde a la release 8 del 3GPP (3rd Generation Partnership Project)";
 choices[0][2] = "Usa una nueva interfaz aire basada en OFDMA (Orthogonal Frequency Division Multiple Access)";
 choices[0][3] = "El ancho de banda de los canales es variable entre 1,25MHz y 20MHz";
 answers[0] = 0;
 units[0] = ['117'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 9500. Para el canal de subida usa SC-FDMA (Single Carrier FDMA)";
 preguntaids[0] = 9500


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[1]= "2)  Se&ntilde;ale qu&eacute; tecnolog&iacute;a estandarizada por el W3C permite la extracci&oacute;n de datos desde documentos XML:";
 choices[1]= new Array();
 choices[1][0] = "XML MyQueryLang.";
 choices[1][1] = "XSQL Language.";
 choices[1][2] = "XML QueryDataSet.";
 choices[1][3] = "Xquery Language.";
 answers[1] = 3;
 units[1] = ['74'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 762. AGE A2 2015";
 preguntaids[1] = 762


//  Id pregunta: 2693 Año de creación de pregunta: 2002
 questions[2]= "3)  &iquest;Qu&eacute; servicio proporciona a los usuarios el servicio de directorio X.500?:";
 choices[2]= new Array();
 choices[2][0] = "Dar facilidades para consultar informaci&oacute;n acerca de objetos accesibles en una red";
 choices[2][1] = "Facilitar direcciones y nombre de usuarios accesibles en una red";
 choices[2][2] = "Realizar las funciones de direccionamiento y nomenclatura de usuarios de un sistema de tratamiento de mensajes seg&uacute;n la norma X.400";
 choices[2][3] = "Controlar las peticiones de registro de usuario por medio de agentes de sistema (DSA) y mantenimiento de la base de informaci&oacute;n de directorio (DIB)";
 answers[2] = 0;
 units[2] = ['77'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 2693. ";
 preguntaids[2] = 2693


//  Id pregunta: 3501 Año de creación de pregunta: 2006
 questions[3]= "4)  En el entorno del lenguaje Java, AWT se refiere a:";
 choices[3]= new Array();
 choices[3][0] = "Una extensi&oacute;n de Swing";
 choices[3][1] = "Una biblioteca de clases Java para el desarrollo de interfaces gr&aacute;ficas de usuario";
 choices[3][2] = "Un conjunto de clases gr&aacute;ficas bajo licencia de IBM/Taligent";
 choices[3][3] = "Una familia de fuentes de caracteres";
 answers[3] = 1;
 units[3] = ['64'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 3501. ";
 preguntaids[3] = 3501


//  Id pregunta: 5656 Año de creación de pregunta: 2007
 questions[4]= "5)  Metacity";
 choices[4]= new Array();
 choices[4][0] = "Es el gestor de eventos de GNOME 2";
 choices[4][1] = "Es el gestor de ventanas de GNOME 2";
 choices[4][2] = "Es el gestor de eventos de KDE";
 choices[4][3] = "Es el gestor de eventos de MOLINUX";
 answers[4] = 1;
 units[4] = ['57'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 5656. ";
 preguntaids[4] = 5656


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[5]= "6)  No es una causa de inadmisi&oacute;n de un recurso administrativo:";
 choices[5]= new Array();
 choices[5][0] = "Carecer de legitimaci&oacute;n el recurrente";
 choices[5][1] = "Tratarse de un acto no susceptible de recurso";
 choices[5][2] = "La ausencia de calificaci&oacute;n del recurso por parte del recurrente";
 choices[5][3] = "Todas ellas son causas de inadmisi&oacute;n de un recurso administrativo";
 answers[5] = 2;
 units[5] = ['8'];
 blocks[5] = ['A2'];
 comments[5] = "Id Pregunta: 257. Ley 39/2015";
 preguntaids[5] = 257


//  Id pregunta: 7428 Año de creación de pregunta: 2010
 questions[6]= "7)  Indique cu&aacute;l de los siguientes es SW libre para miner&iacute;a de datos:";
 choices[6]= new Array();
 choices[6][0] = "SAS";
 choices[6][1] = "Clementine";
 choices[6][2] = "Weka";
 choices[6][3] = "SPSS";
 answers[6] = 2;
 units[6] = ['72'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 7428. ";
 preguntaids[6] = 7428


//  Id pregunta: 4352 Año de creación de pregunta: 2004
 questions[7]= "8)  La direcci&oacute;n ip 127.0.0.1 representa a";
 choices[7]= new Array();
 choices[7][0] = "El router de la red";
 choices[7][1] = "Toda la red";
 choices[7][2] = "El propio equipo";
 choices[7][3] = "Usualmente el servidor";
 answers[7] = 2;
 units[7] = ['109'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 4352. ";
 preguntaids[7] = 4352


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[8]= "9)  Son servicios declarados compartidos:";
 choices[8]= new Array();
 choices[8][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[8][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[8][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[8][3] = "Todos los anteriores";
 answers[8] = 3;
 units[8] = ['19'];
 blocks[8] = ['A4'];
 comments[8] = "Id Pregunta: 466. Estrategia TIC";
 preguntaids[8] = 466


//  Id pregunta: 5917 Año de creación de pregunta: 2007
 questions[9]= "10)  &iquest;En cu&aacute;l de los siguientes aspectos NO resulta de aplicaci&oacute;n la Directiva 2000/31/CE, de 8 de junio de 2000,relativa a determinados aspectos jur&iacute;dicos de los servicios de la sociedad de la informaci&oacute;n, en particular elcomercio electr&oacute;nico en el mercado interior?";
 choices[9]= new Array();
 choices[9][0] = "Las actividades de juegos de azar que impliquen apuestas de valor monetario, incluidas loter&iacute;as y apuestas";
 choices[9][1] = "Las comunicaciones comerciales";
 choices[9][2] = "Los acuerdos extrajudiciales para la prestaci&oacute;n de servicios";
 choices[9][3] = "Los contratos por v&iacute;a electr&oacute;nica";
 answers[9] = 0;
 units[9] = ['19'];
 blocks[9] = ['A4'];
 comments[9] = "Id Pregunta: 5917. Directiva 2000/31/CE, art&iacute;culo 1.5.d)";
 preguntaids[9] = 5917


//  Id pregunta: 518 Año de creación de pregunta: 2016
 questions[10]= "11)  Se&ntilde;alar la respuesta FALSA respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[10]= new Array();
 choices[10][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[10][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[10][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[10][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[10] = 1;
 units[10] = ['22'];
 blocks[10] = ['A4'];
 comments[10] = "Id Pregunta: 518. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[10] = 518


//  Id pregunta: 982 Año de creación de pregunta: 2016
 questions[11]= "12)  El articulo 55 de la ley 40/2015 se&ntilde;ala que salvo las excepciones previstas por esta ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[11]= new Array();
 choices[11][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[11][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[11][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[11][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[11] = 0;
 units[11] = ['4', '7', '8', '9'];
 blocks[11] = ['A1', 'A2'];
 comments[11] = "Id Pregunta: 982. Ley 40/2015";
 preguntaids[11] = 982


//  Id pregunta: 9150 Año de creación de pregunta: 2014
 questions[12]= "13)  Para entornos Unix, indica c&oacute;mo se asigna el sticky bit a un directorio:";
 choices[12]= new Array();
 choices[12][0] = "chmod u+s /directorio/fichero";
 choices[12][1] = "chmog g+s /directorio";
 choices[12][2] = "chmod 177 /directorio";
 choices[12][3] = "chmod +t /directorio";
 answers[12] = 3;
 units[12] = ['57'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 9150. Examen TIC A2 2013";
 preguntaids[12] = 9150


//  Id pregunta: 1007 Año de creación de pregunta: 2016
 questions[13]= "14)  Los Subdirectores generales:";
 choices[13]= new Array();
 choices[13][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[13][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[13][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[13][3] = "todas son correctas";
 answers[13] = 1;
 units[13] = ['4', '7', '8', '9'];
 blocks[13] = ['A1', 'A2'];
 comments[13] = "Id Pregunta: 1007. Ley 40/2015";
 preguntaids[13] = 1007


//  Id pregunta: 8128 Año de creación de pregunta: 2011
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida tiene en cuenta el an&aacute;lisis de riesgos?";
 choices[14]= new Array();
 choices[14][0] = "Extreme Programming.";
 choices[14][1] = "Modelo de ciclo de vida en cascada";
 choices[14][2] = "El modelo de ciclo de vida en V";
 choices[14][3] = "Modelo de ciclo de vida en espiral";
 answers[14] = 3;
 units[14] = ['82'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 8128. Examen TIC A2 2010 interna";
 preguntaids[14] = 8128


//  Id pregunta: 7121 Año de creación de pregunta: 2010
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes contenidos deben contener obligatoriamente los certificados electr&oacute;nicos de sede electr&oacute;nica de la AGE y de sus organismos p&uacute;blicos vinculados o dependientes, de acuerdo al RD 1671/2009?";
 choices[15]= new Array();
 choices[15][0] = "Descripci&oacute;n de la sede electr&oacute;nica.";
 choices[15][1] = "Unidad administrativa suscriptora del certificado.";
 choices[15][2] = "Fechas de validez del certificado.";
 choices[15][3] = "Ninguna de las anteriores.";
 answers[15] = 1;
 units[15] = ['7'];
 blocks[15] = ['A2'];
 comments[15] = "Id Pregunta: 7121. Art&iacute;culo 18 RD 1671/2009";
 preguntaids[15] = 7121


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[16]= "17)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[16]= new Array();
 choices[16][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[16][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[16][2] = "Son incompatibles ambas actas de diputado.";
 choices[16][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[16] = 2;
 units[16] = ['5'];
 blocks[16] = ['A1'];
 comments[16] = "Id Pregunta: 155. Uni&oacute;n Europea";
 preguntaids[16] = 155


//  Id pregunta: 8460 Año de creación de pregunta: 2011
 questions[17]= "18)  Seg&uacute;n las definiciones incluidas en el art. 5 del R.D. 1720/2007, &ldquo;la persona f&iacute;sica o jur&iacute;dica, p&uacute;blica o privada u &oacute;rgano administrativo, al que se revelen los datos&rdquo; es:";
 choices[17]= new Array();
 choices[17][0] = "Encargado del tratamiento";
 choices[17][1] = "Destinatario o cesionario";
 choices[17][2] = "Afectado o interesado";
 choices[17][3] = "Tercero";
 answers[17] = 1;
 units[17] = ['35'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 8460. ";
 preguntaids[17] = 8460


//  Id pregunta: 8987 Año de creación de pregunta: 2013
 questions[18]= "19)  Seg&uacute;n la norma t&eacute;cnica de interoperabilidad de pol&iacute;tica de firma electr&oacute;nica y de certificados de la administraci&oacute;n del Esquema Nacional de Interoperabilidad:";
 choices[18]= new Array();
 choices[18][0] = "Los formatos para la firma electr&oacute;nica de contenidos ser&aacute;n XAdES, CAdES y PAdES.";
 choices[18][1] = "El perfil m&iacute;nimo de formato que se utilizar&aacute; para la generaci&oacute;n de firmas de contenido en el marco de una pol&iacute;tica ser&aacute; &ndash;A.";
 choices[18][2] = "Los documentos electr&oacute;nicos a los que se aplique firma basada en certificados de cara a su intercambio no se ajustar&aacute;n a las especificaciones de formato y estructura establecidas en la NTI de Documento electr&oacute;nico.";
 choices[18][3] = "El perfil m&iacute;nimo de formato que se utilizar&aacute; para la generaci&oacute;n de firmas de contenido en el marco de una pol&iacute;tica ser&aacute; &ndash;C.";
 answers[18] = 0;
 units[18] = ['43'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 8987. Examen TIC A1 2011";
 preguntaids[18] = 8987


//  Id pregunta: 410 Año de creación de pregunta: 2016
 questions[19]= "20)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[19]= new Array();
 choices[19][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[19][1] = "Protecci&oacute;n de su salud.";
 choices[19][2] = "Ninguna es correcta.";
 choices[19][3] = "A y B son correctas.";
 answers[19] = 1;
 units[19] = ['14'];
 blocks[19] = ['A3'];
 comments[19] = "Id Pregunta: 410. Pol&iacute;ticas de igualdad";
 preguntaids[19] = 410


//  Id pregunta: 1502 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale cu&aacute;l de los siguientes NO se puede considerar un modelo del ciclo de vida del software:";
 choices[20]= new Array();
 choices[20][0] = "Modelo en cascada.";
 choices[20][1] = "Modelo en espiral.";
 choices[20][2] = "Modelo estructurado.";
 choices[20][3] = "Modelos basado en prototipos.";
 answers[20] = 2;
 units[20] = ['82'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 1502. ";
 preguntaids[20] = 1502


//  Id pregunta: 10420 Año de creación de pregunta: 2015
 questions[21]= "22)  A partir de que versi&oacute;n adopt&oacute; la antigua Sun Microsystem un cambio en la nomenclatura de las versiones en sus productos Java.";
 choices[21]= new Array();
 choices[21][0] = "Hasta la versi&oacute;n 1.2, siendo la versi&oacute;n 3.0 la primera en numerarse de esta forma.";
 choices[21][1] = "Hasta la versi&oacute;n 1.3, siendo la versi&oacute;n 4.0 la primera en numerarse de esta forma.";
 choices[21][2] = "Hasta la versi&oacute;n 1.4, siendo la versi&oacute;n 5.0 la primera en numerarse de esta forma.";
 choices[21][3] = "El versionado ha sido siempre 1.x.";
 answers[21] = 2;
 units[21] = ['64'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 10420. ";
 preguntaids[21] = 10420


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[22]= new Array();
 choices[22][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[22][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[22][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[22][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[22] = 2;
 units[22] = ['22'];
 blocks[22] = ['A4'];
 comments[22] = "Id Pregunta: 515. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[22] = 515


//  Id pregunta: 5295 Año de creación de pregunta: 2006
 questions[23]= "24)  Tim Berners-Lee lider&oacute; un equipo de f&iacute;sicos en el CERN que cre&oacute;:";
 choices[23]= new Array();
 choices[23][0] = "El lenguaje PHP en 1993";
 choices[23][1] = "El lenguaje HTML en 1989";
 choices[23][2] = "El lenguaje Perl en 1979";
 choices[23][3] = "El lenguaje HTML en 1991";
 answers[23] = 1;
 units[23] = ['125'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 5295. ";
 preguntaids[23] = 5295


//  Id pregunta: 2239 Año de creación de pregunta: 2004
 questions[24]= "25)  De acuerdo al RDL 1/1996, la protecci&oacute;n de los programas de ordenador:";
 choices[24]= new Array();
 choices[24][0] = "Cuando el autor sea una persona natural, para el caso m&aacute;s general, los derechos de explotaci&oacute;n durar&aacute;n toda su vida, y 70 a&ntilde;os despu&eacute;s de su muerte o declaraci&oacute;n de fallecimiento.";
 choices[24][1] = "Cuando el autor sea una persona jur&iacute;dica, la duraci&oacute;n de los derechos de explotaci&oacute;n ser&aacute; de 70 a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[24][2] = "a y b son correctas";
 choices[24][3] = "a y b son incorrectas";
 answers[24] = 2;
 units[24] = ['41'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 2239. ";
 preguntaids[24] = 2239


//  Id pregunta: 348 Año de creación de pregunta: 2016
 questions[25]= "26)  En 2007, antes de la crisis, la clasificaci&oacute;n de la solvencia espa&ntilde;ola por las agencias de rating era:";
 choices[25]= new Array();
 choices[25][0] = "AA";
 choices[25][1] = "A";
 choices[25][2] = "AAA";
 choices[25][3] = "Ninguna de las anteriores";
 answers[25] = 2;
 units[25] = ['12'];
 blocks[25] = ['A3'];
 comments[25] = "Id Pregunta: 348. Modelo econ&oacute;mico";
 preguntaids[25] = 348


//  Id pregunta: 1575 Año de creación de pregunta: 2016
 questions[26]= "27)  En el &aacute;mbito del modelo TCP/IP, se&ntilde;ale cu&aacute;l de las siguientes siglas identifica un algoritmo de encaminamiento:";
 choices[26]= new Array();
 choices[26][0] = "NTP (Network Time Protocol)";
 choices[26][1] = "RIP (Routing Information Protocol)";
 choices[26][2] = "RPC (Remote Procedure Call)";
 choices[26][3] = "FTP (File Transfer Protocol)";
 answers[26] = 1;
 units[26] = ['109'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 1575. ";
 preguntaids[26] = 1575


//  Id pregunta: 7042 Año de creación de pregunta: 2010
 questions[27]= "28)  &iquest;C&oacute;mo se denomina la clase que no tiene instancias?";
 choices[27]= new Array();
 choices[27][0] = "No existen clases sin instancias";
 choices[27][1] = "Invisible";
 choices[27][2] = "Hu&eacute;rfana";
 choices[27][3] = "Abstracta";
 answers[27] = 3;
 units[27] = ['85'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 7042. ";
 preguntaids[27] = 7042


//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[28]= new Array();
 choices[28][0] = "Nueve.";
 choices[28][1] = "Diez.";
 choices[28][2] = "Siete.";
 choices[28][3] = "Ocho.";
 answers[28] = 3;
 units[28] = ['5'];
 blocks[28] = ['A1'];
 comments[28] = "Id Pregunta: 195. Uni&oacute;n Europea";
 preguntaids[28] = 195


//  Id pregunta: 6947 Año de creación de pregunta: 2010
 questions[29]= "30)  La Orden PRE/878/2010 regula";
 choices[29]= new Array();
 choices[29][0] = "El Registro Electr&oacute;nico Com&uacute;n";
 choices[29][1] = "Los contenidos y servicios m&iacute;nimos de las sedes electr&oacute;nicas";
 choices[29][2] = "El uso de certificados de empleado p&uacute;blico";
 choices[29][3] = "La direcci&oacute;n electr&oacute;nica habilitada";
 answers[29] = 3;
 units[29] = ['19'];
 blocks[29] = ['A4'];
 comments[29] = "Id Pregunta: 6947. Orden PRE/878/2010, previsto en el art&iacute;culo 38.2 del Real Decreto 1671/2009, de 6 de noviembre.";
 preguntaids[29] = 6947


//  Id pregunta: 553 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;C&uacute;al es un objetivo de las metodolog&iacute;as lean?";
 choices[30]= new Array();
 choices[30][0] = "Maximizar el valor para los clientes";
 choices[30][1] = "Reducir los costes y aumentar la calidad del producto o del servicio";
 choices[30][2] = "Entregar productos de manera m&aacute;s r&aacute;pida";
 choices[30][3] = "Todos los anteriores son objetivos de la metodolog&iacute;a lean";
 answers[30] = 3;
 units[30] = ['34'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 553. Metodologias Lean";
 preguntaids[30] = 553


//  Id pregunta: 4980 Año de creación de pregunta: 2002
 questions[31]= "32)  Los conmutadores o switches LAN construyen una tabla de conmutaci&oacute;n que consiste en:";
 choices[31]= new Array();
 choices[31][0] = "Direcciones MAC y su interfaz de salida asociada";
 choices[31][1] = "Direcciones MAC y el n&uacute;mero de hops (elementos atravesados) hasta su destino";
 choices[31][2] = "Direcciones de red y su interfaz de salida apropiada";
 choices[31][3] = "Direcciones de red  y el n&uacute;mero de hops (elementos atravesados) hasta su destino";
 answers[31] = 0;
 units[31] = ['102'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 4980. ";
 preguntaids[31] = 4980


//  Id pregunta: 2193 Año de creación de pregunta: 2002
 questions[32]= "33)  Hay muchas organizaciones diferentes de normalizaci&oacute;n, pero una de las siguientes no est&aacute; entre ellas. &iquest;Cu&aacute;l?:";
 choices[32]= new Array();
 choices[32][0] = "ISO";
 choices[32][1] = "ANSI";
 choices[32][2] = "CEPT";
 choices[32][3] = "OSI";
 answers[32] = 3;
 units[32] = ['48'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 2193. ";
 preguntaids[32] = 2193


//  Id pregunta: 10153 Año de creación de pregunta: 2015
 questions[33]= "34)  Los certificados electr&oacute;nicos contenidos en el DNI electr&oacute;nico 3.0 tienen una vigencia de:";
 choices[33]= new Array();
 choices[33][0] = "30 meses.";
 choices[33][1] = "48 meses.";
 choices[33][2] = "60 meses.";
 choices[33][3] = "36 meses.";
 answers[33] = 2;
 units[33] = ['78'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 10153. Examen TIC A1 2014";
 preguntaids[33] = 10153


//  Id pregunta: 508 Año de creación de pregunta: 2016
 questions[34]= "35)  En base a la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno se&ntilde;ale la afirmaci&oacute;n verdadera:";
 choices[34]= new Array();
 choices[34][0] = "El derecho de acceso a la informaci&oacute;n p&uacute;blica supone, entre otros, que el sujeto obligado a ello publique de forma peri&oacute;dica y actualizada la informaci&oacute;n cuyo conocimiento sea relevante para garantizar la transparencia de su actividad.";
 choices[34][1] = "Las entidades privadas no est&aacute;n sujetas a obligaciones de transparencia seg&uacute;n la Ley 19/2013.";
 choices[34][2] = "Se admitir&aacute;n a tr&aacute;mite, sin excepci&oacute;n, todas las solicitudes de acceso a la informaci&oacute;n por parte de los ciudadanos.";
 choices[34][3] = "El cumplimiento por la Administraci&oacute;n General del Estado de las obligaciones de publicidad activa ser&aacute; objeto de control por parte del CTBG.";
 answers[34] = 3;
 units[34] = ['22'];
 blocks[34] = ['A4'];
 comments[34] = "Id Pregunta: 508. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[34] = 508


//  Id pregunta: 374 Año de creación de pregunta: 2016
 questions[35]= "36)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[35]= new Array();
 choices[35][0] = "Discriminaci&oacute;n indirecta.";
 choices[35][1] = "Discriminaci&oacute;n directa.";
 choices[35][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[35][3] = "Discriminaci&oacute;n abusiva.";
 answers[35] = 0;
 units[35] = ['14'];
 blocks[35] = ['A3'];
 comments[35] = "Id Pregunta: 374. Pol&iacute;ticas de igualdad";
 preguntaids[35] = 374


//  Id pregunta: 10840 Año de creación de pregunta: 2015
 questions[36]= "37)  En IPv6, la etiqueta de flujo tiene una longitud de:";
 choices[36]= new Array();
 choices[36][0] = "8 bits";
 choices[36][1] = "16 bits";
 choices[36][2] = "20 bits";
 choices[36][3] = "No existe dicha etiqueta";
 answers[36] = 2;
 units[36] = ['109'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 10840. ";
 preguntaids[36] = 10840


//  Id pregunta: 1827 Año de creación de pregunta: 2016
 questions[37]= "38)  Indique cu&aacute;l NO es la opci&oacute;n correcta para ser considerada como una de las finalidades de la ingenier&iacute;a inversa:";
 choices[37]= new Array();
 choices[37][0] = "La aplicaci&oacute;n de ingenier&iacute;a inversa construye especificaciones de un mayor nivel de abstracci&oacute;n partiendo del c&oacute;digo fuente de un programa.";
 choices[37][1] = "La aplicaci&oacute;n de ingenier&iacute;a inversa construye nuevas funcionalidades partiendo del c&oacute;digo fuente de un programa.";
 choices[37][2] = "La aplicaci&oacute;n de ingenier&iacute;a inversa descubre secretos y misterios del programa en uso a partir del c&oacute;digo fuente.";
 choices[37][3] = "La aplicaci&oacute;n ingenier&iacute;a inversa descubre el funcionamiento de un programa para reducir la complejidad del mismo.";
 answers[37] = 1;
 units[37] = ['97'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 1827. ";
 preguntaids[37] = 1827


//  Id pregunta: 7010 Año de creación de pregunta: 2010
 questions[38]= "39)  Dentro del marco de la auditor&iacute;a de sistemas de informaci&oacute;n, los &ldquo;controles&rdquo; en funci&oacute;n del momento en que act&uacute;an podr&iacute;an clasificarse en:";
 choices[38]= new Array();
 choices[38][0] = "Proactivos, reactivos, concurrentes y recurrentes.";
 choices[38][1] = "Recurrentes, instant&aacute;neos, previos y posteriores.";
 choices[38][2] = "Concomitantes, recurrentes, duraderos e instant&aacute;neos.";
 choices[38][3] = "Reactivos, proactivos y concurrentes o concomitantes.";
 answers[38] = 3;
 units[38] = ['36'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 7010. ";
 preguntaids[38] = 7010


//  Id pregunta: 1119 Año de creación de pregunta: 2016
 questions[39]= "40)  Comparando el sistema de archivos Ext4 frente a Ext3, se&ntilde;ale la opci&oacute;n correcta:";
 choices[39]= new Array();
 choices[39][0] = "Ext4 soporta sistemas de ficheros de hasta 1024 TB frente a los 16 TB de Ext3.";
 choices[39][1] = "La migraci&oacute;n de un sistema de ficheros Ext3 a uno Ext4 requiere reformatear el sistema de archivos afectado.";
 choices[39][2] = "Ext4 soporta ficheros de hasta 16 TB frente a los 2 TB de Ext3.";
 choices[39][3] = "Ext4 introduce la capacidad de journaling (registro por diario), no presente en Ext3.";
 answers[39] = 2;
 units[39] = ['57'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 1119. ";
 preguntaids[39] = 1119


//  Id pregunta: 9842 Año de creación de pregunta: 2015
 questions[40]= "41)  Indique cu&aacute;l de los siguientes procesos de M&eacute;trica v3 no incluye actividades de la interfaz para Gestion de la Configuraci&oacute;n:";
 choices[40]= new Array();
 choices[40][0] = "ASI";
 choices[40][1] = "PSI";
 choices[40][2] = "MSI";
 choices[40][3] = "EVS";
 answers[40] = 1;
 units[40] = ['91'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 9842. ";
 preguntaids[40] = 9842


//  Id pregunta: 5749 Año de creación de pregunta: 2007
 questions[41]= "42)  Respecto al protocolo de seguridad IKE, cual de las siguientes respuestas es falsa:";
 choices[41]= new Array();
 choices[41][0] = "recrea las claves cada cierto tiempo";
 choices[41][1] = "permite utilizar certificados digitales";
 choices[41][2] = "se necesita una asociaci&oacute;n de seguridad IKE para cada conexi&oacute;n IPSEC.";
 choices[41][3] = "esta basado en Oakley.";
 answers[41] = 2;
 units[41] = ['119'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 5749. ";
 preguntaids[41] = 5749


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[42]= "43)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[42]= new Array();
 choices[42][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[42][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[42][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[42][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[42] = 0;
 units[42] = ['1'];
 blocks[42] = ['A1'];
 comments[42] = "Id Pregunta: 97. Constituci&oacute;n de 1978";
 preguntaids[42] = 97


//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[43]= "44)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[43]= new Array();
 choices[43][0] = "De los interesados en el procedimiento";
 choices[43][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[43][2] = "Disposiciones generales";
 choices[43][3] = "De los actos administrativos";
 answers[43] = 2;
 units[43] = ['7'];
 blocks[43] = ['A2'];
 comments[43] = "Id Pregunta: 220. Ley 39/2015";
 preguntaids[43] = 220


//  Id pregunta: 5428 Año de creación de pregunta: 2007
 questions[44]= "45)  &iquest;Cu&aacute;l de  las siguientes afirmaciones est&aacute; recogida en la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones?";
 choices[44]= new Array();
 choices[44][0] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia aprobar&aacute; los planes nacionales de numeracion y direccion";
 choices[44][1] = "El Gobierno podr&aacute; imponer  a los operadores, mediante Real Decreto, obligaciones de servicio p&uacute;blico en ciertos supuestos";
 choices[44][2] = "Tendr&aacute;n la consideraci&oacute;n de Autoridades Nacionales de Reglamentacion de Telecomunicaciones &uacute;nicamente el Gobierno y la Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[44][3] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia analizar&aacute; los mercados de referencia al por mayor y al por menor cada tres a&ntilde;os como m&iacute;nimo";
 answers[44] = 1;
 units[44] = ['121'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 5428. ";
 preguntaids[44] = 5428


//  Id pregunta: 6305 Año de creación de pregunta: 2003
 questions[45]= "46)  Indique la pr&aacute;ctica cuyo objeto es ayudar a la planificaci&oacute;n de las actividades y recursos de una organizaci&oacute;n, facilitando la asignaci&oacute;n de prioridades dentro de ella:";
 choices[45]= new Array();
 choices[45][0] = "Matriz TOWS";
 choices[45][1] = "An&aacute;lisis coste/beneficio";
 choices[45][2] = "Factores cr&iacute;ticos de &eacute;xito";
 choices[45][3] = "An&aacute;lisis de impacto en la organizaci&oacute;n";
 answers[45] = 2;
 units[45] = ['83'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 6305. ";
 preguntaids[45] = 6305


//  Id pregunta: 2874 Año de creación de pregunta: 2002
 questions[46]= "47)  En una operaci&oacute;n de resumen o hash, con h = H(M) :";
 choices[46]= new Array();
 choices[46][0] = "M debe ser de longitud fija";
 choices[46][1] = "no tiene por qu&eacute; conocerse H";
 choices[46][2] = "h debe ser de longitud fija";
 choices[46][3] = "dado M, no siempre se va a poder calcular H(M)";
 answers[46] = 2;
 units[46] = ['76'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 2874. ";
 preguntaids[46] = 2874


//  Id pregunta: 974 Año de creación de pregunta: 2016
 questions[47]= "48)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[47]= new Array();
 choices[47][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[47][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[47][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[47][3] = "todas son correctas";
 answers[47] = 1;
 units[47] = ['4', '7', '8', '9'];
 blocks[47] = ['A1', 'A2'];
 comments[47] = "Id Pregunta: 974. Ley 40/2015";
 preguntaids[47] = 974


//  Id pregunta: 1030 Año de creación de pregunta: 2016
 questions[48]= "49)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[48]= new Array();
 choices[48][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[48][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[48][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[48][3] = "Todas son correctas.";
 answers[48] = 3;
 units[48] = ['4', '7', '8', '9'];
 blocks[48] = ['A1', 'A2'];
 comments[48] = "Id Pregunta: 1030. Ley 40/2015";
 preguntaids[48] = 1030


//  Id pregunta: 6439 Año de creación de pregunta: 2003
 questions[49]= "50)  Indicar cu&aacute;l de las siguientes son t&eacute;cnicas basadas en la comparaci&oacute;n de patrones para el reconocimiento de la voz";
 choices[49]= new Array();
 choices[49][0] = "Programaci&oacute;n din&aacute;mica o DTW (Dynamic Time Warping)";
 choices[49][1] = "Modelos ocultos de Markov o HMM (Hidden Markov Models)";
 choices[49][2] = "Las respuestas a) y b) son verdaderas";
 choices[49][3] = "Ninguna es verdadera";
 answers[49] = 2;
 units[49] = ['112'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 6439. ";
 preguntaids[49] = 6439


//  Id pregunta: 7175 Año de creación de pregunta: 2010
 questions[50]= "51)  Una infraestructura de clave p&uacute;blica (PKI) es";
 choices[50]= new Array();
 choices[50][0] = "Un algoritmo de clave p&uacute;blica, cuya firma digital hace uso de funciones hash de 64 bits";
 choices[50][1] = "El conjunto de certificado de autenticaci&oacute;n y certificado de firma reconocida";
 choices[50][2] = "Una tercera parte de confianza que se encarga de la firma digital de los certificados de usuarios de entorno de clave p&uacute;blica";
 choices[50][3] = "Un conjunto de protocolos, servicios y est&aacute;ndares que soportan aplicaciones basadas en criptograf&iacute;a de clave p&uacute;blica";
 answers[50] = 3;
 units[50] = ['78'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 7175. Castilla La Mancha 2009";
 preguntaids[50] = 7175


//  Id pregunta: 9605 Año de creación de pregunta: 2014
 questions[51]= "52)  &iquest;Se pueden controlar el n&uacute;mero de impresiones que un usuario ha realizado en una impresora en red mediante el protocolo de gesti&oacute;n SNMP?";
 choices[51]= new Array();
 choices[51][0] = "Si, siempre y cuando en la MIB de la impresora se contemple este par&aacute;metro.";
 choices[51][1] = "No, necesitar&iacute;a una base de datos externa para almacenarlo.";
 choices[51][2] = "Si, s&oacute;lo mediante instalaci&oacute;n de firmware nuevo en la impresora.";
 choices[51][3] = "Si, pero con protocolos propietarios de la impresora.";
 answers[51] = 0;
 units[51] = ['114'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 9605. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[51] = 9605


//  Id pregunta: 4748 Año de creación de pregunta: 2002
 questions[52]= "53)  El protocolo OSPF:";
 choices[52]= new Array();
 choices[52][0] = "Es un protocolo de encaminamiento como el RIP";
 choices[52][1] = "Significa 'Open Systems Protocol Family'";
 choices[52][2] = "No usa el algoritmo tipo de estados de enlaces (link-state) para encaminar los datagramas";
 choices[52][3] = "Se describe en la RFC942 (Request for Comments)";
 answers[52] = 0;
 units[52] = ['102'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 4748. ";
 preguntaids[52] = 4748


//  Id pregunta: 7631 Año de creación de pregunta: 2010
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes productos NO es resultado del proceso &laquo;Implantaci&oacute;n y Aceptaci&oacute;n del Sistema&raquo; (IAS) de la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3?";
 choices[53]= new Array();
 choices[53][0] = "Evaluaci&oacute;n del Resultado de las Pruebas de Integraci&oacute;n.";
 choices[53][1] = "Evaluaci&oacute;n del Resultado de las Pruebas de Implantaci&oacute;n.";
 choices[53][2] = "Acuerdo de Nivel de Servicio.";
 choices[53][3] = "Plan de Mantenimiento.";
 answers[53] = 0;
 units[53] = ['91'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 7631. Map 2006";
 preguntaids[53] = 7631


//  Id pregunta: 5082 Año de creación de pregunta: 2002
 questions[54]= "55)  Tengo una p&aacute;gina web personal, pero para financiar gastos tengo alojados &quot;banners&quot;.&iquest;En qu&eacute; me afecta la LSSI?:";
 choices[54]= new Array();
 choices[54][0] = "No me afecta para nada";
 choices[54][1] = "La LSSI es aplicable";
 choices[54][2] = "S&oacute;lo para la publicidad";
 choices[54][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[54] = 1;
 units[54] = ['19'];
 blocks[54] = ['A4'];
 comments[54] = "Id Pregunta: 5082. ";
 preguntaids[54] = 5082


//  Id pregunta: 5946 Año de creación de pregunta: 2007
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes NO es un formato v&aacute;lido para el empaquetamiento de aplicaciones en Java EE (Java Enterprise Edition)?";
 choices[55]= new Array();
 choices[55][0] = "WAR (Web Archive)";
 choices[55][1] = "EAR (Enterprise Archive)";
 choices[55][2] = "BAR (Bean Archive)";
 choices[55][3] = "JAR (Java Archive)";
 answers[55] = 2;
 units[55] = ['64'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 5946. ";
 preguntaids[55] = 5946


//  Id pregunta: 4533 Año de creación de pregunta: 2002
 questions[56]= "57)  EDGE responde por:";
 choices[56]= new Array();
 choices[56][0] = "Enhanced Data for GPRS Evolution";
 choices[56][1] = "Extended Data for GSM Enhancement";
 choices[56][2] = "Enhanced Data for GSM Evolution";
 choices[56][3] = "Extended Data for GPRS Enhancement";
 answers[56] = 2;
 units[56] = ['117'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 4533. ";
 preguntaids[56] = 4533


//  Id pregunta: 1439 Año de creación de pregunta: 2016
 questions[57]= "58)  A efectos de la LOPD art&iacute;culo 3, la persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que decida sobre la finalidad, contenido y uso del tratamiento, es el :";
 choices[57]= new Array();
 choices[57][0] = "Encargado del tratamiento.";
 choices[57][1] = "Afectado o interesado.";
 choices[57][2] = "Responsable del fichero o tratamiento.";
 choices[57][3] = "Decisor del tratamiento.";
 answers[57] = 2;
 units[57] = ['35'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 1439. ";
 preguntaids[57] = 1439


//  Id pregunta: 1964 Año de creación de pregunta: 2016
 questions[58]= "59)  Respecto al contenido del informe de auditor&iacute;a, indique cual de las siguientes recomendaciones es correcta:";
 choices[58]= new Array();
 choices[58][0] = "En el informe final de una auditoria operativa se deben se&ntilde;alar las debilidades y fortalezas observadas en relaci&oacute;n con los controles implementados en el &aacute;rea auditada";
 choices[58][1] = "EI informe final de una auditoria operativa debe contener la opini&oacute;n de los auditores y sugerencias generales sobre c&oacute;mo aplicar los controles para evaluar el funcionamiento del &aacute;rea auditada";
 choices[58][2] = "EI informe final incluir&aacute; las alegaciones de los auditados, indicando la opini&oacute;n de los auditores sobre ellas, y si no se incluyen las alegaciones, deber&aacute; indicarse el motivo";
 choices[58][3] = "EI informe final de una auditoria s&oacute;lo contendr&aacute; recomendaciones relativas a los incumplimientos o puntos d&eacute;biles detectados en el &aacute;rea auditada";
 answers[58] = 2;
 units[58] = ['36'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 1964. ";
 preguntaids[58] = 1964


//  Id pregunta: 610 Año de creación de pregunta: 2016
 questions[59]= "60)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[59]= new Array();
 choices[59][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[59][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[59][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[59][3] = "Todas las respuestas anteriores son correctas.";
 answers[59] = 0;
 units[59] = ['45'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 610. Junta de Extremadura A1 2015";
 preguntaids[59] = 610


//  Id pregunta: 10400 Año de creación de pregunta: 2015
 questions[60]= "61)  Seg&uacute;n la Agenda digital Europea, &iquest;cu&aacute;l es el objetivo de las redes ultrarr&aacute;pidas debe alcanzarse en el conjunto de la uni&oacute;n europea en 2020?";
 choices[60]= new Array();
 choices[60][0] = "0.5";
 choices[60][1] = "0.8";
 choices[60][2] = "0.9";
 choices[60][3] = "1";
 answers[60] = 0;
 units[60] = ['19'];
 blocks[60] = ['A4'];
 comments[60] = "Id Pregunta: 10400. ";
 preguntaids[60] = 10400


//  Id pregunta: 807 Año de creación de pregunta: 2016
 questions[61]= "62)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[61]= new Array();
 choices[61][0] = "El nombre y el tipo de correspondencia.";
 choices[61][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[61][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[61][3] = "El nombre y el grado.";
 answers[61] = 1;
 units[61] = ['85'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 807. Junta de Extremadura A1 2015";
 preguntaids[61] = 807


//  Id pregunta: 5888 Año de creación de pregunta: 2007
 questions[62]= "63)  La Ley de Impulso de la Sociedad de la Informaci&oacute;n introduce novedades en materia de";
 choices[62]= new Array();
 choices[62][0] = "Seguridad. Los prestadores de servicios deber&aacute;n informar a sus clientes sobre medidas de seguridad que apliquen en sus servicios";
 choices[62][1] = "Accesibilidad. Se establece que las p&aacute;ginas web de las AAPP alcancen el nivel medio de accesibilidad";
 choices[62][2] = "Ampliaci&oacute;n de los nombres de dominio. Deber&aacute;n poder asignarse nombres de dominio .es que contengan el car&aacute;cter &quot;&ntilde;&quot;";
 choices[62][3] = "Todas las anteriores son ciertas";
 answers[62] = 3;
 units[62] = ['19'];
 blocks[62] = ['A4'];
 comments[62] = "Id Pregunta: 5888. Ley 56/2007";
 preguntaids[62] = 5888


//  Id pregunta: 6717 Año de creación de pregunta: 2009
 questions[63]= "64)  &iquest;Qu&eacute; es WebDAV?";
 choices[63]= new Array();
 choices[63][0] = "Protocolo de acceso y edici&oacute;n de carpetas mediante HTTP";
 choices[63][1] = "Sistema web de creaci&oacute;n de formularios";
 choices[63][2] = "Sistema web seguro de compartici&oacute;n de procesamiento";
 choices[63][3] = "Sistema web de mensajer&iacute;a y alertas";
 answers[63] = 0;
 units[63] = ['77'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 6717. MAP 2008 A1";
 preguntaids[63] = 6717


//  Id pregunta: 10000 Año de creación de pregunta: 2015
 questions[64]= "65)  El comando utilizado en el lenguaje de programaci&oacute;n Objective-C para imprimir mensajes en pantalla es:";
 choices[64]= new Array();
 choices[64][0] = "NSLog";
 choices[64][1] = "WRLog";
 choices[64][2] = "Writeln";
 choices[64][3] = "Printline";
 answers[64] = 0;
 units[64] = ['59'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 10000. Examen TIC A2 2014";
 preguntaids[64] = 10000


//  Id pregunta: 7031 Año de creación de pregunta: 2010
 questions[65]= "66)  &iquest;Qu&eacute; informaci&oacute;n deber&aacute; describir, al menos, cada requisito en el an&aacute;lisis de un Sistema de Informaci&oacute;n?";
 choices[65]= new Array();
 choices[65][0] = "Una descripci&oacute;n";
 choices[65][1] = "Un nombre Descriptivo del Requisito";
 choices[65][2] = "Un c&oacute;digo &uacute;nico";
 choices[65][3] = "Todas las anteriores";
 answers[65] = 3;
 units[65] = ['84'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 7031. ";
 preguntaids[65] = 7031


//  Id pregunta: 3169 Año de creación de pregunta: 2002
 questions[66]= "67)  La Ley de Servicios de la Sociedad de la Informacion y Comercio Electr&oacute;nico se conoce como:";
 choices[66]= new Array();
 choices[66][0] = "30/1992";
 choices[66][1] = "34/2002";
 choices[66][2] = "30/2002";
 choices[66][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[66] = 1;
 units[66] = ['19'];
 blocks[66] = ['A4'];
 comments[66] = "Id Pregunta: 3169. ";
 preguntaids[66] = 3169


//  Id pregunta: 7230 Año de creación de pregunta: 2010
 questions[67]= "68)  JME es la plataforma dirigida al desarrollo de aplicaciones para dispositivos como tel&eacute;fonos m&oacute;viles o PDAs, y es el acr&oacute;nimo de:";
 choices[67]= new Array();
 choices[67][0] = "Java Mobile Edition";
 choices[67][1] = "Java Micro Edition";
 choices[67][2] = "Java Mobility Edition";
 choices[67][3] = "Java Mobile Enterprise";
 answers[67] = 1;
 units[67] = ['64'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 7230. ";
 preguntaids[67] = 7230


//  Id pregunta: 445 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[68]= new Array();
 choices[68][0] = "En 2015";
 choices[68][1] = "En 2013";
 choices[68][2] = "En 2016";
 choices[68][3] = "En 2007";
 answers[68] = 1;
 units[68] = ['19'];
 blocks[68] = ['A4'];
 comments[68] = "Id Pregunta: 445. Agenda Digital";
 preguntaids[68] = 445


//  Id pregunta: 2474 Año de creación de pregunta: 2009
 questions[69]= "70)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, la retenci&oacute;n de datos de tr&aacute;fico relativo a las comunicaciones electr&oacute;nicas es deber de:";
 choices[69]= new Array();
 choices[69][0] = "los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones, en los t&eacute;rminos establecidos en la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones.";
 choices[69][1] = "los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico, en los t&eacute;rminos establecidos en la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones.";
 choices[69][2] = "los Operadores de Servicios de comunicaciones electr&oacute;nicas, los proveedores de Acceso a redes de telecomunicaciones y los prestadores de servicios de alojamiento de datos";
 choices[69][3] = "las respuestas 'a' y 'b' son correctas";
 answers[69] = 0;
 units[69] = ['19'];
 blocks[69] = ['A4'];
 comments[69] = "Id Pregunta: 2474. ";
 preguntaids[69] = 2474


//  Id pregunta: 9915 Año de creación de pregunta: 2015
 questions[70]= "71)  &iquest;Cu&aacute;l no es un componente del expediente electr&oacute;nico?";
 choices[70]= new Array();
 choices[70][0] = "Descripci&oacute;n de los documentos electr&oacute;nicos.";
 choices[70][1] = "&Iacute;ndice electr&oacute;nico.";
 choices[70][2] = "Firma del &Iacute;ndice electr&oacute;nico.";
 choices[70][3] = "Metadatos del expediente electr&oacute;nico.";
 answers[70] = 0;
 units[70] = ['44'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 9915. ";
 preguntaids[70] = 9915


//  Id pregunta: 3618 Año de creación de pregunta: 2002
 questions[71]= "72)  DARTS es el acr&oacute;nimo de:";
 choices[71]= new Array();
 choices[71][0] = "Data Redesign for Transactional Systems.";
 choices[71][1] = "Design Aproach for Real Time Systems.";
 choices[71][2] = "Design Aproach for Real Transactional Systems.";
 choices[71][3] = "No es acr&oacute;nimo de nada.";
 answers[71] = 1;
 units[71] = ['86'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 3618. ";
 preguntaids[71] = 3618


//  Id pregunta: 2070 Año de creación de pregunta: 2002
 questions[72]= "73)  Cuando hablamos de un nuevo tipo de trabajo en las organizaciones basadas en la informaci&oacute;n, nos referimos a:";
 choices[72]= new Array();
 choices[72][0] = "Disminuci&oacute;n de la presi&oacute;n sobre el trabajador y aumento sobre los sistemas de informaci&oacute;n";
 choices[72][1] = "Necesidad de un trabajador m&aacute;s inteligente pues necesita establecer conexiones entre los s&iacute;mbolos y la realidad";
 choices[72][2] = "Aumento de la conexi&oacute;n del trabajador con el mundo exterior lejano a &eacute;l, gracias a las redes internacionales de ordenadores";
 choices[72][3] = "Aumento de la satisfacci&oacute;n del trabajador que observa la capacidad de producci&oacute;n que tiene el simple hecho de pulsar una tecla del ordenador";
 answers[72] = 1;
 units[72] = ['25'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 2070. ";
 preguntaids[72] = 2070


//  Id pregunta: 3383 Año de creación de pregunta: 2006
 questions[73]= "74)  Identifique el t&eacute;rmino que no corresponde a una distribuci&oacute;n de Linux";
 choices[73]= new Array();
 choices[73][0] = "Ubuntu";
 choices[73][1] = "Debian";
 choices[73][2] = "Mandeva";
 choices[73][3] = "Red Hat";
 answers[73] = 2;
 units[73] = ['57'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 3383. ";
 preguntaids[73] = 3383


//  Id pregunta: 1817 Año de creación de pregunta: 2016
 questions[74]= "75)  Entre las diferentes caracter&iacute;sticas que tienen las aplicaciones de Internet enriquecidas, indique cu&aacute;l de las siguientes opciones NO es correcta";
 choices[74]= new Array();
 choices[74][0] = "Las aplicaciones de Internet enriquecidas utilizan un navegador web estandarizado para ejecutarse.";
 choices[74][1] = "Las aplicaciones de Internet enriquecidas pueden ser usadas desde cualquier ordenador con conexi&oacute;n a Internet pero con dependencia del sistema operativo que &eacute;ste utilice.";
 choices[74][2] = "Las aplicaciones de Internet enriquecidas utilizan una arquitectura cliente/servidor as&iacute;ncrona.";
 choices[74][3] = "Las aplicaciones de Internet enriquecidas surgen como una combinaci&oacute;n de las ventajas que ofrecen las aplicaciones web y las aplicaciones tradicionales.";
 answers[74] = 1;
 units[74] = ['74'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 1817. ";
 preguntaids[74] = 1817


