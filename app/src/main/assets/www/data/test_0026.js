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
//  Id pregunta: 2159 Año de creación de pregunta: 2007
 questions[0]= "1)  La metodolog&iacute;a MAGERIT:";
 choices[0]= new Array();
 choices[0][0] = "Se apoya en tres submodelos: submodelo de elementos, submodelo de eventos y submodelo de procesos.";
 choices[0][1] = "Se estructura en tres libros: M&eacute;todo, Cat&aacute;logo de Activos y Gu&iacute;a de T&eacute;cnicas";
 choices[0][2] = "MAGERIT es una metodolog&iacute;a de car&aacute;cter p&uacute;blico, perteneciente al Ministerio de Administraciones P&uacute;blicas. Su utilizaci&oacute;n requiere autorizaci&oacute;n previa del MAP";
 choices[0][3] = "Se estructura en tres libros: M&eacute;todo, Cat&aacute;logo de Elementos y Gu&iacute;a de T&eacute;cnicas";
 answers[0] = 3;
 units[0] = ['45'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 2159. ";
 preguntaids[0] = 2159


//  Id pregunta: 9864 Año de creación de pregunta: 2015
 questions[1]= "2)  Indique cu&aacute;l de estos est&aacute;ndares especifica las normas de funcionamiento de la capa f&iacute;sica y de enlace en una WLAN:";
 choices[1]= new Array();
 choices[1][0] = "802.11b";
 choices[1][1] = "802.11g";
 choices[1][2] = "802.11ac";
 choices[1][3] = "Todos los anteriores.";
 answers[1] = 3;
 units[1] = ['108'];
 blocks[1] = ['B4'];
 comments[1] = "Id Pregunta: 9864. ";
 preguntaids[1] = 9864


//  Id pregunta: 2202 Año de creación de pregunta: 2002
 questions[2]= "3)  Indique cu&aacute;l de las siguientes afirmaciones se aplica a la gesti&oacute;n de incidencias y aver&iacute;as:";
 choices[2]= new Array();
 choices[2][0] = "Las herramientas de gesti&oacute;n de incidencias deben estar integradas con el inventario";
 choices[2][1] = "La eficiencia del sistema es funci&oacute;n directa del n&uacute;mero de terminales telef&oacute;nicos";
 choices[2][2] = "Las llamadas de aver&iacute;as deben encaminarse autom&aacute;ticamente al suministrador";
 choices[2][3] = "Los operadores deben ser expertos en mantenimiento hardware";
 answers[2] = 0;
 units[2] = ['45'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 2202. ";
 preguntaids[2] = 2202


//  Id pregunta: 998 Año de creación de pregunta: 2016
 questions[3]= "4)  La Administraci&oacute;n General del Estado se organiza:";
 choices[3]= new Array();
 choices[3][0] = "en Ministerios";
 choices[3][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[3][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[3][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[3] = 1;
 units[3] = ['4', '7', '8', '9'];
 blocks[3] = ['A1', 'A2'];
 comments[3] = "Id Pregunta: 998. Ley 40/2015";
 preguntaids[3] = 998


//  Id pregunta: 32 Año de creación de pregunta: 2016
 questions[4]= "5)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[4]= new Array();
 choices[4][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[4][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[4][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[4][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[4] = 1;
 units[4] = ['1'];
 blocks[4] = ['A1'];
 comments[4] = "Id Pregunta: 32. Constituci&oacute;n de 1978";
 preguntaids[4] = 32


//  Id pregunta: 1979 Año de creación de pregunta: 2016
 questions[5]= "6)  En la presentaci&oacute;n telem&aacute;tica de documentos, una administraci&oacute;n p&uacute;blica deber&aacute; admitir como v&aacute;lida la acreditaci&oacute;n de la identidad del firmante:";
 choices[5]= new Array();
 choices[5][0] = "Siempre que se real ice con el documento nacional de identidad electr&oacute;nico.";
 choices[5][1] = "Siempre que se realice can el documento nacional de identidad electr&oacute;nico y la administraci&oacute;n tenga convenio con la plataforma @firma.";
 choices[5][2] = "Si la firma se ha realizado can un certificado valido independientemente del prestador de servicios de certificaci&oacute;n.";
 choices[5][3] = "Solo si el certificado pertenece a una persona jur&iacute;dica.";
 answers[5] = 0;
 units[5] = ['7'];
 blocks[5] = ['A2'];
 comments[5] = "Id Pregunta: 1979. ";
 preguntaids[5] = 1979


//  Id pregunta: 7026 Año de creación de pregunta: 2010
 questions[6]= "7)  &iquest;Qu&eacute; &oacute;rganos no suelen ser necesarios a la hora de realizar una planificaci&oacute;n y direcci&oacute;n estrat&eacute;gica?";
 choices[6]= new Array();
 choices[6][0] = "Los proveedores";
 choices[6][1] = "El equipo de proyecto";
 choices[6][2] = "El comit&eacute; de direcci&oacute;n";
 choices[6][3] = "Un grupo de usuarios";
 answers[6] = 0;
 units[6] = ['83'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 7026. ";
 preguntaids[6] = 7026


//  Id pregunta: 6751 Año de creación de pregunta: 2009
 questions[7]= "8)  CobiT identific&oacute; los siguientes elementos clave, con respecto a los aspectos de seguridad:";
 choices[7]= new Array();
 choices[7][0] = "Idoneidad, continuidad de negocio y certificaci&oacute;n internacional";
 choices[7][1] = "Confidencialidad, integridad y disponibilidad";
 choices[7][2] = "Criticidad, autenticaci&oacute;n y consistencia";
 choices[7][3] = "Convergencia, coherencia y salvaguarda";
 answers[7] = 1;
 units[7] = ['101'];
 blocks[7] = ['B3'];
 comments[7] = "Id Pregunta: 6751. MAP 2008 A1";
 preguntaids[7] = 6751


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[8]= "9)  Recientemente se ha publicado la norma de calidad ISO 9000:2015. Al igual que la ISO 9000:2008 se basa en principios. Indique de los siguientes cu&aacute;l NO es un principio de la ISO 9000:2015:";
 choices[8]= new Array();
 choices[8][0] = "Enfoque al cliente.";
 choices[8][1] = "Liderazgo.";
 choices[8][2] = "Gesti&oacute;n de las relaciones.";
 choices[8][3] = "Enfoque al beneficio.";
 answers[8] = 3;
 units[8] = ['93'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 849. AGE A2 2015";
 preguntaids[8] = 849


//  Id pregunta: 2239 Año de creación de pregunta: 2004
 questions[9]= "10)  De acuerdo al RDL 1/1996, la protecci&oacute;n de los programas de ordenador:";
 choices[9]= new Array();
 choices[9][0] = "Cuando el autor sea una persona natural, para el caso m&aacute;s general, los derechos de explotaci&oacute;n durar&aacute;n toda su vida, y 70 a&ntilde;os despu&eacute;s de su muerte o declaraci&oacute;n de fallecimiento.";
 choices[9][1] = "Cuando el autor sea una persona jur&iacute;dica, la duraci&oacute;n de los derechos de explotaci&oacute;n ser&aacute; de 70 a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[9][2] = "a y b son correctas";
 choices[9][3] = "a y b son incorrectas";
 answers[9] = 2;
 units[9] = ['41'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 2239. ";
 preguntaids[9] = 2239


//  Id pregunta: 6649 Año de creación de pregunta: 2009
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de UML?:";
 choices[10]= new Array();
 choices[10][0] = "Los paquetes pueden contener clases, objetos, relaciones, componentes, nodos y diagramas asociados.";
 choices[10][1] = "Los diagramas de clases expresan la estructura est&aacute;tica de un sistema, con las clases, los atributos y las operaciones.";
 choices[10][2] = "Las relaciones entre los casos de uso son de subordinaci&oacute;n, dependencia, igualdad y superioridad.";
 choices[10][3] = "Los nodos del diagrama de despliegue se representan con un cubo, y las l&iacute;neas que los unen simbolizan los soportes de las comunicaciones.";
 answers[10] = 2;
 units[10] = ['89'];
 blocks[10] = ['B3'];
 comments[10] = "Id Pregunta: 6649. ";
 preguntaids[10] = 6649


//  Id pregunta: 8142 Año de creación de pregunta: 2011
 questions[11]= "12)  En el contexto de la Web 2.0, el conjunto formado por una colecci&oacute;n extensible de p&aacute;ginas web entrelazadas, un sistema hipertextual para almacenar y modificar informaci&oacute;n y una base de datos donde cada p&aacute;gina puede ser f&aacute;cilmente modificada por cualquier usuario que disponga de un navegador web est&aacute;ndar que admita la utilizaci&oacute;n de formularios, corresponde al concepto de:";
 choices[11]= new Array();
 choices[11][0] = "Wiki.";
 choices[11][1] = "Mashup.";
 choices[11][2] = "Blog.";
 choices[11][3] = "Agregador o feeder.";
 answers[11] = 0;
 units[11] = ['125'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 8142. Examen TIC A2 2010 interna";
 preguntaids[11] = 8142


//  Id pregunta: 3691 Año de creación de pregunta: 2002
 questions[12]= "13)  La administraci&oacute;n de recursos de datos pueden consistir de:";
 choices[12]= new Array();
 choices[12][0] = "Administraci&oacute;n de datos y administraci&oacute;n de bases de datos";
 choices[12][1] = "Administraci&oacute;n de ordenadores y administraci&oacute;n de software";
 choices[12][2] = "Administraci&oacute;n de bases de datos y administraci&oacute;n de comunicaciones";
 choices[12][3] = "Planificaci&oacute;n e implementaci&oacute;n de bases de datos";
 answers[12] = 0;
 units[12] = ['60'];
 blocks[12] = ['B2'];
 comments[12] = "Id Pregunta: 3691. ";
 preguntaids[12] = 3691


//  Id pregunta: 10397 Año de creación de pregunta: 2015
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital Espa&ntilde;ola?";
 choices[13]= new Array();
 choices[13][0] = "Confianza Digital";
 choices[13][1] = "Mejorar la Administraci&oacute;n Electr&oacute;nica";
 choices[13][2] = "Despliegue de redes r&aacute;pidas y ultrarr&aacute;pidas";
 choices[13][3] = "Interoperabilidad y normas";
 answers[13] = 3;
 units[13] = ['19'];
 blocks[13] = ['A4'];
 comments[13] = "Id Pregunta: 10397. ";
 preguntaids[13] = 10397


//  Id pregunta: 9012 Año de creación de pregunta: 2014
 questions[14]= "15)  &iquest;Cuantos atributos tiene un archivo en el sistema de ficheros NTFS?";
 choices[14]= new Array();
 choices[14][0] = "9";
 choices[14][1] = "11";
 choices[14][2] = "13";
 choices[14][3] = "15";
 answers[14] = 2;
 units[14] = ['58'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 9012. ";
 preguntaids[14] = 9012


//  Id pregunta: 9033 Año de creación de pregunta: 2014
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes no es un principio de la contrataci&oacute;n p&uacute;blica?";
 choices[15]= new Array();
 choices[15][0] = "a) Publicidad y transparencia";
 choices[15][1] = "b) Salvaguarda de la libre competencia";
 choices[15][2] = "c) Selecci&oacute;n de la oferta econ&oacute;micamente m&aacute;s ventajosa";
 choices[15][3] = "d) Restricci&oacute;n en el acceso a las licitaciones";
 answers[15] = 3;
 units[15] = ['10'];
 blocks[15] = ['A2'];
 comments[15] = "Id Pregunta: 9033. Hay libertad de acceso a las licitaciones. Art&iacute;culo 1. Objeto y finalidad. La presente Ley tiene por objeto regular la contrataci&oacute;n del sector p&uacute;blico, a fin de garantizar que la misma se ajusta a los principios de libertad de acceso a las licitaciones, .";
 preguntaids[15] = 9033


//  Id pregunta: 6707 Año de creación de pregunta: 2009
 questions[16]= "17)  En referencia al direccionamiento IPv6 definido en el RFC 1884, indique cu&aacute;l de los apartados siguientes no se corresponde con un tipo de direcciones en IPv6:";
 choices[16]= new Array();
 choices[16][0] = "Unicast";
 choices[16][1] = "Multicast";
 choices[16][2] = "Anycast";
 choices[16][3] = "Broadcast";
 answers[16] = 3;
 units[16] = ['115'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 6707. MAP 2008 A1";
 preguntaids[16] = 6707


//  Id pregunta: 8252 Año de creación de pregunta: 2011
 questions[17]= "18)  Los ciudadanos podr&aacute;n utilizar el siguiente sistema de firma electr&oacute;nica para relacionarse con las Administraciones P&uacute;blicas:";
 choices[17]= new Array();
 choices[17][0] = "Siempre se exigir&aacute; firma electr&oacute;nica reconocida, como garant&iacute;a jur&iacute;dica.";
 choices[17][1] = "&Uacute;nicamente el ser&aacute; v&aacute;lido el DNI electr&oacute;nico, una vez extendido a toda la poblaci&oacute;n";
 choices[17][2] = "Firma electr&oacute;nica avanzada.";
 choices[17][3] = "Est&aacute; pendiente de desarrollo reglamentario el uso efectivo de la firma electr&oacute;nica en esos casos.";
 answers[17] = 2;
 units[17] = ['7'];
 blocks[17] = ['A2'];
 comments[17] = "Id Pregunta: 8252. Examen TIC A2 2010 interna";
 preguntaids[17] = 8252


//  Id pregunta: 718 Año de creación de pregunta: 2016
 questions[18]= "19)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[18]= new Array();
 choices[18][0] = "En sentencias switch para alterar el control de flujo.";
 choices[18][1] = "Para manejar excepciones.";
 choices[18][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[18][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[18] = 1;
 units[18] = ['64'];
 blocks[18] = ['B2'];
 comments[18] = "Id Pregunta: 718. Junta de Extremadura A1 2015";
 preguntaids[18] = 718


//  Id pregunta: 4458 Año de creación de pregunta: 2002
 questions[19]= "20)  &iquest;A qu&eacute; se denomina Hub en una red local?:";
 choices[19]= new Array();
 choices[19][0] = "A un conector que sirve para unir cada ordenador con el cableado principal";
 choices[19][1] = "A un dispositivo que tiene como funci&oacute;n concentrar el cableado de la red";
 choices[19][2] = "A un dispositivo que tiene como funci&oacute;n convertir cableado en modo balanceado a modo no balanceado";
 choices[19][3] = "A un terminador que tiene como funci&oacute;n adaptar impedancias";
 answers[19] = 1;
 units[19] = ['104'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 4458. ";
 preguntaids[19] = 4458


//  Id pregunta: 9451 Año de creación de pregunta: 2014
 questions[20]= "21)  La Ley 34/2002, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, en relaci&oacute;n a la imposici&oacute;n de Sanciones indica";
 choices[20]= new Array();
 choices[20][0] = "El &oacute;rgano sancionador establecer&aacute; la cuant&iacute;a de la sanci&oacute;n aplicando la escala relativa a la clase de infracciones que preceda inmediatamente en gravedad a aquella en que se integra la considerada cuando el infractor haya reconocido espont&aacute;neamente su culpabilidad.";
 choices[20][1] = "La cuant&iacute;a de las multas que se impongan se graduar&aacute; atendiendo a la adhesi&oacute;n a un c&oacute;digo de conducta o a un sistema de autorregulaci&oacute;n publicitaria aplicable respecto a la infracci&oacute;n cometida.";
 choices[20][2] = "La cuant&iacute;a de las multas que se impongan se graduar&aacute; atendiendo al plazo de tiempo durante el que se haya venido cometiendo la infracci&oacute;n";
 choices[20][3] = "Todas son verdaderas";
 answers[20] = 3;
 units[20] = ['19'];
 blocks[20] = ['A4'];
 comments[20] = "Id Pregunta: 9451. ";
 preguntaids[20] = 9451


//  Id pregunta: 4841 Año de creación de pregunta: 2002
 questions[21]= "22)  En telefon&iacute;a m&oacute;vil, &iquest;es posible en Espa&ntilde;a cambiar de operador conservando el n&uacute;mero?:";
 choices[21]= new Array();
 choices[21][0] = "S&iacute;, siempre";
 choices[21][1] = "No, nunca";
 choices[21][2] = "No, salvo para empresas";
 choices[21][3] = "S&iacute;, dependiendo de los operadores implicados";
 answers[21] = 0;
 units[21] = ['117'];
 blocks[21] = ['B4'];
 comments[21] = "Id Pregunta: 4841. ";
 preguntaids[21] = 4841


//  Id pregunta: 10600 Año de creación de pregunta: 2015
 questions[22]= "23)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes opciones es la jerarqu&iacute;a que utiliza el proceso de Gesti&oacute;n del Conocimiento?";
 choices[22]= new Array();
 choices[22][0] = "Sabidur&iacute;a (Wisdom), Informaci&oacute;n (Information), Datos (Data), Conocimiento (Knowledge)";
 choices[22][1] = "Datos (Data), Informaci&oacute;n (Information), Conocimiento (Knowledge), Sabidur&iacute;a (Wisdom)";
 choices[22][2] = "Conocimiento (Knowledge), Sabidur&iacute;a (Wisdom), Informaci&oacute;n (Information), Datos (Data)";
 choices[22][3] = "Informaci&oacute;n (Information), Datos (Data), Conocimiento (Knowledge), Sabidur&iacute;a (Wisdom)";
 answers[22] = 1;
 units[22] = ['101'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 10600. ";
 preguntaids[22] = 10600


//  Id pregunta: 445 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[23]= new Array();
 choices[23][0] = "En 2015";
 choices[23][1] = "En 2013";
 choices[23][2] = "En 2016";
 choices[23][3] = "En 2007";
 answers[23] = 1;
 units[23] = ['19'];
 blocks[23] = ['A4'];
 comments[23] = "Id Pregunta: 445. Agenda Digital";
 preguntaids[23] = 445


//  Id pregunta: 519 Año de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, se entiende por emprendedor:";
 choices[24]= new Array();
 choices[24][0] = "Aquellas personas f&iacute;sicas que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[24][1] = "Aquellas personas independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar una actividad econ&oacute;mica productiva.";
 choices[24][2] = "Aquellas personas, independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[24][3] = "Ninguna de las anteriores";
 answers[24] = 2;
 units[24] = ['23'];
 blocks[24] = ['A4'];
 comments[24] = "Id Pregunta: 519. Direcci&oacute;n p&uacute;blica";
 preguntaids[24] = 519


//  Id pregunta: 5575 Año de creación de pregunta: 2007
 questions[25]= "26)  Si para un sistema de acceso basado en control biom&eacute;trico, FAR = 0% y FRR=12%, puede afirmarse que...";
 choices[25]= new Array();
 choices[25][0] = "Ning&uacute;n acceso no autorizado ha sido denegado y un 12% de los accesos autorizados han sido denegados.";
 choices[25][1] = "Ning&uacute;n acceso no autorizado ha sido permitido y un 12% de los accesos autorizados han sido denegados.";
 choices[25][2] = "Ning&uacute;n acceso no autorizado ha sido permitido y un 88% de los accesos autorizados han sido denegados.";
 choices[25][3] = "Ning&uacute;n acceso no autorizado ha sido denegado y un 12% de los accesos autorizados han sido permitidos.";
 answers[25] = 1;
 units[25] = ['77'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 5575. ";
 preguntaids[25] = 5575


//  Id pregunta: 7714 Año de creación de pregunta: 2010
 questions[26]= "27)  Seg&uacute;n el est&aacute;ndar ISO 7816 sobre contactos del chip en las tarjetas inteligentes, &iquest;cu&aacute;l de los siguientes contactos se utiliza para la se&ntilde;al de reloj?";
 choices[26]= new Array();
 choices[26][0] = "C2.";
 choices[26][1] = "C3.";
 choices[26][2] = "C5.";
 choices[26][3] = "C6.";
 answers[26] = 1;
 units[26] = ['78'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 7714. Map 2007";
 preguntaids[26] = 7714


//  Id pregunta: 867 Año de creación de pregunta: 2016
 questions[27]= "28)  En ITIL v3, entre los procesos de la &ldquo;Fase del Ciclo de Vida: Dise&ntilde;o del Servicio&rdquo;, est&aacute;n:";
 choices[27]= new Array();
 choices[27][0] = "Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de la Cartera de Servicios.";
 choices[27][1] = "Gesti&oacute;n de la Cartera de Servicio y Gesti&oacute;n de la Seguridad de la Informaci&oacute;n.";
 choices[27][2] = "Gesti&oacute;n de la Disponibilidad y Gesti&oacute;n de la Capacidad.";
 choices[27][3] = "Gesti&oacute;n de Suministradores y Gesti&oacute;n de Eventos.";
 answers[27] = 2;
 units[27] = ['101'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 867. Junta de Extremadura A1 2015";
 preguntaids[27] = 867


//  Id pregunta: 3284 Año de creación de pregunta: 2003
 questions[28]= "29)  Si estamos hablando de GNOME, nos referimos a:";
 choices[28]= new Array();
 choices[28][0] = "Proyecto para generar un nuevo sistema operativo.";
 choices[28][1] = "Un proyecto para crear un entorno de escritorio sobre GNU/ LINUX.";
 choices[28][2] = "Un proyecto ofim&aacute;tico multiplataforma.";
 choices[28][3] = "Un cliente de mensajer&iacute;a instant&aacute;nea.";
 answers[28] = 1;
 units[28] = ['66'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 3284. Junta Andaluc&iacute;a";
 preguntaids[28] = 3284


//  Id pregunta: 469 Año de creación de pregunta: 2016
 questions[29]= "30)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[29]= new Array();
 choices[29][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[29][1] = "La CETIC";
 choices[29][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[29][3] = "El MHFP";
 answers[29] = 0;
 units[29] = ['19'];
 blocks[29] = ['A4'];
 comments[29] = "Id Pregunta: 469. Estrategia TIC";
 preguntaids[29] = 469


//  Id pregunta: 394 Año de creación de pregunta: 2016
 questions[30]= "31)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[30]= new Array();
 choices[30][0] = "Un informe de impacto de g&eacute;nero.";
 choices[30][1] = "Un programa de igualdad de oportunidades.";
 choices[30][2] = "Un plan de Igualdad de Oportunidades.";
 choices[30][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[30] = 0;
 units[30] = ['14'];
 blocks[30] = ['A3'];
 comments[30] = "Id Pregunta: 394. Pol&iacute;ticas de igualdad";
 preguntaids[30] = 394


//  Id pregunta: 8435 Año de creación de pregunta: 2011
 questions[31]= "32)  El Comit&eacute; t&eacute;cnico estatal de la Administraci&oacute;n judicial electr&oacute;nica no estar&aacute; integrado por:";
 choices[31]= new Array();
 choices[31][0] = "Una representaci&oacute;n del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[31][1] = "Los representantes que al efecto podr&aacute; designar la Fiscal&iacute;a General del Estado";
 choices[31][2] = "Una representaci&oacute;n del Ministerio de Justicia";
 choices[31][3] = "Estar&aacute; integrado por todos los anteriores";
 answers[31] = 0;
 units[31] = ['2'];
 blocks[31] = ['A1'];
 comments[31] = "Id Pregunta: 8435. ";
 preguntaids[31] = 8435


//  Id pregunta: 7387 Año de creación de pregunta: 2010
 questions[32]= "33)  En el protocolo MPLS, la cabecera de las etiquetas MPLS contienen los siguientes. Se&ntilde;ale la INCORRECTA";
 choices[32]= new Array();
 choices[32][0] = "Tipo de tr&aacute;fico (3 bits) usado para se&ntilde;alar la calidad de servicio";
 choices[32][1] = "Tiempo de vida (8 bits)";
 choices[32][2] = "Flag que determina final de la pila de etiquetas (1 bit)";
 choices[32][3] = "Comprobaci&oacute;n de redundancia c&iacute;clica (4 bits)";
 answers[32] = 3;
 units[32] = ['108'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 7387. Examen TIC B 2009";
 preguntaids[32] = 7387


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[33]= "34)  En relaci&oacute;n al Portal de Transparencia de la AGE:";
 choices[33]= new Array();
 choices[33][0] = "La informaci&oacute;n m&aacute;s relevante para el ciudadano y de frecuente acceso estar&aacute; disponible en el Portal de Transparencia, no pudiendo accederse a informaci&oacute;n que no se encuentre ya publicada.";
 choices[33][1] = "El ejercicio del Derecho de Acceso abre con la administraci&oacute;n un procedimiento administrativo que exige la identificaci&oacute;n del solicitante.";
 choices[33][2] = "En el Portal de Transparencia de la AGE s&oacute;lo se puede acceder a informaci&oacute;n de tipo institucional.";
 choices[33][3] = "El CTBG es el responsable del Portal de Transparencia.";
 answers[33] = 1;
 units[33] = ['22'];
 blocks[33] = ['A4'];
 comments[33] = "Id Pregunta: 512. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[33] = 512


//  Id pregunta: 286 Año de creación de pregunta: 2016
 questions[34]= "35)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[34]= new Array();
 choices[34][0] = "El Ministerio de Hacienda.";
 choices[34][1] = "El Ministerio de Econom&iacute;a.";
 choices[34][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[34][3] = "Ninguna de las respuestas es correcta.";
 answers[34] = 2;
 units[34] = ['11'];
 blocks[34] = ['A2'];
 comments[34] = "Id Pregunta: 286. Presupuestos generales";
 preguntaids[34] = 286


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[35]= "36)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[35]= new Array();
 choices[35][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[35][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[35][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[35][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[35] = 0;
 units[35] = ['8'];
 blocks[35] = ['A2'];
 comments[35] = "Id Pregunta: 256. Ley 39/2015";
 preguntaids[35] = 256


//  Id pregunta: 9675 Año de creación de pregunta: 2014
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes elementos no forma parte de HTML 5?";
 choices[36]= new Array();
 choices[36][0] = "&lt;canvas&gt;";
 choices[36][1] = "&lt;applet&gt;";
 choices[36][2] = "&lt;keygen&gt;";
 choices[36][3] = "&lt;audio&gt;";
 answers[36] = 1;
 units[36] = ['74'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 9675. ";
 preguntaids[36] = 9675


//  Id pregunta: 7078 Año de creación de pregunta: 2010
 questions[37]= "38)  Indique la respuesta correcta:";
 choices[37]= new Array();
 choices[37][0] = "Las consultas de OLAP sin ser consultas de data mining permiten la realizaci&oacute;n de informes para soporte a la toma de decisiones.";
 choices[37][1] = "Todas las consultas de OLAP son tambi&eacute;n consultas de data mining.";
 choices[37][2] = "Las consultas de OLAP s&oacute;lo pueden realizarse si se ha implementado un hipercubo.";
 choices[37][3] = "Todas las respuestas son ciertas.";
 answers[37] = 0;
 units[37] = ['72'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 7078. ";
 preguntaids[37] = 7078


//  Id pregunta: 338 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[38]= new Array();
 choices[38][0] = "Entre 1973 y 1978";
 choices[38][1] = "Entre 1992 y 1996";
 choices[38][2] = "Entre 1978 y 1985";
 choices[38][3] = "Entre 2008 y 2013";
 answers[38] = 2;
 units[38] = ['12'];
 blocks[38] = ['A3'];
 comments[38] = "Id Pregunta: 338. Modelo econ&oacute;mico";
 preguntaids[38] = 338


//  Id pregunta: 1062 Año de creación de pregunta: 2016
 questions[39]= "40)  El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica:";
 choices[39]= new Array();
 choices[39][0] = "Es el &oacute;rgano de cooperaci&oacute;n interministerial de la Administraci&oacute;n General del Estado en materia de administraci&oacute;n electr&oacute;nica.";
 choices[39][1] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea que canaliza la colaboraci&oacute;n entre la Administraci&oacute;n General del Estado y el resto de pa&iacute;ses de la Uni&oacute;n Europea en materia de administraci&oacute;n electr&oacute;nica.";
 choices[39][2] = "Es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Entidades Locales en materia de administraci&oacute;n electr&oacute;nica.";
 choices[39][3] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea encargado de unificar los criterios en materia de tratamiento y protecci&oacute;n de datos de car&aacute;cter personal en el &aacute;mbito de la Uni&oacute;n Europea.";
 answers[39] = 2;
 units[39] = ['7'];
 blocks[39] = ['A2'];
 comments[39] = "Id Pregunta: 1062. ";
 preguntaids[39] = 1062


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[40]= "41)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[40]= new Array();
 choices[40][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[40][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[40][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[40][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[40] = 0;
 units[40] = ['1'];
 blocks[40] = ['A1'];
 comments[40] = "Id Pregunta: 68. Constituci&oacute;n de 1978";
 preguntaids[40] = 68


//  Id pregunta: 1241 Año de creación de pregunta: 2016
 questions[41]= "42)  En el &aacute;mbito de las redes inal&aacute;mbricas, la variante IEEE 802.11a:";
 choices[41]= new Array();
 choices[41][0] = "Opera dentro del rango de los 5 GHz.";
 choices[41][1] = "Es compatible con el Est&aacute;ndar 802.11b.";
 choices[41][2] = "Es compatible con el est&aacute;ndar 802.11g.";
 choices[41][3] = "Incorpora QoS (Calidad de Servicio).";
 answers[41] = 0;
 units[41] = ['108'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 1241. ";
 preguntaids[41] = 1241


//  Id pregunta: 4247 Año de creación de pregunta: 2006
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes no es una causa del fracaso en la migraci&oacute;n de un sistema?";
 choices[42]= new Array();
 choices[42][0] = "Excesivo coste econ&oacute;mico.";
 choices[42][1] = "Falta de planificaci&oacute;n de la migraci&oacute;n.";
 choices[42][2] = "Falta de formaci&oacute;n a usuarios finales.";
 choices[42][3] = "Todas son causas de fracaso.";
 answers[42] = 0;
 units[42] = ['95'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 4247. ";
 preguntaids[42] = 4247


//  Id pregunta: 375 Año de creación de pregunta: 2016
 questions[43]= "44)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[43]= new Array();
 choices[43][0] = "Discriminaci&oacute;n indirecta.";
 choices[43][1] = "Discriminaci&oacute;n directa.";
 choices[43][2] = "Discriminaci&oacute;n por maternidad.";
 choices[43][3] = "Discriminaci&oacute;n abusiva.";
 answers[43] = 1;
 units[43] = ['14'];
 blocks[43] = ['A3'];
 comments[43] = "Id Pregunta: 375. Pol&iacute;ticas de igualdad";
 preguntaids[43] = 375


//  Id pregunta: 3407 Año de creación de pregunta: 2006
 questions[44]= "45)  Las siglas STRIPS se corresponden a";
 choices[44]= new Array();
 choices[44][0] = "Stanford Research Institute Problem Solver";
 choices[44][1] = "St. Luis Robotics Institute Private Software";
 choices[44][2] = "San Francisco Tech Robots Institute Practical Seasons";
 choices[44][3] = "Science, Tech and Research International Patented System";
 answers[44] = 0;
 units[44] = ['67'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 3407. ";
 preguntaids[44] = 3407


//  Id pregunta: 5479 Año de creación de pregunta: 2007
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre granjas de servidores (web farms) no es correcta?";
 choices[45]= new Array();
 choices[45][0] = "Una granja es un tipo de sistema de procesamiento distribuido, que consiste en un grupo de servidores interconectados trabajando de forma conjunta como un &uacute;nico recurso de computaci&oacute;n integrado.";
 choices[45][1] = "En una granja de servidores, los servidores pueden tener sistemas operativos individuales o compartidos, y tambi&eacute;n debe ser instalados para proporcionar el balanceo de la carga cuando hay muchas peticiones al servidor";
 choices[45][2] = "La decisi&oacute;n para distribuir la carga a un servidor en particular debe ser una opci&oacute;n preprogramada est&aacute;ticamente, pues es imposible la reconfiguraci&oacute;n din&aacute;mica.";
 choices[45][3] = "La red es la parte m&aacute;s cr&iacute;tica de una granja. Su capacidad y funcionamiento influyen en el rendimiento del sistema completo";
 answers[45] = 2;
 units[45] = ['54'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 5479. ";
 preguntaids[45] = 5479


//  Id pregunta: 275 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n el art&iacute;culo 44.3 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los cr&eacute;ditos para la acci&oacute;n protectora en su modalidad no contributiva y universal se especificar&aacute;n:";
 choices[46]= new Array();
 choices[46][0] = "A nivel de secci&oacute;n de programa.";
 choices[46][1] = "A nivel de grupo de programa.";
 choices[46][2] = "Ninguna de las respuestas es correcta.";
 choices[46][3] = "A nivel de programa.";
 answers[46] = 3;
 units[46] = ['11'];
 blocks[46] = ['A2'];
 comments[46] = "Id Pregunta: 275. Presupuestos generales";
 preguntaids[46] = 275


//  Id pregunta: 3271 Año de creación de pregunta: 2003
 questions[47]= "48)  La velocidad te&oacute;rica m&aacute;xima aproximada de un lector de CD-ROM 48x es de:";
 choices[47]= new Array();
 choices[47][0] = "150 KB/seg.";
 choices[47][1] = "3600 KB/seg.";
 choices[47][2] = "7200 KB/seg.";
 choices[47][3] = "3 MB/seg.";
 answers[47] = 2;
 units[47] = ['53'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 3271. Junta Andaluc&iacute;a";
 preguntaids[47] = 3271


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[48]= "49)  En el contexto de las bases de datos que siguen el modelo relacional, una superclave es:";
 choices[48]= new Array();
 choices[48][0] = "Una clave candidata m&iacute;nima, es decir, una clave candidata formada por un solo atributo.";
 choices[48][1] = "Una clave candidata siempre.";
 choices[48][2] = "Una clave primaria combinada con un identificador &uacute;nico generado por el gestor de base de datos, con el fin de reforzar la integridad y seguridad de la informaci&oacute;n.";
 choices[48][3] = "Un atributo o conjunto de atributos que permite identificar de forma &uacute;nica una fila en una tabla.";
 answers[48] = 3;
 units[48] = ['61'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 692. AGE A2 2015";
 preguntaids[48] = 692


//  Id pregunta: 5735 Año de creación de pregunta: 2007
 questions[49]= "50)  &iquest;Cu&aacute;les de los siguientes diagramas dan una perspectiva est&aacute;tica de un sistema?";
 choices[49]= new Array();
 choices[49][0] = "Diagrama de clases, diagrama de componentes y diagramas de colaboraciones.";
 choices[49][1] = "Diagramas de clase, diagramas de componentes y diagramas de distribuci&oacute;n.";
 choices[49][2] = "Diagramas de clases, de herencia, de encapsulaci&oacute;n y de polimorfismo.";
 choices[49][3] = "Diagramas de secuencias y diagramas de componentes.";
 answers[49] = 1;
 units[49] = ['89'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 5735. ";
 preguntaids[49] = 5735


//  Id pregunta: 3759 Año de creación de pregunta: 2002
 questions[50]= "51)  Dentro de un diagrama de flujos de datos, a los procesos que no necesitan descomponerse se les denomina:";
 choices[50]= new Array();
 choices[50][0] = "Procesos primitivos";
 choices[50][1] = "Procesos finales";
 choices[50][2] = "Procesos at&oacute;micos";
 choices[50][3] = "Procesos elementales";
 answers[50] = 0;
 units[50] = ['85', '86'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 3759. ";
 preguntaids[50] = 3759


//  Id pregunta: 8108 Año de creación de pregunta: 2011
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes operaciones se incorpora en SNMP v2?";
 choices[51]= new Array();
 choices[51][0] = "SetRequest";
 choices[51][1] = "GetBulkRequest";
 choices[51][2] = "GetNextRequest";
 choices[51][3] = "Trap";
 answers[51] = 1;
 units[51] = ['114'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 8108. Examen TIC A2 2010 interna";
 preguntaids[51] = 8108


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[52]= new Array();
 choices[52][0] = "La Seguridad Social";
 choices[52][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[52][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[52][3] = "El Banco de Espa&ntilde;a";
 answers[52] = 3;
 units[52] = ['15'];
 blocks[52] = ['A3'];
 comments[52] = "Id Pregunta: 418. Mercado laboral";
 preguntaids[52] = 418


//  Id pregunta: 6238 Año de creación de pregunta: 2003
 questions[53]= "54)  En la auditor&iacute;a inform&aacute;tica se conocen como pruebas sustantivas:";
 choices[53]= new Array();
 choices[53][0] = "Sirven para obtener una comprensi&oacute;n de cu&aacute;les son los controles administrativos que est&aacute;n establecidos.";
 choices[53][1] = "Sirven para ver si los controles est&aacute;n bien dise&ntilde;ados y funcionan eficazmente.";
 choices[53][2] = "Se utilizan para determinar si se cumplen los objetivos de salvaguarda de los activos, integridad de los datos, eficacia y eficiencia.";
 choices[53][3] = "Estas pruebas se utilizan para sacar consecuencias del an&aacute;lisis de determinada informaci&oacute;n.";
 answers[53] = 2;
 units[53] = ['36'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 6238. Examen TIC A Castilla La Mancha 2007";
 preguntaids[53] = 6238


//  Id pregunta: 4963 Año de creación de pregunta: 2002
 questions[54]= "55)  Las direcciones en IPv6 se clasifican en:";
 choices[54]= new Array();
 choices[54][0] = "unicast, multicast y broadcast";
 choices[54][1] = "unicast, anycast y broadcast";
 choices[54][2] = "unicast, anycast y multicast";
 choices[54][3] = "unicast y multicast";
 answers[54] = 2;
 units[54] = ['109'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 4963. ";
 preguntaids[54] = 4963


//  Id pregunta: 21 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;ntos miembros componen el Tribunal Constitucional?";
 choices[55]= new Array();
 choices[55][0] = "11";
 choices[55][1] = "12";
 choices[55][2] = "14";
 choices[55][3] = "8";
 answers[55] = 1;
 units[55] = ['1'];
 blocks[55] = ['A1'];
 comments[55] = "Id Pregunta: 21. Constituci&oacute;n de 1978";
 preguntaids[55] = 21


//  Id pregunta: 4031 Año de creación de pregunta: 2003
 questions[56]= "57)  El denominado &quot; principio de Pareto&quot; empleado frecuentemente en el enfoque estad&iacute;stico de Garant&iacute;a de Calidad en desarrollo del SW establece que:";
 choices[56]= new Array();
 choices[56][0] = "El n&uacute;mero de defectos del SW crece exponencialmente con el n&uacute;mero de niveles jer&aacute;rquicos presentes en el equipo de desarrollo";
 choices[56][1] = "El 80% de los defectos tienen su origen com&uacute;n en el 20% de los factores causantes";
 choices[56][2] = "Cuando un buen programador es ascendido a analista la tasa de errores se duplica, con un nivel de confianza del 95%";
 choices[56][3] = "Para una complejidad dda en un proyecto inform&aacute;tico el n&uacute;mero de errores se duplica cada per&iacute;odo de 18 meses o fracci&oacute;n";
 answers[56] = 1;
 units[56] = ['92', '93', '98'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 4031. ";
 preguntaids[56] = 4031


//  Id pregunta: 9828 Año de creación de pregunta: 2015
 questions[57]= "58)  Se&ntilde;ale cu&aacute;l de estas aplicaciones puede implementarse con el entorno .NET:";
 choices[57]= new Array();
 choices[57][0] = "Aplicaci&oacute;n de escritorio escrita en C++.";
 choices[57][1] = "Sitio web din&aacute;mico.";
 choices[57][2] = "Una plataforma de e-learning.";
 choices[57][3] = "Todas las anteriores.";
 answers[57] = 3;
 units[57] = ['63'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 9828. ";
 preguntaids[57] = 9828


//  Id pregunta: 10846 Año de creación de pregunta: 2015
 questions[58]= "59)  El est&aacute;ndar WiFi que permite establecer comunicaciones entre autom&oacute;viles es:";
 choices[58]= new Array();
 choices[58][0] = "IEEE 802.11j";
 choices[58][1] = "IEEE 802.11k";
 choices[58][2] = "IEEE 802.11n";
 choices[58][3] = "IEEE 802.11p";
 answers[58] = 3;
 units[58] = ['108'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 10846. ";
 preguntaids[58] = 10846


//  Id pregunta: 6018 Año de creación de pregunta: 2003
 questions[59]= "60)  Indique cual de los siguientes t&eacute;rminos NO corresponde a una metodolog&iacute;a de desarrollo de Sistemas:";
 choices[59]= new Array();
 choices[59][0] = "Metodolog&iacute;a MERISE.";
 choices[59][1] = "Metodolog&iacute;a SSADM.";
 choices[59][2] = "Metodolog&iacute;a METRICA.";
 choices[59][3] = "Metodolog&iacute;a SVOUGH.";
 answers[59] = 3;
 units[59] = ['86'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 6018. TIC B 2007";
 preguntaids[59] = 6018


//  Id pregunta: 6688 Año de creación de pregunta: 2009
 questions[60]= "61)  Se&ntilde;ale la respuesta correcta sobre la firma digital:";
 choices[60]= new Array();
 choices[60][0] = "Ofrece plenas garant&iacute;as de la integridad, confidencialidad y no repudio del documento firmado";
 choices[60][1] = "Se puede conseguir mediante protocolos de cifrado de clave secreta";
 choices[60][2] = "El DSS (Digital Signature Standard) est&aacute; adoptado como una norma por ISO/IEC";
 choices[60][3] = "La firma ciega (Blind signature) se obtiene firmando directamente el correspondiente mensaje, en vez del resumen de &eacute;ste";
 answers[60] = 1;
 units[60] = ['77'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 6688. ";
 preguntaids[60] = 6688


//  Id pregunta: 3131 Año de creación de pregunta: 2002
 questions[61]= "62)  En las interfaces orientadas a objetos (OOUI) es falso que:";
 choices[61]= new Array();
 choices[61][0] = "los iconos representan objetos que se pueden manipular directamente";
 choices[61][1] = "los objetos son de 3 tipos: datos, contenedores y dispositivos";
 choices[61][2] = "un ejemplo de interfaz orientada a objeto lo representan los accesos directos de Windows, donde cada objeto tiene su propia tarea asociada";
 choices[61][3] = "el estilo de interacci&oacute;n es el de acci&oacute;n-objeto y no el de objeto-acci&oacute;n";
 answers[61] = 3;
 units[61] = ['56'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 3131. ";
 preguntaids[61] = 3131


//  Id pregunta: 3072 Año de creación de pregunta: 2002
 questions[62]= "63)  Un Data Mart es:";
 choices[62]= new Array();
 choices[62][0] = "Un proveedor de datos de pago v&iacute;a Internet.";
 choices[62][1] = "Una versi&oacute;n reducida del datawarehouse, adscrita a un solo departamento de la organizaci&oacute;n.";
 choices[62][2] = "Una aplicaci&oacute;n para el mantenimiento de la coherencia de los datos.";
 choices[62][3] = "Ninguna de las anteriores respuestas es correcta.";
 answers[62] = 1;
 units[62] = ['72', '73'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 3072. ";
 preguntaids[62] = 3072


//  Id pregunta: 5793 Año de creación de pregunta: 2007
 questions[63]= "64)  El protocolo CMIP de OSI se puede considerar el equivalente al siguiente protocolo de la familia TCP/IP:";
 choices[63]= new Array();
 choices[63][0] = "SMTP";
 choices[63][1] = "SNMP";
 choices[63][2] = "ARP";
 choices[63][3] = "HTTP";
 answers[63] = 1;
 units[63] = ['109'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 5793. ";
 preguntaids[63] = 5793


//  Id pregunta: 8387 Año de creación de pregunta: 2011
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes es uno de los programas del marco general para la mejora de la calidad en la AGE?";
 choices[64]= new Array();
 choices[64][0] = "Programa de Evaluaci&oacute;n de la Calidad de las Organizaciones";
 choices[64][1] = "Programa de Formaci&oacute;n en EFQM";
 choices[64][2] = "Programa de Mejora de la Eficiencia en la Administraci&oacute;n P&uacute;blica";
 choices[64][3] = "Programa de Aseguramiento de la Calidad";
 answers[64] = 0;
 units[64] = ['92'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 8387. ";
 preguntaids[64] = 8387


//  Id pregunta: 1382 Año de creación de pregunta: 2016
 questions[65]= "66)  Indicar cu&aacute;l de las siguientes direcciones IP puede ser asignada a un host en la siguiente subred 135.26.41.80/28";
 choices[65]= new Array();
 choices[65][0] = "135.26.41.94";
 choices[65][1] = "135.26.41.95";
 choices[65][2] = "135.26.41.96";
 choices[65][3] = "135.26.41.97";
 answers[65] = 0;
 units[65] = ['109'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 1382. ";
 preguntaids[65] = 1382


//  Id pregunta: 6691 Año de creación de pregunta: 2009
 questions[66]= "67)  En referencia a WiMAX, seleccione cu&aacute;l de las siguientes opciones se corresponde con WiMAX m&oacute;vil:";
 choices[66]= new Array();
 choices[66][0] = "802.16i";
 choices[66][1] = "802.16e";
 choices[66][2] = "802.16f";
 choices[66][3] = "802.16n";
 answers[66] = 1;
 units[66] = ['108'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 6691. ";
 preguntaids[66] = 6691


//  Id pregunta: 961 Año de creación de pregunta: 2016
 questions[67]= "68)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[67]= new Array();
 choices[67][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[67][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[67][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[67][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[67] = 2;
 units[67] = ['4', '7', '8', '9'];
 blocks[67] = ['A1', 'A2'];
 comments[67] = "Id Pregunta: 961. Ley 40/2015";
 preguntaids[67] = 961


//  Id pregunta: 8365 Año de creación de pregunta: 2011
 questions[68]= "69)  En el contexto de Almac&eacute;n de datos (Data Warehouse) a los subconjuntos de datos para &aacute;reas especificas se le llama:";
 choices[68]= new Array();
 choices[68][0] = "Metadata.";
 choices[68][1] = "Data Marts.";
 choices[68][2] = "Data Ware.";
 choices[68][3] = "Data Store.";
 answers[68] = 1;
 units[68] = ['72'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 8365. Analista Ayto. Madrid 2010";
 preguntaids[68] = 8365


//  Id pregunta: 9077 Año de creación de pregunta: 2014
 questions[69]= "70)  Un almac&eacute;n de datos almacena:";
 choices[69]= new Array();
 choices[69][0] = "S&oacute;lo informaci&oacute;n actual.";
 choices[69][1] = "Informaci&oacute;n no vol&aacute;til.";
 choices[69][2] = "Informaci&oacute;n actual e hist&oacute;rica.";
 choices[69][3] = "B y C son correctas.";
 answers[69] = 3;
 units[69] = ['72'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 9077. ";
 preguntaids[69] = 9077


//  Id pregunta: 201 Año de creación de pregunta: 2016
 questions[70]= "71)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[70]= new Array();
 choices[70][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[70][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[70][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[70][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[70] = 3;
 units[70] = ['7'];
 blocks[70] = ['A2'];
 comments[70] = "Id Pregunta: 201. AGE A1 2015";
 preguntaids[70] = 201


//  Id pregunta: 4522 Año de creación de pregunta: 2002
 questions[71]= "72)  Dentro del modelo de referencia OSI, &iquest;cu&aacute;l es el componente de los procesos de aplicaci&oacute;n que se encarga de ejecutar los protocolos de nivel de aplicaci&oacute;n, y de proporcionar los elementos de servicio del nivel de aplicaci&oacute;n?:";
 choices[71]= new Array();
 choices[71][0] = "La entidad de aplicaci&oacute;n";
 choices[71][1] = "Los CASEs (Common Aplication Service Elements)";
 choices[71][2] = "Los SASEs (Specific Aplication Service Elements)";
 choices[71][3] = "El stack de comunicaciones";
 answers[71] = 0;
 units[71] = ['105'];
 blocks[71] = ['B4'];
 comments[71] = "Id Pregunta: 4522. ";
 preguntaids[71] = 4522


//  Id pregunta: 8288 Año de creación de pregunta: 2011
 questions[72]= "73)  Se ha comprado una c&aacute;mara IP que requiere m&aacute;s potencia de la habitual, m&aacute;s que con la normal IEEE 802.3.af. Esta c&aacute;mara funciona con la versi&oacute;n actualizada de IEEE 802.3af y requiere POE con mayor alimentaci&oacute;n. Como se llama esta norma si es que existe:";
 choices[72]= new Array();
 choices[72][0] = "IEEE 802.3at, PoE+ o PoE Plus.";
 choices[72][1] = "IEEE 802.3ag, o PoE extendido.";
 choices[72][2] = "PoE2.";
 choices[72][3] = "No existe una actualizaci&oacute;n del standard IEEE 802.3af";
 answers[72] = 0;
 units[72] = ['112'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 8288. Examen TIC A2 2010 interna";
 preguntaids[72] = 8288


//  Id pregunta: 272 Año de creación de pregunta: 2016
 questions[73]= "74)  El Presupuesto por programas sirve para saber...";
 choices[73]= new Array();
 choices[73][0] = "En qu&eacute; nos gastamos el dinero";
 choices[73][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[73][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[73][3] = "Qui&eacute;n se gasta el dinero";
 answers[73] = 2;
 units[73] = ['11'];
 blocks[73] = ['A2'];
 comments[73] = "Id Pregunta: 272. Presupuestos generales";
 preguntaids[73] = 272


//  Id pregunta: 7001 Año de creación de pregunta: 2010
 questions[74]= "75)  El algoritmo ID3 es una t&eacute;cnica de miner&iacute;a de datos que se clasifica en el grupo de:";
 choices[74]= new Array();
 choices[74][0] = "Los m&oacute;delos estad&iacute;sticos";
 choices[74][1] = "Agrupamiento";
 choices[74][2] = "Los &aacute;rboles de decisi&oacute;n";
 choices[74][3] = "Las redes neuronales";
 answers[74] = 2;
 units[74] = ['67'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 7001. TIC-B 2009 bloque desarrollo";
 preguntaids[74] = 7001


