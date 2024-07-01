/**
 * adding the hash_salt
 */
$settings['hash_salt'] = 'DRUPALHASH';

/**
 * define sync directory
 */
$settings['config_sync_directory'] = '/var/www/drupal/config';

/**
 * set the trusted hosts
 */
$settings['trusted_host_patterns'] = [
  DRUPALTRUSTEDHOST
];

/**
 * database settings
 */

$databases['test']['default'] = array (
  'database' => 'DBNAME',
  'username' => 'DBUSER',
  'password' => 'DBPSWD',
  'prefix' => 'DBPREFIX',
  'host' => 'DBHOST',
  'port' => 'DBPORT',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
  'driver' => 'mysql',
  'init_commands' => [
    'isolation_level' => 'SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED',
  ],
);

$databases['default']['default'] = array (
  'database' => 'sites/default/files/.ht.sqlite',
  'prefix' => '',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\sqlite',
  'driver' => 'sqlite',
);


$settings['config_sync_directory'] = 'sites/default/files/config_MUIfMBFA6vLi3C4Q9SWBIXSt26LzjMrFppWmrAbIkDmByB0rbfombIqMU6GkfuH32WEKMAG0zw/sync';

