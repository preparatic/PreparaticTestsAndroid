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
//  Id pregunta: 4112 Año de creación de pregunta: 2003
 questions[0]= "1)  En los Sistemas de Recuperaci&oacute;n de Informaci&oacute;n la t&eacute;cnica de Sistemas Expertos consiste en:";
 choices[0]= new Array();
 choices[0][0] = "Expresar las consultas como solicitudes de textos relevantes con relaci&oacute;n a un t&oacute;pico particular, produci&eacute;ndose a continuaci&oacute;n la b&uacute;squeda en la base de conocimientos mediante activaci&oacute;n de reglas, que producen finalmente una relaci&oacute;n clasificada de texto";
 choices[0][1] = "Expresar las consultas como solicitudes de textos relevantes con relaci&oacute;n a varios t&oacute;picos, produci&eacute;ndose a continuaci&oacute;n la b&uacute;squeda en la base de conocimientos mediante activaci&oacute;n de reglas, que producen finalmente una relaci&oacute;n clasificada de textos pote";
 choices[0][2] = "Expresar las consultas como solicitudes de textos relevantes con relaci&oacute;n a un t&oacute;pico particular, produci&eacute;ndose a continuaci&oacute;n la b&uacute;squeda en la base de conocimientos mediante consulta de &iacute;ndices invertidos, que producen finalmente una relaci&oacute;n clasificad";
 choices[0][3] = "Expresar las consultas como solicitudes de textos relevantes con relaci&oacute;n a un t&oacute;pico particular, produci&eacute;ndose a continuaci&oacute;n la b&uacute;squeda en la base de conocimientos mediante activaci&oacute;n de reglas, que producen finalmente una relaci&oacute;n de textos presentes";
 answers[0] = 0;
 units[0] = ['100'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 4112. ";
 preguntaids[0] = 4112


//  Id pregunta: 3523 Año de creación de pregunta: 2002
 questions[1]= "2)  &iquest;Cu&aacute;l no es una decisi&oacute;n que deba tomar una organizaci&oacute;n para establecer su planificaci&oacute;n estrat&eacute;gica?:";
 choices[1]= new Array();
 choices[1][0] = "Determinar el personal y recursos necesarios para desarrollar los proyectos";
 choices[1][1] = "Establecimiento de los objetivos y metas principales";
 choices[1][2] = "Definici&oacute;n del marco econ&oacute;mico presupuestario y del &aacute;mbito de actuaci&oacute;n de la organizaci&oacute;n";
 choices[1][3] = "Formulaci&oacute;n de los diferentes programas y proyectos orientados a conseguir los objetivos";
 answers[1] = 0;
 units[1] = ['83'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 3523. ";
 preguntaids[1] = 3523


//  Id pregunta: 10394 Año de creación de pregunta: 2015
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes no es un pilar de la Agenda Digital Europea?";
 choices[2]= new Array();
 choices[2][0] = "Mercado Digital Din&aacute;mico &Uacute;nico";
 choices[2][1] = "Investigaci&oacute;n e innovaci&oacute;n";
 choices[2][2] = "Econom&iacute;a Digital e Internacionalizaci&oacute;n";
 choices[2][3] = "Beneficios TIC para la Sociedad UE";
 answers[2] = 2;
 units[2] = ['19'];
 blocks[2] = ['A4'];
 comments[2] = "Id Pregunta: 10394. ";
 preguntaids[2] = 10394


//  Id pregunta: 1016 Año de creación de pregunta: 2016
 questions[3]= "4)  Respecto a los servicios territoriales es correcto:";
 choices[3]= new Array();
 choices[3][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[3][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[3][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[3][3] = "ninguna es correcta";
 answers[3] = 0;
 units[3] = ['4', '7', '8', '9'];
 blocks[3] = ['A1', 'A2'];
 comments[3] = "Id Pregunta: 1016. Ley 40/2015";
 preguntaids[3] = 1016


//  Id pregunta: 693 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes sistemas de bases de datos es orientado a objetos?";
 choices[4]= new Array();
 choices[4][0] = "MySQL";
 choices[4][1] = "SQLite";
 choices[4][2] = "Zope";
 choices[4][3] = "MariaDB";
 answers[4] = 2;
 units[4] = ['61'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 693. TAI 2016.";
 preguntaids[4] = 693


//  Id pregunta: 8044 Año de creación de pregunta: 2011
 questions[5]= "6)  El directorio de Sedes Electr&oacute;nicas de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos es gestionado por:";
 choices[5]= new Array();
 choices[5][0] = "La Presidencia del Gobierno";
 choices[5][1] = "El Ministerio de la Presidencia.";
 choices[5][2] = "La Red SARA.";
 choices[5][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[5] = 1;
 units[5] = ['43'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 8044. Examen TIC A2 2010";
 preguntaids[5] = 8044


//  Id pregunta: 1156 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes grupos de principios es propio de un buen dise&ntilde;o estructurado?";
 choices[6]= new Array();
 choices[6][0] = "Modularidad, dependencia funcional y principio de caja &quot;blanca&quot;.";
 choices[6][1] = "Modularidad, independencia funcional y principio de caja &quot;blanca&quot;.";
 choices[6][2] = "Modularidad, independencia funcional y principio de caja &quot;negra&quot;.";
 choices[6][3] = "Modularidad, dependencia funcional y principio de caja &quot;negra&quot;.";
 answers[6] = 2;
 units[6] = ['88'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 1156. ";
 preguntaids[6] = 1156


//  Id pregunta: 1509 Año de creación de pregunta: 2016
 questions[7]= "8)  La aplicaci&oacute;n o un conjunto de aplicaciones que almacena y organiza la informaci&oacute;n sobre los usuarios de una red de ordenadores, sobre recursos de red, y permite a los administradores gestionar el acceso de usuarios a los recursos sobre dicha red recibe el nombre de:";
 choices[7]= new Array();
 choices[7][0] = "Sistema de ficheros.";
 choices[7][1] = "Servicio de nombres.";
 choices[7][2] = "Servicio de agente remoto.";
 choices[7][3] = "Servicio de directorio.";
 answers[7] = 3;
 units[7] = ['56'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 1509. ";
 preguntaids[7] = 1509


//  Id pregunta: 8723 Año de creación de pregunta: 2013
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de bus interno paralelo?";
 choices[8]= new Array();
 choices[8][0] = "ISA";
 choices[8][1] = "HTI";
 choices[8][2] = "PCI";
 choices[8][3] = "AGP";
 answers[8] = 1;
 units[8] = ['51'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 8723. Examen TICA2-2011";
 preguntaids[8] = 8723


//  Id pregunta: 719 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[9]= new Array();
 choices[9][0] = "Memcached";
 choices[9][1] = "OpCache";
 choices[9][2] = "WinCache Extension for PHP";
 choices[9][3] = "Alternative PHP Cache";
 answers[9] = 0;
 units[9] = ['65'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 719. AGE A1 2015";
 preguntaids[9] = 719


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[10]= new Array();
 choices[10][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[10][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[10][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[10][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[10] = 0;
 units[10] = ['1'];
 blocks[10] = ['A1'];
 comments[10] = "Id Pregunta: 26. Constituci&oacute;n de 1978";
 preguntaids[10] = 26


//  Id pregunta: 7122 Año de creación de pregunta: 2010
 questions[11]= "12)  La creaci&oacute;n de sellos electr&oacute;nicos se realizar&aacute;, seg&uacute;n lo dispuesto en el RD 1671/2009, mediante...";
 choices[11]= new Array();
 choices[11][0] = "Orden del Ministerio de Presidencia";
 choices[11][1] = "Resoluci&oacute;n del Ministro o titular del organismo p&uacute;blico competente";
 choices[11][2] = "Orden del Ministerio o titular del organismo p&uacute;blico competente";
 choices[11][3] = "Resoluci&oacute;n de la Subsecretar&iacute;a del Ministerio o titular del organismo p&uacute;blico competente";
 answers[11] = 3;
 units[11] = ['7'];
 blocks[11] = ['A2'];
 comments[11] = "Id Pregunta: 7122. Art&iacute;culo 19 RD 1671/2009";
 preguntaids[11] = 7122


//  Id pregunta: 8762 Año de creación de pregunta: 2013
 questions[12]= "13)  &iquest;Cu&aacute;l es el &oacute;rgano especializado en el control interno y en la evaluaci&oacute;n de los servicios de cada uno de los Ministerios y de sus organismos p&uacute;blicos dependientes?";
 choices[12]= new Array();
 choices[12][0] = "La IGAE";
 choices[12][1] = "La Inspecci&oacute;n General de los Servicios de cada Ministerio";
 choices[12][2] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[12][3] = "La Agencia Estatal de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y de la Calidad de los Servicios";
 answers[12] = 1;
 units[12] = ['36'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 8762. ";
 preguntaids[12] = 8762


//  Id pregunta: 337 Año de creación de pregunta: 2016
 questions[13]= "14)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[13]= new Array();
 choices[13][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[13][1] = "Static &amp; Active process for REsolution Bank.";
 choices[13][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[13][3] = "Super Active REsponse for Banks";
 answers[13] = 0;
 units[13] = ['12'];
 blocks[13] = ['A3'];
 comments[13] = "Id Pregunta: 337. Modelo econ&oacute;mico";
 preguntaids[13] = 337


//  Id pregunta: 6355 Año de creación de pregunta: 2003
 questions[14]= "15)  La propiedad de un objeto denominada persistencia consiste en";
 choices[14]= new Array();
 choices[14][0] = "Que un objeto ocupa un determinado espacio de memoria y existe durante una cierta cantidad de tiempo. Es un concepto din&aacute;mico. La permanencia del objeto es el tiempo durante el cual se le asigna espacio y permanece accesible en la memoria del ordenador";
 choices[14][1] = "Un objeto ocupa un determinado espacio de memoria durante toda la vida de la aplicaci&oacute;n. La permanencia del objeto es que est&aacute; accesible en la memoria del ordenador";
 choices[14][2] = "Un objeto est&aacute; accesible ocupe o no memoria en el ordenador, el S.O. se encarga de cargar y descargar el objeto de la memoria RAM";
 choices[14][3] = "La persistencia de un objeto consiste en que aunque su instancia haya sido eliminada el objeto sigue accesible";
 answers[14] = 0;
 units[14] = ['82'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 6355. Examen 2006 JCYL";
 preguntaids[14] = 6355


//  Id pregunta: 6178 Año de creación de pregunta: 2003
 questions[15]= "16)  Seg&uacute;n Magerit V3, todas las dimensiones de la Seguridad son:";
 choices[15]= new Array();
 choices[15][0] = "Disponibilidad, integridad y confidencialidad.";
 choices[15][1] = "Disponibilidad, integridad, confidencialidad, trazabilidad y autenticidad.";
 choices[15][2] = "Disponibilidad, integridad, confidencialidad y auditabilidad.";
 choices[15][3] = "Disponibilidad e integridad.";
 answers[15] = 1;
 units[15] = ['45'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 6178. Examen TIC A Castilla La Mancha 2007";
 preguntaids[15] = 6178


//  Id pregunta: 982 Año de creación de pregunta: 2016
 questions[16]= "17)  El articulo 55 de la ley 40/2015 se&ntilde;ala que salvo las excepciones previstas por esta ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[16]= new Array();
 choices[16][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[16][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[16][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[16][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[16] = 0;
 units[16] = ['4', '7', '8', '9'];
 blocks[16] = ['A1', 'A2'];
 comments[16] = "Id Pregunta: 982. Ley 40/2015";
 preguntaids[16] = 982


//  Id pregunta: 3050 Año de creación de pregunta: 2002
 questions[17]= "18)  Se&ntilde;ale la respuesta falsa. Una pasarela de pagos:";
 choices[17]= new Array();
 choices[17][0] = "Permite a un comercio en internet cobrar a sus clientes, efectuando la transacci&oacute;n por medio de un tercero de confianza";
 choices[17][1] = "Es un aplicativo software que permite conectar al cliente con el comercio de forma segura";
 choices[17][2] = "Es un dispositivo hardware que se instala en el servidor web de la tienda viertual";
 choices[17][3] = "Abstrae el manejo de los pagos de la l&oacute;gica de la aplicaci&oacute;n de la tienda";
 answers[17] = 2;
 units[17] = ['10', '75'];
 blocks[17] = ['A2', 'B2'];
 comments[17] = "Id Pregunta: 3050. ";
 preguntaids[17] = 3050


//  Id pregunta: 1633 Año de creación de pregunta: 2016
 questions[18]= "19)  Dentro de la arquitectura MPLS -Multiple Protocol Label Switching-, tecnolog&iacute;a de conmutaci&oacute;n para circuitos virtuales, &iquest;c&oacute;mo se denomina al tr&aacute;fico que se encamina bajo una etiqueta?";
 choices[18]= new Array();
 choices[18][0] = "FER";
 choices[18][1] = "LSB";
 choices[18][2] = "FEC";
 choices[18][3] = "LSR";
 answers[18] = 2;
 units[18] = ['107'];
 blocks[18] = ['B4'];
 comments[18] = "Id Pregunta: 1633. ";
 preguntaids[18] = 1633


//  Id pregunta: 1972 Año de creación de pregunta: 2016
 questions[19]= "20)  Podr&aacute;n ser medios de prueba en un procedimiento administrativo:";
 choices[19]= new Array();
 choices[19][0] = "Exclusivamente aquellos que se contengan en medios escritos y ordinarios.";
 choices[19][1] = "Los hachos relevantes para la decisi&oacute;n de un procedimiento podr&aacute;n acreditarse por cualquier medio de prueba admisible en derecho.";
 choices[19][2] = "Cualquier hecho acaecido en el procedimiento podr&aacute; acreditarse por un medio da prueba admisible en derecho.";
 choices[19][3] = "Todas las respuestas anteriores son incorrectas.";
 answers[19] = 1;
 units[19] = ['7'];
 blocks[19] = ['A2'];
 comments[19] = "Id Pregunta: 1972. ";
 preguntaids[19] = 1972


//  Id pregunta: 7521 Año de creación de pregunta: 2010
 questions[20]= "21)  &iquest;A qu&eacute; nivel pertenecen las medidas de seguridad que, de acuerdo con el RD 1720/2007, deben ser adoptadas en los ficheros correspondientes a los servicios financieros, gestionados por Entidades Financieras?";
 choices[20]= new Array();
 choices[20][0] = "Nivel b&aacute;sico.";
 choices[20][1] = "Nivel alto.";
 choices[20][2] = "Nivel medio.";
 choices[20][3] = "Nivel superior.";
 answers[20] = 2;
 units[20] = ['35'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 7521. Similar a Map 2005";
 preguntaids[20] = 7521


//  Id pregunta: 827 Año de creación de pregunta: 2016
 questions[21]= "22)  En M&eacute;trica v3, indique la tarea englobada dentro de la actividad DSI 4 'Dise&ntilde;o de Clases':";
 choices[21]= new Array();
 choices[21][0] = "Identificaci&oacute;n de Clases Asociadas a un Caso de Uso.";
 choices[21][1] = "Dise&ntilde;o de M&oacute;dulos del Sistema.";
 choices[21][2] = "An&aacute;lisis de Consistencia de las Especificaciones de Dise&ntilde;o.";
 choices[21][3] = "Dise&ntilde;o de la Jerarqu&iacute;a.";
 answers[21] = 3;
 units[21] = ['91'];
 blocks[21] = ['B3'];
 comments[21] = "Id Pregunta: 827. AGE A2 2015";
 preguntaids[21] = 827


//  Id pregunta: 376 Año de creación de pregunta: 2016
 questions[22]= "23)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[22]= new Array();
 choices[22][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[22][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[22][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[22][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[22] = 0;
 units[22] = ['14'];
 blocks[22] = ['A3'];
 comments[22] = "Id Pregunta: 376. Pol&iacute;ticas de igualdad";
 preguntaids[22] = 376


//  Id pregunta: 9891 Año de creación de pregunta: 2015
 questions[23]= "24)  Seg&uacute;n la Ley 39/2015 cual de las siguientes opciones no se establece como &quot;Derecho de las Personas en sus relaciones con la Administraci&oacute;n&quot; en su Art&iacute;culo 13.";
 choices[23]= new Array();
 choices[23][0] = "A ser tratados con respeto y deferencia por las autoridades y empleados p&uacute;blicos, que habr&aacute;n de facilitarles el ejercicio de sus derechos y el cumplimiento de sus obligaciones.";
 choices[23][1] = "A la obtenci&oacute;n y utilizaci&oacute;n de los medios de identificaci&oacute;n y firma electr&oacute;nica contemplados en esta Ley.";
 choices[23][2] = "A la protecci&oacute;n de datos de car&aacute;cter personal, y en particular a la seguridad y confidencialidad de los datos que figuren en los ficheros, sistemas y aplicaciones de las Administraciones P&uacute;blicas.";
 choices[23][3] = "Archivo y registro del expediente asociado con todo procedimiento administrativo.";
 answers[23] = 3;
 units[23] = ['7', '19'];
 blocks[23] = ['A2', 'A4'];
 comments[23] = "Id Pregunta: 9891. ";
 preguntaids[23] = 9891


//  Id pregunta: 2489 Año de creación de pregunta: 2004
 questions[24]= "25)  Cu&aacute;l de las siguientes tecnolog&iacute;as no est&aacute; relacionada con la identificaci&oacute;n y autentificaci&oacute;n:";
 choices[24]= new Array();
 choices[24][0] = "Certificados";
 choices[24][1] = "Single Sign On";
 choices[24][2] = "Kerberos";
 choices[24][3] = "NetBios";
 answers[24] = 3;
 units[24] = ['77'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 2489. Similar a examen TIC SS A 2004";
 preguntaids[24] = 2489


//  Id pregunta: 366 Año de creación de pregunta: 2016
 questions[25]= "26)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[25]= new Array();
 choices[25][0] = "Sean dirigidas por mujeres";
 choices[25][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[25][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[25][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[25] = 2;
 units[25] = ['14'];
 blocks[25] = ['A3'];
 comments[25] = "Id Pregunta: 366. Pol&iacute;ticas de igualdad";
 preguntaids[25] = 366


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[26]= "27)  Con respecto a la EPA(Encuesta P&uacute;blica de Empleo) es falso que:";
 choices[26]= new Array();
 choices[26][0] = "La Epa cubre el espacio nacional";
 choices[26][1] = "El periodo de referencia de los resultados de la encuesta es cuatrimestral";
 choices[26][2] = "El INE utiliza la EPA para elaborar sus estad&iacute;sticas relativas al mercado laboral";
 choices[26][3] = "La encuesta va dirigida a poblaci&oacute;n que reside en viviendas familiares, excluy&eacute;ndose hospitales, hoteles, etc&hellip;";
 answers[26] = 1;
 units[26] = ['15'];
 blocks[26] = ['A3'];
 comments[26] = "Id Pregunta: 426. Modelo econ&oacute;mico";
 preguntaids[26] = 426


//  Id pregunta: 8033 Año de creación de pregunta: 2011
 questions[27]= "28)  &iquest;En cual de las siguientes pruebas interviene el usuario final?";
 choices[27]= new Array();
 choices[27][0] = "Pruebas de Caja Blanca.";
 choices[27][1] = "Pruebas de Aceptaci&oacute;n.";
 choices[27][2] = "Pruebas de Implantaci&oacute;n.";
 choices[27][3] = "Pruebas de Regresi&oacute;n.";
 answers[27] = 1;
 units[27] = ['91'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 8033. Examen TIC A2 2010";
 preguntaids[27] = 8033


//  Id pregunta: 6874 Año de creación de pregunta: 2010
 questions[28]= "29)  Indicar cu&aacute;l de los siguientes NO est&aacute; entre los objetivos que persigue MAGERIT v3:";
 choices[28]= new Array();
 choices[28][0] = "Ofrecer un m&eacute;todo sistem&aacute;tico para analizar los riesgos derivados del uso de tecnolog&iacute;as de la informaci&oacute;n y comunicaciones (TIC).";
 choices[28][1] = "Ayudar a descubrir y planificar el tratamiento oportuno para mantener los riesgos bajo control.";
 choices[28][2] = "Establecer una norma de obligado cumplimiento para todos los organismos de las Administraciones P&uacute;blicas espa&ntilde;olas a la hora de analizar y gestionar los riesgos.";
 choices[28][3] = "Preparar a la Organizaci&oacute;n para procesos de evaluaci&oacute;n, auditor&iacute;a, certificaci&oacute;n o acreditaci&oacute;n, seg&uacute;n corresponda en cada caso.";
 answers[28] = 2;
 units[28] = ['45'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 6874. TIC A 2009";
 preguntaids[28] = 6874


//  Id pregunta: 4013 Año de creación de pregunta: 2002
 questions[29]= "30)  Para evaluar diferentes sistemas de recuperaci&oacute;n de informaci&oacute;n, &iquest;qu&eacute; par&aacute;metros suelen analizarse?:";
 choices[29]= new Array();
 choices[29][0] = "&Iacute;ndice de retorno e &iacute;ndice de precisi&oacute;n";
 choices[29][1] = "&Iacute;ndice de estimaci&oacute;n cuantificable";
 choices[29][2] = "&Iacute;ndice de ajuste de material devuelto";
 choices[29][3] = "N&uacute;mero de referencias correctas";
 answers[29] = 0;
 units[29] = ['100'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 4013. ";
 preguntaids[29] = 4013


//  Id pregunta: 8429 Año de creación de pregunta: 2011
 questions[30]= "31)  La publicaci&oacute;n en las sedes judiciales electr&oacute;nicas de informaciones, servicios y transacciones respetar&aacute;:";
 choices[30]= new Array();
 choices[30][0] = "Los est&aacute;ndares abiertos";
 choices[30][1] = "Aquellos est&aacute;ndares que sean de uso generalizado por los ciudadanos";
 choices[30][2] = "Los dos anteriores";
 choices[30][3] = "Los dos primeros y los que determine la autoridad compentente mediante disposici&oacute;n publicada en la sede judicial";
 answers[30] = 2;
 units[30] = ['2'];
 blocks[30] = ['A1'];
 comments[30] = "Id Pregunta: 8429. ";
 preguntaids[30] = 8429


//  Id pregunta: 1274 Año de creación de pregunta: 2016
 questions[31]= "32)  La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, en el art&iacute;culo 45 detalla la prescripci&oacute;n para las sanciones e infracciones. Se&ntilde;ale la respuesta correcta:";
 choices[31]= new Array();
 choices[31][0] = "Infracciones muy graves prescribir&aacute;n a los 3 a&ntilde;os, las graves al a&ntilde;o y las leves a los 6 meses.";
 choices[31][1] = "Las sanciones impuestas por faltas muy graves prescribir&aacute;n a los 3 a&ntilde;os, las impuestas por faltas graves a los 2 a&ntilde;os y las impuestas por faltas leves a los seis meses.";
 choices[31][2] = "Las infracciones muy graves prescribir&aacute;n a los 5 a&ntilde;os, las graves a los 3 a&ntilde;os y las leves al a&ntilde;o.";
 choices[31][3] = "Sanciones impuestas por faltas muy graves prescribir&aacute;n a los 3 a&ntilde;os, las impuestas por faltas graves a los 2 a&ntilde;os y las impuestas por faltas leves al a&ntilde;o.";
 answers[31] = 3;
 units[31] = ['19'];
 blocks[31] = ['A4'];
 comments[31] = "Id Pregunta: 1274. ";
 preguntaids[31] = 1274


//  Id pregunta: 6530 Año de creación de pregunta: 2003
 questions[32]= "33)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es falsa en una soluci&oacute;n RAID.";
 choices[32]= new Array();
 choices[32][0] = "En RAID 0 un fallo en un disco provoca la p&eacute;rdida de todos los datos";
 choices[32][1] = "RAID 4 es como RAID 0 m&aacute;s un disco de paridad dedicado";
 choices[32][2] = "El RAID 1 no mejora el rendimiento en escritura respecto a RAID 0";
 choices[32][3] = "RAID 5 es uno de los niveles RAID m&aacute;s comunes, y hace uso de un disco de paridad dedicado";
 answers[32] = 3;
 units[32] = ['53'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 6530. ";
 preguntaids[32] = 6530


//  Id pregunta: 991 Año de creación de pregunta: 2016
 questions[33]= "34)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[33]= new Array();
 choices[33][0] = "un &oacute;rgano superior";
 choices[33][1] = "un &oacute;rgano directivo";
 choices[33][2] = "un &oacute;rgano superior o directivo";
 choices[33][3] = "ninguna es correcta";
 answers[33] = 2;
 units[33] = ['4', '7', '8', '9'];
 blocks[33] = ['A1', 'A2'];
 comments[33] = "Id Pregunta: 991. Ley 40/2015";
 preguntaids[33] = 991


//  Id pregunta: 1523 Año de creación de pregunta: 2016
 questions[34]= "35)  Dentro de los m&eacute;todos de acceso al medio en redes, &iquest;cu&aacute;l de las siguientes t&eacute;cnicas se encuentra dentro de las denominadas de contienda con escucha?";
 choices[34]= new Array();
 choices[34][0] = "Token ring.";
 choices[34][1] = "CSMA.";
 choices[34][2] = "Aloha puro.";
 choices[34][3] = "Aloha ranurado.";
 answers[34] = 1;
 units[34] = ['102'];
 blocks[34] = ['B4'];
 comments[34] = "Id Pregunta: 1523. ";
 preguntaids[34] = 1523


//  Id pregunta: 10719 Año de creación de pregunta: 2015
 questions[35]= "36)  &iquest;Cu&aacute;l de entre las siguientes es una de las caracter&iacute;sticas del Cloud?";
 choices[35]= new Array();
 choices[35][0] = "El consumo a la carta: un consumidor puede proporcionarse las necesidades TIC que precise sin que medie el proveedor.";
 choices[35][1] = "El acceso a las capacidades disponibles en la red se puede hacer usando plataformas heterog&eacute;neas.";
 choices[35][2] = "Los recursos TIC del proveedor se reservan para ser usados por varios consumidores.";
 choices[35][3] = "Todas las respuestas anteriores son ciertas.";
 answers[35] = 3;
 units[35] = ['52'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 10719. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";
 preguntaids[35] = 10719


//  Id pregunta: 1433 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes NO es causa de inelegibilidad para los Diputados y Senadores seg&uacute;n el art&iacute;culo 70 de la Constituci&oacute;n Espa&ntilde;ola?";
 choices[36]= new Array();
 choices[36][0] = "Ser miembros del Tribunal Constitucional.";
 choices[36][1] = "Ser miembros del Gobierno.";
 choices[36][2] = "Ser Magistrado, Juez y Fiscal en activo.";
 choices[36][3] = "Ser el Defensor del Pueblo.";
 answers[36] = 1;
 units[36] = ['1'];
 blocks[36] = ['A1'];
 comments[36] = "Id Pregunta: 1433. ";
 preguntaids[36] = 1433


//  Id pregunta: 72 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[37]= new Array();
 choices[37][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[37][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[37][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[37][3] = "Sancionar y publicar las leyes.";
 answers[37] = 2;
 units[37] = ['1'];
 blocks[37] = ['A1'];
 comments[37] = "Id Pregunta: 72. Constituci&oacute;n de 1978";
 preguntaids[37] = 72


//  Id pregunta: 7974 Año de creación de pregunta: 2011
 questions[38]= "39)  La tecnologia IDSL (ISDN Digital Subscriber Line):";
 choices[38]= new Array();
 choices[38][0] = "Se utiliza para transportar voz y datos";
 choices[38][1] = "Es asim&eacute;trica";
 choices[38][2] = "Utiliza 3 pares de hilos";
 choices[38][3] = "Alcanza una distancia m&aacute;xima de 5,5 Km.";
 answers[38] = 3;
 units[38] = ['107'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 7974. Analista Ayto. Madrid 2010";
 preguntaids[38] = 7974


//  Id pregunta: 2982 Año de creación de pregunta: 2002
 questions[39]= "40)  Los procesadores superescalares:";
 choices[39]= new Array();
 choices[39][0] = "Son siempre procesadores RISC";
 choices[39][1] = "Han de ser necesariamente CISC";
 choices[39][2] = "Suelen ser RISC, pero pueden ser CISC";
 choices[39][3] = "Todas son falsas";
 answers[39] = 2;
 units[39] = ['49'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 2982. ";
 preguntaids[39] = 2982


//  Id pregunta: 10039 Año de creación de pregunta: 2015
 questions[40]= "41)  De las siguientes herramientas de teleaprendizaje para formaci&oacute;n de usuarios y personal t&eacute;cnico, indique cu&aacute;l es de software propietario:";
 choices[40]= new Array();
 choices[40][0] = "Catedr@.";
 choices[40][1] = "Dokeos.";
 choices[40][2] = "Moodle.";
 choices[40][3] = "Claroline.";
 answers[40] = 0;
 units[40] = ['70'];
 blocks[40] = ['B2'];
 comments[40] = "Id Pregunta: 10039. Examen TIC A2 2014";
 preguntaids[40] = 10039


//  Id pregunta: 892 Año de creación de pregunta: 2016
 questions[41]= "42)  La RFC 1918 regula los rangos de direcciones reservadas para redes privadas, seg&uacute;n dicho RFC &iquest;cu&aacute;l de los siguientes rangos ser&iacute;a INCORRECTO considerarlo como red privada?";
 choices[41]= new Array();
 choices[41][0] = "10.0.0.0 a 10.255.255.255";
 choices[41][1] = "192.168.0.0 a 192.168.255.255";
 choices[41][2] = "169.16.0.0 a 169.31.255.255";
 choices[41][3] = "172.16.0.0 a 172.31.255.255";
 answers[41] = 2;
 units[41] = ['109'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 892. AGE A2 2015";
 preguntaids[41] = 892


//  Id pregunta: 1618 Año de creación de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale la afirmaci&oacute;n correcta. Los procedimientos de control de cambios ayudan a mantener la integridad de la informaci&oacute;n del sistema asegurando que:";
 choices[42]= new Array();
 choices[42][0] = "El c&oacute;digo pasado a producci&oacute;n est&aacute; autorizado.";
 choices[42][1] = "El c&oacute;digo de producci&oacute;n est&aacute; libre de errores.";
 choices[42][2] = "Los datos activos son peri&oacute;dicamente auditados.";
 choices[42][3] = "Los datos activos son actualizados peri&oacute;dicamente.";
 answers[42] = 0;
 units[42] = ['96'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 1618. ";
 preguntaids[42] = 1618


//  Id pregunta: 4605 Año de creación de pregunta: 2002
 questions[43]= "44)  &iquest;Qu&eacute; es fibra oscura?:";
 choices[43]= new Array();
 choices[43][0] = "Fibra &oacute;ptica que ha perdido sus propiedades y que se ha vuelto opaca";
 choices[43][1] = "Ramal de fibra &oacute;ptica que alquila un particular a un Operador de Telecomunicaciones sin electr&oacute;nica u optr&oacute;nica";
 choices[43][2] = "Un terminador de fibra &oacute;ptica para igualar la impedancia de la l&iacute;nea";
 choices[43][3] = "Fibra &oacute;ptica con impurezas";
 answers[43] = 1;
 units[43] = ['106'];
 blocks[43] = ['B4'];
 comments[43] = "Id Pregunta: 4605. ";
 preguntaids[43] = 4605


//  Id pregunta: 657 Año de creación de pregunta: 2016
 questions[44]= "45)  Se&ntilde;ale la respuesta correcta sobre la planificaci&oacute;n del Sistema Operativo:";
 choices[44]= new Array();
 choices[44][0] = "Una disciplina de planificaci&oacute;n es apropiativa si se le puede retirar la CPU a un proceso mientras est&aacute; en ejecuci&oacute;n.";
 choices[44][1] = "El algoritmo de planificaci&oacute;n SJF (primero el trabajo m&aacute;s corto) es una disciplina apropiativa.";
 choices[44][2] = "Una disciplina de planificaci&oacute;n es no apropiativa si se le puede retirar la CPU a un proceso mientras est&aacute; en ejecuci&oacute;n.";
 choices[44][3] = "El algoritmo de planificaci&oacute;n del tiempo restante m&aacute;s corto (SRT) es una disciplina no apropiativa.";
 answers[44] = 0;
 units[44] = ['56'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 657. AGE A2 2015";
 preguntaids[44] = 657


//  Id pregunta: 356 Año de creación de pregunta: 2016
 questions[45]= "46)  Se&ntilde;ale cual de los siguientes factores no contribuye a la sostenibilidad del sistema de pensiones:";
 choices[45]= new Array();
 choices[45][0] = "El aumento de la esperanza de vida.";
 choices[45][1] = "La mejora del &iacute;ndice de natalidad.";
 choices[45][2] = "La reducci&oacute;n del desempleo.";
 choices[45][3] = "El incremento de la edad de jubilaci&oacute;n.";
 answers[45] = 0;
 units[45] = ['14'];
 blocks[45] = ['A3'];
 comments[45] = "Id Pregunta: 356. Estado del Bienestar";
 preguntaids[45] = 356


//  Id pregunta: 518 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;alar la respuesta FALSA respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[46]= new Array();
 choices[46][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[46][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[46][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[46][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[46] = 1;
 units[46] = ['22'];
 blocks[46] = ['A4'];
 comments[46] = "Id Pregunta: 518. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[46] = 518


//  Id pregunta: 9276 Año de creación de pregunta: 2014
 questions[47]= "48)  Se&ntilde;ale la respuesta correcta. En la programaci&oacute;n orientada a objetos en Java, s&iacute; una clase hereda de otra clase un m&eacute;todo abstracto:";
 choices[47]= new Array();
 choices[47][0] = "Tiene que implementar ese m&eacute;todo, si no es as&iacute;,la clase que hereda deber&aacute; ser definida abstracta.";
 choices[47][1] = "Puede usar el m&eacute;todo de la clase de la que ha heredado.";
 choices[47][2] = "Puede usar el m&eacute;todo de la clase de la que ha heredado siempre que est&eacute; declarado como public.";
 choices[47][3] = "No se puede heredar de una clase que tenga alg&uacute;n m&eacute;todo abstracto.";
 answers[47] = 0;
 units[47] = ['60'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 9276. Examen TIC A2 2013. Promocion interna";
 preguntaids[47] = 9276


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[48]= "49)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[48]= new Array();
 choices[48][0] = "El derecho a la propiedad privada.";
 choices[48][1] = "El derecho de asociaci&oacute;n.";
 choices[48][2] = "El derecho de fundaci&oacute;n.";
 choices[48][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[48] = 1;
 units[48] = ['1'];
 blocks[48] = ['A1'];
 comments[48] = "Id Pregunta: 2. Constituci&oacute;n de 1978";
 preguntaids[48] = 2


//  Id pregunta: 5101 Año de creación de pregunta: 2004
 questions[49]= "50)  Qu&eacute; m&eacute;todo no se emplea para generar contenido din&aacute;mico en el servidor";
 choices[49]= new Array();
 choices[49][0] = "JavaScript";
 choices[49][1] = "CGI";
 choices[49][2] = "JSP";
 choices[49][3] = "ASP";
 answers[49] = 0;
 units[49] = ['62'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 5101. ";
 preguntaids[49] = 5101


//  Id pregunta: 10484 Año de creación de pregunta: 2015
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares NO est&aacute; relacionado directamente con la gesti&oacute;n de contenidos?";
 choices[50]= new Array();
 choices[50][0] = "CIFS";
 choices[50][1] = "CMIS";
 choices[50][2] = "JCR 170";
 choices[50][3] = "Todos lo est&aacute;n";
 answers[50] = 3;
 units[50] = ['99'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 10484. ";
 preguntaids[50] = 10484


//  Id pregunta: 4585 Año de creación de pregunta: 2009
 questions[51]= "52)  En GPRS, es razonable facturar:";
 choices[51]= new Array();
 choices[51][0] = "por tiempo de conexi&oacute;n";
 choices[51][1] = "por n&uacute;mero de conexiones";
 choices[51][2] = "por portadoras en uso";
 choices[51][3] = "por volumen y calidad de servicio";
 answers[51] = 3;
 units[51] = ['117'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 4585. ";
 preguntaids[51] = 4585


//  Id pregunta: 6197 Año de creación de pregunta: 2003
 questions[52]= "53)  &iquest;Cu&aacute;l es la longitud equivalente a una clave RSA de 1024 bits si utiliz&aacute;ramos un algoritmo de clave sim&eacute;trica?";
 choices[52]= new Array();
 choices[52][0] = "132";
 choices[52][1] = "80";
 choices[52][2] = "64";
 choices[52][3] = "512";
 answers[52] = 1;
 units[52] = ['119'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 6197. Examen TIC A Castilla La Mancha 2007";
 preguntaids[52] = 6197


//  Id pregunta: 6276 Año de creación de pregunta: 2003
 questions[53]= "54)  El Marco Europeo de Interoperabilidad 2.0 se construye sobre la base de 12 principios. Indicar cu&aacute;l de los siguientes no es uno de ellos:";
 choices[53]= new Array();
 choices[53][0] = "Multiling&uuml;ismo";
 choices[53][1] = "Seguridad y privacidad";
 choices[53][2] = "Subsidiariedad y proporcionalidad";
 choices[53][3] = "Cooperaci&oacute;n intergubernamental";
 answers[53] = 3;
 units[53] = ['19'];
 blocks[53] = ['A4'];
 comments[53] = "Id Pregunta: 6276. ";
 preguntaids[53] = 6276


//  Id pregunta: 2462 Año de creación de pregunta: 2002
 questions[54]= "55)  Seg&uacute;n el R.D. 209/2003, una de las siguientes afirmaciones es err&oacute;nea:";
 choices[54]= new Array();
 choices[54][0] = "la utilizaci&oacute;n de una direcci&oacute;n electr&oacute;nica &uacute;nica debe ser expresamente notificada por el ciudadano interesado";
 choices[54][1] = "la direcci&oacute;n electr&oacute;nica &uacute;nica debe cumplir los requisitos de poseer identificadores de usuario y claves de acceso, y contener mecanismos de autenticaci&oacute;n y cifrado";
 choices[54][2] = "la direcci&oacute;n electr&oacute;nica &uacute;nica tendr&aacute; una vigencia de 5 a&ntilde;os";
 choices[54][3] = "los certificados anteriores emitidos por la AEAT y la TGSS deben ser sustituidos a partir de la entrada en vigor del R.D.";
 answers[54] = 2;
 units[54] = ['19'];
 blocks[54] = ['A4'];
 comments[54] = "Id Pregunta: 2462. ";
 preguntaids[54] = 2462


//  Id pregunta: 8806 Año de creación de pregunta: 2013
 questions[55]= "56)  &iquest;Qu&eacute; tecnolog&iacute;a permite la multiplexaci&oacute;n de mayor n&uacute;mero de longitudes de onda por una &uacute;nica fibra &oacute;ptica?";
 choices[55]= new Array();
 choices[55][0] = "CWDM";
 choices[55][1] = "SDH";
 choices[55][2] = "WDM";
 choices[55][3] = "DWDM";
 answers[55] = 3;
 units[55] = ['106'];
 blocks[55] = ['B4'];
 comments[55] = "Id Pregunta: 8806. Escala de Gesti&oacute;n de Sistemas de Sistemas de Informaci&oacute;n de la Xunta de Galicia. Acceso Libre 2011.";
 preguntaids[55] = 8806


//  Id pregunta: 10909 Año de creación de pregunta: 2015
 questions[56]= "57)  &iquest;Qu&eacute; metodo de acceso es utilizado para establecer conexiones remotas de linea de comandos, manteniendo el ID de usuario, la contrase&ntilde;a y los contenidos de la sesi&oacute;n de manera privada?";
 choices[56]= new Array();
 choices[56][0] = "Telnet";
 choices[56][1] = "Consola";
 choices[56][2] = "Puerto auxiliar";
 choices[56][3] = "SSH";
 answers[56] = 3;
 units[56] = ['119'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 10909. ";
 preguntaids[56] = 10909


//  Id pregunta: 9218 Año de creación de pregunta: 2014
 questions[57]= "58)  De acuerdo con lo establecido en el RD 3/2010 de 8 de enero por el que se regula el Esquema Nacional de Seguridad,";
 choices[57]= new Array();
 choices[57][0] = "todos los sistemas de informaci&oacute;n ser&aacute;n objeto de una auditor&iacute;a regular ordinaria con car&aacute;cter anual";
 choices[57][1] = "los sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica no precisan ser auditados";
 choices[57][2] = "la auditor&iacute;a de los sistemas de categor&iacute;a media puede ser sustituida por una autoevaluaci&oacute;n realizada por el mismo personal que administra el sistema";
 choices[57][3] = "no es necesario que los informes de autoevaluaci&oacute;n sean conocidos por el responsable de seguridad competente. Basta con que los conozca el responsable del sistema.";
 answers[57] = 1;
 units[57] = ['46'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 9218. Examen TIC A1 2013";
 preguntaids[57] = 9218


//  Id pregunta: 9399 Año de creación de pregunta: 2014
 questions[58]= "59)  Los t&eacute;rminos scatternet y piconet est&aacute;n relacionados con la tecnolog&iacute;a:";
 choices[58]= new Array();
 choices[58][0] = "RDSI";
 choices[58][1] = "Bluetooth";
 choices[58][2] = "DECT";
 choices[58][3] = "Wimax";
 answers[58] = 1;
 units[58] = ['107'];
 blocks[58] = ['B4'];
 comments[58] = "Id Pregunta: 9399. Examen TIC A2  2013";
 preguntaids[58] = 9399


//  Id pregunta: 4494 Año de creación de pregunta: 2002
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes afirmaciones referidas al modelo de referencia de interconexi&oacute;n de sistemas abiertos de ISO es err&oacute;nea?:";
 choices[59]= new Array();
 choices[59][0] = "El nivel de presentaci&oacute;n da servicios al nivel de aplicaci&oacute;n y solicita revisi&oacute;n a trav&eacute;s de primitivas al nivel de sesi&oacute;n";
 choices[59][1] = "El bloque de transporte est&aacute; formado por los niveles f&iacute;sico, enlace, red y transporte";
 choices[59][2] = "El protocolo de nivel de presentaci&oacute;n regula el di&aacute;logo entre dos entes de nivel 5";
 choices[59][3] = "El nivel de red da servicio al nivel de transporte y solicita servicios del nivel enlace";
 answers[59] = 2;
 units[59] = ['105'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 4494. Los tres niveles inferiores (f&iacute;sico, de enlace, de red) constituyen el bloque de transmisi&oacute;n. (depenndientes de la red de conmutaci&oacute;n) y los tres superiores est&aacute;n orientados a la aplicaci&oacute;n (funciones de comunicaci&oacute;n)";
 preguntaids[59] = 4494


//  Id pregunta: 9859 Año de creación de pregunta: 2015
 questions[60]= "61)  Indique el orden correcto, de mayor a menor, en velocidad de transmisi&oacute;n:";
 choices[60]= new Array();
 choices[60][0] = "LTE, UMTS y GPRS.";
 choices[60][1] = "W-CDMA, WiMAX y EDGE.EGDE, UMTS y LTE.";
 choices[60][2] = "HSPA, LTE y GPRS.";
 choices[60][3] = "WiMAX, GPRS y LTE.";
 answers[60] = 0;
 units[60] = ['117', '106'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 9859. ";
 preguntaids[60] = 9859


//  Id pregunta: 10605 Año de creación de pregunta: 2015
 questions[61]= "62)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de las siguientes NO es una facultad del gobierno para la administraci&oacute;n del dominio p&uacute;blico radiol&eacute;ctrico?";
 choices[61]= new Array();
 choices[61][0] = "La adecuada utilizaci&oacute;n del espectro radioel&eacute;ctrico mediante el empleo de equipos y aparatos.";
 choices[61][1] = "El procedimiento de determinaci&oacute;n, control e inspecci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica tolerable y que no supongan un peligro para la salud p&uacute;blica.";
 choices[61][2] = "La determinaci&oacute;n, potestad sancionadora e inspecci&oacute;n de niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica.";
 choices[61][3] = "El procedimiento para la elaboraci&oacute;n de los planes de utilizaci&oacute;n del espectro radioel&eacute;ctrico.";
 answers[61] = 2;
 units[61] = ['121'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 10605. Articulo 61";
 preguntaids[61] = 10605


//  Id pregunta: 9892 Año de creación de pregunta: 2015
 questions[62]= "63)  Seg&uacute;n el Art&iacute;culo 14 de la Ley 39/2015. Para las personas f&iacute;sicas, &iquest;qui&eacute;n elige si la relaci&oacute;n se va a establecer a trav&eacute;s de medios electr&oacute;nicos?";
 choices[62]= new Array();
 choices[62][0] = "La Administraci&oacute;n.";
 choices[62][1] = "El ciudadano en todo caso.";
 choices[62][2] = "Habitualmente el ciudadano.";
 choices[62][3] = "Siempre se realiza a trav&eacute;s de medios electr&oacute;nicos.";
 answers[62] = 2;
 units[62] = ['7', '19'];
 blocks[62] = ['A2', 'A4'];
 comments[62] = "Id Pregunta: 9892. ";
 preguntaids[62] = 9892


//  Id pregunta: 8025 Año de creación de pregunta: 2011
 questions[63]= "64)  La tecnolog&iacute;a de transmisi&oacute;n 100Base-FX:";
 choices[63]= new Array();
 choices[63][0] = "Utiliza cable UTP de categor&iacute;a 5 o superior.";
 choices[63][1] = "Tiene una longitud m&aacute;xima de 2 kil&oacute;metros para transmisiones half-duplex y 400 metros para transmisiones full-duplex.";
 choices[63][2] = "Es compatible con la tecnolog&iacute;a 10Base&bull;FL.";
 choices[63][3] = "Puede usar conectores MIC.";
 answers[63] = 3;
 units[63] = ['104'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 8025. Examen TIC A2 2010";
 preguntaids[63] = 8025


//  Id pregunta: 3011 Año de creación de pregunta: 2002
 questions[64]= "65)  Referente al lenguaje m&aacute;quina de un ordenador, se puede afirmar que:";
 choices[64]= new Array();
 choices[64][0] = "El lenguaje m&aacute;quina es independiente de la CPU del ordenador";
 choices[64][1] = "El lenguaje m&aacute;quina, los datos se proporcionan mediante las direcciones de memoria donde &eacute;stos se encuentran";
 choices[64][2] = "Las instrucciones en lenguaje m&aacute;quina no tienen generalmente formato r&iacute;gido en cuanto a la posici&oacute;n de los distintos campos que las configuran";
 choices[64][3] = "El lenguaje m&aacute;quina era algo propio de los ordenadores de &eacute;pocas pasadas, hoy d&iacute;a la mayoria ejecuta directamente c&oacute;digo C";
 answers[64] = 1;
 units[64] = ['52'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 3011. ";
 preguntaids[64] = 3011


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[65]= "66)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[65]= new Array();
 choices[65][0] = "Los cr&eacute;ditos";
 choices[65][1] = "Las partidas presupuestarias";
 choices[65][2] = "Los derechos";
 choices[65][3] = "Las obligaciones";
 answers[65] = 3;
 units[65] = ['11'];
 blocks[65] = ['A2'];
 comments[65] = "Id Pregunta: 270. Presupuestos generales";
 preguntaids[65] = 270


//  Id pregunta: 7750 Año de creación de pregunta: 2010
 questions[66]= "67)  &iquest;Cu&aacute;l de las opciones siguientes NO se corresponde con servicios ofrecidos por una PKI (Public Key Infrastructures)?";
 choices[66]= new Array();
 choices[66][0] = "Registro de claves p&uacute;blicas: emisi&oacute;n de un nuevo certificado para una clave p&uacute;blica.";
 choices[66][1] = "Revocaci&oacute;n de certificados: cancelaci&oacute;n de un certificado previamente remitido.";
 choices[66][2] = "Evaluaci&oacute;n de la confianza: determinaci&oacute;n sobre si un certificado es v&aacute;lido y qu&eacute; operaciones est&aacute;n permitidas para dicho certificado.";
 choices[66][3] = "Realizaci&oacute;n de tr&aacute;mites de forma segura con la Administraci&oacute;n P&uacute;blica a trav&eacute;s de Internet.";
 answers[66] = 3;
 units[66] = ['78'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 7750. ";
 preguntaids[66] = 7750


//  Id pregunta: 7119 Año de creación de pregunta: 2010
 questions[67]= "68)  En relaci&oacute;n a las sedes electr&oacute;nicas derivadas, o subsedes, se&ntilde;ale la respuesta incorrecta:";
 choices[67]= new Array();
 choices[67][0] = "Las sedes electr&oacute;nicas derivadas, o subsedes, deber&aacute;n resultar accesibles desde la direcci&oacute;n electr&oacute;nica de la sede principal.";
 choices[67][1] = "Las sedes electr&oacute;nicas derivadas, o subsedes podran ser accesibles mediante acceso electr&oacute;nico directo.";
 choices[67][2] = "Su &aacute;mbito de aplicaci&oacute;n comprender&aacute; &oacute;rgano u &oacute;rganos con rango, al menos, de direcci&oacute;n general.";
 choices[67][3] = "Las sedes electr&oacute;nicas derivadas deber&aacute;n cumplir los mismos requisitos que las sedes electr&oacute;nicas principales, salvo en lo relativo a la publicaci&oacute;n de la orden o resoluci&oacute;n por la que se crea, que se realizar&aacute; a trav&eacute;s de la sede de la que dependan.";
 answers[67] = 2;
 units[67] = ['7'];
 blocks[67] = ['A2'];
 comments[67] = "Id Pregunta: 7119. Art&iacute;culo 4 RD 1671/2009";
 preguntaids[67] = 7119


//  Id pregunta: 5772 Año de creación de pregunta: 2007
 questions[68]= "69)  Que comando se utiliza para convertir un sistema de ficheros ext2 a ext3 en las ultimas versiones de Suse Linux?";
 choices[68]= new Array();
 choices[68][0] = "tune2fs -c ldev/hdbX";
 choices[68][1] = "tune2fs -j /dev/hdbX";
 choices[68][2] = "make2fs /devlhdbX";
 choices[68][3] = "mount -t ext3 /dev/hdbX /mountpoint";
 answers[68] = 1;
 units[68] = ['57'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 5772. ";
 preguntaids[68] = 5772


//  Id pregunta: 8721 Año de creación de pregunta: 2013
 questions[69]= "70)  Indique la frase correcta sobre la gesti&oacute;n de procesos en los sistemas UNIX:";
 choices[69]= new Array();
 choices[69][0] = "El estado de un proceso en un sistema Unix se codifica usando 3 bits";
 choices[69][1] = "El control de procesos en Unix permite la comunicaci&oacute;n s&iacute;ncrona entre procesos mediante paso de mensajes";
 choices[69][2] = "Los procesos &ldquo;daemon&rdquo; son procesos interactivos del usuario root.";
 choices[69][3] = "Los sistemas Unix permiten variar la prioridad de un proceso en tiempo de ejecuci&oacute;n pero no los permisos con que se ejecuta";
 answers[69] = 1;
 units[69] = ['57'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 8721. Examen TICA2-2011";
 preguntaids[69] = 8721


//  Id pregunta: 10321 Año de creación de pregunta: 2015
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes no es un organismo europeo de normalizaci&oacute;n?";
 choices[70]= new Array();
 choices[70][0] = "CEN";
 choices[70][1] = "UNE";
 choices[70][2] = "CENELEC";
 choices[70][3] = "ETSI";
 answers[70] = 1;
 units[70] = ['48'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 10321. ";
 preguntaids[70] = 10321


//  Id pregunta: 2100 Año de creación de pregunta: 2002
 questions[71]= "72)  El m&eacute;todo Promethee:";
 choices[71]= new Array();
 choices[71][0] = "Ignora la cuant&iacute;a de la diferencia, s&oacute;lo se&ntilde;ala si existe o no";
 choices[71][1] = "Su concepto central es de comparaci&oacute;n ternaria de alternativas";
 choices[71][2] = "Exige poca informaci&oacute;n por parte del decisor: evaluaciones ordinales y pesos cardinales";
 choices[71][3] = "Generaliza el m&eacute;todo de ponderaci&oacute;n lineal incorporando al posibilidad de valorar el riesgo";
 answers[71] = 0;
 units[71] = ['38'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 2100. ";
 preguntaids[71] = 2100


//  Id pregunta: 1312 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n M&eacute;trica v3, los flujos que interconectan actividades en la t&eacute;cnica SADT (Structured Analysis and Design Technique) se pueden clasificar en 4 tipos, se&ntilde;ale cu&aacute;l de los siguientes flujos NO es correcto:";
 choices[72]= new Array();
 choices[72][0] = "Control.";
 choices[72][1] = "Transacci&oacute;n.";
 choices[72][2] = "Mecanismo.";
 choices[72][3] = "Entrada.";
 answers[72] = 1;
 units[72] = ['91'];
 blocks[72] = ['B3'];
 comments[72] = "Id Pregunta: 1312. ";
 preguntaids[72] = 1312


//  Id pregunta: 2271 Año de creación de pregunta: 2002
 questions[73]= "74)  Quienes se dediquen a la prestaci&oacute;n de servicios de informaci&oacute;n sobre solvencia patrimonial y el cr&eacute;dito:";
 choices[73]= new Array();
 choices[73][0] = "Podr&aacute;n tratar datos de car&aacute;cter personal relativos al cumplimiento o inclumplimiento de obligaciones dinerarias facilitados por el acreedor o por quien act&uacute;e por su cuenta o inter&eacute;s";
 choices[73][1] = "Exclusivamente podr&aacute;n tratar datos de car&aacute;cter personal obtenidos de los registros y las fuentes accesibles al p&uacute;blico";
 choices[73][2] = "Exclusivamente podr&aacute;n tratar datos de car&aacute;cter personal procedentes de informaciones facilitadas por el interesado o con su consentimiento";
 choices[73][3] = "No podr&aacute;n registrar o ceder datos de car&aacute;cter personal que sean determinantes para enjuiciar la solvencia econ&oacute;mica de los interesados";
 answers[73] = 0;
 units[73] = ['35'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 2271. ";
 preguntaids[73] = 2271


//  Id pregunta: 5125 Año de creación de pregunta: 2003
 questions[74]= "75)  En una red VoIP el elemento llamado &quot;SoftSwitch&quot; es el encargado de:";
 choices[74]= new Array();
 choices[74][0] = "Permitir la comunicaci&oacute;n entre la Red VoIP y las Redes tradicionales de Conmutaci&oacute;n de Circuitos";
 choices[74][1] = "Proporcionar una interfaz hacia la Red VoIP y una o mas interfaces tradicionales de voz hacia el cliente";
 choices[74][2] = "Recibir la se&ntilde;alizaci&oacute;n de las llamadas y de enrutarlas hacia su destino";
 choices[74][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[74] = 2;
 units[74] = ['107'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 5125. ";
 preguntaids[74] = 5125


