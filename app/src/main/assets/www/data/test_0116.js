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
//  Id pregunta: 4580 Año de creación de pregunta: 2002
 questions[0]= "1)  &iquest;Cu&aacute;ntas subredes son posibles en una red de clase C, con una m&aacute;scara de subnet de 255.255.255.224?:";
 choices[0]= new Array();
 choices[0][0] = "32";
 choices[0][1] = "30";
 choices[0][2] = "8";
 choices[0][3] = "6";
 answers[0] = 3;
 units[0] = ['109'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 4580. Se usa la f&oacute;rmula 2^N=Y, siendo N el n&uacute;mero de bits ocupados seg&uacute;n la m&aacute;scara, correspodientes a la asignaci&oacute;n por defecto para Host (en este caso  224=11100000 2^3=8) Pero no aplicamos subnet 0 de cara al examen, por lo que el n&uacute;mero de subredes es 8 - 2; es decir, 6";
 preguntaids[0] = 4580


//  Id pregunta: 10349 Año de creación de pregunta: 2015
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes no es un inconveniente de los modelos de desarrollo basados en prototipos?";
 choices[1]= new Array();
 choices[1][0] = "Puede crear falsas expectativas en el usuario ya que puede ver el prototipo como si fuera el producto final";
 choices[1][1] = "Puede darse una fuerte intromisi&oacute;n de los usuarios finales en la integraci&oacute;n";
 choices[1][2] = "Los sistemas se desarrollan en distintas etapas, siendo en general un proceso m&aacute;s largo.";
 choices[1][3] = "No es un paradigma apto para proyectos grandes y de larga duraci&oacute;n ni para aplicaciones peque&ntilde;as";
 answers[1] = 2;
 units[1] = ['82'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 10349. ";
 preguntaids[1] = 10349


//  Id pregunta: 3284 Año de creación de pregunta: 2003
 questions[2]= "3)  Si estamos hablando de GNOME, nos referimos a:";
 choices[2]= new Array();
 choices[2][0] = "Proyecto para generar un nuevo sistema operativo.";
 choices[2][1] = "Un proyecto para crear un entorno de escritorio sobre GNU/ LINUX.";
 choices[2][2] = "Un proyecto ofim&aacute;tico multiplataforma.";
 choices[2][3] = "Un cliente de mensajer&iacute;a instant&aacute;nea.";
 answers[2] = 1;
 units[2] = ['66'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 3284. Junta Andaluc&iacute;a";
 preguntaids[2] = 3284


//  Id pregunta: 5084 Año de creación de pregunta: 2002
 questions[3]= "4)  Tras ser extraidos los datos por la estaci&oacute;n destino en una red Token Ring &oacute; IEEE 802.5:";
 choices[3]= new Array();
 choices[3][0] = "Se devuelve un acuse de recibo ('acknowledgment')  antes de liberar el testigo";
 choices[3][1] = "La trama de datos circula hasta completar una vuelta entera hasta que es eliminada por la estaci&oacute;n emisora";
 choices[3][2] = "Se altera el testigo (que se convierte en una secuencia de cabecera de trama)";
 choices[3][3] = "La estaci&oacute;n a&ntilde;ade informaci&oacute;n adicional al testigo antes de retransmitir la trama";
 answers[3] = 1;
 units[3] = ['112'];
 blocks[3] = ['B4'];
 comments[3] = "Id Pregunta: 5084. ";
 preguntaids[3] = 5084


//  Id pregunta: 1028 Año de creación de pregunta: 2016
 questions[4]= "5)  Contra las resoluciones en materia de abstenci&oacute;n y recusaci&oacute;n...";
 choices[4]= new Array();
 choices[4][0] = "Cabr&aacute; recurso de alzada";
 choices[4][1] = "Cabr&aacute; el nuevo protesto";
 choices[4][2] = "Cabr&aacute; recurso de reposici&oacute;n";
 choices[4][3] = "No cabr&aacute; recurso alguno";
 answers[4] = 3;
 units[4] = ['4', '7', '8', '9'];
 blocks[4] = ['A1', 'A2'];
 comments[4] = "Id Pregunta: 1028. Ley 40/2015";
 preguntaids[4] = 1028


//  Id pregunta: 7811 Año de creación de pregunta: 2010
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de ataque activo?";
 choices[5]= new Array();
 choices[5][0] = "Interrupci&oacute;n.";
 choices[5][1] = "Interceptaci&oacute;n.";
 choices[5][2] = "Modificaci&oacute;n.";
 choices[5][3] = "Generaci&oacute;n.";
 answers[5] = 1;
 units[5] = ['119'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 7811. ";
 preguntaids[5] = 7811


//  Id pregunta: 4840 Año de creación de pregunta: 2002
 questions[6]= "7)  En telefon&iacute;a m&oacute;vil, &iquest;cu&aacute;l de los siguientes sistemas permite mayor densidad de tr&aacute;fico?:";
 choices[6]= new Array();
 choices[6][0] = "DECT";
 choices[6][1] = "DCS 1800";
 choices[6][2] = "GSM";
 choices[6][3] = "NMT";
 answers[6] = 0;
 units[6] = ['117'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 4840. ";
 preguntaids[6] = 4840


//  Id pregunta: 1005 Año de creación de pregunta: 2016
 questions[7]= "8)  Los Directores generales ser&aacute;n nombrados y separados por:";
 choices[7]= new Array();
 choices[7][0] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[7][1] = "Ley de las Cortes Generales, a propuesta del titular del Departamento";
 choices[7][2] = "Ley de las Cortes Generales, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[7][3] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento";
 answers[7] = 0;
 units[7] = ['4', '7', '8', '9'];
 blocks[7] = ['A1', 'A2'];
 comments[7] = "Id Pregunta: 1005. Ley 40/2015";
 preguntaids[7] = 1005


//  Id pregunta: 6443 Año de creación de pregunta: 2003
 questions[8]= "9)  Indique la respuesta falsa";
 choices[8]= new Array();
 choices[8][0] = "El portal Your Europe tiene que como objetivo informar a los pa&iacute;ses que no son de la UE sobre las posibilidades de adhesi&oacute;n a la UE";
 choices[8][1] = "PLOTEUS es el portal europeo de oportunidades de formaci&oacute;n";
 choices[8][2] = "TESTA es una red que interconecta las distintas redes administrativas de los estados miembros";
 choices[8][3] = "EURES es un servicio paneuropeo que pretende facilitar el libre movimiento de trabajadores en el Espacio Econ&oacute;mico Europeo";
 answers[8] = 0;
 units[8] = ['19'];
 blocks[8] = ['A4'];
 comments[8] = "Id Pregunta: 6443. ";
 preguntaids[8] = 6443


//  Id pregunta: 4204 Año de creación de pregunta: 2006
 questions[9]= "10)  La utilizaci&oacute;n de prototipos tiene como objetivo/s:";
 choices[9]= new Array();
 choices[9][0] = "Reducir el riesgo del proyecto";
 choices[9][1] = "Conseguir mayor aceptaci&oacute;n del sistema final por el &aacute;rea usuaria";
 choices[9][2] = "Definir con exactitud los requisitos de los usuarios";
 choices[9][3] = "las respuestas a) y b) son correctas";
 answers[9] = 0;
 units[9] = ['90'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 4204. ";
 preguntaids[9] = 4204


//  Id pregunta: 1207 Año de creación de pregunta: 2016
 questions[10]= "11)  En el &aacute;mbito de las redes inform&aacute;ticas, el tiempo que tarda un paquete enviado desde un emisor en volver a este mismo emisor habiendo pasado por el receptor de destino es conocido como:";
 choices[10]= new Array();
 choices[10][0] = "Jitter.";
 choices[10][1] = "Delay.";
 choices[10][2] = "Round Trip delay Time.";
 choices[10][3] = "Latencia.";
 answers[10] = 2;
 units[10] = ['102'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 1207. ";
 preguntaids[10] = 1207


//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[11]= new Array();
 choices[11][0] = "Nueve.";
 choices[11][1] = "Diez.";
 choices[11][2] = "Siete.";
 choices[11][3] = "Ocho.";
 answers[11] = 3;
 units[11] = ['5'];
 blocks[11] = ['A1'];
 comments[11] = "Id Pregunta: 195. Uni&oacute;n Europea";
 preguntaids[11] = 195


//  Id pregunta: 5670 Año de creación de pregunta: 2007
 questions[12]= "13)  Los dispositivos NAS utilizan como protocolo para suministrar los archivos a los clientes:";
 choices[12]= new Array();
 choices[12][0] = "ADSL";
 choices[12][1] = "IP";
 choices[12][2] = "SCSI";
 choices[12][3] = "Fiber SCSI";
 answers[12] = 1;
 units[12] = ['53'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 5670. ";
 preguntaids[12] = 5670


//  Id pregunta: 8070 Año de creación de pregunta: 2011
 questions[13]= "14)  Seg&uacute;n la nueva estrategia para el crecimiento y el empleo Europa 2020, &iquest;Cu&aacute;les de las siguientes prioridades no se encuentra entre las 3 fundamentales definidas en la misma?";
 choices[13]= new Array();
 choices[13][0] = "Crecimiento tecnol&oacute;gico";
 choices[13][1] = "Crecimiento inteligente";
 choices[13][2] = "Crecimiento sostenible";
 choices[13][3] = "Crecimiento integrador";
 answers[13] = 0;
 units[13] = ['19'];
 blocks[13] = ['A4'];
 comments[13] = "Id Pregunta: 8070. ";
 preguntaids[13] = 8070


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[14]= "15)  Se&ntilde;ala la correcta:";
 choices[14]= new Array();
 choices[14][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[14][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[14][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[14][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[14] = 1;
 units[14] = ['7'];
 blocks[14] = ['A2'];
 comments[14] = "Id Pregunta: 240. Ley 39/2015";
 preguntaids[14] = 240


//  Id pregunta: 10517 Año de creación de pregunta: 2015
 questions[15]= "16)  Qu&eacute; tipo de registro se corresponde DNS, se corresponde con esta definici&oacute;n: &quot;Este registro se usa en IPv6 para traducirnombres de hosts a direcciones IPv6.&quot;";
 choices[15]= new Array();
 choices[15][0] = "Tipo A";
 choices[15][1] = "Tipo AAAA";
 choices[15][2] = "Tipo CNAME";
 choices[15][3] = "Tipo NS";
 answers[15] = 1;
 units[15] = ['113'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 10517. ";
 preguntaids[15] = 10517


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[16]= new Array();
 choices[16][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[16][1] = "Las CMADs";
 choices[16][2] = "Ambas son correctas.";
 choices[16][3] = "Ninguna es correcta";
 answers[16] = 2;
 units[16] = ['19'];
 blocks[16] = ['A4'];
 comments[16] = "Id Pregunta: 472. Estrategia TIC";
 preguntaids[16] = 472


//  Id pregunta: 4031 Año de creación de pregunta: 2003
 questions[17]= "18)  El denominado &quot; principio de Pareto&quot; empleado frecuentemente en el enfoque estad&iacute;stico de Garant&iacute;a de Calidad en desarrollo del SW establece que:";
 choices[17]= new Array();
 choices[17][0] = "El n&uacute;mero de defectos del SW crece exponencialmente con el n&uacute;mero de niveles jer&aacute;rquicos presentes en el equipo de desarrollo";
 choices[17][1] = "El 80% de los defectos tienen su origen com&uacute;n en el 20% de los factores causantes";
 choices[17][2] = "Cuando un buen programador es ascendido a analista la tasa de errores se duplica, con un nivel de confianza del 95%";
 choices[17][3] = "Para una complejidad dda en un proyecto inform&aacute;tico el n&uacute;mero de errores se duplica cada per&iacute;odo de 18 meses o fracci&oacute;n";
 answers[17] = 1;
 units[17] = ['92', '93', '98'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 4031. ";
 preguntaids[17] = 4031


//  Id pregunta: 10282 Año de creación de pregunta: 2015
 questions[18]= "19)  Dado un mensaje, m, y su cifrado mediante OTP (one time pad), c. &iquest;se puede obtener la clave utilizada en el cifrado?";
 choices[18]= new Array();
 choices[18][0] = "No, no se puede";
 choices[18][1] = "S&iacute;, la clave es k = m XOR c";
 choices[18][2] = "S&oacute;lo pueden calcularse la mitad de los bits de la clave";
 choices[18][3] = "S&iacute;, la clave es k = m XOR m";
 answers[18] = 1;
 units[18] = ['76'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 10282. ";
 preguntaids[18] = 10282


//  Id pregunta: 10840 Año de creación de pregunta: 2015
 questions[19]= "20)  En IPv6, la etiqueta de flujo tiene una longitud de:";
 choices[19]= new Array();
 choices[19][0] = "8 bits";
 choices[19][1] = "16 bits";
 choices[19][2] = "20 bits";
 choices[19][3] = "No existe dicha etiqueta";
 answers[19] = 2;
 units[19] = ['109'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 10840. ";
 preguntaids[19] = 10840


//  Id pregunta: 5623 Año de creación de pregunta: 2007
 questions[20]= "21)  Es un est&aacute;ndar de e-learning:";
 choices[20]= new Array();
 choices[20][0] = "IEEE";
 choices[20][1] = "ADL";
 choices[20][2] = "LMS";
 choices[20][3] = "SCORM";
 answers[20] = 3;
 units[20] = ['70'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 5623. ";
 preguntaids[20] = 5623


//  Id pregunta: 127 Año de creación de pregunta: 2016
 questions[21]= "22)  Componen la Comisi&oacute;n Europea:";
 choices[21]= new Array();
 choices[21][0] = "Un Comisario por cada Estado miembro.";
 choices[21][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[21][2] = "Dos Comisarios por cada Estado miembro.";
 choices[21][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[21] = 0;
 units[21] = ['5'];
 blocks[21] = ['A1'];
 comments[21] = "Id Pregunta: 127. Uni&oacute;n Europea";
 preguntaids[21] = 127


//  Id pregunta: 9977 Año de creación de pregunta: 2015
 questions[22]= "23)  &iquest;En qu&eacute; a&ntilde;o se aprueba la Norma T&eacute;cnica de Interoperabilidad de requisitos de conexi&oacute;n a la red de comunicaciones de las Administraciones P&uacute;blicas espa&ntilde;olas?";
 choices[22]= new Array();
 choices[22][0] = "2009";
 choices[22][1] = "2011";
 choices[22][2] = "2013";
 choices[22][3] = "2015";
 answers[22] = 1;
 units[22] = ['44'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 9977. ";
 preguntaids[22] = 9977


//  Id pregunta: 5797 Año de creación de pregunta: 2007
 questions[23]= "24)  Los identificadores VPI/VCI tienen significado";
 choices[23]= new Array();
 choices[23][0] = "global para toda la red";
 choices[23][1] = "para cada conexi&oacute;n";
 choices[23][2] = "para cada enlace";
 choices[23][3] = "solo entre el terminal y el switch ATM";
 answers[23] = 2;
 units[23] = ['107'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 5797. ";
 preguntaids[23] = 5797


//  Id pregunta: 9993 Año de creación de pregunta: 2015
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes opciones NO corresponde a un sistema de ficheros empleado en Sistemas Operativos GNU/Linux?";
 choices[24]= new Array();
 choices[24][0] = "ext3";
 choices[24][1] = "mini fs";
 choices[24][2] = "ReiserFS";
 choices[24][3] = "Reiser4";
 answers[24] = 1;
 units[24] = ['57'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 9993. Examen TIC A2 2014";
 preguntaids[24] = 9993


//  Id pregunta: 1182 Año de creación de pregunta: 2016
 questions[25]= "26)  El lenguaje de consulta que nos proporciona los medios para extraer y manipular informaci&oacute;n en documentos o, de cualquier fuente de datos XML, y que utiliza expresiones XPath para acceder a determinadas partes del documento XML se denomina:";
 choices[25]= new Array();
 choices[25][0] = "X-Ask";
 choices[25][1] = "XInclude";
 choices[25][2] = "XLink";
 choices[25][3] = "XQuery";
 answers[25] = 3;
 units[25] = ['74'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 1182. ";
 preguntaids[25] = 1182


//  Id pregunta: 5302 Año de creación de pregunta: 2006
 questions[26]= "27)  Se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[26]= new Array();
 choices[26][0] = "En las redes P2P no existen clientes ni servidores fijos.";
 choices[26][1] = "Se necesitan servidores intermedios que mantienen la relaci&oacute;n de direcciones IP de los usuarios de la red.";
 choices[26][2] = "La informaci&oacute;n no puede ser intercambiada sin la intervenci&oacute;n de los servidores.";
 choices[26][3] = "Todas las respuestas son correctas.";
 answers[26] = 2;
 units[26] = ['103'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 5302. ";
 preguntaids[26] = 5302


//  Id pregunta: 133 Año de creación de pregunta: 2016
 questions[27]= "28)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[27]= new Array();
 choices[27][0] = "El Consejo Europeo.";
 choices[27][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[27][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[27][3] = "El Parlamento Europeo.";
 answers[27] = 0;
 units[27] = ['5'];
 blocks[27] = ['A1'];
 comments[27] = "Id Pregunta: 133. Uni&oacute;n Europea";
 preguntaids[27] = 133


//  Id pregunta: 6947 Año de creación de pregunta: 2010
 questions[28]= "29)  La Orden PRE/878/2010 regula";
 choices[28]= new Array();
 choices[28][0] = "El Registro Electr&oacute;nico Com&uacute;n";
 choices[28][1] = "Los contenidos y servicios m&iacute;nimos de las sedes electr&oacute;nicas";
 choices[28][2] = "El uso de certificados de empleado p&uacute;blico";
 choices[28][3] = "La direcci&oacute;n electr&oacute;nica habilitada";
 answers[28] = 3;
 units[28] = ['19'];
 blocks[28] = ['A4'];
 comments[28] = "Id Pregunta: 6947. Orden PRE/878/2010, previsto en el art&iacute;culo 38.2 del Real Decreto 1671/2009, de 6 de noviembre.";
 preguntaids[28] = 6947


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[29]= "30)  Con respecto a la EPA(Encuesta P&uacute;blica de Empleo) es falso que:";
 choices[29]= new Array();
 choices[29][0] = "La Epa cubre el espacio nacional";
 choices[29][1] = "El periodo de referencia de los resultados de la encuesta es cuatrimestral";
 choices[29][2] = "El INE utiliza la EPA para elaborar sus estad&iacute;sticas relativas al mercado laboral";
 choices[29][3] = "La encuesta va dirigida a poblaci&oacute;n que reside en viviendas familiares, excluy&eacute;ndose hospitales, hoteles, etc&hellip;";
 answers[29] = 1;
 units[29] = ['15'];
 blocks[29] = ['A3'];
 comments[29] = "Id Pregunta: 426. Modelo econ&oacute;mico";
 preguntaids[29] = 426


//  Id pregunta: 1442 Año de creación de pregunta: 2016
 questions[30]= "31)  Tenemos un fichero de tratamiento automatizado que contiene datos sobre ideolog&iacute;a y afiliaci&oacute;n sindical, seg&uacute;n la LOPD en su art&iacute;culo 7:";
 choices[30]= new Array();
 choices[30][0] = "El acceso depender&aacute; de la Agencia de Protecci&oacute;n de Datos.";
 choices[30][1] = "Podemos tener acceso si somos mayores de edad.";
 choices[30][2] = "Podemos tener acceso a estos datos sin restricciones.";
 choices[30][3] = "S&oacute;lo podemos tener estos datos si existe consentimiento expreso y por escrito de los afectados o somos un partido pol&iacute;tico o sindicato, en cuanto a sus asociados o miembros.";
 answers[30] = 3;
 units[30] = ['35'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 1442. ";
 preguntaids[30] = 1442


//  Id pregunta: 141 Año de creación de pregunta: 2016
 questions[31]= "32)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[31]= new Array();
 choices[31][0] = "Cincuenta y cuatro.";
 choices[31][1] = "Cincuenta.";
 choices[31][2] = "Cincuenta y cinco.";
 choices[31][3] = "Cincuenta y dos.";
 answers[31] = 0;
 units[31] = ['5'];
 blocks[31] = ['A1'];
 comments[31] = "Id Pregunta: 141. Uni&oacute;n Europea";
 preguntaids[31] = 141


//  Id pregunta: 204 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[32]= new Array();
 choices[32][0] = "De oficio.";
 choices[32][1] = "A solicitud del interesado.";
 choices[32][2] = "De oficio o a solicitud del interesado.";
 choices[32][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[32] = 2;
 units[32] = ['7'];
 blocks[32] = ['A2'];
 comments[32] = "Id Pregunta: 204. Ley 39/2015";
 preguntaids[32] = 204


//  Id pregunta: 7502 Año de creación de pregunta: 2010
 questions[33]= "34)  Se&ntilde;ale cu&aacute;l de las siguientes normas se debe tener en cuenta en el &Aacute;rea de Seguridad de una organizaci&oacute;n:";
 choices[33]= new Array();
 choices[33][0] = "ISO 19799.";
 choices[33][1] = "ISO 14508 sobre perfiles de protecci&oacute;n.";
 choices[33][2] = "ISO 14848.";
 choices[33][3] = "ISO 27002.";
 answers[33] = 3;
 units[33] = ['45'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 7502. Similar a Map 2005";
 preguntaids[33] = 7502


//  Id pregunta: 6324 Año de creación de pregunta: 2003
 questions[34]= "35)  &iquest;C&oacute;mo se puede determinar en el Plan General de Garant&iacute;a de Calidad (PGGC) el nivel de intensidad que sirve para graduar las funciones de garant&iacute;a de calidad aplicables a un proyecto?";
 choices[34]= new Array();
 choices[34][0] = "No es posible en el PGGC";
 choices[34][1] = "A trav&eacute;s de la determinaci&oacute;n del perfil de riesgos del proyecto.";
 choices[34][2] = "A trav&eacute;s del foco de intensidad y de sus cinco niveles.";
 choices[34][3] = "A trav&eacute;s del foco de inter&eacute;s en garant&iacute;a de calidad y para cada fase y productos asociados con el modelos de desarrollo elegido para el proyecto.";
 answers[34] = 3;
 units[34] = ['93'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 6324. ";
 preguntaids[34] = 6324


//  Id pregunta: 9755 Año de creación de pregunta: 2014
 questions[35]= "36)  El plan de telecomunicaciones y redes ultrarr&aacute;pidas, dise&ntilde;ado para dar cumplimiento a los objetivos de banda ancha fijados por la Agenda Digital para Europa, fija como objetivos para el 2015:";
 choices[35]= new Array();
 choices[35][0] = "50% de la poblaci&oacute;n con cobertura de m&aacute;s de 100 Mbps.";
 choices[35][1] = "25% de hogares conectados a redes NGA";
 choices[35][2] = "75% de la poblaci&oacute;n con cobertura 4G";
 choices[35][3] = "Todas las anteriores";
 answers[35] = 3;
 units[35] = ['121'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 9755. http://www.agendadigital.gob.es/planes-actuaciones/Paginas/plan-telecomunicaciones-redes.aspx";
 preguntaids[35] = 9755


//  Id pregunta: 4846 Año de creación de pregunta: 2002
 questions[36]= "37)  En un entorno donde m&uacute;ltiples ordenadores cliente experimentan congesti&oacute;n accediendo a ficheros en unservidor centralizado:";
 choices[36]= new Array();
 choices[36][0] = "Un conmutador (switch) con un ancho de banda mayor dedicado a las puertas de los clientes ayudar&aacute; a aliviar la congesti&oacute;n en el servidor";
 choices[36][1] = "Un switch con el mismo ancho de banda para cada puerta asegurar&aacute; que se la carga de trabajo se distribuya";
 choices[36][2] = "Un an&aacute;lisis de las pautas de tr&aacute;fico y de los puntos cuellos de botella ayudar&aacute; a determinar el tipo de conmutador apropiado";
 choices[36][3] = "Un puente multipuerta proporcionar&aacute; acceso dedicado a la puerta del servidor y aliviar&aacute; la congesti&oacute;n";
 answers[36] = 2;
 units[36] = ['102', '114'];
 blocks[36] = ['B4'];
 comments[36] = "Id Pregunta: 4846. ";
 preguntaids[36] = 4846


//  Id pregunta: 4753 Año de creación de pregunta: 2002
 questions[37]= "38)  El protocolo TCP (Transmisi&oacute;n Control Protocol):";
 choices[37]= new Array();
 choices[37][0] = "Es orientado a conexi&oacute;n y bidireccional";
 choices[37][1] = "Es orientado a conexi&oacute;n, pero no bidireccional";
 choices[37][2] = "Es no orientado a conexi&oacute;n y bidireccional";
 choices[37][3] = "Es no orientado a conexi&oacute;n, y no bidireccional";
 answers[37] = 0;
 units[37] = ['109'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 4753. ";
 preguntaids[37] = 4753


//  Id pregunta: 1536 Año de creación de pregunta: 2016
 questions[38]= "39)  En el Real Decreto 1720/2007, se establecen las medidas de seguridad que se deben aplicar a los ficheros y tratamientos automatizados. Indica que medida se corresponde con una medida de nivel b&aacute;sico seg&uacute;n se establece en el citado Real Decreto:";
 choices[38]= new Array();
 choices[38][0] = "El responsable del fichero o tratamiento establecer&aacute; un mecanismo que limite la posibilidad de intentar reiteradamente el acceso no autorizado al sistema de informaci&oacute;n.";
 choices[38][1] = "Exclusivamente el personal autorizado en el documento de seguridad podr&aacute; tener acceso a los lugares donde se hallen instalados los equipos f&iacute;sicos que den soporte a los sistemas de informaci&oacute;n.";
 choices[38][2] = "El responsable del fichero o tratamiento adoptar&aacute; las medidas necesarias para que el personal conozca de una forma comprensible las normas de seguridad que afecten al desarrollo de sus funciones as&iacute; como las consecuencias en que pudiera incurrir en caso de incumplimiento.";
 choices[38][3] = "En el documento de seguridad deber&aacute;n designarse uno o varios responsables de seguridad encargados de coordinar y controlar las medidas definidas en el mismo.";
 answers[38] = 2;
 units[38] = ['35'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 1536. ";
 preguntaids[38] = 1536


//  Id pregunta: 6212 Año de creación de pregunta: 2003
 questions[39]= "40)  Seg&uacute;n M&eacute;trica V3, &iquest;Cu&aacute;l de los siguientes procesos NO est&aacute; incluido en el proceso de Desarrollo de Sistemas de Informaci&oacute;n?";
 choices[39]= new Array();
 choices[39][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI)";
 choices[39][1] = "Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI)";
 choices[39][2] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n (PSI)";
 choices[39][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI)";
 answers[39] = 2;
 units[39] = ['91'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 6212. Examen TIC A Castilla La Mancha 2007";
 preguntaids[39] = 6212


//  Id pregunta: 6363 Año de creación de pregunta: 2003
 questions[40]= "41)  Seg&uacute;n la ley de propiedad intelectual (RDL 1/96 de 22 de abril) &iquest;qu&eacute; es una obra compuesta?";
 choices[40]= new Array();
 choices[40][0] = "Es el resultado de la colaboraci&oacute;n entre varios autores";
 choices[40][1] = "Una obra en la que, por su complejidad, no es posible establecer un autor";
 choices[40][2] = "Es una obra nueva que incorpora otra existente sin colaboraci&oacute;n del autor de &eacute;sta";
 choices[40][3] = "La citada ley no hace referencia a tal concepto";
 answers[40] = 2;
 units[40] = ['36'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 6363. Examen 2006 JCYL";
 preguntaids[40] = 6363


//  Id pregunta: 449 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[41]= new Array();
 choices[41][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[41][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[41][2] = "Fomentar el despliegue de redes y servicios";
 choices[41][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[41] = 0;
 units[41] = ['19'];
 blocks[41] = ['A4'];
 comments[41] = "Id Pregunta: 449. Agenda Digital para Espa&ntilde;a";
 preguntaids[41] = 449


//  Id pregunta: 2147 Año de creación de pregunta: 2004
 questions[42]= "43)  Para el an&aacute;lisis de la gesti&oacute;n de riesgos:";
 choices[42]= new Array();
 choices[42][0] = "usaremos el proyecto MABER de la administraci&oacute;n";
 choices[42][1] = "seguiremos las recomendaciones de la herramienta NEDAES";
 choices[42][2] = "utilizaremos las bases sentadas por ESTROFA";
 choices[42][3] = "Ninguna de las anteriores";
 answers[42] = 3;
 units[42] = ['45'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 2147. ";
 preguntaids[42] = 2147


//  Id pregunta: 3197 Año de creación de pregunta: 2003
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes afirmaciones pertenece al RD 209/2003 ?";
 choices[43]= new Array();
 choices[43][0] = "Se podr&aacute; utilizar una direcci&oacute;n de correo ordinario para recibir avisos de env&iacute;os la direcci&oacute;n de correo &uacute;nica, no consider&aacute;ndose la notificaci&oacute;n enviada si no se ha recibido ese aviso";
 choices[43][1] = "Si el usuario lo escoge la administraci&oacute;n estar&aacute; obligada a avisar al ciudadano de que tiene una notificaci&oacute;n mediante una mensaje SMS";
 choices[43][2] = "Si el usuario al cabo de 10 d&iacute;as desde que ha recibido la notificaci&oacute;n, no la abre, se pasa a considerar otro tipo de notificaci&oacute;n, con otro plazo para la misma";
 choices[43][3] = "Si el cliente al cabo de 10 desde que ha recibido la notificaci&oacute;n, no la abre, se considera que la notificaci&oacute;n ha sido rechazada";
 answers[43] = 3;
 units[43] = ['19'];
 blocks[43] = ['A4'];
 comments[43] = "Id Pregunta: 3197. ";
 preguntaids[43] = 3197


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n:";
 choices[44]= new Array();
 choices[44][0] = "verbalmente";
 choices[44][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[44][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[44][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[44] = 2;
 units[44] = ['7'];
 blocks[44] = ['A2'];
 comments[44] = "Id Pregunta: 250. Ley 39/2015";
 preguntaids[44] = 250


//  Id pregunta: 6657 Año de creación de pregunta: 2009
 questions[45]= "46)  &iquest;Qu&eacute; NO es cierto de la Plataforma de Contrataci&oacute;n del Sector P&uacute;blico (art&iacute;culo 334 RD Legislativo 3/2011)?";
 choices[45]= new Array();
 choices[45][0] = "El acceso de los interesados se efectuar&aacute; a trav&eacute;s de un portal &uacute;nico";
 choices[45][1] = "Las Comunidades Aut&oacute;nomas y las Entidades Locales deber&aacute;n dar publicidad a sus procedimientos de contrataci&oacute;n a trav&eacute;s de la Plataforma de Contrataci&oacute;n del Estado";
 choices[45][2] = "Es una plataforma electr&oacute;nica que permite dar publicidad a trav&eacute;s de Internet de los contratos del sector p&uacute;blico";
 choices[45][3] = "La publicaci&oacute;n de anuncios y otra informaci&oacute;n relativa a los contratos en la plataforma surtir&aacute; los efectos previstos en la ley";
 answers[45] = 1;
 units[45] = ['37'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 6657. ";
 preguntaids[45] = 6657


//  Id pregunta: 10110 Año de creación de pregunta: 2015
 questions[46]= "47)  La red de acceso especificada para la tecnolog&iacute;a de comunicaciones m&oacute;viles LTE (Long Term Evolution) y que utiliza la tecnolog&iacute;a OFDMA para la comunicaci&oacute;n con los equipos de los usuarios se llama:";
 choices[46]= new Array();
 choices[46][0] = "E-UTRAN";
 choices[46][1] = "FFTN";
 choices[46][2] = "LMDS";
 choices[46][3] = "WIMAX";
 answers[46] = 0;
 units[46] = ['117', '106'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 10110. Examen TIC A2 2014";
 preguntaids[46] = 10110


//  Id pregunta: 3926 Año de creación de pregunta: 2002
 questions[47]= "48)  Los criterios asociados al factor de calidad 'correcci&oacute;n':";
 choices[47]= new Array();
 choices[47][0] = "Modularidad, Independencia de los entornos";
 choices[47][1] = "Coherencia, concisi&oacute;n";
 choices[47][2] = "Trazabilidad, integridad, coherencia";
 choices[47][3] = "Precisi&oacute;n, tolerancia a errores, simplicidad";
 answers[47] = 2;
 units[47] = ['93'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 3926. ";
 preguntaids[47] = 3926


//  Id pregunta: 5243 Año de creación de pregunta: 2006
 questions[48]= "49)  W-CDMA permite a UMTS trasmitir datos en un rango de velocidades que van desde los 144 Kbps a los 384 Kbps y hasta 2 Mbps en interior de edificios. Pero, &iquest;qu&eacute; t&eacute;cnica de duplexi&oacute;n usa W-CDMA?";
 choices[48]= new Array();
 choices[48][0] = "TDD";
 choices[48][1] = "FDD";
 choices[48][2] = "Las dos anteriores";
 choices[48][3] = "Ninguna de las anteriores";
 answers[48] = 2;
 units[48] = ['117'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 5243. ";
 preguntaids[48] = 5243


//  Id pregunta: 191 Año de creación de pregunta: 2016
 questions[49]= "50)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[49]= new Array();
 choices[49][0] = "Son actos individuales no normativos.";
 choices[49][1] = "Poseen alcance general.";
 choices[49][2] = "Son actos normativos.";
 choices[49][3] = "No son obligatorias.";
 answers[49] = 0;
 units[49] = ['5'];
 blocks[49] = ['A1'];
 comments[49] = "Id Pregunta: 191. Uni&oacute;n Europea";
 preguntaids[49] = 191


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[50]= "51)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[50]= new Array();
 choices[50][0] = "Veinticinco.";
 choices[50][1] = "Veintisiete.";
 choices[50][2] = "Veintinueve.";
 choices[50][3] = "Cuarenta y uno.";
 answers[50] = 1;
 units[50] = ['5'];
 blocks[50] = ['A1'];
 comments[50] = "Id Pregunta: 124. Uni&oacute;n Europea";
 preguntaids[50] = 124


//  Id pregunta: 10802 Año de creación de pregunta: 2015
 questions[51]= "52)  En SQL, para borrar los datos de una tabla pero seguir conserv&aacute;ndola se emplea:";
 choices[51]= new Array();
 choices[51][0] = "DROP TABLE";
 choices[51][1] = "TRUNCATE TABLE";
 choices[51][2] = "DELETE TABLE";
 choices[51][3] = "MODIFY TABLE";
 answers[51] = 1;
 units[51] = ['61'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 10802. ";
 preguntaids[51] = 10802


//  Id pregunta: 1624 Año de creación de pregunta: 2016
 questions[52]= "53)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n con la transmisi&oacute;n por fibra &oacute;ptica:";
 choices[52]= new Array();
 choices[52][0] = "La velocidad de propagaci&oacute;n de la luz a trav&eacute;s de una fibra &oacute;ptica monomodo es de 300.000 Kms/seg.";
 choices[52][1] = "La fibra &oacute;ptica monomodo tiene una atenuaci&oacute;n menor que el cable coaxial.";
 choices[52][2] = "A la fibra &oacute;ptica monomodo tambi&eacute;n se la conoce como de &iacute;ndice gradual.";
 choices[52][3] = "La fibra &oacute;ptica multimodo es la que presenta menores p&eacute;rdidas de la se&ntilde;al.";
 answers[52] = 1;
 units[52] = ['104'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 1624. ";
 preguntaids[52] = 1624


//  Id pregunta: 2842 Año de creación de pregunta: 2002
 questions[53]= "54)  En los criptosistemas asim&eacute;tricos:";
 choices[53]= new Array();
 choices[53][0] = "El emisor cifra con la clave p&uacute;blica del receptor y el receptor descifra con la clave p&uacute;blica del emisor";
 choices[53][1] = "El emisor cifra con su clave p&uacute;blica y el receptor descifra con su clave privada";
 choices[53][2] = "El emisor cifra con la clave p&uacute;blica del receptor y el receptor descifra con su clave privada";
 choices[53][3] = "El emisor cifra con su clave privada y el receptor descifra con su clave p&uacute;blica";
 answers[53] = 2;
 units[53] = ['76'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 2842. La respuesta D para que fuera correcta deberia ser &quot;El emisor cifra con su clave privada y el receptor descifra con la clave p&uacute;blica del emisor&quot;";
 preguntaids[53] = 2842


//  Id pregunta: 86 Año de creación de pregunta: 2016
 questions[54]= "55)  La iniciativa legislativa corresponde:";
 choices[54]= new Array();
 choices[54][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[54][1] = "Al rey y al Gobierno.";
 choices[54][2] = "Al Congreso, al Senado y al Rey.";
 choices[54][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[54] = 3;
 units[54] = ['1'];
 blocks[54] = ['A1'];
 comments[54] = "Id Pregunta: 86. Constituci&oacute;n de 1978";
 preguntaids[54] = 86


//  Id pregunta: 9167 Año de creación de pregunta: 2014
 questions[55]= "56)  &iquest;Cu&aacute;l de entre los siguientes es un software de gesti&oacute;n documental?";
 choices[55]= new Array();
 choices[55][0] = "Steam";
 choices[55][1] = "OpenKM";
 choices[55][2] = "Avast";
 choices[55][3] = "Lucene";
 answers[55] = 1;
 units[55] = ['99'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 9167. Examen TIC A2 2013";
 preguntaids[55] = 9167


//  Id pregunta: 9311 Año de creación de pregunta: 2014
 questions[56]= "57)  Un sistema que puede emplearse para registrar la relaci&oacute;n del ciudadano con la administraci&oacute;n, anotando todas las relaciones establecidas por &eacute;l, para configurar su personalidad administrativa digital es";
 choices[56]= new Array();
 choices[56][0] = "Gesti&oacute;n de la Relaci&oacute;n con el Cliente (CRM)";
 choices[56][1] = "Arquitectura Orientada a Servicios (SOA)";
 choices[56][2] = "Planificaci&oacute;n de Recursos Empresariales (ERP)";
 choices[56][3] = "Gesti&oacute;n de Procesos de Negocio (BPM)";
 answers[56] = 0;
 units[56] = ['69'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 9311. Examen TIC A2, Xunta de Galicia 2011";
 preguntaids[56] = 9311


//  Id pregunta: 407 Año de creación de pregunta: 2016
 questions[57]= "58)  En las bases de los concursos para la provisi&oacute;n de puestos de trabajo se computar&aacute;, a los efectos de valoraci&oacute;n del trabajo desarrollado y de los correspondientes m&eacute;ritos, el tiempo que las personas candidatas hayan permanecido:";
 choices[57]= new Array();
 choices[57][0] = "En r&eacute;gimen de excedencias, reducciones de jornada, permiso de maternidad o permiso de paternidad.";
 choices[57][1] = "En el extranjero.";
 choices[57][2] = "Ninguna es correcta.";
 choices[57][3] = "Ambas son correctas.";
 answers[57] = 0;
 units[57] = ['14'];
 blocks[57] = ['A3'];
 comments[57] = "Id Pregunta: 407. Pol&iacute;ticas de igualdad";
 preguntaids[57] = 407


//  Id pregunta: 1054 Año de creación de pregunta: 2016
 questions[58]= "59)  Las funciones resumen (hash) MD5 y SHA-1 tienen en com&uacute;n:";
 choices[58]= new Array();
 choices[58][0] = "Que ambas admiten mensajes de entrada de longitud m&aacute;xima 264 Mbytes.";
 choices[58][1] = "Que ambas generan res&uacute;menes de 128 bits.";
 choices[58][2] = "Que ambas realizan relleno de bits (si procede) en el &uacute;ltimo bloque del mensaje.";
 choices[58][3] = "Que ambas realizan 80 iteraciones por bloque del mensaje.";
 answers[58] = 2;
 units[58] = ['76'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 1054. ";
 preguntaids[58] = 1054


//  Id pregunta: 4638 Año de creación de pregunta: 2002
 questions[59]= "60)  100BaseTX, 100BaseFX, y 100BaseT4 usan los tipos de cable (o de superior calidad) , respectivamente:";
 choices[59]= new Array();
 choices[59][0] = "Categoria 5 STP, fibra &oacute;ptica, y categor&iacute;a 5 STP";
 choices[59][1] = "Fibra &oacute;ptica, Categoria 5 UTP, y categor&iacute;a 3 UTP";
 choices[59][2] = "Categor&iacute;a 5 UTP, tipo 1 STP,  y categor&iacute;a 3 UTP";
 choices[59][3] = "Categor&iacute;a 5 UTP, fibra &oacute;ptica, y categor&iacute;a 3 UTP";
 answers[59] = 3;
 units[59] = ['104'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 4638. ";
 preguntaids[59] = 4638


//  Id pregunta: 10972 Año de creación de pregunta: 2015
 questions[60]= "61)  Seg&uacute;n la ley 19/2013 de transparencia, y en lo referente a la composici&oacute;n de la Comisi&oacute;n de Transparencia y Buen Gobierno, se&ntilde;ale la FALSA:";
 choices[60]= new Array();
 choices[60][0] = "Un Senador";
 choices[60][1] = "Un representante de la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias.";
 choices[60][2] = "Un representante de la Autoridad Independiente de Responsabilidad Fiscal";
 choices[60][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[60] = 1;
 units[60] = ['22'];
 blocks[60] = ['A4'];
 comments[60] = "Id Pregunta: 10972. ";
 preguntaids[60] = 10972


//  Id pregunta: 5305 Año de creación de pregunta: 2006
 questions[61]= "62)  Sobre los buscadores en Internet se&ntilde;ale la respuesta correcta:";
 choices[61]= new Array();
 choices[61][0] = "Los buscadores de &iacute;ndices tem&aacute;ticos son sistemas de b&uacute;squeda que incorporan autom&aacute;ticamente p&aacute;ginas web clasificadas por temas.";
 choices[61][1] = "Los motores de b&uacute;squeda utilizan &ldquo;robots&rdquo; de b&uacute;squeda para incluir las p&aacute;ginas web.";
 choices[61][2] = "a) y b) son falsas";
 choices[61][3] = "a) y b) son verdaderas";
 answers[61] = 1;
 units[61] = ['103'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 5305. ";
 preguntaids[61] = 5305


//  Id pregunta: 4908 Año de creación de pregunta: 2002
 questions[62]= "63)  La primera empresa que propuso el uso de t&eacute;cnicas CDMA fue:";
 choices[62]= new Array();
 choices[62][0] = "AT&amp;T";
 choices[62][1] = "Qualcomm";
 choices[62][2] = "Motorola";
 choices[62][3] = "RCA";
 answers[62] = 1;
 units[62] = ['117'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 4908. ";
 preguntaids[62] = 4908


//  Id pregunta: 8520 Año de creación de pregunta: 2011
 questions[63]= "64)  &iquest;Cu&aacute;l es la capa del modelo OSI equivalente a Ethernet";
 choices[63]= new Array();
 choices[63][0] = "Capa F&iacute;sica de Datos";
 choices[63][1] = "Capa de Red";
 choices[63][2] = "Capa de Enlace de Datos";
 choices[63][3] = "Capa de Transporte";
 answers[63] = 2;
 units[63] = ['105'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 8520. ";
 preguntaids[63] = 8520


//  Id pregunta: 7432 Año de creación de pregunta: 2010
 questions[64]= "65)  La plataforma de servicios de validaci&oacute;n y firma electr&oacute;nica con la que las Administraciones P&uacute;blicas disponen de los instrumentos necesarios para implementar la autenticaci&oacute;n y firma electr&oacute;nica avanzada se denomina:";
 choices[64]= new Array();
 choices[64][0] = "SVF";
 choices[64][1] = "@Firma";
 choices[64][2] = "ValidaFirma";
 choices[64][3] = "VerificaFirma";
 answers[64] = 1;
 units[64] = ['47'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 7432. ";
 preguntaids[64] = 7432


//  Id pregunta: 8448 Año de creación de pregunta: 2011
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes conceptos no aplica a la Ingenier&iacute;a del conocimiento?";
 choices[65]= new Array();
 choices[65][0] = "No utiliza enfoques algor&iacute;tmicos";
 choices[65][1] = "Utiliza una estructura eminentemente procedural";
 choices[65][2] = "Utiliza una estructura eminentemente declarativa";
 choices[65][3] = "Resuelve problemas heur&iacute;sticos";
 answers[65] = 1;
 units[65] = ['68'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 8448. ";
 preguntaids[65] = 8448


//  Id pregunta: 8415 Año de creación de pregunta: 2011
 questions[66]= "67)  El proceso de normalizaci&oacute;n tiene por objeto:";
 choices[66]= new Array();
 choices[66][0] = "Establecer reglas de nombrado uniformes para las entidades, los atributos y las relaciones";
 choices[66][1] = "Obtener el dise&ntilde;o f&iacute;sico del modelo de datos";
 choices[66][2] = "Eliminar las dependencias entre atributos que originen anomal&iacute;as en el tratamiento de los datos";
 choices[66][3] = "Homogeneizar el n&uacute;mero de dimensiones de las tablas de la base de datos";
 answers[66] = 2;
 units[66] = ['61'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 8415. Operador Ayto. Madrid 2010";
 preguntaids[66] = 8415


//  Id pregunta: 144 Año de creación de pregunta: 2016
 questions[67]= "68)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[67]= new Array();
 choices[67][0] = "Tres a&ntilde;os.";
 choices[67][1] = "Cuatro a&ntilde;os.";
 choices[67][2] = "Cinco a&ntilde;os.";
 choices[67][3] = "Seis a&ntilde;os.";
 answers[67] = 0;
 units[67] = ['5'];
 blocks[67] = ['A1'];
 comments[67] = "Id Pregunta: 144. Uni&oacute;n Europea";
 preguntaids[67] = 144


//  Id pregunta: 3477 Año de creación de pregunta: 2006
 questions[68]= "69)  Se&ntilde;ale la falsa:";
 choices[68]= new Array();
 choices[68][0] = "La Ley General de Telecomunicaciones introduce modificaciones a la ley 34/2002";
 choices[68][1] = "La ley de Firma Electr&oacute;nica 59/2003 introduce modificaciones a la ley 34/2002";
 choices[68][2] = "La Ley 56/2007, de Medidas de Impulso de la Sociedad de la Informaci&oacute;n, introduce modificaciones a la ley 34/2002";
 choices[68][3] = "Son ciertas las tres anteriores";
 answers[68] = 3;
 units[68] = ['19'];
 blocks[68] = ['A4'];
 comments[68] = "Id Pregunta: 3477. ";
 preguntaids[68] = 3477


//  Id pregunta: 3276 Año de creación de pregunta: 2003
 questions[69]= "70)  Para cambiar los privilegios de un fichero en UNIX qu&eacute; comando se utiliza";
 choices[69]= new Array();
 choices[69][0] = "pwd";
 choices[69][1] = "chmod";
 choices[69][2] = "rmdir";
 choices[69][3] = "cat";
 answers[69] = 1;
 units[69] = ['57'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 3276. ";
 preguntaids[69] = 3276


//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[70]= new Array();
 choices[70][0] = "Tiene car&aacute;cter facultativo.";
 choices[70][1] = "Tiene car&aacute;cter potestativo.";
 choices[70][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[70][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[70] = 1;
 units[70] = ['22'];
 blocks[70] = ['A4'];
 comments[70] = "Id Pregunta: 500. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[70] = 500


//  Id pregunta: 1236 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Qu&eacute; tasa de transferencia tiene la codificaci&oacute;n de voz CS-ACELP (Conjugate-Structure Algebraic Code Excited Linear-Prediction) de la Recomendaci&oacute;n ITU G.729 (anexo A)?";
 choices[71]= new Array();
 choices[71][0] = "8 Kbit/s.";
 choices[71][1] = "16 Kbit/s.";
 choices[71][2] = "32 Kbit/s.";
 choices[71][3] = "64 Kbit/s.";
 answers[71] = 0;
 units[71] = ['110'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 1236. ";
 preguntaids[71] = 1236


//  Id pregunta: 22 Año de creación de pregunta: 2016
 questions[72]= "73)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[72]= new Array();
 choices[72][0] = "Al Gobierno.";
 choices[72][1] = "A las Cortes Generales.";
 choices[72][2] = "Al Poder Judicial.";
 choices[72][3] = "Al Congreso de los Diputados.";
 answers[72] = 0;
 units[72] = ['1'];
 blocks[72] = ['A1'];
 comments[72] = "Id Pregunta: 22. Constituci&oacute;n de 1978";
 preguntaids[72] = 22


//  Id pregunta: 5425 Año de creación de pregunta: 2007
 questions[73]= "74)  &iquest;Para que sirve XPath (XML Path language)?";
 choices[73]= new Array();
 choices[73][0] = "Para identificar(y seleccionar)elementos de un documento XML.";
 choices[73][1] = "Para gestionar claves en XML";
 choices[73][2] = "Para hacer consultas en documentos XML";
 choices[73][3] = "Para definir documentos XML";
 answers[73] = 0;
 units[73] = ['74'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 5425. ";
 preguntaids[73] = 5425


//  Id pregunta: 8030 Año de creación de pregunta: 2011
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos es una prueba de caja blanca?";
 choices[74]= new Array();
 choices[74][0] = "Prueba de la tabla ortogonal.";
 choices[74][1] = "Partici&oacute;n equivalente.";
 choices[74][2] = "M&eacute;todos de prueba basados en grafos.";
 choices[74][3] = "Prueba del camino b&aacute;sico.";
 answers[74] = 3;
 units[74] = ['97'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 8030. Examen TIC A2 2010";
 preguntaids[74] = 8030


