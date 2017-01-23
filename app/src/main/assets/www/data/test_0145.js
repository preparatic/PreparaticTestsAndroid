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
//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[0]= "1)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[0]= new Array();
 choices[0][0] = "La Comisi&oacute;n Europea.";
 choices[0][1] = "El Consejo Europeo.";
 choices[0][2] = "El Consejo de Europa.";
 choices[0][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[0] = 0;
 units[0] = ['5'];
 blocks[0] = ['A1'];
 comments[0] = "Id Pregunta: 130. Uni&oacute;n Europea";
 preguntaids[0] = 130


//  Id pregunta: 175 Año de creación de pregunta: 2016
 questions[1]= "2)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[1]= new Array();
 choices[1][0] = "Son vinculantes solamente.";
 choices[1][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[1][2] = "Son preceptivos y vinculantes.";
 choices[1][3] = "Son preceptivos y no vinculantes.";
 answers[1] = 1;
 units[1] = ['5'];
 blocks[1] = ['A1'];
 comments[1] = "Id Pregunta: 175. Uni&oacute;n Europea";
 preguntaids[1] = 175


//  Id pregunta: 1454 Año de creación de pregunta: 2016
 questions[2]= "3)  Seg&uacute;n la LSSI en su art&iacute;culo 42, el &oacute;rgano administrativo competente para resolver el procedimiento sancionador podr&aacute; imponer multas coercitivas por cada d&iacute;a que transcurra sin cumplir las medidas provisionales acordadas:";
 choices[2]= new Array();
 choices[2][0] = "Por importe que no exceda de 6000 euros.";
 choices[2][1] = "Por importe que no exceda de 2000 euros.";
 choices[2][2] = "Por importe de 6000 euros.";
 choices[2][3] = "Por importe de 2000 euros.";
 answers[2] = 2;
 units[2] = ['19'];
 blocks[2] = ['A4'];
 comments[2] = "Id Pregunta: 1454. ";
 preguntaids[2] = 1454


//  Id pregunta: 2203 Año de creación de pregunta: 2002
 questions[3]= "4)  Indique cu&aacute;l de las siguientes afirmaciones sobre la Agencia de Protecci&oacute;n de Datos es falsa de acuerdo con lo establecido en el real Decreto 428/93, de 26 de marzo, por el que se aprueba su Estatuto:";
 choices[3]= new Array();
 choices[3][0] = "Vela por el cumplimiento de la Ley Org&aacute;nica 5/92, de 29 de octubre, de regulaci&oacute;n del tratamiento automatizado de datos de car&aacute;cter personal (hoy d&iacute;a sustituida por la LOPD)";
 choices[3][1] = "Se relaciona con el Gobierno a trav&eacute;s del Ministerio de Justicia";
 choices[3][2] = "Dictar&aacute; recomendaciones sobre seguridad y control de acceso a ficheros";
 choices[3][3] = "Su Consejo Consultivo es un &oacute;rgano colegiado compuesto por doce miembros que asesora al Director de la Agencia de Protecci&oacute;n de Datos";
 answers[3] = 3;
 units[3] = ['35'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 2203. ";
 preguntaids[3] = 2203


//  Id pregunta: 9134 Año de creación de pregunta: 2014
 questions[4]= "5)  Seg&uacute;n el RD Legislativo 3/2011, las garant&iacute;as se:";
 choices[4]= new Array();
 choices[4][0] = "Reponen";
 choices[4][1] = "Reajustan";
 choices[4][2] = "Devuelven o cancelan";
 choices[4][3] = "Todas las anteriores";
 answers[4] = 3;
 units[4] = ['10'];
 blocks[4] = ['A2'];
 comments[4] = "Id Pregunta: 9134. Art. 99, Art. 102 RD Legislativo 3/2011";
 preguntaids[4] = 9134


//  Id pregunta: 960 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban?:";
 choices[5]= new Array();
 choices[5][0] = "Visualizar el trabajo o el flujo de trabajo";
 choices[5][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[5][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[5][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[5] = 3;
 units[5] = ['34', '84'];
 blocks[5] = ['B1', 'B3'];
 comments[5] = "Id Pregunta: 960. Metodologias &aacute;giles";
 preguntaids[5] = 960


//  Id pregunta: 2254 Año de creación de pregunta: 2002
 questions[6]= "7)  Las normas b&aacute;sicas para constituir un interfaz com&uacute;n de todos los sistemas Unix con las aplicaciones se denominan:";
 choices[6]= new Array();
 choices[6][0] = "OSI";
 choices[6][1] = "ISO";
 choices[6][2] = "POSIX";
 choices[6][3] = "XENIX";
 answers[6] = 2;
 units[6] = ['43'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 2254. ";
 preguntaids[6] = 2254


//  Id pregunta: 9890 Año de creación de pregunta: 2015
 questions[7]= "8)  Seg&uacute;n la Ley 39/2015 se establece como &quot;Derecho de las Personas en sus relaciones con la Administraci&oacute;n&quot; en su Art&iacute;culo 13.";
 choices[7]= new Array();
 choices[7][0] = "Comunicarse con las Administraciones P&uacute;blicas a trav&eacute;s de un Punto de Acceso General electr&oacute;nico de la Administraci&oacute;n.";
 choices[7][1] = "Relacionarse con las Administraciones P&uacute;blicas a trav&eacute;s de medios electr&oacute;nicos utilizando cualquier formato recogido en el ENI.";
 choices[7][2] = "Ambas";
 choices[7][3] = "Ninguna de las anteriores.";
 answers[7] = 0;
 units[7] = ['7', '19'];
 blocks[7] = ['A2', 'A4'];
 comments[7] = "Id Pregunta: 9890. ";
 preguntaids[7] = 9890


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[8]= "9)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[8]= new Array();
 choices[8][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[8][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[8][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[8][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[8] = 1;
 units[8] = ['5'];
 blocks[8] = ['A1'];
 comments[8] = "Id Pregunta: 120. Uni&oacute;n Europea";
 preguntaids[8] = 120


//  Id pregunta: 1767 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale qu&eacute; ley o leyes recomienda la ITU-T en su recomendaci&oacute;n G.711 para codificaci&oacute;n de frecuencias de se&ntilde;ales vocales:";
 choices[9]= new Array();
 choices[9][0] = "Ley A y Ley &quot;Mu&quot;.";
 choices[9][1] = "Ley A y Ley &quot;Gamma&quot;.";
 choices[9][2] = "Ley &quot;Mu&quot; y Ley &quot;Gamma&quot;";
 choices[9][3] = "Ley &quot;Gamma&quot;.";
 answers[9] = 0;
 units[9] = ['110'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 1767. ";
 preguntaids[9] = 1767


//  Id pregunta: 3077 Año de creación de pregunta: 2002
 questions[10]= "11)  Un procesador superescalar es aqu&eacute;l que:";
 choices[10]= new Array();
 choices[10][0] = "Contiene varias unidades de ejecuci&oacute;n independientes de forma que puede ejecutar varias instrucciones simult&aacute;neamente";
 choices[10][1] = "Est&aacute; optimizado para maquinas multiprocesador, principalmente por su implementaci&oacute;n de algoritmos que aseguran la coherencia de las cach&eacute;s";
 choices[10][2] = "Contiene varias unidades de coma flotante posibilitando la paralelizaci&oacute;n de c&oacute;digo en servidores de c&aacute;lculo intensivo";
 choices[10][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[10] = 0;
 units[10] = ['49'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 3077. ";
 preguntaids[10] = 3077


//  Id pregunta: 963 Año de creación de pregunta: 2016
 questions[11]= "12)  El sector p&uacute;blico institucional se integra por:";
 choices[11]= new Array();
 choices[11][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[11][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[11][2] = "las Universidades p&uacute;blicas";
 choices[11][3] = "todas son correctas";
 answers[11] = 3;
 units[11] = ['4', '7', '8', '9'];
 blocks[11] = ['A1', 'A2'];
 comments[11] = "Id Pregunta: 963. Ley 40/2015";
 preguntaids[11] = 963


//  Id pregunta: 5525 Año de creación de pregunta: 2007
 questions[12]= "13)  Cuando sobre un Data Warehouse llevamos a cabo un proceso de Data-Minig, donde la b&uacute;squeda se dirige hacia la categorizaci&oacute;n de los registros en grupos para detectar patrones aplicables, o extraer relaciones impl&iacute;citas en los datos, estamos aplicando un modelo...";
 choices[12]= new Array();
 choices[12][0] = "De validaci&oacute;n.";
 choices[12][1] = "De verificaci&oacute;n.";
 choices[12][2] = "De descubrimiento.";
 choices[12][3] = "Predictivo.";
 answers[12] = 2;
 units[12] = ['72'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 5525. ";
 preguntaids[12] = 5525


//  Id pregunta: 4283 Año de creación de pregunta: 2006
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes subcriterios no corresponde al criterio &quot;Personas&quot; en el modelo EFQM?";
 choices[13]= new Array();
 choices[13][0] = "Planificaci&oacute;n, gesti&oacute;n y mejora de los recursos humanos";
 choices[13][1] = "Identificaci&oacute;n, desarrollo y mantenimiento del conocimiento y la capacidad de las personas de la organizaci&oacute;n";
 choices[13][2] = "Existencia de un autoliderazgo en las personas de la organizaci&oacute;n";
 choices[13][3] = "Recompensa, reconocimiento y atenci&oacute;n a las personas de la organizaci&oacute;n";
 answers[13] = 2;
 units[13] = ['98'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 4283. ";
 preguntaids[13] = 4283


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[14]= "15)  En los or&iacute;genes te&oacute;ricos del t&eacute;rmino gobernanza se encuentra:";
 choices[14]= new Array();
 choices[14][0] = "Peters";
 choices[14][1] = "Hollingsworth";
 choices[14][2] = "Manuel Castells";
 choices[14][3] = "Gaebler";
 answers[14] = 1;
 units[14] = ['20'];
 blocks[14] = ['A4'];
 comments[14] = "Id Pregunta: 490. Direcci&oacute;n p&uacute;blica";
 preguntaids[14] = 490


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes principios NO se garantiza en el art&iacute;culo 9.3 de la Constituci&oacute;n Espa&ntilde;ola de 1978?";
 choices[15]= new Array();
 choices[15][0] = "Jerarqu&iacute;a normativa.";
 choices[15][1] = "Seguridad jur&iacute;dica.";
 choices[15][2] = "Responsabilidad y la interdicci&oacute;n de la arbitrariedad de los poderes p&uacute;blicos.";
 choices[15][3] = "Irretroactividad de las disposiciones sancionadoras favorables o restrictivas de derechos individuales.";
 answers[15] = 3;
 units[15] = ['1'];
 blocks[15] = ['A1'];
 comments[15] = "Id Pregunta: 54. Constituci&oacute;n de 1978";
 preguntaids[15] = 54


//  Id pregunta: 7297 Año de creación de pregunta: 2010
 questions[16]= "17)  Un tipo de software libre que lleva al cabo una auditor&iacute;a de todo el software y hardware que se encuentra en una red de una manera sencilla, adem&aacute;s de eficiente es";
 choices[16]= new Array();
 choices[16][0] = "MAPILab Reports:";
 choices[16][1] = "Network Inventory Advisor";
 choices[16][2] = "Visual audit. X4";
 choices[16][3] = "Todas las respuestas anteriores son correctas";
 answers[16] = 3;
 units[16] = ['79'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 7297. ";
 preguntaids[16] = 7297


//  Id pregunta: 7116 Año de creación de pregunta: 2010
 questions[17]= "18)  &iquest;D&oacute;nde debe publicarse la orden de creaci&oacute;n de una sede electr&oacute;nica?";
 choices[17]= new Array();
 choices[17][0] = "En la p&aacute;gina web del organismo correspondiente";
 choices[17][1] = "No es necesaria ninguna publicaci&oacute;n";
 choices[17][2] = "En el Bolet&iacute;n Oficial del Estado";
 choices[17][3] = "En dos diarios de tirada nacional";
 answers[17] = 2;
 units[17] = ['7'];
 blocks[17] = ['A2'];
 comments[17] = "Id Pregunta: 7116. Art&iacute;culo 3.2 RD 1671/2009";
 preguntaids[17] = 7116


//  Id pregunta: 2218 Año de creación de pregunta: 2002
 questions[18]= "19)  La definici&oacute;n de un entorno com&uacute;n para portabilidad de Aplicaciones fuente (Homogeneidad de Compiladores, APIs&hellip;) es una de las preocupaciones fundamentales del X/Open (actualmente Open Group) que se conoce como:";
 choices[18]= new Array();
 choices[18][0] = "XTI";
 choices[18][1] = "CAE";
 choices[18][2] = "APA";
 choices[18][3] = "GOSIP";
 answers[18] = 1;
 units[18] = ['43'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 2218. ";
 preguntaids[18] = 2218


//  Id pregunta: 506 Año de creación de pregunta: 2016
 questions[19]= "20)  La &Eacute;tica P&uacute;blica se puede definir como:";
 choices[19]= new Array();
 choices[19][0] = "El conjunto de normas que adoptan de manera voluntaria los trabajadores p&uacute;blicos con objeto de satisfacer las necesidades de los ciudadanos.";
 choices[19][1] = "El conjunto de comportamientos inadecuados por parte de empleados p&uacute;blicos y pol&iacute;ticos.";
 choices[19][2] = "El conjunto de normas que rigen la conducta de las personas que trabajan en las Administraciones P&uacute;blicas.";
 choices[19][3] = "El compromiso que adquieren los ciudadanos al relacionarse con las Administraciones P&uacute;blicas.";
 answers[19] = 2;
 units[19] = ['22'];
 blocks[19] = ['A4'];
 comments[19] = "Id Pregunta: 506. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[19] = 506


//  Id pregunta: 2935 Año de creación de pregunta: 2002
 questions[20]= "21)  La funci&oacute;n de planificar la secuencia de realizaci&oacute;n de las distintas tareas por la Unidad Central de Proceso es realizada por:";
 choices[20]= new Array();
 choices[20][0] = "El boot-strap";
 choices[20][1] = "El dispatcher";
 choices[20][2] = "El scheduler";
 choices[20][3] = "Ninguno de los anteriores";
 answers[20] = 2;
 units[20] = ['56'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 2935. ";
 preguntaids[20] = 2935


//  Id pregunta: 6164 Año de creación de pregunta: 2003
 questions[21]= "22)  Las dimensiones del DNI electr&oacute;nico son:";
 choices[21]= new Array();
 choices[21][0] = "85,60 mm de ancho X 53,98 mm de alto";
 choices[21][1] = "8,6 mm de ancho X 5,9 mm de alto";
 choices[21][2] = "60 mm de ancho X 58 mm de alto";
 choices[21][3] = "85,60 mm de alto X 53,98 mm de ancho";
 answers[21] = 0;
 units[21] = ['77'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 6164. ";
 preguntaids[21] = 6164


//  Id pregunta: 1936 Año de creación de pregunta: 2016
 questions[22]= "23)  Se&ntilde;ale como se denomina el conjunto de reglas que deben de seguir los lenguajes de programaci&oacute;n para que sean compatibles con .NET:";
 choices[22]= new Array();
 choices[22][0] = "CLS";
 choices[22][1] = "MSIL";
 choices[22][2] = "Bytecode";
 choices[22][3] = "JIT";
 answers[22] = 0;
 units[22] = ['63'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 1936. ";
 preguntaids[22] = 1936


//  Id pregunta: 7008 Año de creación de pregunta: 2010
 questions[23]= "24)  Seg&uacute;n la ISACA, una &ldquo;auditor&iacute;a de sistemas&rdquo; se puede definir como:";
 choices[23]= new Array();
 choices[23][0] = "Auditor&iacute;a que abarca la revisi&oacute;n y evaluaci&oacute;n de todos los aspectos de los sistemas autom&aacute;ticos de procesamiento de la informaci&oacute;n (o una parte de ellos), incluidos los procedimientos no autom&aacute;ticos relacionados con ellos y las interfaces correspondientes.";
 choices[23][1] = "Conjunto de actividades, t&eacute;cnicas, procedimientos y herramientas que nos permiten el control y mejora de los procesos de la organizaci&oacute;n en el campo de los sistemas de informaci&oacute;n.";
 choices[23][2] = "ISACA no ha dado una definici&oacute;n de Auditor&iacute;a porque es una organizaci&oacute;n sin &aacute;nimo de lucro que centra su actividad en la seguridad de los sistemas de informaci&oacute;n.";
 choices[23][3] = "La auditor&iacute;a que centra su actividad sobre los sistemas de una organizaci&oacute;n, incluyendo los sistemas el&eacute;ctricos, electr&oacute;nicos e inform&aacute;ticos, aplicando en los controles la normativa europea dictada por los organismos: CEN, CENELEC, EIS y ETSI.";
 answers[23] = 0;
 units[23] = ['36'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 7008. ";
 preguntaids[23] = 7008


//  Id pregunta: 1464 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Puede darse el caso de un sistema que sea, a la vez, multiusuario y monotarea?";
 choices[24]= new Array();
 choices[24][0] = "No, si es multiusuario, siempre ser&aacute; multitarea.";
 choices[24][1] = "S&iacute;, en ese caso se admiten varios usuarios al mismo tiempo, pero cada uno de ellos puede estar haciendo s&oacute;lo una tarea a la vez.";
 choices[24][2] = "S&iacute;, pero s&oacute;lo si el n&uacute;mero de usuarios es de 2, como m&aacute;ximo, ejecutando tareas alternativamente.";
 choices[24][3] = "S&iacute;, pero s&oacute;lo si se utiliza un sistema gesti&oacute;n de identidades que controle el acceso de los usuarios, de tal forma que act&uacute;e como sem&aacute;foro.";
 answers[24] = 1;
 units[24] = ['56'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 1464. ";
 preguntaids[24] = 1464


//  Id pregunta: 1955 Año de creación de pregunta: 2016
 questions[25]= "26)  Cu&aacute;l de estas afirmaciones sobre orientaci&oacute;n a objetos es FALSA:";
 choices[25]= new Array();
 choices[25][0] = "Una nueva clase toma sus m&eacute;todos y datos de su objeto padre.";
 choices[25][1] = "Una de sus caracter&iacute;sticas es la reusabilidad de software.";
 choices[25][2] = "Un objeto es la instancia de una clase.";
 choices[25][3] = "Las clases se pueden organizar en una jerarqu&iacute;a de herencias.";
 answers[25] = 0;
 units[25] = ['85'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 1955. ";
 preguntaids[25] = 1955


//  Id pregunta: 133 Año de creación de pregunta: 2016
 questions[26]= "27)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[26]= new Array();
 choices[26][0] = "El Consejo Europeo.";
 choices[26][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[26][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[26][3] = "El Parlamento Europeo.";
 answers[26] = 0;
 units[26] = ['5'];
 blocks[26] = ['A1'];
 comments[26] = "Id Pregunta: 133. Uni&oacute;n Europea";
 preguntaids[26] = 133


//  Id pregunta: 10675 Año de creación de pregunta: 2015
 questions[27]= "28)  El Derecho de Acceso a la Informaci&oacute;n P&uacute;blica, regulado en la Ley 19/2013 de Transparencia, acceso a la informaci&oacute;n p&uacute;blica y Buen Gobierno";
 choices[27]= new Array();
 choices[27][0] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 1 mes.";
 choices[27][1] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 30 d&iacute;as.";
 choices[27][2] = "Requiere pago de tasa p&uacute;blica, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 30 d&iacute;as.";
 choices[27][3] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 15 d&iacute;as.";
 answers[27] = 0;
 units[27] = ['22'];
 blocks[27] = ['A4'];
 comments[27] = "Id Pregunta: 10675. ";
 preguntaids[27] = 10675


//  Id pregunta: 9860 Año de creación de pregunta: 2015
 questions[28]= "29)  Se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[28]= new Array();
 choices[28][0] = "La tarjeta SIM contiene la clave del algoritmo de autenticaci&oacute;n con la red GSM.";
 choices[28][1] = "En GSM se utilizan circuitos conmutados extremo a extremo.";
 choices[28][2] = "En la arquitectura de GSM, la interfaz Um se encuentra entre el Subsistema de Estaci&oacute;n Base (BSS) y la Estaci&oacute;n M&oacute;vil (MS).";
 choices[28][3] = "En GSM, la separaci&oacute;n entre portadoras ascendente y descendente es de 45 Mhz.";
 answers[28] = 2;
 units[28] = ['117'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 9860. http://seguridadengprs.galeon.com/tema2.htm";
 preguntaids[28] = 9860


//  Id pregunta: 241 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[29]= new Array();
 choices[29][0] = "Al Gobierno de la naci&oacute;n";
 choices[29][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[29][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[29][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[29] = 3;
 units[29] = ['7'];
 blocks[29] = ['A2'];
 comments[29] = "Id Pregunta: 241. Ley 39/2015";
 preguntaids[29] = 241


//  Id pregunta: 5555 Año de creación de pregunta: 2007
 questions[30]= "31)  En la elaboraci&oacute;n de los DFD de un Sistema para la Gesti&oacute;n de Concursos de Provisi&oacute;n de Puestos de un Ministerio, &iquest;c&oacute;mo representar&iacute;a la publicaci&oacute;n en el BOE de las bases de concurso?";
 choices[30]= new Array();
 choices[30][0] = "Mediante un flujo de datos desde el proceso &ldquo;Generaci&oacute;n de bases&rdquo; al proceso &ldquo;Publicaci&oacute;n en el BOE&rdquo;.";
 choices[30][1] = "Mediante un flujo de datos desde el almac&eacute;n &ldquo;Bases de Concursos&rdquo; al proceso &ldquo;Publicaci&oacute;n en el BOE&rdquo;.";
 choices[30][2] = "Mediante un flujo de datos desde el almac&eacute;n &ldquo;Bases de Concursos&rdquo; a la entidad externa &ldquo;BOE&rdquo;.";
 choices[30][3] = "Mediante un flujo de datos desde el proceso &ldquo;Generaci&oacute;n de bases&rdquo; a la entidad externa &ldquo;BOE&rdquo;.";
 answers[30] = 3;
 units[30] = ['85'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 5555. ";
 preguntaids[30] = 5555


//  Id pregunta: 8230 Año de creación de pregunta: 2011
 questions[31]= "32)  La tecnolog&iacute;a que se basa en el protocolo SWAP (shared wireless access protocol) y que tiene como objetivo la conectividad sin cables dentro del hogar se llama:";
 choices[31]= new Array();
 choices[31][0] = "Bluetooth";
 choices[31][1] = "HomeRF";
 choices[31][2] = "HiperLAN/2";
 choices[31][3] = "IrLMP";
 answers[31] = 1;
 units[31] = ['108'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 8230. Examen UPM A2 2011";
 preguntaids[31] = 8230


//  Id pregunta: 6589 Año de creación de pregunta: 2009
 questions[32]= "33)  &iquest;Cu&aacute;l de estos sistemas de archivos no est&aacute; soportado de forma nativa por el kernel de Linux?";
 choices[32]= new Array();
 choices[32][0] = "ZFS";
 choices[32][1] = "XFS";
 choices[32][2] = "ext4";
 choices[32][3] = "ReiserFS";
 answers[32] = 0;
 units[32] = ['57'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 6589. ZFS es un sistema de archivos desarrollado por Sun para Solaris";
 preguntaids[32] = 6589


//  Id pregunta: 914 Año de creación de pregunta: 2016
 questions[33]= "34)  WURFL es:";
 choices[33]= new Array();
 choices[33][0] = "Una aplicaci&oacute;n web que permite comparar diferentes versiones de un mismo documento.";
 choices[33][1] = "Un repositorio de informaci&oacute;n que identifica, a partir de la metainformaci&oacute;n de una petici&oacute;n web de un dispositivo m&oacute;vil, sus capacidades y limitaciones.";
 choices[33][2] = "Un motor de b&uacute;squeda que pone el foco en la rastrear personas, su actividad online y su posible posici&oacute;n geogr&aacute;fica.";
 choices[33][3] = "Un entorno para desarrollar juegos nativos o web para cada plataforma, como Play Station, Wii, PC, Mac, etc.";
 answers[33] = 1;
 units[33] = ['118'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 914. AGE A2 2015";
 preguntaids[33] = 914


//  Id pregunta: 3512 Año de creación de pregunta: 2006
 questions[34]= "35)  En un sistema de ficheros Unix con un tama&ntilde;o de bloque de 2 KB y nodos-i con doce direcciones directas, una indirecta simple, una indirecta doble y una indirecta triple, con direcciones de bloque de 4 bytes, para representar un fichero de 2 MB";
 choices[34]= new Array();
 choices[34][0] = "Se utilizar&aacute; un bloque de indexaci&oacute;n simple y uno de indexaci&oacute;n doble";
 choices[34][1] = "Se utilizar&aacute; un bloque de indexaci&oacute;n simple y dos de indexaci&oacute;n doble";
 choices[34][2] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple y uno de indexaci&oacute;n doble";
 choices[34][3] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple";
 answers[34] = 2;
 units[34] = ['57'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 3512. ";
 preguntaids[34] = 3512


//  Id pregunta: 2570 Año de creación de pregunta: 2002
 questions[35]= "36)  &iquest;Qu&eacute; tipo de aplicaciones son Vuze, eMule, eDonkey&hellip;?:";
 choices[35]= new Array();
 choices[35][0] = "Chat";
 choices[35][1] = "Correo electr&oacute;nico";
 choices[35][2] = "Peer to Peer";
 choices[35][3] = "B2C";
 answers[35] = 2;
 units[35] = ['66'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 2570. ";
 preguntaids[35] = 2570


//  Id pregunta: 218 Año de creación de pregunta: 2016
 questions[36]= "37)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[36]= new Array();
 choices[36][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la Ley 39/2015";
 choices[36][1] = "la Ley 39/2015, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[36][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la Ley 39/2015";
 choices[36][3] = "la Ley 39/2015, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[36] = 0;
 units[36] = ['7'];
 blocks[36] = ['A2'];
 comments[36] = "Id Pregunta: 218. Ley 39/2015";
 preguntaids[36] = 218


//  Id pregunta: 1551 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes herramientas de comprobaci&oacute;n de accesibilidad de paginas Web ha sido desarrollada por el INTECO (Instituto Nacional de Tecnolog&iacute;as de la Comunicaci&oacute;n, S.A)?";
 choices[37]= new Array();
 choices[37][0] = "TAW";
 choices[37][1] = "HERA";
 choices[37][2] = "INTAV";
 choices[37][3] = "WAI";
 answers[37] = 2;
 units[37] = ['42'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 1551. ";
 preguntaids[37] = 1551


//  Id pregunta: 7776 Año de creación de pregunta: 2010
 questions[38]= "39)  &iquest;Cu&aacute;l NO es un formato espec&iacute;fico de factura electr&oacute;nica?";
 choices[38]= new Array();
 choices[38][0] = "UBL.";
 choices[38][1] = "EDI.";
 choices[38][2] = "FacturaDTD.";
 choices[38][3] = "CCI-AEAT.";
 answers[38] = 2;
 units[38] = ['75'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 7776. ";
 preguntaids[38] = 7776


//  Id pregunta: 3055 Año de creación de pregunta: 2002
 questions[39]= "40)  Si a un sistema experto se le vac&iacute;a su base de conocimientos dejando intactos el resto de sus componentes (base de reglas y motor de inferencia) para que se pueda aplicar a temas similares al que dio lugar al desarrollo se denomina  sistema:";
 choices[39]= new Array();
 choices[39][0] = "Kernel o n&uacute;cleo";
 choices[39][1] = "Concha o shell";
 choices[39][2] = "Sistema inferente";
 choices[39][3] = "Sistema fuente";
 answers[39] = 1;
 units[39] = ['68'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 3055. ";
 preguntaids[39] = 3055


//  Id pregunta: 4828 Año de creación de pregunta: 2002
 questions[40]= "41)  En notaci&oacute;n Kendall A/B/X/Y/Z:";
 choices[40]= new Array();
 choices[40][0] = "X especifica la distribuci&oacute;n del tiempo de servicio.";
 choices[40][1] = "Y especifica la distribuci&oacute;n de las llegadas al sistema.";
 choices[40][2] = "Z especifica la disciplina de cola.";
 choices[40][3] = "La notaci&oacute;n empleada en teor&iacute;a de tr&aacute;fico se debe a Erlang y no a Kendall.";
 answers[40] = 2;
 units[40] = ['56'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 4828. ";
 preguntaids[40] = 4828


//  Id pregunta: 3966 Año de creación de pregunta: 2002
 questions[41]= "42)  Si se usa COCOMO, no se tendr&aacute;n en cuenta:";
 choices[41]= new Array();
 choices[41][0] = "Las l&iacute;neas de c&oacute;digo de los programas de pruebas";
 choices[41][1] = "Las declaraciones iniciales";
 choices[41][2] = "Los trabajos desarrollados en &quot;scripts&quot;";
 choices[41][3] = "Las instrucciones de formateo por pantalla de los datos";
 answers[41] = 0;
 units[41] = ['94'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 3966. ";
 preguntaids[41] = 3966


//  Id pregunta: 5090 Año de creación de pregunta: 2003
 questions[42]= "43)  Con respecto a las l&iacute;neas PLC (POWER LINE COMMUNICATIONS) no es cierto que:";
 choices[42]= new Array();
 choices[42][0] = "Tiene problemas respecto a sus a prestaciones o a la velocidad debido al ruido y microcortes";
 choices[42][1] = "No es necesaria nueva regulaci&oacute;n debido a la que ya existe para las l&iacute;neas de potencia instaladas";
 choices[42][2] = "Requiere colocar amplificadores de desacoplamiento en cada transformador de media/baja tensi&oacute;n porque estos act&uacute;an como filtros para los datos";
 choices[42][3] = "Deben enfrentarse a todas las interferencias y perturbaciones presentes, debido a la amplia proliferaci&oacute;n de electrodom&eacute;sticos y otros dispositivos conectados";
 answers[42] = 1;
 units[42] = ['108'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 5090. ";
 preguntaids[42] = 5090


//  Id pregunta: 4969 Año de creación de pregunta: 2002
 questions[43]= "44)  Las Infrestructuras Comunes de Telecomunicaciones (ICT) para el acceso a los servicios de telecomunicaciones en el interior de edificios se regulan mediante:";
 choices[43]= new Array();
 choices[43][0] = "Real Decreto 346/2011 del 11 de marzo.";
 choices[43][1] = "Real Decreto 401/2003 del 4 de abril";
 choices[43][2] = "Ordenanzas municipales";
 choices[43][3] = "Reglamentos de las comunidades aut&oacute;nomas";
 answers[43] = 0;
 units[43] = ['121'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 4969. ";
 preguntaids[43] = 4969


//  Id pregunta: 7298 Año de creación de pregunta: 2010
 questions[44]= "45)  En el trabajo de auditor:";
 choices[44]= new Array();
 choices[44][0] = "Se distinguen de forma general tres etapas";
 choices[44][1] = "Una de las etapas se denomina proceso, donde se realiza el an&aacute;lisis cuantitativo y cualitativo de la informaci&oacute;n recabada.";
 choices[44][2] = "A y B son correctas";
 choices[44][3] = "A y B son incorrectas";
 answers[44] = 2;
 units[44] = ['79'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 7298. ";
 preguntaids[44] = 7298


//  Id pregunta: 1669 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;El lenguaje de programaci&oacute;n java tiene APIs para el protocolo de comunicaciones seguras Secure Sockets Layer (SSL)?.";
 choices[45]= new Array();
 choices[45][0] = "S&iacute;, por ejemplo, la Java Secure Socket Extensi&oacute;n (JSSE) que incluye clases que pueden ser instanciadas para crear canales seguros.";
 choices[45][1] = "En la actualidad para realizar las funciones de encriptaci&oacute;n de la informaci&oacute;n solo est&aacute; disponible la clase SSLSocket.";
 choices[45][2] = "Java solo admite SSL para programar clientes web.";
 choices[45][3] = "S&iacute;, cuenta con las CRL o listas de revocaci&oacute;n de certificados.";
 answers[45] = 0;
 units[45] = ['64'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 1669. ";
 preguntaids[45] = 1669


//  Id pregunta: 3469 Año de creación de pregunta: 2006
 questions[46]= "47)  Los documentos de la serie PKCS son especificaciones producidas por los Laboratorios RSA. Se&ntilde;ale la falsa:";
 choices[46]= new Array();
 choices[46][0] = "PKCS#3 Protocolo de acuerdo de claves Diffie-Hellman";
 choices[46][1] = "PKCS#11 Cryptoki";
 choices[46][2] = "PKCS#1 Standard de encriptaci&oacute;n RSA";
 choices[46][3] = "Todas son ciertas";
 answers[46] = 3;
 units[46] = ['76'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 3469. ";
 preguntaids[46] = 3469


//  Id pregunta: 6315 Año de creación de pregunta: 2003
 questions[47]= "48)  Indique cu&aacute;l de las siguientes opciones describe el nivel 2 del modelo CMM";
 choices[47]= new Array();
 choices[47][0] = "No se han definido procesos metodol&oacute;gicos, o si se han definido no se siguen";
 choices[47][1] = "El proceso de software est&aacute; documentado, homogeneizado e integrado en un proceso de software est&aacute;ndar dentro de la organizaci&oacute;n";
 choices[47][2] = "Se establecen pol&iacute;ticas y procedimientos de administraci&oacute;n e implantaci&oacute;n del modelo b&aacute;sico para determinar costos, calendarios y funcionalidades";
 choices[47][3] = "Se recolectan medidas detalladas del proceso de software y de la calidad del producto Ambos son cuantitativamente entendidos y controlados.";
 answers[47] = 2;
 units[47] = ['92'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 6315. ";
 preguntaids[47] = 6315


//  Id pregunta: 3676 Año de creación de pregunta: 2002
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes no es un instrumento de control contemplado por el Plan General de Garant&iacute;a de Calidad?:";
 choices[48]= new Array();
 choices[48][0] = "Revisiones t&eacute;cnicas formales";
 choices[48][1] = "Guiones de recomendaciones";
 choices[48][2] = "Listas de control";
 choices[48][3] = "Las tres anteriores son instrumentos de control contemplados por el PGGC";
 answers[48] = 0;
 units[48] = ['93'];
 blocks[48] = ['B3'];
 comments[48] = "Id Pregunta: 3676. ";
 preguntaids[48] = 3676


//  Id pregunta: 7828 Año de creación de pregunta: 2010
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as es usada espec&iacute;ficamente por el CRM de tipo anal&iacute;tico?";
 choices[49]= new Array();
 choices[49][0] = "Software de gesti&oacute;n de incidencias.";
 choices[49][1] = "Software de gesti&oacute;n de correo electr&oacute;nico entrante y saliente.";
 choices[49][2] = "Datawarehouse.";
 choices[49][3] = "Call-center: software de visi&oacute;n unificada de clientes.";
 answers[49] = 2;
 units[49] = ['69'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 7828. ";
 preguntaids[49] = 7828


//  Id pregunta: 8751 Año de creación de pregunta: 2013
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes no es una de las cinco funciones de la auditor&iacute;a inform&aacute;tica?";
 choices[50]= new Array();
 choices[50][0] = "Velar por la eficacia y eficiencia del sistema inform&aacute;tico";
 choices[50][1] = "Verificar el cumplimiento de las normas y est&aacute;ndares vigentes en la organizaci&oacute;n";
 choices[50][2] = "Verificar la calidad de los sistemas de informaci&oacute;n, y proponer e implantar mejoras en los mismos";
 choices[50][3] = "Supervisar los mecanismos de control interno";
 answers[50] = 2;
 units[50] = ['36'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 8751. ";
 preguntaids[50] = 8751


//  Id pregunta: 1032 Año de creación de pregunta: 2016
 questions[51]= "52)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[51]= new Array();
 choices[51][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[51][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[51][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[51][3] = "Todas son correctas.";
 answers[51] = 3;
 units[51] = ['4', '7', '8', '9'];
 blocks[51] = ['A1', 'A2'];
 comments[51] = "Id Pregunta: 1032. Ley 40/2015";
 preguntaids[51] = 1032


//  Id pregunta: 3969 Año de creación de pregunta: 2002
 questions[52]= "53)  UML se corresponde con:";
 choices[52]= new Array();
 choices[52][0] = "Unstructured Markup Language, Lenguaje Estructurado de Marcaci&oacute;n.";
 choices[52][1] = "Unified Multimedia Language, Lenguaje Multimedia Unificado.";
 choices[52][2] = "Unified Modelling Language, Lenguaje Unificado de Modelado.";
 choices[52][3] = "Universal Modelling Language, Lenguaje de Modelado Universal";
 answers[52] = 2;
 units[52] = ['85', '89'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 3969. ";
 preguntaids[52] = 3969


//  Id pregunta: 281 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[53]= new Array();
 choices[53][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[53][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[53][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[53][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[53] = 3;
 units[53] = ['11'];
 blocks[53] = ['A2'];
 comments[53] = "Id Pregunta: 281. Presupuestos generales";
 preguntaids[53] = 281


//  Id pregunta: 4116 Año de creación de pregunta: 2003
 questions[54]= "55)  Formato m&aacute;s utilizado en la actualidad en los Sistemas de Gesti&oacute;n de Contenidos:";
 choices[54]= new Array();
 choices[54][0] = "HTTP.";
 choices[54][1] = "CCS.";
 choices[54][2] = "Excel.";
 choices[54][3] = "XML.";
 answers[54] = 3;
 units[54] = ['99'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 4116. ";
 preguntaids[54] = 4116


//  Id pregunta: 1042 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[55]= new Array();
 choices[55][0] = "Conferencia de Presidentes.";
 choices[55][1] = "Convenios de colaboraci&oacute;n.";
 choices[55][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[55][3] = "Conferencias Sectoriales.";
 answers[55] = 0;
 units[55] = ['4', '7', '8', '9'];
 blocks[55] = ['A1', 'A2'];
 comments[55] = "Id Pregunta: 1042. Ley 40/2015";
 preguntaids[55] = 1042


//  Id pregunta: 1434 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n el art&iacute;culo 81 de la Constituci&oacute;n Espa&ntilde;ola &iquest;qu&eacute; mayor&iacute;a del Congreso ser&aacute; necesaria para la aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas en una votaci&oacute;n final sobre el conjunto del proyecto?";
 choices[56]= new Array();
 choices[56][0] = "Las leyes org&aacute;nicas exigir&aacute;n en primera votaci&oacute;n mayor&iacute;a absoluta y transcurridas cuarenta y ocho horas mayor&iacute;a simple.";
 choices[56][1] = "Las leyes org&aacute;nicas exigir&aacute;n en primera votaci&oacute;n mayor&iacute;a absoluta y transcurridas cuarenta y ocho horas mayor&iacute;a ordinaria.";
 choices[56][2] = "Las leyes org&aacute;nicas exigir&aacute;n en primera votaci&oacute;n mayor&iacute;a absoluta y transcurridas cuarenta y ocho horas mayor&iacute;a cualificada.";
 choices[56][3] = "Las leyes org&aacute;nicas exigir&aacute;n mayor&iacute;a absoluta.";
 answers[56] = 3;
 units[56] = ['1'];
 blocks[56] = ['A1'];
 comments[56] = "Id Pregunta: 1434. ";
 preguntaids[56] = 1434


//  Id pregunta: 5400 Año de creación de pregunta: 2006
 questions[57]= "58)  Las redes integradas de Datos y Voz se definen en el grupo de trabajo del IEEE";
 choices[57]= new Array();
 choices[57][0] = "802.9";
 choices[57][1] = "802.1";
 choices[57][2] = "802.11";
 choices[57][3] = "802.12";
 answers[57] = 0;
 units[57] = ['112'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 5400. ";
 preguntaids[57] = 5400


//  Id pregunta: 235 Año de creación de pregunta: 2016
 questions[58]= "59)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[58]= new Array();
 choices[58][0] = "apud acta";
 choices[58][1] = "presencialmente";
 choices[58][2] = "electr&oacute;nicamente";
 choices[58][3] = "todas son correctas";
 answers[58] = 3;
 units[58] = ['7'];
 blocks[58] = ['A2'];
 comments[58] = "Id Pregunta: 235. Ley 39/2015";
 preguntaids[58] = 235


//  Id pregunta: 4337 Año de creación de pregunta: 2004
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguentes no son funciones de la CNMC seg&uacute;n la Ley 9/2014, General de Telecomunicaciones?";
 choices[59]= new Array();
 choices[59][0] = "Establecer, cuando proceda, las obligaciones espec&iacute;ficas que correspondan a los operadores con poder significativo en mercados de referencia.";
 choices[59][1] = "Realizar las funciones de arbitraje, tanto de derecho como de equidad, que le sean sometidas por los operadores de comunicaciones electr&oacute;nicas en aplicaci&oacute;n de la Ley 60/2003, de 23 de diciembre, de Arbitraje.";
 choices[59][2] = "Gesti&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico.";
 choices[59][3] = "Fijar las caracter&iacute;sticas y condiciones para la conservaci&oacute;n de los n&uacute;meros en aplicaci&oacute;n de los aspectos t&eacute;cnicos y administrativos que mediante real decreto se establezcan para que &eacute;sta se lleve a cabo.";
 answers[59] = 2;
 units[59] = ['121'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 4337. ";
 preguntaids[59] = 4337


//  Id pregunta: 2004 Año de creación de pregunta: 2002
 questions[60]= "61)  &iquest;Cu&aacute;l no es una metodolog&iacute;a para la planificaci&oacute;n de la capacidad de un sistema inform&aacute;tico?:";
 choices[60]= new Array();
 choices[60][0] = "Simulaci&oacute;n";
 choices[60][1] = "La programaci&oacute;n lineal";
 choices[60][2] = "las reglas basadas en la experiencia";
 choices[60][3] = "La teor&iacute;a de colas";
 answers[60] = 1;
 units[60] = ['39'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 2004. ";
 preguntaids[60] = 2004


//  Id pregunta: 7345 Año de creación de pregunta: 2010
 questions[61]= "62)  Seg&uacute;n la nomenclatura de Boehm en el modelo COCOMO los proyectos pueden ser:";
 choices[61]= new Array();
 choices[61][0] = "Org&aacute;nicos, semiorg&aacute;nicos y empotrados";
 choices[61][1] = "Org&aacute;nicos, acoplados y empotrados";
 choices[61][2] = "Org&aacute;nicos, acoplados y semiempotrados";
 choices[61][3] = "Org&aacute;nicos, empotrados y semiacoplados";
 answers[61] = 3;
 units[61] = ['94'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 7345. ";
 preguntaids[61] = 7345


//  Id pregunta: 993 Año de creación de pregunta: 2016
 questions[62]= "63)  Se&ntilde;ale la respuesta correcta en relacion a la Ley 40/2015:";
 choices[62]= new Array();
 choices[62][0] = "corresponde a los &oacute;rganos superiores de la organizacion central establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[62][1] = "corresponde a los organos superiores de la organizacion central establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[62][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[62][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[62] = 0;
 units[62] = ['4', '7', '8', '9'];
 blocks[62] = ['A1', 'A2'];
 comments[62] = "Id Pregunta: 993. Ley 40/2015";
 preguntaids[62] = 993


//  Id pregunta: 8020 Año de creación de pregunta: 2011
 questions[63]= "64)  Se&ntilde;ale cu&aacute;l de las siguientes opciones NO es una herramienta de benchmarking de aplicaciones web:";
 choices[63]= new Array();
 choices[63][0] = "JMeter.";
 choices[63][1] = "OpenSTA.";
 choices[63][2] = "ApacheBench.";
 choices[63][3] = "Junit.";
 answers[63] = 3;
 units[63] = ['112'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 8020. Examen TIC A2 2010";
 preguntaids[63] = 8020


//  Id pregunta: 7373 Año de creación de pregunta: 2010
 questions[64]= "65)  Dentro de los est&aacute;ndares XML, aquel  donde se definen los enlaces a otros documentos, a c&oacute;digo ejecutable, etc. Es:";
 choices[64]= new Array();
 choices[64][0] = "DTD";
 choices[64][1] = "XSL";
 choices[64][2] = "XLL";
 choices[64][3] = "DHTML";
 answers[64] = 2;
 units[64] = ['74'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 7373. Examen TIC B 2009";
 preguntaids[64] = 7373


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[65]= "66)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[65]= new Array();
 choices[65][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[65][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[65][2] = "Las respuestas a) b) no son correctas.";
 choices[65][3] = "Las respuestas a) y b) son correctas.";
 answers[65] = 3;
 units[65] = ['11'];
 blocks[65] = ['A2'];
 comments[65] = "Id Pregunta: 298. Presupuestos generales";
 preguntaids[65] = 298


//  Id pregunta: 8404 Año de creación de pregunta: 2011
 questions[66]= "67)  Indicar cu&aacute;l de las siguientes herramientas y protocolos permite el control remoto de puestos de usuario:";
 choices[66]= new Array();
 choices[66][0] = "NNTP.";
 choices[66][1] = "VNC.";
 choices[66][2] = "NTP.";
 choices[66][3] = "FTP";
 answers[66] = 1;
 units[66] = ['123'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 8404. Operador Ayto. Madrid 2010";
 preguntaids[66] = 8404


//  Id pregunta: 1910 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA?:";
 choices[67]= new Array();
 choices[67][0] = "Paquete Unicast es un paquete de datos dirigido a una &uacute;nica estaci&oacute;n";
 choices[67][1] = "Paquete Multicast es un paquete de datos dirigido a un grupo de estaciones, seleccion&aacute;ndose la interfaz m&aacute;s cercana";
 choices[67][2] = "Paquete Broadcast es un paquete de datos dirigido a todas y cada una de las estaciones del segmento local";
 choices[67][3] = "Paquete Anycast es un paquete dirigido a un grupo de estaciones, con la diferencia en que se selecciona una de estas estaciones para ser la destinataria de la informaci&oacute;n";
 answers[67] = 1;
 units[67] = ['109'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 1910. ";
 preguntaids[67] = 1910


//  Id pregunta: 428 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes no es uno de los Ejes en torno a los cuales se articula La Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo seg&uacute;n el Real Decreto Legislativo 3/2015?";
 choices[68]= new Array();
 choices[68][0] = "Orientaci&oacute;n";
 choices[68][1] = "Empleo p&uacute;blico";
 choices[68][2] = "Formaci&oacute;n";
 choices[68][3] = "Emprendimiento";
 answers[68] = 1;
 units[68] = ['15'];
 blocks[68] = ['A3'];
 comments[68] = "Id Pregunta: 428. Modelo econ&oacute;mico";
 preguntaids[68] = 428


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[69]= new Array();
 choices[69][0] = "Cassandra";
 choices[69][1] = "Riak";
 choices[69][2] = "Avro";
 choices[69][3] = "Zookeeper";
 answers[69] = 3;
 units[69] = ['73'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 754. Big Data y NoSQL";
 preguntaids[69] = 754


//  Id pregunta: 4230 Año de creación de pregunta: 2006
 questions[70]= "71)  El modelo de Jelinsi-Moranda se encuadra dentro de las m&eacute;tricas de:";
 choices[70]= new Array();
 choices[70][0] = "Productividad";
 choices[70][1] = "Fiabilidad";
 choices[70][2] = "Factores de calidad";
 choices[70][3] = "Complejidad";
 answers[70] = 1;
 units[70] = ['93'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 4230. ";
 preguntaids[70] = 4230


//  Id pregunta: 4634 Año de creación de pregunta: 2002
 questions[71]= "72)  &iquest;Qu&eacute; topolog&iacute;a tiene una red ethernet cableada con 10 Base T?:";
 choices[71]= new Array();
 choices[71][0] = "Bus";
 choices[71][1] = "Estrella";
 choices[71][2] = "Anillo";
 choices[71][3] = "Doble bus";
 answers[71] = 1;
 units[71] = ['112'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 4634. ";
 preguntaids[71] = 4634


//  Id pregunta: 310 Año de creación de pregunta: 2016
 questions[72]= "73)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[72]= new Array();
 choices[72][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[72][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[72][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[72][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[72] = 2;
 units[72] = ['11'];
 blocks[72] = ['A2'];
 comments[72] = "Id Pregunta: 310. Presupuestos generales";
 preguntaids[72] = 310


//  Id pregunta: 1431 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes NO es una potestad de las Cortes Generales declarada en el art&iacute;culo 66 de la Constituci&oacute;n Espa&ntilde;ola?";
 choices[73]= new Array();
 choices[73][0] = "La potestad legislativa del Estado.";
 choices[73][1] = "Aprobar sus Presupuestos.";
 choices[73][2] = "La potestad reglamentaria del Estado.";
 choices[73][3] = "Controlar la acci&oacute;n del Gobierno.";
 answers[73] = 2;
 units[73] = ['1'];
 blocks[73] = ['A1'];
 comments[73] = "Id Pregunta: 1431. ";
 preguntaids[73] = 1431


//  Id pregunta: 6581 Año de creación de pregunta: 2003
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares no est&aacute; asociado a los servicios web?";
 choices[74]= new Array();
 choices[74][0] = "SOAP";
 choices[74][1] = "UDDI";
 choices[74][2] = "XFSS";
 choices[74][3] = "HTTP";
 answers[74] = 2;
 units[74] = ['55'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 6581. ";
 preguntaids[74] = 6581


