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
//  Id pregunta: 307 Año de creación de pregunta: 2016
 questions[0]= "1)  A tenor del art&iacute;culo 47.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el n&uacute;mero de ejercicios a que pueden aplicarse los gastos no ser&aacute; superior a:";
 choices[0]= new Array();
 choices[0][0] = "Dos.";
 choices[0][1] = "Cuatro.";
 choices[0][2] = "Cinco.";
 choices[0][3] = "Tres.";
 answers[0] = 1;
 units[0] = ['11'];
 blocks[0] = ['A2'];
 comments[0] = "Id Pregunta: 307. Presupuestos generales";
 preguntaids[0] = 307


//  Id pregunta: 5976 Año de creación de pregunta: 2007
 questions[1]= "2)  El protocolo de escritura anticipada en el fichero diario (fichero log) de una base de datos establece que:";
 choices[1]= new Array();
 choices[1][0] = "La escritura de un elemento de datos deber&iacute;a hacerse antes de cualquier operaci&oacute;n en el diario";
 choices[1][1] = "El registro del diario de una operaci&oacute;n deber&iacute;a escribirse antes de que se escriban los datos reales";
 choices[1][2] = "Todos los registros del diario deber&iacute;an escribirse antes de que comenzara a ejecutarse una nuevatransacci&oacute;n";
 choices[1][3] = "El diario nunca necesita escribirse en disco";
 answers[1] = 1;
 units[1] = ['100'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 5976. ";
 preguntaids[1] = 5976


//  Id pregunta: 8713 Año de creación de pregunta: 2013
 questions[2]= "3)  En el editor &quot;vi&quot; el comando &quot;dd&quot; &iquest;Qu&eacute; funci&oacute;n realiza?";
 choices[2]= new Array();
 choices[2][0] = "No realiza ninguna acci&oacute;n.";
 choices[2][1] = "Borra la l&iacute;nea anterior.";
 choices[2][2] = "Borra la l&iacute;nea actual";
 choices[2][3] = "Borra la l&iacute;nea posterior.";
 answers[2] = 2;
 units[2] = ['57'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 8713. Examen TICA2-2011";
 preguntaids[2] = 8713


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[3]= "4)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[3]= new Array();
 choices[3][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[3][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[3][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[3][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[3] = 0;
 units[3] = ['1'];
 blocks[3] = ['A1'];
 comments[3] = "Id Pregunta: 68. Constituci&oacute;n de 1978";
 preguntaids[3] = 68


//  Id pregunta: 7517 Año de creación de pregunta: 2010
 questions[4]= "5)  IEEE 1394 es:";
 choices[4]= new Array();
 choices[4][0] = "Un formato de CD.";
 choices[4][1] = "Un proyecto de formato DVD-Audio.";
 choices[4][2] = "Una norma dirigida a dispositivos de alta velocidad como c&aacute;maras de v&iacute;deo e impresoras profesionales.";
 choices[4][3] = "Un norma que regula exclusivamente el ajuste y calibrado del color.";
 answers[4] = 2;
 units[4] = ['51'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 7517. Similar a Map 2005";
 preguntaids[4] = 7517


//  Id pregunta: 6588 Año de creación de pregunta: 2009
 questions[5]= "6)  &iquest;Qu&eacute; es abiword?";
 choices[5]= new Array();
 choices[5][0] = "Un comando para contar palabras o bytes en archivos de texto.";
 choices[5][1] = "Un procesador de texto";
 choices[5][2] = "Un conversor de formatos multimedia.";
 choices[5][3] = "Un editor de archivos de sonido.";
 answers[5] = 1;
 units[5] = ['57'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 6588. ";
 preguntaids[5] = 6588


//  Id pregunta: 10403 Año de creación de pregunta: 2015
 questions[6]= "7)  &iquest;Cu&aacute;l es el porcentaje objetivo de personas que nunca hayan usado Internet para 2015 seg&uacute;n la Agenda Digital Europea?";
 choices[6]= new Array();
 choices[6][0] = "0.2";
 choices[6][1] = "0.33";
 choices[6][2] = "0.15";
 choices[6][3] = "0.01";
 answers[6] = 2;
 units[6] = ['19'];
 blocks[6] = ['A4'];
 comments[6] = "Id Pregunta: 10403. ";
 preguntaids[6] = 10403


//  Id pregunta: 4425 Año de creación de pregunta: 2005
 questions[7]= "8)  La intrusi&oacute;n de un virus inform&aacute;tico del tipo gusano (worm) en un ordenador puede afectar, en primer lugar, por ocupaci&oacute;n de todo el espacio disponible en disco:";
 choices[7]= new Array();
 choices[7][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n almacenada";
 choices[7][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n almacenada";
 choices[7][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n almacenada";
 choices[7][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[7] = 1;
 units[7] = ['120'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 4425. ";
 preguntaids[7] = 4425


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[8]= "9)  Sobre el recurso de reposici&oacute;n:";
 choices[8]= new Array();
 choices[8][0] = "Cabe interponerlo ante los actos administrativos que pongan fin a la v&iacute;a administrativa";
 choices[8][1] = "Es obligatorio interponerlo antes de impugnar un acto administrativo ante el orden jurisdiccional contencioso-administrativo";
 choices[8][2] = "Ha desaparecido en la Ley 39/2015";
 choices[8][3] = "El &oacute;rgano competente para resolverlo es el superior jer&aacute;rquico al que dict&oacute; el acto administrativo a recurrir";
 answers[8] = 0;
 units[8] = ['8'];
 blocks[8] = ['A2'];
 comments[8] = "Id Pregunta: 261. Ley 39/2015";
 preguntaids[8] = 261


//  Id pregunta: 1024 Año de creación de pregunta: 2016
 questions[9]= "10)  La recusaci&oacute;n pueden promoverla...";
 choices[9]= new Array();
 choices[9][0] = "Cualquier &oacute;rgano";
 choices[9][1] = "El interesado";
 choices[9][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[9][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[9] = 1;
 units[9] = ['4', '7', '8', '9'];
 blocks[9] = ['A1', 'A2'];
 comments[9] = "Id Pregunta: 1024. Ley 40/2015";
 preguntaids[9] = 1024


//  Id pregunta: 6891 Año de creación de pregunta: 2010
 questions[10]= "11)  Si contratamos la adquisici&oacute;n de un programa de ordenador a medida, &iquest;qu&eacute; tipo de contrato es?";
 choices[10]= new Array();
 choices[10][0] = "Un contrato de suministro.";
 choices[10][1] = "Un contrato de servicios.";
 choices[10][2] = "Un contrato mixto.";
 choices[10][3] = "Un contrato de desarrollo de un servicio p&uacute;blico.";
 answers[10] = 1;
 units[10] = ['37'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 6891. TIC A 2009";
 preguntaids[10] = 6891


//  Id pregunta: 8075 Año de creación de pregunta: 2011
 questions[11]= "12)  &iquest;Qu&eacute; proyecto europeo pretende establecer una plataforma de interoperabilidad y reconocimiento mutuo transfronterizo entre las identidades electr&oacute;nicas existentes en cada Estado Europeo?";
 choices[11]= new Array();
 choices[11][0] = "Conecta";
 choices[11][1] = "Robinson";
 choices[11][2] = "Stork";
 choices[11][3] = "Interoperability card";
 answers[11] = 2;
 units[11] = ['123'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 8075. ";
 preguntaids[11] = 8075


//  Id pregunta: 9303 Año de creación de pregunta: 2014
 questions[12]= "13)  En el &aacute;mbito de SAP ERP, un Centro de Coste o CeCo:";
 choices[12]= new Array();
 choices[12][0] = "Es la unidad organizativa, dentro de una sociedad CO, que representa un emplazamiento claramente delimitado donde se producen costes.";
 choices[12][1] = "Corresponde a una posici&oacute;n en el plan de cuentas relevante para el coste.";
 choices[12][2] = "Es el nivel jer&aacute;rquico m&aacute;s alto en el Sistema SAP.";
 choices[12][3] = "Es una lista de todas las cuentas de mayor utilizadas por una o varias sociedades.";
 answers[12] = 0;
 units[12] = ['69'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 9303. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[12] = 9303


//  Id pregunta: 1066 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes sistemas proporciona la funcionalidad de Single Sign-On basada en tickets?";
 choices[13]= new Array();
 choices[13][0] = "KERBEROS.";
 choices[13][1] = "STORK.";
 choices[13][2] = "SAML.";
 choices[13][3] = "OPENID.";
 answers[13] = 0;
 units[13] = ['120'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 1066. ";
 preguntaids[13] = 1066


//  Id pregunta: 1167 Año de creación de pregunta: 2016
 questions[14]= "15)  Se&ntilde;ale la respuesta correcta en relaci&oacute;n a la tecnolog&iacute;a JPA (Java Persistence API).";
 choices[14]= new Array();
 choices[14][0] = "El fichero &quot;persistence.xml&quot; permite la configuraci&oacute;n de JPA.";
 choices[14][1] = "Existen dos m&eacute;todos para gestionar las transacciones denominadas &quot;RESOURCE_LOCAL&quot; y &quot;JTA&quot;.";
 choices[14][2] = "JPQL es un lenguaje de consulta orientado a objetos, independiente de la plataforma y definido como parte de la especificaci&oacute;n JPA.";
 choices[14][3] = "Todas son correctas.";
 answers[14] = 3;
 units[14] = ['64'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 1167. ";
 preguntaids[14] = 1167


//  Id pregunta: 6036 Año de creación de pregunta: 2003
 questions[15]= "16)  Indique el API (Application Programming Interface) de JAVA que facilita el acceso a registros UDDI(Universal Description, Discovery and Integration):";
 choices[15]= new Array();
 choices[15][0] = "SAAJ";
 choices[15][1] = "JAXR";
 choices[15][2] = "SOAP";
 choices[15][3] = "STAX";
 answers[15] = 1;
 units[15] = ['64'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 6036. TIC B 2007";
 preguntaids[15] = 6036


//  Id pregunta: 1036 Año de creación de pregunta: 2016
 questions[16]= "17)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[16]= new Array();
 choices[16][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[16][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[16][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[16][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[16] = 1;
 units[16] = ['4', '7', '8', '9'];
 blocks[16] = ['A1', 'A2'];
 comments[16] = "Id Pregunta: 1036. Ley 40/2015";
 preguntaids[16] = 1036


//  Id pregunta: 331 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[17]= new Array();
 choices[17][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[17][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[17][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[17][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[17] = 1;
 units[17] = ['12'];
 blocks[17] = ['A3'];
 comments[17] = "Id Pregunta: 331. Modelo econ&oacute;mico";
 preguntaids[17] = 331


//  Id pregunta: 6424 Año de creación de pregunta: 2003
 questions[18]= "19)  Indique c&oacute;mo podr&iacute;a interconectar dos ordenadores personales seg&uacute;n la tecnolog&iacute;a ethernet:";
 choices[18]= new Array();
 choices[18][0] = "Mediante un cable cruzado";
 choices[18][1] = "Mediante un cable sin cruzar o cable plano";
 choices[18][2] = "Mediante un dado de interconexi&oacute;n";
 choices[18][3] = "Mediante cualquiera de las tres opciones indicadas";
 answers[18] = 0;
 units[18] = ['104'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 6424. ";
 preguntaids[18] = 6424


//  Id pregunta: 430 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes no es un &oacute;rgano de seguimiento y control de los fondos de empleo de &aacute;mbito nacional?";
 choices[19]= new Array();
 choices[19][0] = "El Servicio P&uacute;blico de Empleo Estatal";
 choices[19][1] = "La Inspecci&oacute;n de Trabajo y Seguridad Social";
 choices[19][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[19][3] = "La Conferencia Sectorial de Empleo y Asuntos Laborales";
 answers[19] = 3;
 units[19] = ['15'];
 blocks[19] = ['A3'];
 comments[19] = "Id Pregunta: 430. Modelo econ&oacute;mico";
 preguntaids[19] = 430


//  Id pregunta: 9297 Año de creación de pregunta: 2014
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes afirmaciones es FALSA respecto al lenguaje de programaci&oacute;n C# de la  plataforma .NET?";
 choices[20]= new Array();
 choices[20][0] = "En C# una clase puede heredar directamente de una sola clase primaria pero puede implementar cualquier n&uacute;mero de interfaces.";
 choices[20][1] = "C# no admite la aritm&eacute;tica con punteros de manera predeterminada, sin embargo, si utiliza la palabra clave unsafe, puede definir un contexto no seguro en el que se pueden utilizar punteros";
 choices[20][2] = "Los programas en C# pueden constar de uno o varios archivos, y cada archivo puede contener cero o varios espacios de nombres (namespaces).";
 choices[20][3] = "Un espacio de nombres (namespace) puede contener tipos tales como clases (classes), estructuras (structs), interfaces (interfaces), enumeraciones (enumerations) y delegados (delegates), pero no puede contener otros espacios de nombres (namespaces).";
 answers[20] = 3;
 units[20] = ['63'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 9297. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";
 preguntaids[20] = 9297


//  Id pregunta: 4819 Año de creación de pregunta: 2002
 questions[21]= "22)  En las redes locales, &iquest;qu&eacute; funciones tienen los repetidores?:";
 choices[21]= new Array();
 choices[21][0] = "Repiten los paquetes como se&ntilde;ales el&eacute;ctricas de una red a otra";
 choices[21][1] = "Repiten los paquetes incompletos para que sean reenviados completos";
 choices[21][2] = "Eliminan el ruido de las se&ntilde;ales en la l&iacute;nea y emiten los paquetes regenerados";
 choices[21][3] = "Repiten y ampl&iacute;an las se&ntilde;ales el&eacute;ctricas, incluyendo el ruido";
 answers[21] = 2;
 units[21] = ['102'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4819. ";
 preguntaids[21] = 4819


//  Id pregunta: 3343 Año de creación de pregunta: 2004
 questions[22]= "23)  Respecto a las herramientas, t&eacute;cnicas y terminolog&iacute;a OLAP indique cu&aacute;l de las siguientes afirmaciones es falsa.";
 choices[22]= new Array();
 choices[22][0] = "Trata de la s&iacute;ntesis, el an&aacute;lisis y la consolidaci&oacute;n din&aacute;mica de grandes vol&uacute;menes de datos multidimensionales.";
 choices[22][1] = "Las herramientas OLAP m&aacute;s eficientes en tiempo de respuesta trabajan sobre base de datos relacionales.";
 choices[22][2] = "Las bases de datos multidimensionales almacenan los datos de forma parecida a como lo hace una hoja de c&aacute;lculo aunque, a diferencia de &eacute;stas, es com&uacute;n que utilicen m&aacute;s de dos dimensiones.";
 choices[22][3] = "Se puede en establecer una jerarqu&iacute;a de niveles en cada dimensi&oacute;n para representar diversos grados de detalle.";
 answers[22] = 1;
 units[22] = ['72'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 3343. ";
 preguntaids[22] = 3343


//  Id pregunta: 6636 Año de creación de pregunta: 2009
 questions[23]= "24)  Se&ntilde;ale cu&aacute;l de los siguientes objetos forma parte de los componentes proveedores de datos .NET Framework de ADO.NET";
 choices[23]= new Array();
 choices[23][0] = "DataSet";
 choices[23][1] = "DataTable";
 choices[23][2] = "DataAdapter";
 choices[23][3] = "RecordSet";
 answers[23] = 2;
 units[23] = ['63'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 6636. MAP 2008 A2";
 preguntaids[23] = 6636


//  Id pregunta: 8526 Año de creación de pregunta: 2013
 questions[24]= "25)  Seg&uacute;n el RD Legislativo de contratos del sector p&uacute;blico:";
 choices[24]= new Array();
 choices[24][0] = "La garant&iacute;a provisional es obligatoria.";
 choices[24][1] = "La garant&iacute;a definitiva ser&aacute; un 5% del valor presupuestado del contrato.";
 choices[24][2] = "Todas las cuant&iacute;as de las garant&iacute;as ir&aacute;n adecuadamente motivadas.";
 choices[24][3] = "Ninguna de las anteriores";
 answers[24] = 3;
 units[24] = ['10'];
 blocks[24] = ['A2'];
 comments[24] = "Id Pregunta: 8526. La garant&iacute;a provisional es potestativa. La garant&iacute;a definitiva es de un 5 por 100 del importe de adjudicaci&oacute;n. La garant&iacute;a definitiva no requiere motivaci&oacute;n.";
 preguntaids[24] = 8526


//  Id pregunta: 911 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;A partir de qu&eacute; generaci&oacute;n empieza la telefonia m&oacute;vil digital?";
 choices[25]= new Array();
 choices[25][0] = "OG IMTS (lmproved Mobile Telephone System).";
 choices[25][1] = "IG TACS (Total Access Communication System).";
 choices[25][2] = "2G GSM (Global System for Mobile Communications).";
 choices[25][3] = "3G GPRS (Generat Packet Radio Service).";
 answers[25] = 2;
 units[25] = ['117'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 911. AGE A2 2015";
 preguntaids[25] = 911


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[26]= "27)  La soberan&iacute;a nacional reside en:";
 choices[26]= new Array();
 choices[26][0] = "el Parlamento nacional.";
 choices[26][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[26][2] = "el pueblo espa&ntilde;ol.";
 choices[26][3] = "el Congreso y el Senado.";
 answers[26] = 2;
 units[26] = ['1'];
 blocks[26] = ['A1'];
 comments[26] = "Id Pregunta: 82. Constituci&oacute;n de 1978";
 preguntaids[26] = 82


//  Id pregunta: 4116 Año de creación de pregunta: 2003
 questions[27]= "28)  Formato m&aacute;s utilizado en la actualidad en los Sistemas de Gesti&oacute;n de Contenidos:";
 choices[27]= new Array();
 choices[27][0] = "HTTP.";
 choices[27][1] = "CCS.";
 choices[27][2] = "Excel.";
 choices[27][3] = "XML.";
 answers[27] = 3;
 units[27] = ['99'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 4116. ";
 preguntaids[27] = 4116


//  Id pregunta: 7033 Año de creación de pregunta: 2010
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica que deba cumplir un requisito en un an&aacute;lisis de la informaci&oacute;n para que sea de utilidad?";
 choices[28]= new Array();
 choices[28][0] = "Completo";
 choices[28][1] = "Verificable";
 choices[28][2] = "Dif&iacute;cil de modificar";
 choices[28][3] = "Consistente";
 answers[28] = 2;
 units[28] = ['84'];
 blocks[28] = ['B3'];
 comments[28] = "Id Pregunta: 7033. ";
 preguntaids[28] = 7033


//  Id pregunta: 1741 Año de creación de pregunta: 2016
 questions[29]= "30)  En relaci&oacute;n con las definiciones de RAID (Redundant Array of Inexpensive Disks), indique la respuesta err&oacute;nea:";
 choices[29]= new Array();
 choices[29][0] = "Un RAID 6 es similar a RAID 5, salvo que calcula dos bloques de paridad independientes por cada escritura, mandando cada uno de los bloques de paridad a un disco diferente.";
 choices[29][1] = "Un RAID 4 Consiste en &ldquo;stripping&rdquo; a nivel de bloque, como RAID o m&aacute;s un disco de paridad dedicado. Cada bloque escrito es dividido en partes, se obtiene un bloque de paridad que permite recomponer el bloque inicial en caso de p&eacute;rdida de alguna de las partes.";
 choices[29][2] = "Un RAID 2 divide los bits a nivel de bloque. Por cada &ldquo;palabra&rdquo; enviada a escritura calcula un c&oacute;digo de Hamming que permite recuperar la informaci&oacute;n en caso de fallo de un disco y env&iacute;a posteriormente cada bloque a su disco correspondiente para mantener la paridad.";
 choices[29][3] = "Un RAID 5 Este nivel de RAID es similar a RAID 4, salvo que no utiliza un disco de paridad dedicado, sino que distribuye los bloques de paridad por todos los discos del array.";
 answers[29] = 2;
 units[29] = ['53'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 1741. ";
 preguntaids[29] = 1741


//  Id pregunta: 3821 Año de creación de pregunta: 2002
 questions[30]= "31)  En la realizaci&oacute;n de DFDs:";
 choices[30]= new Array();
 choices[30][0] = "cada nivel expresa un mayor detalle respecto al anterior, siendo t&iacute;picos los de contexto (nivel 0), subsistemas (nivel 1), funciones (nivel 2), subfunciones (nivel 3) y los procesos primitivos";
 choices[30][1] = "Todo dato que entra a un proceso ha de entrar en el DFD hijo, y todo dato que sale de un DFD ha de salir del DFD hijo";
 choices[30][2] = "los almacenes aparecen por primera vez en el primer DFD en el que son compartidos por varios procesos, y a partir de este nivel aparecen siempre";
 choices[30][3] = "Todas las respuestas anteriores son correctas";
 answers[30] = 3;
 units[30] = ['85', '86'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 3821. ";
 preguntaids[30] = 3821


//  Id pregunta: 8652 Año de creación de pregunta: 2013
 questions[31]= "32)  De los siguientes elementos, &iquest; cu&aacute;les no est&aacute;n definidos por el lenguaje ODRL?";
 choices[31]= new Array();
 choices[31][0] = "Assets.";
 choices[31][1] = "Rights.";
 choices[31][2] = "Resources.";
 choices[31][3] = "Parties.";
 answers[31] = 2;
 units[31] = ['41'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 8652. ";
 preguntaids[31] = 8652


//  Id pregunta: 3765 Año de creación de pregunta: 2002
 questions[32]= "33)  Diferentes t&eacute;cnicas para expresar la l&oacute;gica interna de los procesos primitivos son:";
 choices[32]= new Array();
 choices[32][0] = "Lenguaje narrativo, tablas de decisi&oacute;n y pseudoc&oacute;digo";
 choices[32][1] = "Pre/post condiciones, diagramas de flujo, lenguajes formales";
 choices[32][2] = "Todas las anteriores son t&eacute;cnicas usadas v&aacute;lidas";
 choices[32][3] = "Ninguna de las anteriores es una t&eacute;cnica usada v&aacute;lida";
 answers[32] = 2;
 units[32] = ['85', '86'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 3765. ";
 preguntaids[32] = 3765


//  Id pregunta: 9005 Año de creación de pregunta: 2014
 questions[33]= "34)  &iquest;Qu&eacute; versi&oacute;n de SQL permiti&oacute; por primera vez manipular y publicar datos XML?";
 choices[33]= new Array();
 choices[33][0] = "SQL 2000";
 choices[33][1] = "SQL-2003";
 choices[33][2] = "SQL-2006";
 choices[33][3] = "SQL-2008";
 answers[33] = 2;
 units[33] = ['61'];
 blocks[33] = ['B2'];
 comments[33] = "Id Pregunta: 9005. ";
 preguntaids[33] = 9005


//  Id pregunta: 4439 Año de creación de pregunta: 2002
 questions[34]= "35)  Una Bridge CA:";
 choices[34]= new Array();
 choices[34][0] = "Es un dispositivo de nivel 3 (Red) en el modelo OSI, que se encarga de unir 2 redes, en este caso, una inal&aacute;mbrica y una terrestre";
 choices[34][1] = "Es un dispositivo de nivel 2 (Enlace) en el modelo OSI, que se encarga de unir 2 redes, en este caso, una inal&aacute;mbrica y una terrestre";
 choices[34][2] = "Es una autoridad de certificaci&oacute;n que tiene certificados cruzados con otras muchas CA, pero que no expide certificados, simplemente vale para hacer que los de las otras CA sean interoperables entre si";
 choices[34][3] = "Todas son falsas";
 answers[34] = 2;
 units[34] = ['102'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 4439. ";
 preguntaids[34] = 4439


//  Id pregunta: 3550 Año de creación de pregunta: 2004
 questions[35]= "36)  La responsabilidad de los analistas, de acuerdo con M&Eacute;TRICA, es:";
 choices[35]= new Array();
 choices[35][0] = "Realizar las entrevistas al usuario";
 choices[35][1] = "Elaborar un cat&aacute;logo detallado de requisitos que permita describir con precisi&oacute;n el sistema de informaci&oacute;n";
 choices[35][2] = "Establecer la plataforma id&oacute;nea hardware/software que debe dar satisfacci&oacute;n a las necesidades";
 choices[35][3] = "Dirigir a los programadores";
 answers[35] = 1;
 units[35] = ['91'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 3550. TIC MAP B 2004";
 preguntaids[35] = 3550


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


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[37]= new Array();
 choices[37][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[37][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[37][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[37][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[37] = 3;
 units[37] = ['66'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 722. AGE A1 2015";
 preguntaids[37] = 722


//  Id pregunta: 14 Año de creación de pregunta: 2016
 questions[38]= "39)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[38]= new Array();
 choices[38][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[38][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[38][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[38][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[38] = 0;
 units[38] = ['1'];
 blocks[38] = ['A1'];
 comments[38] = "Id Pregunta: 14. Constituci&oacute;n de 1978";
 preguntaids[38] = 14


//  Id pregunta: 7231 Año de creación de pregunta: 2010
 questions[39]= "40)  En Java, se&ntilde;ale la afirmaci&oacute;n correcta con respecto a los Enterprise JavaBeans (EJB):";
 choices[39]= new Array();
 choices[39][0] = "Son componentes de servidor que encapsulan la l&oacute;gica de negocio de una aplicaci&oacute;n.";
 choices[39][1] = "Existen dos tipos de Enterprise Beans: Session y entity.";
 choices[39][2] = "Est&aacute;n escritos en XML para permitir su interoperabilidad.";
 choices[39][3] = "En un contenedor EJBs solo puede residir un bean.";
 answers[39] = 0;
 units[39] = ['64'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 7231. ";
 preguntaids[39] = 7231


//  Id pregunta: 10891 Año de creación de pregunta: 2015
 questions[40]= "41)  Las direcciones globales en ipv6 empiezan de la manera siguiente:";
 choices[40]= new Array();
 choices[40][0] = "2000::/3";
 choices[40][1] = "FF00::/10";
 choices[40][2] = "FE00::/12";
 choices[40][3] = "::1/128";
 answers[40] = 0;
 units[40] = ['109'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 10891. ";
 preguntaids[40] = 10891


//  Id pregunta: 8185 Año de creación de pregunta: 2011
 questions[41]= "42)  El mantenimiento que tiene por objeto adelantarse al deterioro de los equipos como consecuencia del uso y del paso del tiempo, se denomina:";
 choices[41]= new Array();
 choices[41][0] = "Mantenimiento adaptativo";
 choices[41][1] = "Mantenimiento preventivo";
 choices[41][2] = "Mantenimiento correctivo";
 choices[41][3] = "Mantenimiento evolutivo";
 answers[41] = 1;
 units[41] = ['91'];
 blocks[41] = ['B3'];
 comments[41] = "Id Pregunta: 8185. Examen TIC A2 2010 interna";
 preguntaids[41] = 8185


//  Id pregunta: 8981 Año de creación de pregunta: 2013
 questions[42]= "43)  Seg&uacute;n la Ley de Firma Electr&oacute;nica, se&ntilde;ale cu&aacute;l NO es un supuesto que exima al prestador de servicios de certificaci&oacute;n de la responsabilidad sobre los posibles da&ntilde;os y perjuicios causados a un firmante:";
 choices[42]= new Array();
 choices[42][0] = "Cuando el firmante no haya proporcionado al prestador informaci&oacute;n veraz, completa y exacta de los datos que deban constar en el certificado en el momento de emitir el mismo";
 choices[42][1] = "Cuado el firmante no haya comunicado al prestador cualquier cambio en las circunstancias reflejadas en el certificado electr&oacute;nico";
 choices[42][2] = "Cuando el firmante haya sido negligente en la conservaci&oacute;n de sus datos de creaci&oacute;n de firma";
 choices[42][3] = "Cuando el firmante utilice un certificado revocado sin que el prestador le haya notificado la suspensi&oacute;n de la vigencia";
 answers[42] = 3;
 units[42] = ['19'];
 blocks[42] = ['A4'];
 comments[42] = "Id Pregunta: 8981. Ley 59/2003, art&iacute;culo 23";
 preguntaids[42] = 8981


//  Id pregunta: 2385 Año de creación de pregunta: 2006
 questions[43]= "44)  Desde el punto de vista funcional la organizaci&oacute;n reticular se caracteriza por";
 choices[43]= new Array();
 choices[43][0] = "prescindir casi  totalmente de los formalismos.";
 choices[43][1] = "Las  comunicaciones son de todos con todos, sobre todo por niveles.";
 choices[43][2] = "Las comunicaciones suelen estar muy formalizadas y documentadas de  acuerdo a normas estrictas.";
 choices[43][3] = "La mayor&iacute;a de las comunicaciones, por no decir todas, se producen de jefe a subordinados";
 answers[43] = 1;
 units[43] = ['30'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 2385. ";
 preguntaids[43] = 2385


//  Id pregunta: 3866 Año de creación de pregunta: 2002
 questions[44]= "45)  Indicar cu&aacute;l no es una regla de construcci&oacute;n de un almac&eacute;n de datos dentro de un diagrama de flujo de datos:";
 choices[44]= new Array();
 choices[44][0] = "No puede crear, destruir ni transformar datos";
 choices[44][1] = "No se puede comunicar con otro almac&eacute;n de datos mediante un flujo directo, siempre tiene que haber un proceso entre ambos almacenes";
 choices[44][2] = "Debe referirse el almac&eacute;n al entorno f&iacute;sico";
 choices[44][3] = "Si se transpasa por un flujo de datos el contenido completo del almac&eacute;n, este flujo no llevar&aacute; nombre";
 answers[44] = 2;
 units[44] = ['85', '86'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 3866. ";
 preguntaids[44] = 3866


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[45]= "46)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[45]= new Array();
 choices[45][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[45][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[45][2] = "Cinco a&ntilde;os.";
 choices[45][3] = "Ninguna es correcta.";
 answers[45] = 2;
 units[45] = ['5'];
 blocks[45] = ['A1'];
 comments[45] = "Id Pregunta: 166. Uni&oacute;n Europea";
 preguntaids[45] = 166


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[46]= "47)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[46]= new Array();
 choices[46][0] = "El Presidente y su gabinete.";
 choices[46][1] = "El Presidente y sus Ministros.";
 choices[46][2] = "El Rey y el Presidente.";
 choices[46][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[46] = 3;
 units[46] = ['1'];
 blocks[46] = ['A1'];
 comments[46] = "Id Pregunta: 84. Constituci&oacute;n de 1978";
 preguntaids[46] = 84


//  Id pregunta: 10042 Año de creación de pregunta: 2015
 questions[47]= "48)  Se&ntilde;ale qu&eacute; software NO est&aacute; relacionado con las pruebas del software de aplicaciones web:";
 choices[47]= new Array();
 choices[47][0] = "Badboy.";
 choices[47][1] = "Selenium.";
 choices[47][2] = "Jmeter.";
 choices[47][3] = "Cherokee.";
 answers[47] = 3;
 units[47] = ['92'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 10042. Examen TIC A2 2014";
 preguntaids[47] = 10042


//  Id pregunta: 10785 Año de creación de pregunta: 2015
 questions[48]= "49)  Con respecto a las Comisiones Ministeriales de Administraci&oacute;n Digital, se&ntilde;ale la respuesta correcta:";
 choices[48]= new Array();
 choices[48][0] = "Definen las prioridades de inversi&oacute;n en materias TIC de acuerdo con los objetivos establecidos por el Gobierno.";
 choices[48][1] = "Impulsan la colaboraci&oacute;n y cooperaci&oacute;n con las comunidades aut&oacute;nomas y las entidades locales para la puesta en marcha de servicios interadministrativos integrados y la compartici&oacute;n de infraestructuras t&eacute;cnicas y los servicios comunes que permitan la racionalizaci&oacute;n de los recursos TIC a todos los niveles del Estado.";
 choices[48][2] = "Act&uacute;an como Observatorio de la Administraci&oacute;n Electr&oacute;nica y Transformaci&oacute;n Digital.";
 choices[48][3] = "Impulsan la digitalizaci&oacute;n de los servicios y procedimientos del departamento con el fin de homogeneizarlos, simplificarlos, mejorar su calidad y facilidad de uso, as&iacute; como las prestaciones ofrecidas a los ciudadanos y empresas, optimizando la utilizaci&oacute;n de los recursos TIC disponibles.";
 answers[48] = 3;
 units[48] = ['26'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 10785. ";
 preguntaids[48] = 10785


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[49]= "50)  El Tribunal de Justicia se cre&oacute; en:";
 choices[49]= new Array();
 choices[49][0] = "El Tratado de la CECA.";
 choices[49][1] = "El Tratado de Niza.";
 choices[49][2] = "El Tratado de &Aacute;msterdam.";
 choices[49][3] = "El Tratado de Lisboa.";
 answers[49] = 0;
 units[49] = ['5'];
 blocks[49] = ['A1'];
 comments[49] = "Id Pregunta: 129. Uni&oacute;n Europea";
 preguntaids[49] = 129


//  Id pregunta: 4293 Año de creación de pregunta: 2002
 questions[50]= "51)  A la hora de asegurar un Centro de Proceso de Datos:";
 choices[50]= new Array();
 choices[50][0] = "Habr&aacute; que considerar el riesgo de perturbaciones electromagn&eacute;ticas por parte del sistema de iluminaci&oacute;n (fluorescentes o similares)";
 choices[50][1] = "El riesgo de perturbaciones electromagn&eacute;ticas es siempre despreciable";
 choices[50][2] = "El riesgo de perturbaciones electromagn&eacute;ticas se elimina con la instalaci&oacute;n de toma de tierra en todos los dispositivos";
 choices[50][3] = "El riesgo de perturbaciones electromagn&eacute;ticas se elimina prohibiendo el uso de tel&eacute;fonos m&oacute;viles en el CPD";
 answers[50] = 0;
 units[50] = ['36'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 4293. ";
 preguntaids[50] = 4293


//  Id pregunta: 3687 Año de creación de pregunta: 2002
 questions[51]= "52)  Indique cu&aacute;l de las siguientes afirmaciones se aplica a un sistema de gesti&oacute;n de versiones:";
 choices[51]= new Array();
 choices[51][0] = "Facilita la planificaci&oacute;n de trabajos nocturnos";
 choices[51][1] = "Garantiza la disciplina y calidad en el paso de los programas a explotaci&oacute;n";
 choices[51][2] = "Define un entorno de preexplotaci&oacute;n";
 choices[51][3] = "Hace m&aacute;s eficiente la comunicaci&oacute;n entre programas";
 answers[51] = 1;
 units[51] = ['99'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 3687. ";
 preguntaids[51] = 3687


//  Id pregunta: 7243 Año de creación de pregunta: 2010
 questions[52]= "53)  Dentro de la gu&iacute;a de servicios ISO 9004, la orientaci&oacute;n para la direcci&oacute;n se basa en distintos principios de gesti&oacute;n";
 choices[52]= new Array();
 choices[52][0] = "Enfoque al cliente";
 choices[52][1] = "Liderazgo";
 choices[52][2] = "Participaci&oacute;n del personal";
 choices[52][3] = "Todas las respuestas anteriores son correctas";
 answers[52] = 3;
 units[52] = ['98'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 7243. ";
 preguntaids[52] = 7243


//  Id pregunta: 5755 Año de creación de pregunta: 2007
 questions[53]= "54)  &iquest;Cual de las siguientes t&eacute;cnicas NO es de gesti&oacute;n de proyectos?";
 choices[53]= new Array();
 choices[53][0] = "m&eacute;todo MARKII para el An&aacute;lisis de los Puntos Funci&oacute;n";
 choices[53][1] = "Diagrama de extrapolaci&oacute;n";
 choices[53][2] = "staffing size";
 choices[53][3] = "Joint Requirements Planning";
 answers[53] = 3;
 units[53] = ['31'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 5755. ";
 preguntaids[53] = 5755


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n se establece en la Ley 59/2003, de Firma Electr&oacute;nica, la cuant&iacute;a de las multas para los distintos tipos de infracciones ser&aacute;n:";
 choices[54]= new Array();
 choices[54][0] = "Para las muy graves de 300.001 a 600.000 euros; graves de 30.001 a 300.000 euros; leves hasta 60.000 euros.";
 choices[54][1] = "Para las muy graves de 150.001 a 600.000 euros; graves de 60.001 a 150.000 euros; leves hasta 60.000 euros.";
 choices[54][2] = "Para las muy graves de 150.001 a 300.000 euros; graves de 60.001 a 150.000 euros; leves hasta 30.000 euros.";
 choices[54][3] = "Para las muy graves de 150.001 a 600.000 euros; graves de 30.001 a 150.000 euros; leves hasta 30.000 euros.";
 answers[54] = 3;
 units[54] = ['19'];
 blocks[54] = ['A4'];
 comments[54] = "Id Pregunta: 441. AGE A2 2015";
 preguntaids[54] = 441


//  Id pregunta: 8290 Año de creación de pregunta: 2011
 questions[55]= "56)  Se ha puesto un servicio de DHCP en una subred. &iquest;Es posible que otra subred pueda usar el servicio DHCP y que este servicio asigne direcciones a los clientes de ambas?";
 choices[55]= new Array();
 choices[55][0] = "No, porque solo funciona con broadcast las peticiones.";
 choices[55][1] = "Si, porque las peticiones son unicast y llegar&aacute;n al servidor de DHCP";
 choices[55][2] = "Es posible pero hace falta un DHCP Relay.";
 choices[55][3] = "Si, con solo configurar el servidor DHCP para servir a la otra subred.";
 answers[55] = 2;
 units[55] = ['109'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 8290. Examen UPM A2 2011";
 preguntaids[55] = 8290


//  Id pregunta: 29 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[56]= new Array();
 choices[56][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[56][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[56][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[56][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[56] = 0;
 units[56] = ['1'];
 blocks[56] = ['A1'];
 comments[56] = "Id Pregunta: 29. Constituci&oacute;n de 1978";
 preguntaids[56] = 29


//  Id pregunta: 2787 Año de creación de pregunta: 2002
 questions[57]= "58)  El robo de ciclo explica que la duraci&oacute;n de las instrucciones no sea fija en funci&oacute;n de si existen o no robos de ciclo:";
 choices[57]= new Array();
 choices[57][0] = "En todo caso es falso";
 choices[57][1] = "Siempre es cierto";
 choices[57][2] = "Depende de la carga de trabajo de la CPU";
 choices[57][3] = "Depende del 'throughput'";
 answers[57] = 1;
 units[57] = ['56'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 2787. ";
 preguntaids[57] = 2787


//  Id pregunta: 8620 Año de creación de pregunta: 2013
 questions[58]= "59)  Una empresa tiene una p&aacute;gina web con informaci&oacute;n sobre su actividad, productos, y servicios que vende, pero &eacute;stos no se pueden comprar a trav&eacute;s de su p&aacute;gina web. &iquest;Le afectan a la empresa las obligaciones establecidas en la Ley de Servicios de la Sociedad de la Informaci&oacute;n para los prestadores de servicios?";
 choices[58]= new Array();
 choices[58][0] = "S&iacute;, ya que se trata de una actividad con trascendencia econ&oacute;mica que se realiza por medios electr&oacute;nicos";
 choices[58][1] = "No, al no haber venta directa de productos por medios electr&oacute;nicos";
 choices[58][2] = "Si, cualquier servicio que se preste a trav&eacute;s de internet incurre en estas obligaciones";
 choices[58][3] = "No, la ley no establece obligaciones para los prestadores de servicios";
 answers[58] = 0;
 units[58] = ['19'];
 blocks[58] = ['A4'];
 comments[58] = "Id Pregunta: 8620. Examen TIC A2 2011";
 preguntaids[58] = 8620


//  Id pregunta: 5805 Año de creación de pregunta: 2007
 questions[59]= "60)  HSDPA corresponde a la generaci&oacute;n m&oacute;vil";
 choices[59]= new Array();
 choices[59][0] = "4G";
 choices[59][1] = "3.5G";
 choices[59][2] = "5G";
 choices[59][3] = "Ninguna de las anteriores";
 answers[59] = 1;
 units[59] = ['117'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 5805. ";
 preguntaids[59] = 5805


//  Id pregunta: 192 Año de creación de pregunta: 2016
 questions[60]= "61)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[60]= new Array();
 choices[60][0] = "Un recurso de incumplimiento.";
 choices[60][1] = "Recurso de carencia.";
 choices[60][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[60][3] = "Ninguna es correcta.";
 answers[60] = 2;
 units[60] = ['5'];
 blocks[60] = ['A1'];
 comments[60] = "Id Pregunta: 192. Uni&oacute;n Europea";
 preguntaids[60] = 192


//  Id pregunta: 196 Año de creación de pregunta: 2016
 questions[61]= "62)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[61]= new Array();
 choices[61][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[61][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[61][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[61][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[61] = 3;
 units[61] = ['5'];
 blocks[61] = ['A1'];
 comments[61] = "Id Pregunta: 196. Uni&oacute;n Europea";
 preguntaids[61] = 196


//  Id pregunta: 6705 Año de creación de pregunta: 2009
 questions[62]= "63)  Las p&aacute;ginas de internet de las administraciones p&uacute;blicas o con financiaci&oacute;n p&uacute;blica existentes a la entrada en vigor del RD 1494/2007 por el que se aprueba el Reglamento sobre las condiciones b&aacute;sicas para el acceso de las personas con discapacidad a las tecnolog&iacute;as de la informaci&oacute;n, deben adaptarse a la norma:";
 choices[62]= new Array();
 choices[62][0] = "Tres meses desde la entrada en vigor del RD.";
 choices[62][1] = "Seis meses desde la entrada en vigor del RD.";
 choices[62][2] = "El d&iacute;a de entrada en vigor del RD.";
 choices[62][3] = "Antes del 31 de diciembre de 2008";
 answers[62] = 1;
 units[62] = ['42'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 6705. MAP 2008 A1";
 preguntaids[62] = 6705


//  Id pregunta: 1117 Año de creación de pregunta: 2016
 questions[63]= "64)  Se&ntilde;ale cu&aacute;l de los siguientes conceptos NO est&aacute; relacionado con el sistema de archivos distribuido Lustre:";
 choices[63]= new Array();
 choices[63][0] = "DSS (Distributed Storage Server).";
 choices[63][1] = "OST (Object Storage Target).";
 choices[63][2] = "OSS (Object Storage Server).";
 choices[63][3] = "MDS (MetaData Server).";
 answers[63] = 0;
 units[63] = ['53'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 1117. ";
 preguntaids[63] = 1117


//  Id pregunta: 9880 Año de creación de pregunta: 2015
 questions[64]= "65)  Elija la afirmaci&oacute;n correcta sobre el est&aacute;ndar DOCSIS:";
 choices[64]= new Array();
 choices[64][0] = "Se puede emplear para proporcionar acceso a Internet sobre una infraestructura de red HFC.";
 choices[64][1] = "Permite a&ntilde;adir transferencias de datos de alta velocidad a un sistema de televisi&oacute;n por cable (CATV)";
 choices[64][2] = "La versi&oacute;n europea se denomina EuroDOCSIS.";
 choices[64][3] = "Todas las anteriores son correctas.";
 answers[64] = 3;
 units[64] = ['115'];
 blocks[64] = ['B4'];
 comments[64] = "Id Pregunta: 9880. ";
 preguntaids[64] = 9880


//  Id pregunta: 4876 Año de creación de pregunta: 2002
 questions[65]= "66)  La direcci&oacute;n IP 192.168.42.127:";
 choices[65]= new Array();
 choices[65][0] = "Es una direcci&oacute;n de la red Internet";
 choices[65][1] = "Es una direcci&oacute;n de la red Internet, clase C";
 choices[65][2] = "Es una direcci&oacute;n de una red IP privada";
 choices[65][3] = "Es una direcci&oacute;n de la red Internet, clase B";
 answers[65] = 2;
 units[65] = ['105'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 4876. ";
 preguntaids[65] = 4876


//  Id pregunta: 1291 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[66]= new Array();
 choices[66][0] = "Indirecta.";
 choices[66][1] = "Directa.";
 choices[66][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[66][3] = "Directa o indirecta, sequen decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[66] = 1;
 units[66] = ['14'];
 blocks[66] = ['A3'];
 comments[66] = "Id Pregunta: 1291. ";
 preguntaids[66] = 1291


//  Id pregunta: 268 Año de creación de pregunta: 2016
 questions[67]= "68)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[67]= new Array();
 choices[67][0] = "Cifrada";
 choices[67][1] = "Conjunta";
 choices[67][2] = "Sistem&aacute;tica";
 choices[67][3] = "Todas son correctas";
 answers[67] = 3;
 units[67] = ['11'];
 blocks[67] = ['A2'];
 comments[67] = "Id Pregunta: 268. Presupuestos generales";
 preguntaids[67] = 268


//  Id pregunta: 10681 Año de creación de pregunta: 2015
 questions[68]= "69)  &iquest;Cada cu&aacute;nto tiempo debe de revisarse el cat&aacute;logo de est&aacute;ndares?";
 choices[68]= new Array();
 choices[68][0] = "2 veces al a&ntilde;o";
 choices[68][1] = "Cada a&ntilde;o";
 choices[68][2] = "Cada 2 a&ntilde;os";
 choices[68][3] = "Cada 3 a&ntilde;os";
 answers[68] = 1;
 units[68] = ['44'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 10681. ";
 preguntaids[68] = 10681


//  Id pregunta: 8041 Año de creación de pregunta: 2011
 questions[69]= "70)  Seg&uacute;n el Real Decreto 1720/2007, la conservaci&oacute;n de una copia de respaldo de los datos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, es una medida de protecci&oacute;n de nivel";
 choices[69]= new Array();
 choices[69][0] = "B&aacute;sico";
 choices[69][1] = "Medio";
 choices[69][2] = "Alto";
 choices[69][3] = "No se contempla esta medida de protecci&oacute;n";
 answers[69] = 2;
 units[69] = ['35'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 8041. Examen TIC A2 2010";
 preguntaids[69] = 8041


//  Id pregunta: 9267 Año de creación de pregunta: 2014
 questions[70]= "71)  En la Capa de Sesi&oacute;n (nivel 5) &iquest;cu&aacute;ntos tipos de puntos de sincronizaci&oacute;n existen?";
 choices[70]= new Array();
 choices[70][0] = "2, uno mayor y otro menor.";
 choices[70][1] = "3, mayor, mediano y menor.";
 choices[70][2] = "Ninguno.";
 choices[70][3] = "Depende del protocolo implementado.";
 answers[70] = 0;
 units[70] = ['105'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 9267. ";
 preguntaids[70] = 9267


//  Id pregunta: 1407 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;C&oacute;mo se llama la clasificaci&oacute;n no jer&aacute;rquica de la informaci&oacute;n mediante etiquetas/tags por parte de los usuarios de la misma?";
 choices[71]= new Array();
 choices[71][0] = "Web 3.0.";
 choices[71][1] = "Taxonom&iacute;a.";
 choices[71][2] = "Labelling.";
 choices[71][3] = "Folcsonom&iacute;a.";
 answers[71] = 3;
 units[71] = ['74'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 1407. ";
 preguntaids[71] = 1407


//  Id pregunta: 1421 Año de creación de pregunta: 2016
 questions[72]= "73)  Todos tienen derecho a sindicarse libremente. La ley podr&aacute; limitar o exceptuar el ejercicio de este derecho, seg&uacute;n el art&iacute;culo 28 de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[72]= new Array();
 choices[72][0] = "A las Fuerzas o Institutos armados.";
 choices[72][1] = "A los Cuerpos o Fuerzas armadas.";
 choices[72][2] = "A los Institutos sometidos a disciplina militar.";
 choices[72][3] = "A los funcionarios p&uacute;blicos.";
 answers[72] = 0;
 units[72] = ['1'];
 blocks[72] = ['A1'];
 comments[72] = "Id Pregunta: 1421. ";
 preguntaids[72] = 1421


//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[73]= "74)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[73]= new Array();
 choices[73][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[73][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[73][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[73][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[73] = 0;
 units[73] = ['11'];
 blocks[73] = ['A2'];
 comments[73] = "Id Pregunta: 317. Presupuestos generales";
 preguntaids[73] = 317


//  Id pregunta: 5821 Año de creación de pregunta: 2007
 questions[74]= "75)  La diferencia entre la fibra &oacute;ptica monomodo y multimodo radica, principalmente, en";
 choices[74]= new Array();
 choices[74][0] = "las frecuencias usadas";
 choices[74][1] = "los adaptadores usados";
 choices[74][2] = "la forma en que el haz se refleja dentro del n&uacute;cleo de la fibra";
 choices[74][3] = "Ninguna de las anteriores";
 answers[74] = 2;
 units[74] = ['104'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 5821. Examen 2006 JCYL";
 preguntaids[74] = 5821


