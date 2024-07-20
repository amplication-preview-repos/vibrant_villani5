import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProfileList } from "./profile/ProfileList";
import { ProfileCreate } from "./profile/ProfileCreate";
import { ProfileEdit } from "./profile/ProfileEdit";
import { ProfileShow } from "./profile/ProfileShow";
import { VideoList } from "./video/VideoList";
import { VideoCreate } from "./video/VideoCreate";
import { VideoEdit } from "./video/VideoEdit";
import { VideoShow } from "./video/VideoShow";
import { VideoBundleList } from "./videoBundle/VideoBundleList";
import { VideoBundleCreate } from "./videoBundle/VideoBundleCreate";
import { VideoBundleEdit } from "./videoBundle/VideoBundleEdit";
import { VideoBundleShow } from "./videoBundle/VideoBundleShow";
import { UserAffiliateClickList } from "./userAffiliateClick/UserAffiliateClickList";
import { UserAffiliateClickCreate } from "./userAffiliateClick/UserAffiliateClickCreate";
import { UserAffiliateClickEdit } from "./userAffiliateClick/UserAffiliateClickEdit";
import { UserAffiliateClickShow } from "./userAffiliateClick/UserAffiliateClickShow";
import { UserVideoPurchaseList } from "./userVideoPurchase/UserVideoPurchaseList";
import { UserVideoPurchaseCreate } from "./userVideoPurchase/UserVideoPurchaseCreate";
import { UserVideoPurchaseEdit } from "./userVideoPurchase/UserVideoPurchaseEdit";
import { UserVideoPurchaseShow } from "./userVideoPurchase/UserVideoPurchaseShow";
import { VideoCategoryList } from "./videoCategory/VideoCategoryList";
import { VideoCategoryCreate } from "./videoCategory/VideoCategoryCreate";
import { VideoCategoryEdit } from "./videoCategory/VideoCategoryEdit";
import { VideoCategoryShow } from "./videoCategory/VideoCategoryShow";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { DiscountCodeList } from "./discountCode/DiscountCodeList";
import { DiscountCodeCreate } from "./discountCode/DiscountCodeCreate";
import { DiscountCodeEdit } from "./discountCode/DiscountCodeEdit";
import { DiscountCodeShow } from "./discountCode/DiscountCodeShow";
import { CertificateList } from "./certificate/CertificateList";
import { CertificateCreate } from "./certificate/CertificateCreate";
import { CertificateEdit } from "./certificate/CertificateEdit";
import { CertificateShow } from "./certificate/CertificateShow";
import { UserCertificateList } from "./userCertificate/UserCertificateList";
import { UserCertificateCreate } from "./userCertificate/UserCertificateCreate";
import { UserCertificateEdit } from "./userCertificate/UserCertificateEdit";
import { UserCertificateShow } from "./userCertificate/UserCertificateShow";
import { QuizList } from "./quiz/QuizList";
import { QuizCreate } from "./quiz/QuizCreate";
import { QuizEdit } from "./quiz/QuizEdit";
import { QuizShow } from "./quiz/QuizShow";
import { QuizResultList } from "./quizResult/QuizResultList";
import { QuizResultCreate } from "./quizResult/QuizResultCreate";
import { QuizResultEdit } from "./quizResult/QuizResultEdit";
import { QuizResultShow } from "./quizResult/QuizResultShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"WebService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Profile"
          list={ProfileList}
          edit={ProfileEdit}
          create={ProfileCreate}
          show={ProfileShow}
        />
        <Resource
          name="Video"
          list={VideoList}
          edit={VideoEdit}
          create={VideoCreate}
          show={VideoShow}
        />
        <Resource
          name="VideoBundle"
          list={VideoBundleList}
          edit={VideoBundleEdit}
          create={VideoBundleCreate}
          show={VideoBundleShow}
        />
        <Resource
          name="UserAffiliateClick"
          list={UserAffiliateClickList}
          edit={UserAffiliateClickEdit}
          create={UserAffiliateClickCreate}
          show={UserAffiliateClickShow}
        />
        <Resource
          name="UserVideoPurchase"
          list={UserVideoPurchaseList}
          edit={UserVideoPurchaseEdit}
          create={UserVideoPurchaseCreate}
          show={UserVideoPurchaseShow}
        />
        <Resource
          name="VideoCategory"
          list={VideoCategoryList}
          edit={VideoCategoryEdit}
          create={VideoCategoryCreate}
          show={VideoCategoryShow}
        />
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="DiscountCode"
          list={DiscountCodeList}
          edit={DiscountCodeEdit}
          create={DiscountCodeCreate}
          show={DiscountCodeShow}
        />
        <Resource
          name="Certificate"
          list={CertificateList}
          edit={CertificateEdit}
          create={CertificateCreate}
          show={CertificateShow}
        />
        <Resource
          name="UserCertificate"
          list={UserCertificateList}
          edit={UserCertificateEdit}
          create={UserCertificateCreate}
          show={UserCertificateShow}
        />
        <Resource
          name="Quiz"
          list={QuizList}
          edit={QuizEdit}
          create={QuizCreate}
          show={QuizShow}
        />
        <Resource
          name="QuizResult"
          list={QuizResultList}
          edit={QuizResultEdit}
          create={QuizResultCreate}
          show={QuizResultShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
