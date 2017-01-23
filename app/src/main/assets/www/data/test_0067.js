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
//  Id pregunta: 1771 Año de creación de pregunta: 2016
 questions[0]= "1)  Se&ntilde;ale cu&aacute;l de los siguientes est&aacute;ndares regula la tecnolog&iacute;a WiMAX.";
 choices[0]= new Array();
 choices[0][0] = "IEEE 802.3";
 choices[0][1] = "IEEE 802.11";
 choices[0][2] = "IEEE 802.15";
 choices[0][3] = "IEEE 802.16";
 answers[0] = 3;
 units[0] = ['106'];
 blocks[0] = ['B4'];
 comments[0] = "Id Pregunta: 1771. ";
 preguntaids[0] = 1771


//  Id pregunta: 40 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[1]= new Array();
 choices[1][0] = "Cinco.";
 choices[1][1] = "Dos.";
 choices[1][2] = "Cuatro.";
 choices[1][3] = "Siete.";
 answers[1] = 0;
 units[1] = ['1'];
 blocks[1] = ['A1'];
 comments[1] = "Id Pregunta: 40. Constituci&oacute;n de 1978";
 preguntaids[1] = 40


//  Id pregunta: 5701 Año de creación de pregunta: 2007
 questions[2]= "3)  Los denominados cortafuegos o firewalls de filtrado de paquetes, se caracterizan porque:";
 choices[2]= new Array();
 choices[2][0] = "Analizan &uacute;nicamente la informaci&oacute;n incluida en la cabecera TCP/IP de cada paquete.";
 choices[2][1] = "Analizan la carga &uacute;til de datos de cada paquete.";
 choices[2][2] = "Autentifican los usuarios que acceden a la red.";
 choices[2][3] = "No permiten filtrar paquetes en funci&oacute;n del puerto destino de la comunicaci&oacute;n saliente.";
 answers[2] = 0;
 units[2] = ['119'];
 blocks[2] = ['B4'];
 comments[2] = "Id Pregunta: 5701. ";
 preguntaids[2] = 5701


//  Id pregunta: 478 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[3]= new Array();
 choices[3][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[3][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[3][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[3][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[3] = 0;
 units[3] = ['19'];
 blocks[3] = ['A4'];
 comments[3] = "Id Pregunta: 478. Sociedad de la informaci&oacute;n";
 preguntaids[3] = 478


//  Id pregunta: 268 Año de creación de pregunta: 2016
 questions[4]= "5)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[4]= new Array();
 choices[4][0] = "Cifrada";
 choices[4][1] = "Conjunta";
 choices[4][2] = "Sistem&aacute;tica";
 choices[4][3] = "Todas son correctas";
 answers[4] = 3;
 units[4] = ['11'];
 blocks[4] = ['A2'];
 comments[4] = "Id Pregunta: 268. Presupuestos generales";
 preguntaids[4] = 268


//  Id pregunta: 7512 Año de creación de pregunta: 2010
 questions[5]= "6)  &iquest;Qu&eacute; organizaci&oacute;n normalizadora se dedica a trabajar en la extensi&oacute;n del est&aacute;ndar POSIX (Portable Operating System Interface for Computer Environments)?";
 choices[5]= new Array();
 choices[5][0] = "X/OPEN.";
 choices[5][1] = "ACE.";
 choices[5][2] = "OSF.";
 choices[5][3] = "IEEE.";
 answers[5] = 3;
 units[5] = ['56'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 7512. Map 2005";
 preguntaids[5] = 7512


//  Id pregunta: 6085 Año de creación de pregunta: 2003
 questions[6]= "7)  Seg&uacute;n la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, un dispositivo seguro de creaci&oacute;n de firma es undispositivo que debe ofrecer al menos ciertas garant&iacute;as. &iquest;Cu&aacute;l de las siguientes NO es una de ellas?";
 choices[6]= new Array();
 choices[6][0] = "Que los datos utilizados para la generaci&oacute;n de firma puedan producirse s&oacute;lo una vez y asegurarrazonablemente su secreto.";
 choices[6][1] = "Que los datos utilizados para la generaci&oacute;n de firma puedan ser derivados de los de verificaci&oacute;n de firma ode la propia firma";
 choices[6][2] = "Que los datos de creaci&oacute;n de firma puedan ser protegidos de forma fiable por el firmante contra su utilizaci&oacute;npor terceros.";
 choices[6][3] = "Que el dispositivo utilizado no alteren los datos o el documento que deba firmarse ni impidan que &eacute;ste semuestre al firmante antes del proceso de firma.";
 answers[6] = 1;
 units[6] = ['19'];
 blocks[6] = ['A4'];
 comments[6] = "Id Pregunta: 6085. Examen TIC A1 MAP 2007";
 preguntaids[6] = 6085


//  Id pregunta: 210 Año de creación de pregunta: 2016
 questions[7]= "8)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[7]= new Array();
 choices[7][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[7][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[7][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[7][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[7] = 1;
 units[7] = ['7'];
 blocks[7] = ['A2'];
 comments[7] = "Id Pregunta: 210. Ley 39/2015";
 preguntaids[7] = 210


//  Id pregunta: 1453 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n la LSSI en su art&iacute;culo 40, la cuant&iacute;a de las multas que se impongan se graduar&aacute; atendiendo a ciertos criterios, cual es falso:";
 choices[8]= new Array();
 choices[8][0] = "La existencia de intencionalidad.";
 choices[8][1] = "Plazo de tiempo durante el que se haya venido cometiendo la infracci&oacute;n.";
 choices[8][2] = "La cantidad de personas involucradas en la infracci&oacute;n.";
 choices[8][3] = "Los beneficios obtenidos por la infracci&oacute;n.";
 answers[8] = 2;
 units[8] = ['19'];
 blocks[8] = ['A4'];
 comments[8] = "Id Pregunta: 1453. ";
 preguntaids[8] = 1453


//  Id pregunta: 604 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale la afirmaci&oacute;n correcta respecto a las caracter&iacute;sticas generales de las copias electr&oacute;nicas aut&eacute;nticas.";
 choices[9]= new Array();
 choices[9][0] = "Se expedir&aacute;n &uacute;nicamente a partir de documentos con calidad de original.";
 choices[9][1] = "Ser&aacute;n firmadas mediante alguno de los sistemas de firma previstos en la legislaci&oacute;n aplicable.";
 choices[9][2] = "Ser&aacute;n nuevos documentos electr&oacute;nicos que incluir&aacute;n el contenido completo del documento sobre el que se expiden.";
 choices[9][3] = "Sus metadatos tendr&aacute;n los mismos valores que el documento original.";
 answers[9] = 1;
 units[9] = ['43'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 604. NTI";
 preguntaids[9] = 604


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[10]= "11)  La secci&oacute;n segunda, del cap&iacute;tulo segundo, del t&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola de 1978, se denomina:";
 choices[10]= new Array();
 choices[10][0] = "De los derechos fundamentales y de las libertades p&uacute;blicas.";
 choices[10][1] = "De los derechos y deberes fundamentales.";
 choices[10][2] = "De los derechos y libertades de los ciudadanos.";
 choices[10][3] = "De los derechos y deberes de los ciudadanos.";
 answers[10] = 3;
 units[10] = ['1'];
 blocks[10] = ['A1'];
 comments[10] = "Id Pregunta: 53. Constituci&oacute;n de 1978";
 preguntaids[10] = 53


//  Id pregunta: 4697 Año de creación de pregunta: 2002
 questions[11]= "12)  El nivel encargado de la correcci&oacute;n definitiva de errores de comunicaci&oacute;n en el modelo de referencia OSI es:";
 choices[11]= new Array();
 choices[11][0] = "Sesi&oacute;n";
 choices[11][1] = "Red";
 choices[11][2] = "Transporte";
 choices[11][3] = "Enlace";
 answers[11] = 2;
 units[11] = ['105'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 4697. ";
 preguntaids[11] = 4697


//  Id pregunta: 219 Año de creación de pregunta: 2016
 questions[12]= "13)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[12]= new Array();
 choices[12][0] = "un art&iacute;culo";
 choices[12][1] = "dos art&iacute;culos";
 choices[12][2] = "tres art&iacute;culos";
 choices[12][3] = "cuatro art&iacute;culos";
 answers[12] = 1;
 units[12] = ['7'];
 blocks[12] = ['A2'];
 comments[12] = "Id Pregunta: 219. Ley 39/2015";
 preguntaids[12] = 219


//  Id pregunta: 6755 Año de creación de pregunta: 2009
 questions[13]= "14)  En el conjunto de protocolos TCP/IP, &iquest;cu&aacute;ntos bits se reservan para identificar los n&uacute;meros de puerto en las cabeceras de control TCP y UDP?";
 choices[13]= new Array();
 choices[13][0] = "16";
 choices[13][1] = "24";
 choices[13][2] = "32";
 choices[13][3] = "64";
 answers[13] = 0;
 units[13] = ['109'];
 blocks[13] = ['B4'];
 comments[13] = "Id Pregunta: 6755. MAP 2008 A1";
 preguntaids[13] = 6755


//  Id pregunta: 8161 Año de creación de pregunta: 2011
 questions[14]= "15)  En el contexto de la virtualizaci&oacute;n, &iquest;qu&eacute; es el hypervisor?";
 choices[14]= new Array();
 choices[14][0] = "Un m&oacute;dulo en el sistema operativo hu&eacute;sped que monitoriza el uso de recursosdel mismo.";
 choices[14][1] = "La extensi&oacute;n del gestor de procesos del sistema operativo anfitri&oacute;n que permitecompartir memoria a los procesos de distintos sistemas operativos hu&eacute;spedes.";
 choices[14][2] = "Es la plataforma que permite ejecutar concurrentemente varios sistemasoperativos en una m&aacute;quina.";
 choices[14][3] = "Un m&oacute;dulo en el sistema operativo anfitri&oacute;n que monitoriza el uso de recursosdel mismo.";
 answers[14] = 2;
 units[14] = ['124'];
 blocks[14] = ['B4'];
 comments[14] = "Id Pregunta: 8161. Analista Ayto. Madrid 2010";
 preguntaids[14] = 8161


//  Id pregunta: 4922 Año de creación de pregunta: 2002
 questions[15]= "16)  La tecnolog&iacute;a de red de &aacute;rea local 10Base-T:";
 choices[15]= new Array();
 choices[15][0] = "Requiere cableado coaxial delgado";
 choices[15][1] = "Requiere cableado de pares trenzados de categor&iacute;a 5 como m&iacute;nimo";
 choices[15][2] = "Cumple el est&aacute;ndar IEEE 802.3";
 choices[15][3] = "Son ciertas las respuestas 'b' y 'c'";
 answers[15] = 2;
 units[15] = ['112'];
 blocks[15] = ['B4'];
 comments[15] = "Id Pregunta: 4922. ";
 preguntaids[15] = 4922


//  Id pregunta: 999 Año de creación de pregunta: 2016
 questions[16]= "17)  La organizaci&oacute;n en Departamentos ministeriales de la Administracion General del Estado no obsta a la existencia de:";
 choices[16]= new Array();
 choices[16][0] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[16][1] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 choices[16][2] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[16][3] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 answers[16] = 3;
 units[16] = ['4', '7', '8', '9'];
 blocks[16] = ['A1', 'A2'];
 comments[16] = "Id Pregunta: 999. Ley 40/2015";
 preguntaids[16] = 999


//  Id pregunta: 9342 Año de creación de pregunta: 2014
 questions[17]= "18)  En relaci&oacute;n con la concurrencia en bases de datos, el tama&ntilde;o del elemento de datos adecuado para el bloqueo (granularidad) afecta al grado de concurrencia de forma que, a menor tama&ntilde;o del elemento que es bloqueado:";
 choices[17]= new Array();
 choices[17][0] = "Aumenta el grado de concurrencia, aumenta la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 choices[17][1] = "Disminuye el grado de concurrencia, aumenta la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 choices[17][2] = "Disminuye el grado de concurrencia, disminuyendo la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 choices[17][3] = "Aumenta el grado de concurrencia, disminuyendo la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 answers[17] = 0;
 units[17] = ['61'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 9342. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[17] = 9342


//  Id pregunta: 1028 Año de creación de pregunta: 2016
 questions[18]= "19)  Contra las resoluciones en materia de abstenci&oacute;n y recusaci&oacute;n...";
 choices[18]= new Array();
 choices[18][0] = "Cabr&aacute; recurso de alzada";
 choices[18][1] = "Cabr&aacute; el nuevo protesto";
 choices[18][2] = "Cabr&aacute; recurso de reposici&oacute;n";
 choices[18][3] = "No cabr&aacute; recurso alguno";
 answers[18] = 3;
 units[18] = ['4', '7', '8', '9'];
 blocks[18] = ['A1', 'A2'];
 comments[18] = "Id Pregunta: 1028. Ley 40/2015";
 preguntaids[18] = 1028


//  Id pregunta: 91 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[19]= new Array();
 choices[19][0] = "Veinte.";
 choices[19][1] = "Quince.";
 choices[19][2] = "Diez.";
 choices[19][3] = "Doce.";
 answers[19] = 0;
 units[19] = ['1'];
 blocks[19] = ['A1'];
 comments[19] = "Id Pregunta: 91. Constituci&oacute;n de 1978";
 preguntaids[19] = 91


//  Id pregunta: 997 Año de creación de pregunta: 2016
 questions[20]= "21)  Respecto a las unidades administrativas del articulo 56 de la Ley 40/2015:";
 choices[20]= new Array();
 choices[20][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[20][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[20][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[20][3] = "ninguna es correcta";
 answers[20] = 1;
 units[20] = ['4', '7', '8', '9'];
 blocks[20] = ['A1', 'A2'];
 comments[20] = "Id Pregunta: 997. Ley 40/2015";
 preguntaids[20] = 997


//  Id pregunta: 2054 Año de creación de pregunta: 2002
 questions[21]= "22)  &iquest;Qu&eacute; tipos de miembros forman X/OPEN (actual Open Group)?:";
 choices[21]= new Array();
 choices[21][0] = "Distintas compa&ntilde;&iacute;as que desarrollan sistemas operativos y hardware";
 choices[21][1] = "Organizaciones de estandarizaci&oacute;n";
 choices[21][2] = "Grupos de usuarios y diversos grupos de inter&eacute;s en tecnolog&iacute;as de la informaci&oacute;n";
 choices[21][3] = "Todos los anteriores";
 answers[21] = 3;
 units[21] = ['48'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 2054. ";
 preguntaids[21] = 2054


//  Id pregunta: 10830 Año de creación de pregunta: 2015
 questions[22]= "23)  Indique cu&aacute;l no es un principio de la norma ISO 9004";
 choices[22]= new Array();
 choices[22][0] = "Enfoque de sistema para la gesti&oacute;n";
 choices[22][1] = "Enfoque basado en procesos";
 choices[22][2] = "Enfoque al cliente";
 choices[22][3] = "Enfoque al proveedor";
 answers[22] = 3;
 units[22] = ['98'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 10830. ";
 preguntaids[22] = 10830


//  Id pregunta: 7526 Año de creación de pregunta: 2010
 questions[23]= "24)  En un sistema de ficheros Unix que tiene un tama&ntilde;o de bloque de 2 KB y nodos-i con doce direcciones directas, una indirecta simple, una indirecta doble y una indirecta triple, que adem&aacute;s utiliza direcciones de bloque de 4 bytes, para representar un fichero de 2 MB:";
 choices[23]= new Array();
 choices[23][0] = "Se utilizar&aacute; un bloque de indexaci&oacute;n simple y uno de indexaci&oacute;n doble.";
 choices[23][1] = "Se utilizar&aacute; un bloque de indexaci&oacute;n simple y dos de indexaci&oacute;n doble.";
 choices[23][2] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple y uno de indexaci&oacute;n doble.";
 choices[23][3] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple.";
 answers[23] = 2;
 units[23] = ['57'];
 blocks[23] = ['B2'];
 comments[23] = "Id Pregunta: 7526. Map 2005";
 preguntaids[23] = 7526


//  Id pregunta: 10024 Año de creación de pregunta: 2015
 questions[24]= "25)  En el PERT, el tiempo last del &uacute;ltimo suceso:";
 choices[24]= new Array();
 choices[24][0] = "Es siempre cero.";
 choices[24][1] = "Es igual a su tiempo early.";
 choices[24][2] = "Es mayor que su tiempo early.";
 choices[24][3] = "Es menor que su tiempo early.";
 answers[24] = 1;
 units[24] = ['31'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 10024. Examen TIC A2 2014";
 preguntaids[24] = 10024


//  Id pregunta: 7122 Año de creación de pregunta: 2010
 questions[25]= "26)  La creaci&oacute;n de sellos electr&oacute;nicos se realizar&aacute;, seg&uacute;n lo dispuesto en el RD 1671/2009, mediante...";
 choices[25]= new Array();
 choices[25][0] = "Orden del Ministerio de Presidencia";
 choices[25][1] = "Resoluci&oacute;n del Ministro o titular del organismo p&uacute;blico competente";
 choices[25][2] = "Orden del Ministerio o titular del organismo p&uacute;blico competente";
 choices[25][3] = "Resoluci&oacute;n de la Subsecretar&iacute;a del Ministerio o titular del organismo p&uacute;blico competente";
 answers[25] = 3;
 units[25] = ['7'];
 blocks[25] = ['A2'];
 comments[25] = "Id Pregunta: 7122. Art&iacute;culo 19 RD 1671/2009";
 preguntaids[25] = 7122


//  Id pregunta: 1071 Año de creación de pregunta: 2016
 questions[26]= "27)  Indique la frase correcta acerca de las arquitecturas de microprocesadores:";
 choices[26]= new Array();
 choices[26][0] = "La arquitectura CISC es m&aacute;s moderna que la arquitectura RISC y busca ampliar el conjunto de instrucciones de &eacute;sta.";
 choices[26][1] = "La arquitectura RISC dispone de un n&uacute;mero reducido de instrucciones y gran variedad de registros de uso dedicado.";
 choices[26][2] = "La arquitectura RISC maneja instrucciones con formato regular y complejos modos de direccionamiento.";
 choices[26][3] = "La arquitectura CISC dispone de instrucciones complejas y dependiendo de ellas maneja diferentes longitudes de palabra.";
 answers[26] = 3;
 units[26] = ['49'];
 blocks[26] = ['B2'];
 comments[26] = "Id Pregunta: 1071. ";
 preguntaids[26] = 1071


//  Id pregunta: 3679 Año de creación de pregunta: 2002
 questions[27]= "28)  &iquest;Cual de los siguientes no es uno de los 10 items de riesgo del software m&aacute;s importantes que se consideran en el modelo en espiral?:";
 choices[27]= new Array();
 choices[27][0] = "Escasez de personal";
 choices[27][1] = "Calendario no realista";
 choices[27][2] = "Componentes hardware no tiene calidad adecuada";
 choices[27][3] = "Componentes del exterior no tienen calidad adecuada";
 answers[27] = 2;
 units[27] = ['82'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 3679. ";
 preguntaids[27] = 3679


//  Id pregunta: 5834 Año de creación de pregunta: 2007
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes no es un t&eacute;rmino sobre Internet?";
 choices[28]= new Array();
 choices[28][0] = "Cookies.";
 choices[28][1] = "Spam.";
 choices[28][2] = "Netnannies.";
 choices[28][3] = "Brownies.";
 answers[28] = 3;
 units[28] = ['103'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 5834. Examen 2006 JCYL";
 preguntaids[28] = 5834


//  Id pregunta: 10176 Año de creación de pregunta: 2015
 questions[29]= "30)  LINQ (Language-Integrated Query) es:";
 choices[29]= new Array();
 choices[29][0] = "Es una librer&iacute;a de Javascript para la integraci&oacute;n de aplicaciones con HTML5.";
 choices[29][1] = "Es la tecnolog&iacute;a que permite la integraci&oacute;n de elementos Java dentro de una aplicaci&oacute;n .NET y viceversa.";
 choices[29][2] = "Facilita el acceso a bases de datos y ficheros XML desde una aplicaci&oacute;n .NET.";
 choices[29][3] = "Es el API de integraci&oacute;n de la red social profesional Linkedin, basado en OAuth.";
 answers[29] = 2;
 units[29] = ['63'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 10176. Examen TIC A1 2014";
 preguntaids[29] = 10176


//  Id pregunta: 1063 Año de creación de pregunta: 2016
 questions[30]= "31)  En el &aacute;mbito del modelo COCOMO, un proyecto de tipo empotrado:";
 choices[30]= new Array();
 choices[30][0] = "Es un proyecto relativamente peque&ntilde;o y sencillo, con poca innovaci&oacute;n tecnol&oacute;gica.";
 choices[30][1] = "Es un proyecto a ser incrustado en dispositivos m&oacute;viles, donde los recursos son escasos.";
 choices[30][2] = "Es un proyecto de nivel intermedio en tama&ntilde;o, complejidad y sofisticaci&oacute;n.";
 choices[30][3] = "Es un proyecto de un tama&ntilde;o y complejidad francamente elevado, donde los requisitos hardware y software son muy r&iacute;gidos.";
 answers[30] = 3;
 units[30] = ['94'];
 blocks[30] = ['B3'];
 comments[30] = "Id Pregunta: 1063. ";
 preguntaids[30] = 1063


//  Id pregunta: 4518 Año de creación de pregunta: 2002
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes respuestas sobre CDDI (o CuDDI o TP-DDI) es falsa?:";
 choices[31]= new Array();
 choices[31][0] = "CDDI tiene toda la tolerancia a fallos y velocidad que la FDDI";
 choices[31][1] = "CDDI usa una especificaci&oacute;n PMD ANSI diferente que la FDDI";
 choices[31][2] = "CDDI tiene la misma limitaci&oacute;n de distancia que la FDDI";
 choices[31][3] = "CDDI usa un cableado m&aacute;s econ&oacute;mico que la FDDI";
 answers[31] = 2;
 units[31] = ['106'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 4518. ";
 preguntaids[31] = 4518


//  Id pregunta: 401 Año de creación de pregunta: 2016
 questions[32]= "33)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[32]= new Array();
 choices[32][0] = "El acoso sexual.";
 choices[32][1] = "El acoso por raz&oacute;n del sexo.";
 choices[32][2] = "Ambas son correctas.";
 choices[32][3] = "A y B son incorrectas.";
 answers[32] = 2;
 units[32] = ['14'];
 blocks[32] = ['A3'];
 comments[32] = "Id Pregunta: 401. Pol&iacute;ticas de igualdad";
 preguntaids[32] = 401


//  Id pregunta: 1038 Año de creación de pregunta: 2016
 questions[33]= "34)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta.";
 choices[33]= new Array();
 choices[33][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano colegiado, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[33][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[33][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[33][3] = "Todas son correctas.";
 answers[33] = 1;
 units[33] = ['4', '7', '8', '9'];
 blocks[33] = ['A1', 'A2'];
 comments[33] = "Id Pregunta: 1038. Ley 40/2015";
 preguntaids[33] = 1038


//  Id pregunta: 3778 Año de creación de pregunta: 2002
 questions[34]= "35)  El esquema formal de clasificaci&oacute;n de proyectos inform&aacute;ticos que propone el PGGC (Plan General de Garant&iacute;a de Calidad), consta de varios elementos fundamentales, identifique - entre los siguientes - el elemento falso:";
 choices[34]= new Array();
 choices[34][0] = "Modelo de referencia";
 choices[34][1] = "Perfil de riesgos";
 choices[34][2] = "Foco de inter&eacute;s";
 choices[34][3] = "Establecimiento de la tipolog&iacute;a";
 answers[34] = 3;
 units[34] = ['93'];
 blocks[34] = ['B3'];
 comments[34] = "Id Pregunta: 3778. ";
 preguntaids[34] = 3778


//  Id pregunta: 3600 Año de creación de pregunta: 2004
 questions[35]= "36)  &iquest;Cu&aacute;l de estos elementos no forma parte de EFQM?";
 choices[35]= new Array();
 choices[35][0] = "Liderazgo";
 choices[35][1] = "Resultados Empresariales";
 choices[35][2] = "Pol&iacute;ticas y estrategias";
 choices[35][3] = "Valor de las acciones";
 answers[35] = 3;
 units[35] = ['98'];
 blocks[35] = ['B3'];
 comments[35] = "Id Pregunta: 3600. ";
 preguntaids[35] = 3600


//  Id pregunta: 456 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[36]= new Array();
 choices[36][0] = "Fue elaborada y aprobada por la CETIC";
 choices[36][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[36][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[36][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[36] = 1;
 units[36] = ['19'];
 blocks[36] = ['A4'];
 comments[36] = "Id Pregunta: 456. Estrategia TIC";
 preguntaids[36] = 456


//  Id pregunta: 6531 Año de creación de pregunta: 2003
 questions[37]= "38)  Indique cu&aacute;l de las siguientes opciones es err&oacute;nea:";
 choices[37]= new Array();
 choices[37][0] = "Un sistema de almacenamiento NAS tiene la ventaja de que no sobrecarga la red";
 choices[37][1] = "En un sistema de almacenamiento DAS se aprovechan los excedentes de los nodos";
 choices[37][2] = "Las siglas SAN hacen referencia a &quot;Storage Area Network&quot;";
 choices[37][3] = "Un dispositivo NAS comparte ficheros, mientras que en una SAN se comparten dispositivos de bloques";
 answers[37] = 0;
 units[37] = ['53'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 6531. ";
 preguntaids[37] = 6531


//  Id pregunta: 771 Año de creación de pregunta: 2016
 questions[38]= "39)  En AJAX, el objeto usado para recibir informaci&oacute;n del servidor web es:";
 choices[38]= new Array();
 choices[38][0] = "XMLRequestObject";
 choices[38][1] = "AJAXRequest";
 choices[38][2] = "JSONRequest";
 choices[38][3] = "XMLHttpRequest";
 answers[38] = 3;
 units[38] = ['74'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 771. AGE A2 2015";
 preguntaids[38] = 771


//  Id pregunta: 473 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[39]= new Array();
 choices[39][0] = "Car&aacute;cter sustitutivo";
 choices[39][1] = "Car&aacute;cter obligatorio";
 choices[39][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[39][3] = "Ninguna de las anteriores";
 answers[39] = 3;
 units[39] = ['19'];
 blocks[39] = ['A4'];
 comments[39] = "Id Pregunta: 473. Estrategia TIC";
 preguntaids[39] = 473


//  Id pregunta: 8357 Año de creación de pregunta: 2011
 questions[40]= "41)  Los dos enfoques m&aacute;s habituales de la virtualizaci&oacute;n de servidores o estaciones de trabajo son:";
 choices[40]= new Array();
 choices[40][0] = "Hospedada y mediante hipervisor (bare metal)";
 choices[40][1] = "Paralela y mediante hipervisor (bare metal)";
 choices[40][2] = "Balanceada y mediante SPM (Service Platform Manager)";
 choices[40][3] = "Mediante hipervisor (bare metal) y mediante supervisor (full metal)";
 answers[40] = 0;
 units[40] = ['124'];
 blocks[40] = ['B4'];
 comments[40] = "Id Pregunta: 8357. Analista Ayto. Madrid 2010";
 preguntaids[40] = 8357


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[41]= new Array();
 choices[41][0] = "El Ministro de Econom&iacute;a.";
 choices[41][1] = "El Gobierno.";
 choices[41][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[41][3] = "El Presidente del Gobierno.";
 answers[41] = 1;
 units[41] = ['11'];
 blocks[41] = ['A2'];
 comments[41] = "Id Pregunta: 288. Presupuestos generales";
 preguntaids[41] = 288


//  Id pregunta: 7337 Año de creación de pregunta: 2010
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta cuando hablamos de la m&eacute;trica de Puntos de Funci&oacute;n?";
 choices[42]= new Array();
 choices[42][0] = "Se usa para estimar el tama&ntilde;o del software que se va a desarrollar";
 choices[42][1] = "Mide la funcionalidad entregada indepedientemente de la tecnologia";
 choices[42][2] = "Ve la aplicaci&oacute;n como una caja negra";
 choices[42][3] = "Fue propuesta por Tom De Marco";
 answers[42] = 3;
 units[42] = ['93'];
 blocks[42] = ['B3'];
 comments[42] = "Id Pregunta: 7337. ";
 preguntaids[42] = 7337


//  Id pregunta: 2817 Año de creación de pregunta: 2002
 questions[43]= "44)  En el proceso de cifrado basado en el m&eacute;todo DES de criptosistema sim&eacute;trico, en el cu&aacute;l existen n nodos de intercambio de mensajes, &iquest;cu&aacute;ntas claves debe gestionar cada uno de los nodos para comunicarse con el resto?:";
 choices[43]= new Array();
 choices[43][0] = "n";
 choices[43][1] = "n + 1";
 choices[43][2] = "n!";
 choices[43][3] = "Ninguna de las anteriores contestaciones es cierta";
 answers[43] = 3;
 units[43] = ['76'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 2817. ";
 preguntaids[43] = 2817


//  Id pregunta: 2510 Año de creación de pregunta: 2004
 questions[44]= "45)  Identifique cu&aacute;l de los siguientes nombres no se corresponde con la denominaci&oacute;n de alguna de las Redes Neuronales de una capa:";
 choices[44]= new Array();
 choices[44][0] = "Perceptron";
 choices[44][1] = "Adaline";
 choices[44][2] = "Art";
 choices[44][3] = "Madaline";
 answers[44] = 2;
 units[44] = ['68'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 2510. Examen TIC MAP B 2004";
 preguntaids[44] = 2510


//  Id pregunta: 233 Año de creación de pregunta: 2016
 questions[45]= "46)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[45]= new Array();
 choices[45][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[45][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[45][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[45][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[45] = 2;
 units[45] = ['7'];
 blocks[45] = ['A2'];
 comments[45] = "Id Pregunta: 233. Ley 39/2015";
 preguntaids[45] = 233


//  Id pregunta: 4613 Año de creación de pregunta: 2002
 questions[46]= "47)  &iquest;Qu&eacute; funci&oacute;n cumple el punto de referencia S en RDSI?:";
 choices[46]= new Array();
 choices[46][0] = "Conexi&oacute;n de un TR1 a un TR2";
 choices[46][1] = "Conexi&oacute;n de un TE1 o un TA a un TR2";
 choices[46][2] = "Conexi&oacute;n de un TE2 a un TR2";
 choices[46][3] = "Conexi&oacute;n de un TE1 a un TE2";
 answers[46] = 1;
 units[46] = ['114'];
 blocks[46] = ['B4'];
 comments[46] = "Id Pregunta: 4613. ";
 preguntaids[46] = 4613


//  Id pregunta: 6646 Año de creación de pregunta: 2009
 questions[47]= "48)  La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica depende de:";
 choices[47]= new Array();
 choices[47][0] = "La Conferencia Sectorial de Administraci&oacute;n P&uacute;blica.";
 choices[47][1] = "La Comisi&oacute;n Permanente del Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 choices[47][2] = "El Director General para el impulso de la Administraci&oacute;n electr&oacute;nica.";
 choices[47][3] = "Presidencia del Gobierno.";
 answers[47] = 0;
 units[47] = ['19'];
 blocks[47] = ['A4'];
 comments[47] = "Id Pregunta: 6646. MAP 2008 A2. Actualizado seg&uacute;n Ley 40/2015";
 preguntaids[47] = 6646


//  Id pregunta: 985 Año de creación de pregunta: 2016
 questions[48]= "49)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[48]= new Array();
 choices[48][0] = "los Subsecretarios y Secretarios generales";
 choices[48][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[48][2] = "los Secretarios de Estado";
 choices[48][3] = "los Subdirectores generales";
 answers[48] = 2;
 units[48] = ['4', '7', '8', '9'];
 blocks[48] = ['A1', 'A2'];
 comments[48] = "Id Pregunta: 985. Ley 40/2015";
 preguntaids[48] = 985


//  Id pregunta: 3618 Año de creación de pregunta: 2002
 questions[49]= "50)  DARTS es el acr&oacute;nimo de:";
 choices[49]= new Array();
 choices[49][0] = "Data Redesign for Transactional Systems.";
 choices[49][1] = "Design Aproach for Real Time Systems.";
 choices[49][2] = "Design Aproach for Real Transactional Systems.";
 choices[49][3] = "No es acr&oacute;nimo de nada.";
 answers[49] = 1;
 units[49] = ['86'];
 blocks[49] = ['B3'];
 comments[49] = "Id Pregunta: 3618. ";
 preguntaids[49] = 3618


//  Id pregunta: 4659 Año de creación de pregunta: 2002
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es una debilidad de las redes inal&aacute;mbricas frente a otro tipo de redes?:";
 choices[50]= new Array();
 choices[50][0] = "Poca seguridad";
 choices[50][1] = "Escasa protecci&oacute;n frente a interferencias";
 choices[50][2] = "Precio elevado";
 choices[50][3] = "Cobertura limitada";
 answers[50] = 2;
 units[50] = ['108'];
 blocks[50] = ['B4'];
 comments[50] = "Id Pregunta: 4659. ";
 preguntaids[50] = 4659


//  Id pregunta: 4576 Año de creación de pregunta: 2002
 questions[51]= "52)  &iquest;Cu&aacute;les de las siguientes afirmaciones corresponde a funciones o caracter&iacute;sticas de equipos puentes (bridges)?:";
 choices[51]= new Array();
 choices[51][0] = "Analizan la direcci&oacute;n destino del MAC (nivel 2 de OSI), pudiendo efectuar funciones de aprendizaje, filtrado y reenv&iacute;o";
 choices[51][1] = "Pueden interconectar redes tipo 802 que usan niveles 1 y 2 de OSI diferentes, pero no son transparentes a los protocolos de niveles superiores";
 choices[51][2] = "Su rendimiento (medido en paquetes/segundo) es menor que el de los equipos encaminadores (routers)";
 choices[51][3] = "Operan a nivel 3 de OSI, por lo que realizan funciones de filtrado, aislando el tr&aacute;fico de los segmentos conectados";
 answers[51] = 0;
 units[51] = ['102'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 4576. ";
 preguntaids[51] = 4576


//  Id pregunta: 886 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes afirmaciones es INCORRECTA cuando nos referimos a la tecnolog&iacute;a NFC?";
 choices[52]= new Array();
 choices[52][0] = "Trabaja en una banda que no requiere licencia para su uso.";
 choices[52][1] = "Es una tecnolog&iacute;a inal&aacute;mbrica.";
 choices[52][2] = "Permite alcances de hasta 10 metros.";
 choices[52][3] = "Su funcionamiento se basa en los campos electromagn&eacute;ticos.";
 answers[52] = 2;
 units[52] = ['108'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 886. AGE A2 2015";
 preguntaids[52] = 886


//  Id pregunta: 8126 Año de creación de pregunta: 2011
 questions[53]= "54)  En el contexto de la seguridad l&oacute;gica, si hablamos de una bomba l&oacute;gica &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?";
 choices[53]= new Array();
 choices[53][0] = "El c&oacute;digo se replica al activarse";
 choices[53][1] = "Su efecto es retardado.";
 choices[53][2] = "No se activan por eventos.";
 choices[53][3] = "Es otra manera de referirse a los troyanos.";
 answers[53] = 1;
 units[53] = ['119'];
 blocks[53] = ['B4'];
 comments[53] = "Id Pregunta: 8126. Examen TIC A2 2010";
 preguntaids[53] = 8126


//  Id pregunta: 4786 Año de creación de pregunta: 2002
 questions[54]= "55)  En el modelo de referencia OSI, en una interfaz t&iacute;pica, la capa N+1 pasa una...... a la capa N, a trav&eacute;s del......:";
 choices[54]= new Array();
 choices[54][0] = "IDU, SAP";
 choices[54][1] = "IDU, ICI";
 choices[54][2] = "PDU, ICI";
 choices[54][3] = "PDU, SAP";
 answers[54] = 0;
 units[54] = ['105'];
 blocks[54] = ['B4'];
 comments[54] = "Id Pregunta: 4786. ";
 preguntaids[54] = 4786


//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[55]= "56)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[55]= new Array();
 choices[55][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[55][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[55][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[55][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[55] = 2;
 units[55] = ['19'];
 blocks[55] = ['A4'];
 comments[55] = "Id Pregunta: 488. Sociedad de la informaci&oacute;n";
 preguntaids[55] = 488


//  Id pregunta: 3829 Año de creación de pregunta: 2002
 questions[56]= "57)  En programaci&oacute;n orientada a objetos, el mecanismo por el cual una clase de objeto puede ser definido como un caso particular de una clase m&aacute;s general se denomina:";
 choices[56]= new Array();
 choices[56][0] = "Herencia";
 choices[56][1] = "Subclase";
 choices[56][2] = "Polimorfismo";
 choices[56][3] = "Encapsulaci&oacute;n";
 answers[56] = 0;
 units[56] = ['85'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 3829. ";
 preguntaids[56] = 3829


//  Id pregunta: 3676 Año de creación de pregunta: 2002
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes no es un instrumento de control contemplado por el Plan General de Garant&iacute;a de Calidad?:";
 choices[57]= new Array();
 choices[57][0] = "Revisiones t&eacute;cnicas formales";
 choices[57][1] = "Guiones de recomendaciones";
 choices[57][2] = "Listas de control";
 choices[57][3] = "Las tres anteriores son instrumentos de control contemplados por el PGGC";
 answers[57] = 0;
 units[57] = ['93'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 3676. ";
 preguntaids[57] = 3676


//  Id pregunta: 1729 Año de creación de pregunta: 2016
 questions[58]= "59)  Se&ntilde;ale qu&eacute; m&oacute;dulo criptogr&aacute;fico debe tener instalado un ordenador para que el usuario pueda utilizar el DNI electr&oacute;nico:";
 choices[58]= new Array();
 choices[58][0] = "No es necesario ning&uacute;n m&oacute;dulo criptogr&aacute;fico.";
 choices[58][1] = "Debe estar instalado &quot;Cryptographic Service Provider&quot; (CSP) o el m&oacute;dulo PKCS#11 indistintamente.";
 choices[58][2] = "En los entornos UNIX / Linux o MAC debe estar instalado el m&oacute;dulo PKCS#11.";
 choices[58][3] = "En un entorno Microsoft Windows debe estar instalado el m&oacute;dulo PKCS#11.";
 answers[58] = 2;
 units[58] = ['76'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 1729. ";
 preguntaids[58] = 1729


//  Id pregunta: 6829 Año de creación de pregunta: 2010
 questions[59]= "60)  Seg&uacute;n el RD 951/2005 de 29 de julio, el marco general para la mejora de la calidad en la AGE incluye entre sus programas:";
 choices[59]= new Array();
 choices[59][0] = "An&aacute;lisis de la demanda y evaluaci&oacute;n de la satisfacci&oacute;n de los proveedores de los servicios p&uacute;blicos.";
 choices[59][1] = "Observatorio de la calidad de los servicios p&uacute;blicos.";
 choices[59][2] = "Quejas y reclamaciones.";
 choices[59][3] = "Evoluci&oacute;n de la calidad de las organizaciones.";
 answers[59] = 1;
 units[59] = ['19'];
 blocks[59] = ['A4'];
 comments[59] = "Id Pregunta: 6829. TIC A 2009";
 preguntaids[59] = 6829


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[60]= "61)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[60]= new Array();
 choices[60][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[60][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[60][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[60][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[60] = 3;
 units[60] = ['7'];
 blocks[60] = ['A2'];
 comments[60] = "Id Pregunta: 227. Ley 39/2015";
 preguntaids[60] = 227


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[61]= "62)  El plan nacional de ciudades inteligentes...";
 choices[61]= new Array();
 choices[61][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[61][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[61][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[61][3] = "No existe";
 answers[61] = 1;
 units[61] = ['19'];
 blocks[61] = ['A4'];
 comments[61] = "Id Pregunta: 453. Ciudades Inteligentes";
 preguntaids[61] = 453


//  Id pregunta: 5236 Año de creación de pregunta: 2006
 questions[62]= "63)  &iquest;Qu&eacute; modulaci&oacute;n usa el chip para PLC de DS2?";
 choices[62]= new Array();
 choices[62][0] = "GSMK";
 choices[62][1] = "DSSS";
 choices[62][2] = "QPSK";
 choices[62][3] = "OFDM";
 answers[62] = 3;
 units[62] = ['108'];
 blocks[62] = ['B4'];
 comments[62] = "Id Pregunta: 5236. ";
 preguntaids[62] = 5236


//  Id pregunta: 1183 Año de creación de pregunta: 2016
 questions[63]= "64)  El nivel m&aacute;ximo de madurez en CMMI es el nivel 5, o nivel:";
 choices[63]= new Array();
 choices[63][0] = "Optimizado.";
 choices[63][1] = "Administrado cuantitativamente.";
 choices[63][2] = "Definido.";
 choices[63][3] = "Productivo.";
 answers[63] = 0;
 units[63] = ['93'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 1183. ";
 preguntaids[63] = 1183


//  Id pregunta: 2756 Año de creación de pregunta: 2002
 questions[64]= "65)  El &iacute;ndice m&aacute;ximo de transporte de datos de un bus PCI es:";
 choices[64]= new Array();
 choices[64][0] = "64 Mbytes/segundo";
 choices[64][1] = "16 Mbytes/segundo";
 choices[64][2] = "132 Mbytes/segundo";
 choices[64][3] = "5 Mbytes/segundo";
 answers[64] = 2;
 units[64] = ['51'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 2756. ";
 preguntaids[64] = 2756


//  Id pregunta: 7471 Año de creación de pregunta: 2010
 questions[65]= "66)  Se&ntilde;ale la CORRECTA:";
 choices[65]= new Array();
 choices[65][0] = "En un criterio a minimizar, el umbral de saciedad ser&aacute; menor o igual al nivel de satisfacci&oacute;n";
 choices[65][1] = "En un criterio a maximizar, el umbral de saciedad ser&aacute; menor o igual al nivel de satisfacci&oacute;n";
 choices[65][2] = "Es obligatorio establecer un umbral de saciedad";
 choices[65][3] = "Todas son INCORRECTAS";
 answers[65] = 0;
 units[65] = ['38'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 7471. ";
 preguntaids[65] = 7471


//  Id pregunta: 7423 Año de creación de pregunta: 2010
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes elementos se puede decir que genuinamente forma parte de la web 2.0?";
 choices[66]= new Array();
 choices[66][0] = "Sindicaci&oacute;n de contenidos";
 choices[66][1] = "Sistemas de administraci&oacute;n de contenidos (CMS)";
 choices[66][2] = "P&aacute;ginas personales";
 choices[66][3] = "Directorios (taxonom&iacute;as)";
 answers[66] = 0;
 units[66] = ['124'];
 blocks[66] = ['B4'];
 comments[66] = "Id Pregunta: 7423. Examen TIC B 2009";
 preguntaids[66] = 7423


//  Id pregunta: 776 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Qu&eacute; es la esteganograf&iacute;a?";
 choices[67]= new Array();
 choices[67][0] = "Es equivalente al cifrado, especialmente en im&aacute;genes digitales, audio, ficheros y video digital.";
 choices[67][1] = "Es un tipo de troyano.";
 choices[67][2] = "Actualmente no se utiliza para el env&iacute;o de informaci&oacute;n.";
 choices[67][3] = "Es el envio de un mensaje oculto, especialmente en im&aacute;genes digitales, audio, ficheros y video digital.";
 answers[67] = 3;
 units[67] = ['76'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 776. AGE A2 2015";
 preguntaids[67] = 776


//  Id pregunta: 6184 Año de creación de pregunta: 2003
 questions[68]= "69)  Las normas internacionales en materia de Seguridad de la informaci&oacute;n las publica:";
 choices[68]= new Array();
 choices[68][0] = "AENOR";
 choices[68][1] = "ISO";
 choices[68][2] = "EIC";
 choices[68][3] = "NIS";
 answers[68] = 1;
 units[68] = ['48'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 6184. Examen TIC A Castilla La Mancha 2007";
 preguntaids[68] = 6184


//  Id pregunta: 642 Año de creación de pregunta: 2016
 questions[69]= "70)  El conjunto de servicios que permite la interoperabilidad de aplicaciones distribuidas en una LAN se conoce como:";
 choices[69]= new Array();
 choices[69][0] = "inyector de dependencia.";
 choices[69][1] = "middleware.";
 choices[69][2] = "framework.";
 choices[69][3] = "controller.";
 answers[69] = 1;
 units[69] = ['49'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 642. AGE A2 2015";
 preguntaids[69] = 642


//  Id pregunta: 7864 Año de creación de pregunta: 2011
 questions[70]= "71)  Las certificaciones ITIL:";
 choices[70]= new Array();
 choices[70][0] = "Se pueden obtener tanto por personas como por organizaciones.";
 choices[70][1] = "S&oacute;lo se pueden obtener por organizaciones y no por personas.";
 choices[70][2] = "S&oacute;lo se pueden obtener por personas y no por organizaciones.";
 choices[70][3] = "No existen certificaciones ITIL.";
 answers[70] = 2;
 units[70] = ['101'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 7864. Examen TIC A1 2010";
 preguntaids[70] = 7864


//  Id pregunta: 3524 Año de creación de pregunta: 2002
 questions[71]= "72)  &iquest;Cu&aacute;l no es una innovaci&oacute;n aplicable al modelo en cascada que permita mejorar algunas de las deficiencias del modelo y aumentar su eficacia?:";
 choices[71]= new Array();
 choices[71][0] = "Utilizaci&oacute;n de herramientas CASE";
 choices[71][1] = "Codificaci&oacute;n y pruebas de los m&oacute;dulos de m&aacute;s bajo nivel en primer lugar";
 choices[71][2] = "Realizaci&oacute;n de fases en paralelo";
 choices[71][3] = "Utilizar t&eacute;cnicas de an&aacute;lisis de riesgos y de coste-beneficio";
 answers[71] = 1;
 units[71] = ['82'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 3524. ";
 preguntaids[71] = 3524


//  Id pregunta: 2185 Año de creación de pregunta: 2002
 questions[72]= "73)  Entre las funciones de un auditor inform&aacute;tico est&aacute;n:";
 choices[72]= new Array();
 choices[72][0] = "Revisi&oacute;n de sistemas bajo desarrollo, instalaciones inform&aacute;ticas y aplicaciones";
 choices[72][1] = "Soporte a auditores no inform&aacute;ticos";
 choices[72][2] = "La a) y la b) son correctas";
 choices[72][3] = "La a) y la b) son incorrectas";
 answers[72] = 2;
 units[72] = ['36', '45'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 2185. ";
 preguntaids[72] = 2185


//  Id pregunta: 4598 Año de creación de pregunta: 2002
 questions[73]= "74)  &iquest;Qu&eacute; afirmaci&oacute;n de las siguientes respecto del funcionamiento de TCP/IP no es cierta?";
 choices[73]= new Array();
 choices[73][0] = "Los routers no mantienen estado de las posibles conexiones extremo a extremo, y a nivel de red no existe el concepto de conexi&oacute;n";
 choices[73][1] = "Los paquetes entre un mismo par &lt;origen, destino&gt;, una vez seleccionada la ruta adecuada, deben seguir la misma ruta hasta el final de la transmisi&oacute;n";
 choices[73][2] = "No se garantiza capacidad m&iacute;nima, ni retardo m&aacute;ximo, ni variaciones acotadas de los retardos";
 choices[73][3] = "No se garantiza la entrega ni el orden de entrega, aunque s&iacute; la integridad del segmento";
 answers[73] = 1;
 units[73] = ['109'];
 blocks[73] = ['B4'];
 comments[73] = "Id Pregunta: 4598. ";
 preguntaids[73] = 4598


//  Id pregunta: 9356 Año de creación de pregunta: 2014
 questions[74]= "75)  Indique la respuesta correcta en relaci&oacute;n al comando SNMP GetBulkRequest:";
 choices[74]= new Array();
 choices[74][0] = "Est&aacute; disponible en todas las versiones de SNMP.";
 choices[74][1] = "Es utilizado por un sistema gestor de red para enviar un mensaje a otro gestor sobre objetos administrados.";
 choices[74][2] = "Es el que permite utilizar autenticaci&oacute;n en SNMP v3.";
 choices[74][3] = "Es utilizado cuando se requiere una cantidad elevada de datos transmitidos.";
 answers[74] = 3;
 units[74] = ['114'];
 blocks[74] = ['B4'];
 comments[74] = "Id Pregunta: 9356. Examen TIC A2 Promoci&oacute;n Interna 2013";
 preguntaids[74] = 9356


