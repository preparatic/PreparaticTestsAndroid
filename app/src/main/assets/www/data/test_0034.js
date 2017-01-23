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
//  Id pregunta: 6868 Año de creación de pregunta: 2010
 questions[0]= "1)  Acerca de las Autoridades de sellado de tiempo:";
 choices[0]= new Array();
 choices[0][0] = "Para expedir su certificado precisan conocer en su integridad el documento.";
 choices[0][1] = "En el modo de registros encadenados aplican iterativamente una funci&oacute;n resumen (hash) a la concatenaci&oacute;n del resumen del mensaje a sellar con el resultado de la iteraci&oacute;n anterior.";
 choices[0][2] = "En el modo de firma digital firman la concatenaci&oacute;n de los mensajes a sellar con el tiempo.";
 choices[0][3] = "Ninguna de las anteriores es correcta.";
 answers[0] = 1;
 units[0] = ['78'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 6868. TIC A 2009";
 preguntaids[0] = 6868


//  Id pregunta: 10289 Año de creación de pregunta: 2015
 questions[1]= "2)  En una estructura de tres niveles de un CAU, seleccione la opci&oacute;n verdadera.";
 choices[1]= new Array();
 choices[1][0] = "El nivel 2 deber&aacute; tener acceso a la base de incidencias ya que la incidencia reportada puede haberse producido anteriormente.";
 choices[1][1] = "Todas las incidencias deben estar documentadas una vez resueltas.";
 choices[1][2] = "Todas las incidencias comienzan por una recepci&oacute;n y finalizan con un cierre.";
 choices[1][3] = "Todas las anteriores son verdaderas";
 answers[1] = 3;
 units[1] = ['30'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 10289. ";
 preguntaids[1] = 10289


//  Id pregunta: 9430 Año de creación de pregunta: 2014
 questions[2]= "3)  Seleccionar la correcta:";
 choices[2]= new Array();
 choices[2][0] = "Tanto los router como los switches definen dominios de colisi&oacute;n y difusi&oacute;n";
 choices[2][1] = "Los router definen dominios de colisi&oacute;n pero no de difusi&oacute;n";
 choices[2][2] = "Los router definen dominios de difusi&oacute;n y de colisi&oacute;n";
 choices[2][3] = "Los switches definen dominios de colisi&oacute;n y difusi&oacute;n.";
 answers[2] = 2;
 units[2] = ['112'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 9430. ";
 preguntaids[2] = 9430


//  Id pregunta: 8093 Año de creación de pregunta: 2011
 questions[3]= "4)  &iquest;Qu&eacute; API proporciona un modo para que una aplicaci&oacute;n J2EE autentique y autorice a un usuario especifico o a un grupo de usuarios para su ejecuci&oacute;n?:";
 choices[3]= new Array();
 choices[3][0] = "JNDI";
 choices[3][1] = "JAAS";
 choices[3][2] = "JMS";
 choices[3][3] = "JNI";
 answers[3] = 1;
 units[3] = ['64'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 8093. Analista Ayto. Madrid 2010";
 preguntaids[3] = 8093


//  Id pregunta: 2949 Año de creación de pregunta: 2002
 questions[4]= "5)  La propiedad de una funci&oacute;n res&uacute;men por la que dado un mensaje (x), es computacionalmente imposible encontrar otro mensaje (x&rsquo;) cuya funci&oacute;n resumen sea igual a la funci&oacute;n res&uacute;men del primer mensaje (x), corresponde a:";
 choices[4]= new Array();
 choices[4][0] = "Resistencia a la preimagen";
 choices[4][1] = "Resistencia a la segunda preimagen";
 choices[4][2] = "Resistencia a colisi&oacute;n";
 choices[4][3] = "Resistencia a la igualdad";
 answers[4] = 1;
 units[4] = ['76'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 2949. ";
 preguntaids[4] = 2949


//  Id pregunta: 2211 Año de creación de pregunta: 2002
 questions[5]= "6)  La auditor&iacute;a inform&aacute;tica tiene entre sus normas generales:";
 choices[5]= new Array();
 choices[5][0] = "Exigencia de evidencia";
 choices[5][1] = "Hacer part&iacute;cipe al usuario";
 choices[5][2] = "Formar parte de la empresa auditada";
 choices[5][3] = "Informar a las autoridades judiciales";
 answers[5] = 0;
 units[5] = ['36'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 2211. ";
 preguntaids[5] = 2211


//  Id pregunta: 6510 Año de creación de pregunta: 2003
 questions[6]= "7)  En UNIX, el t&eacute;rmino &ldquo;vi&rdquo; se refiere a :";
 choices[6]= new Array();
 choices[6][0] = "Un comando que lista las 20 primeras l&iacute;neas de un fichero";
 choices[6][1] = "Un comando que indica el proceso activo";
 choices[6][2] = "Un editor de texto";
 choices[6][3] = "Ninguna de las anteriores";
 answers[6] = 2;
 units[6] = ['57'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 6510. ";
 preguntaids[6] = 6510


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[7]= "8)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[7]= new Array();
 choices[7][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[7][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[7][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[7][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[7] = 1;
 units[7] = ['7'];
 blocks[7] = ['A2'];
 comments[7] = "Id Pregunta: 232. Ley 39/2015";
 preguntaids[7] = 232


//  Id pregunta: 7182 Año de creación de pregunta: 2010
 questions[8]= "9)  Indique la respuesta incorrecta sobre la gesti&oacute;n de configuraci&oacute;n.";
 choices[8]= new Array();
 choices[8][0] = "Una l&iacute;nea base es un conjunto de actividades para gestionar el cambio a lo largo del ciclo de vida del software.";
 choices[8][1] = "El impacto de los cambios puede evaluarse a trav&eacute;s de las relaciones entre los objetos de configuraci&oacute;n.";
 choices[8][2] = "La gesti&oacute;n de configuraci&oacute;n del software es una actividad protectiva.";
 choices[8][3] = "Las herramientas de desarrollo pueden formar parte de una l&iacute;nea base.";
 answers[8] = 0;
 units[8] = ['96'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 7182. Castilla La Mancha 2009";
 preguntaids[8] = 7182


//  Id pregunta: 3053 Año de creación de pregunta: 2002
 questions[9]= "10)  SHA-1 es un algoritmo empleado por la criptograf&iacute;a sim&eacute;trica de:";
 choices[9]= new Array();
 choices[9][0] = "Res&uacute;men";
 choices[9][1] = "Bloques";
 choices[9][2] = "Flujos";
 choices[9][3] = "Las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[9] = 0;
 units[9] = ['76'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 3053. ";
 preguntaids[9] = 3053


//  Id pregunta: 3327 Año de creación de pregunta: 2004
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes comandos SQL pertenece al DDL (Lenguaje de definici&oacute;n de datos)?";
 choices[10]= new Array();
 choices[10][0] = "SELECT";
 choices[10][1] = "CREATE";
 choices[10][2] = "INSERT";
 choices[10][3] = "UPDATE";
 answers[10] = 1;
 units[10] = ['61'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 3327. ";
 preguntaids[10] = 3327


//  Id pregunta: 2227 Año de creación de pregunta: 2002
 questions[11]= "12)  La gu&iacute;a de portabilidad de X/OPEN actualmente en vigor es:";
 choices[11]= new Array();
 choices[11][0] = "XGP3";
 choices[11][1] = "XGP4";
 choices[11][2] = "XGP5";
 choices[11][3] = "Todas las respuestas anteriores son correctas";
 answers[11] = 1;
 units[11] = ['43'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 2227. ";
 preguntaids[11] = 2227


//  Id pregunta: 10933 Año de creación de pregunta: 2015
 questions[12]= "13)  &iquest;En qu&eacute; medida las entidades privadas tienen que cumplir la Ley de Transparencia?";
 choices[12]= new Array();
 choices[12][0] = "Las entidades privadas que perciban durante el per&iacute;odo de un a&ntilde;o ayudas o subvenciones p&uacute;blicas en una cuant&iacute;a superior a 150.000 euros";
 choices[12][1] = "cuando al menos el 40?% del total de sus ingresos anuales tengan car&aacute;cter de ayuda o subvenci&oacute;n p&uacute;blica, siempre que alcancen como m&iacute;nimo la cantidad de 5.000 euros.";
 choices[12][2] = "No tienen que cumplir la ley de transparencia";
 choices[12][3] = "las cumplir&aacute;n sin ninguna limitaci&oacute;n";
 answers[12] = 1;
 units[12] = ['22'];
 blocks[12] = ['A4'];
 comments[12] = "Id Pregunta: 10933. ";
 preguntaids[12] = 10933


//  Id pregunta: 1209 Año de creación de pregunta: 2016
 questions[13]= "14)  Se&ntilde;alar cu&aacute;l de las siguientes NO es una ventaja del uso de directorios LDAP para la autenticaci&oacute;n de usuarios:";
 choices[13]= new Array();
 choices[13][0] = "La mayor&iacute;a de aplicaciones comerciales permiten su integraci&oacute;n f&aacute;cilmente.";
 choices[13][1] = "Est&aacute;n optimizados para las b&uacute;squedas, que es la operaci&oacute;n m&aacute;s repetida a la hora de gestionar los usuarios.";
 choices[13][2] = "Permiten implantar sin ning&uacute;n mecanismo adicional Single Sign On, ya que todas las aplicaciones pueden tener la autenticaci&oacute;n a trav&eacute;s del LDAP.";
 choices[13][3] = "La replicaci&oacute;n con los directorios /etc/passwd est&aacute; automatizada, y por tanto la integraci&oacute;n con las aplicaciones comerciales.";
 answers[13] = 3;
 units[13] = ['77'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 1209. ";
 preguntaids[13] = 1209


//  Id pregunta: 1149 Año de creación de pregunta: 2016
 questions[14]= "15)  En la t&eacute;cnica de DFDs, seg&uacute;n M&eacute;trica v3, se&ntilde;ale la respuesta INCORRECTA:";
 choices[14]= new Array();
 choices[14][0] = "El nivel o se llama diagrama de contexto.";
 choices[14][1] = "Los flujos de datos que comunican procesos con almacenes pueden ser de consulta, di&aacute;logo o de control.";
 choices[14][2] = "La descomposici&oacute;n por niveles se realiza de arriba abajo (top-down).";
 choices[14][3] = "Los diagramas deben ser consistentes.";
 answers[14] = 1;
 units[14] = ['91'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 1149. ";
 preguntaids[14] = 1149


//  Id pregunta: 310 Año de creación de pregunta: 2016
 questions[15]= "16)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[15]= new Array();
 choices[15][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[15][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[15][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[15][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[15] = 2;
 units[15] = ['11'];
 blocks[15] = ['A2'];
 comments[15] = "Id Pregunta: 310. Presupuestos generales";
 preguntaids[15] = 310


//  Id pregunta: 7095 Año de creación de pregunta: 2010
 questions[16]= "17)  El servicio universal definido en la ley 9/2014 deber&aacute; garantizar:";
 choices[16]= new Array();
 choices[16][0] = "Que se ponga a disposici&oacute;n de los abonados al servicio telef&oacute;nico disponible al p&uacute;blico una gu&iacute;a general de n&uacute;meros de abonados, ya sea impresa o electr&oacute;nica, o ambas, y se actualice, como m&aacute;ximo, una vez al a&ntilde;o.";
 choices[16][1] = "Que todos los usuarios finales puedan obtener una conexi&oacute;n a la red telef&oacute;nica p&uacute;blica, que le ofrezca la posibilidad de efectuar y recibir llamadas telef&oacute;nicas, enviar mensajes cortos de texto (SMS) y permitir comunicaciones de fax y datos a velocidad suficiente para acceder de forma funcional a Internet.";
 choices[16][2] = "Que exista una oferta suficiente de equipos terminales de acceso a Internet de banda ancha.";
 choices[16][3] = "Conexi&oacute;n a la red p&uacute;blica de comunicaciones con capacidad de acceso funcional a Internet, que deber&aacute; permitir comunicaciones de datos en banda ancha a una velocidad en sentido descendente de 1 Mbit por segundo";
 answers[16] = 3;
 units[16] = ['121'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 7095. Art&iacute;culo 25 Ley 9/2014";
 preguntaids[16] = 7095


//  Id pregunta: 7304 Año de creación de pregunta: 2010
 questions[17]= "18)  Un contrato de servicios de una comunidad aut&oacute;noma estar&aacute; sujeto a regulaci&oacute;n armonizada si su valor estimado es:";
 choices[17]= new Array();
 choices[17][0] = "Superior a 134.000 euros";
 choices[17][1] = "Superior a 125.000";
 choices[17][2] = "Igual o superior a 209.000";
 choices[17][3] = "Superior a 207.000 euros.";
 answers[17] = 2;
 units[17] = ['37'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 7304. Nuevos importes SARA";
 preguntaids[17] = 7304


//  Id pregunta: 1272 Año de creación de pregunta: 2016
 questions[18]= "19)  Las Pruebas de caja blanca NO dan cobertura de:";
 choices[18]= new Array();
 choices[18][0] = "Segmentos y ramas.";
 choices[18][1] = "Condici&oacute;n / decisi&oacute;n.";
 choices[18][2] = "Bucles.";
 choices[18][3] = "Texto.";
 answers[18] = 3;
 units[18] = ['92'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 1272. ";
 preguntaids[18] = 1272


//  Id pregunta: 5007 Año de creación de pregunta: 2002
 questions[19]= "20)  MIME responde por:";
 choices[19]= new Array();
 choices[19][0] = "Multimedia Internet Mail Extensions";
 choices[19][1] = "Multimedia Information Mail Extensions";
 choices[19][2] = "Multipurpose Internet Mail Extensions";
 choices[19][3] = "Multipurpose Information Mail Extensions";
 answers[19] = 2;
 units[19] = ['116'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 5007. ";
 preguntaids[19] = 5007


//  Id pregunta: 5719 Año de creación de pregunta: 2007
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta sobre el recurso Quorum de un cluster?";
 choices[20]= new Array();
 choices[20][0] = "contiene datos del firmware del hardware del fabricante de los servidores que forman el cluster.";
 choices[20][1] = "contiene los &Uacute;ltimos datos accedidos par el usuario.";
 choices[20][2] = "ofrece una configuraci&oacute;n consistente del cluster.";
 choices[20][3] = "no existe el recurso Quorum en un cluster.";
 answers[20] = 2;
 units[20] = ['49'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 5719. ";
 preguntaids[20] = 5719


//  Id pregunta: 442 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n se indica en la Ley 59/2003, de firma electr&oacute;nica, en cuanto al r&eacute;gimen de prestaci&oacute;n de servicios de certificaci&oacute;n:";
 choices[21]= new Array();
 choices[21][0] = "Est&aacute; sujeta a autorizaci&oacute;n previa.";
 choices[21][1] = "Los &oacute;rganos de defensa de la competencia velar&aacute;n por el mantenimiento de condiciones de competencia efectiva en la prestaci&oacute;n de servicios de certificaci&oacute;n al p&uacute;blico mediante el ejercicio de las funciones que tengan legalmente atribuidas.";
 choices[21][2] = "No podr&aacute;n ser proporcionados por las Administraciones p&uacute;blicas, sus organismos p&uacute;blicos o las entidades dependientes o vinculadas a las mismas por motivo de los principios de objetividad, transparencia y no discriminaci&oacute;n.";
 choices[21][3] = "No se realizar&aacute; en r&eacute;gimen de libre competencia.";
 answers[21] = 1;
 units[21] = ['19'];
 blocks[21] = ['A4'];
 comments[21] = "Id Pregunta: 442. AGE A2 2015";
 preguntaids[21] = 442


//  Id pregunta: 8278 Año de creación de pregunta: 2011
 questions[22]= "23)  Una se&ntilde;al en UNIX es un mecanismo de comunicaci&oacute;n:";
 choices[22]= new Array();
 choices[22][0] = "Bidireccional";
 choices[22][1] = "S&iacute;ncrono.";
 choices[22][2] = "Entre procesos.";
 choices[22][3] = "En el fichero de cabecera &lt;stdio.h&gt; est&aacute;n definidas todas las se&ntilde;ales, n&uacute;mero y nombre.";
 answers[22] = 2;
 units[22] = ['57'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 8278. Examen TIC A2 2010 interna";
 preguntaids[22] = 8278


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[23]= "24)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[23]= new Array();
 choices[23][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[23][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[23][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[23][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[23] = 1;
 units[23] = ['19'];
 blocks[23] = ['A4'];
 comments[23] = "Id Pregunta: 480. Sociedad de la informaci&oacute;n";
 preguntaids[23] = 480


//  Id pregunta: 2526 Año de creación de pregunta: 2004
 questions[24]= "25)  De las estructuras de archivos propuestas a continuaci&oacute;n, indique cu&aacute;l implica que un Sistema Operativo tenga la m&aacute;xima flexibilidad: &quot;Aquella estructura en la que el archivo es un/una: &quot;";
 choices[24]= new Array();
 choices[24][0] = "Secuencia de registros de longitud fija";
 choices[24][1] = "Secuencia de bytes de tama&ntilde;o variable";
 choices[24][2] = "&Aacute;rbol de registros, todos ellos de igual longitud";
 choices[24][3] = "&Aacute;rbol de registros, que pueden ser de distinta longitud";
 answers[24] = 1;
 units[24] = ['56'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 2526. Examen TIC MAP B 2004";
 preguntaids[24] = 2526


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[25]= "26)  La presidencia del Consejo se ejerce de forma rotatoria cada:";
 choices[25]= new Array();
 choices[25][0] = "4 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[25][1] = "6 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[25][2] = "4 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 choices[25][3] = "6 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 answers[25] = 1;
 units[25] = ['5'];
 blocks[25] = ['A1'];
 comments[25] = "Id Pregunta: 159. Uni&oacute;n Europea";
 preguntaids[25] = 159


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[26]= "27)  No es una causa de inadmisi&oacute;n de un recurso administrativo:";
 choices[26]= new Array();
 choices[26][0] = "Carecer de legitimaci&oacute;n el recurrente";
 choices[26][1] = "Tratarse de un acto no susceptible de recurso";
 choices[26][2] = "La ausencia de calificaci&oacute;n del recurso por parte del recurrente";
 choices[26][3] = "Todas ellas son causas de inadmisi&oacute;n de un recurso administrativo";
 answers[26] = 2;
 units[26] = ['8'];
 blocks[26] = ['A2'];
 comments[26] = "Id Pregunta: 257. Ley 39/2015";
 preguntaids[26] = 257


//  Id pregunta: 10649 Año de creación de pregunta: 2015
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la Ley General de Telecomunicaciones 9/2014 es correcta?:";
 choices[27]= new Array();
 choices[27][0] = "La Comisi&oacute;n Nacional de los Mercados y de la Competencia suministrar&aacute; a las empresas que hagan gu&iacute;as de abonados los datos que faciliten los operadores.";
 choices[27][1] = "Los usuarios finales tienen derecho a cambiar de operador en el plazo de 1 d&iacute;a laborable.";
 choices[27][2] = "La llamada a los servicios de emergencias tienen un coste definido por el operador.";
 choices[27][3] = "Ninguna de las anteriores.";
 answers[27] = 1;
 units[27] = ['121'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 10649. ";
 preguntaids[27] = 10649


//  Id pregunta: 9051 Año de creación de pregunta: 2014
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes es un modelo de mejora de calidad del SW?";
 choices[28]= new Array();
 choices[28][0] = "BOOTSTRAP";
 choices[28][1] = "TRILLIUM";
 choices[28][2] = "MOSCA";
 choices[28][3] = "Todos los anterires";
 answers[28] = 3;
 units[28] = ['92'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 9051. MOSCA (Modelo Sist&eacute;mico de Calidad), BOOTSTRAP (Comisi&oacute;n Europea), TRILLIUM (Bell Canad&aacute;)";
 preguntaids[28] = 9051


//  Id pregunta: 7629 Año de creación de pregunta: 2010
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes NO es un modo de operaci&oacute;n del algoritmo de cifrado DES (Data Encryption Standard)?";
 choices[29]= new Array();
 choices[29][0] = "Modo ECB (Electronic Code Book Mode).";
 choices[29][1] = "Modo CFB (Cipher Feedback Mode).";
 choices[29][2] = "Modo BBM (Bit Block Mode).";
 choices[29][3] = "Modo CBC (Cipher Block Chaining Mode).";
 answers[29] = 2;
 units[29] = ['76'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 7629. Map 2006";
 preguntaids[29] = 7629


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[30]= new Array();
 choices[30][0] = "En t&iacute;tulos-valores.";
 choices[30][1] = "Las respuestas a) y b) son correctas.";
 choices[30][2] = "Las respuestas a) y b) no son correctas.";
 choices[30][3] = "En cuenta.";
 answers[30] = 1;
 units[30] = ['11'];
 blocks[30] = ['A2'];
 comments[30] = "Id Pregunta: 316. Presupuestos generales";
 preguntaids[30] = 316


//  Id pregunta: 5917 Año de creación de pregunta: 2007
 questions[31]= "32)  &iquest;En cu&aacute;l de los siguientes aspectos NO resulta de aplicaci&oacute;n la Directiva 2000/31/CE, de 8 de junio de 2000,relativa a determinados aspectos jur&iacute;dicos de los servicios de la sociedad de la informaci&oacute;n, en particular elcomercio electr&oacute;nico en el mercado interior?";
 choices[31]= new Array();
 choices[31][0] = "Las actividades de juegos de azar que impliquen apuestas de valor monetario, incluidas loter&iacute;as y apuestas";
 choices[31][1] = "Las comunicaciones comerciales";
 choices[31][2] = "Los acuerdos extrajudiciales para la prestaci&oacute;n de servicios";
 choices[31][3] = "Los contratos por v&iacute;a electr&oacute;nica";
 answers[31] = 0;
 units[31] = ['19'];
 blocks[31] = ['A4'];
 comments[31] = "Id Pregunta: 5917. Directiva 2000/31/CE, art&iacute;culo 1.5.d)";
 preguntaids[31] = 5917


//  Id pregunta: 3598 Año de creación de pregunta: 2004
 questions[32]= "33)  No es una caracter&iacute;stica de la orientaci&oacute;n a objetos";
 choices[32]= new Array();
 choices[32][0] = "la programaci&oacute;n funcional";
 choices[32][1] = "El acoplamiento d&eacute;bil";
 choices[32][2] = "La ocultaci&oacute;n de la implementacion";
 choices[32][3] = "el polimorfismo";
 answers[32] = 0;
 units[32] = ['85'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 3598. ";
 preguntaids[32] = 3598


//  Id pregunta: 210 Año de creación de pregunta: 2016
 questions[33]= "34)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[33]= new Array();
 choices[33][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[33][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[33][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[33][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[33] = 1;
 units[33] = ['7'];
 blocks[33] = ['A2'];
 comments[33] = "Id Pregunta: 210. Ley 39/2015";
 preguntaids[33] = 210


//  Id pregunta: 2797 Año de creación de pregunta: 2002
 questions[34]= "35)  Elija el tipo de relaciones entre registros que el modelo en red es incapaz de mostrar:";
 choices[34]= new Array();
 choices[34][0] = "1 a 1";
 choices[34][1] = "1 a N";
 choices[34][2] = "N a M";
 choices[34][3] = "Es capaz de mostrar todas";
 answers[34] = 3;
 units[34] = ['60'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 2797. ";
 preguntaids[34] = 2797


//  Id pregunta: 6412 Año de creación de pregunta: 2003
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no corresponde a la tecnolog&iacute;a de procedimiento anal&iacute;tico en l&iacute;nea (OLAP)?";
 choices[35]= new Array();
 choices[35][0] = "Proporciona respuestas r&aacute;pidas a consultas anal&iacute;ticas complejas e iterativas.";
 choices[35][1] = "Utiliza modelos de datos multidimensionales.";
 choices[35][2] = "Recuperan un dato individual con un alto rendimiento.";
 choices[35][3] = "Ofrece ventajas sobre las BBDD Relacionales a la hora de trabajar sobre datos agregados.";
 answers[35] = 2;
 units[35] = ['72'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 6412. ";
 preguntaids[35] = 6412


//  Id pregunta: 6602 Año de creación de pregunta: 2009
 questions[36]= "37)  En el &aacute;mbito de la Uni&oacute;n Europea, &iquest;tiene validez jur&iacute;dica la firma electr&oacute;nica?";
 choices[36]= new Array();
 choices[36][0] = "Solamente si es firma reconocida";
 choices[36][1] = "Solamente si es firma cualificada";
 choices[36][2] = "Siempre ser&aacute; admisible como prueba en el procedimiento judicial";
 choices[36][3] = "Ninguna de las anteriores es correcta";
 answers[36] = 2;
 units[36] = ['77'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 6602. Directiva 1999/93/CE y Reglamento 910/2014, consideraci&oacute;n 61)";
 preguntaids[36] = 6602


//  Id pregunta: 486 Año de creación de pregunta: 2016
 questions[37]= "38)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[37]= new Array();
 choices[37][0] = "Interoperabilidad";
 choices[37][1] = "Integridad";
 choices[37][2] = "Capital humano";
 choices[37][3] = "Trazabilidad";
 answers[37] = 2;
 units[37] = ['19'];
 blocks[37] = ['A4'];
 comments[37] = "Id Pregunta: 486. Sociedad de la informaci&oacute;n";
 preguntaids[37] = 486


//  Id pregunta: 271 Año de creación de pregunta: 2016
 questions[38]= "39)  En las Administraciones P&uacute;blicas...";
 choices[38]= new Array();
 choices[38][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[38][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[38][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[38][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[38] = 0;
 units[38] = ['11'];
 blocks[38] = ['A2'];
 comments[38] = "Id Pregunta: 271. Presupuestos generales";
 preguntaids[38] = 271


//  Id pregunta: 4847 Año de creación de pregunta: 2002
 questions[39]= "40)  En un firewall de paquetes IP, los paquetes entrantes:";
 choices[39]= new Array();
 choices[39][0] = "Primero se filtran, luego se hace el NAT";
 choices[39][1] = "Primero se hace NAT y luego se filtran";
 choices[39][2] = "Es igual que para los paquetes salientes";
 choices[39][3] = "Depende de la interfaz";
 answers[39] = 1;
 units[39] = ['119'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 4847. ";
 preguntaids[39] = 4847


//  Id pregunta: 1023 Año de creación de pregunta: 2016
 questions[40]= "41)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[40]= new Array();
 choices[40][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[40][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[40][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[40][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[40] = 0;
 units[40] = ['4', '7', '8', '9'];
 blocks[40] = ['A1', 'A2'];
 comments[40] = "Id Pregunta: 1023. Ley 40/2015";
 preguntaids[40] = 1023


//  Id pregunta: 5889 Año de creación de pregunta: 2007
 questions[41]= "42)  Como parte de la legislaci&oacute;n y normativa espa&ntilde;ola para el impulso de la administraci&oacute;n electr&oacute;nica se incluye:";
 choices[41]= new Array();
 choices[41][0] = "El Real Decreto 522/2006 de Supresi&oacute;n de Fotocopias de DNI";
 choices[41][1] = "El Real Decreto 523/2006 de Supresi&oacute;n de Certificados de empadronamiento";
 choices[41][2] = "El Real Decreto 1553/2005 que regula el DNI electr&oacute;nico";
 choices[41][3] = "Todas las anteriores son ciertas";
 answers[41] = 3;
 units[41] = ['19'];
 blocks[41] = ['A4'];
 comments[41] = "Id Pregunta: 5889. ";
 preguntaids[41] = 5889


//  Id pregunta: 1220 Año de creación de pregunta: 2016
 questions[42]= "43)  En el &aacute;mbito de la criptograf&iacute;a asim&eacute;trica, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[42]= new Array();
 choices[42][0] = "La clave p&uacute;blica sirve para firmar los documentos, antes de enviarlos.";
 choices[42][1] = "La clave privada sirve para cifrar la clave p&uacute;blica antes de firmar con esta &uacute;ltima un documento.";
 choices[42][2] = "La clave privada se ha de generar aleatoriamente a partir de la clave p&uacute;blica cada vez que se firma un documento.";
 choices[42][3] = "La clave p&uacute;blica sirve para comprobar la firma digital de un documento firmado.";
 answers[42] = 3;
 units[42] = ['76'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 1220. ";
 preguntaids[42] = 1220


//  Id pregunta: 2453 Año de creación de pregunta: 2006
 questions[43]= "44)  &iquest;Cu&aacute;les de los siguientes ficheros de datos personales se rigen por su legislaci&oacute;n espec&iacute;fica y por lo especialmente previsto por la LOPD?";
 choices[43]= new Array();
 choices[43][0] = "Los derivados del Registro Civil";
 choices[43][1] = "Los ficheros establecidos para la investigaci&oacute;n del terrorismo y de formas graves de la delincuencia organizada";
 choices[43][2] = "Los derivados de im&aacute;genes y sonidos obtenidos mediante la utilizaci&oacute;n de videoc&aacute;maras";
 choices[43][3] = "Los ficheros de las Grandes Compa&ntilde;&iacute;as de Seguros, cuando lo comuniquen previamente a la Agencia de Protecci&oacute;n de Datos";
 answers[43] = 0;
 units[43] = ['35'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 2453. ";
 preguntaids[43] = 2453


//  Id pregunta: 996 Año de creación de pregunta: 2016
 questions[44]= "45)  De acuerdo al articulo 56 de la ley 40/2015, las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[44]= new Array();
 choices[44][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[44][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[44][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[44][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[44] = 0;
 units[44] = ['4', '7', '8', '9'];
 blocks[44] = ['A1', 'A2'];
 comments[44] = "Id Pregunta: 996. Ley 40/2015";
 preguntaids[44] = 996


//  Id pregunta: 10694 Año de creación de pregunta: 2015
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes NO es un Comit&eacute; creado en el seno de la International Standards Organization (ISO)?";
 choices[45]= new Array();
 choices[45][0] = "DEVCO, Comit&eacute; de Desarrollo";
 choices[45][1] = "COPOLCO, Comit&eacute; de pol&iacute;ticas en materia de consumo";
 choices[45][2] = "QUALCO, Comit&eacute; de calidad";
 choices[45][3] = "CASCO, Comit&eacute; de evaluaci&oacute;n de la conformidad";
 answers[45] = 2;
 units[45] = ['48'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 10694. ";
 preguntaids[45] = 10694


//  Id pregunta: 8490 Año de creación de pregunta: 2011
 questions[46]= "47)  &iquest;A qu&eacute; autoridad nacional de regulaci&oacute;n de las recogidas en la Ley 9/2014,  de 9 de mayo, General de Telecomunicaciones, puede reclamar un usuario final de servicios de comunicaciones en caso de disputa con su operador?";
 choices[46]= new Array();
 choices[46][0] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n.";
 choices[46][1] = "Ministerio de Energia, Turismo y Agenda Digital";
 choices[46][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[46][3] = "Ministerio de Econom&iacute;a, Industria y Competitividad";
 answers[46] = 1;
 units[46] = ['121'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 8490. Teleco Ayto. Madrid 2010";
 preguntaids[46] = 8490


//  Id pregunta: 10510 Año de creación de pregunta: 2015
 questions[47]= "48)  Se&ntilde;ale de entre las siguientes, la opci&oacute;n incorrecta en cuanto a las caracter&iacute;sticas del principios del modelado orientado a objetos";
 choices[47]= new Array();
 choices[47][0] = "Polimorfismo, encapsulaci&oacute;n y herencia";
 choices[47][1] = "Reusabilidad, modulaci&oacute;n y herencia";
 choices[47][2] = "Herencia, polimorfismo";
 choices[47][3] = "Reusabilidad, abstracci&oacute;n y herencia";
 answers[47] = 1;
 units[47] = ['85'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 10510. ";
 preguntaids[47] = 10510


//  Id pregunta: 3559 Año de creación de pregunta: 2004
 questions[48]= "49)  En Programaci&oacute;n orientada a objetos, las relaciones de agregaci&oacute;n entre objetos son:";
 choices[48]= new Array();
 choices[48][0] = "Maneras de construir clases u objetos en t&eacute;rminos de otras clases u objetos.";
 choices[48][1] = "La forma de definir una clase u objeto como extensi&oacute;n de otra clase u objeto.";
 choices[48][2] = "Mecanismos para sobrecargar los m&eacute;todos de accesos a los objetos.";
 choices[48][3] = "S&oacute;lo posibles entre objetos monol&iacute;ticos.";
 answers[48] = 0;
 units[48] = ['85', '89'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 3559. TIC MAP B 2004";
 preguntaids[48] = 3559


//  Id pregunta: 3388 Año de creación de pregunta: 2006
 questions[49]= "50)  &iquest;Qu&eacute; es el Proyecto Mono?";
 choices[49]= new Array();
 choices[49][0] = "Iniciativa para portar el entorno .Net a Linux";
 choices[49][1] = "Completa enciclopedia de animales creada por Microsoft";
 choices[49][2] = "Herramienta de Software Libre para la educaci&oacute;n de los ni&ntilde;os en las escuelas";
 choices[49][3] = "Programa de dibujo";
 answers[49] = 0;
 units[49] = ['63'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 3388. ";
 preguntaids[49] = 3388


//  Id pregunta: 4717 Año de creación de pregunta: 2002
 questions[50]= "51)  HDLC es un protocolo:";
 choices[50]= new Array();
 choices[50][0] = "De enlace, orientado a car&aacute;cter";
 choices[50][1] = "De enlace orientado a bit";
 choices[50][2] = "F&iacute;sico, en serie";
 choices[50][3] = "F&iacute;sico, en paralelo";
 answers[50] = 1;
 units[50] = ['109'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 4717. ";
 preguntaids[50] = 4717


//  Id pregunta: 2514 Año de creación de pregunta: 2004
 questions[51]= "52)  Las funciones de inspecci&oacute;n y control del cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, m&aacute;s conocida como LSSI, est&aacute;n atribuidas a:";
 choices[51]= new Array();
 choices[51][0] = "Las Fuerzas y Cuerpos de seguridad del Estado";
 choices[51][1] = "La Inspecci&oacute;n Financiera y Tributaria";
 choices[51][2] = "La Asociaci&oacute;n de Usuarios de Internet";
 choices[51][3] = "El Ministerio de Energia, Turismo y Agenda Digital.";
 answers[51] = 3;
 units[51] = ['19'];
 blocks[51] = ['A4'];
 comments[51] = "Id Pregunta: 2514. Examen TIC MAP B 2004";
 preguntaids[51] = 2514


//  Id pregunta: 890 Año de creación de pregunta: 2016
 questions[52]= "53)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[52]= new Array();
 choices[52][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[52][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[52][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[52][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[52] = 2;
 units[52] = ['108'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 890. Junta de Extremadura A1 2015";
 preguntaids[52] = 890


//  Id pregunta: 5312 Año de creación de pregunta: 2006
 questions[53]= "54)  Un protocolo usado espec&iacute;ficamente para controlar el backup de datos entre el almacenamiento primario y el centro de respaldo es";
 choices[53]= new Array();
 choices[53][0] = "Common Management Information Protocol (CMIP)";
 choices[53][1] = "Network Data Management Protocol (NDMP)";
 choices[53][2] = "Point-to-Point Protocol (PPP)";
 choices[53][3] = "Bootstrap Protocol (BOOTP)";
 answers[53] = 1;
 units[53] = ['45'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 5312. ";
 preguntaids[53] = 5312


//  Id pregunta: 9438 Año de creación de pregunta: 2014
 questions[54]= "55)  La red espa&ntilde;ola para investigaci&oacute;n y educaci&oacute;n es:";
 choices[54]= new Array();
 choices[54][0] = "GEANT";
 choices[54][1] = "IRIS";
 choices[54][2] = "TESTA";
 choices[54][3] = "SARA";
 answers[54] = 1;
 units[54] = ['114'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 9438. ";
 preguntaids[54] = 9438


//  Id pregunta: 7686 Año de creación de pregunta: 2010
 questions[55]= "56)  Seg&uacute;n la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, &iquest;cu&aacute;l de las siguientes NO es causa de extinci&oacute;n de la vigencia de un certificado?";
 choices[55]= new Array();
 choices[55][0] = "Expiraci&oacute;n del per&iacute;odo de validez que figura en el certificado.";
 choices[55][1] = "Revocaci&oacute;n formulada por el firmante, la persona f&iacute;sica o jur&iacute;dica representada por este, un tercero autorizado o la persona f&iacute;sica solicitante de un certificado electr&oacute;nico de persona jur&iacute;dica.";
 choices[55][2] = "Resoluci&oacute;n judicial o administrativa que lo ordene.";
 choices[55][3] = "Transferencia de la gesti&oacute;n de los certificados electr&oacute;nicos expedidos por el prestador a otro prestador de servicios de certificaci&oacute;n, cuando el firmante haya dado su consentimiento expreso.";
 answers[55] = 3;
 units[55] = ['77'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 7686. Map 2007";
 preguntaids[55] = 7686


//  Id pregunta: 1009 Año de creación de pregunta: 2016
 questions[56]= "57)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[56]= new Array();
 choices[56][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[56][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[56][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[56][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[56] = 2;
 units[56] = ['4', '7', '8', '9'];
 blocks[56] = ['A1', 'A2'];
 comments[56] = "Id Pregunta: 1009. Ley 40/2015";
 preguntaids[56] = 1009


//  Id pregunta: 10375 Año de creación de pregunta: 2015
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas se a&ntilde;ade en la Versi&oacute;n 3 del protocolo SNMP?";
 choices[57]= new Array();
 choices[57][0] = "Permite a los agentes informar de forma espontanea al gestor de un evento";
 choices[57][1] = "Enviar mensajes no solicitados al gestor";
 choices[57][2] = "Mecanismos de autentificaci&oacute;n, privacidad y control de accesos verdaderamente s&oacute;lidos.";
 choices[57][3] = "Permite que el agente informe espont&aacute;neamente de excepciones y errores en el protocolo";
 answers[57] = 2;
 units[57] = ['114'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 10375. ";
 preguntaids[57] = 10375


//  Id pregunta: 7929 Año de creación de pregunta: 2011
 questions[58]= "59)  &iquest;C&oacute;mo se denomina el informe elaborado por el Observatorio de Administraci&oacute;n Electr&oacute;nica para analizar de manera espec&iacute;fica, sobre todo cuantitativamente, el sector TIC en la AGE?:";
 choices[58]= new Array();
 choices[58][0] = "Informe PRINCESA.";
 choices[58][1] = "Informe TECNIMAP.";
 choices[58][2] = "Informe IRIA.";
 choices[58][3] = "Informe REINA.";
 answers[58] = 3;
 units[58] = ['19'];
 blocks[58] = ['A4'];
 comments[58] = "Id Pregunta: 7929. Examen TIC A1 2010";
 preguntaids[58] = 7929


//  Id pregunta: 3240 Año de creación de pregunta: 2003
 questions[59]= "60)  &iquest;Qu&eacute; es un &lsquo;trigger&rsquo;?";
 choices[59]= new Array();
 choices[59][0] = "Es un procedimiento asociado a una acci&oacute;n (inserci&oacute;n, borrado o modificaci&oacute;n) y a una tabla que se ejecuta cada vez que se intenta realizar una determinada operaci&oacute;n sobre dicha tabla.";
 choices[59][1] = "Es un puntero interno al SGBD que apunta a las filas de las tablas sobre la que est&aacute; definido y sirve para acelerar el acceso a los datos de la base.";
 choices[59][2] = "Es un archivo privado del SGBD en el que se apuntan todas las operaciones que se realizan sobre la base de datos.";
 choices[59][3] = "Es un tipo de distribuci&oacute;n de las filas de una tabla que permite hacer accesos en paralelo a los datos de dicha tabla.";
 answers[59] = 0;
 units[59] = ['61'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 3240. ";
 preguntaids[59] = 3240


//  Id pregunta: 318 Año de creación de pregunta: 2016
 questions[60]= "61)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[60]= new Array();
 choices[60][0] = "El presidente de las Cortes Generales.";
 choices[60][1] = "El Presidente del Gobierno.";
 choices[60][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[60][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[60] = 3;
 units[60] = ['11'];
 blocks[60] = ['A2'];
 comments[60] = "Id Pregunta: 318. Presupuestos generales";
 preguntaids[60] = 318


//  Id pregunta: 8975 Año de creación de pregunta: 2013
 questions[61]= "62)  Las comunicaciones comerciales no solicitadas realizadas a trav&eacute;s de correo electr&oacute;nico o medios de comunicaci&oacute;n electr&oacute;nica equivalentes:";
 choices[61]= new Array();
 choices[61][0] = "Deben incluir al comienzo del mensaje la palabra &laquo;publicidad&raquo;.";
 choices[61][1] = "Deben indicar la persona f&iacute;sica o jur&iacute;dica en nombre de la cual se realizan.";
 choices[61][2] = "Deben incluir claramente las condiciones comerciales o promocionales.";
 choices[61][3] = "Est&aacute;n prohibidas.";
 answers[61] = 3;
 units[61] = ['19'];
 blocks[61] = ['A4'];
 comments[61] = "Id Pregunta: 8975. Examen TIC A1 2011";
 preguntaids[61] = 8975


//  Id pregunta: 990 Año de creación de pregunta: 2016
 questions[62]= "63)  De acuerdo al articulo 55 de la ley 40/2015, tienen la condici&oacute;n de alto cargo los siguientes organos de la organizacion central de la Administracion general del Estado:";
 choices[62]= new Array();
 choices[62][0] = "los &oacute;rganos superiores";
 choices[62][1] = "los &oacute;rganos superiores y directivos";
 choices[62][2] = "los &oacute;rganos superiores y directivos, excepto los Subdirectores generales y asimilados";
 choices[62][3] = "los &oacute;rganos superiores y directivos, excepto los Secretarios generales y asimilados";
 answers[62] = 2;
 units[62] = ['4', '7', '8', '9'];
 blocks[62] = ['A1', 'A2'];
 comments[62] = "Id Pregunta: 990. Ley 40/2015";
 preguntaids[62] = 990


//  Id pregunta: 5021 Año de creación de pregunta: 2002
 questions[63]= "64)  Cu&aacute;ntos octetos usa IPv6 en el direccionamiento, considerando que IPv4 usa 4 octetos:";
 choices[63]= new Array();
 choices[63][0] = "6";
 choices[63][1] = "8";
 choices[63][2] = "14";
 choices[63][3] = "16";
 answers[63] = 3;
 units[63] = ['109'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 5021. ";
 preguntaids[63] = 5021


//  Id pregunta: 5640 Año de creación de pregunta: 2007
 questions[64]= "65)  &iquest;Que son el &quot;modelo cebolla&quot; y el &quot;modelo tostadora&quot;?";
 choices[64]= new Array();
 choices[64][0] = "Modelos de ciclo de vida de sistemas de informaci&oacute;n.";
 choices[64][1] = "Modelos de integraci&oacute;n de herramientas CASE.";
 choices[64][2] = "Modelos de diagrama de flujo de datos.";
 choices[64][3] = "Modelos de objetos para sistemas orientados al objeto.";
 answers[64] = 1;
 units[64] = ['86'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 5640. ";
 preguntaids[64] = 5640


//  Id pregunta: 7874 Año de creación de pregunta: 2011
 questions[65]= "66)  En una valoraci&oacute;n de tres ofertas inform&aacute;ticas, nos encontramos que en un criterio a maximizar, las puntuaciones son : 5, 7 y 10. &iquest;Cu&aacute;les ser&iacute;an sus puntuaciones normalizadas por el m&eacute;todo de fracci&oacute;n del ideal?:";
 choices[65]= new Array();
 choices[65][0] = "0,5 ; 0,7 ; 1";
 choices[65][1] = "0,227 ; 0,318 ; 0,454";
 choices[65][2] = "0; 0,4; 1";
 choices[65][3] = "1 ; 1,4 ; 2";
 answers[65] = 2;
 units[65] = ['38'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 7874. Examen TIC A1 2010";
 preguntaids[65] = 7874


//  Id pregunta: 8976 Año de creación de pregunta: 2013
 questions[66]= "67)  En el contexto de la firma electr&oacute;nica y su regulaci&oacute;n en Espa&ntilde;a se&ntilde;ale la afirmaci&oacute;n FALSA.";
 choices[66]= new Array();
 choices[66][0] = "Los funcionarios al servicio de las administraciones p&uacute;blicas espa&ntilde;olas pueden firmar en el ejercicio de su cargo utilizando su DNI electr&oacute;nico.";
 choices[66][1] = "Los c&oacute;digos de verificaci&oacute;n segura (CSV) junto con los sellos de &oacute;rgano sirven para dotar de firma electr&oacute;nica reconocida a la actuaci&oacute;n administrativa automatizada.";
 choices[66][2] = "Un dispositivo seguro de creaci&oacute;n de firma debe garantizar que los datos usados para generar la firma pueden producirse s&oacute;lo una vez.";
 choices[66][3] = "Un certificado electr&oacute;nico reconocido ha de incluir la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que lo expide.";
 answers[66] = 1;
 units[66] = ['19'];
 blocks[66] = ['A4'];
 comments[66] = "Id Pregunta: 8976. Examen TIC A1 2011";
 preguntaids[66] = 8976


//  Id pregunta: 7487 Año de creación de pregunta: 2010
 questions[67]= "68)  &iquest;C&oacute;mo se llama la norma europea que recoge las especificaciones para la gesti&oacute;n de documentos electr&oacute;nicos de archivo?";
 choices[67]= new Array();
 choices[67][0] = "MoReq.";
 choices[67][1] = "IDABC.";
 choices[67][2] = "ISAD(G).";
 choices[67][3] = "EDMS.";
 answers[67] = 0;
 units[67] = ['99'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 7487. Map 2005";
 preguntaids[67] = 7487


//  Id pregunta: 1042 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[68]= new Array();
 choices[68][0] = "Conferencia de Presidentes.";
 choices[68][1] = "Convenios de colaboraci&oacute;n.";
 choices[68][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[68][3] = "Conferencias Sectoriales.";
 answers[68] = 0;
 units[68] = ['4', '7', '8', '9'];
 blocks[68] = ['A1', 'A2'];
 comments[68] = "Id Pregunta: 1042. Ley 40/2015";
 preguntaids[68] = 1042


//  Id pregunta: 350 Año de creación de pregunta: 2016
 questions[69]= "70)  La estructura econ&oacute;mica espa&ntilde;ola es aproximadamente la siguiente:";
 choices[69]= new Array();
 choices[69][0] = "Sector primario (5-10%) Sector industrial(25-30%) Sector servicios(60-65%)";
 choices[69][1] = "Sector primario (3-5%) Sector industrial(15-20%) Sector servicios(65-75%)";
 choices[69][2] = "Sector primario (10-15%) Sector industrial(15-20%) Sector servicios(50-60%)";
 choices[69][3] = "Ninguna de las anteriores";
 answers[69] = 1;
 units[69] = ['12'];
 blocks[69] = ['A3'];
 comments[69] = "Id Pregunta: 350. Modelo econ&oacute;mico";
 preguntaids[69] = 350


//  Id pregunta: 9661 Año de creación de pregunta: 2014
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes aplicaciones, incluida en KOffice, se emplea para generaci&oacute;n de informes?";
 choices[70]= new Array();
 choices[70][0] = "Kexi.";
 choices[70][1] = "Kivio.";
 choices[70][2] = "Konqueror.";
 choices[70][3] = "Kugar.";
 answers[70] = 3;
 units[70] = ['57'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 9661. Examen TIC A1 2013";
 preguntaids[70] = 9661


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[71]= "72)  En relaci&oacute;n al Portal de Transparencia de la AGE:";
 choices[71]= new Array();
 choices[71][0] = "La informaci&oacute;n m&aacute;s relevante para el ciudadano y de frecuente acceso estar&aacute; disponible en el Portal de Transparencia, no pudiendo accederse a informaci&oacute;n que no se encuentre ya publicada.";
 choices[71][1] = "El ejercicio del Derecho de Acceso abre con la administraci&oacute;n un procedimiento administrativo que exige la identificaci&oacute;n del solicitante.";
 choices[71][2] = "En el Portal de Transparencia de la AGE s&oacute;lo se puede acceder a informaci&oacute;n de tipo institucional.";
 choices[71][3] = "El CTBG es el responsable del Portal de Transparencia.";
 answers[71] = 1;
 units[71] = ['22'];
 blocks[71] = ['A4'];
 comments[71] = "Id Pregunta: 512. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[71] = 512


//  Id pregunta: 5699 Año de creación de pregunta: 2007
 questions[72]= "73)  Indique cual de las siguientes afirmaciones es falsa:";
 choices[72]= new Array();
 choices[72][0] = "El sistema GPRS permite el env&iacute;o de paquetes de datos sobre la red GSM.";
 choices[72][1] = "El sistema GPRS utiliza los mismos recursos de la interfaz radio del sistema GSM.";
 choices[72][2] = "En una misma celda no pueden coexistir canales GPRS y GSM.";
 choices[72][3] = "Un canal GPRS solo se asigna al usuario cuando se transmiten o reciben paquetes, mientras que un canal GSM se asigna de forma permanente al usuario durante toda la llamada.";
 answers[72] = 2;
 units[72] = ['117'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 5699. ";
 preguntaids[72] = 5699


//  Id pregunta: 10974 Año de creación de pregunta: 2015
 questions[73]= "74)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una gu&iacute;a CCN-STIC:";
 choices[73]= new Array();
 choices[73][0] = "CCN-STIC-804 - Medidas de implantaci&oacute;n del Esquema Nacional de Seguridad";
 choices[73][1] = "CCN-STIC-820 - Protecci&oacute;n Contra Denegaci&oacute;n de Servicio";
 choices[73][2] = "CCN-STIC-823 - Seguridad en entornos Cloud";
 choices[73][3] = "CCN-STIC-830 - Medidas de seguridad en el puesto de trabajo (entorno ofim&aacute;tico).";
 answers[73] = 3;
 units[73] = ['46'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 10974. ";
 preguntaids[73] = 10974


//  Id pregunta: 4634 Año de creación de pregunta: 2002
 questions[74]= "75)  &iquest;Qu&eacute; topolog&iacute;a tiene una red ethernet cableada con 10 Base T?:";
 choices[74]= new Array();
 choices[74][0] = "Bus";
 choices[74][1] = "Estrella";
 choices[74][2] = "Anillo";
 choices[74][3] = "Doble bus";
 answers[74] = 1;
 units[74] = ['112'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 4634. ";
 preguntaids[74] = 4634


