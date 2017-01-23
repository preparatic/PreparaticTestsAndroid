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
//  Id pregunta: 5564 Año de creación de pregunta: 2007
 questions[0]= "1)  La gesti&oacute;n proactiva de un sistema permite";
 choices[0]= new Array();
 choices[0][0] = "Solucionar todas las posibles incidencias.";
 choices[0][1] = "Detectar los problemas con anterioridad a la percepci&oacute;n de los mismos por parte del usuario.";
 choices[0][2] = "Corregir los problemas antes de que estos se produzcan.";
 choices[0][3] = "Mantener a todos los usuarios informados del estado de los sistemas.";
 answers[0] = 1;
 units[0] = ['28'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 5564. ";
 preguntaids[0] = 5564


//  Id pregunta: 2513 Año de creación de pregunta: 2004
 questions[1]= "2)  De acuerdo con lo establecido en la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, m&aacute;s conocida como LSSI, los contratos celebrados por v&iacute;a electr&oacute;nica:";
 choices[1]= new Array();
 choices[1][0] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que act&uacute;e un tercero como testigo";
 choices[1][1] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que a posteriori se ratifiquen ante notario o registrador";
 choices[1][2] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que en los mismos intervenga un abogado o procurador";
 choices[1][3] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que haya consentimiento y el resto de requisitos necesarios para su validez como cualquier otro contrato";
 answers[1] = 3;
 units[1] = ['19'];
 blocks[1] = ['A4'];
 comments[1] = "Id Pregunta: 2513. Examen TIC MAP B 2004";
 preguntaids[1] = 2513


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[2]= new Array();
 choices[2][0] = "Dos Cap&iacute;tulos.";
 choices[2][1] = "Tres Cap&iacute;tulos.";
 choices[2][2] = "Un Cap&iacute;tulo.";
 choices[2][3] = "Cuatro Cap&iacute;tulos.";
 answers[2] = 1;
 units[2] = ['1'];
 blocks[2] = ['A1'];
 comments[2] = "Id Pregunta: 49. Constituci&oacute;n de 1978";
 preguntaids[2] = 49


//  Id pregunta: 3821 Año de creación de pregunta: 2002
 questions[3]= "4)  En la realizaci&oacute;n de DFDs:";
 choices[3]= new Array();
 choices[3][0] = "cada nivel expresa un mayor detalle respecto al anterior, siendo t&iacute;picos los de contexto (nivel 0), subsistemas (nivel 1), funciones (nivel 2), subfunciones (nivel 3) y los procesos primitivos";
 choices[3][1] = "Todo dato que entra a un proceso ha de entrar en el DFD hijo, y todo dato que sale de un DFD ha de salir del DFD hijo";
 choices[3][2] = "los almacenes aparecen por primera vez en el primer DFD en el que son compartidos por varios procesos, y a partir de este nivel aparecen siempre";
 choices[3][3] = "Todas las respuestas anteriores son correctas";
 answers[3] = 3;
 units[3] = ['85', '86'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 3821. ";
 preguntaids[3] = 3821


//  Id pregunta: 8551 Año de creación de pregunta: 2013
 questions[4]= "5)  En relaci&oacute;n a la elaboraci&oacute;n de un Plan de Sistemas de Informaci&oacute;n:";
 choices[4]= new Array();
 choices[4][0] = "El Comit&eacute; de Direcci&oacute;n realiza la programaci&oacute;n, define la administraci&oacute;n, los procedimientos y la organizaci&oacute;n del trabajo.";
 choices[4][1] = "El equipo de proyecto es la instancia que establece las orientaciones del desarrollo con los controles de su realizaci&oacute;n, la validaci&oacute;n de los trabajos efectuados, y la toma de decisiones al final de cada fase del estudio.";
 choices[4][2] = "Es tarea del Comit&eacute; de Direcci&oacute;n asegurarse de la traslaci&oacute;n de la pol&iacute;tica estrat&eacute;gica de la organizaci&oacute;n al plan estrat&eacute;gico de Sistemas de Informaci&oacute;n y las Comunicaciones";
 choices[4][3] = "Todas las anteriores";
 answers[4] = 2;
 units[4] = ['91'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 8551. ";
 preguntaids[4] = 8551


//  Id pregunta: 3102 Año de creación de pregunta: 2002
 questions[5]= "6)  Una microinstrucci&oacute;n:";
 choices[5]= new Array();
 choices[5][0] = "Es una funci&oacute;n que acepta pocos par&aacute;metros en un lenguaje de programaci&oacute;n convencional";
 choices[5][1] = "En unidades de control microprogramadas, cada intrucci&oacute;n es un microprograma formado por microinstrucciones";
 choices[5][2] = "Son comandos del sistema operativo que tienen peque&ntilde;o tama&ntilde;o y que siempre se encuentran en memoria";
 choices[5][3] = "Todas son falsas";
 answers[5] = 1;
 units[5] = ['52'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 3102. ";
 preguntaids[5] = 3102


//  Id pregunta: 3941 Año de creación de pregunta: 2002
 questions[6]= "7)  No es un tipo de prueba:";
 choices[6]= new Array();
 choices[6][0] = "Pruebas individuales";
 choices[6][1] = "Pruebas unitarias";
 choices[6][2] = "Pruebas de Aceptaci&oacute;n";
 choices[6][3] = "Pruebas de Regresi&oacute;n";
 answers[6] = 0;
 units[6] = ['91'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 3941. ";
 preguntaids[6] = 3941


//  Id pregunta: 5148 Año de creación de pregunta: 2003
 questions[7]= "8)  Para la conservaci&oacute;n de la informaci&oacute;n sobre soporte electr&oacute;nico:";
 choices[7]= new Array();
 choices[7][0] = "Ser&aacute; &uacute;til disponer de un SAI (UPS).";
 choices[7][1] = "Conviene almacenar la configuraci&oacute;n de la red en un fichero contenido en el sistema a proteger.";
 choices[7][2] = "Podemos utilizar cualquier ordenador descatalogado que tengamos a mano.";
 choices[7][3] = "El soporte ha de ser tolerante a fallos.";
 answers[7] = 0;
 units[7] = ['100'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 5148. ";
 preguntaids[7] = 5148


//  Id pregunta: 7093 Año de creación de pregunta: 2010
 questions[8]= "9)  Los interesados en la explotaci&oacute;n de una determinada red o en la prestaci&oacute;n de un determinado servicio de comunicaciones electr&oacute;nicas deber&aacute;n comunicarlo al Registro de Operadores en los t&eacute;rminos que se determinen mediante";
 choices[8]= new Array();
 choices[8][0] = "Real Decreto";
 choices[8][1] = "Resoluci&oacute;n Motivada";
 choices[8][2] = "Orden Ministerial";
 choices[8][3] = "Acuerdo del Consejo de Ministros";
 answers[8] = 0;
 units[8] = ['121'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 7093. Art&iacute;culo 6.2 Ley 32/2003";
 preguntaids[8] = 7093


//  Id pregunta: 8365 Año de creación de pregunta: 2011
 questions[9]= "10)  En el contexto de Almac&eacute;n de datos (Data Warehouse) a los subconjuntos de datos para &aacute;reas especificas se le llama:";
 choices[9]= new Array();
 choices[9][0] = "Metadata.";
 choices[9][1] = "Data Marts.";
 choices[9][2] = "Data Ware.";
 choices[9][3] = "Data Store.";
 answers[9] = 1;
 units[9] = ['72'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 8365. Analista Ayto. Madrid 2010";
 preguntaids[9] = 8365


//  Id pregunta: 8130 Año de creación de pregunta: 2011
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes elementos NO pertenece al Modelo Conceptual de Procesos?";
 choices[10]= new Array();
 choices[10][0] = "El Diccionario de Datos.";
 choices[10][1] = "El Diagrama de Flujo de Datos.";
 choices[10][2] = "Las especificaciones de procesos.";
 choices[10][3] = "El Diagrama Entidad Relaci&oacute;n.";
 answers[10] = 3;
 units[10] = ['91'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 8130. Examen TIC A2 2010 interna";
 preguntaids[10] = 8130


//  Id pregunta: 994 Año de creación de pregunta: 2016
 questions[11]= "12)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en la ley 40/2015, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[11]= new Array();
 choices[11][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[11][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[11][2] = "a y b son correctas";
 choices[11][3] = "a y b son incorrectas";
 answers[11] = 2;
 units[11] = ['4', '7', '8', '9'];
 blocks[11] = ['A1', 'A2'];
 comments[11] = "Id Pregunta: 994. Ley 40/2015";
 preguntaids[11] = 994


//  Id pregunta: 3649 Año de creación de pregunta: 2002
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta sobre el &quot;Upsizing&quot;?:";
 choices[12]= new Array();
 choices[12][0] = "Las aplicaciones se elevan a la gerencia de la organizaci&oacute;n";
 choices[12][1] = "El &quot;upsizing&quot; es lo que queda de un &quot;righsizing&quot; cuando se le hace un &quot;downsizing&quot;";
 choices[12][2] = "S&oacute;lo se realiza en algunos sistemas";
 choices[12][3] = "Con la tecnolog&iacute;a web ya no tiene sentido hablar de &quot;upsizing&quot; ya que es centralizada";
 answers[12] = 2;
 units[12] = ['95'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 3649. ";
 preguntaids[12] = 3649


//  Id pregunta: 8171 Año de creación de pregunta: 2011
 questions[13]= "14)  Con el objetivo de garantizar la calidad en los servicios p&uacute;blicos se ha creado:";
 choices[13]= new Array();
 choices[13][0] = "La Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de los Servicios (AEVAL) perteneciente al Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[13][1] = "La Direcci&oacute;n General de Aseguramiento de la Calidad e Infraestructuras perteneciente al Ministerio de Energia, Turismo y Agenda Digital.";
 choices[13][2] = "El Consejo Superior de Aseguramiento de la Calidad e Infraestructuras perteneciente al Ministerio de Presidencia.";
 choices[13][3] = "La Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de los Servicios (AEVAL) perteneciente al Ministerio de Pol&iacute;tica Territorial.";
 answers[13] = 0;
 units[13] = ['19'];
 blocks[13] = ['A4'];
 comments[13] = "Id Pregunta: 8171. Examen TIC A2 2010 interna";
 preguntaids[13] = 8171


//  Id pregunta: 9324 Año de creación de pregunta: 2014
 questions[14]= "15)  Desde el punto de vista del &ldquo;Cloud Computing&rdquo;, Gmail es un ejemplo de";
 choices[14]= new Array();
 choices[14][0] = "PaaS (&ldquo;Platform as a Service&rdquo;).";
 choices[14][1] = "CaaS (&ldquo;Communication as a Service&rdquo;).";
 choices[14][2] = "IaaS (&ldquo;Infrastructure as a Service&rdquo;).";
 choices[14][3] = "SaaS (&ldquo;Software as a Service&rdquo;).";
 answers[14] = 3;
 units[14] = ['52'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 9324. ";
 preguntaids[14] = 9324


//  Id pregunta: 3020 Año de creación de pregunta: 2002
 questions[15]= "16)  RSA es:";
 choices[15]= new Array();
 choices[15][0] = "un algoritmo de clave privada";
 choices[15][1] = "un algoritmo de clave p&uacute;blica";
 choices[15][2] = "un m&eacute;todo de criptoan&aacute;lisis diferencial";
 choices[15][3] = "una infraestructura de clave p&uacute;blica";
 answers[15] = 1;
 units[15] = ['76'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 3020. ";
 preguntaids[15] = 3020


//  Id pregunta: 81 Año de creación de pregunta: 2016
 questions[16]= "17)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[16]= new Array();
 choices[16][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[16][1] = "La libertad sexual y religiosa.";
 choices[16][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[16][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[16] = 0;
 units[16] = ['1'];
 blocks[16] = ['A1'];
 comments[16] = "Id Pregunta: 81. Constituci&oacute;n de 1978";
 preguntaids[16] = 81


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[17]= new Array();
 choices[17][0] = "El 1 de noviembre de 1994.";
 choices[17][1] = "El 1 de noviembre de 1992.";
 choices[17][2] = "El 1 de noviembre de 1995.";
 choices[17][3] = "El 1 de noviembre de 1993.";
 answers[17] = 3;
 units[17] = ['5'];
 blocks[17] = ['A1'];
 comments[17] = "Id Pregunta: 168. Uni&oacute;n Europea";
 preguntaids[17] = 168


//  Id pregunta: 4992 Año de creación de pregunta: 2002
 questions[18]= "19)  Los problemas principales de IPv4 que hacen necesario IPv6 son:";
 choices[18]= new Array();
 choices[18][0] = "los relativos a la escasez de direcciones";
 choices[18][1] = "los relativos al tama&ntilde;o de las tablas de encaminamiento";
 choices[18][2] = "los relativos a la calidad de servicio";
 choices[18][3] = "todos los anteriores";
 answers[18] = 3;
 units[18] = ['109'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 4992. ";
 preguntaids[18] = 4992


//  Id pregunta: 9633 Año de creación de pregunta: 2014
 questions[19]= "20)  Entre los documentos generados por ISO, aquellos que recogen informaci&oacute;n que no aparece en los Est&aacute;ndares Internacionales reciben el nombre de&hellip;";
 choices[19]= new Array();
 choices[19][0] = "Technical Especifications";
 choices[19][1] = "Technical Reports";
 choices[19][2] = "Technical Corrigendum";
 choices[19][3] = "Gu&iacute;as ISO";
 answers[19] = 1;
 units[19] = ['48'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 9633. http://www.iso.org/iso/home/standards_development/deliverables-all.htm?type=tr";
 preguntaids[19] = 9633


//  Id pregunta: 2107 Año de creación de pregunta: 2002
 questions[20]= "21)  El porcentaje de tiempo que los distintos dispositivos del sistema est&aacute;n siendo utilizados en tareas del sistema, no directamente imputables a ninguno de los trabajos en curso se denomina:";
 choices[20]= new Array();
 choices[20][0] = "Overlap";
 choices[20][1] = "Swaping";
 choices[20][2] = "Throughput";
 choices[20][3] = "Overhead";
 answers[20] = 3;
 units[20] = ['39'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 2107. ";
 preguntaids[20] = 2107


//  Id pregunta: 406 Año de creación de pregunta: 2016
 questions[21]= "22)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[21]= new Array();
 choices[21][0] = "Un plan de igualdad.";
 choices[21][1] = "Un informe de impacto de g&eacute;nero.";
 choices[21][2] = "Un programa de igualdad.";
 choices[21][3] = "Todas son correctas.";
 answers[21] = 1;
 units[21] = ['14'];
 blocks[21] = ['A3'];
 comments[21] = "Id Pregunta: 406. Pol&iacute;ticas de igualdad";
 preguntaids[21] = 406


//  Id pregunta: 10725 Año de creación de pregunta: 2015
 questions[22]= "23)  Seg&uacute;n la Ley 34/2002 de Servicios de la Sociedad de la Informaci&oacute;n y Comercio electr&oacute;nico, el procedimiento de cooperaci&oacute;n intracomunitario en el que se propone la realizaci&oacute;n de acciones urgentes contra un prestador de servicios de la sociedad de la informaci&oacute;n establecido en la U.E que haya incumplido alguno de los preceptos de la Ley, requiere notificaci&oacute;n al Consejo Europeo y al Estado Miembro en el que opera dicho Prestador en un Plazo M&Aacute;XIMO de:";
 choices[22]= new Array();
 choices[22][0] = "1 mes desde la adopci&oacute;n de las acciones urgentes.";
 choices[22][1] = "30 d&iacute;as desde la adopci&oacute;n de las acciones urgentes.";
 choices[22][2] = "15 d&iacute;as desde la adopci&oacute;n de acciones urgentes.";
 choices[22][3] = "Ninguna de las anteriores.";
 answers[22] = 2;
 units[22] = ['19'];
 blocks[22] = ['A4'];
 comments[22] = "Id Pregunta: 10725. ";
 preguntaids[22] = 10725


//  Id pregunta: 154 Año de creación de pregunta: 2016
 questions[23]= "24)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[23]= new Array();
 choices[23][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[23][1] = "Ninguna de las respuestas es correcta.";
 choices[23][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[23][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[23] = 0;
 units[23] = ['5'];
 blocks[23] = ['A1'];
 comments[23] = "Id Pregunta: 154. Uni&oacute;n Europea";
 preguntaids[23] = 154


//  Id pregunta: 7365 Año de creación de pregunta: 2010
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los ficheros de Linux es cierta?";
 choices[24]= new Array();
 choices[24][0] = "/etc/passwd: s&oacute;lo es accesible para root";
 choices[24][1] = "/etc/shadow: contiene las contrase&ntilde;as encriptadas de los usuarios";
 choices[24][2] = "/etc/ftpusers: contienes los usuarios que pueden acceder al sistema v&iacute;a ftp";
 choices[24][3] = "/etc/dhcpconfig: contiene informaci&oacute;n de configuraci&oacute;n del cliente DHCP";
 answers[24] = 1;
 units[24] = ['57'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 7365. Examen TIC B 2009";
 preguntaids[24] = 7365


//  Id pregunta: 4005 Año de creación de pregunta: 2002
 questions[25]= "26)  Los denominados paquetes integrados poseen como caracter&iacute;stica fundamental:";
 choices[25]= new Array();
 choices[25][0] = "Un potente sistema de comunicaciones.";
 choices[25][1] = "La conectividad en sus funciones y gran comodidad en el manejo de datos.";
 choices[25][2] = "Facilidad para el manejo de grandes vol&uacute;menes de datos.";
 choices[25][3] = "El incrementar la potencia real del ordenador al incorporar tarjetas de expansi&oacute;n de memoria.";
 answers[25] = 1;
 units[25] = ['89'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 4005. ";
 preguntaids[25] = 4005


//  Id pregunta: 415 Año de creación de pregunta: 2016
 questions[26]= "27)  La Poblaci&oacute;n Activa incluye a:";
 choices[26]= new Array();
 choices[26][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[26][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[26][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[26][3] = "Todo aquel que desea trabajar";
 answers[26] = 2;
 units[26] = ['15'];
 blocks[26] = ['A3'];
 comments[26] = "Id Pregunta: 415. Mercado laboral";
 preguntaids[26] = 415


//  Id pregunta: 2177 Año de creación de pregunta: 2002
 questions[27]= "28)  En un gr&aacute;fico PERT los nodos representan:";
 choices[27]= new Array();
 choices[27][0] = "Actividades.";
 choices[27][1] = "Sucesos.";
 choices[27][2] = "El camino cr&iacute;tico.";
 choices[27][3] = "La holgura de una actividad.";
 answers[27] = 1;
 units[27] = ['33'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 2177. ";
 preguntaids[27] = 2177


//  Id pregunta: 3272 Año de creación de pregunta: 2003
 questions[28]= "29)  Las herramientas de administraci&oacute;n de datos de un SGBD";
 choices[28]= new Array();
 choices[28][0] = "Est&aacute;n entre las facilidades de usuario y el sistema central de transformaci&oacute;n de datos";
 choices[28][1] = "Tienen como interfaces LDU y LD";
 choices[28][2] = "Tienen como interfaces LD y LD-I";
 choices[28][3] = "Est&aacute;n entre el usuario y el sistema central de transformaci&oacute;n de datos";
 answers[28] = 0;
 units[28] = ['60'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 3272. ";
 preguntaids[28] = 3272


//  Id pregunta: 7458 Año de creación de pregunta: 2010
 questions[29]= "30)  Se&ntilde;ale la afirmaci&oacute;n CORRECTA:";
 choices[29]= new Array();
 choices[29][0] = "DES es un algoritmo de cifrado asim&eacute;trico";
 choices[29][1] = "RSA es un algoritmo de cifrado sim&eacute;trico";
 choices[29][2] = "AES es implementable tanto en hardware como en software";
 choices[29][3] = "Todas las anteriores son FALSAS.";
 answers[29] = 2;
 units[29] = ['76'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 7458. ";
 preguntaids[29] = 7458


//  Id pregunta: 170 Año de creación de pregunta: 2016
 questions[30]= "31)  En la Uni&oacute;n Europea, el Consejo de Ministros se reunir&aacute; peri&oacute;dicamente en Bruselas por convocatoria de:";
 choices[30]= new Array();
 choices[30][0] = "Su Presidente, a iniciativa de &eacute;ste.";
 choices[30][1] = "Uno de sus miembros.";
 choices[30][2] = "La Comisi&oacute;n.";
 choices[30][3] = "Todas las respuestas son correctas.";
 answers[30] = 3;
 units[30] = ['5'];
 blocks[30] = ['A1'];
 comments[30] = "Id Pregunta: 170. Uni&oacute;n Europea";
 preguntaids[30] = 170


//  Id pregunta: 3399 Año de creación de pregunta: 2006
 questions[31]= "32)  El Software Libre es bueno para las Administraciones P&uacute;blicas porque&hellip; Se&ntilde;ale la respuesta FALSA";
 choices[31]= new Array();
 choices[31][0] = "Es gratis";
 choices[31][1] = "Permite conocer exactamente el funcionamiento de los programas";
 choices[31][2] = "Facilita la conservaci&oacute;n de la informaci&oacute;n p&uacute;blica, libre de patentes y formatos propietarios";
 choices[31][3] = "Abre la posibilidad de contratar soporte t&eacute;cnico en un mercado en competencia";
 answers[31] = 0;
 units[31] = ['66'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 3399. ";
 preguntaids[31] = 3399


//  Id pregunta: 2618 Año de creación de pregunta: 2002
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes respuestas es verdadera respecto a X.500?:";
 choices[32]= new Array();
 choices[32][0] = "X.500 es un protocolo que especifica un modelo para conectar servicios de directorio locales para formar un directorio global distribuido, de forma que el usuario percibe el directorio completo como accesible de su servidor local";
 choices[32][1] = "X.500 fue inicialmente un sistema propietario de Novell, pero en la actualidad ha sido cedido para dominio p&uacute;blico por un procedimiento estrat&eacute;gico de la compa&ntilde;&iacute;a para acabar con sistemas incompatibles desarrollados por empresas rivales";
 choices[32][2] = "X.500 ha sido desarrollado por ANSI para su implementaci&oacute;n en el ej&eacute;rcito americano por petici&oacute;n del DoD, pero en realidad no ha sido utilizado por &eacute;ste por falta de seguridad, y en la actualidad, al ser un protocolo publicado ha sido adoptado por diversos organismos";
 choices[32][3] = "X.500 es el protocolo de directorio m&aacute;s extendido, por lo que puede considerarse un est&aacute;ndar de facto, pero aunque se estima pr&oacute;xima su adopci&oacute;n por ISO para incorporarlo a la definici&oacute;n est&aacute;ndar de OSI, a&uacute;n no se ha dado este paso";
 answers[32] = 0;
 units[32] = ['77'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 2618. ";
 preguntaids[32] = 2618


//  Id pregunta: 7845 Año de creación de pregunta: 2011
 questions[33]= "34)  Respecto al API, Streaming API for XML (StAX), indicar la afirmaci&oacute;n correcta:";
 choices[33]= new Array();
 choices[33][0] = "Emplea &quot;push parsing&quot;.";
 choices[33][1] = "Permite vistas XML de datos no XML.";
 choices[33][2] = "Es un API unidireccional.";
 choices[33][3] = "El cliente del API no controla el thread de la aplicaci&oacute;n.";
 answers[33] = 1;
 units[33] = ['122'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 7845. Examen TIC A1 2010";
 preguntaids[33] = 7845


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[34]= "35)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[34]= new Array();
 choices[34][0] = "El Tratado de Maastrich.";
 choices[34][1] = "El Tratado de Amsterdam.";
 choices[34][2] = "El Tratado de Par&iacute;s.";
 choices[34][3] = "El Tratado de Roma.";
 answers[34] = 3;
 units[34] = ['5'];
 blocks[34] = ['A1'];
 comments[34] = "Id Pregunta: 162. Uni&oacute;n Europea";
 preguntaids[34] = 162


//  Id pregunta: 6262 Año de creación de pregunta: 2003
 questions[35]= "36)  No se considera una t&eacute;cnica o herramienta para la creaci&oacute;n de prototipos:";
 choices[35]= new Array();
 choices[35][0] = "T&eacute;cnicas de Cuarta Generaci&oacute;n";
 choices[35][1] = "Componentes de Software Reutilizables";
 choices[35][2] = "Modelado L&oacute;gico de Datos";
 choices[35][3] = "Especificaciones Formales y Entornos para Prototipos";
 answers[35] = 2;
 units[35] = ['90'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 6262. ";
 preguntaids[35] = 6262


//  Id pregunta: 5371 Año de creación de pregunta: 2006
 questions[36]= "37)  Respecto al protocolo IP";
 choices[36]= new Array();
 choices[36][0] = "IPv6 no permite OSPF";
 choices[36][1] = "IPv4 no permite al origen de la comunicaci&oacute;n seleccionar el encaminamiento";
 choices[36][2] = "IPv6 permite al origen de la comunicaci&oacute;n seleccionar el encaminamiento";
 choices[36][3] = "ninguna de las anteriores";
 answers[36] = 2;
 units[36] = ['109'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 5371. ";
 preguntaids[36] = 5371


//  Id pregunta: 3908 Año de creación de pregunta: 2002
 questions[37]= "38)  La relaci&oacute;n de herencia en la orientaci&oacute;n a objetos:";
 choices[37]= new Array();
 choices[37][0] = "Permite que una clase cliente que utilice la interfaz de otra pueda tratar igualmente con objetos pertenecientes a superclases de las que aquella hereda.";
 choices[37][1] = "Facilita la reutilizaci&oacute;n de especificaciones preexistentes para la creaci&oacute;n de otras nuevas.";
 choices[37][2] = "Facilita el principio de acoplamiento d&eacute;bil entre clases.";
 choices[37][3] = "Aumenta la modularidad y abstracci&oacute;n del dise&ntilde;o, pero disminuye la productividad del equipo de desarrollo.";
 answers[37] = 1;
 units[37] = ['85', '89'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 3908. ";
 preguntaids[37] = 3908


//  Id pregunta: 10237 Año de creación de pregunta: 2015
 questions[38]= "39)  &iquest;Qu&eacute; versi&oacute;n de Java incorpora de forma completa la librer&iacute;a JavaFX?";
 choices[38]= new Array();
 choices[38][0] = "5";
 choices[38][1] = "6";
 choices[38][2] = "7";
 choices[38][3] = "8";
 answers[38] = 3;
 units[38] = ['64'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 10237. Viene incluida desde la versi&oacute;n 7u6, pero no se incorpora de forma completa hasta la versi&oacute;n 8";
 preguntaids[38] = 10237


//  Id pregunta: 9264 Año de creación de pregunta: 2014
 questions[39]= "40)  En el modelo OSI, el nivel clave para el sistema de seguridad es:";
 choices[39]= new Array();
 choices[39][0] = "N3.";
 choices[39][1] = "N4.";
 choices[39][2] = "N6.";
 choices[39][3] = "N7.";
 answers[39] = 2;
 units[39] = ['105'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 9264. ";
 preguntaids[39] = 9264


//  Id pregunta: 7851 Año de creación de pregunta: 2011
 questions[40]= "41)  En los sistemas MIMD:";
 choices[40]= new Array();
 choices[40][0] = "Todos los datos est&aacute;n accesibles para todos los procesadores.";
 choices[40][1] = "No todas las instrucciones est&aacute;n disponibles para todos los procesadores.";
 choices[40][2] = "Emplean varios buses de altas prestaciones para transmitir instrucciones y datos simult&aacute;neamente.";
 choices[40][3] = "Pueden trabajar con memoria compartida o con memoria distribuida.";
 answers[40] = 3;
 units[40] = ['49'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 7851. Examen TIC A1 2010";
 preguntaids[40] = 7851


//  Id pregunta: 222 Año de creación de pregunta: 2016
 questions[41]= "42)  Se consideran interesados en el procedimiento administrativo:";
 choices[41]= new Array();
 choices[41][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[41][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[41][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[41][3] = "todas son correctas";
 answers[41] = 0;
 units[41] = ['7'];
 blocks[41] = ['A2'];
 comments[41] = "Id Pregunta: 222. Ley 39/2015";
 preguntaids[41] = 222


//  Id pregunta: 5728 Año de creación de pregunta: 2007
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes aspectos NO son tratados en la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico?:";
 choices[42]= new Array();
 choices[42][0] = "obligaciones y responsabilidades de los destinatarios de los servicios.";
 choices[42][1] = "promueve la elaboraci&oacute;n de c&oacute;digos de conducta sobre las materias reguladas en esta Ley.";
 choices[42][2] = "accesibilidad para las personas can discapacidad y de edad avanzada a la informaci&oacute;n proporcionada por medios electr&oacute;nicos.";
 choices[42][3] = "sistema de asignaci&oacute;n de nombres de dominio bajo el &quot;.es&quot;.";
 answers[42] = 0;
 units[42] = ['19'];
 blocks[42] = ['A4'];
 comments[42] = "Id Pregunta: 5728. ";
 preguntaids[42] = 5728


//  Id pregunta: 1040 Año de creación de pregunta: 2016
 questions[43]= "44)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[43]= new Array();
 choices[43][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[43][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[43][2] = "A y B son correctas.";
 choices[43][3] = "A y B son incorrectas.";
 answers[43] = 2;
 units[43] = ['4', '7', '8', '9'];
 blocks[43] = ['A1', 'A2'];
 comments[43] = "Id Pregunta: 1040. Ley 40/2015";
 preguntaids[43] = 1040


//  Id pregunta: 1684 Año de creación de pregunta: 2016
 questions[44]= "45)  La actividad -Estudio de alternativas de soluci&oacute;n- de M&eacute;trica V.3 se encuadra dentro del proceso de:";
 choices[44]= new Array();
 choices[44][0] = "Planificaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[44][1] = "An&aacute;lisis del sistema de informaci&oacute;n.";
 choices[44][2] = "Estudio de viabilidad del sistema.";
 choices[44][3] = "Dise&ntilde;o del sistema de informaci&oacute;n.";
 answers[44] = 2;
 units[44] = ['91'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 1684. ";
 preguntaids[44] = 1684


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[45]= "46)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[45]= new Array();
 choices[45][0] = "Ejecutivo";
 choices[45][1] = "Limitativo";
 choices[45][2] = "Estimativo";
 choices[45][3] = "Progresivo";
 answers[45] = 1;
 units[45] = ['11'];
 blocks[45] = ['A2'];
 comments[45] = "Id Pregunta: 265. Presupuestos generales";
 preguntaids[45] = 265


//  Id pregunta: 9600 Año de creación de pregunta: 2014
 questions[46]= "47)  &iquest;Cu&aacute;ntos bytes utiliza la trama de Ethernet (IEEE 802.3-2012) para el c&oacute;digo de redundancia c&iacute;clica?";
 choices[46]= new Array();
 choices[46][0] = "4 bytes.";
 choices[46][1] = "6 bytes.";
 choices[46][2] = "12 bytes.";
 choices[46][3] = "Ethernet no utiliza ning&uacute;n c&oacute;digo de redundancia c&iacute;clica.";
 answers[46] = 0;
 units[46] = ['112'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 9600. Examen TIC A2 2013  Promoci&oacute;n Interna";
 preguntaids[46] = 9600


//  Id pregunta: 4804 Año de creación de pregunta: 2002
 questions[47]= "48)  En el tipo de conmutaci&oacute;n de paquetes conocido como datagrama:";
 choices[47]= new Array();
 choices[47][0] = "Los paquetes no han de llegar ordenados";
 choices[47][1] = "Se establece un enlace l&oacute;gico entre emisor y receptor";
 choices[47][2] = "Los mensajes no se trocean";
 choices[47][3] = "Los paquetes han de llegar ordenados";
 answers[47] = 0;
 units[47] = ['112'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 4804. ";
 preguntaids[47] = 4804


//  Id pregunta: 273 Año de creación de pregunta: 2016
 questions[48]= "49)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[48]= new Array();
 choices[48][0] = "En qu&eacute; nos gastamos el dinero";
 choices[48][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[48][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[48][3] = "Qui&eacute;n se gasta el dinero.";
 answers[48] = 0;
 units[48] = ['11'];
 blocks[48] = ['A2'];
 comments[48] = "Id Pregunta: 273. Presupuestos generales";
 preguntaids[48] = 273


//  Id pregunta: 6522 Año de creación de pregunta: 2003
 questions[49]= "50)  Dentro de la clasificaci&oacute;n de Flynn, un ordenador con Multiprocesador Masivamente Paralelo (MPP), se clasificar&iacute;a en la siguiente categor&iacute;a:";
 choices[49]= new Array();
 choices[49][0] = "SISD";
 choices[49][1] = "SIMD";
 choices[49][2] = "MISD";
 choices[49][3] = "MIMD";
 answers[49] = 3;
 units[49] = ['49'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 6522. ";
 preguntaids[49] = 6522


//  Id pregunta: 10779 Año de creación de pregunta: 2015
 questions[50]= "51)  Seg&uacute;n el Real Decreto Legislativo 3/2011, para una tramitaci&oacute;n de emergencia el plazo de inicio de la ejecuci&oacute;n no podr&aacute; ser superior a:";
 choices[50]= new Array();
 choices[50][0] = "10 d&iacute;as h&aacute;biles";
 choices[50][1] = "15 d&iacute;as h&aacute;biles";
 choices[50][2] = "15 d&iacute;as naturales";
 choices[50][3] = "1 mes";
 answers[50] = 3;
 units[50] = ['10'];
 blocks[50] = ['A2'];
 comments[50] = "Id Pregunta: 10779. ";
 preguntaids[50] = 10779


//  Id pregunta: 979 Año de creación de pregunta: 2016
 questions[51]= "52)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[51]= new Array();
 choices[51][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[51][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[51][2] = "a y b son correctas";
 choices[51][3] = "a y b son incorrectas";
 answers[51] = 2;
 units[51] = ['4', '7', '8', '9'];
 blocks[51] = ['A1', 'A2'];
 comments[51] = "Id Pregunta: 979. Ley 40/2015";
 preguntaids[51] = 979


//  Id pregunta: 66 Año de creación de pregunta: 2016
 questions[52]= "53)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[52]= new Array();
 choices[52][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[52][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[52][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[52][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[52] = 1;
 units[52] = ['1'];
 blocks[52] = ['A1'];
 comments[52] = "Id Pregunta: 66. Constituci&oacute;n de 1978";
 preguntaids[52] = 66


//  Id pregunta: 10147 Año de creación de pregunta: 2015
 questions[53]= "54)  Respecto a los requisitos a cumplir en la digitalizaci&oacute;n de documentos establecidos por la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos es correcto que:";
 choices[53]= new Array();
 choices[53][0] = "El nivel de resoluci&oacute;n m&aacute;ximo para im&aacute;genes electr&oacute;nicas ser&aacute; de 200 p&iacute;xeles por pulgada, tanto para im&aacute;genes obtenidas en blanco y negro, color o escala de grises.";
 choices[53][1] = "La imagen electr&oacute;nica se podr&aacute; optimizar para garantizar su legibilidad, de modo que todo contenido del documento origen pueda apreciarse y sea v&aacute;lido para su gesti&oacute;n.";
 choices[53][2] = "La imagen electr&oacute;nica podr&aacute; contener caracteres o gr&aacute;ficos, siempre que sean incorporados por el funcionario responsable del expediente y adecuadamente identificados mediante sello oficial.";
 choices[53][3] = "La digitalizaci&oacute;n de un documento implicar&aacute;, en todos los casos, la asignaci&oacute;n de los metadatos m&iacute;nimos obligatorios definidos en la Norma T&eacute;cnica de Interoperabilidad de Documento Electr&oacute;nico y la firma de la imagen electr&oacute;nica.";
 answers[53] = 1;
 units[53] = ['44'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 10147. Examen TIC A1 2014";
 preguntaids[53] = 10147


//  Id pregunta: 2923 Año de creación de pregunta: 2002
 questions[54]= "55)  La arquitectura RISC:";
 choices[54]= new Array();
 choices[54][0] = "Se emplea sobre todo en estaciones de trabajo debido a sus altas prestaciones para el c&aacute;lculo en coma flotante";
 choices[54][1] = "Permite que con un juego sencillo de instrucciones se pueda disponer de todas las que se necesiten mediante el uso de la microprogramaci&oacute;n";
 choices[54][2] = "No es adaptable al sector de los microordenadores";
 choices[54][3] = "Dificulta el dise&ntilde;o de compiladores optimizados";
 answers[54] = 3;
 units[54] = ['50', '51'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 2923. ";
 preguntaids[54] = 2923


//  Id pregunta: 2984 Año de creación de pregunta: 2002
 questions[55]= "56)  Los sem&aacute;foros son una t&eacute;cnica de comunicaci&oacute;n entre procesos para:";
 choices[55]= new Array();
 choices[55][0] = "Evitar los bloqueos";
 choices[55][1] = "Ejecutar threads";
 choices[55][2] = "Permitir la exclusi&oacute;n mutua";
 choices[55][3] = "Comunicar procesos en sistemas distribuidos";
 answers[55] = 2;
 units[55] = ['55'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 2984. ";
 preguntaids[55] = 2984


//  Id pregunta: 507 Año de creación de pregunta: 2016
 questions[56]= "57)  El Portal de Transparencia de la Administraci&oacute;n General del Estado depende del:";
 choices[56]= new Array();
 choices[56][0] = "Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[56][1] = "Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[56][2] = "Ministerio de la Presidencia";
 choices[56][3] = "Ministerio de Fomento";
 answers[56] = 2;
 units[56] = ['22'];
 blocks[56] = ['A4'];
 comments[56] = "Id Pregunta: 507. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[56] = 507


//  Id pregunta: 5138 Año de creación de pregunta: 2003
 questions[57]= "58)  Algoritmo de compresi&oacute;n de im&aacute;genes sin p&eacute;rdidas:";
 choices[57]= new Array();
 choices[57][0] = "ECW.";
 choices[57][1] = "RLE.";
 choices[57][2] = "MPEG.";
 choices[57][3] = "TXA.";
 answers[57] = 1;
 units[57] = ['80'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 5138. ";
 preguntaids[57] = 5138


//  Id pregunta: 407 Año de creación de pregunta: 2016
 questions[58]= "59)  En las bases de los concursos para la provisi&oacute;n de puestos de trabajo se computar&aacute;, a los efectos de valoraci&oacute;n del trabajo desarrollado y de los correspondientes m&eacute;ritos, el tiempo que las personas candidatas hayan permanecido:";
 choices[58]= new Array();
 choices[58][0] = "En r&eacute;gimen de excedencias, reducciones de jornada, permiso de maternidad o permiso de paternidad.";
 choices[58][1] = "En el extranjero.";
 choices[58][2] = "Ninguna es correcta.";
 choices[58][3] = "Ambas son correctas.";
 answers[58] = 0;
 units[58] = ['14'];
 blocks[58] = ['A3'];
 comments[58] = "Id Pregunta: 407. Pol&iacute;ticas de igualdad";
 preguntaids[58] = 407


//  Id pregunta: 9064 Año de creación de pregunta: 2014
 questions[59]= "60)  El serviceware permite:";
 choices[59]= new Array();
 choices[59][0] = "Gestionar el uso del Cl&uacute;ster que hace cada usuario.";
 choices[59][1] = "Gestionar el uso del Grid que hace cada usuario.";
 choices[59][2] = "Controlar la red de comunicaciones del Cl&uacute;ster.";
 choices[59][3] = "Controlar la red de comunicaciones del Grid.";
 answers[59] = 1;
 units[59] = ['49'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 9064. ";
 preguntaids[59] = 9064


//  Id pregunta: 9796 Año de creación de pregunta: 2015
 questions[60]= "61)  Europa 2020 tiene como prioridades un crecimiento:";
 choices[60]= new Array();
 choices[60][0] = "Global, tecnol&oacute;gico y sostenible.";
 choices[60][1] = "Informado, sostenible y solidario.";
 choices[60][2] = "Inteligente, sostenible e integrador.";
 choices[60][3] = "Arm&oacute;nico, estable y social.";
 answers[60] = 2;
 units[60] = ['19'];
 blocks[60] = ['A4'];
 comments[60] = "Id Pregunta: 9796. ";
 preguntaids[60] = 9796


//  Id pregunta: 6235 Año de creación de pregunta: 2003
 questions[61]= "62)  El transporte de voz en tiempo real a trav&eacute;s de redes IP se efect&uacute;a por medio de los protocolos:";
 choices[61]= new Array();
 choices[61][0] = "MPLS sobre UDP";
 choices[61][1] = "RVSP";
 choices[61][2] = "RTP sobre TCP";
 choices[61][3] = "RTP sobre UDP";
 answers[61] = 3;
 units[61] = ['110'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 6235. Examen TIC A Castilla La Mancha 2007";
 preguntaids[61] = 6235


//  Id pregunta: 10716 Año de creación de pregunta: 2015
 questions[62]= "63)  En un entorno de computaci&oacute;n Grid, &iquest;qu&eacute; nombre reciben las agrupaciones din&aacute;micas de diferentes organizaciones f&iacute;sicas o individuos que comparten recursos y colaboran con el fin de lograr un objetivo com&uacute;n?";
 choices[62]= new Array();
 choices[62][0] = "Virtual Organizations (VO).";
 choices[62][1] = "Grid Domain Resources (GDR)";
 choices[62][2] = "Domain Group Policy (DGP).";
 choices[62][3] = "Organization Resource Group (ORG)";
 answers[62] = 0;
 units[62] = ['49'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 10716. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";
 preguntaids[62] = 10716


//  Id pregunta: 4067 Año de creación de pregunta: 2003
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes no pertenece al perfil de analista seg&uacute;n Metrica v3?";
 choices[63]= new Array();
 choices[63][0] = "Administrador de base de datos";
 choices[63][1] = "T&eacute;cnico de comunicaciones";
 choices[63][2] = "Equipo de proyecto";
 choices[63][3] = "Equipo de operaci&oacute;n";
 answers[63] = 1;
 units[63] = ['91'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 4067. ";
 preguntaids[63] = 4067


//  Id pregunta: 2089 Año de creación de pregunta: 2002
 questions[64]= "65)  El conjunto de t&eacute;cnicas y procedimientos que garantizan la disponibilidad de la informaci&oacute;n, la integridad del sistema y la confidencialidad, son propias de:";
 choices[64]= new Array();
 choices[64][0] = "Una auditor&iacute;a inform&aacute;tica";
 choices[64][1] = "Un plan de contingencia";
 choices[64][2] = "La seguridad inform&aacute;tica";
 choices[64][3] = "Una planificaci&oacute;n estrat&eacute;gica";
 answers[64] = 2;
 units[64] = ['36', '45'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 2089. ";
 preguntaids[64] = 2089


//  Id pregunta: 7651 Año de creación de pregunta: 2010
 questions[65]= "66)  En el BGP (Border Gateway Protocol), se define como atributo obligatorio:";
 choices[65]= new Array();
 choices[65][0] = "La preferencia local.";
 choices[65][1] = "El agregado at&oacute;mico.";
 choices[65][2] = "El pr&oacute;ximo salto.";
 choices[65][3] = "El agregador.";
 answers[65] = 2;
 units[65] = ['102'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 7651. Map 2006";
 preguntaids[65] = 7651


//  Id pregunta: 5592 Año de creación de pregunta: 2007
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes no es una caracter&iacute;stica de la arquitectura de red de Internet?";
 choices[66]= new Array();
 choices[66][0] = "Arquitectura abierta";
 choices[66][1] = "Control centralizado";
 choices[66][2] = "Basada en TCP/IP";
 choices[66][3] = "Organizaci&oacute;n jer&aacute;rquica";
 answers[66] = 1;
 units[66] = ['103'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 5592. ";
 preguntaids[66] = 5592


//  Id pregunta: 2603 Año de creación de pregunta: 2002
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes afirmaciones referentes a un sistema criptogr&aacute;fico de clave p&uacute;blica o asim&eacute;trico es falsa?:";
 choices[67]= new Array();
 choices[67][0] = "Cada usuario posee dos claves denominadas p&uacute;blica y privada, independientes entre s&iacute;. La clave privada es la usada en el servicio de confidencialidad (cifrado)";
 choices[67][1] = "La criptograf&iacute;a de clave p&uacute;blica se usa para la implantaci&oacute;n de servicios de seguridad avanzados como: autenticidad (firma digital), no repudio, prueba de entrega e integridad, entre otros";
 choices[67][2] = "El uso de criptograf&iacute;a de clave p&uacute;blica, por ejemplo RSA, para servicios de confidencialidad (cifrado) proporciona un rendimiento muy inferior (caracteres cifrados/segundo) al proporcionado por los algoritmos sim&eacute;tricos como el DES";
 choices[67][3] = "La gesti&oacute;n de claves de los sistemas criptogr&aacute;ficos asim&eacute;tricos es sencilla, comparada con la existente en los sistemas convencionales sim&eacute;tricos de clave secreta";
 answers[67] = 0;
 units[67] = ['76'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 2603. ";
 preguntaids[67] = 2603


//  Id pregunta: 10488 Año de creación de pregunta: 2015
 questions[68]= "69)  &iquest;En qu&eacute; consisten los Sistemas de Gesti&oacute;n de Contenidos Empresariales (ECM)?";
 choices[68]= new Array();
 choices[68][0] = "En la creaci&oacute;n y gesti&oacute;n de contenidos de un sitio Web";
 choices[68][1] = "En la edici&oacute;n colaborativa de contenidos";
 choices[68][2] = "En la gesti&oacute;n generalista de contenidos desestructurados";
 choices[68][3] = "Todas las anteriores";
 answers[68] = 3;
 units[68] = ['99'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 10488. ";
 preguntaids[68] = 10488


//  Id pregunta: 8538 Año de creación de pregunta: 2011
 questions[69]= "70)  De acuedo a la ley 15/1999, la transmisi&oacute;n de los datos a un encargado del tratamiento sin dar cumplimiento a los deberes formales establecidos en el art&iacute;culo 12 de la ley (Acceso a los datos por cuenta de terceros) se considerar&aacute;:";
 choices[69]= new Array();
 choices[69][0] = "Infracci&oacute;n leve";
 choices[69][1] = "Infracci&oacute;n grave";
 choices[69][2] = "Infracci&oacute;n muy grave";
 choices[69][3] = "No se considerar&aacute; infracci&oacute;n";
 answers[69] = 0;
 units[69] = ['35'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 8538. ";
 preguntaids[69] = 8538


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[70]= new Array();
 choices[70][0] = "El Tratado de Lisboa";
 choices[70][1] = "El Tratado de Amsterdam";
 choices[70][2] = "El Tratado de Niza";
 choices[70][3] = "El Acta &Uacute;nica Europea";
 answers[70] = 1;
 units[70] = ['15'];
 blocks[70] = ['A3'];
 comments[70] = "Id Pregunta: 420. Mercado laboral";
 preguntaids[70] = 420


//  Id pregunta: 815 Año de creación de pregunta: 2016
 questions[71]= "72)  El patr&oacute;n de dise&ntilde;o Fachada (Facade) es del tipo:";
 choices[71]= new Array();
 choices[71][0] = "Estructural.";
 choices[71][1] = "De comportamiento.";
 choices[71][2] = "De prototipado.";
 choices[71][3] = "Creacional.";
 answers[71] = 0;
 units[71] = ['89'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 815. AGE A2 2015";
 preguntaids[71] = 815


//  Id pregunta: 9894 Año de creación de pregunta: 2015
 questions[72]= "73)  Seg&uacute;n la Ley 39/2015, &iquest;para cu&aacute;l de estas actuaciones no es necesar&iacute;a la firma electr&oacute;nica?";
 choices[72]= new Array();
 choices[72][0] = "Iniciar un procedimiento.";
 choices[72][1] = "Interponer un recurso.";
 choices[72][2] = "Desistir de acciones.";
 choices[72][3] = "Renunciar a derechos.";
 answers[72] = 0;
 units[72] = ['7', '19'];
 blocks[72] = ['A2', 'A4'];
 comments[72] = "Id Pregunta: 9894. ";
 preguntaids[72] = 9894


//  Id pregunta: 4772 Año de creación de pregunta: 2002
 questions[73]= "74)  El uso de la red de energ&iacute;a el&eacute;ctrica como una red de transmisi&oacute;n telem&aacute;tica de voz y datos es la tecnolog&iacute;a:";
 choices[73]= new Array();
 choices[73][0] = "LCC";
 choices[73][1] = "PCC";
 choices[73][2] = "LLC";
 choices[73][3] = "PLC";
 answers[73] = 3;
 units[73] = ['108'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 4772. ";
 preguntaids[73] = 4772


//  Id pregunta: 1121 Año de creación de pregunta: 2016
 questions[74]= "75)  En un sistema operativo, cuando hay suficiente memoria para ubicar un nuevo proceso, pero no se le puede asignar porque el espacio disponible no est&aacute; contiguo, se le denomina:";
 choices[74]= new Array();
 choices[74][0] = "Segmentaci&oacute;n.";
 choices[74][1] = "Paginaci&oacute;n.";
 choices[74][2] = "Fragmentaci&oacute;n externa.";
 choices[74][3] = "Fragmentaci&oacute;n interna.";
 answers[74] = 2;
 units[74] = ['56'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 1121. ";
 preguntaids[74] = 1121


