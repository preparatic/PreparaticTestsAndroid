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
//  Id pregunta: 7060 Año de creación de pregunta: 2010
 questions[0]= "1)  Si decimos que las filas de una tabla est&aacute;n ordenadas en alguna secuencia&nbsp;f&iacute;sica, independiente de cualquier ordenamiento que pueda imponerse a la tabla mediante &iacute;ndices, estamos refiri&eacute;ndonos a un sistema de base de datos:";
 choices[0]= new Array();
 choices[0][0] = "Orientado a objetos";
 choices[0][1] = "Relacional";
 choices[0][2] = "De lista invertida";
 choices[0][3] = "Jer&aacute;rquica";
 answers[0] = 2;
 units[0] = ['61'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 7060. Un ejemplo de BD de lista invertida es ADABAS";
 preguntaids[0] = 7060


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[1]= "2)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[1]= new Array();
 choices[1][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[1][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[1][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[1][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[1] = 1;
 units[1] = ['7'];
 blocks[1] = ['A2'];
 comments[1] = "Id Pregunta: 215. Ley 39/2015";
 preguntaids[1] = 215


//  Id pregunta: 940 Año de creación de pregunta: 2016
 questions[2]= "3)  Sobre la Gu&iacute;a de Comunicaci&oacute;n Digital, cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[2]= new Array();
 choices[2][0] = "Aplica a toda las Administraciones Publicas tanto Comunidades Aut&oacute;nomas como Ayuntamientos.";
 choices[2][1] = "Es normativa de obligado cumplimiento.";
 choices[2][2] = "Afecta tan solo a las p&aacute;ginas web y no a los documentos electr&oacute;nicos de ning&uacute;n tipo.";
 choices[2][3] = "Ninguna es cierta.";
 answers[2] = 3;
 units[2] = ['125'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 940. Gu&iacute;a de Comunicaci&oacute;n Digital de la AGE";
 preguntaids[2] = 940


//  Id pregunta: 7780 Año de creación de pregunta: 2010
 questions[3]= "4)  Indique cu&aacute;l de los siguientes criterios NO es correcto de acuerdo con el Modelo EFQM de Excelencia:";
 choices[3]= new Array();
 choices[3][0] = "Alianzas y recursos.";
 choices[3][1] = "Liderazgo.";
 choices[3][2] = "Resultados en la sociedad.";
 choices[3][3] = "Viabilidad econ&oacute;mica.";
 answers[3] = 3;
 units[3] = ['98'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 7780. ";
 preguntaids[3] = 7780


//  Id pregunta: 9814 Año de creación de pregunta: 2015
 questions[4]= "5)  Para que un organismo utilice la pasarela de pagos de la AEAT:";
 choices[4]= new Array();
 choices[4][0] = "Necesita un certificado de sede electr&oacute;nica.";
 choices[4][1] = "Debe implementar una interfaz REST.";
 choices[4][2] = "Debe poseer un certificado de persona f&iacute;sica, jur&iacute;dica o de componente.";
 choices[4][3] = "La DTIC recomienda que cada organismo implemente su propia pasarela de pagos.";
 answers[4] = 2;
 units[4] = ['75'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 9814. ";
 preguntaids[4] = 9814


//  Id pregunta: 3834 Año de creación de pregunta: 2002
 questions[5]= "6)  En un DFD, se&ntilde;alar aquella situaci&oacute;n que no es correcta:";
 choices[5]= new Array();
 choices[5][0] = "Una entidad externa se relaciona con un proceso mediante uno o varios flujos de datos";
 choices[5][1] = "Un almac&eacute;n se repite en varios niveles de DFDs";
 choices[5][2] = "Dos procesos se pueden comunicar, enviando datos de uno a otro, siempre que lacomunicaci&oacute;n entre ellos sea as&iacute;ncrona";
 choices[5][3] = "Un flujo de datos entra en un proceso que s&oacute;lo realiza la transformaci&oacute;n de dividir el flujo entrante en dos flujos salientes";
 answers[5] = 2;
 units[5] = ['85', '86'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 3834. ";
 preguntaids[5] = 3834


//  Id pregunta: 2946 Año de creación de pregunta: 2002
 questions[6]= "7)  La multiprogramaci&oacute;n:";
 choices[6]= new Array();
 choices[6][0] = "Se basa en el concepto de tiempo compartido";
 choices[6][1] = "Aprovecha las ventajas de los canales de E/S y de las interrupciones";
 choices[6][2] = "Reduce el tiempo de espera de un programa pero no elimina los tiempos muertos producidos por operaciones de E/S";
 choices[6][3] = "La organizaci&oacute;n de los trabajos mediante colas o listas simplifica las funciones del supervisor respecto al de sistemas operativos convencionales";
 answers[6] = 1;
 units[6] = ['56'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 2946. ";
 preguntaids[6] = 2946


//  Id pregunta: 4163 Año de creación de pregunta: 2006
 questions[7]= "8)  El an&aacute;lisis de requerimientos es:";
 choices[7]= new Array();
 choices[7][0] = "Una actividad intesiva de comunicaci&oacute;n";
 choices[7][1] = "Una actividad intensiva de programaci&oacute;n";
 choices[7][2] = "Una actividad intesiva de especificaci&oacute;n";
 choices[7][3] = "Ninguna de las anteriores";
 answers[7] = 0;
 units[7] = ['84'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 4163. ";
 preguntaids[7] = 4163


//  Id pregunta: 3129 Año de creación de pregunta: 2002
 questions[8]= "9)  &iquest;En qu&eacute; se basa la acci&oacute;n de comprimir las im&aacute;genes para almacenarlas o transmitirlas v&iacute;a red de &aacute;rea local o v&iacute;a teleproceso?:";
 choices[8]= new Array();
 choices[8][0] = "En la codificaci&oacute;n progresiva";
 choices[8][1] = "En la modulaci&oacute;n codificada";
 choices[8][2] = "En la codificaci&oacute;n de la informaci&oacute;n";
 choices[8][3] = "En el filtrado de frecuencias";
 answers[8] = 2;
 units[8] = ['53'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 3129. ";
 preguntaids[8] = 3129


//  Id pregunta: 10892 Año de creación de pregunta: 2015
 questions[9]= "10)  Qu&eacute; direcci&oacute;n multicast utiliza RIPng";
 choices[9]= new Array();
 choices[9][0] = "FF02::9";
 choices[9][1] = "FF02::1";
 choices[9][2] = "FF02:A";
 choices[9][3] = "FF02::6";
 answers[9] = 0;
 units[9] = ['102'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 10892. ";
 preguntaids[9] = 10892


//  Id pregunta: 10126 Año de creación de pregunta: 2015
 questions[10]= "11)  En SQL Server, la cardinalidad m&aacute;xima de una tabla de hechos que es la tabla central de n tablas dimensionales es:";
 choices[10]= new Array();
 choices[10][0] = "La multiplicaci&oacute;n de las cardinalidades de cada una de las n tablas dimensionales.";
 choices[10][1] = "La suma de las cardinalidades de cada una de las n tablas dimensionales.";
 choices[10][2] = "La mayor de las cardinalidades presentes en las n tablas dimensionales.";
 choices[10][3] = "La mayor de las cardinalidades presentes en las n tablas dimensionales elevado a n.";
 answers[10] = 0;
 units[10] = ['60'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 10126. Examen TIC A1 2014";
 preguntaids[10] = 10126


//  Id pregunta: 9422 Año de creación de pregunta: 2014
 questions[11]= "12)  Las siglas CSMA/CD significan:";
 choices[11]= new Array();
 choices[11][0] = "Carrier Sense Multiple Access with Collision Detection";
 choices[11][1] = "Carrier Sense Multiple Access with Common Data";
 choices[11][2] = "Carrier Sense Multiple Access without Collision Data";
 choices[11][3] = "Clear Sense Multiple Access with Collision Detection";
 answers[11] = 0;
 units[11] = ['112'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 9422. ";
 preguntaids[11] = 9422


//  Id pregunta: 10835 Año de creación de pregunta: 2015
 questions[12]= "13)  El stemming es:";
 choices[12]= new Array();
 choices[12][0] = "Una t&eacute;cnica de indexaci&oacute;n sint&aacute;ctica";
 choices[12][1] = "Una t&eacute;cnica de indexaci&oacute;n morfol&oacute;gica";
 choices[12][2] = "Una t&eacute;cnica de indexaci&oacute;n sem&aacute;ntica";
 choices[12][3] = "Una t&eacute;cnica de eliminaci&oacute;n de palabras vac&iacute;as";
 answers[12] = 1;
 units[12] = ['100'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 10835. ";
 preguntaids[12] = 10835


//  Id pregunta: 1098 Año de creación de pregunta: 2016
 questions[13]= "14)  Respecto a la tecnolog&iacute;a WIFI:";
 choices[13]= new Array();
 choices[13][0] = "Los equipos WIFI no necesitan adaptarse a ninguna normativa.";
 choices[13][1] = "Los ayuntamientos pueden comercializar WIFI siempre y cuando se hayan inscrito en el registro de operadores.";
 choices[13][2] = "Los operadores de telecomunicaciones tienen que pedir una licencia para la utilizaci&oacute;n de la banda WIFI, que les permite comercializar este servicio.";
 choices[13][3] = "Los equipos WIFI utilizan una banda de uso com&uacute;n.";
 answers[13] = 3;
 units[13] = ['108'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 1098. ";
 preguntaids[13] = 1098


//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[14]= "15)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[14]= new Array();
 choices[14][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[14][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[14][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[14][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[14] = 2;
 units[14] = ['19'];
 blocks[14] = ['A4'];
 comments[14] = "Id Pregunta: 488. Sociedad de la informaci&oacute;n";
 preguntaids[14] = 488


//  Id pregunta: 2631 Año de creación de pregunta: 2002
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes principios no forman parte de los doce que Codd estableci&oacute; en 1985 para que una base de datos pueda considerarse relacional si se satisfacen al menos seis de ellos?";
 choices[15]= new Array();
 choices[15][0] = "Regla de la no subversi&oacute;n";
 choices[15][1] = "Independencia l&oacute;gica de los datos";
 choices[15][2] = "Actualizaci&oacute;n de vistas";
 choices[15][3] = "Consistencia de los datos";
 answers[15] = 3;
 units[15] = ['61'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 2631. ";
 preguntaids[15] = 2631


//  Id pregunta: 8673 Año de creación de pregunta: 2013
 questions[16]= "17)  Un conjunto de procesadores interconectados por redes que ocultan dicha caracter&iacute;stica mostrando una visi&oacute;n al usuario de &ldquo;uniprocesador virtual&rdquo; es:";
 choices[16]= new Array();
 choices[16][0] = "S. O. Distribuido";
 choices[16][1] = "S.O. Cooperativos o basados en Middlewares";
 choices[16][2] = "S. O. En Red";
 choices[16][3] = "S.O. Centralizados";
 answers[16] = 0;
 units[16] = ['55'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 8673. ";
 preguntaids[16] = 8673


//  Id pregunta: 209 Año de creación de pregunta: 2016
 questions[17]= "18)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[17]= new Array();
 choices[17][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[17][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[17][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[17][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[17] = 3;
 units[17] = ['7'];
 blocks[17] = ['A2'];
 comments[17] = "Id Pregunta: 209. Ley 39/2015";
 preguntaids[17] = 209


//  Id pregunta: 2848 Año de creación de pregunta: 2002
 questions[18]= "19)  En relaci&oacute;n con el concepto de memoria virtual, una de las siguientes afirmaciones es falsa. Indique cu&aacute;l:";
 choices[18]= new Array();
 choices[18][0] = "El mecanismo de traducci&oacute;n de las direcciones de las memorias virtuales se basa en una memoria asociativa que contiene la tabla de p&aacute;ginas f&iacute;sicas y sus equivalentes l&oacute;gicas";
 choices[18][1] = "Generalmente existe una memoria asociativa de alta velocidad que sirve para albergar aquellos elementos de la tabla de p&aacute;ginas/segmentos utilizadas m&aacute;s recientemente";
 choices[18][2] = "La viabilidad de la memoria virtual se basa en el principio de la proximidad de las referencias a memorias";
 choices[18][3] = "La memoria virtual paginada da lugar a la fragmentaci&oacute;n externa";
 answers[18] = 3;
 units[18] = ['56'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 2848. ";
 preguntaids[18] = 2848


//  Id pregunta: 8310 Año de creación de pregunta: 2011
 questions[19]= "20)  &iquest;En qu&eacute; est&aacute;ndar se define el lenguaje SGML?";
 choices[19]= new Array();
 choices[19][0] = "ISO 8879";
 choices[19][1] = "RFC 8879";
 choices[19][2] = "IEEE 8879";
 choices[19][3] = "Ninguna de las anteriores";
 answers[19] = 0;
 units[19] = ['74'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 8310. Examen UPM A2 2011";
 preguntaids[19] = 8310


//  Id pregunta: 5777 Año de creación de pregunta: 2007
 questions[20]= "21)  Con el cifrado se asegura";
 choices[20]= new Array();
 choices[20][0] = "la autenticidad";
 choices[20][1] = "la confidencialidad";
 choices[20][2] = "la integridad, la autenticidad y el no repudio en destino";
 choices[20][3] = "la integridad, la autenticidad y el no repudio en origen";
 answers[20] = 1;
 units[20] = ['76'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 5777. ";
 preguntaids[20] = 5777


//  Id pregunta: 1014 Año de creación de pregunta: 2016
 questions[21]= "22)  Los Directores Insulares de la Administraci&oacute;n General del Estado (se&ntilde;ala la incorrecta):";
 choices[21]= new Array();
 choices[21][0] = "ser&aacute;n nombrados por el Delegado del Gobierno mediante el procedimiento de concurso-oposici&oacute;n";
 choices[21][1] = "ser&aacute;n nombrados entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1";
 choices[21][2] = "dependen jer&aacute;rquicamente del Delegado del Gobierno en la Comunidad Aut&oacute;noma o del Subdelegado del Gobierno en la provincia, cuando este cargo exista";
 choices[21][3] = "ejercen, en su &aacute;mbito territorial, las competencias atribuidas por esta Ley a los Subdelegados del Gobierno en las provincias";
 answers[21] = 0;
 units[21] = ['4', '7', '8', '9'];
 blocks[21] = ['A1', 'A2'];
 comments[21] = "Id Pregunta: 1014. Ley 40/2015";
 preguntaids[21] = 1014


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[22]= "23)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[22]= new Array();
 choices[22][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[22][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[22][2] = "Ninguna es correcta.";
 choices[22][3] = "A y B son correctas.";
 answers[22] = 1;
 units[22] = ['14'];
 blocks[22] = ['A3'];
 comments[22] = "Id Pregunta: 391. Pol&iacute;ticas de igualdad";
 preguntaids[22] = 391


//  Id pregunta: 1219 Año de creación de pregunta: 2016
 questions[23]= "24)  Cu&aacute;l de las siguientes afirmaciones sobre el protocolo de enrutamiento OSPF (Open Shortest Path First) es INCORRECTA:";
 choices[23]= new Array();
 choices[23][0] = "OSPF enruta paquetes bas&aacute;ndose &uacute;nicamente en la direcci&oacute;n IP destino.";
 choices[23][1] = "Utiliza un m&eacute;todo basado en el algoritmo de Dijkstra para el c&aacute;lculo de la ruta &oacute;ptima.";
 choices[23][2] = "En OSPF un sistema aut&oacute;nomo (AS) es un conjunto de redes bajo una administraci&oacute;n com&uacute;n.";
 choices[23][3] = "Al operar OSPF internamente en un sistema aut&oacute;nomo (AS), no puede enviar ni recibir rutas a otros AS.";
 answers[23] = 3;
 units[23] = ['102'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 1219. ";
 preguntaids[23] = 1219


//  Id pregunta: 7595 Año de creación de pregunta: 2010
 questions[24]= "25)  Dentro de una red GPRS (General Packet Radio Service), &iquest;cu&aacute;l de las siguientes funciones es propia del GGSN (Gateway GPRS Support Node)?";
 choices[24]= new Array();
 choices[24][0] = "La gesti&oacute;n de la movilidad.";
 choices[24][1] = "El cifrado y autenticaci&oacute;n.";
 choices[24][2] = "La conexi&oacute;n al HLR (Home Location Register).";
 choices[24][3] = "La conexi&oacute;n a los ISP (Internet Service Provider).";
 answers[24] = 3;
 units[24] = ['106'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 7595. Map 2006";
 preguntaids[24] = 7595


//  Id pregunta: 10186 Año de creación de pregunta: 2015
 questions[25]= "26)  La Agenda Digital para Europa, iniciativa de la estrategia Europa 2020 puesta en marcha por la Comisi&oacute;n Europea:";
 choices[25]= new Array();
 choices[25][0] = "Establece la ZUPE (Zona &Uacute;nica de Prestaciones para Empresas), que supondr&aacute; la interconexi&oacute;n de plataformas de apoyo al Emprendedor, permitiendo la presentaci&oacute;n de tr&aacute;mites de inicio de actividad para todo el territorio europeo.";
 choices[25][1] = "Establece medidas para que, en el a&ntilde;o 2020, el 75% de los hogares europeos est&eacute;n abonados a conexiones de internet por encima de los 100 Mbps.";
 choices[25][2] = "Establece el objetivo de equipar a los europeos con un acceso en l&iacute;nea seguro a sus datos m&eacute;dicos en 2017.";
 choices[25][3] = "Propone que, para 2020, los pa&iacute;ses miembros deber&iacute;an duplicar el gasto p&uacute;blico anual total en investigaci&oacute;n y desarrollo de las TIC.";
 answers[25] = 3;
 units[25] = ['16'];
 blocks[25] = ['A3'];
 comments[25] = "Id Pregunta: 10186. Examen TIC A1 2014";
 preguntaids[25] = 10186


//  Id pregunta: 958 Año de creación de pregunta: 2016
 questions[26]= "27)  Indique cual de los siguientes no forma parte del vocabulario de scrum";
 choices[26]= new Array();
 choices[26][0] = "Burn-up chart";
 choices[26][1] = "Arquitectural Skype";
 choices[26][2] = "Burn-down chart";
 choices[26][3] = "Definition of done";
 answers[26] = 1;
 units[26] = ['34', '84'];
 blocks[26] = ['B1', 'B3'];
 comments[26] = "Id Pregunta: 958. Metodologias &aacute;giles";
 preguntaids[26] = 958


//  Id pregunta: 101 Año de creación de pregunta: 2016
 questions[27]= "28)  Se&ntilde;ale la respuesta correcta:";
 choices[27]= new Array();
 choices[27][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[27][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[27][2] = "Las respuestas A y B son correctas.";
 choices[27][3] = "Las respuestas A y B son falsas.";
 answers[27] = 2;
 units[27] = ['5'];
 blocks[27] = ['A1'];
 comments[27] = "Id Pregunta: 101. Uni&oacute;n Europea";
 preguntaids[27] = 101


//  Id pregunta: 3223 Año de creación de pregunta: 2003
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes algoritmos no es de criptograf&iacute;a sim&eacute;trica de flujos?";
 choices[28]= new Array();
 choices[28][0] = "WAKE";
 choices[28][1] = "RC-4";
 choices[28][2] = "SEAL";
 choices[28][3] = "MD5";
 answers[28] = 3;
 units[28] = ['76'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 3223. ";
 preguntaids[28] = 3223


//  Id pregunta: 3877 Año de creación de pregunta: 2002
 questions[29]= "30)  La modularizaci&oacute;n hace referencia a:";
 choices[29]= new Array();
 choices[29][0] = "Aislar funciones bien definidas.";
 choices[29][1] = "Reflejar la estructura de la organizaci&oacute;n de modo que facilite su comprensi&oacute;n.";
 choices[29][2] = "Correcta definici&oacute;n de las interfaces internas y externas, que permita ignorar la estructura interna de los m&oacute;dulos.";
 choices[29][3] = "Persigue que la arquitectura t&eacute;cnica del sistema se fundamente en m&oacute;dulos de peque&ntilde;o tama&ntilde;o.";
 answers[29] = 3;
 units[29] = ['89'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 3877. ";
 preguntaids[29] = 3877


//  Id pregunta: 8349 Año de creación de pregunta: 2011
 questions[30]= "31)  &iquest;Cu&aacute;l es la tecnolog&iacute;a que permite una mayor velocidad de transferencia de datos?";
 choices[30]= new Array();
 choices[30][0] = "EDGE";
 choices[30][1] = "HSDPA";
 choices[30][2] = "UMTS/3G";
 choices[30][3] = "GPRS";
 answers[30] = 1;
 units[30] = ['117'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 8349. Examen UC3M 2010";
 preguntaids[30] = 8349


//  Id pregunta: 10926 Año de creación de pregunta: 2015
 questions[31]= "32)  Indicar el gestor de contenidos que no es software libre";
 choices[31]= new Array();
 choices[31][0] = "Open CMS";
 choices[31][1] = "Vignette";
 choices[31][2] = "Zope";
 choices[31][3] = "Alfresco";
 answers[31] = 1;
 units[31] = ['99'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 10926. ";
 preguntaids[31] = 10926


//  Id pregunta: 9805 Año de creación de pregunta: 2015
 questions[32]= "33)  Un plan de emergencia es un plan por el que...";
 choices[32]= new Array();
 choices[32][0] = "&hellip; se realiza una nueva puesta en marcha del negocio tras un incidente.";
 choices[32][1] = "&hellip; disminuye el riesgo de aparici&oacute;n de incidentes menores.";
 choices[32][2] = "&hellip; se fuerza la indisponibilidad de los recursos cr&iacute;ticos de informaci&oacute;n.";
 choices[32][3] = "&hellip; se prepara el entorno de continuidad en condiciones precarias.";
 answers[32] = 3;
 units[32] = ['45'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 9805. ";
 preguntaids[32] = 9805


//  Id pregunta: 1019 Año de creación de pregunta: 2016
 questions[33]= "34)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado, la suplencia del Delegado del Gobierno corresponder&aacute; a:";
 choices[33]= new Array();
 choices[33][0] = "el Secretario General";
 choices[33][1] = "el Subdirector General";
 choices[33][2] = "el Secretario de Estado";
 choices[33][3] = "ninguna es correcta";
 answers[33] = 0;
 units[33] = ['4', '7', '8', '9'];
 blocks[33] = ['A1', 'A2'];
 comments[33] = "Id Pregunta: 1019. Ley 40/2015";
 preguntaids[33] = 1019


//  Id pregunta: 10815 Año de creación de pregunta: 2015
 questions[34]= "35)  Seg&uacute;n la Ley 25/2013:";
 choices[34]= new Array();
 choices[34][0] = "Las facturas electr&oacute;nicas que se remitan a las Administraciones P&uacute;blicas deber&aacute;n tener un formato estructurado y estar firmadas con firma electr&oacute;nica avanzada basada en un certificado reconocido.";
 choices[34][1] = "Las Entidades Locales podr&aacute;n adherirse a la utilizaci&oacute;n del Punto general de entrada de facturas electr&oacute;nicas que proporcione su Diputaci&oacute;n, Comunidad Aut&oacute;noma o el Estado.";
 choices[34][2] = "El Punto general de entrada de facturas electr&oacute;nicas proporcionar&aacute; un servicio autom&aacute;tico de puesta a disposici&oacute;n o de remisi&oacute;n electr&oacute;nica de las mismas a las oficinas contables competentes para su registro.";
 choices[34][3] = "Todas las anteriores son correctas";
 answers[34] = 3;
 units[34] = ['10'];
 blocks[34] = ['A2'];
 comments[34] = "Id Pregunta: 10815. ";
 preguntaids[34] = 10815


//  Id pregunta: 4287 Año de creación de pregunta: 2002
 questions[35]= "36)  El sistema EURODAC de TESTA II intercambia informaci&oacute;n entre las Administraciones P&uacute;blicas europeas referentes a:";
 choices[35]= new Array();
 choices[35][0] = "inmigraci&oacute;n";
 choices[35][1] = "accidentes de tr&aacute;fico";
 choices[35][2] = "ofertas de empleo";
 choices[35][3] = "fondos estructurales";
 answers[35] = 0;
 units[35] = ['114'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 4287. ";
 preguntaids[35] = 4287


//  Id pregunta: 7327 Año de creación de pregunta: 2010
 questions[36]= "37)  En el modelo CMM de Ingenier&iacute;a de Software, dentro del nivel 'Definido' est&aacute;n las &Aacute;reas Clave:";
 choices[36]= new Array();
 choices[36][0] = "Gesti&oacute;n de Requisitos y gestion cuantitativa";
 choices[36][1] = "Gestion de la Calidad y Planificaci&oacute;n del Proyecto";
 choices[36][2] = "Gesti&oacute;n Cuantitativa del Proyecto y Gesti&oacute;n de Calidad del Software";
 choices[36][3] = "Gesti&oacute;n Integrada del Software y Revision entre pares";
 answers[36] = 3;
 units[36] = ['92'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 7327. ";
 preguntaids[36] = 7327


//  Id pregunta: 2209 Año de creación de pregunta: 2002
 questions[37]= "38)  La auditoria es:";
 choices[37]= new Array();
 choices[37][0] = "Actividad que tiene por objeto la evaluaci&oacute;n de conformidad de dise&ntilde;os, productos software, procesos o sistema";
 choices[37][1] = "Proceso por el que el sistema de calidad de una empresa es auditado para comprobar el cumplimiento de determinadas normas";
 choices[37][2] = "Descripci&oacute;n completa de un producto software y las interrrelaciones de sus elementos";
 choices[37][3] = "Estructura organizativa, procedimientos, actividades y recursos que juntos aseguran que los productos software satisfacen las necesidades impl&iacute;citas o establecidas en contrato por los clientes";
 answers[37] = 0;
 units[37] = ['36'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 2209. ";
 preguntaids[37] = 2209


//  Id pregunta: 4224 Año de creación de pregunta: 2006
 questions[38]= "39)  &iquest;Qu&eacute; tipos de mantenimiento se definen en M&eacute;trica v3 (considerados o no)?";
 choices[38]= new Array();
 choices[38][0] = "Correctivo, adaptativo, preventivo y perfectivo";
 choices[38][1] = "Correctivo, adaptativo, evolutivo y perfectivo";
 choices[38][2] = "Correctivo, Adaptativo y evolutivo";
 choices[38][3] = "Correctivo, adaptativo y perfectivo";
 answers[38] = 1;
 units[38] = ['91'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 4224. ";
 preguntaids[38] = 4224


//  Id pregunta: 1020 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[39]= new Array();
 choices[39][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[39][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[39][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[39][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[39] = 1;
 units[39] = ['4', '7', '8', '9'];
 blocks[39] = ['A1', 'A2'];
 comments[39] = "Id Pregunta: 1020. Ley 40/2015";
 preguntaids[39] = 1020


//  Id pregunta: 1379 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Se pueden controlar el n&uacute;mero de impresiones que un usuario ha realizado en una impresora en red mediante el protocolo de gesti&oacute;n SNMP?";
 choices[40]= new Array();
 choices[40][0] = "Si, siempre y cuando en la MIB de la impresora se contemple este para metro.";
 choices[40][1] = "No, necesitaria una base de datos externa para almacenarlo.";
 choices[40][2] = "Si, solo mediante instalaci&oacute;n de firmware nuevo en la impresora.";
 choices[40][3] = "Si, pero con protocolos propietarios de la impresora.";
 answers[40] = 0;
 units[40] = ['114'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 1379. ";
 preguntaids[40] = 1379


//  Id pregunta: 352 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n la Ley 39/2006, de Promoci&oacute;n de Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, define el Grado II - Dependencia severa como: cuando la persona necesita ayuda para realizar varias actividades b&aacute;sicas de la vida diaria&hellip;";
 choices[41]= new Array();
 choices[41][0] = "2 o 3 veces al d&iacute;a, pero no quiere el apoyo permanente de un cuidador o tiene necesidades de apoyo extenso para su autonom&iacute;a personal.";
 choices[41][1] = "varias veces al d&iacute;a y, por su p&eacute;rdida total de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, necesita el apoyo indispensable y continuo de otra persona o tiene necesidades de apoyo generalizado para su autonom&iacute;a personal.";
 choices[41][2] = "al menos una vez al d&iacute;a o tiene necesidades de apoyo intermitente o limitado para su autonom&iacute;a personal.";
 choices[41][3] = "muchas veces al d&iacute;a y necesita el apoyo de constante de un cuidador.";
 answers[41] = 0;
 units[41] = ['14'];
 blocks[41] = ['A3'];
 comments[41] = "Id Pregunta: 352. AGE A2 2015";
 preguntaids[41] = 352


//  Id pregunta: 72 Año de creación de pregunta: 2016
 questions[42]= "43)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[42]= new Array();
 choices[42][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[42][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[42][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[42][3] = "Sancionar y publicar las leyes.";
 answers[42] = 2;
 units[42] = ['1'];
 blocks[42] = ['A1'];
 comments[42] = "Id Pregunta: 72. Constituci&oacute;n de 1978";
 preguntaids[42] = 72


//  Id pregunta: 6952 Año de creación de pregunta: 2010
 questions[43]= "44)  Seg&uacute;n M&eacute;trica 3, el diagrama de estructura define posibles estructuras que permiten mostrar la secuencia de las llamadas entre m&oacute;dulos; &iquest;cu&aacute;l de las siguientes es una de ellas?";
 choices[43]= new Array();
 choices[43][0] = "Continua";
 choices[43][1] = "Dispersa";
 choices[43][2] = "en &Aacute;rbol";
 choices[43][3] = "Alternativa";
 answers[43] = 3;
 units[43] = ['91'];
 blocks[43] = ['B3'];
 comments[43] = "Id Pregunta: 6952. TIC-B 2009 bloque desarrollo";
 preguntaids[43] = 6952


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[44]= "45)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[44]= new Array();
 choices[44][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[44][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[44][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[44][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[44] = 3;
 units[44] = ['11'];
 blocks[44] = ['A2'];
 comments[44] = "Id Pregunta: 315. Presupuestos generales";
 preguntaids[44] = 315


//  Id pregunta: 4653 Año de creación de pregunta: 2002
 questions[45]= "46)  Con referencia a los modems:";
 choices[45]= new Array();
 choices[45][0] = "La se&ntilde;al de entrada modula a la portadora, siendo ambas digitales";
 choices[45][1] = "Realizan los procesos de codificaci&oacute;n, modulaci&oacute;n, demodulaci&oacute;n, recepci&oacute;n y decodificaci&oacute;n";
 choices[45][2] = "Realizan s&oacute;lo los procesos de modulaci&oacute;n y demodulaci&oacute;n";
 choices[45][3] = "La se&ntilde;al de entrada puede ser anal&oacute;gica o digital y la moduladora es anal&oacute;gica para adaptarse a la l&iacute;nea de transmisi&oacute;n";
 answers[45] = 1;
 units[45] = ['102'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 4653. ";
 preguntaids[45] = 4653


//  Id pregunta: 282 Año de creación de pregunta: 2016
 questions[46]= "47)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[46]= new Array();
 choices[46][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[46][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[46][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[46][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[46] = 2;
 units[46] = ['11'];
 blocks[46] = ['A2'];
 comments[46] = "Id Pregunta: 282. Presupuestos generales";
 preguntaids[46] = 282


//  Id pregunta: 7670 Año de creación de pregunta: 2010
 questions[47]= "48)  &iquest;A qu&eacute; proceso principal de la metodolog&iacute;a M&eacute;trica versi&oacute;n 3 pertenece el proceso &laquo;Implantaci&oacute;n y aceptaci&oacute;n de sistemas (IAS)&raquo;?";
 choices[47]= new Array();
 choices[47][0] = "Desarrollo de sistemas de informaci&oacute;n.";
 choices[47][1] = "Planificaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[47][2] = "An&aacute;lisis de sistema de informaci&oacute;n.";
 choices[47][3] = "Mantenimiento de sistemas de informaci&oacute;n.";
 answers[47] = 0;
 units[47] = ['91'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 7670. Map 2007";
 preguntaids[47] = 7670


//  Id pregunta: 2823 Año de creación de pregunta: 2002
 questions[48]= "49)  En inteligencia artificial un marco es:";
 choices[48]= new Array();
 choices[48][0] = "La representaci&oacute;n del conocimiento basada en teor&iacute;a de grafos";
 choices[48][1] = "Un elemento de representaci&oacute;n que contiene, entre otros elementos, ranuras de informaci&oacute;n y punteros";
 choices[48][2] = "El mecanismo de razonamiento m&aacute;s utilizado a la hora de equiparar elementos de conocimiento";
 choices[48][3] = "El objeto formado por el encapsulamiento de reglas deductivas y hechos";
 answers[48] = 1;
 units[48] = ['67'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 2823. ";
 preguntaids[48] = 2823


//  Id pregunta: 131 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[49]= new Array();
 choices[49][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[49][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[49][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[49][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[49] = 2;
 units[49] = ['5'];
 blocks[49] = ['A1'];
 comments[49] = "Id Pregunta: 131. Uni&oacute;n Europea";
 preguntaids[49] = 131


//  Id pregunta: 10057 Año de creación de pregunta: 2015
 questions[50]= "51)  Se&ntilde;ale c&oacute;mo se clasifican los niveles en las organizaciones seg&uacute;n se establece en el Modelo de Madurez de la Ingenier&iacute;a del Software ISO/IEC 15504-SPICE para la evaluaci&oacute;n y mejora de las organizaciones, en la representaci&oacute;n continua del modelo que mide la capacidad:";
 choices[50]= new Array();
 choices[50][0] = "En 6 niveles, desde el cero al cinco.";
 choices[50][1] = "En 5 niveles, desde el uno al cinco.";
 choices[50][2] = "En 6 niveles, desde el uno al seis.";
 choices[50][3] = "En 5 niveles, desde el cero al cuatro.";
 answers[50] = 0;
 units[50] = ['93'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 10057. Examen TIC A2 2014";
 preguntaids[50] = 10057


//  Id pregunta: 9037 Año de creación de pregunta: 2014
 questions[51]= "52)  &iquest;Cu&aacute;l es el plazo necesario entre la invitaci&oacute;n a mejorar ofertas a los licitadores y la subasta electr&oacute;nica?";
 choices[51]= new Array();
 choices[51][0] = "No antes de 15 d&iacute;as h&aacute;biles desde la invitaci&oacute;n";
 choices[51][1] = "No antes de 15 d&iacute;as naturales desde la invitaci&oacute;n";
 choices[51][2] = "M&iacute;nimo 2 d&iacute;as h&aacute;biles entre invitaci&oacute;n y subasta";
 choices[51][3] = "M&iacute;nimo 2 d&iacute;as naturales entre invitaci&oacute;n y subasta";
 answers[51] = 3;
 units[51] = ['10'];
 blocks[51] = ['A2'];
 comments[51] = "Id Pregunta: 9037. RD Legislativo 3/2011, Art. 148.7. Entre la fecha de env&iacute;o de las invitaciones y el comienzo de la subasta electr&oacute;nica habr&aacute;n de transcurrir, al menos, dos d&iacute;as h&aacute;biles.";
 preguntaids[51] = 9037


//  Id pregunta: 141 Año de creación de pregunta: 2016
 questions[52]= "53)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[52]= new Array();
 choices[52][0] = "Cincuenta y cuatro.";
 choices[52][1] = "Cincuenta.";
 choices[52][2] = "Cincuenta y cinco.";
 choices[52][3] = "Cincuenta y dos.";
 answers[52] = 0;
 units[52] = ['5'];
 blocks[52] = ['A1'];
 comments[52] = "Id Pregunta: 141. Uni&oacute;n Europea";
 preguntaids[52] = 141


//  Id pregunta: 1409 Año de creación de pregunta: 2016
 questions[53]= "54)  La medida Mean Opinion Score (MOS) se utiliza en:";
 choices[53]= new Array();
 choices[53][0] = "La ponderaci&oacute;n de alternativas en el m&eacute;todo Delphi.";
 choices[53][1] = "La calidad de la voz sobre el protocolo VoIP.";
 choices[53][2] = "La evaluaci&oacute;n de riesgos del m&eacute;todo Magerit v2.";
 choices[53][3] = "La explotaci&oacute;n de almacenes de datos en CRM (Customer Relationship Management).";
 answers[53] = 1;
 units[53] = ['110'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 1409. ";
 preguntaids[53] = 1409


//  Id pregunta: 6283 Año de creación de pregunta: 2007
 questions[54]= "55)  Se&ntilde;ale cu&aacute;l de los siguientes elementos es una pr&aacute;ctica utilizada en m&eacute;trica 3";
 choices[54]= new Array();
 choices[54][0] = "Diagrama de Clases";
 choices[54][1] = "Diagrama de Componentes";
 choices[54][2] = "Revisi&oacute;n T&eacute;cnica";
 choices[54][3] = "Normalizaci&oacute;n";
 answers[54] = 2;
 units[54] = ['91'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 6283. ";
 preguntaids[54] = 6283


//  Id pregunta: 3637 Año de creación de pregunta: 2002
 questions[55]= "56)  &iquest; En qu&eacute; consiste la teor&iacute;a de la Calidad/Coste  aplicada a la implantaci&oacute;n de la calidad?:";
 choices[55]= new Array();
 choices[55][0] = "El coste de producci&oacute;n aumenta libremente con el aumento de la calidad";
 choices[55][1] = "El coste de producci&oacute;n aumenta exponencialmente con el aumento de la calidad";
 choices[55][2] = "El coste de producci&oacute;n aumenta linealmente con el aumento de la calidad";
 choices[55][3] = "El coste de producci&oacute;n aumenta diferencialmente con el aumento de la calidad";
 answers[55] = 1;
 units[55] = ['93'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 3637. ";
 preguntaids[55] = 3637


//  Id pregunta: 376 Año de creación de pregunta: 2016
 questions[56]= "57)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[56]= new Array();
 choices[56][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[56][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[56][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[56][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[56] = 0;
 units[56] = ['14'];
 blocks[56] = ['A3'];
 comments[56] = "Id Pregunta: 376. Pol&iacute;ticas de igualdad";
 preguntaids[56] = 376


//  Id pregunta: 4259 Año de creación de pregunta: 2006
 questions[57]= "58)  PDF se diferencia de Postscript en que";
 choices[57]= new Array();
 choices[57][0] = "PDF no es un lenguaje , es un formato de archivo";
 choices[57][1] = "No se diferencian; ambos son lenguajes y formatos de archivo";
 choices[57][2] = "Postscript es independiente de la plataforma";
 choices[57][3] = "Postscript permite modificaciones parciales (editabilidad)";
 answers[57] = 0;
 units[57] = ['80'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 4259. ";
 preguntaids[57] = 4259


//  Id pregunta: 5354 Año de creación de pregunta: 2006
 questions[58]= "59)  Un test de penetraci&oacute;n proporciona todo lo siguiente salvo";
 choices[58]= new Array();
 choices[58][0] = "identificaci&oacute;n de fallos de seguridad";
 choices[58][1] = "demostraci&oacute;n de los efectos de los fallos de seguridad";
 choices[58][2] = "un m&eacute;todo de correcci&oacute;n de los fallos";
 choices[58][3] = "verificaci&oacute;n de los niveles actuales de resistencia a la infiltraci&oacute;n";
 answers[58] = 1;
 units[58] = ['120'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 5354. ";
 preguntaids[58] = 5354


//  Id pregunta: 975 Año de creación de pregunta: 2016
 questions[59]= "60)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[59]= new Array();
 choices[59][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[59][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[59][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[59][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[59] = 0;
 units[59] = ['4', '7', '8', '9'];
 blocks[59] = ['A1', 'A2'];
 comments[59] = "Id Pregunta: 975. Ley 40/2015";
 preguntaids[59] = 975


//  Id pregunta: 8135 Año de creación de pregunta: 2011
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes es un tipo de algoritmo de control de la congesti&oacute;n en redes conmutadas?";
 choices[60]= new Array();
 choices[60][0] = "Estado del enlace.";
 choices[60][1] = "Vector distancia.";
 choices[60][2] = "Inundaci&oacute;n de paquetes.";
 choices[60][3] = "Cubeta con goteo.";
 answers[60] = 3;
 units[60] = ['99'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 8135. Examen TIC A2 2010 interna";
 preguntaids[60] = 8135


//  Id pregunta: 6948 Año de creación de pregunta: 2010
 questions[61]= "62)  El Real Decreto 1671/2009 tiene como &aacute;mbito";
 choices[61]= new Array();
 choices[61][0] = "La Administraci&oacute;n General del Estado";
 choices[61][1] = "La Administraci&oacute;n General del Estado, as&iacute; como los organismos vinculados o dependientes de &eacute;sta";
 choices[61][2] = "La Administraci&oacute;n General del Estado, los organismos vinculados o dependientes de &eacute;sta, las Comunidades Aut&oacute;nomas y los Entes Locales";
 choices[61][3] = "Todas las Administraciones P&uacute;blicas";
 answers[61] = 1;
 units[61] = ['19'];
 blocks[61] = ['A4'];
 comments[61] = "Id Pregunta: 6948. Articulo 1";
 preguntaids[61] = 6948


//  Id pregunta: 10836 Año de creación de pregunta: 2015
 questions[62]= "63)  Indique cu&aacute;l no es un habilitador de CoBIT";
 choices[62]= new Array();
 choices[62][0] = "Procesos";
 choices[62][1] = "Gobierno";
 choices[62][2] = "Informaci&oacute;n";
 choices[62][3] = "Estructuras organizacionales";
 answers[62] = 1;
 units[62] = ['101'];
 blocks[62] = ['B3'];
 comments[62] = "Id Pregunta: 10836. ";
 preguntaids[62] = 10836


//  Id pregunta: 225 Año de creación de pregunta: 2016
 questions[63]= "64)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[63]= new Array();
 choices[63][0] = "tienen capacidad de obrar limitada";
 choices[63][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[63][2] = "no tienen capacidad de obrar";
 choices[63][3] = "ninguna es correcta";
 answers[63] = 2;
 units[63] = ['7'];
 blocks[63] = ['A2'];
 comments[63] = "Id Pregunta: 225. Ley 39/2015";
 preguntaids[63] = 225


//  Id pregunta: 6625 Año de creación de pregunta: 2009
 questions[64]= "65)  De acuerdo al RD 1720/2007, cuando los ficheros contengan un conjunto de datos de car&aacute;cter personal suficientes que permitan obtener una evaluaci&oacute;n de la personalidad del individuo, deber&aacute;:";
 choices[64]= new Array();
 choices[64][0] = "Adoptarse &uacute;nicamente las medidas de seguridad calificadas de nivel b&aacute;sico";
 choices[64][1] = "Adoptarse las medidas de seguridad calificadas de nivel medio";
 choices[64][2] = "Adoptarse las medidas de seguridad calificadas de nivel alto";
 choices[64][3] = "No adoptarse ninguna medidas de seguridad prevista";
 answers[64] = 1;
 units[64] = ['35'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 6625. ";
 preguntaids[64] = 6625


//  Id pregunta: 9084 Año de creación de pregunta: 2014
 questions[65]= "66)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica V3 Estudio de Viabilidad del Sistema, indicar en qu&eacute; actividad se realiza la tarea &ldquo;Estudio de la Inversi&oacute;n&rdquo;.";
 choices[65]= new Array();
 choices[65][0] = "Estudio de Alternativas de Soluci&oacute;n.";
 choices[65][1] = "Definici&oacute;n de Requisitos del Sistema.";
 choices[65][2] = "Estudio de la Situaci&oacute;n Actual.";
 choices[65][3] = "Valoraci&oacute;n de las Alternativas.";
 answers[65] = 3;
 units[65] = ['91'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 9084. Examen TIC-A1 2013";
 preguntaids[65] = 9084


//  Id pregunta: 274 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[66]= new Array();
 choices[66][0] = "a) Los cuatro ejercicios siguientes.";
 choices[66][1] = "b) El ejercicio siguiente.";
 choices[66][2] = "c) Los dos ejercicios siguientes.";
 choices[66][3] = "d) Los tres ejercicios siguientes.";
 answers[66] = 3;
 units[66] = ['11'];
 blocks[66] = ['A2'];
 comments[66] = "Id Pregunta: 274. Presupuestos generales";
 preguntaids[66] = 274


//  Id pregunta: 165 Año de creación de pregunta: 2016
 questions[67]= "68)  El procedimiento de dictamen simple o dictamen consultivo significa que:";
 choices[67]= new Array();
 choices[67][0] = "El Consejo debe obtener la aprobaci&oacute;n del Parlamento Europeo para que se tomen determinadas decisiones de primera importancia.";
 choices[67][1] = "Por el que se da poder al Parlamento Europeo para una mayor posibilidad de influir sobre el proceso legislativo mediante una &quot;doble lectura&quot; de las propuestas legislativas de la Comisi&oacute;n.";
 choices[67][2] = "Por el que se da poder al Parlamento Europeo para aprobar disposiciones conjuntamente con el Consejo.";
 choices[67][3] = "El Consejo consulte al Parlamento Europeo y tome sus puntos de vista en consideraci&oacute;n.";
 answers[67] = 3;
 units[67] = ['5'];
 blocks[67] = ['A1'];
 comments[67] = "Id Pregunta: 165. Uni&oacute;n Europea";
 preguntaids[67] = 165


//  Id pregunta: 6316 Año de creación de pregunta: 2003
 questions[68]= "69)  Acorde al modelo de calidad de McCall NO es un factor de calidad con caracter&iacute;sticas de explotaci&oacute;n:";
 choices[68]= new Array();
 choices[68][0] = "Fiabilidad";
 choices[68][1] = "Extensibilidad";
 choices[68][2] = "Correcci&oacute;n";
 choices[68][3] = "Integridad";
 answers[68] = 1;
 units[68] = ['93'];
 blocks[68] = ['B3'];
 comments[68] = "Id Pregunta: 6316. ";
 preguntaids[68] = 6316


//  Id pregunta: 4 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[69]= new Array();
 choices[69][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[69][1] = "Solamente el Congreso.";
 choices[69][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[69][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[69] = 0;
 units[69] = ['1'];
 blocks[69] = ['A1'];
 comments[69] = "Id Pregunta: 4. Constituci&oacute;n de 1978";
 preguntaids[69] = 4


//  Id pregunta: 3908 Año de creación de pregunta: 2002
 questions[70]= "71)  La relaci&oacute;n de herencia en la orientaci&oacute;n a objetos:";
 choices[70]= new Array();
 choices[70][0] = "Permite que una clase cliente que utilice la interfaz de otra pueda tratar igualmente con objetos pertenecientes a superclases de las que aquella hereda.";
 choices[70][1] = "Facilita la reutilizaci&oacute;n de especificaciones preexistentes para la creaci&oacute;n de otras nuevas.";
 choices[70][2] = "Facilita el principio de acoplamiento d&eacute;bil entre clases.";
 choices[70][3] = "Aumenta la modularidad y abstracci&oacute;n del dise&ntilde;o, pero disminuye la productividad del equipo de desarrollo.";
 answers[70] = 1;
 units[70] = ['85', '89'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 3908. ";
 preguntaids[70] = 3908


//  Id pregunta: 582 Año de creación de pregunta: 2016
 questions[71]= "72)  En cuanto al sistema EGEO, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[71]= new Array();
 choices[71][0] = "Permite la representaci&oacute;n de mapas tem&aacute;ticos, georreferenciados, buscador de recursos georreferenciados con filtros definidos por el usuario, y de magnitud.";
 choices[71][1] = "Utiliza &uacute;nicamente sobre mapas oficiales del Instituto Geogr&aacute;fico Nacional (IGN).";
 choices[71][2] = "Es un servicio com&uacute;n dirigido a &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[71][3] = "Para su manejo, es necesario contar con conocimientos de georreferenciaci&oacute;n.";
 answers[71] = 0;
 units[71] = ['43'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 582. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[71] = 582


//  Id pregunta: 3185 Año de creación de pregunta: 2003
 questions[72]= "73)  Al bloque de sentencias PL/SQL almacenado en el diccionario de datos, para ser invocado desde las aplicaciones, se denomina:";
 choices[72]= new Array();
 choices[72][0] = "Procedimiento";
 choices[72][1] = "Producto.";
 choices[72][2] = "Secuencia.";
 choices[72][3] = "Segmento.";
 answers[72] = 0;
 units[72] = ['61'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 3185. Junta Andaluc&iacute;a";
 preguntaids[72] = 3185


//  Id pregunta: 96 Año de creación de pregunta: 2016
 questions[73]= "74)  El T&iacute;tulo Segundo de la Constituci&oacute;n Espa&ntilde;ola tiene:";
 choices[73]= new Array();
 choices[73][0] = "Diez art&iacute;culos.";
 choices[73][1] = "Nueve art&iacute;culos.";
 choices[73][2] = "Once art&iacute;culos.";
 choices[73][3] = "Ocho art&iacute;culos.";
 answers[73] = 0;
 units[73] = ['1'];
 blocks[73] = ['A1'];
 comments[73] = "Id Pregunta: 96. Constituci&oacute;n de 1978";
 preguntaids[73] = 96


//  Id pregunta: 4116 Año de creación de pregunta: 2003
 questions[74]= "75)  Formato m&aacute;s utilizado en la actualidad en los Sistemas de Gesti&oacute;n de Contenidos:";
 choices[74]= new Array();
 choices[74][0] = "HTTP.";
 choices[74][1] = "CCS.";
 choices[74][2] = "Excel.";
 choices[74][3] = "XML.";
 answers[74] = 3;
 units[74] = ['99'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 4116. ";
 preguntaids[74] = 4116


