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
//  Id pregunta: 1077 Año de creación de pregunta: 2016
 questions[0]= "1)  La regla de &quot;Actualizaci&oacute;n de Vistas&quot; (Regla 6) de Codd establece que:";
 choices[0]= new Array();
 choices[0][0] = "Todas las vistas actualizadas deben actualizarse tambi&eacute;n en el cat&aacute;logo de datos.";
 choices[0][1] = "Todas las vistas que son te&oacute;ricamente actualizables se pueden actualizar por el sistema.";
 choices[0][2] = "La actualizaci&oacute;n de una vista se realiza manteniendo la integridad del conjunto de informaci&oacute;n del sistema.";
 choices[0][3] = "Todas las vistas que son actualizadas no requieren un cambio en su estructura l&oacute;gica.";
 answers[0] = 1;
 units[0] = ['61'];
 blocks[0] = ['B2'];
 comments[0] = "Id Pregunta: 1077. ";
 preguntaids[0] = 1077


//  Id pregunta: 3269 Año de creación de pregunta: 2003
 questions[1]= "2)  La t&eacute;cnica criptogr&aacute;fica basada en un conjunto de m&eacute;todos que permiten tener comunicaci&oacute;n segura entre las partes, siempre y cuando previamente ambas partes hayan intercambiado una clave privada, se denomina:";
 choices[1]= new Array();
 choices[1][0] = "Criptograf&iacute;a asim&eacute;trica.";
 choices[1][1] = "Criptograf&iacute;a sim&eacute;trica.";
 choices[1][2] = "Criptograf&iacute;a de clave p&uacute;blica.";
 choices[1][3] = "Criptograf&iacute;a paralela.";
 answers[1] = 1;
 units[1] = ['76'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 3269. Junta Andaluc&iacute;a";
 preguntaids[1] = 3269


//  Id pregunta: 5826 Año de creación de pregunta: 2007
 questions[2]= "3)  &iquest;Qu&eacute; no es un objetivo de un Sistema de Informaci&oacute;n?";
 choices[2]= new Array();
 choices[2][0] = "Automatizaci&oacute;n de procesos operativos";
 choices[2][1] = "Proporcionar informaci&oacute;n que sirva de apoyo al proceso de toma de decisiones.";
 choices[2][2] = "Lograr ventajas competitivas en su adquisici&oacute;n";
 choices[2][3] = "Minimizar el costo de adquisici&oacute;n, procesamiento y uso de la informaci&oacute;n";
 answers[2] = 2;
 units[2] = ['24'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 5826. Examen 2006 JCYL";
 preguntaids[2] = 5826


//  Id pregunta: 3897 Año de creación de pregunta: 2002
 questions[3]= "4)  El proceso de reconocimiento de la palabra presenta cuatro fases. &iquest;Cu&aacute;l de las siguientes no es una de ellas?:";
 choices[3]= new Array();
 choices[3][0] = "Comparaci&oacute;n";
 choices[3][1] = "Detecci&oacute;n de bordes";
 choices[3][2] = "Reconstrucci&oacute;n";
 choices[3][3] = "Normalizaci&oacute;n en el tiempo";
 answers[3] = 2;
 units[3] = ['81'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 3897. ";
 preguntaids[3] = 3897


//  Id pregunta: 4883 Año de creación de pregunta: 2002
 questions[4]= "5)  La f&oacute;rmula de Little es:";
 choices[4]= new Array();
 choices[4][0] = "El producto del n&uacute;mero de usuarios por su tiempo en el sistema";
 choices[4][1] = "El producto de tiempo medio de servicio y n&uacute;mero de usuarios que llegan al sistema";
 choices[4][2] = "El producto de tiempo medio de espera y n&uacute;mero de usuarios que llegan al sistema por unidad de tiempo";
 choices[4][3] = "Ninguna de las anteriores es v&aacute;lida";
 answers[4] = 2;
 units[4] = ['30'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 4883. ";
 preguntaids[4] = 4883


//  Id pregunta: 8517 Año de creación de pregunta: 2011
 questions[5]= "6)  Sistema de Grid Computing";
 choices[5]= new Array();
 choices[5][0] = "Globus Toolkit";
 choices[5][1] = "Nimbus";
 choices[5][2] = "Eucaliptus";
 choices[5][3] = "Gluster";
 answers[5] = 0;
 units[5] = ['49'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 8517. ";
 preguntaids[5] = 8517


//  Id pregunta: 9905 Año de creación de pregunta: 2015
 questions[6]= "7)  Seg&uacute;n la Ley 39/2015, cual de las siguientes no se establece como informaci&oacute;n necesaria en los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[6]= new Array();
 choices[6][0] = "Fecha de inscripci&oacute;n.";
 choices[6][1] = "Per&iacute;odo de tiempo por el cual se otorga el poder.";
 choices[6][2] = "Lugar de inscripci&oacute;n.";
 choices[6][3] = "Tipo de poder seg&uacute;n las facultades que otorgue.";
 answers[6] = 2;
 units[6] = ['7', '19'];
 blocks[6] = ['A2', 'A4'];
 comments[6] = "Id Pregunta: 9905. ";
 preguntaids[6] = 9905


//  Id pregunta: 4496 Año de creación de pregunta: 2002
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones, relacionadas con el modelo OSI, es falsa?";
 choices[7]= new Array();
 choices[7][0] = "Un SAP es un recurso a trav&eacute;s del cual una entidad de nivel N+1 accede a los servicios de nivel N";
 choices[7][1] = "Una entidad N+1 s&oacute;lo puede estar conectada a un SAP";
 choices[7][2] = "Las entidades conectadas a trav&eacute;s de un SAP deben residir en el mismo subsistema";
 choices[7][3] = "Una direcci&oacute;n de SAP identifica a un &uacute;nico SAP";
 answers[7] = 1;
 units[7] = ['105'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 4496. ";
 preguntaids[7] = 4496


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[8]= "9)  La Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, recoge que deber&aacute;n elaborar y aplicar un plan de igualdad, aquellas empresas con m&aacute;s de:";
 choices[8]= new Array();
 choices[8][0] = "150 trabajadores/as.";
 choices[8][1] = "200 trabajadores/as.";
 choices[8][2] = "250 trabajadores/as.";
 choices[8][3] = "300 trabajadores/as.";
 answers[8] = 2;
 units[8] = ['14'];
 blocks[8] = ['A3'];
 comments[8] = "Id Pregunta: 400. Pol&iacute;ticas de igualdad";
 preguntaids[8] = 400


//  Id pregunta: 4128 Año de creación de pregunta: 2003
 questions[9]= "10)  Los servicios de informaci&oacute;n electr&oacute;nica que contienen referencias, algunas veces con extractos, de informaci&oacute;n no publicada, se denominan:";
 choices[9]= new Array();
 choices[9][0] = "Num&eacute;ricos.";
 choices[9][1] = "Directorios.";
 choices[9][2] = "Agendas.";
 choices[9][3] = "Bibliogr&aacute;ficos.";
 answers[9] = 1;
 units[9] = ['81'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 4128. ";
 preguntaids[9] = 4128


//  Id pregunta: 9886 Año de creación de pregunta: 2015
 questions[10]= "11)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece la obligatoriedad de relaci&oacute;n con las AAPP a trav&eacute;s de medios electr&oacute;nicos para:";
 choices[10]= new Array();
 choices[10][0] = "Personas f&iacute;sicas.";
 choices[10][1] = "Personas jur&iacute;dicas.";
 choices[10][2] = "Personas f&iacute;sicas y jur&iacute;dicas.";
 choices[10][3] = "Ninguna de las anteriores.";
 answers[10] = 1;
 units[10] = ['7', '19'];
 blocks[10] = ['A2', 'A4'];
 comments[10] = "Id Pregunta: 9886. ";
 preguntaids[10] = 9886


//  Id pregunta: 1710 Año de creación de pregunta: 2016
 questions[11]= "12)  Conforme al patr&oacute;n de dise&ntilde;o de aplicaciones MVC (Modelo-Vista-Controlador), se&ntilde;ale en qu&eacute; m&oacute;dulo/s se representa el acceso a los datos de las aplicaciones:";
 choices[11]= new Array();
 choices[11][0] = "Modelo.";
 choices[11][1] = "Vista.";
 choices[11][2] = "Controlador.";
 choices[11][3] = "Modelo y Controlador.";
 answers[11] = 0;
 units[11] = ['89'];
 blocks[11] = ['B3'];
 comments[11] = "Id Pregunta: 1710. ";
 preguntaids[11] = 1710


//  Id pregunta: 9582 Año de creación de pregunta: 2014
 questions[12]= "13)  En SNMP &iquest;qu&eacute; puerto utilizan las traps y en qu&eacute; sentido se transmiten?";
 choices[12]= new Array();
 choices[12][0] = "Puerto 162 y las env&iacute;a el agente al gestor.";
 choices[12][1] = "Puerto 162 y las env&iacute;a el gestor al agente.";
 choices[12][2] = "Puerto 161 y las env&iacute;a el agente al gestor.";
 choices[12][3] = "Puerto 161 y las env&iacute;a el gestor al agente.";
 answers[12] = 0;
 units[12] = ['114'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 9582. TIC A2 2013 libre";
 preguntaids[12] = 9582


//  Id pregunta: 8193 Año de creación de pregunta: 2011
 questions[13]= "14)  &iquest;Qu&eacute; es el World Wide Name (WWN)?";
 choices[13]= new Array();
 choices[13][0] = "Un identificador &uacute;nico de 8 byles en una red de almacenamiento";
 choices[13][1] = "Uno de los servidores DNS ra&iacute;z";
 choices[13][2] = "Un nuevo dominio de Internet basado en IPv6 que va a sustituir los actuales dominios basados en IPv4.";
 choices[13][3] = "Un protocolo que permite identificar un equipo y sus recursos con independencia del tipo de red y sistema operativo";
 answers[13] = 0;
 units[13] = ['53'];
 blocks[13] = ['B2'];
 comments[13] = "Id Pregunta: 8193. Examen TIC A2 2010 interna";
 preguntaids[13] = 8193


//  Id pregunta: 3967 Año de creación de pregunta: 2002
 questions[14]= "15)  Si se usa la t&eacute;cnica McCabe se puede valorar:";
 choices[14]= new Array();
 choices[14][0] = "Las aristas de un grafo";
 choices[14][1] = "El n&uacute;mero de regiones cerradas de un grafo";
 choices[14][2] = "Los nodos desconectados de un grafo";
 choices[14][3] = "No tiene ninguna relaci&oacute;n con grafos";
 answers[14] = 1;
 units[14] = ['93'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 3967. ";
 preguntaids[14] = 3967


//  Id pregunta: 3217 Año de creación de pregunta: 2003
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es propia de un sistema de almacenamiento de datos Data-warehouse?:";
 choices[15]= new Array();
 choices[15][0] = "Almacenamiento de datos hist&oacute;ricos.";
 choices[15][1] = "Alta volatilidad de los datos.";
 choices[15][2] = "Organizaci&oacute;n tem&aacute;tica de los datos.";
 choices[15][3] = "Integraci&oacute;n del formato de los datos.";
 answers[15] = 1;
 units[15] = ['72'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 3217. Junta Andaluc&iacute;a";
 preguntaids[15] = 3217


//  Id pregunta: 7406 Año de creación de pregunta: 2010
 questions[16]= "17)  El Centro Criptol&oacute;gico Nacional (CCN) es el organismo responsable de velar por la seguridad de las TIC en las administraciones p&uacute;blicas, y de formar en este campo a sus profesionales. El CCN depende de:";
 choices[16]= new Array();
 choices[16][0] = "El Consejo Superior para la Administraci&oacute;n Electr&oacute;nica (Ministerio de la Presidencia)";
 choices[16][1] = "La F&aacute;brica Nacional de Moneda y Timbre (Ministerio de Econom&iacute;a y Hacienda)";
 choices[16][2] = "La Direcci&oacute;n General de la Polic&iacute;a y la Guardia Civil (Ministerio del Interior)";
 choices[16][3] = "El Centro Nacional de Inteligencia (Ministerio de Defensa)";
 answers[16] = 3;
 units[16] = ['120'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 7406. Examen TIC B 2009";
 preguntaids[16] = 7406


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[17]= "18)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[17]= new Array();
 choices[17][0] = "Proveer de manera compartida servicios comunes";
 choices[17][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[17][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[17][3] = "Transparencia";
 answers[17] = 1;
 units[17] = ['28'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 548. Estrategia TIC";
 preguntaids[17] = 548


//  Id pregunta: 446 Año de creación de pregunta: 2016
 questions[18]= "19)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[18]= new Array();
 choices[18][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[18][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[18][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[18][3] = "Todos los anteriores";
 answers[18] = 3;
 units[18] = ['19'];
 blocks[18] = ['A4'];
 comments[18] = "Id Pregunta: 446. Agenda Digital";
 preguntaids[18] = 446


//  Id pregunta: 8269 Año de creación de pregunta: 2011
 questions[19]= "20)  Dentro del contexto que marca la Ley 39/2015, un expediente electr&oacute;nico es:";
 choices[19]= new Array();
 choices[19][0] = "La copia electr&oacute;nica de un expediente en papel, que es el que conservar&aacute; la eficacia jur&iacute;dica, foliado mediante un &Iacute;ndice electr&oacute;nico y firmado electr&oacute;nicamente";
 choices[19][1] = "El conjunto de documentos electr&oacute;nicos correspondientes a alguno de los procedimientos administrativos incluidos en la normativa de creaci&oacute;n de la sede electr&oacute;nica";
 choices[19][2] = "El conjunto de documentos electr&oacute;nicos correspondientes a un procedimiento administrativo, cualquiera que sea el tipo de informaci&oacute;n que contengan";
 choices[19][3] = "Una aplicaci&oacute;n inform&aacute;tica para la gesti&oacute;n automatizada de expedientes en el &aacute;mbito de la Administraci&oacute;n General del Estado.";
 answers[19] = 2;
 units[19] = ['7'];
 blocks[19] = ['A2'];
 comments[19] = "Id Pregunta: 8269. Examen TIC A2 2010 interna";
 preguntaids[19] = 8269


//  Id pregunta: 344 Año de creación de pregunta: 2016
 questions[20]= "21)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[20]= new Array();
 choices[20][0] = "Alrededor de un 26% del PIB";
 choices[20][1] = "Alrededor de un 11% del PIB";
 choices[20][2] = "Alrededor de un 34% del PIB";
 choices[20][3] = "Alrededor de un 7% del PIB";
 answers[20] = 1;
 units[20] = ['12'];
 blocks[20] = ['A3'];
 comments[20] = "Id Pregunta: 344. Modelo econ&oacute;mico";
 preguntaids[20] = 344


//  Id pregunta: 459 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[21]= new Array();
 choices[21][0] = "El 5 de Octubre de 2015";
 choices[21][1] = "El 15 de Octubre de 2015";
 choices[21][2] = "El 15 de Septiembre de 2015";
 choices[21][3] = "El 2 de Octubre de 2015";
 answers[21] = 2;
 units[21] = ['19'];
 blocks[21] = ['A4'];
 comments[21] = "Id Pregunta: 459. Estrategia TIC";
 preguntaids[21] = 459


//  Id pregunta: 6189 Año de creación de pregunta: 2003
 questions[22]= "23)  Si examinamos el modelo relacional dentro del marco de la arquitectura ANSI, podemos afirmar que:";
 choices[22]= new Array();
 choices[22][0] = "El modelo relacional no especifica nada respecto al esquema interno.";
 choices[22][1] = "En el nivel externo se encuentran las relaciones base, tambi&eacute;n denominadas tablas reales.";
 choices[22][2] = "En el nivel conceptual se encuentran las vistas.";
 choices[22][3] = "El modelo relacional define los tres niveles de la arquitectura ANSI.";
 answers[22] = 0;
 units[22] = ['60'];
 blocks[22] = ['B2'];
 comments[22] = "Id Pregunta: 6189. Examen TIC A Castilla La Mancha 2007";
 preguntaids[22] = 6189


//  Id pregunta: 8240 Año de creación de pregunta: 2011
 questions[23]= "24)  &iquest;Cu&aacute;l de las siguientes es una nueva entidad funcional introducida por IP M&oacute;vil (RFC 3344)?";
 choices[23]= new Array();
 choices[23][0] = "Home Agent.";
 choices[23][1] = "Agent Advertisement.";
 choices[23][2] = "Mobility Agent.";
 choices[23][3] = "Agent Discovery.";
 answers[23] = 0;
 units[23] = ['107'];
 blocks[23] = ['B4'];
 comments[23] = "Id Pregunta: 8240. Examen UPM A2 2011";
 preguntaids[23] = 8240


//  Id pregunta: 8039 Año de creación de pregunta: 2011
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos NO es una t&eacute;cnica empleada en Miner&iacute;a de Datos?";
 choices[24]= new Array();
 choices[24][0] = "Las redes neuronales.";
 choices[24][1] = "Look and Find.";
 choices[24][2] = "Los &aacute;rboles de decisi&oacute;n.";
 choices[24][3] = "Las redes bayesianas.";
 answers[24] = 1;
 units[24] = ['68', '72'];
 blocks[24] = ['B2'];
 comments[24] = "Id Pregunta: 8039. Examen TIC A2 2010";
 preguntaids[24] = 8039


//  Id pregunta: 4516 Año de creación de pregunta: 2002
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes respuestas no describe las funciones de un repetidor?:";
 choices[25]= new Array();
 choices[25][0] = "Recibe, amplifica y retransmite las se&ntilde;ales recibidas";
 choices[25][1] = "Interconecta m&uacute;ltiples segmentos de LAN";
 choices[25][2] = "Previene del deterioro de la se&ntilde;al causado por las largas longitudes del cable";
 choices[25][3] = "Filtra el tr&aacute;fico basado en las direcciones MAC";
 answers[25] = 3;
 units[25] = ['104'];
 blocks[25] = ['B4'];
 comments[25] = "Id Pregunta: 4516. ";
 preguntaids[25] = 4516


//  Id pregunta: 7766 Año de creación de pregunta: 2010
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes NO es una herramienta TAW (Test de Accesibilidad Web)?";
 choices[26]= new Array();
 choices[26][0] = "TAW3 Online.";
 choices[26][1] = "TAW3 Web Start.";
 choices[26][2] = "TAW3 Onsite.";
 choices[26][3] = "TAW3 en un clic.";
 answers[26] = 2;
 units[26] = ['42'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 7766. ";
 preguntaids[26] = 7766


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[27]= "28)  En el contexto de las bases de datos que siguen el modelo relacional, una superclave es:";
 choices[27]= new Array();
 choices[27][0] = "Una clave candidata m&iacute;nima, es decir, una clave candidata formada por un solo atributo.";
 choices[27][1] = "Una clave candidata siempre.";
 choices[27][2] = "Una clave primaria combinada con un identificador &uacute;nico generado por el gestor de base de datos, con el fin de reforzar la integridad y seguridad de la informaci&oacute;n.";
 choices[27][3] = "Un atributo o conjunto de atributos que permite identificar de forma &uacute;nica una fila en una tabla.";
 answers[27] = 3;
 units[27] = ['61'];
 blocks[27] = ['B2'];
 comments[27] = "Id Pregunta: 692. AGE A2 2015";
 preguntaids[27] = 692


//  Id pregunta: 8853 Año de creación de pregunta: 2013
 questions[28]= "29)  &iquest;Cu&aacute;l es el prop&oacute;sito fundamental de una Oficina de Gesti&oacute;n de Proyectos (PMO)?";
 choices[28]= new Array();
 choices[28][0] = "Gestionar de forma centralizada los proyectos TIC en la organizaci&oacute;n";
 choices[28][1] = "Orientar al CIO en la identificaci&oacute;n y definici&oacute;n de futuros proyectos TIC";
 choices[28][2] = "Definir y mantener est&aacute;ndares de gesti&oacute;n de proyectos TIC en la organizaci&oacute;n";
 choices[28][3] = "Llevar la gesti&oacute;n de los proveedores externos";
 answers[28] = 2;
 units[28] = ['30'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 8853. ";
 preguntaids[28] = 8853


//  Id pregunta: 5583 Año de creación de pregunta: 2007
 questions[29]= "30)  El estandar IEEE 802.12 (100VG AnyLAN):";
 choices[29]= new Array();
 choices[29][0] = "Utiliza un m&eacute;todo de acceso de detecci&oacute;n de colisi&oacute;n.";
 choices[29][1] = "Utiliza un m&eacute;todo de acceso de prioridad de demanda.";
 choices[29][2] = "Utiliza un m&eacute;todo de acceso de impedimento de colisi&oacute;n.";
 choices[29][3] = "Utiliza un m&eacute;todo de acceso de paso de testigo.";
 answers[29] = 1;
 units[29] = ['108'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 5583. ";
 preguntaids[29] = 5583


//  Id pregunta: 9652 Año de creación de pregunta: 2014
 questions[30]= "31)  En una base de datos Oracle, &iquest;cu&aacute;l de las siguientes sentencias no est&aacute; relacionada con la asignaci&oacute;n de permisos a usuarios?";
 choices[30]= new Array();
 choices[30][0] = "CREATE VIEW.";
 choices[30][1] = "GRANT.";
 choices[30][2] = "CREATE PROFILE.";
 choices[30][3] = "CREATE ROLE.";
 answers[30] = 0;
 units[30] = ['61'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 9652. Examen TIC A1 2013";
 preguntaids[30] = 9652


//  Id pregunta: 10234 Año de creación de pregunta: 2015
 questions[31]= "32)  &iquest;Qu&eacute; Base de Datos NO est&aacute; disponible para Linux?";
 choices[31]= new Array();
 choices[31][0] = "Oracle";
 choices[31][1] = "SQL Server";
 choices[31][2] = "PostgreSQL";
 choices[31][3] = "MySQL";
 answers[31] = 1;
 units[31] = ['61'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 10234. SQL Server es la soluci&oacute;n de Microsoft";
 preguntaids[31] = 10234


//  Id pregunta: 4525 Año de creación de pregunta: 2002
 questions[32]= "33)  Dentro del modelo OSI la funci&oacute;n de 'manejo de distintos terminales', corresponde al nivel:";
 choices[32]= new Array();
 choices[32][0] = "Nivel de red";
 choices[32][1] = "Nivel de transporte";
 choices[32][2] = "Nivel de sesi&oacute;n";
 choices[32][3] = "Nivel de presentaci&oacute;n";
 answers[32] = 3;
 units[32] = ['105'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 4525. ";
 preguntaids[32] = 4525


//  Id pregunta: 8433 Año de creación de pregunta: 2011
 questions[33]= "34)  Los certificados de sello electr&oacute;nico contemplados en la ley 18/2011 tendr&aacute;n al menos:";
 choices[33]= new Array();
 choices[33][0] = "N&uacute;mero de identificaci&oacute;n fiscal del suscriptor";
 choices[33][1] = "Actuaciones y documentos en los que podr&aacute;n ser utilizados";
 choices[33][2] = "N&uacute;mero de identificaci&oacute;n judicial";
 choices[33][3] = "Ninguno de los anteriores";
 answers[33] = 2;
 units[33] = ['2'];
 blocks[33] = ['A1'];
 comments[33] = "Id Pregunta: 8433. ";
 preguntaids[33] = 8433


//  Id pregunta: 6593 Año de creación de pregunta: 2009
 questions[34]= "35)  El XSLT transforma:";
 choices[34]= new Array();
 choices[34][0] = "S&oacute;lo de XML a XML";
 choices[34][1] = "De XML a otro documento";
 choices[34][2] = "S&oacute;lo de XML a HTML";
 choices[34][3] = "De un documento a XML";
 answers[34] = 1;
 units[34] = ['74'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 6593. MAP 2008 A1";
 preguntaids[34] = 6593


//  Id pregunta: 10399 Año de creación de pregunta: 2015
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital Espa&ntilde;ola?";
 choices[35]= new Array();
 choices[35][0] = "Confianza Digital";
 choices[35][1] = "Econom&iacute;a Digital e Internacionalizaci&oacute;n";
 choices[35][2] = "Impulsar i+d TIC";
 choices[35][3] = "Impulso de los servicios p&uacute;blicos digitales";
 answers[35] = 3;
 units[35] = ['19'];
 blocks[35] = ['A4'];
 comments[35] = "Id Pregunta: 10399. ";
 preguntaids[35] = 10399


//  Id pregunta: 10229 Año de creación de pregunta: 2015
 questions[36]= "37)  &iquest;Durante qu&eacute; procesos del desarrollo del Sistema de Informaci&oacute;n se realiza la modelizaci&oacute;n de los datos?";
 choices[36]= new Array();
 choices[36][0] = "Durante el an&aacute;lisis";
 choices[36][1] = "Durante el dise&ntilde;o";
 choices[36][2] = "Durante el an&aacute;lisis y durante el dise&ntilde;o";
 choices[36][3] = "No se utiliza la modelizaci&oacute;n de datos en el proceso de desarrollo del SI";
 answers[36] = 2;
 units[36] = ['60'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 10229. ";
 preguntaids[36] = 10229


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[37]= "38)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[37]= new Array();
 choices[37][0] = "Un Reglamento.";
 choices[37][1] = "Un Decreto.";
 choices[37][2] = "Una Ley.";
 choices[37][3] = "Un Real-Decreto.";
 answers[37] = 2;
 units[37] = ['5'];
 blocks[37] = ['A1'];
 comments[37] = "Id Pregunta: 190. Uni&oacute;n Europea";
 preguntaids[37] = 190


//  Id pregunta: 5801 Año de creación de pregunta: 2007
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes no es un servicio ofrecido por el DNI electronico?";
 choices[38]= new Array();
 choices[38][0] = "Firma electronica de documentos";
 choices[38][1] = "Identificacion en medios telematicos";
 choices[38][2] = "Acreditar la identidad fisica";
 choices[38][3] = "Tarjeta sanitaria electronica";
 answers[38] = 3;
 units[38] = ['77'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 5801. RD 1553/2005, art&iacute;culo 1";
 preguntaids[38] = 5801


//  Id pregunta: 4984 Año de creación de pregunta: 2002
 questions[39]= "40)  Los est&aacute;ndares publicados por la IAB (Internet Activities Board) se denominan RFCs que son las siglas de:";
 choices[39]= new Array();
 choices[39][0] = "Recommendation File Contents";
 choices[39][1] = "Requisite File Coordination";
 choices[39][2] = "Request For Comments";
 choices[39][3] = "Register Full Condition";
 answers[39] = 2;
 units[39] = ['103'];
 blocks[39] = ['B4'];
 comments[39] = "Id Pregunta: 4984. ";
 preguntaids[39] = 4984


//  Id pregunta: 6771 Año de creación de pregunta: 2009
 questions[40]= "41)  &iquest;Cu&aacute;l no es una caracter&iacute;stica de la Red SARA?";
 choices[40]= new Array();
 choices[40][0] = "Fiabilidad, porque dispone de un Centro de Soporte 24 x 7";
 choices[40][1] = "Seguridad, fundamentalmente por el establecimiento de VPNs";
 choices[40][2] = "Calidad de Servicio (QoS) (porque se basa en tecnolog&iacute;a VPLS)";
 choices[40][3] = "Flexibilidad, proporcionada por una pol&iacute;tica de gesti&oacute;n descentralizada";
 answers[40] = 3;
 units[40] = ['47'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 6771. ";
 preguntaids[40] = 6771


//  Id pregunta: 8077 Año de creación de pregunta: 2011
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no se considera una mejora de IPv6 respecto a IPv4?";
 choices[41]= new Array();
 choices[41][0] = "Capacidad extendida del direccionamiento";
 choices[41][1] = "Seguridad de nivel de aplicaci&oacute;n obligatoria";
 choices[41][2] = "Movilidad";
 choices[41][3] = "Multicast";
 answers[41] = 1;
 units[41] = ['109'];
 blocks[41] = ['B4'];
 comments[41] = "Id Pregunta: 8077. ";
 preguntaids[41] = 8077


//  Id pregunta: 2555 Año de creación de pregunta: 2002
 questions[42]= "43)  La Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico establece:";
 choices[42]= new Array();
 choices[42][0] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las mismas";
 choices[42][1] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico";
 choices[42][2] = "Las comunicaciones comerciales realizadas por correo electr&oacute;nico incluir&aacute;n al comienzo del mensaje la palabra &quot;publicidad&quot;";
 choices[42][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[42] = 0;
 units[42] = ['19'];
 blocks[42] = ['A4'];
 comments[42] = "Id Pregunta: 2555. ";
 preguntaids[42] = 2555


//  Id pregunta: 756 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[43]= new Array();
 choices[43][0] = "NoSQL";
 choices[43][1] = "Sistemas de baja latencia";
 choices[43][2] = "MapReduce";
 choices[43][3] = "Business Intelligence";
 answers[43] = 1;
 units[43] = ['73'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 756. Big Data y NoSQL";
 preguntaids[43] = 756


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[44]= new Array();
 choices[44][0] = "Tres meses.";
 choices[44][1] = "Nueve meses.";
 choices[44][2] = "Cuatro meses.";
 choices[44][3] = "Seis meses.";
 answers[44] = 0;
 units[44] = ['11'];
 blocks[44] = ['A2'];
 comments[44] = "Id Pregunta: 285. Presupuestos generales";
 preguntaids[44] = 285


//  Id pregunta: 998 Año de creación de pregunta: 2016
 questions[45]= "46)  La Administraci&oacute;n General del Estado se organiza:";
 choices[45]= new Array();
 choices[45][0] = "en Ministerios";
 choices[45][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[45][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[45][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[45] = 1;
 units[45] = ['4', '7', '8', '9'];
 blocks[45] = ['A1', 'A2'];
 comments[45] = "Id Pregunta: 998. Ley 40/2015";
 preguntaids[45] = 998


//  Id pregunta: 5577 Año de creación de pregunta: 2007
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica de selecci&oacute;n de inversiones?";
 choices[46]= new Array();
 choices[46][0] = "El m&eacute;todo del Payback.";
 choices[46][1] = "El m&eacute;todo del retorno de la inversi&oacute;n.";
 choices[46][2] = "El m&eacute;todo del Valor Actual Neto.";
 choices[46][3] = "El m&eacute;todo del Indicador Alternativo de Variabilidad del Precio de Mercado.";
 answers[46] = 3;
 units[46] = ['40'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 5577. Examen TIC MAP B 2006";
 preguntaids[46] = 5577


//  Id pregunta: 1044 Año de creación de pregunta: 2016
 questions[47]= "48)  Se&ntilde;ale la respuesta correcta:";
 choices[47]= new Array();
 choices[47][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[47][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[47][2] = "A y B son correctas.";
 choices[47][3] = "A y B son falsas.";
 answers[47] = 2;
 units[47] = ['4', '7', '8', '9'];
 blocks[47] = ['A1', 'A2'];
 comments[47] = "Id Pregunta: 1044. Ley 40/2015";
 preguntaids[47] = 1044


//  Id pregunta: 926 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes NO es un m&eacute;todo v&aacute;lido de petici&oacute;n SIP seg&uacute;n la especificaci&oacute;n RFC 3261?";
 choices[48]= new Array();
 choices[48][0] = "PUSH";
 choices[48][1] = "OPTIONS";
 choices[48][2] = "INVITE";
 choices[48][3] = "REGISTER";
 answers[48] = 0;
 units[48] = ['122'];
 blocks[48] = ['B4'];
 comments[48] = "Id Pregunta: 926. AGE A2 2015";
 preguntaids[48] = 926


//  Id pregunta: 7483 Año de creación de pregunta: 2010
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de un sistema DRM?";
 choices[49]= new Array();
 choices[49][0] = "Impide la descarga de contenido protegido.";
 choices[49][1] = "Impide la copia de contenido protegido.";
 choices[49][2] = "Garantiza la no modificaci&oacute;n del contenido protegido.";
 choices[49][3] = "Garantiza el proceso de pago entre comprador y vendedor.";
 answers[49] = 0;
 units[49] = ['41'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 7483. Map 2005";
 preguntaids[49] = 7483


//  Id pregunta: 290 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[50]= new Array();
 choices[50][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[50][1] = "Auditor&iacute;a operativa.";
 choices[50][2] = "Auditor&iacute;a de cumplimiento.";
 choices[50][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[50] = 2;
 units[50] = ['11'];
 blocks[50] = ['A2'];
 comments[50] = "Id Pregunta: 290. Presupuestos generales";
 preguntaids[50] = 290


//  Id pregunta: 2763 Año de creación de pregunta: 2002
 questions[51]= "52)  Entrust:";
 choices[51]= new Array();
 choices[51][0] = "Un algoritmo criptogr&aacute;fico";
 choices[51][1] = "Un mecanismo de intercambio de claves";
 choices[51][2] = "Una infraestructura de clave p&uacute;blica (PKI)";
 choices[51][3] = "Una funcion resumen";
 answers[51] = 2;
 units[51] = ['77'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 2763. ";
 preguntaids[51] = 2763


//  Id pregunta: 2475 Año de creación de pregunta: 2009
 questions[52]= "53)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, se deber&aacute;n retener los datos de conexi&oacute;n y tr&aacute;fico por un periodo m&aacute;ximo de:";
 choices[52]= new Array();
 choices[52][0] = "3 meses";
 choices[52][1] = "6 meses";
 choices[52][2] = "12 meses";
 choices[52][3] = "2 a&ntilde;os";
 answers[52] = 3;
 units[52] = ['19'];
 blocks[52] = ['A4'];
 comments[52] = "Id Pregunta: 2475. ";
 preguntaids[52] = 2475


//  Id pregunta: 10945 Año de creación de pregunta: 2015
 questions[53]= "54)  &iquest;C&oacute;mo se llama la plataforma de contrataci&oacute;n de la Administraci&oacute;n General del Estado?";
 choices[53]= new Array();
 choices[53][0] = "Conecta-Patrimonio";
 choices[53][1] = "Conecta-Centralizaci&oacute;n";
 choices[53][2] = "Plataforma-Centraliza";
 choices[53][3] = "Centralizacion-ofertas";
 answers[53] = 1;
 units[53] = ['37'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 10945. ";
 preguntaids[53] = 10945


//  Id pregunta: 3458 Año de creación de pregunta: 2006
 questions[54]= "55)  Las aplicaciones fundamentales de la criptograf&iacute;a asim&eacute;trica son:";
 choices[54]= new Array();
 choices[54][0] = "El cifrado eficiente y la firma digital";
 choices[54][1] = "El intercambio seguro de claves privadas o de sesi&oacute;n y la firma digital";
 choices[54][2] = "El intercambio seguro de claves privadas o de sesi&oacute;n y el cifrado eficiente";
 choices[54][3] = "Todas las anteriores";
 answers[54] = 1;
 units[54] = ['76'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 3458. ";
 preguntaids[54] = 3458


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[55]= "56)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[55]= new Array();
 choices[55][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[55][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[55][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[55][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[55] = 2;
 units[55] = ['22'];
 blocks[55] = ['A4'];
 comments[55] = "Id Pregunta: 505. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[55] = 505


//  Id pregunta: 4144 Año de creación de pregunta: 2003
 questions[56]= "57)  Un sistema de gesti&oacute;n de contenidos intenta mejorar una situaci&oacute;n previa en la que:";
 choices[56]= new Array();
 choices[56][0] = "Hay un buscador no eficiente. Los &iacute;ndices no est&aacute;n suficientemente actualizados y en algunos servidores ni siquiera se dispone de la posibilidad de b&uacute;squeda.";
 choices[56][1] = "Aunque escasean los expertos inform&aacute;ticos los procesos de edici&oacute;n, validaci&oacute;n y actualizaci&oacute;n son &aacute;giles.";
 choices[56][2] = "Varios servidores web integrados dentro del portal corporativo est&aacute;n en la misma m&aacute;quina pero con URL diferentes.";
 choices[56][3] = "Contenidos personalizados en funci&oacute;n de distintos perfiles o intereses de los usuarios.";
 answers[56] = 0;
 units[56] = ['99'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 4144. ";
 preguntaids[56] = 4144


//  Id pregunta: 10749 Año de creación de pregunta: 2015
 questions[57]= "58)  Seg&uacute;n el Modelo Oculto de Markov (HMM), se&ntilde;ale la respuesta CORRECTA:";
 choices[57]= new Array();
 choices[57][0] = "No est&aacute; basada en una m&aacute;quina de estados finito.";
 choices[57][1] = "Las transiciones entre estados constituyen el proceso oculto.";
 choices[57][2] = "Los vectores de par&aacute;metros que se producen en cada estado es el proceso observable.";
 choices[57][3] = "Las respuestas b y c son correctas.";
 answers[57] = 3;
 units[57] = ['81'];
 blocks[57] = ['B2'];
 comments[57] = "Id Pregunta: 10749. ";
 preguntaids[57] = 10749


//  Id pregunta: 3444 Año de creación de pregunta: 2006
 questions[58]= "59)  Se&ntilde;alar la respuesta falsa:";
 choices[58]= new Array();
 choices[58][0] = "HTML es un subconjunto de SGML";
 choices[58][1] = "XHTML es un subconjunto de XML";
 choices[58][2] = "XML es una ampliaci&oacute;n de HTML";
 choices[58][3] = "RTF es un subconjunto de SGML";
 answers[58] = 2;
 units[58] = ['74'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 3444. ";
 preguntaids[58] = 3444


//  Id pregunta: 321 Año de creación de pregunta: 2016
 questions[59]= "60)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[59]= new Array();
 choices[59][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[59][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[59][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[59][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[59] = 3;
 units[59] = ['11'];
 blocks[59] = ['A2'];
 comments[59] = "Id Pregunta: 321. Presupuestos generales";
 preguntaids[59] = 321


//  Id pregunta: 2696 Año de creación de pregunta: 2002
 questions[60]= "61)  CICS";
 choices[60]= new Array();
 choices[60][0] = "Es un ordenador con un conjunto de instrucciones complejo";
 choices[60][1] = "Es un servidor de directorio x500";
 choices[60][2] = "Es un monitor transaccional";
 choices[60][3] = "Es un servidor de directorio LDAP";
 answers[60] = 2;
 units[60] = ['51'];
 blocks[60] = ['B2'];
 comments[60] = "Id Pregunta: 2696. ";
 preguntaids[60] = 2696


//  Id pregunta: 501 Año de creación de pregunta: 2016
 questions[61]= "62)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado";
 choices[61]= new Array();
 choices[61][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[61][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[61][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[61][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[61] = 2;
 units[61] = ['22'];
 blocks[61] = ['A4'];
 comments[61] = "Id Pregunta: 501. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[61] = 501


//  Id pregunta: 96 Año de creación de pregunta: 2016
 questions[62]= "63)  El T&iacute;tulo Segundo de la Constituci&oacute;n Espa&ntilde;ola tiene:";
 choices[62]= new Array();
 choices[62][0] = "Diez art&iacute;culos.";
 choices[62][1] = "Nueve art&iacute;culos.";
 choices[62][2] = "Once art&iacute;culos.";
 choices[62][3] = "Ocho art&iacute;culos.";
 answers[62] = 0;
 units[62] = ['1'];
 blocks[62] = ['A1'];
 comments[62] = "Id Pregunta: 96. Constituci&oacute;n de 1978";
 preguntaids[62] = 96


//  Id pregunta: 10120 Año de creación de pregunta: 2015
 questions[63]= "64)  Respecto al Registro Electr&oacute;nico Com&uacute;n (REC), se&ntilde;ale la respuesta correcta:";
 choices[63]= new Array();
 choices[63][0] = "El REC debe admitir cualquier solicitud, escrito o comunicaci&oacute;n dirigida a cualquiera de las Administraciones P&uacute;blicas espa&ntilde;olas.";
 choices[63][1] = "La presentaci&oacute;n de solicitudes dirigidas a entidades que no hayan sido activadas en el REC se tendr&aacute; por no realizada.";
 choices[63][2] = "El REC podr&aacute; ser habilitado para la remisi&oacute;n, recepci&oacute;n e intercambio de solicitudes de la competencia de las Administraciones Auton&oacute;micas y Locales, en la forma que se determine en los correspondientes Convenios.";
 choices[63][3] = "En coordinaci&oacute;n con las Administraciones destinatarias, el Ministerio de Hacienda y Administraciones P&uacute;blicas ser&aacute; responsable de la custodia y manejo de todos los ficheros generados por el REC.";
 answers[63] = 2;
 units[63] = ['47'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 10120. Examen TIC A1 2014";
 preguntaids[63] = 10120


//  Id pregunta: 4051 Año de creación de pregunta: 2003
 questions[64]= "65)  Las actividades de la interfaz de Gesti&oacute;n de Proyectos en METRICA V3, se clasifican en:";
 choices[64]= new Array();
 choices[64][0] = "Actividades de inicio; actividades de seguimiento y control; actividades de finalizaci&oacute;n.";
 choices[64][1] = "Actividades de estimaci&oacute;n; actividades de dise&ntilde;o y construcci&oacute;n; actividades de presentaci&oacute;n.";
 choices[64][2] = "Actividades de planificaci&oacute;n, actividades de organizaci&oacute;n; actividades de evaluaci&oacute;n.";
 choices[64][3] = "Actividades de planificaci&oacute;n, actividades de estudio, actividades de organizaci&oacute;n, actividades de evaluaci&oacute;n.";
 answers[64] = 0;
 units[64] = ['91'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 4051. Junta Andaluc&iacute;a";
 preguntaids[64] = 4051


//  Id pregunta: 1751 Año de creación de pregunta: 2016
 questions[65]= "66)  Se&ntilde;ale cu&aacute;l es el puerto por defecto de SMTP:";
 choices[65]= new Array();
 choices[65][0] = "21";
 choices[65][1] = "23";
 choices[65][2] = "25";
 choices[65][3] = "80";
 answers[65] = 2;
 units[65] = ['109'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 1751. ";
 preguntaids[65] = 1751


//  Id pregunta: 8526 Año de creación de pregunta: 2013
 questions[66]= "67)  Seg&uacute;n el RD Legislativo de contratos del sector p&uacute;blico:";
 choices[66]= new Array();
 choices[66][0] = "La garant&iacute;a provisional es obligatoria.";
 choices[66][1] = "La garant&iacute;a definitiva ser&aacute; un 5% del valor presupuestado del contrato.";
 choices[66][2] = "Todas las cuant&iacute;as de las garant&iacute;as ir&aacute;n adecuadamente motivadas.";
 choices[66][3] = "Ninguna de las anteriores";
 answers[66] = 3;
 units[66] = ['10'];
 blocks[66] = ['A2'];
 comments[66] = "Id Pregunta: 8526. La garant&iacute;a provisional es potestativa. La garant&iacute;a definitiva es de un 5 por 100 del importe de adjudicaci&oacute;n. La garant&iacute;a definitiva no requiere motivaci&oacute;n.";
 preguntaids[66] = 8526


//  Id pregunta: 9588 Año de creación de pregunta: 2014
 questions[67]= "68)  Indicar cu&aacute;l de los siguientes NO es un modo de transferencia de datos utilizado por el protocolo HDLC (High Level Data Link Control):";
 choices[67]= new Array();
 choices[67][0] = "Modo de respuesta normal (NRM, Normal Response Mode).";
 choices[67][1] = "Modo balanceado as&iacute;ncrono (ABM, Asynchronous Balanced Mode).";
 choices[67][2] = "Modo de respuesta as&iacute;ncrono (ARM, Asynchronous Response Mode).";
 choices[67][3] = "Modo balanceado s&iacute;ncrono (SBM, Synchronous Balanced Mode).";
 answers[67] = 3;
 units[67] = ['105'];
 blocks[67] = ['B4'];
 comments[67] = "Id Pregunta: 9588. TIC A2 2013 libre";
 preguntaids[67] = 9588


//  Id pregunta: 8267 Año de creación de pregunta: 2011
 questions[68]= "69)  Un ciudadano quiere remitir un escrito con una sugerencia de servicio a un organismo con oficinas de atenci&oacute;n al p&uacute;blico, &iquest;est&aacute; contemplada en la Ley 39/2015, del procedimiento administrativo com&uacute;n de las administraciones p&uacute;blicas, la posibilidad de que remita ese escrito, con un formato libre, a trav&eacute;s del registro electr&oacute;nico del organismo destinatario del mismo?";
 choices[68]= new Array();
 choices[68][0] = "Si, est&aacute; prevista tal posibilidad para cualquier solicitud, escrito o comunicaci&oacute;n dirigida a cualquier &oacute;rgano o entidad del &aacute;mbito de la administraci&oacute;n titular del registro";
 choices[68][1] = "No, porque s&oacute;lo se prev&eacute; la recepci&oacute;n de documentos normalizados, que est&eacute;n predeterminados en la normativa de creaci&oacute;n del registro, nunca un escrito no normalizado como el del enunciado";
 choices[68][2] = "Se prev&eacute; tal recepci&oacute;n, pero con car&aacute;cter informativo &uacute;nicamente, debiendo complementar el envi&oacute; con el escrito en papel, a trav&eacute;s de un registro f&iacute;sico, en un plazo definido en la normativa de desarrollo";
 choices[68][3] = "S&iacute;, porque cumple con el requisito indispensable de tratarse del registro del organismo destinatario del registro";
 answers[68] = 0;
 units[68] = ['7'];
 blocks[68] = ['A2'];
 comments[68] = "Id Pregunta: 8267. Examen TIC A2 2010 interna";
 preguntaids[68] = 8267


//  Id pregunta: 1462 Año de creación de pregunta: 2016
 questions[69]= "70)  Se&ntilde;ale c&oacute;mo se clasifica la situaci&oacute;n de dependencia conforme a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[69]= new Array();
 choices[69][0] = "En dos grados, cada uno dividido en dos niveles.";
 choices[69][1] = "En dos grados, cada uno dividido en tres niveles.";
 choices[69][2] = "En tres grados, cada uno dividido en dos niveles.";
 choices[69][3] = "En tres grados, cada uno dividido en tres niveles.";
 answers[69] = 2;
 units[69] = ['14'];
 blocks[69] = ['A3'];
 comments[69] = "Id Pregunta: 1462. ";
 preguntaids[69] = 1462


//  Id pregunta: 10543 Año de creación de pregunta: 2015
 questions[70]= "71)  Qu&eacute; roles est&aacute;n sujetos al r&eacute;gimen sancionador de la Ley Org&aacute;nica de Protecci&oacute;n de DAtos";
 choices[70]= new Array();
 choices[70][0] = "Responsable del tratamiento";
 choices[70][1] = "Responsable del fichero";
 choices[70][2] = "Ambos";
 choices[70][3] = "Ninguno";
 answers[70] = 2;
 units[70] = ['35'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 10543. ";
 preguntaids[70] = 10543


//  Id pregunta: 8858 Año de creación de pregunta: 2013
 questions[71]= "72)  En general, no se entiende por m&eacute;trica software:";
 choices[71]= new Array();
 choices[71][0] = "Una asignaci&oacute;n de valor a un atributo de una entidad propia del software, ya sea un producto o un proceso";
 choices[71][1] = "Una caracter&iacute;stica o atributo propio del software o del proceso de construcci&oacute;n del software";
 choices[71][2] = "Una medida cuantitativa del grado en el que un sistema, un componente o un proceso posee un determinado atributo";
 choices[71][3] = "Una medida o conjunto de medidas destinadas a conocer o estimar el tama&ntilde;o u otra caracter&iacute;stica de un software o un sistema de informaci&oacute;n";
 answers[71] = 1;
 units[71] = ['94'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 8858. ";
 preguntaids[71] = 8858


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[72]= "73)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[72]= new Array();
 choices[72][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[72][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[72][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[72][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[72] = 0;
 units[72] = ['11'];
 blocks[72] = ['A2'];
 comments[72] = "Id Pregunta: 300. Presupuestos generales";
 preguntaids[72] = 300


//  Id pregunta: 8042 Año de creación de pregunta: 2011
 questions[73]= "74)  Seg&uacute;n el Real Decreto 1671/2009, las sedes electr&oacute;nicas de la Administraci&oacute;n General del Estado se crean:";
 choices[73]= new Array();
 choices[73][0] = "Por Orden Ministerial o Resoluci&oacute;n del titular del organismo.";
 choices[73][1] = "Por Real Decreto del Presidente del Gobierno.";
 choices[73][2] = "Por Orden Conjunta del Ministerio de la Presidencia y del Ministerio del que se trate.";
 choices[73][3] = "Por Acuerdo del Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 answers[73] = 0;
 units[73] = ['43'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 8042. Examen TIC A2 2010";
 preguntaids[73] = 8042


//  Id pregunta: 1030 Año de creación de pregunta: 2016
 questions[74]= "75)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[74]= new Array();
 choices[74][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[74][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[74][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[74][3] = "Todas son correctas.";
 answers[74] = 3;
 units[74] = ['4', '7', '8', '9'];
 blocks[74] = ['A1', 'A2'];
 comments[74] = "Id Pregunta: 1030. Ley 40/2015";
 preguntaids[74] = 1030


