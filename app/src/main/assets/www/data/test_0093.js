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
//  Id pregunta: 976 Año de creación de pregunta: 2016
 questions[0]= "1)  Los &oacute;rganos administrativos podr&aacute;n dirigir las actividades de sus &oacute;rganos jer&aacute;rquicamente dependientes mediante:";
 choices[0]= new Array();
 choices[0][0] = "circulares";
 choices[0][1] = "reglamentos internos";
 choices[0][2] = "instrucciones y &oacute;rdenes de servicio";
 choices[0][3] = "disposiciones de car&aacute;cter general";
 answers[0] = 2;
 units[0] = ['4', '7', '8', '9'];
 blocks[0] = ['A1', 'A2'];
 comments[0] = "Id Pregunta: 976. Ley 40/2015";
 preguntaids[0] = 976


//  Id pregunta: 3278 Año de creación de pregunta: 2003
 questions[1]= "2)  Que caracter&iacute;stica de Java no es completamente cierta";
 choices[1]= new Array();
 choices[1][0] = "Es independiente del SO";
 choices[1][1] = "Es independiente de la plataforma";
 choices[1][2] = "Es independiente del HW";
 choices[1][3] = "Write once run everywhere";
 answers[1] = 3;
 units[1] = ['64'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 3278. El c&oacute;digo puede requerir alguna personalizaci&oacute;n para entorno en que se ejecute.";
 preguntaids[1] = 3278


//  Id pregunta: 510 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[2]= new Array();
 choices[2][0] = "Ley 3/2015";
 choices[2][1] = "Ley 6/2007";
 choices[2][2] = "Ley 5/1984";
 choices[2][3] = "Ley 5/2006";
 answers[2] = 0;
 units[2] = ['22'];
 blocks[2] = ['A4'];
 comments[2] = "Id Pregunta: 510. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[2] = 510


//  Id pregunta: 10574 Año de creación de pregunta: 2015
 questions[3]= "4)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes alternativas NO es un tipo de m&eacute;trica que se describe en la Mejora Continua del Servicio (CSI)?";
 choices[3]= new Array();
 choices[3][0] = "M&eacute;tricas del proceso";
 choices[3][1] = "M&eacute;tricas del servicio";
 choices[3][2] = "M&eacute;tricas de personal";
 choices[3][3] = "M&eacute;tricas tecnol&oacute;gicas";
 answers[3] = 2;
 units[3] = ['101'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 10574. ";
 preguntaids[3] = 10574


//  Id pregunta: 8772 Año de creación de pregunta: 2013
 questions[4]= "5)  &iquest;Qu&eacute; norma define el cableado estructurado?";
 choices[4]= new Array();
 choices[4][0] = "ISO 50173";
 choices[4][1] = "ISO 11801";
 choices[4][2] = "ISO 18765";
 choices[4][3] = "ISO 80211";
 answers[4] = 1;
 units[4] = ['104'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 8772. ";
 preguntaids[4] = 8772


//  Id pregunta: 8376 Año de creación de pregunta: 2011
 questions[5]= "6)  El c&oacute;digo objeto se obtiene a partir de:";
 choices[5]= new Array();
 choices[5][0] = "El c&oacute;digo fuente.";
 choices[5][1] = "El c&oacute;digo m&aacute;quina.";
 choices[5][2] = "El c&oacute;digo clase.";
 choices[5][3] = "El c&oacute;digo de enlazado.";
 answers[5] = 0;
 units[5] = ['85'];
 blocks[5] = ['B3'];
 comments[5] = "Id Pregunta: 8376. Examen UPM A2 2011";
 preguntaids[5] = 8376


//  Id pregunta: 10704 Año de creación de pregunta: 2015
 questions[6]= "7)  Indique cu&aacute;l de los siguientes algoritmos criptogr&aacute;ficos NO ha sido autorizado para uso en el Esquema Nacional de Seguridad seg&uacute;n la gu&iacute;a CCN-STIC 807.";
 choices[6]= new Array();
 choices[6][0] = "MD5";
 choices[6][1] = "TDEA";
 choices[6][2] = "AES";
 choices[6][3] = "RSA";
 answers[6] = 0;
 units[6] = ['76'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 10704. ";
 preguntaids[6] = 10704


//  Id pregunta: 3099 Año de creación de pregunta: 2002
 questions[7]= "8)  Una de las siguientes caracter&iacute;sticas no es com&uacute;n a los discos WORM y WMRA:";
 choices[7]= new Array();
 choices[7][0] = "Poseen una gran capacidad de almacenamiento";
 choices[7][1] = "Son de f&aacute;cil manipulaci&oacute;n y transportabilidad";
 choices[7][2] = "Permiten escribir y borrar datos al igual que un disco magn&eacute;tico";
 choices[7][3] = "Son insensibles frente a las radiaciones electromagn&eacute;ticas";
 answers[7] = 2;
 units[7] = ['53'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 3099. ";
 preguntaids[7] = 3099


//  Id pregunta: 964 Año de creación de pregunta: 2016
 questions[8]= "9)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[8]= new Array();
 choices[8][0] = "las previsiones de la ley 40/2015 y supletoriamente por su normativa espec&iacute;fica";
 choices[8][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la ley 40/2015";
 choices[8][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[8][3] = "exclusivamente por las previsiones de la ley 40/2015";
 answers[8] = 1;
 units[8] = ['4', '7', '8', '9'];
 blocks[8] = ['A1', 'A2'];
 comments[8] = "Id Pregunta: 964. Ley 40/2015";
 preguntaids[8] = 964


//  Id pregunta: 41 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[9]= new Array();
 choices[9][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[9][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[9][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[9][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[9] = 0;
 units[9] = ['1'];
 blocks[9] = ['A1'];
 comments[9] = "Id Pregunta: 41. Constituci&oacute;n de 1978";
 preguntaids[9] = 41


//  Id pregunta: 6803 Año de creación de pregunta: 2010
 questions[10]= "11)  Para eliminar una tabla de una base de datos relacional, se utiliza la sentencia DDL:";
 choices[10]= new Array();
 choices[10][0] = "Delete table.";
 choices[10][1] = "rm table.";
 choices[10][2] = "Delete table now.";
 choices[10][3] = "DROP TABLE.";
 answers[10] = 3;
 units[10] = ['61'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 6803. TIC A 2009";
 preguntaids[10] = 6803


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[11]= "12)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[11]= new Array();
 choices[11][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[11][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[11][2] = "Ninguna es correcta.";
 choices[11][3] = "A y B son correctas.";
 answers[11] = 1;
 units[11] = ['14'];
 blocks[11] = ['A3'];
 comments[11] = "Id Pregunta: 391. Pol&iacute;ticas de igualdad";
 preguntaids[11] = 391


//  Id pregunta: 1864 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l es el protocolo utilizado habitualmente para la gesti&oacute;n de redes en la arquitectura TCP/IP?";
 choices[12]= new Array();
 choices[12][0] = "PGR";
 choices[12][1] = "SMTP";
 choices[12][2] = "ICMP";
 choices[12][3] = "SNMP";
 answers[12] = 3;
 units[12] = ['109'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 1864. ";
 preguntaids[12] = 1864


//  Id pregunta: 987 Año de creación de pregunta: 2016
 questions[13]= "14)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[13]= new Array();
 choices[13][0] = "Subsecretario";
 choices[13][1] = "Subdirector general";
 choices[13][2] = "Secretario de Estado";
 choices[13][3] = "ninguna es correcta";
 answers[13] = 0;
 units[13] = ['4', '7', '8', '9'];
 blocks[13] = ['A1', 'A2'];
 comments[13] = "Id Pregunta: 987. Ley 40/2015";
 preguntaids[13] = 987


//  Id pregunta: 6911 Año de creación de pregunta: 2010
 questions[14]= "15)  El ADM (M&eacute;todo de diagramaci&oacute;n con flechas):";
 choices[14]= new Array();
 choices[14][0] = "Es un m&eacute;todo para crear un diagrama de red del cronograma del proyecto que utiliza casillas o rect&aacute;ngulos, denominados nodos, para representar actividades, que se conectan con flechas que muestran las dependencias.";
 choices[14][1] = "A y C son correctas.";
 choices[14][2] = "Es un m&eacute;todo para crear un diagrama de red del cronograma del proyecto que utiliza flechas para representar las actividades, que se conectan en nodos para mostrar sus dependencias.";
 choices[14][3] = "Ninguna de las anteriores es correcta";
 answers[14] = 2;
 units[14] = ['31'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 6911. ";
 preguntaids[14] = 6911


//  Id pregunta: 5155 Año de creación de pregunta: 2003
 questions[15]= "16)  &iquest;C&uacute;antos canales tiene una trama MIC (PCM en ingl&eacute;s)?:";
 choices[15]= new Array();
 choices[15][0] = "32";
 choices[15][1] = "16";
 choices[15][2] = "32, pero dos de ellos se utilizan para se&ntilde;alizaci&oacute;n y sincronismo";
 choices[15][3] = "Todas las respuestas anteriores son falsas";
 answers[15] = 2;
 units[15] = ['114'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 5155. ";
 preguntaids[15] = 5155


//  Id pregunta: 7138 Año de creación de pregunta: 2010
 questions[16]= "17)  De acuerdo a lo dispuesto en la ley de servicios de la sociedad de la informaci&oacute;n y comercio electr&oacute;nico, &iquest;Cu&aacute;l es la sanci&oacute;n correspondiente por la comisi&oacute;n de infracciones muy graves?";
 choices[16]= new Array();
 choices[16][0] = "150.001 hasta 600.000 euros";
 choices[16][1] = "150.001 hasta 300.000 euros";
 choices[16][2] = "300.001 hasta 600.000 euros";
 choices[16][3] = "600.001 hasta 1,000.000 euros";
 answers[16] = 0;
 units[16] = ['19'];
 blocks[16] = ['A4'];
 comments[16] = "Id Pregunta: 7138. Ley 34/2002, art&iacute;culo 39";
 preguntaids[16] = 7138


//  Id pregunta: 1291 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[17]= new Array();
 choices[17][0] = "Indirecta.";
 choices[17][1] = "Directa.";
 choices[17][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[17][3] = "Directa o indirecta, sequen decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[17] = 1;
 units[17] = ['14'];
 blocks[17] = ['A3'];
 comments[17] = "Id Pregunta: 1291. ";
 preguntaids[17] = 1291


//  Id pregunta: 8628 Año de creación de pregunta: 2013
 questions[18]= "19)  Si hablamos de formatos para el almacenamiento de ficheros de im&aacute;genes, &iquest;cu&aacute;l de ellos puede considerarse una extensi&oacute;n de los dem&aacute;s, y permite el almacenamiento de cualquier tipo de fichero, no &uacute;nicamente gr&aacute;fico?:";
 choices[18]= new Array();
 choices[18][0] = "PAM";
 choices[18][1] = "PBM";
 choices[18][2] = "PGM";
 choices[18][3] = "PPM";
 answers[18] = 0;
 units[18] = ['80'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 8628. ";
 preguntaids[18] = 8628


//  Id pregunta: 7410 Año de creación de pregunta: 2010
 questions[19]= "20)  Se&ntilde;ale  la opci&oacute;n que no corresponde a un  tipo de virtualizaci&oacute;n";
 choices[19]= new Array();
 choices[19][0] = "Virtualizaci&oacute;n de Sistema Operativo";
 choices[19][1] = "Paravirtualizaci&oacute;n";
 choices[19][2] = "Virtualizaci&oacute;n de datos";
 choices[19][3] = "Virtualizaci&oacute;n de red";
 answers[19] = 2;
 units[19] = ['124'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 7410. ";
 preguntaids[19] = 7410


//  Id pregunta: 8049 Año de creación de pregunta: 2011
 questions[20]= "21)  En los dispositivos tipo esc&aacute;ner, la resoluci&oacute;n interpolada es:";
 choices[20]= new Array();
 choices[20][0] = "Una resoluci&oacute;n calculada que genera nuevos puntos a partir de otros reales m&aacute;s pr&oacute;ximos.";
 choices[20][1] = "La cantidad de puntos individuales de una imagen captada mediante el sensor";
 choices[20][2] = "La empleada por los programas OCR para identificar el texto.";
 choices[20][3] = "La que determina la profundidad del color";
 answers[20] = 0;
 units[20] = ['80', '81'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 8049. Examen TIC A2 2010";
 preguntaids[20] = 8049


//  Id pregunta: 1658 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[21]= new Array();
 choices[21][0] = "Ley Org&aacute;nica.";
 choices[21][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[21][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[21][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[21] = 2;
 units[21] = ['1'];
 blocks[21] = ['A1'];
 comments[21] = "Id Pregunta: 1658. ";
 preguntaids[21] = 1658


//  Id pregunta: 3261 Año de creación de pregunta: 2003
 questions[22]= "23)  En un modelo de datos jer&aacute;rquico:";
 choices[22]= new Array();
 choices[22][0] = "Un registro no es subordinado directo de ning&uacute;n otro registro.";
 choices[22][1] = "Un registro es subordinado directo de como m&aacute;ximo otro registro.";
 choices[22][2] = "Un registro es subordinado directo de n registros, dependiendo de la topolog&iacute;a del modelo.";
 choices[22][3] = "Los registros estar organizados en una red de relaciones mediante un grafo.";
 answers[22] = 1;
 units[22] = ['60'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 3261. Junta Andaluc&iacute;a";
 preguntaids[22] = 3261


//  Id pregunta: 376 Año de creación de pregunta: 2016
 questions[23]= "24)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[23]= new Array();
 choices[23][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[23][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[23][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[23][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[23] = 0;
 units[23] = ['14'];
 blocks[23] = ['A3'];
 comments[23] = "Id Pregunta: 376. Pol&iacute;ticas de igualdad";
 preguntaids[23] = 376


//  Id pregunta: 9757 Año de creación de pregunta: 2014
 questions[24]= "25)  NO es uno de los 10 objetivos de la Estrategia 2011-2015 del Plan Avanza 2...";
 choices[24]= new Array();
 choices[24][0] = "Promover procesos innovadores TIC en las AAPP";
 choices[24][1] = "Incrementar el uso avanzado de servicios digitales por la ciudadan&iacute;a";
 choices[24][2] = "Promover el uso de las TIC en todos los niveles administrativos";
 choices[24][3] = "Extender el uso de soluciones TIC de negocio en la empresa";
 answers[24] = 2;
 units[24] = ['121'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 9757. https://www.planavanza.es/informaciongeneral/estrategia2011/Paginas/Estrategia2011_2015.aspx";
 preguntaids[24] = 9757


//  Id pregunta: 3782 Año de creación de pregunta: 2002
 questions[25]= "26)  El mantenimiento de sistemas de informaci&oacute;n, tal y como lo define METRICA V3:";
 choices[25]= new Array();
 choices[25][0] = "Es de tipo perfectivo";
 choices[25][1] = "Requiere &uacute;nicamente la participaci&oacute;n del jefe de proyecto y del equipo de mantenimiento";
 choices[25][2] = "Hace uso de la t&eacute;cnica denominada &quot;factores cr&iacute;ticos de &eacute;xito&quot;";
 choices[25][3] = "Tiene como objetivo la obtenci&oacute;n de una nueva versi&oacute;n de un sistema de informaci&oacute;n desarrollado, a partir de las peticiones de mantenimiento que los usuarios realizan con motivo de un problema detectado";
 answers[25] = 3;
 units[25] = ['91'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 3782. ";
 preguntaids[25] = 3782


//  Id pregunta: 2476 Año de creación de pregunta: 2002
 questions[26]= "27)  Del &aacute;mbito de la Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico quedan excluidos los servicios prestados por:";
 choices[26]= new Array();
 choices[26][0] = "Los notarios y registradores de la propiedad en el ejercicio de sus respectivas funciones privadas";
 choices[26][1] = "Los abogados y procuradores en el ejercicio de sus funciones de representaci&oacute;n y juicio";
 choices[26][2] = "Los notarios y registradores de la propiedad y mercantiles en el ejercicio de sus respectivas funciones privadas";
 choices[26][3] = "Funcionarios del Estado";
 answers[26] = 1;
 units[26] = ['19'];
 blocks[26] = ['A4'];
 comments[26] = "Id Pregunta: 2476. ";
 preguntaids[26] = 2476


//  Id pregunta: 521 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes NO es uno de los principios de la Ley de Garant&iacute;a de la Unidad de Mercado?";
 choices[27]= new Array();
 choices[27][0] = "No discriminaci&oacute;n";
 choices[27][1] = "Cooperaci&oacute;n";
 choices[27][2] = "Colaboraci&oacute;n";
 choices[27][3] = "Todos los anteriores son principios de la Ley de Garant&iacute;a de la Unidad de Mercado";
 answers[27] = 2;
 units[27] = ['23'];
 blocks[27] = ['A4'];
 comments[27] = "Id Pregunta: 521. Direcci&oacute;n p&uacute;blica";
 preguntaids[27] = 521


//  Id pregunta: 415 Año de creación de pregunta: 2016
 questions[28]= "29)  La Poblaci&oacute;n Activa incluye a:";
 choices[28]= new Array();
 choices[28][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[28][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[28][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[28][3] = "Todo aquel que desea trabajar";
 answers[28] = 2;
 units[28] = ['15'];
 blocks[28] = ['A3'];
 comments[28] = "Id Pregunta: 415. Mercado laboral";
 preguntaids[28] = 415


//  Id pregunta: 6868 Año de creación de pregunta: 2010
 questions[29]= "30)  Acerca de las Autoridades de sellado de tiempo:";
 choices[29]= new Array();
 choices[29][0] = "Para expedir su certificado precisan conocer en su integridad el documento.";
 choices[29][1] = "En el modo de registros encadenados aplican iterativamente una funci&oacute;n resumen (hash) a la concatenaci&oacute;n del resumen del mensaje a sellar con el resultado de la iteraci&oacute;n anterior.";
 choices[29][2] = "En el modo de firma digital firman la concatenaci&oacute;n de los mensajes a sellar con el tiempo.";
 choices[29][3] = "Ninguna de las anteriores es correcta.";
 answers[29] = 1;
 units[29] = ['78'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 6868. TIC A 2009";
 preguntaids[29] = 6868


//  Id pregunta: 7334 Año de creación de pregunta: 2010
 questions[30]= "31)  Dentro del modelo de calidad EFQM, los 3 criterios de mayor peso por orden son:";
 choices[30]= new Array();
 choices[30][0] = "Satisfacci&oacute;n del Cliente; Impacto en la Sociedad; Resultados";
 choices[30][1] = "Satisfacci&oacute;n del Cliente; Resultados; Procesos";
 choices[30][2] = "Satisfacci&oacute;n del Cliente; Resultados; Liderazgo";
 choices[30][3] = "Resultados; Satisfacci&oacute;n del Cliente; Liderazgo";
 answers[30] = 1;
 units[30] = ['93'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 7334. ";
 preguntaids[30] = 7334


//  Id pregunta: 912 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qu&eacute; modulaci&oacute;n usa el est&aacute;ndar HSPA+?";
 choices[31]= new Array();
 choices[31][0] = "BPSK";
 choices[31][1] = "64-QAM";
 choices[31][2] = "ADPCM";
 choices[31][3] = "FSK";
 answers[31] = 1;
 units[31] = ['117'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 912. AGE A2 2015";
 preguntaids[31] = 912


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[32]= "33)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[32]= new Array();
 choices[32][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[32][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[32][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[32][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[32] = 1;
 units[32] = ['5'];
 blocks[32] = ['A1'];
 comments[32] = "Id Pregunta: 114. Uni&oacute;n Europea";
 preguntaids[32] = 114


//  Id pregunta: 9614 Año de creación de pregunta: 2014
 questions[33]= "34)  Seg&uacute;n lo recogido en el Texto Refundido de la Ley de propiedad Intelectual, se&ntilde;ale la respuesta correcta:";
 choices[33]= new Array();
 choices[33][0] = "La reproducci&oacute;n o transformaci&oacute;n de un programa de ordenador requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, en todo caso";
 choices[33][1] = "La reproducci&oacute;n o transformaci&oacute;n de un programa de ordenador no requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, en todo caso";
 choices[33][2] = "La correcci&oacute;n de errores de un programa de ordenador no requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, cuando sea necesario para la utilizaci&oacute;n del programa por parte del usuario seg&uacute;n su finalidad prevista";
 choices[33][3] = "Todas las respuestas anteriores son falsas";
 answers[33] = 2;
 units[33] = ['41'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 9614. Consultar Art. 100 del Real Decreto Legislativo 1/1996";
 preguntaids[33] = 9614


//  Id pregunta: 10255 Año de creación de pregunta: 2015
 questions[34]= "35)  &iquest;Qu&eacute; tipo de restricciones en el modelo de Entidad-Relaci&oacute;n hacen referencia al formato de escritura del atributo?";
 choices[34]= new Array();
 choices[34][0] = "Restricciones sem&aacute;nticas";
 choices[34][1] = "Restricciones sint&aacute;cticas";
 choices[34][2] = "Restricciones estructurales";
 choices[34][3] = "Restricciones de usuario";
 answers[34] = 1;
 units[34] = ['85'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 10255. ";
 preguntaids[34] = 10255


//  Id pregunta: 7799 Año de creación de pregunta: 2010
 questions[35]= "36)  &iquest;En cu&aacute;l de las siguientes metodolog&iacute;as de desarrollo de software NO se utilizan Diagramas de Flujo de Datos?";
 choices[35]= new Array();
 choices[35][0] = "De Marco.";
 choices[35][1] = "Jackson.";
 choices[35][2] = "Gane &amp; Sarson.";
 choices[35][3] = "Yourdon/Constantine.";
 answers[35] = 1;
 units[35] = ['84'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 7799. ";
 preguntaids[35] = 7799


//  Id pregunta: 5726 Año de creación de pregunta: 2007
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes tipos de sistemas de ficheros, lo es de red?";
 choices[36]= new Array();
 choices[36][0] = "ext2";
 choices[36][1] = "swap";
 choices[36][2] = "SMB";
 choices[36][3] = "MSB";
 answers[36] = 2;
 units[36] = ['58'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 5726. ";
 preguntaids[36] = 5726


//  Id pregunta: 10550 Año de creación de pregunta: 2015
 questions[37]= "38)  Se&ntilde;ale cu&aacute;l de las siguientes opciones contiene m&eacute;todos de asignaci&oacute;n de pesos en la Teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta";
 choices[37]= new Array();
 choices[37][0] = "Delphi, Utilidades relativas, UMA, Entrop&iacute;a";
 choices[37][1] = "Delphi, Utilidades relativas, AHP, Entrop&iacute;a";
 choices[37][2] = "Delphi, Utilidades relativas, Electre, Entrop&iacute;a";
 choices[37][3] = "Delphi, Utilidades relativas, Electre, TOPSIS";
 answers[37] = 1;
 units[37] = ['38'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 10550. ";
 preguntaids[37] = 10550


//  Id pregunta: 431 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[38]= new Array();
 choices[38][0] = "Establecer redes de telecomunicaciones continentales";
 choices[38][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[38][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[38][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[38] = 0;
 units[38] = ['17'];
 blocks[38] = ['A4'];
 comments[38] = "Id Pregunta: 431. Mercado &Uacute;nico Digital";
 preguntaids[38] = 431


//  Id pregunta: 4523 Año de creación de pregunta: 2002
 questions[39]= "40)  Dentro del modelo OSI la funci&oacute;n de 'compatibilizaci&oacute;n de ficheros de distintos formatos', corresponde al nivel:";
 choices[39]= new Array();
 choices[39][0] = "Nivel de red";
 choices[39][1] = "Nivel de transporte";
 choices[39][2] = "Nivel de sesi&oacute;n";
 choices[39][3] = "Nivel de presentaci&oacute;n";
 answers[39] = 3;
 units[39] = ['105'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 4523. ";
 preguntaids[39] = 4523


//  Id pregunta: 8806 Año de creación de pregunta: 2013
 questions[40]= "41)  &iquest;Qu&eacute; tecnolog&iacute;a permite la multiplexaci&oacute;n de mayor n&uacute;mero de longitudes de onda por una &uacute;nica fibra &oacute;ptica?";
 choices[40]= new Array();
 choices[40][0] = "CWDM";
 choices[40][1] = "SDH";
 choices[40][2] = "WDM";
 choices[40][3] = "DWDM";
 answers[40] = 3;
 units[40] = ['106'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 8806. Escala de Gesti&oacute;n de Sistemas de Sistemas de Informaci&oacute;n de la Xunta de Galicia. Acceso Libre 2011.";
 preguntaids[40] = 8806


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[41]= "42)  Son servicios previstos en el cat&aacute;logo de servicios de la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[41]= new Array();
 choices[41][0] = "Los servicios de teleasistencia, de ayuda a domicilio y de formaci&oacute;n.";
 choices[41][1] = "Los servicios de ayuda a domicilio, de teleasistencia y de centro de d&iacute;a y de noche.";
 choices[41][2] = "Los servicios de teleasistencia, de atenci&oacute;n residencial y de sede electr&oacute;nica.";
 choices[41][3] = "Los servicios de prevenci&oacute;n, de ayuda a domicilio y de ambulancia.";
 answers[41] = 1;
 units[41] = ['14'];
 blocks[41] = ['A3'];
 comments[41] = "Id Pregunta: 353. Estado del Bienestar";
 preguntaids[41] = 353


//  Id pregunta: 3750 Año de creación de pregunta: 2002
 questions[42]= "43)  Cuando se ejecuta un programa OO (Orientado a Objetos) ocurren tres tipos de sucesos, identifique el incorrecto:";
 choices[42]= new Array();
 choices[42][0] = "Se crean objetos cuando se necesitan.";
 choices[42][1] = "Los mensajes se mueven de un objeto a otro, o desde un usuario a un objeto, seg&uacute;n se va procesando informaci&oacute;n o respondiendo a entradas de usuario.";
 choices[42][2] = "Se borran los objetos cuando ya no son necesarios.";
 choices[42][3] = "Se renombran los objetos cuando ya no son necesarios.";
 answers[42] = 3;
 units[42] = ['85', '89'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 3750. ";
 preguntaids[42] = 3750


//  Id pregunta: 4888 Año de creación de pregunta: 2002
 questions[43]= "44)  La funci&oacute;n de una MIB es:";
 choices[43]= new Array();
 choices[43][0] = "Representar un dispositivo dado en la jerarqu&iacute;a de una red gestionada";
 choices[43][1] = "Identificar las caracter&iacute;sticas espec&iacute;ficas de un dispositivo gestionado y asociar uno o m&aacute;s valores a sus caracter&iacute;sticas";
 choices[43][2] = "Mapear agentes SNMP a  NMSs (Network Management Systems) SNMP y mantener una tablas con estas relaciones";
 choices[43][3] = "Permitir representar a los datos de forma independiente de las t&eacute;cnicas de representaci&oacute;n y de las estructuras de sistemas en particular";
 answers[43] = 1;
 units[43] = ['114'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 4888. ";
 preguntaids[43] = 4888


//  Id pregunta: 3475 Año de creación de pregunta: 2006
 questions[44]= "45)  De acuerdo a la ley 34/2002, se&ntilde;ale la falsa:";
 choices[44]= new Array();
 choices[44][0] = "Por la comisi&oacute;n de infracciones muy graves, multa de 150.001 hasta 600.000 euros.";
 choices[44][1] = "Por la comisi&oacute;n de infracciones graves, multa de 30.001 hasta 150.000 euros";
 choices[44][2] = "Por la comisi&oacute;n de infracciones leves, multa de hasta 30.000 euros.";
 choices[44][3] = "Todas son ciertas";
 answers[44] = 3;
 units[44] = ['19'];
 blocks[44] = ['A4'];
 comments[44] = "Id Pregunta: 3475. Ley 34/2002, art&iacute;culo 39";
 preguntaids[44] = 3475


//  Id pregunta: 4581 Año de creación de pregunta: 2002
 questions[45]= "46)  &iquest;Cu&aacute;ntos bytes ocupa la cabecera m&iacute;nima en IPv4?";
 choices[45]= new Array();
 choices[45][0] = "16";
 choices[45][1] = "20";
 choices[45][2] = "24";
 choices[45][3] = "32";
 answers[45] = 1;
 units[45] = ['109'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 4581. ";
 preguntaids[45] = 4581


//  Id pregunta: 10674 Año de creación de pregunta: 2015
 questions[46]= "47)  El Plan de Transformaci&oacute;n Digital de la Administraci&oacute;n General del Estado (AGE) y sus Organismos P&uacute;blicos, Estrategia TIC 2015-2020, fue aprobado por";
 choices[46]= new Array();
 choices[46][0] = "La Comisi&oacute;n de Estrategia TIC (CETIC) el 2 de Octubre de 2015.";
 choices[46][1] = "El Consejo de Ministros el 2 de Octubre de 2015.";
 choices[46][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital (antigua DTIC) el 15 de septiembre de 2015.";
 choices[46][3] = "Por el Consejo Superior de Administraci&oacute;n Electr&oacute;nica (CSAE) el 15 de Septiembre de 2015.";
 answers[46] = 1;
 units[46] = ['26'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 10674. ";
 preguntaids[46] = 10674


//  Id pregunta: 4970 Año de creación de pregunta: 2002
 questions[47]= "48)  Las siglas UTP corresponden a:";
 choices[47]= new Array();
 choices[47][0] = "Cable coaxial fino";
 choices[47][1] = "Cable coaxial grueso";
 choices[47][2] = "Fibra &oacute;ptica sin apantallar";
 choices[47][3] = "Par trenzado sin apantallar";
 answers[47] = 3;
 units[47] = ['104'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 4970. ";
 preguntaids[47] = 4970


//  Id pregunta: 4937 Año de creación de pregunta: 2002
 questions[48]= "49)  Un puente transparente aprende la direcci&oacute;n de los dispositivos:";
 choices[48]= new Array();
 choices[48][0] = "Examinado las direcciones MAC de las tramas entrantes y asoci&aacute;ndolas con una interfaz";
 choices[48][1] = "Examinando las direcciones de red de las tramas entrantes y asoci&aacute;ndolas con una interfaz";
 choices[48][2] = "Examinado las direcciones MAC de las tramas salientes y asoci&aacute;ndolas con una interfaz da salida";
 choices[48][3] = "Examinando las direcciones de red de las tramas salientes y asoci&aacute;ndolas con una interfaz de salida";
 answers[48] = 0;
 units[48] = ['102'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 4937. ";
 preguntaids[48] = 4937


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[49]= "50)  La sede del Parlamento Europeo se encuentra en:";
 choices[49]= new Array();
 choices[49][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[49][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[49][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[49][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[49] = 1;
 units[49] = ['5'];
 blocks[49] = ['A1'];
 comments[49] = "Id Pregunta: 171. Uni&oacute;n Europea";
 preguntaids[49] = 171


//  Id pregunta: 11 Año de creación de pregunta: 2016
 questions[50]= "51)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[50]= new Array();
 choices[50][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[50][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[50][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[50][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[50] = 2;
 units[50] = ['1'];
 blocks[50] = ['A1'];
 comments[50] = "Id Pregunta: 11. Constituci&oacute;n de 1978";
 preguntaids[50] = 11


//  Id pregunta: 6405 Año de creación de pregunta: 2003
 questions[51]= "52)  Indica la afirmaci&oacute;n correcta respecto a CLS o Common Language Specification:";
 choices[51]= new Array();
 choices[51][0] = "Es el conjunto de clases que se manejan en .NET";
 choices[51][1] = "Recoge la especificacion que debe cumplir todo lenguaje que se ejecuta sobre el framework .NET";
 choices[51][2] = "Es la especificacion del framework .NET";
 choices[51][3] = "Todas son falsas";
 answers[51] = 1;
 units[51] = ['63'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 6405. ";
 preguntaids[51] = 6405


//  Id pregunta: 9442 Año de creación de pregunta: 2014
 questions[52]= "53)  La principal mejora de SNMPv3 es:";
 choices[52]= new Array();
 choices[52][0] = "Mayor seguridad";
 choices[52][1] = "Mayor rendimiento";
 choices[52][2] = "Mayor eficacia";
 choices[52][3] = "Mayor simplicidad";
 answers[52] = 0;
 units[52] = ['114'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 9442. ";
 preguntaids[52] = 9442


//  Id pregunta: 2531 Año de creación de pregunta: 2004
 questions[53]= "54)  En Java, respecto a la herencia de clases ...";
 choices[53]= new Array();
 choices[53][0] = "Es posible que una clase herede de m&aacute;s de una clase padre";
 choices[53][1] = "Una clase s&oacute;lo puede implementar un &uacute;nico interfaz";
 choices[53][2] = "La clase que hereda de una clase abstracta es siempre abstracta a su vez";
 choices[53][3] = "Todas las anteriores son falsas";
 answers[53] = 3;
 units[53] = ['64'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 2531. ";
 preguntaids[53] = 2531


//  Id pregunta: 9287 Año de creación de pregunta: 2014
 questions[54]= "55)  En un proyecto de desarrollo que utiliza la metodolog&iacute;a SCRUM, aquel rol que tiene la responsabilidad de eliminar los obst&aacute;culos que impidan el progreso del equipo se denomina:";
 choices[54]= new Array();
 choices[54][0] = "Product owner.";
 choices[54][1] = "Retail Cashier.";
 choices[54][2] = "ScrumMaster";
 choices[54][3] = "Development team member.";
 answers[54] = 2;
 units[54] = ['84'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 9287. Examen TIC A2 2013. Promocion interna";
 preguntaids[54] = 9287


//  Id pregunta: 4843 Año de creación de pregunta: 2002
 questions[55]= "56)  En transmisi&oacute;n de datos, &iquest;qu&eacute; ventaja reporta el uso de c&eacute;lulas peque&ntilde;as de longitud fija?:";
 choices[55]= new Array();
 choices[55][0] = "Utilizaci&oacute;n m&aacute;s eficiente del enlace ya que un dispositivo puede enviar c&eacute;lulas sin necesidad de un slot 'libre' de tiempo";
 choices[55][1] = "Minimizaci&oacute;n de esperas intermitentes que pueden derivarse de la espera para que se transmita un paquete largo";
 choices[55][2] = "Una estaci&oacute;n puede enviar muchas c&eacute;lulas en fila sin tener que esperar para est&eacute; disponible su slot de tiempo";
 choices[55][3] = "Puede usarse un pol&iacute;tica de tr&aacute;fico para comparar el tr&aacute;fico real con el acordado";
 answers[55] = 1;
 units[55] = ['110'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 4843. ";
 preguntaids[55] = 4843


//  Id pregunta: 4088 Año de creación de pregunta: 2003
 questions[56]= "57)  En el modelo Entidad/Relaci&oacute;n extendido las relaciones d&eacute;biles:";
 choices[56]= new Array();
 choices[56][0] = "Son las que existen entre entidades d&eacute;biles";
 choices[56][1] = "&Uacute;nicamente las que existen entre una entidad regular y otra entidad d&eacute;bil cuya identificaci&oacute;n depende de la identificaci&oacute;n de la anterior.";
 choices[56][2] = "Son las que existen entre una entidad regular y otra entidad d&eacute;bil, independientemente de que la dependencia sea por identificaci&oacute;n o existencia.";
 choices[56][3] = "Son las que existen entre una entidad regular y otra entidad d&eacute;bil cuya existencia no depende de la existencia de la anterior.";
 answers[56] = 2;
 units[56] = ['85'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 4088. ";
 preguntaids[56] = 4088


//  Id pregunta: 5860 Año de creación de pregunta: 2007
 questions[57]= "58)  Indique la afirmaci&oacute;n cierta.";
 choices[57]= new Array();
 choices[57][0] = "El resultado de cifrar de nuevo un texto cifrado con otro algoritmo aporta una seguridad adicional, eso s&iacute;, implicando una carga extra de trabajo tanto para cifrar como para luego descifrar el texto";
 choices[57][1] = "Los cifradores de flujo no aportan informaci&oacute;n alguna al criptoanalista que observa el texto cifrado";
 choices[57][2] = "La calidad del algoritmo HASH es independiente de la calidad de la dispersi&oacute;n obtenida en dicho algoritmo";
 choices[57][3] = "El ataque del cumplea&ntilde;os no es aplicable a las funciones HASH, ya que no son reversibles";
 answers[57] = 1;
 units[57] = ['76'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 5860. ";
 preguntaids[57] = 5860


//  Id pregunta: 3991 Año de creación de pregunta: 2002
 questions[58]= "59)  El tipo de indizaci&oacute;n por descriptores es el m&aacute;s utilizado en la indizaci&oacute;n asistida por ordenador, y puede realizarse mediante distintos m&eacute;todos. &iquest;Cu&aacute;l de los rese&ntilde;ados no ser&iacute;a un m&eacute;todo de indizaci&oacute;n?:";
 choices[58]= new Array();
 choices[58][0] = "El m&eacute;todo estad&iacute;stico";
 choices[58][1] = "El m&eacute;todo por asignaci&oacute;n de conceptos claves del documento";
 choices[58][2] = "El m&eacute;todo sint&aacute;ctico";
 choices[58][3] = "El m&eacute;todo morfol&oacute;gico";
 answers[58] = 3;
 units[58] = ['100'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 3991. ";
 preguntaids[58] = 3991


//  Id pregunta: 1479 Año de creación de pregunta: 2016
 questions[59]= "60)  Un sistema distribuido, en oposici&oacute;n a un sistema monol&iacute;tico, permite mejorar:";
 choices[59]= new Array();
 choices[59][0] = "La velocidad de proceso del sistema.";
 choices[59][1] = "La escalabilidad del sistema.";
 choices[59][2] = "La portabilidad del sistema.";
 choices[59][3] = "La usabilidad del sistema.";
 answers[59] = 1;
 units[59] = ['49'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 1479. ";
 preguntaids[59] = 1479


//  Id pregunta: 6677 Año de creación de pregunta: 2009
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes opciones describe correctamente la estructura de una direcci&oacute;n MAC?";
 choices[60]= new Array();
 choices[60][0] = "C&oacute;digo de red de 16 bits m&aacute;s c&oacute;digo de serie de 16 bits";
 choices[60][1] = "C&oacute;digo del fabricante de 16 bits m&aacute;s c&oacute;digo de serie de 16 bits";
 choices[60][2] = "C&oacute;digo del fabricante de 24 bits m&aacute;s c&oacute;digo de serie de 24 bits";
 choices[60][3] = "Identidad de red de 24 bits m&aacute;s identidad de host de 24 bits";
 answers[60] = 2;
 units[60] = ['112'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 6677. MAP 2008 A1";
 preguntaids[60] = 6677


//  Id pregunta: 509 Año de creación de pregunta: 2016
 questions[61]= "62)  Indique la afirmaci&oacute;n falsa:";
 choices[61]= new Array();
 choices[61][0] = "En la publicidad activa la Administraci&oacute;n pone los datos a disposici&oacute;n de la ciudadan&iacute;a, en portales y p&aacute;ginas web, sin esperar a que los ciudadanos los demanden, proactivamente.";
 choices[61][1] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica los ciudadanos acceden a la informaci&oacute;n p&uacute;blica puesta a disposici&oacute;n por la Administraci&oacute;n en portales y p&aacute;ginas web.";
 choices[61][2] = "La publicidad activa y el derecho de acceso fomentan la transparencia en la actividad p&uacute;blica.";
 choices[61][3] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica la Administraci&oacute;n responde a las demandas de informaci&oacute;n por parte de los ciudadanos.";
 answers[61] = 1;
 units[61] = ['22'];
 blocks[61] = ['A4'];
 comments[61] = "Id Pregunta: 509. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[61] = 509


//  Id pregunta: 331 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[62]= new Array();
 choices[62][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[62][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[62][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[62][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[62] = 1;
 units[62] = ['12'];
 blocks[62] = ['A3'];
 comments[62] = "Id Pregunta: 331. Modelo econ&oacute;mico";
 preguntaids[62] = 331


//  Id pregunta: 460 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[63]= new Array();
 choices[63][0] = "Los principios rectores";
 choices[63][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[63][2] = "Los hitos para su desarrollo gradual";
 choices[63][3] = "Todos los anteriores";
 answers[63] = 3;
 units[63] = ['19'];
 blocks[63] = ['A4'];
 comments[63] = "Id Pregunta: 460. Estrategia TIC";
 preguntaids[63] = 460


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[64]= "65)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[64]= new Array();
 choices[64][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[64][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[64][2] = "Funcionarios e interinos.";
 choices[64][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[64] = 3;
 units[64] = ['20'];
 blocks[64] = ['A4'];
 comments[64] = "Id Pregunta: 492. Junta de Extremadura A1 2015";
 preguntaids[64] = 492


//  Id pregunta: 618 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes es un requisito m&iacute;nimo de seguridad seg&uacute;n el art&iacute;culo 11 del Esquema Nacional de Seguridad?";
 choices[65]= new Array();
 choices[65][0] = "L&iacute;neas de defensa.";
 choices[65][1] = "An&aacute;lisis y gesti&oacute;n de los riesgos.";
 choices[65][2] = "Seguridad integral.";
 choices[65][3] = "Detecci&oacute;n ante otros sistemas de informaci&oacute;n interconectados.";
 answers[65] = 1;
 units[65] = ['46'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 618. AGE A2 2015";
 preguntaids[65] = 618


//  Id pregunta: 7590 Año de creación de pregunta: 2010
 questions[66]= "67)  Sobre las funciones OLAP (Online Analytical Processing) definidas como extensiones a SQL (Structured Query Language) que forman parte de SQL:2003, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[66]= new Array();
 choices[66][0] = "La funci&oacute;n ROLLUP puede aparecer en la cl&aacute;usula GROUP BY.";
 choices[66][1] = "La funci&oacute;n ROLLUP puede aparecer en la cl&aacute;usula ORDER BY.";
 choices[66][2] = "La funci&oacute;n CUBE puede aparecer en la cl&aacute;usula ORDER BY.";
 choices[66][3] = "La funci&oacute;n CUBE puede aparecer en la cl&aacute;usula FROM.";
 answers[66] = 0;
 units[66] = ['61'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 7590. Map 2006";
 preguntaids[66] = 7590


//  Id pregunta: 9782 Año de creación de pregunta: 2015
 questions[67]= "68)  El servicio de verificaci&oacute;n y consulta de datos no tiene por objetivo:";
 choices[67]= new Array();
 choices[67][0] = "Dar respuesta al art&iacute;culo 28 de la Ley 39/2015, por el que los interesados no estar&aacute;n obligados a aportar documentos que hayan sido elaborados por cualquier Administraci&oacute;n.";
 choices[67][1] = "Simplificar la tramitaci&oacute;n de los procedimientos administrativos.";
 choices[67][2] = "Facilitar al ciudadano la aportaci&oacute;n de los documentos en papel que acrediten su identidad en los procedimientos administrativos.";
 choices[67][3] = "Dar cumplimiento a los derechos recogidos en la Ley 39/2015, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas.";
 answers[67] = 2;
 units[67] = ['7', '47'];
 blocks[67] = ['A2', 'B1'];
 comments[67] = "Id Pregunta: 9782. ";
 preguntaids[67] = 9782


//  Id pregunta: 6360 Año de creación de pregunta: 2003
 questions[68]= "69)  La planificaci&oacute;n y gesti&oacute;n de un proyecto se encarga a una persona, que denominaremos &quot;Jefe de proyecto&quot;. El Plan de proyecto contendr&aacute;:";
 choices[68]= new Array();
 choices[68][0] = "Un grafico de Gant para estimar el coste, otro de PERT para las restricciones y usaremos COCOMO para las  etapas.";
 choices[68][1] = "Estrictamente la Metodolog&iacute;a que el Departamento especifique.";
 choices[68][2] = "Un grafico de GANTT para las etapas, un gr&aacute;fico de PERT para la representaci&oacute;n de las restricciones y usaremos COCOMO para estimar el coste.";
 choices[68][3] = "La Metodolog&iacute;a del Departamento que se suministre v&iacute;a web.";
 answers[68] = 2;
 units[68] = ['27'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 6360. Examen 2006 JCYL";
 preguntaids[68] = 6360


//  Id pregunta: 2602 Año de creación de pregunta: 2002
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes afirmaciones es incorrecta, si hablamos de las ventajas derivadas del uso de vistas en una Base de datos?:";
 choices[69]= new Array();
 choices[69][0] = "Pueden verse los mismos datos por diferentes usuarios";
 choices[69][1] = "Los intercambios de campos entre tablas f&iacute;sicas son transparentes a las vistas del usuario";
 choices[69][2] = "Los intercambios de campos entre tablas f&iacute;sicas no son transparentes a las vistas del usuario";
 choices[69][3] = "Ocultar campos de datos importantes a los usuarios que no deben ser manipulados";
 answers[69] = 2;
 units[69] = ['60'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 2602. ";
 preguntaids[69] = 2602


//  Id pregunta: 429 Año de creación de pregunta: 2016
 questions[70]= "71)  No es competencia del Servicio P&uacute;blico de Empleo Estatal";
 choices[70]= new Array();
 choices[70][0] = "Elaborar y elevar al Ministerio de Empleo y Seguridad Social las propuestas normativas de &aacute;mbito estatal en materia de empleo que procedan.";
 choices[70][1] = "Elaborar el proyecto de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo y de los Planes Anuales de Pol&iacute;tica de Empleo en colaboraci&oacute;n con las comunidades aut&oacute;nomas.";
 choices[70][2] = "Gestionar el Observatorio de las Relaciones Laborales del Servicio P&uacute;blico de Empleo Estatal";
 choices[70][3] = "Coordinar las actuaciones conjuntas de los servicios p&uacute;blicos de empleo en el desarrollo del Sistema de Informaci&oacute;n de los Servicios P&uacute;blicos de Empleo.";
 answers[70] = 2;
 units[70] = ['15'];
 blocks[70] = ['A3'];
 comments[70] = "Id Pregunta: 429. Modelo econ&oacute;mico";
 preguntaids[70] = 429


//  Id pregunta: 7454 Año de creación de pregunta: 2010
 questions[71]= "72)  Es un organismo europeo de normalizaci&oacute;n, de acuerdo a la Directiva 98/34/CE";
 choices[71]= new Array();
 choices[71][0] = "CEN";
 choices[71][1] = "ICANN";
 choices[71][2] = "Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital";
 choices[71][3] = "GNU";
 answers[71] = 0;
 units[71] = ['48'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 7454. ";
 preguntaids[71] = 7454


//  Id pregunta: 10811 Año de creación de pregunta: 2015
 questions[72]= "73)  Hive:";
 choices[72]= new Array();
 choices[72][0] = "Impone una jerarqu&iacute;a a los archivos en cl&uacute;ster y permite sincronizar el trabajo entre las distintas entidades.";
 choices[72][1] = "Permite administrar grandes conjuntos de datos que se encuentran en cl&uacute;ster utilizando un lenguaje similar a SQL";
 choices[72][2] = "Permite gestionar los flujos de trabajo y la sincronizaci&oacute;n al trabajar con datos en cl&uacute;ster.";
 choices[72][3] = "Ofrece una interfaz gr&aacute;fica que permite disponer, administrar y supervisar un conjunto de nodos de trabajo Hadoop.";
 answers[72] = 1;
 units[72] = ['73'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 10811. ";
 preguntaids[72] = 10811


//  Id pregunta: 6235 Año de creación de pregunta: 2003
 questions[73]= "74)  El transporte de voz en tiempo real a trav&eacute;s de redes IP se efect&uacute;a por medio de los protocolos:";
 choices[73]= new Array();
 choices[73][0] = "MPLS sobre UDP";
 choices[73][1] = "RVSP";
 choices[73][2] = "RTP sobre TCP";
 choices[73][3] = "RTP sobre UDP";
 answers[73] = 3;
 units[73] = ['110'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 6235. Examen TIC A Castilla La Mancha 2007";
 preguntaids[73] = 6235


//  Id pregunta: 5184 Año de creación de pregunta: 2003
 questions[74]= "75)  Respecto de Java y JavaScript se puede decir";
 choices[74]= new Array();
 choices[74][0] = "Los dos son lenguajes interpretados";
 choices[74][1] = "Java es compilado en tiempo de ejecuci&oacute;n y JavaScript interpretado";
 choices[74][2] = "JavaScript es compilado en tiempo de ejecuci&oacute;n y Java interpretado";
 choices[74][3] = "Ambos son compilados";
 answers[74] = 1;
 units[74] = ['62'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 5184. ";
 preguntaids[74] = 5184


