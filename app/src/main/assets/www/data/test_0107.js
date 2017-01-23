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
//  Id pregunta: 8783 Año de creación de pregunta: 2013
 questions[0]= "1)  &iquest;Qu&eacute; conjunto de normas estandarizan los sistemas de cableado en clases?";
 choices[0]= new Array();
 choices[0][0] = "EIA/TIA 586";
 choices[0][1] = "SO/EIS DIS 11108";
 choices[0][2] = "EIA/TIA 568";
 choices[0][3] = "ISO/EIS DIS 11801";
 answers[0] = 3;
 units[0] = ['104'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 8783. Examen TIC A2 2011";
 preguntaids[0] = 8783


//  Id pregunta: 10834 Año de creación de pregunta: 2015
 questions[1]= "2)  En relaci&oacute;n con las t&eacute;cnicas de OCR:";
 choices[1]= new Array();
 choices[1][0] = "La ascendente es la porci&oacute;n de un car&aacute;cter que queda por encima de la l&iacute;nea base";
 choices[1][1] = "Un car&aacute;cter es la unidad b&aacute;sica de reconocimiento y est&aacute; siempre formado por una letra";
 choices[1][2] = "La l&iacute;nea base une las descendentes de una fila de letras";
 choices[1][3] = "Una pica equivale a 12 puntos";
 answers[1] = 3;
 units[1] = ['81'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 10834. ";
 preguntaids[1] = 10834


//  Id pregunta: 5743 Año de creación de pregunta: 2007
 questions[2]= "3)  En los equipos CISCO con sistema operativo IOS, ,&iquest;como puede verse la configuraci&oacute;n actual del equipo?";
 choices[2]= new Array();
 choices[2][0] = "a trav&eacute;s del comando show running-config";
 choices[2][1] = "a trav&eacute;s del comando show router-stat";
 choices[2][2] = "a trav&eacute;s del comando show ios-config";
 choices[2][3] = "a trav&eacute;s del comando show ip interfaces";
 answers[2] = 0;
 units[2] = ['104'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 5743. ";
 preguntaids[2] = 5743


//  Id pregunta: 9414 Año de creación de pregunta: 2014
 questions[3]= "4)  De acuerdo a las actividades de M&eacute;trica v.3, se&ntilde;ale la INCORRECTA:";
 choices[3]= new Array();
 choices[3][0] = "La actividad PSI 4 es de Idenficaci&oacute;n de Requisitos";
 choices[3][1] = "La actividad EVS 3 es de Definici&oacute;n de Requisitos";
 choices[3][2] = "La actividad ASI 2 es de Especificaci&oacute;n de Requisitos";
 choices[3][3] = "La actividad DSI 11 es de Establecimineto de Requisitos de Implantaci&oacute;n";
 answers[3] = 2;
 units[3] = ['91'];
 blocks[3] = ['B3'];
 comments[3] = "Id Pregunta: 9414. ";
 preguntaids[3] = 9414


//  Id pregunta: 10799 Año de creación de pregunta: 2015
 questions[4]= "5)  BPEL est&aacute; estandarizado por:";
 choices[4]= new Array();
 choices[4][0] = "BMPI";
 choices[4][1] = "OASIS";
 choices[4][2] = "WfMC";
 choices[4][3] = "W3C";
 answers[4] = 1;
 units[4] = ['55'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 10799. ";
 preguntaids[4] = 10799


//  Id pregunta: 1062 Año de creación de pregunta: 2016
 questions[5]= "6)  El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica:";
 choices[5]= new Array();
 choices[5][0] = "Es el &oacute;rgano de cooperaci&oacute;n interministerial de la Administraci&oacute;n General del Estado en materia de administraci&oacute;n electr&oacute;nica.";
 choices[5][1] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea que canaliza la colaboraci&oacute;n entre la Administraci&oacute;n General del Estado y el resto de pa&iacute;ses de la Uni&oacute;n Europea en materia de administraci&oacute;n electr&oacute;nica.";
 choices[5][2] = "Es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Entidades Locales en materia de administraci&oacute;n electr&oacute;nica.";
 choices[5][3] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea encargado de unificar los criterios en materia de tratamiento y protecci&oacute;n de datos de car&aacute;cter personal en el &aacute;mbito de la Uni&oacute;n Europea.";
 answers[5] = 2;
 units[5] = ['7'];
 blocks[5] = ['A2'];
 comments[5] = "Id Pregunta: 1062. ";
 preguntaids[5] = 1062


//  Id pregunta: 2450 Año de creación de pregunta: 2006
 questions[6]= "7)  Los derechos de explotaci&oacute;n de un programa de ordenador cuando el autor es una persona f&iacute;sica se mantienen como m&aacute;ximo:";
 choices[6]= new Array();
 choices[6][0] = "Durante toda la vida del autor y del heredero leg&iacute;timo de estos derechos";
 choices[6][1] = "Durante toda la vida del autor y cincuenta a&ntilde;os despu&eacute;s de su muerte";
 choices[6][2] = "Durante toda la vida del autor y setenta a&ntilde;os despu&eacute;s de su muerte";
 choices[6][3] = "De forma indefinida mientras no se produzca la cesi&oacute;n de estos derechos por parte del titular de los mismos";
 answers[6] = 2;
 units[6] = ['41'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 2450. ";
 preguntaids[6] = 2450


//  Id pregunta: 10105 Año de creación de pregunta: 2015
 questions[7]= "8)  Se&ntilde;ala la afirmaci&oacute;n INCORRECTA:";
 choices[7]= new Array();
 choices[7][0] = "La tecnolog&iacute;a VDSL permite transmisi&oacute;n asim&eacute;trica o sim&eacute;trica.";
 choices[7][1] = "VDSL utiliza 2 canales para transmisi&oacute;n de datos, uno para subida y el otro para descarga.";
 choices[7][2] = "La tecnolog&iacute;a HFC es una combinaci&oacute;n de cable y fibra &oacute;ptica.";
 choices[7][3] = "La tecnolog&iacute;a FTTH permite que la fibra &oacute;ptica llegue hasta la casa del cliente.";
 answers[7] = 1;
 units[7] = ['106'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 10105. Examen TIC A2 2014";
 preguntaids[7] = 10105


//  Id pregunta: 4039 Año de creación de pregunta: 2003
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes no es un Lenguaje orientado a objetos?";
 choices[8]= new Array();
 choices[8][0] = "Eiffel";
 choices[8][1] = "C++";
 choices[8][2] = "Smalltalk";
 choices[8][3] = "C";
 answers[8] = 3;
 units[8] = ['85'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 4039. ";
 preguntaids[8] = 4039


//  Id pregunta: 419 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[9]= new Array();
 choices[9][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[9][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[9][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[9][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[9] = 0;
 units[9] = ['15'];
 blocks[9] = ['A3'];
 comments[9] = "Id Pregunta: 419. Mercado laboral";
 preguntaids[9] = 419


//  Id pregunta: 1586 Año de creación de pregunta: 2016
 questions[10]= "11)  En un DFD (Diagrama de Flujos de Datos), los flujos de datos que comunican procesos con almacenes pueden ser de diversos tipos. Entre ellos se encuentran los flujos de datos:";
 choices[10]= new Array();
 choices[10][0] = "De iteracci&oacute;n";
 choices[10][1] = "De di&aacute;logo";
 choices[10][2] = "De sincronizaci&oacute;n.";
 choices[10][3] = "De interrelaci&oacute;n.";
 answers[10] = 1;
 units[10] = ['86'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 1586. ";
 preguntaids[10] = 1586


//  Id pregunta: 4723 Año de creación de pregunta: 2002
 questions[11]= "12)  Indicar entre las siguientes normas del IEEE la que trata sobre redes de &aacute;rea metropolitana:";
 choices[11]= new Array();
 choices[11][0] = "802.6";
 choices[11][1] = "802.7";
 choices[11][2] = "802.8";
 choices[11][3] = "802.9";
 answers[11] = 0;
 units[11] = ['112'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 4723. ";
 preguntaids[11] = 4723


//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[12]= new Array();
 choices[12][0] = "La CETIC";
 choices[12][1] = "Los Ministerios";
 choices[12][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[12][3] = "Ninguno de los anteriores";
 answers[12] = 1;
 units[12] = ['19'];
 blocks[12] = ['A4'];
 comments[12] = "Id Pregunta: 471. Estrategia TIC";
 preguntaids[12] = 471


//  Id pregunta: 275 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n el art&iacute;culo 44.3 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los cr&eacute;ditos para la acci&oacute;n protectora en su modalidad no contributiva y universal se especificar&aacute;n:";
 choices[13]= new Array();
 choices[13][0] = "A nivel de secci&oacute;n de programa.";
 choices[13][1] = "A nivel de grupo de programa.";
 choices[13][2] = "Ninguna de las respuestas es correcta.";
 choices[13][3] = "A nivel de programa.";
 answers[13] = 3;
 units[13] = ['11'];
 blocks[13] = ['A2'];
 comments[13] = "Id Pregunta: 275. Presupuestos generales";
 preguntaids[13] = 275


//  Id pregunta: 3214 Año de creación de pregunta: 2003
 questions[14]= "15)  &iquest;Cu&aacute;l de estos procesadores de 64 bits usa la t&eacute;cnica EPIC (&quot;Explicity Parallel Instruction Computing&quot;)?:";
 choices[14]= new Array();
 choices[14][0] = "PowerPC.";
 choices[14][1] = "Alpha.";
 choices[14][2] = "Ultrasparc.";
 choices[14][3] = "Itanium.";
 answers[14] = 3;
 units[14] = ['52'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 3214. Junta Andaluc&iacute;a";
 preguntaids[14] = 3214


//  Id pregunta: 4915 Año de creación de pregunta: 2002
 questions[15]= "16)  La reserva de cualquier frecuencia del dominio p&uacute;blico radioel&eacute;ctrico implica que:";
 choices[15]= new Array();
 choices[15][0] = "No es onerosa para el sujeto obligado";
 choices[15][1] = "Est&aacute; fijada en el Ley General de Presupuestos";
 choices[15][2] = "Seguir&aacute; las leyes de mercado y estimacion de su rentabilidad";
 choices[15][3] = "Las Administraciones P&uacute;blicas no estan exentas de su pago";
 answers[15] = 2;
 units[15] = ['121'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 4915. ";
 preguntaids[15] = 4915


//  Id pregunta: 10397 Año de creación de pregunta: 2015
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital Espa&ntilde;ola?";
 choices[16]= new Array();
 choices[16][0] = "Confianza Digital";
 choices[16][1] = "Mejorar la Administraci&oacute;n Electr&oacute;nica";
 choices[16][2] = "Despliegue de redes r&aacute;pidas y ultrarr&aacute;pidas";
 choices[16][3] = "Interoperabilidad y normas";
 answers[16] = 3;
 units[16] = ['19'];
 blocks[16] = ['A4'];
 comments[16] = "Id Pregunta: 10397. ";
 preguntaids[16] = 10397


//  Id pregunta: 4995 Año de creación de pregunta: 2002
 questions[17]= "18)  Los puentes que evitan el bucle de paquetes cuando hay varios enlaces entre ellos se denominan:";
 choices[17]= new Array();
 choices[17][0] = "Adaptativos y redundantes";
 choices[17][1] = "Tipo 'source routing'";
 choices[17][2] = "Tipo 'spanning tree'";
 choices[17][3] = "De inversi&oacute;n de se&ntilde;ales f&iacute;sicas";
 answers[17] = 2;
 units[17] = ['102'];
 blocks[17] = ['B4'];
 comments[17] = "Id Pregunta: 4995. ";
 preguntaids[17] = 4995


//  Id pregunta: 9166 Año de creación de pregunta: 2014
 questions[18]= "19)  Respecto a las licencias de software libre y su compatibilidad con la GPL, se&ntilde;ale la sentencia correcta:";
 choices[18]= new Array();
 choices[18][0] = "Todas las versiones de la Apache license son incompatibles con las versiones de GPL (v1, v2 y v3).";
 choices[18][1] = "Las versiones de Apache License anteriores a la v2.0 son incompatibles con GPLv3.";
 choices[18][2] = "La GPLv2 no es compatible con la Apache License v2 porque tiene algunos requisitos que no est&aacute;n en esa versi&oacute;n de la Apache License, por ejemplo ciertas disposiciones sobre las indemnizaciones y la terminaci&oacute;n por patentes.";
 choices[18][3] = "Si uso una librer&iacute;a bajo la GPLv3 en un proyecto GPLv2, se puede publicar ese proyecto bajo GPLv2 &uacute;nicamente, ya que solo interact&uacute;a con esa librer&iacute;a mediante mecanismos t&iacute;picos, no copia su c&oacute;digo en el proyecto.";
 answers[18] = 1;
 units[18] = ['66'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 9166. Examen TIC A2 2013";
 preguntaids[18] = 9166


//  Id pregunta: 456 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[19]= new Array();
 choices[19][0] = "Fue elaborada y aprobada por la CETIC";
 choices[19][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[19][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[19][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[19] = 1;
 units[19] = ['19'];
 blocks[19] = ['A4'];
 comments[19] = "Id Pregunta: 456. Estrategia TIC";
 preguntaids[19] = 456


//  Id pregunta: 5113 Año de creación de pregunta: 2003
 questions[20]= "21)  &iquest;En cu&aacute;l de las siguientes especificaciones de medio del est&aacute;ndar IEEE 802.3, el cable, cuando es de tipo coaxial, tiene una impedancia caracter&iacute;stica de 50 Ohmios?:";
 choices[20]= new Array();
 choices[20][0] = "Especificaciones de medio 10BASE2 y 10BASE5.";
 choices[20][1] = "Especificaci&oacute;n de medio 10BASE-FL.";
 choices[20][2] = "Especificaci&oacute;n de medio 10BASE-T.";
 choices[20][3] = "Especificaci&oacute;n de medio 10BROAD36.";
 answers[20] = 0;
 units[20] = ['104'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 5113. Junta Andaluc&iacute;a";
 preguntaids[20] = 5113


//  Id pregunta: 511 Año de creación de pregunta: 2016
 questions[21]= "22)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[21]= new Array();
 choices[21][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[21][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[21][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[21][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[21] = 3;
 units[21] = ['22'];
 blocks[21] = ['A4'];
 comments[21] = "Id Pregunta: 511. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[21] = 511


//  Id pregunta: 3079 Año de creación de pregunta: 2002
 questions[22]= "23)  Un proveedor de servicios OLE DB es:";
 choices[22]= new Array();
 choices[22][0] = "Un componente OLE DB que en realidad no es propietario de los datos, y que puede proveer alg&uacute;n otro servicio";
 choices[22][1] = "Cualquier componente Software que expone sus datos a trav&eacute;s de una interfaz OLE DB";
 choices[22][2] = "Simult&aacute;neamente, un consumidor y un proveedor de datos";
 choices[22][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[22] = 0;
 units[22] = ['63'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 3079. ";
 preguntaids[22] = 3079


//  Id pregunta: 9897 Año de creación de pregunta: 2015
 questions[23]= "24)  La Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas present&oacute; su informe en:";
 choices[23]= new Array();
 choices[23][0] = "Enero de 2013.";
 choices[23][1] = "Junio de 2013.";
 choices[23][2] = "Diciembre de 2013.";
 choices[23][3] = "Enero de 2014.";
 answers[23] = 1;
 units[23] = ['7', '19'];
 blocks[23] = ['A2', 'A4'];
 comments[23] = "Id Pregunta: 9897. ";
 preguntaids[23] = 9897


//  Id pregunta: 10816 Año de creación de pregunta: 2015
 questions[24]= "25)  Camellia es un algoritmo:";
 choices[24]= new Array();
 choices[24][0] = "Sim&eacute;trico de bloque";
 choices[24][1] = "Sim&eacute;trico de flujo";
 choices[24][2] = "Asim&eacute;trico";
 choices[24][3] = "De funci&oacute;n hash";
 answers[24] = 0;
 units[24] = ['76'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 10816. ";
 preguntaids[24] = 10816


//  Id pregunta: 10391 Año de creación de pregunta: 2015
 questions[25]= "26)  &iquest;Qu&eacute; objetivo de porcentaje de i+d marca la estrategia europea 2020 para la Uni&oacute;n Europea?";
 choices[25]= new Array();
 choices[25][0] = "2% del PIB";
 choices[25][1] = "3%del PIB";
 choices[25][2] = "5% del PIB";
 choices[25][3] = "La estrategia Europa 2020 no marca ning&uacute;n objetivo en materia de i+d";
 answers[25] = 1;
 units[25] = ['19'];
 blocks[25] = ['A4'];
 comments[25] = "Id Pregunta: 10391. ";
 preguntaids[25] = 10391


//  Id pregunta: 2189 Año de creación de pregunta: 2002
 questions[26]= "27)  Entre los vocales del Consejo Consultivo de la Agencia de Protecci&oacute;n de Datos existir&aacute;:";
 choices[26]= new Array();
 choices[26][0] = "Un diputado nombrado a propuesta del Congreso de los Diputados y un senador nombrado a propuesta del Senado";
 choices[26][1] = "Un vocal nombrado a propuesta del Consejo Superior de Inform&aacute;tica";
 choices[26][2] = "Un magistrado nombrado a propuesta del Consejo General del Poder Judicial";
 choices[26][3] = "Un abogado del Estado";
 answers[26] = 0;
 units[26] = ['35'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 2189. ";
 preguntaids[26] = 2189


//  Id pregunta: 314 Año de creación de pregunta: 2016
 questions[27]= "28)  A los efectos de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , forman parte del sector p&uacute;blico estatal:";
 choices[27]= new Array();
 choices[27][0] = "Las respuestas a) y b) son correctas.";
 choices[27][1] = "Los organismos aut&oacute;nomos dependientes de la Administraci&oacute;n General del Estado.";
 choices[27][2] = "Las entidades p&uacute;blicas empresariales, dependientes de la Administraci&oacute;n General del Estado, o de cualesquiera otros organismos p&uacute;blicos vinculados o dependientes de ella.";
 choices[27][3] = "Las respuestas a) y b) no son correctas.";
 answers[27] = 0;
 units[27] = ['11'];
 blocks[27] = ['A2'];
 comments[27] = "Id Pregunta: 314. Presupuestos generales";
 preguntaids[27] = 314


//  Id pregunta: 3099 Año de creación de pregunta: 2002
 questions[28]= "29)  Una de las siguientes caracter&iacute;sticas no es com&uacute;n a los discos WORM y WMRA:";
 choices[28]= new Array();
 choices[28][0] = "Poseen una gran capacidad de almacenamiento";
 choices[28][1] = "Son de f&aacute;cil manipulaci&oacute;n y transportabilidad";
 choices[28][2] = "Permiten escribir y borrar datos al igual que un disco magn&eacute;tico";
 choices[28][3] = "Son insensibles frente a las radiaciones electromagn&eacute;ticas";
 answers[28] = 2;
 units[28] = ['53'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 3099. ";
 preguntaids[28] = 3099


//  Id pregunta: 991 Año de creación de pregunta: 2016
 questions[29]= "30)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[29]= new Array();
 choices[29][0] = "un &oacute;rgano superior";
 choices[29][1] = "un &oacute;rgano directivo";
 choices[29][2] = "un &oacute;rgano superior o directivo";
 choices[29][3] = "ninguna es correcta";
 answers[29] = 2;
 units[29] = ['4', '7', '8', '9'];
 blocks[29] = ['A1', 'A2'];
 comments[29] = "Id Pregunta: 991. Ley 40/2015";
 preguntaids[29] = 991


//  Id pregunta: 1321 Año de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ale cual de las siguientes es una t&eacute;cnica de desarrollo seg&uacute;n M&eacute;trica v3:";
 choices[30]= new Array();
 choices[30][0] = "T&eacute;cnicas Matriciales.";
 choices[30][1] = "M&eacute;todo Albrecht.";
 choices[30][2] = "An&aacute;lisis de Impacto.";
 choices[30][3] = "Caminos de Acceso.";
 answers[30] = 0;
 units[30] = ['91'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 1321. ";
 preguntaids[30] = 1321


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[31]= new Array();
 choices[31][0] = "El Ministro de Econom&iacute;a.";
 choices[31][1] = "El Gobierno.";
 choices[31][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[31][3] = "El Presidente del Gobierno.";
 answers[31] = 1;
 units[31] = ['11'];
 blocks[31] = ['A2'];
 comments[31] = "Id Pregunta: 288. Presupuestos generales";
 preguntaids[31] = 288


//  Id pregunta: 9228 Año de creación de pregunta: 2010
 questions[32]= "33)  Ordene de forma decreciente, en relaci&oacute;n al coste en hardware (puertas l&oacute;gicasequivalentes), las siguientes primitivas criptogr&aacute;ficas: funci&oacute;n resumen (ej. MD5 o SHA-1), cifrado asim&eacute;trico (ej. RSA o curvas el&iacute;pticas) y cifrado sim&eacute;trico (ej. AES o DES).";
 choices[32]= new Array();
 choices[32][0] = "Funci&oacute;n resumen, Cifrado asim&eacute;trico, Cifrado sim&eacute;trico.";
 choices[32][1] = "Funci&oacute;n resumen, Cifrado sim&eacute;trico, Cifrado asim&eacute;trico.";
 choices[32][2] = "Cifrado asim&eacute;trico, Cifrado sim&eacute;trico, Funci&oacute;n resumen.";
 choices[32][3] = "Cifrado asim&eacute;trico, Funci&oacute;n resumen, Cifrado sim&eacute;trico.";
 answers[32] = 3;
 units[32] = ['119'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 9228. Examen TIC A1 2013";
 preguntaids[32] = 9228


//  Id pregunta: 9516 Año de creación de pregunta: 2014
 questions[33]= "34)  Se&ntilde;ala las respuestas correctas sobre los objetos java.util.Vector y java.util.Hashtable:";
 choices[33]= new Array();
 choices[33][0] = "Un Vector puede almacenar referencias de objetos y tipos de datos primitivos";
 choices[33][1] = "Un Vector almacena referencias de objetos en el orden en que son a&ntilde;adidas";
 choices[33][2] = "A y B son ciertas";
 choices[33][3] = "La Hashtable almacena referencias de objetos en el orden en que son a&ntilde;adidas";
 answers[33] = 2;
 units[33] = ['64'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 9516. ";
 preguntaids[33] = 9516


//  Id pregunta: 6442 Año de creación de pregunta: 2003
 questions[34]= "35)  Indicar el gestor de contenidos que no es software libre";
 choices[34]= new Array();
 choices[34][0] = "Open CMS";
 choices[34][1] = "Vignette";
 choices[34][2] = "Zope";
 choices[34][3] = "Alfresco";
 answers[34] = 1;
 units[34] = ['99'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 6442. ";
 preguntaids[34] = 6442


//  Id pregunta: 3353 Año de creación de pregunta: 2006
 questions[35]= "36)  Las memorias cach&eacute; sirven para:";
 choices[35]= new Array();
 choices[35][0] = "Representar un sistema de almacenamiento secundario basado en jerarqu&iacute;a.";
 choices[35][1] = "Representar un sistema de almacenamiento auxiliar basado en jerarqu&iacute;a.";
 choices[35][2] = "Representar un sistema de almacenamiento secundario basado en la rapidez.";
 choices[35][3] = "Representar un sistema de almacenamiento basado en la rapidez.";
 answers[35] = 3;
 units[35] = ['52'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 3353. ";
 preguntaids[35] = 3353


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[36]= "37)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[36]= new Array();
 choices[36][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[36][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[36][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[36][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[36] = 0;
 units[36] = ['1'];
 blocks[36] = ['A1'];
 comments[36] = "Id Pregunta: 97. Constituci&oacute;n de 1978";
 preguntaids[36] = 97


//  Id pregunta: 1493 Año de creación de pregunta: 2016
 questions[37]= "38)  En relaci&oacute;n a la accesibilidad a las p&aacute;ginas web de las administraciones p&uacute;blicas, la legislaci&oacute;n actual (Real Decreto 1494/2007, por el que se aprueba el Reglamento sobre las condiciones b&aacute;sicas para el acceso de las personas con discapacidad a las tecnolog&iacute;as, productos y servicios relacionados con la sociedad de la informaci&oacute;n y medios de comunicaci&oacute;n social) obliga a que la informaci&oacute;n disponible deber&aacute; cumplir, sin entrar en excepciones:";
 choices[37]= new Array();
 choices[37][0] = "Las prioridades 1 de la Norma UNE 139803:2004, &uacute;nicamente.";
 choices[37][1] = "Las prioridades 1 y 2 Norma UNE 139803:2004, &uacute;nicamente.";
 choices[37][2] = "Las prioridades 1, 2 y 3 Norma UNE 139803:2004.";
 choices[37][3] = "La ley establece recomendaciones, aunque no impone obligaciones en este sentido.";
 answers[37] = 1;
 units[37] = ['42'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 1493. ";
 preguntaids[37] = 1493


//  Id pregunta: 8398 Año de creación de pregunta: 2011
 questions[38]= "39)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no es una fuente accesible al p&uacute;blico:";
 choices[38]= new Array();
 choices[38][0] = "El padr&oacute;n municipal.";
 choices[38][1] = "Los diarios oficiales.";
 choices[38][2] = "El censo promocional.";
 choices[38][3] = "Los medios de comunicaci&oacute;n";
 answers[38] = 0;
 units[38] = ['35'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 8398. Operador Ayto. Madrid 2010";
 preguntaids[38] = 8398


//  Id pregunta: 10107 Año de creación de pregunta: 2015
 questions[39]= "40)  Uno de los problemas en cuanto a la calidad del servicio (QoS) de una red VoIP es la latencia, se&ntilde;ale su definici&oacute;n correcta:";
 choices[39]= new Array();
 choices[39][0] = "Variaci&oacute;n en el tiempo de llegada de los paquetes, causada por congesti&oacute;n de red, p&eacute;rdida de sincronizaci&oacute;n o por las diferentes rutas seguidas.";
 choices[39][1] = "Es una reflexi&oacute;n retardada de la se&ntilde;al ac&uacute;stica original.";
 choices[39][2] = "El tiempo que tarda un paquete en llegar desde la fuente al destino.";
 choices[39][3] = "P&eacute;rdida que se produce al usar protocolos no orientados a conexi&oacute;n que no reenv&iacute;an paquetes perdidos. Adem&aacute;s tambi&eacute;n se produce por descartes de paquetes que no llegan a tiempo al receptor.";
 answers[39] = 2;
 units[39] = ['110'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 10107. Examen TIC A2 2014";
 preguntaids[39] = 10107


//  Id pregunta: 10252 Año de creación de pregunta: 2015
 questions[40]= "41)  &iquest;Cu&aacute;l NO es una caracter&iacute;stica general de Scrum?";
 choices[40]= new Array();
 choices[40][0] = "Durante cada sprint el equipo crea un incremento de software potencialmente entregable";
 choices[40][1] = "Cada sprint dura de media entre 6 y 12 meses";
 choices[40][2] = "Los elementos del Product Backlog que forman parte del sprint se determinan durante la reuni&oacute;n de Sprint Planning";
 choices[40][3] = "Todas son caracter&iacute;sticas generales de Scrum";
 answers[40] = 1;
 units[40] = ['34'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 10252. Cada sprint suele durar de 15 a 30 d&iacute;as";
 preguntaids[40] = 10252


//  Id pregunta: 8967 Año de creación de pregunta: 2013
 questions[41]= "42)  Se&ntilde;ale la afirmaci&oacute;n falsa con respecto al est&aacute;ndar H.320:";
 choices[41]= new Array();
 choices[41][0] = "Es un est&aacute;ndar para videoconferencia sobre RDSI";
 choices[41][1] = "Utiliza como est&aacute;ndares de cifrado H.233 y H.244";
 choices[41][2] = "Uno de los tama&ntilde;os de cuadro es CIF (352x288)";
 choices[41][3] = "Uno de los tama&ntilde;os de cuadro es QCIF (176x144)";
 answers[41] = 1;
 units[41] = ['122'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 8967. ";
 preguntaids[41] = 8967


//  Id pregunta: 9887 Año de creación de pregunta: 2015
 questions[42]= "43)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece la obligatoriedad de relaci&oacute;n con las AAPP a trav&eacute;s de medios electr&oacute;nicos para:";
 choices[42]= new Array();
 choices[42][0] = "Personas jur&iacute;dicas.";
 choices[42][1] = "Entidades sin personalidad jur&iacute;dica.";
 choices[42][2] = "Notarios y registradores.";
 choices[42][3] = "Todas las anteriores.";
 answers[42] = 3;
 units[42] = ['7', '19'];
 blocks[42] = ['A2', 'A4'];
 comments[42] = "Id Pregunta: 9887. ";
 preguntaids[42] = 9887


//  Id pregunta: 6730 Año de creación de pregunta: 2009
 questions[43]= "44)  &iquest;Qu&eacute; tecnolog&iacute;as podemos utilizar, entre otras, para evitar utilizar c&oacute;digo Java en las p&aacute;ginas JSP?";
 choices[43]= new Array();
 choices[43][0] = "JSTL y EL";
 choices[43][1] = "Scriptlets";
 choices[43][2] = "JavaScript";
 choices[43][3] = "No es posible hacer tal cosa; toda p&aacute;gina JSP debe contener algo de c&oacute;digo Java";
 answers[43] = 0;
 units[43] = ['64'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 6730. ";
 preguntaids[43] = 6730


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[44]= "45)  El Parlamento Europeo celebrar&aacute;:";
 choices[44]= new Array();
 choices[44][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[44][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[44][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[44][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[44] = 0;
 units[44] = ['5'];
 blocks[44] = ['A1'];
 comments[44] = "Id Pregunta: 112. Uni&oacute;n Europea";
 preguntaids[44] = 112


//  Id pregunta: 513 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n la Ley 19/2013 de transparencia, las unidades de informaci&oacute;n en el &aacute;mbito de la AGE (se&ntilde;ale la falsa):";
 choices[45]= new Array();
 choices[45][0] = "Son unidades especializadas que se encargan de recibir y dar tramitaci&oacute;n a las solicitudes de acceso a la informaci&oacute;n.";
 choices[45][1] = "Son unidades especializadas que aseguran la disponibilidad en la respectiva p&aacute;gina web o sede electr&oacute;nica de la informaci&oacute;n cuyo acceso se solicita con m&aacute;s frecuencia.";
 choices[45][2] = "La Oficina de Transparencia y Acceso a la Informaci&oacute;n P&uacute;blica es la unidad de informaci&oacute;n del Ministerio de la Presidencia.";
 choices[45][3] = "Son unidades especializadas en elaborar legislaci&oacute;n en el &aacute;mbito de la transparencia p&uacute;blica.";
 answers[45] = 3;
 units[45] = ['22'];
 blocks[45] = ['A4'];
 comments[45] = "Id Pregunta: 513. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[45] = 513


//  Id pregunta: 9018 Año de creación de pregunta: 2014
 questions[46]= "47)  Indique cual de las siguientes ediciones no corresponde a Windows Server 2012";
 choices[46]= new Array();
 choices[46][0] = "Bussiness";
 choices[46][1] = "Essentials";
 choices[46][2] = "Foundation";
 choices[46][3] = "Standard";
 answers[46] = 0;
 units[46] = ['58'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 9018. Examen TIC A1 2013";
 preguntaids[46] = 9018


//  Id pregunta: 3049 Año de creación de pregunta: 2002
 questions[47]= "48)  Se&ntilde;ale la respuesta falsa. Frente a RAID 1, RAID 5:";
 choices[47]= new Array();
 choices[47][0] = "Es m&aacute;s r&aacute;pido en escritura";
 choices[47][1] = "Utiliza m&aacute;s discos";
 choices[47][2] = "Ofrece menos espacio utilizable en relaci&oacute;n con el tama&ntilde;o total de los discos";
 choices[47][3] = "Todas las respuestas anteriores son falsas";
 answers[47] = 1;
 units[47] = ['53'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 3049. ";
 preguntaids[47] = 3049


//  Id pregunta: 7169 Año de creación de pregunta: 2010
 questions[48]= "49)  En referencia a Sistemas Operativos multiproceso tipo UNIX &iquest;qu&eacute; se entiende por proceso zombi?";
 choices[48]= new Array();
 choices[48][0] = "Un proceso padre que se ha quedado bloqueado a la espera de que sus hijos acaben sus tareas pendientes";
 choices[48][1] = "Un par de procesos en el que el primero est&aacute; a la espera de que el segundo proceso acabe y este segundo est&aacute; la espera de que el primer proceso acabe";
 choices[48][2] = "Un proceso que ha completado su ejecuci&oacute;n pero a&uacute;n contin&uacute;a consumiendo recursos";
 choices[48][3] = "Un proceso hijo que est&aacute; bloqueado a la espera de que el proceso padre le env&iacute;e datos que necesita";
 answers[48] = 2;
 units[48] = ['57'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 7169. Castilla La Mancha 2009";
 preguntaids[48] = 7169


//  Id pregunta: 9797 Año de creación de pregunta: 2015
 questions[49]= "50)  No es un objetivo de Europa 2020:";
 choices[49]= new Array();
 choices[49][0] = "Invertir un 3% en I+D y desarrollar un indicador para su impacto.";
 choices[49][1] = "Reducir el abandono escolar del 20% al 15%.";
 choices[49][2] = "Reducir al menos en 20 millones el n&uacute;mero de personas en situaci&oacute;n o riesgo de pobreza y exclusi&oacute;n social.";
 choices[49][3] = "Reducir las emisiones de gases de efecto invernadero en un 20% desde 1990.";
 answers[49] = 1;
 units[49] = ['19'];
 blocks[49] = ['A4'];
 comments[49] = "Id Pregunta: 9797. ";
 preguntaids[49] = 9797


//  Id pregunta: 3139 Año de creación de pregunta: 2002
 questions[50]= "51)  La ley de Fitt, en el contexto del dise&ntilde;o de interfaces de usuario, nos dice que:";
 choices[50]= new Array();
 choices[50][0] = "si algo del interfaz puede dise&ntilde;arse mal, se dise&ntilde;ar&aacute; mal y el usuario lo rechazar&aacute;";
 choices[50][1] = "con el 20% del trabajo se realiza el 80% de la interfaz";
 choices[50][2] = "con el 80% del dise&ntilde;o se ocupa el 20% del trabajo";
 choices[50][3] = "el tiempo en localizar un objetivo visual en el interfaz es una funci&oacute;n de la distancia y el tama&ntilde;o del objetivo";
 answers[50] = 3;
 units[50] = ['56'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 3139. ";
 preguntaids[50] = 3139


//  Id pregunta: 3161 Año de creación de pregunta: 2002
 questions[51]= "52)  El creador de JAVA es:";
 choices[51]= new Array();
 choices[51][0] = "Microsoft";
 choices[51][1] = "IBM";
 choices[51][2] = "SUN Microsystems";
 choices[51][3] = "CERN";
 answers[51] = 2;
 units[51] = ['64'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 3161. ";
 preguntaids[51] = 3161


//  Id pregunta: 8842 Año de creación de pregunta: 2013
 questions[52]= "53)  Se&ntilde;ale la incorrecta en relaci&oacute;n con HSDPA";
 choices[52]= new Array();
 choices[52][0] = "Utiliza la t&eacute;cnica de HARQ (Hybrid Automatic Repeat Request)";
 choices[52][1] = "Hace uso de una modulaci&oacute;n adaptativa, que cambia seg&uacute;n las condiciones del canal.";
 choices[52][2] = "Existen diferentes versiones de HSDPA que proporcionan diferentes velocidades.";
 choices[52][3] = "Mediante Fast-Packet Scheduling, se asignan espacios de tiempo fijos, por prioridades, haciendo que los usuarios se turnen para que tengan un ancho de banda tambi&eacute;n fijo para la descarga de datos.";
 answers[52] = 3;
 units[52] = ['117'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 8842. ";
 preguntaids[52] = 8842


//  Id pregunta: 7804 Año de creación de pregunta: 2010
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes criptosistemas se corresponde con un criptosistema asim&eacute;trico o de clave p&uacute;blica?";
 choices[53]= new Array();
 choices[53][0] = "IDEA (International Data Encryption Standard).";
 choices[53][1] = "Algoritmo de intercambio de claves de Diffie-Hellman.";
 choices[53][2] = "AES (Advanced Encryption Standard).";
 choices[53][3] = "RC-5.";
 answers[53] = 1;
 units[53] = ['76'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 7804. ";
 preguntaids[53] = 7804


//  Id pregunta: 4597 Año de creación de pregunta: 2002
 questions[54]= "55)  &iquest;Qu&eacute; afirmaci&oacute;n de las siguientes es verdadera en relaci&oacute;n con las funciones de conexi&oacute;n del modelo OSI?";
 choices[54]= new Array();
 choices[54][0] = "El multiplexado es la conexi&oacute;n de varias conexiones de nivel N en una conexi&oacute;n de nivel N-1";
 choices[54][1] = "La concatenaci&oacute;n consiste en unir varias N-PDU en una (N-1)PDU";
 choices[54][2] = "La segmentaci&oacute;n consiste en dividir una N-SDU en varias (N-1)SDU";
 choices[54][3] = "El reensamblado es la operaci&oacute;n contraria a la concatenaci&oacute;n";
 answers[54] = 0;
 units[54] = ['105'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 4597. ";
 preguntaids[54] = 4597


//  Id pregunta: 6432 Año de creación de pregunta: 2003
 questions[55]= "56)  La medida del n&uacute;mero de bits utilizados para definir cada p&iacute;xel es";
 choices[55]= new Array();
 choices[55][0] = "Resoluci&oacute;n";
 choices[55][1] = "&Aacute;rea de imagen";
 choices[55][2] = "Profundidad de bit o de color";
 choices[55][3] = "Ninguna es verdadera";
 answers[55] = 2;
 units[55] = ['80'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 6432. ";
 preguntaids[55] = 6432


//  Id pregunta: 7455 Año de creación de pregunta: 2010
 questions[56]= "57)  ASCII es el acr&oacute;nimo de:";
 choices[56]= new Array();
 choices[56][0] = "American Standard Code for Information Integration";
 choices[56][1] = "Alliance Standard Code Interchange Integration";
 choices[56][2] = "American Standard Code for Information Interchange";
 choices[56][3] = "All sugar can injure igloos";
 answers[56] = 2;
 units[56] = ['76'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 7455. ";
 preguntaids[56] = 7455


//  Id pregunta: 352 Año de creación de pregunta: 2016
 questions[57]= "58)  Seg&uacute;n la Ley 39/2006, de Promoci&oacute;n de Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, define el Grado II - Dependencia severa como: cuando la persona necesita ayuda para realizar varias actividades b&aacute;sicas de la vida diaria&hellip;";
 choices[57]= new Array();
 choices[57][0] = "2 o 3 veces al d&iacute;a, pero no quiere el apoyo permanente de un cuidador o tiene necesidades de apoyo extenso para su autonom&iacute;a personal.";
 choices[57][1] = "varias veces al d&iacute;a y, por su p&eacute;rdida total de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, necesita el apoyo indispensable y continuo de otra persona o tiene necesidades de apoyo generalizado para su autonom&iacute;a personal.";
 choices[57][2] = "al menos una vez al d&iacute;a o tiene necesidades de apoyo intermitente o limitado para su autonom&iacute;a personal.";
 choices[57][3] = "muchas veces al d&iacute;a y necesita el apoyo de constante de un cuidador.";
 answers[57] = 0;
 units[57] = ['14'];
 blocks[57] = ['A3'];
 comments[57] = "Id Pregunta: 352. AGE A2 2015";
 preguntaids[57] = 352


//  Id pregunta: 8854 Año de creación de pregunta: 2013
 questions[58]= "59)  &iquest;A qu&eacute; &aacute;rea pertenece generalmente el departamento de microinform&aacute;tica?";
 choices[58]= new Array();
 choices[58][0] = "Sistemas";
 choices[58][1] = "Log&iacute;stica";
 choices[58][2] = "Comunicaciones";
 choices[58][3] = "Seguridad";
 answers[58] = 0;
 units[58] = ['30'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 8854. ";
 preguntaids[58] = 8854


//  Id pregunta: 5862 Año de creación de pregunta: 2009
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes sistemas de telefon&iacute;a se dise&ntilde;&oacute; para trabajar en espacios reducidos y altas densidades de tr&aacute;fico?";
 choices[59]= new Array();
 choices[59][0] = "GSM 900";
 choices[59][1] = "TACS";
 choices[59][2] = "DECT";
 choices[59][3] = "PAS";
 answers[59] = 2;
 units[59] = ['117'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 5862. ";
 preguntaids[59] = 5862


//  Id pregunta: 9984 Año de creación de pregunta: 2015
 questions[60]= "61)  La direcci&oacute;n electr&oacute;nica habilitada para la pr&aacute;ctica de notificaciones regulada en el Real Decreto 1671/2009, por el que se desarrolla parcialmente la Ley 11/2007, tendr&aacute; vigencia indefinida excepto cuando no se utilice para la pr&aacute;ctica de notificaciones por el transcurso de:";
 choices[60]= new Array();
 choices[60][0] = "36 meses.";
 choices[60][1] = "60 meses.";
 choices[60][2] = "30 meses.";
 choices[60][3] = "24 meses.";
 answers[60] = 0;
 units[60] = ['7'];
 blocks[60] = ['A2'];
 comments[60] = "Id Pregunta: 9984. Examen TIC A2 2014";
 preguntaids[60] = 9984


//  Id pregunta: 1432 Año de creación de pregunta: 2016
 questions[61]= "62)  El art&iacute;culo 69 de la Constituci&oacute;n Espa&ntilde;ola indica que el Senado es la C&aacute;mara de representaci&oacute;n territorial y que a cada provincia le corresponden:";
 choices[61]= new Array();
 choices[61][0] = "Cuatro Senadores y las poblaciones de Ceuta y Melilla estar&aacute;n representadas cada una de ellas por dos Senadores.";
 choices[61][1] = "La ley distribuir&aacute; el n&uacute;mero total de Senadores, asignando una representaci&oacute;n m&iacute;nima inicial a cada circunscripci&oacute;n y distribuyendo los dem&aacute;s en proporci&oacute;n a la poblaci&oacute;n.";
 choices[61][2] = "Dos Senadores y las poblaciones de Ceuta y Melilla estar&aacute;n representadas cada una de ellas por un Senador.";
 choices[61][3] = "Cuatro Senadores y las poblaciones de Ceuta y Melilla estar&aacute;n representadas cada una de ellas por un Senador.";
 answers[61] = 0;
 units[61] = ['1'];
 blocks[61] = ['A1'];
 comments[61] = "Id Pregunta: 1432. ";
 preguntaids[61] = 1432


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[62]= "63)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[62]= new Array();
 choices[62][0] = "A los ministros.";
 choices[62][1] = "Las respuestas a) y b) son correctas.";
 choices[62][2] = "Las respuestas a) y b) no son correctas.";
 choices[62][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[62] = 1;
 units[62] = ['11'];
 blocks[62] = ['A2'];
 comments[62] = "Id Pregunta: 279. Presupuestos generales";
 preguntaids[62] = 279


//  Id pregunta: 5329 Año de creación de pregunta: 2006
 questions[63]= "64)  Cuando multitud de sistemas atacan un &uacute;nico sistema provocando su caida, estamos ante";
 choices[63]= new Array();
 choices[63][0] = "Un ataque de denegaci&oacute;n de servicio (DoS)";
 choices[63][1] = "Echelon, una red global de espias";
 choices[63][2] = "Un ataque distribuido de denegaci&oacute;n de servicio (DDoS)";
 choices[63][3] = "Un ataque de ingenier&iacute;a social";
 answers[63] = 2;
 units[63] = ['119'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 5329. ";
 preguntaids[63] = 5329


//  Id pregunta: 7003 Año de creación de pregunta: 2010
 questions[64]= "65)  Una de las tareas de los Analistas en la gesti&oacute;n del proceso de desarrollo es:";
 choices[64]= new Array();
 choices[64][0] = "Dar seguimiento al plan de trabajo y corregir las desviaciones a tiempo";
 choices[64][1] = "Construir el c&oacute;digo que dar&aacute; lugar al producto resultante";
 choices[64][2] = "Fijar el calendario de hitos y entregas";
 choices[64][3] = "Mantener entrevistas y sesiones de trabajo con los responsables de la organizaci&oacute;n y los usuarios";
 answers[64] = 3;
 units[64] = ['84'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 7003. TIC-B 2009 bloque desarrollo";
 preguntaids[64] = 7003


//  Id pregunta: 4119 Año de creación de pregunta: 2003
 questions[65]= "66)  Indique la afirmaci&oacute;n verdadera:";
 choices[65]= new Array();
 choices[65][0] = "La informaci&oacute;n recogida por la c&eacute;lula fotoel&eacute;ctrica del esc&aacute;ner es de tipo anal&oacute;gica.";
 choices[65][1] = "En el caso de los esc&aacute;neres de color, el sistema de detecci&oacute;n consiste en separar los componentes de color en sus valores b&aacute;sicos: rojo, verde y azul.";
 choices[65][2] = "La exploraci&oacute;n se realiza mediante c&eacute;lulas fotoel&eacute;ctricas o fotodiodos y el resultado es una informaci&oacute;n que hay que digitalizar antes de que se pueda transmitir al ordenador, que es capaz de procesarla mediante sistemas gr&aacute;ficos y software especial.";
 choices[65][3] = "Todas las anteriores.";
 answers[65] = 3;
 units[65] = ['80'];
 blocks[65] = ['B2'];
 comments[65] = "Id Pregunta: 4119. ";
 preguntaids[65] = 4119


//  Id pregunta: 2329 Año de creación de pregunta: 2003
 questions[66]= "67)  &iquest;Qui&eacute;n es responsable de editar el repertorio de los ficheros inscritos en el registro de protecci&oacute;n de datos?";
 choices[66]= new Array();
 choices[66][0] = "Registro General de Protecci&oacute;n de Datos";
 choices[66][1] = "Inspecci&oacute;n de Datos";
 choices[66][2] = "Secretar&iacute;a General";
 choices[66][3] = "Ninguno de los anteriores";
 answers[66] = 2;
 units[66] = ['35'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 2329. Pregunta similar a la del ex&aacute;men de SS del 2003. Real Decreto 428/1993";
 preguntaids[66] = 2329


//  Id pregunta: 1976 Año de creación de pregunta: 2016
 questions[67]= "68)  Podr&aacute;n ser objeto de tramitaci&oacute;n urgente regulada en el art. 96 de la Ley de Contratos del Sector P&uacute;blico:";
 choices[67]= new Array();
 choices[67][0] = "Los contratos cuya celebraci&oacute;n responda a una necesidad inaplazable o cuya adjudicaci&oacute;n sea preciso acelerar por razones de inter&eacute;s p&uacute;blico, previa declaraci&oacute;n de urgencia hecha por el &oacute;rgano de contrataci&oacute;n, debidamente motivada.";
 choices[67][1] = "Los contratos en los que la Administraci&oacute;n tenga que actuar de manera inmediata a causa de acontecimientos catastr6ficos, de situaciones que supongan grave peligro o de necesidades que afectan a la defensa nacional.";
 choices[67][2] = "Los contratos de obras sujetos a regulaci&oacute;n armonizada.";
 choices[67][3] = "Ninguna de las respuestas anteriores es correcta,";
 answers[67] = 0;
 units[67] = ['10'];
 blocks[67] = ['A2'];
 comments[67] = "Id Pregunta: 1976. ";
 preguntaids[67] = 1976


//  Id pregunta: 634 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Que servicio es un canal para el pago electr&oacute;nico de tasas, tributos o cualquier ingreso p&uacute;blico de forma telem&aacute;tica?";
 choices[68]= new Array();
 choices[68][0] = "Pasarela de pagos del cat&aacute;logo de la Administraci&oacute;n digital";
 choices[68][1] = "SPT de red.es";
 choices[68][2] = "Ambos";
 choices[68][3] = "ninguno";
 answers[68] = 1;
 units[68] = ['47'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 634. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[68] = 634


//  Id pregunta: 1421 Año de creación de pregunta: 2016
 questions[69]= "70)  Todos tienen derecho a sindicarse libremente. La ley podr&aacute; limitar o exceptuar el ejercicio de este derecho, seg&uacute;n el art&iacute;culo 28 de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[69]= new Array();
 choices[69][0] = "A las Fuerzas o Institutos armados.";
 choices[69][1] = "A los Cuerpos o Fuerzas armadas.";
 choices[69][2] = "A los Institutos sometidos a disciplina militar.";
 choices[69][3] = "A los funcionarios p&uacute;blicos.";
 answers[69] = 0;
 units[69] = ['1'];
 blocks[69] = ['A1'];
 comments[69] = "Id Pregunta: 1421. ";
 preguntaids[69] = 1421


//  Id pregunta: 4094 Año de creación de pregunta: 2003
 questions[70]= "71)  La t&eacute;cnica de puntos de funci&oacute;n es una t&eacute;cnica para determinar";
 choices[70]= new Array();
 choices[70][0] = "La magnitud de un proyecto inform&aacute;tico y su probable coste";
 choices[70][1] = "La calidad de una aplicaci&oacute;n SW y la tase de errores prevista";
 choices[70][2] = "La amigabilidad de un interfaz y la previsi&oacute;n de errores de usuario";
 choices[70][3] = "La seguridad de una aplicaci&oacute;n y su riesgo de intrusi&oacute;n";
 answers[70] = 0;
 units[70] = ['94'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 4094. ";
 preguntaids[70] = 4094


//  Id pregunta: 5582 Año de creación de pregunta: 2007
 questions[71]= "72)  las diferencias principales entre el cable no apantallado UTP tipo 3 y el UTP tipo 5 es que";
 choices[71]= new Array();
 choices[71][0] = "UTP-3 incluye tres pares en un mismo conducto aislante, y UTP-5, cinco pares.";
 choices[71][1] = "UTP-5 es m&aacute;s trenzado por unidad de longitud que UTP-3.";
 choices[71][2] = "UTP-5 utiliza conectores RJ45, y UTP-3 utiliza RJ43.";
 choices[71][3] = "UTP-3 tiene m&aacute;s capacidad (ancho de banda), y consigue mayores velocidades que UTP-5.";
 answers[71] = 1;
 units[71] = ['104'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 5582. ";
 preguntaids[71] = 5582


//  Id pregunta: 5182 Año de creación de pregunta: 2003
 questions[72]= "73)  Registro basado en XML para listar servicios Web que se ponen a disposici&oacute;n de otros";
 choices[72]= new Array();
 choices[72][0] = "UDDI";
 choices[72][1] = "WSDL";
 choices[72][2] = "SOAP";
 choices[72][3] = "JAXP";
 answers[72] = 0;
 units[72] = ['74'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 5182. ";
 preguntaids[72] = 5182


//  Id pregunta: 9451 Año de creación de pregunta: 2014
 questions[73]= "74)  La Ley 34/2002, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, en relaci&oacute;n a la imposici&oacute;n de Sanciones indica";
 choices[73]= new Array();
 choices[73][0] = "El &oacute;rgano sancionador establecer&aacute; la cuant&iacute;a de la sanci&oacute;n aplicando la escala relativa a la clase de infracciones que preceda inmediatamente en gravedad a aquella en que se integra la considerada cuando el infractor haya reconocido espont&aacute;neamente su culpabilidad.";
 choices[73][1] = "La cuant&iacute;a de las multas que se impongan se graduar&aacute; atendiendo a la adhesi&oacute;n a un c&oacute;digo de conducta o a un sistema de autorregulaci&oacute;n publicitaria aplicable respecto a la infracci&oacute;n cometida.";
 choices[73][2] = "La cuant&iacute;a de las multas que se impongan se graduar&aacute; atendiendo al plazo de tiempo durante el que se haya venido cometiendo la infracci&oacute;n";
 choices[73][3] = "Todas son verdaderas";
 answers[73] = 3;
 units[73] = ['19'];
 blocks[73] = ['A4'];
 comments[73] = "Id Pregunta: 9451. ";
 preguntaids[73] = 9451


//  Id pregunta: 2513 Año de creación de pregunta: 2004
 questions[74]= "75)  De acuerdo con lo establecido en la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, m&aacute;s conocida como LSSI, los contratos celebrados por v&iacute;a electr&oacute;nica:";
 choices[74]= new Array();
 choices[74][0] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que act&uacute;e un tercero como testigo";
 choices[74][1] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que a posteriori se ratifiquen ante notario o registrador";
 choices[74][2] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que en los mismos intervenga un abogado o procurador";
 choices[74][3] = "Producir&aacute;n todos los efectos previstos por el ordenamiento jur&iacute;dico siempre que haya consentimiento y el resto de requisitos necesarios para su validez como cualquier otro contrato";
 answers[74] = 3;
 units[74] = ['19'];
 blocks[74] = ['A4'];
 comments[74] = "Id Pregunta: 2513. Examen TIC MAP B 2004";
 preguntaids[74] = 2513


