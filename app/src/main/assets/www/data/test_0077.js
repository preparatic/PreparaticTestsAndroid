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
//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[0]= "1)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[0]= new Array();
 choices[0][0] = "Al Consejo Europeo.";
 choices[0][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[0][2] = "A la Comisi&oacute;n Europea.";
 choices[0][3] = "Al Parlamento Europeo.";
 answers[0] = 2;
 units[0] = ['5'];
 blocks[0] = ['A1'];
 comments[0] = "Id Pregunta: 116. Uni&oacute;n Europea";
 preguntaids[0] = 116


//  Id pregunta: 8716 Año de creación de pregunta: 2013
 questions[1]= "2)  &iquest;C&oacute;mo se llama la conexi&oacute;n de Intel que supera en velocidad a USB 3.0, basada en LightPeak?";
 choices[1]= new Array();
 choices[1][0] = "Thundercat";
 choices[1][1] = "LightFire";
 choices[1][2] = "Thunderbolt";
 choices[1][3] = "USB 4.0";
 answers[1] = 2;
 units[1] = ['53'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 8716. Examen TICA2-2011";
 preguntaids[1] = 8716


//  Id pregunta: 6908 Año de creación de pregunta: 2010
 questions[2]= "3)  Con respecto al ancho de banda de la conexi&oacute;n ADSL de un abonado";
 choices[2]= new Array();
 choices[2][0] = "La tasa de transferencia no es sensible a la distancia del abonado a la central, de forma que es similar a todos los abonados de una misma central";
 choices[2][1] = "La tasa de transferencia es sensible a la distancia del abonado a la central, de forma que los abonados que est&aacute;n m&aacute;s cerca de la central tendr&aacute;n posibilidad de velocidades m&aacute;s altas";
 choices[2][2] = "La tasa de transferencia del abonado depende principalmente del n&uacute;mero de abonados que est&aacute;n conectados simult&aacute;neamente, en ning&uacute;n caso de la distancia a la central";
 choices[2][3] = "Todas las respuestas anteriores son falsas";
 answers[2] = 1;
 units[2] = ['106'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 6908. ";
 preguntaids[2] = 6908


//  Id pregunta: 7858 Año de creación de pregunta: 2011
 questions[3]= "4)  El diagrama de despliegue se utiliza en M&eacute;trica versi&oacute;n 3 en:";
 choices[3]= new Array();
 choices[3][0] = "El dise&ntilde;o de la arquitectura de m&oacute;dulos del sistema.";
 choices[3][1] = "El dise&ntilde;o f&iacute;sico de datos";
 choices[3][2] = "La generaci&oacute;n de especificaciones de construcci&oacute;n.";
 choices[3][3] = "El dise&ntilde;o del modelo de sistemas de informaci&oacute;n.";
 answers[3] = 2;
 units[3] = ['91'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 7858. Examen TIC A1 2010";
 preguntaids[3] = 7858


//  Id pregunta: 470 Año de creación de pregunta: 2016
 questions[4]= "5)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[4]= new Array();
 choices[4][0] = "Seguridad Social y AEAT";
 choices[4][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[4][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[4][3] = "Todos los anteriores";
 answers[4] = 3;
 units[4] = ['19'];
 blocks[4] = ['A4'];
 comments[4] = "Id Pregunta: 470. Estrategia TIC";
 preguntaids[4] = 470


//  Id pregunta: 3517 Año de creación de pregunta: 2006
 questions[5]= "6)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta con respecto a los procesos arrancados por el superusuario (root) en un sistema operativo Linux";
 choices[5]= new Array();
 choices[5][0] = "Su c&oacute;digo se ejecuta con el procesador en modo n&uacute;cleo (kernel)";
 choices[5][1] = "Pueden ejecutarse con menos prioridad de planificaci&oacute;n que un proceso de usuario normal";
 choices[5][2] = "Tiene acceso directo a los dispositivos de E/S";
 choices[5][3] = "Acceden directamente al mapa de memoria de otros procesos";
 answers[5] = 1;
 units[5] = ['57'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 3517. ";
 preguntaids[5] = 3517


//  Id pregunta: 3278 Año de creación de pregunta: 2003
 questions[6]= "7)  Que caracter&iacute;stica de Java no es completamente cierta";
 choices[6]= new Array();
 choices[6][0] = "Es independiente del SO";
 choices[6][1] = "Es independiente de la plataforma";
 choices[6][2] = "Es independiente del HW";
 choices[6][3] = "Write once run everywhere";
 answers[6] = 3;
 units[6] = ['64'];
 blocks[6] = ['B2'];
 comments[6] = "Id Pregunta: 3278. El c&oacute;digo puede requerir alguna personalizaci&oacute;n para entorno en que se ejecute.";
 preguntaids[6] = 3278


//  Id pregunta: 10289 Año de creación de pregunta: 2015
 questions[7]= "8)  En una estructura de tres niveles de un CAU, seleccione la opci&oacute;n verdadera.";
 choices[7]= new Array();
 choices[7][0] = "El nivel 2 deber&aacute; tener acceso a la base de incidencias ya que la incidencia reportada puede haberse producido anteriormente.";
 choices[7][1] = "Todas las incidencias deben estar documentadas una vez resueltas.";
 choices[7][2] = "Todas las incidencias comienzan por una recepci&oacute;n y finalizan con un cierre.";
 choices[7][3] = "Todas las anteriores son verdaderas";
 answers[7] = 3;
 units[7] = ['30'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 10289. ";
 preguntaids[7] = 10289


//  Id pregunta: 1898 Año de creación de pregunta: 2016
 questions[8]= "9)  Para un sistema de almacenamiento de cien unidades de disco, &iquest;Cu&aacute;l de los siguientes ofrece mayor capacidad neta de almacenamiento?: .";
 choices[8]= new Array();
 choices[8][0] = "RAI1";
 choices[8][1] = "RAI5";
 choices[8][2] = "RAI6";
 choices[8][3] = "RAID 0+1";
 answers[8] = 1;
 units[8] = ['53'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 1898. ";
 preguntaids[8] = 1898


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[9]= "10)  En el &aacute;mbito de las relaciones internacionales de la Comunidad Europea con terceros pa&iacute;ses:";
 choices[9]= new Array();
 choices[9][0] = "El Consejo negocia los tratados internacionales y la Comisi&oacute;n los aprueba.";
 choices[9][1] = "La Comisi&oacute;n negocia los tratados internacionales y el Parlamento Europeo los sanciona.";
 choices[9][2] = "La Comisi&oacute;n negocia los tratados internacionales y el Consejo los aprueba.";
 choices[9][3] = "Un n&uacute;mero indeterminado de diputados europeos negocia ios tratados internacionales y la Comisi&oacute;n los aprueba.";
 answers[9] = 2;
 units[9] = ['5'];
 blocks[9] = ['A1'];
 comments[9] = "Id Pregunta: 160. Uni&oacute;n Europea";
 preguntaids[9] = 160


//  Id pregunta: 9806 Año de creación de pregunta: 2015
 questions[10]= "11)  La ISO publica:";
 choices[10]= new Array();
 choices[10][0] = "Informes T&eacute;cnicos y Gu&iacute;as ISO.";
 choices[10][1] = "Especificaciones Internacionales y Memor&aacute;ndum de errores.";
 choices[10][2] = "A y B son correctas.";
 choices[10][3] = "La ISO no publica ning&uacute;n documento, s&oacute;lo certifica est&aacute;ndares de otras organizaciones.";
 answers[10] = 0;
 units[10] = ['48'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 9806. S&iacute; publica Technical Reports e ISO Guides. Pero no publica Especificaciones Internacionales sino Technical Specifications o Publicly Available Specifications. Tampoco publica Memor&aacute;ndums de Errores sino Correcciones T&eacute;cnicas (Technical Corrigendum).";
 preguntaids[10] = 9806


//  Id pregunta: 7150 Año de creación de pregunta: 2010
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes aplicaciones de software libre sirve para la edici&oacute;n profesional de im&aacute;genes?";
 choices[11]= new Array();
 choices[11][0] = "GIMP";
 choices[11][1] = "Celtx";
 choices[11][2] = "Nvu";
 choices[11][3] = "Rhythmbox";
 answers[11] = 0;
 units[11] = ['66'];
 blocks[11] = ['B2'];
 comments[11] = "Id Pregunta: 7150. ";
 preguntaids[11] = 7150


//  Id pregunta: 5700 Año de creación de pregunta: 2007
 questions[12]= "13)  La capa de adaptaci&oacute;n de ATM (AAL o ATM Adaptation Layer) com&uacute;nmente utilizada para la transmisi&oacute;n de datagramas IP sobre redes ATM es:";
 choices[12]= new Array();
 choices[12][0] = "AAL 5.";
 choices[12][1] = "AAL 1.";
 choices[12][2] = "AAL 3/4.";
 choices[12][3] = "AAL 2.";
 answers[12] = 0;
 units[12] = ['107'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 5700. ";
 preguntaids[12] = 5700


//  Id pregunta: 968 Año de creación de pregunta: 2016
 questions[13]= "14)  Las Administraciones P&uacute;blicas:";
 choices[13]= new Array();
 choices[13][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[13][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[13][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[13][3] = "todas son correctas";
 answers[13] = 1;
 units[13] = ['4', '7', '8', '9'];
 blocks[13] = ['A1', 'A2'];
 comments[13] = "Id Pregunta: 968. Ley 40/2015";
 preguntaids[13] = 968


//  Id pregunta: 10972 Año de creación de pregunta: 2015
 questions[14]= "15)  Seg&uacute;n la ley 19/2013 de transparencia, y en lo referente a la composici&oacute;n de la Comisi&oacute;n de Transparencia y Buen Gobierno, se&ntilde;ale la FALSA:";
 choices[14]= new Array();
 choices[14][0] = "Un Senador";
 choices[14][1] = "Un representante de la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias.";
 choices[14][2] = "Un representante de la Autoridad Independiente de Responsabilidad Fiscal";
 choices[14][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[14] = 1;
 units[14] = ['22'];
 blocks[14] = ['A4'];
 comments[14] = "Id Pregunta: 10972. ";
 preguntaids[14] = 10972


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[15]= "16)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[15]= new Array();
 choices[15][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[15][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[15][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[15][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[15] = 1;
 units[15] = ['5'];
 blocks[15] = ['A1'];
 comments[15] = "Id Pregunta: 114. Uni&oacute;n Europea";
 preguntaids[15] = 114


//  Id pregunta: 1022 Año de creación de pregunta: 2016
 questions[16]= "17)  Segun la ley 40/2015 podr&aacute;n ordenarle al funcionario que se abstenga de toda intervenci&oacute;n en el expediente por causa de abstenci&oacute;n...";
 choices[16]= new Array();
 choices[16][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[16][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[16][2] = "Los interesados en el procedimiento";
 choices[16][3] = "Las alternativas b) y c) son correctas";
 answers[16] = 1;
 units[16] = ['4', '7', '8', '9'];
 blocks[16] = ['A1', 'A2'];
 comments[16] = "Id Pregunta: 1022. Ley 40/2015";
 preguntaids[16] = 1022


//  Id pregunta: 8028 Año de creación de pregunta: 2011
 questions[17]= "18)  Cu&aacute;l de los siguientes estados NO corresponde con ninguno de los estados en los que puede estar un puerto de un dispositivo de interconexi&oacute;n, seg&uacute;n lo definido en el est&aacute;ndar 802.1D para el protocolo Spanning Tree:";
 choices[17]= new Array();
 choices[17][0] = "Blocking (Bloqueando).";
 choices[17][1] = "Listening (Escuchando).";
 choices[17][2] = "Learning (Aprendiendo).";
 choices[17][3] = "Receiving (Recibiendo).";
 answers[17] = 3;
 units[17] = ['102'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 8028. Examen TIC A2 2010";
 preguntaids[17] = 8028


//  Id pregunta: 5581 Año de creación de pregunta: 2007
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes no es una desventaja del cable coaxial frente a otros medios de transmisi&oacute;n";
 choices[18]= new Array();
 choices[18][0] = "Diafon&iacute;a.";
 choices[18][1] = "Ruido t&eacute;rmico.";
 choices[18][2] = "Ruido de intermodulaci&oacute;n.";
 choices[18][3] = "Atenuaci&oacute;n";
 answers[18] = 0;
 units[18] = ['104'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 5581. ";
 preguntaids[18] = 5581


//  Id pregunta: 10119 Año de creación de pregunta: 2015
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes servicios transforma un texto original en un hipertexto con v&iacute;nculos geogr&aacute;ficos?:";
 choices[19]= new Array();
 choices[19][0] = "Coberturas en Web (WCS).";
 choices[19][1] = "Nom&eacute;nclator (Gazetteer).";
 choices[19][2] = "Cat&aacute;logo (CSW).";
 choices[19][3] = "Geoparser.";
 answers[19] = 3;
 units[19] = ['71'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 10119. Examen TIC A1 2014";
 preguntaids[19] = 10119


//  Id pregunta: 3952 Año de creación de pregunta: 2002
 questions[20]= "21)  Respecto a los procesos, en un DFD:";
 choices[20]= new Array();
 choices[20][0] = "Cada proceso debe tener al menos una entrada y una salida";
 choices[20][1] = "Un proceso no puede ser fuente ni sumidero de informaci&oacute;n, s&oacute;lo transformarla";
 choices[20][2] = "Un proceso primitivo es aquel del que derivan en el tiempo otros procesos del sistema";
 choices[20][3] = "Las opciones a) y b) son correctas";
 answers[20] = 3;
 units[20] = ['85', '86'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 3952. ";
 preguntaids[20] = 3952


//  Id pregunta: 4970 Año de creación de pregunta: 2002
 questions[21]= "22)  Las siglas UTP corresponden a:";
 choices[21]= new Array();
 choices[21][0] = "Cable coaxial fino";
 choices[21][1] = "Cable coaxial grueso";
 choices[21][2] = "Fibra &oacute;ptica sin apantallar";
 choices[21][3] = "Par trenzado sin apantallar";
 answers[21] = 3;
 units[21] = ['104'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4970. ";
 preguntaids[21] = 4970


//  Id pregunta: 223 Año de creación de pregunta: 2016
 questions[22]= "23)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[22]= new Array();
 choices[22][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[22][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[22][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[22][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[22] = 3;
 units[22] = ['7'];
 blocks[22] = ['A2'];
 comments[22] = "Id Pregunta: 223. Ley 39/2015";
 preguntaids[22] = 223


//  Id pregunta: 10900 Año de creación de pregunta: 2015
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes elementos es utilizado en las listas de acceso IP est&aacute;ndar como base para permitir o denegar paquetes?";
 choices[23]= new Array();
 choices[23][0] = "Direccion destino IP";
 choices[23][1] = "Direccion origen IP";
 choices[23][2] = "Protocolo";
 choices[23][3] = "Puerto";
 answers[23] = 1;
 units[23] = ['102'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 10900. ";
 preguntaids[23] = 10900


//  Id pregunta: 204 Año de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[24]= new Array();
 choices[24][0] = "De oficio.";
 choices[24][1] = "A solicitud del interesado.";
 choices[24][2] = "De oficio o a solicitud del interesado.";
 choices[24][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[24] = 2;
 units[24] = ['7'];
 blocks[24] = ['A2'];
 comments[24] = "Id Pregunta: 204. Ley 39/2015";
 preguntaids[24] = 204


//  Id pregunta: 7942 Año de creación de pregunta: 2011
 questions[25]= "26)  El protocolo FTP es un protocolo:";
 choices[25]= new Array();
 choices[25][0] = "Seguro.";
 choices[25][1] = "Orientado a conexi&oacute;n.";
 choices[25][2] = "De nivel de enlace.";
 choices[25][3] = "Dise&ntilde;ado para gestionar se&ntilde;alizaci&oacute;n de red.";
 answers[25] = 1;
 units[25] = ['103'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 7942. Examen TIC A2 2010";
 preguntaids[25] = 7942


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[26]= "27)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[26]= new Array();
 choices[26][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[26][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[26][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[26][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[26] = 0;
 units[26] = ['5'];
 blocks[26] = ['A1'];
 comments[26] = "Id Pregunta: 172. Uni&oacute;n Europea";
 preguntaids[26] = 172


//  Id pregunta: 2477 Año de creación de pregunta: 2002
 questions[27]= "28)  El R.D. 209/2003 regula:";
 choices[27]= new Array();
 choices[27][0] = "Los registros telem&aacute;ticos";
 choices[27][1] = "Las notificaciones telem&aacute;ticas";
 choices[27][2] = "La utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos";
 choices[27][3] = "Todas las anteriores son correctas";
 answers[27] = 3;
 units[27] = ['19'];
 blocks[27] = ['A4'];
 comments[27] = "Id Pregunta: 2477. ";
 preguntaids[27] = 2477


//  Id pregunta: 10391 Año de creación de pregunta: 2015
 questions[28]= "29)  &iquest;Qu&eacute; objetivo de porcentaje de i+d marca la estrategia europea 2020 para la Uni&oacute;n Europea?";
 choices[28]= new Array();
 choices[28][0] = "2% del PIB";
 choices[28][1] = "3%del PIB";
 choices[28][2] = "5% del PIB";
 choices[28][3] = "La estrategia Europa 2020 no marca ning&uacute;n objetivo en materia de i+d";
 answers[28] = 1;
 units[28] = ['19'];
 blocks[28] = ['A4'];
 comments[28] = "Id Pregunta: 10391. ";
 preguntaids[28] = 10391


//  Id pregunta: 7247 Año de creación de pregunta: 2010
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes opciones no es una tecnolog&iacute;a de administraci&oacute;n de seguridad centralizadas?";
 choices[29]= new Array();
 choices[29][0] = "TACACS+";
 choices[29][1] = "Radius";
 choices[29][2] = "Un grupo de trabajo peer-to-peer";
 choices[29][3] = "Diameter";
 answers[29] = 2;
 units[29] = ['120'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 7247. ";
 preguntaids[29] = 7247


//  Id pregunta: 8078 Año de creación de pregunta: 2011
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes protocolos utiliza puertos UDP y TCP para la operaci&oacute;n delnivel de transporte?:";
 choices[30]= new Array();
 choices[30][0] = "FTP.";
 choices[30][1] = "TFTP.";
 choices[30][2] = "DNS.";
 choices[30][3] = "Ninguno de los anteriores.";
 answers[30] = 2;
 units[30] = ['105', '109'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 8078. Analista Ayto. Madrid 2010";
 preguntaids[30] = 8078


//  Id pregunta: 8963 Año de creación de pregunta: 2013
 questions[31]= "32)  Java dispone de diferentes APIs con el fin de dar soporte para web services. La API que no est&aacute; relacionada con web services es:";
 choices[31]= new Array();
 choices[31][0] = "JAXR";
 choices[31][1] = "JAXB";
 choices[31][2] = "JAXP";
 choices[31][3] = "JTA";
 answers[31] = 3;
 units[31] = ['64'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 8963. ";
 preguntaids[31] = 8963


//  Id pregunta: 2114 Año de creación de pregunta: 2002
 questions[32]= "33)  El T&iacute;tulo V de la LOPD trata sobre:";
 choices[32]= new Array();
 choices[32][0] = "Principios de la protecci&oacute;n de datos";
 choices[32][1] = "Derechos de las personas";
 choices[32][2] = "Movimiento internacional de datos";
 choices[32][3] = "Agencia de Protecci&oacute;n de Datos";
 answers[32] = 2;
 units[32] = ['35'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 2114. ";
 preguntaids[32] = 2114


//  Id pregunta: 7600 Año de creación de pregunta: 2010
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes infracciones est&aacute; tipificada como muy grave seg&uacute;n la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico?";
 choices[33]= new Array();
 choices[33][0] = "El incumplimiento significativo de la obligaci&oacute;n de retener los datos de tr&aacute;fico generados por las comunicaciones establecidas durante la prestaci&oacute;n de un servicio de la sociedad de la informaci&oacute;n, prevista en el art&iacute;culo 12 de dicha Ley.";
 choices[33][1] = "La utilizaci&oacute;n de los datos retenidos, en cumplimiento del art&iacute;culo 12 de dicha Ley, para fines distintos de los se&ntilde;alados en &eacute;l.";
 choices[33][2] = "El incumplimiento de la obligaci&oacute;n de suspender la transmisi&oacute;n, el alojamiento de datos, el acceso a la red o la prestaci&oacute;n de cualquier otro servicio equivalente de intermediaci&oacute;n, cuando un &oacute;rgano administrativo competente lo ordene, en virtud de lo dispuesto en el art&iacute;culo 11 de dicha Ley.";
 choices[33][3] = "El env&iacute;o masivo de comunicaciones comerciales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente o el env&iacute;o, en el plazo de un a&ntilde;o, de m&aacute;s de tres comunicaciones comerciales por los medios aludidos a un mismo destinatario, cuando en dichos env&iacute;os no se cumplan los requisitos establecidos en el art&iacute;culo 21 de dicha Ley.";
 answers[33] = 2;
 units[33] = ['19'];
 blocks[33] = ['A4'];
 comments[33] = "Id Pregunta: 7600. Similar a Map 2006";
 preguntaids[33] = 7600


//  Id pregunta: 2790 Año de creación de pregunta: 2002
 questions[34]= "35)  El sistema de encriptaci&oacute;n RSA (Rivest, Shamir y Adleman, 1978)&hellip;:";
 choices[34]= new Array();
 choices[34][0] = "El receptor del mensaje debe conocer la clave p&uacute;blica para descifrarlo";
 choices[34][1] = "Se basa en la seguridad que confiere la dificultad de factorizar n&uacute;meros grandes";
 choices[34][2] = "Es un sistema de encriptaci&oacute;n sim&eacute;trico";
 choices[34][3] = "Garantiza la seguridad a&uacute;n utilizando n&uacute;meros primos de menos de veinte cifras";
 answers[34] = 1;
 units[34] = ['76'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 2790. ";
 preguntaids[34] = 2790


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


//  Id pregunta: 3114 Año de creación de pregunta: 2002
 questions[36]= "37)  &iquest;Qu&eacute; empresa desarroll&oacute; el primer rat&oacute;n como perif&eacute;rico de los ordenadores?:";
 choices[36]= new Array();
 choices[36][0] = "LaCie";
 choices[36][1] = "Toshiba";
 choices[36][2] = "Apple";
 choices[36][3] = "Rank Xerox";
 answers[36] = 3;
 units[36] = ['52'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 3114. ";
 preguntaids[36] = 3114


//  Id pregunta: 1292 Año de creación de pregunta: 2016
 questions[37]= "38)  De acuerdo con la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de Medidas de Protecci&oacute;n Integral contra la Violencia de G&eacute;nero, ,a quien corresponder&aacute; el asesoramiento, evaluaci&oacute;n, colaboraci&oacute;n institucional, elaboraci&oacute;n de informes y estudios, y propuestas de actuaci&oacute;n en materia de violencia de g&eacute;nero?";
 choices[37]= new Array();
 choices[37][0] = "Ala Delegaci&oacute;n Especial del Gobierno contra la Violencia sobre la Mujer.";
 choices[37][1] = "A las Fuerzas y Cuerpos de Seguridad del Estado.";
 choices[37][2] = "AI Observatorio Estatal de Violencia sobre la Mujer.";
 choices[37][3] = "AI Ministerio de Justicia, que creara un &oacute;rgano especifico para ello.";
 answers[37] = 2;
 units[37] = ['14'];
 blocks[37] = ['A3'];
 comments[37] = "Id Pregunta: 1292. ";
 preguntaids[37] = 1292


//  Id pregunta: 7377 Año de creación de pregunta: 2010
 questions[38]= "39)  &iquest;Cu&aacute;l es el est&aacute;ndar de la tarjeta f&iacute;sica del DNI electr&oacute;nico?";
 choices[38]= new Array();
 choices[38][0] = "ISO-7816-1";
 choices[38][1] = "PCKS#11";
 choices[38][2] = "ISO-17789";
 choices[38][3] = "ISO-7815-1";
 answers[38] = 0;
 units[38] = ['78'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 7377. Examen TIC B 2009";
 preguntaids[38] = 7377


//  Id pregunta: 5887 Año de creación de pregunta: 2007
 questions[39]= "40)  La Ley de Impulso de la Sociedad de la Informaci&oacute;n introduce novedades en materia de";
 choices[39]= new Array();
 choices[39][0] = "Facturaci&oacute;n electr&oacute;nica";
 choices[39][1] = "Firma electr&oacute;nica";
 choices[39][2] = "Derechos de los usuarios en la Sociedad de la Informaci&oacute;n";
 choices[39][3] = "Todas las anteriores son ciertas";
 answers[39] = 3;
 units[39] = ['19'];
 blocks[39] = ['A4'];
 comments[39] = "Id Pregunta: 5887. Ley 56/2007";
 preguntaids[39] = 5887


//  Id pregunta: 1425 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n el art&iacute;culo 54 de la Constituci&oacute;n Espa&ntilde;ola una ley org&aacute;nica regular&aacute; la instituci&oacute;n del Defensor del Pueblo, como alto comisionado de las Cortes Generales, designado por &eacute;stas para la defensa de los derechos comprendidos en el T&iacute;tulo I, a cuyo efecto podr&aacute; supervisar:";
 choices[40]= new Array();
 choices[40][0] = "La actividad del Gobierno, dando cuenta a las Cortes Generales.";
 choices[40][1] = "La actividad de la Administraci&oacute;n, dando cuenta al Congreso de los Diputados.";
 choices[40][2] = "La actividad del Gobierno y de la Administraci&oacute;n, dando cuenta a las Cortes Generales.";
 choices[40][3] = "Ninguna es correcta.";
 answers[40] = 3;
 units[40] = ['1'];
 blocks[40] = ['A1'];
 comments[40] = "Id Pregunta: 1425. ";
 preguntaids[40] = 1425


//  Id pregunta: 5092 Año de creación de pregunta: 2003
 questions[41]= "42)  El ataque de denegaci&oacute;n de servicio llamado Smurf consiste en:";
 choices[41]= new Array();
 choices[41][0] = "Dejar una conexi&oacute;n en estado semiabierto y no llegar a realizarse el paso final para establecer una conexi&oacute;n";
 choices[41][1] = "Se trata de mandar a un puerto abierto del servidor un paquete hecho con la direcci&oacute;n y puerto origen igual que la direcci&oacute;n y puerto destino";
 choices[41][2] = "Consiste en recolectar direcciones BroadCast para despu&eacute;s mandar una petici&oacute;n ICMP cada una de ellas, falsificando la direcci&oacute;n IP de origen";
 choices[41][3] = "Se trata de saturar la red mediante una cantidad repetitiva y enorme de peticiones de conexi&oacute;n";
 answers[41] = 2;
 units[41] = ['119'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 5092. ";
 preguntaids[41] = 5092


//  Id pregunta: 5814 Año de creación de pregunta: 2007
 questions[42]= "43)  Defina Throughput:";
 choices[42]= new Array();
 choices[42][0] = "Cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado (medido entrabajos por hora o transacciones por segundo)";
 choices[42][1] = "M&aacute;xima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de cargadeterminado (medido en trabajos por hora o transacciones por segundo)";
 choices[42][2] = "&quot;swing job&quot; o trabajo excedentario que se puede realizar antes de llegar a la saturaci&oacute;n (medido en trabajospor hora o transacciones por segundo)";
 choices[42][3] = "M&iacute;nima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de cargadeterminado (medido en trabajos por hora o transacciones por segundo)";
 answers[42] = 0;
 units[42] = ['94'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 5814. Examen 2006 JCYL";
 preguntaids[42] = 5814


//  Id pregunta: 2545 Año de creación de pregunta: 2004
 questions[43]= "44)  &iquest;Qu&eacute; significado tienen las siguientes siglas COLD?";
 choices[43]= new Array();
 choices[43][0] = "Computer Output to laser Disk";
 choices[43][1] = "Computer on line disk";
 choices[43][2] = "Computer Optical Laser Disk";
 choices[43][3] = "ninguna de las anteriores";
 answers[43] = 0;
 units[43] = ['53'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 2545. ";
 preguntaids[43] = 2545


//  Id pregunta: 359 Año de creación de pregunta: 2016
 questions[44]= "45)  El Factor de Sostenibilidad de la pensi&oacute;n de jubilaci&oacute;n, regulado en el art&iacute;culo 211 del Real Decreto Legislativo 8/2015, de 30 de octubre, por el que se aprueba el texto refundido de la Ley General de la Seguridad Social:";
 choices[44]= new Array();
 choices[44][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[44][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[44][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[44][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[44] = 2;
 units[44] = ['14'];
 blocks[44] = ['A3'];
 comments[44] = "Id Pregunta: 359. Estado del Bienestar";
 preguntaids[44] = 359


//  Id pregunta: 175 Año de creación de pregunta: 2016
 questions[45]= "46)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[45]= new Array();
 choices[45][0] = "Son vinculantes solamente.";
 choices[45][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[45][2] = "Son preceptivos y vinculantes.";
 choices[45][3] = "Son preceptivos y no vinculantes.";
 answers[45] = 1;
 units[45] = ['5'];
 blocks[45] = ['A1'];
 comments[45] = "Id Pregunta: 175. Uni&oacute;n Europea";
 preguntaids[45] = 175


//  Id pregunta: 2827 Año de creación de pregunta: 2002
 questions[46]= "47)  En Java:";
 choices[46]= new Array();
 choices[46][0] = "Los programas son applets, que se ejecutan en un navegador";
 choices[46][1] = "Los programas son de l&iacute;nea de comandos o basados en entornos de ventanas, como AWT o Swing";
 choices[46][2] = "Los programas son aplicaciones web de servidor";
 choices[46][3] = "Todas las anteriores respuestas son ciertas";
 answers[46] = 3;
 units[46] = ['64'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 2827. ";
 preguntaids[46] = 2827


//  Id pregunta: 6753 Año de creación de pregunta: 2009
 questions[47]= "48)  En relaci&oacute;n a la ITU (International Telecommunication Union), indique cu&aacute;l de los siguientes NO se corresponde con un sector estrat&eacute;gico de la misma:";
 choices[47]= new Array();
 choices[47][0] = "Radiocomunicaciones (ITU-R)";
 choices[47][1] = "Estandarizaci&oacute;n (ITU-T)";
 choices[47][2] = "Seguridad (ITU-S)";
 choices[47][3] = "Desarrollo (ITU-D)";
 answers[47] = 2;
 units[47] = ['48'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 6753. MAP 2008 A1";
 preguntaids[47] = 6753


//  Id pregunta: 3052 Año de creación de pregunta: 2002
 questions[48]= "49)  Se&ntilde;ale la sentencia correcta respecto a los m&eacute;todos de resoluci&oacute;n de problemas:";
 choices[48]= new Array();
 choices[48][0] = "El m&eacute;todo GPS (General Problem Solver) consiste en almacenar en un momento dado el camino recorrido desde la ra&iacute;z mediante el empleo de funciones recursivas";
 choices[48][1] = "El m&eacute;todo STRIPS (Stanford Research Institute Problem Solver) une la filosof&iacute;a GPS con las t&eacute;cnicas de b&uacute;squeda en profundidad";
 choices[48][2] = "El m&eacute;todo GPS consiste en descomponer un problema de manera sistem&aacute;tica en subproblemas";
 choices[48][3] = "El m&eacute;todo STRIPS no puede representar conceptos y deducir a partir de ellos nuevos hechos mediante las reglas de deducci&oacute;n";
 answers[48] = 2;
 units[48] = ['67'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 3052. ";
 preguntaids[48] = 3052


//  Id pregunta: 5298 Año de creación de pregunta: 2006
 questions[49]= "50)  La burbuja de las puntocom explot&oacute;:";
 choices[49]= new Array();
 choices[49][0] = "En el a&ntilde;o 1999";
 choices[49][1] = "A finales del 1999 y durante el 2000";
 choices[49][2] = "A finales del 2000 y durante el 2001";
 choices[49][3] = "A finales del 2001 y durante el 2002";
 answers[49] = 2;
 units[49] = ['103'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 5298. ";
 preguntaids[49] = 5298


//  Id pregunta: 5830 Año de creación de pregunta: 2007
 questions[50]= "51)  &iquest;C&oacute;mo se puede describir el formato de los datos en XML?";
 choices[50]= new Array();
 choices[50][0] = "Usando XSL";
 choices[50][1] = "Usando un DTD";
 choices[50][2] = "Usando un Nodo de Descripci&oacute;n (Description Node)";
 choices[50][3] = "Usando XSLT";
 answers[50] = 1;
 units[50] = ['74'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 5830. Examen 2006 JCYL";
 preguntaids[50] = 5830


//  Id pregunta: 483 Año de creación de pregunta: 2016
 questions[51]= "52)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[51]= new Array();
 choices[51][0] = "Principio de solo una vez";
 choices[51][1] = "Apertura y transparencia";
 choices[51][2] = "Confianza y seguridad";
 choices[51][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[51] = 3;
 units[51] = ['19'];
 blocks[51] = ['A4'];
 comments[51] = "Id Pregunta: 483. Sociedad de la informaci&oacute;n";
 preguntaids[51] = 483


//  Id pregunta: 6981 Año de creación de pregunta: 2010
 questions[52]= "53)  De acuerdo con las recomendaciones de ITIL, la Aceptaci&oacute;n e Instalaci&oacute;n de los Ordenadores por primera vez, se cubre en:";
 choices[52]= new Array();
 choices[52][0] = "Gesti&oacute;n de la Infraestructura";
 choices[52][1] = "Gesti&oacute;n de Soporte";
 choices[52][2] = "Gesti&oacute;n de Entrega";
 choices[52][3] = "Gesti&oacute;n de Aplicaciones";
 answers[52] = 0;
 units[52] = ['101'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 6981. TIC-B 2009 bloque desarrollo";
 preguntaids[52] = 6981


//  Id pregunta: 7680 Año de creación de pregunta: 2010
 questions[53]= "54)  &iquest;Cu&aacute;l de estas afirmaciones sobre accesibilidad es cierta de acuerdo con las gu&iacute;as del W3C?";
 choices[53]= new Array();
 choices[53][0] = "Una p&aacute;gina web accesible debe tener textos equivalentes para cualquier elemento no textual.";
 choices[53][1] = "Un p&aacute;gina web accesible debe contener solo texto.";
 choices[53][2] = "Una p&aacute;gina web accesible no debe utilizar colores.";
 choices[53][3] = "Una p&aacute;gina web accesible debe utilizar un &uacute;nico tipo de letra establecido en estas gu&iacute;as.";
 answers[53] = 0;
 units[53] = ['42'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 7680. Map 2007";
 preguntaids[53] = 7680


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[54]= "55)  Cuando resulte eficaz, proporcionado y necesario para la consecuci&oacute;n de los fines propios del procedimiento, y de manera motivada, podr&aacute;n incluirse tr&aacute;mites adicionales o distintos a los contemplados en esta Ley:";
 choices[54]= new Array();
 choices[54][0] = "solo mediante ley";
 choices[54][1] = "reglamentariamente";
 choices[54][2] = "mediante ley o reglamentariamente";
 choices[54][3] = "ninguna es correcta";
 answers[54] = 0;
 units[54] = ['7'];
 blocks[54] = ['A2'];
 comments[54] = "Id Pregunta: 212. Ley 39/2015";
 preguntaids[54] = 212


//  Id pregunta: 342 Año de creación de pregunta: 2016
 questions[55]= "56)  Cuando decimos que la inversi&oacute;n extranjera en Espa&ntilde;a tiene un car&aacute;cter proc&iacute;clico, nos referimos a que:";
 choices[55]= new Array();
 choices[55][0] = "Aumenta cuando la econom&iacute;a est&aacute; en crecimiento, y se reduce cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[55][1] = "Se reduce cuando la econom&iacute;a est&aacute; en crecimiento, y aumenta cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[55][2] = "Aumenta cuando el pa&iacute;s entra en recesi&oacute;n, y aumenta cuando la econom&iacute;a est&aacute; en crecimiento";
 choices[55][3] = "Se reduce cuando el pa&iacute;s entra en recesi&oacute;n, y se reduce cuando la econom&iacute;a est&aacute; en crecimiento";
 answers[55] = 0;
 units[55] = ['12'];
 blocks[55] = ['A3'];
 comments[55] = "Id Pregunta: 342. Modelo econ&oacute;mico";
 preguntaids[55] = 342


//  Id pregunta: 5429 Año de creación de pregunta: 2007
 questions[56]= "57)  El protocolo RAS de la pila de protocolos H323 de la ITU:";
 choices[56]= new Array();
 choices[56][0] = "Son las siglas de Registration, Admission and Signalling";
 choices[56][1] = "Funciona sobre el protocolo de transporte TCP";
 choices[56][2] = "Es un protocolo de se&ntilde;alizacion entre los elementos de red y el Gateway";
 choices[56][3] = "El canal de se&ntilde;alizaci&oacute;n RAS se abre antes de que se establezca cualquier otro canal entre puntos extremos H.323";
 answers[56] = 3;
 units[56] = ['110'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 5429. ";
 preguntaids[56] = 5429


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[57]= "58)  Se&ntilde;ale cu&aacute;l de los siguientes no es uno de los contenidos de los certificados cualificados de firma electr&oacute;nica seg&uacute;n el Reglamento (UE) 910/2014";
 choices[57]= new Array();
 choices[57][0] = "El nombre del firmante o un seudo?nimo";
 choices[57][1] = "Los datos de validacio?n de la firma electro?nica";
 choices[57][2] = "La firma electro?nica cualificada o el sello electro?nico cualificado del prestador de servicios de confianza expedidor";
 choices[57][3] = "La localizacio?n de los servicios que se pueden utilizar para consultar el estado de validez del certificado";
 answers[57] = 2;
 units[57] = ['77'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 784. Reglamento 910/2014";
 preguntaids[57] = 784


//  Id pregunta: 3709 Año de creación de pregunta: 2002
 questions[58]= "59)  &iquest;Cu&aacute;les son los objetivos del dise&ntilde;o estructurado?";
 choices[58]= new Array();
 choices[58][0] = "M&aacute;xima portabilidad del sistema, minimizar el coste asociado al mantenimiento, facilitar la prueba, integraci&oacute;n del sistema.";
 choices[58][1] = "M&aacute;xima portabilidad del sistema, minimizar el coste asociado al mantenimiento, facilitar la prueba, modularizaci&oacute;n del sistema.";
 choices[58][2] = "M&aacute;xima inteligibilidad del sistema, minimizar el coste asociado al mantenimiento, facilitar la prueba, modularizaci&oacute;n del sistema.";
 choices[58][3] = "M&aacute;xima inteligibilidad del sistema, minimizar el coste asociado al mantenimiento, facilitar la prueba, integraci&oacute;n del sistema.";
 answers[58] = 3;
 units[58] = ['89'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 3709. ";
 preguntaids[58] = 3709


//  Id pregunta: 132 Año de creación de pregunta: 2016
 questions[59]= "60)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[59]= new Array();
 choices[59][0] = "Por unanimidad.";
 choices[59][1] = "Por mayor&iacute;a cualificada.";
 choices[59][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[59][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[59] = 3;
 units[59] = ['5'];
 blocks[59] = ['A1'];
 comments[59] = "Id Pregunta: 132. Uni&oacute;n Europea";
 preguntaids[59] = 132


//  Id pregunta: 2032 Año de creación de pregunta: 2002
 questions[60]= "61)  &iquest;Cu&aacute;ndo podr&iacute;a utilizarse, en un proceso de decisi&oacute;n multicriterio discreta, el c&aacute;lculo de pesos por el m&eacute;todo de la entrop&iacute;a?:";
 choices[60]= new Array();
 choices[60][0] = "Cuando no se disponga previamente de la puntuaci&oacute;n de las alternativas para cada criterio";
 choices[60][1] = "Cuando el decisor quiera minimizar la subjetividad en la asignaci&oacute;n de pesos";
 choices[60][2] = "Cuando, tras la normalizaci&oacute;n, exista alguna puntuaci&oacute;n nula en alguno de los criterios";
 choices[60][3] = "Cuando el decisor quiera comparar los criterios de dos en dos para fijar mejor su jerarqu&iacute;a";
 answers[60] = 1;
 units[60] = ['38'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 2032. ";
 preguntaids[60] = 2032


//  Id pregunta: 10186 Año de creación de pregunta: 2015
 questions[61]= "62)  La Agenda Digital para Europa, iniciativa de la estrategia Europa 2020 puesta en marcha por la Comisi&oacute;n Europea:";
 choices[61]= new Array();
 choices[61][0] = "Establece la ZUPE (Zona &Uacute;nica de Prestaciones para Empresas), que supondr&aacute; la interconexi&oacute;n de plataformas de apoyo al Emprendedor, permitiendo la presentaci&oacute;n de tr&aacute;mites de inicio de actividad para todo el territorio europeo.";
 choices[61][1] = "Establece medidas para que, en el a&ntilde;o 2020, el 75% de los hogares europeos est&eacute;n abonados a conexiones de internet por encima de los 100 Mbps.";
 choices[61][2] = "Establece el objetivo de equipar a los europeos con un acceso en l&iacute;nea seguro a sus datos m&eacute;dicos en 2017.";
 choices[61][3] = "Propone que, para 2020, los pa&iacute;ses miembros deber&iacute;an duplicar el gasto p&uacute;blico anual total en investigaci&oacute;n y desarrollo de las TIC.";
 answers[61] = 3;
 units[61] = ['16'];
 blocks[61] = ['A3'];
 comments[61] = "Id Pregunta: 10186. Examen TIC A1 2014";
 preguntaids[61] = 10186


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[62]= "63)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[62]= new Array();
 choices[62][0] = "La Ley General Tributaria.";
 choices[62][1] = "La Ley Presupuestaria.";
 choices[62][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[62][3] = "Ninguna de las respuestas es correcta.";
 answers[62] = 0;
 units[62] = ['11'];
 blocks[62] = ['A2'];
 comments[62] = "Id Pregunta: 304. Presupuestos generales";
 preguntaids[62] = 304


//  Id pregunta: 8208 Año de creación de pregunta: 2011
 questions[63]= "64)  Si tenemos las dependencias funcionales (A, B) -&gt; C, B -&gt; D y la siguiente relaci&oacute;n (A, B, C, D) donde (A, B) es la clave candidata. &iquest;Cu&aacute;l seria el resultado de aplicar la 2&ordf; forma normal?";
 choices[63]= new Array();
 choices[63][0] = "(A, B, C), (A, B, D).";
 choices[63][1] = "(A, B, C), (B, D).";
 choices[63][2] = "(A, B, C),  (A, D).";
 choices[63][3] = "Ya est&aacute; en 2FN.";
 answers[63] = 1;
 units[63] = ['60', '61'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 8208. Examen TIC A2 2010 interna";
 preguntaids[63] = 8208


//  Id pregunta: 5326 Año de creación de pregunta: 2006
 questions[64]= "65)  El estandar de seguridad ubicado en la capa de procesamiento de paquetes en lugar de en la capa de aplicaci&oacute;n se llama";
 choices[64]= new Array();
 choices[64][0] = "SSL";
 choices[64][1] = "HTTPS";
 choices[64][2] = "FTP pasivo";
 choices[64][3] = "IPSec";
 answers[64] = 3;
 units[64] = ['120'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 5326. ";
 preguntaids[64] = 5326


//  Id pregunta: 9078 Año de creación de pregunta: 2014
 questions[65]= "66)  Un Datamart:";
 choices[65]= new Array();
 choices[65][0] = "Es una Base de Datos.";
 choices[65][1] = "Es m&aacute;s grande (en volumen de datos) que un Datawarehouse.";
 choices[65][2] = "Usa Sistemas de Gesti&oacute;n de Base de Datos multidimensionales.";
 choices[65][3] = "Todas son falsas.";
 answers[65] = 2;
 units[65] = ['72'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 9078. ";
 preguntaids[65] = 9078


//  Id pregunta: 3865 Año de creación de pregunta: 2002
 questions[66]= "67)  Indicar cu&aacute;l no es un factor de calidad, seg&uacute;n McCall, desde un punto de vista de transici&oacute;n:";
 choices[66]= new Array();
 choices[66][0] = "Reusabilidad";
 choices[66][1] = "Flexibilidad";
 choices[66][2] = "Portabilidad";
 choices[66][3] = "Interoperabilidad";
 answers[66] = 1;
 units[66] = ['93'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 3865. ";
 preguntaids[66] = 3865


//  Id pregunta: 9681 Año de creación de pregunta: 2014
 questions[67]= "68)  Respecto a REST, indique la respuesta correcta:";
 choices[67]= new Array();
 choices[67][0] = "Los m&eacute;todos HEAD, POST, PUT y DELETE definen la interfaz de los recursos.";
 choices[67][1] = "Al igual que SOAP est&aacute; basado en verbos u operaciones para definir la funcionalidad de las aplicaciones.";
 choices[67][2] = "Los servicios web tipo REST permiten el uso de WS-Security.";
 choices[67][3] = "Permiten mayor escalabilidad al no requerir mantenimiento del estado.";
 answers[67] = 3;
 units[67] = ['55'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 9681. ";
 preguntaids[67] = 9681


//  Id pregunta: 6164 Año de creación de pregunta: 2003
 questions[68]= "69)  Las dimensiones del DNI electr&oacute;nico son:";
 choices[68]= new Array();
 choices[68][0] = "85,60 mm de ancho X 53,98 mm de alto";
 choices[68][1] = "8,6 mm de ancho X 5,9 mm de alto";
 choices[68][2] = "60 mm de ancho X 58 mm de alto";
 choices[68][3] = "85,60 mm de alto X 53,98 mm de ancho";
 answers[68] = 0;
 units[68] = ['77'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 6164. ";
 preguntaids[68] = 6164


//  Id pregunta: 3334 Año de creación de pregunta: 2004
 questions[69]= "70)  Respecto a los cuatro tipos de drivers de JDBC, &iquest;Cu&aacute;l de ellos requiere la existencia de un servidor intermedio o middleware?";
 choices[69]= new Array();
 choices[69][0] = "Driver de tipo I";
 choices[69][1] = "Driver de tipo II";
 choices[69][2] = "Driver de tipo III";
 choices[69][3] = "Driver de tipo IV";
 answers[69] = 2;
 units[69] = ['61'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 3334. ";
 preguntaids[69] = 3334


//  Id pregunta: 6735 Año de creación de pregunta: 2009
 questions[70]= "71)  Indique qu&eacute; concepto NO interviene en el m&eacute;todo de ponderaci&oacute;n lineal:";
 choices[70]= new Array();
 choices[70][0] = "Puntuaciones normalizadas";
 choices[70][1] = "Factor de ponderaci&oacute;n de los criterios";
 choices[70][2] = "Coeficiente de concordancia";
 choices[70][3] = "Funci&oacute;n de valor o de evaluaci&oacute;n";
 answers[70] = 2;
 units[70] = ['38'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 6735. MAP 2008 A1";
 preguntaids[70] = 6735


//  Id pregunta: 7336 Año de creación de pregunta: 2010
 questions[71]= "72)  El modelo COCOMO II propone los modelos:";
 choices[71]= new Array();
 choices[71][0] = "Modelo de Composici&oacute;n de la Aplicaci&oacute;n, Dise&ntilde;o Preliminar y Modelo Post-Arquitectura";
 choices[71][1] = "Modelo de Composici&oacute;n de la Aplicaci&oacute;n y Dise&ntilde;o Preliminar";
 choices[71][2] = "Modelo Org&aacute;nico y Semiacoplado";
 choices[71][3] = "Modelo Org&aacute;nico, Semiacoplado y Empotrado";
 answers[71] = 0;
 units[71] = ['93'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 7336. ";
 preguntaids[71] = 7336


//  Id pregunta: 7610 Año de creación de pregunta: 2010
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes es una m&eacute;trica de productividad en la generaci&oacute;n de software seg&uacute;n Pressman?";
 choices[72]= new Array();
 choices[72][0] = "N&uacute;meros de defectos por miles de l&iacute;neas de c&oacute;digo.";
 choices[72][1] = "Tiempo medio de cambio.";
 choices[72][2] = "Puntos de funci&oacute;n.";
 choices[72][3] = "N&uacute;mero de p&eacute;rdidas de integridad.";
 answers[72] = 2;
 units[72] = ['93'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 7610. Map 2006";
 preguntaids[72] = 7610


//  Id pregunta: 6195 Año de creación de pregunta: 2003
 questions[73]= "74)  &iquest;Cu&aacute;l es el modelo conceptual m&aacute;s extendido para los almacenes de datos?";
 choices[73]= new Array();
 choices[73][0] = "Relacional.";
 choices[73][1] = "Multidimensional.";
 choices[73][2] = "Espacial.";
 choices[73][3] = "Temporal.";
 answers[73] = 1;
 units[73] = ['72'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 6195. Examen TIC A Castilla La Mancha 2007";
 preguntaids[73] = 6195


//  Id pregunta: 40 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[74]= new Array();
 choices[74][0] = "Cinco.";
 choices[74][1] = "Dos.";
 choices[74][2] = "Cuatro.";
 choices[74][3] = "Siete.";
 answers[74] = 0;
 units[74] = ['1'];
 blocks[74] = ['A1'];
 comments[74] = "Id Pregunta: 40. Constituci&oacute;n de 1978";
 preguntaids[74] = 40


