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
//  Id pregunta: 9394 Año de creación de pregunta: 2014
 questions[0]= "1)  El protocolo de acceso de datos para redes de telefon&iacute;a m&oacute;vil calificado como 3.5G es:";
 choices[0]= new Array();
 choices[0][0] = "GPRS";
 choices[0][1] = "HSDPA";
 choices[0][2] = "HSUPA";
 choices[0][3] = "UMTS";
 answers[0] = 1;
 units[0] = ['117'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 9394. Examen TIC A2  2013";
 preguntaids[0] = 9394


//  Id pregunta: 9836 Año de creación de pregunta: 2015
 questions[1]= "2)  &iquest;Qu&eacute; tres niveles debe tener una base de datos seg&uacute;n la arquitectura propuesta por la normativa ANSI?";
 choices[1]= new Array();
 choices[1][0] = "Abstracto, concreto y l&oacute;gico.";
 choices[1][1] = "L&oacute;gico, sem&aacute;ntico y conceptual.";
 choices[1][2] = "Externo, interno y conceptual.";
 choices[1][3] = "Externo, interno y l&oacute;gico.";
 answers[1] = 2;
 units[1] = ['60'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 9836. ";
 preguntaids[1] = 9836


//  Id pregunta: 3475 Año de creación de pregunta: 2006
 questions[2]= "3)  De acuerdo a la ley 34/2002, se&ntilde;ale la falsa:";
 choices[2]= new Array();
 choices[2][0] = "Por la comisi&oacute;n de infracciones muy graves, multa de 150.001 hasta 600.000 euros.";
 choices[2][1] = "Por la comisi&oacute;n de infracciones graves, multa de 30.001 hasta 150.000 euros";
 choices[2][2] = "Por la comisi&oacute;n de infracciones leves, multa de hasta 30.000 euros.";
 choices[2][3] = "Todas son ciertas";
 answers[2] = 3;
 units[2] = ['19'];
 blocks[2] = ['A4'];
 comments[2] = "Id Pregunta: 3475. Ley 34/2002, art&iacute;culo 39";
 preguntaids[2] = 3475


//  Id pregunta: 9297 Año de creación de pregunta: 2014
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes afirmaciones es FALSA respecto al lenguaje de programaci&oacute;n C# de la  plataforma .NET?";
 choices[3]= new Array();
 choices[3][0] = "En C# una clase puede heredar directamente de una sola clase primaria pero puede implementar cualquier n&uacute;mero de interfaces.";
 choices[3][1] = "C# no admite la aritm&eacute;tica con punteros de manera predeterminada, sin embargo, si utiliza la palabra clave unsafe, puede definir un contexto no seguro en el que se pueden utilizar punteros";
 choices[3][2] = "Los programas en C# pueden constar de uno o varios archivos, y cada archivo puede contener cero o varios espacios de nombres (namespaces).";
 choices[3][3] = "Un espacio de nombres (namespace) puede contener tipos tales como clases (classes), estructuras (structs), interfaces (interfaces), enumeraciones (enumerations) y delegados (delegates), pero no puede contener otros espacios de nombres (namespaces).";
 answers[3] = 3;
 units[3] = ['63'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 9297. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[3] = 9297


//  Id pregunta: 4928 Año de creación de pregunta: 2002
 questions[4]= "5)  UDDI:";
 choices[4]= new Array();
 choices[4][0] = "Es una variante de alt&iacute;sima velocidad de la conocida FDDI";
 choices[4][1] = "Es una variante de FDDI adecuada para su desarrollo en LANs";
 choices[4][2] = "Significa User Definition Domain  Interface";
 choices[4][3] = "Ninguna de las anteriores es v&aacute;lida";
 answers[4] = 3;
 units[4] = ['74'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 4928. ";
 preguntaids[4] = 4928


//  Id pregunta: 9036 Año de creación de pregunta: 2014
 questions[5]= "6)  Entre los &oacute;rganos consultivos, referidos en el RD Legislativo 3/2011, no se encuentra:";
 choices[5]= new Array();
 choices[5][0] = "Mesas de contrataci&oacute;n";
 choices[5][1] = "Junta Consultiva de Contrataci&oacute;n Administrativa del Estado";
 choices[5][2] = "&Oacute;rganos consultivos en las CCAA";
 choices[5][3] = "Todos los anteriores";
 answers[5] = 0;
 units[5] = ['10'];
 blocks[5] = ['A2'];
 comments[5] = "Id Pregunta: 9036. Art. 324, Art. 325 RD Legislativo 3/2011";
 preguntaids[5] = 9036


//  Id pregunta: 8976 Año de creación de pregunta: 2013
 questions[6]= "7)  En el contexto de la firma electr&oacute;nica y su regulaci&oacute;n en Espa&ntilde;a se&ntilde;ale la afirmaci&oacute;n FALSA.";
 choices[6]= new Array();
 choices[6][0] = "Los funcionarios al servicio de las administraciones p&uacute;blicas espa&ntilde;olas pueden firmar en el ejercicio de su cargo utilizando su DNI electr&oacute;nico.";
 choices[6][1] = "Los c&oacute;digos de verificaci&oacute;n segura (CSV) junto con los sellos de &oacute;rgano sirven para dotar de firma electr&oacute;nica reconocida a la actuaci&oacute;n administrativa automatizada.";
 choices[6][2] = "Un dispositivo seguro de creaci&oacute;n de firma debe garantizar que los datos usados para generar la firma pueden producirse s&oacute;lo una vez.";
 choices[6][3] = "Un certificado electr&oacute;nico reconocido ha de incluir la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que lo expide.";
 answers[6] = 1;
 units[6] = ['19'];
 blocks[6] = ['A4'];
 comments[6] = "Id Pregunta: 8976. Examen TIC A1 2011";
 preguntaids[6] = 8976


//  Id pregunta: 10704 Año de creación de pregunta: 2015
 questions[7]= "8)  Indique cu&aacute;l de los siguientes algoritmos criptogr&aacute;ficos NO ha sido autorizado para uso en el Esquema Nacional de Seguridad seg&uacute;n la gu&iacute;a CCN-STIC 807.";
 choices[7]= new Array();
 choices[7][0] = "MD5";
 choices[7][1] = "TDEA";
 choices[7][2] = "AES";
 choices[7][3] = "RSA";
 answers[7] = 0;
 units[7] = ['76'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 10704. ";
 preguntaids[7] = 10704


//  Id pregunta: 2327 Año de creación de pregunta: 2003
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes se puede decir que no es una caracter&iacute;stica de los Benchmark?";
 choices[8]= new Array();
 choices[8][0] = "Pruebas entre productos de distintas compa&ntilde;&iacute;as";
 choices[8][1] = "Suelen basarse en el tiempo necesario para la ejecuci&oacute;n de un programa";
 choices[8][2] = "Metodolog&iacute;a para comparar distintos sistemas inform&aacute;ticos";
 choices[8][3] = "Una herramienta para la mejora de rendimiento de un sistema";
 answers[8] = 3;
 units[8] = ['39'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 2327. ";
 preguntaids[8] = 2327


//  Id pregunta: 6605 Año de creación de pregunta: 2009
 questions[9]= "10)  Respecto al algoritmo DSA, &iquest;cu&aacute;l de estas afirmaciones es falsa?";
 choices[9]= new Array();
 choices[9][0] = "Sirve para firmar documentos";
 choices[9][1] = "Sirve para autenticar";
 choices[9][2] = "Sirve para cifrar";
 choices[9][3] = "Es un est&aacute;ndar de FIPS para firmas digitales";
 answers[9] = 2;
 units[9] = ['76'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 6605. ";
 preguntaids[9] = 6605


//  Id pregunta: 7636 Año de creación de pregunta: 2010
 questions[10]= "11)  El marco legislativo espa&ntilde;ol de la Propiedad Intelectual e Industrial configurado mediante el Real Decreto Legislativo 1/1996, de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual, en lo referente al software, establece que son objeto de protecci&oacute;n:";
 choices[10]= new Array();
 choices[10][0] = "Exclusivamente los programas de ordenador, entendidos como secuencias de instrucciones o indicaciones destinadas a ser utilizadas en un sistema inform&aacute;tico para realizar una determinada funci&oacute;n o tarea.";
 choices[10][1] = "Los programas de ordenador y su documentaci&oacute;n preparatoria, comprendi&eacute;ndose en dicho concepto la documentaci&oacute;n t&eacute;cnica y los manuales de uso del programa.";
 choices[10][2] = "Los programas de ordenador y todas las definiciones documentadas de sus interfaces que posibilitan el uso colaborativo del software.";
 choices[10][3] = "&Uacute;nicamente los algoritmos y conceptos inventivos documentados en los que se basan cualquiera de los elementos de los programas de ordenador.";
 answers[10] = 1;
 units[10] = ['41'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 7636. Map 2006";
 preguntaids[10] = 7636


//  Id pregunta: 3247 Año de creación de pregunta: 2003
 questions[11]= "12)  En el contexto del modelo de componentes software basados en Java, &iquest;qu&eacute; es un contenedor?:";
 choices[11]= new Array();
 choices[11][0] = "Un proceso donde se ejecutan los componentes Java.";
 choices[11][1] = "Una biblioteca de clases Java.";
 choices[11][2] = "Una interfaz de usuario.";
 choices[11][3] = "Un fichero XML que describe los componentes de aplicaci&oacute;n.";
 answers[11] = 0;
 units[11] = ['64'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 3247. Junta Andaluc&iacute;a";
 preguntaids[11] = 3247


//  Id pregunta: 10462 Año de creación de pregunta: 2015
 questions[12]= "13)  &iquest;Cu&aacute;les son las tres opciones principales en los modelos de dise&ntilde;o de ITIL v3?";
 choices[12]= new Array();
 choices[12][0] = "Modelo tradicional: presupone una mayor estabilidad del servicio.";
 choices[12][1] = "Modelo &Aacute;gil o RAD: principalmente incremental e iterativo que se basa en la creaci&oacute;n de prototipos.";
 choices[12][2] = "Modelo basado en soluciones software est&aacute;ndar ya empaquetadas.";
 choices[12][3] = "Todos son modelos de ITIL versi&oacute;n 3.";
 answers[12] = 3;
 units[12] = ['101'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 10462. ";
 preguntaids[12] = 10462


//  Id pregunta: 4435 Año de creación de pregunta: 2005
 questions[13]= "14)  Seg&uacute;n la terminolog&iacute;a usual, la intrusi&oacute;n de un cracker en un servidor web, en el peor de los casos, puede afectar a:";
 choices[13]= new Array();
 choices[13][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n";
 choices[13][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 choices[13][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[13][3] = "Todas las anteriores";
 answers[13] = 3;
 units[13] = ['120'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 4435. ";
 preguntaids[13] = 4435


//  Id pregunta: 1775 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n el art. 18 de la Constituci&oacute;n Espa&ntilde;ola:";
 choices[14]= new Array();
 choices[14][0] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de opini&oacute;n de las personas.";
 choices[14][1] = "La ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 choices[14][2] = "Se garantiza el secreto inviolable de las comunicaciones postales, telegr&aacute;ficas y telef&oacute;nicas.";
 choices[14][3] = "Se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen, salvo resoluci&oacute;n judicial.";
 answers[14] = 1;
 units[14] = ['1'];
 blocks[14] = ['A1'];
 comments[14] = "Id Pregunta: 1775. ";
 preguntaids[14] = 1775


//  Id pregunta: 7514 Año de creación de pregunta: 2010
 questions[15]= "16)  Las redes integradas de Datos y Voz se definen en el grupo de trabajo del IEEE:";
 choices[15]= new Array();
 choices[15][0] = "802.9.";
 choices[15][1] = "802.10.";
 choices[15][2] = "802.11.";
 choices[15][3] = "802.12.";
 answers[15] = 0;
 units[15] = ['110'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 7514. Map 2005";
 preguntaids[15] = 7514


//  Id pregunta: 213 Año de creación de pregunta: 2016
 questions[16]= "17)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[16]= new Array();
 choices[16][0] = "solo mediante ley";
 choices[16][1] = "reglamentariamente";
 choices[16][2] = "mediante ley o reglamentariamente";
 choices[16][3] = "ninguna es correcta";
 answers[16] = 1;
 units[16] = ['7'];
 blocks[16] = ['A2'];
 comments[16] = "Id Pregunta: 213. Ley 39/2015";
 preguntaids[16] = 213


//  Id pregunta: 7772 Año de creación de pregunta: 2010
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de Work-flow est&aacute; definido por WfMC (Workflow Management Coalition)?";
 choices[17]= new Array();
 choices[17][0] = "BPML.";
 choices[17][1] = "BPEL.";
 choices[17][2] = "BPMN.";
 choices[17][3] = "XPDL.";
 answers[17] = 3;
 units[17] = ['86'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 7772. ";
 preguntaids[17] = 7772


//  Id pregunta: 8290 Año de creación de pregunta: 2011
 questions[18]= "19)  Se ha puesto un servicio de DHCP en una subred. &iquest;Es posible que otra subred pueda usar el servicio DHCP y que este servicio asigne direcciones a los clientes de ambas?";
 choices[18]= new Array();
 choices[18][0] = "No, porque solo funciona con broadcast las peticiones.";
 choices[18][1] = "Si, porque las peticiones son unicast y llegar&aacute;n al servidor de DHCP";
 choices[18][2] = "Es posible pero hace falta un DHCP Relay.";
 choices[18][3] = "Si, con solo configurar el servidor DHCP para servir a la otra subred.";
 answers[18] = 2;
 units[18] = ['109'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 8290. Examen UPM A2 2011";
 preguntaids[18] = 8290


//  Id pregunta: 7541 Año de creación de pregunta: 2010
 questions[19]= "20)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta con respecto a los procesos arrancados por el superusuario (root) en un sistema operativo Linux:";
 choices[19]= new Array();
 choices[19][0] = "Su c&oacute;digo se ejecuta con el procesador en modo n&uacute;cleo (kernel).";
 choices[19][1] = "Pueden ejecutarse con menos prioridad de planificaci&oacute;n que un proceso de usuario normal.";
 choices[19][2] = "Tiene acceso directo a los dispositivos de E/S.";
 choices[19][3] = "Acceden directamente al mapa de memoria de otros procesos.";
 answers[19] = 1;
 units[19] = ['57'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 7541. Map 2005";
 preguntaids[19] = 7541


//  Id pregunta: 2688 Año de creación de pregunta: 2002
 questions[20]= "21)  &iquest;Qu&eacute; relaci&oacute;n existe entre SGML y HTML?:";
 choices[20]= new Array();
 choices[20][0] = "HTML es un subconjunto de SGML";
 choices[20][1] = "SGML es un subconjunto de HTML";
 choices[20][2] = "SGML se inspir&oacute; en HTML";
 choices[20][3] = "No tienen relaci&oacute;n";
 answers[20] = 0;
 units[20] = ['74'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 2688. ";
 preguntaids[20] = 2688


//  Id pregunta: 8201 Año de creación de pregunta: 2011
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes actividades NO pertenece a la Gesti&oacute;n del Proyecto seg&uacute;n M&eacute;trica v3?";
 choices[21]= new Array();
 choices[21][0] = "Identificaci&oacute;n de las Propiedades de Calidad.";
 choices[21][1] = "Planificaci&oacute;n.";
 choices[21][2] = "Cierre del Proyecto.";
 choices[21][3] = "Estimaci&oacute;n de Esfuerzo.";
 answers[21] = 0;
 units[21] = ['91'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 8201. Examen TIC A2 2010 interna";
 preguntaids[21] = 8201


//  Id pregunta: 3356 Año de creación de pregunta: 2006
 questions[22]= "23)  Se dispone &uacute;nicamente de dos discos, con los que se pretende implementar una matriz redundante (RAID) con tolerancia a fallos y con el mejor rendimiento posible tanto en lectura como en escritura, &iquest;qu&eacute; tipo escoger&iacute;a?";
 choices[22]= new Array();
 choices[22][0] = "RAID-0";
 choices[22][1] = "RAID-1";
 choices[22][2] = "RAID-3";
 choices[22][3] = "RAID-0 &oacute; RAID-1";
 answers[22] = 1;
 units[22] = ['53'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 3356. ";
 preguntaids[22] = 3356


//  Id pregunta: 10693 Año de creación de pregunta: 2015
 questions[23]= "24)  &iquest;Cu&aacute;les de los siguientes NO es un documento emitido por el European Telecomunication Standard Institute (ETSI)?";
 choices[23]= new Array();
 choices[23][0] = "ENV, normas experimentales";
 choices[23][1] = "ES, Normas ETSI";
 choices[23][2] = "IT, Industrial Agreement";
 choices[23][3] = "HS, Normas armonizadas";
 answers[23] = 2;
 units[23] = ['48'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 10693. ";
 preguntaids[23] = 10693


//  Id pregunta: 2559 Año de creación de pregunta: 2009
 questions[24]= "25)  Seg&uacute;n la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, los datos de tr&aacute;fico deben retenerse por un periodo de:";
 choices[24]= new Array();
 choices[24][0] = "doce meses computados desde la fecha en que se haya producido la comunicaci&oacute;n. Reglamentariamente, previa consulta a los operadores, se podr&aacute; ampliar o reducir el plazo de conservaci&oacute;n para determinados datos o una categor&iacute;a de datos hasta un m&aacute;ximo de dos a&ntilde;os o un m&iacute;nimo de seis meses.";
 choices[24][1] = "doce meses computados desde la fecha en que se haya producido la comunicaci&oacute;n. Reglamentariamente, previa consulta a los operadores, se podr&aacute; ampliar o reducir el plazo de conservaci&oacute;n para determinados datos o una categor&iacute;a de datos hasta un m&aacute;ximo de dieciocho meses o un m&iacute;nimo de seis meses.";
 choices[24][2] = "La Ley lo fijar&aacute; reglamentariamente";
 choices[24][3] = "12 meses m&iacute;nimo para los proveedores de redes (carriers) y 24 meses m&iacute;nimo para los proveedores de acceso a internet y de alojamiento";
 answers[24] = 0;
 units[24] = ['19'];
 blocks[24] = ['A4'];
 comments[24] = "Id Pregunta: 2559. ";
 preguntaids[24] = 2559


//  Id pregunta: 86 Año de creación de pregunta: 2016
 questions[25]= "26)  La iniciativa legislativa corresponde:";
 choices[25]= new Array();
 choices[25][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[25][1] = "Al rey y al Gobierno.";
 choices[25][2] = "Al Congreso, al Senado y al Rey.";
 choices[25][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[25] = 3;
 units[25] = ['1'];
 blocks[25] = ['A1'];
 comments[25] = "Id Pregunta: 86. Constituci&oacute;n de 1978";
 preguntaids[25] = 86


//  Id pregunta: 4817 Año de creación de pregunta: 2002
 questions[26]= "27)  En las LAN el proceso 'token passing' o paso de testigo supone:";
 choices[26]= new Array();
 choices[26][0] = "Escuchar el tr&aacute;fico del testigo y transmitir si no se detecta nada";
 choices[26][1] = "Utilizar la posesi&oacute;n del testigo para garantizar el derecho a transmitir";
 choices[26][2] = "A&ntilde;adir tramas de testigo a las tramas de datos para acceder a la red";
 choices[26][3] = "El testigo circula en un anillo hasta que alcanza su destino";
 answers[26] = 1;
 units[26] = ['112'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 4817. ";
 preguntaids[26] = 4817


//  Id pregunta: 8217 Año de creación de pregunta: 2011
 questions[27]= "28)  Seg&uacute;n M&eacute;trica v3. &iquest;cu&aacute;l de las siguientes listas esta correctamente ordenada de mayor a menor acoplamiento?";
 choices[27]= new Array();
 choices[27][0] = "De contenido, com&uacute;n, de control, externo, de datos.";
 choices[27][1] = "De datos, de marca, externo, de control, com&uacute;n, de contenido";
 choices[27][2] = "De datos, de marca, de control, externo, com&uacute;n, de contenido";
 choices[27][3] = "De contenido, com&uacute;n, externo, de marca, de datos";
 answers[27] = 3;
 units[27] = ['91'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 8217. Examen TIC A2 2010 interna";
 preguntaids[27] = 8217


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[28]= "29)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[28]= new Array();
 choices[28][0] = "El derecho a la propiedad privada.";
 choices[28][1] = "El derecho de asociaci&oacute;n.";
 choices[28][2] = "El derecho de fundaci&oacute;n.";
 choices[28][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[28] = 1;
 units[28] = ['1'];
 blocks[28] = ['A1'];
 comments[28] = "Id Pregunta: 2. Constituci&oacute;n de 1978";
 preguntaids[28] = 2


//  Id pregunta: 8786 Año de creación de pregunta: 2013
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes no es un modelo de COCOMO II?";
 choices[29]= new Array();
 choices[29][0] = "Dise&ntilde;o Arquitectura";
 choices[29][1] = "Dise&ntilde;o Preliminar";
 choices[29][2] = "Composici&oacute;n de la Aplicaci&oacute;n";
 choices[29][3] = "Post-Arquitectura";
 answers[29] = 0;
 units[29] = ['94'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 8786. ";
 preguntaids[29] = 8786


//  Id pregunta: 7043 Año de creación de pregunta: 2001
 questions[30]= "31)  &iquest;Qu&eacute; dos tipos de atributos puede tener un objeto?";
 choices[30]= new Array();
 choices[30][0] = "Atributos de clase y atributos de instancia";
 choices[30][1] = "Atributos visibles y atributos ciegos";
 choices[30][2] = "Atributos heredados y atributos no heredados";
 choices[30][3] = "Ninguna de las anteriores";
 answers[30] = 0;
 units[30] = ['85'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 7043. ";
 preguntaids[30] = 7043


//  Id pregunta: 7024 Año de creación de pregunta: 2010
 questions[31]= "32)  &iquest;Qu&eacute; t&eacute;cnica se emplea para determinar la situaci&oacute;n real en que se encuentra la organizaci&oacute;n y conocer el riesgo y las oportunidades que le ofrece el mercado?";
 choices[31]= new Array();
 choices[31][0] = "T&eacute;cnica FCE (Factores Cr&iacute;ticos de &Eacute;xito)";
 choices[31][1] = "An&aacute;lisis DAFO";
 choices[31][2] = "Aprendizaje organizativo";
 choices[31][3] = "An&aacute;lisis econ&oacute;mico del mercado";
 answers[31] = 1;
 units[31] = ['83'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 7024. ";
 preguntaids[31] = 7024


//  Id pregunta: 6319 Año de creación de pregunta: 2003
 questions[32]= "33)  En relaci&oacute;n a Cocomo II:";
 choices[32]= new Array();
 choices[32][0] = "Surge en 1997 para solventar las limitaciones de Cocomo.";
 choices[32][1] = "Propone 3 modelos: Composici&oacute;n de la Aplicaci&oacute;n, Dise&ntilde;o previo y post-arquitectura.";
 choices[32][2] = "El modelo de Composici&oacute;n de la aplicaci&oacute;n se basa en l&iacute;neas de c&oacute;digo.";
 choices[32][3] = "Todas son correctas.";
 answers[32] = 0;
 units[32] = ['93'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 6319. ";
 preguntaids[32] = 6319


//  Id pregunta: 1977 Año de creación de pregunta: 2016
 questions[33]= "34)  En relaci&oacute;n a los procedimientos de adjudicaci&oacute;n previstos en la Ley de Contratos del Sector P&uacute;blico, en el procedimiento restringido:";
 choices[33]= new Array();
 choices[33][0] = "Solo podr&aacute;n presentar proposiciones aquellos empresarios que, a su solicitud y en atenci&oacute;n a su solvencia, sean seleccionados por el &oacute;rgano de contrataci&oacute;n, estando prohibida toda negociaci&oacute;n de los t&eacute;rminos del contrato con los solicitantes o candidatos.";
 choices[33][1] = "La adjudicaci&oacute;n recaer&aacute; en el licitador justificadamente elegido por el &oacute;rgano de contrataci&oacute;n, tras efectuar consultas con diversos candidatos y negociar las condiciones del contrato con uno o varios de ellos.";
 choices[33][2] = "Todo empresario interesado podr&aacute; presentar una proposici&oacute;n, quedando excluida toda negociaci&oacute;n de los t&eacute;rminos del contrato con los licitadores.";
 choices[33][3] = "Solo podr&aacute;n presentar proposiciones aquellos empresarios que, a su solicitud y en atenci&oacute;n a su solvencia, sean seleccionados por el &oacute;rgano de contrataci&oacute;n, pudi&eacute;ndose negociar las condiciones del contrato con los mismos.";
 answers[33] = 0;
 units[33] = ['10'];
 blocks[33] = ['A2'];
 comments[33] = "Id Pregunta: 1977. ";
 preguntaids[33] = 1977


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[34]= "35)  La ley 39/2015 se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[34]= new Array();
 choices[34][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[34][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[34][2] = "el sector p&uacute;blico institucional";
 choices[34][3] = "el sector privado corporativo";
 answers[34] = 3;
 units[34] = ['7'];
 blocks[34] = ['A2'];
 comments[34] = "Id Pregunta: 214. Ley 39/2015";
 preguntaids[34] = 214


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[35]= "36)  Es falso que:";
 choices[35]= new Array();
 choices[35][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[35][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[35][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[35][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[35] = 1;
 units[35] = ['20'];
 blocks[35] = ['A4'];
 comments[35] = "Id Pregunta: 491. Direcci&oacute;n p&uacute;blica";
 preguntaids[35] = 491


//  Id pregunta: 5632 Año de creación de pregunta: 2007
 questions[36]= "37)  &iquest;Cual de los siguientes modelos de ciclo de vida no es adecuado para el desarrollo de sistemas de informaci&oacute;n orientados a objetos?";
 choices[36]= new Array();
 choices[36][0] = "Modelo de agrupamiento.";
 choices[36][1] = "Modelo en cascada.";
 choices[36][2] = "Modelo remolino.";
 choices[36][3] = "Modelo pinball.";
 answers[36] = 1;
 units[36] = ['82'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 5632. ";
 preguntaids[36] = 5632


//  Id pregunta: 7121 Año de creación de pregunta: 2010
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes contenidos deben contener obligatoriamente los certificados electr&oacute;nicos de sede electr&oacute;nica de la AGE y de sus organismos p&uacute;blicos vinculados o dependientes, de acuerdo al RD 1671/2009?";
 choices[37]= new Array();
 choices[37][0] = "Descripci&oacute;n de la sede electr&oacute;nica.";
 choices[37][1] = "Unidad administrativa suscriptora del certificado.";
 choices[37][2] = "Fechas de validez del certificado.";
 choices[37][3] = "Ninguna de las anteriores.";
 answers[37] = 1;
 units[37] = ['7'];
 blocks[37] = ['A2'];
 comments[37] = "Id Pregunta: 7121. Art&iacute;culo 18 RD 1671/2009";
 preguntaids[37] = 7121


//  Id pregunta: 4421 Año de creación de pregunta: 2002
 questions[38]= "39)  La degradaci&oacute;n de la calidad de un sistema de transmisi&oacute;n se debe a las perturbaciones, se pueden distinguir varios tipos:";
 choices[38]= new Array();
 choices[38][0] = "La distorsi&oacute;n, se produce siempre en presencia de la se&ntilde;al y puede existir de dos tipos: directa e indirecta";
 choices[38][1] = "La intermodulaci&oacute;n consiste en la aparici&oacute;n en el receptor de nuevas componentes espectrales de primer orden debido a la mezcla de las componentes espectrales de la se&ntilde;al de informaci&oacute;n";
 choices[38][2] = "El ruido es un tipo de perturbaci&oacute;n de origen electromagn&eacute;tico, se consideran tres tipos : t&eacute;rmico, impulsivo y de cuantificaci&oacute;n";
 choices[38][3] = "La diafon&iacute;a produce en la funci&oacute;n de transferencia de extremo a extremo la aparici&oacute;n de frecuencias nuevas que no exist&iacute;an en la se&ntilde;al original";
 answers[38] = 2;
 units[38] = ['104'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 4421. ";
 preguntaids[38] = 4421


//  Id pregunta: 5360 Año de creación de pregunta: 2006
 questions[39]= "40)  Un buen libro de claves podr&iacute;a ser";
 choices[39]= new Array();
 choices[39][0] = "Los n&uacute;meros primos de 128 cifras";
 choices[39][1] = "La gu&iacute;a de Paginas Blancas de Madrid 2005";
 choices[39][2] = "El CD &quot;Hung up&quot; de Madonna";
 choices[39][3] = "todas las anteriores";
 answers[39] = 3;
 units[39] = ['120'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 5360. ";
 preguntaids[39] = 5360


//  Id pregunta: 8779 Año de creación de pregunta: 2013
 questions[40]= "41)  Respecto a la tecnologia de multiplexaci&oacute;n WDM:";
 choices[40]= new Array();
 choices[40][0] = "Dense WDM soporta menos canales que Coarse WDM y se usa en distancias m&aacute;s cortas.";
 choices[40][1] = "Coarse WDM utiliza luz muy direccional para aprovechar el bajo n&uacute;mero de canales";
 choices[40][2] = "Dense WDM y Coarse WDM son tecnolog&iacute;as no interoperables";
 choices[40][3] = "Coarse WDM alcanza distancias de 1000 km";
 answers[40] = 2;
 units[40] = ['106'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 8779. ";
 preguntaids[40] = 8779


//  Id pregunta: 7517 Año de creación de pregunta: 2010
 questions[41]= "42)  IEEE 1394 es:";
 choices[41]= new Array();
 choices[41][0] = "Un formato de CD.";
 choices[41][1] = "Un proyecto de formato DVD-Audio.";
 choices[41][2] = "Una norma dirigida a dispositivos de alta velocidad como c&aacute;maras de v&iacute;deo e impresoras profesionales.";
 choices[41][3] = "Un norma que regula exclusivamente el ajuste y calibrado del color.";
 answers[41] = 2;
 units[41] = ['51'];
 blocks[41] = ['B2'];
 comments[41] = "Id Pregunta: 7517. Similar a Map 2005";
 preguntaids[41] = 7517


//  Id pregunta: 3500 Año de creación de pregunta: 2006
 questions[42]= "43)  El entorno de escritorio KDE:";
 choices[42]= new Array();
 choices[42][0] = "Utiliza como gestor de ventanas uno propio";
 choices[42][1] = "No posee gestor de ventanas propio";
 choices[42][2] = "Define sus interfaces mediante tecnolog&iacute;a CORBA";
 choices[42][3] = "No proporciona diferentes configuraciones para distintos idiomas";
 answers[42] = 0;
 units[42] = ['57'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 3500. KDE Windows Manager es el gestor de ventanas propio de KDE";
 preguntaids[42] = 3500


//  Id pregunta: 10052 Año de creación de pregunta: 2015
 questions[43]= "44)  En .NET, &iquest;qu&eacute; es el Managed Extensibility Framework (MEF)?";
 choices[43]= new Array();
 choices[43][0] = "Es una arquitectura que proporciona primitivos as&iacute;ncronos de paso de aprobaci&oacute;n de mensajes sin tipo.";
 choices[43][1] = "Es un modelo extensible de programaci&oacute;n, motor y herramientas para generar con rapidez aplicaciones de flujo de trabajo en Windows.";
 choices[43][2] = "Es una biblioteca de clases portable que permite escribir y compilar ensamblados administrados capaces de funcionar en m&uacute;ltiples plataformas de .NET.";
 choices[43][3] = "Es una biblioteca para crear aplicaciones ligeras y extensibles.";
 answers[43] = 3;
 units[43] = ['63'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 10052. Examen TIC A2 2014";
 preguntaids[43] = 10052


//  Id pregunta: 1434 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n el art&iacute;culo 81 de la Constituci&oacute;n Espa&ntilde;ola &iquest;qu&eacute; mayor&iacute;a del Congreso ser&aacute; necesaria para la aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas en una votaci&oacute;n final sobre el conjunto del proyecto?";
 choices[44]= new Array();
 choices[44][0] = "Las leyes org&aacute;nicas exigir&aacute;n en primera votaci&oacute;n mayor&iacute;a absoluta y transcurridas cuarenta y ocho horas mayor&iacute;a simple.";
 choices[44][1] = "Las leyes org&aacute;nicas exigir&aacute;n en primera votaci&oacute;n mayor&iacute;a absoluta y transcurridas cuarenta y ocho horas mayor&iacute;a ordinaria.";
 choices[44][2] = "Las leyes org&aacute;nicas exigir&aacute;n en primera votaci&oacute;n mayor&iacute;a absoluta y transcurridas cuarenta y ocho horas mayor&iacute;a cualificada.";
 choices[44][3] = "Las leyes org&aacute;nicas exigir&aacute;n mayor&iacute;a absoluta.";
 answers[44] = 3;
 units[44] = ['1'];
 blocks[44] = ['A1'];
 comments[44] = "Id Pregunta: 1434. ";
 preguntaids[44] = 1434


//  Id pregunta: 309 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n Ley 47/2003, de 26 de noviembre, General Presupuestaria, el conjunto de gastos que se considera necesario realizar en el desarrollo de actividades orientadas a la consecuci&oacute;n de determinados objetivos preestablecidos es:";
 choices[45]= new Array();
 choices[45][0] = "Un programa presupuestario.";
 choices[45][1] = "Un concepto presupuestario.";
 choices[45][2] = "Una aplicaci&oacute;n presupuestaria.";
 choices[45][3] = "Un cr&eacute;dito presupuestario.";
 answers[45] = 0;
 units[45] = ['11'];
 blocks[45] = ['A2'];
 comments[45] = "Id Pregunta: 309. Presupuestos generales";
 preguntaids[45] = 309


//  Id pregunta: 3461 Año de creación de pregunta: 2006
 questions[46]= "47)  En relaci&oacute;n a los certificados X.509:";
 choices[46]= new Array();
 choices[46][0] = "Se codifican mediante la notaci&oacute;n ASN.1";
 choices[46][1] = "Permite el uso en sus campos de nombres X.500 y DNS";
 choices[46][2] = "Se han definido extensiones que permiten incluir informaci&oacute;n espec&iacute;fica";
 choices[46][3] = "Todas las anteriores son ciertas";
 answers[46] = 3;
 units[46] = ['77'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 3461. ";
 preguntaids[46] = 3461


//  Id pregunta: 147 Año de creación de pregunta: 2016
 questions[47]= "48)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[47]= new Array();
 choices[47][0] = "X.";
 choices[47][1] = "XIX.";
 choices[47][2] = "XV.";
 choices[47][3] = "XIII.";
 answers[47] = 1;
 units[47] = ['5'];
 blocks[47] = ['A1'];
 comments[47] = "Id Pregunta: 147. Uni&oacute;n Europea";
 preguntaids[47] = 147


//  Id pregunta: 1731 Año de creación de pregunta: 2016
 questions[48]= "49)  La planificaci&oacute;n de las copias de seguridad vendr&aacute; derivada de un estudio previo de an&aacute;lisis y gesti&oacute;n de riesgos basado en una metodolog&iacute;a. Indicar la metodolog&iacute;a elaborada por el Consejo Superior de Administraci&oacute;n Electr&oacute;nica que se deber&iacute;a emplear para este estudio:";
 choices[48]= new Array();
 choices[48][0] = "SOROLLA";
 choices[48][1] = "MAGERIT";
 choices[48][2] = "NEDAES";
 choices[48][3] = "BADARAL";
 answers[48] = 1;
 units[48] = ['45'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 1731. ";
 preguntaids[48] = 1731


//  Id pregunta: 4684 Año de creación de pregunta: 2002
 questions[49]= "50)  El localizador de recursos, URL, tiene como formato general:";
 choices[49]= new Array();
 choices[49][0] = "m&eacute;todo:/servidor[:puerto]//directorio/fichero";
 choices[49][1] = "servidor://m&eacute;todo[:puerto]//directorio/fichero";
 choices[49][2] = "m&eacute;todo://servidor[:puerto]/directorio/fichero";
 choices[49][3] = "m&eacute;todo://servidor[:direcci&oacute;n:puerto]/directorio/fichero";
 answers[49] = 2;
 units[49] = ['103'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 4684. ";
 preguntaids[49] = 4684


//  Id pregunta: 493 Año de creación de pregunta: 2016
 questions[50]= "51)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[50]= new Array();
 choices[50][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[50][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[50][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[50][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[50] = 2;
 units[50] = ['22'];
 blocks[50] = ['A4'];
 comments[50] = "Id Pregunta: 493. AGE A1 2015";
 preguntaids[50] = 493


//  Id pregunta: 221 Año de creación de pregunta: 2016
 questions[51]= "52)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[51]= new Array();
 choices[51][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[51][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[51][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[51][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[51] = 1;
 units[51] = ['7'];
 blocks[51] = ['A2'];
 comments[51] = "Id Pregunta: 221. Ley 39/2015";
 preguntaids[51] = 221


//  Id pregunta: 2509 Año de creación de pregunta: 2004
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes arquitecturas RAID implementa &quot;mirroring&quot; o espejo de discos?";
 choices[52]= new Array();
 choices[52][0] = "RAID 1";
 choices[52][1] = "RAID 0";
 choices[52][2] = "RAID 2";
 choices[52][3] = "RAID 5";
 answers[52] = 0;
 units[52] = ['53'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 2509. Examen TIC MAP B 2004";
 preguntaids[52] = 2509


//  Id pregunta: 3802 Año de creación de pregunta: 2002
 questions[53]= "54)  En an&aacute;lisis estructurado, una definici&oacute;n de Historia de la Vida de las Entidades (HVE) es:";
 choices[53]= new Array();
 choices[53][0] = "Su principal objetivo es construir un modelo l&oacute;gico del sistema que facilite la comprensi&oacute;n del mismo, tanto por parte de los usuarios como del equipo de desarrollo";
 choices[53][1] = "Su principal objetivo es la representaci&oacute;n gr&aacute;fica de las necesidades de informaci&oacute;n que posee el sistema, de forma estructurada, met&oacute;dica y sencilla";
 choices[53][2] = "Su principal objetivo es describir la evoluci&oacute;n de las entidades de datos del sistema en el tiempo";
 choices[53][3] = "Su principal objetivo consiste en establecer una serie de m&eacute;todos orientados a la descripci&oacute;n pormenorizada del proceso a seguir para el tratamiento de un problema determinado y su posterior resoluci&oacute;n";
 answers[53] = 2;
 units[53] = ['85', '86'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 3802. ";
 preguntaids[53] = 3802


//  Id pregunta: 434 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[54]= new Array();
 choices[54][0] = "Consumidores";
 choices[54][1] = "PYMES y Start-ups";
 choices[54][2] = "La Industria";
 choices[54][3] = "Todos los anteriores";
 answers[54] = 3;
 units[54] = ['17'];
 blocks[54] = ['A4'];
 comments[54] = "Id Pregunta: 434. Mercado &Uacute;nico Digital";
 preguntaids[54] = 434


//  Id pregunta: 8525 Año de creación de pregunta: 2012
 questions[55]= "56)  La ley de contratos del sector p&uacute;blico establece entre sus herramientas un recurso especial de contrataci&oacute;n, se&ntilde;ale cual de la siguientes afirmaciones es FALSA.";
 choices[55]= new Array();
 choices[55][0] = "No se puede usar en casos de tramitaci&oacute;n de emergencia";
 choices[55][1] = "Es objeto de recurso,entre otros, las adjudicaciones realizadas por poderes adjudicadores.";
 choices[55][2] = "Los contratos de suministros no sujetos a regulaci&oacute;n armonizada pueden ser recurridos con este recurso especial.";
 choices[55][3] = "El car&aacute;cter del recurso es potestativo, es decir, no es obligatorio interponerlo";
 answers[55] = 2;
 units[55] = ['10'];
 blocks[55] = ['A2'];
 comments[55] = "Id Pregunta: 8525. Art. 40 RD Legislativo 3/2011";
 preguntaids[55] = 8525


//  Id pregunta: 3592 Año de creación de pregunta: 2002
 questions[56]= "57)  La medida del cumplimiento de los objetivos del organismo y de los requisitos de los usuarios de un sistema de informaci&oacute;n se conoce como:";
 choices[56]= new Array();
 choices[56][0] = "Eficiencia";
 choices[56][1] = "Correspondencia";
 choices[56][2] = "Eficacia";
 choices[56][3] = "Capacidad";
 answers[56] = 2;
 units[56] = ['83'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 3592. ";
 preguntaids[56] = 3592


//  Id pregunta: 381 Año de creación de pregunta: 2016
 questions[57]= "58)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[57]= new Array();
 choices[57][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[57][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[57][2] = "Ambas son correctas.";
 choices[57][3] = "A y B son incorrectas.";
 answers[57] = 2;
 units[57] = ['14'];
 blocks[57] = ['A3'];
 comments[57] = "Id Pregunta: 381. Pol&iacute;ticas de igualdad";
 preguntaids[57] = 381


//  Id pregunta: 4578 Año de creación de pregunta: 2002
 questions[58]= "59)  &iquest;Cu&aacute;les son las ventajas de la fibra &oacute;ptica comparadas con los cableados de cobre?:";
 choices[58]= new Array();
 choices[58][0] = "Mayor velocidad de transmisi&oacute;n, mayor ancho de banda, menor tama&ntilde;o y peso, inmunidad al ruido electromagn&eacute;tico, ausencia de diafon&iacute;a, menor atenuaci&oacute;n";
 choices[58][1] = "Mayor velocidad de transmisi&oacute;n, menor ancho de banda, menor tama&ntilde;o y peso, inmunidad al ruido electromagn&eacute;tico, distancias menores entre repetidores";
 choices[58][2] = "Menor velocidad de transmisi&oacute;n, menor ancho de banda, menor tama&ntilde;o y peso, inmunidad al ruido electromagn&eacute;tico, ausencia de diafon&iacute;a, mayor atenuaci&oacute;n, distancias mayores entre repetidores";
 choices[58][3] = "Mayor velocidad de transmisi&oacute;n, menor tama&ntilde;o y peso, inmunidad al ruido electromagn&eacute;tico, ausencia de diafon&iacute;a, mayor atenuaci&oacute;n";
 answers[58] = 0;
 units[58] = ['106'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 4578. ";
 preguntaids[58] = 4578


//  Id pregunta: 8468 Año de creación de pregunta: 2011
 questions[59]= "60)  &iquest;Qu&eacute; es Windows PowerShell?";
 choices[59]= new Array();
 choices[59][0] = "El interfaz del sistema de gesti&oacute;n de energ&iacute;a de Windows";
 choices[59][1] = "Una interfaz de comandos y un lenguaje de scripting, integrado en .NET y orientado a los administradores de sistemas Windows";
 choices[59][2] = "&quot;Una versi&oacute;n para Windows del comando &quot;&quot;ps&quot;&quot; de Unix&quot;";
 choices[59][3] = "Nada de lo anterior";
 answers[59] = 1;
 units[59] = ['58'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 8468. ";
 preguntaids[59] = 8468


//  Id pregunta: 3217 Año de creación de pregunta: 2003
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es propia de un sistema de almacenamiento de datos Data-warehouse?:";
 choices[60]= new Array();
 choices[60][0] = "Almacenamiento de datos hist&oacute;ricos.";
 choices[60][1] = "Alta volatilidad de los datos.";
 choices[60][2] = "Organizaci&oacute;n tem&aacute;tica de los datos.";
 choices[60][3] = "Integraci&oacute;n del formato de los datos.";
 answers[60] = 1;
 units[60] = ['72'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 3217. Junta Andaluc&iacute;a";
 preguntaids[60] = 3217


//  Id pregunta: 9709 Año de creación de pregunta: 2014
 questions[61]= "62)  &iquest;Qu&eacute; comando Linux permite conocer los archivos que tiene abiertos un proceso?";
 choices[61]= new Array();
 choices[61][0] = "ps -a";
 choices[61][1] = "top";
 choices[61][2] = "fork";
 choices[61][3] = "lsof";
 answers[61] = 3;
 units[61] = ['57'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 9709. ps y top muestra informaci&oacute;n de los procesos, pero no de los archivos abiertos, solo lsof hace eso";
 preguntaids[61] = 9709


//  Id pregunta: 1457 Año de creación de pregunta: 2016
 questions[62]= "63)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres y promover su efectividad, que se define en la ley 3/2007 es:";
 choices[62]= new Array();
 choices[62][0] = "La Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[62][1] = "El Observatorio Nacional de Igualdad entre mujeres y hombres.";
 choices[62][2] = "La Comisi&oacute;n Nacional de Igualdad entre mujeres y hombres.";
 choices[62][3] = "El comit&eacute; de Igualdad efectiva entre mujeres y hombres.";
 answers[62] = 0;
 units[62] = ['14'];
 blocks[62] = ['A3'];
 comments[62] = "Id Pregunta: 1457. ";
 preguntaids[62] = 1457


//  Id pregunta: 6618 Año de creación de pregunta: 2009
 questions[63]= "64)  Acerca de OpenOffice, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[63]= new Array();
 choices[63][0] = "Gracias a la ingenier&iacute;a inversa, puede manejar archivos .doc de Microsoft Office.";
 choices[63][1] = "Se puede utilizar en la mayor&iacute;a de sistemas de tipo UNIX salvo en Mac OS X.";
 choices[63][2] = "Sun Microsystems financia su desarrollo.";
 choices[63][3] = "Su antecesor fue StarOffice.";
 answers[63] = 1;
 units[63] = ['66'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 6618. ";
 preguntaids[63] = 6618


//  Id pregunta: 1827 Año de creación de pregunta: 2016
 questions[64]= "65)  Indique cu&aacute;l NO es la opci&oacute;n correcta para ser considerada como una de las finalidades de la ingenier&iacute;a inversa:";
 choices[64]= new Array();
 choices[64][0] = "La aplicaci&oacute;n de ingenier&iacute;a inversa construye especificaciones de un mayor nivel de abstracci&oacute;n partiendo del c&oacute;digo fuente de un programa.";
 choices[64][1] = "La aplicaci&oacute;n de ingenier&iacute;a inversa construye nuevas funcionalidades partiendo del c&oacute;digo fuente de un programa.";
 choices[64][2] = "La aplicaci&oacute;n de ingenier&iacute;a inversa descubre secretos y misterios del programa en uso a partir del c&oacute;digo fuente.";
 choices[64][3] = "La aplicaci&oacute;n ingenier&iacute;a inversa descubre el funcionamiento de un programa para reducir la complejidad del mismo.";
 answers[64] = 1;
 units[64] = ['97'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 1827. ";
 preguntaids[64] = 1827


//  Id pregunta: 682 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;les son las propiedades que debe cumplir una unidad l&oacute;gica de trabajo para ser calificada como transacci&oacute;n?";
 choices[65]= new Array();
 choices[65][0] = "Atomicidad, concurrencia, aislamiento y temporalidad";
 choices[65][1] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[65][2] = "Atomicidad, concurrencia, escalabilidad y durabilidad";
 choices[65][3] = "Atomicidad, consistencia, aislamiento y temporalidad";
 answers[65] = 1;
 units[65] = ['60'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 682. AGE A1 2015";
 preguntaids[65] = 682


//  Id pregunta: 3897 Año de creación de pregunta: 2002
 questions[66]= "67)  El proceso de reconocimiento de la palabra presenta cuatro fases. &iquest;Cu&aacute;l de las siguientes no es una de ellas?:";
 choices[66]= new Array();
 choices[66][0] = "Comparaci&oacute;n";
 choices[66][1] = "Detecci&oacute;n de bordes";
 choices[66][2] = "Reconstrucci&oacute;n";
 choices[66][3] = "Normalizaci&oacute;n en el tiempo";
 answers[66] = 2;
 units[66] = ['81'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 3897. ";
 preguntaids[66] = 3897


//  Id pregunta: 10387 Año de creación de pregunta: 2015
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes no es una prioridad de la estrategia Europa 2020?";
 choices[67]= new Array();
 choices[67][0] = "Crecimiento inteligente";
 choices[67][1] = "Crecimiento sostenible";
 choices[67][2] = "Crecimiento integrador";
 choices[67][3] = "Todas las anteriores";
 answers[67] = 3;
 units[67] = ['19'];
 blocks[67] = ['A4'];
 comments[67] = "Id Pregunta: 10387. ";
 preguntaids[67] = 10387


//  Id pregunta: 351 Año de creación de pregunta: 2016
 questions[68]= "69)  El grado de autoabastecimiento espa&ntilde;ol energ&eacute;tico se sit&uacute;a en torno a:";
 choices[68]= new Array();
 choices[68][0] = "10%";
 choices[68][1] = "25%";
 choices[68][2] = "45%";
 choices[68][3] = "60%";
 answers[68] = 1;
 units[68] = ['12'];
 blocks[68] = ['A3'];
 comments[68] = "Id Pregunta: 351. Modelo econ&oacute;mico";
 preguntaids[68] = 351


//  Id pregunta: 6419 Año de creación de pregunta: 2003
 questions[69]= "70)  &iquest;C&oacute;mo se garantiza la integridad de la factura electr&oacute;nica?";
 choices[69]= new Array();
 choices[69][0] = "Con firma electr&oacute;nica avanzada basada en un certificado reconocido";
 choices[69][1] = "Mediante sello electr&oacute;nico avanzado basado en un certificado reconocido que identifique a la persona jur&iacute;dica o entidad sin personalidad jur&iacute;dica que selle la factura electr&oacute;nica, a trav&eacute;s de su denominaci&oacute;n o raz&oacute;n social y su n&uacute;mero de identificaci&oacute;n fiscal.";
 choices[69][2] = "A y B son correctas";
 choices[69][3] = "No es necesario garantizar la integridad de la factura pues ya se ve en el remitente";
 answers[69] = 2;
 units[69] = ['10'];
 blocks[69] = ['A2'];
 comments[69] = "Id Pregunta: 6419. ";
 preguntaids[69] = 6419


//  Id pregunta: 6127 Año de creación de pregunta: 2003
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes elementos no es utilizado por Java?:";
 choices[70]= new Array();
 choices[70][0] = "Enteros";
 choices[70][1] = "Booleanos";
 choices[70][2] = "Cadenas";
 choices[70][3] = "Tensores";
 answers[70] = 3;
 units[70] = ['64'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 6127. Examen TIC A1 MAP 2007";
 preguntaids[70] = 6127


//  Id pregunta: 10368 Año de creación de pregunta: 2015
 questions[71]= "72)  &iquest;Cu&aacute;l es el ciclo de vida correcto de la informaci&oacute;n?";
 choices[71]= new Array();
 choices[71][0] = "Generaci&oacute;n, Almacenamiento, Acceso, Disposici&oacute;n, Uso y Conservaci&oacute;n o Destrucci&oacute;n";
 choices[71][1] = "Generaci&oacute;n, Acceso, Almacenamiento, Uso, Disposici&oacute;n y Conservaci&oacute;n o Destrucci&oacute;n";
 choices[71][2] = "Generaci&oacute;n, Acceso, Disposici&oacute;n, Almacenamiento, Uso y Conservaci&oacute;n o Destrucci&oacute;n";
 choices[71][3] = "Generaci&oacute;n, Almacenamiento, Acceso, Uso, Disposici&oacute;n, y Conservaci&oacute;n o Destrucci&oacute;n";
 answers[71] = 0;
 units[71] = ['100'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 10368. ";
 preguntaids[71] = 10368


//  Id pregunta: 8979 Año de creación de pregunta: 2013
 questions[72]= "73)  Seg&uacute;n la LSSI,  Los prestadores de servicios de la sociedad de la informaci&oacute;n que faciliten enlaces a otros contenidos o incluyan en los suyos directorios o instrumentos de b&uacute;squeda de contenidos no ser&aacute;n responsables por la informaci&oacute;n a la que dirijan a los destinatarios de sus servicios, siempre que";
 choices[72]= new Array();
 choices[72][0] = "No tengan conocimiento efectivo de que la actividad o la informaci&oacute;n a la que remiten o recomiendan es il&iacute;cita o de que lesiona bienes o derechos de un tercero susceptibles de indemnizaci&oacute;n";
 choices[72][1] = "A&uacute;n teniendo conocimiento de lo estipulado en la respuesta a), act&uacute;en con diligencia para suprimir o inutilizar el enlace correspondiente.";
 choices[72][2] = "Las respuestas a) y b) son correctas";
 choices[72][3] = "Ninguna de las anteriores";
 answers[72] = 2;
 units[72] = ['19'];
 blocks[72] = ['A4'];
 comments[72] = "Id Pregunta: 8979. Ley 34/2002, art&iacute;culo 17";
 preguntaids[72] = 8979


//  Id pregunta: 4158 Año de creación de pregunta: 2006
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes factores no es necesario tener en cuenta para guiar a una organizaci&oacute;n hacia el futuro?";
 choices[73]= new Array();
 choices[73][0] = "El mercado";
 choices[73][1] = "La misi&oacute;n";
 choices[73][2] = "Metas y objetivos";
 choices[73][3] = "Subvenciones";
 answers[73] = 3;
 units[73] = ['83'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 4158. ";
 preguntaids[73] = 4158


//  Id pregunta: 4037 Año de creación de pregunta: 2004
 questions[74]= "75)  &iquest;Que definici&oacute;n de las siguientes se ajusta m&aacute;s al concepto de Downsizing?";
 choices[74]= new Array();
 choices[74][0] = "Descarga y migraci&oacute;n selectiva de aplicaciones.";
 choices[74][1] = "Migraci&oacute;n de aquellas aplicaciones personales o departamentales cuya informaci&oacute;n es relevante para toda la organizaci&oacute;n y que deben ser dispuestas para su acceso global.";
 choices[74][2] = "Todas son ciertas.";
 choices[74][3] = "Migraci&oacute;n de aplicaciones desde el gran ordenador principal a m&aacute;quinas mucho menores.";
 answers[74] = 3;
 units[74] = ['95'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 4037. ";
 preguntaids[74] = 4037


