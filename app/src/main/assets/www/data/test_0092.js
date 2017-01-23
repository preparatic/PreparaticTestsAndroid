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
//  Id pregunta: 1887 Año de creación de pregunta: 2016
 questions[0]= "1)  Cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[0]= new Array();
 choices[0][0] = "IPSEC es utilizada para el establecimiento de t&uacute;neles seguros a trav&eacute;s de Internet";
 choices[0][1] = "IPSEC se comporta igual con Ipv4 que con Ipv6";
 choices[0][2] = "Con IPSEC se garantiza la integridad y la autenticidad, siendo la confidencialidad opcional";
 choices[0][3] = "Cada conexi&oacute;n con IPSEC requiere de dos SA para que sea bidireccional";
 answers[0] = 1;
 units[0] = ['119'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 1887. ";
 preguntaids[0] = 1887


//  Id pregunta: 3047 Año de creación de pregunta: 2002
 questions[1]= "2)  Se&ntilde;ale la respuesta falsa. El lenguaje C:";
 choices[1]= new Array();
 choices[1][0] = "Surgi&oacute; del lenguaje B.";
 choices[1][1] = "Es procedural.";
 choices[1][2] = "Fue dise&ntilde;ado por Dennis Ritchie.";
 choices[1][3] = "Es fuertemente tipado.";
 answers[1] = 3;
 units[1] = ['89'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 3047. ";
 preguntaids[1] = 3047


//  Id pregunta: 6752 Año de creación de pregunta: 2009
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes paquetes software se usa para construir grids?:";
 choices[2]= new Array();
 choices[2][0] = "Globus Toolkit";
 choices[2][1] = "Grid Squema Toolkit";
 choices[2][2] = "EYEE Toolkit";
 choices[2][3] = "WS-DAI";
 answers[2] = 0;
 units[2] = ['49'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 6752. MAP 2008 A1";
 preguntaids[2] = 6752


//  Id pregunta: 1023 Año de creación de pregunta: 2016
 questions[3]= "4)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[3]= new Array();
 choices[3][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[3][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[3][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[3][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[3] = 0;
 units[3] = ['4', '7', '8', '9'];
 blocks[3] = ['A1', 'A2'];
 comments[3] = "Id Pregunta: 1023. Ley 40/2015";
 preguntaids[3] = 1023


//  Id pregunta: 6496 Año de creación de pregunta: 2003
 questions[4]= "5)  En una red de CATV &iquest;cu&aacute;l es el rango de frecuencias que se utiliza en sentido ascendente para el envio de informaci&oacute;n de usuario a cabecera?";
 choices[4]= new Array();
 choices[4][0] = "De 55 a 150";
 choices[4][1] = "De 550 a 860";
 choices[4][2] = "De 50 a 550";
 choices[4][3] = "De 5 a 50";
 answers[4] = 3;
 units[4] = ['115'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 6496. ";
 preguntaids[4] = 6496


//  Id pregunta: 10913 Año de creación de pregunta: 2015
 questions[5]= "6)  &iquest;C&oacute;mo se puede mejorar la cancelaci&oacute;n de campo magn&eacute;tico en cables UTP?";
 choices[5]= new Array();
 choices[5][0] = "Aumentando el n&uacute;mero de vueltas en cada par de hilos";
 choices[5][1] = "Disminuir el n&uacute;mero de cables que se utilizan para transportar datos";
 choices[5][2] = "Aumentando el espesor del recubrimiento de PVC que encierra todos los pares de hilo";
 choices[5][3] = "Aumentando el espesor de los hilos de cobre";
 answers[5] = 0;
 units[5] = ['104'];
 blocks[5] = ['B4'];
 comments[5] = "Id Pregunta: 10913. ";
 preguntaids[5] = 10913


//  Id pregunta: 2475 Año de creación de pregunta: 2009
 questions[6]= "7)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, se deber&aacute;n retener los datos de conexi&oacute;n y tr&aacute;fico por un periodo m&aacute;ximo de:";
 choices[6]= new Array();
 choices[6][0] = "3 meses";
 choices[6][1] = "6 meses";
 choices[6][2] = "12 meses";
 choices[6][3] = "2 a&ntilde;os";
 answers[6] = 3;
 units[6] = ['19'];
 blocks[6] = ['A4'];
 comments[6] = "Id Pregunta: 2475. ";
 preguntaids[6] = 2475


//  Id pregunta: 3895 Año de creación de pregunta: 2002
 questions[7]= "8)  El nivel b&aacute;sico de comprensi&oacute;n que determina el n&uacute;mero preciso de sonidos con valor distinto es el nivel:";
 choices[7]= new Array();
 choices[7][0] = "Ac&uacute;stico";
 choices[7][1] = "Fon&eacute;tico";
 choices[7][2] = "Fonol&oacute;gico";
 choices[7][3] = "L&eacute;xico-sint&aacute;ctico";
 answers[7] = 2;
 units[7] = ['81'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 3895. ";
 preguntaids[7] = 3895


//  Id pregunta: 3860 Año de creación de pregunta: 2002
 questions[8]= "9)  Indicar aquella que no es una tarea del departamento de calidad:";
 choices[8]= new Array();
 choices[8][0] = "Desarrollo de pol&iacute;ticas, procedimientos y normas";
 choices[8][1] = "Certificaci&oacute;n y prueba del software";
 choices[8][2] = "Planificar la estrategia de la organizaci&oacute;n";
 choices[8][3] = "Auditor&iacute;as, revisiones e inspecciones";
 answers[8] = 2;
 units[8] = ['92', '93'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 3860. ";
 preguntaids[8] = 3860


//  Id pregunta: 9196 Año de creación de pregunta: 2014
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de una DMZ (DeMilitarized Zone) o red perimetral pone en riesgo nuestra red interna?";
 choices[9]= new Array();
 choices[9][0] = "Las conexiones desde la red interna o privada a la DMZ est&aacute;n permitidas.";
 choices[9][1] = "Las conexiones desde la red externa o p&uacute;blica a la DMZ est&aacute;n permitidas.";
 choices[9][2] = "Las conexiones desde la DMZ a la red interna o privada est&aacute;n permitidas.";
 choices[9][3] = "Las conexiones desde la DMZ a la red externa o p&uacute;blica est&aacute;n permitidas.";
 answers[9] = 2;
 units[9] = ['119'];
 blocks[9] = ['B4'];
 comments[9] = "Id Pregunta: 9196. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[9] = 9196


//  Id pregunta: 10693 Año de creación de pregunta: 2015
 questions[10]= "11)  &iquest;Cu&aacute;les de los siguientes NO es un documento emitido por el European Telecomunication Standard Institute (ETSI)?";
 choices[10]= new Array();
 choices[10][0] = "ENV, normas experimentales";
 choices[10][1] = "ES, Normas ETSI";
 choices[10][2] = "IT, Industrial Agreement";
 choices[10][3] = "HS, Normas armonizadas";
 answers[10] = 2;
 units[10] = ['48'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 10693. ";
 preguntaids[10] = 10693


//  Id pregunta: 6167 Año de creación de pregunta: 2003
 questions[11]= "12)  Una multa de 60.000 euros podr&iacute;a corresponder, seg&uacute;n la ley de firma electr&oacute;nica, a la comisi&oacute;n de una infracci&oacute;n:";
 choices[11]= new Array();
 choices[11][0] = "Muy grave";
 choices[11][1] = "Grave";
 choices[11][2] = "Leve";
 choices[11][3] = "No est&aacute; tipificado tal importe";
 answers[11] = 1;
 units[11] = ['19'];
 blocks[11] = ['A4'];
 comments[11] = "Id Pregunta: 6167. Ley 59/2003, art&iacute;culo 32";
 preguntaids[11] = 6167


//  Id pregunta: 343 Año de creación de pregunta: 2016
 questions[12]= "13)  El sector que tiene un mayor peso en el PIB espa&ntilde;ol es el:";
 choices[12]= new Array();
 choices[12][0] = "Primario, que incluye la agricultura y la pesca";
 choices[12][1] = "Secundario, compuesto por los sectores industrial, de la energ&iacute;a y de la construcci&oacute;n";
 choices[12][2] = "Minero, junto con las exportaciones de comercio";
 choices[12][3] = "Servicios";
 answers[12] = 3;
 units[12] = ['12'];
 blocks[12] = ['A3'];
 comments[12] = "Id Pregunta: 343. Modelo econ&oacute;mico";
 preguntaids[12] = 343


//  Id pregunta: 1895 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes aseveraciones es FALSA?:";
 choices[13]= new Array();
 choices[13][0] = "EI modelo EFQM de Excelencia punt&uacute;a m&aacute;s los procesos que las pol&iacute;ticas y estrategias";
 choices[13][1] = "En el modelo EFQM de Excelencia, en el apartado de los resultados, solo se tiene en cuenta los beneficios empresariales";
 choices[13][2] = "Uno de los ocho principios en que se basan las normas de la familia ISO 9000:2000 es &quot;el enfoque basado en procesos&rdquo;";
 choices[13][3] = "La ISO 9004:2000 no establece los requisitos que debe cumplir un sistema de calidad de certificaci&oacute;n.";
 answers[13] = 1;
 units[13] = ['98'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 1895. ";
 preguntaids[13] = 1895


//  Id pregunta: 4142 Año de creación de pregunta: 2003
 questions[14]= "15)  Suponiendo la existencia de un sistema de copias de seguridad, para restaurar la informaci&oacute;n perdida se puede:";
 choices[14]= new Array();
 choices[14][0] = "S&oacute;lo se necesita la copia normal m&aacute;s reciente m&aacute;s la &uacute;ltima copia de seguridad diaria";
 choices[14][1] = "S&oacute;lo se necesita la &uacute;ltima copia de seguridad normal y todas las copias de seguridad diferencial";
 choices[14][2] = "S&oacute;lo se necesita la &uacute;ltima copia de seguridad normal y la &uacute;ltima copia de seguridad incremental";
 choices[14][3] = "Todas las respuestas anteriores son incorrectas";
 answers[14] = 3;
 units[14] = ['100'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 4142. ";
 preguntaids[14] = 4142


//  Id pregunta: 4639 Año de creación de pregunta: 2002
 questions[15]= "16)  10BaseT es:";
 choices[15]= new Array();
 choices[15][0] = "Un tipo de modem primario";
 choices[15][1] = "Una variante del est&aacute;ndar IEEE 802.3 para trabajar sobre pares trenzados";
 choices[15][2] = "Un m&eacute;todo de acceso en contenci&oacute;n";
 choices[15][3] = "Un m&eacute;todo de acceso por paso de testigo";
 answers[15] = 1;
 units[15] = ['104'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 4639. ";
 preguntaids[15] = 4639


//  Id pregunta: 9895 Año de creación de pregunta: 2015
 questions[16]= "17)  Seg&uacute;n la Ley 39/2015, en relaci&oacute;n a la firma electr&oacute;nica.";
 choices[16]= new Array();
 choices[16][0] = "Es necesaria para acreditar la identidad en toda actuaci&oacute;n de un procedimiento administrativo.";
 choices[16][1] = "Con car&aacute;cter general, para realizar cualquier actuaci&oacute;n prevista en el procedimiento administrativo, ser&aacute; suficiente con que los interesados acrediten previamente su identidad a trav&eacute;s de cualquiera de los medios de identificaci&oacute;n previstos en la Ley.";
 choices[16][2] = "Solo es necesaria para: formular solicitudes, presentar declaraciones responsables o comunicaciones, interponer recursos y desistir de acciones.";
 choices[16][3] = "Solo es necesaria para: formular solicitudes, presentar declaraciones responsables o comunicaciones e interponer recursos.";
 answers[16] = 1;
 units[16] = ['7', '19'];
 blocks[16] = ['A2', 'A4'];
 comments[16] = "Id Pregunta: 9895. ";
 preguntaids[16] = 9895


//  Id pregunta: 1889 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l es la mejor definici&oacute;n para el concepto de Benchmarking?";
 choices[17]= new Array();
 choices[17][0] = "Proceso para evaluar comparativamente los productos, servicios y procesos de trabajo en organizaciones";
 choices[17][1] = "Procedimiento para la comparaci&oacute;n de precios de los servicios prestados por las organizaciones";
 choices[17][2] = "Proceso para el establecimiento de objetivos de control en el manejo y uso de las TIC";
 choices[17][3] = "Procedimientos para proporcionar la informaci&oacute;n que la empresa requiere para lograr sus objetivos";
 answers[17] = 0;
 units[17] = ['39'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 1889. ";
 preguntaids[17] = 1889


//  Id pregunta: 974 Año de creación de pregunta: 2016
 questions[18]= "19)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[18]= new Array();
 choices[18][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[18][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[18][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[18][3] = "todas son correctas";
 answers[18] = 1;
 units[18] = ['4', '7', '8', '9'];
 blocks[18] = ['A1', 'A2'];
 comments[18] = "Id Pregunta: 974. Ley 40/2015";
 preguntaids[18] = 974


//  Id pregunta: 8123 Año de creación de pregunta: 2011
 questions[19]= "20)  El IVR (lnteractive Voice Response), para brindar mejores servicios involucra otras tecnolog&iacute;as, indicar la ERR&Oacute;NEA:";
 choices[19]= new Array();
 choices[19][0] = "DTMF (Dual Tone Multi Frequency) es la tecnolog&iacute;a de tonos utilizada para el marcado.";
 choices[19][1] = "TTS (Text To Speech) le da capacidad de transformar texto a audio que escucha el operador.";
 choices[19][2] = "ASR (Reconocimiento de Voz) le da la capacidad de reconocer las palabras del usuario y aceptarlas como &oacute;rdenes.";
 choices[19][3] = "MSCML (Media Server Control Markup Language): lo que le permite controlar cualquier Media Resource Function (MRF).";
 answers[19] = 3;
 units[19] = ['81'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 8123. Examen TIC A2 2010";
 preguntaids[19] = 8123


//  Id pregunta: 7124 Año de creación de pregunta: 2010
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes reglas no deben cumplir los expedientes electr&oacute;nicos que deban ser objeto de remisi&oacute;n o puesta a disposici&oacute;n, de acuerdo a lo establecido en el RD 1671/2009?";
 choices[20]= new Array();
 choices[20][0] = "El foliado de los expedientes electr&oacute;nicos se llevar&aacute; a cabo mediante un &iacute;ndice electr&oacute;nico";
 choices[20][1] = "Los expedientes electr&oacute;nicos dispondr&aacute;n de un c&oacute;digo que permita su identificaci&oacute;n un&iacute;voca por cualquier &oacute;rgano de la Administraci&oacute;n en un entorno de intercambio interadministrativo.";
 choices[20][2] = "Con el fin de garantizar la seguridad de los expedientes, tanto su almacenamiento como las especificaciones de los servicios de remisi&oacute;n y puesta a disposici&oacute;n se sujetar&aacute;n a lo que se establezca al respecto por el Esquema Nacional de Seguridad.";
 choices[20][3] = "Los documentos que se integran en el expediente electr&oacute;nico se ajustar&aacute;n al formato o formatos de larga duraci&oacute;n, accesibles en los t&eacute;rminos que determine el Esquema Nacional de Interoperabilidad.";
 answers[20] = 2;
 units[20] = ['7'];
 blocks[20] = ['A2'];
 comments[20] = "Id Pregunta: 7124. Art&iacute;culo 53 RD 1671/2009";
 preguntaids[20] = 7124


//  Id pregunta: 6830 Año de creación de pregunta: 2010
 questions[21]= "22)  La norma ISO/IEC 15408 Evaluation Criteria for IT Security (informalmente conocida como Common Criteria):";
 choices[21]= new Array();
 choices[21][0] = "Establece una escala creciente de confianza en la seguridad del producto evaluado, que va desde el Evaluation Assurement Level (EAL) 0 al EAL 7.";
 choices[21][1] = "Establece perfiles de protecci&oacute;n, que deben ser elaborados por ISO/IEC.";
 choices[21][2] = "Permite certificar sistemas, productos y algoritmos criptogr&aacute;ficos.";
 choices[21][3] = "Figura como criterio de evaluaci&oacute;n en la Orden PRE/2740/2007 por la que se aprueba el Reglamento de evaluaci&oacute;n y certificaci&oacute;n de la seguridad de las TI.";
 answers[21] = 3;
 units[21] = ['48'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 6830. TIC A 2009";
 preguntaids[21] = 6830


//  Id pregunta: 314 Año de creación de pregunta: 2016
 questions[22]= "23)  A los efectos de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , forman parte del sector p&uacute;blico estatal:";
 choices[22]= new Array();
 choices[22][0] = "Las respuestas a) y b) son correctas.";
 choices[22][1] = "Los organismos aut&oacute;nomos dependientes de la Administraci&oacute;n General del Estado.";
 choices[22][2] = "Las entidades p&uacute;blicas empresariales, dependientes de la Administraci&oacute;n General del Estado, o de cualesquiera otros organismos p&uacute;blicos vinculados o dependientes de ella.";
 choices[22][3] = "Las respuestas a) y b) no son correctas.";
 answers[22] = 0;
 units[22] = ['11'];
 blocks[22] = ['A2'];
 comments[22] = "Id Pregunta: 314. Presupuestos generales";
 preguntaids[22] = 314


//  Id pregunta: 467 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[23]= new Array();
 choices[23][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[23][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[23][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[23][3] = "Todos los anteriores";
 answers[23] = 3;
 units[23] = ['19'];
 blocks[23] = ['A4'];
 comments[23] = "Id Pregunta: 467. Estrategia TIC";
 preguntaids[23] = 467


//  Id pregunta: 8269 Año de creación de pregunta: 2011
 questions[24]= "25)  Dentro del contexto que marca la Ley 39/2015, un expediente electr&oacute;nico es:";
 choices[24]= new Array();
 choices[24][0] = "La copia electr&oacute;nica de un expediente en papel, que es el que conservar&aacute; la eficacia jur&iacute;dica, foliado mediante un &Iacute;ndice electr&oacute;nico y firmado electr&oacute;nicamente";
 choices[24][1] = "El conjunto de documentos electr&oacute;nicos correspondientes a alguno de los procedimientos administrativos incluidos en la normativa de creaci&oacute;n de la sede electr&oacute;nica";
 choices[24][2] = "El conjunto de documentos electr&oacute;nicos correspondientes a un procedimiento administrativo, cualquiera que sea el tipo de informaci&oacute;n que contengan";
 choices[24][3] = "Una aplicaci&oacute;n inform&aacute;tica para la gesti&oacute;n automatizada de expedientes en el &aacute;mbito de la Administraci&oacute;n General del Estado.";
 answers[24] = 2;
 units[24] = ['7'];
 blocks[24] = ['A2'];
 comments[24] = "Id Pregunta: 8269. Examen TIC A2 2010 interna";
 preguntaids[24] = 8269


//  Id pregunta: 9218 Año de creación de pregunta: 2014
 questions[25]= "26)  De acuerdo con lo establecido en el RD 3/2010 de 8 de enero por el que se regula el Esquema Nacional de Seguridad,";
 choices[25]= new Array();
 choices[25][0] = "todos los sistemas de informaci&oacute;n ser&aacute;n objeto de una auditor&iacute;a regular ordinaria con car&aacute;cter anual";
 choices[25][1] = "los sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica no precisan ser auditados";
 choices[25][2] = "la auditor&iacute;a de los sistemas de categor&iacute;a media puede ser sustituida por una autoevaluaci&oacute;n realizada por el mismo personal que administra el sistema";
 choices[25][3] = "no es necesario que los informes de autoevaluaci&oacute;n sean conocidos por el responsable de seguridad competente. Basta con que los conozca el responsable del sistema.";
 answers[25] = 1;
 units[25] = ['46'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 9218. Examen TIC A1 2013";
 preguntaids[25] = 9218


//  Id pregunta: 10706 Año de creación de pregunta: 2015
 questions[26]= "27)  En el est&aacute;ndar XADES de firma electr&oacute;nica, el perfil que incluye un TimeStamp a las referencias de las CRLs, es:";
 choices[26]= new Array();
 choices[26][0] = "XADES-X";
 choices[26][1] = "XADES-T";
 choices[26][2] = "XADES-XL";
 choices[26][3] = "XADES-C";
 answers[26] = 0;
 units[26] = ['76'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 10706. ";
 preguntaids[26] = 10706


//  Id pregunta: 10402 Año de creación de pregunta: 2015
 questions[27]= "28)  &iquest;Cu&aacute;l es el porcentaje objetivo de personas que realicen compras online para 2015 seg&uacute;n la Agenda Digital Europea?";
 choices[27]= new Array();
 choices[27][0] = "0.2";
 choices[27][1] = "0.33";
 choices[27][2] = "0.5";
 choices[27][3] = "0.8";
 answers[27] = 2;
 units[27] = ['19'];
 blocks[27] = ['A4'];
 comments[27] = "Id Pregunta: 10402. ";
 preguntaids[27] = 10402


//  Id pregunta: 5635 Año de creación de pregunta: 2007
 questions[28]= "29)  &iquest;Que se entiende por el conjunto de t&eacute;cnicas para iniciar, evaluar e implementar cambios en un producto software manteniendo su integridad?";
 choices[28]= new Array();
 choices[28][0] = "Metodolog&iacute;a.";
 choices[28][1] = "Gesti&oacute;n de Configuraci&oacute;n Software.";
 choices[28][2] = "Ingenier&iacute;a Inversa.";
 choices[28][3] = "An&aacute;lisis y Dise&ntilde;o de Sistemas de Informaci&oacute;n.";
 answers[28] = 1;
 units[28] = ['82'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 5635. ";
 preguntaids[28] = 5635


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[29]= new Array();
 choices[29][0] = "Dos Cap&iacute;tulos.";
 choices[29][1] = "Tres Cap&iacute;tulos.";
 choices[29][2] = "Un Cap&iacute;tulo.";
 choices[29][3] = "Cuatro Cap&iacute;tulos.";
 answers[29] = 1;
 units[29] = ['1'];
 blocks[29] = ['A1'];
 comments[29] = "Id Pregunta: 49. Constituci&oacute;n de 1978";
 preguntaids[29] = 49


//  Id pregunta: 3603 Año de creación de pregunta: 2002
 questions[30]= "31)  La planificaci&oacute;n estrat&eacute;gica responde a las siguientes cuestiones salvo a una, &iquest;cu&aacute;l?:";
 choices[30]= new Array();
 choices[30][0] = "Cu&aacute;l es la posici&oacute;n futura deseable";
 choices[30][1] = "Cu&aacute;l es la situaci&oacute;n actual";
 choices[30][2] = "Cu&aacute;les son los escalones necesarios para pasar de donde estamos a donde deseamos estar";
 choices[30][3] = "Cu&aacute;l es el costo de dichos escalones";
 answers[30] = 3;
 units[30] = ['83'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 3603. ";
 preguntaids[30] = 3603


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[31]= "32)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[31]= new Array();
 choices[31][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[31][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[31][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[31][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[31] = 1;
 units[31] = ['7'];
 blocks[31] = ['A2'];
 comments[31] = "Id Pregunta: 232. Ley 39/2015";
 preguntaids[31] = 232


//  Id pregunta: 7138 Año de creación de pregunta: 2010
 questions[32]= "33)  De acuerdo a lo dispuesto en la ley de servicios de la sociedad de la informaci&oacute;n y comercio electr&oacute;nico, &iquest;Cu&aacute;l es la sanci&oacute;n correspondiente por la comisi&oacute;n de infracciones muy graves?";
 choices[32]= new Array();
 choices[32][0] = "150.001 hasta 600.000 euros";
 choices[32][1] = "150.001 hasta 300.000 euros";
 choices[32][2] = "300.001 hasta 600.000 euros";
 choices[32][3] = "600.001 hasta 1,000.000 euros";
 answers[32] = 0;
 units[32] = ['19'];
 blocks[32] = ['A4'];
 comments[32] = "Id Pregunta: 7138. Ley 34/2002, art&iacute;culo 39";
 preguntaids[32] = 7138


//  Id pregunta: 10725 Año de creación de pregunta: 2015
 questions[33]= "34)  Seg&uacute;n la Ley 34/2002 de Servicios de la Sociedad de la Informaci&oacute;n y Comercio electr&oacute;nico, el procedimiento de cooperaci&oacute;n intracomunitario en el que se propone la realizaci&oacute;n de acciones urgentes contra un prestador de servicios de la sociedad de la informaci&oacute;n establecido en la U.E que haya incumplido alguno de los preceptos de la Ley, requiere notificaci&oacute;n al Consejo Europeo y al Estado Miembro en el que opera dicho Prestador en un Plazo M&Aacute;XIMO de:";
 choices[33]= new Array();
 choices[33][0] = "1 mes desde la adopci&oacute;n de las acciones urgentes.";
 choices[33][1] = "30 d&iacute;as desde la adopci&oacute;n de las acciones urgentes.";
 choices[33][2] = "15 d&iacute;as desde la adopci&oacute;n de acciones urgentes.";
 choices[33][3] = "Ninguna de las anteriores.";
 answers[33] = 2;
 units[33] = ['19'];
 blocks[33] = ['A4'];
 comments[33] = "Id Pregunta: 10725. ";
 preguntaids[33] = 10725


//  Id pregunta: 9889 Año de creación de pregunta: 2015
 questions[34]= "35)  En qu&eacute; T&iacute;tulo de la Ley 39/2015 se recogen los Derechos de las personas en sus relaciones con las Administraciones P&uacute;blicas.";
 choices[34]= new Array();
 choices[34][0] = "T&iacute;tulo I";
 choices[34][1] = "T&iacute;tulo II";
 choices[34][2] = "T&iacute;tulo III";
 choices[34][3] = "T&iacute;tulo IV";
 answers[34] = 1;
 units[34] = ['7', '19'];
 blocks[34] = ['A2', 'A4'];
 comments[34] = "Id Pregunta: 9889. ";
 preguntaids[34] = 9889


//  Id pregunta: 180 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Con otra expresi&oacute;n m&aacute;s familiar es com&uacute;nmente conocido el Consejo de la Uni&oacute;n Europea?";
 choices[35]= new Array();
 choices[35][0] = "Parlamento Europeo";
 choices[35][1] = "Consejo de Jefes de Estado";
 choices[35][2] = "Consejo de Jefes de Estado y de Gobierno";
 choices[35][3] = "Consejo de Ministros";
 answers[35] = 3;
 units[35] = ['5'];
 blocks[35] = ['A1'];
 comments[35] = "Id Pregunta: 180. Uni&oacute;n Europea";
 preguntaids[35] = 180


//  Id pregunta: 6139 Año de creación de pregunta: 2003
 questions[36]= "37)  Se&ntilde;ale la respuesta correcta:";
 choices[36]= new Array();
 choices[36][0] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos son recurribles en alzada ante el Ministro de Industria, Turismo y Comercio";
 choices[36][1] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos no pueden ser objeto de recurso alguno";
 choices[36][2] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos agotan la via administrativa";
 choices[36][3] = "Por v&iacute;a reglamentaria se establecer&aacute; el sistema de recursos administrativos ante las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 answers[36] = 2;
 units[36] = ['35'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 6139. Examen TIC A1 MAP 2007";
 preguntaids[36] = 6139


//  Id pregunta: 464 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[37]= new Array();
 choices[37][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[37][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[37][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[37][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[37] = 0;
 units[37] = ['19'];
 blocks[37] = ['A4'];
 comments[37] = "Id Pregunta: 464. Estrategia TIC";
 preguntaids[37] = 464


//  Id pregunta: 1467 Año de creación de pregunta: 2016
 questions[38]= "39)  Android es un sistema operativo basado en:";
 choices[38]= new Array();
 choices[38][0] = "UNIX.";
 choices[38][1] = "Palm OS.";
 choices[38][2] = "Google.";
 choices[38][3] = "Linux.";
 answers[38] = 3;
 units[38] = ['59'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 1467. ";
 preguntaids[38] = 1467


//  Id pregunta: 8430 Año de creación de pregunta: 2011
 questions[39]= "40)  Una sede judicial electr&oacute;nica puede no disponer de:";
 choices[39]= new Array();
 choices[39][0] = "Identificaci&oacute;n de la empresa contratada para su gesti&oacute;n, en su caso";
 choices[39][1] = "Servicios de asesoramiento electr&oacute;nico al usuario para la correcta utilizaci&oacute;n de la sede";
 choices[39][2] = "La Carta de Derechos de los Ciudadanos ante la Justicia";
 choices[39][3] = "Debe disponer de todas las anteriores";
 answers[39] = 0;
 units[39] = ['2'];
 blocks[39] = ['A1'];
 comments[39] = "Id Pregunta: 8430. ";
 preguntaids[39] = 8430


//  Id pregunta: 76 Año de creación de pregunta: 2016
 questions[40]= "41)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[40]= new Array();
 choices[40][0] = "61";
 choices[40][1] = "53";
 choices[40][2] = "65";
 choices[40][3] = "67";
 answers[40] = 2;
 units[40] = ['1'];
 blocks[40] = ['A1'];
 comments[40] = "Id Pregunta: 76. Constituci&oacute;n de 1978";
 preguntaids[40] = 76


//  Id pregunta: 3625 Año de creación de pregunta: 2002
 questions[41]= "42)  En un Sistema de Gesti&oacute;n de Bases de Datos Documentales el diccionario de palabras vac&iacute;as permite:";
 choices[41]= new Array();
 choices[41][0] = "Buscar palabras o combinaciones de las mismas sin conocer con exactitud los caracteres que las componen";
 choices[41][1] = "Enlazar consultas individuales para crear rutinas de interrogaci&oacute;n complejas";
 choices[41][2] = "Definir un conjunto de palabras que no deseamos que formen parte de los &iacute;ndices";
 choices[41][3] = "Igualar caracteres para que el sistema de b&uacute;squeda los considere iguales";
 answers[41] = 2;
 units[41] = ['100'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 3625. ";
 preguntaids[41] = 3625


//  Id pregunta: 3347 Año de creación de pregunta: 2006
 questions[42]= "43)  La m&iacute;nima unidad de informaci&oacute;n gr&aacute;fica que puede ser controlada, se denomina:";
 choices[42]= new Array();
 choices[42][0] = "Bit";
 choices[42][1] = "GIU";
 choices[42][2] = "Resoluci&oacute;n";
 choices[42][3] = "Pixel";
 answers[42] = 3;
 units[42] = ['50'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 3347. ";
 preguntaids[42] = 3347


//  Id pregunta: 404 Año de creación de pregunta: 2016
 questions[43]= "44)  Entre otros criterios de actuaci&oacute;n de las administraciones p&uacute;blicas para la consecuci&oacute;n del principio de igualdad, se encuentra:";
 choices[43]= new Array();
 choices[43][0] = "Evaluar peri&oacute;dicamente la efectividad del principio de igualdad.";
 choices[43][1] = "Penalizar a las empresas que no cumplan con los planes de igualdad.";
 choices[43][2] = "Ninguna es correcta.";
 choices[43][3] = "A y B son correctas.";
 answers[43] = 0;
 units[43] = ['14'];
 blocks[43] = ['A3'];
 comments[43] = "Id Pregunta: 404. Pol&iacute;ticas de igualdad";
 preguntaids[43] = 404


//  Id pregunta: 7362 Año de creación de pregunta: 2010
 questions[44]= "45)  Seleccione la afirmaci&oacute;n cierta respecto al Sistema Operativo UNIX";
 choices[44]= new Array();
 choices[44][0] = "UNIX no permite la comunicaci&oacute;n entre procesos";
 choices[44][1] = "loctl es un comando que permite crear un fichero";
 choices[44][2] = "Las normas POSIX definen la forma de organizar la memoria";
 choices[44][3] = "Cada fichero lleva asociada una estructura llamada nodo-i (inode)";
 answers[44] = 3;
 units[44] = ['57'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 7362. Examen TIC B 2009";
 preguntaids[44] = 7362


//  Id pregunta: 3800 Año de creación de pregunta: 2002
 questions[45]= "46)  El tiempo de programaci&oacute;n de un proyecto software depende principalmente de:";
 choices[45]= new Array();
 choices[45][0] = "Funcionalidad requerida";
 choices[45][1] = "Fiabilidad";
 choices[45][2] = "Tiempo de  respuesta";
 choices[45][3] = "Son ciertas todas las anteriores respuestas";
 answers[45] = 3;
 units[45] = ['94'];
 blocks[45] = ['B3'];
 comments[45] = "Id Pregunta: 3800. ";
 preguntaids[45] = 3800


//  Id pregunta: 2911 Año de creación de pregunta: 2002
 questions[46]= "47)  Indique la respuesta falsa relativa a la monitorizaci&oacute;n del sistema operativo:";
 choices[46]= new Array();
 choices[46][0] = "Se puede hacer en tiempo real utilizando monitores del sistema";
 choices[46][1] = "Incluye herramientas de seguridad para asignar o denegar permisos de usuario en el sistema";
 choices[46][2] = "Se puede hacer a posteriori, utilizando herramientas que realicen an&aacute;lisis estad&iacute;sticos de los logs del sistema";
 choices[46][3] = "Permite detectar los cuellos de botella del sistema";
 answers[46] = 1;
 units[46] = ['56'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 2911. ";
 preguntaids[46] = 2911


//  Id pregunta: 10197 Año de creación de pregunta: 2015
 questions[47]= "48)  &iquest;En qu&eacute; circunstancias los prestadores de servicios de la sociedad de la informaci&oacute;n no son responsables por la informaci&oacute;n que proporcionen a los destinatarios de sus servicios?";
 choices[47]= new Array();
 choices[47][0] = "Cuando el proveedor de contenidos al que se enlace o cuya localizaci&oacute;n se facilite actu&eacute; bajo la direcci&oacute;n, autoridad o control del prestador que facilite la localizaci&oacute;n de esos contenidos.";
 choices[47][1] = "Siempre que tengan conocimiento de la ilicitud de la informaci&oacute;n o de que lesiona derechos o bienes de un tercero susceptible de indemnizaci&oacute;n y aleguen la imposibilidad de suprimir o inutilizar el enlace.";
 choices[47][2] = "Cuando el proveedor de contenidos al que se enlace o cuya localizaci&oacute;n se facilite desconozca el contenido il&iacute;cito de dicha informaci&oacute;n.";
 choices[47][3] = "Siempre que no tengan conocimiento efectivo de la ilicitud de la informaci&oacute;n o de que lesiona derechos o bienes de un tercero susceptible de indemnizaci&oacute;n o si lo tienen, act&uacute;en de forma diligente para suprimir o inutilizar el enlace.";
 answers[47] = 3;
 units[47] = ['19'];
 blocks[47] = ['A4'];
 comments[47] = "Id Pregunta: 10197. Examen TIC A1 2014";
 preguntaids[47] = 10197


//  Id pregunta: 9176 Año de creación de pregunta: 2014
 questions[48]= "49)  &iquest;Cu&aacute;l es el &aacute;mbito del Registro Electr&oacute;nico Com&uacute;n?";
 choices[48]= new Array();
 choices[48][0] = "Todas las Administraciones P&uacute;blicas.";
 choices[48][1] = "La Administraci&oacute;n General del Estado y la Administraci&oacute;n Auton&oacute;mica.";
 choices[48][2] = "La Administraci&oacute;n General del Estado y los Organismos P&uacute;blicos adscritos o dependientes de la misma.";
 choices[48][3] = "La Secretaria de Estado de Administraciones P&uacute;blicas, como responsable de su gesti&oacute;n.";
 answers[48] = 2;
 units[48] = ['47'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 9176. Examen TIC A2 2013";
 preguntaids[48] = 9176


//  Id pregunta: 8423 Año de creación de pregunta: 2011
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes archivos no utiliza el formato de archivo ZIP?";
 choices[49]= new Array();
 choices[49][0] = "WAR";
 choices[49][1] = "EAR";
 choices[49][2] = "JAR";
 choices[49][3] = "Todos los anteriores lo usan";
 answers[49] = 3;
 units[49] = ['64'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 8423. ";
 preguntaids[49] = 8423


//  Id pregunta: 10852 Año de creación de pregunta: 2015
 questions[50]= "51)  El mandato del Presidente de la CNMC tiene una duraci&oacute;n de:";
 choices[50]= new Array();
 choices[50][0] = "4 a&ntilde;os no renovables";
 choices[50][1] = "4 a&ntilde;os renovables";
 choices[50][2] = "6 a&ntilde;os no renovables";
 choices[50][3] = "6 a&ntilde;os renovables";
 answers[50] = 2;
 units[50] = ['121'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 10852. ";
 preguntaids[50] = 10852


//  Id pregunta: 10078 Año de creación de pregunta: 2015
 questions[51]= "52)  Se&ntilde;ale qu&eacute; norma del IEEE normaliza la tecnolog&iacute;a Power over Ethernet Plus (PoE +):";
 choices[51]= new Array();
 choices[51][0] = "IEEE 802.3ab";
 choices[51][1] = "IEEE 802.3at";
 choices[51][2] = "IEEE 802.3ap";
 choices[51][3] = "No es un est&aacute;ndar del IEEE sino que es una categor&iacute;a de EIA/TIA 568b.";
 answers[51] = 1;
 units[51] = ['112'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 10078. Examen TIC A2 2014";
 preguntaids[51] = 10078


//  Id pregunta: 10320 Año de creación de pregunta: 2015
 questions[52]= "53)  &iquest;Cu&aacute;l de lo siguientes no es un servicio horizontal de la red SARA?";
 choices[52]= new Array();
 choices[52][0] = "Plataforma de validaci&oacute;n de firma electr&oacute;nica @firma";
 choices[52][1] = "Solicitud de cambio de domicilio";
 choices[52][2] = "Pasarela de pago";
 choices[52][3] = "Registro Central de Personal";
 answers[52] = 3;
 units[52] = ['47'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 10320. ";
 preguntaids[52] = 10320


//  Id pregunta: 6105 Año de creación de pregunta: 2003
 questions[53]= "54)  El CMM-CMMI es:";
 choices[53]= new Array();
 choices[53][0] = "Un conjunto de normas de seguridad f&iacute;sica (perimetral), antiintrusivas (firewall) y antiincendios de aplicaci&oacute;nen centros de proceso de datos";
 choices[53][1] = "Un modelo de desarrollo de software jer&aacute;rquico orientado a objetos";
 choices[53][2] = "Un modelo de calidad del software que clasifica en cinco los niveles de madurez.";
 choices[53][3] = "Un modelo est&aacute;ndar de seguridad ante ataques por Internet.";
 answers[53] = 2;
 units[53] = ['101'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 6105. Examen TIC A1 MAP 2007";
 preguntaids[53] = 6105


//  Id pregunta: 4486 Año de creación de pregunta: 2002
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto al modelo OSI de ISO?";
 choices[54]= new Array();
 choices[54][0] = "El modelo no especifica relaci&oacute;n de ning&uacute;n tipo ni con lenguajes de programaci&oacute;n ni con sistemas operativos";
 choices[54][1] = "El modelo no contempla aspectos relativos a los interfaces de la aplicaci&oacute;n ni a los usuarios";
 choices[54][2] = "El modelo describe el comportamiento externo y la estructura interna de los sistemas";
 choices[54][3] = "Todas las respuestas anteriores son falsas";
 answers[54] = 2;
 units[54] = ['105'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 4486. ";
 preguntaids[54] = 4486


//  Id pregunta: 7913 Año de creación de pregunta: 2011
 questions[55]= "56)  En un acuerdo marco en vigor, la licitaci&oacute;n simplificada puede limitarse a s&oacute;lo tres empresas de entre las firmantes del acuerdo:";
 choices[55]= new Array();
 choices[55][0] = "Cuando la duraci&oacute;n m&aacute;xima de acuerdo sea inferior a un a&ntilde;o.";
 choices[55][1] = "Cuando el importe de licitaci&oacute;n sea inferior al mill&oacute;n de euros.";
 choices[55][2] = "Cuando la tramitaci&oacute;n se haya declarado urgente.";
 choices[55][3] = "Cuando el contrato a adjudicar no est&eacute; sujeto a regulaci&oacute;n armonizada.";
 answers[55] = 3;
 units[55] = ['41'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 7913. Examen TIC A1 2010";
 preguntaids[55] = 7913


//  Id pregunta: 6384 Año de creación de pregunta: 2003
 questions[56]= "57)  El sello de oro del modelo EFQM se obtiene a partir de una evaluaci&oacute;n de:";
 choices[56]= new Array();
 choices[56][0] = "400 puntos sobre 1000";
 choices[56][1] = "500 puntos sobre 1000";
 choices[56][2] = "700 puntos sobre 1000";
 choices[56][3] = "900 puntos sobre 1000";
 answers[56] = 1;
 units[56] = ['93'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 6384. Examen 2006 JCYL";
 preguntaids[56] = 6384


//  Id pregunta: 10491 Año de creación de pregunta: 2015
 questions[57]= "58)  En qu&eacute; casos no es necesario el consentimiento del usuario en el tratamiento de datos seg&uacute;n la Ley Org&aacute;nica de Protecci&oacute;n de Datos";
 choices[57]= new Array();
 choices[57][0] = "Datos con fines hist&oacute;ricos, estad&iacute;sticos o cient&iacute;ficos.";
 choices[57][1] = "No existen excepciones al consentimiento de tratamiento de los datos.";
 choices[57][2] = "La Administraci&oacute;n en el desempe&ntilde;o de sus funciones y las fuentes accesibles al p&uacute;blico.";
 choices[57][3] = "Datos sobre Sindicaci&oacute;n, Ideolog&iacute;a y Religi&oacute;n.";
 answers[57] = 2;
 units[57] = ['35'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 10491. ";
 preguntaids[57] = 10491


//  Id pregunta: 10836 Año de creación de pregunta: 2015
 questions[58]= "59)  Indique cu&aacute;l no es un habilitador de CoBIT";
 choices[58]= new Array();
 choices[58][0] = "Procesos";
 choices[58][1] = "Gobierno";
 choices[58][2] = "Informaci&oacute;n";
 choices[58][3] = "Estructuras organizacionales";
 answers[58] = 1;
 units[58] = ['101'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 10836. ";
 preguntaids[58] = 10836


//  Id pregunta: 10872 Año de creación de pregunta: 2015
 questions[59]= "60)  Cuando un switch recibe una trama y no posee la direcci&oacute;n de destino, el switch:";
 choices[59]= new Array();
 choices[59][0] = "env&iacute;a la trama por todos los puertos";
 choices[59][1] = "env&iacute;a un ARP para obtener la direcci&oacute;n de destino de la trama";
 choices[59][2] = "reenv&iacute;a la trama por todos los puertos, excepto por el que fue recibido";
 choices[59][3] = "descarta la trama";
 answers[59] = 2;
 units[59] = ['105'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 10872. ";
 preguntaids[59] = 10872


//  Id pregunta: 4842 Año de creación de pregunta: 2002
 questions[60]= "61)  En Token Ring , un monitor activo:";
 choices[60]= new Array();
 choices[60][0] = "Transmite mensajes de monitorizaci&oacute;n a cada servidor en el anillo para facilitar el balance de carga entre ellos";
 choices[60][1] = "Espera por los mensajes de error, entonces env&iacute;a mensajes de notificaci&oacute;n para limitar (o reordenar) el tr&aacute;fico";
 choices[60][2] = "Escucha la prioridad del testigo y cuando se detecta, reserva la prioridad para la estaci&oacute;n emisora";
 choices[60][3] = "Elimina las tramas no recogidas y es el punto central de informaci&oacute;n de 'timing' para un anillo";
 answers[60] = 3;
 units[60] = ['112'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 4842. ";
 preguntaids[60] = 4842


//  Id pregunta: 9790 Año de creación de pregunta: 2015
 questions[61]= "62)  No es objetivo de la Ley 39/2015:";
 choices[61]= new Array();
 choices[61][0] = "Reconocer el derecho de los ciudadanos a relacionarse con las Administraciones P&uacute;blicas por medios electr&oacute;nicos.";
 choices[61][1] = "Garantizar el acceso a todos los servicios electr&oacute;nicos.";
 choices[61][2] = "Aumentar la utilizaci&oacute;n del DNI electr&oacute;nico por los ciudadanos.";
 choices[61][3] = "Impulsar el uso de los servicios electr&oacute;nicos.";
 answers[61] = 2;
 units[61] = ['7', '47'];
 blocks[61] = ['A2', 'B1'];
 comments[61] = "Id Pregunta: 9790. ";
 preguntaids[61] = 9790


//  Id pregunta: 4300 Año de creación de pregunta: 2003
 questions[62]= "63)  El tiempo de respuesta en teor&iacute;a de colas es:";
 choices[62]= new Array();
 choices[62][0] = "Tiempo de servicio de un dispositivo para un usuario";
 choices[62][1] = "Tiempo de espera mas tiempo de servicio";
 choices[62][2] = "Tiempo que el usuario espera en la cola atendiendo a otros usuarios hasta que le toca el turno";
 choices[62][3] = "Tiempo en que un dispositivo est&aacute; ocupado en atender al sistema operativo";
 answers[62] = 1;
 units[62] = ['57'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 4300. ";
 preguntaids[62] = 4300


//  Id pregunta: 4069 Año de creación de pregunta: 2003
 questions[63]= "64)  &iquest;Cu&aacute;l es la complejidad ciclom&aacute;tica de un grafo de 11 aristas y 9 nodos?";
 choices[63]= new Array();
 choices[63][0] = "6";
 choices[63][1] = "12";
 choices[63][2] = "8";
 choices[63][3] = "4";
 answers[63] = 3;
 units[63] = ['93'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 4069. ";
 preguntaids[63] = 4069


//  Id pregunta: 9637 Año de creación de pregunta: 2014
 questions[64]= "65)  La contrataci&oacute;n de un proyecto de tecnolog&iacute;as de la informaci&oacute;n en un ministerio se ha realizado incluyendo un Acuerdo de Nivel de Servicio con una fecha cerrada de entrega de los trabajos. El contratista se va a retrasar por problemas con sus recursos humanos asignados al proyecto. El Jefe de Proyecto debe:";
 choices[64]= new Array();
 choices[64][0] = "Proporcionar los recursos humanos, reclut&aacute;ndolos si es preciso del personal del ministerio, que necesita el contratista para que acabe a tiempo el proyecto.";
 choices[64][1] = "Informar a los interesados del proyecto de la demora del proyecto y el sobrecoste que tendr&aacute; el mismo sobre el precio contratado.";
 choices[64][2] = "Disponer de m&aacute;s fondos para pagar al contratista a fin de que acabe antes el proyecto";
 choices[64][3] = "Informar a las partes interesadas del proyecto de la demora del mismo por causa del contratista para la gesti&oacute;n del riesgo asociado, y a los responsables del expediente de contrataci&oacute;n de la penalizaci&oacute;n a aplicar al contratista por no finalizar en tiempo.";
 answers[64] = 3;
 units[64] = ['31'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 9637. ";
 preguntaids[64] = 9637


//  Id pregunta: 7755 Año de creación de pregunta: 2010
 questions[65]= "66)  En relaci&oacute;n con las notificaciones electr&oacute;nicas, &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?";
 choices[65]= new Array();
 choices[65][0] = "Se practicar&aacute;n mediante comparecencia en la sede electr&oacute;nica de la Administraci&oacute;n u Organismo actuante, a trav&eacute;s de la direcci&oacute;n electr&oacute;nica habilitada &uacute;nica o mediante ambos sistemas";
 choices[65][1] = "Cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado, se entender&aacute; rechazada cuando hayan transcurrido quince d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido.";
 choices[65][2] = "No ser&aacute;n la opci&oacute;n preferente para efectuar las notificaciones, salvo cuando el interesado resulte obligado a recibirlas por esta v&iacute;a.";
 choices[65][3] = "En ning&uacute;n caso se efectuar&aacute;n por medios electr&oacute;nicos las notificaciones que contengan medios de pago a favor de las Administraciones.";
 answers[65] = 0;
 units[65] = ['7'];
 blocks[65] = ['A2'];
 comments[65] = "Id Pregunta: 7755. ";
 preguntaids[65] = 7755


//  Id pregunta: 7337 Año de creación de pregunta: 2010
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta cuando hablamos de la m&eacute;trica de Puntos de Funci&oacute;n?";
 choices[66]= new Array();
 choices[66][0] = "Se usa para estimar el tama&ntilde;o del software que se va a desarrollar";
 choices[66][1] = "Mide la funcionalidad entregada indepedientemente de la tecnologia";
 choices[66][2] = "Ve la aplicaci&oacute;n como una caja negra";
 choices[66][3] = "Fue propuesta por Tom De Marco";
 answers[66] = 3;
 units[66] = ['93'];
 blocks[66] = ['B3'];
 comments[66] = "Id Pregunta: 7337. ";
 preguntaids[66] = 7337


//  Id pregunta: 9558 Año de creación de pregunta: 2014
 questions[67]= "68)  Referente al m&eacute;todo de b&uacute;squeda con adversario aplicado a juegos, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[67]= new Array();
 choices[67][0] = "Los dos jugadores disponen de informaci&oacute;n completa sobre el estado del juego";
 choices[67][1] = "La estrategia del oponente es desconocida";
 choices[67][2] = "Interviene el azar";
 choices[67][3] = "Al acabar, cada jugador pierde, gana o empata";
 answers[67] = 2;
 units[67] = ['67'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 9558. ";
 preguntaids[67] = 9558


//  Id pregunta: 8922 Año de creación de pregunta: 2013
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo est&aacute;tico de selecci&oacute;n de inversiones?";
 choices[68]= new Array();
 choices[68][0] = "Tasa de rendimiento contable";
 choices[68][1] = "M&eacute;todo del flujo total por unidad monetaria comprometida";
 choices[68][2] = "PROMETHEE";
 choices[68][3] = "M&eacute;todo del flujo de caja medio anual por unidad monetaria comprometida";
 answers[68] = 2;
 units[68] = ['40'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 8922. ";
 preguntaids[68] = 8922


//  Id pregunta: 459 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[69]= new Array();
 choices[69][0] = "El 5 de Octubre de 2015";
 choices[69][1] = "El 15 de Octubre de 2015";
 choices[69][2] = "El 15 de Septiembre de 2015";
 choices[69][3] = "El 2 de Octubre de 2015";
 answers[69] = 2;
 units[69] = ['19'];
 blocks[69] = ['A4'];
 comments[69] = "Id Pregunta: 459. Estrategia TIC";
 preguntaids[69] = 459


//  Id pregunta: 8877 Año de creación de pregunta: 2013
 questions[70]= "71)  Una de las siguientes no es una funci&oacute;n de la Comisi&oacute;n Nacional de los Mercados y la Competencia:";
 choices[70]= new Array();
 choices[70][0] = "Arbitrar en los conflictos que puedan surgir entre los operadores del sector de las comunicaciones electr&oacute;nicas";
 choices[70][1] = "Definir y analizar los mercados de referencia relativos a redes y servicios de comunicaciones electr&oacute;nicas";
 choices[70][2] = "Determinar la cuant&iacute;a que supone el coste neto en la prestaci&oacute;n del servicio universal";
 choices[70][3] = "La creaci&oacute;n de un plan de numeraci&oacute;n";
 answers[70] = 3;
 units[70] = ['121'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 8877. ";
 preguntaids[70] = 8877


//  Id pregunta: 131 Año de creación de pregunta: 2016
 questions[71]= "72)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[71]= new Array();
 choices[71][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[71][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[71][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[71][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[71] = 2;
 units[71] = ['5'];
 blocks[71] = ['A1'];
 comments[71] = "Id Pregunta: 131. Uni&oacute;n Europea";
 preguntaids[71] = 131


//  Id pregunta: 10671 Año de creación de pregunta: 2015
 questions[72]= "73)  Seg&uacute;n el art&iacute;culo 47 de la Ley 9/2014, NO es un derecho espec&iacute;fico de los usuarios finales de redes y servicios de comunicaciones electr&oacute;nicas:";
 choices[72]= new Array();
 choices[72][0] = "Derecho a continuidad del servicio.";
 choices[72][1] = "Derecho a acceder a los servicios de emergencia de forma gratuita.";
 choices[72][2] = "Derecho a la informaci&oacute;n, que deber&aacute; ser veraz, eficaz, suficiente, transparente, comparable sobre los servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico.";
 choices[72][3] = "Todos son derechos espec&iacute;ficos de los usuarios finales.";
 answers[72] = 3;
 units[72] = ['121'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 10671. ";
 preguntaids[72] = 10671


//  Id pregunta: 5634 Año de creación de pregunta: 2007
 questions[73]= "74)  Seg&uacute;n M&eacute;trica V3 &iquest;Donde comenzar&iacute;a el establecimiento del plan de aseguramiento de calidad?";
 choices[73]= new Array();
 choices[73][0] = "En el estudio de viabilidad del sistema.";
 choices[73][1] = "En el proceso de dise&ntilde;o.";
 choices[73][2] = "A la hora de la aceptaci&oacute;n del sistema.";
 choices[73][3] = "Una vez finalizado el mantenimiento del sistema de informaci&oacute;n.";
 answers[73] = 0;
 units[73] = ['91'];
 blocks[73] = ['B3'];
 comments[73] = "Id Pregunta: 5634. ";
 preguntaids[73] = 5634


//  Id pregunta: 4239 Año de creación de pregunta: 2006
 questions[74]= "75)  Las tres versiones del modelo COCOMO-2000 son:";
 choices[74]= new Array();
 choices[74][0] = "1) Modelo de composici&oacute;n de la arquitectura 2) Modelo de Dise&ntilde;o Preliminar 3) Modelo Post-Arquitectura.";
 choices[74][1] = "1) Modelo de composici&oacute;n de aplicaciones 2) Modelo de Dise&ntilde;o Preliminar 3) Modelo Post-Arquitectura.";
 choices[74][2] = "1) Modelo de composici&oacute;n de aplicaciones 2) Modelo de An&aacute;lisis Preliminar 3) Modelo Post-Arquitectura.";
 choices[74][3] = "1) Modelo de composici&oacute;n de la arquitectura 2) Modelo de An&aacute;lisis Preliminar 3) Modelo Post-Arquitectura.";
 answers[74] = 1;
 units[74] = ['94'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 4239. ";
 preguntaids[74] = 4239


