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
//  Id pregunta: 5533 Año de creación de pregunta: 2007
 questions[0]= "1)  Cu&aacute;l de las siguientes afirmaciones sobre la tecnolog&iacute;a de acceso a bases de datos ADO.NET no es correcta?";
 choices[0]= new Array();
 choices[0][0] = "El modelo de objetos ADO.NET provee una estructura de acceso a distintos or&iacute;genes de datos. Tiene 2 componentes principales: El Dataset y el proveedor de Datos .NET";
 choices[0][1] = "ADO.NET utiliza XML como formato para transmitir datos desde y hacia su base de datos y su aplicaci&oacute;n Web.";
 choices[0][2] = "ADO.NET es un conjunto de clases que se utiliza para acceder y manipular or&iacute;genes de datos como por ejemplo, una base de datos de SQL Server o una planilla Excel.";
 choices[0][3] = "ADO.NET utiliza un modelo de acceso pensando para entornos permanentemente conectados. Esto quiere decir que la aplicaci&oacute;n y el origen de datos deben estar en comunicaci&oacute;n permanente.";
 answers[0] = 3;
 units[0] = ['63'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 5533. ";
 preguntaids[0] = 5533


//  Id pregunta: 10786 Año de creación de pregunta: 2015
 questions[1]= "2)  La Ley del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas es:";
 choices[1]= new Array();
 choices[1][0] = "Ley 39/2015";
 choices[1][1] = "Ley 40/2015";
 choices[1][2] = "Ley 29/2015";
 choices[1][3] = "Ley 30/2015";
 answers[1] = 0;
 units[1] = ['7'];
 blocks[1] = ['A2'];
 comments[1] = "Id Pregunta: 10786. ";
 preguntaids[1] = 10786


//  Id pregunta: 1089 Año de creación de pregunta: 2016
 questions[2]= "3)  Se&ntilde;ale la frase ERR&Oacute;NEA acerca de los sistemas de tiempo compartido.";
 choices[2]= new Array();
 choices[2][0] = "El algoritmo de round robin se basa en asignar por turno per&iacute;odos de tiempo limitados a cada uno de los procesos.";
 choices[2][1] = "El algoritmo del banquero impide asignar a un proceso un recurso de un tipo del que ya no queden m&aacute;s recursos libres.";
 choices[2][2] = "El aplazamiento indefinido se produce cuando un proceso solicita un recurso que otro proceso ha dejado de usar sin marcarlo como &ldquo;desocupado&rdquo;.";
 choices[2][3] = "El mecanismo de no apropiaci&oacute;n evita que puedan producirse &ldquo;deadlocks&rdquo; entre procesos.";
 answers[2] = 3;
 units[2] = ['56'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 1089. ";
 preguntaids[2] = 1089


//  Id pregunta: 8555 Año de creación de pregunta: 2013
 questions[3]= "4)  Indicar el requisito imprescindible para que un programa de ordenador sea protegible.";
 choices[3]= new Array();
 choices[3][0] = "Estar documentado correctamente";
 choices[3][1] = "Estar desarrollado por una persona f&iacute;sica";
 choices[3][2] = "Ser la primera versi&oacute;n de un programa, ya que las sucesivas no est&aacute;n protegidas";
 choices[3][3] = "Ser original";
 answers[3] = 3;
 units[3] = ['41'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 8555. ";
 preguntaids[3] = 8555


//  Id pregunta: 4177 Año de creación de pregunta: 2006
 questions[4]= "5)  En un DFD (Diagrama de Flujos de Datos) el diagrama que se representa mediante las entidades externas de entrada y salida y un solo proceso principal es el:";
 choices[4]= new Array();
 choices[4][0] = "Diagrama de bloques";
 choices[4][1] = "Diagrama de contexto";
 choices[4][2] = "Diagrama de primer nivel";
 choices[4][3] = "Diagrama b&aacute;sico";
 answers[4] = 1;
 units[4] = ['85', '86'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 4177. ";
 preguntaids[4] = 4177


//  Id pregunta: 6568 Año de creación de pregunta: 2003
 questions[5]= "6)  Dentro del chip criptogr&aacute;fico del DNI electr&oacute;nico podemos encontrar tres zonas de datos diferenciadas. Una de las zonas s&oacute;lo es accesible por la Direcci&oacute;n General de la Polic&iacute;a. Se&ntilde;ale su nombre:";
 choices[5]= new Array();
 choices[5][0] = "Zona p&uacute;blica";
 choices[5][1] = "Zona de seguridad";
 choices[5][2] = "Zona privada";
 choices[5][3] = "Zona confidencial";
 answers[5] = 1;
 units[5] = ['78'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 6568. ";
 preguntaids[5] = 6568


//  Id pregunta: 267 Año de creación de pregunta: 2016
 questions[6]= "7)  El cr&eacute;dito presupuestario es...";
 choices[6]= new Array();
 choices[6][0] = "El sujeto que realiza el gasto";
 choices[6][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[6][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[6][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[6] = 2;
 units[6] = ['11'];
 blocks[6] = ['A2'];
 comments[6] = "Id Pregunta: 267. Presupuestos generales";
 preguntaids[6] = 267


//  Id pregunta: 3166 Año de creación de pregunta: 2002
 questions[7]= "8)  Cuando la transmisi&oacute;n de datos entre dos sistemas se caracteriza por llevar un bit de comienzo y un bit de parada, separando a cada unidad de informaci&oacute;n, se trata de:";
 choices[7]= new Array();
 choices[7][0] = "Comunicaci&oacute;n s&iacute;ncrona";
 choices[7][1] = "Comunicaci&oacute;n as&iacute;ncrona";
 choices[7][2] = "Comunicaci&oacute;n semiduplex (half-duplex)";
 choices[7][3] = "Comunicaci&oacute;n duplex (full-duplex)";
 answers[7] = 1;
 units[7] = ['109'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 3166. ";
 preguntaids[7] = 3166


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[8]= "9)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[8]= new Array();
 choices[8][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[8][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[8][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[8][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[8] = 3;
 units[8] = ['1'];
 blocks[8] = ['A1'];
 comments[8] = "Id Pregunta: 27. Constituci&oacute;n de 1978";
 preguntaids[8] = 27


//  Id pregunta: 417 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[9]= new Array();
 choices[9][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[9][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[9][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[9][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[9] = 1;
 units[9] = ['15'];
 blocks[9] = ['A3'];
 comments[9] = "Id Pregunta: 417. Mercado laboral";
 preguntaids[9] = 417


//  Id pregunta: 4767 Año de creación de pregunta: 2002
 questions[10]= "11)  El tipo de fibra &oacute;ptica que permite la transmisi&oacute;n a m&aacute;s velocidad es:";
 choices[10]= new Array();
 choices[10][0] = "&Iacute;ndice gradual";
 choices[10][1] = "Multimodo";
 choices[10][2] = "Fibra &oacute;ptica de salto de &iacute;ndice";
 choices[10][3] = "Monomodo";
 answers[10] = 3;
 units[10] = ['104'];
 blocks[10] = ['B4'];
 comments[10] = "Id Pregunta: 4767. ";
 preguntaids[10] = 4767


//  Id pregunta: 3681 Año de creación de pregunta: 2002
 questions[11]= "12)  Indicar cu&aacute;l no es una regla de construcci&oacute;n de una entidad externa dentro de un diagrama de flujo de datos:";
 choices[11]= new Array();
 choices[11][0] = "Representa procesos de aplicaci&oacute;n que no pertenecen al del estudio";
 choices[11][1] = "No est&aacute; permitido que se comuniquen entre s&iacute; las entidades externas a trav&eacute;s de flujos de datos";
 choices[11][2] = "Pueden aparecer en los distintos niveles de un DFD, pero se recomienda que s&oacute;lo aparezcan en el nivel cero";
 choices[11][3] = "Se pueden representar varias veces en el mismo gr&aacute;fico para evitar entrecruzamiento de l&iacute;neas";
 answers[11] = 0;
 units[11] = ['85', '86'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 3681. ";
 preguntaids[11] = 3681


//  Id pregunta: 4724 Año de creación de pregunta: 2002
 questions[12]= "13)  Indicar entre las siguientes normas del IEEE la que trata sobre redes inal&aacute;mbricas:";
 choices[12]= new Array();
 choices[12][0] = "802.1";
 choices[12][1] = "802.11";
 choices[12][2] = "802.12";
 choices[12][3] = "802.13";
 answers[12] = 1;
 units[12] = ['101'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 4724. ";
 preguntaids[12] = 4724


//  Id pregunta: 8092 Año de creación de pregunta: 2011
 questions[13]= "14)  Entre los tipos de componentes que incluye la especificaci&oacute;n de aplicaciones basadas en J2EE 1.4 se encuentran:";
 choices[13]= new Array();
 choices[13][0] = "P&aacute;ginas Asp y VBScript";
 choices[13][1] = "Applet, Servlets, EJBs";
 choices[13][2] = "Javascript y p&aacute;ginas JSP";
 choices[13][3] = "Ninguna de las anteriores";
 answers[13] = 1;
 units[13] = ['64'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 8092. Analista Ayto. Madrid 2010";
 preguntaids[13] = 8092


//  Id pregunta: 10505 Año de creación de pregunta: 2015
 questions[14]= "15)  La metodolog&iacute;a M&eacute;trica 3, contempla el uso de la t&eacute;cnica de an&aacute;lisis coste / beneficio. Se&ntilde;ale qu&eacute; caracteriza su uso.";
 choices[14]= new Array();
 choices[14][0] = "Se utiliza en etapas medias y tard&iacute;as del proyecto";
 choices[14][1] = "Sugiere utilizarla en PSI (a la hora de definir el plan de acci&oacute;n y la arquitectura tecnol&oacute;gica)";
 choices[14][2] = "Para su uso se determinan costes tangibles e intangibles y beneficios tangibles";
 choices[14][3] = "Se desaconseja su uso en EVS, cuando se valoran las alternativas";
 answers[14] = 1;
 units[14] = ['91'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 10505. ";
 preguntaids[14] = 10505


//  Id pregunta: 4893 Año de creación de pregunta: 2002
 questions[15]= "16)  La jerarqu&iacute;a digital MDH:";
 choices[15]= new Array();
 choices[15][0] = "Responde por Multimedia Digital Hierarchy";
 choices[15][1] = "Responde por Multiplexed Digital Hierarchy";
 choices[15][2] = "No existe";
 choices[15][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[15] = 2;
 units[15] = ['110'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 4893. ";
 preguntaids[15] = 4893


//  Id pregunta: 10815 Año de creación de pregunta: 2015
 questions[16]= "17)  Seg&uacute;n la Ley 25/2013:";
 choices[16]= new Array();
 choices[16][0] = "Las facturas electr&oacute;nicas que se remitan a las Administraciones P&uacute;blicas deber&aacute;n tener un formato estructurado y estar firmadas con firma electr&oacute;nica avanzada basada en un certificado reconocido.";
 choices[16][1] = "Las Entidades Locales podr&aacute;n adherirse a la utilizaci&oacute;n del Punto general de entrada de facturas electr&oacute;nicas que proporcione su Diputaci&oacute;n, Comunidad Aut&oacute;noma o el Estado.";
 choices[16][2] = "El Punto general de entrada de facturas electr&oacute;nicas proporcionar&aacute; un servicio autom&aacute;tico de puesta a disposici&oacute;n o de remisi&oacute;n electr&oacute;nica de las mismas a las oficinas contables competentes para su registro.";
 choices[16][3] = "Todas las anteriores son correctas";
 answers[16] = 3;
 units[16] = ['10'];
 blocks[16] = ['A2'];
 comments[16] = "Id Pregunta: 10815. ";
 preguntaids[16] = 10815


//  Id pregunta: 4307 Año de creación de pregunta: 2004
 questions[17]= "18)  La tecnolog&iacute;a DCOM toma las siglas de:";
 choices[17]= new Array();
 choices[17][0] = "Distributed Communication Model";
 choices[17][1] = "Development of Concurrent Multisystems";
 choices[17][2] = "Dynamic Component-Oriented Measure";
 choices[17][3] = "Distributed Component Object Model";
 answers[17] = 3;
 units[17] = ['64'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 4307. ";
 preguntaids[17] = 4307


//  Id pregunta: 8350 Año de creación de pregunta: 2011
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes organizaciones de estandarizaci&oacute;n NO es internacional?";
 choices[18]= new Array();
 choices[18][0] = "IEEE";
 choices[18][1] = "ISO";
 choices[18][2] = "IEC";
 choices[18][3] = "ANSI";
 answers[18] = 3;
 units[18] = ['48'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 8350. Examen UC3M 2010";
 preguntaids[18] = 8350


//  Id pregunta: 8604 Año de creación de pregunta: 2013
 questions[19]= "20)  &iquest;Qu&eacute; tipo de conexi&oacute;n inal&aacute;mbrica se suele distinguir en la conexi&oacute;n de los ratones al PC?";
 choices[19]= new Array();
 choices[19][0] = "Radio Frecuencia (banda de 5 Ghz), Infrarrojo, Bluetooth";
 choices[19][1] = "Radio Frecuencia (banda de 2,4 Ghz) e Infrarrojo.";
 choices[19][2] = "Radio Frecuencia (banda de 2,4 Ghz), Infrarrojo y Bluetooth.";
 choices[19][3] = "No se utilizan las conexiones inal&aacute;mbricas para los ratones al no considerarse suficientemente estables";
 answers[19] = 2;
 units[19] = ['51'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 8604. ";
 preguntaids[19] = 8604


//  Id pregunta: 5187 Año de creación de pregunta: 2003
 questions[20]= "21)  Un &quot;proxy&quot; o apoderado de HTTP empleado para la conexi&oacute;n de usuarios de una organizaci&oacute;n a Internet:";
 choices[20]= new Array();
 choices[20][0] = "S&oacute;lo permite controlar qui&eacute;nes pueden acceder y a qu&eacute; servidores";
 choices[20][1] = "Es un elemento de seguridad";
 choices[20][2] = "Esencialmente sirve para mejorar los tiempos de acceso a Internet";
 choices[20][3] = "No es &uacute;til si ya se tiene un filtro de paquetes en el acceso a Internet";
 answers[20] = 1;
 units[20] = ['116'];
 blocks[20] = ['B4'];
 comments[20] = "Id Pregunta: 5187. ";
 preguntaids[20] = 5187


//  Id pregunta: 4434 Año de creación de pregunta: 2002
 questions[21]= "22)  Se dice que una tarea o rutina es as&iacute;ncrona cuando:";
 choices[21]= new Array();
 choices[21][0] = "Gestiona un enlace de terminales 'tontos'";
 choices[21][1] = "Lanza una transacci&oacute;n a un terminal as&iacute;ncrono y espera su contestaci&oacute;n";
 choices[21][2] = "La tarea que la lanza no espera a su terminaci&oacute;n para continuar";
 choices[21][3] = "Son rutinas especializadas de los Sistemas de Tiempo Real dedicadas a la supervis&oacute;n de eventos en los elementos anal&oacute;gicos que controlan";
 answers[21] = 2;
 units[21] = ['103'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4434. ";
 preguntaids[21] = 4434


//  Id pregunta: 182 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Qu&eacute; pa&iacute;s entr&oacute; a formar parte de la Uni&oacute;n Europea el mismo a&ntilde;o en que formaliz&oacute; su adhesi&oacute;n nuestro pa&iacute;s?";
 choices[22]= new Array();
 choices[22][0] = "Grecia";
 choices[22][1] = "Portugal";
 choices[22][2] = "Las alternativas a) y b) son correctas";
 choices[22][3] = "Ninguno";
 answers[22] = 1;
 units[22] = ['5'];
 blocks[22] = ['A1'];
 comments[22] = "Id Pregunta: 182. Uni&oacute;n Europea";
 preguntaids[22] = 182


//  Id pregunta: 6916 Año de creación de pregunta: 2010
 questions[23]= "24)  &iquest;Cu&aacute;ntas versiones de NFS hay actualmente en uso?";
 choices[23]= new Array();
 choices[23][0] = "Tres: NFSv2, NFSv3 y NFSv4.";
 choices[23][1] = "Dos: NFSv3 y NFSv4.";
 choices[23][2] = "Tres: NFSv3, NFSv4 y NFSv5.";
 choices[23][3] = "Tres: NFSv1, NFSv2 y NFSv3.";
 answers[23] = 0;
 units[23] = ['103'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 6916. ";
 preguntaids[23] = 6916


//  Id pregunta: 85 Año de creación de pregunta: 2016
 questions[24]= "25)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[24]= new Array();
 choices[24][0] = "Municipios, provincias y CCAA.";
 choices[24][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[24][2] = "En CCAA, 50 provincias y municipios.";
 choices[24][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[24] = 2;
 units[24] = ['1'];
 blocks[24] = ['A1'];
 comments[24] = "Id Pregunta: 85. Constituci&oacute;n de 1978";
 preguntaids[24] = 85


//  Id pregunta: 9852 Año de creación de pregunta: 2015
 questions[25]= "26)  &iquest;Cu&aacute;l de estos no es un concepto fundamental de la excelencia seg&uacute;n el modelo EFQM?";
 choices[25]= new Array();
 choices[25][0] = "Orientaci&oacute;n hacia los resultados";
 choices[25][1] = "Liderazgo y coherencia en los objetivos";
 choices[25][2] = "Desarrollo de Alianzas";
 choices[25][3] = "Planificaci&oacute;n a corto plazo";
 answers[25] = 3;
 units[25] = ['98'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 9852. ";
 preguntaids[25] = 9852


//  Id pregunta: 6162 Año de creación de pregunta: 2001
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo de actualizaci&oacute;n de CRLs?";
 choices[26]= new Array();
 choices[26][0] = "muestreo de CRLs";
 choices[26][1] = "env&iacute;o de CRL";
 choices[26][2] = "anuncio de CRL";
 choices[26][3] = "verificaci&oacute;n en l&iacute;nea";
 answers[26] = 1;
 units[26] = ['77'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 6162. ";
 preguntaids[26] = 6162


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[27]= "28)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[27]= new Array();
 choices[27][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[27][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[27][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[27][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[27] = 3;
 units[27] = ['12'];
 blocks[27] = ['A3'];
 comments[27] = "Id Pregunta: 328. Modelo econ&oacute;mico";
 preguntaids[27] = 328


//  Id pregunta: 2714 Año de creación de pregunta: 2002
 questions[28]= "29)  Cuando en las entidades descritas en el modelo de datos existe una dependencia funcional de los atributos de todos los atributos que componen la clave, se dice que el modelo est&aacute; normalizado:";
 choices[28]= new Array();
 choices[28][0] = "En segunda forma normal";
 choices[28][1] = "En primera forma normal";
 choices[28][2] = "En tercera forma normal";
 choices[28][3] = "En cuarta forma normal";
 answers[28] = 0;
 units[28] = ['61'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 2714. ";
 preguntaids[28] = 2714


//  Id pregunta: 937 Año de creación de pregunta: 2016
 questions[29]= "30)  Se recomienda que todas aquellas campa&ntilde;as de los ministerios que cuenten con su propia p&aacute;gina web, cuenten adem&aacute;s con un subdominio o URL secundaria en la estructura general de la p&aacute;gina web del Ministerio. Indique la opci&oacute;n correcta.";
 choices[29]= new Array();
 choices[29][0] = "Se podr&aacute; utilizar de forma opcional descripciones sem&aacute;nticas en el nombramiento y titulaci&oacute;n de los subdominios.";
 choices[29][1] = "RUN implementa una soluci&oacute;n sencilla de generaci&oacute;n de URL cortas  para una mejora en la eficiencia de la remisi&oacute;n de direcciones web mediante email, sms, twitter etc";
 choices[29][2] = "El nombre del subdominio o URL secundaria debe ser distinto al que se utilice como URL independiente.";
 choices[29][3] = "Con los subdominios o URL secundarias los robots de los buscadores requerir&aacute;n m&aacute;s tiempo en interpretar su dependencia contextual con el Ministerio u &Oacute;rgano de la Administraci&oacute;n.";
 answers[29] = 1;
 units[29] = ['125'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 937. Gu&iacute;a de Comunicaci&oacute;n Digital de la AGE";
 preguntaids[29] = 937


//  Id pregunta: 1015 Año de creación de pregunta: 2016
 questions[30]= "31)  Los servicios territoriales de la Administraci&oacute;n General del Estado en la Comunidad Aut&oacute;noma se organizar&aacute;n atendiendo al mejor cumplimiento de sus fines, en:";
 choices[30]= new Array();
 choices[30][0] = "servicios integrados en las Delegaciones del Gobierno";
 choices[30][1] = "servicios no integrados en las Delegaciones del Gobierno";
 choices[30][2] = "servicios integrados y no integrados en las Delegaciones del Gobierno";
 choices[30][3] = "ninguna es correcta";
 answers[30] = 2;
 units[30] = ['4', '7', '8', '9'];
 blocks[30] = ['A1', 'A2'];
 comments[30] = "Id Pregunta: 1015. Ley 40/2015";
 preguntaids[30] = 1015


//  Id pregunta: 10353 Año de creación de pregunta: 2015
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes niveles de los Diagramas de Flujo de Datos no es correcto?";
 choices[31]= new Array();
 choices[31][0] = "Nivel 0: Diagrama de Contexto";
 choices[31][1] = "Nivel 1: Diagrama de Subsistemas";
 choices[31][2] = "Nivel 3: Diagrama de Funciones de los Sistemas";
 choices[31][3] = "Nivel 4: Diagrama de Procesos";
 answers[31] = 2;
 units[31] = ['85'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 10353. ";
 preguntaids[31] = 10353


//  Id pregunta: 2474 Año de creación de pregunta: 2009
 questions[32]= "33)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, la retenci&oacute;n de datos de tr&aacute;fico relativo a las comunicaciones electr&oacute;nicas es deber de:";
 choices[32]= new Array();
 choices[32][0] = "los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones, en los t&eacute;rminos establecidos en la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones.";
 choices[32][1] = "los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico, en los t&eacute;rminos establecidos en la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones.";
 choices[32][2] = "los Operadores de Servicios de comunicaciones electr&oacute;nicas, los proveedores de Acceso a redes de telecomunicaciones y los prestadores de servicios de alojamiento de datos";
 choices[32][3] = "las respuestas 'a' y 'b' son correctas";
 answers[32] = 0;
 units[32] = ['19'];
 blocks[32] = ['A4'];
 comments[32] = "Id Pregunta: 2474. ";
 preguntaids[32] = 2474


//  Id pregunta: 149 Año de creación de pregunta: 2016
 questions[33]= "34)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[33]= new Array();
 choices[33][0] = "Acuerdos cualificados.";
 choices[33][1] = "Acuerdos ponderados.";
 choices[33][2] = "Valoraci&oacute;n de los votos.";
 choices[33][3] = "Ponderaci&oacute;n de los votos.";
 answers[33] = 3;
 units[33] = ['5'];
 blocks[33] = ['A1'];
 comments[33] = "Id Pregunta: 149. Uni&oacute;n Europea";
 preguntaids[33] = 149


//  Id pregunta: 987 Año de creación de pregunta: 2016
 questions[34]= "35)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[34]= new Array();
 choices[34][0] = "Subsecretario";
 choices[34][1] = "Subdirector general";
 choices[34][2] = "Secretario de Estado";
 choices[34][3] = "ninguna es correcta";
 answers[34] = 0;
 units[34] = ['4', '7', '8', '9'];
 blocks[34] = ['A1', 'A2'];
 comments[34] = "Id Pregunta: 987. Ley 40/2015";
 preguntaids[34] = 987


//  Id pregunta: 45 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[35]= new Array();
 choices[35][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[35][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[35][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[35][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[35] = 0;
 units[35] = ['1'];
 blocks[35] = ['A1'];
 comments[35] = "Id Pregunta: 45. Constituci&oacute;n de 1978";
 preguntaids[35] = 45


//  Id pregunta: 3989 Año de creación de pregunta: 2002
 questions[36]= "37)  &iquest;Cu&aacute;les son los m&eacute;todos b&aacute;sicos de reconocimiento de caracteres en OCR?:";
 choices[36]= new Array();
 choices[36][0] = "Comparaci&oacute;n matricial";
 choices[36][1] = "Extracci&oacute;n de caracter&iacute;sticas";
 choices[36][2] = "Reconocimiento de patrones";
 choices[36][3] = "Son v&aacute;lidas todas las respuestas anteriores";
 answers[36] = 3;
 units[36] = ['80'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 3989. ";
 preguntaids[36] = 3989


//  Id pregunta: 1516 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes comandos de Linux se utiliza para configurar un firewall?";
 choices[37]= new Array();
 choices[37][0] = "inetfw";
 choices[37][1] = "iptables";
 choices[37][2] = "tcpdump";
 choices[37][3] = "Iwconfig";
 answers[37] = 1;
 units[37] = ['57'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 1516. ";
 preguntaids[37] = 1516


//  Id pregunta: 1452 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes servicios NO est&aacute; regulado por la LSSI en su anexo de definiciones?";
 choices[38]= new Array();
 choices[38][0] = "La contrataci&oacute;n de bienes y servicios por v&iacute;a electr&oacute;nica.";
 choices[38][1] = "El v&iacute;deo bajo demanda.";
 choices[38][2] = "El teletexto televisivo.";
 choices[38][3] = "La organizaci&oacute;n y gesti&oacute;n de subastas por medios electr&oacute;nicos.";
 answers[38] = 2;
 units[38] = ['19'];
 blocks[38] = ['A4'];
 comments[38] = "Id Pregunta: 1452. ";
 preguntaids[38] = 1452


//  Id pregunta: 1134 Año de creación de pregunta: 2016
 questions[39]= "40)  Los procesos de la estructura principal de M&eacute;trica v3 son:";
 choices[39]= new Array();
 choices[39][0] = "Planificaci&oacute;n, An&aacute;lisis, Construcci&oacute;n y Mantenimiento de sistemas de informaci&oacute;n.";
 choices[39][1] = "An&aacute;lisis, Desarrollo y Mantenimiento de sistemas de informaci&oacute;n.";
 choices[39][2] = "An&aacute;lisis, Desarrollo, Pruebas y Mantenimiento de sistemas de informaci&oacute;n.";
 choices[39][3] = "Planificaci&oacute;n, Desarrollo y Mantenimiento de sistemas de informaci&oacute;n.";
 answers[39] = 3;
 units[39] = ['91'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 1134. ";
 preguntaids[39] = 1134


//  Id pregunta: 1519 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Cu&aacute;ntos discos f&iacute;sicos son necesarios como m&iacute;nimo para poder establecer una configuraci&oacute;n en RAID 5?";
 choices[40]= new Array();
 choices[40][0] = "1";
 choices[40][1] = "2";
 choices[40][2] = "3";
 choices[40][3] = "4";
 answers[40] = 2;
 units[40] = ['53'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 1519. ";
 preguntaids[40] = 1519


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[41]= "42)  Cuando resulte eficaz, proporcionado y necesario para la consecuci&oacute;n de los fines propios del procedimiento, y de manera motivada, podr&aacute;n incluirse tr&aacute;mites adicionales o distintos a los contemplados en esta Ley:";
 choices[41]= new Array();
 choices[41][0] = "solo mediante ley";
 choices[41][1] = "reglamentariamente";
 choices[41][2] = "mediante ley o reglamentariamente";
 choices[41][3] = "ninguna es correcta";
 answers[41] = 0;
 units[41] = ['7'];
 blocks[41] = ['A2'];
 comments[41] = "Id Pregunta: 212. Ley 39/2015";
 preguntaids[41] = 212


//  Id pregunta: 469 Año de creación de pregunta: 2016
 questions[42]= "43)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[42]= new Array();
 choices[42][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[42][1] = "La CETIC";
 choices[42][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[42][3] = "El MHFP";
 answers[42] = 0;
 units[42] = ['19'];
 blocks[42] = ['A4'];
 comments[42] = "Id Pregunta: 469. Estrategia TIC";
 preguntaids[42] = 469


//  Id pregunta: 9045 Año de creación de pregunta: 2014
 questions[43]= "44)  El framework de JAVA para desarrollo web se llama:";
 choices[43]= new Array();
 choices[43][0] = "Maverick";
 choices[43][1] = "Mavericks";
 choices[43][2] = "Cocoa";
 choices[43][3] = "Kit Kat";
 answers[43] = 0;
 units[43] = ['64'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 9045. Mavericks es el sistema operativo OS X de Apple";
 preguntaids[43] = 9045


//  Id pregunta: 5660 Año de creación de pregunta: 2007
 questions[44]= "45)  El conjunto de procedimientos administrativos y t&eacute;cnicos que garantizan que todos los participantes del desarrollo de un sistema disponen de la versi&oacute;n adecuada de los productos que manejan, recibe el nombre de:";
 choices[44]= new Array();
 choices[44][0] = "Metodolog&iacute;a de desarrollo.";
 choices[44][1] = "Gesti&oacute;n de la configuraci&oacute;n.";
 choices[44][2] = "An&aacute;lisis de versiones.";
 choices[44][3] = "Diagrama de estructura de la informaci&oacute;n.";
 answers[44] = 1;
 units[44] = ['82'];
 blocks[44] = ['B3'];
 comments[44] = "Id Pregunta: 5660. ";
 preguntaids[44] = 5660


//  Id pregunta: 10725 Año de creación de pregunta: 2015
 questions[45]= "46)  Seg&uacute;n la Ley 34/2002 de Servicios de la Sociedad de la Informaci&oacute;n y Comercio electr&oacute;nico, el procedimiento de cooperaci&oacute;n intracomunitario en el que se propone la realizaci&oacute;n de acciones urgentes contra un prestador de servicios de la sociedad de la informaci&oacute;n establecido en la U.E que haya incumplido alguno de los preceptos de la Ley, requiere notificaci&oacute;n al Consejo Europeo y al Estado Miembro en el que opera dicho Prestador en un Plazo M&Aacute;XIMO de:";
 choices[45]= new Array();
 choices[45][0] = "1 mes desde la adopci&oacute;n de las acciones urgentes.";
 choices[45][1] = "30 d&iacute;as desde la adopci&oacute;n de las acciones urgentes.";
 choices[45][2] = "15 d&iacute;as desde la adopci&oacute;n de acciones urgentes.";
 choices[45][3] = "Ninguna de las anteriores.";
 answers[45] = 2;
 units[45] = ['19'];
 blocks[45] = ['A4'];
 comments[45] = "Id Pregunta: 10725. ";
 preguntaids[45] = 10725


//  Id pregunta: 3415 Año de creación de pregunta: 2006
 questions[46]= "47)  Indique cu&aacute;les son las facetas declarativas en la representaci&oacute;n del conocimiento mediante marcos (frameworks):";
 choices[46]= new Array();
 choices[46][0] = "if-needed; if-required e if-deleted";
 choices[46][1] = "if-needed; if-required e if-added";
 choices[46][2] = "if-needed; if-deleted e if-added";
 choices[46][3] = "Ninguna de las anteriores";
 answers[46] = 3;
 units[46] = ['68'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 3415. ";
 preguntaids[46] = 3415


//  Id pregunta: 6879 Año de creación de pregunta: 2010
 questions[47]= "48)  Un diagrama de transici&oacute;n de estados:";
 choices[47]= new Array();
 choices[47][0] = "Describe el comportamiento din&aacute;mico del sistema de informaci&oacute;n mostrando c&oacute;mo interact&uacute;an los objetos entre s&iacute;.";
 choices[47][1] = "Es un tipo de diagrama de interacci&oacute;n cuyo objetivo es describir el comportamiento din&aacute;mico del sistema de informaci&oacute;n haciendo &eacute;nfasis en la secuencia de los mensajes intercambiados por los objetos.";
 choices[47][2] = "Consiste en la descomposici&oacute;n sucesiva de los procesos, desde un nivel general, hasta llegar al nivel de detalle necesario para reflejar toda la sem&aacute;ntica que debe soportar el sistema en estudio.";
 choices[47][3] = "Representa los estados que puede tomar un componente o un sistema y muestra los eventos que implican el cambio de un estado a otro.";
 answers[47] = 3;
 units[47] = ['85'];
 blocks[47] = ['B3'];
 comments[47] = "Id Pregunta: 6879. TIC A 2009";
 preguntaids[47] = 6879


//  Id pregunta: 6793 Año de creación de pregunta: 2010
 questions[48]= "49)  En un sistema con 10 usuarios se plantea el uso de un sistema criptogr&aacute;fico para asegurar las transferencias de datos entretodos ellos. &iquest;Cu&aacute;l ser&iacute;a la diferencia entre usar sistemas de claves sim&eacute;tricas o asim&eacute;tricas?";
 choices[48]= new Array();
 choices[48][0] = "No existe diferencia, en ambos casos se necesitar&aacute;n 20 claves.";
 choices[48][1] = "Con el sistema asim&eacute;trico hacen falta 20 claves y con el sim&eacute;trico el doble, ya que todas son secretas.";
 choices[48][2] = "Con el sistema asim&eacute;trico hacen falta 20 claves y con el sim&eacute;trico s&oacute;lo 10, una por cada usuario.";
 choices[48][3] = "Con el sistema asim&eacute;trico hacen falta 20 claves y con el sim&eacute;trico 45 claves.";
 answers[48] = 3;
 units[48] = ['76'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 6793. TIC A 2009";
 preguntaids[48] = 6793


//  Id pregunta: 6078 Año de creación de pregunta: 2003
 questions[49]= "50)  Indique cu&aacute;l de las siguientes afirmaciones es incorrecta en relaci&oacute;n con la m&aacute;quina virtual de Java:";
 choices[49]= new Array();
 choices[49][0] = "La implementaci&oacute;n de la m&aacute;quina virtual de Java es independiente de la plataforma sobre la que se ejecute";
 choices[49][1] = "La principal ventaja que aporta es la portabilidad de las aplicaciones escritas en Java entre diferentesplataformas";
 choices[49][2] = "Existen versiones de m&aacute;quina virtual implantadas por hardware";
 choices[49][3] = "El c&oacute;digo que ejecuta la m&aacute;quina virtual se llama &quot;Java Bytecode&quot;";
 answers[49] = 0;
 units[49] = ['64'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 6078. Examen TIC A1 MAP 2007";
 preguntaids[49] = 6078


//  Id pregunta: 5318 Año de creación de pregunta: 2006
 questions[50]= "51)  Protocolo ligero que permite a programas dispersos sobre diferentes sistemas operativos interactuar entre ellos, incluso detr&aacute;s de un cortafuegos";
 choices[50]= new Array();
 choices[50][0] = "CORBA";
 choices[50][1] = "SOAP";
 choices[50][2] = "RMI";
 choices[50][3] = "DCOM";
 answers[50] = 1;
 units[50] = ['85'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 5318. ";
 preguntaids[50] = 5318


//  Id pregunta: 10743 Año de creación de pregunta: 2015
 questions[51]= "52)  Se&ntilde;ale cu&aacute;l de las siguientes tareas se realiza en la fase de an&aacute;lisis:";
 choices[51]= new Array();
 choices[51][0] = "Elaboraci&oacute;n del modelo f&iacute;sico de procesos.";
 choices[51][1] = "Identificaci&oacute;n de requisitos funcionales del sistema.";
 choices[51][2] = "Definici&oacute;n de la arquitectura t&eacute;cnica del sistema.";
 choices[51][3] = "Elaboraci&oacute;n del modelo f&iacute;sico de datos.";
 answers[51] = 1;
 units[51] = ['84'];
 blocks[51] = ['B3'];
 comments[51] = "Id Pregunta: 10743. ";
 preguntaids[51] = 10743


//  Id pregunta: 2327 Año de creación de pregunta: 2003
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes se puede decir que no es una caracter&iacute;stica de los Benchmark?";
 choices[52]= new Array();
 choices[52][0] = "Pruebas entre productos de distintas compa&ntilde;&iacute;as";
 choices[52][1] = "Suelen basarse en el tiempo necesario para la ejecuci&oacute;n de un programa";
 choices[52][2] = "Metodolog&iacute;a para comparar distintos sistemas inform&aacute;ticos";
 choices[52][3] = "Una herramienta para la mejora de rendimiento de un sistema";
 answers[52] = 3;
 units[52] = ['39'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 2327. ";
 preguntaids[52] = 2327


//  Id pregunta: 8391 Año de creación de pregunta: 2011
 questions[53]= "54)  &iquest;Qu&eacute; grupos de operaciones est&aacute;n definidas en el modelo funcional de LDAP?";
 choices[53]= new Array();
 choices[53][0] = "De consulta, de actualizaci&oacute;n y de b&uacute;squeda";
 choices[53][1] = "De b&uacute;squeda, de actualizaci&oacute;n y de control";
 choices[53][2] = "De consulta, de actualizaci&oacute;n y de autenticaci&oacute;n y control";
 choices[53][3] = "De comparaci&oacute;n, de consulta y de b&uacute;squeda";
 answers[53] = 1;
 units[53] = ['77'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 8391. ";
 preguntaids[53] = 8391


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[54]= "55)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[54]= new Array();
 choices[54][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[54][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[54][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[54][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[54] = 2;
 units[54] = ['1'];
 blocks[54] = ['A1'];
 comments[54] = "Id Pregunta: 17. Constituci&oacute;n de 1978";
 preguntaids[54] = 17


//  Id pregunta: 3687 Año de creación de pregunta: 2002
 questions[55]= "56)  Indique cu&aacute;l de las siguientes afirmaciones se aplica a un sistema de gesti&oacute;n de versiones:";
 choices[55]= new Array();
 choices[55][0] = "Facilita la planificaci&oacute;n de trabajos nocturnos";
 choices[55][1] = "Garantiza la disciplina y calidad en el paso de los programas a explotaci&oacute;n";
 choices[55][2] = "Define un entorno de preexplotaci&oacute;n";
 choices[55][3] = "Hace m&aacute;s eficiente la comunicaci&oacute;n entre programas";
 answers[55] = 1;
 units[55] = ['99'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 3687. ";
 preguntaids[55] = 3687


//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[56]= "57)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[56]= new Array();
 choices[56][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[56][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[56][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[56][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[56] = 2;
 units[56] = ['19'];
 blocks[56] = ['A4'];
 comments[56] = "Id Pregunta: 488. Sociedad de la informaci&oacute;n";
 preguntaids[56] = 488


//  Id pregunta: 324 Año de creación de pregunta: 2016
 questions[57]= "58)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[57]= new Array();
 choices[57][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[57][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[57][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[57][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[57] = 3;
 units[57] = ['11'];
 blocks[57] = ['A2'];
 comments[57] = "Id Pregunta: 324. Presupuestos generales";
 preguntaids[57] = 324


//  Id pregunta: 6991 Año de creación de pregunta: 2010
 questions[58]= "59)  De acuerdo a la terminolog&iacute;a adoptada por el IEEE, la transformaci&oacute;n de una forma de representaci&oacute;n del sistema en otra distinta, pero del mismo nivel de abstracci&oacute;n, sin modificar el comportamiento externo del sistema, es la definici&oacute;n de:";
 choices[58]= new Array();
 choices[58][0] = "Ingenier&iacute;a hacia delante.";
 choices[58][1] = "Reestructuraci&oacute;n.";
 choices[58][2] = "Reingenier&iacute;a.";
 choices[58][3] = "Ingenier&iacute;a inversa.";
 answers[58] = 1;
 units[58] = ['97'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 6991. TIC-B 2009 bloque desarrollo";
 preguntaids[58] = 6991


//  Id pregunta: 5259 Año de creación de pregunta: 2006
 questions[59]= "60)  &iquest;Qu&eacute; sentido tiene la ley de protecci&oacute;n intelectual?";
 choices[59]= new Array();
 choices[59][0] = "La defensa de los productos de las multinacionales";
 choices[59][1] = "Evitar que se pueda difundir el software libre";
 choices[59][2] = "Incentivar la inversi&oacute;n de las multinacionales del software y la musica";
 choices[59][3] = "La defensa de los derechos de los autores";
 answers[59] = 3;
 units[59] = ['36'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 5259. ";
 preguntaids[59] = 5259


//  Id pregunta: 8752 Año de creación de pregunta: 2013
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes es una norma b&aacute;sica en la auditor&iacute;a de los sistemas de informaci&oacute;n?";
 choices[60]= new Array();
 choices[60][0] = "Planificaci&oacute;n y supervisi&oacute;n";
 choices[60][1] = "Estudio y evaluaci&oacute;n del sistema de control interno";
 choices[60][2] = "Obtenci&oacute;n de evidencia suficiente y adecuada";
 choices[60][3] = "Todas las anteriores";
 answers[60] = 3;
 units[60] = ['36'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 8752. ";
 preguntaids[60] = 8752


//  Id pregunta: 305 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[61]= new Array();
 choices[61][0] = "Las Cortes Generales.";
 choices[61][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[61][2] = "El Gobierno.";
 choices[61][3] = "El Congreso de los Diputados.";
 answers[61] = 0;
 units[61] = ['11'];
 blocks[61] = ['A2'];
 comments[61] = "Id Pregunta: 305. Presupuestos generales";
 preguntaids[61] = 305


//  Id pregunta: 8847 Año de creación de pregunta: 2013
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes redes WAN esta orientada a conexi&oacute;n?";
 choices[62]= new Array();
 choices[62][0] = "Una red IP";
 choices[62][1] = "Una red ATM.";
 choices[62][2] = "Una red UMTS.";
 choices[62][3] = "Ninguna de las anteriores";
 answers[62] = 1;
 units[62] = ['112'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 8847. Examen TIC AGE A2 2011 Promoci&oacute;n Interna";
 preguntaids[62] = 8847


//  Id pregunta: 1668 Año de creación de pregunta: 2016
 questions[63]= "64)  Se&ntilde;ale c&oacute;mo se denomina el conjunto de reglas que deben de seguir los lenguajes de programaci&oacute;n para que sean compatibles con .NET se denomina:";
 choices[63]= new Array();
 choices[63][0] = "CLS";
 choices[63][1] = "MSIL";
 choices[63][2] = "Bytecode";
 choices[63][3] = "JIT";
 answers[63] = 0;
 units[63] = ['63'];
 blocks[63] = ['B2'];
 comments[63] = "Id Pregunta: 1668. ";
 preguntaids[63] = 1668


//  Id pregunta: 6932 Año de creación de pregunta: 2010
 questions[64]= "65)  Se&ntilde;ale cual de los siguientes no se corresponde con ning&uacute;n libro SCORM";
 choices[64]= new Array();
 choices[64][0] = "Scorm Content Aggregation Model.";
 choices[64][1] = "Scorm Shareable Content Objects.";
 choices[64][2] = "Scorm Run-Time Environment.";
 choices[64][3] = "Scorm Sequencing and Navigation.";
 answers[64] = 1;
 units[64] = ['70'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 6932. ";
 preguntaids[64] = 6932


//  Id pregunta: 401 Año de creación de pregunta: 2016
 questions[65]= "66)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[65]= new Array();
 choices[65][0] = "El acoso sexual.";
 choices[65][1] = "El acoso por raz&oacute;n del sexo.";
 choices[65][2] = "Ambas son correctas.";
 choices[65][3] = "A y B son incorrectas.";
 answers[65] = 2;
 units[65] = ['14'];
 blocks[65] = ['A3'];
 comments[65] = "Id Pregunta: 401. Pol&iacute;ticas de igualdad";
 preguntaids[65] = 401


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[66]= new Array();
 choices[66][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[66][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[66][2] = "Iniciativa europea de libre flujo de datos.";
 choices[66][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[66] = 2;
 units[66] = ['5'];
 blocks[66] = ['A1'];
 comments[66] = "Id Pregunta: 108. Uni&oacute;n Europea";
 preguntaids[66] = 108


//  Id pregunta: 8490 Año de creación de pregunta: 2011
 questions[67]= "68)  &iquest;A qu&eacute; autoridad nacional de regulaci&oacute;n de las recogidas en la Ley 9/2014,  de 9 de mayo, General de Telecomunicaciones, puede reclamar un usuario final de servicios de comunicaciones en caso de disputa con su operador?";
 choices[67]= new Array();
 choices[67][0] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n.";
 choices[67][1] = "Ministerio de Energia, Turismo y Agenda Digital";
 choices[67][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[67][3] = "Ministerio de Econom&iacute;a, Industria y Competitividad";
 answers[67] = 1;
 units[67] = ['121'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 8490. Teleco Ayto. Madrid 2010";
 preguntaids[67] = 8490


//  Id pregunta: 5437 Año de creación de pregunta: 2007
 questions[68]= "69)  Indique cu&aacute;l de los siguientes criterios pondera la situaci&oacute;n m&aacute;s optimista con la m&aacute;s pesimista mediante un factor alfa:";
 choices[68]= new Array();
 choices[68][0] = "Criterio de Laplace";
 choices[68][1] = "Criterio de Wald";
 choices[68][2] = "Criterio de Savage";
 choices[68][3] = "Criterio de Hurwicz";
 answers[68] = 3;
 units[68] = ['38'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 5437. ";
 preguntaids[68] = 5437


//  Id pregunta: 2427 Año de creación de pregunta: 2006
 questions[69]= "70)  Cu&aacute;l de las siguientes t&eacute;cnicas no persigue la comprobaci&oacute;n o el control de la legalidad del Software:";
 choices[69]= new Array();
 choices[69][0] = "DRM (Digital Rigths Management).";
 choices[69][1] = "CRM (Copyright Rights Management).";
 choices[69][2] = "Marcas de Agua.";
 choices[69][3] = "TPM (Technical Protection Measures).";
 answers[69] = 1;
 units[69] = ['41'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 2427. ";
 preguntaids[69] = 2427


//  Id pregunta: 8171 Año de creación de pregunta: 2011
 questions[70]= "71)  Con el objetivo de garantizar la calidad en los servicios p&uacute;blicos se ha creado:";
 choices[70]= new Array();
 choices[70][0] = "La Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de los Servicios (AEVAL) perteneciente al Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[70][1] = "La Direcci&oacute;n General de Aseguramiento de la Calidad e Infraestructuras perteneciente al Ministerio de Energia, Turismo y Agenda Digital.";
 choices[70][2] = "El Consejo Superior de Aseguramiento de la Calidad e Infraestructuras perteneciente al Ministerio de Presidencia.";
 choices[70][3] = "La Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de los Servicios (AEVAL) perteneciente al Ministerio de Pol&iacute;tica Territorial.";
 answers[70] = 0;
 units[70] = ['19'];
 blocks[70] = ['A4'];
 comments[70] = "Id Pregunta: 8171. Examen TIC A2 2010 interna";
 preguntaids[70] = 8171


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n se establece en la Ley 59/2003, de Firma Electr&oacute;nica, la cuant&iacute;a de las multas para los distintos tipos de infracciones ser&aacute;n:";
 choices[71]= new Array();
 choices[71][0] = "Para las muy graves de 300.001 a 600.000 euros; graves de 30.001 a 300.000 euros; leves hasta 60.000 euros.";
 choices[71][1] = "Para las muy graves de 150.001 a 600.000 euros; graves de 60.001 a 150.000 euros; leves hasta 60.000 euros.";
 choices[71][2] = "Para las muy graves de 150.001 a 300.000 euros; graves de 60.001 a 150.000 euros; leves hasta 30.000 euros.";
 choices[71][3] = "Para las muy graves de 150.001 a 600.000 euros; graves de 30.001 a 150.000 euros; leves hasta 30.000 euros.";
 answers[71] = 3;
 units[71] = ['19'];
 blocks[71] = ['A4'];
 comments[71] = "Id Pregunta: 441. AGE A2 2015";
 preguntaids[71] = 441


//  Id pregunta: 9332 Año de creación de pregunta: 2014
 questions[72]= "73)  Microsoft ActiveX Data Objects de la plataforma .NET";
 choices[72]= new Array();
 choices[72][0] = "permite trabajar desconectado del origen de datos.";
 choices[72][1] = "no se integra con XML.";
 choices[72][2] = "es el precursor de RDO ( Remote Data Objects).";
 choices[72][3] = "utiliza una forma secuencial de navegaci&oacute;n para acceder a las filas de una tabla.";
 answers[72] = 0;
 units[72] = ['63'];
 blocks[72] = ['B2'];
 comments[72] = "Id Pregunta: 9332. ";
 preguntaids[72] = 9332


//  Id pregunta: 6604 Año de creación de pregunta: 2009
 questions[73]= "74)  En criptograf&iacute;a sim&eacute;trica, &iquest;qu&eacute; es una sustituci&oacute;n monoalfab&eacute;tica monogr&aacute;mica?";
 choices[73]= new Array();
 choices[73][0] = "Cada letra del mensaje original es sustituido por s&oacute;lo una otra letra, n&uacute;mero o s&iacute;mbolo";
 choices[73][1] = "Buscan paliar la sensibilidad frente a ataques basados en el estudio de frecuencias de s&iacute;mbolos.";
 choices[73][2] = "Cada letra del mensaje original puede ser sustituida por m&aacute;s de una letra, n&uacute;mero o s&iacute;mbolo";
 choices[73][3] = "La que sustituye las letras en grupos de longitud variable, dependiendo de su posici&oacute;n dentro del mensaje";
 answers[73] = 0;
 units[73] = ['76'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 6604. ";
 preguntaids[73] = 6604


//  Id pregunta: 10652 Año de creación de pregunta: 2015
 questions[74]= "75)  Seg&uacute;n la Ley 9/2014, se&ntilde;ale la falsa:";
 choices[74]= new Array();
 choices[74][0] = "Corresponde al Gobierno la aprobaci&oacute;n por Real Decreto de los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 choices[74][1] = "El Ministerio de Energia, Turismo y Agenda Digital podr&aacute; mediante orden y previo informe preceptivo del Gobierno, modificar la estructura y organizaci&oacute;n de los planes nacionales.";
 choices[74][2] = "Los costes derivados de la actualizaci&oacute;n de los elementos de la red para hacer posible la conservaci&oacute;n de los n&uacute;meros deber&aacute;n ser sufragados por cada operador.";
 choices[74][3] = "Las decisiones relativas a los otorgamientos de derechos de uso se adoptar&aacute;n, comunicar&aacute;n y har&aacute;n p&uacute;blicas en el plazo m&aacute;ximo de tres semanas desde la recepci&oacute;n de la solicitud completa, salvo cuando se apliquen procedimientos de selecci&oacute;n comparativa o competitiva.";
 answers[74] = 1;
 units[74] = ['121'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 10652. ";
 preguntaids[74] = 10652


