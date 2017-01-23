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
//  Id pregunta: 8825 Año de creación de pregunta: 2013
 questions[0]= "1)  &iquest;Qu&eacute; m&eacute;todo de decisi&oacute;n de alternativas no soporta la herramienta inform&aacute;tica SSD-AAPP?";
 choices[0]= new Array();
 choices[0][0] = "ELECTRE";
 choices[0][1] = "PROMETHEE";
 choices[0][2] = "TOPSIS";
 choices[0][3] = "M&eacute;todo Lexicogr&aacute;fico";
 answers[0] = 0;
 units[0] = ['38'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 8825. ";
 preguntaids[0] = 8825


//  Id pregunta: 865 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n ITILv3 , el objetivo principal del Dise&ntilde;o del Servicio es:";
 choices[1]= new Array();
 choices[1][0] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno de producci&oacute;n.";
 choices[1][1] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno seguro.";
 choices[1][2] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno seguro.";
 choices[1][3] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno de producci&oacute;n.";
 answers[1] = 3;
 units[1] = ['101'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 865. Junta de Extremadura A1 2015";
 preguntaids[1] = 865


//  Id pregunta: 900 Año de creación de pregunta: 2016
 questions[2]= "3)  La especificaci&oacute;n del Institute of Electrical and Electronics Engineers (IEEE) para acceso inat&aacute;mbrico de banda ancha m&oacute;vil o MBWA, es la:";
 choices[2]= new Array();
 choices[2][0] = "IEEE 802.19";
 choices[2][1] = "IEEE 802.20";
 choices[2][2] = "IEEE 802.21";
 choices[2][3] = "IEEE 802.22";
 answers[2] = 1;
 units[2] = ['112'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 900. AGE A2 2015";
 preguntaids[2] = 900


//  Id pregunta: 2939 Año de creación de pregunta: 2002
 questions[3]= "4)  La ley emp&iacute;rica de Grosh establece:";
 choices[3]= new Array();
 choices[3][0] = "La potencia de c&aacute;lculo de los ordenadores es proporcional al cuadrado del tiempo que transcurre";
 choices[3][1] = "La potencia de c&aacute;lculo de lo ordenadores va en proporci&oacute;n directa con su coste";
 choices[3][2] = "El coste de un ordenador es proporcional a la raiz cuadrada de su potencia de c&aacute;lculo";
 choices[3][3] = "El coste de un ordenador es inversamente proporcional a la disminuci&oacute;n de su potencia";
 answers[3] = 2;
 units[3] = ['49'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 2939. ";
 preguntaids[3] = 2939


//  Id pregunta: 419 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[4]= new Array();
 choices[4][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[4][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[4][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[4][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[4] = 0;
 units[4] = ['15'];
 blocks[4] = ['A3'];
 comments[4] = "Id Pregunta: 419. Mercado laboral";
 preguntaids[4] = 419


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[5]= "6)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[5]= new Array();
 choices[5][0] = "ISO/IEC 25000";
 choices[5][1] = "ISO/IEC 27000";
 choices[5][2] = "ISO 9000";
 choices[5][3] = "ISO 9001";
 answers[5] = 0;
 units[5] = ['93'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 848. AGE A1 2015";
 preguntaids[5] = 848


//  Id pregunta: 4096 Año de creación de pregunta: 2003
 questions[6]= "7)  Relativo a las clases en Orientaci&oacute;n a Objetos, cuando dos subtipos se unen para crear una clase superior, se produce:";
 choices[6]= new Array();
 choices[6][0] = "Asociaci&oacute;n";
 choices[6][1] = "Agrupaci&oacute;n";
 choices[6][2] = "Agregaci&oacute;n";
 choices[6][3] = "Generalizaci&oacute;n";
 answers[6] = 3;
 units[6] = ['85'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 4096. ";
 preguntaids[6] = 4096


//  Id pregunta: 6598 Año de creación de pregunta: 2009
 questions[7]= "8)  Indique la afirmaci&oacute;n correcta. Seg&uacute;n M&eacute;trica v 3, en las Relaciones 1:N se propaga el identificador de la entidad de cardinalidad m&aacute;xima 1 a la que es N, teniendo en cuenta que:";
 choices[7]= new Array();
 choices[7][0] = "Si la relaci&oacute;n es de asociaci&oacute;n, la clave propagada es clave ajena en la tabla a la que se ha propagado.";
 choices[7][1] = "Si la relaci&oacute;n es de asociaci&oacute;n, la clave propagada es la clave primaria en la tabla a la que se ha propagado.";
 choices[7][2] = "Si la relaci&oacute;n es de dependencia, la clave propagada es la clave ajena.";
 choices[7][3] = "Si la relaci&oacute;n es de dependencia la clave propagada es la clave primaria.";
 answers[7] = 0;
 units[7] = ['91'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 6598. MAP 2008 A2";
 preguntaids[7] = 6598


//  Id pregunta: 41 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[8]= new Array();
 choices[8][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[8][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[8][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[8][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[8] = 0;
 units[8] = ['1'];
 blocks[8] = ['A1'];
 comments[8] = "Id Pregunta: 41. Constituci&oacute;n de 1978";
 preguntaids[8] = 41


//  Id pregunta: 410 Año de creación de pregunta: 2016
 questions[9]= "10)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[9]= new Array();
 choices[9][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[9][1] = "Protecci&oacute;n de su salud.";
 choices[9][2] = "Ninguna es correcta.";
 choices[9][3] = "A y B son correctas.";
 answers[9] = 1;
 units[9] = ['14'];
 blocks[9] = ['A3'];
 comments[9] = "Id Pregunta: 410. Pol&iacute;ticas de igualdad";
 preguntaids[9] = 410


//  Id pregunta: 10393 Año de creación de pregunta: 2015
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Estrategia Europea 2020 en materia de sostenibilidad energ&eacute;tica?";
 choices[10]= new Array();
 choices[10][0] = "20% de las energ&iacute;as deben proceder de una fuente renovable";
 choices[10][1] = "20% de aumento de la eficiencia energ&eacute;tica";
 choices[10][2] = "20% de los coches deben ser el&eacute;ctricos";
 choices[10][3] = "Emisiones de gases invernadero un 20% menores a los niveles de 1990";
 answers[10] = 2;
 units[10] = ['19'];
 blocks[10] = ['A4'];
 comments[10] = "Id Pregunta: 10393. ";
 preguntaids[10] = 10393


//  Id pregunta: 8984 Año de creación de pregunta: 2013
 questions[11]= "12)  La Comisi&oacute;n de Estrategia TIC:";
 choices[11]= new Array();
 choices[11][0] = "Es el &oacute;rgano existente en los departamentos ministeriales, en el &aacute;mbito de la Administraci&oacute;n General del Estado, competente en materia de administraci&oacute;n electr&oacute;nica.";
 choices[11][1] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea que canaliza la colaboraci&oacute;n entre la Administraci&oacute;n General del Estado y el resto de pa&iacute;ses de la Uni&oacute;n Europea en materia de administraci&oacute;n electr&oacute;nica.";
 choices[11][2] = "Es el &oacute;rgano colegiado encargado de la definici&oacute;n y supervisi&oacute;n de la aplicaci&oacute;n de la Estrategia TIC de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos.";
 choices[11][3] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea encargado de unificar los criterios en materia de tratamiento y protecci&oacute;n de datos de car&aacute;cter personal en el &aacute;mbito de la Uni&oacute;n Europea";
 answers[11] = 2;
 units[11] = ['26'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 8984. Examen TIC A1 2011";
 preguntaids[11] = 8984


//  Id pregunta: 4574 Año de creación de pregunta: 2002
 questions[12]= "13)  &iquest;Cu&aacute;l es la velocidad del canal D en un acceso b&aacute;sico RDSI en Europa?:";
 choices[12]= new Array();
 choices[12][0] = "8 Kbps";
 choices[12][1] = "16 Kbps";
 choices[12][2] = "32 Kbps";
 choices[12][3] = "64 Kbps";
 answers[12] = 1;
 units[12] = ['114'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 4574. ";
 preguntaids[12] = 4574


//  Id pregunta: 4050 Año de creación de pregunta: 2003
 questions[13]= "14)  La tecnolog&iacute;a denominada OCR (Optical Character Recognizer), se emplea para:";
 choices[13]= new Array();
 choices[13][0] = "Extraer de un documento electr&oacute;nico un conjunto de palabras o caracteres (descriptores) que sirvan para la representaci&oacute;n del mismo en bases de datos documentales.";
 choices[13][1] = "Analizar tramas de bit, en transmisiones a trav&eacute;s de dispositivos f&iacute;sicos de fibra &oacute;ptica (10/100/1000baseFX).";
 choices[13][2] = "Analizar la autenticidad e integridad de documentos firmados electr&oacute;nicamente.";
 choices[13][3] = "Interpretar digitalmente un documento en papel y generar un archivo electr&oacute;nico de texto con las palabras reconocidas.";
 answers[13] = 3;
 units[13] = ['81'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 4050. Junta Andaluc&iacute;a";
 preguntaids[13] = 4050


//  Id pregunta: 6602 Año de creación de pregunta: 2009
 questions[14]= "15)  En el &aacute;mbito de la Uni&oacute;n Europea, &iquest;tiene validez jur&iacute;dica la firma electr&oacute;nica?";
 choices[14]= new Array();
 choices[14][0] = "Solamente si es firma reconocida";
 choices[14][1] = "Solamente si es firma cualificada";
 choices[14][2] = "Siempre ser&aacute; admisible como prueba en el procedimiento judicial";
 choices[14][3] = "Ninguna de las anteriores es correcta";
 answers[14] = 2;
 units[14] = ['77'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 6602. Directiva 1999/93/CE y Reglamento 910/2014, consideraci&oacute;n 61)";
 preguntaids[14] = 6602


//  Id pregunta: 10973 Año de creación de pregunta: 2015
 questions[15]= "16)  Seg&uacute;n la ley 19/2013 de transparencia:";
 choices[15]= new Array();
 choices[15][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado por un per&iacute;odo renovable de cinco a&ntilde;os mediante Real Decreto.";
 choices[15][1] = "El Consejo de Transparencia y Buen Gobierno deber&aacute; elevar anualmente al Congreso de los Diputados una memoria sobre el desarrollo de sus actividades.";
 choices[15][2] = "La condici&oacute;n de miembro de la Comisi&oacute;n del Consejo de Transparencia y Buen Gobierno no exigir&aacute; dedicaci&oacute;n exclusiva ni dar&aacute; derecho a remuneraci&oacute;n.";
 choices[15][3] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n leve a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 answers[15] = 2;
 units[15] = ['22'];
 blocks[15] = ['A4'];
 comments[15] = "Id Pregunta: 10973. ";
 preguntaids[15] = 10973


//  Id pregunta: 5840 Año de creación de pregunta: 2007
 questions[16]= "17)  En el directorio activo de Microsoft la definici&oacute;n de todas las definiciones de clases de todos los objetos yatributos del directorio activo se encuentra en el:";
 choices[16]= new Array();
 choices[16][0] = "Schema Naming Context";
 choices[16][1] = "Active Directory Schema MMC";
 choices[16][2] = "Configuration Naming Context";
 choices[16][3] = "Domain Naming Context";
 answers[16] = 0;
 units[16] = ['63'];
 blocks[16] = ['B2'];
 comments[16] = "Id Pregunta: 5840. Examen 2006 JCYL";
 preguntaids[16] = 5840


//  Id pregunta: 4254 Año de creación de pregunta: 2006
 questions[17]= "18)  &iquest;Qu&eacute; herramientas de reingenier&iacute;a se engloban en un paquete CASE?";
 choices[17]= new Array();
 choices[17][0] = "Via Center.";
 choices[17][1] = "CA-Metrics.";
 choices[17][2] = "Cadre.";
 choices[17][3] = "ADW.";
 answers[17] = 0;
 units[17] = ['96', '97'];
 blocks[17] = ['B3'];
 comments[17] = "Id Pregunta: 4254. ";
 preguntaids[17] = 4254


//  Id pregunta: 7442 Año de creación de pregunta: 2010
 questions[18]= "19)  Se&ntilde;ala cu&aacute;l de las siguientes no es una tecnolog&iacute;a empleada en el pago a trav&eacute;s de Internet:";
 choices[18]= new Array();
 choices[18][0] = "3D Secure";
 choices[18][1] = "UCAF";
 choices[18][2] = "Urbinet";
 choices[18][3] = "SET";
 answers[18] = 2;
 units[18] = ['75'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 7442. ";
 preguntaids[18] = 7442


//  Id pregunta: 4676 Año de creación de pregunta: 2002
 questions[19]= "20)  Dentro de los sistemas m&oacute;viles celulares el t&eacute;rmino 'handover' hace referencia a los problemas relativos a:";
 choices[19]= new Array();
 choices[19][0] = "Traspaso del m&oacute;vil de una c&eacute;lula a otra";
 choices[19][1] = "La incompatibilidad entre sistemas";
 choices[19][2] = "Los sistemas de directorio X.500";
 choices[19][3] = "Los problemas debidos a la saturaci&oacute;n del espectro radioel&eacute;ctrico";
 answers[19] = 0;
 units[19] = ['117'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 4676. ";
 preguntaids[19] = 4676


//  Id pregunta: 10406 Año de creación de pregunta: 2015
 questions[20]= "21)  &iquest;C&oacute;mo se denomina el plan espa&ntilde;ol que hace referencia al objetivo de mejorar la Administraci&oacute;n electr&oacute;nica seg&uacute;n la Agenda Digital Espa&ntilde;ola?";
 choices[20]= new Array();
 choices[20][0] = "Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la AGE";
 choices[20][1] = "Plan de Servicios P&uacute;blicos Digitales";
 choices[20][2] = "Los dos anteriores son verdaderos";
 choices[20][3] = "Todas las respuestas son falsas";
 answers[20] = 2;
 units[20] = ['19'];
 blocks[20] = ['A4'];
 comments[20] = "Id Pregunta: 10406. ";
 preguntaids[20] = 10406


//  Id pregunta: 818 Año de creación de pregunta: 2016
 questions[21]= "22)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[21]= new Array();
 choices[21][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[21][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[21][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[21][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[21] = 1;
 units[21] = ['89'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 818. Junta de Extremadura A1 2015";
 preguntaids[21] = 818


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[22]= new Array();
 choices[22][0] = "Tres meses.";
 choices[22][1] = "Nueve meses.";
 choices[22][2] = "Cuatro meses.";
 choices[22][3] = "Seis meses.";
 answers[22] = 0;
 units[22] = ['11'];
 blocks[22] = ['A2'];
 comments[22] = "Id Pregunta: 285. Presupuestos generales";
 preguntaids[22] = 285


//  Id pregunta: 9179 Año de creación de pregunta: 2014
 questions[23]= "24)  De las siguientes opciones se&ntilde;alar cu&aacute;l forma parte del contenido m&iacute;nimo que debe contener la norma que crea una sede electr&oacute;nica, de acuerdo con el Real Decreto 1671/2009, de 6 de noviembre:";
 choices[23]= new Array();
 choices[23][0] = "Relaci&oacute;n de los servicios disponibles en la sede.";
 choices[23][1] = "Medios disponibles para la formulaci&oacute;n de sugerencias y quejas.";
 choices[23][2] = "Mapa de navegaci&oacute;n de la sede electr&oacute;nica.";
 choices[23][3] = "Carta de servicios electr&oacute;nicos.";
 answers[23] = 1;
 units[23] = ['7'];
 blocks[23] = ['A2'];
 comments[23] = "Id Pregunta: 9179. Examen TIC A2 2013";
 preguntaids[23] = 9179


//  Id pregunta: 8985 Año de creación de pregunta: 2013
 questions[24]= "25)  En el contexto de la firma electr&oacute;nica y su regulaci&oacute;n en Espa&ntilde;a se&ntilde;ale la afirmaci&oacute;n FALSA.";
 choices[24]= new Array();
 choices[24][0] = "Los funcionarios al servicio de las administraciones p&uacute;blicas espa&ntilde;olas pueden firmar en el ejercicio de su cargo utilizando su DNI electr&oacute;nico.";
 choices[24][1] = "Los c&oacute;digos de verificaci&oacute;n segura (CSV) junto con los sellos de &oacute;rgano sirven para dotar de firma electr&oacute;nica reconocida a la actuaci&oacute;n administrativa automatizada.";
 choices[24][2] = "Un dispositivo seguro de creaci&oacute;n de firma debe garantizar que los datos usados para generar la firma pueden producirse s&oacute;lo una vez.";
 choices[24][3] = "Un certificado electr&oacute;nico reconocido ha de incluir la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que lo expide.";
 answers[24] = 1;
 units[24] = ['19'];
 blocks[24] = ['A4'];
 comments[24] = "Id Pregunta: 8985. DUPLICADA";
 preguntaids[24] = 8985


//  Id pregunta: 3997 Año de creación de pregunta: 2002
 questions[25]= "26)  En sistemas de recuperaci&oacute;n de la informaci&oacute;n, al cociente entre el n&uacute;mero de referencias correctas obtenidas y el n&uacute;mero total de documentos recuperados, se denomina:";
 choices[25]= new Array();
 choices[25][0] = "&Iacute;ndice de retorno";
 choices[25][1] = "&Iacute;ndice de exactitud";
 choices[25][2] = "&Iacute;ndice de precisi&oacute;n";
 choices[25][3] = "&Iacute;ndice de localizaci&oacute;n";
 answers[25] = 2;
 units[25] = ['100'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 3997. ";
 preguntaids[25] = 3997


//  Id pregunta: 530 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[26]= new Array();
 choices[26][0] = "ISO/IEC 31000";
 choices[26][1] = "ISO/IEC 14000";
 choices[26][2] = "ISO/IEC 38500";
 choices[26][3] = "ISO/IEC 18000";
 answers[26] = 2;
 units[26] = ['26'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 530. Gobernanza TIC";
 preguntaids[26] = 530


//  Id pregunta: 6100 Año de creación de pregunta: 2003
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes afirmaciones define el tipo de procesamiento conocido como OLAP?";
 choices[27]= new Array();
 choices[27][0] = "Procesamiento transaccional en tiempo real que consiste en realizar transacciones, es decir actualizaciones y consultas a la base de datos con un objetivo operacional.";
 choices[27][1] = "Procesamiento anal&iacute;tico en tiempo real que engloba un conjunto de operaciones, exclusivamente de consulta, en las que se requiere agregar y cruzar gran cantidad de informaci&oacute;n.";
 choices[27][2] = "Procesamiento anal&iacute;tico en tiempo real que engloba un conjunto de operaciones de consulta y actualizaci&oacute;n, en las que se requiere agregar y cruzar gran cantidad de informaci&oacute;n.";
 choices[27][3] = "Procesamiento transaccional en tiempo real que engloba un conjunto de operaciones, de consulta y actualizaci&oacute;n, con el objetivo de realizar informes y res&uacute;menes para el apoyo en la toma de decisiones.";
 answers[27] = 1;
 units[27] = ['72'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 6100. Examen TIC A1 MAP 2007";
 preguntaids[27] = 6100


//  Id pregunta: 493 Año de creación de pregunta: 2016
 questions[28]= "29)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[28]= new Array();
 choices[28][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[28][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[28][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[28][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[28] = 2;
 units[28] = ['22'];
 blocks[28] = ['A4'];
 comments[28] = "Id Pregunta: 493. AGE A1 2015";
 preguntaids[28] = 493


//  Id pregunta: 9865 Año de creación de pregunta: 2015
 questions[29]= "30)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;ndo finaliza el per&iacute;odo por el que se otorgan los derechos de uso privativo del dominio p&uacute;blico radioel&eacute;ctrico sin limitaci&oacute;n de n&uacute;mero?";
 choices[29]= new Array();
 choices[29][0] = "El 31 de diciembre del a&ntilde;o natural en que cumplan su quinto a&ntilde;o de vigencia.";
 choices[29][1] = "A los 20 a&ntilde;os desde el otorgamiento.";
 choices[29][2] = "El 31 de noviembre del a&ntilde;o natural en que cumplan su quinto a&ntilde;o de vigencia.";
 choices[29][3] = "A los cinco a&ntilde;os desde el otorgamiento.";
 answers[29] = 0;
 units[29] = ['121'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 9865. ";
 preguntaids[29] = 9865


//  Id pregunta: 1044 Año de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ale la respuesta correcta:";
 choices[30]= new Array();
 choices[30][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[30][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[30][2] = "A y B son correctas.";
 choices[30][3] = "A y B son falsas.";
 answers[30] = 2;
 units[30] = ['4', '7', '8', '9'];
 blocks[30] = ['A1', 'A2'];
 comments[30] = "Id Pregunta: 1044. Ley 40/2015";
 preguntaids[30] = 1044


//  Id pregunta: 3889 Año de creación de pregunta: 2002
 questions[31]= "32)  Dentro de los niveles b&aacute;sicos de compresi&oacute;n y fuentes del conocimiento, el nivel fonol&oacute;gico es aqu&eacute;l que:";
 choices[31]= new Array();
 choices[31][0] = "Analiza las caracter&iacute;sticas de la se&ntilde;al vocal";
 choices[31][1] = "Determina los objetos sonoros elementales";
 choices[31][2] = "Determina el n&uacute;mero preciso de sonidos con valor distinto";
 choices[31][3] = "Determina la precisa pronunciaci&oacute;n de las letras, s&iacute;labas y palabras";
 answers[31] = 2;
 units[31] = ['81'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 3889. ";
 preguntaids[31] = 3889


//  Id pregunta: 10107 Año de creación de pregunta: 2015
 questions[32]= "33)  Uno de los problemas en cuanto a la calidad del servicio (QoS) de una red VoIP es la latencia, se&ntilde;ale su definici&oacute;n correcta:";
 choices[32]= new Array();
 choices[32][0] = "Variaci&oacute;n en el tiempo de llegada de los paquetes, causada por congesti&oacute;n de red, p&eacute;rdida de sincronizaci&oacute;n o por las diferentes rutas seguidas.";
 choices[32][1] = "Es una reflexi&oacute;n retardada de la se&ntilde;al ac&uacute;stica original.";
 choices[32][2] = "El tiempo que tarda un paquete en llegar desde la fuente al destino.";
 choices[32][3] = "P&eacute;rdida que se produce al usar protocolos no orientados a conexi&oacute;n que no reenv&iacute;an paquetes perdidos. Adem&aacute;s tambi&eacute;n se produce por descartes de paquetes que no llegan a tiempo al receptor.";
 answers[32] = 2;
 units[32] = ['110'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 10107. Examen TIC A2 2014";
 preguntaids[32] = 10107


//  Id pregunta: 1218 Año de creación de pregunta: 2016
 questions[33]= "34)  Indique la afirmaci&oacute;n correcta respecto a VPLS:";
 choices[33]= new Array();
 choices[33][0] = "S&oacute;lo permite establecer enlaces VPN punto a punto.";
 choices[33][1] = "Ofrece un servicio VPN de capa 4.";
 choices[33][2] = "Permite establecer Calidad de Servicio (QoS) utilizando el campo EXP.";
 choices[33][3] = "S&oacute;lo es &uacute;til en un contexto LAN.";
 answers[33] = 2;
 units[33] = ['107'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 1218. ";
 preguntaids[33] = 1218


//  Id pregunta: 5285 Año de creación de pregunta: 2006
 questions[34]= "35)  &iquest;En que se basa AJAX?";
 choices[34]= new Array();
 choices[34][0] = "En JavaScript";
 choices[34][1] = "En Java";
 choices[34][2] = "En JSP";
 choices[34][3] = "En JSF";
 answers[34] = 0;
 units[34] = ['64'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 5285. ";
 preguntaids[34] = 5285


//  Id pregunta: 481 Año de creación de pregunta: 2016
 questions[35]= "36)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[35]= new Array();
 choices[35][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[35][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[35][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[35][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[35] = 3;
 units[35] = ['19'];
 blocks[35] = ['A4'];
 comments[35] = "Id Pregunta: 481. Sociedad de la informaci&oacute;n";
 preguntaids[35] = 481


//  Id pregunta: 150 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;les son las funciones de la Conferencia para Asuntos Relacionados con las Comunidades Europeas?:";
 choices[36]= new Array();
 choices[36][0] = "Garantizar el cumplimiento en las Conferencias Sectoriales de los procedimientos y f&oacute;rmulas de participaci&oacute;n de las Comunidades Aut&oacute;nomas.";
 choices[36][1] = "El tratamiento y resoluci&oacute;n con arreglo al principio de cooperaci&oacute;n de aquellas cuestiones de alcance general o contenido institucional relacionadas con las Comunidades Europeas.";
 choices[36][2] = "Todas son correctas.";
 choices[36][3] = "Informaci&oacute;n a las Comunidades Aut&oacute;nomas y la discusi&oacute;n en com&uacute;n sobre el desarrollo del proceso de constituci&oacute;n europea.";
 answers[36] = 2;
 units[36] = ['5'];
 blocks[36] = ['A1'];
 comments[36] = "Id Pregunta: 150. Uni&oacute;n Europea";
 preguntaids[36] = 150


//  Id pregunta: 9743 Año de creación de pregunta: 2014
 questions[37]= "38)  El ancho de banda m&aacute;ximo alcanzado por la familia de est&aacute;ndares USB es:";
 choices[37]= new Array();
 choices[37][0] = "10 Gbit/s full-duplex por USB 3.0";
 choices[37][1] = "10 Gbit/s half-duplex por USB 3.1";
 choices[37][2] = "10 Gbit/s full-duplex por USB 3.2";
 choices[37][3] = "10 Gbit/s full-duplex por USB 3.1";
 answers[37] = 3;
 units[37] = ['49'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 9743. ";
 preguntaids[37] = 9743


//  Id pregunta: 10184 Año de creación de pregunta: 2015
 questions[38]= "39)  La Comisi&oacute;n Nacional de los Mercados y la Competencia (CNMC), en relaci&oacute;n con las telecomunicaciones:";
 choices[38]= new Array();
 choices[38][0] = "Autoriza operadores de telecomunicaciones.";
 choices[38][1] = "Autoriza distribuidores de equipamiento de redes y servicios de la sociedad de la informaci&oacute;n.";
 choices[38][2] = "Define los mercados de referencia relativos a redes y servicios electr&oacute;nicos.";
 choices[38][3] = "Define las actuaciones de los operadores, en relaci&oacute;n con los posibles conflictos de los anchos de banda en el espacio radioel&eacute;ctrico.";
 answers[38] = 2;
 units[38] = ['120'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 10184. Examen TIC A1 2014";
 preguntaids[38] = 10184


//  Id pregunta: 260 Año de creación de pregunta: 2016
 questions[39]= "40)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[39]= new Array();
 choices[39][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[39][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[39][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[39][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[39] = 2;
 units[39] = ['8'];
 blocks[39] = ['A2'];
 comments[39] = "Id Pregunta: 260. Ley 39/2015";
 preguntaids[39] = 260


//  Id pregunta: 4374 Año de creación de pregunta: 2004
 questions[40]= "41)  &iquest;A qu&eacute; se corresponden las siglas 802.11i sobre redes inal&aacute;mbricas?";
 choices[40]= new Array();
 choices[40][0] = "A especificaciones de nivel f&iacute;sico";
 choices[40][1] = "A especificaciones sobre calidad de servicio QoS";
 choices[40][2] = "A especificaciones de Seguridad";
 choices[40][3] = "A especificiaciones de roaming";
 answers[40] = 2;
 units[40] = ['108'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 4374. ";
 preguntaids[40] = 4374


//  Id pregunta: 6684 Año de creación de pregunta: 2009
 questions[41]= "42)  En el M&eacute;todo ALBRETCH de los puntos de funci&oacute;n, los puntos funci&oacute;n ajustados se obtienen a partir de los puntos funci&oacute;n no ajustados:";
 choices[41]= new Array();
 choices[41][0] = "Valorando la importancia en el proyecto de 14 caracter&iacute;sticas generales del sistema";
 choices[41][1] = "Multiplicando por un coeficiente que depende del lenguaje de programaci&oacute;n utilizado en el proyecto";
 choices[41][2] = "Teniendo en cuenta la valoraci&oacute;n de 5 factores de escala";
 choices[41][3] = "Teniendo en cuenta la valoraci&oacute;n de 17 factores de coste";
 answers[41] = 0;
 units[41] = ['94'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 6684. ";
 preguntaids[41] = 6684


//  Id pregunta: 345 Año de creación de pregunta: 2016
 questions[42]= "43)  El sector Servicios NO incluye:";
 choices[42]= new Array();
 choices[42][0] = "El Comercio";
 choices[42][1] = "Los Transportes";
 choices[42][2] = "La Energ&iacute;a";
 choices[42][3] = "Las Comunicaciones";
 answers[42] = 2;
 units[42] = ['12'];
 blocks[42] = ['A3'];
 comments[42] = "Id Pregunta: 345. Modelo econ&oacute;mico";
 preguntaids[42] = 345


//  Id pregunta: 144 Año de creación de pregunta: 2016
 questions[43]= "44)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[43]= new Array();
 choices[43][0] = "Tres a&ntilde;os.";
 choices[43][1] = "Cuatro a&ntilde;os.";
 choices[43][2] = "Cinco a&ntilde;os.";
 choices[43][3] = "Seis a&ntilde;os.";
 answers[43] = 0;
 units[43] = ['5'];
 blocks[43] = ['A1'];
 comments[43] = "Id Pregunta: 144. Uni&oacute;n Europea";
 preguntaids[43] = 144


//  Id pregunta: 284 Año de creación de pregunta: 2016
 questions[44]= "45)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[44]= new Array();
 choices[44][0] = "Con el a&ntilde;o anterior.";
 choices[44][1] = "Con los tres a&ntilde;os anteriores.";
 choices[44][2] = "Con el a&ntilde;o natural.";
 choices[44][3] = "Con los dos a&ntilde;os anteriores.";
 answers[44] = 2;
 units[44] = ['11'];
 blocks[44] = ['A2'];
 comments[44] = "Id Pregunta: 284. Presupuestos generales";
 preguntaids[44] = 284


//  Id pregunta: 8792 Año de creación de pregunta: 2013
 questions[45]= "46)  De entre las siguientes, existe una que no es una iniciativa comunitaria relacionada con el &aacute;mbito TIC:";
 choices[45]= new Array();
 choices[45][0] = "ISA";
 choices[45][1] = "eTIN";
 choices[45][2] = "IDAbc";
 choices[45][3] = "CIP 2007-2013";
 answers[45] = 1;
 units[45] = ['114'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 8792. ";
 preguntaids[45] = 8792


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale la respuesta correcta en relaci&oacute;n a los diagramas de flujos de datos (DFD):";
 choices[46]= new Array();
 choices[46][0] = "Una entidad externa se puede conectar directamente a un almac&eacute;n de datos.";
 choices[46][1] = "Los almacenes permiten crear y transformar datos.";
 choices[46][2] = "Los procesos primitivos son aquellos procesos que no necesitan m&aacute;s descomposici&oacute;n.";
 choices[46][3] = "Loos flujos de datos que comunican procesos pueden ser &uacute;nicamente de di&aacute;logo.";
 answers[46] = 2;
 units[46] = ['86'];
 blocks[46] = ['B3'];
 comments[46] = "Id Pregunta: 812. AGE A2 2015";
 preguntaids[46] = 812


//  Id pregunta: 1005 Año de creación de pregunta: 2016
 questions[47]= "48)  Los Directores generales ser&aacute;n nombrados y separados por:";
 choices[47]= new Array();
 choices[47][0] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[47][1] = "Ley de las Cortes Generales, a propuesta del titular del Departamento";
 choices[47][2] = "Ley de las Cortes Generales, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[47][3] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento";
 answers[47] = 0;
 units[47] = ['4', '7', '8', '9'];
 blocks[47] = ['A1', 'A2'];
 comments[47] = "Id Pregunta: 1005. Ley 40/2015";
 preguntaids[47] = 1005


//  Id pregunta: 7217 Año de creación de pregunta: 2010
 questions[48]= "49)  De que tarea NO se encarga el n&uacute;cleo independiente del kernel de UNIX:";
 choices[48]= new Array();
 choices[48][0] = "Interrupciones";
 choices[48][1] = "Ejecuci&oacute;n de procesos";
 choices[48][2] = "Planificar los procesos para su realizaci&oacute;n por la CPU";
 choices[48][3] = "Asignar memoria principal a un proceso en ejecuci&oacute;n";
 answers[48] = 0;
 units[48] = ['57'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 7217. ";
 preguntaids[48] = 7217


//  Id pregunta: 4975 Año de creación de pregunta: 2002
 questions[49]= "50)  Los agentes SNMP son:";
 choices[49]= new Array();
 choices[49][0] = "M&oacute;dulos de software que se ejecutan en los dispositivos gestionados y cuya funci&oacute;n es que la informaci&oacute;n acerca del dispositivo est&eacute; disponible para los sistemas de gesti&oacute;n";
 choices[49][1] = "Ordenadores dedicados a la tarea de preguntar a los dispositvos SNMP por la informaci&oacute;n relevante y catalogarla en una base de datos";
 choices[49][2] = "Oficiales de ISO que realizan peri&oacute;dicamente auditor&iacute;as en compa&ntilde;&iacute;as que tienen grandes redes gestionadas por SNMP";
 choices[49][3] = "Aplicaciones dise&ntilde;adas para monitorizar la actividad de sistemas gestionados SNMP y alertar al usuario en caso de alg&uacute;n problema";
 answers[49] = 0;
 units[49] = ['114'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 4975. ";
 preguntaids[49] = 4975


//  Id pregunta: 6607 Año de creación de pregunta: 2009
 questions[50]= "51)  &iquest;Cu&aacute;l es la longitud del resumen de la funci&oacute;n SHA-1?";
 choices[50]= new Array();
 choices[50][0] = "64 bits";
 choices[50][1] = "128 bits";
 choices[50][2] = "160 bits";
 choices[50][3] = "224 bits";
 answers[50] = 2;
 units[50] = ['76'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 6607. ";
 preguntaids[50] = 6607


//  Id pregunta: 1974 Año de creación de pregunta: 2016
 questions[51]= "52)  Si un interesado quiere presentar una solicitud en el plazo previsto en un procedimiento:";
 choices[51]= new Array();
 choices[51][0] = "Podr&aacute; hacerlo, exclusivamente, en la sede del &oacute;rgano administrativo al que se dirija.";
 choices[51][1] = "Podr&aacute; hacerlo en las representaciones diplom&aacute;ticas u oficinas consulares de Espa&ntilde;a en el extranjero.";
 choices[51][2] = "Podr&aacute; hacerlo en las oficinas de correos en la forma que reglamentariamente se establezca.";
 choices[51][3] = "B Y C son verdaderas.";
 answers[51] = 3;
 units[51] = ['7'];
 blocks[51] = ['A2'];
 comments[51] = "Id Pregunta: 1974. ";
 preguntaids[51] = 1974


//  Id pregunta: 7068 Año de creación de pregunta: 2010
 questions[52]= "53)  El comando COUNT:";
 choices[52]= new Array();
 choices[52][0] = "Siempre va acompa&ntilde;ado de *";
 choices[52][1] = "Sirve para contar las ocurrencias del atributo al que acompa&ntilde;e.";
 choices[52][2] = "S&oacute;lo aparece despu&eacute;s del WHERE.";
 choices[52][3] = "Obliga a que aparezca la cl&aacute;usula GROUP BY.";
 answers[52] = 1;
 units[52] = ['61'];
 blocks[52] = ['B2'];
 comments[52] = "Id Pregunta: 7068. ";
 preguntaids[52] = 7068


//  Id pregunta: 247 Año de creación de pregunta: 2016
 questions[53]= "54)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[53]= new Array();
 choices[53][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[53][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[53][2] = "a y b son correctas";
 choices[53][3] = "a y b son incorrectas";
 answers[53] = 0;
 units[53] = ['7'];
 blocks[53] = ['A2'];
 comments[53] = "Id Pregunta: 247. Ley 39/2015";
 preguntaids[53] = 247


//  Id pregunta: 740 Año de creación de pregunta: 2016
 questions[54]= "55)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[54]= new Array();
 choices[54][0] = "Bases de datos orientadas a filas";
 choices[54][1] = "Bases de datos orientadas a documentos";
 choices[54][2] = "Bases de datos de clave/valor";
 choices[54][3] = "Bases de datos orientadas a objetos";
 answers[54] = 0;
 units[54] = ['73'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 740. Big Data y NoSQL";
 preguntaids[54] = 740


//  Id pregunta: 269 Año de creación de pregunta: 2016
 questions[55]= "56)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[55]= new Array();
 choices[55][0] = "Los cr&eacute;ditos";
 choices[55][1] = "Las obligaciones";
 choices[55][2] = "Los derechos";
 choices[55][3] = "B y C son correctas";
 answers[55] = 3;
 units[55] = ['11'];
 blocks[55] = ['A2'];
 comments[55] = "Id Pregunta: 269. Presupuestos generales";
 preguntaids[55] = 269


//  Id pregunta: 7113 Año de creación de pregunta: 2010
 questions[56]= "57)  De acuerdo a lo establecido en el Esquema Nacional de Interoperabilidad, las administraciones utilizar&aacute;n para las aplicaciones que declaren como de fuentes abiertas aquellas licencias que aseguren que los programas, datos o informaci&oacute;n que se comparten:";
 choices[56]= new Array();
 choices[56][0] = "Se ejecuten exclusivamente para el prop&oacute;sito definido.";
 choices[56][1] = "S&oacute;lo permitan conocer su c&oacute;digo fuente a las personas autorizadas.";
 choices[56][2] = "No pueden modificarse sin permiso previo del autor.";
 choices[56][3] = "Todas las anteriores son falsas.";
 answers[56] = 3;
 units[56] = ['43'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 7113. Art&iacute;culo 16 ENI";
 preguntaids[56] = 7113


//  Id pregunta: 4515 Año de creación de pregunta: 2002
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes respuestas es falsa respecto a los medios f&iacute;sicos de transmisi&oacute;n de informaci&oacute;n?:";
 choices[57]= new Array();
 choices[57][0] = "Con cableado de par trenzado se pueden alcanzar varios megabits por segundo";
 choices[57][1] = "El cable coaxial se utiliza para redes de &aacute;rea local";
 choices[57][2] = "La fibra &oacute;ptica monomodo es m&aacute;s barata que la fibra &oacute;ptica multimodo";
 choices[57][3] = "La propagaci&oacute;n de las microondas se ve afectada por los fen&oacute;menos atmosf&eacute;ricos";
 answers[57] = 2;
 units[57] = ['104'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 4515. ";
 preguntaids[57] = 4515


//  Id pregunta: 1123 Año de creación de pregunta: 2016
 questions[58]= "59)  Se&ntilde;ale cu&aacute;l de las siguientes respuestas permitir&iacute;a realizar un montaje de un CD-ROM en un sistema operativo Linux:";
 choices[58]= new Array();
 choices[58][0] = "setup -t device/cdrom/cab1";
 choices[58][1] = "install -t iso9660 /dev/hdb /mnt/cdrom";
 choices[58][2] = "mount -t iso9660 /dev/hdb /mnt/cdrom";
 choices[58][3] = "grep -t iso9660 /dev/hdb /mnt/cdrom";
 answers[58] = 2;
 units[58] = ['57'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 1123. ";
 preguntaids[58] = 1123


//  Id pregunta: 2362 Año de creación de pregunta: 2003
 questions[59]= "60)  WAI se refiere a:";
 choices[59]= new Array();
 choices[59][0] = "Accesibilidad de p&aacute;ginas web.";
 choices[59][1] = "Interfaces para redes de &aacute;rea local.";
 choices[59][2] = "Interfaces para redes metropolitanas.";
 choices[59][3] = "Interfaces de acceso Wi-Fi.";
 answers[59] = 0;
 units[59] = ['42'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 2362. ";
 preguntaids[59] = 2362


//  Id pregunta: 4721 Año de creación de pregunta: 2002
 questions[60]= "61)  Indicar cu&aacute;l de los siguientes equipos no deber&iacute;a colocarse en una DMZ:";
 choices[60]= new Array();
 choices[60][0] = "Bastion host";
 choices[60][1] = "Servidor Web";
 choices[60][2] = "Servidor FTP";
 choices[60][3] = "Servidor de aplicaciones";
 answers[60] = 3;
 units[60] = ['113'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 4721. ";
 preguntaids[60] = 4721


//  Id pregunta: 523 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[61]= new Array();
 choices[61][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[61][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[61][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[61][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[61] = 0;
 units[61] = ['26'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 523. AGE A1 2015";
 preguntaids[61] = 523


//  Id pregunta: 7913 Año de creación de pregunta: 2011
 questions[62]= "63)  En un acuerdo marco en vigor, la licitaci&oacute;n simplificada puede limitarse a s&oacute;lo tres empresas de entre las firmantes del acuerdo:";
 choices[62]= new Array();
 choices[62][0] = "Cuando la duraci&oacute;n m&aacute;xima de acuerdo sea inferior a un a&ntilde;o.";
 choices[62][1] = "Cuando el importe de licitaci&oacute;n sea inferior al mill&oacute;n de euros.";
 choices[62][2] = "Cuando la tramitaci&oacute;n se haya declarado urgente.";
 choices[62][3] = "Cuando el contrato a adjudicar no est&eacute; sujeto a regulaci&oacute;n armonizada.";
 answers[62] = 3;
 units[62] = ['41'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 7913. Examen TIC A1 2010";
 preguntaids[62] = 7913


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[63]= "64)  En el &aacute;mbito de las relaciones internacionales de la Comunidad Europea con terceros pa&iacute;ses:";
 choices[63]= new Array();
 choices[63][0] = "El Consejo negocia los tratados internacionales y la Comisi&oacute;n los aprueba.";
 choices[63][1] = "La Comisi&oacute;n negocia los tratados internacionales y el Parlamento Europeo los sanciona.";
 choices[63][2] = "La Comisi&oacute;n negocia los tratados internacionales y el Consejo los aprueba.";
 choices[63][3] = "Un n&uacute;mero indeterminado de diputados europeos negocia ios tratados internacionales y la Comisi&oacute;n los aprueba.";
 answers[63] = 2;
 units[63] = ['5'];
 blocks[63] = ['A1'];
 comments[63] = "Id Pregunta: 160. Uni&oacute;n Europea";
 preguntaids[63] = 160


//  Id pregunta: 1570 Año de creación de pregunta: 2016
 questions[64]= "65)  A los efectos de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, se&ntilde;ale cu&aacute;l NO es un servicio de la sociedad de la informaci&oacute;n:";
 choices[64]= new Array();
 choices[64][0] = "La organizaci&oacute;n y gesti&oacute;n de subastas por medios electr&oacute;nicos o de mercados y centros comerciales virtuales.";
 choices[64][1] = "El teletexto televisivo y otros servicios equivalentes como las gu&iacute;as electr&oacute;nicas de programas ofrecidas a trav&eacute;s de las plataformas televisivas.";
 choices[64][2] = "El v&iacute;deo bajo demanda, como servicio en que el usuario puede seleccionar a trav&eacute;s de la red, tanto el programa deseado como el momento de su suministro y recepci&oacute;n.";
 choices[64][3] = "El suministro de informaci&oacute;n por v&iacute;a telem&aacute;tica.";
 answers[64] = 1;
 units[64] = ['19'];
 blocks[64] = ['A4'];
 comments[64] = "Id Pregunta: 1570. ";
 preguntaids[64] = 1570


//  Id pregunta: 9023 Año de creación de pregunta: 2014
 questions[65]= "66)  En el sistema operativo Linux, &iquest;cu&aacute;l de las siguientes opciones busca la palabra 'libro' dentro de ficheros?";
 choices[65]= new Array();
 choices[65][0] = "find -type f | xwygs grep 'libro'";
 choices[65][1] = "find -type f | xaygs grep 'libro'";
 choices[65][2] = "find -type f | xargs grep 'libro'";
 choices[65][3] = "find -type f | xargp grep 'libro'";
 answers[65] = 2;
 units[65] = ['57'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 9023. Examen TIC A1 2013";
 preguntaids[65] = 9023


//  Id pregunta: 10195 Año de creación de pregunta: 2015
 questions[66]= "67)  En relaci&oacute;n con jquery, se&ntilde;ale la respuesta correcta:";
 choices[66]= new Array();
 choices[66][0] = "Es una biblioteca disponible en Java 6 y 7 que facilita la realizaci&oacute;n de consultas a bases de datos relacionales.";
 choices[66][1] = "Es una biblioteca de Javascript para simplificar la interacci&oacute;n con p&aacute;ginas web.";
 choices[66][2] = "Es un est&aacute;ndar abierto que facilita la realizaci&oacute;n de consultas a bases de datos relacionales.";
 choices[66][3] = "Es una biblioteca para el acceso a almacenes de datos y big data, que permite la interacci&oacute;n del usuario final con los datos agregados y de detalle.";
 answers[66] = 1;
 units[66] = ['62'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 10195. Examen TIC A1 2014";
 preguntaids[66] = 10195


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[67]= new Array();
 choices[67][0] = "De los derechos y deberes fundamentales.";
 choices[67][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[67][2] = "Derechos y libertades.";
 choices[67][3] = "De la Corona.";
 answers[67] = 2;
 units[67] = ['1'];
 blocks[67] = ['A1'];
 comments[67] = "Id Pregunta: 74. Constituci&oacute;n de 1978";
 preguntaids[67] = 74


//  Id pregunta: 2204 Año de creación de pregunta: 2002
 questions[68]= "69)  Indique cu&aacute;l de las siguientes alternativas se refiere a una de las consecuencias organizativas de la transformaci&oacute;n de una organizaci&oacute;n tradicional en una organizaci&oacute;n basada en la informaci&oacute;n:";
 choices[68]= new Array();
 choices[68][0] = "Esa transformaci&oacute;n no tiene consecuencias organizativas";
 choices[68][1] = "El empleo de nuevas tecnolog&iacute;as";
 choices[68][2] = "El aumento del n&uacute;mero de gestores";
 choices[68][3] = "La reducci&oacute;n del n&uacute;mero de niveles jer&aacute;rquicos";
 answers[68] = 3;
 units[68] = ['25'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 2204. ";
 preguntaids[68] = 2204


//  Id pregunta: 5071 Año de creación de pregunta: 2002
 questions[69]= "70)  SIM equivale a:";
 choices[69]= new Array();
 choices[69][0] = "Software for IMSI of Mobiles";
 choices[69][1] = "Secure Identification of Mobile Subscriber";
 choices[69][2] = "Subscriber Identity Module";
 choices[69][3] = "Synchronous Internet Media";
 answers[69] = 2;
 units[69] = ['117'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 5071. ";
 preguntaids[69] = 5071


//  Id pregunta: 5550 Año de creación de pregunta: 2007
 questions[70]= "71)  En el entorno .NET se han desarrollado una serie de lenguajes de programaci&oacute;n para que sean compatibles con el marco de trabajo .NET. &iquest;Cu&aacute;l de los siguientes no es uno de esos lenguajes?";
 choices[70]= new Array();
 choices[70][0] = "Java";
 choices[70][1] = "C#";
 choices[70][2] = "Visual Basic";
 choices[70][3] = "C++";
 answers[70] = 0;
 units[70] = ['63'];
 blocks[70] = ['B2'];
 comments[70] = "Id Pregunta: 5550. ";
 preguntaids[70] = 5550


//  Id pregunta: 5668 Año de creación de pregunta: 2007
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos se utiliza para determinar la viabilidad del proyecto en el an&aacute;lisis coste-beneficio?";
 choices[71]= new Array();
 choices[71][0] = "Inversi&oacute;n promedio.";
 choices[71][1] = "Coste de desarrollo actualizado.";
 choices[71][2] = "Beneficio neto.";
 choices[71][3] = "Valor actual.";
 answers[71] = 3;
 units[71] = ['33'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 5668. Castilla la Mancha 2006";
 preguntaids[71] = 5668


//  Id pregunta: 449 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[72]= new Array();
 choices[72][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[72][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[72][2] = "Fomentar el despliegue de redes y servicios";
 choices[72][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[72] = 0;
 units[72] = ['19'];
 blocks[72] = ['A4'];
 comments[72] = "Id Pregunta: 449. Agenda Digital para Espa&ntilde;a";
 preguntaids[72] = 449


//  Id pregunta: 6835 Año de creación de pregunta: 2010
 questions[73]= "74)  HTML est&aacute; estandarizado por:";
 choices[73]= new Array();
 choices[73][0] = "World Wide Web Consortium - W3C.";
 choices[73][1] = "Internet Engineering Task Force - IETF.";
 choices[73][2] = "Institute os Management Accountants - IMA.";
 choices[73][3] = "International Accounting Standard Board - IASB.";
 answers[73] = 0;
 units[73] = ['74'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 6835. TIC A 2009";
 preguntaids[73] = 6835


//  Id pregunta: 4646 Año de creación de pregunta: 2002
 questions[74]= "75)  Bajo el protocolo PEM:";
 choices[74]= new Array();
 choices[74][0] = "Se distinguen 3 tipos de mensajes";
 choices[74][1] = "Un mensaje MIC-CLEAR soporta confidencialidad";
 choices[74][2] = "Un mensaje MIC-Only solo envia la cabecera";
 choices[74][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[74] = 0;
 units[74] = ['116'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 4646. ";
 preguntaids[74] = 4646


