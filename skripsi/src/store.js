import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VuexPersistance from 'vuex-persist'

Vue.use(Vuex, axios)

//var urlsparql = "http://ejxpro.com:8090/fuseki/seni_pertunjukan/query"
var urlsparql = "https://app.alunalun.info/fuseki/seni_pertunjukan"
//var urlsparql = "http://156.67.217.237/repositories/seni-pertunjukan-indonesia"
//var urlsparql = "http://localhost:3030/seni"
var dbpedia = "https://cors-anywhere.herokuapp.com/http://id.dbpedia.org/sparql"

export default new Vuex.Store({
  state: {
    id:[],
    showUpacara:[],
    detailUpacara:[],
    detailWayang:[],
    contohUpacara:[],
    contohPengukuhan:[],
    contohKematian:[],
    getDaerah:[],
    getDeskripsi:[],
    getImage:[],
    tahapanUpacara:[],
    getDeskripsiDbpedia:[],
    getFullDbpedia:[],
    visualisasi:[],
    //new query
    individualWayangKulit:[],
    individualWayangKayu:[],
    individualWayangOrang:[],
    individualSendratari:[],
    individualDramatariBertopeng:[],
    individualDramatariOpera:[],
    individualDramatariTanpaTopeng:[],
    individualTariKlasik:[],
    individualTariRakyat:[],
    individualTariKreasiBaru:[],
    individualTeater:[],
    getAbstractDbpedia:[],
    fullDetail:[],
    fullDetailUpacara:[],
    moreInfoDaerah:[],
    moreInfoAksesoris:[],
    moreInfoTokoh:[],
    moreInfoCerita:[],
    moreInfoProperti:[],
    moreInfoGerakTari:[],
    homeQueryRand:[],
    dbpediaDaerah:[],
    alatMusik:[],
    individualDaerah:[],
    classOfSeni:[],
    search:[],
    individualTokoh:[],
    individualCerita:[],
    individualProperti:[],
    individualAksesoris:[],
    individualGerakTari:[],
    individualUpacara:[],
    individualPengukuhan:[],
    individualPernikahan:[],
    individualTradisi:[],
    get_individuals: [],
    
  },

  plugins:[new VuexPersistance().plugin],
  mutations: {
    ShowUpacara(state, hasil) {
      state.showUpacara = hasil
    },
    ContohUpacara(state, hasil){
      state.contohUpacara = hasil
    },
    ContohPengukuhan(state, hasil){
      state.contohPengukuhan = hasil
    },
    ContohKematian(state, hasil){
      state.contohKematian = hasil
    },
    DetailUpacara(state, hasil){
      state.detailUpacara = hasil
    },
    GetDaerah(state, hasil){
      state.getDaerah = hasil
    },
    GetDeskripsi(state, hasil){
      state.getDeskripsi = hasil
    },
    GetImage(state, hasil){
      state.getImage = hasil
    },
    TahapanUpacara(state, hasil){
      state.tahapanUpacara = hasil
    },
    GetDeskripsiDbpedia(state, hasil){
      state.getDeskripsiDbpedia = hasil
    },
    GetFullDbpedia(state, hasil){
      state.getFullDbpedia = hasil
    },
    Visualisasi(state, hasil){
      state.visualisasi = hasil
    },
    // new query
    IndividualWayangKulit(state, hasil){
      state.individualWayangKulit = hasil
    },
    IndividualWayangKayu(state, hasil){
      state.individualWayangKayu = hasil
    },
    IndividualWayangOrang(state, hasil){
      state.individualWayangOrang = hasil
    },
    IndividualSendratari(state, hasil){
      state.individualSendratari = hasil
    },
    IndividualDramatariBertopeng(state, hasil){
      state.individualDramatariBertopeng = hasil
    },
    IndividualDramatariOpera(state, hasil){
      state.individualDramatariOpera = hasil
    },
    IndividualDramatariTanpaTopeng(state, hasil){
      state.individualDramatariTanpaTopeng = hasil
    },
    IndividualTariKlasik(state, hasil){
      state.individualTariKlasik = hasil
    },
    IndividualTariRakyat(state, hasil){
      state.individualTariRakyat = hasil
    },
    IndividualTariKreasiBaru(state, hasil){
      state.individualTariKreasiBaru = hasil
    },
    IndividualTeater(state, hasil){
      state.individualTeater = hasil
    },
    GetAbstractDbpedia(state, hasil){
      state.getAbstractDbpedia = hasil
    },
    FullDetail(state, hasil){
      state.fullDetail = hasil
    },
    MoreInfoDaerah(state, hasil){
      state.moreInfoDaerah = hasil
    },
    MoreInfoAksesoris(state, hasil){
      state.moreInfoAksesoris = hasil
    },
    MoreInfoTokoh(state, hasil){
      state.moreInfoTokoh = hasil
    },
    MoreInfoCerita(state, hasil){
      state.moreInfoCerita = hasil
    },
    MoreInfoProperti(state, hasil){
      state.moreInfoProperti = hasil
    },
    MoreInfoGerakTari(state, hasil){
      state.moreInfoGerakTari = hasil
    },
    HomeQueryRand(state, hasil){
      state.homeQueryRand = hasil
    },
    DbpediaDaerah(state, hasil){
      state.dbpediaDaerah = hasil
    },
    AlatMusik(state, hasil){
      state.alatMusik = hasil
    },
    IndividualDaerah(state, hasil){
      state.individualDaerah = hasil
    },
    ClassOfSeni(state, hasil){
      state.classOfSeni = hasil
    },
    FullDetailUpacara(state, hasil){
      state.fullDetailUpacara = hasil
    },
    Search(state, hasil){
      state.search = hasil
    },
    IndividualTokoh(state, hasil){
      state.individualTokoh = hasil
    },
    IndividualCerita(state, hasil){
      state.individualCerita = hasil
    },
    IndividualProperti(state, hasil){
      state.individualProperti = hasil
    },
    IndividualAksesoris(state, hasil){
      state.individualAksesoris = hasil
    },
    IndividualGerakTari(state, hasil){
      state.individualGerakTari = hasil
    },
    // this mutation is for UPACARA
    IndividualUpacara(state, hasil){
      state.individualUpacara = hasil
    },
    IndividualPengukuhan(state, hasil){
      state.individualPengukuhan = hasil
    },
    IndividualPernikahan(state, hasil){
      state.individualPernikahan = hasil
    },
    GET_INDIVIDUALS(state, hasil) {
      state.get_individuals = hasil
    },
    IndividualTradisi(state, hasil){
      state.individualTradisi = hasil
    }
  },
  actions: {
    contohUpacara({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX owl: <http://www.w3.org/2002/07/owl#>
            PREFIX seni: <http://alunalun.info/ontology/senipertunjukan#>
            PREFIX schema:<http://schema.org/>
            PREFIX dbo:<http://dbpedia.org/ontology/>
            PREFIX foaf:<http://xmlns.com/foaf/0.1/> 

            SELECT ?subject ?namaUpacara ?image
            WHERE {
              ?subject rdf:type seni:Upacara.
              ?subject rdfs:label ?namaUpacara.
              OPTIONAL{?subject schema:image ?image}
            }
            LIMIT 25 `
        }
      }).then((response) => {
          const result = response.data.results.bindings

          let hasil = result
          //console.log(response);
          //console.log(hasil);

          commit('ContohUpacara', hasil)
      })
    },
    contohPengukuhan({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX owl: <http://www.w3.org/2002/07/owl#>
            PREFIX seni: <http://alunalun.info/ontology/senipertunjukan#>
            PREFIX schema:<http://schema.org/>
            PREFIX dbo:<http://dbpedia.org/ontology/>
            PREFIX foaf:<http://xmlns.com/foaf/0.1/> 

            SELECT ?subject ?namaPengukuhan
            WHERE {
              ?subject rdf:type seni:Pengukuhan.
              ?subject rdfs:label ?namaPengukuhan
            }
            LIMIT 25 `
        }
      }).then((response) => {
          const result = response.data.results.bindings

          let hasil = result
          //console.log(response);
          //console.log(hasil);

          commit('ContohPengukuhan', hasil)
      })
    },
    contohKematian({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX owl: <http://www.w3.org/2002/07/owl#>
            PREFIX seni: <http://alunalun.info/ontology/senipertunjukan#>
            PREFIX schema:<http://schema.org/>
            PREFIX dbo:<http://dbpedia.org/ontology/>
            PREFIX foaf:<http://xmlns.com/foaf/0.1/> 

            SELECT ?subject ?namaKematian
            WHERE {
              ?subject rdf:type seni:Pengukuhan.
              ?subject rdfs:label ?namaKematian
            }
            LIMIT 25 `
        }
      }).then((response) => {
          const result = response.data.results.bindings

          let hasil = result
          //console.log(response);
          //console.log(hasil);

          commit('Contohkematian', hasil)
      })
    },
    detailUpacara({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX :  <http://alunalun.info/ontology/senipertunjukan#>
          PREFIX schema: <http://schema.org/>
          PREFIX dbo: <http://dbpedia.org/ontology/>
          PREFIX foaf: <http://xmlns.com/foaf/0.1/> 
          
          SELECT DISTINCT ?idU ?namaU ?tujuanU ?asalDaerah ?labelDaerah ?deskripsi ?tahapanU ?image
          WHERE {
            ?idU rdfs:label "${id}".
            ?idU rdfs:label ?namaU.
            {?idU :asalDaerah ?asalDaerah.
            ?asalDaerah dbo:location ?labelDaerah}
            UNION	{?idU :Bertujuan ?tujuanU}
            UNION {?idU :Deskripsi ?deskripsi}
            UNION {?idU :Tahapan_Upacara ?tahapanU}
            UNION {?idU schema:image ?image}
          }
          LIMIT 30`
        }
      }).then((response) => {
          const result = response.data.results.bindings

          let hasil = result
          //console.log(response);
          //console.log(hasil);
          //console.log(id);
          

          commit('DetailUpacara', hasil)
      })
    },
    //EOF query upacara

    // Query untuk halaman detail

    //mengambil daerah tiap daerah
    getDaerah({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX owl: <http://www.w3.org/2002/07/owl#>
            PREFIX seni: <http://alunalun.info/ontology/senipertunjukan#>
            PREFIX schema:<http://schema.org/>
            PREFIX dbo:<http://dbpedia.org/ontology/>
            PREFIX foaf:<http://xmlns.com/foaf/0.1/> 

            SELECT DISTINCT ?idU ?asalDaerah ?labelDaerah
          WHERE {
            ?idU rdfs:label "${id}".
            ?idU seni:asalDaerah ?asalDaerah.
  			    ?asalDaerah dbo:location ?labelDaerah }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings

          let hasil = result
          //console.log(response);
          //console.log(hasil);
          //console.log(id);
          

          commit('GetDaerah', hasil)
      })
    },
    getDeskripsi({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX owl: <http://www.w3.org/2002/07/owl#>
            PREFIX seni: <http://alunalun.info/ontology/senipertunjukan#>
            PREFIX schema:<http://schema.org/>
            PREFIX dbo:<http://dbpedia.org/ontology/>
            PREFIX foaf:<http://xmlns.com/foaf/0.1/> 

            SELECT DISTINCT ?idU ?deskripsi
          WHERE {
            ?idU rdfs:label "${id}".
           
            ?idU seni:Deskripsi ?deskripsi 
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings

          let hasil = result
          //console.log(response);
         // console.log(hasil);
        // console.log(id);
          

          commit('GetDeskripsi', hasil)
      })
    },
    getDeskripsiDbpedia({ commit }, id){
      axios.get(dbpedia, {
        params: {
          query: `
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          
         
            SELECT DISTINCT ?idU ?deskripsi
          WHERE {
            ?idU rdfs:label "${id}"@id.
            ?idU dbpedia-owl:abstract ?deskripsi
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings

          let hasil = result
          console.log(response);
          //console.log(hasil);
          console.log(id);
          

          commit('GetDeskripsiDbpedia', hasil)
      })
    },
    getFullDbpedia({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX seni: <http://alunalun.info/ontology/senipertunjukan#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX foaf:<http://xmlns.com/foaf/0.1/>
          
          SELECT DISTINCT ?idU ?namaLabel ?asalDaerah ?labelDaerah ?getCerita ?cerita ?getProperti ?properti
                          ?getTokoh ?tokoh
          WHERE {
            ?idU rdfs:label "${id}".
            {?idU rdfs:label ?namaLabel}
            UNION
            {
                ?idU seni:asalDaerah ?asalDaerah.
            ?asalDaerah dbo:location ?labelDaerah }
            UNION {
                 ?idU seni:menggunakanCerita ?getCerita.
             ?getCerita rdfs:label ?cerita}
            UNION {
            ?idU seni:memilikiPropertiPertunjukan ?getProperti.
             ?getProperti rdfs:label ?properti.}
            UNION {
              ?idU seni:memilikiTokoh ?getTokoh.
              ?getTokoh rdfs:label ?tokoh}
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings

          let hasil = result
          console.log(response);
          //console.log(hasil);
          console.log(id);
          

          commit('GetFullDbpedia', hasil)
      })
    },

    getImage({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX owl: <http://www.w3.org/2002/07/owl#>
            PREFIX seni: <http://alunalun.info/ontology/senipertunjukan#>
            PREFIX schema:<http://schema.org/>
            PREFIX dbo:<http://dbpedia.org/ontology/>
            PREFIX foaf:<http://xmlns.com/foaf/0.1/> 

            SELECT DISTINCT ?idU ?image ?SumberGambar ?linkGambar
          WHERE {
            ?idU rdfs:label "${id}".
            ?idU seni:SumberGambar ?SumberGambar.
            ?idU schema:image ?image.
  			    ?idU seni:linkGambar ?linkGambar
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings

          let hasil = result
         //console.log(response);
         // console.log(hasil);
          //console.log(id);
          

          commit('GetImage', hasil)
      })
    },

    tahapanUpacara({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX owl: <http://www.w3.org/2002/07/owl#>
            PREFIX seni: <http://alunalun.info/ontology/senipertunjukan#>
            PREFIX schema:<http://schema.org/>
            PREFIX dbo:<http://dbpedia.org/ontology/>
            PREFIX foaf:<http://xmlns.com/foaf/0.1/> 

            SELECT DISTINCT ?idU ?tahapanU
          WHERE {
            ?idU rdfs:label "${id}".
           
            ?idU seni:Tahapan_Upacara ?tahapanU
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings

          let hasil = result
         //console.log(response);
          //console.log(hasil);
          //console.log(id);
          

          commit('TahapanUpacara', hasil)
      })
    },
    visualisasi_({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>


                  SELECT ?domains ?propertys ?ranges ?labelsub ?label
                  WHERE {
                    {?property rdf:type owl:ObjectProperty.
                     ?property rdfs:domain ?domain;
                              rdfs:range ?range.
                    ?domain rdfs:label ?domains.
                    ?property rdfs:label ?propertys.
                    ?range rdfs:label ?ranges.}
                    UNION
                    {
                     ?subject rdf:type owl:Class.
                     ?subject rdfs:label ?label.
                     ?subject rdfs:subClassOf ?subclass.
                     ?subclass rdfs:label ?labelsub.
                    }
                  }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings

          let hasil = result
         //console.log(response);
          console.log(hasil);
          //console.log(id);
          

          commit('Visualisasi', hasil)
      })
    },
    individualWayangKulit({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>
          
          select ?idClass ?labelIndividu ?image ?dboDbpedia
          where{
            ?idClass a :WayangKulit.
            ?idClass rdfs:label ?labelIndividu.
            OPTIONAL{?idClass schema:image ?image}
            OPTIONAL{?idClass dbo:linkdata ?dboDbpedia}
            
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings
          let hasil = result
          commit('IndividualWayangKulit', hasil)
      })
    },

    individualWayangKayu({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>
          
          select ?idClass ?labelIndividu ?image ?dboDbpedia
          where{
            ?idClass a :WayangKayu.
            ?idClass rdfs:label ?labelIndividu.
            OPTIONAL{?idClass schema:image ?image}
            OPTIONAL{?idClass dbo:linkdata ?dboDbpedia}
            
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings
          let hasil = result
          commit('IndividualWayangKayu', hasil)
      })
    },
    individualWayangOrang({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>
          
          select ?idClass ?labelIndividu ?image ?dboDbpedia
          where{
            ?idClass a :WayangOrang.
            ?idClass rdfs:label ?labelIndividu.
            OPTIONAL{?idClass schema:image ?image}
            OPTIONAL{?idClass dbo:linkdata ?dboDbpedia}
            
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings
          let hasil = result
          commit('IndividualWayangOrang', hasil)
      })
    },
    individualSendratari({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>
          
          select ?idClass ?labelIndividu ?image ?dboDbpedia
          where{
            ?idClass a :SendraTari.
            ?idClass rdfs:label ?labelIndividu.
            OPTIONAL{?idClass schema:image ?image}
            OPTIONAL{?idClass dbo:linkdata ?dboDbpedia}
            
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings
          let hasil = result
          commit('IndividualSendratari', hasil)
      })
    },
    individualDramatariBertopeng({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>
          
          select ?idClass ?labelIndividu ?image ?dboDbpedia
          where{
            ?idClass a :DramatariBertopeng.
            ?idClass rdfs:label ?labelIndividu.
            OPTIONAL{?idClass schema:image ?image}
            OPTIONAL{?idClass dbo:linkdata ?dboDbpedia}
            
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings
          let hasil = result
          commit('IndividualDramatariBertopeng', hasil)
      })
    },
    individualDramatariOpera({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>
          
          select ?idClass ?labelIndividu ?image ?dboDbpedia
          where{
            ?idClass a :DramatariOpera.
            ?idClass rdfs:label ?labelIndividu.
            OPTIONAL{?idClass schema:image ?image}
            OPTIONAL{?idClass dbo:linkdata ?dboDbpedia}
            
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings
          let hasil = result
          commit('IndividualDramatariOpera', hasil)
      })
    },
    individualDramatariTanpaTopeng({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>
          
          select ?idClass ?labelIndividu ?image ?dboDbpedia
          where{
            ?idClass a :DramatariTanpaTopeng.
            ?idClass rdfs:label ?labelIndividu.
            OPTIONAL{?idClass schema:image ?image}
            OPTIONAL{?idClass dbo:linkdata ?dboDbpedia}
            
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings
          let hasil = result
          commit('IndividualDramatariTanpaTopeng', hasil)
      })
    },
    individualTariKlasik({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>
          
          select ?idClass ?labelIndividu ?image ?dboDbpedia
          where{
            ?idClass a :TariKlasik.
            ?idClass rdfs:label ?labelIndividu.
            OPTIONAL{?idClass schema:image ?image}
            OPTIONAL{?idClass dbo:linkdata ?dboDbpedia}
            
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings
          let hasil = result
          commit('IndividualTariKlasik', hasil)
      })
    },
    individualTariRakyat({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>
          
          select ?idClass ?labelIndividu ?image ?dboDbpedia
          where{
            ?idClass a :TariRakyat.
            ?idClass rdfs:label ?labelIndividu.
            OPTIONAL{?idClass schema:image ?image}
            OPTIONAL{?idClass dbo:linkdata ?dboDbpedia}
            
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings
          let hasil = result
          commit('IndividualTariRakyat', hasil)
      })
    },
    individualTariKreasiBaru({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>
          
          select ?idClass ?labelIndividu ?image ?dboDbpedia
          where{
            ?idClass a :TariKreasiBaru.
            ?idClass rdfs:label ?labelIndividu.
            OPTIONAL{?idClass schema:image ?image}
            OPTIONAL{?idClass dbo:linkdata ?dboDbpedia}
            
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings
          let hasil = result
          commit('IndividualTariKreasiBaru', hasil)
      })
    },
    individualTeater({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>
          
          select ?idClass ?labelIndividu ?image ?dboDbpedia
          where{
            ?idClass a :Teater.
            ?idClass rdfs:label ?labelIndividu.
            OPTIONAL{?idClass schema:image ?image}
            OPTIONAL{?idClass dbo:linkdata ?dboDbpedia}
            
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings
          let hasil = result
          commit('IndividualTeater', hasil)
      })
    },
    getAbstractDbpedia({ commit }, id){
      axios.get(dbpedia, {
        params: {
          query: `
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          
         
            SELECT DISTINCT ?idU ?abstract
          WHERE {
            ?idU rdfs:label "${id}"@id.
            ?idU dbpedia-owl:abstract ?abstract
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings

          let hasil = result
          console.log(response);
          console.log(hasil);
          console.log(id);
          

          commit('GetAbstractDbpedia', hasil)
      })
    },
    fullDetail({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>
                    
          select ?id ?labelIndividu ?image ?dboDbpedia ?asalDaerah
            ?labelDaerah ?properti ?labelProperti ?cerita ?labelCerita
            ?tokoh ?labelTokoh ?upacara ?labelUpacara ?bahasa ?labelBahasa
            ?pengiring ?labelPengiring ?gerakTari ?labelGerakTari ?deskripsi
            ?aksesoris ?labelAksesoris ?dboDaerah ?sumberBuku
          where{
                      
          ?id rdfs:label "${id}".
          {?id rdfs:label ?labelIndividu}
          UNION{?id :asalDaerah ?asalDaerah.
              ?asalDaerah dbo:location ?labelDaerah.
        ?asalDaerah dbo:linkdata ?dboDaerah}
          UNION{?id schema:image ?image}
          UNION{?id dbo:linkdata ?dboDbpedia}
          UNION{?id :menggunakanProperti ?properti.
              ?properti rdfs:label ?labelProperti}
          UNION{?id :menggunakanCerita ?cerita.
              ?cerita rdfs:label ?labelCerita}
          UNION{?id :memilikiTokoh ?tokoh.
              ?tokoh rdfs:label ?labelTokoh}
          UNION{?id :bagianDari ?upacara.
              ?upacara rdfs:label ?labelUpacara}
          UNION{?id :menggunakanBahasa ?bahasa.
              ?bahasa rdfs:label ?labelBahasa}
          UNION{?id :memilikiPengiring ?pengiring.
              ?pengiring rdfs:label ?labelPengiring}
          UNION{?id :menggunakanGerakTari ?gerakTari.
              ?gerakTari rdfs:label ?labelGerakTari}
          UNION{?id rdfs:comment ?deskripsi}
          UNION{?id :menggunakanAksesoris ?aksesoris.
            ?aksesoris rdfs:label ?labelAksesoris}
            UNION{?id :SumberBuku ?sumberBuku}
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings

          let hasil = result
          //console.log(response);
          //console.log(hasil);
          //console.log(id);
          

          commit('FullDetail', hasil)
      })
    },
    fullDetailUpacara({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>
                    
          select ?id ?labelIndividu ?asalDaerah
            ?labelDaerah ?properti ?labelProperti ?pengiring ?labelPengiring ?deskripsi
            ?aksesoris ?labelAksesoris ?dboDaerah ?makanan ?labelMakanan ?prosesiUpacara
            ?sumberBuku
          where{
                      
          ?id rdfs:label "${id}".
          {?id rdfs:label ?labelIndividu}
          UNION{?id :asalDaerah ?asalDaerah.
              	?asalDaerah dbo:location ?labelDaerah.
        		?asalDaerah dbo:linkdata ?dboDaerah}
          UNION{?id dbo:linkdata ?dboDbpedia}
          UNION{?id :menggunakanProperti ?properti.
              	?properti rdfs:label ?labelProperti}
          UNION{?id rdfs:comment ?deskripsi}
          UNION{?id :menggunakanAksesoris ?aksesoris.
              ?aksesoris rdfs:label ?labelAksesoris}
          UNION{?id :ProsesiUpacara ?prosesiUpacara}
          UNION{?id :SumberBuku ?sumberBuku}
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings

          let hasil = result
          console.log(response);
          //console.log(hasil);
          //console.log(id);
          

          commit('FullDetailUpacara', hasil)
      })
    },
    moreInfoDaerah({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>
          select distinct ?location ?idDaerah ?labelLocation ?labelIndividu 
						  ?linkdata ?subject ?label_class
          WHERE{ 
            ?location dbo:location "${id}".
  			    ?location dbo:location ?labelLocation.
            ?idDaerah rdfs:subClassOf* :SeniPertunjukan.
            ?idDaerah rdfs:label ?label_class.
            ?subject a ?idDaerah.
            ?subject :asalDaerah ?location.
            ?subject rdfs:label ?labelIndividu.
            OPTIONAL{?subject dbo:linkdata ?linkdata}  
  			}  
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings

          let hasil = result
         console.log(response);
         console.log(hasil);
         console.log(id);
          

          commit('MoreInfoDaerah', hasil)
      })
    },
    moreInfoAksesoris({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>                      
          select distinct ?idAksesoris ?aksesoris ?comment ?labelAksesoris
                  ?labelIndividu ?linkdata ?subject ?label_class
          WHERE{ 
            ?aksesoris rdfs:label "${id}".
            ?aksesoris rdfs:label ?labelAksesoris.
            ?idAksesoris rdfs:subClassOf* :SeniPertunjukan.
  		  	  ?idAksesoris rdfs:label ?label_class.
  		  	  ?subject a ?idAksesoris.
  			    ?subject :menggunakanAksesoris ?aksesoris.
  		  	  ?subject rdfs:label ?labelIndividu.
  			    OPTIONAL{?subject dbo:linkdata ?linkdata}
  		  	  OPTIONAL{?aksesoris rdfs:comment ?comment.}
            }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings

         let hasil = result
         console.log(response);
         console.log(hasil);
         console.log(id);
         commit('MoreInfoAksesoris', hasil)
      })
    },
    moreInfoTokoh({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>                      
          select distinct ?idTokoh ?tokoh ?comment ?labelTokoh
                            ?labelIndividu ?linkdata ?subject ?label_class
          WHERE{ 
          	?tokoh rdfs:label "${id}".
  		    ?tokoh rdfs:label ?labelTokoh.
  		    ?idTokoh rdfs:subClassOf* :SeniPertunjukan.
          ?idTokoh rdfs:label ?label_class.
          ?subject a ?idTokoh.
          ?subject :memilikiTokoh ?tokoh.
          ?subject rdfs:label ?labelIndividu
          OPTIONAL{?subject dbo:linkdata ?linkdata}
          OPTIONAL{?tokoh rdfs:comment ?comment.}
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings

         let hasil = result
         //console.log(response);
         //console.log(hasil);
         //console.log(id);
         commit('MoreInfoTokoh', hasil)
      })
    },
    moreInfoCerita({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>                      
          select distinct ?idCerita ?cerita ?comment ?labelCerita
                ?labelIndividu ?linkdata ?subject ?label_class
          WHERE{ 
          ?cerita rdfs:label "${id}".
          ?cerita rdfs:label ?labelCerita.
          ?idCerita rdfs:subClassOf* :SeniPertunjukan.
          ?idCerita rdfs:label ?label_class.
          ?subject a ?idCerita.
          ?subject :menggunakanCerita ?cerita.
          ?subject rdfs:label ?labelIndividu.
          OPTIONAL{?subject dbo:linkdata ?linkdata}
          OPTIONAL{?cerita rdfs:comment ?comment.}
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings

         let hasil = result
         //console.log(response);
         //console.log(hasil);
         //console.log(id);
         commit('MoreInfoCerita', hasil)
      })
    },
    moreInfoProperti({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>                      
          select distinct ?idProperti ?properti ?comment ?labelProperti
                ?labelIndividu ?linkdata ?subject ?label_class
          WHERE{ 
          ?properti rdfs:label "${id}".
          ?properti rdfs:label ?labelProperti.
          ?idProperti rdfs:subClassOf* :SeniPertunjukan.
          ?idProperti rdfs:label ?label_class.
          ?subject a ?idProperti.
          ?subject :menggunakanProperti ?properti.
          ?subject rdfs:label ?labelIndividu.
          OPTIONAL{?subject dbo:linkdata ?linkdata}
          OPTIONAL{?properti rdfs:comment ?comment.}
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings

         let hasil = result
         //console.log(response);
         //console.log(hasil);
         //console.log(id);
         commit('MoreInfoProperti', hasil)
      })
    },
    moreInfoGerakTari({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>                      
          select distinct ?idGerakTari ?gerakTari ?comment ?labelGerakTari
                ?labelIndividu ?linkdata ?subject ?label_class
          WHERE{ 
          ?gerakTari rdfs:label "${id}".
          ?gerakTari rdfs:label ?labelGerakTari.
          ?idGerakTari rdfs:subClassOf* :SeniPertunjukan.
          ?idGerakTari rdfs:label ?label_class.
          ?subject a ?idGerakTari.
          ?subject :menggunakanGerakTari ?gerakTari.
          ?subject rdfs:label ?labelIndividu.
          OPTIONAL{?subject dbo:linkdata ?linkdata}
          OPTIONAL{?gerakTari rdfs:comment ?comment.} 
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings

         let hasil = result
         //console.log(response);
         //console.log(hasil);
         //console.log(id);
         commit('MoreInfoGerakTari', hasil)
      })
    },
    homeQueryRand({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>                      
          select distinct ?id ?idClass ?labelIndividu ?label ?linkdata ?image 
          WHERE{ 
  			      ?id rdfs:subClassOf* :SeniPertunjukan.
  			      ?id rdfs:label ?label.
              ?idClass a ?id.
 		          ?idClass rdfs:label ?labelIndividu.
  			      ?idClass dbo:linkdata ?linkdata.
  			      OPTIONAL{?idClass schema:image ?image}
          }
		      ORDER BY RAND() LIMIT 6
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings

         let hasil = result
         //console.log(response);
         //console.log(hasil);
         //console.log(id);
         commit('HomeQueryRand', hasil)
      })
    },
    dbpediaDaerah({ commit },id){
      axios.get(dbpedia, {
        params: {
          query: `
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          SELECT DISTINCT ?idU ?abstract
          WHERE {
            ?idU rdfs:label "${id}"@id.
            ?idU dbpedia-owl:abstract ?abstract
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings

          let hasil = result
          console.log(response);
          console.log(hasil);
          console.log(id);
          

          commit('DbpediaDaerah', hasil)
      })
    },
    alatMusik({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>
          
          select ?idClass ?individu ?labelPengiring ?dboDbpedia
          where{
            ?idClass rdfs:label "${id}".
            ?idClass :memilikiPengiring ?individu.
            ?individu rdfs:label ?labelPengiring.
            OPTIONAL{?idClass dbo:linkdata ?dboDbpedia}   
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings

          let hasil = result
          console.log(response);
          console.log(hasil);
          console.log(id);
          

          commit('AlatMusik', hasil)
      })
    },
    individualDaerah({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#> 
                    select distinct ?idClass ?labelIndividu ?dboDaerah
                    where{
                      ?idClass a :Provinsi.
                      ?idClass dbo:location ?labelIndividu.
                      ?a :asalDaerah ?idClass.
  			              ?idClass dbo:linkdata ?dboDaerah    
                    }
                    ORDER BY ASC(?labelIndividu)
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings
          let hasil = result
          commit('IndividualDaerah', hasil)
      })
    },
    classOfSeni({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#> 
                    select ?idClass ?labelIndividu ?dboDaerah
                    where{
                      ?idClass rdfs:subClassOf :SeniPertunjukan.
                      ?idClass rdfs:label ?labelIndividu	
                    }
          ORDER BY ASC(?labelIndividu)
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings
          let hasil = result
          commit('ClassOfSeni', hasil)
      })
    },
    search({ commit }, id){
      axios.get(urlsparql, {
        params: {
          query: `
          PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>                      
          select distinct ?subject ?labelIndividu ?label_class ?dbolinkdata
          WHERE{ 
 		           ?individual rdfs:subClassOf* :SeniPertunjukan.
  		         ?individual rdfs:label ?label_class.
               ?subject a ?individual.
 		           ?subject rdfs:label ?labelIndividu.
  		     filter (regex(?labelIndividu,"${id}","i"))
  		     OPTIONAL{?subject dbo:linkdata ?dbolinkdata.}
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings

          let hasil = result
          console.log(response);
          console.log(hasil);
          console.log(id);
          

          commit('Search', hasil)
      })
    },
    individualTokoh({ commit },id){
      axios.get(urlsparql, {
        params: {
          query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>
          select ?idClass ?individu ?labelIndividu ?dboDbpedia
          where{
            ?idClass rdfs:label "${id}".
            ?idClass :memilikiTokoh ?individu.
            ?individu rdfs:label ?labelIndividu.
            OPTIONAL{?idClass dbo:linkdata ?dboDbpedia}   
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings
          let hasil = result
          commit('IndividualTokoh', hasil)
      })
    },
    individualCerita({ commit },id){
      axios.get(urlsparql, {
        params: {
          query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>
          select ?idClass ?individu ?labelIndividu ?dboDbpedia
          where{
            ?idClass rdfs:label "${id}".
            ?idClass :menggunakanCerita ?individu.
            ?individu rdfs:label ?labelIndividu.
            OPTIONAL{?idClass dbo:linkdata ?dboDbpedia}   
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings
          let hasil = result
          commit('IndividualCerita', hasil)
      })
    },
    individualProperti({ commit },id){
      axios.get(urlsparql, {
        params: {
          query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>
          select ?idClass ?individu ?labelProperti ?dboDbpedia
          where{
            ?idClass rdfs:label "${id}".
            ?idClass :menggunakanProperti ?individu.
            ?individu rdfs:label ?labelProperti.
            OPTIONAL{?idClass dbo:linkdata ?dboDbpedia}   
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings
          let hasil = result
          commit('IndividualProperti', hasil)
      })
    },
    individualAksesoris({ commit },id){
      axios.get(urlsparql, {
        params: {
          query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>
          select ?idClass ?individu ?labelAksesoris ?dboDbpedia
          where{
            ?idClass rdfs:label "${id}".
            ?idClass :menggunakanAksesoris ?individu.
            ?individu rdfs:label ?labelAksesoris.
            OPTIONAL{?idClass dbo:linkdata ?dboDbpedia}   
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings
          let hasil = result
          commit('IndividualAksesoris', hasil)
      })
    },
    individualGerakTari({ commit },id){
      axios.get(urlsparql, {
        params: {
          query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>
          select ?idClass ?individu ?labelGerakTari ?dboDbpedia
          where{
            ?idClass rdfs:label "${id}".
            ?idClass :menggunakanGerakTari ?individu.
            ?individu rdfs:label ?labelGerakTari.
            OPTIONAL{?idClass dbo:linkdata ?dboDbpedia}   
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings
          let hasil = result
          commit('IndividualGerakTari', hasil)
      })
    },
    
    //this query for Upacara page
    individualUpacara({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>
          
          select ?idClass ?labelIndividu ?image ?dboDbpedia
          where{
            ?idClass a :Upacara.
            ?idClass rdfs:label ?labelIndividu.
            OPTIONAL{?idClass schema:image ?image}
            OPTIONAL{?idClass dbo:linkdata ?dboDbpedia}
            
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings
          let hasil = result
          commit('IndividualUpacara', hasil)
      })
    },
    individualPengukuhan({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>
          
          select ?idClass ?labelIndividu ?image ?dboDbpedia
          where{
            ?idClass a :Pengukuhan.
            ?idClass rdfs:label ?labelIndividu.
            OPTIONAL{?idClass schema:image ?image}
            OPTIONAL{?idClass dbo:linkdata ?dboDbpedia}
            
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings
          let hasil = result
          commit('IndividualPengukuhan', hasil)
      })
    },
    individualPernikahan({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>
          
          select ?idClass ?labelIndividu ?image ?dboDbpedia
          where{
            ?idClass a/rdfs:subClassOf :Pernikahan.
            ?idClass rdfs:label ?labelIndividu.
            OPTIONAL{?idClass schema:image ?image}
            OPTIONAL{?idClass dbo:linkdata ?dboDbpedia}
            
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings
          let hasil = result
          commit('IndividualPernikahan', hasil)
      })
    },
    individualTradisi({ commit }){
      axios.get(urlsparql, {
        params: {
          query: `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX owl: <http://www.w3.org/2002/07/owl#>
          PREFIX schema:<http://schema.org/>
          PREFIX dbo:<http://dbpedia.org/ontology/>
          PREFIX : <http://alunalun.info/ontology/senipertunjukan#>
          
          select ?idClass ?labelIndividu ?image ?dboDbpedia
          where{
            ?idClass a :UpacaraTradisi.
            ?idClass rdfs:label ?labelIndividu.
            OPTIONAL{?idClass schema:image ?image}
            OPTIONAL{?idClass dbo:linkdata ?dboDbpedia}
            
          }
            `
        }
      }).then((response) => {
          const result = response.data.results.bindings
          let hasil = result
          commit('IndividualTradisi', hasil)
      })
    },
    getIndividuals({ commit }, id) {
      axios.get(urlsparql, {
          params: {
              query: `
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX schema: <http://schema.org/>
                PREFIX : <http://alunalun.info/ontology/senipertunjukan#>
                PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                PREFIX owl: <http://www.w3.org/2002/07/owl#>
                PREFIX foaf: <http://xmlns.com/foaf/0.1/>

                SELECT *
                WHERE {
                    ?subject rdfs:label "${id}".
                    ?individuals a ?subject.
                    ?individuals rdfs:label ?label.
                }`
          }
      }).then((response) => {
          const result = response.data.results.bindings
          let hasil = result
          commit('GET_INDIVIDUALS', hasil)
      })
    },

  }
})
