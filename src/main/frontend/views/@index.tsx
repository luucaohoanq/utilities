import {ViewConfig} from '@vaadin/hilla-file-router/types.js';
import {useSignal} from '@vaadin/hilla-react-signals';
import {Button} from '@vaadin/react-components/Button.js';
import {Notification} from '@vaadin/react-components/Notification.js';
import {CountStringService} from 'Frontend/generated/endpoints.js';
import {TextArea} from "@vaadin/react-components";

export const config: ViewConfig = {
  menu: {order: 0, icon: 'line-awesome/svg/globe-solid.svg'},
  title: 'Count String',
};

export default function HelloWorldView() {
  const name = useSignal('');

  return (
      <>
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <TextArea className={'w-full'}
              label="Enter String"
              onValueChanged={(e) => {
                name.value = e.detail.value;
              }}
          />
          <Button
              onClick={async () => {
                const serverResponse = await CountStringService.count(name.value);
                const notification = Notification.show(serverResponse);
                notification.setAttribute('theme', 'success');
              }}
          >
            Submit
          </Button>
        </section>
      </>
  );
}
