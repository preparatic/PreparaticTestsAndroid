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
//  Id pregunta: 5177 Año de creación de pregunta: 2003
 questions[0]= "1)  La especificaci&oacute;n H.323:";
 choices[0]= new Array();
 choices[0][0] = "Ha sido creada por la ISO, y define un conjunto de protocolos para transmitir voz, video y datos sobre IP";
 choices[0][1] = "Emplea a su vez otras especificaciones, como H.225 y H.245";
 choices[0][2] = "Hace uso del protocolo RTP para establecer las llamadas sobre la red IP";
 choices[0][3] = "Las respuestas b) y c) son correctas";
 answers[0] = 1;
 units[0] = ['108'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 5177. ";
 preguntaids[0] = 5177


//  Id pregunta: 280 Año de creación de pregunta: 2016
 questions[1]= "2)  De acuerdo con lo establecido en la Ley General Presupuestaria, durante el ejercicio presupuestario no es posible modificar la cuant&iacute;a y/o finalidad de los cr&eacute;ditos contenidos en los presupuestos de gastos mediante:";
 choices[1]= new Array();
 choices[1][0] = "Transferencias de cr&eacute;dito.";
 choices[1][1] = "Incorporaciones de cr&eacute;dito.";
 choices[1][2] = "Imputaciones de cr&eacute;dito.";
 choices[1][3] = "Ampliaciones de cr&eacute;dito.";
 answers[1] = 2;
 units[1] = ['11'];
 blocks[1] = ['A2'];
 comments[1] = "Id Pregunta: 280. Presupuestos generales";
 preguntaids[1] = 280


//  Id pregunta: 5434 Año de creación de pregunta: 2007
 questions[2]= "3)  Indique cu&aacute;l de los siguientes algoritmos criptogr&aacute;ficos se basa en el logaritmo discreto el&iacute;ptico";
 choices[2]= new Array();
 choices[2][0] = "RSA";
 choices[2][1] = "RW";
 choices[2][2] = "Diffie-Hellman";
 choices[2][3] = "DSAE";
 answers[2] = 3;
 units[2] = ['73'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 5434. ";
 preguntaids[2] = 5434


//  Id pregunta: 6639 Año de creación de pregunta: 2009
 questions[3]= "4)  En el framework .NET, &iquest;qu&eacute; c&oacute;digo se genera como salida del compilador just in time?";
 choices[3]= new Array();
 choices[3][0] = "Bytecode";
 choices[3][1] = "IL (intemediate language)";
 choices[3][2] = "C&oacute;digo m&aacute;quina";
 choices[3][3] = "C&oacute;digo ensamblador";
 answers[3] = 2;
 units[3] = ['63'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 6639. MAP 2008 A2";
 preguntaids[3] = 6639


//  Id pregunta: 5274 Año de creación de pregunta: 2006
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes puede ser una alternativa a EJB?";
 choices[4]= new Array();
 choices[4][0] = "Hibernate";
 choices[4][1] = "JDBC";
 choices[4][2] = "Ninguna de las anteriores";
 choices[4][3] = "la opci&oacute;n a) y b)";
 answers[4] = 3;
 units[4] = ['116'];
 blocks[4] = ['B4'];
 comments[4] = "Id Pregunta: 5274. ";
 preguntaids[4] = 5274


//  Id pregunta: 236 Año de creación de pregunta: 2016
 questions[5]= "6)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[5]= new Array();
 choices[5][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[5][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[5][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[5][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[5] = 1;
 units[5] = ['7'];
 blocks[5] = ['A2'];
 comments[5] = "Id Pregunta: 236. Ley 39/2015";
 preguntaids[5] = 236


//  Id pregunta: 340 Año de creación de pregunta: 2016
 questions[6]= "7)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[6]= new Array();
 choices[6][0] = "Los ocupados y los parados activos";
 choices[6][1] = "S&oacute;lo los ocupados";
 choices[6][2] = "Los ocupados y los inactivos";
 choices[6][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[6] = 0;
 units[6] = ['12'];
 blocks[6] = ['A3'];
 comments[6] = "Id Pregunta: 340. Modelo econ&oacute;mico";
 preguntaids[6] = 340


//  Id pregunta: 1066 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes sistemas proporciona la funcionalidad de Single Sign-On basada en tickets?";
 choices[7]= new Array();
 choices[7][0] = "KERBEROS.";
 choices[7][1] = "STORK.";
 choices[7][2] = "SAML.";
 choices[7][3] = "OPENID.";
 answers[7] = 0;
 units[7] = ['120'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 1066. ";
 preguntaids[7] = 1066


//  Id pregunta: 2478 Año de creación de pregunta: 2004
 questions[8]= "9)  A la hora de evaluar el comportamiento de un sistema inform&aacute;tico, el &quot;throughput&quot; se puede definir como:";
 choices[8]= new Array();
 choices[8][0] = "El n&uacute;mero de CPUs necesarias para asegurar una velocidad de procesamiento determinada";
 choices[8][1] = "El n&uacute;mero de recursos inform&aacute;ticos disponibles en el sistema";
 choices[8][2] = "El cociente entre la velocidad de transmisi&oacute;n de la red y la velocidad media de las CPUs del sistema";
 choices[8][3] = "La cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado";
 answers[8] = 3;
 units[8] = ['53'];
 blocks[8] = ['B2'];
 comments[8] = "Id Pregunta: 2478. ";
 preguntaids[8] = 2478


//  Id pregunta: 7669 Año de creación de pregunta: 2010
 questions[9]= "10)  En orientaci&oacute;n a objetos, el t&eacute;rmino utilizado para expresar que los datos de un objeto solamente pueden ser manipulados por medio de mensajes y m&eacute;todos predefinidos es:";
 choices[9]= new Array();
 choices[9][0] = "Polimorfismo.";
 choices[9][1] = "Herencia.";
 choices[9][2] = "Reusabilidad.";
 choices[9][3] = "Encapsulaci&oacute;n.";
 answers[9] = 3;
 units[9] = ['85'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 7669. Map 2007";
 preguntaids[9] = 7669


//  Id pregunta: 3014 Año de creación de pregunta: 2002
 questions[10]= "11)  Respecto a la compatibilidad entre Windows y Linux:";
 choices[10]= new Array();
 choices[10][0] = "Windows no puede ejecutarse bajo Linux";
 choices[10][1] = "Linux no puede ejecutarse bajo Windows";
 choices[10][2] = "Ambos pueden ejecutarse simult&aacute;neamente de forma nativa";
 choices[10][3] = "Existen programas que permiten la ejecuci&oacute;n de cada uno de estos sistemas operativos como si fuera un programa embebido en el otro sistema operativo";
 answers[10] = 3;
 units[10] = ['57', '49', '56'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 3014. ";
 preguntaids[10] = 3014


//  Id pregunta: 167 Año de creación de pregunta: 2016
 questions[11]= "12)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[11]= new Array();
 choices[11][0] = "18 miembros.";
 choices[11][1] = "Ninguna es correcta.";
 choices[11][2] = "22 miembros.";
 choices[11][3] = "21 miembros.";
 answers[11] = 1;
 units[11] = ['5'];
 blocks[11] = ['A1'];
 comments[11] = "Id Pregunta: 167. Uni&oacute;n Europea";
 preguntaids[11] = 167


//  Id pregunta: 10625 Año de creación de pregunta: 2015
 questions[12]= "13)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de los siguientes no es un derecho del usuario de telecomunicaciones?:";
 choices[12]= new Array();
 choices[12][0] = "A oponerse a recibir llamadas comerciales no deseadas, en todo caso.";
 choices[12][1] = "A que no se traten sus datos de localizaci&oacute;n, en todo caso.";
 choices[12][2] = "A no figurar en las gu&iacute;as de abonados, en todo caso.";
 choices[12][3] = "Ninguno es un derecho del usuario.";
 answers[12] = 3;
 units[12] = ['121'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 10625. Articulo 48";
 preguntaids[12] = 10625


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[13]= "14)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[13]= new Array();
 choices[13][0] = "ISO/IEC 25000";
 choices[13][1] = "ISO/IEC 27000";
 choices[13][2] = "ISO 9000";
 choices[13][3] = "ISO 9001";
 answers[13] = 0;
 units[13] = ['93'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 848. AGE A1 2015";
 preguntaids[13] = 848


//  Id pregunta: 431 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[14]= new Array();
 choices[14][0] = "Establecer redes de telecomunicaciones continentales";
 choices[14][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[14][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[14][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[14] = 0;
 units[14] = ['17'];
 blocks[14] = ['A4'];
 comments[14] = "Id Pregunta: 431. Mercado &Uacute;nico Digital";
 preguntaids[14] = 431


//  Id pregunta: 10288 Año de creación de pregunta: 2015
 questions[15]= "16)  &iquest;Cu&aacute;les son las 4 fases de la evoluci&oacute;n de la inversi&oacute;n en sistemas de informaci&oacute;n en el tiempo de acuerdo con el modelo de Gibson y Nolan?";
 choices[15]= new Array();
 choices[15][0] = "Iniciaci&oacute;n, expansi&oacute;n, formalizaci&oacute;n, madurez";
 choices[15][1] = "Iniciaci&oacute;n, control, integraci&oacute;n, madurez";
 choices[15][2] = "Iniciaci&oacute;n, dise&ntilde;o, implementaci&oacute;n, transici&oacute;n";
 choices[15][3] = "Iniciaci&oacute;n, control, administraci&oacute;n, madurez";
 answers[15] = 0;
 units[15] = ['24'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 10288. ";
 preguntaids[15] = 10288


//  Id pregunta: 9455 Año de creación de pregunta: 2014
 questions[16]= "17)  Cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[16]= new Array();
 choices[16][0] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones postales";
 choices[16][1] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones por comparecencia electr&oacute;nica en la sede";
 choices[16][2] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones en la direcci&oacute;n electr&oacute;nica habilitada del ciudadano";
 choices[16][3] = "Los funcionarios habilitados no podr&aacute;n recibir ning&uacute;n tipo de notificaciones que requieran la identificaci&oacute;n y autenticaci&oacute;n del ciudadano";
 answers[16] = 1;
 units[16] = ['7'];
 blocks[16] = ['A2'];
 comments[16] = "Id Pregunta: 9455. Orden HAP/7/2014 En todo caso, los funcionarios habilitados no podr&aacute;n recibir notificaciones que requieran la identificaci&oacute;n y autenticaci&oacute;n del ciudadano, salvo en el caso de las notificaciones por comparecencia electr&oacute;nica en la sede reguladas en el art&iacute;culo 40 del Real Decreto 1671/2009, de 6 de noviembre, y siempre que dicho tr&aacute;mite se haya autorizado expresamente conforme a lo dispuesto en el apartado anterior.";
 preguntaids[16] = 9455


//  Id pregunta: 277 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[17]= new Array();
 choices[17][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[17][1] = "Pasivos financieros y transferencias de capital.";
 choices[17][2] = "Activos financieros y pasivos financieros.";
 choices[17][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[17] = 2;
 units[17] = ['11'];
 blocks[17] = ['A2'];
 comments[17] = "Id Pregunta: 277. Presupuestos generales";
 preguntaids[17] = 277


//  Id pregunta: 8511 Año de creación de pregunta: 2011
 questions[18]= "19)  &iquest;Cu&aacute;l se puede considerar un gestor de contenidos?";
 choices[18]= new Array();
 choices[18][0] = "Microsoft Sharepoint";
 choices[18][1] = "Apache";
 choices[18][2] = "TopLink";
 choices[18][3] = "Microsoft Biztalk";
 answers[18] = 0;
 units[18] = ['99'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 8511. ";
 preguntaids[18] = 8511


//  Id pregunta: 4250 Año de creación de pregunta: 2006
 questions[19]= "20)  La ingenier&iacute;a inversa:";
 choices[19]= new Array();
 choices[19][0] = "Seg&uacute;n el IEEE, es el proceso de analizar un sistema para identificar los componentes y las interrelaciones entre ellos, creando representaciones del sistema en otra forma distinta a la original a un mayor nivel de abstracci&oacute;n";
 choices[19][1] = "Es sin&oacute;nimo de Reingenier&iacute;a";
 choices[19][2] = "Es sin&oacute;nimo de Forward Engineering";
 choices[19][3] = "El IEEE no proporciona una definici&oacute;n de Ingenier&iacute;a Inversa";
 answers[19] = 0;
 units[19] = ['96', '97'];
 blocks[19] = ['B3'];
 comments[19] = "Id Pregunta: 4250. ";
 preguntaids[19] = 4250


//  Id pregunta: 3717 Año de creación de pregunta: 2002
 questions[20]= "21)  &iquest;En qu&eacute; proceso de METRICA V3 se llevar&iacute;a a cabo la construcci&oacute;n de los componentes de migraci&oacute;n y procedimientos de migraci&oacute;n y carga inicial de datos?:";
 choices[20]= new Array();
 choices[20][0] = "CSI";
 choices[20][1] = "DSI";
 choices[20][2] = "IAS";
 choices[20][3] = "DCS";
 answers[20] = 0;
 units[20] = ['91'];
 blocks[20] = ['B3'];
 comments[20] = "Id Pregunta: 3717. ";
 preguntaids[20] = 3717


//  Id pregunta: 7130 Año de creación de pregunta: 2010
 questions[21]= "22)  &iquest;Cu&aacute;l es el plazo m&iacute;nimo para solicitar autorizaci&oacute;n para prestar servicios de la sociedad de la informaci&oacute;n, antes de comenzar a prestar el servicio?";
 choices[21]= new Array();
 choices[21][0] = "15 d&iacute;as";
 choices[21][1] = "1 mes";
 choices[21][2] = "2 meses";
 choices[21][3] = "Ninguna de las anteriores";
 answers[21] = 3;
 units[21] = ['19'];
 blocks[21] = ['A4'];
 comments[21] = "Id Pregunta: 7130. Ley 34/2002, art&iacute;culo 6";
 preguntaids[21] = 7130


//  Id pregunta: 10585 Año de creación de pregunta: 2015
 questions[22]= "23)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes definiciones es el mejor ejemplo de una soluci&oacute;n temporal (workaround)?";
 choices[22]= new Array();
 choices[22][0] = "Un t&eacute;cnico instala un script para redirigir la impresi&oacute;n a una impresora alternativa hasta que se pueda aplicar una soluci&oacute;n permanente";
 choices[22][1] = "Un t&eacute;cnico intenta resolver una incidencia de diferentes maneras. Una de ellas funciona aunque no sabe cu&aacute;l.";
 choices[22][2] = "Despu&eacute;s de notificar la incidencia al centro de servicio, el usuario se dedica a otras tareas mientras se identifica y resuelve el problema";
 choices[22][3] = "Un dispositivo funciona de forma intermitente, permitiendo al usuario trabajar con un rendimiento degradado mientras el t&eacute;cnico diagnostica la incidencia";
 answers[22] = 0;
 units[22] = ['101'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 10585. ";
 preguntaids[22] = 10585


//  Id pregunta: 7769 Año de creación de pregunta: 2010
 questions[23]= "24)  En relaci&oacute;n con la red TESTA, &iquest;cu&aacute;l de las siguientes afirmaciones es FALSA?";
 choices[23]= new Array();
 choices[23][0] = "Es una red que interconecta las redes Administrativas de los estados miembros y de las instituciones y agencias europeas.";
 choices[23][1] = "Es un instrumento vertebrador e integrador que ofrece a las Administraciones europeas una plataforma de interconexi&oacute;n de telecomunicaciones.";
 choices[23][2] = "La pol&iacute;tica de direccionamiento IP de TESTA usa unos rangos de direcciones IP asignados por RIPE (Autoridad de Registro IP para Europa), encaminables por Internet.";
 choices[23][3] = "Se enmarca en el grupo de medidas horizontales que responden a los objetivos del programa IDABC.";
 answers[23] = 2;
 units[23] = ['114'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 7769. ";
 preguntaids[23] = 7769


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[24]= "25)  Las decisiones de la Comisi&oacute;n se adoptar&aacute;n por:";
 choices[24]= new Array();
 choices[24][0] = "Unanimidad y mayor&iacute;a simple.";
 choices[24][1] = "Unanimidad.";
 choices[24][2] = "Mayor&iacute;a cualificada.";
 choices[24][3] = "Mayor&iacute;a simple.";
 answers[24] = 3;
 units[24] = ['5'];
 blocks[24] = ['A1'];
 comments[24] = "Id Pregunta: 187. Uni&oacute;n Europea";
 preguntaids[24] = 187


//  Id pregunta: 3027 Año de creación de pregunta: 2002
 questions[25]= "26)  Se dice que el conocimiento, independientemente del paradigma de representaci&oacute;n utilizado, tiene una doble componente:";
 choices[25]= new Array();
 choices[25][0] = "Los hechos constatables y los mecanismos de inferencia";
 choices[25][1] = "Los procedimientos y los mecanismos de deducci&oacute;n";
 choices[25][2] = "Los objetos y las relaciones entre los mismos";
 choices[25][3] = "El componente simb&oacute;lico y el componente procedimental";
 answers[25] = 0;
 units[25] = ['68'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 3027. ";
 preguntaids[25] = 3027


//  Id pregunta: 8495 Año de creación de pregunta: 2011
 questions[26]= "27)  Una de las causas del &quot;aliasing&quot; es consecuencia de:";
 choices[26]= new Array();
 choices[26][0] = "Muestrear la se&ntilde;al a una frecuencia mayor que la de Nyquist.";
 choices[26][1] = "Muestrear la se&ntilde;al a la frecuencia de Nyquist.";
 choices[26][2] = "Muestrear la se&ntilde;al a una frecuencia inferior a la de Nyquist.";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = 2;
 units[26] = ['102'];
 blocks[26] = ['B4'];
 comments[26] = "Id Pregunta: 8495. Teleco Ayto. Madrid 2010";
 preguntaids[26] = 8495


//  Id pregunta: 5644 Año de creación de pregunta: 2007
 questions[27]= "28)  Si consideramos el framework .Net &iquest;Que entender&iacute;amos por CTS (Common Type System, o Sistema de Tipos Com&uacute;n)?";
 choices[27]= new Array();
 choices[27][0] = "Es un est&aacute;ndar que establece como se representan los tipos de datos en memoria, independientemente del lenguaje que los defina.";
 choices[27][1] = "Es un sistema tipificado de Software";
 choices[27][2] = "Es un sistema com&uacute;n de tipos que permite interoperar entre distintas plataformas.";
 choices[27][3] = "Ninguna de las anteriores";
 answers[27] = 0;
 units[27] = ['63'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 5644. ";
 preguntaids[27] = 5644


//  Id pregunta: 8975 Año de creación de pregunta: 2013
 questions[28]= "29)  Las comunicaciones comerciales no solicitadas realizadas a trav&eacute;s de correo electr&oacute;nico o medios de comunicaci&oacute;n electr&oacute;nica equivalentes:";
 choices[28]= new Array();
 choices[28][0] = "Deben incluir al comienzo del mensaje la palabra &laquo;publicidad&raquo;.";
 choices[28][1] = "Deben indicar la persona f&iacute;sica o jur&iacute;dica en nombre de la cual se realizan.";
 choices[28][2] = "Deben incluir claramente las condiciones comerciales o promocionales.";
 choices[28][3] = "Est&aacute;n prohibidas.";
 answers[28] = 3;
 units[28] = ['19'];
 blocks[28] = ['A4'];
 comments[28] = "Id Pregunta: 8975. Examen TIC A1 2011";
 preguntaids[28] = 8975


//  Id pregunta: 6006 Año de creación de pregunta: 2003
 questions[29]= "30)  Se&ntilde;ale cu&aacute;l de los siguientes t&eacute;rminos NO constituye un estandar de interface de acceso a bases de datos:";
 choices[29]= new Array();
 choices[29][0] = "ODBC (Open Database Connectivity).";
 choices[29][1] = "RDO (Remote Data Objects.";
 choices[29][2] = "DMBS (DataBase Management System).";
 choices[29][3] = "OLE DB (Object Linking and Embedding for Databases).";
 answers[29] = 2;
 units[29] = ['61'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 6006. TIC B 2007";
 preguntaids[29] = 6006


//  Id pregunta: 3060 Año de creación de pregunta: 2002
 questions[30]= "31)  Si se comparan los diferentes sistemas de almacenamiento secundario:";
 choices[30]= new Array();
 choices[30][0] = "La velocidad de transferencia es del mismo orden en una unidad de cinta DAT que en una unidad de disco magn&eacute;tico";
 choices[30][1] = "La capacidad de almacenamiento de una cinta de cartucho normal de 0,25&quot; es similar a la de un CD-ROM de 5&quot; 1/4";
 choices[30][2] = "Los discos WORM y los magneto-opticos ofrecen la posibilidad de borrar y reescribir informaci&oacute;n";
 choices[30][3] = "En las unidades de cinta no se puede intercalar informaci&oacute;n adicional, por el contrario, para hacerlo habr&iacute;a que regrabar todo el resto de la cinta";
 answers[30] = 3;
 units[30] = ['53'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 3060. ";
 preguntaids[30] = 3060


//  Id pregunta: 6363 Año de creación de pregunta: 2003
 questions[31]= "32)  Seg&uacute;n la ley de propiedad intelectual (RDL 1/96 de 22 de abril) &iquest;qu&eacute; es una obra compuesta?";
 choices[31]= new Array();
 choices[31][0] = "Es el resultado de la colaboraci&oacute;n entre varios autores";
 choices[31][1] = "Una obra en la que, por su complejidad, no es posible establecer un autor";
 choices[31][2] = "Es una obra nueva que incorpora otra existente sin colaboraci&oacute;n del autor de &eacute;sta";
 choices[31][3] = "La citada ley no hace referencia a tal concepto";
 answers[31] = 2;
 units[31] = ['36'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 6363. Examen 2006 JCYL";
 preguntaids[31] = 6363


//  Id pregunta: 5442 Año de creación de pregunta: 2007
 questions[32]= "33)  El &ldquo;paradigma imperativo&rdquo; en un lenguaje de programaci&oacute;n se basa en:";
 choices[32]= new Array();
 choices[32][0] = "La m&aacute;quina de Turing.";
 choices[32][1] = "El modelo de computador de Von Neumann.";
 choices[32][2] = "El Teorema de la Indecibilidad de G&ouml;del.";
 choices[32][3] = "La m&aacute;quina de Babbage.";
 answers[32] = 1;
 units[32] = ['51'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 5442. ";
 preguntaids[32] = 5442


//  Id pregunta: 7621 Año de creación de pregunta: 2010
 questions[33]= "34)  La metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3 contempla diferencias con relaci&oacute;n a los productos resultantes del proceso &laquo;An&aacute;lisis del sistema de informaci&oacute;n (ASI)&raquo; seg&uacute;n sea Orientado a Objetos o Estructurado. Bajo esta premisa, &iquest;cu&aacute;l de las siguientes afirmaciones NO es cierta?";
 choices[33]= new Array();
 choices[33][0] = "El Cat&aacute;logo de Requisitos y el Glosario de T&eacute;rminos son productos comunes requeridos.";
 choices[33][1] = "Entre los productos se&ntilde;alados para el an&aacute;lisis estructurado est&aacute; el Modelo de Procesos.";
 choices[33][2] = "Se especifica el Modelo de Negocio para el an&aacute;lisis orientado a objetos.";
 choices[33][3] = "La especificaci&oacute;n de la Interfaz de Usuario s&oacute;lo se solicita para el an&aacute;lisis orientado a objetos.";
 answers[33] = 3;
 units[33] = ['91'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 7621. Map 2006";
 preguntaids[33] = 7621


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[34]= "35)  Respecto a los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado, NO se incluyen entre las prestaciones que pueden ser objeto de estos contratos:";
 choices[34]= new Array();
 choices[34][0] = "La construcci&oacute;n, instalaci&oacute;n o transformaci&oacute;n de obras, equipos, sistemas, y productos o bienes complejos, as&iacute; como su mantenimiento, actualizaci&oacute;n o renovaci&oacute;n, su explotaci&oacute;n o su gesti&oacute;n.";
 choices[34][1] = "La gesti&oacute;n integral del mantenimiento de instalaciones para la investigaci&oacute;n.";
 choices[34][2] = "La fabricaci&oacute;n de bienes y la prestaci&oacute;n de servicios que incorporen tecnolog&iacute;a espec&iacute;ficamente desarrollada con el prop&oacute;sito de aportar soluciones m&aacute;s avanzadas y econ&oacute;micamente m&aacute;s ventajosas que las existentes en el mercado.";
 choices[34][3] = "Todas las anteriores pueden ser objeto de ese tipo de contratos.";
 answers[34] = 1;
 units[34] = ['11'];
 blocks[34] = ['A2'];
 comments[34] = "Id Pregunta: 263. Direcci&oacute;n p&uacute;blica";
 preguntaids[34] = 263


//  Id pregunta: 2568 Año de creación de pregunta: 2002
 questions[35]= "36)  &iquest;Qu&eacute; tiene de particular una c&aacute;mara o sala anecoica?";
 choices[35]= new Array();
 choices[35][0] = "Las paredes son espejos reflectantes que permiten ver de fuera a dentro pero no de dentro a fuera.";
 choices[35][1] = "Las paredes tienen formas geom&eacute;tricas a lo largo de su superficie que evitan que rebote el sonido.";
 choices[35][2] = "Su electricidad est&aacute;tica hace que se comporte como una jaula de Faraday.";
 choices[35][3] = "Se mantiene completamente isoterma gracias al material de sus revestimientos.";
 answers[35] = 1;
 units[35] = ['119'];
 blocks[35] = ['B4'];
 comments[35] = "Id Pregunta: 2568. ";
 preguntaids[35] = 2568


//  Id pregunta: 204 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[36]= new Array();
 choices[36][0] = "De oficio.";
 choices[36][1] = "A solicitud del interesado.";
 choices[36][2] = "De oficio o a solicitud del interesado.";
 choices[36][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[36] = 2;
 units[36] = ['7'];
 blocks[36] = ['A2'];
 comments[36] = "Id Pregunta: 204. Ley 39/2015";
 preguntaids[36] = 204


//  Id pregunta: 8579 Año de creación de pregunta: 2013
 questions[37]= "38)  &iquest;C&oacute;mo son los multiprocesadores en los sistemas de gesti&oacute;n UMA?";
 choices[37]= new Array();
 choices[37][0] = "Fuertemente acoplados.";
 choices[37][1] = "Muy desacoplados";
 choices[37][2] = "Un procesador no depende de lo que hace otro";
 choices[37][3] = "Todas las respuestas con correctas";
 answers[37] = 0;
 units[37] = ['49'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 8579. ";
 preguntaids[37] = 8579


//  Id pregunta: 10376 Año de creación de pregunta: 2015
 questions[38]= "39)  &iquest;Cu&aacute;ntas conexiones activas permite mantener un dispositivo con el est&aacute;ndar Bluetooth?";
 choices[38]= new Array();
 choices[38][0] = "7";
 choices[38][1] = "8";
 choices[38][2] = "12";
 choices[38][3] = "16";
 answers[38] = 0;
 units[38] = ['108'];
 blocks[38] = ['B4'];
 comments[38] = "Id Pregunta: 10376. ";
 preguntaids[38] = 10376


//  Id pregunta: 2195 Año de creación de pregunta: 2002
 questions[39]= "40)  Indicar cual de las siguientes no es una funci&oacute;n b&aacute;sica del tratamiento de la informaci&oacute;n:";
 choices[39]= new Array();
 choices[39][0] = "Entrada de datos";
 choices[39][1] = "Almacenamiento de datos";
 choices[39][2] = "Copias de seguridad de datos";
 choices[39][3] = "C&aacute;lculos y transformaciones de datos";
 answers[39] = 2;
 units[39] = ['24'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 2195. ";
 preguntaids[39] = 2195


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[40]= "41)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[40]= new Array();
 choices[40][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[40][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[40][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[40][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[40] = 0;
 units[40] = ['1'];
 blocks[40] = ['A1'];
 comments[40] = "Id Pregunta: 97. Constituci&oacute;n de 1978";
 preguntaids[40] = 97


//  Id pregunta: 349 Año de creación de pregunta: 2016
 questions[41]= "42)  La ayuda financiera solicitada por Espa&ntilde;a a la UE en 2012 ascendi&oacute; a:";
 choices[41]= new Array();
 choices[41][0] = "100.000 millones de euros";
 choices[41][1] = "10.000 millones de euros";
 choices[41][2] = "1 bill&oacute;n de euros";
 choices[41][3] = "50.000 millones de euros";
 answers[41] = 0;
 units[41] = ['12'];
 blocks[41] = ['A3'];
 comments[41] = "Id Pregunta: 349. Modelo econ&oacute;mico";
 preguntaids[41] = 349


//  Id pregunta: 10466 Año de creación de pregunta: 2015
 questions[42]= "43)  Indique la opci&oacute;n correcta sobre las plataformas Open Source para el Cloud:";
 choices[42]= new Array();
 choices[42][0] = "OpenNebula fue desarrollado por el DSA (Distributed Systems Architecture Research Group) en la Universidad Complutense de Madrid y financiado por varios proyectos europeos y permite programar tanto en Java como en Ruby.";
 choices[42][1] = "OpenStack fue fundada por Rackspace y la NASA.";
 choices[42][2] = "CloudStack fue desarrollado por Cloud.com y dispone de versiones propietarias adem&aacute;s de la edici&oacute;n Community.";
 choices[42][3] = "Todas son verdaderas.";
 answers[42] = 3;
 units[42] = ['52'];
 blocks[42] = ['B2'];
 comments[42] = "Id Pregunta: 10466. ";
 preguntaids[42] = 10466


//  Id pregunta: 9186 Año de creación de pregunta: 2014
 questions[43]= "44)  La t&eacute;cnica que permite solapar instrucciones mediante la divisi&oacute;n de su ejecuci&oacute;n en etapas se denomina:";
 choices[43]= new Array();
 choices[43][0] = "Parametrizaci&oacute;n.";
 choices[43][1] = "Segmentaci&oacute;n.";
 choices[43][2] = "Multiplexaci&oacute;n.";
 choices[43][3] = "Paginaci&oacute;n.";
 answers[43] = 1;
 units[43] = ['56'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 9186. Examen TIC A2 2013";
 preguntaids[43] = 9186


//  Id pregunta: 323 Año de creación de pregunta: 2016
 questions[44]= "45)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[44]= new Array();
 choices[44][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[44][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[44][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[44][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[44] = 3;
 units[44] = ['11'];
 blocks[44] = ['A2'];
 comments[44] = "Id Pregunta: 323. Presupuestos generales";
 preguntaids[44] = 323


//  Id pregunta: 8289 Año de creación de pregunta: 2011
 questions[45]= "46)  El protocolo PXE utiliza los siguientes protocolos:";
 choices[45]= new Array();
 choices[45][0] = "BOOTP/DHCP, FTP y TCP/IP.";
 choices[45][1] = "TFTP, TCP/IP y direccionamiento est&aacute;tico en los clientes.";
 choices[45][2] = "TCP/IP, BOOTP/DHCP y TFTP.";
 choices[45][3] = "Ninguna de las anteriores.";
 answers[45] = 2;
 units[45] = ['103'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 8289. Examen UPM A2 2011";
 preguntaids[45] = 8289


//  Id pregunta: 8266 Año de creación de pregunta: 2011
 questions[46]= "47)  En el &aacute;mbito de la Administraci&oacute;n General del Estado, &iquest;es posible la notificaci&oacute;n mediante recepci&oacute;n en direcci&oacute;n de correo electr&oacute;nico que los ciudadanos elijan?";
 choices[46]= new Array();
 choices[46][0] = "No est&aacute; previsto para tal fin el uso de una direcci&oacute;n de correo electr&oacute;nico que elijan los ciudadanos, sino s&oacute;lo el uso de la denominada direcci&oacute;n electr&oacute;nica habilitada";
 choices[46][1] = "SI, siempre que se genere autom&aacute;ticamente y con independencia de la voluntad del destinatario sendos acuses de salida y recibo, que dejen constancia de su emisi&oacute;n y recepci&oacute;n y que so originen, respectivamente, en el momento del envi&oacute; y de acceso al contenido de la notificaci&oacute;n";
 choices[46][2] = "Si, siempre que se genere autom&aacute;ticamente y con independencia de la voluntad del destinatario un acuse de recibo que deje constancia de su recepci&oacute;n y que se origine en el momento del acceso al contenido de la notificaci&oacute;n.";
 choices[46][3] = "SI, siempre que se genere autom&aacute;ticamente y con independencia de la voluntad del destinatario un acuso de recibo que deje constancia de su recepci&oacute;n y que se origine en el momento del acceso al contenido c&iacute;e la notificaci&oacute;n Asimismo, el ciudadano podr&aacute; solicitar un acuse de salida, que deje constancia de su emisi&oacute;n y que se origine en el momento del env&iacute;o de la notificaci&oacute;n";
 answers[46] = 2;
 units[46] = ['7'];
 blocks[46] = ['A2'];
 comments[46] = "Id Pregunta: 8266. Examen TIC A2 2010 interna";
 preguntaids[46] = 8266


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[47]= "48)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[47]= new Array();
 choices[47][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[47][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[47][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[47][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[47] = 2;
 units[47] = ['1'];
 blocks[47] = ['A1'];
 comments[47] = "Id Pregunta: 18. Constituci&oacute;n de 1978";
 preguntaids[47] = 18


//  Id pregunta: 6571 Año de creación de pregunta: 2003
 questions[48]= "49)  Se&ntilde;ale cual de los siguientes datos no se almacena en la zona privada del chip criptogr&aacute;fico del DNI electr&oacute;nico:";
 choices[48]= new Array();
 choices[48][0] = "Claves privadas del ciudadano";
 choices[48][1] = "Certificado de autenticaci&oacute;n";
 choices[48][2] = "Claves p&uacute;blicas del ciudadano";
 choices[48][3] = "Certificado de firma";
 answers[48] = 2;
 units[48] = ['78'];
 blocks[48] = ['B2'];
 comments[48] = "Id Pregunta: 6571. ";
 preguntaids[48] = 6571


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[49]= "50)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[49]= new Array();
 choices[49][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[49][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[49][2] = "Ninguna es correcta.";
 choices[49][3] = "A y B son correctas.";
 answers[49] = 1;
 units[49] = ['14'];
 blocks[49] = ['A3'];
 comments[49] = "Id Pregunta: 391. Pol&iacute;ticas de igualdad";
 preguntaids[49] = 391


//  Id pregunta: 9446 Año de creación de pregunta: 2014
 questions[50]= "51)  &iquest;Qu&eacute; novedad introduce el est&aacute;ndar DOCSIS 3.1?";
 choices[50]= new Array();
 choices[50][0] = "No existe dicho est&aacute;ndar";
 choices[50][1] = "Puede soportar hasta 10 Gbit/s de bajada";
 choices[50][2] = "Permite el uso de tecnolog&iacute;as S-CDMA";
 choices[50][3] = "Permite el ajuste de diferentes niveles de calidad de servicio, seg&uacute;n el servicio empleado";
 answers[50] = 1;
 units[50] = ['115'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 9446. ";
 preguntaids[50] = 9446


//  Id pregunta: 2830 Año de creación de pregunta: 2002
 questions[51]= "52)  En la estructura del sistema operativo Unix:";
 choices[51]= new Array();
 choices[51][0] = "Una de las funciones del kernel o n&uacute;cleo es la de gestionar el sistema de archivos";
 choices[51][1] = "El tratamiento de cualquier dispositivo perif&eacute;rico como un archivo";
 choices[51][2] = "La shell muestra la interfaz entre el Unix y el usuario, incorpora una serie de utilidades para realizar las tareas solicitadas por el usuario";
 choices[51][3] = "Dentro del kernel existen dos subsistemas: la interfaz de llamadas al sistema, y el planificador (scheduler)";
 answers[51] = 1;
 units[51] = ['57'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 2830. ";
 preguntaids[51] = 2830


//  Id pregunta: 4770 Año de creación de pregunta: 2002
 questions[52]= "53)  El tr&aacute;fico perdido en un periodo de tiempo T :";
 choices[52]= new Array();
 choices[52][0] = "Se puede medir como el numero de llamadas perdidas Cl por la duraci&oacute;n media de las llamadas durante un tiempo T";
 choices[52][1] = "No tiene sentido pr&aacute;ctico porque no se pueden conocer realmente el n&uacute;mero de llamadas perdidas";
 choices[52][2] = "No puede medirse, s&oacute;lo puede medirse el n&uacute;mero de llamadas perdidas y nunca el tr&aacute;fico perdido";
 choices[52][3] = "Ninguna de las anteriores es v&aacute;lida";
 answers[52] = 2;
 units[52] = ['99'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 4770. ";
 preguntaids[52] = 4770


//  Id pregunta: 9888 Año de creación de pregunta: 2015
 questions[53]= "54)  Seg&uacute;n la Ley 39/2015 se puede establecer la obligatoriedad a las personas f&iacute;sicas de relacionarse con la Administraci&oacute;n por medios electr&oacute;nicos";
 choices[53]= new Array();
 choices[53][0] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con personas f&iacute;sicas en todos los casos.";
 choices[53][1] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con un colectivo de personas f&iacute;sicas, si previamente se establece de forma reglamentaria para dicho colectivo.";
 choices[53][2] = "La Ley establece de forma obligatoria la relaci&oacute;n electr&oacute;nica con un colectivo personas f&iacute;sicas si la administraci&oacute;n justifica la conveniencia y medios t&eacute;cnicos para dicho colectivo.";
 choices[53][3] = "La Ley no establece la obligatoriedad de relaci&oacute;n para las personas f&iacute;sicas en ning&uacute;n caso.";
 answers[53] = 1;
 units[53] = ['7', '19'];
 blocks[53] = ['A2', 'A4'];
 comments[53] = "Id Pregunta: 9888. ";
 preguntaids[53] = 9888


//  Id pregunta: 4553 Año de creación de pregunta: 2002
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes dispositivos es el que trabaja como m&aacute;ximo a nivel 3 - Red - del sistema OSI?:";
 choices[54]= new Array();
 choices[54][0] = "Repetidores";
 choices[54][1] = "Puentes (Bridges)";
 choices[54][2] = "Enrutadores (routers)";
 choices[54][3] = "Pasarelas (Gateways)";
 answers[54] = 2;
 units[54] = ['105'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 4553. ";
 preguntaids[54] = 4553


//  Id pregunta: 8930 Año de creación de pregunta: 2013
 questions[55]= "56)  Indique la afirmaci&oacute;n incorrecta con respecto a una sesi&oacute;n JAD";
 choices[55]= new Array();
 choices[55][0] = "Es una t&eacute;cnica que promueve la cooperaci&oacute;n entre usuarios y desarrolladores para la obtenci&oacute;n de requisitos";
 choices[55][1] = "T&iacute;picamente duran media jornada de trabajo";
 choices[55][2] = "Se utilizan para reducir el tiempo de desarrollo";
 choices[55][3] = "Involucran a personas de m&aacute;s alto nivel que las sesiones JRP";
 answers[55] = 3;
 units[55] = ['84'];
 blocks[55] = ['B3'];
 comments[55] = "Id Pregunta: 8930. ";
 preguntaids[55] = 8930


//  Id pregunta: 2759 Año de creación de pregunta: 2002
 questions[56]= "57)  El lenguaje COBOL:";
 choices[56]= new Array();
 choices[56][0] = "Es un lenguaje de programaci&oacute;n que no cuenta con ninguna variedad para el sistema operativo UNIX";
 choices[56][1] = "Es un lenguaje de programaci&oacute;n desarrollado por CODASYL a principios de los a&ntilde;os 60";
 choices[56][2] = "Es un lenguaje de programaci&oacute;n desarrollado por CODASYL a principios de los a&ntilde;os 70";
 choices[56][3] = "Es un lenguaje de programaci&oacute;n que dej&oacute; de utilizarse por incompatibilidad con el efecto 2000";
 answers[56] = 1;
 units[56] = ['56'];
 blocks[56] = ['B2'];
 comments[56] = "Id Pregunta: 2759. ";
 preguntaids[56] = 2759


//  Id pregunta: 7966 Año de creación de pregunta: 2011
 questions[57]= "58)  De las siguientes opciones, se&ntilde;ale aquella que representa la m&aacute;xima velocidad a la que un dispositivo inal&aacute;mbrico puede enviar datos conforme al est&aacute;ndar IEEE indicado:";
 choices[57]= new Array();
 choices[57][0] = "802.11a usando DSSS, a 11 Mbps.";
 choices[57][1] = "802.11a usando DSSS, a 54 Mbps.";
 choices[57][2] = "802.11b usando OFDM, a 54 Mbps";
 choices[57][3] = "802.11g usando OFDM, a 54 Mbps.";
 answers[57] = 3;
 units[57] = ['108'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 7966. Examen TIC A2 2010";
 preguntaids[57] = 7966


//  Id pregunta: 10393 Año de creación de pregunta: 2015
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Estrategia Europea 2020 en materia de sostenibilidad energ&eacute;tica?";
 choices[58]= new Array();
 choices[58][0] = "20% de las energ&iacute;as deben proceder de una fuente renovable";
 choices[58][1] = "20% de aumento de la eficiencia energ&eacute;tica";
 choices[58][2] = "20% de los coches deben ser el&eacute;ctricos";
 choices[58][3] = "Emisiones de gases invernadero un 20% menores a los niveles de 1990";
 answers[58] = 2;
 units[58] = ['19'];
 blocks[58] = ['A4'];
 comments[58] = "Id Pregunta: 10393. ";
 preguntaids[58] = 10393


//  Id pregunta: 5876 Año de creación de pregunta: 2007
 questions[59]= "60)  La diferencia esencial entre TCP y UDP es";
 choices[59]= new Array();
 choices[59][0] = "A diferencia de UDP, TCP dispone de mecanismos para el control de flujo y la transmisi&oacute;n fiable de paquetes";
 choices[59][1] = "A diferencia de UDP, TCP ofrece a la capa superior el servicio de multiplexaci&oacute;n por puerto";
 choices[59][2] = "A dferencia de UDP, TCP dispone de mecanismos para detectar errores de transmisi&oacute;n";
 choices[59][3] = "Todas las anteriores son ciertas";
 answers[59] = 0;
 units[59] = ['109'];
 blocks[59] = ['B4'];
 comments[59] = "Id Pregunta: 5876. ";
 preguntaids[59] = 5876


//  Id pregunta: 7143 Año de creación de pregunta: 2010
 questions[60]= "61)  El reglamento sobre las condiciones b&aacute;sicas para el acceso de las personas con discapacidad a las tecnolog&iacute;as, productos y servicios relacionados con la sociedad de la informaci&oacute;n y medios de comunicaci&oacute;n social es el:";
 choices[60]= new Array();
 choices[60][0] = "RD 1494/2007";
 choices[60][1] = "RD 1497/2004";
 choices[60][2] = "RD 1449/2007";
 choices[60][3] = "RD 1479/2007";
 answers[60] = 0;
 units[60] = ['42'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 7143. ";
 preguntaids[60] = 7143


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[61]= "62)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[61]= new Array();
 choices[61][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[61][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[61][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[61][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[61] = 0;
 units[61] = ['1'];
 blocks[61] = ['A1'];
 comments[61] = "Id Pregunta: 69. Constituci&oacute;n de 1978";
 preguntaids[61] = 69


//  Id pregunta: 446 Año de creación de pregunta: 2016
 questions[62]= "63)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[62]= new Array();
 choices[62][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[62][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[62][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[62][3] = "Todos los anteriores";
 answers[62] = 3;
 units[62] = ['19'];
 blocks[62] = ['A4'];
 comments[62] = "Id Pregunta: 446. Agenda Digital";
 preguntaids[62] = 446


//  Id pregunta: 2063 Año de creación de pregunta: 2002
 questions[63]= "64)  En relaci&oacute;n con la impugnaci&oacute;n de valoraciones:";
 choices[63]= new Array();
 choices[63][0] = "Los ciudadanos tienen derecho a no verse sometidos a una decisi&oacute;n con efectos jur&iacute;dicos, sobre ellos o que les afecte de manera significativa, que se base &uacute;nicamente en un tratamiento de datos destinados a evaluar determinados aspectos de su personalidad";
 choices[63][1] = "El afectado podr&aacute; impugnar actos administrativos o decisiones privadas que impliquen una valoraci&oacute;n de su comportamiento, cuyo &uacute;nico fundamento sea un tratamiento de datos de car&aacute;cter personal que ofrezca una definici&oacute;n de sus caracter&iacute;sticas o personalidad";
 choices[63][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 choices[63][3] = "Ninguna de las respuestas es correcta";
 answers[63] = 2;
 units[63] = ['35'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 2063. ";
 preguntaids[63] = 2063


//  Id pregunta: 6276 Año de creación de pregunta: 2003
 questions[64]= "65)  El Marco Europeo de Interoperabilidad 2.0 se construye sobre la base de 12 principios. Indicar cu&aacute;l de los siguientes no es uno de ellos:";
 choices[64]= new Array();
 choices[64][0] = "Multiling&uuml;ismo";
 choices[64][1] = "Seguridad y privacidad";
 choices[64][2] = "Subsidiariedad y proporcionalidad";
 choices[64][3] = "Cooperaci&oacute;n intergubernamental";
 answers[64] = 3;
 units[64] = ['19'];
 blocks[64] = ['A4'];
 comments[64] = "Id Pregunta: 6276. ";
 preguntaids[64] = 6276


//  Id pregunta: 8035 Año de creación de pregunta: 2011
 questions[65]= "66)  Para las pruebas de caja transparente, se&ntilde;ale la opci&oacute;n correcta:";
 choices[65]= new Array();
 choices[65][0] = "Aseguran la ausencia absoluta de defectos.";
 choices[65][1] = "Comprueban la funcionalidad de un programa.";
 choices[65][2] = "Se realizan ignorando completamente la estructura interna de un programa.";
 choices[65][3] = "Exigen el conocimiento de la estructura interna del programa.";
 answers[65] = 3;
 units[65] = ['91'];
 blocks[65] = ['B3'];
 comments[65] = "Id Pregunta: 8035. Examen TIC A2 2010";
 preguntaids[65] = 8035


//  Id pregunta: 1235 Año de creación de pregunta: 2016
 questions[66]= "67)  En conmutaci&oacute;n de paquetes, &iquest;cu&aacute;l de las siguientes afirmaciones con respecto a la multiplexaci&oacute;n por divisi&oacute;n de tiempo es correcta?";
 choices[66]= new Array();
 choices[66][0] = "En la multiplexaci&oacute;n s&iacute;ncrona no hay preasignaci&oacute;n de ranuras temporales.";
 choices[66][1] = "En la multiplexaci&oacute;n as&iacute;ncrona se asigna siempre la misma ranura de tiempo a cada dispositivo.";
 choices[66][2] = "En la multiplexaci&oacute;n s&iacute;ncrona el n&uacute;mero de dispositivos debe ser igual al n&uacute;mero de ranuras de tiempo disponibles.";
 choices[66][3] = "En la multiplexaci&oacute;n as&iacute;ncrona el retardo es variable.";
 answers[66] = 3;
 units[66] = ['102'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 1235. ";
 preguntaids[66] = 1235


//  Id pregunta: 3083 Año de creación de pregunta: 2002
 questions[67]= "68)  Un sistema de almacenamiento RAID 0:";
 choices[67]= new Array();
 choices[67][0] = "Es un sistema tolerante a fallos de un disco";
 choices[67][1] = "Es un sistema que guarda en disco la informaci&oacute;n de paridad del resto de los discos";
 choices[67][2] = "Requiere al menos 5 discos";
 choices[67][3] = "Requiere como m&iacute;nimo dos discos y mejora el rendimiento en los accesos a los discos";
 answers[67] = 3;
 units[67] = ['53'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 3083. ";
 preguntaids[67] = 3083


//  Id pregunta: 5088 Año de creación de pregunta: 2002
 questions[68]= "69)  WLL es:";
 choices[68]= new Array();
 choices[68][0] = "Una DLL para dispositivos wireless";
 choices[68][1] = "Una t&eacute;cnica de dise&ntilde;o de enlaces o links a p&aacute;ginas web";
 choices[68][2] = "Un bucle local inal&aacute;mbrico de abonado en telefon&iacute;a fija";
 choices[68][3] = "Nada de lo anterior";
 answers[68] = 2;
 units[68] = ['114'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 5088. ";
 preguntaids[68] = 5088


//  Id pregunta: 842 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes NO es un repositorio de c&oacute;digo?";
 choices[69]= new Array();
 choices[69][0] = "CVS";
 choices[69][1] = "SVN";
 choices[69][2] = "Team Foundation Server";
 choices[69][3] = "Apache Tomcat";
 answers[69] = 3;
 units[69] = ['92'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 842. Integraci&oacute;n continua";
 preguntaids[69] = 842


//  Id pregunta: 1291 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[70]= new Array();
 choices[70][0] = "Indirecta.";
 choices[70][1] = "Directa.";
 choices[70][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[70][3] = "Directa o indirecta, sequen decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[70] = 1;
 units[70] = ['14'];
 blocks[70] = ['A3'];
 comments[70] = "Id Pregunta: 1291. ";
 preguntaids[70] = 1291


//  Id pregunta: 2853 Año de creación de pregunta: 2002
 questions[71]= "72)  En sistemas operativos Unix se suele utilizar el editor de texto 'VI', que permite el uso de expresiones regulares. Adem&aacute;s tambien existe un editor de flujo basado en expresiones regulares, que se llama:";
 choices[71]= new Array();
 choices[71][0] = "fvi";
 choices[71][1] = "fred";
 choices[71][2] = "sed";
 choices[71][3] = "xlexp";
 answers[71] = 2;
 units[71] = ['57'];
 blocks[71] = ['B2'];
 comments[71] = "Id Pregunta: 2853. sed (stream editor) es un editor de flujo, una potente herramienta de tratamiento de texto para el sistema operativoUnix que acepta como entrada un archivo, lo lee y modifica l&iacute;nea a l&iacute;nea de acuerdo a un script, mostrando el resultado por salida est&aacute;ndar (normalmente en pantalla, a menos que se realice una redirecci&oacute;n). Sed permite manipular flujos de datos, como por ejemplo cortar l&iacute;neas, buscar y reemplazar texto (con soporte de expresiones regulares), entre otras cosas";
 preguntaids[71] = 2853


//  Id pregunta: 10934 Año de creación de pregunta: 2015
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes responsables no forma parte de la Comisi&oacute;n de Transparencia y Buen Gobierno?:";
 choices[72]= new Array();
 choices[72][0] = "representante del Tribunal de Cuentas";
 choices[72][1] = "representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 choices[72][2] = "representante de la Agencia Estatal de la Administraci&oacute;n del Estado";
 choices[72][3] = "representante de la Autoridad Independiente de Responsabilidad Fiscal";
 answers[72] = 2;
 units[72] = ['22'];
 blocks[72] = ['A4'];
 comments[72] = "Id Pregunta: 10934. ";
 preguntaids[72] = 10934


//  Id pregunta: 10456 Año de creación de pregunta: 2015
 questions[73]= "74)  Para los niveles de seguridad de los sistemas de autenticaci&oacute;n definidos en el Reglamento 910/2014 relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior, NO es cierto:";
 choices[73]= new Array();
 choices[73][0] = "Se tienen en cuenta tanto el proyecto europeo STORK como la norma ISO 29115.";
 choices[73][1] = "El nivel sustancial de STORK requiere un registro presencial al menos una vez, y la credencial electr&oacute;nica se entrega como certificado hardware.";
 choices[73][2] = "El modelo QAA (Quality, Authentication, Assurance) diferencia los factores asociados al proceso de registro y entrega de la credencial, y factores asociados al proceso de autenticaci&oacute;n electr&oacute;nica con dicha credencial.";
 choices[73][3] = "El DNIe se corresponde con un nivel 4 de QAA.";
 answers[73] = 1;
 units[73] = ['77'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 10456. ";
 preguntaids[73] = 10456


//  Id pregunta: 5600 Año de creación de pregunta: 2007
 questions[74]= "75)  En el an&aacute;lisis de los requisitos de un sistema de informaci&oacute;n, para representar los distintos datos y sus relaciones, la &ldquo;t&eacute;cnica&rdquo; m&aacute;s adecuada:";
 choices[74]= new Array();
 choices[74][0] = "Seudoc&oacute;digo.";
 choices[74][1] = "Modelo Entidad-Relaci&oacute;n.";
 choices[74][2] = "Diagramas de transici&oacute;n de estados.";
 choices[74][3] = "DFD (Diagrama de Flujo de Datos).";
 answers[74] = 1;
 units[74] = ['84'];
 blocks[74] = ['B3'];
 comments[74] = "Id Pregunta: 5600. ";
 preguntaids[74] = 5600


