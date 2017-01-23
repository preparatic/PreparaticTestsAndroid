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
//  Id pregunta: 424 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[0]= new Array();
 choices[0][0] = "Anual";
 choices[0][1] = "Mensual";
 choices[0][2] = "Semestral";
 choices[0][3] = "Trimestral";
 answers[0] = 3;
 units[0] = ['15'];
 blocks[0] = ['A3'];
 comments[0] = "Id Pregunta: 424. Mercado laboral";
 preguntaids[0] = 424


//  Id pregunta: 3657 Año de creación de pregunta: 2002
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes afirmaciones referentes al paradigma de desarrollo mediante prototipos es cierta?:";
 choices[1]= new Array();
 choices[1][0] = "Est&aacute; indicado cuando las especificaciones funcionales del usuario no se pueden definir en una fase inicial del proyecto";
 choices[1][1] = "Est&aacute; indicado cuando varias aplicaciones independientemente desarrolladas deban ser ligadas estrechamente";
 choices[1][2] = "Coincide con el modelo de desarrollo evolutivo";
 choices[1][3] = "En este modelo, el sistema operativo, lenguaje de programaci&oacute;n y algoritmos son las &uacute;nicas coincidencias entre prototipo y sistema final";
 answers[1] = 0;
 units[1] = ['90'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 3657. ";
 preguntaids[1] = 3657


//  Id pregunta: 3596 Año de creación de pregunta: 2004
 questions[2]= "3)  &iquest;En qu&eacute; fase se hace el modelo l&oacute;gico de datos?";
 choices[2]= new Array();
 choices[2][0] = "Dise&ntilde;o";
 choices[2][1] = "Estudio de viabilidad";
 choices[2][2] = "An&aacute;lisis orientado a objetos";
 choices[2][3] = "An&aacute;lisis estructurado";
 answers[2] = 3;
 units[2] = ['91'];
 blocks[2] = ['B3'];
 comments[2] = "Id Pregunta: 3596. Examen Seguridad Social-A 2004";
 preguntaids[2] = 3596


//  Id pregunta: 5721 Año de creación de pregunta: 2007
 questions[3]= "4)  Para hacer una llamada a un procedimiento almacenado trabajando con JDBC podemos utilizar un objeto CallableStatement. Si el procedimiento almacenado devuelve mas de un conjunto de resultados, &iquest;qu&eacute; m&eacute;todo deberemos invocar?:";
 choices[3]= new Array();
 choices[3][0] = "execute";
 choices[3][1] = "executeQuery";
 choices[3][2] = "executeProcedure";
 choices[3][3] = "executeUpdate";
 answers[3] = 0;
 units[3] = ['64'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 5721. ";
 preguntaids[3] = 5721


//  Id pregunta: 8714 Año de creación de pregunta: 2013
 questions[4]= "5)  Si queremos programar la ejecuci&oacute;n del script &quot;/home/user/script.sh&quot; todos los mi&eacute;rcoles y domingos cada 4 horas, la entrada a a&ntilde;adir en el fichero cron ser&iacute;a:";
 choices[4]= new Array();
 choices[4][0] = "0 */4 * * 3,7 /home/user/script.sh";
 choices[4][1] = "* 4 * * 0,3 /home/user/script.sh";
 choices[4][2] = "0 */4 wed,sun * * /home/user/script.sh";
 choices[4][3] = "* */4 * * 3-7 /home/user/script.sh";
 answers[4] = 0;
 units[4] = ['57'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 8714. Examen TICA2-2011";
 preguntaids[4] = 8714


//  Id pregunta: 7731 Año de creación de pregunta: 2010
 questions[5]= "6)  &iquest;Qu&eacute; tipos de certificado est&aacute;n incluidos en el DNIe?";
 choices[5]= new Array();
 choices[5][0] = "Autenticaci&oacute;n y firma.";
 choices[5][1] = "Cifrado y firma.";
 choices[5][2] = "Firma.";
 choices[5][3] = "Cifrado, firma y autenticaci&oacute;n.";
 answers[5] = 0;
 units[5] = ['78'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 7731. Map 2007";
 preguntaids[5] = 7731


//  Id pregunta: 1685 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Qu&eacute; objetos NO forman parte de un diagrama de flujo de datos, de acuerdo con la metodolog&iacute;a METRICA?";
 choices[6]= new Array();
 choices[6][0] = "Entidades externas.";
 choices[6][1] = "Condiciones.";
 choices[6][2] = "Procesos.";
 choices[6][3] = "Almacenes de datos.";
 answers[6] = 1;
 units[6] = ['91'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 1685. ";
 preguntaids[6] = 1685


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[7]= new Array();
 choices[7][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[7][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[7][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[7][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[7] = 1;
 units[7] = ['19'];
 blocks[7] = ['A4'];
 comments[7] = "Id Pregunta: 452. Agenda Digital para Espa&ntilde;a";
 preguntaids[7] = 452


//  Id pregunta: 3476 Año de creación de pregunta: 2006
 questions[8]= "9)  De acuerdo a la ley 34/2002, se&ntilde;ale la verdadera:";
 choices[8]= new Array();
 choices[8][0] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente previamente no solicitadas o expresamente autorizadas por los destinatarios de las mismas";
 choices[8][1] = "Es posible el env&iacute;o de comunicaciones publicitarias si existe relaci&oacute;n contractual previa";
 choices[8][2] = "Para que sea v&aacute;lida la celebraci&oacute;n de contratos por v&iacute;a electr&oacute;nica no ser&aacute; necesario el previo acuerdo de las partes sobre la utilizaci&oacute;n de medios electr&oacute;nicos.";
 choices[8][3] = "Todas son verdaderas";
 answers[8] = 3;
 units[8] = ['19'];
 blocks[8] = ['A4'];
 comments[8] = "Id Pregunta: 3476. ";
 preguntaids[8] = 3476


//  Id pregunta: 9956 Año de creación de pregunta: 2015
 questions[9]= "10)  &iquest;En qu&eacute; a&ntilde;o se public&oacute; la Estrategia de Ciberseguridad Nacional?";
 choices[9]= new Array();
 choices[9][0] = "2011";
 choices[9][1] = "2012";
 choices[9][2] = "2013";
 choices[9][3] = "2014";
 answers[9] = 2;
 units[9] = ['46'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 9956. ";
 preguntaids[9] = 9956


//  Id pregunta: 8661 Año de creación de pregunta: 2013
 questions[10]= "11)  &iquest;C&oacute;mo se identifican los equipos pertenecientes a una red FC?";
 choices[10]= new Array();
 choices[10][0] = "Mediante la MAC";
 choices[10][1] = "Mediante su WWN (World Wide Name)";
 choices[10][2] = "Mediante una url";
 choices[10][3] = "Mediante un identificador que el administrador configure en el momento de la instalaci&oacute;n.";
 answers[10] = 1;
 units[10] = ['53'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 8661. ";
 preguntaids[10] = 8661


//  Id pregunta: 1155 Año de creación de pregunta: 2016
 questions[11]= "12)  En teor&iacute;a de colas, el modelo de disciplina de cola denominado RSS se refiere a que:";
 choices[11]= new Array();
 choices[11][0] = "Se atiende primero al cliente que antes haya llegado.";
 choices[11][1] = "Selecciona a los clientes de manera aleatoria, de acuerdo a alg&uacute;n procedimiento de prioridad o a alg&uacute;n otro orden.";
 choices[11][2] = "Sirve a los clientes igualmente, se reparte un espacio de tiempo a cada cliente.";
 choices[11][3] = "Se atiende primero al cliente que ha llegado el &uacute;ltimo.";
 answers[11] = 1;
 units[11] = ['86'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 1155. ";
 preguntaids[11] = 1155


//  Id pregunta: 10406 Año de creación de pregunta: 2015
 questions[12]= "13)  &iquest;C&oacute;mo se denomina el plan espa&ntilde;ol que hace referencia al objetivo de mejorar la Administraci&oacute;n electr&oacute;nica seg&uacute;n la Agenda Digital Espa&ntilde;ola?";
 choices[12]= new Array();
 choices[12][0] = "Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la AGE";
 choices[12][1] = "Plan de Servicios P&uacute;blicos Digitales";
 choices[12][2] = "Los dos anteriores son verdaderos";
 choices[12][3] = "Todas las respuestas son falsas";
 answers[12] = 2;
 units[12] = ['19'];
 blocks[12] = ['A4'];
 comments[12] = "Id Pregunta: 10406. ";
 preguntaids[12] = 10406


//  Id pregunta: 1430 Año de creación de pregunta: 2016
 questions[13]= "14)  De conformidad con el art&iacute;culo 59 de la Constituci&oacute;n Espa&ntilde;ola, si no hubiere ninguna persona a quien corresponda la Regencia, &eacute;sta ser&aacute; nombrada por las Cortes Generales, y se compondr&aacute;:";
 choices[13]= new Array();
 choices[13][0] = "De una persona.";
 choices[13][1] = "De tres personas.";
 choices[13][2] = "De cinco personas.";
 choices[13][3] = "De una, tres o cinco personas.";
 answers[13] = 3;
 units[13] = ['1'];
 blocks[13] = ['A1'];
 comments[13] = "Id Pregunta: 1430. ";
 preguntaids[13] = 1430


//  Id pregunta: 241 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[14]= new Array();
 choices[14][0] = "Al Gobierno de la naci&oacute;n";
 choices[14][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[14][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[14][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[14] = 3;
 units[14] = ['7'];
 blocks[14] = ['A2'];
 comments[14] = "Id Pregunta: 241. Ley 39/2015";
 preguntaids[14] = 241


//  Id pregunta: 9394 Año de creación de pregunta: 2014
 questions[15]= "16)  El protocolo de acceso de datos para redes de telefon&iacute;a m&oacute;vil calificado como 3.5G es:";
 choices[15]= new Array();
 choices[15][0] = "GPRS";
 choices[15][1] = "HSDPA";
 choices[15][2] = "HSUPA";
 choices[15][3] = "UMTS";
 answers[15] = 1;
 units[15] = ['117'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 9394. Examen TIC A2  2013";
 preguntaids[15] = 9394


//  Id pregunta: 9186 Año de creación de pregunta: 2014
 questions[16]= "17)  La t&eacute;cnica que permite solapar instrucciones mediante la divisi&oacute;n de su ejecuci&oacute;n en etapas se denomina:";
 choices[16]= new Array();
 choices[16][0] = "Parametrizaci&oacute;n.";
 choices[16][1] = "Segmentaci&oacute;n.";
 choices[16][2] = "Multiplexaci&oacute;n.";
 choices[16][3] = "Paginaci&oacute;n.";
 answers[16] = 1;
 units[16] = ['56'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 9186. Examen TIC A2 2013";
 preguntaids[16] = 9186


//  Id pregunta: 8700 Año de creación de pregunta: 2013
 questions[17]= "18)  &iquest;Cu&aacute;l es la relaci&oacute;n entre trabajos, procesos, hilos y fibras en Windows?";
 choices[17]= new Array();
 choices[17][0] = "Los trabajos contienen procesos.";
 choices[17][1] = "Los procesos contienen hilos.";
 choices[17][2] = "Los hilos contienen fibras.";
 choices[17][3] = "Todas son correctas.";
 answers[17] = 3;
 units[17] = ['58'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 8700. ";
 preguntaids[17] = 8700


//  Id pregunta: 438 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;En qu&eacute; a&ntilde;o se adopt&oacute; la Estrategia para el Mercado &Uacute;nico Digital?";
 choices[18]= new Array();
 choices[18][0] = "En 2011";
 choices[18][1] = "En 2013";
 choices[18][2] = "En 2015";
 choices[18][3] = "En 2016";
 answers[18] = 2;
 units[18] = ['17'];
 blocks[18] = ['A4'];
 comments[18] = "Id Pregunta: 438. Mercado &Uacute;nico Digital";
 preguntaids[18] = 438


//  Id pregunta: 1827 Año de creación de pregunta: 2016
 questions[19]= "20)  Indique cu&aacute;l NO es la opci&oacute;n correcta para ser considerada como una de las finalidades de la ingenier&iacute;a inversa:";
 choices[19]= new Array();
 choices[19][0] = "La aplicaci&oacute;n de ingenier&iacute;a inversa construye especificaciones de un mayor nivel de abstracci&oacute;n partiendo del c&oacute;digo fuente de un programa.";
 choices[19][1] = "La aplicaci&oacute;n de ingenier&iacute;a inversa construye nuevas funcionalidades partiendo del c&oacute;digo fuente de un programa.";
 choices[19][2] = "La aplicaci&oacute;n de ingenier&iacute;a inversa descubre secretos y misterios del programa en uso a partir del c&oacute;digo fuente.";
 choices[19][3] = "La aplicaci&oacute;n ingenier&iacute;a inversa descubre el funcionamiento de un programa para reducir la complejidad del mismo.";
 answers[19] = 1;
 units[19] = ['97'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 1827. ";
 preguntaids[19] = 1827


//  Id pregunta: 6556 Año de creación de pregunta: 2003
 questions[20]= "21)  Indique la respuesta incorrecta en las siguientes afirmaciones respecto al Directorio Activo:";
 choices[20]= new Array();
 choices[20][0] = "El modelo de datos de Active Directory deriva del modelo de datos X.500";
 choices[20][1] = "Active Directory utiliza DNS como servicio de ubicaci&oacute;n";
 choices[20][2] = "El identificador &uacute;nico global de objetos, GUID, es un n&uacute;mero de 64 bitsdel que se garantiza su unicidad, y que se asigna a los objetos cuando secrean.";
 choices[20][3] = "En la lista de protocolos compatibles se incluye LDAP, en sus versiones 2 y 3.";
 answers[20] = 2;
 units[20] = ['77'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 6556. ";
 preguntaids[20] = 6556


//  Id pregunta: 6914 Año de creación de pregunta: 2010
 questions[21]= "22)  &iquest;Cu&aacute;les son algunos modelos de mejora de procesos relacionados con la gesti&oacute;n de la calidad en un proyecto?";
 choices[21]= new Array();
 choices[21][0] = "Malcolm Baldrige, CMM, CMMI y ASQ.";
 choices[21][1] = "Malcolm Baldrige, AMD y CMMI.";
 choices[21][2] = "Malcolm Baldrige, CMM, CMMI y AMD.";
 choices[21][3] = "Malcolm Baldrige, CMM, CMMI y SPICE.";
 answers[21] = 3;
 units[21] = ['98'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 6914. ";
 preguntaids[21] = 6914


//  Id pregunta: 8087 Año de creación de pregunta: 2011
 questions[22]= "23)  A la m&aacute;xima cantidad de datos que se pueden perder en caso de desastres se le denomina:";
 choices[22]= new Array();
 choices[22][0] = "RTO";
 choices[22][1] = "RPO";
 choices[22][2] = "SDO";
 choices[22][3] = "RDO";
 answers[22] = 1;
 units[22] = ['45'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 8087. Analista Ayto. Madrid 2010";
 preguntaids[22] = 8087


//  Id pregunta: 254 Año de creación de pregunta: 2016
 questions[23]= "24)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[23]= new Array();
 choices[23][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[23][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[23][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[23][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[23] = 0;
 units[23] = ['7'];
 blocks[23] = ['A2'];
 comments[23] = "Id Pregunta: 254. Ley 39/2015";
 preguntaids[23] = 254


//  Id pregunta: 5339 Año de creación de pregunta: 2006
 questions[24]= "25)  Sniffer de paquetes desarrollado por el FBI para la monitorizaci&oacute;n de las transmisiones electr&oacute;nicas de criminales";
 choices[24]= new Array();
 choices[24][0] = "Carnivore";
 choices[24][1] = "Internet Key Exchange (IKE)";
 choices[24][2] = "Kerberos";
 choices[24][3] = "SSL";
 answers[24] = 0;
 units[24] = ['120'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 5339. ";
 preguntaids[24] = 5339


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[25]= "26)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[25]= new Array();
 choices[25][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[25][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[25][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[25][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que hayan sido elaborado por &eacute;ste.";
 answers[25] = 1;
 units[25] = ['7'];
 blocks[25] = ['A2'];
 comments[25] = "Id Pregunta: 203. Ley 39/2015";
 preguntaids[25] = 203


//  Id pregunta: 9166 Año de creación de pregunta: 2014
 questions[26]= "27)  Respecto a las licencias de software libre y su compatibilidad con la GPL, se&ntilde;ale la sentencia correcta:";
 choices[26]= new Array();
 choices[26][0] = "Todas las versiones de la Apache license son incompatibles con las versiones de GPL (v1, v2 y v3).";
 choices[26][1] = "Las versiones de Apache License anteriores a la v2.0 son incompatibles con GPLv3.";
 choices[26][2] = "La GPLv2 no es compatible con la Apache License v2 porque tiene algunos requisitos que no est&aacute;n en esa versi&oacute;n de la Apache License, por ejemplo ciertas disposiciones sobre las indemnizaciones y la terminaci&oacute;n por patentes.";
 choices[26][3] = "Si uso una librer&iacute;a bajo la GPLv3 en un proyecto GPLv2, se puede publicar ese proyecto bajo GPLv2 &uacute;nicamente, ya que solo interact&uacute;a con esa librer&iacute;a mediante mecanismos t&iacute;picos, no copia su c&oacute;digo en el proyecto.";
 answers[26] = 1;
 units[26] = ['66'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 9166. Examen TIC A2 2013";
 preguntaids[26] = 9166


//  Id pregunta: 5076 Año de creación de pregunta: 2002
 questions[27]= "28)  Sobre los algoritmos de encaminamiento utilizados por los &ldquo;routers&rdquo;, indique cual de las siguientes afirmaciones es err&oacute;nea:";
 choices[27]= new Array();
 choices[27][0] = "Mediante los algoritmos de estados de enlaces cada &ldquo;router&rdquo; env&iacute;a su tabla de encaminamiento completa a todos los dem&aacute;s &ldquo;routers&rdquo; en la red al producirse cualquier cambio en la tabla. As&iacute; act&uacute;a el protocolo OSPF";
 choices[27][1] = "Mediante los algoritmos de vector distancia (tambi&eacute;n conocidos como algoritmos Bellman-Ford) cada &ldquo;router&rdquo; env&iacute;a su tabla de encaminado completa s&oacute;lo a los &ldquo;routers&rdquo; vecinos a intervalos regulares.  As&iacute; act&uacute;a el protocolo RIP";
 choices[27][2] = "Mediante los algoritmos de estados de enlaces (tambi&eacute;n conocidos como &ldquo;shortest path first&rdquo;) cada &ldquo;router&rdquo; env&iacute;a determinada informacion relativa al estado de sus enlaces a los demas routers lo que les permite construir una vision tolpologica de la red";
 choices[27][3] = "Los algoritmos de estados de enlaces son menos propensos a provocar un bucle de encaminamiento, ya que convergen (determinan el encaminamiento &oacute;ptimo) m&aacute;s r&aacute;pidamente";
 answers[27] = 0;
 units[27] = ['112'];
 blocks[27] = ['B4'];
 comments[27] = "Id Pregunta: 5076. ";
 preguntaids[27] = 5076


//  Id pregunta: 7959 Año de creación de pregunta: 2011
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes NO es una tecnolog&iacute;a xDSL?";
 choices[28]= new Array();
 choices[28][0] = "VDSL.";
 choices[28][1] = "DDSL.";
 choices[28][2] = "HDSL.";
 choices[28][3] = "ADSL.";
 answers[28] = 1;
 units[28] = ['108'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 7959. Examen TIC A2 2010";
 preguntaids[28] = 7959


//  Id pregunta: 6712 Año de creación de pregunta: 2009
 questions[29]= "30)  &iquest;Qu&eacute; es Atom?";
 choices[29]= new Array();
 choices[29][0] = "Sistema de an&aacute;lisis XML";
 choices[29][1] = "Tecnolog&iacute;a de sindicaci&oacute;n de contenidos";
 choices[29][2] = "Lenguaje que permite el intercambio de informaci&oacute;n financiera de las empresas";
 choices[29][3] = "Sintaxis de una DTD";
 answers[29] = 1;
 units[29] = ['74'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 6712. MAP 2008 A1";
 preguntaids[29] = 6712


//  Id pregunta: 5952 Año de creación de pregunta: 2007
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes respuestas NO corresponde al modelo de compresi&oacute;n de im&aacute;genes JPEG (JointPhotographic Experts Group)?";
 choices[30]= new Array();
 choices[30][0] = "B&aacute;sico/secuencial";
 choices[30][1] = "Jer&aacute;rquico";
 choices[30][2] = "Progresivo";
 choices[30][3] = "Conjugado modificado";
 answers[30] = 3;
 units[30] = ['62'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 5952. ";
 preguntaids[30] = 5952


//  Id pregunta: 1281 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n la legislaci&oacute;n vigente de protecci&oacute;n de datos de car&aacute;cter personal, la transferencia internacional de datos de car&aacute;cter personal resultante de la aplicaci&oacute;n de tratados o convenios en los que sea parte Espa&ntilde;a:";
 choices[31]= new Array();
 choices[31][0] = "Requieren la autorizaci&oacute;n del director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos (AEPD).";
 choices[31][1] = "Requieren la autorizaci&oacute;n del director de la AEPD, y posteriormente se hace necesaria la publicaci&oacute;n en el diario oficial correspondiente.";
 choices[31][2] = "No requiere la autorizaci&oacute;n del director de la AEPD pero se hace necesaria publicaci&oacute;n en el diario oficial correspondiente donde se indique clara mente origen, destino, cantidad de datos transferidos y el convenio o tratado al que hace referencia.";
 choices[31][3] = "No requiere la autorizaci&oacute;n del director de la AEPD.";
 answers[31] = 3;
 units[31] = ['35'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 1281. ";
 preguntaids[31] = 1281


//  Id pregunta: 7836 Año de creación de pregunta: 2010
 questions[32]= "33)  Indique la respuesta INCORRECTA:";
 choices[32]= new Array();
 choices[32][0] = "Las herramientas PILAR soportan el an&aacute;lisis y la gesti&oacute;n de riesgos de un sistema de informaci&oacute;n siguiendo la metodolog&iacute;a Magerit.";
 choices[32][1] = "El acr&oacute;nimo PILAR significa: Procedimiento Integral L&oacute;gico para el An&aacute;lisis de Riesgos.";
 choices[32][2] = "Las herramientas PILAR disponen de una biblioteca est&aacute;ndar de prop&oacute;sito general.";
 choices[32][3] = "Las herramientas PILAR son capaces de realizar calificaciones de seguridad respecto a ISO/IEC 27002:2005 -C&oacute;digo de buenas pr&aacute;cticas para la Gesti&oacute;n de la Seguridad de la Informaci&oacute;n-.";
 answers[32] = 1;
 units[32] = ['45'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 7836. ";
 preguntaids[32] = 7836


//  Id pregunta: 4011 Año de creación de pregunta: 2002
 questions[33]= "34)  Los sintetizadores de voz utilizan dos m&eacute;todos para sintetizar las palabras. Uno de ellos es:";
 choices[33]= new Array();
 choices[33][0] = "S&iacute;ntesis constructiva";
 choices[33][1] = "S&iacute;ntesis acumulativa";
 choices[33][2] = "S&iacute;ntesis simulativa";
 choices[33][3] = "S&iacute;ntesis por patrones";
 answers[33] = 0;
 units[33] = ['81'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 4011. ";
 preguntaids[33] = 4011


//  Id pregunta: 6169 Año de creación de pregunta: 2003
 questions[34]= "35)  Se regir&aacute;n por su normativa espec&iacute;fica, seg&uacute;n la ley 34/2002, las siguientes actividades y servicios de la sociedad de la informaci&oacute;n, excepto:";
 choices[34]= new Array();
 choices[34][0] = "Notarios";
 choices[34][1] = "Registradores";
 choices[34][2] = "Agentes de bolsa";
 choices[34][3] = "Procuradores";
 answers[34] = 2;
 units[34] = ['19'];
 blocks[34] = ['A4'];
 comments[34] = "Id Pregunta: 6169. Ley 34/2002, art&iacute;culo 5";
 preguntaids[34] = 6169


//  Id pregunta: 5836 Año de creación de pregunta: 2007
 questions[35]= "36)  El sello de oro del modelo EFQM se obtiene a partir de una evaluaci&oacute;n de:";
 choices[35]= new Array();
 choices[35][0] = "400 puntos sobre 1000.";
 choices[35][1] = "500 puntos sobre 1000.";
 choices[35][2] = "700 puntos sobre 1000.";
 choices[35][3] = "900 puntos sobre 1000.";
 answers[35] = 1;
 units[35] = ['98'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 5836. Examen 2006 JCYL";
 preguntaids[35] = 5836


//  Id pregunta: 477 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[36]= new Array();
 choices[36][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[36][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[36][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[36][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[36] = 0;
 units[36] = ['19'];
 blocks[36] = ['A4'];
 comments[36] = "Id Pregunta: 477. Sociedad de la informaci&oacute;n";
 preguntaids[36] = 477


//  Id pregunta: 9451 Año de creación de pregunta: 2014
 questions[37]= "38)  La Ley 34/2002, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, en relaci&oacute;n a la imposici&oacute;n de Sanciones indica";
 choices[37]= new Array();
 choices[37][0] = "El &oacute;rgano sancionador establecer&aacute; la cuant&iacute;a de la sanci&oacute;n aplicando la escala relativa a la clase de infracciones que preceda inmediatamente en gravedad a aquella en que se integra la considerada cuando el infractor haya reconocido espont&aacute;neamente su culpabilidad.";
 choices[37][1] = "La cuant&iacute;a de las multas que se impongan se graduar&aacute; atendiendo a la adhesi&oacute;n a un c&oacute;digo de conducta o a un sistema de autorregulaci&oacute;n publicitaria aplicable respecto a la infracci&oacute;n cometida.";
 choices[37][2] = "La cuant&iacute;a de las multas que se impongan se graduar&aacute; atendiendo al plazo de tiempo durante el que se haya venido cometiendo la infracci&oacute;n";
 choices[37][3] = "Todas son verdaderas";
 answers[37] = 3;
 units[37] = ['19'];
 blocks[37] = ['A4'];
 comments[37] = "Id Pregunta: 9451. ";
 preguntaids[37] = 9451


//  Id pregunta: 47 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[38]= new Array();
 choices[38][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[38][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[38][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[38][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[38] = 0;
 units[38] = ['1'];
 blocks[38] = ['A1'];
 comments[38] = "Id Pregunta: 47. Constituci&oacute;n de 1978";
 preguntaids[38] = 47


//  Id pregunta: 6644 Año de creación de pregunta: 2009
 questions[39]= "40)  Respecto al &aacute;mbito de actuaci&oacute;n en la Plataforma de validaci&oacute;n y firma electr&oacute;nica, @firma, del Ministerio de Administraciones P&uacute;blicas, se&ntilde;ale la opci&oacute;n correcta:";
 choices[39]= new Array();
 choices[39][0] = "Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos.";
 choices[39][1] = "Todas las Administraciones P&uacute;blicas y Organismos asociados.";
 choices[39][2] = "Se except&uacute;an las Entidades Locales, Diputaciones provinciales y Cabildos, que acceden a los servicios proporcionados por las Comunidades Aut&oacute;nomas de su &aacute;mbito territorial.";
 choices[39][3] = "Se ofrecen los servicios de validaci&oacute;n y firma a cualquier organizaci&oacute;n de car&aacute;cter p&uacute;blico y privado";
 answers[39] = 1;
 units[39] = ['19'];
 blocks[39] = ['A4'];
 comments[39] = "Id Pregunta: 6644. MAP 2008 A2";
 preguntaids[39] = 6644


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[40]= new Array();
 choices[40][0] = "El 1 de noviembre de 1994.";
 choices[40][1] = "El 1 de noviembre de 1992.";
 choices[40][2] = "El 1 de noviembre de 1995.";
 choices[40][3] = "El 1 de noviembre de 1993.";
 answers[40] = 3;
 units[40] = ['5'];
 blocks[40] = ['A1'];
 comments[40] = "Id Pregunta: 168. Uni&oacute;n Europea";
 preguntaids[40] = 168


//  Id pregunta: 271 Año de creación de pregunta: 2016
 questions[41]= "42)  En las Administraciones P&uacute;blicas...";
 choices[41]= new Array();
 choices[41][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[41][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[41][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[41][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[41] = 0;
 units[41] = ['11'];
 blocks[41] = ['A2'];
 comments[41] = "Id Pregunta: 271. Presupuestos generales";
 preguntaids[41] = 271


//  Id pregunta: 161 Año de creación de pregunta: 2016
 questions[42]= "43)  Tras la cuarta ampliaci&oacute;n de la Uni&oacute;n (Austria, Suecia y Finlandia), el n&uacute;mero total de diputados se estableci&oacute; en:";
 choices[42]= new Array();
 choices[42][0] = "623";
 choices[42][1] = "649";
 choices[42][2] = "626";
 choices[42][3] = "565";
 answers[42] = 2;
 units[42] = ['5'];
 blocks[42] = ['A1'];
 comments[42] = "Id Pregunta: 161. Uni&oacute;n Europea";
 preguntaids[42] = 161


//  Id pregunta: 3158 Año de creación de pregunta: 2002
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre FDDI es cierta?:";
 choices[43]= new Array();
 choices[43][0] = "FDDI, en el nivel f&iacute;sico, utiliza una codificaci&oacute;n llamada &quot;4 de 5&quot; en lugar de la codificaci&oacute;n de Manchester";
 choices[43][1] = "La codificaci&oacute;n utilizada en FDDI no permite el autosincronismo aportado por la codificaci&oacute;n de Manchester";
 choices[43][2] = "La no utilizaci&oacute;n de una codificaci&oacute;n con autosincronismo en FDDI obliga a la necesidad de un pre&aacute;mbulo de 8 o m&aacute;s bytes que permita la sincronizaci&oacute;n de los relojes del emisor y el receptor";
 choices[43][3] = "Todas las respuestas anteriores son ciertas";
 answers[43] = 3;
 units[43] = ['112'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 3158. ";
 preguntaids[43] = 3158


//  Id pregunta: 3265 Año de creación de pregunta: 2003
 questions[44]= "45)  Indicar la afirmaci&oacute;n que no es cierta sobre Marcos";
 choices[44]= new Array();
 choices[44][0] = "Representan conceptos estereotipados o patrones predefinidos sobre ideas y situaciones, aunando las caracter&iacute;sticas que cualifican el concepto";
 choices[44][1] = "Se caracteriza por representar conceptos gr&aacute;ficamente mediante nodos y sus relaciones entre ellos mediante arcos";
 choices[44][2] = "el marco es una entidad din&aacute;mica, con procedimientos incluidos en los slots, que se ejecutan durante un proceso de razonamiento m&aacute;s general";
 choices[44][3] = "Los procedimientos de inferencia asociados a los marcos son: deducci&oacute;n de valores de slots, actualizaci&oacute;n de valores de slots y equiparaci&oacute;n de marcos";
 answers[44] = 1;
 units[44] = ['68'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 3265. ";
 preguntaids[44] = 3265


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[45]= "46)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[45]= new Array();
 choices[45][0] = "Tres a&ntilde;os.";
 choices[45][1] = "Cuatro a&ntilde;os.";
 choices[45][2] = "Cinco a&ntilde;os.";
 choices[45][3] = "Seis a&ntilde;os.";
 answers[45] = 3;
 units[45] = ['5'];
 blocks[45] = ['A1'];
 comments[45] = "Id Pregunta: 143. Uni&oacute;n Europea";
 preguntaids[45] = 143


//  Id pregunta: 6948 Año de creación de pregunta: 2010
 questions[46]= "47)  El Real Decreto 1671/2009 tiene como &aacute;mbito";
 choices[46]= new Array();
 choices[46][0] = "La Administraci&oacute;n General del Estado";
 choices[46][1] = "La Administraci&oacute;n General del Estado, as&iacute; como los organismos vinculados o dependientes de &eacute;sta";
 choices[46][2] = "La Administraci&oacute;n General del Estado, los organismos vinculados o dependientes de &eacute;sta, las Comunidades Aut&oacute;nomas y los Entes Locales";
 choices[46][3] = "Todas las Administraciones P&uacute;blicas";
 answers[46] = 1;
 units[46] = ['19'];
 blocks[46] = ['A4'];
 comments[46] = "Id Pregunta: 6948. Articulo 1";
 preguntaids[46] = 6948


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[47]= "48)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[47]= new Array();
 choices[47][0] = "Veinticinco.";
 choices[47][1] = "Veintisiete.";
 choices[47][2] = "Veintinueve.";
 choices[47][3] = "Cuarenta y uno.";
 answers[47] = 1;
 units[47] = ['5'];
 blocks[47] = ['A1'];
 comments[47] = "Id Pregunta: 124. Uni&oacute;n Europea";
 preguntaids[47] = 124


//  Id pregunta: 1806 Año de creación de pregunta: 2016
 questions[48]= "49)  Indique cu&aacute;l de las siguientes afirmaciones sobre RSS NO es correcta";
 choices[48]= new Array();
 choices[48][0] = "RSS es un formato para la sindicaci&oacute;n de contenidos de p&aacute;ginas web";
 choices[48][1] = "RSS es un agregador de contenidos de diversas p&aacute;ginas web de noticias";
 choices[48][2] = "RSS es parte de la familia de los formatos XML";
 choices[48][3] = "Es un acr&oacute;nimo de Really Simple Syndication";
 answers[48] = 1;
 units[48] = ['74'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 1806. ";
 preguntaids[48] = 1806


//  Id pregunta: 303 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[49]= new Array();
 choices[49][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[49][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[49][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[49][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[49] = 3;
 units[49] = ['11'];
 blocks[49] = ['A2'];
 comments[49] = "Id Pregunta: 303. Presupuestos generales";
 preguntaids[49] = 303


//  Id pregunta: 2965 Año de creación de pregunta: 2002
 questions[50]= "51)  Las operaciones de la Unidad Aritm&eacute;tico-L&oacute;gica se clasifican en:";
 choices[50]= new Array();
 choices[50][0] = "Desplazamiento, l&oacute;gicas y aritm&eacute;ticas";
 choices[50][1] = "L&oacute;gicas y aritm&eacute;ticas";
 choices[50][2] = "Desplazamiento, l&oacute;gicas y adici&oacute;n";
 choices[50][3] = "L&oacute;gicas y adici&oacute;n";
 answers[50] = 0;
 units[50] = ['52'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 2965. ";
 preguntaids[50] = 2965


//  Id pregunta: 9207 Año de creación de pregunta: 2014
 questions[51]= "52)  Indique la respuesta falsa:";
 choices[51]= new Array();
 choices[51][0] = "OAuth (Open Authorization) es un protocolo abierto que permite autorizaci&oacute;n segura de una API de modo est&aacute;ndar y simple para aplicaciones de escritorio, m&oacute;viles y web.";
 choices[51][1] = "OAuth y OpenID son protocolos id&eacute;nticos.";
 choices[51][2] = "OpenID es un est&aacute;ndar de identificaci&oacute;n digital descentralizado, con el que un usuario puede identificarse en una p&aacute;gina web a trav&eacute;s de una URL o XRI.";
 choices[51][3] = "A diferencia de arquitecturas Single Sign-On, OpenId no especifica el mecanismo de autenticaci&oacute;n.";
 answers[51] = 1;
 units[51] = ['123'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 9207. Oauth y OpenID son completamente diferentes. El resto de respuestas son ciertas.";
 preguntaids[51] = 9207


//  Id pregunta: 6011 Año de creación de pregunta: 2003
 questions[52]= "53)  Los DTD (Document Type Definition) en tecnolog&iacute;a XML:";
 choices[52]= new Array();
 choices[52][0] = "Definen la estructura del documento XML.";
 choices[52][1] = "Sirven para dar formato a la informaci&oacute;n.";
 choices[52][2] = "Siempre han de estar incluidos en el XML.";
 choices[52][3] = "Contienen elementos y atributos.";
 answers[52] = 0;
 units[52] = ['65'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 6011. TIC B 2007";
 preguntaids[52] = 6011


//  Id pregunta: 3129 Año de creación de pregunta: 2002
 questions[53]= "54)  &iquest;En qu&eacute; se basa la acci&oacute;n de comprimir las im&aacute;genes para almacenarlas o transmitirlas v&iacute;a red de &aacute;rea local o v&iacute;a teleproceso?:";
 choices[53]= new Array();
 choices[53][0] = "En la codificaci&oacute;n progresiva";
 choices[53][1] = "En la modulaci&oacute;n codificada";
 choices[53][2] = "En la codificaci&oacute;n de la informaci&oacute;n";
 choices[53][3] = "En el filtrado de frecuencias";
 answers[53] = 2;
 units[53] = ['53'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 3129. ";
 preguntaids[53] = 3129


//  Id pregunta: 4219 Año de creación de pregunta: 2006
 questions[54]= "55)  Seg&uacute;n m&eacute;trica v3, cu&aacute;l de los siguientes productos, resultantes de la fase de An&aacute;lisis del sistema, es propio s&oacute;lo del an&aacute;lisis estructurado";
 choices[54]= new Array();
 choices[54][0] = "Descripci&oacute;n general del entorno tecnol&oacute;gico";
 choices[54][1] = "Especificaci&oacute;n de interfaz de usuario";
 choices[54][2] = "Plan de migraci&oacute;n y carga inicial de datos";
 choices[54][3] = "Descripci&oacute;n de subsistemas de an&aacute;lisis.";
 answers[54] = 2;
 units[54] = ['91'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 4219. ";
 preguntaids[54] = 4219


//  Id pregunta: 10477 Año de creación de pregunta: 2015
 questions[55]= "56)  &iquest;Qu&eacute; se entiende por TileMatrixSet en el contexto de la informaci&oacute;n geogr&aacute;fica?";
 choices[55]= new Array();
 choices[55][0] = "Una matriz de puntos de control para registrar una im&aacute;gen r&aacute;ster respecto a otra";
 choices[55][1] = "Un conjunto de rasterizaciones y fragmentaciones de la capa a diferentes escalas predeterminadas para un sistema de referencia y &aacute;mbito concreto";
 choices[55][2] = "Un conjunto de datos de tipo r&aacute;ster en el que el atributo respresentado es la elevaci&oacute;n de los puntos situados en una malla regular";
 choices[55][3] = "Ninguna de las anteriores";
 answers[55] = 1;
 units[55] = ['71'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 10477. ";
 preguntaids[55] = 10477


//  Id pregunta: 6250 Año de creación de pregunta: 2003
 questions[56]= "57)  Un modelado de un Sistema de Informaci&oacute;n se considera completo si se realiza desde los siguientes puntos de vista:";
 choices[56]= new Array();
 choices[56][0] = "Funcional, Est&aacute;tico y Din&aacute;mico";
 choices[56][1] = "Informaci&oacute;n, Procesos e Interfaces de Usuario";
 choices[56][2] = "Est&aacute;tico, Din&aacute;mico y Relacional";
 choices[56][3] = "Funcional, Informaci&oacute;n y Procesos";
 answers[56] = 0;
 units[56] = ['86'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 6250. ";
 preguntaids[56] = 6250


//  Id pregunta: 855 Año de creación de pregunta: 2016
 questions[57]= "58)  El m&eacute;todo utilizado en el mantenimiento de software consistente en el examen y modificaci&oacute;n de un sistema para reconstruirlo de una nueva forma es:";
 choices[57]= new Array();
 choices[57][0] = "Ingenier&iacute;a inversa.";
 choices[57][1] = "Reestructuraci&oacute;n software.";
 choices[57][2] = "Reingenier&iacute;a.";
 choices[57][3] = "Transformaci&oacute;n de programas.";
 answers[57] = 2;
 units[57] = ['97'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 855. AGE A2 2015";
 preguntaids[57] = 855


//  Id pregunta: 32 Año de creación de pregunta: 2016
 questions[58]= "59)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[58]= new Array();
 choices[58][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[58][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[58][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[58][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[58] = 1;
 units[58] = ['1'];
 blocks[58] = ['A1'];
 comments[58] = "Id Pregunta: 32. Constituci&oacute;n de 1978";
 preguntaids[58] = 32


//  Id pregunta: 9951 Año de creación de pregunta: 2015
 questions[59]= "60)  &iquest;Con qu&eacute; frecuencia m&iacute;nima se reunir&aacute; el Comit&eacute; Ejecutivo de la comisi&oacute;n de estrategia TIC?";
 choices[59]= new Array();
 choices[59][0] = "Mensual";
 choices[59][1] = "Semestral";
 choices[59][2] = "Trimestral";
 choices[59][3] = "Anual";
 answers[59] = 0;
 units[59] = ['26'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 9951. ";
 preguntaids[59] = 9951


//  Id pregunta: 10781 Año de creación de pregunta: 2015
 questions[60]= "61)  La protecci&oacute;n contra Denegaci&oacute;n de servicio se recoge en la Gu&iacute; CCN-STIC:";
 choices[60]= new Array();
 choices[60][0] = "828";
 choices[60][1] = "817";
 choices[60][2] = "820";
 choices[60][3] = "823";
 answers[60] = 2;
 units[60] = ['46'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 10781. ";
 preguntaids[60] = 10781


//  Id pregunta: 625 Año de creación de pregunta: 2016
 questions[61]= "62)  Se&ntilde;ale cual NO es una misi&oacute;n del Punto de Acceso General (PAG)";
 choices[61]= new Array();
 choices[61][0] = "Orienta al ciudadano en su relaci&oacute;n con las AP, ofreciendo la informaci&oacute;n y los servicios a su disposici&oacute;n";
 choices[61][1] = "Ofrece de manera centralizada ayuda a las empresas y emprendedores para facilitar la creaci&oacute;n de empresas desde la red";
 choices[61][2] = "Acceso al cat&aacute;logo de todos los procedimientos administrativos da la AGE y resto de admisnitraciones+";
 choices[61][3] = "Fomenta el uso de la tramitaci&oacute;n electr&oacute;nica por los ciudadanos al simplificar el acceso a los servicios electr&oacute;nicos";
 answers[61] = 2;
 units[61] = ['47'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 625. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[61] = 625


//  Id pregunta: 7714 Año de creación de pregunta: 2010
 questions[62]= "63)  Seg&uacute;n el est&aacute;ndar ISO 7816 sobre contactos del chip en las tarjetas inteligentes, &iquest;cu&aacute;l de los siguientes contactos se utiliza para la se&ntilde;al de reloj?";
 choices[62]= new Array();
 choices[62][0] = "C2.";
 choices[62][1] = "C3.";
 choices[62][2] = "C5.";
 choices[62][3] = "C6.";
 answers[62] = 1;
 units[62] = ['78'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 7714. Map 2007";
 preguntaids[62] = 7714


//  Id pregunta: 9206 Año de creación de pregunta: 2014
 questions[63]= "64)  La informaci&oacute;n contenida en el chip del DNI electr&oacute;nico est&aacute; contenida en tres zonas con diferentes niveles de acceso. Indique qu&eacute; informaci&oacute;n est&aacute; contenida en la Zona de seguridad:";
 choices[63]= new Array();
 choices[63][0] = "Certificado de autenticaci&oacute;n";
 choices[63][1] = "Datos de filiaci&oacute;n del ciudadano.";
 choices[63][2] = "Claves Diffie-Hellman.";
 choices[63][3] = "Certificados X-509 de componente.";
 answers[63] = 1;
 units[63] = ['119'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 9206. Examen TIC del Servicio de Salud de Extremadura 2014";
 preguntaids[63] = 9206


//  Id pregunta: 10523 Año de creación de pregunta: 2015
 questions[64]= "65)  &iquest;Qu&eacute; planes nacionales se derivan de la Ley General de Telecomunicaciones?";
 choices[64]= new Array();
 choices[64][0] = "Numeraci&oacute;n y direccionamiento";
 choices[64][1] = "Denominaci&oacute;n";
 choices[64][2] = "Las dos anteriores";
 choices[64][3] = "Ninguna";
 answers[64] = 2;
 units[64] = ['121'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 10523. ";
 preguntaids[64] = 10523


//  Id pregunta: 8431 Año de creación de pregunta: 2011
 questions[65]= "66)  Las sedes judiciales electr&oacute;nicas no est&aacute;n obligadas a poner a disposici&oacute;n de los ciudadanos y profesionales el servicio:";
 choices[65]= new Array();
 choices[65][0] = "Carta de servicios electr&oacute;nicos";
 choices[65][1] = "Carta de servicios";
 choices[65][2] = "Carta de Derechos de los Ciudadanos ante la Justicia";
 choices[65][3] = "Debe disponer de todos los anteriores";
 answers[65] = 3;
 units[65] = ['2'];
 blocks[65] = ['A1'];
 comments[65] = "Id Pregunta: 8431. ";
 preguntaids[65] = 8431


//  Id pregunta: 4978 Año de creación de pregunta: 2002
 questions[66]= "67)  Los conceptos de arquitecturas de niveles est&aacute;n especificados en la siguiente norma de la ITU-T:";
 choices[66]= new Array();
 choices[66][0] = "X.400";
 choices[66][1] = "I.200";
 choices[66][2] = "X.500";
 choices[66][3] = "X.200";
 answers[66] = 3;
 units[66] = ['105'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 4978. ";
 preguntaids[66] = 4978


//  Id pregunta: 4084 Año de creación de pregunta: 2003
 questions[67]= "68)  El UML ( Unified modeling Language) es un lenguaje que permite modelar construir y documentar los elementos que forman un sistema SW orientado a objetos. Indicar cu&aacute;l entre los siguientes no corresponde a un modelo usado en UML";
 choices[67]= new Array();
 choices[67][0] = "Diagrama de estructura din&aacute;mica";
 choices[67][1] = "Diagrama de Casos de Uso";
 choices[67][2] = "Diagrama de Secuencia";
 choices[67][3] = "Diagrama de colaboraci&oacute;n";
 answers[67] = 0;
 units[67] = ['91'];
 blocks[67] = ['B3'];
 comments[67] = "Id Pregunta: 4084. ";
 preguntaids[67] = 4084


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[68]= new Array();
 choices[68][0] = "14";
 choices[68][1] = "11";
 choices[68][2] = "12";
 choices[68][3] = "15";
 answers[68] = 0;
 units[68] = ['19'];
 blocks[68] = ['A4'];
 comments[68] = "Id Pregunta: 465. Estrategia TIC";
 preguntaids[68] = 465


//  Id pregunta: 3706 Año de creación de pregunta: 2002
 questions[69]= "70)  &iquest;Cu&aacute;les de las siguientes cuestiones conciernen al an&aacute;lisis de requerimientos?:";
 choices[69]= new Array();
 choices[69][0] = "Criterios de prueba y evaluaci&oacute;n del producto software obtenido";
 choices[69][1] = "Descripci&oacute;n detallada de las funciones";
 choices[69][2] = "Estructura de la base de datos";
 choices[69][3] = "Son ciertas las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo;";
 answers[69] = 0;
 units[69] = ['84'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 3706. ";
 preguntaids[69] = 3706


//  Id pregunta: 3522 Año de creación de pregunta: 2006
 questions[70]= "71)  En lo que concierne a los algoritmos de cifrado, la recomendaci&oacute;n PKCS#7 de la compa&ntilde;&iacute;a RSA se refiere a:";
 choices[70]= new Array();
 choices[70][0] = "Formato del sobre digital";
 choices[70][1] = "Formato del certificado digital";
 choices[70][2] = "Sintaxis de la clave privada";
 choices[70][3] = "Algoritmo Diffie-Hellman";
 answers[70] = 0;
 units[70] = ['76'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 3522. ";
 preguntaids[70] = 3522


//  Id pregunta: 1936 Año de creación de pregunta: 2016
 questions[71]= "72)  Se&ntilde;ale como se denomina el conjunto de reglas que deben de seguir los lenguajes de programaci&oacute;n para que sean compatibles con .NET:";
 choices[71]= new Array();
 choices[71][0] = "CLS";
 choices[71][1] = "MSIL";
 choices[71][2] = "Bytecode";
 choices[71][3] = "JIT";
 answers[71] = 0;
 units[71] = ['63'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 1936. ";
 preguntaids[71] = 1936


//  Id pregunta: 2131 Año de creación de pregunta: 2004
 questions[72]= "73)  Cu&aacute;l de las siguientes no es una funci&oacute;n del auditor de Sistemas de Informaci&oacute;n";
 choices[72]= new Array();
 choices[72][0] = "An&aacute;lisis de requisitos y especificaci&oacute;n funcional";
 choices[72][1] = "Evaluaci&oacute;n de los planes de implantaci&oacute;n de sistemas y mejoras de los existentes.";
 choices[72][2] = "Evaluaci&oacute;n de riesgos";
 choices[72][3] = "Evaluaci&oacute;n de controles en los sistemas de informaci&oacute;n";
 answers[72] = 0;
 units[72] = ['36', '45'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 2131. Similar a examen TIC SS A 2003";
 preguntaids[72] = 2131


//  Id pregunta: 173 Año de creación de pregunta: 2016
 questions[73]= "74)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[73]= new Array();
 choices[73][0] = "El Parlamento Europeo.";
 choices[73][1] = "Todas las respuestas son correctas.";
 choices[73][2] = "La Comisi&oacute;n Europea.";
 choices[73][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[73] = 1;
 units[73] = ['5'];
 blocks[73] = ['A1'];
 comments[73] = "Id Pregunta: 173. Uni&oacute;n Europea";
 preguntaids[73] = 173


//  Id pregunta: 2690 Año de creación de pregunta: 2002
 questions[74]= "75)  &iquest;Qu&eacute; se entiende por modo supervisor?:";
 choices[74]= new Array();
 choices[74][0] = "Sistema en el que no se precisa 'password' para acceder al sistema, por tratarse del supervisor";
 choices[74][1] = "Sistema en el que la palabra clave de acceso al sistema permite acceder a todos los elementos del sistema inform&aacute;tico";
 choices[74][2] = "Dispositivos que pueden modificar el modo de operaci&oacute;n y prohibir determinadas ejecuciones importantes";
 choices[74][3] = "Es un modo del sistema operativo mediante el cual s&oacute;lo &eacute;l es capaz de acceder a los recursos del ordenador mediante instrucciones que no est&aacute;n disponibles para los programas de usuario";
 answers[74] = 3;
 units[74] = ['57'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 2690. ";
 preguntaids[74] = 2690


